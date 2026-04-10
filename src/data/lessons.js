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
    content: {
      en: [
        "Opening a bank account is one of the first steps to establishing financial life in Canada or the US. Banks and credit unions need to verify your identity under federal regulations, so you'll need specific documents. Most institutions require government-issued photo ID (like a passport or driver's license), proof of address (utility bill, lease agreement, or official mail), and your immigration documents (work permit, study permit, or permanent resident card).",
        "There are two main types of bank accounts: chequing accounts and savings accounts. A chequing account is designed for daily transactions—paying bills, making purchases with your debit card, withdrawing cash, and receiving direct deposits from your employer. Most chequing accounts include unlimited debit transactions and often come with a monthly fee that can be waived if you maintain a minimum balance or set up direct deposits.",
        "Savings accounts are designed to help you save money for future goals. They typically offer higher interest rates than chequing accounts and may have limits on monthly withdrawals. Some savings accounts are completely free, while others charge fees if you don't maintain a minimum balance. High-yield savings accounts offer better interest rates but may require higher minimum balances.",
        "When choosing a bank, consider both traditional banks and credit unions. Traditional banks like RBC, TD, BMO, CIBC, and Scotiabank have extensive branch networks and advanced digital banking platforms. Credit unions are member-owned cooperatives that often offer better rates and lower fees, but may have fewer locations. Many newcomers start with a major bank for convenience, then explore credit unions later.",
        "Digital-only banks are another option, offering no-fee accounts and competitive interest rates. While they lack physical branches, they provide excellent mobile banking apps, 24/7 customer support, and often reimburse ATM fees. Popular options include Tangerine, Simplii Financial, EQ Bank, and Neo Financial.",
        "When you visit a bank branch, expect to spend 30-60 minutes opening your account. The bank representative will explain different account options, help you choose based on your needs, and set up online banking access. You'll receive your debit card immediately, which you can activate and start using right away. PIN numbers are typically chosen during the visit.",
        "Mobile banking apps have become essential tools for managing your finances. You can check balances, transfer money, pay bills, deposit checks by taking photos, and set up automatic savings transfers. Most apps also include budgeting features and spending categorization to help you track your financial habits.",
        "Understanding bank fees is crucial for avoiding unnecessary charges. Common fees include monthly account fees, overdraft fees (when you spend more than you have), ATM withdrawal fees at other banks' machines, wire transfer fees, and foreign transaction fees. Many banks offer student or newcomer packages with fee waivers for the first 6-12 months.",
        "Building a relationship with your bank can benefit you long-term. After several months of responsible banking, you may qualify for credit cards, lines of credit, or mortgages. Your banking history demonstrates financial responsibility to lenders, making it easier to access other financial products when needed.",
        "Security is paramount in banking. Never share your PIN or online banking password with anyone. Enable two-factor authentication on your banking app, use strong unique passwords, and monitor your accounts regularly for unauthorized transactions. Report any suspicious activity immediately to protect your money and identity."
      ],
      es: [
        "Abrir una cuenta bancaria es uno de los primeros pasos para establecer vida financiera en Canadá o EE. UU. Los bancos y cooperativas de crédito necesitan verificar tu identidad bajo regulaciones federales, así que necesitarás documentos específicos. La mayoría de las instituciones requieren identificación con foto emitida por el gobierno (como pasaporte o licencia de conducir), comprobante de domicilio (factura de servicios, contrato de alquiler o correo oficial), y tus documentos de inmigración (permiso de trabajo, permiso de estudio o tarjeta de residente permanente).",
        "Hay dos tipos principales de cuentas bancarias: cuentas de cheques y cuentas de ahorros. Una cuenta de cheques está diseñada para transacciones diarias—pagar facturas, hacer compras con tu tarjeta de débito, retirar efectivo y recibir depósitos directos de tu empleador. La mayoría de las cuentas de cheques incluyen transacciones de débito ilimitadas y a menudo vienen con una tarifa mensual que puede ser exenta si mantienes un saldo mínimo o configuras depósitos directos.",
        "Las cuentas de ahorros están diseñadas para ayudarte a ahorrar dinero para metas futuras. Típicamente ofrecen tasas de interés más altas que las cuentas de cheques y pueden tener límites en retiros mensuales. Algunas cuentas de ahorros son completamente gratuitas, mientras que otras cobran tarifas si no mantienes un saldo mínimo. Las cuentas de ahorros de alto rendimiento ofrecen mejores tasas de interés pero pueden requerir saldos mínimos más altos.",
        "Al elegir un banco, considera tanto bancos tradicionales como cooperativas de crédito. Los bancos tradicionales como RBC, TD, BMO, CIBC y Scotiabank tienen redes extensas de sucursales y plataformas avanzadas de banca digital. Las cooperativas de crédito son cooperativas propiedad de miembros que a menudo ofrecen mejores tasas y tarifas más bajas, pero pueden tener menos ubicaciones. Muchos recién llegados comienzan con un banco importante por conveniencia, luego exploran cooperativas de crédito más tarde.",
        "Los bancos digitales son otra opción, ofreciendo cuentas sin tarifas y tasas de interés competitivas. Aunque carecen de sucursales físicas, proporcionan excelentes aplicaciones de banca móvil, soporte al cliente 24/7 y a menudo reembolsan tarifas de ATM. Opciones populares incluyen Tangerine, Simplii Financial, EQ Bank y Neo Financial.",
        "Cuando visitas una sucursal bancaria, espera pasar 30-60 minutos abriendo tu cuenta. El representante del banco explicará diferentes opciones de cuenta, te ayudará a elegir basándose en tus necesidades y configurará el acceso a banca en línea. Recibirás tu tarjeta de débito inmediatamente, que puedes activar y comenzar a usar de inmediato. Los números PIN típicamente se eligen durante la visita.",
        "Las aplicaciones de banca móvil se han convertido en herramientas esenciales para gestionar tus finanzas. Puedes verificar saldos, transferir dinero, pagar facturas, depositar cheques tomando fotos y configurar transferencias automáticas de ahorro. La mayoría de las aplicaciones también incluyen características de presupuesto y categorización de gastos para ayudarte a rastrear tus hábitos financieros.",
        "Entender las tarifas bancarias es crucial para evitar cargos innecesarios. Las tarifas comunes incluyen tarifas mensuales de cuenta, tarifas de sobregiro (cuando gastas más de lo que tienes), tarifas de retiro de ATM en máquinas de otros bancos, tarifas de transferencia bancaria y tarifas de transacciones extranjeras. Muchos bancos ofrecen paquetes para estudiantes o recién llegados con exenciones de tarifas para los primeros 6-12 meses.",
        "Construir una relación con tu banco puede beneficiarte a largo plazo. Después de varios meses de banca responsable, puedes calificar para tarjetas de crédito, líneas de crédito o hipotecas. Tu historial bancario demuestra responsabilidad financiera a los prestamistas, facilitando el acceso a otros productos financieros cuando sea necesario.",
        "La seguridad es primordial en la banca. Nunca compartas tu PIN o contraseña de banca en línea con nadie. Habilita la autenticación de dos factores en tu aplicación bancaria, usa contraseñas fuertes y únicas, y monitorea tus cuentas regularmente para transacciones no autorizadas. Reporta cualquier actividad sospechosa inmediatamente para proteger tu dinero e identidad."
      ],
      hi: [
        "कनाडा या यूएस में बैंक खाता खोलना वित्तीय जीवन स्थापित करने के पहले कदमों में से एक है। बैंकों और क्रेडिट यूनियनों को संघीय नियमों के तहत आपकी पहचान सत्यापित करने की आवश्यकता होती है, इसलिए आपको विशिष्ट दस्तावेजों की आवश्यकता होगी। अधिकांश संस्थानों को सरकार द्वारा जारी फोटो पहचान (पासपोर्ट या ड्राइवर लाइसेंस), पता प्रमाण (यूटिलिटी बिल, लीज समझौता, या आधिकारिक मेल), और आपके आव्रजन दस्तावेज (वर्क परमिट, स्टडी परमिट, या परमानेंट रेजिडेंट कार्ड) की आवश्यकता होगी।",
        "बैंक खातों के दो मुख्य प्रकार हैं: चेकिंग खाते और बचत खाते। एक चेकिंग खाता दैनिक लेनदेन के लिए डिज़ाइन किया गया है—बिल भुगतान करना, अपने डेबिट कार्ड से खरीदारी करना, नकद निकालना, और अपने नियोक्ता से प्रत्यक्ष जमा प्राप्त करना। अधिकांश चेकिंग खातों में असीमित डेबिट लेनदेन शामिल होते हैं और अक्सर मासिक शुल्क के साथ आते हैं जिसे न्यूनतम शेष राशि बनाए रखने या प्रत्यक्ष जमा स्थापित करने पर माफ किया जा सकता है।",
        "बचत खाते भविष्य लक्ष्यों के लिए डिज़ाइन किए गए हैं। वे आमतौर पर चेकिंग खातों की तुलना में उच्च ब्याज दरें प्रदान करते हैं और मासिक निकासी पर सीमाएं हो सकती हैं। कुछ बचत खाते पूरी तरह से मुफ्त हैं, जबकि अन्य शुल्क लगाते हैं यदि आप न्यूनतम शेष राशि नहीं बनाए रखते। उच्च-उपज बचत खाते बेहतर ब्याज दरें प्रदान करते हैं लेकिन उच्चतर न्यूनतम शेष राशियों की आवश्यकता हो सकती है।",
        "बैंक चुनते समय पारंपरिक बैंकों और क्रेडिट यूनियनों दोनों पर विचार करें। पारंपरिक बैंक जैसे RBC, TD, BMO, CIBC, और Scotiabank के पास व्यापक शाखा नेटवर्क और उन्नत डिजिटल बैंकिंग प्लेटफॉर्म हैं। क्रेडिट यूनियन सदस्य-स्वामित सहकारी हैं जो अक्सर बेहतर दरें और कम शुल्क प्रदान करते हैं, लेकिन कम स्थानों पर हो सकते हैं। कई नए आने वाले सुविधा के लिए एक प्रमुख बैंक से शुरू करते हैं, फिर बाद में क्रेडिट यूनियनों का पता लगाते हैं।",
        "डिजिटल-केवल बैंक एक और विकल्प हैं, जो शुल्क-मुक्त खाते और प्रतिस्पर्धी ब्याज दरें प्रदान करते हैं। जबकि उनके पास भौतिक शाखाएं नहीं हैं, वे उत्कृष्ट मोबाइल बैंकिंग ऐप्स, 24/7 ग्राहक समर्थन, और अक्सर ATM शुल्क प्रतिपूर्ति करते हैं। लोकप्रिय विकल्पों में Tangerine, Simplii Financial, EQ Bank, और Neo Financial शामिल हैं।",
        "जब आप बैंक शाखा का दौरा करते हैं, तो अपना खाता खोलने में 30-60 मिनट बिताने की उम्मीद करें। बैंक प्रतिनिधि विभिन्न खाता विकल्पों को समझाएगा, आपकी आवश्यकताओं के आधार पर आपका चयन में मदद करेगा, और ऑनलाइन बैंकिंग पहुंच स्थापित करेगा। आप तुरंत अपना डेबिट कार्ड प्राप्त करेंगे, जिसे आप सक्रिय कर और उपयोग शुरू कर सकते हैं। PIN नंबर आमतौर पर दौरे के दौरान चुने जाते हैं।",
        "मोबाइल बैंकिंग ऐप्स आपके वित्त को प्रबंधित करने के लिए आवश्यक उपकरण बन गए हैं। आप शेष राशि जांच सकते हैं, पैसे स्थानांतरित कर सकते हैं, बिल भुगतान कर सकते हैं, फोटो लेकर चेक जमा कर सकते हैं, और स्वचालित बचत ट्रांसफर स्थापित कर सकते हैं। अधिकांश ऐप्स में बजटिंग सुविधाएं और खर्च वर्गीकरण भी शामिल हैं ताकि आप अपने वित्तीय आदतों को ट्रैक कर सकें।",
        "बैंक शुल्कों को समझना अनावश्यक शुल्कों से बचने के लिए महत्वपूर्ण है। सामान्य शुल्कों में मासिक खाता शुल्क, ओवरड्राफ्ट शुल्क (जब आप अपने पास से अधिक खर्च करते हैं), ATM निकासी शुल्क (जब आप अपने पास से अधिक खर्च करते हैं), वायर ट्रांसफर शुल्क, और विदेशी लेनदेन शुल्क शामिल हैं। कई बैंक छात्रों या नए आने वालों के लिए पहले 6-12 महीनों के लिए शुल्क माफी प्रदान करते हैं।",
        "अपने बैंक के साथ रिश्ता बनाना आपको दीर्घकालिक रूप से लाभ दे सकता है। कई महीनों के जिम्मेदार बैंकिंग के बाद, आप क्रेडिट कार्ड, क्रेडिट लाइनों, या गिरवी के लिए योग्य हो सकते हैं। आपका बैंकिंग इतिहास लेंडर्स को वित्तीय जिम्मेदारी दर्शाता है, जिससे आवश्यकता पड़ने पर अन्य वित्तीय उत्पादों तक पहुंच करना आसान बना जाता है।",
        "बैंकिंग में सुरक्षा सर्वोपरि है। कभी भी अपना PIN या ऑनलाइन बैंकिंग पासवर्ड किसी के साथ साझा न करें। अपने बैंकिंग ऐप पर दो-कारक प्रमाणीकरण सक्षम करें, मजबूत अद्वितीय पासवर्ड का उपयोग करें, और अनधिकृत लेनदेन के लिए अपने खातों की नियमित रूप से निगरानी करें। किसी भी संदिग्ध गतिविधि को तुरंत अपने पैसे और पहचान की रिपोर्ट करें।"
      ],
      tl: [
        "Ang pagbubukas ng isang bank account ay isa sa mga unang hakbang upang magtataguy ng buhay na pananalapi sa Canada o US. Ang mga bangko at credit unions ay kailangang suriin ang iyong identidad sa ilalim ng pederal na regulasyon, kaya kakailangan mo ng mga tukoy na dokumento. Karamihan sa mga institusyon ay nangangangailangan ng government-issued photo ID (tulad ng passport o driver's license), patunay ng address (utility bill, lease agreement, o opisyal na mail), at iyong mga dokumento sa imigrasyon (work permit, study permit, o permanent resident card).",
        "Mayroong dalawang pangunahing uri ng mga bank account: chequing accounts at savings accounts. Ang chequing account ay idinisenyo para sa mga araw-araw na transaksyon—pagbabayad ng mga bill, paggawa ng mga purchase gamit ang iyong debit card, pagkuha ng cash, at pagtanggap ng direktang deposito mula sa iyong employer. Karamihan sa mga chequing accounts ay kasama ang walang limitadong debit na transaksyon at karaniwang kasama ito sa isang buwanang bayad na maaaring ma-waive kung panatili mo ang isang minimum balance o mag-set up ng mga direktang deposito.",
        "Ang mga savings accounts ay idinisenyo upang tumulong sa iyo na mag-ipon ng pera para sa mga hinaharap na goal. Karaniwang sila ay nag-aalok ng mas mataas na interest rate kaysa sa mga chequing accounts at maaaring magkaroon ng mga limitasyon sa buwanang pagkuha. Ilan sa mga savings account ay ganap na libre, habang ang iba ay nagbabayad ng bayad kung hindi mo panatiliin ang isang minimum balance. Ang mga high-yield savings account ay nag-aalok ng mas maayos na interest rate ngunit maaaring mangangailangan ng mas mataas na minimum balance.",
        "Kapag pumipili ng isang bangko, isaalang mo ang parehong mga tradisyonal na bangko at credit unions. Ang mga tradisyonal na bangko tulad ng RBC, TD, BMO, CIBC, at Scotiabank ay may malawak na network ng mga sangay at advanced na digital banking platform. Ang mga credit union ay mga member-owned cooperatives na karaniwang nag-aalok ng mas maayos na rate at mas mababang bayad, ngunit maaaring may mas kaunting mga lokasyon. Marami sa mga bagong dating ay nagsisimula sa isang pangunahing bangko para sa kaginhawahan, pagkatapos ay tuklasin ang mga credit union mamaya.",
        "Ang mga digital-only bank ay isa pang opsyon, na nag-aalok ng mga no-fee account at competitive na interest rates. Bagama't wala silang pisikal na mga sangay, nagbibigay sila ng mga excellent na mobile banking apps, 24/7 customer support, at karaniwang nagre-reimburse ng mga ATM fee. Ang mga sikat na opsyon ay kasama ang Tangerine, Simplii Financial, EQ Bank, at Neo Financial.",
        "Kapag bumibisita ka sa isang sangay ng bangko, asahan na gumugit ka ng 30-60 minuto sa pagbubukas ng iyong account. Ang kinatawan ng bangko ay ipapaliwanag sa iyo ang iba't ibang account options, tutulungan kang na pumili batay sa iyong mga pangangailangan, at itataguy ang online banking access. Tatanggap mo agad ang iyong debit card, na maaari mong i-activate at magsimulang gamitin kaagahan. Ang mga numero ng PIN ay karaniwang pinipili sa panahon ng pagbisita.",
        "Ang mga mobile banking apps ay naging mga mahalagang tool para sa pamamahala sa iyong mga pananalapi. Maaari kang suriin ang mga balance, maglipat ng pera, magbayad ng mga bill, magdeposito ng mga check sa pamamagitan ng pagkuha ng mga litrato, at mag-set up ng mga automatic na savings transfer. Karamihan sa mga apps ay kasama rin ang mga budgeting feature at spending categorization upang tulungan kang subaybayan ang iyong mga pananalaping kaugalian.",
        "Ang pag-unawa sa mga bank fee ay kritikal para sa pag-iwas sa mga hindi kinakailangang bayad. Ang mga karaniwang bayad ay kasama ang buwanang account fee, overdraft fee (kapag gumugit ka ng higit pa sa sa iyong), ATM withdrawal fee sa mga makina ng iba pang bangko, wire transfer fee, at foreign transaction fee. Maraming bangko ay nag-aalok ng student o newcomer packages na may fee waiver para sa unang 6-12 buwan.",
        "Ang pagbuo ng isang relasyon sa iyong bangko ay maaaring makabenepisyo mo sa long-term. Matapos ang ilang buwan ng responsable na pagbabang, maaari kang kwalipika para sa mga credit card, lines of credit, o mga mortgages. Ang iyong banking history ay nagpapakita ng financial responsibility sa mga lender, na nagpapadali ng pag-access sa iba pang mga financial products kapag kinakailangan.",
        "Ang seguridad ay pinakamahalaga sa pagbabang. Huwag kailanman sa iyong PIN o online banking password sa sinuman. I-enable ang two-factor authentication sa iyong banking app, gamitin ang mga malakas na unique na password, at bantayan ang iyong mga account nang regular para sa mga awtorisadong transaksyon. Ulat ang anumang suspetsosong aktibidad kaagadan upang protektahan ang iyong pera at identidad."
      ]
    },
    quizzes: [
      {
        question: {
          en: "Which account type is best for daily transactions like paying bills and shopping?",
          es: "¿Qué tipo de cuenta es mejor para transacciones diarias como pagar facturas y compras?",
          hi: "बिल भुगतान और खरीदारी जैसे दैनिक लेनदेन के लिए कौन सा खाता प्रकार सबसे अच्छा है?"
        },
        options: {
          en: ["Savings account", "Chequing account"],
          es: ["Cuenta de ahorros", "Cuenta de cheques"],
          hi: ["बचत खाता", "चेकिंग खाता"],
          tl: ["Savings account", "Chequing account"]
        },
        correctIndex: 1
      },
      {
        question: {
          en: "What document is typically NOT required to open a bank account?",
          es: "¿Qué documento típicamente NO se requiere para abrir una cuenta bancaria?",
          hi: "बैंक खाता खोलने के लिए कौन सा दस्तावेज आमतौर पर आवश्यक नहीं है?"
        },
        options: {
          en: ["Government-issued photo ID", "Credit card statement"],
          es: ["Identificación con foto emitida por el gobierno", "Estado de cuenta de tarjeta de crédito"],
          hi: ["सरकार द्वारा जारी फोटो पहचान", "क्रेडिट कार्ड स्टेटमेंट"],
          tl: ["Government-issued photo ID", "Credit card statement"]
        },
        correctIndex: 1
      },
      {
        question: {
          en: "What is a key advantage of credit unions compared to traditional banks?",
          es: "¿Cuál es una ventaja clave de las cooperativas de crédito comparadas con los bancos tradicionales?",
          hi: "पारंपरिक बैंकों की तुलना में क्रेडिट यूनियनों का एक मुख्य लाभ क्या है?"
        },
        options: {
          en: ["They typically offer better rates and lower fees", "They have more branches worldwide"],
          es: ["Generalmente ofrecen mejores tasas y tarifas más bajas", "Tienen más sucursales en todo el mundo"],
          hi: ["वे आमतौर पर बेहतर दरें और कम शुल्क प्रदान करते हैं", "उनके दुनिया भर में अधिक शाखाएं हैं"],
          tl: ["They typically offer better rates and lower fees", "They have more branches worldwide"]
        },
        correctIndex: 0
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
    content: {
      en: [
        "Finding suitable housing is one of the biggest challenges for newcomers to Canada and the US. Understanding the rental market, your rights as a tenant, and how to protect yourself legally can save you thousands of dollars and prevent serious housing problems. This comprehensive guide covers everything you need to know about renting your first home.",
        "Types of housing vary significantly between urban and rural areas. In major cities like Toronto, Vancouver, New York, or San Francisco, you'll find apartments, condos, townhouses, and basement suites. In smaller cities and suburban areas, single-family homes are more common. Each type has different costs, maintenance responsibilities, and lifestyle benefits.",
        "Before starting your housing search, understand your budget. Financial experts recommend spending no more than 30-35% of your gross monthly income on housing. This includes rent, utilities (hydro/electricity, water, heating), and tenant insurance. For example, if you earn $4,000 monthly, your housing budget should be around $1,200-1,400 total.",
        "The rental application process in Canada and the US requires several documents: proof of income (employment letter, pay stubs, or tax returns), credit history, references (previous landlords or employers), and sometimes a guarantor if you're new to the country. Many landlords require first and last month's rent plus a security deposit equal to one month's rent.",
        "Understanding lease agreements is critical. A standard lease should specify: rent amount and due date, lease term (typically 12 months), included utilities, rules about pets and guests, maintenance responsibilities, and conditions for termination. Never sign a lease without reading it completely and understanding every clause.",
        "Tenant rights vary by province or state but generally include: the right to a habitable living space, privacy protections (landlords must give notice before entering), protection from unfair rent increases, and the right to dispute security deposit deductions. In Canada, each province has a landlord-tenant board; in the US, state housing departments handle these issues.",
        "Security deposits are typically one month's rent and must be returned within a specific timeframe after you move out (usually 14-30 days). Landlords can only deduct for unpaid rent, damage beyond normal wear and tear, or cleaning costs. Always document the property condition with photos/videos when you move in and out.",
        "Roommates can significantly reduce housing costs but require clear agreements. Even with friends, create a written roommate agreement covering: rent split, utility divisions, cleaning schedules, guest policies, and rules for shared spaces. This prevents conflicts and protects everyone legally if disputes arise.",
        "Tenant insurance is often required by landlords and is crucial for protecting your belongings. It covers theft, fire, water damage, and liability if someone is injured in your unit. Basic policies cost $15-30 monthly and provide $20,000-50,000 in coverage. This is one of the best investments you can make as a renter.",
        "When problems arise with your landlord, document everything in writing. Send emails or written notices for maintenance requests, keep copies of all correspondence, and take photos of issues. If problems aren't resolved, contact your local tenant rights organization or housing authority. Most jurisdictions offer free or low-cost legal assistance for tenant disputes."
      ],
      es: [
        "Encontrar vivienda adecuada es uno de los mayores desafíos para recién llegados a Canadá y EE. UU. Entender el mercado de alquiler, tus derechos como inquilino, y cómo protegerte legalmente puede ahorrarte miles de dólares y prevenir graves problemas de vivienda. Esta guía completa cubre todo lo que necesitas saber sobre alquilar tu primer hogar.",
        "Los tipos de vivienda varían significativamente entre áreas urbanas y rurales. En ciudades importantes como Toronto, Vancouver, Nueva York o San Francisco, encontrarás apartamentos, condominios, casas adosadas y suites en sótano. En ciudades más pequeñas y áreas suburbanas, las casas unifamiliares son más comunes. Cada tipo tiene diferentes costos, responsabilidades de mantenimiento y beneficios de estilo de vida.",
        "Antes de comenzar tu búsqueda de vivienda, entiende tu presupuesto. Los expertos financieros recomiendan gastar no más del 30-35% de tus ingresos mensuales brutos en vivienda. Esto incluye alquiler, servicios públicos (hidro/electricidad, agua, calefacción) y seguro de inquilino. Por ejemplo, si ganas $4,000 mensuales, tu presupuesto de vivienda debería ser alrededor de $1,200-1,400 total.",
        "El proceso de solicitud de alquiler en Canadá y EE. UU. requiere varios documentos: prueba de ingresos (carta de empleo, recibos de pago o declaraciones de impuestos), historial de crédito, referencias (propietarios anteriores o empleadores) y a veces un garante si eres nuevo en el país. Muchos propietarios requieren primer y último mes de alquiler más un depósito de seguridad igual a un mes de alquiler.",
        "Entender los contratos de alquiler es crítico. Un contrato estándar debe especificar: cantidad de alquiler y fecha de vencimiento, plazo del contrato (típicamente 12 meses), servicios públicos incluidos, reglas sobre mascotas e invitados, responsabilidades de mantenimiento y condiciones para terminación. Nunca firmes un contrato sin leerlo completamente y entender cada cláusula.",
        "Los derechos de inquilino varían por provincia o estado pero generalmente incluyen: el derecho a un espacio habitable, protecciones de privacidad (los propietarios deben dar aviso antes de entrar), protección contra aumentos de alquiler injustos y el derecho a disputar deducciones de depósito de seguridad. En Canadá, cada provincia tiene una junta de propietarios-inquilinos; en EE. UU., los departamentos de vivienda estatales manejan estos problemas.",
        "Los depósitos de seguridad son típicamente un mes de alquiler y deben ser devueltos dentro de un marco de tiempo específico después de que te mudes (usualmente 14-30 días). Los propietarios solo pueden deducir por alquiler no pagado, daño más allá del desgaste normal o costos de limpieza. Siempre documenta la condición de la propiedad con fotos/videos cuando te mudas y sales.",
        "Los compañeros de cuarto pueden reducir significativamente los costos de vivienda pero requieren acuerdos claros. Incluso con amigos, crea un acuerdo de compañero de cuarto por escrito cubriendo: división de alquiler, divisiones de servicios públicos, horarios de limpieza, políticas de invitados y reglas para espacios compartidos. Esto previene conflictos y protege legalmente a todos si surgen disputas.",
        "El seguro de inquilino a menudo es requerido por propietarios y es crucial para proteger tus pertenencias. Cubre robo, fuego, daños por agua y responsabilidad si alguien resulta herido en tu unidad. Las pólizas básicas cuestan $15-30 mensuales y proporcionan $20,000-50,000 en cobertura. Esta es una de las mejores inversiones que puedes hacer como inquilino.",
        "Cuando surgen problemas con tu propietario, documenta todo por escrito. Envía correos electrónicos o avisos escritos para solicitudes de mantenimiento, guarda copias de toda correspondencia y toma fotos de los problemas. Si los problemas no se resuelven, contacta tu organización local de derechos de inquilinos o autoridad de vivienda. La mayoría de jurisdicciones ofrecen asistencia legal gratuita o de bajo costo para disputas de inquilinos."
      ],
      hi: [
        "कनाडा और यूएस में नए आने वालों के लिए उपयुक्त आवास ढूंढना सबसे बड़ी चुनौतियों में से एक है। किराया बाजार को समझना, आपके एक किरायेदार के रूप में अधिकार, और कानूनी रूप से खुद की रक्षा कैसे करें, यह आपको हजारों डॉलर बचा सकता है और गंभीर आवास समस्याओं को रोक सकता है। यह व्यापक गाइड आपके पहले घर किराया लेने के लिए आवश्यक सब कुछ शामिल करती है।",
        "आवास के प्रकार शहरी और ग्रामीण क्षेत्रों के बीच काफी भिन्न होते हैं। टोरंटो, वैंकूवर, न्यूयॉर्क, या सैन फ्रांसिस्को जैसे प्रमुख शहरों में, आपको अपार्टमेंट, कोंडो, टाउनहाउस, और बेसमेंट सूट मिलेंगे। छोटे शहरों और उपनग्रीय क्षेत्रों में, एकल-परिवार घर अधिक सामान्य हैं। प्रत्येक प्रकार के अलग-अलग खर्च, रखरखाव की जिम्मेदारियां, और जीवनशैली लाभ हैं।",
        "अपने आवास खोज शुरू करने से पहले, अपने बजट को समझें। वित्तीय विशेषज्ञ अनुसारित करते हैं कि आप अपनी कुल मासिक आय का 30-35% से अधिक खर्च करने की सलाह देते हैं। इसमें किराया, उपयोगिती (हाइड्रो/बिजली, पानी, हीटिंग), और किरायेदार बीमा शामिल है। उदाहरण के लिए, यदि आप मासिक $4,000 कमाते हैं, तो आपका आवास बजट लगभग $1,200-1,400 कुल होना चाहिए।",
        "कनाडा और यूएस में किराया आवेदन प्रक्रिया में कई दस्तावेजों की आवश्यकता होती है: आय प्रमाण (रोजगार पत्र, वेतन स्लिप, या टैक्स रिटर्न), क्रेडिट इतिहास, संदर्भ (पिछले मकान मालिक या नियोक्ता), और कभी-कभी एक गारंटर यदि आप देश में नए हैं। कई मकान मालिक पहले और आखिरी महीने का किराया और एक महीने के बराबर सुरक्षा जमा की आवश्यकता रखते हैं।",
        "किराया समझौतों को समझना महत्वपूर्ण है। एक मानक किराया समझौते में निर्दिष्ट होना चाहिए: किराया राशि और नियत तिथि, किराया अवधि (आमतौर पर 12 महीने), शामिल उपयोगिती, पालतू और मेहमानों के बारे में नियम, और समापन की शर्तें। बिना पूरी तरह से पढ़े और हर खंड को समझे बिना किराया समझौते पर हस्ताक्षर न करें।",
        "किरायेदार अधिकार प्रांत या राज्य के अनुसार भिन्न होते हैं लेकिन आमतौर प्रदान करते हैं: रहने योग्य स्थान का अधिकार, गोपनीय सुरक्षा (मकान मालिकों को प्रवेश करने से पहले सूचना देना होगा), अनुचित किराया वृद्धि से सुरक्षा, और सुरक्षा जमा कटौती को विवादित करने का अधिकार। कनाडा में, प्रत्येक प्रांत में एक मकान-मालिक-किरायेदार बोर्ड है; यूएस में, राज्य आवास विभाग हैंडल करते हैं ये मुद्दों को संभालित करते हैं।",
        "सुरक्षा जमा आमतौर पर एक महीने के किराया के बराबर होता है और आपके बाहर निकलने के बाद एक विशिष्ट समय सीमा के भीतर वापस किया जाना चाहिए (आमतौर पर 14-30 दिन)। मकान मालिक केवल अवैत किराया के लिए, सामान्य पहने से अधिक क्षति के लिए, या सफाई लागत के लिए कट सकते हैं। हमेशा संपत्ति की स्थिति को फोटो/वीडियो के साथ दस्तावेजित करें जब आप अंदर और बाहर जाएं।",
        "रूममेट्स आवास लागत को महत्वपूर्ण रूप से कम कर सकते हैं लेकिन स्पष्ट समझौतों की आवश्यकता होती है। दोस्तों के साथ भी, एक लिखित रूममेट समझौता बनाएं जिसमें शामिल है: किराया विभाजन, उपयोगिती विभाजन, सफाई अनुसूची, मेहमान नीतियां, और साझा स्थानों के लिए नियम। यह संघर्ष रोकता है और यदि विवाद उठते हैं तो कानूनी रूप से सभी की रक्षा करता है।",
        "किरायेदार बीमा अक्सर मकान मालिकों द्वारा आवश्यक होता है और आपके सामानों की रक्षा के लिए महत्वपूर्ण है। यह चोरी, आग, पानी की क्षति, और दायित्व को कवर करता है यदि कोई आपके यूनिट में घायल होता है। बेसिक पॉलिसी $15-30 मासिक लागत हैं और $20,000-50,000 की कवरेज प्रदान करती हैं। यह एक किरायेदार के रूप में आप कर सकने वाली सर्वोत्तम निवेशन में से एक है।",
        "जब आपके मकान मालिक के साथ समस्याएं उत्पन्न होती हैं, तो सब कुछ लिखित रूप में दस्तावेजित करें। रखरखाव अनुरोधों के लिए ईमेल या लिखित सूचना भेजें, सभी पत्राचार की प्रतियां रखें, और समस्याओं की फोटो लें। यदि समस्याएं हल नहीं होती हैं, तो अपनी स्थानीय किरायेदार अधिकार संगठन या आवास प्राधिकरण से संपर्क करें। अधिकांश क्षेत्राधिकारी क्षेत्रों में किरायेदार विवादों के लिए मुफ्त या कम लागत वाली कानूनी सहायता प्रदान करते हैं।"
      ]
    },
    quizzes: [
      {
        question: {
          en: "What percentage of gross monthly income do financial experts recommend spending on housing?",
          es: "¿Qué porcentaje de los ingresos mensuales brutos recomiendan los expertos financieros gastar en vivienda?",
          hi: "वित्तीय विशेषज्ञ आवास पर कुल मासिक आय का कितना प्रतिशत खर्च करने की सलाह देते हैं?"
        },
        options: {
          en: ["30-35%", "50-60%"],
          es: ["30-35%", "50-60%"],
          hi: ["30-35%", "50-60%"]
        },
        correctIndex: 0
      },
      {
        question: {
          en: "What is typically required as a security deposit when renting?",
          es: "¿Qué se típicamente requiere como depósito de seguridad al alquilar?",
          hi: "किराया पर लेने के लिए सुरक्षा जमा के रूप में आमतौर पर क्या आवश्यक होता है?"
        },
        options: {
          en: ["One week's rent", "One month's rent"],
          es: ["Una semana de alquiler", "Un mes de alquiler"],
          hi: ["एक सप्ताह का किराया", "एक महीने का किराया"]
        },
        correctIndex: 1
      },
      {
        question: {
          en: "What does tenant insurance typically cover?",
          es: "¿Qué cubre típicamente el seguro de inquilino?",
          hi: "किरायेदार बीमा आमतौर पर क्या कवर करता है?"
        },
        options: {
          en: ["Theft, fire, water damage, and liability", "Only structural building damage"],
          es: ["Robo, fuego, daños por agua y responsabilidad", "Solo daños estructurales del edificio"],
          hi: ["चोरी, आग, पानी की क्षति, और दायित्व", "केवल संरचनात्मक भवन क्षति"]
        },
        correctIndex: 0
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
