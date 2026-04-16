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
              }
            ]
          }
        }
      }
    ]
  },
  {
    id: "what-is-a-credit-score",
    isPremium: false,
    title: {
      en: "What is a credit score?",
      es: "¿Qué es una puntuación de crédito?",
      hi: "Credit score kya hai?",
      tl: "Ano ang isang credit score?",
      zh: "什么是信用分数？",
      ar: "ما هو التقييم الائتماني؟",
      fr: "Qu'est-ce qu'un pointage de crédit ?",
      pa: "Credit score ki hunda hai?"
    },
    subtitle: {
      en: "Understand the 300-850 range and why it matters for renting and borrowing",
      es: "Entiende el rango 300-850 y por qué importa para rentar y pedir prestado",
      hi: "300-850 range samjho aur ye renting aur borrowing ke liye kyun important hai",
      tl: "Unawain ang 300-850 range at bakit ito mahalaga sa pag-upa at pangungutang",
      zh: "了解300-850的范围，以及它为什么影响租房和借款",
      ar: "افهم نطاق 300-850 ولماذا يهم عند الاستئجار والاقتراض",
      fr: "Comprenez l'échelle de 300 à 850 et son importance pour louer et emprunter",
      pa: "300-850 range samjho te eh rent te borrowing layi kyon zaroori hai"
    },
    category: "Credit",
    steps: [
      {
        type: "concept",
        content: {
          en: {
            headline: "What is a credit score?",
            contentBreakdown: [
              { type: "text", content: "A credit score is a number from 300 to 850 that shows how reliably you repay borrowed money." },
              { type: "quickQuestion", question: "What does a higher credit score usually mean?", options: ["More risk", "Better borrowing options", "No effect"], correct: 1, explanation: "Higher scores usually mean lenders trust you more, which can lead to better rates and approvals." },
              { type: "text", content: "Good scores can help you rent apartments, get loans, and sometimes even lower your interest rates." }
            ]
          },
          es: {
            headline: "¿Qué es una puntuación de crédito?",
            contentBreakdown: [
              { type: "text", content: "Una puntuación de crédito es un número del 300 al 850 que muestra qué tan confiablemente devuelves el dinero prestado." },
              { type: "quickQuestion", question: "¿Qué suele significar una puntuación más alta?", options: ["Más riesgo", "Mejores opciones de préstamo", "Ningún efecto"], correct: 1, explanation: "Las puntuaciones más altas suelen dar más confianza a los prestamistas y mejores tasas." },
              { type: "text", content: "Una buena puntuación puede ayudarte a rentar, pedir préstamos y a veces pagar menos interés." }
            ]
          },
          hi: {
            headline: "Credit score kya hai?",
            contentBreakdown: [
              { type: "text", content: "Credit score 300 se 850 tak ka number hota hai jo dikhata hai ki aap borrowed money kitni reliably wapas chukate ho." },
              { type: "quickQuestion", question: "Badi credit score ka aam taur par kya matlab hota hai?", options: ["Zyada risk", "Behtar borrowing options", "Koi effect nahi"], correct: 1, explanation: "High score lenders ko trust deta hai, isliye better rates aur approvals mil sakte hain." },
              { type: "text", content: "Achha score apartment rent karne, loan lene, aur kabhi-kabhi interest kam karne mein madad karta hai." }
            ]
          },
          tl: {
            headline: "Ano ang isang credit score?",
            contentBreakdown: [
              { type: "text", content: "Ang credit score ay numero mula 300 hanggang 850 na nagpapakita kung gaano ka kaaasahan sa pagbabayad ng inutang na pera." },
              { type: "quickQuestion", question: "Ano ang madalas na ibig sabihin ng mas mataas na score?", options: ["Mas maraming risk", "Mas magagandang loan options", "Walang epekto"], correct: 1, explanation: "Mas mataas na score, mas nagtitiwala ang lenders at mas maganda ang offers." },
              { type: "text", content: "Makakatulong ang magandang score sa pag-upa ng apartment, pagkuha ng loan, at minsan mas mababang interest." }
            ]
          },
          zh: {
            headline: "什么是信用分数？",
            contentBreakdown: [
              { type: "text", content: "信用分数是300到850之间的数字，显示你偿还借款的可靠程度。" },
              { type: "quickQuestion", question: "更高的信用分数通常意味着什么？", options: ["更高风险", "更好的借款选择", "没有影响"], correct: 1, explanation: "分数越高，贷款人通常越信任你，可能获得更好的利率和批准。" },
              { type: "text", content: "良好的信用分数可以帮助你租房、申请贷款，有时还能降低利率。" }
            ]
          },
          ar: {
            headline: "ما هو التقييم الائتماني؟",
            contentBreakdown: [
              { type: "text", content: "التقييم الائتماني هو رقم من 300 إلى 850 يوضح مدى التزامك في سداد المال المقترض." },
              { type: "quickQuestion", question: "ماذا يعني عادةً التقييم الأعلى؟", options: ["مخاطر أكثر", "خيارات اقتراض أفضل", "لا تأثير"], correct: 1, explanation: "التقييم الأعلى يجعل المقرضين يثقون بك أكثر وقد تحصل على أسعار أفضل." },
              { type: "text", content: "التقييم الجيد يساعدك في الاستئجار والحصول على القروض وأحيانًا خفض الفائدة." }
            ]
          },
          fr: {
            headline: "Qu'est-ce qu'un pointage de crédit ?",
            contentBreakdown: [
              { type: "text", content: "Un pointage de crédit est un nombre de 300 à 850 qui montre à quel point vous remboursez de façon fiable l'argent emprunté." },
              { type: "quickQuestion", question: "Qu'est-ce qu'un score plus élevé signifie généralement ?", options: ["Plus de risque", "De meilleures options d'emprunt", "Aucun effet"], correct: 1, explanation: "Un score plus élevé inspire plus de confiance aux prêteurs et peut donner de meilleures offres." },
              { type: "text", content: "Un bon score peut aider à louer, obtenir des prêts et parfois réduire vos intérêts." }
            ]
          },
          pa: {
            headline: "Credit score ki hunda hai?",
            contentBreakdown: [
              { type: "text", content: "Credit score 300 ton 850 tak da number hunda hai jo dikhaunda hai ki tusi borrowed paise nu kinni zimmedari naal wapas karde ho." },
              { type: "quickQuestion", question: "Uchha credit score aam taur te ki dikhaunda hai?", options: ["Zyada risk", "Behtar borrowing options", "Koi asar nahi"], correct: 1, explanation: "High score lenders nu zyada trust dinda hai, jis naal better rates mil sakde han." },
              { type: "text", content: "Changha score rent, loan, te kabhi-kabhi kam interest vich madad karda hai." }
            ]
          }
        }
      }
    ]
  },
  {
    id: "check-credit-score-free",
    isPremium: false,
    title: {
      en: "How to check your credit score free",
      es: "Cómo revisar tu puntuación de crédito gratis",
      hi: "Apna credit score free mein kaise check karein",
      tl: "Paano tingnan ang iyong credit score nang libre",
      zh: "如何免费查看你的信用分数",
      ar: "كيفية التحقق من تقييمك الائتماني مجانًا",
      fr: "Comment vérifier gratuitement votre pointage de crédit",
      pa: "Apna credit score free vich kiven check kariye"
    },
    subtitle: {
      en: "Use free tools like Borrowell and Credit Karma in Canada",
      es: "Usa herramientas gratis como Borrowell y Credit Karma en Canadá",
      hi: "Canada mein Borrowell aur Credit Karma jaise free tools use karo",
      tl: "Gumamit ng mga libreng tool tulad ng Borrowell at Credit Karma sa Canada",
      zh: "在加拿大使用Borrowell和Credit Karma等免费工具",
      ar: "استخدم أدوات مجانية مثل Borrowell وCredit Karma في كندا",
      fr: "Utilisez des outils gratuits comme Borrowell et Credit Karma au Canada",
      pa: "Canada vich Borrowell ate Credit Karma varge free tools use karo"
    },
    category: "Credit",
    steps: [
      {
        type: "concept",
        content: {
          en: {
            headline: "Free ways to check your score",
            contentBreakdown: [
              { type: "text", content: "You can check your credit score for free without hurting it. In Canada, Borrowell and Credit Karma are common free tools." },
              { type: "example", title: "Good to know", content: "Checking your own score is called a soft check, so it does not lower your credit score." },
              { type: "quickQuestion", question: "Does checking your own score hurt your credit?", options: ["Yes", "No", "Only if you check twice"], correct: 1, explanation: "Self-checks are soft inquiries and do not lower your score." }
            ]
          },
          es: {
            headline: "Formas gratis de revisar tu score",
            contentBreakdown: [
              { type: "text", content: "Puedes revisar tu puntuación de crédito gratis sin dañarla. En Canadá, Borrowell y Credit Karma son herramientas comunes." },
              { type: "example", title: "Es bueno saber", content: "Revisar tu propia puntuación se llama una consulta suave, así que no baja tu score." },
              { type: "quickQuestion", question: "¿Revisar tu propia puntuación daña tu crédito?", options: ["Sí", "No", "Solo si la revisas dos veces"], correct: 1, explanation: "Las consultas suaves no bajan tu puntuación." }
            ]
          },
          hi: {
            headline: "Free mein score kaise check karein",
            contentBreakdown: [
              { type: "text", content: "Aap apna credit score free mein check kar sakte ho bina usse hurt kiye. Canada mein Borrowell aur Credit Karma common tools hain." },
              { type: "example", title: "Yaad rakho", content: "Apna score check karna soft check hota hai, isse score kam nahi hota." },
              { type: "quickQuestion", question: "Kya apna score check karne se credit hurt hota hai?", options: ["Haan", "Nahi", "Sirf do baar check karne par"], correct: 1, explanation: "Soft inquiry score ko kam nahi karta." }
            ]
          },
          tl: {
            headline: "Mga libreng paraan para tingnan ang score",
            contentBreakdown: [
              { type: "text", content: "Maaari mong tingnan ang iyong credit score nang libre nang hindi ito nasisira. Sa Canada, karaniwan ang Borrowell at Credit Karma." },
              { type: "example", title: "Mahalagang tandaan", content: "Ang pagtingin sa sariling score ay soft check, kaya hindi nito binababa ang score mo." },
              { type: "quickQuestion", question: "Nakakasira ba ng credit ang pag-check ng sarili mong score?", options: ["Oo", "Hindi", "Kapag dalawang beses mo tiningnan"], correct: 1, explanation: "Ang soft checks ay hindi nagpapababa ng score." }
            ]
          },
          zh: {
            headline: "免费查看信用分数的方法",
            contentBreakdown: [
              { type: "text", content: "你可以免费查看自己的信用分数而不会伤害它。在加拿大，Borrowell和Credit Karma是常见的免费工具。" },
              { type: "example", title: "记住", content: "查看自己的分数属于软查询，不会降低你的信用分数。" },
              { type: "quickQuestion", question: "查看自己的分数会伤害信用吗？", options: ["会", "不会", "只有看两次才会"], correct: 1, explanation: "软查询不会降低你的分数。" }
            ]
          },
          ar: {
            headline: "طرق مجانية للتحقق من التقييم",
            contentBreakdown: [
              { type: "text", content: "يمكنك التحقق من تقييمك الائتماني مجانًا دون الإضرار به. في كندا، Borrowell وCredit Karma من الأدوات الشائعة." },
              { type: "example", title: "معلومة مهمة", content: "التحقق من تقييمك بنفسك يسمى فحصًا ناعمًا، لذلك لا يقلل من الدرجة." },
              { type: "quickQuestion", question: "هل يضر التحقق من تقييمك بنفسك؟", options: ["نعم", "لا", "فقط إذا تحققت مرتين"], correct: 1, explanation: "الفحوصات الناعمة لا تقلل الدرجة." }
            ]
          },
          fr: {
            headline: "Moyens gratuits de vérifier votre score",
            contentBreakdown: [
              { type: "text", content: "Vous pouvez vérifier votre pointage de crédit gratuitement sans l'abîmer. Au Canada, Borrowell et Credit Karma sont des outils courants." },
              { type: "example", title: "À savoir", content: "Vérifier votre propre score est une consultation souple, donc cela ne baisse pas votre score." },
              { type: "quickQuestion", question: "Vérifier votre propre score nuit-il à votre crédit ?", options: ["Oui", "Non", "Seulement si vous vérifiez deux fois"], correct: 1, explanation: "Les consultations souples n'affectent pas votre score." }
            ]
          },
          pa: {
            headline: "Free vich score kiven check kariye",
            contentBreakdown: [
              { type: "text", content: "Tusi apna credit score free vich check kar sakde ho bina us nu nuksan pohchaye. Canada vich Borrowell ate Credit Karma common tools han." },
              { type: "example", title: "Yaad rakho", content: "Apna score check karna soft check hunda hai, is naal score ghattda nahi." },
              { type: "quickQuestion", question: "Ki apna score check karna credit nu nuksan karda hai?", options: ["Haan", "Nahi", "Sirf do vaar check karan te"], correct: 1, explanation: "Soft checks score nu ghattaunde nahi han." }
            ]
          }
        }
      }
    ]
  },
  {
    id: "why-credit-score-drops",
    isPremium: false,
    title: {
      en: "Why your credit score drops",
      es: "Por qué baja tu puntuación de crédito",
      hi: "Credit score kyun girta hai",
      tl: "Bakit bumababa ang iyong credit score",
      zh: "为什么你的信用分数会下降",
      ar: "لماذا ينخفض تقييمك الائتماني",
      fr: "Pourquoi votre pointage de crédit baisse",
      pa: "Tuhada credit score kyun ghattda hai"
    },
    subtitle: {
      en: "Late payments, too many applications, and high balances can hurt your score",
      es: "Pagos tardíos, demasiadas solicitudes y saldos altos pueden dañar tu score",
      hi: "Late payments, bahut saari applications, aur high balances score ko nuksan pahucha sakte hain",
      tl: "Ang late payments, sobrang daming applications, at mataas na balances ay nakakasama sa score",
      zh: "逾期付款、过多申请和高余额都会伤害你的分数",
      ar: "الدفعات المتأخرة وكثرة الطلبات والأرصدة المرتفعة قد تضر بالتقييم",
      fr: "Les paiements en retard, trop de demandes et les soldes élevés peuvent nuire à votre score",
      pa: "Late payments, bahut applications, ate high balances score nu nuksan kar sakde han"
    },
    category: "Credit",
    steps: [
      {
        type: "concept",
        content: {
          en: {
            headline: "What hurts your credit score?",
            contentBreakdown: [
              { type: "text", content: "Late payments are one of the biggest reasons scores drop. Too many credit applications in a short time can also lower your score." },
              { type: "text", content: "High card balances, especially using too much of your limit, can make lenders think you are stretched too thin." },
              { type: "quickQuestion", question: "Which action can hurt your credit score?", options: ["Paying on time", "Keeping balances low", "Missing a payment"], correct: 2, explanation: "Missing payments is one of the biggest negative factors." }
            ]
          },
          es: {
            headline: "¿Qué daña tu puntuación?",
            contentBreakdown: [
              { type: "text", content: "Los pagos tardíos son una de las razones más grandes por las que baja tu score. Demasiadas solicitudes de crédito en poco tiempo también pueden bajarlo." },
              { type: "text", content: "Saldos altos en tarjetas, especialmente usar demasiado de tu límite, puede hacer que los prestamistas piensen que estás muy ajustado." },
              { type: "quickQuestion", question: "¿Qué acción puede dañar tu score?", options: ["Pagar a tiempo", "Mantener saldos bajos", "Olvidar un pago"], correct: 2, explanation: "Olvidar pagos es uno de los factores más negativos." }
            ]
          },
          hi: {
            headline: "Credit score kyun girta hai?",
            contentBreakdown: [
              { type: "text", content: "Late payments score girne ka bada reason hain. Bahut saari credit applications bhi score ko kam kar sakti hain." },
              { type: "text", content: "High balances, especially limit ka zyada hissa use karna, lenders ko lagta hai ki aap par zyada load hai." },
              { type: "quickQuestion", question: "Kaunsi activity score ko hurt kar sakti hai?", options: ["Time par payment", "Balance low rakhna", "Payment miss karna"], correct: 2, explanation: "Missed payment sabse negative factors mein se ek hai." }
            ]
          },
          tl: {
            headline: "Bakit bumababa ang score?",
            contentBreakdown: [
              { type: "text", content: "Ang late payments ay isa sa pinakamalaking dahilan kung bakit bumababa ang score. Masyadong maraming applications sa maikling panahon ay nakabababa rin." },
              { type: "text", content: "Ang mataas na balances, lalo na ang paggamit ng sobra sa limit, ay nagpapakita sa lenders na masyado kang napipilit." },
              { type: "quickQuestion", question: "Aling gawain ang makakasama sa credit score?", options: ["Magbayad sa oras", "Panatilihing mababa ang balance", "Mag-miss ng payment"], correct: 2, explanation: "Ang missed payments ay isa sa pinakamalaking negative factors." }
            ]
          },
          zh: {
            headline: "为什么信用分数会下降？",
            contentBreakdown: [
              { type: "text", content: "逾期付款是分数下降的最大原因之一。短时间内过多申请信用也会拉低分数。" },
              { type: "text", content: "高信用卡余额，尤其是使用过多额度，会让贷款人觉得你压力太大。" },
              { type: "quickQuestion", question: "哪种行为会伤害信用分数？", options: ["按时付款", "保持低余额", "漏掉付款"], correct: 2, explanation: "漏付是最负面的因素之一。" }
            ]
          },
          ar: {
            headline: "لماذا ينخفض التقييم؟",
            contentBreakdown: [
              { type: "text", content: "الدفعات المتأخرة من أكبر أسباب انخفاض التقييم. كثرة طلبات الائتمان خلال فترة قصيرة قد تخفضه أيضًا." },
              { type: "text", content: "الأرصدة المرتفعة على البطاقات، خاصة استخدام جزء كبير من الحد، تجعل المقرضين يظنون أنك تحت ضغط مالي." },
              { type: "quickQuestion", question: "ما الذي قد يضر بتقييمك؟", options: ["الدفع في الوقت", "الحفاظ على رصيد منخفض", "تفويت دفعة"], correct: 2, explanation: "تفويت الدفعات من أكثر العوامل السلبية." }
            ]
          },
          fr: {
            headline: "Pourquoi votre score baisse-t-il ?",
            contentBreakdown: [
              { type: "text", content: "Les paiements en retard sont l'une des plus grandes raisons de baisse du score. Trop de demandes de crédit en peu de temps peuvent aussi le faire baisser." },
              { type: "text", content: "Des soldes élevés sur vos cartes, surtout si vous utilisez trop de votre limite, peuvent signaler un stress financier." },
              { type: "quickQuestion", question: "Quelle action peut nuire à votre score ?", options: ["Payer à temps", "Garder un solde bas", "Oublier un paiement"], correct: 2, explanation: "Les paiements manqués sont un facteur très négatif." }
            ]
          },
          pa: {
            headline: "Credit score kyun ghattda hai?",
            contentBreakdown: [
              { type: "text", content: "Late payments score ghatt hon da vadda reason han. Thode time vich bahut credit applications vi score nu down kar sakdiyan han." },
              { type: "text", content: "High balances, khaaskar limit da zyada hissa use karna, lenders nu lagda hai ki tusi financial pressure ch ho." },
              { type: "quickQuestion", question: "Kaun sa action score nu nuksan kar sakda hai?", options: ["Time te payment", "Balance low rakhna", "Payment miss karna"], correct: 2, explanation: "Missed payments sab ton negative factor han." }
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
