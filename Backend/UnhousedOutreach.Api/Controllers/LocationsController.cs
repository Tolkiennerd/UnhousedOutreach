using Microsoft.AspNetCore.Mvc;
using UnhousedOutreach.Core.Mapping;
using UnhousedOutreach.Database.Locations;

namespace UnhousedOutreach.Api;

[Route("api/")]
[ApiController]
public class LocationsController : ControllerBase
{
    private readonly LocationsMySqlRepository repository;

    public LocationsController(IConfiguration configuration)
    {
        var connectionStrings = configuration.GetSection("ConnectionStrings").Get<ConnectionStrings>();
        var unhousedOutreachConnectionString = connectionStrings?.UnhousedOutreachConnectionString ?? string.Empty;
        repository = new(unhousedOutreachConnectionString);
    }

    [HttpGet("locations")]
    public async Task<IEnumerable<Location>> GetLocations([FromQuery(Name = "otid")]int outreachTeamId)
    {
        return await repository.GetLocations(outreachTeamId);
    }

    [HttpGet("locations-with-neighbors")]
    public async Task<IEnumerable<LocationWithNeighbor>> GetLocationsWithNeighbors([FromQuery(Name = "otid")]int outreachTeamId)
    {
        return await repository.GetLocationsWithNeighbors(outreachTeamId);
    }

    [HttpPut("location")]
    public async Task SetLocation([FromBody]Location location, [FromQuery(Name = "otid")]int outreachTeamId)
    {
        await repository.SetLocation(location, outreachTeamId);
    }
}
