using System.Runtime.InteropServices;

namespace ModelRiskDemo2;

public class ImportLibrary
{
    //----------------------------------------- Beta4 ----------------------------------------------------------------------
    [DllImport("ModelRisk_CoreForLIB.dll", CharSet = CharSet.Unicode)]
    public static extern byte VoseBeta4_Core(out double rc, double alpha,double beta,double minimum,double maximum,
        ref double U,
        int[] pBoundsMode = null,
        double[] pMin = null,
        double[] pMax = null,
        double[] pShiftValue = null,
        int idTwister = -1,
        byte[] error_bufer = null);

    [DllImport("ModelRisk_CoreForLIB.dll", CharSet = CharSet.Unicode)]
    public static extern byte VoseBeta4Prob_Core(out double rc,
        double[] x, int x_count,
        double alpha,double beta,double minimum,double maximum,
        int[] pCumulative = null,
        int[] pBoundsMode = null,
        double[] pMin = null,
        double[] pMax = null,
        double[] pShiftValue = null,
        byte[] error_bufer = null);


//----------------------- Normal ------------------------------------------------------------------------------

    [DllImport("ModelRisk_CoreForLIB.dll", CharSet = CharSet.Unicode)]
    public static extern byte VoseNormal_Core(out double rc, double mu,double sigma,
        ref double U,
        int[] pBoundsMode = null,
        double[] pMin = null,
        double[] pMax = null,
        double[] pShiftValue = null,
        int idTwister = -1,
        byte[] error_bufer = null);

    [DllImport("ModelRisk_CoreForLIB.dll", CharSet = CharSet.Unicode)]
    public static extern byte VoseNormalProb_Core(out double rc,
        double[] x, int x_count,
        double mu,double sigma,
        int[] pCumulative = null,
        int[] pBoundsMode = null,
        double[] pMin = null,
        double[] pMax = null,
        double[] pShiftValue = null,
        byte[] error_bufer = null);

}