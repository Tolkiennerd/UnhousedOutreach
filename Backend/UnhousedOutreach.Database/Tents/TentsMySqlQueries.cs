namespace UnhousedOutreach.Database.Tents;

internal static class TentsMySqlQueries
{
    internal static readonly string GetTents = @"
SELECT
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
FROM Tent
    LEFT JOIN Location
        ON Tent.LocationId = Location.LocationId
WHERE Tent.OutreachTeamId = @OutreachTeamId";
    internal static readonly string SetTent = @"
INSERT INTO Tent
VALUES (
    @TentId,
    @LocationId,
    @PersonSize,
    @TentConditionId,
    @TarpCount,
    @TentUsageId,
    @Comments,
    @OutreachTeamId
)
ON DUPLICATE KEY UPDATE
    TentId = @TentId,
    LocationId = @LocationId,
    PersonSize = @PersonSize,
    TentConditionId = @TentConditionId,
    TarpCount = @TarpCount,
    TentUsageId = @TentUsageId,
    Comments = @Comments,
    OutreachTeamId = @OutreachTeamId";
}