using UnhousedOutreach.Core.Mapping;
using UnhousedOutreach.Core.Neighbors.HousingInsecure;
using UnhousedOutreach.Database.MySql;

namespace UnhousedOutreach.Database.HousingInsecureNeighbors;

public class HousingInsecureNeighborsMySqlRepository(string connectionString) : Repository(connectionString)
{
    public async Task<IEnumerable<HousingInsecureNeighbor>> GetHousingInsecureNeighbors(int outreachTeamId)
    {
        // GET NEIGHBORS.
        Dictionary<string, object?> parameters = new() {{"@OutreachTeamId", outreachTeamId}};
        var reader = await ExecuteReader(HousingInsecureNeighborsMySqlQueries.GetHousingInsecureNeighbors, parameters);
        Dictionary<int, HousingInsecureNeighbor> idsToNeighborsMap = [];
        while (reader.Read())
        {
            var housingInsecureNeighborId = (int)reader["HousingInsecureNeighborId"];
            idsToNeighborsMap.Add(housingInsecureNeighborId, new()
            {
                HousingInsecureNeighborId = housingInsecureNeighborId,
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
                Location = reader["NeighborLocationId"] == DBNull.Value ? null : new()
                {
                    LocationId = (int)reader["NeighborLocationId"],
                    LocationTypeId = (int)reader["NeighborLocationTypeId"],
                    Latitude = Parser.GetNullableValue<decimal?>(reader, "NeighborLocationLatitude"),
                    Longitude = Parser.GetNullableValue<decimal?>(reader, "NeighborLocationLongitude"),
                    Address = Parser.GetNullableValue<string?>(reader, "NeighborLocationAddress"),
                    City = (string)reader["NeighborLocationCity"],
                    State = Parser.GetEnumValue<State>(reader, "NeighborLocationState"),
                    ZipCode = Parser.GetNullableValue<string?>(reader, "NeighborLocationZipCode"),
                    ArrivalDate = Parser.GetNullableValue<DateTime?>(reader, "NeighborLocationArrivalDate"),
                    IsLegal = Parser.GetNullableBooleanValue(reader, "NeighborLocationIsLegal"),
                    Comments = Parser.GetNullableStringValueFromByteArray(reader, "NeighborLocationComments"),
                },
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
                    ArrivalDate = Parser.GetNullableValue<DateTime?>(reader, "DesiredLocationArrivalDate"),
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
            idsToNeighborsMap[housingInsecureNeighborId].DisabilityIds.Add(disabilityId);
        }

        // GET ETHNICITIES.
        reader.NextResult();
        while (reader.Read())
        {
            var housingInsecureNeighborId = (int)reader["HousingInsecureNeighborId"];
            var ethnicityId = (int)reader["EthnicityId"];
            idsToNeighborsMap[housingInsecureNeighborId].EthnicityIds.Add(ethnicityId);
        }

        // GET FAMILY MEMBERS.
        reader.NextResult();
        while (reader.Read())
        {
            var housingInsecureNeighborId = (int)reader["HousingInsecureNeighborId"];
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

        // GET NEEDS.
        reader.NextResult();
        while (reader.Read())
        {
            var housingInsecureNeighborId = (int)reader["HousingInsecureNeighborId"];
            var needId = (int)reader["NeedId"];
            idsToNeighborsMap[housingInsecureNeighborId].NeedIds.Add(needId);
        }

        // GET SKILLS.
        reader.NextResult();
        while (reader.Read())
        {
            var housingInsecureNeighborId = (int)reader["HousingInsecureNeighborId"];
            var skillId = (int)reader["SkillId"];
            idsToNeighborsMap[housingInsecureNeighborId].SkillIds.Add(skillId);
        }

        // GET TENTS.
        reader.NextResult();
        while (reader.Read())
        {
            var housingInsecureNeighborId = (int)reader["HousingInsecureNeighborId"];
            idsToNeighborsMap[housingInsecureNeighborId].Tents.Add(new()
            {
                TentId = (int)reader["TentId"],
                PersonSize = Parser.GetNullableValue<int?>(reader, "PersonSize"),
                TentConditionId = Parser.GetNullableValue<int?>(reader, "TentConditionId"),
                TarpCount = Parser.GetNullableValue<int?>(reader, "TarpCount"),
                TentUsageId = Parser.GetNullableValue<int?>(reader, "TentUsageId"),
                Comments = Parser.GetNullableStringValueFromByteArray(reader, "Comments"),
                Location = reader["LocationId"] == DBNull.Value ? null : new()
                {
                    LocationId = (int)reader["LocationId"],
                    LocationTypeId = (int)reader["LocationTypeId"],
                    Latitude = Parser.GetNullableValue<decimal?>(reader, "Latitude"),
                    Longitude = Parser.GetNullableValue<decimal?>(reader, "Longitude"),
                    Address = Parser.GetNullableValue<string?>(reader, "Address"),
                    City = (string)reader["City"],
                    State = Parser.GetEnumValue<State>(reader, "State"),
                    ZipCode = Parser.GetNullableValue<string?>(reader, "ZipCode"),
                    IsLegal = Parser.GetNullableBooleanValue(reader, "IsLegal"),
                    Comments = Parser.GetNullableStringValueFromByteArray(reader, "LocationComments")
                }
            });
        }

        var housingInsecureNeighbors = idsToNeighborsMap.Values.AsEnumerable();
        return housingInsecureNeighbors;
    }
    
    public async Task SetHousingInsecureNeighbor(HousingInsecureNeighbor housingInsecureNeighbor, int outreachTeamId)
    {
        Dictionary<string, object?> parameters = new()
        {
            {"@HousingInsecureNeighborId", housingInsecureNeighbor.HousingInsecureNeighborId},
            {"@FirstName", housingInsecureNeighbor.FirstName},
            {"@LastName", housingInsecureNeighbor.LastName},
            {"@PreferredName", housingInsecureNeighbor.PreferredName},
            {"@DateOfBirth", housingInsecureNeighbor.DateOfBirth},
            {"@GenderId", housingInsecureNeighbor.GenderId},
            {"@PhoneNumber", housingInsecureNeighbor.PhoneNumber},
            {"@EmailAddress", housingInsecureNeighbor.EmailAddress},
            {"@HousingStatusId", housingInsecureNeighbor.HousingStatusId},
            {"@IsHoused", housingInsecureNeighbor.IsHoused},
            {"@IsVeteran", housingInsecureNeighbor.IsVeteran},
            {"@HasIdentification", housingInsecureNeighbor.HasIdentification},
            {"@IsCitizen", housingInsecureNeighbor.IsCitizen},
            {"@CoatOrJacketCount", housingInsecureNeighbor.CoatOrJacketCount},
            {"@ShirtSizeId", housingInsecureNeighbor.ShirtSizeId},
            {"@ShoeSizeId", housingInsecureNeighbor.ShoeSizeId},
            {"@PantsSizeId", housingInsecureNeighbor.PantsSizeId},
            {"@CaseManagerId", housingInsecureNeighbor.CaseManager?.CaseManagerId},
            {"@LocationId", housingInsecureNeighbor.Location?.LocationId},
            {"@DesiredLocationId", housingInsecureNeighbor.DesiredLocation?.LocationId},
            {"@CushionTypeId", housingInsecureNeighbor.CushionTypeId},
            {"@CushionConditionId", housingInsecureNeighbor.CushionConditionId},
            {"@BlanketCount", housingInsecureNeighbor.BlanketCount},
            {"@HasSleepingBag", housingInsecureNeighbor.HasSleepingBag},
            {"@SleepingBagConditionId", housingInsecureNeighbor.SleepingBagConditionId},
            {"@SleepingBagTemperatureThresholdFahrenheit", housingInsecureNeighbor.SleepingBagTemperatureThresholdFahrenheit},
            {"@Comments", housingInsecureNeighbor.Comments},
            {"@OutreachTeamId", outreachTeamId}
        };
        await ExecuteNonQuery(HousingInsecureNeighborsMySqlQueries.SetHousingInsecureNeighbor, parameters);
    }

    public async Task SetHousingInsecureNeighborDisability(int housingInsecureNeighborId, int disabilityId, int outreachTeamId)
    {
        Dictionary<string, object?> parameters = new()
        {
            {"@HousingInsecureNeighborId", housingInsecureNeighborId},
            {"@DisabilityId", disabilityId},
            {"@OutreachTeamId", outreachTeamId}
        };
        await ExecuteNonQuery(HousingInsecureNeighborsMySqlQueries.SetHousingInsecureNeighborDisability, parameters);
    }

    public async Task SetHousingInsecureNeighborEthnicity(int housingInsecureNeighborId, int ethnicityId, int outreachTeamId)
    {
        Dictionary<string, object?> parameters = new()
        {
            {"@HousingInsecureNeighborId", housingInsecureNeighborId},
            {"@EthnicityId", ethnicityId},
            {"@OutreachTeamId", outreachTeamId}
        };
        await ExecuteNonQuery(HousingInsecureNeighborsMySqlQueries.SetHousingInsecureNeighborEthnicity, parameters);
    }

    public async Task SetHousingInsecureNeighborFamilyMember(FamilyMember familyMember, int outreachTeamId)
    {
        Dictionary<string, object?> parameters = new()
        {
            {"@HousingInsecureNeighborFamilyMemberId", familyMember.FamilyMemberId},
            {"@HousingInsecureNeighborId", familyMember.HousingInsecureNeighborId},
            {"@FirstName", familyMember.FirstName},
            {"@LastName", familyMember.LastName},
            {"@PreferredName", familyMember.PreferredName},
            {"@RelationshipToNeighbor", familyMember.RelationshipToNeighbor},
            {"@GenderId", familyMember.GenderId},
            {"@PhoneNumber", familyMember.PhoneNumber},
            {"@EmailAddress", familyMember.EmailAddress},
            {"@IsHoused", familyMember.IsHoused},
            {"@Comments", familyMember.Comments},
            {"@OutreachTeamId", outreachTeamId}
        };
        await ExecuteNonQuery(HousingInsecureNeighborsMySqlQueries.SetHousingInsecureNeighborFamilyMember, parameters);
    }

    public async Task SetHousingInsecureNeighborNeed(int housingInsecureNeighborId, int needId, int outreachTeamId)
    {
        Dictionary<string, object?> parameters = new()
        {
            {"@HousingInsecureNeighborId", housingInsecureNeighborId},
            {"@NeedId", needId},
            {"@OutreachTeamId", outreachTeamId}
        };
        await ExecuteNonQuery(HousingInsecureNeighborsMySqlQueries.SetHousingInsecureNeighborNeed, parameters);
    }

    public async Task SetHousingInsecureNeighborSkill(int housingInsecureNeighborId, int skillId, int outreachTeamId)
    {
        Dictionary<string, object?> parameters = new()
        {
            {"@HousingInsecureNeighborId", housingInsecureNeighborId},
            {"@SkillId", skillId},
            {"@OutreachTeamId", outreachTeamId}
        };
        await ExecuteNonQuery(HousingInsecureNeighborsMySqlQueries.SetHousingInsecureNeighborSkill, parameters);
    }

    public async Task SetHousingInsecureNeighborTent(int housingInsecureNeighborId, int tentId, int outreachTeamId)
    {
        Dictionary<string, object?> parameters = new()
        {
            {"@HousingInsecureNeighborId", housingInsecureNeighborId},
            {"@TentId", tentId},
            {"@OutreachTeamId", outreachTeamId}
        };
        await ExecuteNonQuery(HousingInsecureNeighborsMySqlQueries.SetHousingInsecureNeighborTent, parameters);
    }
    
    public async Task DeleteHousingInsecureNeighborEthnicity(int housingInsecureNeighborId, int ethnicityId, int outreachTeamId)
    {
        Dictionary<string, object?> parameters = new()
        {
            {"@HousingInsecureNeighborId", housingInsecureNeighborId},
            {"@EthnicityId", ethnicityId},
            {"@OutreachTeamId", outreachTeamId}
        };
        await ExecuteNonQuery(HousingInsecureNeighborsMySqlQueries.DeleteHousingInsecureNeighborEthnicity, parameters);
    }

    public async Task DeleteHousingInsecureNeighborNeed(int housingInsecureNeighborId, int needId, int outreachTeamId)
    {
        Dictionary<string, object?> parameters = new()
        {
            {"@HousingInsecureNeighborId", housingInsecureNeighborId},
            {"@NeedId", needId},
            {"@OutreachTeamId", outreachTeamId}
        };
        await ExecuteNonQuery(HousingInsecureNeighborsMySqlQueries.DeleteHousingInsecureNeighborNeed, parameters);
    }
}
