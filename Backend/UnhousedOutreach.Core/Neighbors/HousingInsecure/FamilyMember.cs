using UnhousedOutreach.Core.Mapping;
namespace UnhousedOutreach.Core.Neighbors.HousingInsecure;

public class FamilyMember : Neighbor
{
    public int FamilyMemberId {get; set;}
    public int HousingInsecureNeighborId {get; set;}
    public Relationship? RelationshipToNeighbor {get; set;}
    public bool? IsHoused {get; set;}
}
