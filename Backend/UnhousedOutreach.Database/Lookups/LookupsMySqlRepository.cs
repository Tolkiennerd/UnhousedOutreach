using System.Data.Common;
using MySql.Data.MySqlClient;
using UnhousedOutreach.Database.MySql;

namespace UnhousedOutreach.Database.Lookups;

public class LookupsMySqlRepository(string connectionString) : Repository(connectionString)
{
    #region Get Methods
    public async Task<Dictionary<int, string>> GetCushionConditions()
    {
        return await GetLookup(LookupsMySqlQueries.GetCushionConditions);
    }

    public async Task<Dictionary<int, string>> GetCushionTypes()
    {
        return await GetLookup(LookupsMySqlQueries.GetCushionTypes);
    }

    public async Task<Dictionary<int, string>> GetDisabilities()
    {
        return await GetLookup(LookupsMySqlQueries.GetDisabilities);
    }

    public async Task<Dictionary<int, string>> GetEthnicities()
    {
        return await GetLookup(LookupsMySqlQueries.GetEthnicities);
    }

    public async Task<Dictionary<int, string>> GetGenders()
    {
        return await GetLookup(LookupsMySqlQueries.GetGenders);
    }

    public async Task<Dictionary<int, string>> GetHousingStatuses()
    {
        return await GetLookup(LookupsMySqlQueries.GetHousingStatuses);
    }

    public async Task<Dictionary<int, string>> GetLocationTypes()
    {
        return await GetLookup(LookupsMySqlQueries.GetLocationTypes);
    }

    public async Task<Dictionary<int, string>> GetPantsSizes()
    {
        return await GetLookup(LookupsMySqlQueries.GetPantsSizes);
    }

    public async Task<Dictionary<int, string>> GetRequests()
    {
        return await GetLookup(LookupsMySqlQueries.GetRequests);
    }

    public async Task<Dictionary<int, string>> GetShirtSizes()
    {
        return await GetLookup(LookupsMySqlQueries.GetShirtSizes);
    }

    public async Task<Dictionary<int, string>> GetShoeSizes()
    {
        return await GetLookup(LookupsMySqlQueries.GetShoeSizes);
    }

    public async Task<Dictionary<int, string>> GetSleepingBagConditions()
    {
        return await GetLookup(LookupsMySqlQueries.GetSleepingBagConditions);
    }

    public async Task<Dictionary<int, string>> GetTentConditions()
    {
        return await GetLookup(LookupsMySqlQueries.GetTentConditions);
    }

    public async Task<Dictionary<int, string>> GetTentUsages()
    {
        return await GetLookup(LookupsMySqlQueries.GetTentUsages);
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
        lookups.Request = GetLookupFromReader(reader);
        reader.NextResult();
        lookups.ShirtSize = GetLookupFromReader(reader);
        reader.NextResult();
        lookups.ShoeSize = GetLookupFromReader(reader);
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
    public async Task SetCushionCondition(int? id, string value)
    {
        await SetLookup(LookupsMySqlQueries.SetCushionCondition, "@CushionConditionId", "@CushionCondition", id, value);
    }

    public async Task SetCushionType(int? id, string value)
    {
        await SetLookup(LookupsMySqlQueries.SetCushionType, "@CushionTypeId", "@CushionType", id, value);
    }

    public async Task SetDisability(int? id, string value)
    {
        await SetLookup(LookupsMySqlQueries.SetDisability, "@DisabilityId", "@Disability", id, value);
    }

    public async Task SetEthnicity(int? id, string value)
    {
        await SetLookup(LookupsMySqlQueries.SetEthnicity, "@EthnicityId", "@Ethnicity", id, value);
    }

    public async Task SetGender(int? id, string value)
    {
        await SetLookup(LookupsMySqlQueries.SetGender, "@GenderId", "@Gender", id, value);
    }

    public async Task SetHousingStatus(int? id, string value)
    {
        await SetLookup(LookupsMySqlQueries.SetHousingStatus, "@HousingStatusId", "@HousingStatus", id, value);
    }

    public async Task SetLocationType(int? id, string value)
    {
        await SetLookup(LookupsMySqlQueries.SetLocationType, "@LocationTypeId", "@LocationType", id, value);
    }

    public async Task SetPantsSize(int? id, string value)
    {
        await SetLookup(LookupsMySqlQueries.SetPantsSize, "@PantsSizeId", "@PantsSize", id, value);
    }

    public async Task SetRequest(int? id, string value, int outreachTeamId)
    {
        await SetLookupForOutreachTeam(LookupsMySqlQueries.SetRequest, "@RequestId", "@Request", id, value, outreachTeamId);
    }

    public async Task SetShirtSize(int? id, string value)
    {
        await SetLookup(LookupsMySqlQueries.SetShirtSize, "@ShirtSizeId", "@ShirtSize", id, value);
    }

    public async Task SetShoeSize(int? id, string value)
    {
        await SetLookup(LookupsMySqlQueries.SetShoeSize, "@ShoeSizeId", "@ShoeSize", id, value);
    }

    public async Task SetSleepingBagCondition(int? id, string value)
    {
        await SetLookup(LookupsMySqlQueries.SetSleepingBagCondition, "@SleepingBagConditionId", "@SleepingBagCondition", id, value);
    }

    public async Task SetTentCondition(int? id, string value)
    {
        await SetLookup(LookupsMySqlQueries.SetTentCondition, "@TentConditionId", "@TentCondition", id, value);
    }

    public async Task SetTentUsage(int? id, string value)
    {
        await SetLookup(LookupsMySqlQueries.SetTentUsage, "@TentUsageId", "@TentUsage", id, value);
    }
    #endregion

    #region Private Methods
    private async Task<Dictionary<int, string>> GetLookup(string mySqlQuery)
    {
        // GET CUSHION CONDITIONS.
        var reader = await ExecuteReader(mySqlQuery);
        return GetLookupFromReader(reader);
    }

    private Dictionary<int, string> GetLookupFromReader(DbDataReader reader)
    {
        Dictionary<int, string> lookup = [];
        while (reader.Read())
        {
            lookup.Add(reader.GetInt32(0), reader.GetString(1));
        }
        return lookup;
    }

    private async Task SetLookup(string mySqlStatement, string idParameterName, string valueParameterName, int? id, string value)
    {
        Dictionary<string, object?> parameters = new()
        {
            { idParameterName, id },
            { valueParameterName, value }
        };
        await ExecuteNonQuery(mySqlStatement, parameters);
    }

    private async Task SetLookupForOutreachTeam(
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
