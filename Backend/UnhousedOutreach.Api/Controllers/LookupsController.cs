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
    public async Task<Dictionary<int, string>> GetCushionConditionsLookup([FromQuery(Name = "otid")]int outreachTeamId)
    {
        return await repository.GetCushionConditions(outreachTeamId);
    }

    [HttpPost("cushion-condition")]
    public async Task SetCushionCondition([FromBody]KeyValuePair<int?, string> cushionCondition, [FromQuery(Name = "otid")]int outreachTeamId)
    {
        await repository.SetCushionCondition(cushionCondition.Key, cushionCondition.Value, outreachTeamId);
    }
    #endregion

    #region Cushion Type
    [HttpGet("cushion-types")]
    public async Task<Dictionary<int, string>> GetCushionTypesLookup([FromQuery(Name = "otid")]int outreachTeamId)
    {
        return await repository.GetCushionTypes(outreachTeamId);
    }

    [HttpPost("cushion-type")]
    public async Task SetCushionType([FromBody]KeyValuePair<int?, string> cushionType, [FromQuery(Name = "otid")]int outreachTeamId)
    {
        await repository.SetCushionType(cushionType.Key, cushionType.Value, outreachTeamId);
    }
    #endregion

    #region Disability
    [HttpGet("disabilities")]
    public async Task<Dictionary<int, string>> GetDisabilitiesLookup([FromQuery(Name = "otid")]int outreachTeamId)
    {
        return await repository.GetDisabilities(outreachTeamId);
    }

    [HttpPost("disability")]
    public async Task SetDisability([FromBody]KeyValuePair<int?, string> disability, [FromQuery(Name = "otid")]int outreachTeamId)
    {
        await repository.SetDisability(disability.Key, disability.Value, outreachTeamId);
    }
    #endregion

    #region English Level
    [HttpGet("english-levels")]
    public async Task<Dictionary<int, string>> GetEnglishLevelLookup([FromQuery(Name = "otid")]int outreachTeamId)
    {
        return await repository.GetEnglishLevels(outreachTeamId);
    }

    [HttpPost("english-level")]
    public async Task SetEnglishLevel([FromBody]KeyValuePair<int?, string> englishLevel, [FromQuery(Name = "otid")]int outreachTeamId)
    {
        await repository.SetEnglishLevel(englishLevel.Key, englishLevel.Value, outreachTeamId);
    }
    #endregion

    #region Ethnicity
    [HttpGet("ethnicities")]
    public async Task<Dictionary<int, string>> GetEthnicitiesLookup([FromQuery(Name = "otid")]int outreachTeamId)
    {
        return await repository.GetEthnicities(outreachTeamId);
    }

    [HttpPost("ethnicity")]
    public async Task SetEthnicity([FromBody]KeyValuePair<int?, string> ethnicity, [FromQuery(Name = "otid")]int outreachTeamId)
    {
        await repository.SetEthnicity(ethnicity.Key, ethnicity.Value, outreachTeamId);
    }
    #endregion

    #region Gender
    [HttpGet("genders")]
    public async Task<Dictionary<int, string>> GetGendersLookup([FromQuery(Name = "otid")]int outreachTeamId)
    {
        return await repository.GetGenders(outreachTeamId);
    }

    [HttpPost("gender")]
    public async Task SetGender([FromBody]KeyValuePair<int?, string> gender, [FromQuery(Name = "otid")]int outreachTeamId)
    {
        await repository.SetGender(gender.Key, gender.Value, outreachTeamId);
    }
    #endregion

    #region Housing Status
    [HttpGet("housing-statuses")]
    public async Task<Dictionary<int, string>> GetHousingStatusesLookup([FromQuery(Name = "otid")]int outreachTeamId)
    {
        return await repository.GetHousingStatuses(outreachTeamId);
    }

    [HttpPost("housing-status")]
    public async Task SetHousingStatus([FromBody]KeyValuePair<int?, string> housingStatus, [FromQuery(Name = "otid")]int outreachTeamId)
    {
        await repository.SetHousingStatus(housingStatus.Key, housingStatus.Value, outreachTeamId);
    }
    #endregion

    #region Location Type
    [HttpGet("location-types")]
    public async Task<Dictionary<int, string>> GetLocationTypesLookup([FromQuery(Name = "otid")]int outreachTeamId)
    {
        return await repository.GetLocationTypes(outreachTeamId);
    }

    [HttpPost("location-type")]
    public async Task SetLocationType([FromBody]KeyValuePair<int?, string> locationType, [FromQuery(Name = "otid")]int outreachTeamId)
    {
        await repository.SetLocationType(locationType.Key, locationType.Value, outreachTeamId);
    }
    #endregion

    #region Pants Size
    [HttpGet("pants-sizes")]
    public async Task<Dictionary<int, string>> GetPantsSizesLookup([FromQuery(Name = "otid")]int outreachTeamId)
    {
        return await repository.GetPantsSizes(outreachTeamId);
    }

    [HttpPost("pants-size")]
    public async Task SetPantsSize([FromBody]KeyValuePair<int?, string> pantsSize, [FromQuery(Name = "otid")]int outreachTeamId)
    {
        await repository.SetPantsSize(pantsSize.Key, pantsSize.Value, outreachTeamId);
    }
    #endregion

    #region Needs
    [HttpGet("needs")]
    public async Task<Dictionary<int, string>> GetNeedsLookup([FromQuery(Name = "otid")]int outreachTeamId)
    {
        return await repository.GetNeeds(outreachTeamId);
    }

    [HttpPost("need")]
    public async Task SetNeed([FromBody]KeyValuePair<int?, string> need, [FromQuery(Name = "otid")]int outreachTeamId)
    {
        await repository.SetNeed(need.Key, need.Value, outreachTeamId);
    }
    #endregion

    #region Shirt Size
    [HttpGet("shirt-sizes")]
    public async Task<Dictionary<int, string>> GetShirtSizesLookup([FromQuery(Name = "otid")]int outreachTeamId)
    {
        return await repository.GetShirtSizes(outreachTeamId);
    }

    [HttpPost("shirt-size")]
    public async Task SetShirtSize([FromBody]KeyValuePair<int?, string> shirtSize, [FromQuery(Name = "otid")]int outreachTeamId)
    {
        await repository.SetShirtSize(shirtSize.Key, shirtSize.Value, outreachTeamId);
    }
    #endregion

    #region Shoe Size
    [HttpGet("shoe-sizes")]
    public async Task<Dictionary<int, string>> GetShoeSizesLookup([FromQuery(Name = "otid")]int outreachTeamId)
    {
        return await repository.GetShoeSizes(outreachTeamId);
    }

    [HttpPost("shoe-size")]
    public async Task SetShoeSize([FromBody]KeyValuePair<int?, string> shoeSize, [FromQuery(Name = "otid")]int outreachTeamId)
    {
        await repository.SetShoeSize(shoeSize.Key, shoeSize.Value, outreachTeamId);
    }
    #endregion

    #region Skill
    [HttpGet("skills")]
    public async Task<Dictionary<int, string>> GetSkillsLookup([FromQuery(Name = "otid")]int outreachTeamId)
    {
        return await repository.GetSkills(outreachTeamId);
    }

    [HttpPost("skill")]
    public async Task SetSkill([FromBody]KeyValuePair<int?, string> skill, [FromQuery(Name = "otid")]int outreachTeamId)
    {
        await repository.SetSkill(skill.Key, skill.Value, outreachTeamId);
    }
    #endregion

    #region Sleeping Bag Condition
    [HttpGet("sleeping-bag-conditions")]
    public async Task<Dictionary<int, string>> GetSleepingBagConditionsLookup([FromQuery(Name = "otid")]int outreachTeamId)
    {
        return await repository.GetSleepingBagConditions(outreachTeamId);
    }

    [HttpPost("sleeping-bag-condition")]
    public async Task SetSleepingBagCondition([FromBody]KeyValuePair<int?, string> sleepingBagCondition, [FromQuery(Name = "otid")]int outreachTeamId)
    {
        await repository.SetSleepingBagCondition(sleepingBagCondition.Key, sleepingBagCondition.Value, outreachTeamId);
    }
    #endregion

    #region Tent Condition
    [HttpGet("tent-conditions")]
    public async Task<Dictionary<int, string>> GetTentConditionsLookup([FromQuery(Name = "otid")]int outreachTeamId)
    {
        return await repository.GetTentConditions(outreachTeamId);
    }

    [HttpPost("tent-condition")]
    public async Task SetTentCondition([FromBody]KeyValuePair<int?, string> tentCondition, [FromQuery(Name = "otid")]int outreachTeamId)
    {
        await repository.SetTentCondition(tentCondition.Key, tentCondition.Value, outreachTeamId);
    }
    #endregion

    #region Tent Usage
    [HttpGet("tent-usages")]
    public async Task<Dictionary<int, string>> GetTentUsagesLookup([FromQuery(Name = "otid")]int outreachTeamId)
    {
        return await repository.GetTentUsages(outreachTeamId);
    }

    [HttpPost("tent-usage")]
    public async Task SetTentUsage([FromBody]KeyValuePair<int?, string> tentUsage, [FromQuery(Name = "otid")]int outreachTeamId)
    {
        await repository.SetTentUsage(tentUsage.Key, tentUsage.Value, outreachTeamId);
    }
    #endregion
}
