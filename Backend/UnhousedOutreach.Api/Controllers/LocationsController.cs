using Microsoft.AspNetCore.Mvc;
using UnhousedOutreach.Core.Mapping;
using UnhousedOutreach.Database.Locations;

namespace UnhousedOutreach.Api;

[Route("api/")]
[ApiController]
public class LocationsController : ControllerBase
{
    #region Private Fields
    private readonly LocationsMySqlRepository repository;
    #endregion

    #region Constructor
    public LocationsController(IConfiguration configuration)
    {
        var connectionStrings = configuration.GetSection("ConnectionStrings").Get<ConnectionStrings>();
        var unhousedOutreachConnectionString = connectionStrings?.UnhousedOutreachConnectionString ?? string.Empty;
        repository = new(unhousedOutreachConnectionString);
    }
    #endregion

    #region Public Methods
    [HttpGet("locations")]
    public IEnumerable<Location> GetLocations([FromQuery(Name = "otid")]int outreachTeamId) =>
        repository.GetLocations(outreachTeamId);

    [HttpPost("location")]
    public async Task SetLocation(Location location, [FromQuery(Name = "otid")]int outreachTeamId) =>
        await repository.SetLocation(location, outreachTeamId);
    #endregion
}
