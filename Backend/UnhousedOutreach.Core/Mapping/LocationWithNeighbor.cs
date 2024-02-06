using UnhousedOutreach.Core.Neighbors.HousingInsecure;

namespace UnhousedOutreach.Core.Mapping;

public class LocationWithNeighbor : Location
{
    public List<HousingInsecureNeighbor> HousingInsecureNeighbors {get; set;} = [];
    public Tent? Tent {get; set;}
}