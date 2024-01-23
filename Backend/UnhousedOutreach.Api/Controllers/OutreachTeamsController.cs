using Microsoft.AspNetCore.Mvc;
using UnhousedOutreach.Core.SiteManagement;
using UnhousedOutreach.Database.OutreachTeams;

namespace UnhousedOutreach.Api;

[Route("api/")]
[ApiController]
public class OutreachTeamsController : ControllerBase
{
    #region Private Fields
    private readonly OutreachTeamsMySqlRepository repository;
    #endregion

    #region Constructor
    public OutreachTeamsController(IConfiguration configuration)
    {
        var connectionStrings = configuration.GetSection("ConnectionStrings").Get<ConnectionStrings>();
        var unhousedOutreachConnectionString = connectionStrings?.UnhousedOutreachConnectionString ?? string.Empty;
        repository = new(unhousedOutreachConnectionString);
    }
    #endregion

    #region Public Methods
    [HttpGet("outreach-teams")]
    public IEnumerable<OutreachTeam> GetOutreachTeams() => repository.GetOutreachTeams();

    [HttpPost("outreach-team")]
    public async Task SetOutreachTeam(OutreachTeam outreachTeam) => await repository.SetOutreachTeam(outreachTeam);
    #endregion
}
