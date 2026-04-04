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
        "What does “net pay” usually mean on a pay stub?",
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
