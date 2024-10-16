using System.Data.Common;

namespace UnhousedOutreach.Database.MySql;

public static class Parser
{
    public static T? GetNullableValue<T>(DbDataReader reader, string fieldName)
    {
        return !reader.IsDBNull(reader.GetOrdinal(fieldName)) ? (T)reader[fieldName] : default;
    }

    public static bool? GetNullableBooleanValue(DbDataReader reader, string fieldName)
    {
        return !reader.IsDBNull(reader.GetOrdinal(fieldName)) && Convert.ToBoolean(reader[fieldName]);
    }

    public static string? GetNullableStringValueFromByteArray(DbDataReader reader, string fieldName)
    {
        return !reader.IsDBNull(reader.GetOrdinal(fieldName)) ?
            System.Text.Encoding.UTF8.GetString((byte[])reader[fieldName]) :
            default;
    }

    public static T GetEnumValue<T>(DbDataReader reader, string fieldName) where T : struct
    {
        if (reader.IsDBNull(reader.GetOrdinal(fieldName)))
        {
            return default;
        }
        var enumParsedSuccessfully = Enum.TryParse((string)reader[fieldName], out T parsedEnum);
        return enumParsedSuccessfully ? parsedEnum : default;
    }
}
