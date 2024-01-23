namespace UnhousedOutreach.Database.SupportServiceOrganizations;

internal static class SupportServiceOrganizationsMySqlQueries
{
    internal static readonly string GetSupportServiceOrganizations = @"
SELECT
    SupportServiceOrganizationId,
    Name,
    Comments
FROM SupportServiceOrganization
WHERE OutreachTeamId = @OutreachTeamId";
    internal static readonly string SetSupportServiceOrganization = @"
INSERT INTO SupportServiceOrganization
VALUES (
    @SupportServiceOrganizationId,
    @Name,
    @Comments,
    @OutreachTeamId
)
ON DUPLICATE KEY UPDATE
    SupportServiceOrganizationId = @SupportServiceOrganizationId,
    Name = @Name,
    Comments = @Comments,
    OutreachTeamId = @OutreachTeamId";
}