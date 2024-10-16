using Microsoft.AspNetCore.Mvc;
using UnhousedOutreach.Core.Neighbors.HousingInsecure;
using UnhousedOutreach.Database.Tents;

namespace UnhousedOutreach.Api;

[Route("api/")]
[ApiController]
public class TentsController : ControllerBase
{
    private readonly TentsMySqlRepository repository;

    public TentsController(IConfiguration configuration)
    {
        var connectionStrings = configuration.GetSection("ConnectionStrings").Get<ConnectionStrings>();
        var unhousedOutreachConnectionString = connectionStrings?.UnhousedOutreachConnectionString ?? string.Empty;
        repository = new(unhousedOutreachConnectionString);
    }

    [HttpGet("tents")]
    public async Task<IEnumerable<Tent>> GetTents([FromQuery(Name = "otid")]int outreachTeamId)
    {
        return await repository.GetTents(outreachTeamId);
    }

    [HttpPut("tent")]
    public async Task SetTent(Tent tent, [FromQuery(Name = "otid")]int outreachTeamId)
    {
        await repository.SetTent(tent, outreachTeamId);
    }
}
