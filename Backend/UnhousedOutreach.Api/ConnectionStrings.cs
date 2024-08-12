namespace UnhousedOutreach.Api;

public class ConnectionStrings
{
    private static readonly string unhousedOutreachDbUidEnvironmentVariableName = "UNHOUSED_OUTREACH_DB_UID";
    private static readonly string unhousedOutreachDbPwdEnvironmentVariableName = "UNHOUSED_OUTREACH_DB_PWD";
    private string unhousedOutreachConnectionString = string.Empty;

    // Connection string to the UnhousedOutreach database.
    public string UnhousedOutreachConnectionString
    { 
        get { return unhousedOutreachConnectionString; }
        set
        {
            var unhousedOutreachDbUid = Environment.GetEnvironmentVariable(unhousedOutreachDbUidEnvironmentVariableName);
            var unhousedOutreachDbPwd = Environment.GetEnvironmentVariable(unhousedOutreachDbPwdEnvironmentVariableName);
            unhousedOutreachConnectionString = string.Format(value, unhousedOutreachDbUid, unhousedOutreachDbPwd);
        }
    }
}
