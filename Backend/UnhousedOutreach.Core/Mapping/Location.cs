namespace UnhousedOutreach.Core.Mapping;

public class Location
{
    public int LocationId {get; set;}
    public int? LocationTypeId {get; set;}
    public decimal? Latitude {get; set;}
    public decimal? Longitude {get; set;}
    public string? Address {get; set;}
    public string? City {get; set;}
    public State? State {get; set;}
    public string? ZipCode {get; set;}
    public bool? IsLegal {get; set;}
    public DateTime? ArrivalDate {get; set;}
    public string? Comments {get; set;}
}