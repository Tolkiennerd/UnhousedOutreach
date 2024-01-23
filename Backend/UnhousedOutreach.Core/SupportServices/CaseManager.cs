using UnhousedOutreach.Core.Neighbors;

namespace UnhousedOutreach.Core.SupportServices;

public class CaseManager : Neighbor
{
    public int CaseManagerId {get; set;}
    public Organization? Organization {get; set;}
}
