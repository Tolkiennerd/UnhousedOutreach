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
    public IEnumerable<HousingInsecureNeighbor> GetHousingInsecureNeighbors(int outreachTeamId) => 
        repository.GetHousingInsecureNeighbors(outreachTeamId);

    [HttpPost("housing-insecure-neighbor")]
    public async Task SetHousingInsecureNeighbor(HousingInsecureNeighbor neighbor, int outreachTeamId) => 
        await repository.SetHousingInsecureNeighbor(neighbor, outreachTeamId);

    [HttpPost("housing-insecure-neighbor-disability")]
    public async Task SetHousingInsecureNeighborDisability(int housingInsecureNeighborId, int disabilityId, int outreachTeamId) => 
        await repository.SetHousingInsecureNeighborDisability(housingInsecureNeighborId, disabilityId, outreachTeamId);

    [HttpPost("housing-insecure-neighbor-ethnicity")]
    public async Task SetHousingInsecureNeighborEthnicity(int housingInsecureNeighborId, int ethnicityId, int outreachTeamId) => 
        await repository.SetHousingInsecureNeighborEthnicity(housingInsecureNeighborId, ethnicityId, outreachTeamId);

    [HttpPost("housing-insecure-neighbor-family-member")]
    public async Task SetHousingInsecureNeighborFamilyMember(FamilyMember familyMember, int outreachTeamId) => 
        await repository.SetHousingInsecureNeighborFamilyMember(familyMember, outreachTeamId);

    [HttpPost("housing-insecure-neighbor-request")]
    public async Task SetHousingInsecureNeighborRequest(int housingInsecureNeighborId, int requestId, int outreachTeamId) => 
        await repository.SetHousingInsecureNeighborRequest(housingInsecureNeighborId, requestId, outreachTeamId);

    [HttpPost("housing-insecure-neighbor-tent")]
    public async Task SetHousingInsecureNeighborTent(int housingInsecureNeighborId, int tentId, int outreachTeamId) => 
        await repository.SetHousingInsecureNeighborTent(housingInsecureNeighborId, tentId, outreachTeamId);
    #endregion
}
