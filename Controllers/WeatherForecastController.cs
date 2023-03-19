using Microsoft.AspNetCore.Mvc;

namespace ModelRiskDemo2.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PointController : ControllerBase
    {
        private readonly ILogger<PointController> _logger;

        public PointController(ILogger<PointController> logger)
        {
            _logger = logger;
        }

        [HttpGet("normal")]
        public BasePoints GetNormal(double mu, double sigma)
        {
            return new BasePoints();
        }
        
        
        [HttpGet("beta4")]
        public BasePoints GetBeta4(double alpha, double beta, double minimum, double maximum)
        {
            var lstU = new List<double>();
            var s = 0.0;
            while (s < 1)
            {
                lstU.Add(s += 0.001);
            }

            var lstXU = lstU.Select(u =>
            {
                double maximumU;
                ImportLibrary.VoseBeta4_Core(out maximumU, alpha, beta, minimum, maximum, ref u);
                return (u, maximumU);
            });

            var lstDist = lstXU.Select(xU =>
            {
                double y;
                ImportLibrary.VoseBeta4Prob_Core(out y, new [] {xU.maximumU}, 1, alpha, beta, minimum, maximum);
                return (xU.maximumU, y);
            });

            var lstComul = lstXU.Select(xU =>
            {
                double y;
                ImportLibrary.VoseBeta4Prob_Core(out y, new[] {xU.maximumU}, 1, alpha, beta, minimum, maximum,
                    new[] {1});
                return (xU.maximumU, y);
            });

            return new BasePoints()
            {
                CollectionCumulation = lstComul.Select(
                    x => new Point()
                    {
                        X = x.maximumU,
                        Y = x.y
                    }).ToList(),
                CollectionDensity = lstDist.Select(
                    x => new Point()
                    {
                        X = x.maximumU,
                        Y = x.y
                    }).ToList()
            };
        }
    }

    public class Point
    {
        public double X { get; set; }

        public double Y { get; set; }
    }
}