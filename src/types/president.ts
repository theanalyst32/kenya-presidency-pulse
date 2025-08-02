export interface EconomicData {
  gdpAtStart: number;
  gdpAtEnd: number;
  averageGdp: number;
  basicSalaryStart: string;
  basicSalaryEnd: string;
  averageHousingCost: string;
  costOfLivingIndex: number;
  milkPrice: string;
  meatPrice: string;
  flourPrice: string;
  breadPrice: string;
  petrolPrice: string;
  dieselPrice: string;
}

export interface Project {
  name: string;
  description: string;
  budget: string;
  startDate: string;
  expectedCompletion: string;
  progress: number;
  status: string;
  keyAchievements?: string[];
}

export interface CorruptionCase {
  caseName: string;
  description: string;
  amountInvolved: string;
  year: string;
  status: string;
  keyPoliticians?: string[];
  outcome?: string;
}

export interface BudgetData {
  year: string;
  amount: string;
}

export interface President {
  name: string;
  title: string;
  term: string;
  termStart: string;
  termEnd: string;
  economicData: EconomicData;
  projects: Project[];
  corruptionCases: CorruptionCase[];
  budgets: BudgetData[];
  kraCollections: BudgetData[];
}