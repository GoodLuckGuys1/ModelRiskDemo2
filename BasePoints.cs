using ModelRiskDemo2.Controllers;

namespace ModelRiskDemo2;

public class BasePoints
{
    public ICollection<Point> CollectionDensity { get; set; }
    
    public ICollection<Point> CollectionCumulation { get; set; }
}