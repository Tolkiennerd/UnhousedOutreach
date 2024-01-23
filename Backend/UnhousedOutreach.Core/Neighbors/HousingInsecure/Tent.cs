using UnhousedOutreach.Core.Mapping;

namespace UnhousedOutreach.Core.Neighbors.HousingInsecure;

public class Tent()
{
    public int TentId {get; set;}
    public Location? Location {get; set;}
    public int? PersonSize {get; set;}
    public int? TentConditionId {get; set;}
    public int? TarpCount {get; set;}
    public int? TentUsageId {get; set;}
    public string? Comments {get; set;}
}
