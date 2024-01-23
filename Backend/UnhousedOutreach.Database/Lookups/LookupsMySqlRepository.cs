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
    #endregion

    #region Set Methods
    public async Task SetCushionCondition(int? id, string value)
    {
        await SetLookup(LookupsMySqlQueries.SetCushionCondition, "@cushion_condition_id", "@cushion_condition", id, value);
    }

    public async Task SetCushionType(int? id, string value)
    {
        await SetLookup(LookupsMySqlQueries.SetCushionType, "@cushion_type_id", "@cushion_type", id, value);
    }

    public async Task SetDisability(int? id, string value)
    {
        await SetLookup(LookupsMySqlQueries.SetDisability, "@disability_id", "@disability", id, value);
    }

    public async Task SetEthnicity(int? id, string value)
    {
        await SetLookup(LookupsMySqlQueries.SetEthnicity, "@ethnicity_id", "@ethnicity", id, value);
    }

    public async Task SetGender(int? id, string value)
    {
        await SetLookup(LookupsMySqlQueries.SetGender, "@gender_id", "@gender", id, value);
    }

    public async Task SetHousingStatus(int? id, string value)
    {
        await SetLookup(LookupsMySqlQueries.SetHousingStatus, "@housing_status_id", "@housing_status", id, value);
    }

    public async Task SetLocationType(int? id, string value)
    {
        await SetLookup(LookupsMySqlQueries.SetLocationType, "@location_type_id", "@location_type", id, value);
    }

    public async Task SetPantsSize(int? id, string value)
    {
        await SetLookup(LookupsMySqlQueries.SetPantsSize, "@pants_size_id", "@pants_size", id, value);
    }

    public async Task SetRequest(int? id, string value)
    {
        await SetLookup(LookupsMySqlQueries.SetRequest, "@request_id", "@request", id, value);
    }

    public async Task SetShirtSize(int? id, string value)
    {
        await SetLookup(LookupsMySqlQueries.SetShirtSize, "@shirt_size_id", "@shirt_size", id, value);
    }

    public async Task SetShoeSize(int? id, string value)
    {
        await SetLookup(LookupsMySqlQueries.SetShoeSize, "@shoe_size_id", "@shoe_size", id, value);
    }

    public async Task SetSleepingBagCondition(int? id, string value)
    {
        await SetLookup(LookupsMySqlQueries.SetSleepingBagCondition, "@sleeping_bag_condition_id", "@sleeping_bag_condition", id, value);
    }

    public async Task SetTentCondition(int? id, string value)
    {
        await SetLookup(LookupsMySqlQueries.SetTentCondition, "@tent_condition_id", "@tent_condition", id, value);
    }

    public async Task SetTentUsage(int? id, string value)
    {
        await SetLookup(LookupsMySqlQueries.SetTentUsage, "@tent_usage_id", "@tent_usage", id, value);
    }
    #endregion

    #region Private Methods
    private Dictionary<int, string> GetLookup(string mySqlQuery)
    {
        // GET CUSHION CONDITIONS.
        var reader = ExecuteReader(mySqlQuery);
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
    #endregion
}
