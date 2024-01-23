namespace UnhousedOutreach.Database.OutreachTeams;

internal static class OutreachTeamsMySqlQueries
{
    internal static readonly string GetOutreachTeams = @"
SELECT OutreachTeamId, Name
FROM OutreachTeam";
    internal static readonly string SetOutreachTeam = @"
INSERT INTO OutreachTeam
VALUES (@OutreachTeamId, @Name)
ON DUPLICATE KEY UPDATE
    OutreachTeamId = @OutreachTeamId,
    Name = @Name";
}