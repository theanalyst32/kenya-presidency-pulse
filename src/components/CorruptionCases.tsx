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
          <Card key={index} className="p-6 border-2 hover:shadow-card transition-all">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h4 className="font-semibold text-xl mb-2">{case_.caseName}</h4>
                <p className="text-muted-foreground mb-3">{case_.description}</p>
              </div>
              <Badge className={getStatusColor(case_.status)} variant="outline">
                {case_.status}
              </Badge>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="p-3 bg-kenya-red/10 rounded-lg">
                <span className="text-sm text-muted-foreground">Amount Involved:</span>
                <p className="font-bold text-lg text-kenya-red">KSh {case_.amountInvolved}</p>
              </div>
              <div className="p-3 bg-muted/30 rounded-lg">
                <span className="text-sm text-muted-foreground">Year:</span>
                <p className="font-medium text-lg">{case_.year}</p>
              </div>
              {case_.courtLevel && (
                <div className="p-3 bg-primary/10 rounded-lg">
                  <span className="text-sm text-muted-foreground">Court Level:</span>
                  <p className="font-medium text-lg">{case_.courtLevel}</p>
                </div>
              )}
            </div>
            
            {case_.keyPoliticians && case_.keyPoliticians.length > 0 && (
              <div className="mb-4">
                <h5 className="font-medium text-sm mb-3 text-kenya-red">Politicians Involved:</h5>
                <div className="flex flex-wrap gap-2">
                  {case_.keyPoliticians.map((politician, i) => (
                    <Badge key={i} variant="outline" className="text-xs border-kenya-red/50">
                      {politician}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {case_.judges && case_.judges.length > 0 && (
              <div className="mb-4">
                <h5 className="font-medium text-sm mb-3 text-primary">Presiding Judges:</h5>
                <div className="flex flex-wrap gap-2">
                  {case_.judges.map((judge, i) => (
                    <Badge key={i} variant="outline" className="text-xs border-primary/50">
                      {judge}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {case_.convictions && case_.convictions.length > 0 && (
              <div className="mb-4">
                <h5 className="font-medium text-sm mb-3 text-kenya-green">Convictions:</h5>
                <div className="space-y-2">
                  {case_.convictions.map((conviction, i) => (
                    <div key={i} className="p-3 bg-kenya-green/10 rounded-lg border border-kenya-green/20">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-medium">{conviction.name}</p>
                          <p className="text-sm text-muted-foreground">{conviction.sentence}</p>
                        </div>
                        <Badge 
                          variant={conviction.status === 'convicted' ? 'destructive' : 'secondary'}
                          className="text-xs"
                        >
                          {conviction.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {case_.outcome && (
              <div className="p-4 bg-muted/50 rounded-lg">
                <span className="text-sm text-muted-foreground">Outcome:</span>
                <p className="text-sm mt-1 leading-relaxed">{case_.outcome}</p>
              </div>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
};