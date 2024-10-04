using Microsoft.AspNetCore.Mvc;
using UnhousedOutreach.Core.Neighbors.HousingInsecure;
using UnhousedOutreach.Database.HousingInsecureNeighbors;

namespace UnhousedOutreach.Api;

[Route("api/")]
[ApiController]
public class HousingInsecureNeighborsController : ControllerBase
{
    private readonly HousingInsecureNeighborsMySqlRepository repository;

    public HousingInsecureNeighborsController(IConfiguration configuration)
    {
        var connectionStrings = configuration.GetSection("ConnectionStrings").Get<ConnectionStrings>();
        var unhousedOutreachConnectionString = connectionStrings?.UnhousedOutreachConnectionString ?? string.Empty;
        repository = new(unhousedOutreachConnectionString);
    }

    [HttpGet("housing-insecure-neighbors")]
    public async Task<IEnumerable<HousingInsecureNeighbor>> GetHousingInsecureNeighbors(
        [FromQuery(Name = "otid")]int outreachTeamId)
    {
        return await repository.GetHousingInsecureNeighbors(outreachTeamId);
    }

    [HttpPut("housing-insecure-neighbor")]
    public async Task SetHousingInsecureNeighbor(
        [FromBody]HousingInsecureNeighbor neighbor, 
        [FromQuery(Name = "otid")]int outreachTeamId)
    {
        await repository.SetHousingInsecureNeighbor(neighbor, outreachTeamId);
    }

    [HttpPut("housing-insecure-neighbor-disability")]
    public async Task SetHousingInsecureNeighborDisability(
        [FromBody]int disabilityId, 
        [FromQuery(Name = "nid")]int housingInsecureNeighborId, 
        [FromQuery(Name = "otid")]int outreachTeamId)
    {
        await repository.SetHousingInsecureNeighborDisability(housingInsecureNeighborId, disabilityId, outreachTeamId);
    }

    [HttpPut("housing-insecure-neighbor-ethnicity")]
    public async Task SetHousingInsecureNeighborEthnicity(
        [FromBody]int ethnicityId,
        [FromQuery(Name = "nid")]int housingInsecureNeighborId, 
        [FromQuery(Name = "otid")]int outreachTeamId)
    {
        await repository.SetHousingInsecureNeighborEthnicity(housingInsecureNeighborId, ethnicityId, outreachTeamId);
    }

    [HttpPut("housing-insecure-neighbor-ethnicities")]
    public async Task SetHousingInsecureNeighborEthnicities(
        [FromBody]List<int> ethnicityIds,
        [FromQuery(Name = "nid")]int housingInsecureNeighborId, 
        [FromQuery(Name = "otid")]int outreachTeamId)
    {
        await repository.SetHousingInsecureNeighborEthnicities(housingInsecureNeighborId, ethnicityIds, outreachTeamId);
    }

    [HttpDelete("housing-insecure-neighbor-ethnicity")]
    public async Task DeleteHousingInsecureNeighborEthnicity(
        [FromQuery(Name = "id")]int ethnicityId,
        [FromQuery(Name = "nid")]int housingInsecureNeighborId,
        [FromQuery(Name = "otid")]int outreachTeamId)
    {
        await repository.DeleteHousingInsecureNeighborEthnicity(housingInsecureNeighborId, ethnicityId, outreachTeamId);
    }

    [HttpPut("housing-insecure-neighbor-family-member")]
    public async Task SetHousingInsecureNeighborFamilyMember(
        [FromBody]FamilyMember familyMember, 
        [FromQuery(Name = "otid")]int outreachTeamId)
    {
        await repository.SetHousingInsecureNeighborFamilyMember(familyMember, outreachTeamId);
    }

    [HttpPut("housing-insecure-neighbor-need")]
    public async Task SetHousingInsecureNeighborNeed(
        [FromBody]int needId, 
        [FromQuery(Name = "nid")]int housingInsecureNeighborId, 
        [FromQuery(Name = "otid")]int outreachTeamId)
    {
        await repository.SetHousingInsecureNeighborNeed(housingInsecureNeighborId, needId, outreachTeamId);
    }

    [HttpDelete("housing-insecure-neighbor-need")]
    public async Task DeleteHousingInsecureNeighborNeed(
        [FromQuery(Name = "id")]int needId, 
        [FromQuery(Name = "nid")]int housingInsecureNeighborId, 
        [FromQuery(Name = "otid")]int outreachTeamId)
    {
        await repository.DeleteHousingInsecureNeighborNeed(housingInsecureNeighborId, needId, outreachTeamId);
    }

    [HttpPut("housing-insecure-neighbor-tent")]
    public async Task SetHousingInsecureNeighborTent(
        [FromBody]int tentId, 
        [FromQuery(Name = "nid")]int housingInsecureNeighborId, 
        [FromQuery(Name = "otid")]int outreachTeamId)
    {
        await repository.SetHousingInsecureNeighborTent(housingInsecureNeighborId, tentId, outreachTeamId);
    }  
}
