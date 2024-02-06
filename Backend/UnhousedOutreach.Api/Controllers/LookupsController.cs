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

    #region All
    [HttpGet("all")]
    public async Task<Core.Lookups.Lookups> GetLookups([FromQuery(Name = "otid")]int outreachTeamId)
    {
        return await repository.GetLookups(outreachTeamId);
    }
    #endregion

    #region Cushion Condition
    [HttpGet("cushion-conditions")]
    public async Task<Dictionary<int, string>> GetCushionConditionsLookup()
    {
        return await repository.GetCushionConditions();
    }

    [HttpPost("cushion-condition")]
    public async Task SetCushionCondition(int? id, string value)
    {
        await repository.SetCushionCondition(id, value);
    }
    #endregion

    #region Cushion Type
    [HttpGet("cushion-types")]
    public async Task<Dictionary<int, string>> GetCushionTypesLookup()
    {
        return await repository.GetCushionTypes();
    }

    [HttpPost("cushion-type")]
    public async Task SetCushionType(int? id, string value)
    {
        await repository.SetCushionType(id, value);
    }
    #endregion

    #region Disability
    [HttpGet("disabilities")]
    public async Task<Dictionary<int, string>> GetDisabilitiesLookup()
    {
        return await repository.GetDisabilities();
    }

    [HttpPost("disability")]
    public async Task SetDisability(int? id, string value)
    {
        await repository.SetDisability(id, value);
    }
    #endregion

    #region Ethnicity
    [HttpGet("ethnicities")]
    public async Task<Dictionary<int, string>> GetEthnicitiesLookup()
    {
        return await repository.GetEthnicities();
    }

    [HttpPost("ethnicity")]
    public async Task SetEthnicity(int? id, string value)
    {
        await repository.SetEthnicity(id, value);
    }
    #endregion

    #region Gender
    [HttpGet("genders")]
    public async Task<Dictionary<int, string>> GetGendersLookup()
    {
        return await repository.GetGenders();
    }

    [HttpPost("gender")]
    public async Task SetGender(int? id, string value)
    {
        await repository.SetGender(id, value);
    }
    #endregion

    #region Housing Status
    [HttpGet("housing-statuses")]
    public async Task<Dictionary<int, string>> GetHousingStatusesLookup()
    {
        return await repository.GetHousingStatuses();
    }

    [HttpPost("housing-status")]
    public async Task SetHousingStatus(int? id, string value)
    {
        await repository.SetHousingStatus(id, value);
    }
    #endregion

    #region Location Type
    [HttpGet("location-types")]
    public async Task<Dictionary<int, string>> GetLocationTypesLookup()
    {
        return await repository.GetLocationTypes();
    }

    [HttpPost("location-type")]
    public async Task SetLocationType(int? id, string value)
    {
        await repository.SetLocationType(id, value);
    }
    #endregion

    #region Pants Size
    [HttpGet("pants-sizes")]
    public async Task<Dictionary<int, string>> GetPantsSizesLookup()
    {
        return await repository.GetPantsSizes();
    }

    [HttpPost("pants-size")]
    public async Task SetPantsSize(int? id, string value)
    {
        await repository.SetPantsSize(id, value);
    }
    #endregion

    #region Request
    [HttpGet("requests")]
    public async Task<Dictionary<int, string>> GetRequestsLookup()
    {
        return await repository.GetRequests();
    }

    [HttpPost("request")]
    public async Task SetRequest(int? id, string value, int outreachTeamId)
    {
        await repository.SetRequest(id, value, outreachTeamId);
    }
    #endregion

    #region Shirt Size
    [HttpGet("shirt-sizes")]
    public async Task<Dictionary<int, string>> GetShirtSizesLookup()
    {
        return await repository.GetShirtSizes();
    }

    [HttpPost("shirt-size")]
    public async Task SetShirtSize(int? id, string value)
    {
        await repository.SetShirtSize(id, value);
    }
    #endregion

    #region Shoe Size
    [HttpGet("shoe-sizes")]
    public async Task<Dictionary<int, string>> GetShoeSizesLookup()
    {
        return await repository.GetShoeSizes();
    }

    [HttpPost("shoe-size")]
    public async Task SetShoeSize(int? id, string value)
    {
        await repository.SetShoeSize(id, value);
    }
    #endregion

    #region Sleeping Bag Condition
    [HttpGet("sleeping-bag-conditions")]
    public async Task<Dictionary<int, string>> GetSleepingBagConditionsLookup()
    {
        return await repository.GetSleepingBagConditions();
    }

    [HttpPost("sleeping-bag-condition")]
    public async Task SetSleepingBagCondition(int? id, string value)
    {
        await repository.SetSleepingBagCondition(id, value);
    }
    #endregion

    #region Tent Condition
    [HttpGet("tent-conditions")]
    public async Task<Dictionary<int, string>> GetTentConditionsLookup()
    {
        return await repository.GetTentConditions();
    }

    [HttpPost("tent-condition")]
    public async Task SetTentCondition(int? id, string value)
    {
        await repository.SetTentCondition(id, value);
    }
    #endregion

    #region Tent Usage
    [HttpGet("tent-usages")]
    public async Task<Dictionary<int, string>> GetTentUsagesLookup()
    {
        return await repository.GetTentUsages();
    }

    [HttpPost("tent-usage")]
    public async Task SetTentUsage(int? id, string value)
    {
        await repository.SetTentUsage(id, value);
    }
    #endregion
}
