/**
 * Financial literacy lessons for newcomers to Canada and the US.
 * quiz.correctIndex is 0 or 1, matching quiz.options order.
 */

export const lessons = [
  {
    id: "building-credit",
    title: "Building credit from zero",
    subtitle: "How scores work and the habits that grow them",
    category: "Credit",
    content: [
      "In Canada and the US, a credit score is a number lenders use to see how reliably you repay borrowed money. You are not born with a score—you build it over time by using credit responsibly, like paying a credit card or loan on time.",
      "Starting with a secured card or a small credit limit, keeping balances low, and never missing a payment helps your score grow. Patience matters: most people need several months of good history before their score reflects strong credit habits.",
    ],
    quiz: {
      question:
        "True or false: Paying your credit card balance in full and on time each month helps build a good credit history.",
      options: ["True", "False"],
      correctIndex: 0,
    },
  },
  {
    id: "open-bank-account",
    title: "How to open a bank account",
    subtitle: "What to bring and which account type to start with",
    category: "Banking",
    content: [
      "Banks and credit unions need to verify who you are, so you will usually bring government ID, proof of address, and immigration or work documents. Many places let you book an appointment or start online and finish in a branch.",
      "A chequing account is for everyday spending and bill payments; a savings account is for money you do not need right away and often earns a little interest. Ask about monthly fees, ways to waive them, and whether you need a US Social Security number or Canadian SIN for certain products.",
    ],
    quiz: {
      question:
        "Which account is usually best for paying rent and buying groceries every week?",
      options: ["A savings account only", "A chequing account"],
      correctIndex: 1,
    },
  },
  {
    id: "renting-first-apartment",
    title: "Renting your first apartment",
    subtitle: "Applications, deposits, and reading your lease",
    category: "Housing",
    content: [
      "Landlords often ask for proof of income, references, and sometimes a credit check. A security deposit holds money against damage or unpaid rent; rules about how much they can charge vary by province or state, so look up local tenant laws.",
      "Your lease is a contract: read the rent amount, due date, rules on guests and pets, and what happens if you leave early. Keep copies of emails and signed papers, and do a move-in checklist with photos so you are not charged for problems you did not cause.",
    ],
    quiz: {
      question:
        "Why is it smart to read your whole lease before you sign?",
      options: [
        "So you know your rights, rent rules, and fees before you commit",
        "Leases are optional and do not affect you legally",
      ],
      correctIndex: 0,
    },
  },
  {
    id: "understanding-pay-stub",
    title: "Understanding your pay stub",
    subtitle: "Gross pay, deductions, and what lands in your account",
    category: "Taxes",
    content: [
      "Your gross pay is what you earn before anything is taken out. Deductions often include income tax, government programs like CPP/EI in Canada or Social Security/Medicare in the US, and possibly health insurance or retirement contributions your employer offers.",
      "Net pay is what actually goes to your bank—sometimes called take-home pay. Checking each pay period helps you catch mistakes and understand how tax withholdings and benefits change your cash flow.",
    ],
    quiz: {
      question:
        "What does "net pay" usually mean on a pay stub?",
      options: [
        "Pay before any taxes or deductions",
        "Pay after deductions—the amount you actually receive",
      ],
      correctIndex: 1,
    },
  },
  {
    id: "first-tax-return",
    title: "Filing your first tax return",
    subtitle: "Deadlines, documents, and getting help safely",
    category: "Taxes",
    content: [
      "A tax return reports your income and tells the government whether you already paid enough tax through withholding or whether you owe more or get a refund. In Canada you generally file a federal return and may file provincially; in the US you file a federal return and often a state return.",
      "Gather T4s, W-2s, or other income slips, records of rent paid if relevant, and notices from immigration or school if they affect credits. Free clinics, reputable software, or licensed preparers can help—avoid anyone who promises a huge refund before seeing your documents.",
    ],
    quiz: {
      question:
        "What is one main purpose of filing a tax return?",
      options: [
        "To report income and settle taxes owed or claim a refund",
        "To tell your bank how much you spend on groceries",
      ],
      correctIndex: 0,
    },
  },
  {
    id: "rrsp-401k",
    title: "What is an RRSP or 401(k)?",
    subtitle: "Tax-friendly ways to save for retirement",
    category: "Saving",
    content: [
      "An RRSP (Canada) and a 401(k) (US) are accounts designed to help you save for retirement, often with tax advantages. Money you contribute may lower your taxable income now, and investments inside the account can grow over many years.",
      "Employer 401(k) plans sometimes match part of what you save—that is extra money if you participate. There are rules on how much you can put in each year and when you can withdraw without penalties, so read your plan summary or ask your provider.",
    ],
    quiz: {
      question:
        "What is a common benefit of an employer 401(k) plan in the US?",
      options: [
        "Your employer may match some of your contributions",
        "The government guarantees your investments will double every year",
      ],
      correctIndex: 0,
    },
  },
  // NEW LESSONS
  {
    id: "send-money-home",
    title: "How to send money back home",
    subtitle: "Wire transfers, apps, fees, and exchange rates",
    category: "Banking",
    content: [
      "Many newcomers send money to family abroad using wire transfers, online services like Wise or Remitly, or bank transfers. Each option has different fees, exchange rates, and delivery times—some arrive in minutes, others take several days.",
      "Always compare the total cost including hidden fees in the exchange rate. Services often show a 'fee' plus give you a worse exchange rate than the real mid-market rate. Track your transfers and keep receipts in case something goes wrong.",
    ],
    quiz: {
      question:
        "What should you check besides the fee when sending money abroad?",
      options: [
        "The exchange rate they give you compared to the real market rate",
        "The color of the app icon",
      ],
      correctIndex: 0,
    },
  },
  {
    id: "health-insurance",
    title: "Understanding health insurance",
    subtitle: "Deductibles, copays, and what to do without coverage",
    category: "Benefits",
    content: [
      "Health insurance helps pay for doctor visits, hospital stays, and prescriptions. In Canada, provincial health plans cover most basics but you may need private insurance for dental, vision, and prescriptions. In the US, insurance often comes through your employer or the marketplace.",
      "A deductible is what you pay before insurance starts helping; a copay is a fixed amount per visit. If you have no coverage yet, look for community health centers, sliding-scale clinics, or provincial/state programs for newcomers.",
    ],
    quiz: {
      question:
        "What is a deductible in health insurance?",
      options: [
        "The amount you pay out of pocket before insurance starts covering costs",
        "The monthly premium you pay for insurance",
      ],
      correctIndex: 0,
    },
  },
  {
    id: "drivers-license",
    title: "How to get a driver's license",
    subtitle: "Exchanging foreign licenses, tests, and costs",
    category: "Life Admin",
    content: [
      "Most provinces and states let you exchange a valid foreign license if your home country has an agreement with them. Otherwise, you may need to take a written knowledge test, a vision test, and a road driving test.",
      "Costs vary but typically include application fees, test fees, and the license itself. Some places require you to hold a learner permit for a certain time before the full license. Check your local DMV or licensing office website for exact requirements.",
    ],
    quiz: {
      question:
        "Can you always exchange a foreign license without any tests?",
      options: [
        "No—it depends on agreements between your home country and the province or state",
        "Yes—all foreign licenses are automatically valid",
      ],
      correctIndex: 0,
    },
  },
  {
    id: "avoiding-scams",
    title: "Protecting yourself from scams",
    subtitle: "CRA/IRS scam calls, fake jobs, and immigration fraud",
    category: "Safety",
    content: [
      "Scammers often target newcomers with fake calls claiming to be from the CRA, IRS, or immigration. Real government agencies will never threaten arrest over the phone or demand immediate payment via gift cards or wire transfers.",
      "Watch out for job offers that ask you to pay upfront, immigration 'helpers' who guarantee results, and emails asking for your SIN, SSN, or banking info. When in doubt, hang up and call the official number yourself to verify.",
    ],
    quiz: {
      question:
        "Will the CRA or IRS ever call and demand immediate payment via gift cards?",
      options: [
        "No—that is always a scam",
        "Yes—they do this for urgent tax debts",
      ],
      correctIndex: 0,
    },
  },
  {
    id: "emergency-fund",
    title: "How to build an emergency fund",
    subtitle: "Why you need one, how much to save, and where to keep it",
    category: "Saving",
    content: [
      "An emergency fund is savings set aside for unexpected expenses like job loss, medical bills, or urgent repairs. Financial experts often recommend saving three to six months of essential expenses, but even a few hundred dollars helps in a pinch.",
      "Keep your emergency fund in a savings account where it is easy to access but separate from daily spending. Start small—even $20 per paycheck adds up. Automate transfers so you save without thinking about it.",
    ],
    quiz: {
      question:
        "How much emergency fund do experts often recommend as a starting goal?",
      options: [
        "Three to six months of essential expenses",
        "One week of spending money",
      ],
      correctIndex: 0,
    },
  },
  {
    id: "employment-rights",
    title: "Understanding employment rights",
    subtitle: "Minimum wage, overtime, pay stubs, and where to get help",
    category: "Work",
    content: [
      "Every worker has basic rights including minimum wage, overtime pay in most cases, and the right to receive a pay stub showing hours, deductions, and net pay. Your employer cannot legally withhold pay you have earned or force you to work unpaid hours.",
      "If your employer does not pay you properly, you can file a complaint with your provincial or state labor board. Keep copies of your pay stubs, schedules, and any written communication. Community legal clinics can also help newcomers understand their rights.",
    ],
    quiz: {
      question:
        "What should you do if your employer refuses to pay wages you earned?",
      options: [
        "File a complaint with the labor board and keep records of your work",
        "Accept it because newcomers have no rights",
      ],
      correctIndex: 0,
    },
  },
];

export const LESSON_COUNT = lessons.length;

export function getLessonById(id) {
  return lessons.find((l) => l.id === id);
}

export function getNextLessonId(currentId) {
  const i = lessons.findIndex((l) => l.id === currentId);
  if (i === -1 || i >= lessons.length - 1) return null;
  return lessons[i + 1].id;
}
