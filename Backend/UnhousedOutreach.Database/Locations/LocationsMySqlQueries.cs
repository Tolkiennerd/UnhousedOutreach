namespace UnhousedOutreach.Database.Locations;

internal static class LocationsMySqlQueries
{
    internal static readonly string GetLocations = @"
SELECT
    LocationId,
    Name,
    LocationTypeId,
    Latitude,
    Longitude,
    Address,
    City,
    State,
    ZipCode,
    IsLegal,
    ArrivalDate,
    Comments
FROM Location
WHERE OutreachTeamId = @OutreachTeamId";
    internal static readonly string SetLocation = @"
INSERT INTO Location
VALUES (
    @LocationId,
    @Name,
    @LocationTypeId,
    @Latitude,
    @Longitude,
    @Address,
    @City,
    @State,
    @ZipCode,
    @IsLegal,
    @ArrivalDate,
    @Comments,
    @OutreachTeamId
)
ON DUPLICATE KEY UPDATE
    LocationId = @LocationId,
    Name = @Name,
    LocationTypeId = @LocationTypeId,
    Latitude = @Latitude,
    Longitude = @Longitude,
    Address = @Address,
    City = @City,
    State = @State,
    ZipCode = @ZipCode,
    IsLegal = @IsLegal,
    ArrivalDate = @ArrivalDate,
    Comments = @Comments,
    OutreachTeamId = @OutreachTeamId";

    internal static readonly string GetLocationsWithNeighbors = @"
SELECT
    Location.LocationId,
    Location.LocationTypeId,
    Location.Latitude,
    Location.Longitude,
    Location.Address,
    Location.City,
    Location.State,
    Location.ZipCode,
    Location.IsLegal,
    Tent.TentId,
    Tent.PersonSize,
    Tent.TentConditionId,
    Tent.TarpCount,
    Tent.TentUsageId,
    Tent.Comments,
    Location.Comments AS LocationComments,
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
FROM Location
    LEFT JOIN Tent
        ON Location.LocationId = Tent.LocationId
    LEFT JOIN HousingInsecureNeighbor
        ON Location.LocationId = HousingInsecureNeighbor.LocationId
    LEFT JOIN Location AS DesiredLocation
        ON HousingInsecureNeighbor.LocationId = DesiredLocation.LocationId
    LEFT JOIN CaseManager
        ON HousingInsecureNeighbor.CaseManagerId = CaseManager.CaseManagerId
    LEFT JOIN SupportServiceOrganization
        ON CaseManager.SupportServiceOrganizationId = SupportServiceOrganization.SupportServiceOrganizationId
WHERE
    Location.OutreachTeamId = @OutreachTeamId
        AND
    HousingInsecureNeighbor.OutreachTeamId = @OutreachTeamId
        AND
    Tent.OutreachTeamId = @OutreachTeamId    
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

SELECT HousingInsecureNeighborId, NeedId
FROM HousingInsecureNeighborNeed
WHERE OutreachTeamId = @OutreachTeamId;

SELECT HousingInsecureNeighborId, SkillId
FROM HousingInsecureNeighborSkill
WHERE OutreachTeamId = @OutreachTeamId;
"; 
}