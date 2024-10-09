namespace UnhousedOutreach.Database.Lookups;

internal static class LookupsMySqlQueries
{
    internal static readonly string GetCushionConditions = "SELECT CushionConditionId, CushionCondition FROM CushionCondition WHERE OutreachTeamId=@OutreachTeamId";
    internal static readonly string GetCushionTypes = "SELECT CushionTypeId, CushionType FROM CushionType WHERE OutreachTeamId=@OutreachTeamId";
    internal static readonly string GetDisabilities = "SELECT DisabilityId, Disability FROM Disability WHERE OutreachTeamId=@OutreachTeamId";
    internal static readonly string GetEnglishLevel = "SELECT EnglishLevelId, EnglishLevel FROM EnglishLevel WHERE OutreachTeamID=@OutreachTeamId";
    internal static readonly string GetEthnicities = "SELECT EthnicityId, Ethnicity FROM Ethnicity WHERE OutreachTeamId=@OutreachTeamId";
    internal static readonly string GetGenders = "SELECT GenderId, Gender FROM Gender WHERE OutreachTeamId=@OutreachTeamId";
    internal static readonly string GetHousingStatuses = "SELECT HousingStatusId, HousingStatus FROM HousingStatus WHERE OutreachTeamId=@OutreachTeamId";
    internal static readonly string GetLocationTypes = "SELECT LocationTypeId, LocationType FROM LocationType WHERE OutreachTeamId=@OutreachTeamId";
    internal static readonly string GetPantsSizes = "SELECT PantsSizeId, PantsSize FROM PantsSize WHERE OutreachTeamId=@OutreachTeamId";
    internal static readonly string GetNeeds = "SELECT NeedId, Need FROM Need WHERE OutreachTeamId=@OutreachTeamId";
    internal static readonly string GetShirtSizes = "SELECT ShirtSizeId, ShirtSize FROM ShirtSize WHERE OutreachTeamId=@OutreachTeamId";
    internal static readonly string GetShoeSizes = "SELECT ShoeSizeId, ShoeSize FROM ShoeSize WHERE OutreachTeamId=@OutreachTeamId";
    internal static readonly string GetSkills = "SELECT SkillId, Skill FROM Skill WHERE OutreachTeamId=@OutreachTeamId";
    internal static readonly string GetSleepingBagConditions = "SELECT SleepingBagConditionId, SleepingBagCondition FROM SleepingBagCondition WHERE OutreachTeamId=@OutreachTeamId";
    internal static readonly string GetTentConditions = "SELECT TentConditionId, TentCondition FROM TentCondition WHERE OutreachTeamId=@OutreachTeamId";
    internal static readonly string GetTentUsages = "SELECT TentUsageId, TentUsage FROM TentUsage WHERE OutreachTeamId=@OutreachTeamId";
    internal static readonly string GetLookups = string.Join(';', [
        GetCushionConditions,
        GetCushionTypes,
        GetDisabilities,
        GetEnglishLevel,
        GetEthnicities,
        GetGenders,
        GetHousingStatuses,
        GetLocationTypes,
        GetPantsSizes,
        GetNeeds,
        GetShirtSizes,
        GetShoeSizes,
        GetSkills,
        GetSleepingBagConditions,
        GetTentConditions,
        GetTentUsages
    ]);
    internal static readonly string SetCushionCondition = @"
INSERT INTO CushionCondition
VALUES (@CushionConditionId, @CushionCondition, @OutreachTeamId)
ON DUPLICATE KEY UPDATE
    CushionConditionId = @CushionConditionId,
    CushionCondition = @CushionCondition,
    OutreachTeamId = @OutreachTeamId";
    internal static readonly string SetCushionType = @"
INSERT INTO CushionType
VALUES (@CushionTypeId, @CushionType, @OutreachTeamId)
ON DUPLICATE KEY UPDATE
    CushionTypeId = @CushionTypeId,
    CushionType = @CushionType,
    OutreachTeamId = @OutreachTeamId";
    internal static readonly string SetDisability = @"
INSERT INTO Disability
VALUES (@DisabilityId, @Disability, @OutreachTeamId)
ON DUPLICATE KEY UPDATE
    DisabilityId = @DisabilityId,
    Disability = @Disability,
    OutreachTeamId = @OutreachTeamId";
    internal static readonly string SetEthnicity = @"
INSERT INTO Ethnicity
VALUES (@EthnicityId, @Ethnicity, @OutreachTeamId)
ON DUPLICATE KEY UPDATE
    EthnicityId = @EthnicityId,
    Ethnicity = @Ethnicity,
    OutreachTeamId = @OutreachTeamId";
    internal static readonly string SetGender = @"
INSERT INTO Gender
VALUES (@GenderId, @Gender, @OutreachTeamId)
ON DUPLICATE KEY UPDATE
    GenderId = @GenderId,
    Gender = @Gender,
    OutreachTeamId = @OutreachTeamId";
    internal static readonly string SetHousingStatus = @"
INSERT INTO HousingStatus
VALUES (@HousingStatusId, @HousingStatus, @OutreachTeamId)
ON DUPLICATE KEY UPDATE
    HousingStatusId = @HousingStatusId,
    HousingStatus = @HousingStatus,
    OutreachTeamId = @OutreachTeamId";
    internal static readonly string SetLocationType = @"
INSERT INTO LocationType
VALUES (@LocationTypeId, @LocationType, @OutreachTeamId)
ON DUPLICATE KEY UPDATE
    LocationTypeId = @LocationTypeId,
    LocationType = @LocationType,
    OutreachTeamId = @OutreachTeamId";
    internal static readonly string SetPantsSize = @"
INSERT INTO PantsSize
VALUES (@PantsSizeId, @PantsSize, @OutreachTeamId)
ON DUPLICATE KEY UPDATE
    PantsSizeId = @PantsSizeId,
    PantsSize = @PantsSize,
    OutreachTeamId = @OutreachTeamId";
    internal static readonly string SetNeed = @"
INSERT INTO Need
VALUES (@NeedId, @Need, @OutreachTeamId)
ON DUPLICATE KEY UPDATE
    NeedId = @NeedId,
    Need = @Need,
    OutreachTeamId = @OutreachTeamId";
    internal static readonly string SetShirtSize = @"
INSERT INTO ShirtSize
VALUES (@ShirtSizeId, @ShirtSize, @OutreachTeamId)
ON DUPLICATE KEY UPDATE
    ShirtSizeId = @ShirtSizeId,
    ShirtSize = @ShirtSize,
    OutreachTeamId = @OutreachTeamId";
    internal static readonly string SetShoeSize = @"
INSERT INTO ShoeSize
VALUES (@ShoeSizeId, @ShoeSize, @OutreachTeamId)
ON DUPLICATE KEY UPDATE
    ShoeSizeId = @ShoeSizeId,
    ShoeSize = @ShoeSize,
    OutreachTeamId = @OutreachTeamId";
    internal static readonly string SetSkill = @"
INSERT INTO Skill
VALUES (@SkillId, @Skill, @OutreachTeamId)
ON DUPLICATE KEY UPDATE
    SkillId = @SkillId,
    Skill = @Skill,
    OutreachTeamId = @OutreachTeamId";
    internal static readonly string SetSleepingBagCondition = @"
INSERT INTO SleepingBagCondition
VALUES (@SleepingBagConditionId, @SleepingBagCondition, @OutreachTeamId)
ON DUPLICATE KEY UPDATE
    SleepingBagConditionId = @SleepingBagConditionId,
    SleepingBagCondition = @SleepingBagCondition,
    OutreachTeamId = @OutreachTeamId";
    internal static readonly string SetTentCondition = @"
INSERT INTO TentCondition
VALUES (@TentConditionId, @TentCondition, @OutreachTeamId)
ON DUPLICATE KEY UPDATE
    TentConditionId = @TentConditionId,
    TentCondition = @TentCondition,
    OutreachTeamId = @OutreachTeamId";
    internal static readonly string SetTentUsage = @"
INSERT INTO TentUsage
VALUES (@TentUsageId, @TentUsage, @OutreachTeamId)
ON DUPLICATE KEY UPDATE
    TentUsageId = @TentUsageId,
    TentUsage = @TentUsage,
    OutreachTeamId = @OutreachTeamId";
}