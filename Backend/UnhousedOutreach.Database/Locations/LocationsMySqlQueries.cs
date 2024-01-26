namespace UnhousedOutreach.Database.Locations;

internal static class LocationsMySqlQueries
{
    internal static readonly string GetLocations = @"
SELECT
    LocationId,
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
}