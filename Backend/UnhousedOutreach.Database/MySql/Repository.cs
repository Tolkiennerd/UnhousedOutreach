using System.Data.Common;
using MySql.Data.MySqlClient;

namespace UnhousedOutreach.Database.MySql;

public class Repository(string connectionString)
{
    private readonly string connectionString = connectionString;

    public async Task ExecuteNonQuery(string mySqlStatement) => await ExecuteNonQuery(mySqlStatement, []);

    public async Task ExecuteNonQuery(string mySqlStatement, Dictionary<string, object?> parameterNamesAndValues)
    {
        var command = GetCommand(mySqlStatement, parameterNamesAndValues);
        await command.ExecuteNonQueryAsync();
    }

    public async Task<DbDataReader> ExecuteReader(string mySqlStatement) => await ExecuteReader(mySqlStatement, []);

    public async Task<DbDataReader> ExecuteReader(string mySqlStatement, Dictionary<string, object?> parameterNamesAndValues)
    {
        var command = GetCommand(mySqlStatement, parameterNamesAndValues);
        return await command.ExecuteReaderAsync();
    }
    
    private MySqlCommand GetCommand(string mySqlStatement, Dictionary<string, object?> parameterNamesAndValues)
    {
        // OPEN CONNECTION.
        MySqlConnection connection = new(connectionString);
        connection.Open();

        // GET COMMAND.
        MySqlCommand cmd = new(mySqlStatement, connection);

        // ADD PARAMETERS.
        foreach (var parameterNameAndValue in parameterNamesAndValues)
        {
            var name = parameterNameAndValue.Key;
            var value = parameterNameAndValue.Value;
            cmd.Parameters.AddWithValue(name, value ?? DBNull.Value);
        }
        return cmd;
    }
}