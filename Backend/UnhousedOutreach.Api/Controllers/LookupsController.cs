using Microsoft.AspNetCore.Mvc;
using UnhousedOutreach.Database.Lookups;

namespace UnhousedOutreach.Api;

[Route("api/lookups")]
[ApiController]
public class LookupsController : ControllerBase
{
    #region Private Fields
    private readonly LookupsMySqlRepository repository;
    #endregion

    #region Constructor
    public LookupsController(IConfiguration configuration)
    {
        var connectionStrings = configuration.GetSection("ConnectionStrings").Get<ConnectionStrings>();
        var unhousedOutreachConnectionString = connectionStrings?.UnhousedOutreachConnectionString ?? string.Empty;
        repository = new(unhousedOutreachConnectionString);
    }
    #endregion

    #region Cushion Condition
    [HttpGet("cushion-conditions")]
    public Dictionary<int, string> GetCushionConditionsLookup() => repository.GetCushionConditions();

    [HttpPost("cushion-condition")]
    public async Task SetCushionCondition(int? id, string value) => await repository.SetCushionCondition(id, value);
    #endregion

    #region Cushion Type
    [HttpGet("cushion-types")]
    public Dictionary<int, string> GetCushionTypesLookup() => repository.GetCushionTypes();

    [HttpPost("cushion-type")]
    public async Task SetCushionType(int? id, string value) => await repository.SetCushionType(id, value);
    #endregion

    #region Disability
    [HttpGet("disabilities")]
    public Dictionary<int, string> GetDisabilitiesLookup() => repository.GetDisabilities();

    [HttpPost("disability")]
    public async Task SetDisability(int? id, string value) => await repository.SetDisability(id, value);
    #endregion

    #region Ethnicity
    [HttpGet("ethnicities")]
    public Dictionary<int, string> GetEthnicitiesLookup() => repository.GetEthnicities();

    [HttpPost("ethnicity")]
    public async Task SetEthnicity(int? id, string value) => await repository.SetEthnicity(id, value);
    #endregion

    #region Gender
    [HttpGet("genders")]
    public Dictionary<int, string> GetGendersLookup() => repository.GetGenders();

    [HttpPost("gender")]
    public async Task SetGender(int? id, string value) => await repository.SetGender(id, value);
    #endregion

    #region Housing Status
    [HttpGet("housing-statuses")]
    public Dictionary<int, string> GetHousingStatusesLookup() => repository.GetHousingStatuses();

    [HttpPost("housing-status")]
    public async Task SetHousingStatus(int? id, string value) => await repository.SetHousingStatus(id, value);
    #endregion

    #region Location Type
    [HttpGet("location-types")]
    public Dictionary<int, string> GetLocationTypesLookup() => repository.GetLocationTypes();

    [HttpPost("location-type")]
    public async Task SetLocationType(int? id, string value) => await repository.SetLocationType(id, value);
    #endregion

    #region Pants Size
    [HttpGet("pants-sizes")]
    public Dictionary<int, string> GetPantsSizesLookup() => repository.GetPantsSizes();

    [HttpPost("pants-size")]
    public async Task SetPantsSize(int? id, string value) => await repository.SetPantsSize(id, value);
    #endregion

    #region Request
    [HttpGet("requests")]
    public Dictionary<int, string> GetRequestsLookup() => repository.GetRequests();

    [HttpPost("request")]
    public async Task SetRequest(int? id, string value) => await repository.SetRequest(id, value);
    #endregion

    #region Shirt Size
    [HttpGet("shirt-sizes")]
    public Dictionary<int, string> GetShirtSizesLookup() => repository.GetShirtSizes();

    [HttpPost("shirt-size")]
    public async Task SetShirtSize(int? id, string value) => await repository.SetShirtSize(id, value);
    #endregion

    #region Shoe Size
    [HttpGet("shoe-sizes")]
    public Dictionary<int, string> GetShoeSizesLookup() => repository.GetShoeSizes();

    [HttpPost("shoe-size")]
    public async Task SetShoeSize(int? id, string value) => await repository.SetShoeSize(id, value);
    #endregion

    #region Sleeping Bag Condition
    [HttpGet("sleeping-bag-conditions")]
    public Dictionary<int, string> GetSleepingBagConditionsLookup() => repository.GetSleepingBagConditions();

    [HttpPost("sleeping-bag-condition")]
    public async Task SetSleepingBagCondition(int? id, string value) => await repository.SetSleepingBagCondition(id, value);
    #endregion

    #region Tent Condition
    [HttpGet("tent-conditions")]
    public Dictionary<int, string> GetTentConditionsLookup() => repository.GetTentConditions();

    [HttpPost("tent-condition")]
    public async Task SetTentCondition(int? id, string value) => await repository.SetTentCondition(id, value);
    #endregion

    #region Tent Usage
    [HttpGet("tent-usages")]
    public Dictionary<int, string> GetTentUsagesLookup() => repository.GetTentUsages();

    [HttpPost("tent-usage")]
    public async Task SetTentUsage(int? id, string value) => await repository.SetTentUsage(id, value);
    #endregion
}
