import { President } from "@/types/president";

export const presidentsData: President[] = [
  {
    id: "william-ruto",
    name: "William Ruto",
    title: "5th President of Kenya",
    term: "2022 - Present",
    termStart: "September 2022",
    termEnd: "Present",
    biography: "William Ruto is the fifth President of Kenya, having taken office in September 2022. Before becoming president, he served as Deputy President from 2013 to 2022 under Uhuru Kenyatta. Known for his 'hustler' narrative and bottom-up economic approach.",
    economicData: {
      gdpAtStart: 4.8,
      gdpAtEnd: 5.2,
      averageGdp: 5.0,
      basicSalaryStart: "15,000",
      basicSalaryEnd: "15,000",
      averageHousingCost: "45,000",
      costOfLivingIndex: 155,
      milkPrice: "60",
      meatPrice: "450",
      flourPrice: "180",
      breadPrice: "55",
      petrolPrice: "180",
      dieselPrice: "165"
    },
    projects: [
      {
        name: "Affordable Housing Program",
        description: "Construction of 250,000 affordable housing units nationwide",
        budget: "500 Billion",
        startDate: "2023",
        expectedCompletion: "2027",
        progress: 15,
        status: "Ongoing",
        keyAchievements: [
          "Launched housing fund collections",
          "Identified construction sites in major cities",
          "Partnered with private developers"
        ]
      },
      {
        name: "Digital Superhighway",
        description: "Nationwide fiber optic cable infrastructure",
        budget: "200 Billion",
        startDate: "2023",
        expectedCompletion: "2026",
        progress: 25,
        status: "Ongoing",
        keyAchievements: [
          "Connected 5,000 schools to fiber",
          "Established digital hubs in 20 counties"
        ]
      }
    ],
    corruptionCases: [
      {
        caseName: "Fertilizer Scandal",
        description: "Overpriced fertilizer procurement leading to farmer losses",
        amountInvolved: "7.5 Billion",
        year: "2023",
        status: "Under Investigation",
        keyPoliticians: ["Cabinet Secretary Agriculture"],
        outcome: "Investigation ongoing by DCI",
        courtLevel: "Magistrate Court",
        judges: ["Chief Magistrate Grace Nzioka"],
        convictions: []
      }
    ],
    cabinet: [
      { name: "Rigathi Gachagua", position: "Deputy President", startDate: "September 2022" },
      { name: "Musalia Mudavadi", position: "Prime Cabinet Secretary", startDate: "September 2022" },
      { name: "Kithure Kindiki", position: "Cabinet Secretary Interior", startDate: "October 2022" },
      { name: "Njuguna Ndung'u", position: "Cabinet Secretary Treasury", startDate: "October 2022" },
      { name: "Mithika Linturi", position: "Cabinet Secretary Agriculture", startDate: "October 2022" }
    ],
    cabinetChanges: [
      {
        date: "October 2022",
        type: "appointment",
        description: "Initial cabinet appointments after election victory",
        members: ["Kithure Kindiki", "Njuguna Ndung'u", "Mithika Linturi"]
      }
    ],
    budgets: [
      { year: "2023/24", amount: "3.7 Trillion" },
      { year: "2024/25", amount: "4.2 Trillion" }
    ],
    kraCollections: [
      { year: "2023", amount: "2.4 Trillion" },
      { year: "2024", amount: "2.8 Trillion" }
    ]
  },
  {
    id: "uhuru-kenyatta",
    name: "Uhuru Kenyatta",
    title: "4th President of Kenya",
    term: "2013 - 2022",
    termStart: "April 2013",
    termEnd: "September 2022",
    biography: "Uhuru Kenyatta served as the fourth President of Kenya from 2013 to 2022. Son of Kenya's first president Jomo Kenyatta, he focused on infrastructure development through his Big Four Agenda and initiated major projects like the Standard Gauge Railway.",
    economicData: {
      gdpAtStart: 5.7,
      gdpAtEnd: 4.8,
      averageGdp: 5.2,
      basicSalaryStart: "12,000",
      basicSalaryEnd: "15,000",
      averageHousingCost: "35,000",
      costOfLivingIndex: 140,
      milkPrice: "50",
      meatPrice: "380",
      flourPrice: "150",
      breadPrice: "45",
      petrolPrice: "150",
      dieselPrice: "135"
    },
    projects: [
      {
        name: "Standard Gauge Railway (SGR)",
        description: "Modern railway from Mombasa to Nairobi and beyond",
        budget: "1.5 Trillion",
        startDate: "2014",
        expectedCompletion: "2030",
        progress: 60,
        status: "Ongoing",
        keyAchievements: [
          "Completed Mombasa-Nairobi line",
          "Reduced cargo transport time by 70%",
          "Created 40,000 direct jobs"
        ]
      },
      {
        name: "Big Four Agenda",
        description: "Focus on Manufacturing, Food Security, Healthcare, and Housing",
        budget: "3.2 Trillion",
        startDate: "2018",
        expectedCompletion: "2022",
        progress: 45,
        status: "Completed",
        keyAchievements: [
          "Universal Health Coverage rollout",
          "Manufacturing contribution increased to 9.2%",
          "Food security programs in ASAL areas"
        ]
      }
    ],
    corruptionCases: [
      {
        caseName: "NYS Scandal",
        description: "Theft of funds meant for youth employment programs",
        amountInvolved: "9 Billion",
        year: "2015-2018",
        status: "Ongoing",
        keyPoliticians: ["Former NYS Director", "Various Politicians"],
        outcome: "Several arrests made, cases ongoing in court",
        courtLevel: "High Court",
        judges: ["Justice Hedwig Ong'udi", "Justice James Wakiaga"],
        convictions: [
          { name: "Josephine Kabura", sentence: "10 years imprisonment", status: "convicted" },
          { name: "Geoffrey Wamae", sentence: "8 years imprisonment", status: "convicted" }
        ]
      },
      {
        caseName: "KEMSA Scandal",
        description: "Overpricing of COVID-19 medical supplies",
        amountInvolved: "7.8 Billion",
        year: "2020",
        status: "Under Investigation",
        keyPoliticians: ["KEMSA Officials", "Health Ministry Officials"],
        outcome: "Parliamentary investigation concluded, prosecutions pending",
        courtLevel: "High Court",
        judges: ["Justice Anthony Mrima"],
        convictions: []
      },
      {
        caseName: "Eurobond Scandal",
        description: "Missing proceeds from sovereign bond",
        amountInvolved: "200 Billion",
        year: "2014-2019",
        status: "Under Investigation",
        keyPoliticians: ["Treasury Officials"],
        outcome: "Forensic audit ongoing",
        courtLevel: "High Court",
        judges: ["Justice George Oduya"],
        convictions: []
      }
    ],
    cabinet: [
      { name: "William Ruto", position: "Deputy President", startDate: "April 2013", endDate: "September 2022" },
      { name: "Henry Rotich", position: "Cabinet Secretary Treasury", startDate: "April 2013", endDate: "July 2019", reason: "dismissal" },
      { name: "Ukur Yatani", position: "Cabinet Secretary Treasury", startDate: "July 2019", endDate: "September 2022" },
      { name: "Fred Matiang'i", position: "Cabinet Secretary Interior", startDate: "January 2018", endDate: "September 2022" },
      { name: "Rachel Omamo", position: "Cabinet Secretary Foreign Affairs", startDate: "February 2013", endDate: "September 2022" }
    ],
    cabinetChanges: [
      {
        date: "July 2019",
        type: "dismissal",
        description: "Treasury CS Henry Rotich dismissed over Arror and Kimwarer dams scandal",
        members: ["Henry Rotich"]
      },
      {
        date: "January 2018",
        type: "reshuffle",
        description: "Major cabinet reshuffle with Fred Matiang'i moved to Interior",
        members: ["Fred Matiang'i"]
      }
    ],
    budgets: [
      { year: "2013/14", amount: "1.6 Trillion" },
      { year: "2014/15", amount: "1.8 Trillion" },
      { year: "2015/16", amount: "2.0 Trillion" },
      { year: "2016/17", amount: "2.2 Trillion" },
      { year: "2017/18", amount: "2.4 Trillion" },
      { year: "2018/19", amount: "2.6 Trillion" },
      { year: "2019/20", amount: "2.8 Trillion" },
      { year: "2020/21", amount: "2.7 Trillion" },
      { year: "2021/22", amount: "3.0 Trillion" }
    ],
    kraCollections: [
      { year: "2013", amount: "1.0 Trillion" },
      { year: "2014", amount: "1.1 Trillion" },
      { year: "2015", amount: "1.2 Trillion" },
      { year: "2016", amount: "1.3 Trillion" },
      { year: "2017", amount: "1.4 Trillion" },
      { year: "2018", amount: "1.5 Trillion" },
      { year: "2019", amount: "1.6 Trillion" },
      { year: "2020", amount: "1.5 Trillion" },
      { year: "2021", amount: "1.8 Trillion" },
      { year: "2022", amount: "2.0 Trillion" }
    ]
  },
  {
    id: "mwai-kibaki",
    name: "Mwai Kibaki",
    title: "3rd President of Kenya",
    term: "2003 - 2013",
    termStart: "December 2002",
    termEnd: "April 2013",
    biography: "Mwai Kibaki served as Kenya's third President from 2002 to 2013. An economist by training, he is credited with reviving Kenya's economy and implementing free primary education. His presidency marked the end of KANU's long rule in Kenya.",
    economicData: {
      gdpAtStart: 0.5,
      gdpAtEnd: 5.7,
      averageGdp: 4.5,
      basicSalaryStart: "5,000",
      basicSalaryEnd: "12,000",
      averageHousingCost: "20,000",
      costOfLivingIndex: 100,
      milkPrice: "30",
      meatPrice: "200",
      flourPrice: "80",
      breadPrice: "25",
      petrolPrice: "80",
      dieselPrice: "75"
    },
    projects: [
      {
        name: "Vision 2030",
        description: "Long-term development blueprint for Kenya",
        budget: "2.5 Trillion",
        startDate: "2008",
        expectedCompletion: "2030",
        progress: 40,
        status: "Ongoing",
        keyAchievements: [
          "Launched three pillars: Economic, Social, Political",
          "Established NEMA and other institutions",
          "Infrastructure development acceleration"
        ]
      },
      {
        name: "Free Primary Education",
        description: "Universal free primary education for all children",
        budget: "150 Billion",
        startDate: "2003",
        expectedCompletion: "2008",
        progress: 100,
        status: "Completed",
        keyAchievements: [
          "Enrollment increased from 6M to 9.4M",
          "Built 18,000 new classrooms",
          "Eliminated school fees"
        ]
      },
      {
        name: "Economic Recovery Strategy",
        description: "Revitalization of Kenya's economy after Moi era",
        budget: "800 Billion",
        startDate: "2003",
        expectedCompletion: "2007",
        progress: 90,
        status: "Completed",
        keyAchievements: [
          "GDP growth from 0.5% to 7%",
          "Inflation reduced from 11% to 3%",
          "Infrastructure rehabilitation"
        ]
      }
    ],
    corruptionCases: [
      {
        caseName: "Anglo Leasing Scandal",
        description: "Fraudulent government contracts with non-existent companies",
        amountInvolved: "60 Billion",
        year: "2003-2007",
        status: "Ongoing",
        keyPoliticians: ["Treasury Officials", "Various Ministers"],
        outcome: "Several prosecutions, some cases still in court",
        courtLevel: "High Court",
        judges: ["Justice George Oduya", "Justice Mumbi Ngugi"],
        convictions: [
          { name: "Deepak Kamani", sentence: "Fine and asset forfeiture", status: "convicted" }
        ]
      },
      {
        caseName: "Maize Scandal",
        description: "Strategic grain reserve mismanagement",
        amountInvolved: "2.5 Billion",
        year: "2009",
        status: "Convicted",
        keyPoliticians: ["NCPB Officials"],
        outcome: "Several officials convicted and jailed",
        courtLevel: "Magistrate Court",
        judges: ["Senior Principal Magistrate Francis Andayi"],
        convictions: [
          { name: "Joel Sang", sentence: "5 years imprisonment", status: "convicted" },
          { name: "Grace Wanjiku", sentence: "3 years imprisonment", status: "convicted" }
        ]
      }
    ],
    cabinet: [
      { name: "Moody Awori", position: "Vice President", startDate: "January 2003", endDate: "January 2008" },
      { name: "Kalonzo Musyoka", position: "Vice President", startDate: "January 2008", endDate: "April 2013" },
      { name: "David Mwiraria", position: "Cabinet Secretary Treasury", startDate: "January 2003", endDate: "February 2006", reason: "resignation" },
      { name: "Amos Kimunya", position: "Cabinet Secretary Treasury", startDate: "February 2006", endDate: "July 2008" },
      { name: "John Michuki", position: "Cabinet Secretary Interior", startDate: "January 2003", endDate: "April 2013" }
    ],
    cabinetChanges: [
      {
        date: "February 2006",
        type: "resignation",
        description: "Treasury CS David Mwiraria resigned over Anglo Leasing scandal",
        members: ["David Mwiraria"]
      },
      {
        date: "January 2008",
        type: "appointment",
        description: "Kalonzo Musyoka appointed as Vice President in coalition government",
        members: ["Kalonzo Musyoka"]
      }
    ],
    budgets: [
      { year: "2003/04", amount: "400 Billion" },
      { year: "2004/05", amount: "450 Billion" },
      { year: "2005/06", amount: "500 Billion" },
      { year: "2006/07", amount: "600 Billion" },
      { year: "2007/08", amount: "700 Billion" },
      { year: "2008/09", amount: "800 Billion" },
      { year: "2009/10", amount: "900 Billion" },
      { year: "2010/11", amount: "1.0 Trillion" },
      { year: "2011/12", amount: "1.2 Trillion" },
      { year: "2012/13", amount: "1.4 Trillion" }
    ],
    kraCollections: [
      { year: "2003", amount: "300 Billion" },
      { year: "2004", amount: "350 Billion" },
      { year: "2005", amount: "400 Billion" },
      { year: "2006", amount: "450 Billion" },
      { year: "2007", amount: "500 Billion" },
      { year: "2008", amount: "550 Billion" },
      { year: "2009", amount: "500 Billion" },
      { year: "2010", amount: "650 Billion" },
      { year: "2011", amount: "750 Billion" },
      { year: "2012", amount: "850 Billion" }
    ]
  },
  {
    id: "daniel-arap-moi",
    name: "Daniel Arap Moi",
    title: "2nd President of Kenya",
    term: "1978 - 2002",
    termStart: "August 1978",
    termEnd: "December 2002",
    biography: "Daniel arap Moi was Kenya's second President, serving from 1978 to 2002. His 24-year rule was marked by both development projects and authoritarian governance. He introduced the philosophy of 'Nyayo' (footsteps) and oversaw Kenya's transition to multi-party democracy in the 1990s.",
    economicData: {
      gdpAtStart: 8.2,
      gdpAtEnd: 0.5,
      averageGdp: 3.5,
      basicSalaryStart: "800",
      basicSalaryEnd: "5,000",
      averageHousingCost: "8,000",
      costOfLivingIndex: 80,
      milkPrice: "8",
      meatPrice: "60",
      flourPrice: "25",
      breadPrice: "5",
      petrolPrice: "25",
      dieselPrice: "20"
    },
    projects: [
      {
        name: "Nyayo Era Infrastructure",
        description: "Roads, schools, and hospitals construction",
        budget: "200 Billion",
        startDate: "1980",
        expectedCompletion: "2000",
        progress: 70,
        status: "Completed",
        keyAchievements: [
          "Built Nyayo Stadium",
          "Expanded road network",
          "Constructed rural hospitals"
        ]
      },
      {
        name: "Harambee Movement",
        description: "Community-driven development projects",
        budget: "100 Billion",
        startDate: "1978",
        expectedCompletion: "2002",
        progress: 80,
        status: "Completed",
        keyAchievements: [
          "Built 5,000+ schools through community contributions",
          "Community water projects",
          "Local infrastructure development"
        ]
      }
    ],
    corruptionCases: [
      {
        caseName: "Goldenberg Scandal",
        description: "Fictitious gold and diamond exports scheme",
        amountInvolved: "150 Billion",
        year: "1990-1993",
        status: "Convicted",
        keyPoliticians: ["Kamlesh Pattni", "Various Government Officials"],
        outcome: "Main perpetrator convicted, government officials sanctioned",
        courtLevel: "High Court",
        judges: ["Justice Akilano Akiwumi", "Justice Samuel Bosire"],
        convictions: [
          { name: "Kamlesh Pattni", sentence: "Asset forfeiture and fine", status: "convicted" }
        ]
      },
      {
        caseName: "Central Bank Forex Scandal",
        description: "Foreign exchange manipulation and theft",
        amountInvolved: "35 Billion",
        year: "1995",
        status: "Acquitted",
        keyPoliticians: ["Central Bank Officials"],
        outcome: "Most officials acquitted due to lack of evidence",
        courtLevel: "High Court",
        judges: ["Justice Majid Cockar"],
        convictions: []
      }
    ],
    cabinet: [
      { name: "George Saitoti", position: "Vice President", startDate: "May 1989", endDate: "August 1997" },
      { name: "Simeon Nyachae", position: "Vice President", startDate: "January 1999", endDate: "August 2002" },
      { name: "Musalia Mudavadi", position: "Vice President", startDate: "August 2002", endDate: "December 2002" },
      { name: "Francis Lotodo", position: "Minister of Finance", startDate: "1988", endDate: "1993" },
      { name: "Micah Cheserem", position: "Governor Central Bank", startDate: "1993", endDate: "2001" }
    ],
    cabinetChanges: [
      {
        date: "August 1997",
        type: "dismissal",
        description: "VP George Saitoti dismissed amid political tensions",
        members: ["George Saitoti"]
      },
      {
        date: "August 2002",
        type: "appointment",
        description: "Last-minute appointment of Musalia Mudavadi as VP before elections",
        members: ["Musalia Mudavadi"]
      }
    ],
    budgets: [
      { year: "1978/79", amount: "15 Billion" },
      { year: "1985/86", amount: "45 Billion" },
      { year: "1990/91", amount: "80 Billion" },
      { year: "1995/96", amount: "150 Billion" },
      { year: "2000/01", amount: "250 Billion" },
      { year: "2001/02", amount: "300 Billion" }
    ],
    kraCollections: [
      { year: "1980", amount: "12 Billion" },
      { year: "1985", amount: "35 Billion" },
      { year: "1990", amount: "65 Billion" },
      { year: "1995", amount: "120 Billion" },
      { year: "2000", amount: "200 Billion" },
      { year: "2002", amount: "250 Billion" }
    ]
  }
];