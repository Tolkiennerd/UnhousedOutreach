using System.Reflection.Metadata.Ecma335;
using MySql.Data.MySqlClient;
using UnhousedOutreach.Core.Mapping;

namespace UnhousedOutreach.Database.MySql;

public static class Parser
{
    #region Public Methods
    public static T? GetNullableValue<T>(MySqlDataReader reader, string fieldName)
    {
        return !reader.IsDBNull(reader.GetOrdinal(fieldName)) ? (T)reader[fieldName] : default;
    }

    public static bool? GetNullableBooleanValue(MySqlDataReader reader, string fieldName)
    {
        return !reader.IsDBNull(reader.GetOrdinal(fieldName)) && Convert.ToBoolean(reader[fieldName]);
    }

    public static string? GetNullableStringValueFromByteArray(MySqlDataReader reader, string fieldName)
    {
        return !reader.IsDBNull(reader.GetOrdinal(fieldName)) ?
            System.Text.Encoding.UTF8.GetString((byte[])reader[fieldName]) :
            default;
    }

    public static T GetNullableEnumValue<T>(MySqlDataReader reader, string fieldName) where T : struct
    {
        if (reader.IsDBNull(reader.GetOrdinal(fieldName)))
        {
            return default;
        }
        var enumParsedSuccessfully = Enum.TryParse((string)reader[fieldName], out T parsedEnum);
        return enumParsedSuccessfully ? parsedEnum : default;
    }
    #endregion
}
