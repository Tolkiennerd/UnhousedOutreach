using UnhousedOutreach.Core.Mapping;
using UnhousedOutreach.Core.Neighbors.HousingInsecure;
using UnhousedOutreach.Database.MySql;

namespace UnhousedOutreach.Database.Locations;

public class LocationsMySqlRepository(string connectionString) : Repository(connectionString)
{
    #region Get Methods
    public async Task<IEnumerable<Location>> GetLocations(int outreachTeamId)
    {
        // GET NEIGHBORS.
        Dictionary<string, object?> parameters = new() {{"@OutreachTeamId", outreachTeamId}};
        var reader = await ExecuteReader(LocationsMySqlQueries.GetLocations, parameters);
        IList<Location> locations = [];
        while (reader.Read())
        {
            locations.Add(new()
            {
                LocationId = (int)reader["LocationId"],
                Name = Parser.GetNullableValue<string?>(reader, "Name"),
                LocationTypeId = (int)reader["LocationTypeId"],
                Latitude = Parser.GetNullableValue<decimal?>(reader, "Latitude"),
                Longitude = Parser.GetNullableValue<decimal?>(reader, "Longitude"),
                Address = Parser.GetNullableValue<string?>(reader, "Address"),
                City = (string)reader["City"],
                State = Parser.GetEnumValue<State>(reader, "State"),
                ZipCode = Parser.GetNullableValue<string?>(reader, "ZipCode"),
                IsLegal = Parser.GetNullableBooleanValue(reader, "IsLegal"),
                ArrivalDate = Parser.GetNullableValue<DateTime?>(reader, "ArrivalDate"),
                Comments = Parser.GetNullableStringValueFromByteArray(reader, "Comments"),
            });
        }
        return locations.AsEnumerable();
    }

    public async Task<IEnumerable<LocationWithNeighbor>> GetLocationsWithNeighbors(int outreachTeamId)
    {
        // GET LOCATIONS WITH NEIGHBORS.
        Dictionary<string, object?> parameters = new() {{"@OutreachTeamId", outreachTeamId}};
        var reader = await ExecuteReader(LocationsMySqlQueries.GetLocationsWithNeighbors, parameters);
        Dictionary<LocationWithNeighbor, List<int>> locationsToNeighborIds = [];
        Dictionary<int, HousingInsecureNeighbor> idsToNeighborsMap = [];
        while (reader.Read())
        {
            // GET LOCATIONS.
            var locationId = (int)reader["LocationId"];
            LocationWithNeighbor location = new()
            {
                LocationId = locationId,
                LocationTypeId = (int)reader["LocationTypeId"],
                Latitude = Parser.GetNullableValue<decimal?>(reader, "Latitude"),
                Longitude = Parser.GetNullableValue<decimal?>(reader, "Longitude"),
                Address = Parser.GetNullableValue<string?>(reader, "Address"),
                City = (string)reader["City"],
                State = Parser.GetEnumValue<State>(reader, "State"),
                ZipCode = Parser.GetNullableValue<string?>(reader, "ZipCode"),
                IsLegal = Parser.GetNullableBooleanValue(reader, "IsLegal"),
                Comments = Parser.GetNullableStringValueFromByteArray(reader, "LocationComments"),
                HousingInsecureNeighbors = [],
                Tent = reader["TentId"] == DBNull.Value ? null : new()
                {
                    TentId = (int)reader["TentId"],
                    PersonSize = Parser.GetNullableValue<int?>(reader, "PersonSize"),
                    TentConditionId = Parser.GetNullableValue<int?>(reader, "TentConditionId"),
                    TarpCount = Parser.GetNullableValue<int?>(reader, "TarpCount"),
                    TentUsageId = Parser.GetNullableValue<int?>(reader, "TentUsageId"),
                    Comments = Parser.GetNullableStringValueFromByteArray(reader, "Comments"),
                }
            };
            var housingInsecureNeighborId = Parser.GetNullableValue<int?>(reader, "HousingInsecureNeighborId");
            if (!locationsToNeighborIds.ContainsKey(location))
            {
                locationsToNeighborIds.Add(
                    location,
                    housingInsecureNeighborId == null ? [] : new() {(int)housingInsecureNeighborId} );
            }
            else if (housingInsecureNeighborId != null)
            {
                locationsToNeighborIds[location].Add((int)housingInsecureNeighborId);
            }

            // GET NEIGHBORS.
            if (housingInsecureNeighborId == null) {
                continue;
            }
            idsToNeighborsMap.Add((int)housingInsecureNeighborId, new()
            {
                HousingInsecureNeighborId = (int)housingInsecureNeighborId,
                FirstName = Parser.GetNullableValue<string?>(reader, "FirstName"),
                LastName = Parser.GetNullableValue<string?>(reader, "LastName"),
                PreferredName = Parser.GetNullableValue<string?>(reader, "PreferredName"),
                DateOfBirth = Parser.GetNullableValue<DateTime?>(reader, "DateOfBirth"),
                GenderId = Parser.GetNullableValue<int?>(reader, "GenderId"),
                PhoneNumber = Parser.GetNullableValue<string?>(reader, "PhoneNumber"),
                EmailAddress = Parser.GetNullableValue<string?>(reader, "EmailAddress"),
                HousingStatusId = Parser.GetNullableValue<int?>(reader, "HousingStatusId"),
                IsHoused = Parser.GetNullableBooleanValue(reader, "IsHoused"),
                IsVeteran = Parser.GetNullableBooleanValue(reader, "IsVeteran"),
                HasIdentification = Parser.GetNullableBooleanValue(reader, "HasIdentification"),
                IsCitizen = Parser.GetNullableBooleanValue(reader, "IsCitizen"),
                CoatOrJacketCount = Parser.GetNullableValue<int?>(reader, "CoatOrJacketCount"),
                ShirtSizeId = Parser.GetNullableValue<int?>(reader, "ShirtSizeId"),
                ShoeSizeId = Parser.GetNullableValue<int?>(reader, "ShoeSizeId"),
                PantsSizeId = Parser.GetNullableValue<int?>(reader, "PantsSizeId"),
                CushionTypeId = Parser.GetNullableValue<int?>(reader, "CushionTypeId"),
                CushionConditionId = Parser.GetNullableValue<int?>(reader, "CushionConditionId"),
                BlanketCount = Parser.GetNullableValue<int?>(reader, "BlanketCount"),
                HasSleepingBag = Parser.GetNullableBooleanValue(reader, "HasSleepingBag"),
                SleepingBagConditionId = Parser.GetNullableValue<int?>(reader, "SleepingBagConditionId"),
                SleepingBagTemperatureThresholdFahrenheit = Parser.GetNullableValue<int?>(reader, "SleepingBagTemperatureThresholdFahrenheit"),
                Comments = Parser.GetNullableStringValueFromByteArray(reader, "Comments"),
                Location = null,
                DesiredLocation = reader["DesiredLocationId"] == DBNull.Value ? null : new()
                {
                    LocationId = (int)reader["DesiredLocationId"],
                    LocationTypeId = (int)reader["DesiredLocationTypeId"],
                    Latitude = Parser.GetNullableValue<decimal?>(reader, "DesiredLocationLatitude"),
                    Longitude = Parser.GetNullableValue<decimal?>(reader, "DesiredLocationLongitude"),
                    Address = Parser.GetNullableValue<string?>(reader, "DesiredLocationAddress"),
                    City = (string)reader["DesiredLocationCity"],
                    State = Parser.GetEnumValue<State>(reader, "DesiredLocationState"),
                    ZipCode = Parser.GetNullableValue<string?>(reader, "DesiredLocationZipCode"),
                    IsLegal = Parser.GetNullableBooleanValue(reader, "DesiredLocationIsLegal"),
                    Comments = Parser.GetNullableStringValueFromByteArray(reader, "DesiredLocationComments"),
                },
                CaseManager = Parser.GetNullableValue<int?>(reader, "CaseManagerId") == null ? null : new()
                {
                    CaseManagerId = (int)reader["CaseManagerId"],
                    Organization = reader["SupportServiceOrganizationId"] == DBNull.Value ? null : new()
                    {
                        SupportServiceOrganizationId = (int)reader["SupportServiceOrganizationId"],
                        Name = Parser.GetNullableValue<string?>(reader, "CaseManagerOrganizationName"),
                    },
                    FirstName = Parser.GetNullableValue<string?>(reader, "CaseManagerFirstName"),
                    LastName = Parser.GetNullableValue<string?>(reader, "CaseManagerLastName"),
                    PreferredName = Parser.GetNullableValue<string?>(reader, "CaseManagerPreferredName"),
                    GenderId = Parser.GetNullableValue<int?>(reader, "CaseManagerGenderId"),
                    PhoneNumber = Parser.GetNullableValue<string?>(reader, "CaseManagerPhoneNumber"),
                    EmailAddress = Parser.GetNullableValue<string?>(reader, "CaseManagerEmailAddress"),
                    Comments = Parser.GetNullableStringValueFromByteArray(reader, "CaseManagerComments"),
                }
            });
        }

        // GET DISABILITIES.
        reader.NextResult();
        while (reader.Read())
        {
            var housingInsecureNeighborId = (int)reader["HousingInsecureNeighborId"];
            var disabilityId = (int)reader["DisabilityId"];
            if (idsToNeighborsMap.ContainsKey(housingInsecureNeighborId))
            {
                idsToNeighborsMap[housingInsecureNeighborId].DisabilityIds.Add(disabilityId);
            }
        }

        // GET ENGLISH LEVELS
        reader.NextResult();
        while (reader.Read())
        {
            var housingInsecureNeighborId = (int)reader["HousingInsecureNeighborId"];
            var englishLevel = (int)reader["EnglishLevel"];
            if (idsToNeighborsMap.ContainsKey(housingInsecureNeighborId))
            {
                idsToNeighborsMap[housingInsecureNeighborId].EnglishLevels.Add(englishLevel);
            }
        }

        // GET ETHNICITIES.
        reader.NextResult();
        while (reader.Read())
        {
            var housingInsecureNeighborId = (int)reader["HousingInsecureNeighborId"];
            var ethnicityId = (int)reader["EthnicityId"];
            if (idsToNeighborsMap.ContainsKey(housingInsecureNeighborId))
            {
                idsToNeighborsMap[housingInsecureNeighborId].EthnicityIds.Add(ethnicityId);
            }
        }

        // GET FAMILY MEMBERS.
        reader.NextResult();
        while (reader.Read())
        {
            var housingInsecureNeighborId = (int)reader["HousingInsecureNeighborId"];
            if (idsToNeighborsMap.ContainsKey(housingInsecureNeighborId))
            {
                idsToNeighborsMap[housingInsecureNeighborId].FamilyMembers.Add(new()
                {
                    FamilyMemberId = (int)reader["HousingInsecureNeighborFamilyMemberId"],
                    HousingInsecureNeighborId = housingInsecureNeighborId,
                    FirstName = Parser.GetNullableValue<string?>(reader, "FirstName"),
                    LastName = Parser.GetNullableValue<string?>(reader, "LastName"),
                    PreferredName = Parser.GetNullableValue<string?>(reader, "PreferredName"),
                    RelationshipToNeighbor = Parser.GetEnumValue<Relationship>(reader, "RelationshipToNeighbor"),
                    GenderId = Parser.GetNullableValue<int?>(reader, "GenderId"),
                    PhoneNumber = Parser.GetNullableValue<string?>(reader, "PhoneNumber"),
                    EmailAddress = Parser.GetNullableValue<string?>(reader, "EmailAddress"),
                    IsHoused = Parser.GetNullableBooleanValue(reader, "IsHoused"),
                    Comments = Parser.GetNullableStringValueFromByteArray(reader, "Comments"),
                });
            }
        }

        // GET NEEDS.
        reader.NextResult();
        while (reader.Read())
        {
            var housingInsecureNeighborId = (int)reader["HousingInsecureNeighborId"];
            if (idsToNeighborsMap.ContainsKey(housingInsecureNeighborId))
            {
                var needId = (int)reader["NeedId"];
                idsToNeighborsMap[housingInsecureNeighborId].NeedIds.Add(needId);
            }
        }
        
        // GET SKILLS.
        reader.NextResult();
        while (reader.Read())
        {
            var housingInsecureNeighborId = (int)reader["HousingInsecureNeighborId"];
            if (idsToNeighborsMap.ContainsKey(housingInsecureNeighborId))
            {
                var skillId = (int)reader["SkillId"];
                idsToNeighborsMap[housingInsecureNeighborId].SkillIds.Add(skillId);
            }
        }
        
        // GET LOCATIONS WITH NEIGHBORS.
        foreach (KeyValuePair<LocationWithNeighbor, List<int>> locationToNeighborIds in locationsToNeighborIds)
        {
            LocationWithNeighbor locationWithNeighbor = locationToNeighborIds.Key;
            List<int> housingInsecureNeighborIds = locationToNeighborIds.Value;
            foreach (var housingInsecureNeighborId in housingInsecureNeighborIds)
            {
                locationWithNeighbor.HousingInsecureNeighbors.Add(idsToNeighborsMap[housingInsecureNeighborId]);
            }
        }

        var locationsWithNeighbors = locationsToNeighborIds.Keys.AsEnumerable();
        return locationsWithNeighbors;
    }
    #endregion

    #region Set Methods
    public async Task SetLocation(Location location, int outreachTeamId)
    {
        Dictionary<string, object?> parameters = new()
        {
            {"@LocationId", location.LocationId},
            {"@Name", location.Name},
            {"@LocationTypeId", location.LocationTypeId},
            {"@Latitude", location.Latitude},
            {"@Longitude", location.Longitude},
            {"@Address", location.Address},
            {"@City", location.City},
            {"@State", location.State},
            {"@ZipCode", location.ZipCode},
            {"@IsLegal", location.IsLegal},
            {"@ArrivalDate", location.ArrivalDate},
            {"@Comments", location.Comments},
            {"@OutreachTeamId", outreachTeamId},
        };
        await ExecuteNonQuery(LocationsMySqlQueries.SetLocation, parameters);
    }
    #endregion
}
