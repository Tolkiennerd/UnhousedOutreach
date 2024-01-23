namespace UnhousedOutreach.Database.Lookups;

internal static class LookupsMySqlQueries
{
    internal static readonly string GetCushionConditions = "SELECT CushionConditionId, CushionCondition FROM CushionCondition";
    internal static readonly string GetCushionTypes = "SELECT CushionTypeId, CushionType FROM CushionType";
    internal static readonly string GetDisabilities = "SELECT DisabilityId, Disability FROM Disability";
    internal static readonly string GetEthnicities = "SELECT EthnicityId, Ethnicity FROM Ethnicity";
    internal static readonly string GetGenders = "SELECT GenderId, Gender FROM Gender";
    internal static readonly string GetHousingStatuses = "SELECT HousingStatusId, HousingStatus FROM HousingStatus";
    internal static readonly string GetLocationTypes = "SELECT LocationTypeId, LocationType FROM LocationType";
    internal static readonly string GetPantsSizes = "SELECT PantsSizeId, PantsSize FROM PantsSize";
    internal static readonly string GetRequests = "SELECT RequestId, Request FROM Request";
    internal static readonly string GetShirtSizes = "SELECT ShirtSizeId, ShirtSize FROM ShirtSize";
    internal static readonly string GetShoeSizes = "SELECT ShoeSizeId, ShoeSize FROM ShoeSize";
    internal static readonly string GetSleepingBagConditions = "SELECT SleepingBagConditionId, SleepingBagCondition FROM SleepingBagCondition";
    internal static readonly string GetTentConditions = "SELECT TentConditionId, TentCondition FROM TentCondition";
    internal static readonly string GetTentUsages = "SELECT TentUsageId, TentUsage FROM TentUsage";
    internal static readonly string SetCushionCondition = @"
INSERT INTO CushionCondition
VALUES (@cushion_condition_id, @cushion_condition)
ON DUPLICATE KEY UPDATE
    CushionConditionId = @cushion_condition_id,
    CushionCondition = @cushion_condition";
    internal static readonly string SetCushionType = @"
INSERT INTO CushionType
VALUES (@cushion_type_id, @cushion_type)
ON DUPLICATE KEY UPDATE
    CushionTypeId = @cushion_type_id,
    CushionType = @cushion_type";
    internal static readonly string SetDisability = @"
INSERT INTO Disability
VALUES (@disability_id, @disability)
ON DUPLICATE KEY UPDATE
    DisabilityId = @disability_id,
    Disability = @disability";
    internal static readonly string SetEthnicity = @"
INSERT INTO Ethnicity
VALUES (@ethnicity_id, @ethnicity)
ON DUPLICATE KEY UPDATE
    EthnicityId = @ethnicity_id,
    Ethnicity = @ethnicity";
    internal static readonly string SetGender = @"
INSERT INTO Gender
VALUES (@gender_id, @gender)
ON DUPLICATE KEY UPDATE
    GenderId = @gender_id,
    Gender = @gender";
    internal static readonly string SetHousingStatus = @"
INSERT INTO HousingStatus
VALUES (@housing_status_id, @housing_status)
ON DUPLICATE KEY UPDATE
    HousingStatusId = @housing_status_id,
    HousingStatus = @housing_status";
    internal static readonly string SetLocationType = @"
INSERT INTO LocationType
VALUES (@location_type_id, @location_type)
ON DUPLICATE KEY UPDATE
    LocationTypeId = @location_type_id,
    LocationType = @location_type";
    internal static readonly string SetPantsSize = @"
INSERT INTO PantsSize
VALUES (@pants_size_id, @pants_size)
ON DUPLICATE KEY UPDATE
    PantsSizeId = @pants_size_id,
    PantsSize = @pants_size";
    internal static readonly string SetRequest = @"
INSERT INTO Request
VALUES (@request_id, @request)
ON DUPLICATE KEY UPDATE
    RequestId = @request_id,
    Request = @request";
    internal static readonly string SetShirtSize = @"
INSERT INTO ShirtSize
VALUES (@shirt_size_id, @shirt_size)
ON DUPLICATE KEY UPDATE
    ShirtSizeId = @shirt_size_id,
    ShirtSize = @shirt_size";
    internal static readonly string SetShoeSize = @"
INSERT INTO ShoeSize
VALUES (@shoe_size_id, @shoe_size)
ON DUPLICATE KEY UPDATE
    ShoeSizeId = @shoe_size_id,
    ShoeSize = @shoe_size";
    internal static readonly string SetSleepingBagCondition = @"
INSERT INTO SleepingBagCondition
VALUES (@sleeping_bag_condition_id, @sleeping_bag_condition)
ON DUPLICATE KEY UPDATE
    SleepingBagConditionId = @sleeping_bag_condition_id,
    SleepingBagCondition = @sleeping_bag_condition";
    internal static readonly string SetTentCondition = @"
INSERT INTO TentCondition
VALUES (@tent_condition_id, @tent_condition)
ON DUPLICATE KEY UPDATE
    TentConditionId = @tent_condition_id,
    TentCondition = @tent_condition";
    internal static readonly string SetTentUsage = @"
INSERT INTO TentUsage
VALUES (@tent_usage_id, @tent_usage)
ON DUPLICATE KEY UPDATE
    TentUsageId = @tent_usage_id,
    TentUsage = @tent_usage";
}