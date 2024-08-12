using Microsoft.AspNetCore.Mvc;
using UnhousedOutreach.Core.SiteManagement;
using UnhousedOutreach.Database.OutreachTeams;

namespace UnhousedOutreach.Api;

[Route("api/")]
[ApiController]
public class OutreachTeamsController : ControllerBase
{
    private readonly OutreachTeamsMySqlRepository repository;

    public OutreachTeamsController(IConfiguration configuration)
    {
        var connectionStrings = configuration.GetSection("ConnectionStrings").Get<ConnectionStrings>();
        var unhousedOutreachConnectionString = connectionStrings?.UnhousedOutreachConnectionString ?? string.Empty;
        repository = new(unhousedOutreachConnectionString);
    }

    [HttpGet("outreach-teams")]
    public async Task<IEnumerable<OutreachTeam>> GetOutreachTeams()
    {
        return await repository.GetOutreachTeams();
    }

    [HttpPut("outreach-team")]
    public async Task SetOutreachTeam(OutreachTeam outreachTeam)
    {
        await repository.SetOutreachTeam(outreachTeam);
    }
}
