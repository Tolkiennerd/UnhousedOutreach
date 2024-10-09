using Microsoft.AspNetCore.Mvc;
using UnhousedOutreach.Database.Lookups;

namespace UnhousedOutreach.Api;

[Route("api/lookups")]
[ApiController]
public class LookupsController : ControllerBase
{
    private readonly LookupsMySqlRepository repository;

    public LookupsController(IConfiguration configuration)
    {
        var connectionStrings = configuration.GetSection("ConnectionStrings").Get<ConnectionStrings>();
        var unhousedOutreachConnectionString = connectionStrings?.UnhousedOutreachConnectionString ?? string.Empty;
        repository = new(unhousedOutreachConnectionString);
    }

    [HttpGet("all")]
    public async Task<Core.Lookups.Lookups> GetLookups([FromQuery(Name = "otid")]int outreachTeamId)
    {
        return await repository.GetLookups(outreachTeamId);
    }

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


    [HttpGet("english-levels")]
    public async Task<Dictionary<int, string>> GetEnglishLevelLookup([FromQuery(Name = "otid")]int outreachTeamId)
    {
        return await repository.GetEnglishLevel(outreachTeamId);
    }

    [HttpPost("english-level")]
    public async Task SetEnglishLevel([FromBody]KeyValuePair<int?, string> englishLevel, [FromQuery(Name = "otid")]int outreachTeamId)
    {
        await repository.SetEnglishLevel(englishLevel.Key, englishLevel.Value, outreachTeamId);
    }

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
}
