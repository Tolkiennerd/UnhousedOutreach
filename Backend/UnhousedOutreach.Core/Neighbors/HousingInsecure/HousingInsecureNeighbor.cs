using UnhousedOutreach.Core.Mapping;
using UnhousedOutreach.Core.SupportServices;

namespace UnhousedOutreach.Core.Neighbors.HousingInsecure;

public class HousingInsecureNeighbor : Neighbor
{
    public int HousingInsecureNeighborId {get; set;}
    public List<int> EthnicityIds {get; set;} = [];
    public List<int> DisabilityIds {get; set;} = [];
    public List<FamilyMember> FamilyMembers {get; set;} = [];
    public List<int> RequestIds {get; set;} = [];
    public int? HousingStatusId {get; set;}
    public bool? IsHoused {get; set;}
    public bool? IsVeteran {get; set;}
    public bool? HasIdentification {get; set;}
    public bool? IsCitizen {get; set;}
    public int? CoatOrJacketCount {get; set;}
    public int? ShirtSizeId {get; set;}
    public int? ShoeSizeId {get; set;}
    public int? PantsSizeId {get; set;}
    public CaseManager? CaseManager {get; set;}
    public Location? DesiredLocation {get; set;}
    public List<Tent> Tents {get; set;} = [];
    public int? CushionTypeId {get; set;}
    public int? CushionConditionId {get; set;}
    public int? BlanketCount {get; set;}
    public bool? HasSleepingBag {get; set;}
    public int? SleepingBagConditionId {get; set;}
    public int? SleepingBagTemperatureThresholdFahrenheit {get; set;}
}
