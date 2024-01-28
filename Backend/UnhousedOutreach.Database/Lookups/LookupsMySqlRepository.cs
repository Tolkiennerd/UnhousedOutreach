using MySql.Data.MySqlClient;
using UnhousedOutreach.Database.MySql;

namespace UnhousedOutreach.Database.Lookups;

public class LookupsMySqlRepository(string connectionString) : Repository(connectionString)
{
    #region Get Methods
    public Dictionary<int, string> GetCushionConditions()
    {
        return GetLookup(LookupsMySqlQueries.GetCushionConditions);
    }

    public Dictionary<int, string> GetCushionTypes()
    {
        return GetLookup(LookupsMySqlQueries.GetCushionTypes);
    }

    public Dictionary<int, string> GetDisabilities()
    {
        return GetLookup(LookupsMySqlQueries.GetDisabilities);
    }

    public Dictionary<int, string> GetEthnicities()
    {
        return GetLookup(LookupsMySqlQueries.GetEthnicities);
    }

    public Dictionary<int, string> GetGenders()
    {
        return GetLookup(LookupsMySqlQueries.GetGenders);
    }

    public Dictionary<int, string> GetHousingStatuses()
    {
        return GetLookup(LookupsMySqlQueries.GetHousingStatuses);
    }

    public Dictionary<int, string> GetLocationTypes()
    {
        return GetLookup(LookupsMySqlQueries.GetLocationTypes);
    }

    public Dictionary<int, string> GetPantsSizes()
    {
        return GetLookup(LookupsMySqlQueries.GetPantsSizes);
    }

    public Dictionary<int, string> GetRequests()
    {
        return GetLookup(LookupsMySqlQueries.GetRequests);
    }

    public Dictionary<int, string> GetShirtSizes()
    {
        return GetLookup(LookupsMySqlQueries.GetShirtSizes);
    }

    public Dictionary<int, string> GetShoeSizes()
    {
        return GetLookup(LookupsMySqlQueries.GetShoeSizes);
    }

    public Dictionary<int, string> GetSleepingBagConditions()
    {
        return GetLookup(LookupsMySqlQueries.GetSleepingBagConditions);
    }

    public Dictionary<int, string> GetTentConditions()
    {
        return GetLookup(LookupsMySqlQueries.GetTentConditions);
    }

    public Dictionary<int, string> GetTentUsages()
    {
        return GetLookup(LookupsMySqlQueries.GetTentUsages);
    }
    
    public Core.Lookups.Lookups GetLookups(int outreachTeamId)
    {
        // GET CUSHION CONDITIONS.
        Dictionary<string, object?> parameters = new(){{"@OutreachTeamId", outreachTeamId}};
        var reader = ExecuteReader(LookupsMySqlQueries.GetLookups, parameters);
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
    private Dictionary<int, string> GetLookup(string mySqlQuery)
    {
        // GET CUSHION CONDITIONS.
        var reader = ExecuteReader(mySqlQuery);
        return GetLookupFromReader(reader);
    }

    private Dictionary<int, string> GetLookupFromReader(MySqlDataReader reader)
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
