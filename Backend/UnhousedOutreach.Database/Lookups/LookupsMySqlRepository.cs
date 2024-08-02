using System.Data.Common;
using UnhousedOutreach.Database.MySql;

namespace UnhousedOutreach.Database.Lookups;

public class LookupsMySqlRepository(string connectionString) : Repository(connectionString)
{
    #region Get Methods
    public async Task<Dictionary<int, string>> GetCushionConditions(int outreachTeamId)
    {
        return await GetLookup(LookupsMySqlQueries.GetCushionConditions, outreachTeamId);
    }

    public async Task<Dictionary<int, string>> GetCushionTypes(int outreachTeamId)
    {
        return await GetLookup(LookupsMySqlQueries.GetCushionTypes, outreachTeamId);
    }

    public async Task<Dictionary<int, string>> GetDisabilities(int outreachTeamId)
    {
        return await GetLookup(LookupsMySqlQueries.GetDisabilities, outreachTeamId);
    }

    public async Task<Dictionary<int, string>> GetEnglishLevel(int outreachTeamId)
    {
        return await GetLookup(LookupsMySqlQueries.GetEnglishLevel, outreachTeamId);
    }

    public async Task<Dictionary<int, string>> GetEthnicities(int outreachTeamId)
    {
        return await GetLookup(LookupsMySqlQueries.GetEthnicities, outreachTeamId);
    }

    public async Task<Dictionary<int, string>> GetGenders(int outreachTeamId)
    {
        return await GetLookup(LookupsMySqlQueries.GetGenders, outreachTeamId);
    }

    public async Task<Dictionary<int, string>> GetHousingStatuses(int outreachTeamId)
    {
        return await GetLookup(LookupsMySqlQueries.GetHousingStatuses, outreachTeamId);
    }

    public async Task<Dictionary<int, string>> GetLocationTypes(int outreachTeamId)
    {
        return await GetLookup(LookupsMySqlQueries.GetLocationTypes, outreachTeamId);
    }

    public async Task<Dictionary<int, string>> GetPantsSizes(int outreachTeamId)
    {
        return await GetLookup(LookupsMySqlQueries.GetPantsSizes, outreachTeamId);
    }

    public async Task<Dictionary<int, string>> GetNeeds(int outreachTeamId)
    {
        return await GetLookup(LookupsMySqlQueries.GetNeeds, outreachTeamId);
    }

    public async Task<Dictionary<int, string>> GetShirtSizes(int outreachTeamId)
    {
        return await GetLookup(LookupsMySqlQueries.GetShirtSizes, outreachTeamId);
    }

    public async Task<Dictionary<int, string>> GetShoeSizes(int outreachTeamId)
    {
        return await GetLookup(LookupsMySqlQueries.GetShoeSizes, outreachTeamId);
    }

    public async Task<Dictionary<int, string>> GetSkills(int outreachTeamId)
    {
        return await GetLookup(LookupsMySqlQueries.GetSkills, outreachTeamId);
    }

    public async Task<Dictionary<int, string>> GetSleepingBagConditions(int outreachTeamId)
    {
        return await GetLookup(LookupsMySqlQueries.GetSleepingBagConditions, outreachTeamId);
    }

    public async Task<Dictionary<int, string>> GetTentConditions(int outreachTeamId)
    {
        return await GetLookup(LookupsMySqlQueries.GetTentConditions, outreachTeamId);
    }

    public async Task<Dictionary<int, string>> GetTentUsages(int outreachTeamId)
    {
        return await GetLookup(LookupsMySqlQueries.GetTentUsages, outreachTeamId);
    }
    
    public async Task<Core.Lookups.Lookups> GetLookups(int outreachTeamId)
    {
        // GET CUSHION CONDITIONS.
        Dictionary<string, object?> parameters = new(){{"@OutreachTeamId", outreachTeamId}};
        var reader = await ExecuteReader(LookupsMySqlQueries.GetLookups, parameters);
        Core.Lookups.Lookups lookups = new();
        lookups.CushionCondition = GetLookupFromReader(reader);
        reader.NextResult();
        lookups.CushionType = GetLookupFromReader(reader);
        reader.NextResult();
        lookups.Disability = GetLookupFromReader(reader);
        reader.NextResult();
        lookups.Ethnicity = GetLookupFromReader(reader);
        reader.NextResult();
        lookups.Gender = GetLookupFromReader(reader);
        reader.NextResult();
        lookups.HousingStatus = GetLookupFromReader(reader);
        reader.NextResult();
        lookups.LocationType = GetLookupFromReader(reader);
        reader.NextResult();
        lookups.PantsSize = GetLookupFromReader(reader);
        reader.NextResult();
        lookups.Need = GetLookupFromReader(reader);
        reader.NextResult();
        lookups.ShirtSize = GetLookupFromReader(reader);
        reader.NextResult();
        lookups.ShoeSize = GetLookupFromReader(reader);
        reader.NextResult();
        lookups.Skill = GetLookupFromReader(reader);
        reader.NextResult();
        lookups.SleepingBagCondition = GetLookupFromReader(reader);
        reader.NextResult();
        lookups.TentCondition = GetLookupFromReader(reader);
        reader.NextResult();
        lookups.TentUsage = GetLookupFromReader(reader);
        reader.NextResult();
        return lookups;
    }
#endregion

    #region Set Methods
    public async Task SetCushionCondition(int? id, string value, int outreachTeamId)
    {
        await SetLookup(LookupsMySqlQueries.SetCushionCondition, "@CushionConditionId", "@CushionCondition", id, value, outreachTeamId);
    }

    public async Task SetCushionType(int? id, string value, int outreachTeamId)
    {
        await SetLookup(LookupsMySqlQueries.SetCushionType, "@CushionTypeId", "@CushionType", id, value, outreachTeamId);
    }

    public async Task SetDisability(int? id, string value, int outreachTeamId)
    {
        await SetLookup(LookupsMySqlQueries.SetDisability, "@DisabilityId", "@Disability", id, value, outreachTeamId);
    }

    public async Task SetEnglishLevel(int? id, string value, int outreachTeamId)
    {
        await SetLookup(LookupsMySqlQueries.SetDisability, "@EnglishLevelId", "@EnglishLevel", id, value, outreachTeamId);
    }

    public async Task SetEthnicity(int? id, string value, int outreachTeamId)
    {
        await SetLookup(LookupsMySqlQueries.SetEthnicity, "@EthnicityId", "@Ethnicity", id, value, outreachTeamId);
    }

    public async Task SetGender(int? id, string value, int outreachTeamId)
    {
        await SetLookup(LookupsMySqlQueries.SetGender, "@GenderId", "@Gender", id, value, outreachTeamId);
    }

    public async Task SetHousingStatus(int? id, string value, int outreachTeamId)
    {
        await SetLookup(LookupsMySqlQueries.SetHousingStatus, "@HousingStatusId", "@HousingStatus", id, value, outreachTeamId);
    }

    public async Task SetLocationType(int? id, string value, int outreachTeamId)
    {
        await SetLookup(LookupsMySqlQueries.SetLocationType, "@LocationTypeId", "@LocationType", id, value, outreachTeamId);
    }

    public async Task SetPantsSize(int? id, string value, int outreachTeamId)
    {
        await SetLookup(LookupsMySqlQueries.SetPantsSize, "@PantsSizeId", "@PantsSize", id, value, outreachTeamId);
    }

    public async Task SetNeed(int? id, string value, int outreachTeamId)
    {
        await SetLookup(LookupsMySqlQueries.SetNeed, "@NeedId", "@Need", id, value, outreachTeamId);
    }

    public async Task SetShirtSize(int? id, string value, int outreachTeamId)
    {
        await SetLookup(LookupsMySqlQueries.SetShirtSize, "@ShirtSizeId", "@ShirtSize", id, value, outreachTeamId);
    }

    public async Task SetShoeSize(int? id, string value, int outreachTeamId)
    {
        await SetLookup(LookupsMySqlQueries.SetShoeSize, "@ShoeSizeId", "@ShoeSize", id, value, outreachTeamId);
    }

    public async Task SetSkill(int? id, string value, int outreachTeamId)
    {
        await SetLookup(LookupsMySqlQueries.SetSkill, "@SkillId", "@Skill", id, value, outreachTeamId);
    }

    public async Task SetSleepingBagCondition(int? id, string value, int outreachTeamId)
    {
        await SetLookup(LookupsMySqlQueries.SetSleepingBagCondition, "@SleepingBagConditionId", "@SleepingBagCondition", id, value, outreachTeamId);
    }

    public async Task SetTentCondition(int? id, string value, int outreachTeamId)
    {
        await SetLookup(LookupsMySqlQueries.SetTentCondition, "@TentConditionId", "@TentCondition", id, value, outreachTeamId);
    }

    public async Task SetTentUsage(int? id, string value, int outreachTeamId)
    {
        await SetLookup(LookupsMySqlQueries.SetTentUsage, "@TentUsageId", "@TentUsage", id, value, outreachTeamId);
    }
    #endregion

    #region Private Methods
    private async Task<Dictionary<int, string>> GetLookup(string mySqlQuery, int outreachTeamId)
    {
        // GET CUSHION CONDITIONS.
        Dictionary<string, object?> parameters = new(){{"@OutreachTeamId", outreachTeamId}};
        var reader = await ExecuteReader(mySqlQuery, parameters);
        return GetLookupFromReader(reader);
    }

    private static Dictionary<int, string> GetLookupFromReader(DbDataReader reader)
    {
        Dictionary<int, string> lookup = [];
        while (reader.Read())
        {
            lookup.Add(reader.GetInt32(0), reader.GetString(1));
        }
        return lookup;
    }

    private async Task SetLookup(
        string mySqlStatement, 
        string idParameterName, 
        string valueParameterName, 
        int? id, 
        string value,
        int outreachTeamId)
    {
        Dictionary<string, object?> parameters = new()
        {
            { idParameterName, id },
            { valueParameterName, value },
            { "@OutreachTeamId", outreachTeamId }
        };
        await ExecuteNonQuery(mySqlStatement, parameters);
    }
    #endregion
}
