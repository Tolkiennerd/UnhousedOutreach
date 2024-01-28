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
    internal static readonly string GetRequests = "SELECT RequestId, Request FROM Request WHERE OutreachTeamId=@OutreachTeamId";
    internal static readonly string GetShirtSizes = "SELECT ShirtSizeId, ShirtSize FROM ShirtSize";
    internal static readonly string GetShoeSizes = "SELECT ShoeSizeId, ShoeSize FROM ShoeSize";
    internal static readonly string GetSleepingBagConditions = "SELECT SleepingBagConditionId, SleepingBagCondition FROM SleepingBagCondition";
    internal static readonly string GetTentConditions = "SELECT TentConditionId, TentCondition FROM TentCondition";
    internal static readonly string GetTentUsages = "SELECT TentUsageId, TentUsage FROM TentUsage";
    internal static readonly string GetLookups = string.Join(';', [
        GetCushionConditions,
        GetCushionTypes,
        GetDisabilities,
        GetEthnicities,
        GetGenders,
        GetHousingStatuses,
        GetLocationTypes,
        GetPantsSizes,
        GetRequests,
        GetShirtSizes,
        GetShoeSizes,
        GetSleepingBagConditions,
        GetTentConditions,
        GetTentUsages
    ]);
    internal static readonly string SetCushionCondition = @"
INSERT INTO CushionCondition
VALUES (@CushionConditionId, @CushionCondition)
ON DUPLICATE KEY UPDATE
    CushionConditionId = @CushionConditionId,
    CushionCondition = @CushionCondition";
    internal static readonly string SetCushionType = @"
INSERT INTO CushionType
VALUES (@CushionTypeId, @CushionType)
ON DUPLICATE KEY UPDATE
    CushionTypeId = @CushionTypeId,
    CushionType = @CushionType";
    internal static readonly string SetDisability = @"
INSERT INTO Disability
VALUES (@DisabilityId, @Disability)
ON DUPLICATE KEY UPDATE
    DisabilityId = @DisabilityId,
    Disability = @Disability";
    internal static readonly string SetEthnicity = @"
INSERT INTO Ethnicity
VALUES (@EthnicityId, @Ethnicity)
ON DUPLICATE KEY UPDATE
    EthnicityId = @EthnicityId,
    Ethnicity = @Ethnicity";
    internal static readonly string SetGender = @"
INSERT INTO Gender
VALUES (@GenderId, @Gender)
ON DUPLICATE KEY UPDATE
    GenderId = @GenderId,
    Gender = @Gender";
    internal static readonly string SetHousingStatus = @"
INSERT INTO HousingStatus
VALUES (@HousingStatusId, @HousingStatus)
ON DUPLICATE KEY UPDATE
    HousingStatusId = @HousingStatusId,
    HousingStatus = @HousingStatus";
    internal static readonly string SetLocationType = @"
INSERT INTO LocationType
VALUES (@LocationTypeId, @LocationType)
ON DUPLICATE KEY UPDATE
    LocationTypeId = @LocationTypeId,
    LocationType = @LocationType";
    internal static readonly string SetPantsSize = @"
INSERT INTO PantsSize
VALUES (@PantsSizeId, @PantsSize)
ON DUPLICATE KEY UPDATE
    PantsSizeId = @PantsSizeId,
    PantsSize = @PantsSize";
    internal static readonly string SetRequest = @"
INSERT INTO Request
VALUES (@RequestId, @Request, @OutreachTeamId)
ON DUPLICATE KEY UPDATE
    RequestId = @RequestId,
    Request = @Request,
    OutreachTeamId = @OutreachTeamId";
    internal static readonly string SetShirtSize = @"
INSERT INTO ShirtSize
VALUES (@ShirtSizeId, @ShirtSize)
ON DUPLICATE KEY UPDATE
    ShirtSizeId = @ShirtSizeId,
    ShirtSize = @ShirtSize";
    internal static readonly string SetShoeSize = @"
INSERT INTO ShoeSize
VALUES (@ShoeSizeId, @ShoeSize)
ON DUPLICATE KEY UPDATE
    ShoeSizeId = @ShoeSizeId,
    ShoeSize = @ShoeSize";
    internal static readonly string SetSleepingBagCondition = @"
INSERT INTO SleepingBagCondition
VALUES (@SleepingBagConditionId, @SleepingBagCondition)
ON DUPLICATE KEY UPDATE
    SleepingBagConditionId = @SleepingBagConditionId,
    SleepingBagCondition = @SleepingBagCondition";
    internal static readonly string SetTentCondition = @"
INSERT INTO TentCondition
VALUES (@TentConditionId, @TentCondition)
ON DUPLICATE KEY UPDATE
    TentConditionId = @TentConditionId,
    TentCondition = @TentCondition";
    internal static readonly string SetTentUsage = @"
INSERT INTO TentUsage
VALUES (@TentUsageId, @TentUsage)
ON DUPLICATE KEY UPDATE
    TentUsageId = @TentUsageId,
    TentUsage = @TentUsage";
}