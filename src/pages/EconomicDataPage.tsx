import { Header } from "@/components/Header";
import { Card } from "@/components/ui/card";
import { presidentsData } from "@/data/presidents";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

const EconomicDataPage = () => {
  // Prepare data for charts
  const gdpData = presidentsData.map(president => ({
    name: president.name.split(' ').pop(), // Last name only for space
    gdpStart: president.economicData.gdpAtStart,
    gdpEnd: president.economicData.gdpAtEnd,
    averageGdp: president.economicData.averageGdp,
  }));

  const priceData = presidentsData.map(president => ({
    president: president.name.split(' ').pop(),
    milk: parseInt(president.economicData.milkPrice),
    meat: parseInt(president.economicData.meatPrice),
    flour: parseInt(president.economicData.flourPrice),
    bread: parseInt(president.economicData.breadPrice),
  }));

  const fuelData = presidentsData.map(president => ({
    president: president.name.split(' ').pop(),
    petrol: parseInt(president.economicData.petrolPrice),
    diesel: parseInt(president.economicData.dieselPrice),
  }));

  const salaryData = presidentsData.map(president => ({
    president: president.name.split(' ').pop(),
    start: parseInt(president.economicData.basicSalaryStart.replace(/,/g, '')),
    end: parseInt(president.economicData.basicSalaryEnd.replace(/,/g, '')),
  }));

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4 bg-gradient-hero bg-clip-text text-transparent">
            Economic Data Analysis
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive economic indicators across presidential terms showing GDP growth, 
            commodity prices, and cost of living changes over time.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* GDP Growth Chart */}
          <Card className="p-6 shadow-card">
            <h3 className="text-xl font-semibold mb-4 text-kenya-green">GDP Growth by Presidency</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={gdpData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="name" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))', 
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }} 
                />
                <Line type="monotone" dataKey="gdpStart" stroke="hsl(var(--kenya-red))" strokeWidth={2} name="GDP at Start" />
                <Line type="monotone" dataKey="gdpEnd" stroke="hsl(var(--kenya-green))" strokeWidth={2} name="GDP at End" />
                <Line type="monotone" dataKey="averageGdp" stroke="hsl(var(--primary))" strokeWidth={2} name="Average GDP" />
              </LineChart>
            </ResponsiveContainer>
          </Card>

          {/* Food Prices Chart */}
          <Card className="p-6 shadow-card">
            <h3 className="text-xl font-semibold mb-4 text-kenya-green">Food Prices Comparison (KSh)</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={priceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="president" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))', 
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }} 
                />
                <Bar dataKey="milk" fill="hsl(var(--kenya-green))" name="Milk (1L)" />
                <Bar dataKey="bread" fill="hsl(var(--kenya-red))" name="Bread (400g)" />
              </BarChart>
            </ResponsiveContainer>
          </Card>

          {/* Fuel Prices Chart */}
          <Card className="p-6 shadow-card">
            <h3 className="text-xl font-semibold mb-4 text-kenya-green">Fuel Prices by Presidency (KSh)</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={fuelData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="president" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))', 
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }} 
                />
                <Bar dataKey="petrol" fill="hsl(var(--kenya-red))" name="Petrol" />
                <Bar dataKey="diesel" fill="hsl(var(--primary))" name="Diesel" />
              </BarChart>
            </ResponsiveContainer>
          </Card>

          {/* Salary Changes Chart */}
          <Card className="p-6 shadow-card">
            <h3 className="text-xl font-semibold mb-4 text-kenya-green">Basic Salary Changes (KSh)</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={salaryData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="president" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))', 
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }} 
                />
                <Line type="monotone" dataKey="start" stroke="hsl(var(--kenya-red))" strokeWidth={2} name="Start of Term" />
                <Line type="monotone" dataKey="end" stroke="hsl(var(--kenya-green))" strokeWidth={2} name="End of Term" />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </div>

        {/* Summary Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="p-6 bg-gradient-card shadow-card">
            <h4 className="font-semibold text-kenya-green mb-2">Highest GDP Growth</h4>
            <p className="text-2xl font-bold text-foreground">
              {Math.max(...presidentsData.map(p => p.economicData.averageGdp))}%
            </p>
            <p className="text-sm text-muted-foreground">
              {presidentsData.find(p => p.economicData.averageGdp === Math.max(...presidentsData.map(p => p.economicData.averageGdp)))?.name}
            </p>
          </Card>

          <Card className="p-6 bg-gradient-card shadow-card">
            <h4 className="font-semibold text-kenya-green mb-2">Current Food Basket</h4>
            <p className="text-2xl font-bold text-foreground">KSh 735</p>
            <p className="text-sm text-muted-foreground">Milk + Meat + Flour + Bread</p>
          </Card>

          <Card className="p-6 bg-gradient-card shadow-card">
            <h4 className="font-semibold text-kenya-green mb-2">Current Basic Salary</h4>
            <p className="text-2xl font-bold text-foreground">KSh 15,000</p>
            <p className="text-sm text-muted-foreground">Minimum wage (2024)</p>
          </Card>

          <Card className="p-6 bg-gradient-card shadow-card">
            <h4 className="font-semibold text-kenya-green mb-2">Fuel Price Range</h4>
            <p className="text-2xl font-bold text-foreground">KSh 25-180</p>
            <p className="text-sm text-muted-foreground">Historical petrol prices</p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default EconomicDataPage;