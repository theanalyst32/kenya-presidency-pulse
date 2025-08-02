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
  courtLevel?: string;
  judges?: string[];
  convictions?: {
    name: string;
    sentence: string;
    status: string;
  }[];
}

export interface CabinetMember {
  name: string;
  position: string;
  startDate: string;
  endDate?: string;
  reason?: string; // resignation, dismissal, reshuffle
}

export interface CabinetChange {
  date: string;
  type: 'appointment' | 'dismissal' | 'reshuffle' | 'resignation';
  description: string;
  members: string[];
}

export interface BudgetData {
  year: string;
  amount: string;
}

export interface President {
  id: string;
  name: string;
  title: string;
  term: string;
  termStart: string;
  termEnd: string;
  imageUrl?: string;
  biography?: string;
  economicData: EconomicData;
  projects: Project[];
  corruptionCases: CorruptionCase[];
  budgets: BudgetData[];
  kraCollections: BudgetData[];
  cabinet: CabinetMember[];
  cabinetChanges: CabinetChange[];
}