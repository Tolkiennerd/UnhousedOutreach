using UnhousedOutreach.Core.Mapping;
using UnhousedOutreach.Core.Neighbors.HousingInsecure;
using UnhousedOutreach.Database.MySql;

namespace UnhousedOutreach.Database.Tents;

public class TentsMySqlRepository(string connectionString) : Repository(connectionString)
{
    #region Get Methods
    public IEnumerable<Tent> GetTents(int outreachTeamId)
    {
        // GET TENTS.
        Dictionary<string, object?> parameters = new() {{"@OutreachTeamId", outreachTeamId}};
        var reader = ExecuteReader(TentsMySqlQueries.GetTents, parameters);
        IList<Tent> tents = [];
        while (reader.Read())
        {
            tents.Add(new()
            {
                TentId = (int)reader["TentId"],
                PersonSize = Parser.GetNullableValue<int?>(reader, "PersonSize"),
                TentConditionId = Parser.GetNullableValue<int?>(reader, "TentConditionId"),
                TarpCount = Parser.GetNullableValue<int?>(reader, "TarpCount"),
                TentUsageId = Parser.GetNullableValue<int?>(reader, "TentUsageId"),
                Comments = Parser.GetNullableStringValueFromByteArray(reader, "Comments"),
                Location = reader["LocationId"] == DBNull.Value ? null : new()
                {
                    LocationId = (int)reader["LocationId"],
                    LocationTypeId = Parser.GetNullableValue<int?>(reader, "LocationTypeId"),
                    Latitude = Parser.GetNullableValue<decimal?>(reader, "Latitude"),
                    Longitude = Parser.GetNullableValue<decimal?>(reader, "Longitude"),
                    Address = Parser.GetNullableValue<string?>(reader, "Address"),
                    City = Parser.GetNullableValue<string?>(reader, "City"),
                    State = Parser.GetEnumValue<State>(reader, "State"),
                    ZipCode = Parser.GetNullableValue<string?>(reader, "ZipCode"),
                    IsLegal = Parser.GetNullableBooleanValue(reader, "IsLegal"),
                    Comments = Parser.GetNullableStringValueFromByteArray(reader, "LocationComments")
                }
            });
        }
        return tents.AsEnumerable();
    }
    #endregion

    #region Set Methods
    public async Task SetTent(Tent tent, int outreachTeamId)
    {
        Dictionary<string, object?> parameters = new()
        {
            {"@TentId", tent.TentId},
            {"@LocationId", tent.Location?.LocationId},
            {"@PersonSize", tent.PersonSize},
            {"@TentConditionId", tent.TentConditionId},
            {"@TarpCount", tent.TarpCount},
            {"@TentUsageId", tent.TentUsageId},
            {"@Comments", tent.Comments},
            {"@OutreachTeamId", outreachTeamId},
        };
        await ExecuteNonQuery(TentsMySqlQueries.SetTent, parameters);
    }
    #endregion
}