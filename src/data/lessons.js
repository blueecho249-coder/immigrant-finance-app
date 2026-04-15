/**
 * Financial literacy lessons for newcomers to Canada and the US.
 * Enhanced with comprehensive content and multiple questions per lesson.
 */

export const lessons = [
  {
    id: "building-credit-from-zero",
    isPremium: false,
    title: {
      en: "Building credit from zero",
      es: "Construir crédito desde cero",
      hi: "Zero se credit banana",
      tl: "Pagbuo ng credit mula sa wala",
      zh: "Building credit from zero",
      ar: "Building credit from zero",
      fr: "Construire son crédit à partir de zéro",
      pa: "Zero to credit banana"
    },
    subtitle: {
      en: "How credit scores work and habits that grow them",
      es: "Cómo funcionan las puntuaciones de crédito y los hábitos que las hacen crecer",
      hi: "Credit scores kaise kaam karte hain aur unhe badhne ke aadatein",
      tl: "Paano gumagana ang credit scores at mga kaugalian na lumalaki dito",
      zh: "How credit scores work and habits that grow them",
      ar: "How credit scores work and habits that grow them",
      fr: "Comment fonctionnent les scores de crédit et les habitudes qui les font grandir",
      pa: "Credit scores kiven kaam karde han te unhe badhne de adate"
    },
    category: "Credit",
    steps: [
      {
        type: "concept",
        content: {
          en: {
            headline: "What is a credit score?",
            illustration: "score",
            explanation: [
              "A credit score is a number between 300 and 850 that tells lenders how reliably you pay back money.",
              "Higher scores mean better interest rates and easier loan approvals.",
              "Lower scores mean higher costs and fewer options."
            ],
            contentBreakdown: [
              {
                type: "text",
                content: "When you arrive in Canada your score is not zero - you simply have no score yet. This is very different from having bad credit."
              },
              {
                type: "quickQuestion",
                question: "What's the difference between no score and bad score?",
                options: [
                  "No score means you haven't started yet, bad score means you've made mistakes",
                  "They're the same thing",
                  "No score is worse than bad score"
                ],
                correct: 0,
                explanation: "No score means you're a blank slate - that's actually good! Bad score means you have negative history.",
                spacedRepetition: {
                  onWrong: {
                    reviewText: "Let's review this important concept:",
                    reviewContent: [
                      "No credit score = You haven't started building credit yet",
                      "Bad credit score = You have negative payment history",
                      "No score is actually BETTER than bad score!",
                      "Think: New student vs student who failed exams"
                    ],
                    retryQuestion: {
                      question: "So, which is better when arriving in Canada?",
                      options: ["Having no score", "Having a bad score", "Both are the same"],
                      correct: 0,
                      hint: "Remember: no negative history vs negative history"
                    }
                  }
                }
              },
              {
                type: "text", 
                content: "Think of it like a school grade. No score is like being a new student - you haven't taken any tests yet. Bad score is like failing your tests."
              },
              {
                type: "example",
                title: "Real World Example",
                content: "Maria moved from Mexico and has no Canadian credit. She applies for a secured credit card with a $500 deposit. After 6 months of paying on time, her score appears at 680 - that's excellent progress!"
              },
              {
                type: "quickQuestion",
                question: "How long does it typically take to build a credit score in Canada?",
                options: ["1-2 months", "3-6 months", "1-2 years"],
                correct: 1,
                explanation: "It usually takes 3-6 months of responsible credit use to generate your first score.",
                spacedRepetition: {
                  onWrong: {
                    reviewText: "Let's review the credit building timeline:",
                    reviewContent: [
                      "Month 1-2: Use credit responsibly, payments reported to bureaus",
                      "Month 3-6: Credit bureaus have enough data to generate your first score",
                      "Key factors: Payment history, credit utilization, length of history",
                      "Consistent on-time payments = faster score appearance"
                    ],
                    retryQuestion: {
                      question: "What's the minimum time to get your first credit score?",
                      options: ["1 month", "3 months", "6 months", "12 months"],
                      correct: 1,
                      hint: "Think: How long does it take to show a pattern of responsible behavior?"
                    }
                  }
                }
              },
              {
                type: "text",
                content: "The key is to start small and be consistent. Even a $300 secured credit card, paid in full each month, will build your score effectively."
              }
            ],
            visualElements: {
              creditScoreVisualizer: {
                type: "interactive-meter",
                ranges: [
                  { min: 300, max: 579, label: "Poor", color: "#ef4444", emoji: "Poor: High interest rates, loan rejections" },
                  { min: 580, max: 669, label: "Fair", color: "#f59e0b", emoji: "Fair: Some loan options, higher rates" },
                  { min: 670, max: 739, label: "Good", color: "#10b981", emoji: "Good: Better rates, more options" },
                  { min: 740, max: 799, label: "Very Good", color: "#06b6d4", emoji: "Very Good: Best rates, premium cards" },
                  { min: 800, max: 850, label: "Excellent", color: "#059669", emoji: "Excellent: VIP treatment, lowest rates" }
                ],
                description: "Drag the slider to see what different score ranges mean for you!",
                currentScore: 650,
                showLabels: true,
                interactiveFeatures: {
                  dragToExplore: true,
                  realTimeFeedback: true,
                  clickToLearn: true,
                  scoreImpact: {
                    "300-579": "Hard to get approved for anything",
                    "580-669": "Limited options, higher costs",
                    "670-739": "Good access to credit",
                    "740-799": "Excellent credit opportunities",
                    "800-850": "Best deals and rates available"
                  }
                }
              },
              miniGame: {
                type: "credit-builder",
                title: "Build Your Credit Score",
                description: "Make smart financial choices to build your credit score!",
                scenarios: [
                  {
                    id: "payment_choice",
                    question: "You got your first credit card bill. What do you do?",
                    options: [
                      { text: "Pay the minimum", impact: -10, feedback: "Minimum payment hurts your score!" },
                      { text: "Pay in full", impact: +15, feedback: "Perfect! Full payments boost your score!" },
                      { text: "Pay more than minimum", impact: +5, feedback: "Good, but full payment is better!" }
                    ]
                  },
                  {
                    id: "credit_usage",
                    question: "Your credit limit is $1000. How much should you spend?",
                    options: [
                      { text: "Use $950", impact: -15, feedback: "High usage hurts your score!" },
                      { text: "Use $300", impact: +10, feedback: "Great! Low usage shows responsibility!" },
                      { text: "Use $600", impact: 0, feedback: "Okay, but try to stay under 30%" }
                    ]
                  }
                ],
                winCondition: "Reach 700+ score",
                reward: "Credit Master Badge"
              },
              progressTracker: {
                type: "milestone-badges",
                milestones: [
                  { score: 300, badge: "Newcomer", description: "Just starting your journey" },
                  { score: 500, badge: "Learner", description: "Understanding the basics" },
                  { score: 650, badge: "Builder", description: "Building good habits" },
                  { score: 750, badge: "Achiever", description: "Excellent credit habits" },
                  { score: 800, badge: "Master", description: "Credit expert!" }
                ]
              }
            }
          },
          es: {
            headline: "¿Qué es una puntuación de crédito?",
            illustration: "score",
            explanation: [
              "Una puntuación de crédito es un número entre 300 y 850 que dice a los prestamistas qué tan confiablemente pagas el dinero.",
              "Cuando llegas a Canadá tu puntuación no es cero - simplemente no tienes puntuación aún. Eso es muy diferente.",
              "Piensa en ello como una calificación financiera que muestra qué tan responsable eres con el dinero prestado."
            ]
          },
          hi: {
            headline: "Credit score kya hai?",
            illustration: "score",
            explanation: [
              "Credit score 300 aur 850 ke beech ka number hai jo lenders ko batata hai ki aap kitne reliably paise wapas chukate hain.",
              "Jab aap Canada aate hain to aapka score zero nahi hai - aapka bas abhi tak koi score nahi hai. Yeh bahut alag hai.",
              "Isse financial grade ki tarah sochiye jo dikata hai ki aap borrowed money ke saath kitne responsible hain."
            ]
          },
          tl: {
            headline: "Ano ang isang credit score?",
            illustration: "score",
            explanation: [
              "Ang isang credit score ay isang numero sa pagitan ng 300 at 850 na nagsasabi sa mga kung gaano kasigurado mong ibabalik ang pera.",
              "Kapag dumating ka sa Canada ang iyong score ay hindi zero - wala ka lang score pa. Ito ay napakaiba.",
              "Isipin ito bilang isang financial grade na nagpapakita kung gaano ka responsable sa borrowed money."
            ]
          },
          zh: {
            headline: "What is a credit score?",
            illustration: "score",
            explanation: [
              "A credit score is a number between 300 and 850 that tells lenders how reliably you pay back money.",
              "When you arrive in Canada your score is not zero - you simply have no score yet. That is very different.",
              "Think of it like a financial grade that shows how responsible you are with borrowed money."
            ]
          },
          ar: {
            headline: "What is a credit score?",
            illustration: "score",
            explanation: [
              "A credit score is a number between 300 and 850 that tells lenders how reliably you pay back money.",
              "When you arrive in Canada your score is not zero - you simply have no score yet. That is very different.",
              "Think of it like a financial grade that shows how responsible you are with borrowed money."
            ]
          },
          fr: {
            headline: "Qu'est-ce qu'un score de crédit?",
            illustration: "score",
            explanation: [
              "Un score de crédit est un nombre entre 300 et 850 qui indique aux prêteurs combien vous remboursez l'argent de manière fiable.",
              "Quand vous arrivez au Canada votre score n'est pas zéro - vous n'avez simplement pas encore de score. C'est très différent.",
              "Pensez-y comme une note financière qui montre à quel point vous êtes responsable avec l'argent emprunté."
            ]
          },
          pa: {
            headline: "Credit score ki hai?",
            illustration: "score",
            explanation: [
              "Credit score 300 te 850 vichar da number hai jo lenders nu dinda hai ki tu paise kitne reliably wapas chukade han.",
              "Jad tu Canada aunda hai tan tuhada score zero nahi hai - tuhade bas abhi tak koi score nahi hai. Yeh bahut alag hai.",
              "Isse financial grade valle sochiye jo dinda hai ki tu borrowed money naal kitne responsible han."
            ]
          }
        }
      },
      {
        type: "quickCheck",
        correctIndex: 1,
        content: {
          en: {
            question: "When you arrive in Canada your credit score is:",
            options: ["Zero - which means bad credit", "Invisible - no history yet"],
            explanation: "Having no score is not the same as bad credit. You just need to start building history.",
            visualElements: {
              interactiveQuiz: {
                type: "animated-quiz",
                animations: {
                  correct: "green-burst",
                  incorrect: "red-shake",
                  reveal: "slide-in"
                },
                feedback: {
                  correct: {
                    message: "Perfect! You understand the key difference!",
                    points: 10,
                    badge: "Credit Smart"
                  },
                  incorrect: {
                    message: "Not quite! Remember: no score is better than bad score.",
                    hint: "Think about it like this: you haven't taken the test yet vs you failed the test.",
                    points: 0
                  }
                },
                progressBar: {
                  showProgress: true,
                  totalQuestions: 5,
                  currentQuestion: 1
                }
              }
            }
          },
          es: {
            question: "Cuando llegas a Canadá tu puntuación de crédito es:",
            options: ["Cero - lo que significa mal crédito", "Invisible - sin historial aún"],
            explanation: "No tener puntuación no es lo mismo que tener mal crédito. Solo necesitas empezar a construir historial."
          },
          hi: {
            question: "Jab aap Canada aate hain to aapka credit score hota hai:",
            options: ["Zero - iska matlab bad credit", "Invisible - abhi tak koi history nahi"],
            explanation: "Koi score nahi hona aur bad credit hona alag hai - aapko bas history banana shuru karna hai."
          },
          tl: {
            question: "Kapag dumating ka sa Canada ang iyong credit score ay:",
            options: ["Zero - nangangahulugang masamang credit", "Invisible - walang history pa"],
            explanation: "Ang walang score ay hindi katulad ng masamang credit. Kailangan mo lang lamang na magsimula sa pagbuo ng history."
          },
          zh: {
            question: "When you arrive in Canada your credit score is:",
            options: ["Zero - which means bad credit", "Invisible - no history yet"],
            explanation: "Having no score is not the same as bad credit. You just need to start building history."
          },
          ar: {
            question: "When you arrive in Canada your credit score is:",
            options: ["Zero - which means bad credit", "Invisible - no history yet"],
            explanation: "Having no score is not the same as bad credit. You just need to start building history."
          },
          fr: {
            question: "Quand vous arrivez au Canada votre score de crédit est:",
            options: ["Zéro - ce qui signifie mauvais crédit", "Invisible - aucun historique encore"],
            explanation: "Ne pas avoir de score n'est pas la même chose que d'avoir un mauvais crédit. Vous devez simplement commencer à construire un historique."
          },
          pa: {
            question: "Jad tu Canada aunda hai tan tuhada credit score hunda hai:",
            options: ["Zero - isda matlab bad credit", "Invisible - abhi tak koi history nahi"],
            explanation: "Koi score nahi hona te bad credit hona alag hai - tuhanu bas history banana shuru karna hai."
          }
        }
      },
      {
        type: "concept",
        content: {
          en: {
            headline: "How Credit Scores Are Calculated",
            illustration: "calculator",
            contentBreakdown: [
              {
                type: "text",
                content: "Credit bureaus calculate your score based on several factors. Understanding these helps you build good credit faster."
              },
              {
                type: "factorBreakdown",
                title: "The 5 Key Factors",
                factors: [
                  {
                    name: "Payment History (35%)",
                    description: "Do you pay bills on time? This is the most important factor.",
                    tip: "Set up automatic payments to never miss a due date."
                  },
                  {
                    name: "Credit Utilization (30%)",
                    description: "How much of your available credit are you using?",
                    tip: "Keep balances below 30% of your credit limit for best scores."
                  },
                  {
                    name: "Length of Credit History (15%)",
                    description: "How long have you been using credit?",
                    tip: "Keep your first credit card open even if you don't use it much."
                  },
                  {
                    name: "Credit Mix (10%)",
                    description: "Do you have different types of credit (cards, loans, etc.)?",
                    tip: "Having both credit cards and installment loans can help."
                  },
                  {
                    name: "New Credit (10%)",
                    description: "How many recent credit applications do you have?",
                    tip: "Avoid applying for multiple credit cards in a short period."
                  }
                ]
              },
              {
                type: "quickQuestion",
                question: "Which factor has the biggest impact on your credit score?",
                options: [
                  "Credit utilization",
                  "Payment history", 
                  "Length of credit history",
                  "Credit mix"
                ],
                correct: 1,
                explanation: "Payment history accounts for 35% of your score - making on-time payments is crucial!",
                spacedRepetition: {
                  onWrong: {
                    reviewText: "Let's review the 5 credit score factors by importance:",
                    reviewContent: [
                      "Payment History: 35% - Most important! Never miss payments",
                      "Credit Utilization: 30% - Keep balances below 30%",
                      "Length of History: 15% - Keep old accounts open",
                      "Credit Mix: 10% - Different types of credit help",
                      "New Credit: 10% - Don't apply for too many at once"
                    ],
                    retryQuestion: {
                      question: "If you could only focus on ONE thing for your credit score, what should it be?",
                      options: ["Never miss a payment", "Keep utilization low", "Keep old cards", "Don't apply for new credit"],
                      correct: 0,
                      hint: "Think: Which factor is worth 35% of your score?"
                    }
                  }
                }
              },
              {
                type: "example",
                title: "Real Impact Example",
                content: "Ahmed has a $1000 credit card. He spends $900 one month (90% utilization) vs $300 the next month (30% utilization). His score drops 40 points with high utilization but stays stable at 30%."
              },
              {
                type: "quickQuestion",
                question: "What's the maximum credit utilization you should aim for?",
                options: ["50%", "30%", "70%", "90%"],
                correct: 1,
                explanation: "Keep utilization below 30% for optimal credit scores. Above 50% can significantly hurt your score.",
                spacedRepetition: {
                  onWrong: {
                    reviewText: "Let's review credit utilization with real numbers:",
                    reviewContent: [
                      "Credit utilization = Balance ÷ Credit Limit",
                      "Example: $300 balance on $1000 limit = 30% utilization",
                      "Under 30% = Good for your score",
                      "Over 50% = Bad for your score (can drop 40+ points!)",
                      "Rule of thumb: Use credit like a debit card - pay in full monthly"
                    ],
                    retryQuestion: {
                      question: "If your credit card limit is $2000, what's the highest balance you should carry?",
                      options: ["$2000", "$1000", "$600", "$400"],
                      correct: 2,
                      hint: "Calculate: $2000 × 30% = ?"
                    }
                  }
                }
              },
              {
                type: "text",
                content: "Remember: Building good credit is a marathon, not a sprint. Consistent, responsible habits over time will give you the best results."
              }
            ]
          }
        }
      },
      {
        type: "realWorld",
        correctIndex: 1,
        content: {
          en: {
            scenarioTitle: "Priya's First Canadian Credit",
            scenarioIcon: "person",
            scenario: "Priya moved from India last month. She has excellent credit back home but Canadian banks cannot see it. What is her first step?",
            options: [
              "Apply for a regular credit card",
              "Apply for a secured credit card"
            ],
            explanation: "A secured card requires a deposit and is designed for people with no credit history.",
            visualElements: {
              interactiveScenario: {
                type: "character-journey",
                character: {
                  name: "Priya",
                  avatar: "professional-woman",
                  background: "Moved from India, excellent credit back home"
                },
                journey: {
                  currentStep: "First Canadian Credit",
                  previousSteps: ["Arrived in Canada", "Opened bank account"],
                  nextSteps: ["Build credit history", "Get regular credit card"]
                },
                decision: {
                  question: "Help Priya choose her first step!",
                  options: [
                    {
                      text: "Apply for a regular credit card",
                      outcome: "Rejected - no Canadian credit history",
                      animation: "red-cross",
                      feedback: "Regular cards require Canadian credit history!"
                    },
                    {
                      text: "Apply for a secured credit card",
                      outcome: "Approved! Start building credit",
                      animation: "green-checkmark",
                      feedback: "Perfect! Secured cards are designed for newcomers!"
                    }
                  ]
                },
                rewards: {
                  correctChoice: {
                    points: 15,
                    badge: "Credit Advisor",
                    unlock: "Next scenario: Priya's First Purchase"
                  }
                }
              },
              creditCardComparison: {
                type: "interactive-cards",
                title: "Compare Credit Cards",
                cards: [
                  {
                    name: "Regular Credit Card",
                    icon: "credit-card",
                    requirements: ["Canadian credit history", "Credit check", "Income verification"],
                    benefits: ["Rewards points", "No deposit", "Higher limits"],
                    available: false,
                    reason: "No Canadian credit history"
                  },
                  {
                    name: "Secured Credit Card",
                    icon: "shield",
                    requirements: ["Security deposit ($300-500)", "Basic ID verification"],
                    benefits: ["Build credit history", "Upgrade to regular card", "Reports to credit bureaus"],
                    available: true,
                    reason: "Perfect for newcomers!"
                  }
                ]
              }
            }
          },
          es: {
            scenarioTitle: "Primer Crédito Canadiense de Priya",
            scenarioIcon: "person",
            scenario: "Priya se mudó de India el mes pasado. Tiene excelente crédito en su país pero los bancos canadienses no pueden verlo. ¿Qué es su primer paso?",
            options: [
              "Solicitar una tarjeta de crédito regular",
              "Solicitar una tarjeta de crédito garantizada"
            ],
            explanation: "Una tarjeta garantizada requiere un depósito y está diseñada para personas sin historial de crédito."
          },
          hi: {
            scenarioTitle: "Priya ka pehla Canadian credit",
            scenarioIcon: "person",
            scenario: "Priya pichle mahine India se ayi hai. Uske paas ghar mein excellent credit hai lekin Canadian banks use nahi dekh sakte. Uska pehla step kya hai?",
            options: [
              "Regular credit card apply karna",
              "Secured credit card apply karna"
            ],
            explanation: "Secured card deposit mangta hai aur no credit history wale logon ke liye design kiya gaya hai."
          },
          tl: {
            scenarioTitle: "Unang Canadian Credit ni Priya",
            scenarioIcon: "person",
            scenario: "Lumipat si Priya mula sa India noong nakaraang buwan. Mayroon siyang magandang credit sa kanyang bansa ngunit hindi ito makikita ng mga Canadian bank. Ano ang kanyang unang hakbang?",
            options: [
              "Mag-apply ng regular credit card",
              "Mag-apply ng secured credit card"
            ],
            explanation: "Ang secured card ay nangangailangan ng deposit at idinisenyo para sa mga taong walang credit history."
          },
          visualElements: {
            bankAccountComparison: {
              type: "comparison-cards",
              accounts: [
                {
                  type: "chequing",
                  name: "Chequing Account",
                  icon: "check",
                  features: [
                    "Free with minimum balance",
                    "Write checks",
                    "Good for large payments"
                  ],
                  color: "#3b82f6"
                },
                {
                  type: "savings",
                  name: "Savings Account", 
                  icon: "piggy-bank",
                  features: [
                    "Earns interest",
                    "Online banking",
                    "No monthly fees"
                  ],
                  color: "#10b981"
                }
              ],
              description: "Compare different account types to find what works best for you"
            }
          },
          zh: {
            scenarioTitle: "Priya's First Canadian Credit",
            scenarioIcon: "person",
            scenario: "Priya moved from India last month. She has excellent credit back home but Canadian banks cannot see it. What is her first step?",
            options: [
              "Apply for a regular credit card",
              "Apply for a secured credit card"
            ],
            explanation: "A secured card requires a deposit and is designed for people with no credit history."
          },
          ar: {
            scenarioTitle: "Priya's First Canadian Credit",
            scenarioIcon: "person",
            scenario: "Priya moved from India last month. She has excellent credit back home but Canadian banks cannot see it. What is her first step?",
            options: [
              "Apply for a regular credit card",
              "Apply for a secured credit card"
            ],
            explanation: "A secured card requires a deposit and is designed for people with no credit history."
          },
          fr: {
            scenarioTitle: "Premier Crédit Canadien de Priya",
            scenarioIcon: "person",
            scenario: "Priya a déménagé d'Inde le mois dernier. Elle a un excellent crédit dans son pays d'origine mais les banques canadiennes ne peuvent pas le voir. Quel est son premier pas?",
            options: [
              "Demander une carte de crédit régulière",
              "Demander une carte de crédit garantie"
            ],
            explanation: "Une carte garantie nécessite un dépôt et est conçue pour les personnes sans historique de crédit."
          },
          pa: {
            scenarioTitle: "Priya da pehla Canadian credit",
            scenarioIcon: "person",
            scenario: "Priya pichle mahine India to aayi hai. Usde kol ghar vich excellent credit hai par Canadian banks use nahi dekh sakde. Usda pehla step ki hai?",
            options: [
              "Regular credit card apply karna",
              "Secured credit card apply karna"
            ],
            explanation: "Secured card deposit mangda hai te no credit history valle logan lai design kiya gaya hai."
          }
        }
      },
      {
        type: "fillBlank",
        correctIndex: 1,
        content: {
          en: {
            sentence: "To build credit you should keep your balance below ___ of your limit",
            options: ["10%", "30%", "90%"],
            explanation: "Keeping below 30% shows lenders you are responsible with credit."
          },
          es: {
            sentence: "Para construir crédito debes mantener tu balance por debajo del ___ de tu límite",
            options: ["10%", "30%", "90%"],
            explanation: "Mantenerse por debajo del 30% muestra a los prestamistas que eres responsable con el crédito."
          },
          hi: {
            sentence: "Credit banane ke liye aap apna balance ___ se kam rakhna chahiye apne limit ka",
            options: ["10%", "30%", "90%"],
            explanation: "30% se kam rakhna lenders ko dikata hai ki aap credit ke saath responsible hain."
          },
          tl: {
            sentence: "Para makapagbuild ng credit dapat panatilihin ang iyong balance sa ibaba ng ___ ng iyong limit",
            options: ["10%", "30%", "90%"],
            explanation: "Ang pagpapanatili sa ibaba ng 30% ay nagpapakita sa mga lenders na responsable ka sa credit."
          },
          zh: {
            sentence: "To build credit you should keep your balance below ___ of your limit",
            options: ["10%", "30%", "90%"],
            explanation: "Keeping below 30% shows lenders you are responsible with credit."
          },
          ar: {
            sentence: "To build credit you should keep your balance below ___ of your limit",
            options: ["10%", "30%", "90%"],
            explanation: "Keeping below 30% shows lenders you are responsible with credit."
          },
          fr: {
            sentence: "Pour construire du crédit vous devriez maintenir votre solde en dessous de ___ de votre limite",
            options: ["10%", "30%", "90%"],
            explanation: "Maintenir en dessous de 30% montre aux prêteurs que vous êtes responsable avec le crédit."
          },
          pa: {
            sentence: "Credit banane lai tu apna balance ___ te kam rakhna chaida hai apne limit da",
            options: ["10%", "30%", "90%"],
            explanation: "30% te kam rakhna lenders nu dinda hai ki tu credit naal responsible han."
          }
        }
      },
      {
        type: "finalTest",
        content: {
          en: {
            title: "Credit Building Final Test",
            description: "Test your knowledge of everything you've learned about credit scores!",
            testSections: [
              {
                sectionTitle: "Credit Score Basics",
                questions: [
                  {
                    question: "What credit score range is considered 'Good' in Canada?",
                    options: ["580-669", "670-739", "740-799", "800-850"],
                    correct: 1,
                    explanation: "670-739 is considered 'Good' - you'll get decent interest rates and most loan approvals."
                  },
                  {
                    question: "When you first arrive in Canada, what is your credit score?",
                    options: ["Zero", "300", "No score yet", "550"],
                    correct: 2,
                    explanation: "You have no score yet - this is different from having a bad score."
                  }
                ]
              },
              {
                sectionTitle: "Building Credit",
                questions: [
                  {
                    question: "What's the best first step to build credit as a newcomer?",
                    options: [
                      "Apply for multiple regular credit cards",
                      "Get a secured credit card",
                      "Wait 6 months then apply",
                      "Use your home country credit card"
                    ],
                    correct: 1,
                    explanation: "A secured credit card is designed specifically for newcomers with no Canadian credit history."
                  },
                  {
                    question: "How long does it typically take to get your first credit score?",
                    options: ["1-2 months", "3-6 months", "6-12 months", "12+ months"],
                    correct: 1,
                    explanation: "Usually 3-6 months of responsible credit use will generate your first score."
                  }
                ]
              },
              {
                sectionTitle: "Credit Management",
                questions: [
                  {
                    question: "What percentage of your credit limit should you ideally use?",
                    options: ["Under 10%", "Under 30%", "Under 50%", "Under 70%"],
                    correct: 1,
                    explanation: "Keep utilization below 30% for optimal credit scores."
                  },
                  {
                    question: "Which factor has the biggest impact on your credit score?",
                    options: [
                      "Credit utilization",
                      "Payment history",
                      "Length of credit history",
                      "Credit mix"
                    ],
                    correct: 1,
                    explanation: "Payment history accounts for 35% of your score - the largest factor."
                  },
                  {
                    question: "What happens if you miss a credit card payment?",
                    options: [
                      "Nothing if it's just once",
                      "Your score drops significantly",
                      "Your card is cancelled immediately",
                      "You get charged a small fee only"
                    ],
                    correct: 1,
                    explanation: "Missing payments can drop your score by 50-100 points and stays on your report for 7 years."
                  }
                ]
              },
              {
                sectionTitle: "Real Scenarios",
                questions: [
                  {
                    question: "Maria has a $1000 credit card and spends $800. What's her credit utilization?",
                    options: ["8%", "80%", "20%", "50%"],
                    correct: 1,
                    explanation: "$800 ÷ $1000 = 80% utilization - this is too high and will hurt her score."
                  },
                  {
                    question: "Ahmed wants to buy a car in 6 months. What should he focus on now?",
                    options: [
                      "Apply for many credit cards quickly",
                      "Pay all bills on time and keep balances low",
                      "Close his old credit card",
                      "Max out his credit card to show he can handle debt"
                    ],
                    correct: 1,
                    explanation: "Consistent on-time payments and low utilization will build his score for the car loan."
                  }
                ]
              }
            ],
            passingScore: 80,
            rewards: {
              passed: {
                title: "Credit Expert!",
                message: "Excellent work! You understand credit building perfectly.",
                points: 100,
                badge: "Credit Master"
              },
              perfect: {
                title: "Credit Genius!",
                message: "Perfect score! You're ready to build excellent credit.",
                points: 150,
                badge: "Credit Genius"
              }
            },
            retakeOptions: {
              allowed: true,
              maxAttempts: 3,
              reviewMode: true
            }
          }
        }
      },
      {
        type: "summary",
        content: {
          en: {
            takeaways: [
              "No score is not the same as bad score - you're starting fresh",
              "Start with a secured credit card to build history",
              "Pay your balance in full every month",
              "Keep balance under 30% of your credit limit",
              "Your score will appear after 3-6 months of responsible use"
            ],
            visualElements: {
              achievementSystem: {
                type: "lesson-complete",
                title: "Credit Building Master!",
                subtitle: "You've completed your first credit lesson!",
                rewards: {
                  points: 50,
                  badges: [
                    {
                      name: "Credit Beginner",
                      icon: "star",
                      description: "Completed first credit lesson"
                    },
                    {
                      name: "Smart Starter",
                      icon: "lightbulb",
                      description: "Understand credit score basics"
                    }
                  ],
                  unlocks: [
                    "Advanced Credit Strategies",
                    "Credit Monitoring Tools",
                    "Real-Life Credit Stories"
                  ]
                },
                celebration: {
                  type: "confetti-burst",
                  message: "Congratulations! You're on your way to excellent credit!",
                  animation: "trophy-rise"
                },
                nextSteps: {
                  title: "What's Next?",
                  options: [
                    {
                      label: "Take Advanced Credit Quiz",
                      type: "quiz",
                      difficulty: "medium",
                      points: 25
                    },
                    {
                      label: "Practice Credit Scenarios",
                      type: "simulation",
                      difficulty: "easy",
                      points: 20
                    },
                    {
                      label: "Banking Basics Lesson",
                      type: "lesson",
                      difficulty: "beginner",
                      points: 50
                    }
                  ]
                },
                progressTracking: {
                  totalLessons: 3,
                  completedLessons: 1,
                  nextMilestone: "Banking Basics",
                  overallProgress: 33
                }
              },
              shareableAchievement: {
                type: "social-share",
                title: "I just learned how to build credit in Canada! ",
                message: "Starting my financial journey with confidence. #CreditBuilding #NewcomerFinance",
                platforms: ["twitter", "facebook", "linkedin"],
                badge: "credit-beginner"
              }
            }
          },
          es: {
            takeaways: [
              "No tener puntuación no es lo mismo que tener mala puntuación - estás empezando fresco",
              "Comienza con una tarjeta de crédito garantizada para construir historial",
              "Paga tu saldo completo cada mes",
              "Mantén tu saldo por debajo del 30% de tu límite de crédito",
              "Tu puntuación aparecerá después de 3-6 meses de uso responsable"
            ]
          },
          hi: {
            takeaways: [
              "Koi score nahi hona aur bad score hona alag hai - aap fresh start kar rahe hain",
              "History banane ke liye secured credit card se shuru karo",
              "Har month apna balance full pay karo",
              "Apna balance credit limit ke 30% se neeche rakho",
              "Responsible use ke 3-6 months baad aapka score dikhega"
            ]
          },
          tl: {
            takeaways: [
              "Ang walang score ay hindi katulad ng masamang score - sisimula ka lang",
              "Magsimula sa secured credit card para magbuo ng history",
              "Bayaran ang iyong buong saldo bawat buwan",
              "Panatilihin ang iyong saldo sa ibaba ng 30% ng iyong credit limit",
              "Ang iyong score ay lalabas matapos ang 3-6 na buwan ng responsible na paggamit"
            ]
          },
          zh: {
            takeaways: [
              "No score is not the same as bad score - you're starting fresh",
              "Start with a secured credit card to build history",
              "Pay your balance in full every month",
              "Keep balance under 30% of your credit limit",
              "Your score will appear after 3-6 months of responsible use"
            ]
          },
          ar: {
            takeaways: [
              "No score is not the same as bad score - you're starting fresh",
              "Start with a secured credit card to build history",
              "Pay your balance in full every month",
              "Keep balance under 30% of your credit limit",
              "Your score will appear after 3-6 months of responsible use"
            ]
          },
          fr: {
            takeaways: [
              "Ne pas avoir de score n'est pas la même chose qu'avoir un mauvais score - vous recommencez à zéro",
              "Commencez avec une carte de crédit garantie pour construire un historique",
              "Payez votre solde en entier chaque mois",
              "Maintenez votre solde en dessous de 30% de votre limite de crédit",
              "Votre score apparaîtra après 3-6 mois d'utilisation responsable"
            ]
          },
          pa: {
            takeaways: [
              "Koi score nahi hona te bad score hona alag hai - tu fresh start kar reha hai",
              "History banane lai secured credit card to shuru karo",
              "Har month apna balance full pay karo",
              "Apna balance credit limit de 30% te neeche rakho",
              "Responsible use de 3-6 months baad tuhada score dikhega"
            ]
          }
        }
      }
    ]
  },
  {
    id: "what-is-credit-score",
    isPremium: false,
    title: {
      en: "What is a credit score?",
      es: "¿Qué es una puntuación de crédito?",
      hi: "Credit score kya hai?",
      tl: "Ano ang isang credit score?",
      zh: "什么是信用分数？",
      ar: "ما هو التقييم الائتماني؟",
      fr: "Qu’est-ce qu’une cote de crédit ?",
      pa: "Credit score ki hai?"
    },
    subtitle: {
      en: "Understand the 300-850 range and why it matters",
      es: "Entiende el rango de 300 a 850 y por qué importa",
      hi: "300-850 range ko samjhein aur yeh kyun zaroori hai",
      tl: "Unawain ang 300-850 range at kung bakit ito mahalaga",
      zh: "了解300-850范围以及它的重要性",
      ar: "افهم نطاق 300-850 ولماذا يهم",
      fr: "Comprenez l’échelle de 300 à 850 et son importance",
      pa: "300-850 range samjho te eh kyon zaroori hai"
    },
    category: "Credit",
    steps: [
      {
        type: "concept",
        content: {
          en: {
            headline: "What is a credit score?",
            contentBreakdown: [
              { type: "text", content: "A credit score is a number from 300 to 850 that shows how likely you are to pay money back on time." },
              { type: "text", content: "A higher score can help you rent apartments, get loans, and qualify for better rates." },
              { type: "quickQuestion", question: "What score range is used for most credit scores?", options: ["100-500", "300-850", "0-100"], correct: 1, explanation: "Most credit scores in Canada and the US use the 300-850 range." },
              { type: "example", title: "Why it matters", content: "A renter with a good score may get approved faster than someone with no credit history." }
            ]
          },
          es: {
            headline: "¿Qué es una puntuación de crédito?",
            contentBreakdown: [
              { type: "text", content: "Una puntuación de crédito es un número de 300 a 850 que muestra qué tan probable es que pagues a tiempo." },
              { type: "text", content: "Una puntuación más alta puede ayudar con renta, préstamos y mejores tasas." },
              { type: "quickQuestion", question: "¿Qué rango se usa para la mayoría de las puntuaciones de crédito?", options: ["100-500", "300-850", "0-100"], correct: 1, explanation: "La mayoría de las puntuaciones de crédito en Canadá y EE. UU. usan el rango 300-850." },
              { type: "example", title: "Por qué importa", content: "Una persona con buen crédito puede ser aprobada para rentar más rápido que alguien sin historial." }
            ]
          },
          hi: {
            headline: "Credit score kya hai?",
            contentBreakdown: [
              { type: "text", content: "Credit score 300 se 850 ke beech ka number hai jo dikhata hai ki aap waqt par paisa wapas karte hain ya nahi." },
              { type: "text", content: "Achha score rent, loans aur better rates mein madad karta hai." },
              { type: "quickQuestion", question: "Credit scores ka common range kya hai?", options: ["100-500", "300-850", "0-100"], correct: 1, explanation: "Canada aur US mein zyada tar credit scores 300-850 range use karte hain." },
              { type: "example", title: "Kyun zaroori hai", content: "Achhe score wala renter bina credit history wale vyakti se jaldi approve ho sakta hai." }
            ]
          },
          tl: {
            headline: "Ano ang isang credit score?",
            contentBreakdown: [
              { type: "text", content: "Ang credit score ay numerong 300 hanggang 850 na nagpapakita kung gaano ka malamang magbayad sa oras." },
              { type: "text", content: "Mas mataas na score ay makakatulong sa renta, loans, at mas mabuting rates." },
              { type: "quickQuestion", question: "Anong range ang ginagamit para sa credit scores?", options: ["100-500", "300-850", "0-100"], correct: 1, explanation: "Karamihan sa credit scores sa Canada at US ay gumagamit ng 300-850 range." },
              { type: "example", title: "Bakit mahalaga", content: "Ang renter na may magandang score ay maaaring ma-approve nang mas mabilis kaysa sa walang credit history." }
            ]
          },
          zh: {
            headline: "什么是信用分数？",
            contentBreakdown: [
              { type: "text", content: "信用分数是300到850之间的数字，表示你按时还钱的可能性。" },
              { type: "text", content: "更高的分数有助于租房、贷款和获得更好的利率。" },
              { type: "quickQuestion", question: "信用分数通常使用什么范围？", options: ["100-500", "300-850", "0-100"], correct: 1, explanation: "加拿大和美国的大多数信用分数都使用300-850范围。" },
              { type: "example", title: "为什么重要", content: "信用分数好的人可能比没有信用记录的人更快获批租房。" }
            ]
          },
          ar: {
            headline: "ما هو التقييم الائتماني؟",
            contentBreakdown: [
              { type: "text", content: "التقييم الائتماني هو رقم من 300 إلى 850 يوضح مدى احتمال سداد المال في الوقت المحدد." },
              { type: "text", content: "التقييم الأعلى يساعد في الاستئجار والقروض والحصول على أسعار أفضل." },
              { type: "quickQuestion", question: "ما هو النطاق الشائع للتقييم الائتماني؟", options: ["100-500", "300-850", "0-100"], correct: 1, explanation: "معظم التقييمات الائتمانية في كندا والولايات المتحدة تستخدم نطاق 300-850." },
              { type: "example", title: "لماذا يهم", content: "قد يحصل المستأجر ذو التقييم الجيد على الموافقة أسرع من شخص لا يملك سجلًا ائتمانيًا." }
            ]
          },
          fr: {
            headline: "Qu’est-ce qu’une cote de crédit ?",
            contentBreakdown: [
              { type: "text", content: "Une cote de crédit est un nombre de 300 à 850 qui montre la probabilité de rembourser à temps." },
              { type: "text", content: "Une cote plus élevée aide pour le logement, les prêts et de meilleurs taux." },
              { type: "quickQuestion", question: "Quelle plage est utilisée pour la plupart des cotes de crédit ?", options: ["100-500", "300-850", "0-100"], correct: 1, explanation: "La plupart des cotes de crédit au Canada et aux États-Unis utilisent la plage 300-850." },
              { type: "example", title: "Pourquoi c’est important", content: "Une personne avec une bonne cote peut être approuvée plus vite qu’une personne sans historique." }
            ]
          },
          pa: {
            headline: "Credit score ki hai?",
            contentBreakdown: [
              { type: "text", content: "Credit score 300 to 850 de vichkar number hai jo dikhaunda hai ke tusi time te paisa wapas karonge ya nahi." },
              { type: "text", content: "Wadha score rent, loans, te better rates vich madad karda hai." },
              { type: "quickQuestion", question: "Credit scores layi common range ki hai?", options: ["100-500", "300-850", "0-100"], correct: 1, explanation: "Canada te US vich zyadatar credit scores 300-850 range use karde ne." },
              { type: "example", title: "Kyon zaroori hai", content: "Achhe score wala renter bina credit history wale vyakti ton jaldi approve ho sakda hai." }
            ]
          }
        }
      }
    ]
  },
  {
    id: "build-credit-from-zero",
    isPremium: false,
    title: {
      en: "How to build credit from zero",
      es: "Cómo construir crédito desde cero",
      hi: "Zero se credit kaise banayein",
      tl: "Paano bumuo ng credit mula sa wala",
      zh: "如何从零开始建立信用",
      ar: "كيف تبني الائتمان من الصفر",
      fr: "Comment construire son crédit à partir de zéro",
      pa: "Zero ton credit kaise banao"
    },
    subtitle: {
      en: "Use secured cards, pay on time, and keep balances low",
      es: "Usa tarjetas aseguradas, paga a tiempo y mantén saldos bajos",
      hi: "Secured cards use karo, time par pay karo, aur balance low rakho",
      tl: "Gumamit ng secured cards, magbayad sa oras, at panatilihing mababa ang balanse",
      zh: "使用担保信用卡、按时还款并保持低余额",
      ar: "استخدم البطاقات المضمونة، وادفع في الوقت المحدد، وحافظ على الرصيد منخفضًا",
      fr: "Utilisez des cartes sécurisées, payez à temps et gardez des soldes bas",
      pa: "Secured cards use karo, time te pay karo, te balance low rakho"
    },
    category: "Credit",
    steps: [
      {
        type: "concept",
        content: {
          en: {
            headline: "Build credit step by step",
            contentBreakdown: [
              { type: "text", content: "If you have no credit history, start with a secured credit card or a small starter product." },
              { type: "text", content: "Always pay on time and keep your balance low to build trust with lenders." },
              { type: "quickQuestion", question: "What helps build credit the most?", options: ["Late payments", "Paying on time", "Maxing out your card"], correct: 1, explanation: "On-time payments are one of the biggest factors in your score." },
              { type: "example", title: "Simple plan", content: "A $500 secured card, used for small purchases and paid off every month, can build strong credit habits." }
            ]
          },
          es: {
            headline: "Construye crédito paso a paso",
            contentBreakdown: [
              { type: "text", content: "Si no tienes historial, comienza con una tarjeta asegurada o un producto inicial pequeño." },
              { type: "text", content: "Paga a tiempo y mantén el saldo bajo para generar confianza." },
              { type: "quickQuestion", question: "¿Qué ayuda más a construir crédito?", options: ["Pagar tarde", "Pagar a tiempo", "Gastar todo el límite"], correct: 1, explanation: "Los pagos a tiempo son uno de los factores más importantes." },
              { type: "example", title: "Plan simple", content: "Una tarjeta asegurada de $500 usada para compras pequeñas y pagada cada mes puede crear buenos hábitos." }
            ]
          },
          hi: {
            headline: "Credit step by step banao",
            contentBreakdown: [
              { type: "text", content: "Agar credit history nahi hai, to secured credit card ya starter product se shuru karo." },
              { type: "text", content: "Hamesha time par pay karo aur balance low rakho." },
              { type: "quickQuestion", question: "Credit build karne mein kya sabse madad karta hai?", options: ["Late payments", "Time par payment", "Card ko max karna"], correct: 1, explanation: "On-time payments score ka sabse important part hain." },
              { type: "example", title: "Simple plan", content: "$500 secured card se chhoti purchases karke har month full pay karna achha habit banata hai." }
            ]
          },
          tl: {
            headline: "Bumuo ng credit nang paunti-unti",
            contentBreakdown: [
              { type: "text", content: "Kung wala kang credit history, magsimula sa secured credit card o maliit na starter product." },
              { type: "text", content: "Magbayad sa oras at panatilihing mababa ang balanse." },
              { type: "quickQuestion", question: "Ano ang pinaka-nakakatulong sa credit building?", options: ["Late payments", "Pagbayad sa oras", "Pag-max ng card"], correct: 1, explanation: "Ang on-time payments ay isa sa pinakamalaking factor ng score." },
              { type: "example", title: "Simpleng plano", content: "Ang $500 secured card na ginagamit sa maliliit na pagbili at binabayaran bawat buwan ay nakakatulong sa magandang habit." }
            ]
          },
          zh: {
            headline: "一步一步建立信用",
            contentBreakdown: [
              { type: "text", content: "如果你没有信用记录，可以从担保信用卡或小型入门产品开始。" },
              { type: "text", content: "按时还款并保持低余额，可以建立贷款人的信任。" },
              { type: "quickQuestion", question: "什么最有助于建立信用？", options: ["迟付款", "按时付款", "刷爆信用卡"], correct: 1, explanation: "按时付款是分数中最重要的因素之一。" },
              { type: "example", title: "简单计划", content: "$500的担保卡用于小额消费并每月还清，可以建立良好习惯。" }
            ]
          },
          ar: {
            headline: "ابنِ الائتمان خطوة بخطوة",
            contentBreakdown: [
              { type: "text", content: "إذا لم يكن لديك سجل ائتماني فابدأ ببطاقة مضمونة أو منتج بداية صغير." },
              { type: "text", content: "ادفع في الوقت المحدد وحافظ على الرصيد منخفضًا." },
              { type: "quickQuestion", question: "ما الذي يساعد أكثر في بناء الائتمان؟", options: ["الدفع المتأخر", "الدفع في الوقت", "استخدام الحد بالكامل"], correct: 1, explanation: "المدفوعات في الوقت المحدد من أهم العوامل." },
              { type: "example", title: "خطة بسيطة", content: "بطاقة مضمونة بقيمة 500 دولار للمشتريات الصغيرة وسدادها كل شهر تبني عادات قوية." }
            ]
          },
          fr: {
            headline: "Construire son crédit étape par étape",
            contentBreakdown: [
              { type: "text", content: "Sans historique, commencez avec une carte sécurisée ou un petit produit de départ." },
              { type: "text", content: "Payez à temps et gardez un faible solde pour inspirer confiance." },
              { type: "quickQuestion", question: "Qu’est-ce qui aide le plus à construire le crédit ?", options: ["Payer en retard", "Payer à temps", "Maximiser la carte"], correct: 1, explanation: "Les paiements à temps sont l’un des facteurs les plus importants." },
              { type: "example", title: "Plan simple", content: "Une carte sécurisée de 500 $ utilisée pour de petits achats et remboursée chaque mois aide à créer de bonnes habitudes." }
            ]
          },
          pa: {
            headline: "Zero ton credit kiven banao",
            contentBreakdown: [
              { type: "text", content: "Je credit history nahi hai, secured credit card ya chhote starter product ton shuru karo." },
              { type: "text", content: "Time te pay karo te balance low rakho." },
              { type: "quickQuestion", question: "Credit build karan vich sab ton wadh ki madad karda hai?", options: ["Late payments", "Time te payment", "Card nu max karna"], correct: 1, explanation: "On-time payments score da sab ton important hissa ne." },
              { type: "example", title: "Simple plan", content: "$500 secured card naal chhoti kharid te har mahina full pay karna changi aadat banaunda hai." }
            ]
          }
        }
      }
    ]
  },
  {
    id: "check-credit-free",
    isPremium: false,
    title: {
      en: "How to check your credit score free",
      es: "Cómo revisar tu puntuación de crédito gratis",
      hi: "Apna credit score free mein kaise check karein",
      tl: "Paano tingnan nang libre ang iyong credit score",
      zh: "如何免费查看你的信用分数",
      ar: "كيف تتحقق من تقييمك الائتماني مجانًا",
      fr: "Comment vérifier gratuitement sa cote de crédit",
      pa: "Apna credit score free vich kiven check karo"
    },
    subtitle: {
      en: "Use free tools like Borrowell and Credit Karma in Canada",
      es: "Usa herramientas gratis como Borrowell y Credit Karma en Canadá",
      hi: "Canada mein Borrowell aur Credit Karma jaise free tools use karo",
      tl: "Gumamit ng libreng tools tulad ng Borrowell at Credit Karma sa Canada",
      zh: "在加拿大使用Borrowell和Credit Karma等免费工具",
      ar: "استخدم أدوات مجانية مثل Borrowell و Credit Karma في كندا",
      fr: "Utilisez des outils gratuits comme Borrowell et Credit Karma au Canada",
      pa: "Canada vich Borrowell te Credit Karma varge free tools use karo"
    },
    category: "Credit",
    steps: [
      {
        type: "concept",
        content: {
          en: {
            headline: "Check your score for free",
            contentBreakdown: [
              { type: "text", content: "You can check your credit score without paying in Canada using free services." },
              { type: "text", content: "Borrowell and Credit Karma are common tools that show your score and report updates." },
              { type: "quickQuestion", question: "Which tools can you use for free in Canada?", options: ["Borrowell and Credit Karma", "Only banks", "Only cash apps"], correct: 0, explanation: "Borrowell and Credit Karma are popular free tools in Canada." },
              { type: "example", title: "Easy habit", content: "Checking your score monthly helps you spot changes early and stay on track." }
            ]
          },
          es: {
            headline: "Revisa tu puntuación gratis",
            contentBreakdown: [
              { type: "text", content: "Puedes revisar tu puntuación de crédito gratis en Canadá usando servicios sin costo." },
              { type: "text", content: "Borrowell y Credit Karma son herramientas comunes que muestran tu puntuación." },
              { type: "quickQuestion", question: "¿Qué herramientas puedes usar gratis en Canadá?", options: ["Borrowell y Credit Karma", "Solo bancos", "Solo apps de efectivo"], correct: 0, explanation: "Borrowell y Credit Karma son herramientas gratis populares en Canadá." },
              { type: "example", title: "Buen hábito", content: "Revisar tu puntuación cada mes te ayuda a detectar cambios temprano." }
            ]
          },
          hi: {
            headline: "Credit score free mein check karo",
            contentBreakdown: [
              { type: "text", content: "Canada mein aap free services se apna credit score bina paise diye dekh sakte hain." },
              { type: "text", content: "Borrowell aur Credit Karma common tools hain jo score aur updates dikhate hain." },
              { type: "quickQuestion", question: "Canada mein kaunse tools free use kar sakte ho?", options: ["Borrowell aur Credit Karma", "Sirf banks", "Sirf cash apps"], correct: 0, explanation: "Borrowell aur Credit Karma Canada mein popular free tools hain." },
              { type: "example", title: "Easy habit", content: "Har mahine score check karne se changes jaldi pakad mein aate hain." }
            ]
          },
          tl: {
            headline: "Suriin nang libre ang iyong score",
            contentBreakdown: [
              { type: "text", content: "Maaari mong tingnan ang iyong credit score nang libre sa Canada gamit ang free services." },
              { type: "text", content: "Ang Borrowell at Credit Karma ay karaniwang tools na nagpapakita ng iyong score." },
              { type: "quickQuestion", question: "Anong tools ang libre sa Canada?", options: ["Borrowell at Credit Karma", "Mga bank lang", "Mga cash app lang"], correct: 0, explanation: "Ang Borrowell at Credit Karma ay sikat na libreng tools sa Canada." },
              { type: "example", title: "Magandang habit", content: "Ang buwanang pag-check ng score ay nakakatulong makita ang pagbabago agad." }
            ]
          },
          zh: {
            headline: "免费查看你的信用分数",
            contentBreakdown: [
              { type: "text", content: "在加拿大，你可以使用免费服务查看信用分数。" },
              { type: "text", content: "Borrowell和Credit Karma是常见工具，可以显示你的分数和更新。" },
              { type: "quickQuestion", question: "在加拿大可以免费使用哪些工具？", options: ["Borrowell和Credit Karma", "只有银行", "只有现金应用"], correct: 0, explanation: "Borrowell和Credit Karma是加拿大很受欢迎的免费工具。" },
              { type: "example", title: "简单习惯", content: "每月查看一次分数，有助于尽早发现变化。" }
            ]
          },
          ar: {
            headline: "تحقق من تقييمك مجانًا",
            contentBreakdown: [
              { type: "text", content: "يمكنك التحقق من تقييمك الائتماني مجانًا في كندا باستخدام خدمات مجانية." },
              { type: "text", content: "Borrowell و Credit Karma من الأدوات الشائعة التي تعرض النتيجة والتحديثات." },
              { type: "quickQuestion", question: "ما الأدوات المجانية المتاحة في كندا؟", options: ["Borrowell و Credit Karma", "البنوك فقط", "تطبيقات الدفع فقط"], correct: 0, explanation: "Borrowell و Credit Karma من الأدوات المجانية الشائعة في كندا." },
              { type: "example", title: "عادة جيدة", content: "التحقق الشهري يساعدك على ملاحظة التغييرات مبكرًا." }
            ]
          },
          fr: {
            headline: "Vérifiez votre cote gratuitement",
            contentBreakdown: [
              { type: "text", content: "Vous pouvez vérifier votre cote de crédit gratuitement au Canada." },
              { type: "text", content: "Borrowell et Credit Karma sont des outils courants qui montrent votre cote et les mises à jour." },
              { type: "quickQuestion", question: "Quels outils pouvez-vous utiliser gratuitement au Canada ?", options: ["Borrowell et Credit Karma", "Seulement les banques", "Seulement les applis de paiement"], correct: 0, explanation: "Borrowell et Credit Karma sont des outils gratuits populaires au Canada." },
              { type: "example", title: "Bonne habitude", content: "Vérifier votre cote chaque mois vous aide à repérer les changements tôt." }
            ]
          },
          pa: {
            headline: "Apna score free vich check karo",
            contentBreakdown: [
              { type: "text", content: "Canada vich tusi free services naal bina paise de apna credit score dekh sakde ho." },
              { type: "text", content: "Borrowell te Credit Karma common tools ne jo score te updates dikhaunde ne." },
              { type: "quickQuestion", question: "Canada vich kaunse tools free ne?", options: ["Borrowell te Credit Karma", "Sirf banks", "Sirf cash apps"], correct: 0, explanation: "Borrowell te Credit Karma Canada vich mashhoor free tools ne." },
              { type: "example", title: "Achi aadat", content: "Har mahine score check karna changes nu jaldi pakad lainda hai." }
            ]
          }
        }
      }
    ]
  },
  {
    id: "why-credit-drops",
    isPremium: false,
    title: {
      en: "Why your credit score drops",
      es: "Por qué baja tu puntuación de crédito",
      hi: "Aapka credit score kyun girta hai",
      tl: "Bakit bumababa ang iyong credit score",
      zh: "为什么你的信用分数会下降",
      ar: "لماذا ينخفض تقييمك الائتماني",
      fr: "Pourquoi votre cote de crédit baisse",
      pa: "Tuhada credit score kyon ghatda hai"
    },
    subtitle: {
      en: "Late payments, too many applications, and high balances can hurt",
      es: "Los pagos tardíos, demasiadas solicitudes y saldos altos pueden afectar",
      hi: "Late payments, bahut saare applications, aur high balances nuksan kar sakte hain",
      tl: "Ang late payments, sobrang applications, at mataas na balanse ay nakakasama",
      zh: "逾期付款、过多申请和高余额都会伤害分数",
      ar: "المدفوعات المتأخرة وكثرة الطلبات والأرصدة العالية تضر",
      fr: "Les paiements en retard, trop de demandes et les soldes élevés peuvent nuire",
      pa: "Late payments, bahut saari applications, te high balances nuksaan kar sakde ne"
    },
    category: "Credit",
    steps: [
      {
        type: "concept",
        content: {
          en: {
            headline: "What lowers your score?",
            contentBreakdown: [
              { type: "text", content: "Late payments can hurt your score fast because lenders want to see reliability." },
              { type: "text", content: "Too many credit applications in a short time can also lower it." },
              { type: "quickQuestion", question: "Which one can hurt your score?", options: ["Paying on time", "High balances", "Keeping balances low"], correct: 1, explanation: "High balances and late payments can lower your score." },
              { type: "example", title: "Avoid this", content: "Applying for several cards in one week can make lenders worry." }
            ]
          },
          es: {
            headline: "¿Qué baja tu puntuación?",
            contentBreakdown: [
              { type: "text", content: "Los pagos tardíos pueden afectar rápido porque los prestamistas buscan confiabilidad." },
              { type: "text", content: "Demasiadas solicitudes en poco tiempo también pueden bajarla." },
              { type: "quickQuestion", question: "¿Qué puede dañar tu puntuación?", options: ["Pagar a tiempo", "Saldos altos", "Mantener saldos bajos"], correct: 1, explanation: "Los saldos altos y los pagos tardíos pueden bajar tu puntuación." },
              { type: "example", title: "Evita esto", content: "Solicitar varias tarjetas en una semana puede preocupar a los prestamistas." }
            ]
          },
          hi: {
            headline: "Score kya girata hai?",
            contentBreakdown: [
              { type: "text", content: "Late payments score ko jaldi nuksan pahucha sakte hain kyunki lenders reliability dekhte hain." },
              { type: "text", content: "Short time mein bahut saari applications bhi score girati hain." },
              { type: "quickQuestion", question: "Kaun si cheez score ko nuksan de sakti hai?", options: ["Time par payment", "High balances", "Low balances"], correct: 1, explanation: "High balances aur late payments score ko ghata sakte hain." },
              { type: "example", title: "Isse bacho", content: "Ek hafte mein kai cards ke liye apply karna lenders ko worry kar sakta hai." }
            ]
          },
          tl: {
            headline: "Ano ang nagpapababa ng score?",
            contentBreakdown: [
              { type: "text", content: "Ang late payments ay mabilis makasama dahil gusto ng lenders ang reliability." },
              { type: "text", content: "Masyadong maraming applications sa maikling panahon ay makakapagbaba rin." },
              { type: "quickQuestion", question: "Alin ang maaaring makasira sa score?", options: ["Pagbayad sa oras", "Mataas na balanse", "Mababang balanse"], correct: 1, explanation: "Ang mataas na balanse at late payments ay nakakapagbaba ng score." },
              { type: "example", title: "Iwasan ito", content: "Ang pag-apply ng maraming cards sa isang linggo ay nakakapag-alala sa lenders." }
            ]
          },
          zh: {
            headline: "什么会降低你的分数？",
            contentBreakdown: [
              { type: "text", content: "逾期付款会很快伤害分数，因为贷款人看重可靠性。" },
              { type: "text", content: "短时间内过多申请也会降低分数。" },
              { type: "quickQuestion", question: "哪一种会伤害你的分数？", options: ["按时付款", "高余额", "保持低余额"], correct: 1, explanation: "高余额和逾期付款会降低你的分数。" },
              { type: "example", title: "避免这个", content: "一周内申请多张卡会让贷款人担心。" }
            ]
          },
          ar: {
            headline: "ما الذي يخفض تقييمك؟",
            contentBreakdown: [
              { type: "text", content: "المدفوعات المتأخرة تضر سريعًا لأن المقرضين يريدون رؤية الموثوقية." },
              { type: "text", content: "كثرة الطلبات في وقت قصير قد تخفضه أيضًا." },
              { type: "quickQuestion", question: "ما الذي قد يضر بتقييمك؟", options: ["الدفع في الوقت", "الأرصدة العالية", "الأرصدة المنخفضة"], correct: 1, explanation: "الأرصدة العالية والمدفوعات المتأخرة يمكن أن تخفض تقييمك." },
              { type: "example", title: "تجنب هذا", content: "التقديم على عدة بطاقات في أسبوع واحد قد يثير قلق المقرضين." }
            ]
          },
          fr: {
            headline: "Qu’est-ce qui fait baisser votre cote ?",
            contentBreakdown: [
              { type: "text", content: "Les paiements en retard nuisent vite, car les prêteurs veulent voir de la fiabilité." },
              { type: "text", content: "Trop de demandes en peu de temps peuvent aussi la faire baisser." },
              { type: "quickQuestion", question: "Qu’est-ce qui peut nuire à votre cote ?", options: ["Payer à temps", "Soldes élevés", "Garder des soldes bas"], correct: 1, explanation: "Les soldes élevés et les paiements en retard peuvent faire baisser votre cote." },
              { type: "example", title: "À éviter", content: "Demander plusieurs cartes en une semaine peut donner l’impression que vous avez besoin de trop de crédit." }
            ]
          },
          pa: {
            headline: "Tuhada score kyon ghatda hai?",
            contentBreakdown: [
              { type: "text", content: "Late payments score nu jaldi nuksaan pahucha sakde ne kyunki lenders reliability dekhde ne." },
              { type: "text", content: "Thode same de vich bahut saari credit applications vi score ghata dendi ne." },
              { type: "quickQuestion", question: "Ki score nu nuksaan de sakda hai?", options: ["Time te pay karna", "High balances", "Low balances rakho"], correct: 1, explanation: "High balances te late payments score nu ghata sakde ne." },
              { type: "example", title: "Is ton bacho", content: "Ik hafte vich kai cards layi apply karna lenders nu worry kar sakda hai." }
            ]
          }
        }
      }
    ]
  },
  {
    id: "check-credit-free",
    isPremium: false,
    title: {
      en: "How to check your credit score free",
      es: "Cómo revisar tu puntuación de crédito gratis",
      hi: "Apna credit score free mein kaise check karein",
      tl: "Paano tingnan nang libre ang iyong credit score",
      zh: "如何免费查看你的信用分数",
      ar: "كيف تتحقق من تقييمك الائتماني مجانًا",
      fr: "Comment vérifier gratuitement sa cote de crédit",
      pa: "Apna credit score free vich kiven check karo"
    },
    subtitle: {
      en: "Use free tools like Borrowell and Credit Karma in Canada",
      es: "Usa herramientas gratis como Borrowell y Credit Karma en Canadá",
      hi: "Canada mein Borrowell aur Credit Karma jaise free tools use karo",
      tl: "Gumamit ng libreng tools tulad ng Borrowell at Credit Karma sa Canada",
      zh: "在加拿大使用Borrowell和Credit Karma等免费工具",
      ar: "استخدم أدوات مجانية مثل Borrowell و Credit Karma في كندا",
      fr: "Utilisez des outils gratuits comme Borrowell et Credit Karma au Canada",
      pa: "Canada vich Borrowell te Credit Karma varge free tools use karo"
    },
    category: "Credit",
    steps: [
      {
        type: "concept",
        content: {
          en: {
            headline: "Check your score for free",
            contentBreakdown: [
              { type: "text", content: "You can check your credit score without paying in Canada using free services." },
              { type: "text", content: "Borrowell and Credit Karma are common tools that show your score and report updates." },
              { type: "quickQuestion", question: "Which tools can you use for free in Canada?", options: ["Borrowell and Credit Karma", "Only banks", "Only cash apps"], correct: 0, explanation: "Borrowell and Credit Karma are popular free tools in Canada." },
              { type: "example", title: "Easy habit", content: "Checking your score monthly helps you spot changes early and stay on track." }
            ]
          },
          es: {
            headline: "Revisa tu puntuación gratis",
            contentBreakdown: [
              { type: "text", content: "Puedes revisar tu puntuación de crédito gratis en Canadá usando servicios sin costo." },
              { type: "text", content: "Borrowell y Credit Karma son herramientas comunes que muestran tu puntuación." },
              { type: "quickQuestion", question: "¿Qué herramientas puedes usar gratis en Canadá?", options: ["Borrowell y Credit Karma", "Solo bancos", "Solo apps de efectivo"], correct: 0, explanation: "Borrowell y Credit Karma son herramientas gratis populares en Canadá." },
              { type: "example", title: "Buen hábito", content: "Revisar tu puntuación cada mes te ayuda a detectar cambios temprano." }
            ]
          },
          hi: {
            headline: "Credit score free mein check karo",
            contentBreakdown: [
              { type: "text", content: "Canada mein aap free services se apna credit score bina paise diye dekh sakte hain." },
              { type: "text", content: "Borrowell aur Credit Karma common tools hain jo score aur updates dikhate hain." },
              { type: "quickQuestion", question: "Canada mein kaunse tools free use kar sakte ho?", options: ["Borrowell aur Credit Karma", "Sirf banks", "Sirf cash apps"], correct: 0, explanation: "Borrowell aur Credit Karma Canada mein popular free tools hain." },
              { type: "example", title: "Easy habit", content: "Har mahine score check karne se changes jaldi pakad mein aate hain." }
            ]
          },
          tl: {
            headline: "Suriin nang libre ang iyong score",
            contentBreakdown: [
              { type: "text", content: "Maaari mong tingnan ang iyong credit score nang libre sa Canada gamit ang free services." },
              { type: "text", content: "Ang Borrowell at Credit Karma ay karaniwang tools na nagpapakita ng iyong score." },
              { type: "quickQuestion", question: "Anong tools ang libre sa Canada?", options: ["Borrowell at Credit Karma", "Mga bank lang", "Mga cash app lang"], correct: 0, explanation: "Ang Borrowell at Credit Karma ay sikat na libreng tools sa Canada." },
              { type: "example", title: "Magandang habit", content: "Ang buwanang pag-check ng score ay nakakatulong makita ang pagbabago agad." }
            ]
          },
          zh: {
            headline: "免费查看你的信用分数",
            contentBreakdown: [
              { type: "text", content: "在加拿大，你可以使用免费服务查看信用分数。" },
              { type: "text", content: "Borrowell和Credit Karma是常见工具，可以显示你的分数和更新。" },
              { type: "quickQuestion", question: "在加拿大可以免费使用哪些工具？", options: ["Borrowell和Credit Karma", "只有银行", "只有现金应用"], correct: 0, explanation: "Borrowell和Credit Karma是加拿大很受欢迎的免费工具。" },
              { type: "example", title: "简单习惯", content: "每月查看一次分数，有助于尽早发现变化。" }
            ]
          },
          ar: {
            headline: "تحقق من تقييمك مجانًا",
            contentBreakdown: [
              { type: "text", content: "يمكنك التحقق من تقييمك الائتماني مجانًا في كندا باستخدام خدمات مجانية." },
              { type: "text", content: "Borrowell و Credit Karma من الأدوات الشائعة التي تعرض النتيجة والتحديثات." },
              { type: "quickQuestion", question: "ما الأدوات المجانية المتاحة في كندا؟", options: ["Borrowell و Credit Karma", "البنوك فقط", "تطبيقات الدفع فقط"], correct: 0, explanation: "Borrowell و Credit Karma من الأدوات المجانية الشائعة في كندا." },
              { type: "example", title: "عادة جيدة", content: "التحقق الشهري يساعدك على ملاحظة التغييرات مبكرًا." }
            ]
          },
          fr: {
            headline: "Vérifiez votre cote gratuitement",
            contentBreakdown: [
              { type: "text", content: "Vous pouvez vérifier votre cote de crédit gratuitement au Canada." },
              { type: "text", content: "Borrowell et Credit Karma sont des outils courants qui montrent votre cote et les mises à jour." },
              { type: "quickQuestion", question: "Quels outils pouvez-vous utiliser gratuitement au Canada ?", options: ["Borrowell et Credit Karma", "Seulement les banques", "Seulement les applis de paiement"], correct: 0, explanation: "Borrowell et Credit Karma sont des outils gratuits populaires au Canada." },
              { type: "example", title: "Bonne habitude", content: "Vérifier votre cote chaque mois vous aide à repérer les changements tôt." }
            ]
          },
          pa: {
            headline: "Apna score free vich check karo",
            contentBreakdown: [
              { type: "text", content: "Canada vich tusi free services naal bina paise de apna credit score dekh sakde ho." },
              { type: "text", content: "Borrowell te Credit Karma common tools ne jo score te updates dikhaunde ne." },
              { type: "quickQuestion", question: "Canada vich kaunse tools free ne?", options: ["Borrowell te Credit Karma", "Sirf banks", "Sirf cash apps"], correct: 0, explanation: "Borrowell te Credit Karma Canada vich mashhoor free tools ne." },
              { type: "example", title: "Achi aadat", content: "Har mahine score check karna changes nu jaldi pakad lainda hai." }
            ]
          }
        }
      }
    ]
  },
  {
    id: "why-credit-drops",
    isPremium: false,
    title: {
      en: "Why your credit score drops",
      es: "Por qué baja tu puntuación de crédito",
      hi: "Aapka credit score kyun girta hai",
      tl: "Bakit bumababa ang iyong credit score",
      zh: "为什么你的信用分数会下降",
      ar: "لماذا ينخفض تقييمك الائتماني",
      fr: "Pourquoi votre cote de crédit baisse",
      pa: "Tuhada credit score kyon ghatda hai"
    },
    subtitle: {
      en: "Late payments, too many applications, and high balances can hurt",
      es: "Los pagos tardíos, demasiadas solicitudes y saldos altos pueden afectar",
      hi: "Late payments, bahut saare applications, aur high balances nuksan kar sakte hain",
      tl: "Ang late payments, sobrang applications, at mataas na balanse ay nakakasama",
      zh: "逾期付款、过多申请和高余额都会伤害分数",
      ar: "المدفوعات المتأخرة وكثرة الطلبات والأرصدة العالية تضر",
      fr: "Les paiements en retard, trop de demandes et les soldes élevés peuvent nuire",
      pa: "Late payments, bahut saari applications, te high balances nuksaan kar sakde ne"
    },
    category: "Credit",
    steps: [
      {
        type: "concept",
        content: {
          en: {
            headline: "What lowers your score?",
            contentBreakdown: [
              { type: "text", content: "Late payments can hurt your score fast because lenders want to see reliability." },
              { type: "text", content: "Too many credit applications in a short time can also lower it." },
              { type: "quickQuestion", question: "What can hurt your score?", options: ["Paying on time", "High balances", "Using one card carefully"], correct: 1, explanation: "High balances and late payments can lower your score." },
              { type: "example", title: "Avoid this", content: "Applying for several cards in one week can make lenders worry you need too much credit." }
            ]
          },
          es: {
            headline: "¿Qué baja tu puntuación?",
            contentBreakdown: [
              { type: "text", content: "Los pagos tardíos pueden dañar tu puntuación rápidamente." },
              { type: "text", content: "Demasiadas solicitudes de crédito en poco tiempo también pueden bajarla." },
              { type: "quickQuestion", question: "¿Qué puede dañar tu puntuación?", options: ["Pagar a tiempo", "Saldos altos", "Usar una tarjeta con cuidado"], correct: 1, explanation: "Los saldos altos y los pagos tardíos pueden bajar tu puntuación." },
              { type: "example", title: "Evita esto", content: "Solicitar varias tarjetas en una semana puede hacer que parezca que necesitas demasiado crédito." }
            ]
          },
          hi: {
            headline: "Score kyun girta hai?",
            contentBreakdown: [
              { type: "text", content: "Late payments score ko jaldi nuksan pahucha sakte hain." },
              { type: "text", content: "Short time mein bahut saari credit applications bhi score ko girati hain." },
              { type: "quickQuestion", question: "Kya score ko nuksan de sakta hai?", options: ["Time par pay karna", "High balances", "Ek card ko carefully use karna"], correct: 1, explanation: "High balances aur late payments score ko kam kar sakte hain." },
              { type: "example", title: "Isse bacho", content: "Ek hafte mein kai cards ke liye apply karna lenders ko worry kar sakta hai." }
            ]
          },
          tl: {
            headline: "Bakit bumababa ang score?",
            contentBreakdown: [
              { type: "text", content: "Ang late payments ay mabilis makakasira sa score." },
              { type: "text", content: "Ang sobrang credit applications sa maikling panahon ay maaari ring magpababa nito." },
              { type: "quickQuestion", question: "Ano ang maaaring makasama sa score?", options: ["Pagbayad sa oras", "Mataas na balanse", "Maingat na paggamit ng isang card"], correct: 1, explanation: "Ang high balances at late payments ay nakakapababa ng score." },
              { type: "example", title: "Iwasan ito", content: "Ang pag-apply sa ilang cards sa loob ng isang linggo ay maaaring magmukhang sobra ang kailangan mong credit." }
            ]
          },
          zh: {
            headline: "为什么分数会下降？",
            contentBreakdown: [
              { type: "text", content: "逾期付款会很快伤害你的信用分数。" },
              { type: "text", content: "短时间内申请太多信用产品也会降低分数。" },
              { type: "quickQuestion", question: "什么会伤害你的分数？", options: ["按时付款", "高余额", "谨慎使用一张卡"], correct: 1, explanation: "高余额和逾期付款都会降低分数。" },
              { type: "example", title: "避免这样做", content: "一周内申请多张卡会让贷款人担心你需要太多信用。" }
            ]
          },
          ar: {
            headline: "لماذا ينخفض التقييم؟",
            contentBreakdown: [
              { type: "text", content: "المدفوعات المتأخرة يمكن أن تضر تقييمك بسرعة." },
              { type: "text", content: "كثرة طلبات الائتمان خلال وقت قصير يمكن أن تخفضه أيضًا." },
              { type: "quickQuestion", question: "ما الذي يمكن أن يضر تقييمك؟", options: ["الدفع في الوقت", "الأرصدة العالية", "استخدام بطاقة واحدة بحذر"], correct: 1, explanation: "الأرصدة العالية والمدفوعات المتأخرة قد تخفض التقييم." },
              { type: "example", title: "تجنب هذا", content: "التقديم لعدة بطاقات في أسبوع واحد قد يجعل المقرضين يظنون أنك تحتاج إلى ائتمان كثير." }
            ]
          },
          fr: {
            headline: "Pourquoi la cote baisse-t-elle ?",
            contentBreakdown: [
              { type: "text", content: "Les paiements en retard peuvent nuire rapidement à votre cote." },
              { type: "text", content: "Trop de demandes de crédit en peu de temps peuvent aussi la faire baisser." },
              { type: "quickQuestion", question: "Qu’est-ce qui peut nuire à votre cote ?", options: ["Payer à temps", "Soldes élevés", "Utiliser une carte avec prudence"], correct: 1, explanation: "Les soldes élevés et les paiements en retard peuvent faire baisser votre cote." },
              { type: "example", title: "À éviter", content: "Demander plusieurs cartes en une semaine peut donner l’impression que vous avez besoin de trop de crédit." }
            ]
          },
          pa: {
            headline: "Tuhada score kyon ghatda hai?",
            contentBreakdown: [
              { type: "text", content: "Late payments score nu jaldi nuksaan pahucha sakde ne." },
              { type: "text", content: "Thode same de vich bahut saari credit applications vi score ghata dendi ne." },
              { type: "quickQuestion", question: "Ki score nu nuksaan de sakda hai?", options: ["Time te pay karna", "High balances", "Ik card nu carefully use karna"], correct: 1, explanation: "High balances te late payments score nu ghata sakde ne." },
              { type: "example", title: "Is ton bacho", content: "Ik hafte vich kai cards layi apply karna lenders nu worry kar sakda hai." }
            ]
          }
        }
      }
    ]
  },
  {
    id: "banking-basics",
    isPremium: false,
    title: {
      en: "Banking basics for newcomers",
      es: "Conceptos básicos de banca para recién llegados",
      hi: "Banking basics newcomers ke liye",
      tl: "Mga pangunahing kaalaman sa pagbabangko para sa mga bagong dating",
      zh: "Banking basics for newcomers",
      ar: "Banking basics for newcomers",
      fr: "Notions de base en banque pour les nouveaux arrivants",
      pa: "Banking basics newcomers lai"
    },
    subtitle: {
      en: "Understanding chequing and savings accounts",
      es: "Entendiendo cuentas de cheques y de ahorros",
      hi: "Chequing aur savings accounts samjhna",
      tl: "Pag-unawa sa mga chequing at savings account",
      zh: "Understanding chequing and savings accounts",
      ar: "Understanding chequing and savings accounts",
      fr: "Comprendre les comptes chèques et d'épargne",
      pa: "Chequing te savings accounts samajhna"
    },
    category: "Banking",
    steps: [
      {
        type: "concept",
        content: {
          en: {
            headline: "Chequing vs Savings accounts",
            illustration: "bank",
            explanation: [
              "A chequing account is for everyday spending - paying rent, buying groceries, receiving your salary.",
              "A savings account is for money you want to grow - it earns interest and should not be touched regularly.",
              "Think of chequing as your wallet and savings as your piggy bank that grows over time."
            ],
            contentBreakdown: [
              {
                type: "text",
                content: "Most Canadians use both types of accounts together. Your salary goes into chequing for daily expenses, then you transfer money to savings for goals."
              },
              {
                type: "quickQuestion",
                question: "Where should your salary be deposited?",
                options: [
                  "Savings account - to earn interest immediately",
                  "Chequing account - for easy daily access",
                  "Split between both accounts",
                  "Cash - to avoid banks"
                ],
                correct: 1,
                explanation: "Salary goes to chequing for daily expenses. You can transfer to savings later.",
                spacedRepetition: {
                  onWrong: {
                    reviewText: "Let's review the purpose of each account type:",
                    reviewContent: [
                      "Chequing account = Daily transactions (rent, groceries, bills)",
                      "Savings account = Long-term goals (emergency fund, big purchases)",
                      "Salary needs to be easily accessible for daily expenses",
                      "Transfer to savings AFTER paying monthly bills",
                      "Think: Wallet vs piggy bank - salary goes to wallet first"
                    ],
                    retryQuestion: {
                      question: "If you need to pay rent tomorrow, which account should have your salary?",
                      options: ["Savings account", "Chequing account", "Both accounts equally", "Cash under mattress"],
                      correct: 1,
                      hint: "Think: Which account is designed for daily transactions?"
                    }
                  }
                }
              },
              {
                type: "example",
                title: "Real World Example",
                content: "Priya earns $3000/month. $2000 goes to chequing for rent ($1200), groceries ($400), and other expenses. $500 automatically transfers to savings, leaving $500 buffer in chequing."
              },
              {
                type: "quickQuestion",
                question: "How much should Priya transfer to savings each month?",
                options: ["$0", "$300", "$500", "$1000"],
                correct: 2,
                explanation: "The 50/30/20 rule suggests 20% ($600) for savings, but $500 is a great start!",
                spacedRepetition: {
                  onWrong: {
                    reviewText: "Let's review the 50/30/20 budgeting rule:",
                    reviewContent: [
                      "50% = Needs (rent, groceries, utilities, transportation)",
                      "30% = Wants (entertainment, dining out, shopping)",
                      "20% = Savings & debt repayment",
                      "Priya's income: $3000 × 20% = $600 for savings",
                      "$500 is close to the 20% target and very achievable!"
                    ],
                    retryQuestion: {
                      question: "Using the 50/30/20 rule, what's 20% of $3000?",
                      options: ["$300", "$500", "$600", "$900"],
                      correct: 2,
                      hint: "Calculate: $3000 × 0.20 = ?"
                    }
                  }
                }
              },
              {
                type: "text",
                content: "Online banks often offer better interest rates and lower fees than traditional banks. Many newcomers start with a traditional bank, then add an online bank for savings."
              },
              {
                type: "quickQuestion",
                question: "What's a key advantage of online banks?",
                options: [
                  "In-person customer service",
                  "Better interest rates and lower fees",
                  "More physical branches",
                  "Free coffee in branches"
                ],
                correct: 1,
                explanation: "Online banks have lower overhead costs, so they pass savings to customers through better rates.",
                spacedRepetition: {
                  onWrong: {
                    reviewText: "Let's compare traditional vs online banks:",
                    reviewContent: [
                      "Traditional banks: Physical branches, higher fees, lower interest rates",
                      "Online banks: No branches, lower fees, higher interest rates",
                      "Online banks save money on buildings and staff",
                      "Those savings become your savings through better rates!",
                      "Best strategy: Traditional bank for daily banking + Online bank for savings"
                    ],
                    retryQuestion: {
                      question: "If you want to earn the most interest on your savings, which bank type should you choose?",
                      options: ["Traditional bank with branches", "Online bank only", "Credit union", "International bank"],
                      correct: 1,
                      hint: "Think: Which type has lower costs and can offer better rates?"
                    }
                  }
                }
              }
            ],
            visualElements: {
              accountComparison: {
                type: "interactive-cards",
                title: "Choose Your Perfect Account Combo",
                cards: [
                  {
                    name: "Chequing Account",
                    icon: "wallet",
                    color: "#3b82f6",
                    features: [
                      "Daily transactions",
                      "Debit card access",
                      "Online banking",
                      "Direct deposit salary",
                      "Bill payments"
                    ],
                    bestFor: "Everyday spending",
                    monthlyFee: "$0-15",
                    interactiveDemo: {
                      type: "transaction-simulator",
                      title: "Try Daily Banking",
                      scenarios: [
                        "Buy groceries for $85",
                        "Pay rent $1200",
                        "Receive salary $2000",
                        "Pay phone bill $50"
                      ]
                    }
                  },
                  {
                    name: "Savings Account",
                    icon: "piggy-bank",
                    color: "#10b981",
                    features: [
                      "Earns interest",
                      "Goal tracking",
                      "Emergency fund",
                      "Long-term savings",
                      "Limited withdrawals"
                    ],
                    bestFor: "Growing your money",
                    interestRate: "1.5-2.5%",
                    interactiveDemo: {
                      type: "interest-calculator",
                      title: "Watch Your Money Grow",
                      initialAmount: 1000,
                      monthlyContribution: 100,
                      interestRate: 2.0,
                      timeHorizon: 12
                    }
                  }
                ],
                comparisonTool: {
                  type: "side-by-side",
                  categories: [
                    "Daily Use",
                    "Fees", 
                    "Interest",
                    "Access",
                    "Goals"
                  ],
                  winnerHighlight: true
                }
              },
              bankingSimulation: {
                type: "life-simulator",
                title: "Manage Your First Month in Canada",
                scenario: "You just arrived in Canada with $3000. How will you manage your money?",
                startingBalance: 3000,
                monthlyExpenses: {
                  rent: 1200,
                  groceries: 400,
                  phone: 50,
                  transport: 100
                },
                monthlyIncome: 2000,
                decisions: [
                  {
                    question: "Where should your salary go?",
                    options: [
                      { text: "All to chequing", impact: "convenient", feedback: "Good choice! Easy for daily expenses." },
                      { text: "Split between accounts", impact: "smart", feedback: "Excellent! Automatic savings habit." }
                    ]
                  },
                  {
                    question: "How much should you save each month?",
                    options: [
                      { text: "Save $200", impact: "conservative", feedback: "Good start! Consider saving more if possible." },
                      { text: "Save $500", impact: "ambitious", feedback: "Great! Building emergency fund fast." }
                    ]
                  }
                ],
                successMetrics: {
                  "Emergency Fund Built": "3 months expenses saved",
                  "Consistent Savings": "Saved 20%+ of income",
                  "Smart Banking": "Used both accounts effectively"
                }
              },
              gamification: {
                type: "achievement-hunt",
                title: "Banking Mastery Challenges",
                challenges: [
                  {
                    name: "Smart Saver",
                    description: "Save 20% of monthly income",
                    reward: "Savings Expert Badge",
                    points: 25
                  },
                  {
                    name: "Budget Master", 
                    description: "Track all expenses for one month",
                    reward: "Budget Guru Badge",
                    points: 30
                  },
                  {
                    name: "Account Pro",
                    description: "Set up both chequing and savings",
                    reward: "Banking Setup Badge",
                    points: 20
                  }
                ]
              }
            }
          },
          es: {
            headline: "Cuentas de cheques vs de ahorros",
            illustration: "bank",
            explanation: [
              "Una cuenta de cheques es para gastos diarios - pagar renta, comprar comestibles, recibir tu salario.",
              "Una cuenta de ahorros es para dinero que quieres hacer crecer - gana intereses y no debe tocarse regularmente.",
              "Piensa en la cuenta de cheques como tu billetera y la de ahorros como tu alcancía que crece con el tiempo."
            ]
          },
          hi: {
            headline: "Chequing vs Savings accounts",
            illustration: "bank",
            explanation: [
              "Chequing account daily spending ke liye hai - rent pay karna, groceries kharidna, salary receive karna.",
              "Savings account aise paise ke liye hai jo aap badhana chahte hain - yeh interest kamaata hai aur regularly use nahi karna chahiye.",
              "Chequing ko apni wallet ki tarah sochiye aur savings ko ek piggy bank ki tarah jo time ke saath badhta hai."
            ]
          },
          tl: {
            headline: "Chequing vs Savings accounts",
            illustration: "bank",
            explanation: [
              "Ang chequing account ay para sa pang-araw-araw na paggastos - pagbayad ng renta, pagbili ng grocery, pagtanggap ng iyong sahod.",
              "Ang savings account ay para sa pera na gusto mong palaguin - kumakakita ng interest at hindi dapat hawakan nang regular.",
              "Isipin ang chequing account bilang iyong wallet at ang savings account bilang iyong piggy bank na lumalago sa paglipas ng panahon."
            ]
          },
          zh: {
            headline: "Chequing vs Savings accounts",
            illustration: "bank",
            explanation: [
              "A chequing account is for everyday spending - paying rent, buying groceries, receiving your salary.",
              "A savings account is for money you want to grow - it earns interest and should not be touched regularly.",
              "Think of chequing as your wallet and savings as your piggy bank that grows over time."
            ]
          },
          ar: {
            headline: "Chequing vs Savings accounts",
            illustration: "bank",
            explanation: [
              "A chequing account is for everyday spending - paying rent, buying groceries, receiving your salary.",
              "A savings account is for money you want to grow - it earns interest and should not be touched regularly.",
              "Think of chequing as your wallet and savings as your piggy bank that grows over time."
            ]
          },
          fr: {
            headline: "Comptes chèques vs épargne",
            illustration: "bank",
            explanation: [
              "Un compte chèques est pour les dépenses quotidiennes - payer le loyer, acheter des courses, recevoir votre salaire.",
              "Un compte d'épargne est pour l'argent que vous voulez faire croître - il gagne des intérêts et ne doit pas être touché régulièrement.",
              "Pensez au compte chèques comme votre portefeuille et au compte d'épargne comme votre tirelire qui grandit avec le temps."
            ]
          },
          pa: {
            headline: "Chequing vs Savings accounts",
            illustration: "bank",
            explanation: [
              "Chequing account daily spending lai hai - rent pay karna, groceries kharidna, salary receive karna.",
              "Savings account aise paise lai hai jo tu badhana chaunda hai - yeh interest kammada hai te regularly use nahi karna chaida.",
              "Chequing nu apni wallet valle sochiye te savings nu piggy bank valle jo time naal badhda hai."
            ]
          }
        }
      },
      {
        type: "quickCheck",
        correctIndex: 1,
        content: {
          en: {
            question: "Which account should your salary be deposited into?",
            options: ["Savings account", "Chequing account"],
            explanation: "Your salary goes into chequing for daily expenses. Move money to savings after getting paid."
          },
          es: {
            question: "¿En qué cuenta debe depositarse tu salario?",
            options: ["Cuenta de ahorros", "Cuenta de cheques"],
            explanation: "Tu salario va a la cuenta de cheques para gastos diarios. Mueve dinero a ahorros después de recibir tu pago."
          },
          hi: {
            question: "Aapki salary kis account mein deposit honi chahiye?",
            options: ["Savings account", "Chequing account"],
            explanation: "Aapki salary chequing mein jaati hai daily expenses ke liye. Pay ke baad money savings mein move karo."
          },
          tl: {
            question: "Saan account dapat ideposito ang iyong sahod?",
            options: ["Savings account", "Chequing account"],
            explanation: "Ang iyong sahod ay pumunta sa chequing account para sa pang-araw-araw na gastus. Ilipat ang pera sa savings matapos makatanggap ng bayad."
          },
          zh: {
            question: "Which account should your salary be deposited into?",
            options: ["Savings account", "Chequing account"],
            explanation: "Your salary goes into chequing for daily expenses. Move money to savings after getting paid."
          },
          ar: {
            question: "Which account should your salary be deposited into?",
            options: ["Savings account", "Chequing account"],
            explanation: "Your salary goes into chequing for daily expenses. Move money to savings after getting paid."
          },
          fr: {
            question: "Dans quel compte votre salaire devrait-il être déposé?",
            options: ["Compte d'épargne", "Compte chèques"],
            explanation: "Votre salaire va dans le compte chèques pour les dépenses quotidiennes. Déplacez l'argent vers l'épargne après avoir été payé."
          },
          pa: {
            question: "Tuhadi salary kis account vich deposit honi chahidi hai?",
            options: ["Savings account", "Chequing account"],
            explanation: "Tuhadi salary chequing vich jandi hai daily expenses lai. Pay to baad money savings vich move karo."
          }
        }
      },
      {
        type: "realWorld",
        correctIndex: 1,
        content: {
          en: {
            scenarioTitle: "Ahmed's Payday Strategy",
            scenarioIcon: "person",
            scenario: "Ahmed gets paid $2,000. He wants to save $400. What should he do?",
            options: [
              "Keep all $2,000 in chequing",
              "Transfer $400 to savings right on payday"
            ],
            explanation: "Pay yourself first - move savings before you can spend it. This builds the saving habit.",
            visualElements: {
              rentCalculator: {
                type: "interactive-calculator",
                fields: [
                  {
                    name: "monthlySalary",
                    label: "Monthly Salary",
                    type: "number",
                    placeholder: "3000",
                    icon: "dollar-sign"
                  },
                  {
                    name: "recommendedMaxRent",
                    label: "Recommended Max Rent (30% rule)",
                    type: "calculated",
                    readonly: true,
                    icon: "home"
                  }
                ],
                description: "Calculate if your rent is affordable based on the 30% rule",
                affordabilityRule: "maxRent should not exceed 30% of monthly salary",
                affordableColor: "#10b981",
                unaffordableColor: "#ef4444"
              }
            }
          },
          es: {
            scenarioTitle: "Estrategia de Día de Pago de Ahmed",
            scenarioIcon: "person",
            scenario: "Ahmed recibe $2,000. Quiere ahorrar $400. ¿Qué debería hacer?",
            options: [
              "Mantener todos los $2,000 en cheques",
              "Transferir $400 a ahorros el mismo día de pago"
            ],
            explanation: "Págate a ti primero - mueve los ahorros antes de poder gastarlos. Esto construye el hábito de ahorrar."
          },
          hi: {
            scenarioTitle: "Ahmed ki payday strategy",
            scenarioIcon: "person",
            scenario: "Ahmed ko $2,000 milte hain. Woh $400 bachana chahta hai. Usko kya karna chahiye?",
            options: [
              "Sare $2,000 chequing mein rakho",
              "Payday par hi $400 savings mein transfer karo"
            ],
            explanation: "Khud ko pehle pay karo - spend karne se pehle savings move karo. Yeh saving habit banata hai."
          },
          tl: {
            scenarioTitle: "Stratehiya sa Payday ni Ahmed",
            scenarioIcon: "person",
            scenario: "Kumakatang $2,000 si Ahmed. Gusto niyang mag-ipon ng $400. Ano ang dapat niyang gawin?",
            options: [
              "Panatilihin ang lahat ng $2,000 sa chequing",
              "Ilipat ang $400 sa savings sa mismong araw ng pagbayad"
            ],
            explanation: "Bayad ka muna sa iyong sarili - ilipat ang savings bago ka makagastos. Ito ay nagbubuo ng habit ng pag-iimpok."
          },
          zh: {
            scenarioTitle: "Ahmed's Payday Strategy",
            scenarioIcon: "person",
            scenario: "Ahmed gets paid $2,000. He wants to save $400. What should he do?",
            options: [
              "Keep all $2,000 in chequing",
              "Transfer $400 to savings right on payday"
            ],
            explanation: "Pay yourself first - move savings before you can spend it. This builds the saving habit."
          },
          ar: {
            scenarioTitle: "Ahmed's Payday Strategy",
            scenarioIcon: "person",
            scenario: "Ahmed gets paid $2,000. He wants to save $400. What should he do?",
            options: [
              "Keep all $2,000 in chequing",
              "Transfer $400 to savings right on payday"
            ],
            explanation: "Pay yourself first - move savings before you can spend it. This builds the saving habit."
          },
          fr: {
            scenarioTitle: "Stratégie de Jour de Paiement d'Ahmed",
            scenarioIcon: "person",
            scenario: "Ahmed reçoit 2,000$. Il veut économiser 400$. Que devrait-il faire?",
            options: [
              "Garder tous les 2,000$ en chèques",
              "Transférer 400$ en épargne le jour même du paiement"
            ],
            explanation: "Payez-vous d'abord - déplacez les économies avant de pouvoir les dépenser. Cela construit l'habitude d'économiser."
          },
          pa: {
            scenarioTitle: "Ahmed di payday strategy",
            scenarioIcon: "person",
            scenario: "Ahmed nu $2,000 milde han. Oh $400 bachana chaida hai. Oh ki karna chaida hai?",
            options: [
              "Sare $2,000 chequing vich rakho",
              "Payday te hi $400 savings vich transfer karo"
            ],
            explanation: "Khud nu pehle pay karo - spend karne to pehle savings move karo. Yeh saving habit bananda hai."
          }
        }
      },
      {
        type: "fillBlank",
        correctIndex: 1,
        content: {
          en: {
            sentence: "To build credit you should keep your balance below ___ of your limit",
            options: ["10%", "30%", "90%"],
            explanation: "Keeping below 30% shows lenders you are responsible with credit."
          },
          es: {
            sentence: "Para construir crédito debes mantener tu balance por debajo del ___ de tu límite",
            options: ["10%", "30%", "90%"],
            explanation: "Mantenerse por debajo del 30% muestra a los prestamistas que eres responsable con el crédito."
          },
          hi: {
            sentence: "Credit banane ke liye aap apna balance ___ se kam rakhna chahiye apne limit ka",
            options: ["10%", "30%", "90%"],
            explanation: "30% se kam rakhna lenders ko dikata hai ki aap credit ke saath responsible hain."
          },
          tl: {
            sentence: "Para makapagbuild ng credit dapat panatilihin ang iyong balance sa ibaba ng ___ ng iyong limit",
            options: ["10%", "30%", "90%"],
            explanation: "Ang pagpapanatili sa ibaba ng 30% ay nagpapakita sa mga lenders na responsable ka sa credit."
          },
          zh: {
            sentence: "To build credit you should keep your balance below ___ of your limit",
            options: ["10%", "30%", "90%"],
            explanation: "Keeping below 30% shows lenders you are responsible with credit."
          },
          ar: {
            sentence: "To build credit you should keep your balance below ___ of your limit",
            options: ["10%", "30%", "90%"],
            explanation: "Keeping below 30% shows lenders you are responsible with credit."
          },
          fr: {
            sentence: "Pour construire du crédit vous devriez maintenir votre solde en dessous de ___ de votre limite",
            options: ["10%", "30%", "90%"],
            explanation: "Maintenir en dessous de 30% montre aux prêteurs que vous êtes responsable avec le crédit."
          },
          pa: {
            sentence: "Credit banane lai tu apna balance ___ te kam rakhna chaida hai apne limit da",
            options: ["10%", "30%", "90%"],
            explanation: "30% te kam rakhna lenders nu dinda hai ki tu credit naal responsible han."
          }
        }
      },
      {
        type: "summary",
        content: {
          en: {
            takeaways: [
              "Chequing for daily spending and receiving salary",
              "Savings for growing money with interest",
              "Online banks have lower fees than traditional banks",
              "Always ask about newcomer accounts with special benefits",
              "CDIC insures up to $100,000 per person per bank"
            ]
          },
          es: {
            takeaways: [
              "Chequing para gastos diarios y recibir salario",
              "Savings para hacer crecer el dinero con intereses",
              "Los bancos en línea tienen cuotas más bajas que los bancos tradicionales",
              "Siempre pregunta sobre cuentas de recién llegados con beneficios especiales",
              "CDIC asegura hasta $100,000 por persona por banco"
            ]
          },
          hi: {
            takeaways: [
              "Chequing daily spending aur salary receive karne ke liye",
              "Savings interest ke saath paise badhane ke liye",
              "Online banks traditional banks se kam fees hote hain",
              "Hamesha newcomer accounts ke baare mein poocho special benefits ke saath",
              "CDIC per bank per person $100,000 tak insure karta hai"
            ]
          },
          tl: {
            takeaways: [
              "Chequing para sa pang-araw-araw na paggastos at pagtanggap ng sahod",
              "Savings para sa paglago ng pera na may interest",
              "Ang mga online bank ay may mas mababang bayad kaysa sa mga traditional bank",
              "Palaging tanongin tungkol sa mga account ng bagong dating na may espesyal na benepisyo",
              "CDIC ay nangangailang hanggang $100,000 kada tao kada bangko"
            ]
          },
          zh: {
            takeaways: [
              "Chequing for daily spending and receiving salary",
              "Savings for growing money with interest",
              "Online banks have lower fees than traditional banks",
              "Always ask about newcomer accounts with special benefits",
              "CDIC insures up to $100,000 per person per bank"
            ]
          },
          ar: {
            takeaways: [
              "Chequing for daily spending and receiving salary",
              "Savings for growing money with interest",
              "Online banks have lower fees than traditional banks",
              "Always ask about newcomer accounts with special benefits",
              "CDIC insures up to $100,000 per person per bank"
            ]
          },
          fr: {
            takeaways: [
              "Chequing pour les dépenses quotidiennes et recevoir le salaire",
              "Savings pour faire croître l'argent avec des intérêts",
              "Les banques en ligne ont des frais plus bas que les banques traditionnelles",
              "Demandez toujours des comptes pour nouveaux arrivants avec des avantages spéciaux",
              "CDIC assure jusqu'à 100,000$ par personne par banque"
            ]
          },
          pa: {
            takeaways: [
              "Chequing daily spending te salary receive karne lai",
              "Savings interest naal paise badhane lai",
              "Online banks traditional banks to kam fees hunde ne",
              "Hamesha newcomer accounts baare mein poocho special benefits naal",
              "CDIC per bank per person $100,000 tak insure karda hai"
            ]
          }
        }
      },
      {
        type: "finalTest",
        content: {
          en: {
            title: "Banking Basics Final Test",
            description: "Test your knowledge of Canadian banking systems and account management!",
            testSections: [
              {
                sectionTitle: "Account Types",
                questions: [
                  {
                    question: "What is the main purpose of a chequing account?",
                    options: [
                      "Earning high interest rates",
                      "Daily transactions and expenses",
                      "Long-term savings goals",
                      "Investment trading"
                    ],
                    correct: 1,
                    explanation: "Chequing accounts are designed for daily spending, bill payments, and receiving salary."
                  },
                  {
                    question: "Where should you deposit your salary for easy access?",
                    options: [
                      "Savings account",
                      "Chequing account", 
                      "Under your mattress",
                      "Credit card"
                    ],
                    correct: 1,
                    explanation: "Salary goes to chequing for daily expenses and easy access."
                  }
                ]
              },
              {
                sectionTitle: "Bank Fees and Interest",
                questions: [
                  {
                    question: "Which type of bank typically offers better interest rates?",
                    options: [
                      "Traditional brick-and-mortar banks",
                      "Online banks",
                      "Credit unions",
                      "International banks"
                    ],
                    correct: 1,
                    explanation: "Online banks have lower overhead costs and pass savings to customers through better rates."
                  },
                  {
                    question: "What does CDIC insurance cover?",
                    options: [
                      "Credit card debt",
                      "Up to $100,000 per person per bank",
                      "All investments unlimited",
                      "Only business accounts"
                    ],
                    correct: 1,
                    explanation: "CDIC insures up to $100,000 per person per institution in case of bank failure."
                  }
                ]
              },
              {
                sectionTitle: "Banking Strategies",
                questions: [
                  {
                    question: "Priya earns $3000/month. Following the 50/30/20 rule, how much should she save?",
                    options: ["$300", "$600", "$900", "$1500"],
                    correct: 1,
                    explanation: "20% of $3000 = $600 for savings (50% needs, 30% wants, 20% savings)."
                  },
                  {
                    question: "When should you transfer money to savings?",
                    options: [
                      "At the end of the month",
                      "Right on payday",
                      "Only when you have extra",
                      "Never - keep everything in chequing"
                    ],
                    correct: 1,
                    explanation: "Pay yourself first - transfer to savings on payday before you can spend it."
                  },
                  {
                    question: "What's a good strategy for banking as a newcomer?",
                    options: [
                      "Use only one bank for everything",
                      "Start with traditional bank, add online bank for savings",
                      "Avoid banks completely",
                      "Open accounts at 5+ different banks"
                    ],
                    correct: 1,
                    explanation: "Traditional banks offer in-person service and newcomer packages, while online banks offer better rates for savings."
                  }
                ]
              },
              {
                sectionTitle: "Real Scenarios",
                questions: [
                  {
                    question: "Ahmed has $2000 in chequing and $500 in savings. His rent is $1200. Which account should he use?",
                    options: ["Savings account", "Chequing account", "Credit card", "Cash"],
                    correct: 1,
                    explanation: "Use chequing for regular expenses like rent. Keep savings for long-term goals."
                  },
                  {
                    question: "Maria wants to save for a $6000 emergency fund. How long will it take if she saves $500/month?",
                    options: ["6 months", "12 months", "18 months", "24 months"],
                    correct: 1,
                    explanation: "$6000 ÷ $500 = 12 months to build her emergency fund."
                  }
                ]
              }
            ],
            passingScore: 80,
            rewards: {
              passed: {
                title: "Banking Expert!",
                message: "Excellent work! You understand Canadian banking perfectly.",
                points: 100,
                badge: "Banking Master"
              },
              perfect: {
                title: "Banking Genius!",
                message: "Perfect score! You're ready to manage your finances like a pro.",
                points: 150,
                badge: "Banking Genius"
              }
            },
            retakeOptions: {
              allowed: true,
              maxAttempts: 3,
              reviewMode: true
            }
          }
        }
      }
    ]
  },
  {
    id: "housing-fundamentals",
    isPremium: false,
    title: {
      en: "Housing fundamentals",
      es: "Fundamentos de vivienda",
      hi: "Housing fundamentals",
      tl: "Mga pangunahing kaalaman sa pabahay",
      zh: "Housing fundamentals",
      ar: "Housing fundamentals",
      fr: "Fondamentaux du logement",
      pa: "Housing fundamentals"
    },
    subtitle: {
      en: "What landlords check and tenant rights",
      es: "Qué revisan los propietarios y derechos de inquilinos",
      hi: "Landlords kya check karte hain aur tenant rights",
      tl: "Ang mga sinusuri ng mga landlord at mga karapatan ng tenant",
      zh: "What landlords check and tenant rights",
      ar: "What landlords check and tenant rights",
      fr: "Ce que vérifient les propriétaires et les droits des locataires",
      pa: "Landlords ki ki check karde ne te tenant rights"
    },
    category: "Housing",
    steps: [
      {
        type: "concept",
        content: {
          en: {
            headline: "What landlords check before renting to you",
            illustration: "home",
            explanation: [
              "Most landlords in Canada will check your credit score, ask for proof of income, and want references.",
              "As a newcomer you may not have all of these yet - but there are ways around it.",
              "Think of it like a job interview - you need to show you're a reliable tenant."
            ],
            contentBreakdown: [
              {
                type: "text",
                content: "The rental market can be competitive, but being prepared makes all the difference. Let's break down what landlords typically look for."
              },
              {
                type: "quickQuestion",
                question: "What's the most important thing for landlords?",
                options: [
                  "Your personality and charm",
                  "Proof you can pay rent reliably",
                  "Your cooking skills",
                  "Your social media presence"
                ],
                correct: 1,
                explanation: "Landlords want to know you'll pay rent on time every month. Everything else is secondary.",
                spacedRepetition: {
                  onWrong: {
                    reviewText: "Let's think like a landlord for a minute:",
                    reviewContent: [
                      "Landlord's main goal: Get rent paid on time, every time",
                      "Their biggest risk: Tenant who doesn't pay rent",
                      "Your personality doesn't pay their mortgage",
                      "Your cooking skills don't cover their expenses",
                      "Reliable income = reliable rent payments = happy landlord"
                    ],
                    retryQuestion: {
                      question: "If you were a landlord, what would matter most for your rental income?",
                      options: ["Tenant's job stability", "Tenant's hobbies", "Tenant's fashion sense", "Tenant's social media"],
                      correct: 0,
                      hint: "Think: What directly affects the landlord getting paid?"
                    }
                  }
                }
              },
              {
                type: "text",
                content: "Credit scores matter, but many landlords understand newcomers start with no credit. They'll look at other factors instead."
              },
              {
                type: "example",
                title: "Real World Example",
                content: "Maria moved from Philippines and had no Canadian credit. She offered to pay 3 months rent upfront and showed her employment letter. The landlord accepted her application!"
              },
              {
                type: "quickQuestion",
                question: "What can help compensate for no credit history?",
                options: [
                  "Offering to pay more rent upfront",
                  "Showing employment letter",
                  "Providing references from home country",
                  "All of the above"
                ],
                correct: 3,
                explanation: "All these strategies help show landlords you're reliable even without Canadian credit history.",
                spacedRepetition: {
                  onWrong: {
                    reviewText: "Let's review newcomer rental strategies:",
                    reviewContent: [
                      "No Canadian credit = No proof of payment history",
                      "Solution: Show proof of reliability in other ways",
                      "Pay upfront: Shows you have money and commitment",
                      "Employment letter: Proves stable income source",
                      "References: Shows you were reliable elsewhere",
                      "Combined: Creates a complete picture of reliability"
                    ],
                    retryQuestion: {
                      question: "Which single strategy shows the strongest commitment to paying rent?",
                      options: ["Good references", "High-paying job", "Paying 3 months rent upfront", "Nice personality"],
                      correct: 2,
                      hint: "Think: What puts money at risk to prove you're serious?"
                    }
                  }
                }
              },
              {
                type: "text",
                content: "Income verification is crucial. Most landlords want to see you earn 2.5-3x the monthly rent."
              },
              {
                type: "quickQuestion",
                question: "If rent is $1500/month, what's the minimum income most landlords want to see?",
                options: ["$2000", "$3000", "$3750", "$4500"],
                correct: 2,
                explanation: "Most landlords want 2.5x rent, so $1500 × 2.5 = $3750 minimum monthly income.",
                spacedRepetition: {
                  onWrong: {
                    reviewText: "Let's practice the landlord income calculation:",
                    reviewContent: [
                      "Landlord rule: Income should be 2.5x monthly rent",
                      "Why 2.5x? Leaves money for taxes, food, transportation, etc.",
                      "Calculation: Rent × 2.5 = Minimum required income",
                      "Example: $1500 rent × 2.5 = $3750 income needed",
                      "Some strict landlords want 3x rent ($4500 for $1500 rent)"
                    ],
                    retryQuestion: {
                      question: "If an apartment costs $1200/month, what income do most landlords want to see?",
                      options: ["$2400", "$3000", "$3600", "$4800"],
                      correct: 1,
                      hint: "Calculate: $1200 × 2.5 = ?"
                    }
                  }
                }
              },
              {
                type: "text",
                content: "References from previous landlords (even from your home country) can be very helpful. Character references from employers also work well."
              }
            ],
            visualElements: {
              rentCalculator: {
                type: "interactive-calculator",
                title: "Can You Afford This Apartment?",
                description: "Use the 30% rule to see if rent fits your budget",
                fields: [
                  {
                    name: "monthlySalary",
                    label: "Monthly Salary",
                    type: "number",
                    placeholder: "3000",
                    icon: "dollar-sign",
                    validation: "required|min:1000"
                  },
                  {
                    name: "monthlyExpenses",
                    label: "Other Monthly Expenses",
                    type: "number",
                    placeholder: "500",
                    icon: "receipt",
                    tooltip: "Groceries, phone, transportation, etc."
                  },
                  {
                    name: "desiredRent",
                    label: "Desired Monthly Rent",
                    type: "number",
                    placeholder: "1200",
                    icon: "home",
                    validation: "required|min:100"
                  }
                ],
                calculations: {
                  maxRecommendedRent: "monthlySalary * 0.3",
                  availableForHousing: "monthlySalary - monthlyExpenses - (monthlySalary * 0.3)",
                  affordabilityScore: "dynamic calculation based on rent vs income ratio"
                },
                visualFeedback: {
                  affordable: {
                    color: "#10b981",
                    message: "Great! This rent fits your budget comfortably",
                    icon: "check-circle"
                  },
                  borderline: {
                    color: "#f59e0b",
                    message: "This rent is on the high side - consider saving more first",
                    icon: "alert-triangle"
                  },
                  unaffordable: {
                    color: "#ef4444",
                    message: "This rent is too expensive for your income",
                    icon: "x-circle"
                  }
                },
                recommendations: {
                  type: "smart-suggestions",
                  suggestions: [
                    "Look for apartments 20% cheaper",
                    "Consider a roommate to split costs",
                    "Wait until you have 3 months rent saved",
                    "Look in neighborhoods with lower rent"
                  ]
                }
              },
              landlordChecklist: {
                type: "interactive-checklist",
                title: "Landlord Requirements Checklist",
                description: "See what landlords typically look for and how to prepare",
                categories: [
                  {
                    name: "Financial Requirements",
                    items: [
                      {
                        requirement: "Credit Score Check",
                        newcomerFriendly: true,
                        alternatives: [
                          "Offer to pay 3 months rent upfront",
                          "Show employment letter",
                          "Provide reference from home country"
                        ],
                        priority: "High"
                      },
                      {
                        requirement: "Proof of Income",
                        newcomerFriendly: false,
                        alternatives: [
                          "Employment offer letter",
                          "Bank statements showing savings",
                          "Scholarship or funding letters"
                        ],
                        priority: "High"
                      },
                      {
                        requirement: "References",
                        newcomerFriendly: false,
                        alternatives: [
                          "Reference from previous landlord (home country)",
                          "Character reference from employer",
                          "Reference from community organization"
                        ],
                        priority: "Medium"
                      }
                    ]
                  },
                  {
                    name: "Documentation",
                    items: [
                      {
                        requirement: "Government ID",
                        newcomerFriendly: true,
                        alternatives: ["Passport", "Study permit", "Work permit"],
                        priority: "High"
                      },
                      {
                        requirement: "Rental Application",
                        newcomerFriendly: true,
                        alternatives: ["Standard form", "Online application"],
                        priority: "Medium"
                      }
                    ]
                  }
                ],
                preparationScore: {
                  type: "progress-bar",
                  title: "Your Rental Readiness Score",
                  calculation: "based on completed checklist items",
                  feedback: {
                    "0-40": "You need more preparation before apartment hunting",
                    "41-70": "Good progress! Focus on high-priority items",
                    "71-100": "Excellent! You're ready to find your new home"
                  }
                }
              },
              tenantRightsGame: {
                type: "scenario-game",
                title: "Know Your Rights: Interactive Scenarios",
                description: "Learn tenant rights through real-life situations",
                scenarios: [
                  {
                    situation: "Your landlord wants to enter your apartment tomorrow",
                    question: "What are your rights?",
                    options: [
                      {
                        text: "They can enter anytime",
                        correct: false,
                        feedback: "Incorrect! Landlords need 24-hour notice except emergencies."
                      },
                      {
                        text: "They need 24-hour written notice",
                        correct: true,
                        feedback: "Correct! 24-hour written notice is required in most provinces."
                      },
                      {
                        text: "They can never enter",
                        correct: false,
                        feedback: "Incorrect! They can enter with proper notice for repairs."
                      }
                    ]
                  },
                  {
                    situation: "Your landlord raises rent by $200",
                    question: "Is this allowed?",
                    options: [
                      {
                        text: "No, rent increases are illegal",
                        correct: false,
                        feedback: "Incorrect! Rent increases are allowed with proper notice."
                      },
                      {
                        text: "Yes, but only once per year",
                        correct: true,
                        feedback: "Correct! Most provinces limit increases to once per year."
                      },
                      {
                        text: "Yes, anytime they want",
                        correct: false,
                        feedback: "Incorrect! There are rules about timing and amounts."
                      }
                    ]
                  }
                ],
                rewards: {
                  correctAnswer: {
                    points: 15,
                    badge: "Rights Expert"
                  },
                  perfectRound: {
                    points: 25,
                    badge: "Tenant Champion"
                  }
                }
              },
              neighborhoodExplorer: {
                type: "interactive-map",
                title: "Find Your Perfect Neighborhood",
                description: "Explore different areas and their costs",
                features: [
                  "Average rent prices",
                  "Transportation options",
                  "School quality ratings",
                  "Safety scores",
                  "Amenities nearby"
                ],
                filters: {
                  maxRent: "slider",
                  commuteTime: "dropdown",
                  transitAccess: "checkbox",
                  schoolDistrict: "checkbox"
                },
                comparison: {
                  type: "side-by-side",
                  maxNeighborhoods: 3,
                  criteria: ["Rent", "Commute", "Schools", "Safety"]
                }
              }
            }
          },
          es: {
            headline: "Qué revisan los propietarios antes de alquilar",
            illustration: "home",
            explanation: [
              "La mayoría de los propietarios en Canadá verificarán tu puntuación de crédito, pedirán prueba de ingresos y querrán referencias.",
              "Como recién llegado, es posible que aún no tengas todo esto - pero hay formas de solucionarlo.",
              "Piensa en ello como una entrevista de trabajo - necesitas demostrar que eres un inquilino confiable."
            ]
          },
          hi: {
            headline: "Landlords rent dene se pehle kya check karte hain",
            illustration: "home",
            explanation: [
              "Canada mein most landlords aapka credit score check karte hain, proof of income maangte hain, aur references chahte hain.",
              "Newcomer ke roop mein aapke paas abhi tak yeh sab nahi ho sakta - par iske liye solutions hain.",
              "Isse job interview ki tarah sochiye - aapko dikhana hai ki aap ek reliable tenant hain."
            ]
          },
          tl: {
            headline: "Ang mga sinusuri ng mga landlord bago mag-rent",
            illustration: "home",
            explanation: [
              "Karamihan sa mga landlord sa Canada ay susurihin ang iyong credit score, hihilingin ang proof of income, at gusto ang mga reference.",
              "Bilang isang bagong dating, maaari wala ka pa ito lahat - pero may mga paraan dito.",
              "Isipin ito bilang isang job interview - kailangan mong ipakita na ikaw ay isang maaasahang tenant."
            ]
          },
          zh: {
            headline: "What landlords check before renting to you",
            illustration: "home",
            explanation: [
              "Most landlords in Canada will check your credit score, ask for proof of income, and want references.",
              "As a newcomer you may not have all of these yet - but there are ways around it.",
              "Think of it like a job interview - you need to show you're a reliable tenant."
            ]
          },
          ar: {
            headline: "What landlords check before renting to you",
            illustration: "home",
            explanation: [
              "Most landlords in Canada will check your credit score, ask for proof of income, and want references.",
              "As a newcomer you may not have all of these yet - but there are ways around it.",
              "Think of it like a job interview - you need to show you're a reliable tenant."
            ]
          },
          fr: {
            headline: "Ce que vérifient les propriétaires avant de louer",
            illustration: "home",
            explanation: [
              "La plupart des propriétaires au Canada vérifieront votre score de crédit, demanderont une preuve de revenus et voudront des références.",
              "En tant que nouveau arrivant, vous n'avez peut-être pas encore tout cela - mais il y a des solutions.",
              "Pensez-y comme à un entretien d'embauche - vous devez montrer que vous êtes un locataire fiable."
            ]
          },
          pa: {
            headline: "Landlords rent dene to pehle ki check karde ne",
            illustration: "home",
            explanation: [
              "Canada vich most landlords tuhada credit score check karde ne, proof of income maangde ne, te references chaunde ne.",
              "Newcomer valle tuhade kol abhi tak eh sab nahi ho sakda - par iske liye solutions ne.",
              "Isse job interview valle sochiye - tuhanu dikhana hai ki tu ek reliable tenant hai."
            ]
          }
        }
      },
      {
        type: "quickCheck",
        correctIndex: 0,
        content: {
          en: {
            question: "A security deposit in Canada is typically:",
            options: ["One month rent", "Three months rent"],
            explanation: "Security deposits are usually equal to one month's rent, paid before you move in."
          },
          es: {
            question: "Un depósito de seguridad en Canadá típicamente es:",
            options: ["Un mes de renta", "Tres meses de renta"],
            explanation: "Los depósitos de seguridad generalmente son iguales a un mes de renta, pagados antes de mudarte."
          },
          hi: {
            question: "Canada mein security deposit typically hoti hai:",
            options: ["Ek month rent", "Teen months rent"],
            explanation: "Security deposits usually ek month ke rent ke barabar hote hain, move in karne se pehle pay kiye jaate hain."
          },
          tl: {
            question: "Ang security deposit sa Canada ay karaniwang:",
            options: ["Isang buwan renta", "Tatlong buwan renta"],
            explanation: "Ang security deposits ay karaniwang katumbas sa isang buwan renta, bayad bago ka lumipat."
          },
          zh: {
            question: "A security deposit in Canada is typically:",
            options: ["One month rent", "Three months rent"],
            explanation: "Security deposits are usually equal to one month's rent, paid before you move in."
          },
          ar: {
            question: "A security deposit in Canada is typically:",
            options: ["One month rent", "Three months rent"],
            explanation: "Security deposits are usually equal to one month's rent, paid before you move in."
          },
          fr: {
            question: "Un dépôt de sécurité au Canada est typiquement:",
            options: ["Un mois de loyer", "Trois mois de loyer"],
            explanation: "Les dépôts de sécurité sont généralement égaux à un mois de loyer, payés avant de déménager."
          },
          pa: {
            question: "Canada vich security deposit typically hundi hai:",
            options: ["Ik month rent", "Teen months rent"],
            explanation: "Security deposits usually ik month de rent de barabar hunde ne, move in karne to pehle pay kiye jaande ne."
          }
        }
      },
      {
        type: "realWorld",
        correctIndex: 1,
        content: {
          en: {
            scenarioTitle: "Carlos's Rental Challenge",
            scenarioIcon: "person",
            scenario: "Carlos has no Canadian credit history. A landlord asks for a credit check. What can Carlos offer?",
            options: [
              "Nothing - he cannot rent",
              "First and last month rent plus a reference letter from employer"
            ],
            explanation: "Offering first and last month's rent shows commitment. An employer reference proves income and stability."
          },
          es: {
            scenarioTitle: "Desafío de Alquiler de Carlos",
            scenarioIcon: "person",
            scenario: "Carlos no tiene historial de crédito canadiense. Un propietario pide una verificación de crédito. ¿Qué puede ofrecer Carlos?",
            options: [
              "Nada - no puede alquilar",
              "Primero y último mes de renta más una carta de referencia del empleador"
            ],
            explanation: "Ofrecer primero y último mes de renta muestra compromiso. Una referencia del empleador prueba ingresos y estabilidad."
          },
          hi: {
            question: "Canada mein security deposit typically hoti hai:",
            options: ["Ek month rent", "Teen months rent"],
            explanation: "Security deposits usually ek month ke rent ke barabar hote hain, move in karne se pehle pay kiye jaate hain."
          },
          tl: {
            question: "Ang security deposit sa Canada ay karaniwang:",
            options: ["Isang buwan renta", "Tatlong buwan renta"],
            explanation: "Ang security deposits ay karaniwang katumbas sa isang buwan renta, bayad bago ka lumipat."
          },
          zh: {
            question: "A security deposit in Canada is typically:",
            options: ["One month rent", "Three months rent"],
            explanation: "Security deposits are usually equal to one month's rent, paid before you move in."
          },
          ar: {
            question: "A security deposit in Canada is typically:",
            options: ["One month rent", "Three months rent"],
            explanation: "Security deposits are usually equal to one month's rent, paid before you move in."
          },
          fr: {
            question: "Un dépôt de sécurité au Canada est typiquement:",
            options: ["Un mois de loyer", "Trois mois de loyer"],
            explanation: "Les dépôts de sécurité sont généralement égaux à un mois de loyer, payés avant de déménager."
          },
          pa: {
            question: "Canada vich security deposit typically hundi hai:",
            options: ["Ik month rent", "Teen months rent"],
            explanation: "Security deposits usually ik month de rent de barabar hunde ne, move in karne to pehle pay kiye jaande ne."
          }
        }
      },
      {
        type: "fillBlank",
        correctIndex: 1,
        content: {
          en: {
            sentence: "A landlord must give ___ notice before entering your apartment",
            options: ["no", "24 hours", "1 week"],
            explanation: "Landlords must provide 24 hours written notice except in emergencies."
          },
          es: {
            sentence: "Un propietario debe dar ___ aviso antes de entrar a tu apartamento",
            options: ["ninguno", "24 horas", "1 semana"],
            explanation: "Los propietarios deben dar 24 horas de aviso por escrito excepto en emergencias."
          },
          hi: {
            sentence: "Landlord ko ___ notice dena zaroori hai before entering your apartment",
            options: ["no", "24 hours", "1 week"],
            explanation: "Landlords ko 24 hours written notice dena zaroori hai except emergencies mein."
          },
          tl: {
            sentence: "Ang landlord ay dapat magbigay ng abiso bumasok sa iyong apartment",
            options: ["wala", "24 oras", "1 linggo"],
            explanation: "Ang mga landlord ay dapat magbigay ng 24 oras na written notice maliban sa mga emergency."
          },
          zh: {
            sentence: "A landlord must give ___ notice before entering your apartment",
            options: ["no", "24 hours", "1 week"],
            explanation: "Landlords must provide 24 hours written notice except in emergencies."
          },
          ar: {
            sentence: "A landlord must give ___ notice before entering your apartment",
            options: ["no", "24 hours", "1 week"],
            explanation: "Landlords must provide 24 hours written notice except in emergencies."
          },
          fr: {
            sentence: "Un propriétaire doit donner ___ préavis avant d'entrer dans votre appartement",
            options: ["aucun", "24 heures", "1 semaine"],
            explanation: "Les propriétaires doivent fournir 24 heures de préavis écrit sauf en cas d'urgence."
          },
          pa: {
            sentence: "Landlord nu ___ notice dena zaroori hai before entering your apartment",
            options: ["no", "24 hours", "1 week"],
            explanation: "Landlords nu 24 hours written notice dena zaroori hai except exceptions vich."
          }
        }
      },
      {
        type: "summary",
        content: {
          en: {
            takeaways: [
              "Landlords check credit and income before renting",
              "Offer first and last month rent if no credit history",
              "Get everything in writing - lease agreements protect both sides",
              "Know your rights as a tenant - privacy and proper notice",
              "Landlord needs 24 hours notice to enter your apartment"
            ]
          },
          es: {
            takeaways: [
              "Los propietarios verifican crédito e ingresos antes de alquilar",
              "Ofrece primero y último mes de renta si no hay historial de crédito",
              "Obtén todo por escrito - los contratos de arrendamiento protegen a ambos",
              "Conoce tus derechos como inquilino - privacidad y aviso adecuado",
              "El propietario necesita 24 horas de aviso para entrar a tu apartamento"
            ]
          },
          hi: {
            takeaways: [
              "Landlords rent dene se pehle credit aur income check karte hain",
              "Agar credit history nahi hai to first aur last month rent offer karo",
              "Sab kuch writing mein lo - lease agreements dono sides ko protect karte hain",
              "Apne tenant rights jano - privacy aur proper notice",
              "Landlord ko aapke apartment andar ane ke liye 24 hours notice chahiye"
            ]
          },
          tl: {
            takeaways: [
              "Ang mga landlord ay nagsusuri ng credit at income bago mag-rent",
              "Mag-alok ng una at huling buwan renta kung walang credit history",
              "Kunin ang lahat sa pagsulat - ang mga lease agreements ay nagpoprotekta sa pareho",
              "Kilalanin ang iyong karapatan bilang tenant - privacy at tamang abiso",
              "Ang landlord ay kailangan ng 24 oras na abiso pumasok sa iyong apartment"
            ]
          },
          zh: {
            takeaways: [
              "Landlords check credit and income before renting",
              "Offer first and last month rent if no credit history",
              "Get everything in writing - lease agreements protect both sides",
              "Know your rights as a tenant - privacy and proper notice",
              "Landlord needs 24 hours notice to enter your apartment"
            ]
          },
          ar: {
            takeaways: [
              "Landlords check credit and income before renting",
              "Offer first and last month rent if no credit history",
              "Get everything in writing - lease agreements protect both sides",
              "Know your rights as a tenant - privacy and proper notice",
              "Landlord needs 24 hours notice to enter your apartment"
            ]
          },
          fr: {
            takeaways: [
              "Les propriétaires vérifient le crédit et les revenus avant de louer",
              "Offrez le premier et dernier mois de loyer si pas d'historial de crédit",
              "Obtenez tout par écrit - les baux protègent les deux parties",
              "Connaissez vos droits de locataire - vie privée et préavis approprié",
              "Le propriétaire a besoin de 24 heures de préavis pour entrer dans votre appartement"
            ]
          },
          pa: {
            takeaways: [
              "Landlords rent dene to pehle credit te income check karde ne",
              "Agar credit history nahi hai ta first te last month rent offer karo",
              "Sab kuch writing vich lo - lease agreements dono sides nu protect karde ne",
              "Aapne tenant rights jano - privacy te proper notice",
              "Landlord nu aapke apartment vich ane lai 24 hours notice chahida hai"
            ]
          }
        }
      },
      {
        type: "finalTest",
        content: {
          en: {
            title: "Housing Fundamentals Final Test",
            description: "Test your knowledge of renting in Canada and tenant rights!",
            testSections: [
              {
                sectionTitle: "Rent Affordability",
                questions: [
                  {
                    question: "What percentage of your income should go to rent according to the 30% rule?",
                    options: ["10%", "20%", "30%", "50%"],
                    correct: 2,
                    explanation: "The 30% rule suggests rent shouldn't exceed 30% of your monthly income."
                  },
                  {
                    question: "If you earn $3000/month, what's the maximum rent you should afford?",
                    options: ["$600", "$900", "$1200", "$1500"],
                    correct: 1,
                    explanation: "$3000 × 30% = $900 maximum recommended rent."
                  }
                ]
              },
              {
                sectionTitle: "Landlord Requirements",
                questions: [
                  {
                    question: "What's the minimum income most landlords want to see for $1500 rent?",
                    options: ["$2000", "$3000", "$3750", "$4500"],
                    correct: 2,
                    explanation: "Most landlords want 2.5x rent: $1500 × 2.5 = $3750."
                  },
                  {
                    question: "What can help compensate for no Canadian credit history?",
                    options: [
                      "Paying several months rent upfront",
                      "Showing employment letter",
                      "Providing references from home country",
                      "All of the above"
                    ],
                    correct: 3,
                    explanation: "All these strategies demonstrate reliability to landlords."
                  }
                ]
              },
              {
                sectionTitle: "Tenant Rights",
                questions: [
                  {
                    question: "How much notice must a landlord give before entering your apartment?",
                    options: ["No notice needed", "12 hours", "24 hours", "1 week"],
                    correct: 2,
                    explanation: "Landlords must provide 24 hours written notice except in emergencies."
                  },
                  {
                    question: "What's the typical security deposit amount in Canada?",
                    options: ["Half month rent", "One month rent", "Two months rent", "No deposit"],
                    correct: 1,
                    explanation: "Security deposits are usually equal to one month's rent."
                  },
                  {
                    question: "How often can landlords increase rent in most provinces?",
                    options: ["Anytime", "Once per month", "Once per year", "Never"],
                    correct: 2,
                    explanation: "Most provinces limit rent increases to once per year with proper notice."
                  }
                ]
              },
              {
                sectionTitle: "Real Scenarios",
                questions: [
                  {
                    question: "Priya earns $2500/month and wants to rent an apartment for $800/month. Is this affordable?",
                    options: [
                      "No, it's 32% of income",
                      "Yes, it's 32% of income",
                      "No, it's 40% of income", 
                      "Yes, it's 20% of income"
                    ],
                    correct: 0,
                    explanation: "$800 ÷ $2500 = 32%, which exceeds the recommended 30% rule."
                  },
                  {
                    question: "Ahmed's landlord wants to enter his apartment tomorrow for repairs. What should Ahmed do?",
                    options: [
                      "Let them in immediately",
                      "Ask for 24-hour written notice",
                      "Refuse entry completely",
                      "Call the police"
                    ],
                    correct: 1,
                    explanation: "Ahmed should request proper 24-hour written notice as required by law."
                  }
                ]
              }
            ],
            passingScore: 80,
            rewards: {
              passed: {
                title: "Housing Expert!",
                message: "Excellent work! You understand renting in Canada perfectly.",
                points: 100,
                badge: "Housing Master"
              },
              perfect: {
                title: "Housing Genius!",
                message: "Perfect score! You're ready to find and maintain your perfect home.",
                points: 150,
                badge: "Housing Genius"
              }
            },
            retakeOptions: {
              allowed: true,
              maxAttempts: 3,
              reviewMode: true
            }
          }
        }
      }
    ]
  }
]
