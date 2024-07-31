using Microsoft.AspNetCore.Mvc;
using UnhousedOutreach.Core.SupportServices;
using UnhousedOutreach.Database.CaseManagers;

namespace UnhousedOutreach.Api;

[Route("api/")]
[ApiController]
public class CaseManagersController : ControllerBase
{
    private readonly CaseManagersMySqlRepository repository;

    public CaseManagersController(IConfiguration configuration)
    {
        var connectionStrings = configuration.GetSection("ConnectionStrings").Get<ConnectionStrings>();
        var unhousedOutreachConnectionString = connectionStrings?.UnhousedOutreachConnectionString ?? string.Empty;
        repository = new(unhousedOutreachConnectionString);
    }

    [HttpGet("case-managers")]
    public async Task<IEnumerable<CaseManager>> GetCaseManagers([FromQuery(Name = "otid")]int outreachTeamId)
    {
        return await repository.GetCaseManagers(outreachTeamId);
    }

    [HttpPut("case-manager")]
    public async Task SetCaseManager([FromBody]CaseManager caseManager, [FromQuery(Name = "otid")]int outreachTeamId)
    {
        await repository.SetCaseManager(caseManager, outreachTeamId);
    }
}
