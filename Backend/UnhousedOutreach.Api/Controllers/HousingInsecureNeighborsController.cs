using Microsoft.AspNetCore.Mvc;
using UnhousedOutreach.Core.Neighbors.HousingInsecure;
using UnhousedOutreach.Database.HousingInsecureNeighbors;

namespace UnhousedOutreach.Api;

[Route("api/")]
[ApiController]
public class HousingInsecureNeighborsController : ControllerBase
{
    #region Private Fields
    private readonly HousingInsecureNeighborsMySqlRepository repository;
    #endregion

    #region Constructor
    public HousingInsecureNeighborsController(IConfiguration configuration)
    {
        var connectionStrings = configuration.GetSection("ConnectionStrings").Get<ConnectionStrings>();
        var unhousedOutreachConnectionString = connectionStrings?.UnhousedOutreachConnectionString ?? string.Empty;
        repository = new(unhousedOutreachConnectionString);
    }
    #endregion

    #region Public Methods
    [HttpGet("housing-insecure-neighbors")]
    public async Task<IEnumerable<HousingInsecureNeighbor>> GetHousingInsecureNeighbors(
        [FromQuery(Name = "otid")]int outreachTeamId)
    {
        return await repository.GetHousingInsecureNeighbors(outreachTeamId);
    }

    [HttpPost("housing-insecure-neighbor")]
    public async Task SetHousingInsecureNeighbor(
        [FromBody]HousingInsecureNeighbor neighbor, 
        [FromQuery(Name = "otid")]int outreachTeamId)
    {
        await repository.SetHousingInsecureNeighbor(neighbor, outreachTeamId);
    }

    [HttpPost("housing-insecure-neighbor-disability")]
    public async Task SetHousingInsecureNeighborDisability(
        [FromBody]int disabilityId, 
        [FromQuery(Name = "hinid")]int housingInsecureNeighborId, 
        [FromQuery(Name = "otid")]int outreachTeamId)
    {
        await repository.SetHousingInsecureNeighborDisability(housingInsecureNeighborId, disabilityId, outreachTeamId);
    }

    [HttpPost("housing-insecure-neighbor-ethnicity")]
    public async Task SetHousingInsecureNeighborEthnicity(
        [FromBody]int ethnicityId,
        [FromQuery(Name = "hinid")]int housingInsecureNeighborId, 
        [FromQuery(Name = "otid")]int outreachTeamId)
    {
        await repository.SetHousingInsecureNeighborEthnicity(housingInsecureNeighborId, ethnicityId, outreachTeamId);
    }

    [HttpPost("housing-insecure-neighbor-family-member")]
    public async Task SetHousingInsecureNeighborFamilyMember(
        [FromBody]FamilyMember familyMember, 
        [FromQuery(Name = "otid")]int outreachTeamId)
    {
        await repository.SetHousingInsecureNeighborFamilyMember(familyMember, outreachTeamId);
    }

    [HttpPost("housing-insecure-neighbor-request")]
    public async Task SetHousingInsecureNeighborRequest(
        [FromBody]int requestId, 
        [FromQuery(Name = "hinid")]int housingInsecureNeighborId, 
        [FromQuery(Name = "otid")]int outreachTeamId)
    {
        await repository.SetHousingInsecureNeighborRequest(housingInsecureNeighborId, requestId, outreachTeamId);
    }


    [HttpPost("housing-insecure-neighbor-tent")]
    public async Task SetHousingInsecureNeighborTent(
        [FromBody]int tentId, 
        [FromQuery(Name = "hinid")]int housingInsecureNeighborId, 
        [FromQuery(Name = "otid")]int outreachTeamId)
    {
        await repository.SetHousingInsecureNeighborTent(housingInsecureNeighborId, tentId, outreachTeamId);
    }  
    #endregion
}
