using Microsoft.AspNetCore.Mvc;
using UnhousedOutreach.Core.SupportServices;
using UnhousedOutreach.Database.CaseManagers;

namespace UnhousedOutreach.Api;

[Route("api/")]
[ApiController]
public class CaseManagersController : ControllerBase
{
    #region Private Fields
    private readonly CaseManagersMySqlRepository repository;
    #endregion

    #region Constructor
    public CaseManagersController(IConfiguration configuration)
    {
        var connectionStrings = configuration.GetSection("ConnectionStrings").Get<ConnectionStrings>();
        var unhousedOutreachConnectionString = connectionStrings?.UnhousedOutreachConnectionString ?? string.Empty;
        repository = new(unhousedOutreachConnectionString);
    }
    #endregion

    #region Public Methods
    [HttpGet("case-managers")]
    public IEnumerable<CaseManager> GetCaseManagers(int outreachTeamId) => repository.GetCaseManagers(outreachTeamId);

    [HttpPost("case-manager")]
    public async Task SetCaseManager(CaseManager caseManager, int outreachTeamId) => await repository.SetCaseManager(caseManager, outreachTeamId);
    #endregion
}
