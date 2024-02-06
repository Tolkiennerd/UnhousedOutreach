using Microsoft.AspNetCore.Mvc;
using UnhousedOutreach.Core.Neighbors.HousingInsecure;
using UnhousedOutreach.Database.Tents;

namespace UnhousedOutreach.Api;

[Route("api/")]
[ApiController]
public class TentsController : ControllerBase
{
    #region Private Fields
    private readonly TentsMySqlRepository repository;
    #endregion

    #region Constructor
    public TentsController(IConfiguration configuration)
    {
        var connectionStrings = configuration.GetSection("ConnectionStrings").Get<ConnectionStrings>();
        var unhousedOutreachConnectionString = connectionStrings?.UnhousedOutreachConnectionString ?? string.Empty;
        repository = new(unhousedOutreachConnectionString);
    }
    #endregion

    #region Public Methods
    [HttpGet("tents")]
    public async Task<IEnumerable<Tent>> GetTents([FromQuery(Name = "otid")]int outreachTeamId)
    {
        return await repository.GetTents(outreachTeamId);
    }

    [HttpPost("tent")]
    public async Task SetTent(Tent tent, [FromQuery(Name = "otid")]int outreachTeamId)
    {
        await repository.SetTent(tent, outreachTeamId);
    }
    #endregion
}
