using UnhousedOutreach.Core.Mapping;
using UnhousedOutreach.Core.SupportServices;
using UnhousedOutreach.Database.MySql;

namespace UnhousedOutreach.Database.SupportServiceOrganizations;

public class SupportServiceOrganizationsMySqlRepository(string connectionString) : Repository(connectionString)
{
    #region Get Methods
    public IEnumerable<Organization> GetSupportServiceOrganizations(int outreachTeamId)
    {
        // GET NEIGHBORS.
        Dictionary<string, object?> parameters = new() {{"@OutreachTeamId", outreachTeamId}};
        var reader = ExecuteReader(SupportServiceOrganizationsMySqlQueries.GetSupportServiceOrganizations, parameters);
        IList<Organization> organizations = [];
        while (reader.Read())
        {
            organizations.Add(new()
            {
                SupportServiceOrganizationId = (int)reader["SupportServiceOrganizationId"],
                Name = Parser.GetNullableValue<string?>(reader, "Name"),
                Comments = Parser.GetNullableStringValueFromByteArray(reader, "Comments"),
            });
        }
        return organizations.AsEnumerable();
    }
    #endregion

    #region Set Methods
    public async Task SetSupportServiceOrganization(Location location, int outreachTeamId)
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
            {"@Comments", location.Comments},
            {"@OutreachTeamId", outreachTeamId},
        };
        await ExecuteNonQuery(SupportServiceOrganizationsMySqlQueries.SetSupportServiceOrganization, parameters);
    }
    #endregion
}
