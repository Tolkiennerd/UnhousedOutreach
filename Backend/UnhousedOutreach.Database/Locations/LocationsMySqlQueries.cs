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
    Comments = @Comments,
    OutreachTeamId = @OutreachTeamId";
}