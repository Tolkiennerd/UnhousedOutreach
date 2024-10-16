using UnhousedOutreach.Core.SiteManagement;
using UnhousedOutreach.Database.MySql;

namespace UnhousedOutreach.Database.OutreachTeams;

public class OutreachTeamsMySqlRepository(string connectionString) : Repository(connectionString)
{
    public async Task<IEnumerable<OutreachTeam>> GetOutreachTeams()
    {
        // GET NEIGHBORS.
        var reader = await ExecuteReader(OutreachTeamsMySqlQueries.GetOutreachTeams);
        IList<OutreachTeam> outreachTeams = [];
        while (reader.Read())
        {
            outreachTeams.Add(new()
            {
                OutreachTeamId = (int)reader["OutreachTeamId"],
                Name = (string)reader["Name"],
            });
        }
        return outreachTeams.AsEnumerable();
    }
    
    public async Task SetOutreachTeam(OutreachTeam outreachTeam)
    {
        Dictionary<string, object?> parameters = new()
        {
            {"@OutreachTeamId", outreachTeam.OutreachTeamId},
            {"@Name", outreachTeam.Name},
        };
        await ExecuteNonQuery(OutreachTeamsMySqlQueries.SetOutreachTeam, parameters);
    }
}
