/**
 * Financial literacy lessons for newcomers to Canada and the US.
 * Enhanced with comprehensive content and multiple questions per lesson.
 */

export const lessons = [
  {
    id: "building-credit",
    isPremium: false,
    title: {
      en: "Building credit from zero",
      es: "Construir crédito desde cero",
      hi: "शून्य के क्रेडिट बनाना",
      tl: "Pagbuo ng credit mula sa wala",
      zh: "从零开始建立信用",
      ar: "بناء الائتمان من الصفر",
      fr: "Construire son crédit à partir de zéro",
      pa: "ਸ਼ਰਾਂ ਤੋਂ ਸ਼ਰਤ ਬਣਾਂ"
    },
    subtitle: {
      en: "How scores work and the habits that grow them",
      es: "Cómo funcionan las puntuaciones y los hábitos que las hacen crecer",
      hi: "स्कोर कैसे काम करते हैं और उन्हें बढ़ाने वाली आदतें",
      tl: "Paano gumagana ang mga credit score at mga kaugalian na nagpapabuti sa kanilang mga ito?",
      zh: "信用评分如何运作以及培养良好信用的习惯",
      ar: "كيف تعمل درجات الائتمان والعادات التي تنميها",
      fr: "Comment fonctionnent les scores de crédit et les habitudes qui les font grandir",
      pa: "ਕਰਡਤ ਅਤੇ ਕਿਵਾਂ ਤੋਂ ਜਾਂ ਦੀਦੇ ਹਨ"
    },
    category: "Credit",
    steps: [
      {
        type: "concept",
        content: {
          en: {
            headline: "Credit Score is Your Financial Grade",
            illustration: "score",
            explanation: [
              "A credit score is a three-digit number (300-850) that tells lenders how responsible you are with money.",
              "Think of it like a school grade - higher numbers mean you're better at managing credit.",
              "Banks use this score to decide if they should lend you money for cars, homes, or credit cards."
            ]
          },
          es: {
            headline: "Tu Score de Crédito es tu Calificación Financiera",
            illustration: "score",
            explanation: [
              "Un score de crédito es un número de tres dígitos (300-850) que dice a los prestamistas cuán responsable eres con el dinero.",
              "Piensa en ello como una calificación escolar - números más altos significan que eres mejor manejando crédito.",
              "Los bancos usan este score para decidir si deben prestarte dinero para autos, casas o tarjetas de crédito."
            ]
          },
          hi: {
            headline: "Credit Score aapka financial grade hai",
            illustration: "score",
            explanation: [
              "Credit score teen digit ka number hai (300-850) jo lenders ko batata hai ki aap paise ke saath kitne responsible hain.",
              "Isse school grade ki tarah sochiye - higher numbers ka matlab hai aap credit manage karne mein better hain.",
              "Banks is score ka use karte hain decide karne ke liye ki unhe aapko cars, homes ya credit cards ke liye paise dena chahiye ya nahi."
            ]
          },
          tl: {
            headline: "Ang Credit Score ay iyong Financial Grade",
            illustration: "score",
            explanation: [
              "Ang credit score ay isang three-digit number (300-850) na nagsasabi sa mga kung gaano ka responsible sa pera.",
              "Isipin ito bilang isang school grade - mas mataas na numero ay mas magaling ka sa pag-handle ng credit.",
              "Ang mga banks ay gumagamit nito para magdesisyon kung dapat kang pahiramin ng pera para sa kotse, bahay, o credit cards."
            ]
          },
          zh: {
            headline: "Credit Score is your financial grade",
            illustration: "score",
            explanation: [
              "Credit score is a three-digit number (300-850) that tells lenders how responsible you are with money.",
              "Think of it like a school grade - higher numbers mean you're better at managing credit.",
              "Banks use this score to decide if they should lend you money for cars, homes, or credit cards."
            ]
          },
          ar: {
            headline: "Credit Score is your financial grade",
            illustration: "score",
            explanation: [
              "Credit score is a three-digit number (300-850) that tells lenders how responsible you are with money.",
              "Think of it like a school grade - higher numbers mean you're better at managing credit.",
              "Banks use this score to decide if they should lend you money for cars, homes, or credit cards."
            ]
          },
          fr: {
            headline: "Credit Score is your financial grade",
            illustration: "score",
            explanation: [
              "Credit score is a three-digit number (300-850) that tells lenders how responsible you are with money.",
              "Think of it like a school grade - higher numbers mean you're better at managing credit.",
              "Banks use this score to decide if they should lend you money for cars, homes, or credit cards."
            ]
          },
          pa: {
            headline: "Credit Score aapka financial grade hai",
            illustration: "score",
            explanation: [
              "Credit score teen digit ka number hai (300-850) jo lenders ko batata hai ki aap paise ke saath kitne responsible hain.",
              "Isse school grade ki tarah sochiye - higher numbers ka matlab hai aap credit manage karne mein better hain.",
              "Banks is score ka use karte hain decide karne ke liye ki unhe aapko cars, homes ya credit cards ke liye paise dena chahiye ya nahi."
            ]
          }
        }
      },
      {
        type: "quickCheck",
        correctIndex: 0,
        content: {
          en: {
            question: "A higher credit score means you're better at managing money.",
            options: ["True", "False"],
            explanation: "Correct! Higher scores (700+) show lenders you're very responsible with credit."
          },
          es: {
            question: "Un score de crédito más alto significa que eres mejor manejando dinero.",
            options: ["Verdadero", "Falso"],
            explanation: "¡Correcto! Scores más altos (700+) muestran a los prestamistas que eres muy responsable con el crédito."
          },
          hi: {
            question: "Higher credit score ka matlab hai aap paise manage karne mein better hain.",
            options: ["True", "False"],
            explanation: "Correct! Higher scores (700+) lenders ko dikhaate hain ki aap credit ke saath bahut responsible hain."
          },
          tl: {
            question: "Mas mataas na credit score ay mas magaling ka sa pag-handle ng pera.",
            options: ["Tama", "Mali"],
            explanation: "Tama! Mas mataas na scores (700+) ay nagpapakita sa mga lenders na responsible ka sa credit."
          },
          zh: {
            question: "Higher credit score means you're better at managing money.",
            options: ["True", "False"],
            explanation: "Correct! Higher scores (700+) show lenders you're very responsible with credit."
          },
          ar: {
            question: "Higher credit score means you're better at managing money.",
            options: ["True", "False"],
            explanation: "Correct! Higher scores (700+) show lenders you're very responsible with credit."
          },
          fr: {
            question: "Higher credit score means you're better at managing money.",
            options: ["True", "False"],
            explanation: "Correct! Higher scores (700+) show lenders you're very responsible with credit."
          },
          pa: {
            question: "Higher credit score da matlab hai aap paise manage karne vich better ho.",
            options: ["True", "False"],
            explanation: "Correct! Higher scores (700+) lenders nu dikhande hain ki aap credit naal bahut responsible ho."
          }
        }
      },
      {
        type: "fillBlank",
        correctIndex: 1,
        content: {
          en: {
            sentence: "Payment history makes up ___% of your credit score calculation.",
            options: ["10%", "35%", "50%", "75%"],
            explanation: "Payment history is 35% - the biggest factor! Always pay on time."
          },
          es: {
            sentence: "El historial de pagos representa ___% del cálculo de tu score de crédito.",
            options: ["10%", "35%", "50%", "75%"],
            explanation: "El historial de pagos es 35% - ¡el factor más grande! Siempre paga a tiempo."
          },
          hi: {
            sentence: "Payment history aapke credit score calculation ka ___% banati hai.",
            options: ["10%", "35%", "50%", "75%"],
            explanation: "Payment history 35% hai - sabse bada factor! Hamesha on time pay karo."
          },
          tl: {
            sentence: "Ang payment history ay ___% ng iyong credit score calculation.",
            options: ["10%", "35%", "50%", "75%"],
            explanation: "Ang payment history ay 35% - ang pinakamalaking factor! Palagi kang magbayad sa tamang oras."
          },
          zh: {
            sentence: "Payment history makes up ___% of your credit score calculation.",
            options: ["10%", "35%", "50%", "75%"],
            explanation: "Payment history is 35% - the biggest factor! Always pay on time."
          },
          ar: {
            sentence: "Payment history makes up ___% of your credit score calculation.",
            options: ["10%", "35%", "50%", "75%"],
            explanation: "Payment history is 35% - the biggest factor! Always pay on time."
          },
          fr: {
            sentence: "Payment history makes up ___% of your credit score calculation.",
            options: ["10%", "35%", "50%", "75%"],
            explanation: "Payment history is 35% - the biggest factor! Always pay on time."
          },
          pa: {
            sentence: "Payment history aapde credit score calculation da ___% banaundi hai.",
            options: ["10%", "35%", "50%", "75%"],
            explanation: "Payment history 35% hai - sabse vada factor! Hamesha time te pay karo."
          }
        }
      },
      {
        type: "realWorld",
        correctIndex: 1,
        content: {
          en: {
            scenarioTitle: "Maria's First Credit Card",
            scenarioIcon: "person",
            scenario: "Maria just arrived from Philippines. She has no credit history and wants to buy a car in 6 months. She has $500 saved for a security deposit.",
            question: "What should Maria do first?",
            options: [
              "Apply for 5 different credit cards to get the best one",
              "Get a secured credit card with her $500 deposit"
            ],
            explanation: "Perfect! A secured card uses her deposit as collateral and reports to credit bureaus. Applying for multiple cards at once can hurt her score."
          },
          es: {
            scenarioTitle: "Primera Tarjeta de Crédito de María",
            scenarioIcon: "person",
            scenario: "María acaba de llegar de Filipinas. No tiene historial de crédito y quiere comprar un coche en 6 meses. Tiene $500 ahorrados para un depósito de seguridad.",
            question: "¿Qué debería hacer María primero?",
            options: [
              "Solicitar 5 tarjetas de crédito diferentes para obtener la mejor",
              "Obtener una tarjeta de crédito garantizada con su depósito de $500"
            ],
            explanation: "¡Perfecto! Una tarjeta garantizada usa su depósito como garantía y reporta a las agencias de crédito. Solicitar múltiples tarjetas a la vez puede dañar su score."
          },
          hi: {
            scenarioTitle: "Maria ki pehli credit card",
            scenarioIcon: "person",
            scenario: "Maria abhi Philippines se ayi hai. Uske paas koi credit history nahi hai aur woh 6 months mein car kharidna chahti hai. Uske paas $500 security deposit ke liye saved hain.",
            question: "Maria ko pehle kya karna chahiye?",
            options: [
              "Best card lene ke liye 5 alag-alag credit cards apply karna",
              "Apne $500 deposit ke saath secured credit card lena"
            ],
            explanation: "Perfect! Secured card uske deposit ko collateral ke roop mein use karta hai aur credit bureaus ko report karta hai. Ek saath multiple cards apply karne se uski score hurt ho sakti hai."
          },
          tl: {
            scenarioTitle: "Unang Credit Card ni Maria",
            scenarioIcon: "person",
            scenario: "Maria ay bagong dating galing sa Philippines. Wala siyang credit history at gusto niyang bumili ng kotse sa 6 na buwan. May $500 siyang nai-save para sa security deposit.",
            question: "Ano ang dapat gawin ni Maria muna?",
            options: [
              "Mag-apply ng 5 magkaibang credit cards para makuha ang pinakamabuti",
              "Kumuha ng secured credit card gamit ang kanyang $500 deposit"
            ],
            explanation: "Perfect! Ang secured card ay gumagamit ng kanyang deposit bilang collateral at nagrereport sa credit bureaus. Ang pag-apply ng maraming cards nang sabay ay maaaring makasira sa kanyang score."
          },
          zh: {
            scenarioTitle: "Maria's First Credit Card",
            scenarioIcon: "person",
            scenario: "Maria just arrived from Philippines. She has no credit history and wants to buy a car in 6 months. She has $500 saved for a security deposit.",
            question: "What should Maria do first?",
            options: [
              "Apply for 5 different credit cards to get the best one",
              "Get a secured credit card with her $500 deposit"
            ],
            explanation: "Perfect! A secured card uses her deposit as collateral and reports to credit bureaus. Applying for multiple cards at once can hurt her score."
          },
          ar: {
            scenarioTitle: "Maria's First Credit Card",
            scenarioIcon: "person",
            scenario: "Maria just arrived from Philippines. She has no credit history and wants to buy a car in 6 months. She has $500 saved for a security deposit.",
            question: "What should Maria do first?",
            options: [
              "Apply for 5 different credit cards to get the best one",
              "Get a secured credit card with her $500 deposit"
            ],
            explanation: "Perfect! A secured card uses her deposit as collateral and reports to credit bureaus. Applying for multiple cards at once can hurt her score."
          },
          fr: {
            scenarioTitle: "Maria's First Credit Card",
            scenarioIcon: "person",
            scenario: "Maria just arrived from Philippines. She has no credit history and wants to buy a car in 6 months. She has $500 saved for a security deposit.",
            question: "What should Maria do first?",
            options: [
              "Apply for 5 different credit cards to get the best one",
              "Get a secured credit card with her $500 deposit"
            ],
            explanation: "Perfect! A secured card uses her deposit as collateral and reports to credit bureaus. Applying for multiple cards at once can hurt her score."
          },
          pa: {
            scenarioTitle: "Maria di pehli credit card",
            scenarioIcon: "person",
            scenario: "Maria Philippines to aayi hai. Usde kol koi credit history nahi hai te oh 6 months vich car kharidna chahidi hai. Usde kol $500 security deposit lai saved ne.",
            question: "Maria pehlon ki karna chahidi hai?",
            options: [
              "Best card lai 5 v-vartaman credit cards apply karna",
              "Aapde $500 deposit naal secured credit card lena"
            ],
            explanation: "Perfect! Secured card usde deposit nu collateral valle use karda hai te credit bureaus nu report karda hai. Ek naal multiple cards apply karne naal usdi score hurt ho sakti hai."
          }
        }
      },
      {
        type: "summary",
        content: {
          en: {
            takeaways: [
              "Credit scores range from 300-850 and show how responsible you are with money",
              "Payment history is 35% of your score - always pay bills on time",
              "Start with a secured credit card if you have no credit history",
              "Keep credit utilization below 30% to maintain good scores",
              "Building good credit takes 6-12 months of consistent responsible habits"
            ]
          },
          es: {
            takeaways: [
              "Los scores de crédito van de 300-850 y muestran qué tan responsable eres con el dinero",
              "El historial de pagos es 35% de tu score - siempre paga las facturas a tiempo",
              "Comienza con una tarjeta de crédito garantizada si no tienes historial de crédito",
              "Mantén la utilización de crédito por debajo del 30% para mantener buenos scores",
              "Construir buen crédito toma 6-12 meses de hábitos responsables consistentes"
            ]
          },
          hi: {
            takeaways: [
              "Credit scores 300-850 ke beech hote hain aur dikate hain ki aap paise ke saath kitne responsible hain",
              "Payment history aapke score ka 35% hai - hamesha bills on time pay karo",
              "Agar aapke paas koi credit history nahi hai to secured credit card se shuru karo",
              "Good scores banane ke liye credit utilization ko 30% se kam rakho",
              "Good credit banane mein 6-12 months lagte hain consistent responsible habits ka"
            ]
          },
          tl: {
            takeaways: [
              "Ang credit scores ay mula 300-850 at nagpapakita kung gaano ka responsible sa pera",
              "Ang payment history ay 35% ng iyong score - palagi kang magbayad ng bills sa tamang oras",
              "Magsimula sa secured credit card kung wala kang credit history",
              "Panatilihin ang credit utilization sa ibaba ng 30% para magmaintain ng magagandang scores",
              "Ang pagbuo ng magandang credit ay tumatagal ng 6-12 na buwan ng consistent na responsible na mga kaugalian"
            ]
          },
          zh: {
            takeaways: [
              "Credit scores range from 300-850 and show how responsible you are with money",
              "Payment history is 35% of your score - always pay bills on time",
              "Start with a secured credit card if you have no credit history",
              "Keep credit utilization below 30% to maintain good scores",
              "Building good credit takes 6-12 months of consistent responsible habits"
            ]
          },
          ar: {
            takeaways: [
              "Credit scores range from 300-850 and show how responsible you are with money",
              "Payment history is 35% of your score - always pay bills on time",
              "Start with a secured credit card if you have no credit history",
              "Keep credit utilization below 30% to maintain good scores",
              "Building good credit takes 6-12 months of consistent responsible habits"
            ]
          },
          fr: {
            takeaways: [
              "Credit scores range from 300-850 and show how responsible you are with money",
              "Payment history is 35% of your score - always pay bills on time",
              "Start with a secured credit card if you have no credit history",
              "Keep credit utilization below 30% to maintain good scores",
              "Building good credit takes 6-12 months of consistent responsible habits"
            ]
          },
          pa: {
            takeaways: [
              "Credit scores 300-850 de vich hinde ne te dikande hain ki tu paise naal kitne responsible han",
              "Payment history tuhade score da 35% hai - hamesha time te pay karo",
              "Jade tuhade kol koi credit history nahi hai ta secured credit card to shuru karo",
              "Good scores banane lai credit utilization nu 30% toh rakho",
              "Good credit banane vich 6-12 months lagde ne consistent responsible habits da"
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
      hi: "नए आने वालों के लिए बैंकिंग बेसिक्स",
      tl: "Mga pangunahin sa pagbabang para mga bagong dating",
      zh: "新移民银行基础知识",
      ar: "أساسيات البنوك للمهاجرين الجدد",
      fr: "Notions de base en banque pour les nouveaux arrivants",
      pa: "ਬੈਂਕ ਬੈਂਗ ਦੀਦੀ ਸ਼ਰਤ ਬਣਾਂ"
    },
    subtitle: {
      en: "What to bring and which account type to start with",
      es: "Qué llevar y con qué tipo de cuenta empezar",
      hi: "क्या लाना है और किस खाते प्रकार से शुरू करना है",
      tl: "Ano ang dapat dalhin at kung anong uri ng account ang magsisimula",
      zh: "需要带什么以及从哪种账户类型开始",
      ar: "ماذا يجب إحضاره وأي نوع من الحسابات تبدأ به؟",
      fr: "Quoi apporter et quel type de compte commencer ?"
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
              "A chequing account is for everyday spending — paying rent, buying groceries, receiving your salary.",
              "A savings account is for money you want to grow — it earns interest and should not be touched regularly.",
              "Most people use both: chequing for daily life and savings to build wealth over time."
            ]
          },
          es: {
            headline: "Cuentas de cheques vs cuentas de ahorros",
            illustration: "bank",
            explanation: [
              "Una cuenta de cheques es para gastos diarios — pagar alquiler, comprar comestibles, recibir tu salario.",
              "Una cuenta de ahorros es para dinero que quieres hacer crecer — gana interés y no debe tocarse regularmente.",
              "La mayoría de las personas usan ambas: cheques para la vida diaria y ahorros para construir riqueza con el tiempo."
            ]
          },
          hi: {
            headline: "चेकिंग बनाम बचत खाते",
            illustration: "bank",
            explanation: [
              "चेकिंग खाता रोज़मर्रा के खर्चों के लिए है — किराया देना, किराने की खरीदारी करना, वेतन प्राप्त करना।",
              "बचत खाता उस पैसे के लिए है जो आप बढ़ाना चाहते हैं — यह ब्याज अर्जित करता है और नियमित रूप से छुआ नहीं जाना चाहिए।",
              "अधिकांश लोग दोनों का उपयोग करते हैं: रोज़मर्रा के जीवन के लिए चेकिंग और समय के साथ धन बनाने के लिए बचत।"
            ]
          },
          tl: {
            headline: "Chequing vs Savings account",
            illustration: "bank",
            explanation: [
              "Ang chequing account ay para sa pang-araw-araw na gastusin — pagbayad ng rent, pamimili ng groceries, pag-tanggap ng sahod.",
              "Ang savings account ay para sa pera na gusto mong lumaki — kumikita ito ng interes at hindi dapat pinag-ipunan nang regular.",
              "Karamihan ng mga tao ay gumagamit ng pareho: chequing para sa pang-araw-araw na buhay at savings upang bumuo ng yaman sa loob ng panahon."
            ]
          },
          zh: {
            headline: "支票账户 vs 储蓄账户",
            illustration: "bank",
            explanation: [
              "支票账户用于日常开支 — 支付房租、购买杂货、接收工资。",
              "储蓄账户用于您想要增长的资金 — 它赚取利息，不应该定期使用。",
              "大多数人同时使用两者：用支票账户处理日常生活，用储蓄账户随时间建立财富。"
            ]
          },
          ar: {
            headline: "حساب الشيكات مقابل حساب التوفير",
            illustration: "bank",
            explanation: [
              "حساب الشيكات مخصص للنفقات اليومية — دفع الإيجار وشراء البقالة واستقبال الراتب.",
              "حساب التوفير مخصص للأموال التي تريد أن تنمو — فهو يكسب فائدة ولا ينبغي أن يتم التعامل معه بانتظام.",
              "يستخدم معظم الناس كليهما: شيكات للحياة اليومية وتوفير لبناء الثروة بمرور الوقت."
            ]
          },
          fr: {
            headline: "Compte courant vs compte d'épargne",
            illustration: "bank",
            explanation: [
              "Un compte courant est pour les dépenses quotidiennes — payer le loyer, faire l'épicerie, recevoir votre salaire.",
              "Un compte d'épargne est pour l'argent que vous voulez faire croître — il gagne des intérêts et ne doit pas être touché régulièrement.",
              "La plupart des gens utilisent les deux : courant pour la vie quotidienne et épargne pour construire la richesse au fil du temps."
            ]
          },
          pa: {
            headline: "چیکنگ بنام بچت کھاتے",
            illustration: "bank",
            explanation: [
              "چیکنگ کھاتہ روز مرہ کے اخراجات کے لیے ہے — کرائے کی ادائیگی، گروسریز کی خریداری، تنخواہ کی وصولی۔",
              "بچت کا کھاتہ اس رقم کے لیے ہے جو آپ بڑھانا چاہتے ہیں — یہ سود حاصل کرتا ہے اور اسے باقاعدگی سے نہیں چھوا جانا چاہیے۔",
              "زیادہ تر لوگ دونوں استعمال کرتے ہیں: روز مرہ کی زندگی کے لیے چیکنگ اور وقت کے ساتھ دولت بنانے کے لیے بچت۔"
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
            explanation: "Correct! Your salary should go into chequing for daily expenses, then transfer what you want to save."
          },
          es: {
            question: "¿En qué cuenta debe depositarse tu salario?",
            options: ["Cuenta de ahorros", "Cuenta de cheques"],
            explanation: "¡Correcto! Tu salario debe ir a la cuenta de cheques para gastos diarios, luego transfiere lo que quieres ahorrar."
          },
          hi: {
            question: "आपका वेतन किस खाते में जमा होना चाहिए?",
            options: ["बचत खाता", "चेकिंग खाता"],
            explanation: "सही! आपका वेतन दैनिक खर्चों के लिए चेकिंग में जाना चाहिए, फिर वह स्थानांतरित करें जो आप बचाना चाहते हैं।"
          },
          tl: {
            question: "Aling account ang dapat i-deposit ang iyong sahod?",
            options: ["Savings account", "Chequing account"],
            explanation: "Tama! Ang iyong sahod ay dapat sumama sa chequing para sa pang-araw-araw na gastusin, pagkatapos ay ilipat kung ano ang gusto mong i-save."
          },
          zh: {
            question: "您的工资应该存入哪个账户？",
            options: ["储蓄账户", "支票账户"],
            explanation: "正确！您的工资应该进入支票账户用于日常开支，然后转移您想要保存的金额。"
          },
          ar: {
            question: "في أي حساب يجب إيداع راتبك؟",
            options: ["حساب التوفير", "حساب الشيكات"],
            explanation: "صحيح! يجب أن يذهب راتبك إلى حساب الشيكات لنفقات يومية، ثم نقل ما تريد توفيره."
          },
          fr: {
            question: "Sur quel compte votre salaire doit-il être déposé?",
            options: ["Compte d'épargne", "Compte courant"],
            explanation: "Correct! Votre salaire doit aller au compte courant pour les dépenses quotidiennes, puis transférez ce que vous voulez économiser."
          },
          pa: {
            question: "آپ کی تنخواہ کس کھاتے میں جمع ہونی چاہیے؟",
            options: ["بچت کا کھاتہ", "چیکنگ کھاتہ"],
            explanation: "صحیح! آپ کی تنخواہ روز مرہ کے اخراجات کے لیے چیکنگ میں جانی چاہیے، پھر وہ منتقل کریں جو آپ بچانا چاہتے ہیں۔"
          }
        }
      },
      {
        type: "realWorld",
        correctIndex: 1,
        content: {
          en: {
            scenarioTitle: "Ahmed's payday plan",
            scenarioIcon: "person",
            scenario: "Ahmed gets paid $2,000. He wants to save $400. What should he do?",
            question: "Which strategy is best?",
            options: [
              "Keep all $2,000 in chequing so it's easier to access",
              "Transfer $400 to savings right away on payday"
            ],
            explanation: "Perfect! Pay yourself first — move savings before you can spend it. This is called 'pay yourself first' and helps you build wealth automatically."
          },
          es: {
            scenarioTitle: "Plan de día de pago de Ahmed",
            scenarioIcon: "person",
            scenario: "Ahmed recibe $2,000. Quiere ahorrar $400. ¿Qué debería hacer?",
            question: "¿Cuál estrategia es mejor?",
            options: [
              "Mantener todo los $2,000 en cheques para que sea más fácil acceder",
              "Transferir $400 a ahorros de inmediato en día de pago"
            ],
            explanation: "¡Perfecto! Paga te a ti mismo primero — mueve ahorros antes de que puedas gastarlo. Esto se llama 'pago yourself first' y te ayuda a construir riqueza automáticamente."
          },
          hi: {
            scenarioTitle: "अहमद की तनख्वाह योजना",
            scenarioIcon: "person",
            scenario: "अहमद को $2,000 मिलता है। वह $400 बचाना चाहता है। उसे क्या करना चाहिए?",
            question: "कौन सी रणनीति सबसे अच्छी है?",
            options: [
              "सभी $2,000 चेकिंग में रखें ताकि एक्सेस करना आसान हो",
              "तनख्वाह के दिन तुरंत बचत में $400 स्थानांतरित करें"
            ],
            explanation: "बिल्कुल! पहले अपने आप को भुगतान करें — खर्च करने से पहले बचत को स्थानांतरित करें। इसे 'pay yourself first' कहा जाता है और आपको स्वचालित रूप से धन बनाने में मदद करता है।"
          },
          tl: {
            scenarioTitle: "Plano ng payday ni Ahmed",
            scenarioIcon: "person",
            scenario: "Si Ahmed ay nakakatanggap ng $2,000. Gusto niyang makatipid ng $400. Ano ang dapat gawin niya?",
            question: "Aling estratehiya ang pinakamahusay?",
            options: [
              "Panatilihin lahat ng $2,000 sa cheque upang mas madaling ma-access",
              "Ilipat $400 sa savings kaagad sa araw ng payday"
            ],
            explanation: "Perfect! Bayaran ang iyong sarili muna — ilipat ang savings bago mo magastos. Ito ay tinatawag na 'pay yourself first' at tumutulong sa iyo na bumuo ng yaman ng awtomatiko."
          },
          zh: {
            scenarioTitle: "艾哈迈德的发薪日计划",
            scenarioIcon: "person",
            scenario: "艾哈迈德获得$2,000。他想存$400。他应该怎么做？",
            question: "哪种策略最好？",
            options: [
              "将全部$2,000保留在支票账户中以便更容易获取",
              "在发薪日立即将$400转入储蓄"
            ],
            explanation: "完美！先支付自己 — 在你能花钱之前转移储蓄。这称为\"先支付自己\"，可以帮助您自动建立财富。"
          },
          ar: {
            scenarioTitle: "خطة يوم الدفع لأحمد",
            scenarioIcon: "person",
            scenario: "أحمد يحصل على 2000 دولار. يريد توفير 400 دولار. ماذا يجب أن يفعل؟",
            question: "أي استراتيجية هي الأفضل؟",
            options: [
              "احتفظ بكل 2000 دولار في الشيكات لتسهيل الوصول إليها",
              "نقل 400 دولار إلى التوفير مباشرة في يوم الدفع"
            ],
            explanation: "مثالي! ادفع لنفسك أولاً — نقل التوفير قبل أن تتمكن من إنفاقه. يُطلق على هذا 'دفع نفسك أولاً' ويساعدك على بناء الثروة تلقائياً."
          },
          fr: {
            scenarioTitle: "Plan de jour de paie d'Ahmed",
            scenarioIcon: "person",
            scenario: "Ahmed reçoit 2000 dollars. Il veut économiser 400 dollars. Que devrait-il faire?",
            question: "Quelle stratégie est la meilleure?",
            options: [
              "Conservez les 2000 dollars complets en chèques pour plus facile d'accès",
              "Transférer 400 dollars à l'épargne immédiatement le jour de la paie"
            ],
            explanation: "Parfait! Payez-vous d'abord — transférez les économies avant de pouvoir les dépenser. C'est ce qu'on appelle 'se payer d'abord' et cela vous aide à construire la richesse automatiquement."
          },
          pa: {
            scenarioTitle: "احمد کے تنخواہ کا منصوبہ",
            scenarioIcon: "person",
            scenario: "احمد کو $2,000 ملتے ہیں۔ وہ $400 بچانا چاہتا ہے۔ اسے کیا کرنا چاہیے؟",
            question: "کون سی حکمت عملی سب سے بہتر ہے؟",
            options: [
              "تمام $2,000 کو چیکوں میں رکھیں تاکہ رسائی آسان ہو",
              "تنخواہ کے دن فوری طور پر $400 بچت میں منتقل کریں"
            ],
            explanation: "بہترین! پہلے اپنے آپ کو ادائیگی کریں — خرچ کرنے سے پہلے بچت منتقل کریں۔ اسے 'pay yourself first' کہا جاتا ہے اور یہ آپ کو خودکار طریقے سے دولت بنانے میں مدد کرتا ہے۔"
          }
        }
      },
      {
        type: "fillBlank",
        correctIndex: 1,
        content: {
          en: {
            sentence: "Online banks like EQ Bank often have ___ monthly fees than big traditional banks",
            options: ["higher", "lower", "same"],
            explanation: "Lower is correct! Online banks have fewer costs because they don't maintain physical branches."
          },
          es: {
            sentence: "Los bancos en línea como EQ Bank a menudo tienen tarifas mensuales ___ que los grandes bancos tradicionales",
            options: ["más altas", "más bajas", "iguales"],
            explanation: "¡Más bajas es correcto! Los bancos en línea tienen menores costos porque no mantienen sucursales físicas."
          },
          hi: {
            sentence: "EQ Bank जैसे ऑनलाइन बैंकों में अक्सर बड़े पारंपरिक बैंकों की तुलना में ___ मासिक शुल्क होते हैं",
            options: ["अधिक", "कम", "समान"],
            explanation: "कम सही है! ऑनलाइन बैंकों में कम लागत होती है क्योंकि वे भौतिक शाखाएं नहीं रखते हैं।"
          },
          tl: {
            sentence: "Ang mga online bank tulad ng EQ Bank ay madalas na may ___ buwanang bayad kaysa sa malalaking tradisyonal na bangko",
            options: ["mas mataas", "mas mababa", "pareho"],
            explanation: "Mas mababa ang tama! Ang mga online bank ay may mas kaunting gastos dahil hindi nila pinapanatili ang pisikal na mga sangay."
          },
          zh: {
            sentence: "像EQ Bank这样的在线银行通常比大型传统银行有___ 月费",
            options: ["更高", "更低", "相同"],
            explanation: "更低是正确的！在线银行的成本较低，因为它们不维持实体分支机构。"
          },
          ar: {
            sentence: "البنوك على الإنترنت مثل EQ Bank غالباً ما تكون رسوم شهرية ___ أكبر من البنوك التقليدية",
            options: ["أعلى", "أقل", "نفس"],
            explanation: "أقل هو الصحيح! البنوك على الإنترنت لديها تكاليف أقل لأنها لا تحتفظ بفروع فعلية."
          },
          fr: {
            sentence: "Les banques en ligne comme EQ Bank ont souvent des frais mensuels ___ plus grands que les grandes banques traditionnelles",
            options: ["plus élevés", "plus bas", "identiques"],
            explanation: "Plus bas est correct! Les banques en ligne ont des coûts inférieurs parce qu'elles ne maintiennent pas de succursales physiques."
          },
          pa: {
            sentence: "EQ Bank جیسے آن لائن بینکوں میں اکثر بڑے روایتی بینکوں کے مقابلے ___ ماہانہ فیس ہوتی ہے",
            options: ["زیادہ", "کم", "برابر"],
            explanation: "کم صحیح ہے! آن لائن بینکوں میں کم لاگت ہے کیونکہ وہ جسمانی شاخیں نہیں رکھتے ہیں۔"
          }
        }
      },
      {
        type: "summary",
        content: {
          en: {
            takeaways: [
              "Chequing for daily spending, savings for growing money",
              "Online banks have lower fees than traditional banks",
              "Always ask about newcomer account specials",
              "Pay yourself first — move savings before spending",
              "CDIC insures up to $100,000 in case of bank failure"
            ]
          },
          es: {
            takeaways: [
              "Chequeos para gastos diarios, ahorros para crecer dinero",
              "Los bancos en línea tienen tarifas más bajas que los bancos tradicionales",
              "Siempre pregunta sobre especiales de cuentas para recién llegados",
              "Paga a ti mismo primero — mueve ahorros antes de gastar",
              "CDIC asegura hasta $100,000 en caso de quiebra bancaria"
            ]
          },
          hi: {
            takeaways: [
              "दैनिक खर्च के लिए चेकिंग, पैसे बढ़ाने के लिए बचत",
              "ऑनलाइन बैंकों में पारंपरिक बैंकों की तुलना में कम शुल्क होते हैं",
              "हमेशा नए आने वालों के खातों के बारे में पूछें",
              "पहले अपने आप को भुगतान करें — खर्च करने से पहले बचत को स्थानांतरित करें",
              "CDIC बैंक विफलता की स्थिति में $100,000 तक का बीमा करता है"
            ]
          },
          tl: {
            takeaways: [
              "Chequing para pang-araw-araw na gastusin, savings para sa paglaki ng pera",
              "Ang mga online bank ay may mas mababang bayad kaysa sa tradisyonal na bangko",
              "Palaging magtanong tungkol sa mga espesyal na account para sa mga bagong dating",
              "Bayaran ang iyong sarili muna — ilipat ang savings bago magastos",
              "Ang CDIC ay nag-aassure ng hanggang $100,000 sa kalagayan ng pagkabigo ng bangko"
            ]
          },
          zh: {
            takeaways: [
              "支票账户用于日常开支，储蓄用于增加资金",
              "在线银行的费用低于传统银行",
              "始终询问新移民账户特价",
              "先支付自己 — 在花钱前转移储蓄",
              "CDIC在银行倒闭情况下保险高达$100,000"
            ]
          },
          ar: {
            takeaways: [
              "الشيكات للنفقات اليومية، التوفير لتنمية الأموال",
              "البنوك على الإنترنت لديها رسوم أقل من البنوك التقليدية",
              "دائما اسأل عن خصوصيات الحساب للمهاجرين الجدد",
              "ادفع لنفسك أولاً — نقل التوفير قبل الإنفاق",
              "CDIC تؤمن حتى 100000 دولار في حالة فشل البنك"
            ]
          },
          fr: {
            takeaways: [
              "Chèques pour dépenses quotidiennes, épargne pour croissance monétaire",
              "Les banques en ligne ont des frais moins élevés que les banques traditionnelles",
              "Toujours demander des spéciales de compte pour les nouveaux arrivants",
              "Payez-vous d'abord — transférez l'épargne avant de dépenser",
              "CDIC assure jusqu'à 100000 dollars en cas de faillite bancaire"
            ]
          },
          pa: {
            takeaways: [
              "روزمرہ کے اخراجات کے لیے چیکنگ، پیسہ بڑھانے کے لیے بچت",
              "آن لائن بینکوں میں روایتی بینکوں کے مقابلے کم فیس ہوتی ہے",
              "ہمیشہ نئے آنے والوں کے کھاتوں کے خصوصیات کے بارے میں پوچھیں",
              "پہلے اپنے آپ کو ادائیگی کریں — خرچ کرنے سے پہلے بچت منتقل کریں",
              "CDIC بینک کی ناکامی کی صورت میں $100,000 تک کا بیمہ کرتا ہے"
            ]
          }
        }
      }
    ]
  },
  {
    id: "housing-fundamentals",
    isPremium: true,
    title: {
      en: "Housing fundamentals for newcomers",
      es: "Fundamentos de vivienda para recién llegados",
      hi: "नए आने वालों के लिए आवास मूल बातें",
      tl: "Mga pangunahin sa pabahay para mga bagong dating",
      zh: "新移民住房基础知识",
      ar: "أساسيات السكن للمهاجرين الجدد",
      fr: "Notions de base en logement pour les nouveaux arrivants",
      pa: "ਆਵਾਸ ਦੀਦੀ ਸ਼ਰਤ ਬਣਾਂ"
    },
    subtitle: {
      en: "Understanding rental agreements and tenant rights",
      es: "Entendiendo contratos de alquiler y derechos de inquilinos",
      hi: "किराया समझौते और किरायेदार अधिकारों को समझना",
      tl: "Pag-unawa sa mga kasunduanan at karapatan sa mamamahal",
      zh: "理解租赁协议和租户权利",
      ar: "فهم اتفاقيات الإيجار وحقوق المستأجر",
      fr: "Comprendre les baux de location et les droits des locataires"
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
              "As a newcomer you may not have all of these yet — but there are ways around it.",
              "Being prepared with documents and a guarantor can open doors even without Canadian credit history."
            ]
          },
          es: {
            headline: "Qué verifican los propietarios antes de alquilarte",
            illustration: "home",
            explanation: [
              "La mayoría de los propietarios en Canadá verificarán tu puntuación de crédito, pedirán comprobante de ingresos y querrán referencias.",
              "Como recién llegado es posible que no tengas todo esto todavía — pero hay formas de solucionarlo.",
              "Estar preparado con documentos y un garante puede abrir puertas incluso sin historial de crédito canadiense."
            ]
          },
          hi: {
            headline: "मकान मालिक किराये पर लेने से पहले क्या जांच करते हैं",
            illustration: "home",
            explanation: [
              "कनाडा में अधिकांश मकान मालिक आपके क्रेडिट स्कोर की जांच करेंगे, आय का प्रमाण माँगेंगे, और संदर्भ चाहेंगे।",
              "एक नए आने वाले के रूप में आपके पास शायद यह सब अभी तक नहीं है — लेकिन इसका समाधान करने के तरीके हैं।",
              "दस्तावेजों और गारंटर के साथ तैयार होना कनाडाई क्रेडिट इतिहास के बिना भी दरवाजे खोल सकता है।"
            ]
          },
          tl: {
            headline: "Kung ano ang tinitingnan ng mga landlord bago kang mag-alok",
            illustration: "home",
            explanation: [
              "Karamihan ng mga landlord sa Canada ay susuriin ang iyong credit score, hihilingin ang patunay ng kita, at gustong mayroon kang mga reference.",
              "Bilang bagong dating maaaring wala ka pa sa lahat ng ito — pero may mga paraan upang malutas ito.",
              "Pagiging handa sa mga dokumento at isang guarantor ay maaaring magbukas ng mga pintuan kahit walang Canadian credit history."
            ]
          },
          zh: {
            headline: "房东在租给你之前会检查什么",
            illustration: "home",
            explanation: [
              "加拿大的大多数房东会检查您的信用评分，要求收入证明并需要推荐信。",
              "作为新来者，您可能还没有所有这些信息，但有解决方法。",
              "准备好文件和担保人即使没有加拿大信用历史也可以打开大门。"
            ]
          },
          ar: {
            headline: "ما الذي يتحقق منه الملاك قبل تأجيرك",
            illustration: "home",
            explanation: [
              "معظم الملاك في كندا سيتحققون من درجة الائتمان الخاصة بك وطلب إثبات الدخل وسيريدون مراجع.",
              "كمهاجر جديد قد لا يكون لديك كل هذا حتى الآن — لكن هناك طرقًا للحل.",
              "إن كونك مستعدًا بالمستندات والضامن يمكنه فتح الأبواب حتى بدون سجل ائتمان كندي."
            ]
          },
          fr: {
            headline: "Ce que les propriétaires vérifient avant de vous louer",
            illustration: "home",
            explanation: [
              "La plupart des propriétaires au Canada vérifieront votre pointage de crédit, demanderont la preuve de revenu et voudront des références.",
              "En tant que nouveau venant vous n'avez peut-être pas tout cela pour le moment — mais il y a des façons de résoudre cela.",
              "Être préparé avec des documents et un garant peut ouvrir des portes même sans antécédents de crédit canadien."
            ]
          },
          pa: {
            headline: "ਮਕਾਨ ਮਾਲਕ ਤੁਹਾਨੂੰ ਕਿਰਾਏ 'ਤੇ ਦੇਣ ਤੋਂ ਪਹਿਲਾਂ ਕੀ ਜਾਂਚਦੇ ਹਨ",
            illustration: "home",
            explanation: [
              "ਕੈਨੇਡਾ ਵਿੱਚ ਅਧਿਕਾਂਸ਼ ਮਕਾਨ ਮਾਲਕ ਤੁਹਾਡੇ ਕ੍ਰੈਡਿਟ ਸਕੋਰ ਦੀ ਜਾਂਚ ਕਰਨਗੇ, ਆਮਦਨ ਦਾ ਸਬੂਤ ਮੰਗਣਗੇ, ਅਤੇ ਸੰਦਰਭ ਚਾਹੋ ਗੇ।",
              "ਇੱਕ ਨਵੇਂ ਆਉਣ ਵਾਲੇ ਵਜੋਂ ਤੁਹਾਡੇ ਕੋਲ ਸ਼ਾਇਦ ਇਹ ਸਭ ਅਭੀ ਨਹੀਂ ਹੈ — ਪਰ ਇਸ ਨੂੰ ਹੱਲ ਕਰਨ ਦੇ ਤਰੀਕੇ ਹਨ।",
              "ਦਸਤਾਵੇਜ਼ਾਂ ਅਤੇ ਗੁਆਂਢ ਮਿੱਤਰ ਦੇ ਨਾਲ ਤਿਆਰ ਹੋਣਾ ਕੈਨੇਡੀਅਨ ਕ੍ਰੈਡਿਟ ਇਤਿਹਾਸ ਦੇ ਬਿਨਾ ਵੀ ਦਰਵਾਜ਼ੇ ਖੋਲ ਸਕਦਾ ਹੈ।"
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
            explanation: "Correct! One month's rent is the standard security deposit across Canada and the US."
          },
          es: {
            question: "Un depósito de seguridad en Canadá es típicamente:",
            options: ["Un mes de alquiler", "Tres meses de alquiler"],
            explanation: "¡Correcto! Un mes de alquiler es el depósito de seguridad estándar en Canadá y EE. UU."
          },
          hi: {
            question: "कनाडा में एक सुरक्षा जमा आमतौर पर है:",
            options: ["एक महीने का किराया", "तीन महीने का किराया"],
            explanation: "सही! एक महीने का किराया कनाडा और यूएस में मानक सुरक्षा जमा है।"
          },
          tl: {
            question: "Ang isang security deposit sa Canada ay karaniwang:",
            options: ["Isang buwan ng alquiler", "Tatlong buwang alquiler"],
            explanation: "Tama! Ang isang buwan ng alquiler ay ang karaniwang security deposit sa Canada at US."
          },
          zh: {
            question: "加拿大的安全押金通常是：",
            options: ["一个月的租金", "三个月的租金"],
            explanation: "正确！一个月的租金是加拿大和美国的标准安全押金。"
          },
          ar: {
            question: "عادة ما يكون الإيداع الأمني في كندا:",
            options: ["شهر واحد من الإيجار", "ثلاثة أشهر من الإيجار"],
            explanation: "صحيح! شهر واحد من الإيجار هو الإيداع الأمني القياسي في كندا والولايات المتحدة."
          },
          fr: {
            question: "Un dépôt de garantie au Canada est généralement:",
            options: ["Un mois de loyer", "Trois mois de loyer"],
            explanation: "Correct! Un mois de loyer est le dépôt de garantie standard au Canada et aux É.-U."
          },
          pa: {
            question: "ਕੈਨੇਡਾ ਵਿੱਚ ਇੱਕ ਸੁਰੱਖਿਆ ਜਮਾ ਆਮ ਤੌਰ 'ਤੇ ਹੈ:",
            options: ["ਇੱਕ ਮਹੀਨੇ ਦਾ ਕਿਰਾਇਆ", "ਤਿੰਨ ਮਹੀਨੇ ਦਾ ਕਿਰਾਇਆ"],
            explanation: "ਸਹੀ! ਇੱਕ ਮਹੀਨੇ ਦਾ ਕਿਰਾਇਆ ਕੈਨੇਡਾ ਅਤੇ ਯੂਐਸ ਵਿੱਚ ਮਾਨਕ ਸੁਰੱਖਿਆ ਜਮਾ ਹੈ।"
          }
        }
      },
      {
        type: "realWorld",
        correctIndex: 1,
        content: {
          en: {
            scenarioTitle: "Carlos's housing challenge",
            scenarioIcon: "person",
            scenario: "Carlos has no Canadian credit history. A landlord asks for a credit check. What can Carlos offer?",
            question: "What is his best option?",
            options: [
              "Nothing — he cannot rent without credit",
              "First and last month rent plus a reference letter from employer"
            ],
            explanation: "Perfect! A strong guarantor, first and last month rent, and employer reference can convince a landlord to take a chance on you."
          },
          es: {
            scenarioTitle: "Desafío de vivienda de Carlos",
            scenarioIcon: "person",
            scenario: "Carlos no tiene historial de crédito canadiense. Un propietario le pide una verificación de crédito. ¿Qué puede ofrecer Carlos?",
            question: "¿Cuál es su mejor opción?",
            options: [
              "Nada — no puede alquilar sin crédito",
              "Primer y último mes de alquiler más una carta de referencia del empleador"
            ],
            explanation: "¡Perfecto! Un fuerte garante, primer y último mes de alquiler, y referencia del empleador pueden convencer a un propietario de arriesgarse contigo."
          },
          hi: {
            scenarioTitle: "कार्लोस की आवास चुनौती",
            scenarioIcon: "person",
            scenario: "कार्लोस के पास कनाडाई क्रेडिट इतिहास नहीं है। एक मकान मालिक क्रेडिट जांच माँगता है। कार्लोस क्या प्रस्ताव दे सकता है?",
            question: "उसका सबसे अच्छा विकल्प क्या है?",
            options: [
              "कुछ नहीं — वह क्रेडिट के बिना किराया नहीं दे सकता",
              "पहले और आखिरी महीने का किराया साथ ही नियोक्ता से संदर्भ पत्र"
            ],
            explanation: "बिल्कुल! एक मजबूत गारंटर, पहले और आखिरी महीने का किराया, और नियोक्ता संदर्भ मकान मालिक को आपके साथ जोखिम लेने के लिए राजी कर सकता है।"
          },
          tl: {
            scenarioTitle: "Hamon sa pabahay ni Carlos",
            scenarioIcon: "person",
            scenario: "Si Carlos ay wala sa Canadian credit history. Ang isang landlord ay humingi ng credit check. Ano ang maaaring mag-alok si Carlos?",
            question: "Alin ang kanyang pinakamahusay na opsyon?",
            options: [
              "Walang — hindi siya makakarent nang walang credit",
              "Unang at huling buwan ng alquiler plus isang reference letter mula sa employer"
            ],
            explanation: "Perfect! Ang isang malakas na guarantor, unang at huling buwan ng alquiler, at reference ng employer ay maaaring hikayatin ang isang landlord na magsugal sa iyo."
          },
          zh: {
            scenarioTitle: "卡洛斯的住房挑战",
            scenarioIcon: "person",
            scenario: "卡洛斯没有加拿大信用历史。房东要求进行信用检查。卡洛斯能提供什么？",
            question: "他最好的选择是什么？",
            options: [
              "什么都不能——没有信用就不能租住",
              "第一个月和最后一个月的租金加上雇主的推荐信"
            ],
            explanation: "完美！强有力的担保人、第一个月和最后一个月的租金以及雇主参考可以说服房东冒险选择您。"
          },
          ar: {
            scenarioTitle: "تحدي الإسكان لكارلوس",
            scenarioIcon: "person",
            scenario: "كارلوس ليس لديه سجل ائتماني كندي. يطلب المالك فحص الائتمان. ماذا يمكن أن يقدم كارلوس؟",
            question: "ما هو خياره الأفضل؟",
            options: [
              "لا شيء — لا يمكنه الإيجار بدون ائتمان",
              "الشهر الأول والأخير من الإيجار بالإضافة إلى رسالة مرجعية من صاحب العمل"
            ],
            explanation: "مثالي! يمكن لضامن قوي والشهر الأول والأخير من الإيجار والمراجع من صاحب العمل أن تقنع المالك بالمخاطرة بك."
          },
          fr: {
            scenarioTitle: "Le défi du logement de Carlos",
            scenarioIcon: "person",
            scenario: "Carlos n'a pas d'historique de crédit canadien. Un propriétaire demande une vérification de crédit. Que peut offrir Carlos?",
            question: "Quelle est sa meilleure option?",
            options: [
              "Rien — il ne peut pas louer sans crédit",
              "Premier et dernier mois de loyer plus une lettre de référence de l'employeur"
            ],
            explanation: "Parfait! Un garant solide, premier et dernier mois de loyer, et référence de l'employeur peuvent convaincre un propriétaire de prendre un risque sur vous."
          },
          pa: {
            scenarioTitle: "ਕਾਰਲੋਸ ਦੀ ਆਵਾਸ ਚੁਨੌਤੀ",
            scenarioIcon: "person",
            scenario: "ਕਾਰਲੋਸ ਕੋਲ ਕੈਨੇਡੀਅਨ ਕ੍ਰੈਡਿਟ ਇਤਿਹਾਸ ਨਹੀਂ ਹੈ। ਇੱਕ ਮਕਾਨ ਮਾਲਕ ਕ੍ਰੈਡਿਟ ਜਾਂਚ ਮੰਗਦਾ ਹੈ। ਕਾਰਲੋਸ ਕੀ ਪੇਸ਼ ਕਰ ਸਕਦਾ ਹੈ?",
            question: "ਉਸ ਦਾ ਸਭ ਤੋਂ ਵਧੀਆ ਵਿਕਲਪ ਕੀ ਹੈ?",
            options: [
              "ਕੁਝ ਨਹੀਂ — ਉਹ ਕ੍ਰੈਡਿਟ ਦੇ ਬਿਨਾ ਕਿਰਾਏ ਨਹੀਂ ਦੇ ਸਕਦਾ",
              "ਪਹਿਲਾ ਅਤੇ ਆਖਰੀ ਮਹੀਨੇ ਦਾ ਕਿਰਾਇਆ ਅਤੇ ਨਿਯੋਜਕ ਤੋਂ ਸੰਦਰਭ ਪੱਤਰ"
            ],
            explanation: "ਬਹੁਤ ਵਧੀਆ! ਇੱਕ ਮਜ਼ਬੂਤ ਗੁਆਂਢ ਮਿੱਤਰ, ਪਹਿਲਾ ਅਤੇ ਆਖਰੀ ਮਹੀਨੇ ਦਾ ਕਿਰਾਇਆ, ਅਤੇ ਨਿਯੋਜਕ ਸੰਦਰਭ ਇੱਕ ਮਕਾਨ ਮਾਲਕ ਨੂੰ ਤੁਹਾਡੇ ਉੱਪਰ ਜੋਖਮ ਲੈਣ ਲਈ ਸਮਝਾ ਸਕਦਾ ਹੈ।"
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
            explanation: "24 hours is correct! This is a basic tenant right — landlords cannot enter without proper notice."
          },
          es: {
            sentence: "Un propietario debe dar ___ aviso antes de entrar a tu apartamento",
            options: ["ninguno", "24 horas", "1 semana"],
            explanation: "¡24 horas es correcto! Este es un derecho básico del inquilino — los propietarios no pueden entrar sin aviso adecuado."
          },
          hi: {
            sentence: "एक मकान मालिक को आपके अपार्टमेंट में प्रवेश करने से पहले ___ सूचना देना होगी",
            options: ["कोई नहीं", "24 घंटे", "1 सप्ताह"],
            explanation: "24 घंटे सही है! यह एक बुनियादी किरायेदार अधिकार है — मकान मालिक बिना उचित सूचना के प्रवेश नहीं कर सकते हैं।"
          },
          tl: {
            sentence: "Ang isang landlord ay dapat magbigay ng ___ paalala bago pumasok sa iyong apartment",
            options: ["walang", "24 oras", "1 linggo"],
            explanation: "24 oras ang tama! Ito ay isang pangunahing karapatan ng tenant — ang mga landlord ay hindi maaaring pumasok nang walang tamang paalala."
          },
          zh: {
            sentence: "房东在进入您的公寓前必须提前 ___ 通知",
            options: ["无通知", "24小时", "1周"],
            explanation: "24小时是正确的！这是基本的承租人权利——房东不能在未经适当通知的情况下进入。"
          },
          ar: {
            sentence: "يجب على المالك إعطاء ___ إشعار قبل دخول شقتك",
            options: ["بدون إشعار", "24 ساعة", "1 أسبوع"],
            explanation: "24 ساعة صحيحة! هذا حق أساسي للمستأجر — لا يمكن للملاك الدخول بدون إشعار مناسب."
          },
          fr: {
            sentence: "Un propriétaire doit donner ___ avis avant d'entrer dans votre appartement",
            options: ["aucune", "24 heures", "1 semaine"],
            explanation: "24 heures c'est correct! C'est un droit fondamental du locataire — les propriétaires ne peuvent pas entrer sans préavis approprié."
          },
          pa: {
            sentence: "ਇੱਕ ਮਕਾਨ ਮਾਲਕ ਨੂੰ ਤੁਹਾਡੇ ਅਪਾਰਟਮੈਂਟ ਵਿੱਚ ਦਾਖਲ ਹੋਣ ਤੋਂ ਪਹਿਲਾਂ ___ ਸੂਚਨਾ ਦੇਣੀ ਪਵੇਗੀ",
            options: ["ਕੋਈ ਨਹੀਂ", "24 ਘੰਟੇ", "1 ਹਫਤਾ"],
            explanation: "24 ਘੰਟੇ ਸਹੀ ਹੈ! ਇਹ ਇੱਕ ਬਨਿਆਦੀ ਕਿਰਾਏਦਾਰ ਅਧਿਕਾਰ ਹੈ — ਮਕਾਨ ਮਾਲਕ ਵਿਨਾ ਢੁੱਕਵੀ ਸੂਚਨਾ ਦੇ ਅੰਦਰ ਨਹੀਂ ਜਾ ਸਕਦੇ ਹਨ।"
          }
        }
      },
      {
        type: "summary",
        content: {
          en: {
            takeaways: [
              "Landlords check credit and income",
              "Offer first and last if no credit",
              "Get everything in writing",
              "Know your rights as a tenant",
              "Landlord needs 24 hours notice to enter"
            ]
          },
          es: {
            takeaways: [
              "Los propietarios verifican crédito e ingresos",
              "Ofrece primer y último si no tienes crédito",
              "Obtén todo por escrito",
              "Conoce tus derechos como inquilino",
              "El propietario necesita 24 horas de aviso para entrar"
            ]
          },
          hi: {
            takeaways: [
              "मकान मालिक क्रेडिट और आय जांच करते हैं",
              "यदि क्रेडिट नहीं है तो पहला और आखिरी दें",
              "सब कुछ लिखित में प्राप्त करें",
              "किरायेदार के रूप में अपने अधिकार जानें",
              "मकान मालिक को प्रवेश के लिए 24 घंटे की सूचना चाहिए"
            ]
          },
          tl: {
            takeaways: [
              "Ang mga landlord ay nag-verify ng credit at income",
              "Mag-alok ng unang at huling kung walang credit",
              "Makakuha ng lahat sa sulat",
              "Alamin ang iyong mga karapatan bilang tenant",
              "Ang landlord ay kailangan ng 24 oras na paalala upang makapasok"
            ]
          },
          zh: {
            takeaways: [
              "房东检查信用和收入",
              "如果没有信用则提供第一个月和最后一个月",
              "获取书面形式的所有内容",
              "了解您作为租户的权利",
              "房东需要24小时通知才能进入"
            ]
          },
          ar: {
            takeaways: [
              "الملاك يتحققون من الائتمان والدخل",
              "عرض الأول والأخير إذا لم يكن لديك ائتمان",
              "احصل على كل شيء كتابة",
              "اعرف حقوقك كمستأجر",
              "يحتاج المالك إلى 24 ساعة إشعار للدخول"
            ]
          },
          fr: {
            takeaways: [
              "Les propriétaires vérifient le crédit et le revenu",
              "Offrez d'abord et dernier si pas de crédit",
              "Obtenez tout par écrit",
              "Connaître vos droits en tant que locataire",
              "Le propriétaire a besoin de 24 heures de préavis pour entrer"
            ]
          },
          pa: {
            takeaways: [
              "ਮਕਾਨ ਮਾਲਕ ਕ੍ਰੈਡਿਟ ਅਤੇ ਆਮਦਨ ਦੀ ਪੁਸ਼ਟੀ ਕਰਦੇ ਹਨ",
              "ਜੇ ਕ੍ਰੈਡਿਟ ਨਹੀਂ ਹੈ ਤਾਂ ਪਹਿਲਾ ਅਤੇ ਆਖਰੀ ਦਿਓ",
              "ਸਾਰੀ ਚੀਜ਼ ਲਿਖਤ ਰੂਪ ਵਿੱਚ ਪ੍ਰਾਪਤ ਕਰੋ",
              "ਕਿਰਾਏਦਾਰ ਵਜੋਂ ਆਪਣੇ ਅਧਿਕਾਰ ਜਾਣੋ",
              "ਮਕਾਨ ਮਾਲਕ ਨੂੰ ਦਾਖਲ ਹੋਣ ਲਈ 24 ਘੰਟੇ ਦੀ ਸੂਚਨਾ ਚਾਹੀਦੀ ਹੈ"
            ]
          }
        }
      }
    ]
  },
  {
    id: "tax-fundamentals",
    isPremium: false,
    title: {
      en: "Tax fundamentals for newcomers",
      es: "Fundamentos de impuestos para recién llegados",
      hi: "नए आने वालों के लिए कर के मूल बातें",
      tl: "Mga pangunahin sa buwis para mga bagong dating",
      zh: "新移民税务基础知识",
      ar: "أساسيات الضرائب للمهاجرين الجدد",
      fr: "Notions de base en fiscalité pour les nouveaux arrivants"
    },
    subtitle: {
      en: "Understanding tax obligations and maximizing returns",
      es: "Entendiendo obligaciones fiscales y maximizando devoluciones",
      hi: "कर दायिताओं को समझना महत्वपूर्ण है। कनाडा और यूएस में कर के मूल बातें एक जटिंग वर्ष है, जो कि आपकी आय और आपके परिवार वित्तीय जीविन्यों को प्रभावित करता है। दोनों के अनुसार फंदिशाया गई हैं: आयकर और आय (GST/HST), कनाडा वर्कर्स क्रेडिट (CCB), और विभिन्न लाभ (RRSP)।",
      tl: "Pag-unawa sa mga obligasyon sa buwis at pagpapalaki ng mga pagbabalik",
      zh: "了解税务义务和最大化退税",
      ar: "فهم الالتزامات الضريبية وتعظيم العائدات",
      fr: "Comprendre les obligations fiscales et maximiser les remboursements"
    },
    category: "Taxes",
    content: {
      en: [
        "Understanding taxes is crucial for financial success in Canada and the US. As a newcomer, you must file taxes even if you arrived partway through the year. Both countries have tax treaties with many countries to prevent double taxation, and numerous credits and deductions specifically for newcomers that can significantly reduce your tax burden or increase your refund.",
        "In Canada, the tax year runs from January 1 to December 31, and taxes are due by April 30 of the following year. In the US, the tax year is the calendar year, and taxes are typically due by April 15. These deadlines are strict—late filing can result in penalties and interest charges that accumulate quickly.",
        "Social Insurance Number (SIN) in Canada or Social Security Number (SSN) in the US is essential for tax filing. You should apply for these numbers immediately upon arrival. Without them, you may face higher tax withholding rates and miss out on government benefits and tax credits designed for newcomers.",
        "Both countries use progressive tax systems with different brackets based on income levels. In Canada, federal tax rates range from 15% to 33%, plus provincial taxes. In the US, federal rates range from 10% to 37%, plus state taxes. Understanding which bracket you fall into helps with tax planning throughout the year.",
        "Tax residency is determined by where you live and maintain significant ties. In Canada, you're generally considered a tax resident if you live there or have residential ties (home, spouse, dependents). In the US, you're a tax resident if you're a citizen, green card holder, or meet the substantial presence test (183 days over three years).",
        "Newcomer tax benefits are substantial but often overlooked. In Canada, these include the GST/HST credit, Canada Workers Benefit, and various newcomer-specific credits. In the US, you may qualify for the Earned Income Tax Credit (EITC), Child Tax Credit, and education credits. These can provide thousands in benefits even if you owe no tax.",
        "Deductible expenses can significantly reduce your taxable income. Common deductions include: moving expenses (if you moved for work), child care expenses, RRSP contributions (Canada) or 401(k) contributions (US), student loan interest, and certain employment expenses. Keep detailed records and receipts for all potential deductions.",
        "Tax filing software has made the process much more accessible. Options include TurboTax, H&R Block, Wealthsimple Tax (Canada), or free options like Credit Karma Tax (US) and SimpleTax (Canada). Many offer free versions for simple returns and guided interfaces that help maximize your credits and deductions.",
        "If you're self-employed or have freelance income, tax obligations are more complex. You must track all income and expenses, make quarterly estimated tax payments, and may need to pay self-employment tax (Social Security and Medicare in the US, CPP and EI in Canada). Consider hiring a tax professional for the first few years.",
        "Tax records should be kept for at least 6 years in Canada and 3-7 years in the US. This includes T-slips (Canada) or W-2s, 1099s (US), receipts for deductions, and copies of filed returns. Good record-keeping protects you if you're ever audited and helps with future tax planning.",
        "Both countries offer tax help services. In Canada, free tax clinics are available through community organizations and the CRA's Volunteer Tax Preparation Program. In the US, the IRS provides Free File, VITA (Volunteer Income Tax Assistance), and TCE (Tax Counseling for the Elderly) programs. These services are especially valuable for newcomers navigating their first tax system."
      ],
      es: [
        "Entender los impuestos es crucial para el éxito financiero en Canadá y EE. UU. Como recién llegado, debes presentar impuestos incluso si llegaste a mitad de año. Ambos países tienen tratados fiscales con muchos países para prevenir la doble imposición, y numerosos créditos y deducciones específicamente para recién llegados que pueden reducir significativamente tu carga fiscal o aumentar tu reembolso.",
        "En Canadá, el año fiscal corre del 1 de enero al 31 de diciembre, y los impuestos se deben pagar antes del 30 de abril del año siguiente. En EE. UU., el año fiscal es el año calendario, y los impuestos típicamente se deben pagar antes del 15 de abril. Estas fechas límite son estrictas—la presentación tardía puede resultar en penalidades y cargos de interés que se acumulan rápidamente.",
        "El Número de Seguro Social (SIN) en Canadá o el Número de Seguro Social (SSN) en EE. UU. es esencial para la presentación de impuestos. Debes solicitar estos números inmediatamente al llegar. Sin ellos, podrías enfrentar tasas de retención de impuestos más altas y perderte beneficios gubernamentales y créditos fiscales diseñados para recién llegados.",
        "Ambos países usan sistemas fiscales progresivos con diferentes tramos basados en niveles de ingresos. En Canadá, las tasas impositivas federales van del 15% al 33%, más impuestos provinciales. En EE. UU., las tasas federales van del 10% al 37%, más impuestos estatales. Entender en qué tramo caes ayuda con la planificación fiscal durante todo el año.",
        "La residencia fiscal se determina por dónde vives y mantienes vínculos significativos. En Canadá, generalmente se te considera residente fiscal si vives allí o tienes vínculos residenciales (hogar, cónyuge, dependientes). En EE. UU., eres residente fiscal si eres ciudadano, titular de tarjeta verde, o cumples la prueba de presencia sustancial (183 días durante tres años).",
        "Los beneficios fiscales para recién llegados son sustanciales pero a menudo pasados por alto. En Canadá, estos incluyen el crédito de IVA/IVA, Beneficio para Trabajadores Canadienses, y varios créditos específicos para recién llegados. En EE. UU., puedes calificar para el Crédito Fiscal por Ingresos del Trabajo (EITC), Crédito Fiscal por Hijos, y créditos educativos. Estos pueden proporcionar miles en beneficios incluso si no debes impuestos.",
        "Los gastos deducibles pueden reducir significativamente tus ingresos imponibles. Las deducciones comunes incluyen: gastos de mudanza (si te mudaste por trabajo), gastos de cuidado de niños, contribuciones a RRSP (Canadá) o 401(k) (EE. UU.), intereses de préstamos estudiantiles, y ciertos gastos de empleo. Mantén registros detallados y recibos para todas las deducciones potenciales.",
        "El software de presentación de impuestos ha hecho el proceso mucho más accesible. Las opciones incluyen TurboTax, H&R Block, Wealthsimple Tax (Canadá), u opciones gratuitas como Credit Karma Tax (EE. UU.) y SimpleTax (Canadá). Muchos ofrecen versiones gratuitas para declaraciones simples e interfaces guiadas que ayudan a maximizar tus créditos y deducciones.",
        "Si eres trabajador independiente o tienes ingresos freelance, las obligaciones fiscales son más complejas. Debes rastrear todos los ingresos y gastos, hacer pagos estimados de impuestos trimestrales, y podrías necesitar pagar impuestos de trabajo por cuenta propia (Seguro Social y Medicare en EE. UU., CPP y EI en Canadá). Considera contratar un profesional fiscal para los primeros años.",
        "Los registros fiscales deben mantenerse por al menos 6 años en Canadá y 3-7 años en EE. UU. Esto incluye T-slips (Canadá) o W-2s, 1099s (EE. UU.), recibos para deducciones, y copias de declaraciones presentadas. El buen mantenimiento de registros te protege si alguna vez eres auditado y ayuda con la planificación fiscal futura.",
        "Ambos países ofrecen servicios de ayuda fiscal. En Canadá, clínicas fiscales gratuitas están disponibles a través de organizaciones comunitarias y el Programa de Preparación Voluntaria de Impuestos del CRA. En EE. UU., el IRS proporciona Free File, VITA (Asistencia Voluntaria de Impuestos sobre Ingresos), y TCE (Asesoramiento Fiscal para Personas Mayores) programas. Estos servicios son especialmente valiosos para recién llegados navegando su primer sistema fiscal."
      ],
      hi: [
        "कनाडा और यूएस में वित्तीय सफलता के लिए करों को समझना महत्वपूर्ण है। एक नए आने वाले के रूप में, यदि आप वर्ष के बीच में आए हैं, तो भी आपको कर दाखिल करने होंगे। दोनों देशों के पास दोहरे कराधान को रोकने के लिए कई देशों के साथ कर संधान हैं, और नए आने वालों के लिए विशिष्ट रूप से कई क्रेडिट और कटौती हैं जो आपके कर बोझ को महत्वपूर्ण रूप से कम कर सकती हैं या आपके रिफंड को बढ़ा सकती हैं।",
        "कनाडा में, कर वर्ष 1 जनवरी से 31 दिसंबर तक चलता है, और कर अगले वर्ष की 30 अप्रैल तक देय हैं। यूएस में, कर वर्ष कैलेंडर वर्ष है, और कर आमतौर पर 15 अप्रैल तक देय हैं। ये समय सीमाएं सख्त हैं—देर से दाखिल करने पर दंड और ब्याज शुल्क हो सकते हैं जो जल्दी से बढ़ती हैं।",
        "कनाडा में सोशल इंश्योरेंस नंबर (SIN) या यूएस में सोशल सिक्योरिटी नंबर (SSN) कर दाखिल करने के लिए आवश्यक है। आपको आने पर तुरंत इन नंबरों के लिए आवेदन करना चाहिए। इनके बिना, आपको उच्च कर कटौती दरों का सामना करना पड़ सकता है और नए आने वालों के लिए डिज़ाइन किए गए सरकारी लाभ और कर क्रेडिट से वंचित हो सकते हैं।",
        "दोनों देशों आय स्तर तक के आधार पर आधारित कर प्रणालियों का उपयोग करते हैं। कनाडा में, संघीय कर दरें 15% से 33% तक हैं, साथ ही प्रांतीय कर। यूएस में, संघीय दरें 10% से 37% तक हैं, साथ ही राज्य कर। यह समझना कि आप किस श्रेणी में आते हैं, पूरे वर्ष भर कर योजना में मदद करता है।",
        "कर निवासी यह निर्धारित करता है कि आप कहाँ रहते हैं और महत्वपूर्ण संबंध बनाए रखते हैं। कनाडा में, आप आमतौर पर एक कर निवासी माने जाते हैं यदि आप वहाँ रहते हैं या आवासीय संबंध (घर, पति/पत्नी, आश्रित) हैं। यूएस में, आप एक कर निवासी हैं यदि आप नागरिक हैं, ग्रीन कार्ड धारक हैं, या पर्याप्त उपस्थिति परीक्षण (तीन वर्षों में 183 दिन) को पूरा करते हैं।",
        "नए आने वालों के लिए कर लाभ पर्याप्त हैं लेकिन अक्सर अनदेखे जाते हैं। कनाडा में, इनमें GST/HST क्रेडिट, कनाडा वर्कर्स बेनिफिट, और विभिन्न नए-आने वाले-विशिष्ट क्रेडिट शामिल हैं। यूएस में, आप अर्न्ड इनकम टैक्स क्रेडिट (EITC), चाइल्ड टैक्स क्रेडिट, और शिक्षा क्रेडिट के लिए योग्य हो सकते हैं। ये भले ही यदि आपको कोई कर नहीं देना है तो हजारों लाभ प्रदान कर सकते हैं।",
        "कटौती योग्य खर्चे आपकी कर योग्य आय को महत्वपूर्ण रूप से कम कर सकते हैं। सामान्य कटौतीयाँ में शामिल हैं: स्थानांतरण खर्चे (यदि आप काम के लिए बदले), बाल देखभाल खर्चे, RRSP योगदान (कनाडा) या 401(k) योगदान (यूएस), छात्र ऋण ब्याज, और कुछ रोजगार खर्चे। सभी संभावित कटौतीयों के लिए विस्तृत रिकॉर्ड और रसीद रखें।",
        "कर दाखिल सॉफ्टवेयर ने प्रक्रिया को बहुत अधिक पहुंच बना दिया है। विकल्पों में टर्बोटैक्स, एचएंडआर ब्लॉक, वेल्थसिंपल टैक्स (कनाडा), या मुफ्त विकल्प जैसे क्रेडिट कर्मा टैक्स (यूएस) और सिंपलटैक्स (कनाडा) शामिल हैं। कई सरल रिटर्न के लिए मुफ्त संस्करण और मार्गदर्शन इंटरफेस प्रदान करते हैं जो आपके क्रेडिट और कटौतीयों को अधिकतम करने में मदद करते हैं।",
        "यदि आप स्व-रोजगार हैं या फ्रीलांस आय हैं, तो कर दायिताएं अधिक जटिल हैं। आपको सभी आय और खर्चों को ट्रैक करना होगा, त्रैमास्तिक अनुमानित कर भुगतान करने होंगे, और आपको स्व-रोजगार कर (यूएस में सोशल सिक्योरिटी और मेडिकेयर, कनाडा में CPP और EI) का भुगतान करना पड़ सकता है। पहले कुछ वर्षों के लिए एक कर पेशेवर किराए जाने पर विचार करें।",
        "कर रिकॉर्ड कम से कम 6 वर्षों के लिए कनाडा में और 3-7 वर्षों के लिए यूएस में रखे जाने चाहिए। इसमें T-स्लिप (कनाडा) या W-2s, 1099s (यूएस), कटौतीयों के लिए रसीद, और दाखिल रिटर्न की प्रतियां शामिल हैं। अच्छा रिकॉर्ड-रखरण आपकी सुरक्षा करता है यदि आप कभी ऑडिट किए जाते हैं और भविष्य कर योजना में मदद करता है।",
        "दोनों देश कर मदद सेवाएं प्रदान करते हैं। कनाडा में, मुफ्त कर क्लिनिक सामुदायिक संगठनों और CRA के स्वयंसेवक कर तैयारी कार्यक्रम के माध्यम से उपलब्ध हैं। यूएस में, IRS फ्री फाइल, VITA (स्वयंसेवक आय आय कर सहायता), और TCE (वृद्धों के लिए कर परामर्श) कार्यक्रम प्रदान करता है। ये सेवाएं विशेष रूप से उन नए आने वालों के लिए मूल्यमान हैं जो अपने पहले कर प्रणाली में नेविगेट कर रहे हैं।"
      ]
    },
    quizzes: [
      {
        question: {
          en: "What is the typical tax filing deadline in Canada?",
          es: "¿Cuál es la fecha límite típica para presentar impuestos en Canadá?",
          hi: "कनाडा में आमतौर पर कर दाखिल करने की समय सीमा क्या है?"
        },
        options: {
          en: ["April 30", "June 15"],
          es: ["30 de abril", "15 de junio"],
          hi: ["30 अप्रैल", "15 जून"]
        },
        correctIndex: 0
      },
      {
        question: {
          en: "What number is essential for tax filing in Canada?",
          es: "¿Qué número es esencial para la presentación de impuestos en Canadá?",
          hi: "कनाडा में कर दाखिल करने के लिए कौन सा नंबर आवश्यक है?"
        },
        options: {
          en: ["Social Insurance Number (SIN)", "Driver's License Number"],
          es: ["Número de Seguro Social (SIN)", "Número de Licencia de Conducir"],
          hi: ["सोशल इंश्योरेंस नंबर (SIN)", "ड्राइवर का लाइसेंस नंबर"]
        },
        correctIndex: 1
      },
      {
        question: {
          en: "How long should you keep tax records in Canada?",
          es: "¿Cuánto tiempo debes mantener registros fiscales en Canadá?",
          hi: "कनाडा में आपको कर रिकॉर्ड कितने समय तक रखने चाहिए?"
        },
        options: {
          en: ["At least 6 years", "2 years"],
          es: ["Al menos 6 años", "2 años"],
          hi: ["कम से कम 6 वर्ष", "2 वर्ष"],
          tl: ["Higit sa 6 taon", "2 taon"]
        },
        correctIndex: 0
      }
    ]
  },
  {
    id: "fix-bad-credit",
    isPremium: true,
    title: {
      en: "How to fix a bad credit score",
      es: "Cómo arreglar una mala puntuación de crédito",
      hi: "खराब क्रेडिट स्कोर को कैसे ठीक करें",
      tl: "Kung paano ayusin ang isang masamang credit score",
      zh: "如何修复不良信用评分",
      ar: "كيفية إصلاح درجة الائتمان السيئة",
      fr: "Comment réparer un mauvais score de crédit",
      pa: "ਮਾੜੇ ਕ੍ਰੈਡਿਟ ਸਕੋਰ ਨੂੰ ਕਿਵੇਂ ਠੀਕ ਕਰੀਏ"
    },
    subtitle: {
      en: "Steps to rebuild your credit after mistakes",
      es: "Pasos para reconstruir tu crédito después de errores",
      hi: "ਗਲਤੀਆਂ ਤੋਂ ਬਾਅਦ ਆਪਣੇ ਕ੍ਰੈਡਿਟ ਨੂੰ ਦੁਬਾਰਾ ਬਣਾਉਣ ਦੇ ਪਗ",
      tl: "Mga hakbang na muling itayo ang iyong credit matapos ang mga pagkakamali",
      zh: "犯错后重建信用的步骤",
      ar: "خطوات إعادة بناء الائتمان بعد الأخطاء",
      fr: "Étapes pour reconstruire votre crédit après des erreurs",
      pa: "ਗਲਤੀਆਂ ਤੋਂ ਬਾਅਦ ਆਪਣੇ ਕ੍ਰੈਡਿਟ ਨੂੰ ਦੁਬਾਰਾ ਬਣਾਉਣ ਦੇ ਪਗ"
    },
    category: "Credit",
    content: {
      en: [
        "A bad credit score is not permanent. The first step is to check your credit report for errors at Equifax or TransUnion — mistakes are common and can be disputed for free. Next pay all current bills on time every month — even one on time payment starts to rebuild trust. Keep your credit card balance below 30% of your limit and avoid applying for new credit while rebuilding. Most negative marks disappear from your report after 6 to 7 years in Canada."
      ],
      es: [
        "Una mala puntuación de crédito no es permanente. El primer paso es verificar su informe de crédito en busca de errores en Equifax o TransUnion — los errores son comunes y pueden disputarse gratuitamente. Luego pague todas las facturas actuales a tiempo cada mes — incluso un pago a tiempo comienza a reconstruir la confianza. Mantenga el saldo de su tarjeta de crédito por debajo del 30% de su límite y evite solicitar nuevo crédito mientras reconstruye. La mayoría de las marcas negativas desaparecen de su informe después de 6 a 7 años en Canadá."
      ],
      hi: [
        "एक खराब क्रेडिट स्कोर स्थायी नहीं है। पहला कदम Equifax या TransUnion पर अपने क्रेडिट रिपोर्ट में त्रुटियों की जांच करना है — गलतियाँ आम हैं और मुफ्त में विवादित की जा सकती हैं। अगले हर महीने सभी वर्तमान बिल समय पर भुगतान करें — यहां तक कि एक समय पर भुगतान भी भरोसा पुनर्निर्माण शुरू करता है। अपने क्रेडिट कार्ड बैलेंस को अपनी सीमा के 30% से नीचे रखें और पुनर्निर्माण के दौरान नए क्रेडिट के लिए आवेदन करने से बचें। कनाडा में 6 से 7 साल बाद अधिकांश नकारात्मक चिह्न आपकी रिपोर्ट से गायब हो जाते हैं।"
      ],
      tl: [
        "Ang isang masamang credit score ay hindi permanente. Ang unang hakbang ay suriin ang iyong credit report para sa mga error sa Equifax o TransUnion — ang mga mali ay karaniwan at maaaring itulak nang libre. Susunod na bayaran ang lahat ng kasalukuyang bills sa takda bawat buwan — kahit isang bayad sa takda ay nagsisimulang muling itayo ang tiwala. Panatilihin ang iyong credit card balance sa ibaba ng 30% ng iyong limit at iwasan ang paglalapat para sa bagong credit habang nagsisimula. Karamihan sa mga negatibong marka ay naglalaho sa iyong report matapos ang 6 hanggang 7 taon sa Canada."
      ],
      zh: [
        "不良信用评分不是永久的。第一步是检查您在Equifax或TransUnion的信用报告是否有错误——错误很常见，可以免费争议。接下来每月按时支付所有当前账单——即使一次按时付款也开始重建信任。将您的信用卡余额保持在限额的30%以下，并在重建期间避免申请新信用。在加拿大，大多数负面标记会在6到7年后从您的报告中消失。"
      ],
      ar: [
        "درجة الائتمان السيئة ليست دائمة. الخطوة الأولى هي فحص تقرير الائتمان الخاص بك بحثًا عن أخطاء في Equifax أو TransUnion — الأخطاء شائعة ويمكن الطعن فيها مجانًا. بعد ذلك قم بسداد جميع الفواتير الحالية في الوقت المحدد كل شهر — حتى دفعة واحدة في الوقت المحدد تبدأ في إعادة بناء الثقة. حافظ على رصيد بطاقة الائتمان أقل من 30% من حدودك وتجنب التقدم للحصول على ائتمان جديد أثناء إعادة البناء. معظم العلامات السلبية تختفي من تقريرك بعد 6 إلى 7 سنوات في كندا."
      ],
      fr: [
        "Un mauvais score de crédit n'est pas permanent. La première étape est de vérifier votre rapport de crédit pour des erreurs chez Equifax ou TransUnion — les erreurs sont courantes et peuvent être contestées gratuitement. Ensuite, payez toutes les factures actuelles à temps chaque mois — même un paiement à temps commence à reconstruire la confiance. Maintenez le solde de votre carte de crédit en dessous de 30% de votre limite et évitez de demander un nouveau crédit pendant la reconstruction. La plupart des marques négatives disparaissent de votre rapport après 6 à 7 ans au Canada."
      ],
      pa: [
        "ਇੱਕ ਮਾੜਾ ਕ੍ਰੈਡਿਟ ਸਕੋਰ ਸਥਾਈ ਨਹੀਂ ਹੈ। ਪਹਿਲਾਂ ਕਦਮ Equifax ਜਾਂ TransUnion 'ਤੇ ਆਪਣੇ ਕ੍ਰੈਡਿਟ ਰਿਪੋਰਟ ਵਿੱਚ ਗਲਤੀਆਂ ਲਈ ਜਾਂਚ ਕਰਨਾ ਹੈ — ਗਲਤੀਆਂ ਆਮ ਹਨ ਅਤੇ ਮੁਫਤ ਵਿੱਚ ਵਿਵਾਦ ਕੀਤੀਆਂ ਜਾ ਸਕਦੀਆਂ ਹਨ। ਅਗਲਾ ਹਰ ਮਹੀਨੇ ਸਾਰੇ ਮੌਜੂਦਾ ਬਿਲ ਸਮੇਂ 'ਤੇ ਭੁਗਤਾਨ ਕਰੋ — ਇੱਥੋਂ ਤੱਕ ਕਿ ਇੱਕ ਸਮੇਂ 'ਤੇ ਭੁਗਤਾਨ ਵੀ ਭਰੋਸਾ ਦੁਬਾਰਾ ਬਣਾਉਣਾ ਸ਼ੁਰੂ ਹੁੰਦਾ ਹੈ। ਆਪਣੇ ਕ੍ਰੈਡਿਟ ਕਾਰਡ ਬੈਲੇਂਸ ਨੂੰ ਆਪਣੀ ਸੀਮਾ ਦੇ 30% ਤੋਂ ਹੇਠਾਂ ਰੱਖੋ ਅਤੇ ਦੁਬਾਰਾ ਬਣਾਉਣ ਦੌਰਾਨ ਨਵੇਂ ਕ੍ਰੈਡਿਟ ਲਈ ਅਰਜ਼ੀ ਦੇਣ ਤੋਂ ਬਚੋ। ਕੈਨੇਡਾ ਵਿੱਚ 6 ਤੋਂ 7 ਸਾਲ ਬਾਅਦ ਬਹੁਤੇ ਨਕਾਰਾਤਮਕ ਨਿਸ਼ਾਨ ਤੁਹਾਡੀ ਰਿਪੋਰਟ ਤੋਂ ਗਾਇਬ ਹੋ ਜਾਂਦੇ ਹਨ।"
      ]
    },
    quiz: [
      {
        question: {
          en: "How long do most negative marks stay on your Canadian credit report?",
          es: "¿Cuánto tiempo permanecen la mayoría de las marcas negativas en su informe de crédito canadiense?",
          hi: "ਕੈਨੇਡੀਅਨ ਕ੍ਰੈਡਿਟ ਰਿਪੋਰਟ 'ਤੇ ਬਹੁਤੇ ਨਕਾਰਾਤਮਕ ਨਿਸ਼ਾਨ ਕਿੰਨੇ ਸਮੇਂ ਰਹਿੰਦੇ ਹਨ?",
          tl: "Gaano katagal ang karamihan sa mga negatibong marka nananatili sa iyong Canadian credit report?",
          zh: "大多数负面标记在您的加拿大信用报告上保留多长时间？",
          ar: "كم من الوقت تبقى معظم العلامات السلبية في تقرير الائتمان الكندي الخاص بك؟",
          fr: "Combien de temps la plupart des marques négatives restent-elles sur votre rapport de crédit canadien?",
          pa: "ਤੁਹਾਡੇ ਕੈਨੇਡੀਅਨ ਕ੍ਰੈਡਿਟ ਰਿਪੋਰਟ 'ਤੇ ਬਹੁਤੇ ਨਕਾਰਾਤਮਕ ਨਿਸ਼ਾਨ ਕਿੰਨੇ ਸਮੇਂ ਰਹਿੰਦੇ ਹਨ?"
        },
        options: {
          en: ["2 to 3 years", "6 to 7 years"],
          es: ["2 a 3 años", "6 a 7 años"],
          hi: ["2 ਤੋਂ 3 ਸਾਲ", "6 ਤੋਂ 7 ਸਾਲ"],
          tl: ["2 hanggang 3 taon", "6 hanggang 7 taon"],
          zh: ["2到3年", "6到7年"],
          ar: ["2 إلى 3 سنوات", "6 إلى 7 سنوات"],
          fr: ["2 à 3 ans", "6 à 7 ans"],
          pa: ["2 ਤੋਂ 3 ਸਾਲ", "6 ਤੋਂ 7 ਸਾਲ"]
        },
        correctIndex: 1
      }
    ]
  },
  {
    id: "avoid-bank-fees",
    isPremium: true,
    title: {
      en: "How to avoid bank fees in Canada",
      es: "Cómo evitar las tarifas bancarias en Canadá",
      hi: "कैनेडा में बैंक शुल्क से बचने के तरीके",
      tl: "Kung iwasan ang mga bank fee sa Canada",
      zh: "如何在加拿大避免银行费用",
      ar: "كيفية تجنب رسوم البنوك في كندا",
      fr: "Comment éviter les frais bancaires au Canada",
      pa: "ਕੈਨੇਡਾ ਵਿੱਚ ਬੈਂਕ ਫੀਸਾਂ ਤੋਂ ਬਚਾਓ"
    },
    subtitle: {
      en: "Save money by understanding how Canadian bank fees work",
      es: "Ahorre dinero entendiendo cómo funcionan las tarifas bancarias canadienses",
      hi: "ਕੈਨੇਡੀਅਨ ਬੈਂਕ ਫੀਸਾਂ ਕਿਵੇਂ ਕੰਮ ਕਰਦੀਆਂ ਹਨ ਇਹ ਸਮਝ ਕੇ ਪੈਸੇ ਬਚਾਓ",
      tl: "Magtipid sa pera sa pamamagitan ng pag-unawa sa kung paano gumana ang mga bank fee sa Canada",
      zh: "通过了解加拿大银行费用的运作方式来省钱",
      ar: "وفر المال من خلال فهم كيفية عمل رسوم البنوك الكندية",
      fr: "Économisez de l'argent en comprenant le fonctionnement des frais bancaires canadiens",
      pa: "ਕੈਨੇਡੀਅਨ ਬੈਂਕ ਫੀਸਾਂ ਦੀ ਕਾਰਵਾਈ ਸਮਝ ਕੇ ਪੈਸੇ ਬਚਾਓ"
    },
    category: "Banking",
    content: {
      en: [
        "Canadian banks charge fees for many services that newcomers do not expect. Monthly account fees range from $4 to $30 depending on the account type — look for free accounts at online banks like EQ Bank or Tangerine. Avoid overdraft fees by never spending more than your balance — set up low balance alerts on your phone. ATM fees can be $3 to $5 per withdrawal at machines outside your bank network — always use your own banks ATM. Many banks offer free newcomer accounts for the first year so always ask when you arrive."
      ],
      es: [
        "Los bancos canadienses cobran tarifas por muchos servicios que los recién llegados no esperan. Las tarifas mensuales de la cuenta van de $4 a $30 dependiendo del tipo de cuenta — busque cuentas gratuitas en bancos en línea como EQ Bank o Tangerine. Evite las tarifas de sobregiro nunca gastando más de su saldo — configure alertas de saldo bajo en su teléfono. Las tarifas de cajero automático pueden ser de $3 a $5 por retiro en máquinas fuera de la red de su banco — siempre use el cajero automático de su propio banco. Muchos bancos ofrecen cuentas gratuitas para recién llegados durante el primer año, así que siempre pregunte cuando llegue."
      ],
      hi: [
        "कनाडाई बैंक कई सेवाओं के लिए शुल्क लेते हैं जिनकी नए आने वालों को उम्मीद नहीं होती। मासिक खाता शुल्क खाता प्रकार के अनुसार $4 से $30 तक होते हैं — EQ Bank या Tangerine जैसे ऑनलाइन बैंकों में मुफ्त खातों की तलाश करें। ओवरड्राफ्ट शुल्क से बचने के लिए कभी भी अपने बैलेंस से अधिक खर्च न करें — अपने फोन पर कम बैलेंस अलर्ट सेट करें। एटीएम शुल्क आपके बैंक नेटवर्क के बाहर मशीनों पर $3 से $5 प्रति निकासी हो सकते हैं — हमेशा अपने बैंक के एटीएम का उपयोग करें। कई बैंक पहले वर्ष के लिए मुफ्त नए आने वालों के खाते प्रदान करते हैं, इसलिए हमेशा पूछें जब आप पहुंचते हैं।"
      ],
      tl: [
        "Ang mga bank sa Canada ay nagbabayad ng bayad para sa maraming serbisyo na hindi inaasahan ng mga bagong dating. Ang buwanang account fee ay mula $4 hanggang $30 depende sa uri ng account — hanapin ang mga free account sa online banks tulad ng EQ Bank o Tangerine. Iwasan ang overdraft fees sa pamamagitan ng hindi na gumugastos ng higit sa iyong balance — i-set up ang mga low balance alert sa iyong telepono. Ang ATM fees ay maaaring maging $3 hanggang $5 bawat withdrawal sa mga machine sa labas ng iyong bank network — gamitin mo palagi ang ATM ng iyong sariling bank. Maraming bank ang nag-aalok ng free newcomer accounts para sa unang taon kaya siempre tanungin kapag dumating ka."
      ],
      zh: [
        "加拿大银行对许多新移民意想不到的服务收取费用。月账户费根据账户类型从4加元到30加元不等——在EQ Bank或Tangerine等在线银行寻找免费账户。避免透支费用，永远不要花费超过您的余额——在手机上设置低余额警报。在您银行网络外的机器上取款，ATM费用可能为每次3到5加元——始终使用您自己银行的ATM。许多银行为第一年提供免费新移民账户，所以到达时一定要询问。"
      ],
      ar: [
        "تفرض البنوك الكندية رسومًا على العديد من الخدمات التي لا يتوقعها المهاجرون الجدد. تتراوح رسوم الحساب الشهرية من 4 إلى 30 دولارًا حسب نوع الحساب — ابحث عن حسابات مجانية في البنوك عبر الإنترنت مثل EQ Bank أو Tangerine. تجنب رسوم السحب على المكشوف عن طريق عدم الإنفاق أكثر من رصيدك — قم بإعداد تنبيهات الرصيد المنخفض على هاتفك. يمكن أن تكون رسوم أجهزة الصراف الآلي من 3 إلى 5 دولارات لكل سحب في أجهزة خارج شبكة بنكك — استخدم دائمًا جهاز الصراف الآلي لبنكك الخاص. تقدم العديد من البنوك حسابات مجانية للمهاجرين الجدد خلال السنة الأولى فاسأل دائمًا عند وصولك."
      ],
      fr: [
        "Les banques canadiennes facturent des frais pour de nombreux services que les nouveaux arrivants ne s'attendent pas. Les frais mensuels de compte vont de 4 à 30 $ selon le type de compte — recherchez des comptes gratuits dans les banques en ligne comme EQ Bank ou Tangerine. Évitez les frais de découvert en ne dépensant jamais plus que votre solde — configurez des alertes de solde faible sur votre téléphone. Les frais de guichet automatique peuvent être de 3 à 5 $ par retrait aux machines hors du réseau de votre banque — utilisez toujours le guichet automatique de votre propre banque. De nombreuses banques offrent des comptes gratuits pour les nouveaux arrivants pendant la première année, alors demandez toujours à votre arrivée."
      ],
      pa: [
        "ਕੈਨੇਡੀਅਨ ਬੈਂਕ ਬਹੁਤ ਸਾਰੀਆਂ ਸੇਵਾਵਾਂ ਲਈ ਫੀਸਾਂ ਲੈਂਦੇ ਹਨ ਜਿਨ੍ਹਾਂ ਦੀ ਨਵੇਂ ਆਉਣ ਵਾਲਿਆਂ ਨੂੰ ਉਮੀਦ ਨਹੀਂ ਹੁੰਦੀ। ਮਹੀਨਾਵਾਰ ਖਾਤਾ ਫੀਸਾਂ ਖਾਤਾ ਦੀ ਕਿਸਮ ਦੇ ਅਨੁਸਾਰ $4 ਤੋਂ $30 ਤੱਕ ਹੁੰਦੀਆਂ ਹਨ — EQ Bank ਜਾਂ Tangerine ਵਰਗੇ ਆਨਲਾਈਨ ਬੈਂਕਾਂ ਵਿੱਚ ਮੁਫਤ ਖਾਤਿਆਂ ਦੀ ਖੋਜ ਕਰੋ। ਓਵਰਡਰਾਫਟ ਫੀਸਾਂ ਤੋਂ ਬਚਣ ਲਈ ਕਦੇ ਵੀ ਆਪਣੇ ਬੈਲੇਂਸ ਤੋਂ ਵੱਧ ਖਰਚ ਨ ਕਰੋ — ਆਪਣੇ ਫੋਨ 'ਤੇ ਘੱਟ ਬੈਲੇਂਸ ਚੇਤਾਵਨੀਆਂ ਸੈੱਟ ਕਰੋ। ATM ਫੀਸਾਂ ਤੁਹਾਡੇ ਬੈਂਕ ਨੈੱਟਵਰਕ ਤੋਂ ਬਾਹਰ ਮਸ਼ੀਨਾਂ 'ਤੇ ਹਰ ਵਾਢੀ ਲਈ $3 ਤੋਂ $5 ਹੋ ਸਕਦੀਆਂ ਹਨ — ਹਮੇਸ਼ਾ ਆਪਣੇ ਬੈਂਕ ਦਾ ATM ਵਰਤੋ। ਬਹੁਤ ਸਾਰੇ ਬੈਂਕ ਪਹਿਲੇ ਸਾਲ ਲਈ ਮੁਫਤ ਨਵੇਂ ਆਉਣ ਵਾਲਿਆਂ ਦੇ ਖਾਤੇ ਪੇਸ਼ ਕਰਦੇ ਹਨ, ਇਸ ਲਈ ਜਦੋਂ ਤੁਸੀਂ ਪਹੁੰਚਦੇ ਹੋ ਤਾਂ ਹਮੇਸ਼ਾ ਪੁੱਛੋ।"
      ]
    },
    quiz: [
      {
        question: {
          en: "Which type of bank often offers free accounts with no monthly fees?",
          es: "¿Qué tipo de banco a menudo ofrece cuentas gratuitas sin tarifas mensuales?",
          hi: "ਕਿਸ ਕਿਸਮ ਦੇ ਬੈਂਕ ਅਕਸਰ ਬਿਨਾ ਮਾਸਿਕ ਫੀਸਾਂ ਦੇ ਮੁਫਤ ਖਾਤੇ ਪੇਸ਼ ਕਰਦੇ ਹਨ?",
          tl: "Aling uri ng bank ay madalas na nag-aalok ng mga free account na walang buwanang bayad?",
          zh: "哪种类型的银行通常提供没有月费的免费账户？",
          ar: "أي نوع من البنوك غالبًا ما يقدم حسابات مجانية بدون رسوم شهرية؟",
          fr: "Quel type de banque offre souvent des comptes gratuits sans frais mensuels?",
          pa: "ਕਿਸ ਕਿਸਮ ਦੇ ਬੈਂਕ ਅਕਸਰ ਬਿਨਾ ਮਾਸਿਕ ਫੀਸਾਂ ਦੇ ਮੁਫਤ ਖਾਤੇ ਪੇਸ਼ ਕਰਦੇ ਹਨ?"
        },
        options: {
          en: ["Large traditional banks", "Online banks like EQ Bank"],
          es: ["Grandes bancos tradicionales", "Bancos en línea como EQ Bank"],
          hi: ["बड़े पारंपरिक बैंक", "EQ Bank जैसे ऑनलाइन बैंक"],
          tl: ["Malalaking tradisyonal na bank", "Mga online bank tulad ng EQ Bank"],
          zh: ["大型传统银行", "像EQ Bank这样的在线银行"],
          ar: ["البنوك التقليدية الكبيرة", "البنوك عبر الإنترنت مثل EQ Bank"],
          fr: ["Grandes banques traditionnelles", "Banques en ligne comme EQ Bank"],
          pa: ["ਵੱਡੇ ਰਵਾਇਤੀ ਬੈਂਕ", "EQ Bank ਵਰਗੇ ਆਨਲਾਈਨ ਬੈਂਕ"]
        },
        correctIndex: 1
      }
    ]
  },
  {
    id: "understanding-lease",
    isPremium: true,
    title: {
      en: "Understanding your lease agreement",
      es: "Entendiendo tu contrato de arrendamiento",
      hi: "अपने लीज़ समझौते को समझना",
      tl: "Pag-unawa sa iyong kasunduan sa pag-upa",
      zh: "理解您的租赁协议",
      ar: "فهم اتفاقية الإيجار الخاصة بك",
      fr: "Comprendre votre contrat de location",
      pa: "ਆਪਣੇ ਲੀਜ਼ ਇਕਰਾਰਾ ਨੂੰ ਸਮਝਣਾ"
    },
    subtitle: {
      en: "What to read before you sign a rental contract",
      es: "Qué leer antes de firmar un contrato de alquiler",
      hi: "ਕਿਰਾਏ ਦੇ ਸਮਝੌਤੇ 'ਤੇ ਦਸਤਖਤ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਕੀ ਪੜ੍ਹਨਾ ਹੈ",
      tl: "Kung ano ang basahin bago ka mag-sign ng kasunduan sa pag-upa",
      zh: "在签署租赁合同之前要阅读什么",
      ar: "ماذا تقرأ قبل توقيع عقد الإيجار",
      fr: "Que lire avant de signer un contrat de location",
      pa: "ਕਿਰਾਏ ਦੇ ਸਮਝੌਤੇ 'ਤੇ ਦਸਤਖਤ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਕੀ ਪੜ੍ਹਨਾ ਹੈ"
    },
    category: "Housing",
    content: {
      en: [
        "A lease is a legal contract between you and your landlord — read every word before signing. Check the rent amount, due date, and what utilities are included like heat water and electricity. Look for rules about guests, pets, and subletting — breaking these can result in eviction. Your landlord must give you proper notice before entering your unit — usually 24 hours in most provinces. In Ontario your landlord cannot increase rent more than the government guideline percentage each year — know your rights as a tenant."
      ],
      es: [
        "Un contrato de arrendamiento es un contrato legal entre usted y su casero — lea cada palabra antes de firmar. Verifique el monto del alquiler, la fecha de vencimiento y qué servicios públicos están incluidos como calefacción, agua y electricidad. Busque reglas sobre invitados, mascotas y subarrendamiento — romper estas puede resultar en desalojo. Su casero debe darle aviso adecuado antes de ingresar a su unidad — generalmente 24 horas en la mayoría de las provincias. En Ontario su casero no puede aumentar el alquiler más que el porcentaje de la guía del gobierno cada año — conozca sus derechos como inquilino."
      ],
      hi: [
        "एक लीज़ आप और आपके मकान मालिक के बीच एक कानूनी अनुबंध है — हस्ताक्षर करने से पहले हर शब्द पढ़ें। किराया राशि, नियत तिथि, और कौन से उपयोगिताएँ शामिल हैं जैसे गर्मी, पानी और बिजली जांचें। मेहमानों, पालतू जानवरों और उप-किराये के बारे में नियम खोजें — इन्हें तोड़ने से निकाली जा सकती है। आपके मकान मालिक को आपके यूनिट में प्रवेश करने से पहले आपको उचित सूचना देनी होगी — अधिकांश प्रांतों में आमतौर पर 24 घंटे। ओंटारियो में आपका मकान मालिक हर साल सरकारी दिशानिर्देश प्रतिशत से अधिक किराया नहीं बढ़ा सकता — एक किरायेदार के रूप में अपने अधिकार जानें।"
      ],
      tl: [
        "Ang isang lease ay isang legal na kontrata sa pagitan mo at ng iyong landlord — basahin ang bawat salita bago mag-sign. Suriin ang halaga ng upa, ang due date, at kung ano ang mga utilities ay kasama tulad ng init, tubig at kuryente. Hanapin ang mga panuntunan tungkol sa mga bisita, alagang hayop, at pag-sublet — pagkasira sa mga ito ay maaaring magresulta sa pagkakatapon. Ang iyong landlord ay dapat magbigay sa iyo ng tamang paalala bago pumasok sa iyong unit — karaniwang 24 oras sa karamihan ng mga lalawigan. Sa Ontario ang iyong landlord ay hindi maaaring taasan ang upa higit sa porsyento ng gabay ng gobyerno bawat taon — alamin ang iyong karapatan bilang isang tenant."
      ],
      zh: [
        "租赁是您与房东之间的法律合同——在签署之前请逐字阅读。检查租金金额、到期日期以及包含哪些公用事业费用，如暖气、水和电。查找关于客人、宠物和转租的规则——违反这些可能导致驱逐。您的房东必须在进入您的单元之前给您适当的通知——在大多数省份通常是24小时。在安大略省，您的房东每年不能将租金提高超过政府指导百分比——了解您作为租户的权利。"
      ],
      ar: [
        "عقد الإيجار هو عقد قانوني بينك وبين المالك — اقرأ كل كلمة قبل التوقيع. تحقق من مبلغ الإيجار وتاريخ الاستحقاق وما هي المرافق المدرجة مثل التدفئة والماء والكهرباء. ابحث عن قواعد بشأن الضيوف والحيوانات الأليفة والإيجار الفرعي — كسر هذه قد يؤدي إلى الطرد. يجب على المالك أن يعطيك إشعارًا مناسبًا قبل دخول وحدتك — عادة 24 ساعة في معظم المقاطعات. في أونتاريو لا يمكن لمالك زيادة الإيجار أكثر من نسبة إرشادات الحكومة كل عام — اعرف حقوقك كمستأجر."
      ],
      fr: [
        "Un bail est un contrat légal entre vous et votre propriétaire — lisez chaque mot avant de signer. Vérifiez le montant du loyer, la date d'échéance et les services publics inclus comme le chauffage, l'eau et l'électricité. Recherchez les règles concernant les invités, les animaux de compagnie et la sous-location — enfreindre celles-ci peut entraîner une expulsion. Votre propriétaire doit vous donner un préavis approprié avant d'entrer dans votre unité — généralement 24 heures dans la plupart des provinces. En Ontario, votre propriétaire ne peut pas augmenter le loyer de plus que le pourcentage directif du gouvernement chaque année — connaissez vos droits en tant que locataire."
      ],
      pa: [
        "ਇੱਕ ਲੀਜ਼ ਤੁਹਾਡੇ ਅਤੇ ਤੁਹਾਡੇ ਮਕਾਨ ਮਾਲਕ ਦੇ ਵਿਚਕਾਰਨੀ ਇਕਰਾਰਾ ਹੈ — ਦਸਤਖਤ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਹਰ ਸ਼ਬਦ ਪੜ੍ਹੋ। ਕਿਰਾਏ ਦੀ ਰਕਮ, ਨਿਯਤ ਮਿਤੀ, ਅਤੇ ਕਿਹੜੇ ਉਪਯੋਗਿਤਾਂ ਸ਼ਾਮਲ ਹਨ ਜਿਵੇਂ ਗਰਮੀ, ਪਾਣੀ ਅਤੇ ਬਿਜਲੀ ਜਾਂਚੋ। ਮਹਿਮਾਨਾਂ, ਪਾਲਤੂਆਂ ਅਤੇ ਸਬ-ਲੀਜ਼ ਬਾਰੇ ਨਿਯਮ ਖੋਜੋ — ਇਹਨਾਂ ਤੋੜ੍ਹਨ ਨਾਲ ਕੱਢ੍ਹੇ ਜਾਣ ਦਾ ਨਤੀਜਾ ਹੋ ਸਕਦਾ ਹੈ। ਤੁਹਾਡੇ ਮਕਾਨ ਮਾਲਕ ਨੂੰ ਤੁਹਾਡੇ ਯੂਨਿਟ ਵਿੱਚ ਦਾਖਲ ਹੋਣ ਤੋਂ ਪਹਿਲਾਂ ਤੁਹਾਨੂੰ ਢੁੱਕਵੀਂ ਸੂਚਨਾ ਦੇਣੀ ਪਵੇਗੀ — ਬਹੁਤੇ ਸੂਬਿਆਂ ਵਿੱਚ ਆਮ ਤੌਰ 'ਤੇ 24 ਘੰਟੇ। ਓਨਟਾਰੀਓ ਵਿੱਚ ਤੁਹਾਡੇ ਮਕਾਨ ਮਾਲਕ ਹਰ ਸਾਲ ਸਰਕਾਰੀ ਦਿਸ਼ਾਟੇ ਪ੍ਰਤੀਸ਼ਤ ਤੋਂ ਵੱਧ ਕਿਰਾਇਆ ਨਹੀਂ ਵਧਾ ਸਕਦਾ — ਇੱਕ ਕਿਰਾਏਦਾਰ ਵਜੋਂ ਆਪਣੇ ਹੱਕ ਜਾਣੋ।"
      ]
    },
    quiz: [
      {
        question: {
          en: "How much notice must a landlord usually give before entering your rental unit in Canada?",
          es: "¿Cuánto aviso debe dar un casero generalmente antes de ingresar a su unidad de alquiler en Canadá?",
          hi: "ਕੈਨੇਡਾ ਵਿੱਚ ਆਪਣੇ ਕਿਰਾਏ ਦੀ ਯੂਨਿਟ ਵਿੱਚ ਦਾਖਲ ਹੋਣ ਤੋਂ ਪਹਿਲਾਂ ਇੱਕ ਮਕਾਨ ਮਾਲਕ ਨੂੰ ਕਿੰਨੀ ਸੂਚਨਾ ਦੇਣੀ ਚਾਹੀਦੀ ਹੈ?",
          tl: "Gaano kahaba ang dapat ibigay ng isang landlord bago pumasok sa iyong rental unit sa Canada?",
          zh: "在加拿大，房东在进入您的出租单元之前通常需要提前多久通知？",
          ar: "كم من الإشعار يجب على المالك عادة إعطاؤه قبل دخول وحدتك الإيجارية في كندا؟",
          fr: "Combien de préavis un propriétaire doit-il généralement donner avant d'entrer dans votre unité de location au Canada?",
          pa: "ਕੈਨੇਡਾ ਵਿੱਚ ਆਪਣੇ ਕਿਰਾਏ ਦੀ ਯੂਨਿਟ ਵਿੱਚ ਦਾਖਲ ਹੋਣ ਤੋਂ ਪਹਿਲਾਂ ਇੱਕ ਮਕਾਨ ਮਾਲਕ ਨੂੰ ਕਿੰਨੀ ਸੂਚਨਾ ਦੇਣੀ ਚਾਹੀਦੀ ਹੈ?"
        },
        options: {
          en: ["No notice required", "Usually 24 hours notice"],
          es: ["No se requiere aviso", "Generalmente 24 horas de aviso"],
          hi: ["ਕੋਈ ਸੂਚਨਾ ਦੀ ਲੋੜ ਨਹੀਂ", "ਆਮ ਤੌਰ 'ਤੇ 24 ਘੰਟੇ ਦੀ ਸੂਚਨਾ"],
          tl: ["Walang kinakailangang paalala", "Karaniwang 24 oras na paalala"],
          zh: ["无需通知", "通常24小时通知"],
          ar: ["لا يلزم إشعار", "عادة 24 ساعة إشعار"],
          fr: ["Aucun préavis requis", "Généralement 24 heures de préavis"],
          pa: ["ਕੋਈ ਸੂਚਨਾ ਦੀ ਲੋੜ ਨਹੀਂ", "ਆਮ ਤੌਰ 'ਤੇ 24 ਘੰਟੇ ਦੀ ਸੂਚਨਾ"]
        },
        correctIndex: 1
      }
    ]
  },
  {
    id: "tax-credits-benefits",
    isPremium: true,
    title: {
      en: "Tax credits and benefits for newcomers",
      es: "Créditos fiscales y beneficios para recién llegados",
      hi: "नए आने वालों के लिए कर क्रेडिट और लाभ",
      tl: "Mga tax credit at benepisyo para sa mga bagong dating",
      zh: "新移民的税收抵免和福利",
      ar: "الاعتمادات الضريبية والمزايا للمهاجرين الجدد",
      fr: "Crédits d'impôt et prestations pour les nouveaux arrivants",
      pa: "ਨਵੇਂ ਆਉਣ ਵਾਲਿਆਂ ਲਈ ਟੈਕਸ ਕ੍ਰੈਡਿਟ ਅਤੇ ਲਾਭ"
    },
    subtitle: {
      en: "Free money from the government you might not know about",
      es: "Dinero gratis del gobierno que podrías no conocer",
      hi: "ਸਰਕਾਰ ਤੋਂ ਮੁਫਤ ਪੈਸਾ ਜਿਸ ਬਾਰੇ ਤੁਸੀਂ ਨਹੀਂ ਜਾਣਦੇ ਹੋ",
      tl: "Libreng pera mula sa gobyerno na baka hindi mo alam",
      zh: "您可能不知道的政府免费资金",
      ar: "أموال مجانية من الحكومة قد لا تعرف عنها",
      fr: "Argent gratuit du gouvernement que vous ne connaissez peut-être pas",
      pa: "ਸਰਕਾਰ ਤੋਂ ਮੁਫਤ ਪੈਸੇ ਜਿਸ ਬਾਰੇ ਤੁਸੀਂ ਨਹੀਂ ਜਾਣਦੇ ਹੋ"
    },
    category: "Taxes",
    content: {
      en: [
        "Canada has several tax credits and benefits that newcomers can claim — many people miss these and leave free money on the table. The GST/HST credit gives low and middle income earners up to $500 per year automatically when you file your taxes. The Canada Child Benefit gives families up to $7,000 per year per child under 18 — you must file taxes every year to keep receiving it. The Climate Action Incentive pays quarterly payments to residents of eligible provinces. You must file a tax return every year even if you have no income to receive these benefits."
      ],
      es: [
        "Canadá tiene varios créditos fiscales y beneficios que los recién llegados pueden reclamar — muchas personas se pierden estos y dejan dinero gratis sobre la mesa. El crédito de GST/HST da a los trabajadores de ingresos bajos y medianos hasta $500 por año automáticamente cuando presentas tus impuestos. El Beneficio Canadiense para Niños da a las familias hasta $7,000 por año por niño menor de 18 — debes presentar impuestos cada año para seguir recibiéndolo. El Incentivo de Acción Climática paga pagos trimestrales a los residentes de provincias elegibles. Debes presentar una declaración de impuestos cada año incluso si no tienes ingresos para recibir estos beneficios."
      ],
      hi: [
        "कनाडा में कई टैक्स क्रेडिट और लाभ हैं जिन्हें नए आने वाले दावा कर सकते हैं — कई लोग इन्हें चूक करते हैं और मुफ्त पैसे को टेबल पर छोड़ देते हैं। GST/HST क्रेडिट कम और मध्यम आय वालों को हर साल $500 तक स्वचालित रूप से देता है जब आप अपने टैक्स दाखिल करते हैं। कनाडा चाइल्ड बेनिफिट परिवारों को प्रति वर्ष प्रति 18 वर्ष से कम बच्चे के लिए $7,000 तक देता है — आपको इसे प्राप्त करने के लिए हर साल टैक्स दाखिल करने होंगे। क्लाइमेट एक्शन इंसेंटिव योग्य प्रांतों के निवासियों को त्रैमासिक भुगतान करता है। आपको इन लाभों को प्राप्त करने के लिए हर साल टैक्स रिटर्न दाखिल करना होगा भले ही आपकी कोई आय नहीं है।"
      ],
      tl: [
        "Ang Canada ay may ilang tax credit at benepisyo na maaaring i-claim ng mga bagong dating — maraming tao ang nakakamiss nito at nag-iwan ng libreng pera sa mesa. Ang GST/HST credit ay nagbibigay sa mga low at middle income earners hanggang $500 bawat taon awtomatiko kapag i-file mo ang iyong mga buwis. Ang Canada Child Benefit ay nagbibigay sa mga pamilya hanggang $7,000 bawat taon bawat bata na wala pang 18 taong gulang — kailangan mong i-file ang mga buwis bawat taon upang magpatuloy sa pagtanggap nito. Ang Climate Action Incentive ay nagbabayad ng quarterly payments sa mga residente ng mga karatig-ang probinsya. Kailangan mong i-file ang tax return bawat taon kahit wala kang income upang makatanggap ng mga benepisyong ito."
      ],
      zh: [
        "加拿大有几项新移民可以申请的税收抵免和福利——许多人错过了这些，留下了免费的资金。GST/HST抵免在您报税时自动给予中低收入者每年最高500加元。加拿大儿童福利为家庭提供每个18岁以下儿童每年最高7,000加元——您必须每年报税才能继续领取。气候行动激励措施向符合条件的省份居民支付季度付款。即使您没有收入，也必须每年报税才能获得这些福利。"
      ],
      ar: [
        "كندا لديها عدة اعتمادات ضريبية ومزايا يمكن للمهاجرين الجدد المطالبة بها — الكثير من الناس يفوتون هذه ويتركون أموالاً مجانية على الطاولة. ائتمان ضريبة GST/HST يعطي أصحاب الدخل المنخفض والمتوسط حتى 500 دولار سنويًا تلقائيًا عند تقديم ضرائبك. مزايا الطفل الكندي تعطي العائلات حتى 7,000 دولار سنويًا لكل طفل تحت سن 18 — يجب عليك تقديم ضرائب كل عام لمواصلة استلامها. حافز العمل المناخي يدفع مدفوعات ربع سنوية لسكان المقاطع المؤهلة. يجب عليك تقديم إقرار ضريبي كل عام حتى لو لم يكن لديك دخل لتلقي هذه المزايا."
      ],
      fr: [
        "Le Canada a plusieurs crédits d'impôt et prestations que les nouveaux arrivants peuvent réclamer — beaucoup de gens manquent ceux-ci et laissent de l'argent gratuit sur la table. Le crédit de TPS/TVH donne aux travailleurs à faible et moyen revenu jusqu'à 500 $ par année automatiquement lorsque vous déclarez vos impôts. La Prestation canadienne pour enfants donne aux familles jusqu'à 7,000 $ par année par enfant de moins de 18 ans — vous devez déclarer vos impôts chaque année pour continuer à la recevoir. L'Incitatif à l'action climatique verse des paiements trimestriels aux résidents des provinces admissibles. Vous devez déclarer une déclaration de revenus chaque année même si vous n'avez aucun revenu pour recevoir ces prestations."
      ],
      pa: [
        "ਕੈਨੇਡਾ ਦੇ ਕਈ ਟੈਕਸ ਕ੍ਰੈਡਿਟ ਅਤੇ ਲਾਭ ਹਨ ਜਿਨ੍ਹਾਂ ਨੂੰ ਨਵੇਂ ਆਉਣ ਵਾਲੇ ਦਾਵਾ ਕਰ ਸਕਦੇ ਹਨ — ਬਹੁਤ ਸਾਰੇ ਲੋਕ ਇਹਨਾਂ ਨੂੰ ਚੁਕ ਜਾਂਦੇ ਹਨ ਅਤੇ ਟੇਬਲ 'ਤੇ ਮੁਫਤ ਪੈਸੇ ਛੱਡ ਦਿੰਦੇ ਹਨ। GST/HST ਕ੍ਰੈਡਿਟ ਘੱਟ ਅਤੇ ਦਰਮਿਆਨੀ ਆਮਦਨ ਵਾਲਿਆਂ ਨੂੰ ਹਰ ਸਾਲ $500 ਤੱਕ ਆਟੋਮੈਟਿਕ ਤੌਰ 'ਤੇ ਦਿੰਦਾ ਹੈ ਜਦੋਂ ਤੁਸੀਂ ਆਪਣੇ ਟੈਕਸ ਦਾਖਲ ਕਰਦੇ ਹੋ। ਕੈਨੇਡਾ ਚਾਈਲਡ ਬੇਨਿਫਿਟ ਪਰਿਵਾਰਾਂ ਨੂੰ ਹਰ ਸਾਲ ਹਰ 18 ਸਾਲ ਤੋਂ ਘੱਟ ਬੱਚੇ ਦੇ ਲਈ $7,000 ਤੱਕ ਦਿੰਦਾ ਹੈ — ਤੁਹਾਨੂੰ ਇਸ ਨੂੰ ਪ੍ਰਾਪਤ ਕਰਨ ਲਈ ਹਰ ਸਾਲ ਟੈਕਸ ਦਾਖਲ ਕਰਨੇ ਪਵੇਗੇ। ਕਲਾਈਮੇਟ ਐਕਸ਼ਨ ਇੰਸੈਂਟਿਵ ਯੋਗ ਪ੍ਰਾਂਤਾਂ ਦੇ ਨਿਵਾਸੀਆਂ ਨੂੰ ਤਿਮਾਹੀ ਭੁਗਤਾਨ ਕਰਦਾ ਹੈ। ਤੁਹਾਨੂੰ ਇਹਨਾਂ ਲਾਭ ਪ੍ਰਾਪਤ ਕਰਨ ਲਈ ਹਰ ਸਾਲ ਟੈਕਸ ਰਿਟਰਨ ਦਾਖਲ ਕਰਨਾ ਪਵੇਗਾ ਭਲੇ ਹੀ ਤੁਹਾਡੀ ਕੋਈ ਆਮਦਨ ਨਹੀਂ ਹੈ।"
      ]
    },
    quiz: [
      {
        question: {
          en: "Do you need to file a tax return to receive Canadian government benefits like the GST credit?",
          es: "¿Necesitas presentar una declaración de impuestos para recibir beneficios del gobierno canadiense como el crédito de GST?",
          hi: "क्या आपको कैनेडीअन सरकारी लाभ जैसे GST क्रेडिट प्राप्त करने के लिए टैक्स रिटर्न दाखिल करना होगा?",
          tl: "Kailangan mo bang i-file ang tax return upang makatanggap ng mga benepisyo ng gobyerno ng Canada tulad ng GST credit?",
          zh: "您需要报税才能获得像GST抵免这样的加拿大政府福利吗？",
          ar: "هل تحتاج إلى تقديم إقرار ضريبي لتلقي مزايا الحكومة الكندية مثل ائتمان ضريبة GST?",
          fr: "Devez-vous déclarer une déclaration de revenus pour recevoir les prestations du gouvernement canadien comme le crédit de TPS?",
          pa: "ਕੀ ਤੁਹਾਨੂੰ ਕੈਨੇਡੀਅਨ ਸਰਕਾਰੀ ਲਾਭ ਜਿਵੇਂ GST ਕ੍ਰੈਡਿਟ ਪ੍ਰਾਪਤ ਕਰਨ ਲਈ ਟੈਕਸ ਰਿਟਰਨ ਦਾਖਲ ਕਰਨਾ ਪਵੇਗਾ?"
        },
        options: {
          en: ["No — benefits are automatic", "Yes — you must file every year"],
          es: ["No — los beneficios son automáticos", "Sí — debes presentar cada año"],
          hi: ["नहीं — लाभ स्वचालित हैं", "हाँ — आपको हर साल दाखिल करना होगा"],
          tl: ["Hindi — awtomatiko ang mga benepisyo", "Oo — kailang mag-file bawat taon"],
          zh: ["不需要——福利是自动的", "是的——您必须每年报税"],
          ar: ["لا — المزايا تلقائية", "نعم — يجب عليك التقديم كل عام"],
          fr: ["Non — les prestations sont automatiques", "Oui — vous devez déclarer chaque année"],
          pa: ["ਨਹੀਂ — ਲਾਭ ਆਟੋਮੈਟਿਕ ਹਨ", "ਹਾਂ — ਤੁਹਾਨੂੰ ਹਰ ਸਾਲ ਦਾਖਲ ਕਰਨਾ ਪਵੇਗਾ"]
        },
        correctIndex: 1
      }
    ]
  },
  {
    id: "tfsa-saving",
    isPremium: true,
    title: {
      en: "How to use a TFSA to grow your money",
      es: "Cómo usar una TFSA para hacer crecer tu dinero",
      hi: "TFSA का उपयोग अपने पैसे को बढ़ाने के लिए",
      tl: "Kung paano gamitin ang TFSA upang palaguin ang iyong pera",
      zh: "如何使用TFSA来增加您的资金",
      ar: "كيفية استخدام TFSA لتنمية أموالك",
      fr: "Comment utiliser un CELI pour faire croître votre argent",
      pa: "TFSA ਦੀ ਵਰਤੋਂ ਆਪਣੇ ਪੈਸੇ ਨੂੰ ਵਧਾਉਣ ਲਈ ਵਰਤੋਂ"
    },
    subtitle: {
      en: "Canada's most powerful free savings account explained simply",
      es: "La cuenta de ahorro gratuita más poderosa de Canadá explicada simplemente",
      hi: "कैनेडा का सबसे शक्तिशाली मुफ्त बचत खाता खਾਤਾ ਸਰਲ ਸਮਝਾਇਆ",
      tl: "Ang pinakamakapangyariang libreng savings account sa Canada ipinaliwan nang simple",
      zh: "加拿大最强大的免费储蓄账户简单解释",
      ar: "أقوى حساب توفير مجاني في كندا مبسط الشرح",
      fr: "Le compte d'épargne gratuit le plus puissant du Canada expliqué simplement",
      pa: "ਕੈਨੇਡਾ ਦਾ ਸਭ ਤੋਂ ਸ਼ਕਤੀਸ਼ਾਲ ਮੁਫਤ ਬਚਤ ਖਾਤਾ ਸਰਲ ਸਮਝਾਇਆ"
    },
    category: "Saving",
    content: {
      en: [
        "A Tax Free Savings Account or TFSA is one of the best financial tools available to Canadian residents. Any money you earn inside a TFSA — from interest, dividends or investments — is completely tax free forever. Every Canadian resident over 18 gets $6,000 to $7,000 of new contribution room each year and unused room carries forward indefinitely. You can hold cash, GICs, mutual funds and stocks inside a TFSA — it is not just a savings account. Unlike an RRSP you can withdraw money any time with no tax penalty and is room comes back the following year."
      ],
      es: [
        "Una Cuenta de Ahorro Libre de Impuestos o TFSA es una de las mejores herramientas financieras disponibles para los residentes canadienses. Cualquier dinero que ganes dentro de una TFSA — de intereses, dividendos o inversiones — es completamente libre de impuestos para siempre. Cada residente canadiense mayor de 18 años obtiene de $6,000 a $7,000 de nuevo espacio de contribución cada año y el espacio no utilizado se traslada indefinidamente. Puedes mantener efectivo, GICs, fondos mutuos y acciones dentro de una TFSA — no es solo una cuenta de ahorros. A diferencia de un RRSP puedes retirar dinero en cualquier momento sin penalización fiscal y el espacio regresa el año siguiente."
      ],
      hi: [
        "एक टैक्स फ्री सेविंग अकाउंट या TFSA कनाडाई निवासियों के लिए उपलब्ध सबसे अच्छे वित्तीय उपकरणों में से एक है। TFSA के अंदर आप जो भी पैसा कमाते हैं — ब्याज, लाभांश या निवेशनों से — स्थायी रूप से पूरी तरह टैक्स मुक्त है। हर 18 वर्ष से अधिक कनाडाई निवासी प्रति वर्ष $6,000 से $7,000 का नया योगदान कमरा प्राप्त करता है और अप्रयुक्त कमरा अनिश्चित रूप से आगे बढ़ता है। आप TFSA के अंदर नकद, GICs, म्यूचुअल फंड और स्टॉक रख सकते हैं — यह सिर्फ एक बचत खाता खाता नहीं है। RRSP के विपरीत, आप किसी भी समय बिना टैक्स दंड के पैसे निकाल सकते हैं और कमरा अगले वर्ष वापस आता है।"
      ],
      tl: [
        "Ang isang Tax Free Savings Account o TFSA ay isa sa mga pinakamahusay na pinansyal na kagamitan na magagamit sa mga residente ng Canada. Anumang pera na kumita mo sa loob ng isang TFSA — mula sa interest, dividendos o investments — ay kumpleto nang tax libre forever. Bawat Canadian resident na higit sa 18 taong gulang ay nakakakuha ng $6,000 hanggang $7,000 ng bagong contribution room bawat taon at ang hindi nagamit na room ay isinasakat nang walang hangganan. Maaari mong hawak ang cash, GICs, mutual funds at stocks sa loob ng isang TFSA — hindi ito isang savings account lang. Hindi tulad ng RRSP maaari mong i-withdraw ang pera anumang oras nang walang tax penalty at ang room ay bumalik sa sumunod na taon."
      ],
      zh: [
        "免税储蓄账户或TFSA是加拿大居民可用的最佳金融工具之一。您在TFSA内赚取的任何资金——来自利息、股息或投资——永远完全免税。每位18岁以上的加拿大居民每年获得6,000至7,000加元的新供款额度，未使用的额度无限期结转。您可以在TFSA内持有现金、GIC、共同基金和股票——它不仅仅是一个储蓄账户。与RRSP不同，您可以随时提取资金而无需税务处罚，并且额度会在下一年恢复。"
      ],
      ar: [
        "حساب التوفير المعفى من الضرائب أو TFSA هو أحد أفضل الأدوات المالية المتاحة للمقيمين الكنديين. أي أموال تكسبها داخل TFSA — من الفوائد أو الأرباح الموزعة أو الاستثمارات — معفاة تمامًا من الضرائب إلى الأبد. كل مقيم كندي فوق سن 18 يحصل على 6,000 إلى 7,000 دولار من مساحة مساهمة جديدة كل سنة والمساحة غير المستخدمة تنتقل إلى ما لا نهاية. يمكنك الاحتفاظ بالنقود وصناديق الاستثمار والأسهم داخل TFSA — ليست مجرد حساب توفير. على عكس RRSP يمكنك سحب الأموال في أي وقت بدون عقوبة ضريبية والمساحة تعود في العام التالي."
      ],
      fr: [
        "Un Compte d'Épargne Libre d'Impôt ou CELI est l'un des meilleurs outils financiers disponibles pour les résidents canadiens. Tout argent que vous gagnez à l'intérieur d'un CELI — des intérêts, dividendes ou placements — est complètement exempt d'impôt pour toujours. Chaque résident canadien de plus de 18 ans obtient de 6,000 à 7,000 $ de nouvelle marge de contribution chaque année et la marge non utilisée est reportée indéfiniment. Vous pouvez détenir des liquidités, CPG, fonds communs et actions à l'intérieur d'un CELI — ce n'est pas seulement un compte d'épargne. Contrairement à un REER vous pouvez retirer de l'argent à tout moment sans pénalité fiscale et la marge revient l'année suivante."
      ],
      pa: [
        "ਇੱਕ ਟੈਕਸ ਫਰੀ ਸੇਵਿੰਗ ਅਕਾਊਂਟ ਜਾਂ TFSA ਕੈਨੇਡੀਅਨ ਨਿਵਾਸੀਆਂ ਲਈ ਉਪਲਬਧ ਸਭ ਤੋਂ ਸ਼ਕਤੀਸ਼ਾਲ ਵਿੱਤੀਏ ਉਪਕਰਣਾਂ ਵਿੱਚੋਂ ਇੱਕ ਹੈ। TFSA ਦੇ ਅੰਦਰ ਤੁਸੀਂ ਪੈਸਾ ਜੋ ਵੀ ਕਮਾਂਦੇ ਹੋ — ਬਿਆਜ, ਲਾਭਾਂਸ਼ ਜਾਂ ਨਿਵੇਸ਼ਾਂ ਤੋਂ — ਸਥਾਈ ਰੂਪ ਨਾਲ ਪੂਰੀ ਤਰਹਾਂ ਟੈਕਸ ਮੁਕਤ ਹੈ। ਹਰ 18 ਸਾਲ ਤੋਂ ਵੱਧ ਕੈਨੇਡੀਅਨ ਨਿਵਾਸੀ ਹਰ ਸਾਲ $6,000 ਤੋਂ $7,000 ਦੀ ਨਵੀਂ ਯੋਗਦਾਨ ਕਮਰਾ ਹਰ ਸਾਲ ਪ੍ਰਾਪਤ ਕਰਦਾ ਹੈ ਅਤੇ ਅਪ੍ਰਯੁਕਤ ਕਮਰਾ ਅਨਿਸ਼ਚਿਤ ਰੂਪ ਨਾਲ ਅਗੇ ਵਧਦਾ ਹੈ। ਤੁਸੀਂ TFSA ਦੇ ਅੰਦਰ ਨਕਦ, GICs, ਮਿਊਚੂਅਲ ਫੰਡ ਅਤੇ ਸਟੌਕ ਰੱਖ ਸਕਦੇ ਹੋ — ਇਹ ਸਿਰਫ ਇੱਕ ਬਚਤ ਖਾਤਾ ਖਾਤਾ ਨਹੀਂ ਹੈ। RRSP ਦੇ ਉਲਟ, ਤੁਸੀਂ ਕਿਸੇ ਵੀ ਸਮੇਂ ਬਿਨਾ ਟੈਕਸ ਦੰਡ ਦੇ ਬਿਨਾ ਪੈਸੇ ਨਿਕਾਲ ਸਕਦੇ ਹੋ ਅਤੇ ਕਮਰਾ ਅਗਲੇ ਸਾਲ ਵਾਪਸ ਆਉਂਦਾ ਹੈ।"
      ]
    },
    quiz: [
      {
        question: {
          en: "When you withdraw money from a TFSA do you pay tax on it?",
          es: "¿Cuando retiras dinero de una TFSA pagas impuestos sobre él?",
          hi: "ਜਦੋਂ ਤੁਸੀਂ TFSA ਤੋਂ ਪੈਸੇ ਨਿਕਾਲਦੇ ਹੋ ਤਾਂ ਕੀ ਤੁਹਾਨੂੰ ਟੈਕਸ ਦੇਣਾ ਪਵੇਂਦਾ ਹੈ?",
          tl: "Kapag i-withdraw mo ang pera mula sa isang TFSA babayaran mo ba ng tax dito?",
          zh: "当您从TFSA提取资金时需要缴税吗？",
          ar: "عندما تسحب الأموال من TFSA هل تدفع ضريبة عليها؟",
          fr: "Quand vous retirez de l'argent d'un CELI payez-vous de l'impôt dessus?",
          pa: "ਜਦੋਂ ਤੁਸੀਂ TFSA ਤੋਂ ਪੈਸੇ ਨਿਕਾਲਦੇ ਹੋ ਤਾਂ ਕੀ ਤੁਹਾਨੂੰ ਟੈਕਸ ਦੇਣਾ ਪਵੇਂਦਾ ਹੈ?"
        },
        options: {
          en: ["Yes — withdrawals are taxed", "No — withdrawals are tax free"],
          es: ["Sí — los retiros están gravados", "No — los retiros están libres de impuestos"],
          hi: ["हाँ — निकासी पर टैक्स लगता है", "नहीं — निकासी टैक्स मुक्त है"],
          tl: ["Oo — ang mga withdrawal ay may tax", "Hindi — ang mga withdrawal ay tax free"],
          zh: ["是的——提款需要缴税", "不——提款免税"],
          ar: ["نعم — عمليات السحب تخضع للضريبة", "لا — عمليات السحب معفاة من الضرائب"],
          fr: ["Oui — les retraits sont imposés", "Non — les retraits sont libres d'impôt"],
          pa: ["ਹਾਂ — ਨਿਕਾਸੀ 'ਤੇ ਟੈਕਸ ਲੱਗਦਾ ਹੈ", "ਨਹੀਂ — ਨਿਕਾਸੀ ਟੈਕਸ ਮੁਕਤ ਹੈ"]
        },
        correctIndex: 1
      }
    ]
  }
]
