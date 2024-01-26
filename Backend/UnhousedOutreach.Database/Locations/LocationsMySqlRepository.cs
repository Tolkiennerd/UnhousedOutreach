using UnhousedOutreach.Core.Mapping;
using UnhousedOutreach.Database.MySql;

namespace UnhousedOutreach.Database.Locations;

public class LocationsMySqlRepository(string connectionString) : Repository(connectionString)
{
    #region Get Methods
    public IEnumerable<Location> GetLocations(int outreachTeamId)
    {
        // GET NEIGHBORS.
        Dictionary<string, object?> parameters = new() {{"@OutreachTeamId", outreachTeamId}};
        var reader = ExecuteReader(LocationsMySqlQueries.GetLocations, parameters);
        IList<Location> locations = [];
        while (reader.Read())
        {
            locations.Add(new()
            {
                LocationId = (int)reader["LocationId"],
                LocationTypeId = Parser.GetNullableValue<int?>(reader, "LocationTypeId"),
                Latitude = Parser.GetNullableValue<decimal?>(reader, "Latitude"),
                Longitude = Parser.GetNullableValue<decimal?>(reader, "Longitude"),
                Address = Parser.GetNullableValue<string?>(reader, "Address"),
                City = Parser.GetNullableValue<string?>(reader, "City"),
                State = Parser.GetNullableEnumValue<State>(reader, "State"),
                ZipCode = Parser.GetNullableValue<string?>(reader, "ZipCode"),
                IsLegal = Parser.GetNullableBooleanValue(reader, "IsLegal"),
                ArrivalDate = Parser.GetNullableValue<DateTime?>(reader, "ArrivalDate"),
                Comments = Parser.GetNullableStringValueFromByteArray(reader, "Comments"),
            });
        }
        return locations.AsEnumerable();
    }
    #endregion

    #region Set Methods
    public async Task SetLocation(Location location, int outreachTeamId)
    {
        Dictionary<string, object?> parameters = new()
        {
            {"@LocationId", location.LocationId},
            {"@LocationTypeId", location.LocationTypeId},
            {"@Latitude", location.Latitude},
            {"@Longitude", location.Longitude},
            {"@Address", location.Address},
            {"@City", location.City},
            {"@State", location.State},
            {"@ZipCode", location.ZipCode},
            {"@IsLegal", location.IsLegal},
            {"@ArrivalDate", location.ArrivalDate},
            {"@Comments", location.Comments},
            {"@OutreachTeamId", outreachTeamId},
        };
        await ExecuteNonQuery(LocationsMySqlQueries.SetLocation, parameters);
    }
    #endregion
}
