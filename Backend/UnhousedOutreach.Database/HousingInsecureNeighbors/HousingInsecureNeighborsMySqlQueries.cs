namespace UnhousedOutreach.Database.HousingInsecureNeighbors;

internal static class HousingInsecureNeighborsMySqlQueries
{
    internal static readonly string GetHousingInsecureNeighbors = @"
SELECT
    HousingInsecureNeighbor.HousingInsecureNeighborId,
    HousingInsecureNeighbor.FirstName,
    HousingInsecureNeighbor.LastName,
    HousingInsecureNeighbor.PreferredName,
    HousingInsecureNeighbor.DateOfBirth,
    HousingInsecureNeighbor.GenderId,
    HousingInsecureNeighbor.PhoneNumber,
    HousingInsecureNeighbor.EmailAddress,
    HousingInsecureNeighbor.HousingStatusId,
    HousingInsecureNeighbor.IsHoused,
    HousingInsecureNeighbor.IsVeteran,
    HousingInsecureNeighbor.HasIdentification,
    HousingInsecureNeighbor.IsCitizen,
    HousingInsecureNeighbor.CoatOrJacketCount,
    HousingInsecureNeighbor.ShirtSizeId,
    HousingInsecureNeighbor.ShoeSizeId,
    HousingInsecureNeighbor.PantsSizeId,
    HousingInsecureNeighbor.CushionTypeId,
    HousingInsecureNeighbor.CushionConditionId,
    HousingInsecureNeighbor.BlanketCount,
    HousingInsecureNeighbor.HasSleepingBag,
    HousingInsecureNeighbor.SleepingBagConditionId,
    HousingInsecureNeighbor.SleepingBagTemperatureThresholdFahrenheit,
    HousingInsecureNeighbor.Comments,
    NeighborLocation.LocationId AS NeighborLocationId,
    NeighborLocation.LocationTypeId AS NeighborLocationTypeId,
    NeighborLocation.Latitude AS NeighborLocationLatitude,
    NeighborLocation.Longitude AS NeighborLocationLongitude,
    NeighborLocation.Address AS NeighborLocationAddress,
    NeighborLocation.City AS NeighborLocationCity,
    NeighborLocation.State AS NeighborLocationState,
    NeighborLocation.ZipCode AS NeighborLocationZipCode,
    NeighborLocation.IsLegal AS NeighborLocationIsLegal,
    NeighborLocation.Comments AS NeighborLocationComments,
    CaseManager.CaseManagerId,
    SupportServiceOrganization.SupportServiceOrganizationId,
    SupportServiceOrganization.Name AS CaseManagerOrganizationName,
    CaseManager.FirstName AS CaseManagerFirstName,
    CaseManager.LastName AS CaseManagerLastName,
    CaseManager.PreferredName AS CaseManagerPreferredName,
    CaseManager.GenderId AS CaseManagerGenderId,
    CaseManager.PhoneNumber AS CaseManagerPhoneNumber,
    CaseManager.EmailAddress AS CaseManagerEmailAddress,
    CaseManager.Comments AS CaseManagerComments,
    DesiredLocation.LocationId AS DesiredLocationId,
    DesiredLocation.LocationTypeId AS DesiredLocationTypeId,
    DesiredLocation.Latitude AS DesiredLocationLatitude,
    DesiredLocation.Longitude AS DesiredLocationLongitude,
    DesiredLocation.Address AS DesiredLocationAddress,
    DesiredLocation.City AS DesiredLocationCity,
    DesiredLocation.State AS DesiredLocationState,
    DesiredLocation.ZipCode AS DesiredLocationZipCode,
    DesiredLocation.IsLegal AS DesiredLocationIsLegal,
    DesiredLocation.Comments AS DesiredLocationComments
FROM HousingInsecureNeighbor
    LEFT JOIN Location AS NeighborLocation
        ON HousingInsecureNeighbor.LocationId = NeighborLocation.LocationId
    LEFT JOIN Location AS DesiredLocation
        ON HousingInsecureNeighbor.LocationId = DesiredLocation.LocationId
    LEFT JOIN CaseManager
        ON HousingInsecureNeighbor.CaseManagerId = CaseManager.CaseManagerId
    LEFT JOIN SupportServiceOrganization
        ON CaseManager.SupportServiceOrganizationId = SupportServiceOrganization.SupportServiceOrganizationId
WHERE HousingInsecureNeighbor.OutreachTeamId = @OutreachTeamId
;

SELECT HousingInsecureNeighborId, DisabilityId
FROM HousingInsecureNeighborDisability
WHERE OutreachTeamId = @OutreachTeamId;

SELECT HousingInsecureNeighborId, EthnicityId
FROM HousingInsecureNeighborEthnicity
WHERE OutreachTeamId = @OutreachTeamId;

SELECT
    HousingInsecureNeighborFamilyMemberId,
    HousingInsecureNeighborId,
    FirstName,
    LastName,
    PreferredName,
    RelationshipToNeighbor,
    GenderId,
    PhoneNumber,
    EmailAddress,
    IsHoused,
    Comments
FROM HousingInsecureNeighborFamilyMember
WHERE OutreachTeamId = @OutreachTeamId;

SELECT HousingInsecureNeighborId, RequestId
FROM HousingInsecureNeighborRequest
WHERE OutreachTeamId = @OutreachTeamId;

SELECT HousingInsecureNeighborId, SkillId
FROM HousingInsecureNeighborSkill
WHERE OutreachTeamId = @OutreachTeamId;

SELECT
    HousingInsecureNeighborTent.HousingInsecureNeighborId,
    Tent.TentId,
    Tent.PersonSize,
    Tent.TentConditionId,
    Tent.TarpCount,
    Tent.TentUsageId,
    Tent.Comments,
    Location.LocationId,
    Location.LocationTypeId,
    Location.Latitude,
    Location.Longitude,
    Location.Address,
    Location.City,
    Location.State,
    Location.ZipCode,
    Location.IsLegal,
    Location.Comments AS LocationComments
FROM HousingInsecureNeighborTent
    INNER JOIN Tent
        ON HousingInsecureNeighborTent.TentId = Tent.TentId
    LEFT JOIN Location
        ON Tent.LocationId = Location.LocationId
WHERE HousingInsecureNeighborTent.OutreachTeamId = @OutreachTeamId
"; 
    internal static readonly string SetHousingInsecureNeighbor = @"
INSERT INTO HousingInsecureNeighbor
VALUES (
    @HousingInsecureNeighborId,
    @FirstName,
    @LastName,
    @PreferredName,
    @DateOfBirth,
    @GenderId,
    @PhoneNumber,
    @EmailAddress,
    @HousingStatusId,
    @IsHoused,
    @IsVeteran,
    @HasIdentification,
    @IsCitizen,
    @CoatOrJacketCount,
    @ShirtSizeId,
    @ShoeSizeId,
    @PantsSizeId,
    @CaseManagerId,
    @LocationId,
    @DesiredLocationId,
    @CushionTypeId,
    @CushionConditionId,
    @BlanketCount,
    @HasSleepingBag,
    @SleepingBagConditionId,
    @SleepingBagTemperatureThresholdFahrenheit,
    @Comments,
    @OutreachTeamId
)
ON DUPLICATE KEY UPDATE
    HousingInsecureNeighborId = @HousingInsecureNeighborId,
    FirstName = @FirstName,
    LastName = @LastName,
    PreferredName = @PreferredName,
    DateOfBirth = @DateOfBirth,
    GenderId = @GenderId,
    PhoneNumber = @PhoneNumber,
    EmailAddress = @EmailAddress,
    HousingStatusId = @HousingStatusId,
    IsHoused = @IsHoused,
    IsVeteran = @IsVeteran,
    HasIdentification = @HasIdentification,
    IsCitizen = @IsCitizen,
    CoatOrJacketCount = @CoatOrJacketCount,
    ShirtSizeId = @ShirtSizeId,
    ShoeSizeId = @ShoeSizeId,
    PantsSizeId = @PantsSizeId,
    CaseManagerId = @CaseManagerId,
    LocationId = @LocationId,
    DesiredLocationId = @DesiredLocationId,
    CushionTypeId = @CushionTypeId,
    CushionConditionId = @CushionConditionId,
    BlanketCount = @BlanketCount,
    HasSleepingBag = @HasSleepingBag,
    SleepingBagConditionId = @SleepingBagConditionId,
    SleepingBagTemperatureThresholdFahrenheit = @SleepingBagTemperatureThresholdFahrenheit,
    Comments = @Comments,
    OutreachTeamId = @OutreachTeamId;

INSERT INTO HousingStatusHistory
VALUES (
    (SELECT IF (@HousingInsecureNeighborId=0, HousingInsecureNeighborId, @HousingInsecureNeighborId)
    FROM HousingInsecureNeighbor ORDER BY HousingInsecureNeighborId DESC LIMIT 1),
    @HousingStatusId, 
    CURRENT_DATE());

INSERT INTO IsHousedHistory
VALUES (
    (SELECT IF (@HousingInsecureNeighborId=0, HousingInsecureNeighborId, @HousingInsecureNeighborId)
    FROM HousingInsecureNeighbor ORDER BY HousingInsecureNeighborId DESC LIMIT 1),
    @IsHoused,
    CURRENT_DATE());

INSERT INTO LocationHistory
VALUES (
    (SELECT IF (@HousingInsecureNeighborId=0, HousingInsecureNeighborId, @HousingInsecureNeighborId)
    FROM HousingInsecureNeighbor ORDER BY HousingInsecureNeighborId DESC LIMIT 1),
    @LocationId,
    CURRENT_DATE());
";
    internal static readonly string SetHousingInsecureNeighborDisability = @"
INSERT INTO HousingInsecureNeighborDisability
VALUES (@HousingInsecureNeighborId, @DisabilityId, @OutreachTeamId)
";
    internal static readonly string SetHousingInsecureNeighborEthnicity = @"
INSERT INTO HousingInsecureNeighborEthnicity
VALUES (@HousingInsecureNeighborId, @EthnicityId, @OutreachTeamId)
";
    internal static readonly string SetHousingInsecureNeighborRequest = @"
INSERT INTO HousingInsecureNeighborRequest
VALUES (@HousingInsecureNeighborId, @RequestId, @OutreachTeamId)
";
    internal static readonly string SetHousingInsecureNeighborSkill = @"
INSERT INTO HousingInsecureNeighborSkill
VALUES (@HousingInsecureNeighborId, @SkillId, @OutreachTeamId)
";
    internal static readonly string SetHousingInsecureNeighborTent = @"
INSERT INTO HousingInsecureNeighborTent
VALUES (@HousingInsecureNeighborId, @TentId, @OutreachTeamId)
";
    internal static readonly string SetHousingInsecureNeighborFamilyMember = @"
INSERT INTO HousingInsecureNeighborFamilyMember
VALUES (
    @HousingInsecureNeighborFamilyMemberId,
    @HousingInsecureNeighborId,
    @FirstName,
    @LastName,
    @PreferredName,
    @RelationshipToNeighbor,
    @GenderId,
    @PhoneNumber,
    @EmailAddress,
    @IsHoused,
    @Comments,
    @OutreachTeamId
)
ON DUPLICATE KEY UPDATE
    HousingInsecureNeighborFamilyMemberId = @HousingInsecureNeighborFamilyMemberId,
    HousingInsecureNeighborId = @HousingInsecureNeighborId,
    FirstName = @FirstName,
    LastName = @LastName,
    PreferredName = @PreferredName,
    RelationshipToNeighbor = @RelationshipToNeighbor,
    GenderId = @GenderId,
    PhoneNumber = @PhoneNumber,
    EmailAddress = @EmailAddress,
    IsHoused = @IsHoused,
    Comments = @Comments,
    OutreachTeamId = @OutreachTeamId
";
    internal static readonly string DeleteHousingInsecureNeighborRequest = @"
DELETE FROM HousingInsecureNeighborRequest
WHERE
    HousingInsecureNeighborId = @HousingInsecureNeighborId
        AND
    RequestId = @RequestId
        AND
    OutreachTeamId = @OutreachTeamId
";
    internal static readonly string DeleteHousingInsecureNeighborEthnicity = @"
DELETE FROM HousingInsecureNeighborEthnicity
WHERE
    HousingInsecureNeighborId = @HousingInsecureNeighborId
        AND
    EthnicityId = @EthnicityId
        AND
    OutreachTeamId = @OutreachTeamId
";
}