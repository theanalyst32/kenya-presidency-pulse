import { Card } from "@/components/ui/card";
import { EconomicData } from "@/types/president";

interface EconomicIndicatorsProps {
  data: EconomicData;
}

export const EconomicIndicators = ({ data }: EconomicIndicatorsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <Card className="p-4">
        <h4 className="font-semibold mb-3 text-kenya-green">GDP Growth</h4>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-sm text-muted-foreground">When took office:</span>
            <span className="font-medium">{data.gdpAtStart}%</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-muted-foreground">When left office:</span>
            <span className="font-medium">{data.gdpAtEnd}%</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-muted-foreground">Average:</span>
            <span className="font-medium">{data.averageGdp}%</span>
          </div>
        </div>
      </Card>

      <Card className="p-4">
        <h4 className="font-semibold mb-3 text-kenya-green">Basic Salary</h4>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-sm text-muted-foreground">Start of term:</span>
            <span className="font-medium">KSh {data.basicSalaryStart}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-muted-foreground">End of term:</span>
            <span className="font-medium">KSh {data.basicSalaryEnd}</span>
          </div>
        </div>
      </Card>

      <Card className="p-4">
        <h4 className="font-semibold mb-3 text-kenya-green">Housing Costs</h4>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-sm text-muted-foreground">Average rent (Nairobi):</span>
            <span className="font-medium">KSh {data.averageHousingCost}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-muted-foreground">Cost of living index:</span>
            <span className="font-medium">{data.costOfLivingIndex}</span>
          </div>
        </div>
      </Card>

      <Card className="p-4">
        <h4 className="font-semibold mb-3 text-kenya-red">Food Prices (Average)</h4>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-sm text-muted-foreground">Milk (1L):</span>
            <span className="font-medium">KSh {data.milkPrice}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-muted-foreground">Meat (1kg):</span>
            <span className="font-medium">KSh {data.meatPrice}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-muted-foreground">Flour (2kg):</span>
            <span className="font-medium">KSh {data.flourPrice}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-muted-foreground">Bread (400g):</span>
            <span className="font-medium">KSh {data.breadPrice}</span>
          </div>
        </div>
      </Card>

      <Card className="p-4">
        <h4 className="font-semibold mb-3 text-kenya-red">Fuel Prices</h4>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-sm text-muted-foreground">Petrol (per litre):</span>
            <span className="font-medium">KSh {data.petrolPrice}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-muted-foreground">Diesel (per litre):</span>
            <span className="font-medium">KSh {data.dieselPrice}</span>
          </div>
        </div>
      </Card>
    </div>
  );
};