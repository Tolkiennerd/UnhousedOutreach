using UnhousedOutreach.Core.SupportServices;
using UnhousedOutreach.Database.MySql;

namespace UnhousedOutreach.Database.CaseManagers;

public class CaseManagersMySqlRepository(string connectionString) : Repository(connectionString)
{
    public async Task<IEnumerable<CaseManager>> GetCaseManagers(int outreachTeamId)
    {
        // GET NEIGHBORS.
        Dictionary<string, object?> parameters = new() {{"@OutreachTeamId", outreachTeamId}};
        var reader = await ExecuteReader(CaseManagersMySqlQueries.GetCaseManagers, parameters);
        IList<CaseManager> caseManagers = [];
        while (reader.Read())
        {
            caseManagers.Add(new()
            {
                CaseManagerId = (int)reader["CaseManagerId"],
                FirstName = Parser.GetNullableValue<string?>(reader, "FirstName"),
                LastName = Parser.GetNullableValue<string?>(reader, "LastName"),
                PreferredName = Parser.GetNullableValue<string?>(reader, "PreferredName"),
                GenderId = Parser.GetNullableValue<int?>(reader, "GenderId"),
                PhoneNumber = Parser.GetNullableValue<string?>(reader, "PhoneNumber"),
                EmailAddress = Parser.GetNullableValue<string?>(reader, "EmailAddress"),
                Organization = reader["SupportServiceOrganizationId"] == DBNull.Value ? null : new()
                {
                    SupportServiceOrganizationId = (int)reader["SupportServiceOrganizationId"],
                    Name = Parser.GetNullableValue<string?>(reader, "Name")
                },
                Comments = Parser.GetNullableStringValueFromByteArray(reader, "Comments"),
            });
        }
        return caseManagers.AsEnumerable();
    }
    
    public async Task SetCaseManager(CaseManager caseManager, int outreachTeamId)
    {
        Dictionary<string, object?> parameters = new()
        {
            {"@CaseManagerId", caseManager.CaseManagerId},
            {"@FirstName", caseManager.FirstName},
            {"@LastName", caseManager.LastName},
            {"@PreferredName", caseManager.PreferredName},
            {"@GenderId", caseManager.GenderId},
            {"@PhoneNumber", caseManager.PhoneNumber},
            {"@EmailAddress", caseManager.EmailAddress},
            {"@SupportServiceOrganizationId", caseManager.Organization?.SupportServiceOrganizationId},
            {"@Comments", caseManager.Comments},
            {"@OutreachTeamId", outreachTeamId},
        };
        await ExecuteNonQuery(CaseManagersMySqlQueries.SetCaseManager, parameters);
    }
}
