namespace UnhousedOutreach.Database.CaseManagers;

internal static class CaseManagersMySqlQueries
{
    internal static readonly string GetCaseManagers = @"
SELECT
    CaseManager.CaseManagerId,
    CaseManager.FirstName,
    CaseManager.LastName,
    CaseManager.PreferredName,
    CaseManager.GenderId,
    CaseManager.PhoneNumber,
    CaseManager.EmailAddress,
    SupportServiceOrganization.SupportServiceOrganizationId,
    SupportServiceOrganization.Name,
    CaseManager.Comments
FROM CaseManager
    LEFT JOIN SupportServiceOrganization
        ON CaseManager.SupportServiceOrganizationId = SupportServiceOrganization.SupportServiceOrganizationId
WHERE CaseManager.OutreachTeamId = @OutreachTeamId";
    internal static readonly string SetCaseManager = @"
INSERT INTO CaseManager
VALUES (
    @CaseManagerId,
    @FirstName,
    @LastName,
    @PreferredName,
    @GenderId,
    @PhoneNumber,
    @EmailAddress,
    @SupportServiceOrganizationId,
    @Comments,
    @OutreachTeamId
)
ON DUPLICATE KEY UPDATE
    CaseManagerId = @CaseManagerId,
    FirstName = @FirstName,
    LastName = @LastName,
    PreferredName = @PreferredName,
    GenderId = @GenderId,
    PhoneNumber = @PhoneNumber,
    EmailAddress = @EmailAddress,
    SupportServiceOrganizationId = @SupportServiceOrganizationId,
    Comments = @Comments,
    OutreachTeamId = @OutreachTeamId";
}