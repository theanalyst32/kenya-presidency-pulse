import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CorruptionCase } from "@/types/president";

interface CorruptionCasesProps {
  cases: CorruptionCase[];
}

export const CorruptionCases = ({ cases }: CorruptionCasesProps) => {
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'convicted':
        return 'bg-kenya-red text-kenya-red-foreground';
      case 'ongoing':
        return 'bg-yellow-500 text-white';
      case 'acquitted':
        return 'bg-kenya-green text-kenya-green-foreground';
      case 'under investigation':
        return 'bg-blue-500 text-white';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const totalStolenAmount = cases.reduce((total, case_) => {
    const amount = parseFloat(case_.amountInvolved.replace(/[^\d.]/g, ''));
    return total + (isNaN(amount) ? 0 : amount);
  }, 0);

  return (
    <div className="space-y-4">
      <Card className="p-4 bg-kenya-red/10 border-kenya-red/20">
        <div className="text-center">
          <h4 className="font-semibold text-lg text-kenya-red mb-2">Total Estimated Losses</h4>
          <p className="text-2xl font-bold text-kenya-red">
            KSh {totalStolenAmount.toLocaleString()} Billion
          </p>
          <p className="text-sm text-muted-foreground mt-1">
            Based on major corruption cases during this presidency
          </p>
        </div>
      </Card>

      <div className="space-y-4">
        {cases.map((case_, index) => (
          <Card key={index} className="p-4">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h4 className="font-semibold text-lg">{case_.caseName}</h4>
                <p className="text-sm text-muted-foreground mt-1">{case_.description}</p>
              </div>
              <Badge className={getStatusColor(case_.status)}>
                {case_.status}
              </Badge>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <span className="text-sm text-muted-foreground">Amount Involved:</span>
                <p className="font-medium text-kenya-red">KSh {case_.amountInvolved}</p>
              </div>
              <div>
                <span className="text-sm text-muted-foreground">Year:</span>
                <p className="font-medium">{case_.year}</p>
              </div>
            </div>
            
            {case_.keyPoliticians && case_.keyPoliticians.length > 0 && (
              <div className="mb-3">
                <h5 className="font-medium text-sm mb-2">Key Politicians Involved:</h5>
                <div className="flex flex-wrap gap-2">
                  {case_.keyPoliticians.map((politician, i) => (
                    <Badge key={i} variant="outline" className="text-xs">
                      {politician}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
            
            {case_.outcome && (
              <div>
                <span className="text-sm text-muted-foreground">Outcome:</span>
                <p className="text-sm mt-1">{case_.outcome}</p>
              </div>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
};