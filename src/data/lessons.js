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
            contentBreakdown: [
              { type: "text", content: "A credit score is a number between 300 and 850 that tells lenders how reliably you pay back money. In Canada, scores above 660 are considered good. Above 760 is excellent." },
              { type: "example", title: "Real-world impact", content: "With a score of 750, you might get a mortgage at 4.5% interest. With a score of 580, the same mortgage could cost 7% — that's thousands of dollars more per year." },
              { type: "quickQuestion", question: "Which credit score range is considered excellent in Canada?", options: ["300 to 500", "500 to 660", "760 to 850", "660 to 760"], correct: 2, explanation: "760 and above is considered excellent and unlocks the best interest rates available." }
            ]
          },
          es: {
            headline: "¿Qué es una puntuación de crédito?",
            contentBreakdown: [
              { type: "text", content: "Una puntuación de crédito es un número entre 300 y 850 que indica a los prestamistas qué tan confiablemente devuelves el dinero. En Canadá, puntuaciones superiores a 660 son buenas. Más de 760 es excelente." },
              { type: "example", title: "Impacto en la vida real", content: "Con una puntuación de 750, podrías obtener una hipoteca al 4.5% de interés. Con 580, la misma hipoteca podría costar 7% — miles de dólares más al año." },
              { type: "quickQuestion", question: "¿Qué rango de puntuación se considera excelente en Canadá?", options: ["300 a 500", "500 a 660", "760 a 850", "660 a 760"], correct: 2, explanation: "760 o más se considera excelente y desbloquea las mejores tasas de interés disponibles." }
            ]
          }
        }
      },
      {
        type: "concept",
        content: {
          en: {
            headline: "No score vs bad score — a critical difference",
            contentBreakdown: [
              { type: "text", content: "When you arrive in Canada or the US, you do not have a zero credit score — you simply have no score yet. This is very different from having a bad credit history." },
              { type: "text", content: "No score = a blank slate. Lenders may still work with you. Bad score = a history of missed payments. Lenders see this as risky." },
              { type: "quickQuestion", question: "A newcomer arrives in Canada with no credit history. What is their credit score?", options: ["Zero", "300 (the lowest possible)", "They have no score yet", "500 (average)"], correct: 2, explanation: "No score and a bad score are completely different. As a newcomer, you start with a blank slate — which is actually an opportunity." }
            ]
          },
          es: {
            headline: "Sin puntaje vs mal puntaje — una diferencia clave",
            contentBreakdown: [
              { type: "text", content: "Cuando llegas a Canadá o EE.UU., no tienes un puntaje de cero — simplemente no tienes puntaje todavía. Esto es muy diferente a tener mal historial crediticio." },
              { type: "text", content: "Sin puntaje = hoja en blanco. Los prestamistas pueden trabajar contigo. Mal puntaje = historial de pagos fallidos. Los prestamistas lo ven como riesgoso." },
              { type: "quickQuestion", question: "Un recién llegado a Canadá no tiene historial crediticio. ¿Cuál es su puntaje?", options: ["Cero", "300 (el más bajo)", "Aún no tiene puntaje", "500 (promedio)"], correct: 2, explanation: "Sin puntaje y mal puntaje son completamente diferentes. Como recién llegado, empiezas desde cero — lo cual es una oportunidad." }
            ]
          }
        }
      },
      {
        type: "concept",
        content: {
          en: {
            headline: "The 5 factors that build your score",
            contentBreakdown: [
              { type: "text", content: "Your credit score is calculated from 5 factors: Payment history (35%), Credit utilization (30%), Length of credit history (15%), Credit mix (10%), and New inquiries (10%)." },
              { type: "example", title: "Payment history is king", content: "If you pay every bill on time for 12 months, this single habit accounts for 35% of your score improvement. One missed payment can drop your score by 50-100 points." },
              { type: "quickQuestion", question: "Which factor has the biggest impact on your credit score?", options: ["How many credit cards you have", "Payment history", "How long you've had credit", "Your income"], correct: 1, explanation: "Payment history makes up 35% of your score — the single largest factor. Pay on time, every time." }
            ]
          },
          es: {
            headline: "Los 5 factores que construyen tu puntaje",
            contentBreakdown: [
              { type: "text", content: "Tu puntaje se calcula con 5 factores: Historial de pagos (35%), Utilización del crédito (30%), Duración del historial (15%), Tipos de crédito (10%) y Nuevas consultas (10%)." },
              { type: "example", title: "El historial de pagos es lo más importante", content: "Si pagas cada factura a tiempo durante 12 meses, este solo hábito representa el 35% de la mejora de tu puntaje. Un pago atrasado puede bajarlo entre 50 y 100 puntos." },
              { type: "quickQuestion", question: "¿Qué factor tiene el mayor impacto en tu puntaje de crédito?", options: ["Cuántas tarjetas de crédito tienes", "Historial de pagos", "Hace cuánto tienes crédito", "Tu ingreso"], correct: 1, explanation: "El historial de pagos representa el 35% de tu puntaje — el factor individual más grande. Paga a tiempo, siempre." }
            ]
          }
        }
      },
      {
        type: "concept",
        content: {
          en: {
            headline: "How to start building credit as a newcomer",
            contentBreakdown: [
              { type: "text", content: "The fastest way to build credit from zero: get a secured credit card, use it for small purchases (groceries, phone bill), and pay the full balance every month." },
              { type: "text", content: "A secured card requires a deposit (usually $200-$500) that becomes your credit limit. After 6-12 months of on-time payments, you can upgrade to a regular card." },
              { type: "quickQuestion", question: "What makes a secured credit card different from a regular one?", options: ["It has lower interest rates", "You must put down a cash deposit as collateral", "It builds credit faster", "It requires a credit history to apply"], correct: 1, explanation: "A secured card requires a deposit — this protects the bank and makes it easier to approve newcomers with no credit history." }
            ]
          },
          es: {
            headline: "Cómo empezar a construir crédito como recién llegado",
            contentBreakdown: [
              { type: "text", content: "La forma más rápida de construir crédito desde cero: obtén una tarjeta de crédito asegurada, úsala para compras pequeñas (comida, teléfono) y paga el saldo completo cada mes." },
              { type: "text", content: "Una tarjeta asegurada requiere un depósito (generalmente $200-$500) que se convierte en tu límite de crédito. Después de 6-12 meses de pagos puntuales, puedes actualizar a una tarjeta regular." },
              { type: "quickQuestion", question: "¿Qué hace diferente a una tarjeta de crédito asegurada?", options: ["Tiene tasas de interés más bajas", "Debes depositar dinero en efectivo como garantía", "Construye crédito más rápido", "Requiere historial crediticio para solicitarla"], correct: 1, explanation: "Una tarjeta asegurada requiere un depósito — esto protege al banco y hace más fácil aprobar a recién llegados sin historial crediticio." }
            ]
          }
        }
      },
      {
        type: "concept",
        content: {
          en: {
            headline: "Credit utilization — the hidden lever",
            contentBreakdown: [
              { type: "text", content: "Credit utilization is the percentage of your credit limit you are using. If your limit is $1,000 and you spend $300, your utilization is 30%." },
              { type: "example", title: "The 30% rule", content: "Keep your balance below 30% of your limit at all times. So on a $1,000 limit card, never carry more than $300. This alone can boost your score significantly." },
              { type: "quickQuestion", question: "You have a $2,000 credit limit. What is the maximum balance to keep a good score?", options: ["$1,000", "$600", "$2,000", "$200"], correct: 1, explanation: "30% of $2,000 is $600. Keeping your balance at or below this level helps your credit utilization ratio stay healthy." }
            ]
          },
          es: {
            headline: "Utilización del crédito — la palanca oculta",
            contentBreakdown: [
              { type: "text", content: "La utilización del crédito es el porcentaje de tu límite que estás usando. Si tu límite es $1,000 y gastas $300, tu utilización es del 30%." },
              { type: "example", title: "La regla del 30%", content: "Mantén tu saldo por debajo del 30% de tu límite en todo momento. En una tarjeta con límite de $1,000, nunca tengas más de $300. Esto solo puede aumentar tu puntaje significativamente." },
              { type: "quickQuestion", question: "Tienes un límite de crédito de $2,000. ¿Cuál es el saldo máximo para mantener un buen puntaje?", options: ["$1,000", "$600", "$2,000", "$200"], correct: 1, explanation: "El 30% de $2,000 es $600. Mantener tu saldo en este nivel ayuda a que tu ratio de utilización permanezca saludable." }
            ]
          }
        }
      }
    ]
  },
  {
    id: "how-to-open-a-bank-account",
    isPremium: false,
    title: {
      en: "How to open a bank account",
      es: "Cómo abrir una cuenta bancaria",
      hi: "Bank account kaise kholein",
      tl: "Paano magbukas ng bank account",
      zh: "如何开银行账户",
      ar: "كيف تفتح حسابًا بنكيًا",
      fr: "Comment ouvrir un compte bancaire",
      pa: "Bank account kiven kholein"
    },
    subtitle: {
      en: "What documents you need and which banks are best for newcomers",
      es: "Qué documentos necesitas y qué bancos son mejores para recién llegados",
      hi: "Kaunse documents chahiye aur kaunse banks newcomers ke liye best hain",
      tl: "Anong mga dokumento ang kailangan at aling bangko ang pinakamainam para sa mga bagong dating",
      zh: "你需要哪些文件，以及哪些银行最适合新移民",
      ar: "ما المستندات التي تحتاجها وأي البنوك أفضل للقادمين الجدد",
      fr: "Quels documents il vous faut et quelles banques sont meilleures pour les nouveaux arrivants",
      pa: "Kaunse documents chahide han te kaunse banks newcomers layi best han"
    },
    category: "Banking",
    steps: [
      {
        type: "concept",
        content: {
          en: {
            headline: "Why you need a bank account first",
            contentBreakdown: [
              { type: "text", content: "A bank account is the foundation of your financial life in North America. Without one, you cannot receive a paycheck, pay rent by transfer, or start building credit history." },
              { type: "text", content: "The good news: banks in Canada actively want newcomers as customers and offer special newcomer packages with reduced fees for the first year." },
              { type: "quickQuestion", question: "Why is a bank account the first financial step for newcomers?", options: ["To impress employers", "To receive paychecks, pay bills, and start building credit", "Only to store cash safely", "It is not important in the first year"], correct: 1, explanation: "A bank account enables almost every other financial activity — getting paid, paying rent, and establishing your credit history." }
            ]
          },
          es: {
            headline: "Por qué necesitas una cuenta bancaria primero",
            contentBreakdown: [
              { type: "text", content: "Una cuenta bancaria es la base de tu vida financiera en América del Norte. Sin ella, no puedes recibir un cheque de pago, pagar el alquiler por transferencia ni empezar a construir historial crediticio." },
              { type: "text", content: "La buena noticia: los bancos en Canadá buscan activamente a recién llegados y ofrecen paquetes especiales con tarifas reducidas el primer año." },
              { type: "quickQuestion", question: "¿Por qué es una cuenta bancaria el primer paso financiero para los recién llegados?", options: ["Para impresionar a los empleadores", "Para recibir cheques, pagar facturas y empezar a construir crédito", "Solo para guardar efectivo de forma segura", "No es importante el primer año"], correct: 1, explanation: "Una cuenta bancaria permite casi todas las demás actividades financieras — cobrar, pagar el alquiler y establecer tu historial crediticio." }
            ]
          }
        }
      },
      {
        type: "concept",
        content: {
          en: {
            headline: "Documents you need to bring",
            contentBreakdown: [
              { type: "text", content: "Most banks require two pieces of ID. Primary ID: passport, permanent resident card, or driver's license. Secondary ID: work permit, study permit, or a bill in your name." },
              { type: "example", title: "Pro tip", content: "Bring your passport AND your immigration document on the same visit. Even if the bank only asks for one, having both prevents a wasted trip." },
              { type: "quickQuestion", question: "Which of these is typically accepted as primary ID at a Canadian bank?", options: ["A utility bill", "Your passport", "A library card", "An employer letter"], correct: 1, explanation: "A passport is the strongest form of primary ID accepted everywhere. Bills and employer letters are usually secondary ID only." }
            ]
          },
          es: {
            headline: "Documentos que necesitas llevar",
            contentBreakdown: [
              { type: "text", content: "La mayoría de los bancos requieren dos documentos de identidad. ID primario: pasaporte, tarjeta de residente permanente o licencia de conducir. ID secundario: permiso de trabajo, estudio o una factura a tu nombre." },
              { type: "example", title: "Consejo útil", content: "Lleva tu pasaporte Y tu documento de inmigración en la misma visita. Aunque el banco solo pida uno, tener ambos evita un viaje en vano." },
              { type: "quickQuestion", question: "¿Cuál de estos se acepta como ID primario en un banco canadiense?", options: ["Una factura de servicios", "Tu pasaporte", "Una tarjeta de biblioteca", "Una carta del empleador"], correct: 1, explanation: "Un pasaporte es la forma más sólida de ID primario aceptado en todas partes. Las facturas y cartas de empleadores son generalmente solo ID secundario." }
            ]
          }
        }
      },
      {
        type: "concept",
        content: {
          en: {
            headline: "Choosing the right bank",
            contentBreakdown: [
              { type: "text", content: "Canada's Big Five banks — RBC, TD, Scotiabank, BMO, and CIBC — all offer newcomer accounts. Scotiabank and RBC are especially known for newcomer-friendly programs." },
              { type: "text", content: "Online-only banks like EQ Bank or Simplii Financial charge zero monthly fees. The tradeoff is fewer physical branches for in-person support." },
              { type: "quickQuestion", question: "What is the main advantage of online-only banks for newcomers?", options: ["They offer immigration services", "They have no monthly fees", "They build your credit faster", "They accept fewer documents"], correct: 1, explanation: "Online banks typically charge no monthly fees, which saves you $10-$30 per month compared to traditional bank accounts." }
            ]
          },
          es: {
            headline: "Elegir el banco correcto",
            contentBreakdown: [
              { type: "text", content: "Los cinco grandes bancos de Canadá — RBC, TD, Scotiabank, BMO y CIBC — ofrecen cuentas para recién llegados. Scotiabank y RBC son especialmente conocidos por sus programas amigables con inmigrantes." },
              { type: "text", content: "Los bancos solo en línea como EQ Bank o Simplii Financial no cobran tarifas mensuales. La contrapartida es menos sucursales físicas para apoyo en persona." },
              { type: "quickQuestion", question: "¿Cuál es la principal ventaja de los bancos en línea para los recién llegados?", options: ["Ofrecen servicios de inmigración", "No tienen tarifas mensuales", "Construyen tu crédito más rápido", "Aceptan menos documentos"], correct: 1, explanation: "Los bancos en línea generalmente no cobran tarifas mensuales, lo que te ahorra $10-$30 al mes comparado con las cuentas tradicionales." }
            ]
          }
        }
      },
      {
        type: "concept",
        content: {
          en: {
            headline: "Understanding account types",
            contentBreakdown: [
              { type: "text", content: "When you open an account, you will be asked what type you want. A chequing account is for everyday spending. A savings account earns interest on money you set aside." },
              { type: "example", title: "Start with both", content: "Many newcomers open a chequing account for daily use and a savings account right away. Having both from day one makes budgeting easier and builds good financial habits." },
              { type: "quickQuestion", question: "Which account type is designed for everyday spending like groceries and bills?", options: ["Savings account", "Investment account", "Chequing account", "RRSP account"], correct: 2, explanation: "A chequing account is built for frequent transactions — it comes with a debit card, e-transfers, and bill payment features." }
            ]
          },
          es: {
            headline: "Entendiendo los tipos de cuentas",
            contentBreakdown: [
              { type: "text", content: "Cuando abres una cuenta, te preguntarán qué tipo quieres. Una cuenta corriente es para gastos diarios. Una cuenta de ahorros genera intereses sobre el dinero que apartes." },
              { type: "example", title: "Empieza con ambas", content: "Muchos recién llegados abren una cuenta corriente para uso diario y una cuenta de ahorros de inmediato. Tener ambas desde el primer día facilita el presupuesto y crea buenos hábitos financieros." },
              { type: "quickQuestion", question: "¿Qué tipo de cuenta está diseñada para gastos diarios como víveres y facturas?", options: ["Cuenta de ahorros", "Cuenta de inversión", "Cuenta corriente", "Cuenta RRSP"], correct: 2, explanation: "Una cuenta corriente está diseñada para transacciones frecuentes — incluye tarjeta de débito, transferencias electrónicas y funciones de pago de facturas." }
            ]
          }
        }
      },
      {
        type: "concept",
        content: {
          en: {
            headline: "Your first week with a bank account",
            contentBreakdown: [
              { type: "text", content: "Once your account is open, set up online banking immediately, enable two-factor authentication, and link your direct deposit for your employer." },
              { type: "text", content: "Also ask the bank about their newcomer credit card. Getting a credit card in your first month starts your credit history early — giving you a head start on building your score." },
              { type: "quickQuestion", question: "What should you do within your first week of opening a bank account?", options: ["Wait a month before using it", "Set up online banking and enable two-factor authentication", "Apply for a mortgage", "Transfer all your savings to investments"], correct: 1, explanation: "Setting up online banking and security protects your account and gives you full control of your money from day one." }
            ]
          },
          es: {
            headline: "Tu primera semana con una cuenta bancaria",
            contentBreakdown: [
              { type: "text", content: "Una vez que tu cuenta esté abierta, configura la banca en línea de inmediato, activa la autenticación de dos factores y vincula tu depósito directo con tu empleador." },
              { type: "text", content: "También pregunta al banco sobre su tarjeta de crédito para recién llegados. Obtener una tarjeta de crédito en tu primer mes inicia tu historial crediticio temprano, dándote ventaja para construir tu puntaje." },
              { type: "quickQuestion", question: "¿Qué debes hacer en tu primera semana al abrir una cuenta bancaria?", options: ["Esperar un mes antes de usarla", "Configurar la banca en línea y activar la autenticación de dos factores", "Solicitar una hipoteca", "Transferir todos tus ahorros a inversiones"], correct: 1, explanation: "Configurar la banca en línea y la seguridad protege tu cuenta y te da control total de tu dinero desde el primer día." }
            ]
          }
        }
      }
    ]
  },
  {
    id: "chequing-vs-savings-account",
    isPremium: false,
    title: {
      en: "Chequing vs savings account",
      es: "Cuenta corriente vs cuenta de ahorros",
      hi: "Chequing vs savings account",
      tl: "Chequing vs savings account",
      zh: "支票账户 vs 储蓄账户",
      ar: "الحساب الجاري مقابل حساب التوفير",
      fr: "Compte chèques vs compte d'épargne",
      pa: "Chequing vs savings account"
    },
    subtitle: {
      en: "What each one is for and when to use them",
      es: "Para qué sirve cada una y cuándo usarlas",
      hi: "Har ek kis kaam ke liye hai aur kab use karein",
      tl: "Para saan ang bawat isa at kailan gagamitin",
      zh: "各自用途是什么，以及何时使用",
      ar: "ما وظيفة كل واحد ومتى تستخدمه",
      fr: "À quoi sert chacun et quand les utiliser",
      pa: "Har ek kis layi hai te kado use karna hai"
    },
    category: "Banking",
    steps: [
      {
        type: "concept",
        content: {
          en: {
            headline: "Two accounts, two purposes",
            contentBreakdown: [
              { type: "text", content: "A chequing account is your spending account — money flows in and out freely. A savings account is where money grows — it earns interest and you dip into it less often." },
              { type: "example", title: "Think of it like this", content: "Chequing is your wallet — you use it every day. Savings is your safe — you put money there to protect and grow it, not to spend casually." },
              { type: "quickQuestion", question: "You want to set aside money for an emergency fund. Which account should you use?", options: ["Chequing — it's more accessible", "Savings — it earns interest and keeps money separate", "Either one works the same", "A credit card"], correct: 1, explanation: "A savings account is ideal for emergency funds because it earns interest and keeping it separate from spending reduces temptation." }
            ]
          },
          es: {
            headline: "Dos cuentas, dos propósitos",
            contentBreakdown: [
              { type: "text", content: "Una cuenta corriente es tu cuenta de gastos — el dinero entra y sale libremente. Una cuenta de ahorros es donde el dinero crece — genera intereses y la usas con menos frecuencia." },
              { type: "example", title: "Piénsalo así", content: "La corriente es tu billetera — la usas todos los días. Los ahorros son tu caja fuerte — pones dinero ahí para protegerlo y hacerlo crecer, no para gastarlo casualmente." },
              { type: "quickQuestion", question: "Quieres apartar dinero para un fondo de emergencia. ¿Qué cuenta deberías usar?", options: ["Corriente — es más accesible", "Ahorros — genera intereses y mantiene el dinero separado", "Ambas funcionan igual", "Una tarjeta de crédito"], correct: 1, explanation: "Una cuenta de ahorros es ideal para fondos de emergencia porque genera intereses y mantenerla separada del gasto reduce la tentación." }
            ]
          }
        }
      },
      {
        type: "concept",
        content: {
          en: {
            headline: "What a chequing account does",
            contentBreakdown: [
              { type: "text", content: "Your chequing account comes with a debit card, online bill payments, Interac e-Transfer, and direct deposit. Most employers pay your salary directly into this account." },
              { type: "text", content: "Chequing accounts usually do not pay interest. You pay a small monthly fee (often $0 to $16) depending on the bank and plan." },
              { type: "quickQuestion", question: "Which feature does a chequing account typically include?", options: ["High interest on your balance", "Interac e-Transfer for sending money", "Investment returns", "A free credit card"], correct: 1, explanation: "Chequing accounts are built for transactions — including e-Transfer, which is used constantly in Canada for rent, splitting bills, and paying people." }
            ]
          },
          es: {
            headline: "Qué hace una cuenta corriente",
            contentBreakdown: [
              { type: "text", content: "Tu cuenta corriente incluye tarjeta de débito, pagos de facturas en línea, Interac e-Transfer y depósito directo. La mayoría de los empleadores pagan tu salario directamente en esta cuenta." },
              { type: "text", content: "Las cuentas corrientes generalmente no pagan intereses. Pagas una pequeña tarifa mensual (a menudo $0 a $16) según el banco y el plan." },
              { type: "quickQuestion", question: "¿Qué función incluye típicamente una cuenta corriente?", options: ["Intereses altos en tu saldo", "Interac e-Transfer para enviar dinero", "Rendimientos de inversión", "Una tarjeta de crédito gratis"], correct: 1, explanation: "Las cuentas corrientes están diseñadas para transacciones — incluyendo e-Transfer, que se usa constantemente en Canadá para alquiler, dividir facturas y pagar a personas." }
            ]
          }
        }
      },
      {
        type: "concept",
        content: {
          en: {
            headline: "What a savings account does",
            contentBreakdown: [
              { type: "text", content: "A savings account pays you interest on the money you keep in it. In Canada, a High Interest Savings Account (HISA) can earn 3% to 5% per year — much better than letting cash sit idle." },
              { type: "example", title: "Interest example", content: "If you keep $5,000 in a HISA at 4% interest, you earn about $200 per year just for leaving your money there. That is free money working for you." },
              { type: "quickQuestion", question: "What does a High Interest Savings Account (HISA) offer that a chequing account does not?", options: ["A debit card", "Interest earnings on your balance", "Bill payment features", "Unlimited transactions"], correct: 1, explanation: "HISAs pay you interest — typically 3% to 5% annually. Chequing accounts rarely pay interest because they are designed for frequent transactions." }
            ]
          },
          es: {
            headline: "Qué hace una cuenta de ahorros",
            contentBreakdown: [
              { type: "text", content: "Una cuenta de ahorros te paga intereses sobre el dinero que guardas en ella. En Canadá, una Cuenta de Ahorros de Alto Interés (HISA) puede ganar del 3% al 5% anual — mucho mejor que dejar el efectivo inactivo." },
              { type: "example", title: "Ejemplo de interés", content: "Si mantienes $5,000 en una HISA al 4% de interés, ganas unos $200 al año solo por dejar el dinero ahí. Es dinero gratis trabajando para ti." },
              { type: "quickQuestion", question: "¿Qué ofrece una Cuenta de Ahorros de Alto Interés (HISA) que una cuenta corriente no?", options: ["Una tarjeta de débito", "Ganancias de intereses sobre tu saldo", "Funciones de pago de facturas", "Transacciones ilimitadas"], correct: 1, explanation: "Las HISAs te pagan intereses — típicamente del 3% al 5% anual. Las cuentas corrientes rara vez pagan intereses porque están diseñadas para transacciones frecuentes." }
            ]
          }
        }
      },
      {
        type: "concept",
        content: {
          en: {
            headline: "The 50/30/20 budgeting rule",
            contentBreakdown: [
              { type: "text", content: "A popular rule: put 50% of your income toward needs (rent, food, bills), 30% toward wants (dining out, entertainment), and 20% into savings. This rule uses both accounts in a structured way." },
              { type: "text", content: "Set up an automatic transfer on payday. The moment your paycheck arrives in chequing, automatically move 20% to savings. You won't miss money you never see in your spending account." },
              { type: "quickQuestion", question: "Using the 50/30/20 rule, if you earn $4,000 per month, how much should go to savings?", options: ["$800", "$2,000", "$1,200", "$400"], correct: 0, explanation: "20% of $4,000 is $800. This goes into your savings account each month, building your financial cushion automatically." }
            ]
          },
          es: {
            headline: "La regla de presupuesto 50/30/20",
            contentBreakdown: [
              { type: "text", content: "Una regla popular: pon el 50% de tus ingresos en necesidades (alquiler, comida, facturas), el 30% en deseos (comer fuera, entretenimiento) y el 20% en ahorros. Esta regla usa ambas cuentas de manera estructurada." },
              { type: "text", content: "Configura una transferencia automática el día de pago. En el momento en que tu cheque llega a la cuenta corriente, mueve automáticamente el 20% a ahorros. No extrañarás el dinero que nunca ves en tu cuenta de gastos." },
              { type: "quickQuestion", question: "Usando la regla 50/30/20, si ganas $4,000 al mes, ¿cuánto debería ir a ahorros?", options: ["$800", "$2,000", "$1,200", "$400"], correct: 0, explanation: "El 20% de $4,000 es $800. Esto va a tu cuenta de ahorros cada mes, construyendo tu colchón financiero automáticamente." }
            ]
          }
        }
      },
      {
        type: "concept",
        content: {
          en: {
            headline: "TFSA — your secret savings weapon in Canada",
            contentBreakdown: [
              { type: "text", content: "A Tax-Free Savings Account (TFSA) is a savings account where you pay zero tax on the interest or growth. It is available to any Canadian resident over 18." },
              { type: "example", title: "Why it matters", content: "In a regular savings account, you pay tax on interest earned. In a TFSA, all growth is tax-free. Over 10 years this difference can be thousands of dollars in your pocket." },
              { type: "quickQuestion", question: "What is the key benefit of a TFSA compared to a regular savings account?", options: ["It pays higher interest automatically", "You pay no tax on the money it earns", "It requires no deposit to open", "Banks give you a bonus when you open one"], correct: 1, explanation: "The TFSA's superpower is tax-free growth. Every dollar of interest or investment return stays in your pocket — not the government's." }
            ]
          },
          es: {
            headline: "TFSA — tu arma secreta de ahorro en Canadá",
            contentBreakdown: [
              { type: "text", content: "Una Cuenta de Ahorro Libre de Impuestos (TFSA) es una cuenta de ahorros donde pagas cero impuestos sobre los intereses o el crecimiento. Está disponible para cualquier residente canadiense mayor de 18 años." },
              { type: "example", title: "Por qué importa", content: "En una cuenta de ahorros regular, pagas impuestos sobre los intereses ganados. En una TFSA, todo el crecimiento está libre de impuestos. En 10 años, esta diferencia puede ser miles de dólares en tu bolsillo." },
              { type: "quickQuestion", question: "¿Cuál es el principal beneficio de una TFSA comparado con una cuenta de ahorros regular?", options: ["Paga intereses más altos automáticamente", "No pagas impuestos sobre lo que gana", "No requiere depósito para abrir", "Los bancos te dan un bono al abrirla"], correct: 1, explanation: "El superpoder de la TFSA es el crecimiento libre de impuestos. Cada dólar de interés o retorno de inversión se queda en tu bolsillo, no en el gobierno." }
            ]
          }
        }
      }
    ]
  },
  {
    id: "how-to-avoid-bank-fees",
    isPremium: false,
    title: {
      en: "How to avoid bank fees",
      es: "Cómo evitar comisiones bancarias",
      hi: "Bank fees kaise bachayein",
      tl: "Paano iwasan ang bank fees",
      zh: "如何避免银行费用",
      ar: "كيف تتجنب رسوم البنك",
      fr: "Comment éviter les frais bancaires",
      pa: "Bank fees ton kiven bachiye"
    },
    subtitle: {
      en: "Online banks, free accounts, ATM tips",
      es: "Bancos en línea, cuentas gratis, consejos de cajero",
      hi: "Online banks, free accounts, ATM tips",
      tl: "Online banks, free accounts, ATM tips",
      zh: "网上银行、免费账户、ATM技巧",
      ar: "البنوك الإلكترونية، الحسابات المجانية، ونصائح أجهزة الصراف",
      fr: "Banques en ligne, comptes gratuits, astuces pour les guichets",
      pa: "Online banks, free accounts, ATM tips"
    },
    category: "Banking",
    steps: [
      {
        type: "concept",
        content: {
          en: {
            headline: "Understanding bank fees in Canada",
            contentBreakdown: [
              { type: "text", content: "Canadian banks charge various fees: monthly account fees ($0-$30), ATM fees ($1.50-$3 for out-of-network), overdraft fees ($5-$48 per transaction), and wire transfer fees ($15-$50)." },
              { type: "example", title: "Monthly fee example", content: "A basic chequing account at a major bank might cost $16.95/month. That's over $200 per year just to have an account! Over 5 years, that's $1,000+ in fees alone." },
              { type: "quickQuestion", question: "If you pay $15/month in bank fees, how much do you pay in a year?", options: ["$50", "$100", "$180", "$250"], correct: 2, explanation: "$15 × 12 months = $180 per year. That's money you could be saving or investing instead." }
            ]
          },
          es: {
            headline: "Entendiendo las comisiones bancarias en Canadá",
            contentBreakdown: [
              { type: "text", content: "Los bancos canadienses cobran varias comisiones: tarifas mensuales ($0-$30), tarifas de cajero automático ($1.50-$3 fuera de red), sobregiros ($5-$48 por transacción) y transferencias bancarias ($15-$50)." },
              { type: "example", title: "Ejemplo de tarifa mensual", content: "Una cuenta corriente básica en un banco principal puede costar $16.95/mes. ¡Eso es más de $200 al año solo por tener una cuenta! En 5 años, eso es $1,000+ solo en comisiones." },
              { type: "quickQuestion", question: "Si pagas $15/mes en comisiones bancarias, ¿cuánto pagas en un año?", options: ["$50", "$100", "$180", "$250"], correct: 2, explanation: "$15 × 12 meses = $180 al año. Eso es dinero que podrías estar ahorrando o invirtiendo." }
            ]
          },
          hi: {
            headline: "Canada mein bank fees samajhna",
            contentBreakdown: [
              { type: "text", content: "Canadian banks alag alag fees charge karte hain: monthly account fees ($0-$30), ATM fees ($1.50-$3 out-of-network ke liye), overdraft fees ($5-$48 per transaction), aur wire transfer fees ($15-$50)." },
              { type: "example", title: "Monthly fee example", content: "Ek major bank mein basic chequing account $16.95/month cost kar sakta hai. Yeh account rakhne ke liye saal mein $200 se zyada! 5 saal mein yeh sirf fees mein $1,000+ ho jaata hai." },
              { type: "quickQuestion", question: "Agar aap $15/month bank fees pay karte hain, toh saal mein kitna pay karte hain?", options: ["$50", "$100", "$180", "$250"], correct: 2, explanation: "$15 × 12 months = $180 per saal. Yeh paisa aap save ya invest kar sakte hain." }
            ]
          },
          tl: {
            headline: "Pag-unawa sa mga bank fees sa Canada",
            contentBreakdown: [
              { type: "text", content: "Ang mga bangko sa Canada ay may iba't ibang bayarin: buwanang account fees ($0-$30), ATM fees ($1.50-$3 para sa out-of-network), overdraft fees ($5-$48 bawat transaksyon) at wire transfer fees ($15-$50)." },
              { type: "example", title: "Halimbawa ng buwanang bayad", content: "Ang isang basic chequing account sa major bank ay maaaring magkost ng $16.95/buwan. Iyon ay higit sa $200 sa isang taon para lang magkaroon ng account! Sa 5 taon, iyon ay $1,000+ sa fees lamang." },
              { type: "quickQuestion", question: "Kung nagbabayad ka ng $15/buwan sa bank fees, magkano ang iyong bayad sa isang taon?", options: ["$50", "$100", "$180", "$250"], correct: 2, explanation: "$15 × 12 buwan = $180 sa isang taon. Iyon ay pera na maaari mong i-save o i-invest." }
            ]
          },
          zh: {
            headline: "了解加拿大的银行费用",
            contentBreakdown: [
              { type: "text", content: "加拿大银行收取各种费用：月账户费（$0-$30），ATM费（跨行$1.50-$3），透支费（每笔$5-$48），以及电汇费（$15-$50）。" },
              { type: "example", title: "月费示例", content: "主要银行的基本支票账户可能每月花费$16.95。这意味着每年仅账户费用就超过$200！5年内，仅费用就超过$1,000！" },
              { type: "quickQuestion", question: "如果你每月支付$15的银行费用，一年支付多少？", options: ["$50", "$100", "$180", "$250"], correct: 2, explanation: "$15 × 12个月 = $180每年。这笔钱你可以用来储蓄或投资。" }
            ]
          },
          ar: {
            headline: "Understanding bank fees in Canada",
            contentBreakdown: [
              { type: "text", content: "Canadian banks charge various fees: monthly account fees ($0-$30), ATM fees ($1.50-$3 for out-of-network), overdraft fees ($5-$48 per transaction), and wire transfer fees ($15-$50)." },
              { type: "example", title: "Monthly fee example", content: "A basic chequing account at a major bank might cost $16.95/month. That's over $200 per year just to have an account! Over 5 years, that's $1,000+ in fees alone." },
              { type: "quickQuestion", question: "If you pay $15/month in bank fees, how much do you pay in a year?", options: ["$50", "$100", "$180", "$250"], correct: 2, explanation: "$15 × 12 months = $180 per year. That's money you could be saving or investing instead." }
            ]
          },
          fr: {
            headline: "Comprendre les frais bancaires au Canada",
            contentBreakdown: [
              { type: "text", content: "Les banques canadiennes facturent divers frais: frais mensuels de compte ($0-$30), frais de guichet automatique ($1.50-$3 hors réseau), frais de découvert ($5-$48 par transaction) et virements ($15-$50)." },
              { type: "example", title: "Exemple de frais mensuels", content: "Un compte courant de base dans une banque majeure peut coûter $16.95/mois. C'est plus de $200 par an juste pour avoir un compte! En 5 ans, c'est $1,000+ en frais seuls." },
              { type: "quickQuestion", question: "Si vous payez $15/mois en frais bancaires, combien payez-vous par an?", options: ["$50", "$100", "$180", "$250"], correct: 2, explanation: "$15 × 12 mois = $180 par an. C'est de l'argent que vous pourriez épargner ou investir." }
            ]
          },
          pa: {
            headline: "Canada vich bank fees nu samajhna",
            contentBreakdown: [
              { type: "text", content: "Canadian banks vakhre vakhre fees charge karde ne: monthly account fees ($0-$30), ATM fees ($1.50-$3 out-of-network lai), overdraft fees ($5-$48 per transaction), te wire transfer fees ($15-$50)." },
              { type: "example", title: "Monthly fee example", content: "Ik major bank vich basic chequing account $16.95/month cost kar sakda hai. Eh sirf account rakhne lai saal vich $200 toh vadh! 5 saal vich eh sirf fees ch $1,000+ ho janda hai." },
              { type: "quickQuestion", question: "Jehde tu $15/month bank fees pay karde ho, ta saal vich kinna pay karde ho?", options: ["$50", "$100", "$180", "$250"], correct: 2, explanation: "$15 × 12 months = $180 per saal. Eh paisa tu save ya invest kar sakda hai." }
            ]
          }
        }
      },
      {
        type: "concept",
        content: {
          en: {
            headline: "Free and low-fee banking options",
            contentBreakdown: [
              { type: "text", content: "Online banks like EQ Bank, Simplii Financial, and Tangerine offer no-fee chequing accounts with no minimum balance requirements. They pay higher interest on savings too." },
              { type: "example", title: "The online advantage", content: "EQ Bank offers a Savings Plus Account with 4%+ interest and no fees. Tangerine has no-fee chequing with unlimited transactions. Compare this to major banks charging $16+/month for similar features." },
              { type: "quickQuestion", question: "What's the main advantage of online-only banks?", options: ["They have more branches", "No monthly fees and higher interest rates", "They offer free credit cards", "Faster wire transfers"], correct: 1, explanation: "Online banks have lower overhead costs (no branches), so they pass savings to customers through no fees and better interest rates." }
            ]
          },
          es: {
            headline: "Opciones bancarias gratuitas y de bajas comisiones",
            contentBreakdown: [
              { type: "text", content: "Los bancos en línea como EQ Bank, Simplii Financial y Tangerine ofrecen cuentas corrientes sin tarifas y sin requisitos de saldo mínimo. También pagan más intereses en ahorros." },
              { type: "example", title: "La ventaja en línea", content: "EQ Bank ofrece una Cuenta Savings Plus con más del 4% de interés y sin tarifas. Tangerine tiene chequing sin tarifas con transacciones ilimitadas. Compare con los bancos principales que cobran $16+/mes por características similares." },
              { type: "quickQuestion", question: "¿Cuál es la principal ventaja de los bancos solo en línea?", options: ["Tienen más sucursales", "Sin tarifas mensuales y mejores tasas de interés", "Ofrecen tarjetas de crédito gratis", "Transferencias más rápidas"], correct: 1, explanation: "Los bancos en línea tienen costos más bajos (sin sucursales), así que pasan los ahorros a los clientes sin tarifas y mejores tasas." }
            ]
          },
          hi: {
            headline: "Free aur low-fee banking options",
            contentBreakdown: [
              { type: "text", content: "EQ Bank, Simplii Financial, aur Tangerine jaise online banks no-fee chequing accounts offer karte hain bina minimum balance requirements ke. Yeh savings par bhi zyada interest dete hain." },
              { type: "example", title: "Online advantage", content: "EQ Bank Savings Plus Account offer karta hai 4%+ interest ke saath bina koi fees ke. Tangerine ke paas no-fee chequing hai unlimited transactions ke saath. Compare karo major banks se jo similar features ke liye $16+/month charge karte hain." },
              { type: "quickQuestion", question: "Online-only banks ka main advantage kya hai?", options: ["Unke zyada branches hain", "No monthly fees aur higher interest rates", "Free credit cards offer karte hain", "Faster wire transfers"], correct: 1, explanation: "Online banks ke overhead costs kam hain (no branches), isliye yeh customers ko no fees aur better interest rates ke through savings pass karte hain." }
            ]
          },
          tl: {
            headline: "Mga libre at low-fee na banking options",
            contentBreakdown: [
              { type: "text", content: "Ang mga online bank tulad ng EQ Bank, Simplii Financial, at Tangerine ay nag-aalok ng no-fee chequing accounts na walang minimum balance requirements. Mas mataas din ang interes sa savings." },
              { type: "example", title: "Ang advantage ng online", content: "Ang EQ Bank ay nag-aalok ng Savings Plus Account na may 4%+ interes at walang bayad. Ang Tangerine ay may no-fee chequing na may unlimited transactions. Ikumpara sa mga major bank na nag-cha-charge ng $16+/buwan para sa katulad na features." },
              { type: "quickQuestion", question: "Ano ang pangunahing advantage ng online-only banks?", options: ["Mas maraming branches", "Walang buwanang bayad at mas mataas na interes", "Libreng credit cards", "Mas mabilis na wire transfers"], correct: 1, explanation: "Ang mga online bank ay may mas mababang overhead costs (walang branches), kaya't ipinapasa ang savings sa customers sa pamamagitan ng walang bayad at mas magandang rates." }
            ]
          },
          zh: {
            headline: "免费和低费用的银行选择",
            contentBreakdown: [
              { type: "text", content: "EQ Bank、Simplii Financial和Tangerine等网上银行提供无月费的支票账户，没有最低余额要求。它们的储蓄利息也更高。" },
              { type: "example", title: "网上银行的优势", content: "EQ Bank提供4%以上利息的Savings Plus Account且无费用。Tangerine有无限制交易的无费支票账户。相比之下，主要银行对类似功能每月收取$16以上的费用。" },
              { type: "quickQuestion", question: "纯网上银行的主要优势是什么？", options: ["他们有更多的分行", "无月费且利率更高", "提供免费信用卡", "更快的电汇"], correct: 1, explanation: "网上银行运营成本更低（没有实体分行），因此通过无费用和更好的利率将节省的成本传递给客户。" }
            ]
          },
          ar: {
            headline: "Free and low-fee banking options",
            contentBreakdown: [
              { type: "text", content: "Online banks like EQ Bank, Simplii Financial, and Tangerine offer no-fee chequing accounts with no minimum balance requirements. They pay higher interest on savings too." },
              { type: "example", title: "The online advantage", content: "EQ Bank offers a Savings Plus Account with 4%+ interest and no fees. Tangerine has no-fee chequing with unlimited transactions. Compare this to major banks charging $16+/month for similar features." },
              { type: "quickQuestion", question: "What's the main advantage of online-only banks?", options: ["They have more branches", "No monthly fees and higher interest rates", "They offer free credit cards", "Faster wire transfers"], correct: 1, explanation: "Online banks have lower overhead costs (no branches), so they pass savings to customers through no fees and better interest rates." }
            ]
          },
          fr: {
            headline: "Options bancaires gratuites et à faibles frais",
            contentBreakdown: [
              { type: "text", content: "Les banques en ligne comme EQ Bank, Simplii Financial et Tangerine offrent des comptes courants sans frais et sans exigences de solde minimum. Elles paient aussi plus d'intérêts sur les épargnes." },
              { type: "example", title: "L'avantage en ligne", content: "EQ Bank offre un compte Savings Plus avec plus de 4% d'intérêts et sans frais. Tangerine a un chequing sans frais avec transactions illimitées. Comparez avec les banques majeures qui facturent $16+/mois pour des caractéristiques similaires." },
              { type: "quickQuestion", question: "Quel est l'avantage principal des banques uniquement en ligne?", options: ["Elles ont plus de succursales", "Pas de frais mensuels et taux d'intérêt plus élevés", "Elles offrent des cartes de crédit gratuites", "Virements plus rapides"], correct: 1, explanation: "Les banques en ligne ont des coûts plus bas (pas de succursales), donc elles passent les économies aux clients sans frais et avec de meilleurs taux." }
            ]
          },
          pa: {
            headline: "Free te low-fee banking options",
            contentBreakdown: [
              { type: "text", content: "EQ Bank, Simplii Financial, te Tangerine jaise online banks no-fee chequing accounts offer karde ne bina minimum balance requirements de. Eh savings te vi zyada interest dinde ne." },
              { type: "example", title: "Online advantage", content: "EQ Bank Savings Plus Account offer kar da hai 4%+ interest de naal bina koi fees de. Tangerine kol no-fee chequing hai unlimited transactions de naal. Compare karo major banks naal jo similar features lai $16+/month charge karde ne." },
              { type: "quickQuestion", question: "Online-only banks da main advantage ki hai?", options: ["Unha de zyada branches han", "No monthly fees te higher interest rates", "Free credit cards offer karde ne", "Faster wire transfers"], correct: 1, explanation: "Online banks de overhead costs kam han (no branches), isliwe eh customers nu no fees te better interest rates de through savings dinde ne." }
            ]
          }
        }
      },
      {
        type: "concept",
        content: {
          en: {
            headline: "Smart ATM strategies",
            contentBreakdown: [
              { type: "text", content: "Using out-of-network ATMs can cost you $3-5 per withdrawal ($1.50 from your bank + $2-3 from the ATM owner). Do this twice a week and that's $300+ per year in unnecessary fees." },
              { type: "example", title: "The convenience store trap", content: "You're at a convenience store and need cash. The ATM charges $3.50. Your bank charges another $2 for out-of-network use. That $50 withdrawal just cost you $5.50 — over 10% of your money!" },
              { type: "quickQuestion", question: "How can you avoid ATM fees when traveling?", options: ["Use any ATM you find", "Get cash back at grocery stores (usually free)", "Withdraw large amounts from any ATM", "Pay with credit card only"], correct: 1, explanation: "Grocery stores usually offer free cash back with purchases. This is a great way to avoid ATM fees while traveling." }
            ]
          },
          es: {
            headline: "Estrategias inteligentes para cajeros automáticos",
            contentBreakdown: [
              { type: "text", content: "Usar cajeros fuera de red puede costarte $3-5 por retiro ($1.50 de tu banco + $2-3 del dueño del cajero). Haz esto dos veces por semana y son más de $300 al año en comisiones innecesarias." },
              { type: "example", title: "La trampa de la tienda de conveniencia", content: "Estás en una tienda de conveniencia y necesitas efectivo. El cajero cobra $3.50. Tu banco cobra otros $2 por uso fuera de red. Ese retiro de $50 te costó $5.50 — ¡más del 10% de tu dinero!" },
              { type: "quickQuestion", question: "¿Cómo puedes evitar tarifas de cajero cuando viajas?", options: ["Usar cualquier cajero que encuentres", "Obtener cashback en tiendas de comestibles (generalmente gratis)", "Retirar grandes cantidades de cualquier cajero", "Pagar solo con tarjeta de crédito"], correct: 1, explanation: "Las tiendas de comestibles generalmente ofrecen cashback gratis con compras. Esta es una excelente forma de evitar tarifas de cajero cuando viajas." }
            ]
          },
          hi: {
            headline: "Smart ATM strategies",
            contentBreakdown: [
              { type: "text", content: "Out-of-network ATMs use karne se aapko $3-5 per withdrawal cost ho sakta hai ($1.50 aapke bank se + $2-3 ATM owner se). Isse hafte mein do baar karo aur yeh $300+ per year unnecessary fees mein ho jaayega." },
              { type: "example", title: "Convenience store trap", content: "Aap convenience store par hain aur cash chahiye. ATM $3.50 charge karta hai. Aapka bank out-of-network use ke liye aur $2 charge karta hai. Woh $50 withdrawal abhi aapko $5.50 ka pada — aapke paise ka 10% se zyada!" },
              { type: "quickQuestion", question: "Travel karte waqt ATM fees kaise bachayein?", options: ["Jo bhi ATM mile use karo", "Grocery stores par cash back lein (usually free)", "Kisi bhi ATM se badi amount nikaalein", "Sirf credit card se pay karein"], correct: 1, explanation: "Grocery stores usually purchases ke saath free cash back offer karte hain. Yeh travel karte waqt ATM fees avoid karne ka ek badiya tareeka hai." }
            ]
          },
          tl: {
            headline: "Mga smart na diskarte sa ATM",
            contentBreakdown: [
              { type: "text", content: "Ang paggamit ng out-of-network na ATM ay maaaring magkost sa iyo ng $3-5 bawat withdrawal ($1.50 mula sa iyong bank + $2-3 mula sa may-ari ng ATM). Gawin ito dalawang beses sa isang linggo at iyon ay $300+ sa isang taon sa mga hindi kailangang bayarin." },
              { type: "example", title: "Ang bitag sa convenience store", content: "Nasa convenience store ka at kailangan mo ng cash. Ang ATM ay nag-cha-charge ng $3.50. Ang iyong bank ay nag-cha-charge ng dagdag na $2 para sa out-of-network use. Ang $50 withdrawal na iyon ay nagkost sa iyo ng $5.50 — higit sa 10% ng iyong pera!" },
              { type: "quickQuestion", question: "Paano maiiwasan ang mga ATM fee kapag naglalakbay?", options: ["Gamitin ang anumang ATM na makita mo", "Kumuha ng cash back sa grocery stores (karaniwang libre)", "Mag-withdraw ng malalaking halaga mula sa anumang ATM", "Magbayad lang gamit ang credit card"], correct: 1, explanation: "Ang mga grocery store ay karaniwang nag-aalok ng libreng cash back sa mga pagbili. Ito ay isang mahusay na paraan upang maiwasan ang mga ATM fee habang naglalakbay." }
            ]
          },
          zh: {
            headline: "智能ATM使用策略",
            contentBreakdown: [
              { type: "text", content: "使用跨行ATM每次取款可能花费你$3-5（你的银行收$1.50 + ATM机主收$2-3）。每周这样做两次，一年就是$300+的不必要费用。" },
              { type: "example", title: "便利店陷阱", content: "你在便利店需要现金。ATM收取$3.50。你的银行因跨行使用再收$2。那次$50的取款花了你$5.50——超过你钱的10%！" },
              { type: "quickQuestion", question: "旅行时如何避免ATM费用？", options: ["使用任何你找到的ATM", "在杂货店获得现金返还（通常免费）", "从任何ATM提取大额现金", "仅使用信用卡支付"], correct: 1, explanation: "杂货店通常随购物提供免费现金返还。这是旅行时避免ATM费用的好方法。" }
            ]
          },
          ar: {
            headline: "Smart ATM strategies",
            contentBreakdown: [
              { type: "text", content: "Using out-of-network ATMs can cost you $3-5 per withdrawal ($1.50 from your bank + $2-3 from the ATM owner). Do this twice a week and that's $300+ per year in unnecessary fees." },
              { type: "example", title: "The convenience store trap", content: "You're at a convenience store and need cash. The ATM charges $3.50. Your bank charges another $2 for out-of-network use. That $50 withdrawal just cost you $5.50 — over 10% of your money!" },
              { type: "quickQuestion", question: "How can you avoid ATM fees when traveling?", options: ["Use any ATM you find", "Get cash back at grocery stores (usually free)", "Withdraw large amounts from any ATM", "Pay with credit card only"], correct: 1, explanation: "Grocery stores usually offer free cash back with purchases. This is a great way to avoid ATM fees while traveling." }
            ]
          },
          fr: {
            headline: "Stratégies intelligentes pour les guichets automatiques",
            contentBreakdown: [
              { type: "text", content: "Utiliser des guichets hors réseau peut vous coûter $3-5 par retrait ($1.50 de votre banque + $2-3 du propriétaire du guichet). Faites ceci deux fois par semaine et c'est $300+ par an en frais inutiles." },
              { type: "example", title: "Le piège du dépanneur", content: "Vous êtes dans un dépanneur et avez besoin d'argent. Le guichet facture $3.50. Votre banque facture $2 supplémentaires pour utilisation hors réseau. Ce retrait de $50 vous a coûté $5.50 — plus de 10% de votre argent!" },
              { type: "quickQuestion", question: "Comment éviter les frais de guichet en voyage?", options: ["Utiliser n'importe quel guichet trouvé", "Obtenir du cashback dans les épiceries (généralement gratuit)", "Retirer de grandes sommes de n'importe quel guichet", "Payer uniquement par carte de crédit"], correct: 1, explanation: "Les épiceries offrent généralement du cashback gratuit avec les achats. C'est une excellente façon d'éviter les frais de guichet en voyage." }
            ]
          },
          pa: {
            headline: "Smart ATM strategies",
            contentBreakdown: [
              { type: "text", content: "Out-of-network ATMs use karne ton tuhannu $3-5 per withdrawal cost ho sakda hai ($1.50 tuhade bank to + $2-3 ATM owner to). Eh hafte vich do vaari karo te eh $300+ per saal unnecessary fees vich ho jaanda hai." },
              { type: "example", title: "Convenience store trap", content: "Tu convenience store te hai te cash chahida hai. ATM $3.50 charge kar da hai. Tuhada bank out-of-network use lai hor $2 charge kar da hai. Oh $50 withdrawal hun tuhannu $5.50 da peya — tuhade paisa da 10% toh vadh!" },
              { type: "quickQuestion", question: "Travel karde waqt ATM fees kiven bachiye?", options: ["Jo vi ATM mile use karo", "Grocery stores to cash back lo (usually free)", "Kisi vi ATM to badi amount kaddho", "Sirf credit card naal pay karo"], correct: 1, explanation: "Grocery stores usually purchases de naal free cash back offer karde ne. Eh travel karde waqt ATM fees ton bachan da ek vadiya tareeka hai." }
            ]
          }
        }
      },
      {
        type: "concept",
        content: {
          en: {
            headline: "Avoid overdraft and NSF fees",
            contentBreakdown: [
              { type: "text", content: "Overdraft protection sounds helpful but can cost $5-48 per transaction. NSF (Non-Sufficient Funds) fees when a payment bounces are typically $45-48 each. A single mistake can trigger multiple fees." },
              { type: "example", title: "The domino effect", content: "You have $100 in your account. Three small bills try to come out: $30 phone, $40 internet, $35 gym. Without enough money, each could trigger a $48 NSF fee. That's $144 in fees for a $5 shortfall!" },
              { type: "quickQuestion", question: "What's the best way to avoid overdraft fees?", options: ["Sign up for overdraft protection", "Opt out of overdraft coverage and use cash only", "Link a savings account as backup", "Both B and C"], correct: 3, explanation: "Opting out prevents overspending, and linking savings provides a safety net without expensive overdraft fees." }
            ]
          },
          es: {
            headline: "Evita comisiones por sobregiro y fondos insuficientes",
            contentBreakdown: [
              { type: "text", content: "La protección contra sobregiros suena útil pero puede costar $5-48 por transacción. Las comisiones NSF cuando un pago rebota son típicamente $45-48 cada una. Un solo error puede desencadenar múltiples comisiones." },
              { type: "example", title: "El efecto dominó", content: "Tienes $100 en tu cuenta. Tres pequeñas facturas intentan salir: $30 teléfono, $40 internet, $35 gimnasio. Sin suficiente dinero, cada una podría desencadenar una comisión NSF de $48. ¡Eso es $144 en comisiones por un déficit de $5!" },
              { type: "quickQuestion", question: "¿Cuál es la mejor manera de evitar comisiones por sobregiro?", options: ["Registrarse para protección contra sobregiros", "Optar por no tener cobertura de sobregiro y usar solo efectivo", "Vincular una cuenta de ahorros como respaldo", "Ambas B y C"], correct: 3, explanation: "Optar por no participar previene el gasto excesivo, y vincular ahorros proporciona una red de seguridad sin comisiones de sobregiro caras." }
            ]
          },
          hi: {
            headline: "Overdraft aur NSF fees se bachna",
            contentBreakdown: [
              { type: "text", content: "Overdraft protection helpful lagta hai par $5-48 per transaction cost kar sakta hai. NSF (Non-Sufficient Funds) fees jab payment bounce hoti hai typically $45-48 each hote hain. Ek galti multiple fees trigger kar sakti hai." },
              { type: "example", title: "Domino effect", content: "Aapke account mein $100 hain. Teen chhote bills nikalne ki koshish kar rahe hain: $30 phone, $40 internet, $35 gym. Paise kaafi nahi hone par, har ek $48 NSF fee trigger kar sakta hai. Yeh $5 ki kami ke liye $144 fees hain!" },
              { type: "quickQuestion", question: "Overdraft fees se bachne ka best tareeka kya hai?", options: ["Overdraft protection ke liye sign up karein", "Overdraft coverage opt out karein aur sirf cash use karein", "Savings account backup ke roop mein link karein", "Dono B aur C"], correct: 3, explanation: "Opting out overspending prevent karta hai, aur savings link karna expensive overdraft fees ke bina safety net provide karta hai." }
            ]
          },
          tl: {
            headline: "Iwasan ang mga overdraft at NSF fees",
            contentBreakdown: [
              { type: "text", content: "Ang overdraft protection ay mukhang nakakatulong pero maaaring magkost ng $5-48 bawat transaksyon. Ang mga NSF fee kapag ang isang bayad ay nagsisi-balik ay karaniwang $45-48 bawat isa. Ang isang pagkakamali ay maaaring mag-trigger ng maraming bayarin." },
              { type: "example", title: "Ang domino effect", content: "Mayroon kang $100 sa iyong account. Tatlong maliit na bills ang sinusubok na lumabas: $30 phone, $40 internet, $35 gym. Kung walang sapat na pera, ang bawat isa ay maaaring mag-trigger ng $48 NSF fee. Iyon ay $144 sa mga bayarin para sa $5 na kakulangan!" },
              { type: "quickQuestion", question: "Ano ang pinakamahusay na paraan upang maiwasan ang mga overdraft fee?", options: ["Mag-sign up para sa overdraft protection", "Mag-opt out ng overdraft coverage at gumamit lang ng cash", "I-link ang isang savings account bilang backup", "Parehong B at C"], correct: 3, explanation: "Ang pag-opt out ay nagpipigil ng sobrang paggastos, at ang pag-link ng savings ay nagbibigay ng safety net nang walang mahal na overdraft fees." }
            ]
          },
          zh: {
            headline: "避免透支和资金不足费用",
            contentBreakdown: [
              { type: "text", content: "透支保护听起来有帮助，但每笔交易可能花费$5-48。当付款退回时，NSF（资金不足）费用通常为每笔$45-48。一个错误可能触发多笔费用。" },
              { type: "example", title: "多米诺效应", content: "你的账户有$100。三笔小额账单试图扣款：$30电话费，$40网费，$35健身房。钱不够时，每笔都可能触发$48的NSF费用。这就是仅因$5不足而产生的$144费用！" },
              { type: "quickQuestion", question: "避免透支费用的最佳方法是什么？", options: ["注册透支保护", "退出透支保障并仅使用现金", "将储蓄账户链接作为备用", "B和C两者"], correct: 3, explanation: "退出可以防止超支，链接储蓄账户则提供安全网而无需昂贵的透支费用。" }
            ]
          },
          ar: {
            headline: "Avoid overdraft and NSF fees",
            contentBreakdown: [
              { type: "text", content: "Overdraft protection sounds helpful but can cost $5-48 per transaction. NSF (Non-Sufficient Funds) fees when a payment bounces are typically $45-48 each. A single mistake can trigger multiple fees." },
              { type: "example", title: "The domino effect", content: "You have $100 in your account. Three small bills try to come out: $30 phone, $40 internet, $35 gym. Without enough money, each could trigger a $48 NSF fee. That's $144 in fees for a $5 shortfall!" },
              { type: "quickQuestion", question: "What's the best way to avoid overdraft fees?", options: ["Sign up for overdraft protection", "Opt out of overdraft coverage and use cash only", "Link a savings account as backup", "Both B and C"], correct: 3, explanation: "Opting out prevents overspending, and linking savings provides a safety net without expensive overdraft fees." }
            ]
          },
          fr: {
            headline: "Éviter les frais de découvert et NSF",
            contentBreakdown: [
              { type: "text", content: "La protection contre le découvert semble utile mais peut coûter $5-48 par transaction. Les frais NSF quand un paiement est rejeté sont typiquement $45-48 chacun. Une seule erreur peut déclencher plusieurs frais." },
              { type: "example", title: "L'effet domino", content: "Vous avez $100 dans votre compte. Trois petites factures essaient de sortir: $30 téléphone, $40 internet, $35 gym. Sans assez d'argent, chacune pourrait déclencher des frais NSF de $48. C'est $144 en frais pour un déficit de $5!" },
              { type: "quickQuestion", question: "Quelle est la meilleure façon d'éviter les frais de découvert?", options: ["S'inscrire à la protection contre le découvert", "Se désinscrire de la couverture de découvert et utiliser uniquement du cash", "Lier un compte d'épargne comme backup", "Les deux B et C"], correct: 3, explanation: "Se désinscrire prévient les dépenses excessives, et lier des épargnes fournit un filet de sécurité sans frais de découvert chers." }
            ]
          },
          pa: {
            headline: "Overdraft te NSF fees ton bachna",
            contentBreakdown: [
              { type: "text", content: "Overdraft protection helpful lagdi hai par $5-48 per transaction cost kar sakdi hai. NSF (Non-Sufficient Funds) fees jadon payment bounce hundi hai typically $45-48 each hunde ne. Ik galti multiple fees trigger kar sakdi hai." },
              { type: "example", title: "Domino effect", content: "Tuhade account vich $100 han. Teen chhote bills niklne di koshish kar rahe ne: $30 phone, $40 internet, $35 gym. Paise kafi nahi hon te, har ik $48 NSF fee trigger kar sakda hai. Eh $5 di kami lai $144 fees han!" },
              { type: "quickQuestion", question: "Overdraft fees ton bachne da best tareeka ki hai?", options: ["Overdraft protection lai sign up karo", "Overdraft coverage opt out karo te sirf cash use karo", "Savings account backup vicho link karo", "Dono B te C"], correct: 3, explanation: "Opting out overspending rokdunda hai, te savings link karna expensive overdraft fees de bina safety net provide kar da hai." }
            ]
          }
        }
      },
      {
        type: "concept",
        content: {
          en: {
            headline: "The newcomer banking advantage",
            contentBreakdown: [
              { type: "text", content: "Most major Canadian banks offer newcomer packages with 1-2 years of free banking, no minimum balance requirements, and sometimes even a small cash bonus ($50-300) for opening an account." },
              { type: "example", title: "Shop around for the best deal", content: "Scotiabank's StartRight program, RBC's Newcomer Advantage, and TD's New to Canada package all compete for your business. Compare offers: some give free iPads, others give higher cash bonuses, some have longer free banking periods." },
              { type: "quickQuestion", question: "What should you do before choosing a bank as a newcomer?", options: ["Go to the closest branch", "Compare newcomer packages from at least 3 banks", "Ask friends which bank they use", "Choose the bank with the nicest logo"], correct: 1, explanation: "Different banks offer different newcomer incentives. Comparing 3+ banks helps you find the best combination of free banking period, cash bonuses, and account features." }
            ]
          },
          es: {
            headline: "La ventaja bancaria para recién llegados",
            contentBreakdown: [
              { type: "text", content: "La mayoría de los bancos canadienses ofrecen paquetes para recién llegados con 1-2 años de banca gratuita, sin requisitos de saldo mínimo, y a veces incluso un pequeño bono en efectivo ($50-300) por abrir una cuenta." },
              { type: "example", title: "Compara para obtener la mejor oferta", content: "El programa StartRight de Scotiabank, Newcomer Advantage de RBC y el paquete New to Canada de TD compiten por tu negocio. Compara ofertas: algunos dan iPads gratis, otros dan bonos más altos, algunos tienen períodos de banca gratuita más largos." },
              { type: "quickQuestion", question: "¿Qué debes hacer antes de elegir un banco como recién llegado?", options: ["Ir a la sucursal más cercana", "Comparar paquetes de al menos 3 bancos", "Preguntar a amigos qué banco usan", "Elegir el banco con el logo más bonito"], correct: 1, explanation: "Diferentes bancos ofrecen diferentes incentivos. Comparar 3+ bancos te ayuda a encontrar la mejor combinación de período gratuito, bonos y características." }
            ]
          },
          hi: {
            headline: "Newcomer banking advantage",
            contentBreakdown: [
              { type: "text", content: "Zyadatar major Canadian banks newcomer packages offer karte hain 1-2 saal ki free banking ke saath, no minimum balance requirements, aur kabhi-kabhi ek chhota cash bonus ($50-300) bhi account kholne par." },
              { type: "example", title: "Best deal ke liye shop around karein", content: "Scotiabank ka StartRight program, RBC ka Newcomer Advantage, aur TD ka New to Canada package sab aapke business ke liye compete karte hain. Offers compare karein: kuch free iPads dete hain, kuch zyada cash bonus dete hain, kuch ke paas longer free banking periods hain." },
              { type: "quickQuestion", question: "Newcomer ke roop mein bank chunne se pehle kya karna chahiye?", options: ["Sabse paas wali branch mein jayein", "Kam se kam 3 banks ke newcomer packages compare karein", "Dosto se poochhein ki woh kaunsa bank use karte hain", "Sabse achha logo wala bank chunein"], correct: 1, explanation: "Alag alag banks alag incentives offer karte hain. 3+ banks compare karna aapko best combination dhoondhne mein help karta hai free banking period, cash bonuses, aur account features ka." }
            ]
          },
          tl: {
            headline: "Ang banking advantage para sa mga bagong dating",
            contentBreakdown: [
              { type: "text", content: "Ang karamihan sa mga major Canadian banks ay nag-aalok ng mga package para sa mga bagong dating na may 1-2 taon ng libreng banking, walang requirements sa minimum balance, at minsan ay may maliit na cash bonus ($50-300) para sa pagbubukas ng account." },
              { type: "example", title: "Maghanap para sa pinakamahusay na deal", content: "Ang StartRight program ng Scotiabank, Newcomer Advantage ng RBC, at New to Canada package ng TD ay nakikipagkumpitensya para sa iyong negosyo. Ihambing ang mga alok: ang iba ay nagbibigay ng libreng iPads, ang iba ay mas mataas na cash bonus, ang iba ay may mas mahabang libreng banking periods." },
              { type: "quickQuestion", question: "Ano ang dapat mong gawin bago pumili ng bangko bilang isang bagong dating?", options: ["Pumunta sa pinakamalapit na branch", "Ihambing ang mga package mula sa hindi bababa sa 3 bangko", "Tanungin ang mga kaibigan kung anong bangko ang ginagamit nila", "Piliin ang bangko na may pinakamagandang logo"], correct: 1, explanation: "Ang iba't ibang mga bangko ay nag-aalok ng iba't ibang mga incentive. Ang paghahambing ng 3+ na mga bangko ay tumutulong sa iyo na makahanap ng pinakamahusay na kombinasyon ng libreng banking period, cash bonuses, at account features." }
            ]
          },
          zh: {
            headline: "新移民银行优势",
            contentBreakdown: [
              { type: "text", content: "大多数主要加拿大银行为新移民提供套餐，包括1-2年免费银行服务，无最低余额要求，有时甚至开户就给小额现金奖励（$50-300）。" },
              { type: "example", title: "货比三家找最优惠的交易", content: "Scotiabank的StartRight计划、RBC的新移民优势和TD的新来加拿大套餐都在竞争你的业务。比较优惠：有些送免费iPad，有些给更高的现金奖励，有些免费银行服务期更长。" },
              { type: "quickQuestion", question: "作为新移民在选择银行之前应该做什么？", options: ["去最近的网点", "比较至少3家银行的新移民套餐", "问朋友他们用什么银行", "选择logo最好看的银行"], correct: 1, explanation: "不同银行提供不同的新移民优惠。比较3家以上银行有助于你找到免费银行服务期、现金奖励和账户功能的最佳组合。" }
            ]
          },
          ar: {
            headline: "The newcomer banking advantage",
            contentBreakdown: [
              { type: "text", content: "Most major Canadian banks offer newcomer packages with 1-2 years of free banking, no minimum balance requirements, and sometimes even a small cash bonus ($50-300) for opening an account." },
              { type: "example", title: "Shop around for the best deal", content: "Scotiabank's StartRight program, RBC's Newcomer Advantage, and TD's New to Canada package all compete for your business. Compare offers: some give free iPads, others give higher cash bonuses, some have longer free banking periods." },
              { type: "quickQuestion", question: "What should you do before choosing a bank as a newcomer?", options: ["Go to the closest branch", "Compare newcomer packages from at least 3 banks", "Ask friends which bank they use", "Choose the bank with the nicest logo"], correct: 1, explanation: "Different banks offer different newcomer incentives. Comparing 3+ banks helps you find the best combination of free banking period, cash bonuses, and account features." }
            ]
          },
          fr: {
            headline: "L'avantage bancaire pour les nouveaux arrivants",
            contentBreakdown: [
              { type: "text", content: "La plupart des grandes banques canadiennes offrent des paquets pour nouveaux arrivants avec 1-2 ans de banca gratuite, sans exigences de solde minimum, et parfois même un petit bonus en cash ($50-300) pour ouvrir un compte." },
              { type: "example", title: "Comparez pour la meilleure offre", content: "Le programme StartRight de Scotiabank, Newcomer Advantage de RBC et le paquet New to Canada de TD compétitionnent tous pour votre affaire. Comparez les offres: certaines donnent des iPads gratuits, d'autres donnent des bonus plus élevés, certaines ont des périodes de banca gratuite plus longues." },
              { type: "quickQuestion", question: "Que devriez-vous faire avant de choisir une banque en tant que nouveau arrivant?", options: ["Aller à la succursale la plus proche", "Comparer les paquets d'au moins 3 banques", "Demander aux amis quelle banque ils utilisent", "Choisir la banque avec le plus beau logo"], correct: 1, explanation: "Différentes banques offrent différents incentives. Comparer 3+ banques vous aide à trouver la meilleure combinaison de période gratuite, bonus et caractéristiques de compte." }
            ]
          },
          pa: {
            headline: "Newcomer banking advantage",
            contentBreakdown: [
              { type: "text", content: "Zyadatar major Canadian banks newcomer packages offer karde ne 1-2 saal di free banking de naal, no minimum balance requirements, te kabhi-kabhi ik chhota cash bonus ($50-300) vi account kholne te." },
              { type: "example", title: "Best deal lai shop around karo", content: "Scotiabank da StartRight program, RBC da Newcomer Advantage, te TD da New to Canada package sab tuhade business lai compete karde ne. Offers compare karo: kujh free iPads dinde ne, kujh zyada cash bonus dinde ne, kujha de kol longer free banking periods han." },
              { type: "quickQuestion", question: "Newcomer valle bank chunne to pehla ki karna chahida hai?", options: ["Sabde nazdeek wali branch vich jao", "Kam to kam 3 banks de newcomer packages compare karo", "Dostan to puchho ki oh kaunsa bank use karde ne", "Sab sohna logo wala bank chuno"], correct: 1, explanation: "Vakhre vakhre banks vakhre incentives offer karde ne. 3+ banks compare karna tuhannu best combination labhan vich help karda hai free banking period, cash bonuses, te account features da." }
            ]
          }
        }
      }
    ]
  },
  {
    id: "how-to-send-money-back-home",
    isPremium: false,
    title: {
      en: "How to send money back home",
      es: "Cómo enviar dinero a casa",
      hi: "Ghar paise kaise bhejein",
      tl: "Paano magpadala ng pera pauwi",
      zh: "如何汇款回家",
      ar: "كيف ترسل المال إلى بلدك",
      fr: "Comment envoyer de l'argent chez vous",
      pa: "Ghar paise kiven bhejiye"
    },
    subtitle: {
      en: "Wise, Remitly, exchange rates, fees comparison",
      es: "Wise, Remitly, tipos de cambio y comparación de comisiones",
      hi: "Wise, Remitly, exchange rates, fees comparison",
      tl: "Wise, Remitly, exchange rates, fees comparison",
      zh: "Wise、Remitly、汇率与费用比较",
      ar: "Wise وRemitly وأسعار الصرف ومقارنة الرسوم",
      fr: "Wise, Remitly, taux de change et comparaison des frais",
      pa: "Wise, Remitly, exchange rates, fees comparison"
    },
    category: "Banking",
    steps: [
      {
        type: "concept",
        content: {
          en: {
            headline: "Understanding remittance options",
            contentBreakdown: [
              { type: "text", content: "Remittance means sending money to family in your home country. In Canada, newcomers send over $20 billion abroad annually. Main options: banks, money transfer services, online platforms (Wise, Remitly), and mobile wallets." },
              { type: "example", title: "Sending $500 to India comparison", content: "Traditional bank: $25-50 fee + poor rate = ~8,900 INR received. Wise: $5-7 fee + real rate = ~9,300 INR received. That's ~$6 CAD more for your family!" },
              { type: "quickQuestion", question: "What's the biggest hidden cost when sending money abroad?", options: ["Transfer fees only", "Exchange rate markup", "Receiving fees", "Taxes"], correct: 1, explanation: "Exchange rate markups often cost more than stated fees. Always compare what the recipient actually receives." }
            ]
          },
          es: {
            headline: "Entendiendo las opciones de remesas",
            contentBreakdown: [
              { type: "text", content: "Las remesas significan enviar dinero a la familia en tu país de origen. En Canadá, los recién llegados envían más de $20 mil millones al extranjero anualmente. Opciones principales: bancos, servicios de transferencia, plataformas en línea (Wise, Remitly) y billeteras móviles." },
              { type: "example", title: "Enviando $500 a la India", content: "Banco tradicional: tarifa $25-50 + mal tipo de cambio = ~8,900 INR recibidos. Wise: tarifa $5-7 + tipo real = ~9,300 INR recibidos. ¡Eso es ~$6 CAD más para tu familia!" },
              { type: "quickQuestion", question: "¿Cuál es el mayor costo oculto al enviar dinero al extranjero?", options: ["Solo tarifas de transferencia", "El margen del tipo de cambio", "Tarifas de recepción", "Impuestos"], correct: 1, explanation: "Los márgenes de tipo de cambio a menudo cuestan más que las tarifas declaradas. Compara siempre lo que realmente recibe el destinatario." }
            ]
          },
          hi: {
            headline: "Remittance options samajhna",
            contentBreakdown: [
              { type: "text", content: "Remittance matlab apne home country mein family ko paisa bhejna. Canada mein, newcomers saal mein $20 billion se zyada abroad bhejte hain. Main options: banks, money transfer services, online platforms (Wise, Remitly), aur mobile wallets." },
              { type: "example", title: "India ko $500 bhejna", content: "Traditional bank: $25-50 fee + poor rate = ~8,900 INR mile. Wise: $5-7 fee + real rate = ~9,300 INR mile. Yeh ~$6 CAD zyada aapki family ke liye!" },
              { type: "quickQuestion", question: "Abroad paisa bhejne par sabse bada hidden cost kya hai?", options: ["Sirf transfer fees", "Exchange rate markup", "Receiving fees", "Taxes"], correct: 1, explanation: "Exchange rate markups aksar stated fees se zyada cost karte hain. Hamesha recipient ko actually kitna milta hai uska compare karein." }
            ]
          },
          tl: {
            headline: "Pag-unawa sa mga remittance option",
            contentBreakdown: [
              { type: "text", content: "Ang remittance ay ang pagpapadala ng pera sa pamilya sa iyong bansang pinagmulan. Sa Canada, ang mga bagong dating ay nagpapadala ng mahigit $20 billion sa ibang bansa taun-taon. Mga pangunahing pagpipilian: mga bangko, serbisyo sa paglilipat, online platforms (Wise, Remitly) at mobile wallets." },
              { type: "example", title: "Pagpapadala ng $500 sa India", content: "Traditional bank: $25-50 bayad + mahinang rate = ~8,900 INR natanggap. Wise: $5-7 bayad + real rate = ~9,300 INR natanggap. Iyon ay ~$6 CAD na higit para sa iyong pamilya!" },
              { type: "quickQuestion", question: "Ano ang pinakamalaking nakatagong gastos sa pagpapadala ng pera sa ibang bansa?", options: ["Mga transfer fee lamang", "Exchange rate markup", "Mga bayad sa pagtanggap", "Mga buwis"], correct: 1, explanation: "Ang mga exchange rate markup ay kadalasang mas mahal kaysa sa mga nakasaad na bayad. Laging ihambing ang halagang talagang matatanggap ng tatanggap." }
            ]
          },
          zh: {
            headline: "了解汇款选项",
            contentBreakdown: [
              { type: "text", content: "汇款是指向祖国家人汇款。在加拿大，新移民每年向海外汇款超过$200亿。主要选项：银行、汇款服务、在线平台（Wise、Remitly）和移动钱包。" },
              { type: "example", title: "向印度汇款$500", content: "传统银行：$25-50费用+较差汇率=收到约8,900印度卢比。Wise：$5-7费用+真实汇率=收到约9,300印度卢比。为你的家人多赚约$6加元！" },
              { type: "quickQuestion", question: "向国外汇款时最大的隐藏成本是什么？", options: ["仅转账费", "汇率加价", "收款费", "税费"], correct: 1, explanation: "汇率加价通常比明示费用更高。始终比较收款人实际收到的金额。" }
            ]
          },
          ar: {
            headline: "Understanding remittance options",
            contentBreakdown: [
              { type: "text", content: "Remittance means sending money to family in your home country. In Canada, newcomers send over $20 billion abroad annually. Main options: banks, money transfer services, online platforms (Wise, Remitly), and mobile wallets." },
              { type: "example", title: "Sending $500 to India comparison", content: "Traditional bank: $25-50 fee + poor rate = ~8,900 INR received. Wise: $5-7 fee + real rate = ~9,300 INR received. That's ~$6 CAD more for your family!" },
              { type: "quickQuestion", question: "What's the biggest hidden cost when sending money abroad?", options: ["Transfer fees only", "Exchange rate markup", "Receiving fees", "Taxes"], correct: 1, explanation: "Exchange rate markups often cost more than stated fees. Always compare what the recipient actually receives." }
            ]
          },
          fr: {
            headline: "Comprendre les options de remittance",
            contentBreakdown: [
              { type: "text", content: "Les remittances signifient envoyer de l'argent à la famille dans votre pays d'origine. Au Canada, les nouveaux arrivants envoient plus de $20 milliards à l'étranger chaque année. Principales options: banques, services de transfert, plateformes en ligne (Wise, Remitly) et portefeuilles mobiles." },
              { type: "example", title: "Envoi de $500 en Inde", content: "Banque traditionnelle: frais $25-50 + mauvais taux = ~8,900 INR reçus. Wise: frais $5-7 + taux réel = ~9,300 INR reçus. C'est ~$6 CAD de plus pour votre famille!" },
              { type: "quickQuestion", question: "Quel est le plus grand coût caché lors de l'envoi d'argent à l'étranger?", options: ["Frais de transfert seulement", "La marge sur le taux de change", "Frais de réception", "Taxes"], correct: 1, explanation: "Les marges sur les taux de change coûtent souvent plus que les frais indiqués. Comparez toujours ce que le destinataire reçoit réellement." }
            ]
          },
          pa: {
            headline: "Remittance options nu samajhna",
            contentBreakdown: [
              { type: "text", content: "Remittance matlab apne home country vich family nu paisa bhejna. Canada vich, newcomers saal vich $20 billion ton vadh abroad bhejde ne. Main options: banks, money transfer services, online platforms (Wise, Remitly), te mobile wallets." },
              { type: "example", title: "India nu $500 bhejna", content: "Traditional bank: $25-50 fee + poor rate = ~8,900 INR mile. Wise: $5-7 fee + real rate = ~9,300 INR mile. Eh ~$6 CAD zyada tuhadi family lai!" },
              { type: "quickQuestion", question: "Abroad paisa bhejne te sabto vadda hidden cost ki hai?", options: ["Sirf transfer fees", "Exchange rate markup", "Receiving fees", "Taxes"], correct: 1, explanation: "Exchange rate markups aksar stated fees ton vadh cost karde ne. Hamesha recipient nu asal vich kinna mil da hai ohda compare karo." }
            ]
          }
        }
      },
      {
        type: "concept",
        content: {
          en: {
            headline: "Comparing transfer methods",
            contentBreakdown: [
              { type: "text", content: "Each method has trade-offs. Bank wires are secure but expensive. Money transfer services are fast (minutes) but costly. Online platforms balance cost and speed. Mobile wallets are cheapest but limited availability." },
              { type: "example", title: "Sending $1,000 to Philippines", content: "Western Union (cash pickup): $15-25 fee, minutes, ~38,000 PHP received. Wise (bank deposit): $8-12 fee, 1-2 days, ~40,000 PHP received. Bank wire: $30-50 fee, 3-5 days, ~37,500 PHP received." },
              { type: "quickQuestion", question: "When choose Western Union over Wise?", options: ["When cost matters most", "When recipient needs cash immediately", "When sending to bank account", "For amounts over $10,000"], correct: 1, explanation: "Western Union offers cash pickup in minutes at thousands of locations — valuable when recipient needs money urgently without a bank account." }
            ]
          },
          es: {
            headline: "Comparando métodos de transferencia",
            contentBreakdown: [
              { type: "text", content: "Cada método tiene ventajas y desventajas. Las transferencias bancarias son seguras pero caras. Los servicios de transferencia son rápidos (minutos) pero costosos. Las plataformas en línea equilibran costo y velocidad." },
              { type: "example", title: "Enviando $1,000 a Filipinas", content: "Western Union (recogida): tarifa $15-25, minutos, ~38,000 PHP recibidos. Wise (depósito): tarifa $8-12, 1-2 días, ~40,000 PHP recibidos. Transferencia bancaria: tarifa $30-50, 3-5 días, ~37,500 PHP recibidos." },
              { type: "quickQuestion", question: "¿Cuándo elegir Western Union sobre Wise?", options: ["Cuando el costo es lo más importante", "Cuando el destinatario necesita efectivo inmediatamente", "Cuando se envía a una cuenta bancaria", "Para cantidades sobre $10,000"], correct: 1, explanation: "Western Union ofrece recogida de efectivo en minutos en miles de ubicaciones — valioso cuando el destinatario necesita dinero urgentemente sin cuenta bancaria." }
            ]
          },
          hi: {
            headline: "Transfer methods ka comparison",
            contentBreakdown: [
              { type: "text", content: "Har method ke trade-offs hain. Bank wires secure hain par expensive. Money transfer services fast hain (minutes) par costly. Online platforms cost aur speed balance karte hain." },
              { type: "example", title: "Philippines ko $1,000 bhejna", content: "Western Union (cash pickup): $15-25 fee, minutes, ~38,000 PHP mile. Wise (bank deposit): $8-12 fee, 1-2 din, ~40,000 PHP mile. Bank wire: $30-50 fee, 3-5 din, ~37,500 PHP mile." },
              { type: "quickQuestion", question: "Kab Western Union Wise se behtar?", options: ["Jab cost sabse important ho", "Jab recipient ko turant cash chahiye", "Jab bank account mein bhejna ho", "$10,000 se zyada ke liye"], correct: 1, explanation: "Western Union hazaaron locations par minutes mein cash pickup offer karta hai — valuable hai jab recipient ko urgently paise chahiye bina bank account ke." }
            ]
          },
          tl: {
            headline: "Paghahambing ng mga paraan ng paglilipat",
            contentBreakdown: [
              { type: "text", content: "Bawat paraan ay may mga trade-off. Ang mga bank wire ay ligtas ngunit mahal. Ang mga serbisyo sa paglilipat ay mabilis (minuto) ngunit mahal. Ang mga online platform ay nagbabalanse ng gastos at bilis." },
              { type: "example", title: "Pagpapadala ng $1,000 sa Pilipinas", content: "Western Union (cash pickup): $15-25 bayad, minuto, ~38,000 PHP natanggap. Wise (bank deposit): $8-12 bayad, 1-2 araw, ~40,000 PHP natanggap. Bank wire: $30-50 bayad, 3-5 araw, ~37,500 PHP natanggap." },
              { type: "quickQuestion", question: "Kailan piliin ang Western Union kaysa sa Wise?", options: ["Kapag ang gastos ang pinakamahalaga", "Kapag ang tatanggap ay nangangailangan ng cash agad", "Kapag nagpapadala sa isang bank account", "Para sa halaga na lampas $10,000"], correct: 1, explanation: "Ang Western Union ay nag-aalok ng cash pickup sa minuto sa liblibong lokasyon — mahalaga kapag ang tatanggap ay nangangailangan ng pera nang madali at walang bank account." }
            ]
          },
          zh: {
            headline: "比较转账方式",
            contentBreakdown: [
              { type: "text", content: "每种方式都有权衡。银行电汇安全但昂贵。汇款服务快速（几分钟）但成本高。在线平台平衡成本和速度。" },
              { type: "example", title: "向菲律宾汇款$1000", content: "西联汇款（现金提取）：$15-25费用，几分钟，收到约38,000菲律宾比索。Wise（银行存款）：$8-12费用，1-2天，收到约40,000菲律宾比索。银行电汇：$30-50费用，3-5天，收到约37,500菲律宾比索。" },
              { type: "quickQuestion", question: "什么时候选西联汇款而不是Wise？", options: ["当成本最重要时", "当收款人需要立即获得现金时", "当汇到银行账户时", "超过$10,000时"], correct: 1, explanation: "西联汇款在数千个网点提供几分钟内现金提取——当收款人急需用钱且没有银行账户时很有价值。" }
            ]
          },
          ar: {
            headline: "Comparing transfer methods",
            contentBreakdown: [
              { type: "text", content: "Each method has trade-offs. Bank wires are secure but expensive. Money transfer services are fast (minutes) but costly. Online platforms balance cost and speed. Mobile wallets are cheapest but limited availability." },
              { type: "example", title: "Sending $1,000 to Philippines", content: "Western Union (cash pickup): $15-25 fee, minutes, ~38,000 PHP received. Wise (bank deposit): $8-12 fee, 1-2 days, ~40,000 PHP received. Bank wire: $30-50 fee, 3-5 days, ~37,500 PHP received." },
              { type: "quickQuestion", question: "When choose Western Union over Wise?", options: ["When cost matters most", "When recipient needs cash immediately", "When sending to bank account", "For amounts over $10,000"], correct: 1, explanation: "Western Union offers cash pickup in minutes at thousands of locations — valuable when recipient needs money urgently without a bank account." }
            ]
          },
          fr: {
            headline: "Comparaison des méthodes de transfert",
            contentBreakdown: [
              { type: "text", content: "Chaque méthode a des compromis. Les virements bancaires sont sécurisés mais chers. Les services de transfert sont rapides (minutes) mais coûteux. Les plateformes en ligne équilibrent coût et vitesse." },
              { type: "example", title: "Envoi de $1,000 aux Philippines", content: "Western Union (retrait cash): frais $15-25, minutes, ~38,000 PHP reçus. Wise (dépôt bancaire): frais $8-12, 1-2 jours, ~40,000 PHP reçus. Virement bancaire: frais $30-50, 3-5 jours, ~37,500 PHP reçus." },
              { type: "quickQuestion", question: "Quand choisir Western Union plutôt que Wise?", options: ["Quand le coût est le plus important", "Quand le destinataire a besoin de cash immédiatement", "Quand on envoie à un compte bancaire", "Pour des sommes de plus de $10,000"], correct: 1, explanation: "Western Union offre le retrait de cash en minutes à des milliers d'emplacements — précieux quand le destinataire a besoin d'argent urgentement sans compte bancaire." }
            ]
          },
          pa: {
            headline: "Transfer methods da comparison",
            contentBreakdown: [
              { type: "text", content: "Har method de trade-offs han. Bank wires secure han par expensive. Money transfer services fast han (minutes) par costly. Online platforms cost te speed balance karde ne." },
              { type: "example", title: "Philippines nu $1,000 bhejna", content: "Western Union (cash pickup): $15-25 fee, minutes, ~38,000 PHP mile. Wise (bank deposit): $8-12 fee, 1-2 din, ~40,000 PHP mile. Bank wire: $30-50 fee, 3-5 din, ~37,500 PHP mile." },
              { type: "quickQuestion", question: "Kado Western Union Wise ton behtar?", options: ["Jadon cost sabto important hove", "Jadon recipient nu turant cash chahida hove", "Jadon bank account vich bhejna hove", "$10,000 ton vadh lai"], correct: 1, explanation: "Western Union hazaaran locations te minutes vich cash pickup offer kar da hai — valuable hai jadon recipient nu urgently paise chahide han bina bank account de." }
            ]
          }
        }
      },
      {
        type: "concept",
        content: {
          en: {
            headline: "Exchange rates and timing",
            contentBreakdown: [
              { type: "text", content: "The exchange rate determines how much foreign currency your money buys. The 'mid-market rate' is the real rate banks use. Most services add a markup (0.5% to 4%) — this is hidden profit." },
              { type: "example", title: "The markup matters", content: "Sending $1,000 CAD to Mexico. Mid-market rate: 1 CAD = 14.5 MXN. Your bank offers 14.0 MXN (3.4% markup). Wise offers 14.45 MXN (0.4% markup). That's ~$31 CAD difference for your family!" },
              { type: "quickQuestion", question: "Which rate should you use to compare services?", options: ["Each service's offered rate", "The mid-market rate (Google 'CAD to MXN')", "Yesterday's rate", "The highest rate found"], correct: 1, explanation: "Check the mid-market rate on Google or XE.com first. Compare how much each service's rate differs. Closer to mid-market is better." }
            ]
          },
          es: {
            headline: "Tipos de cambio y timing",
            contentBreakdown: [
              { type: "text", content: "El tipo de cambio determina cuánta moneda extranjera compra tu dinero. El 'tipo de cambio medio' es el tipo real que usan los bancos. La mayoría de los servicios agregan un margen (0.5% a 4%) — esta es su ganancia oculta." },
              { type: "example", title: "El margen importa", content: "Enviando $1,000 CAD a México. Tipo medio: 1 CAD = 14.5 MXN. Tu banco ofrece 14.0 MXN (margen 3.4%). Wise ofrece 14.45 MXN (margen 0.4%). ¡Eso es ~$31 CAD de diferencia para tu familia!" },
              { type: "quickQuestion", question: "¿Qué tipo de cambio usar para comparar servicios?", options: ["El tipo que ofrece cada servicio", "El tipo de cambio medio (Google 'CAD a MXN')", "El tipo de ayer", "El tipo más alto encontrado"], correct: 1, explanation: "Verifica primero el tipo de cambio medio en Google o XE.com. Compara cuánto difiere el tipo de cada servicio. Más cerca del medio es mejor." }
            ]
          },
          hi: {
            headline: "Exchange rates aur timing",
            contentBreakdown: [
              { type: "text", content: "Exchange rate decide karta hai kitni foreign currency milegi. 'Mid-market rate' woh real rate hai jo banks use karte hain. Zyadatar services markup (0.5% se 4%) add karte hain — yeh hidden profit hai." },
              { type: "example", title: "Markup matter karta hai", content: "$1,000 CAD Mexico bhej rahe hain. Mid-market: 1 CAD = 14.5 MXN. Aapka bank 14.0 MXN offer karta hai (3.4% markup). Wise 14.45 MXN offer karta hai (0.4% markup). Yeh ~$31 CAD ka farak hai aapki family ke liye!" },
              { type: "quickQuestion", question: "Services compare karne ke liye kaunsa rate use karein?", options: ["Har service ka offered rate", "Mid-market rate (Google 'CAD to MXN')", "Kal ka rate", "Sabse high rate"], correct: 1, explanation: "Pehle Google ya XE.com par mid-market rate check karein. Har service ke rate ka farak dekhein. Mid-market ke jitna kareeb, utna behtar." }
            ]
          },
          tl: {
            headline: "Ang mga exchange rate at timing",
            contentBreakdown: [
              { type: "text", content: "Ang exchange rate ay tumutukoy kung gaano karaming foreign currency ang mabibili. Ang 'mid-market rate' ay ang real rate na ginagamit ng mga bangko. Ang karamihan sa mga serbisyo ay nagdagdag ng markup (0.5% hanggang 4%) — ito ang kanilang nakatagong kita." },
              { type: "example", title: "Ang markup ay mahalaga", content: "Nagpapadala ng $1,000 CAD sa Mexico. Mid-market rate: 1 CAD = 14.5 MXN. Ang iyong bangko ay nag-aalok ng 14.0 MXN (3.4% markup). Ang Wise ay nag-aalok ng 14.45 MXN (0.4% markup). Iyon ay ~$31 CAD na kaibahan para sa iyong pamilya!" },
              { type: "quickQuestion", question: "Aling exchange rate ang dapat gamitin para ihambing ang mga serbisyo?", options: ["Ang rate na inaalok ng bawat serbisyo", "Ang mid-market rate (Google 'CAD to MXN')", "Ang rate kahapon", "Ang pinakamataas na rate"], correct: 1, explanation: "Suriin muna ang mid-market rate sa Google o XE.com. Ihambing kung gaano kalayo ang rate ng bawat serbisyo. Kung gaano kalapit sa mid-market, mas maganda." }
            ]
          },
          zh: {
            headline: "汇率和时机",
            contentBreakdown: [
              { type: "text", content: "汇率决定你的钱能购买多少外币。'中间市场汇率'是银行间使用的真实汇率。大多数服务加价（0.5%到4%）——这是他们隐藏的利润。" },
              { type: "example", title: "加价很重要", content: "向墨西哥汇款$1000加元。中间市场汇率：1加元 = 14.5墨西哥比索。你的银行提供14.0（加价3.4%）。Wise提供14.45（加价0.4%）。为你的家人相差约$31加元！" },
              { type: "quickQuestion", question: "比较服务时应该使用哪个汇率？", options: ["每个服务提供的汇率", "中间市场汇率（Google'CAD to MXN'）", "昨天的汇率", "找到的最高汇率"], correct: 1, explanation: "先在Google或XE.com上查看中间市场汇率。比较每个服务汇率的差异。越接近中间市场汇率越好。" }
            ]
          },
          ar: {
            headline: "Exchange rates and timing",
            contentBreakdown: [
              { type: "text", content: "The exchange rate determines how much foreign currency your money buys. The 'mid-market rate' is the real rate banks use. Most services add a markup (0.5% to 4%) — this is hidden profit." },
              { type: "example", title: "The markup matters", content: "Sending $1,000 CAD to Mexico. Mid-market rate: 1 CAD = 14.5 MXN. Your bank offers 14.0 MXN (3.4% markup). Wise offers 14.45 MXN (0.4% markup). That's ~$31 CAD difference for your family!" },
              { type: "quickQuestion", question: "Which rate should you use to compare services?", options: ["Each service's offered rate", "The mid-market rate (Google 'CAD to MXN')", "Yesterday's rate", "The highest rate found"], correct: 1, explanation: "Check the mid-market rate on Google or XE.com first. Compare how much each service's rate differs. Closer to mid-market is better." }
            ]
          },
          fr: {
            headline: "Les taux de change et le timing",
            contentBreakdown: [
              { type: "text", content: "Le taux de change détermine combien de devises étrangères votre argent achète. Le 'taux de change moyen' est le taux réel que les banques utilisent. La plupart des services ajoutent une marge (0.5% à 4%) — c'est leur profit caché." },
              { type: "example", title: "La marge est importante", content: "Envoi de $1,000 CAD au Mexique. Taux moyen: 1 CAD = 14.5 MXN. Votre banque offre 14.0 MXN (marge 3.4%). Wise offre 14.45 MXN (marge 0.4%). C'est ~$31 CAD de différence pour votre famille!" },
              { type: "quickQuestion", question: "Quel taux utiliser pour comparer les services?", options: ["Le taux offert par chaque service", "Le taux de change moyen (Google 'CAD à MXN')", "Le taux d'hier", "Le taux le plus élevé trouvé"], correct: 1, explanation: "Vérifiez d'abord le taux moyen sur Google ou XE.com. Comparez de combien le taux de chaque service diffère. Plus proche du moyen est mieux." }
            ]
          },
          pa: {
            headline: "Exchange rates te timing",
            contentBreakdown: [
              { type: "text", content: "Exchange rate decide kar da hai ki kinni foreign currency milegi. 'Mid-market rate' woh real rate hai jo banks use karde ne. Zyadatar services markup (0.5% to 4%) add karde ne — eh hidden profit hai." },
              { type: "example", title: "Markup matter kar da hai", content: "$1,000 CAD Mexico bhej rahe ho. Mid-market: 1 CAD = 14.5 MXN. Tuhada bank 14.0 MXN offer kar da hai (3.4% markup). Wise 14.45 MXN offer kar da hai (0.4% markup). Eh ~$31 CAD da farak hai tuhadi family lai!" },
              { type: "quickQuestion", question: "Services compare karne lai kaunsa rate use karo?", options: ["Har service da offered rate", "Mid-market rate (Google 'CAD to MXN')", "Kal da rate", "Sabto high rate"], correct: 1, explanation: "Pehla Google ya XE.com te mid-market rate check karo. Har service de rate da farak dekho. Mid-market de jitna kareeb, utna behtar." }
            ]
          }
        }
      },
      {
        type: "concept",
        content: {
          en: {
            headline: "Safety and security tips",
            contentBreakdown: [
              { type: "text", content: "Always verify the recipient's details before sending. Use licensed services with strong encryption. Never send money to someone you met online. Keep your transaction receipts and tracking numbers." },
              { type: "example", title: "Avoiding scams", content: "A common scam: Someone claims to be a relative in emergency needing money. They create fake urgency. Always verify by calling your family directly on a known number before sending money for 'emergencies'." },
              { type: "quickQuestion", question: "What should you do before sending money for a claimed emergency?", options: ["Send immediately to help", "Verify by calling your family on a known number", "Ask the person for their ID", "Send a smaller test amount first"], correct: 1, explanation: "Scammers create fake urgency. Always verify emergencies by calling your family directly on a phone number you know is theirs, not one the caller provides." }
            ]
          },
          es: {
            headline: "Consejos de seguridad",
            contentBreakdown: [
              { type: "text", content: "Siempre verifica los detalles del destinatario antes de enviar. Usa servicios con licencia y encriptación fuerte. Nunca envíes dinero a alguien que conociste en línea. Guarda tus recibos y números de seguimiento." },
              { type: "example", title: "Evitando estafas", content: "Estafa común: Alguien dice ser un familiar en emergencia necesitando dinero. Crean urgencia falsa. Siempre verifica llamando directamente a tu familia en un número conocido antes de enviar dinero por 'emergencias'." },
              { type: "quickQuestion", question: "¿Qué debes hacer antes de enviar dinero por una emergencia reclamada?", options: ["Enviar inmediatamente para ayudar", "Verificar llamando a tu familia en un número conocido", "Pedirle a la persona su ID", "Enviar primero una cantidad de prueba"], correct: 1, explanation: "Los estafadores crean urgencia falsa. Siempre verifica las emergencias llamando directamente a tu familia en un número de teléfono que sabes es de ellos, no uno que proporciona el llamante." }
            ]
          },
          hi: {
            headline: "Safety aur security tips",
            contentBreakdown: [
              { type: "text", content: "Bhejne se pehle hamesha recipient ke details verify karein. Licensed services use karein strong encryption ke saath. Online mile kisi ko kabhi paise na bhejein. Apne transaction receipts aur tracking numbers save karein." },
              { type: "example", title: "Scams se bachna", content: "Ek common scam: Koi emergency mein relative hone ka dawa karta hai aur paise maangta hai. Woh fake urgency create karte hain. Hamesha 'emergencies' ke liye paise bhejne se pehle apni family ko jaane wale number par phone karke verify karein." },
              { type: "quickQuestion", question: "Claimed emergency ke liye paise bhejne se pehle kya karna chahiye?", options: ["Turant madad ke liye bhejein", "Jaane wale number par phone karke verify karein", "Aadmi se uska ID maangein", "Pehle chhota test amount bhejein"], correct: 1, explanation: "Scammers fake urgency create karte hain. Hamesha emergencies verify karein apni family ko directly phone karke — woh number jisse aap jaante hain ki unka hai, woh number nahi jo caller deta hai." }
            ]
          },
          tl: {
            headline: "Mga tip sa kaligtasan at seguridad",
            contentBreakdown: [
              { type: "text", content: "Laging i-verify ang mga detalye ng tatanggap bago magpadala. Gumamit ng mga lisensyadong serbisyo na may malakas na encryption. Huwag kailanman magpadala ng pera sa taong nakilala mo online. Panatilihin ang iyong mga resibo at tracking numbers." },
              { type: "example", title: "Pag-iwas sa mga scam", content: "Isang karaniwang scam: May nagsasabing kamag-anak sa emergency na nangangailangan ng pera. Gumagawa sila ng pekeng pagmamadali. Laging i-verify sa pamamagitan ng direktang pagtawag sa iyong pamilya sa isang kilalang numero bago magpadala ng pera para sa 'emergency'." },
              { type: "quickQuestion", question: "Ano ang dapat mong gawin bago magpadala ng pera para sa isang sinasabing emergency?", options: ["Magpadala kaagad para tumulong", "I-verify sa pamamagitan ng pagtawag sa pamilya sa kilalang numero", "Hilingin sa tao ang kanilang ID", "Magpadala muna ng maliit na halaga para subukan"], correct: 1, explanation: "Ang mga scammer ay gumagawa ng pekeng pagmamadali. Laging i-verify ang mga emergency sa pamamagitan ng direktang pagtawag sa iyong pamilya sa isang numero ng telepono na alam mong kanila, hindi ang ibinibigay ng tumatawag." }
            ]
          },
          zh: {
            headline: "安全提示",
            contentBreakdown: [
              { type: "text", content: "汇款前务必核实收款人详细信息。使用具有强加密功能的持牌服务。切勿向你网上认识的人汇款。保存好你的交易收据和追踪号码。" },
              { type: "example", title: "避免诈骗", content: "常见骗局：有人声称是遇到紧急情况的亲戚需要钱。他们制造虚假的紧迫性。为所谓'紧急情况'汇款前，务必用你知道的号码直接给家人打电话核实。" },
              { type: "quickQuestion", question: "为声称的紧急情况汇款前应该做什么？", options: ["立即汇款帮忙", "用已知号码给家人打电话核实", "向对方索要身份证件", "先汇一小笔测试金额"], correct: 1, explanation: "骗子制造虚假的紧迫性。务必用你知道是家人真实号码的电话直接联系家人核实紧急情况，而不是来电者提供的号码。" }
            ]
          },
          ar: {
            headline: "Safety and security tips",
            contentBreakdown: [
              { type: "text", content: "Always verify the recipient's details before sending. Use licensed services with strong encryption. Never send money to someone you met online. Keep your transaction receipts and tracking numbers." },
              { type: "example", title: "Avoiding scams", content: "A common scam: Someone claims to be a relative in emergency needing money. They create fake urgency. Always verify by calling your family directly on a known number before sending money for 'emergencies'." },
              { type: "quickQuestion", question: "What should you do before sending money for a claimed emergency?", options: ["Send immediately to help", "Verify by calling your family on a known number", "Ask the person for their ID", "Send a smaller test amount first"], correct: 1, explanation: "Scammers create fake urgency. Always verify emergencies by calling your family directly on a phone number you know is theirs, not one the caller provides." }
            ]
          },
          fr: {
            headline: "Conseils de sécurité",
            contentBreakdown: [
              { type: "text", content: "Vérifiez toujours les détails du destinataire avant d'envoyer. Utilisez des services agréés avec un cryptage fort. N'envoyez jamais d'argent à quelqu'un rencontré en ligne. Gardez vos reçus et numéros de suivi." },
              { type: "example", title: "Éviter les arnaques", content: "Arnaque courante: Quelqu'un prétend être un parent en urgence ayant besoin d'argent. Ils créent une fausse urgence. Vérifiez toujours en appelant directement votre famille sur un numéro connu avant d'envoyer de l'argent pour des 'urgences'." },
              { type: "quickQuestion", question: "Que devriez-vous faire avant d'envoyer de l'argent pour une urgence alléguée?", options: ["Envoyer immédiatement pour aider", "Vérifier en appelant votre famille sur un numéro connu", "Demander à la personne son ID", "Envoyer d'abord un petit montant test"], correct: 1, explanation: "Les escrocs créent une fausse urgence. Vérifiez toujours les urgences en appelant directement votre famille sur un numéro que vous savez être le leur, pas celui fourni par l'appelant." }
            ]
          },
          pa: {
            headline: "Safety te security tips",
            contentBreakdown: [
              { type: "text", content: "Bhejn to pehla hamesha recipient de details verify karo. Licensed services use karo strong encryption de naal. Online mile kise nu vi paisa na bhejo. Apne transaction receipts te tracking numbers save karo." },
              { type: "example", title: "Scams ton bachna", content: "Ik common scam: Koi emergency vich relative hone da dawa kar da hai te paisa maang da hai. Oh fake urgency create karde ne. Hamesha 'emergencies' lai paisa bhejn to pehla apni family nu jaane wale number te phone karke verify karo." },
              { type: "quickQuestion", question: "Claimed emergency lai paisa bhejn to pehla ki karna chahida hai?", options: ["Turant madad lai bhejo", "Jaane wale number te phone karke verify karo", "Bande to usda ID mango", "Pehla chhota test amount bhejo"], correct: 1, explanation: "Scammers fake urgency create karde ne. Hamesha emergencies verify karo apni family nu directly phone karke — woh number jisse tu jaanda hai ki unha da hai, woh number nahi jo caller din da hai." }
            ]
          }
        }
      },
      {
        type: "concept",
        content: {
          en: {
            headline: "Saving money on regular transfers",
            contentBreakdown: [
              { type: "text", content: "If you send money monthly, small savings add up. Setting up recurring transfers with online services often gives better rates. Some services offer 'rate alerts' when exchange rates are favorable." },
              { type: "example", title: "Monthly savings example", content: "Sending $300/month to India. Using traditional bank: $25 fee × 12 = $300/year in fees. Using Wise: $6 fee × 12 = $72/year in fees. Annual savings: $228 just by switching services!" },
              { type: "quickQuestion", question: "How can you save on regular monthly transfers?", options: ["Always use the same bank for convenience", "Set up recurring transfers with online services", "Send larger amounts less frequently", "Both B and C"], correct: 3, explanation: "Online services offer lower fees and better rates for recurring transfers. Sending larger amounts less often also reduces total fees paid over time." }
            ]
          },
          es: {
            headline: "Ahorrando dinero en transferencias regulares",
            contentBreakdown: [
              { type: "text", content: "Si envías dinero mensualmente, los pequeños ahorros se acumulan. Configurar transferencias recurrentes con servicios en línea a menudo da mejores tasas. Algunos servicios ofrecen 'alertas de tasa' cuando los tipos de cambio son favorables." },
              { type: "example", title: "Ejemplo de ahorros mensuales", content: "Enviando $300/mes a la India. Usando banco tradicional: tarifa $25 × 12 = $300/año en tarifas. Usando Wise: tarifa $6 × 12 = $72/año en tarifas. ¡Ahorro anual: $228 solo por cambiar de servicio!" },
              { type: "quickQuestion", question: "¿Cómo puedes ahorrar en transferencias mensuales regulares?", options: ["Siempre usar el mismo banco por conveniencia", "Configurar transferencias recurrentes con servicios en línea", "Enviar montos más grandes menos frecuentemente", "Ambas B y C"], correct: 3, explanation: "Los servicios en línea ofrecen tarifas más bajas y mejores tasas para transferencias recurrentes. Enviar montos más grandes con menos frecuencia también reduce las tarifas totales pagadas." }
            ]
          },
          hi: {
            headline: "Regular transfers par paise bachana",
            contentBreakdown: [
              { type: "text", content: "Agar aap monthly paise bhejte hain, chhota savings add ho jaata hai. Online services ke saath recurring transfers set up karne se often better rates milte hain. Kuch services 'rate alerts' offer karte hain jab exchange rates favorable hote hain." },
              { type: "example", title: "Monthly savings example", content: "India ko $300/month bhejna. Traditional bank use karke: $25 fee × 12 = $300/year fees mein. Wise use karke: $6 fee × 12 = $72/year fees mein. Saalana savings: $228 sirf service switch karke!" },
              { type: "quickQuestion", question: "Regular monthly transfers par kaise bachayein?", options: ["Convenience ke liye hamesha same bank use karein", "Online services ke saath recurring transfers set up karein", "Zyada amount kam frequently bhejein", "Dono B aur C"], correct: 3, explanation: "Online services recurring transfers ke liye lower fees aur better rates offer karte hain. Zyada amount kam frequently bhejna bhi total fees ko reduce karta hai." }
            ]
          },
          tl: {
            headline: "Pagtitipid sa mga regular na paglilipat",
            contentBreakdown: [
              { type: "text", content: "Kung nagpapadala ka ng pera buwan-buwan, ang maliliit na savings ay nagdudulot. Ang pag-setup ng mga recurring transfers sa online services ay kadalasang nagbibigay ng mas magandang rates. Ang ilang serbisyo ay nag-aalok ng 'rate alerts' kapag ang mga exchange rate ay paborable." },
              { type: "example", title: "Halimbawa ng buwanang savings", content: "Pagpapadala ng $300/buwan sa India. Gamit ang traditional bank: $25 bayad × 12 = $300/taon sa mga bayad. Gamit ang Wise: $6 bayad × 12 = $72/taon sa mga bayad. Taunang savings: $228 sa pamamagitan lamang ng pagpapalit ng serbisyo!" },
              { type: "quickQuestion", question: "Paano ka makakapagtipid sa mga regular na buwanang paglilipat?", options: ["Laging gamitin ang parehong bangko para sa kaginhawahan", "Mag-setup ng mga recurring transfers sa online services", "Magpadala ng mas malalaking halaga nang mas madalang", "Parehong B at C"], correct: 3, explanation: "Ang mga online service ay nag-aalok ng mas mababang bayad at mas magandang rates para sa mga recurring transfers. Ang pagpapadala ng mas malalaking halaga nang mas madalang ay bina-bawasan din ang kabuuang bayad." }
            ]
          },
          zh: {
            headline: "定期转账省钱方法",
            contentBreakdown: [
              { type: "text", content: "如果你每月汇款，小额积少成多。用在线服务设置定期转账通常能获得更好的汇率。一些服务在汇率有利时提供'汇率提醒'。" },
              { type: "example", title: "每月节省示例", content: "每月向印度汇款$300。使用传统银行：$25费用 × 12 = 每年$300费用。使用Wise：$6费用 × 12 = 每年$72费用。年度节省：仅换服务就省$228！" },
              { type: "quickQuestion", question: "如何节省定期月度转账费用？", options: ["为方便始终使用同一家银行", "用在线服务设置定期转账", "减少频率但汇较大金额", "B和C两者"], correct: 3, explanation: "在线服务为定期转账提供更低费用和更好汇率。减少频率但汇较大金额也能降低长期总费用。" }
            ]
          },
          ar: {
            headline: "Saving money on regular transfers",
            contentBreakdown: [
              { type: "text", content: "If you send money monthly, small savings add up. Setting up recurring transfers with online services often gives better rates. Some services offer 'rate alerts' when exchange rates are favorable." },
              { type: "example", title: "Monthly savings example", content: "Sending $300/month to India. Using traditional bank: $25 fee × 12 = $300/year in fees. Using Wise: $6 fee × 12 = $72/year in fees. Annual savings: $228 just by switching services!" },
              { type: "quickQuestion", question: "How can you save on regular monthly transfers?", options: ["Always use the same bank for convenience", "Set up recurring transfers with online services", "Send larger amounts less frequently", "Both B and C"], correct: 3, explanation: "Online services offer lower fees and better rates for recurring transfers. Sending larger amounts less often also reduces total fees paid over time." }
            ]
          },
          fr: {
            headline: "Économiser sur les transferts réguliers",
            contentBreakdown: [
              { type: "text", content: "Si vous envoyez de l'argent mensuellement, les petites économies s'accumulent. Configurer des transferts récurrents avec des services en ligne donne souvent de meilleurs taux. Certains services offrent des 'alertes de taux' quand les taux de change sont favorables." },
              { type: "example", title: "Exemple d'économies mensuelles", content: "Envoi de $300/mois en Inde. Banque traditionnelle: frais $25 × 12 = $300/an en frais. Wise: frais $6 × 12 = $72/an en frais. Économies annuelles: $228 rien qu'en changeant de service!" },
              { type: "quickQuestion", question: "Comment économiser sur les transferts mensuels réguliers?", options: ["Toujours utiliser la même banque pour la commodité", "Configurer des transferts récurrents avec services en ligne", "Envoyer des montants plus grands moins fréquemment", "Les deux B et C"], correct: 3, explanation: "Les services en ligne offrent des frais plus bas et de meilleurs taux pour les transferts récurrents. Envoyer des montants plus grands moins souvent réduit aussi les frais totaux payés." }
            ]
          },
          pa: {
            headline: "Regular transfers te paise bachana",
            contentBreakdown: [
              { type: "text", content: "Jehde tu monthly paisa bhejda hai, chhota savings add ho janda hai. Online services de naal recurring transfers set up karne naal often better rates milde ne. Kujh services 'rate alerts' offer karde ne jadon exchange rates favorable hunde ne." },
              { type: "example", title: "Monthly savings example", content: "India nu $300/month bhejna. Traditional bank use karke: $25 fee × 12 = $300/year fees vich. Wise use karke: $6 fee × 12 = $72/year fees vich. Saalana savings: $228 sirf service switch karke!" },
              { type: "quickQuestion", question: "Regular monthly transfers te kiven bachiye?", options: ["Sukh lai hamesha ohio bank use karo", "Online services de naal recurring transfers set up karo", "Zyada amount kam frequently bhejo", "Dono B te C"], correct: 3, explanation: "Online services recurring transfers lai lower fees te better rates offer karde ne. Zyada amount kam frequently bhejna vi total fees ghatanda hai." }
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
            headline: "Understanding credit scores in Canada",
            contentBreakdown: [
              { type: "text", content: "A credit score is a number from 300 to 850 that shows how reliably you repay borrowed money. Canadian lenders use this score to decide whether to approve you for loans, credit cards, apartments, and even some jobs." },
              { type: "example", title: "Real-world impact example", content: "With a score of 750: mortgage rate 4.5%, credit card approved easily, apartment rental approved same day. With a score of 580: mortgage rate 7%, credit card denied or requires $500 deposit, apartment requires extra references." },
              { type: "quickQuestion", question: "What range is considered 'good' credit in Canada?", options: ["300-500", "500-660", "660-760", "760-850"], correct: 2, explanation: "660-760 is considered good credit. Above 760 is excellent. Below 560 is poor. Each tier affects your interest rates and approval chances." }
            ]
          },
          es: {
            headline: "Entendiendo las puntuaciones de crédito en Canadá",
            contentBreakdown: [
              { type: "text", content: "Una puntuación de crédito es un número del 300 al 850 que muestra qué tan confiablemente devuelves el dinero prestado. Los prestamistas canadienses usan esta puntuación para decidir si aprobarte para préstamos, tarjetas, apartamentos e incluso algunos empleos." },
              { type: "example", title: "Ejemplo de impacto real", content: "Con puntuación de 750: hipoteca al 4.5%, tarjeta aprobada fácilmente, apartamento aprobado el mismo día. Con 580: hipoteca al 7%, tarjeta negada o requiere $500 depósito, apartamento requiere referencias adicionales." },
              { type: "quickQuestion", question: "¿Qué rango se considera 'bueno' en Canadá?", options: ["300-500", "500-660", "660-760", "760-850"], correct: 2, explanation: "660-760 es bueno. Más de 760 es excelente. Menos de 560 es deficiente. Cada nivel afecta tus tasas y probabilidades de aprobación." }
            ]
          },
          hi: {
            headline: "Canada mein credit scores samajhna",
            contentBreakdown: [
              { type: "text", content: "Credit score 300 se 850 tak ka number hai jo dikhata hai kitni reliably aap borrowed money wapas chukate ho. Canadian lenders yeh score use karte hain loans, credit cards, apartments, aur kuchh jobs approve karne ke liye." },
              { type: "example", title: "Real-world impact example", content: "750 score ke saath: mortgage 4.5%, credit card easily approved, apartment same day approved. 580 score ke saath: mortgage 7%, credit card denied ya $500 deposit chahiye, apartment extra references chahiye." },
              { type: "quickQuestion", question: "Canada mein 'good' credit kaunsa range hai?", options: ["300-500", "500-660", "660-760", "760-850"], correct: 2, explanation: "660-760 good mana jata hai. 760 se upar excellent hai. 560 se neeche poor hai. Har tier aapke rates aur approval chances ko affect karta hai." }
            ]
          },
          tl: {
            headline: "Pag-unawa sa credit scores sa Canada",
            contentBreakdown: [
              { type: "text", content: "Ang credit score ay numero mula 300 hanggang 850 na nagpapakita kung gaano ka kaaasahan sa pagbabayad ng inutang. Ginagamit ng mga lender sa Canada ang score na ito para magdesisyon kung aaprubahan ka para sa loans, cards, apartment, at trabaho." },
              { type: "example", title: "Halimbawa ng totoong epekto", content: "Score na 750: mortgage sa 4.5%, credit card madaling naaprubahan, apartment same day approval. Score na 580: mortgage sa 7%, credit card denied o kailangan ng $500 deposit, apartment kailangan ng extra references." },
              { type: "quickQuestion", question: "Anong range ang itinuturing na 'maganda' sa Canada?", options: ["300-500", "500-660", "660-760", "760-850"], correct: 2, explanation: "660-760 ay maganda. Higit sa 760 ay excellent. Mababa sa 560 ay mahina. Bawat antas ay nakakaapekto sa iyong rates at tsansa ng pag-apruba." }
            ]
          },
          zh: {
            headline: "了解加拿大的信用分数",
            contentBreakdown: [
              { type: "text", content: "信用分数是300到850之间的数字，显示你偿还借款的可靠程度。加拿大贷款人使用这个分数来决定是否批准你的贷款、信用卡、租房，甚至某些工作。" },
              { type: "example", title: "实际影响示例", content: "750分：房贷利率4.5%，信用卡轻松获批，租房当天批准。580分：房贷利率7%，信用卡被拒或需要$500押金，租房需要额外证明。" },
              { type: "quickQuestion", question: "在加拿大什么范围被认为是'良好'信用？", options: ["300-500", "500-660", "660-760", "760-850"], correct: 2, explanation: "660-760为良好。760以上为优秀。560以下为较差。每个等级都会影响你的利率和批准几率。" }
            ]
          },
          ar: {
            headline: "فهم التقييمات الائتمانية في كندا",
            contentBreakdown: [
              { type: "text", content: "التقييم الائتماني هو رقم من 300 إلى 850 يوضح مدى التزامك في سداد المال المقترض. يستخدم المقرضون الكنديون هذا التقييم لاتخاذ قرارات بشأن القروض والبطاقات والشقق والوظائف." },
              { type: "example", title: "مثال على التأثير الواقعي", content: "بتقييم 750: رهن عقاري 4.5%، بطاقة ائتمانية بسهولة، شقة بنفس اليوم. بتقييم 580: رهن 7%، بطاقة مرفوضة أو تحتاج 500 دولار إيداع، شقة تحتاج ضمانات إضافية." },
              { type: "quickQuestion", question: "ما النطاق الذي يُعتبر 'جيدًا' في كندا؟", options: ["300-500", "500-660", "660-760", "760-850"], correct: 2, explanation: "660-760 جيد. أكثر من 760 ممتاز. أقل من 560 ضعيف. كل مستوى يؤثر على أسعارك وفرص الموافقة." }
            ]
          },
          fr: {
            headline: "Comprendre les pointages de crédit au Canada",
            contentBreakdown: [
              { type: "text", content: "Un pointage de crédit est un nombre de 300 à 850 qui montre à quel point vous remboursez de façon fiable. Les prêteurs canadiens utilisent ce score pour décider des prêts, cartes, appartements et emplois." },
              { type: "example", title: "Exemple d'impact réel", content: "Score de 750: hypothèque à 4.5%, carte facilement approuvée, appartement même jour. Score de 580: hypothèque à 7%, carte refusée ou nécessite $500 dépôt, appartement demande références supplémentaires." },
              { type: "quickQuestion", question: "Quelle plage est considérée comme 'bonne' au Canada ?", options: ["300-500", "500-660", "660-760", "760-850"], correct: 2, explanation: "660-760 est bon. Au-dessus de 760 est excellent. En-dessous de 560 est faible. Chaque niveau affecte vos taux et chances d'approbation." }
            ]
          },
          pa: {
            headline: "Canada vich credit scores samajhna",
            contentBreakdown: [
              { type: "text", content: "Credit score 300 ton 850 tak da number hai jo dikhaunda hai ki tusi borrowed paise kinni zimmedari naal wapas karde ho. Canadian lenders eh score use karde han loans, credit cards, apartments, ate kujh jobs approve karlayi." },
              { type: "example", title: "Real-world impact example", content: "750 score naal: mortgage 4.5%, credit card aasaani naal approve, apartment ohio din approve. 580 score naal: mortgage 7%, credit card denied ya $500 deposit chahida hai, apartment extra references chahide han." },
              { type: "quickQuestion", question: "Canada vich 'changa' credit di range ki hai?", options: ["300-500", "500-660", "660-760", "760-850"], correct: 2, explanation: "660-760 changa hai. 760 ton upar excellent hai. 560 ton thalle poor hai. Har tier tohade rates ate approval chances nu affect karda hai." }
            ]
          }
        }
      },
      {
        type: "concept",
        content: {
          en: {
            headline: "No score vs bad score: Understanding the difference",
            contentBreakdown: [
              { type: "text", content: "As a newcomer to Canada, you don't have a zero credit score — you simply have no score at all yet. This is completely different from having bad credit. No score means a blank slate; bad score means a history of missed payments." },
              { type: "example", title: "Newcomer advantage", content: "Ahmed arrived in Canada with no credit history. He got a secured credit card with $500 deposit. After 6 months of paying in full every month, he had a score of 720. His 'no score' became 'good score' quickly with responsible habits." },
              { type: "quickQuestion", question: "You just arrived in Canada. What is your credit situation?", options: ["Zero credit score", "Bad credit score", "No credit score yet", "Average 500 score"], correct: 2, explanation: "Newcomers start with no credit score at all — a blank slate. This is actually better than bad credit because you can build a good score from day one with the right habits." }
            ]
          },
          es: {
            headline: "Sin puntaje vs mal puntaje: Entendiendo la diferencia",
            contentBreakdown: [
              { type: "text", content: "Como recién llegado a Canadá, no tienes un puntaje de cero — simplemente no tienes puntaje todavía. Esto es completamente diferente a tener mal crédito. Sin puntaje significa hoja en blanco; mal puntaje significa historial de pagos fallidos." },
              { type: "example", title: "Ventaja del recién llegado", content: "Ahmed llegó a Canadá sin historial crediticio. Obtuvo una tarjeta asegurada con $500 de depósito. Después de 6 meses pagando al completo cada mes, tuvo un puntaje de 720. Su 'sin puntaje' se convirtió en 'buen puntaje' rápidamente." },
              { type: "quickQuestion", question: "Acabas de llegar a Canadá. ¿Cuál es tu situación crediticia?", options: ["Puntaje de cero", "Mal puntaje", "Sin puntaje aún", "Promedio de 500"], correct: 2, explanation: "Los recién llegados empiezan sin puntaje — una hoja en blanco. Esto es mejor que mal crédito porque puedes construir un buen puntaje desde el día uno con hábitos correctos." }
            ]
          },
          hi: {
            headline: "No score vs bad score: Antar samajhna",
            contentBreakdown: [
              { type: "text", content: "Canada mein naye aane wale ke roop mein, aapke paas zero credit score nahi hai — aapke paas abhi tak koi score hi nahi hai. Yeh bad credit se bilkul alag hai. No score matlab blank slate; bad score matlab missed payments ka history." },
              { type: "example", title: "Naye aane wale ka fayda", content: "Ahmed Canada aaye bina credit history ke. Unhone $500 deposit ke saath secured credit card liya. Har mahine full payment karne ke 6 mahine baad, unka score 720 tha. Unka 'no score' jaldi hi 'good score' ban gaya." },
              { type: "quickQuestion", question: "Abhi aap Canada aaye ho. Aapki credit situation kya hai?", options: ["Zero credit score", "Bad credit score", "Abhi tak koi score nahi", "Average 500 score"], correct: 2, explanation: "Newcomers koi credit score ke bina shuru karte hain — ek blank slate. Yeh bad credit se behtar hai kyunki sahi aadaton se day one se achha score ban sakta hai." }
            ]
          },
          tl: {
            headline: "Walang score vs masamang score: Pag-unawa sa pagkakaiba",
            contentBreakdown: [
              { type: "text", content: "Bilang bagong dating sa Canada, wala kang zero credit score — wala ka lang score sa ngayon. Iba ito sa pagkakaroon ng masamang credit. Walang score ay blank slate; masamang score ay may history ng hindi pagbabayad." },
              { type: "example", title: "Advantage ng bagong dating", content: "Si Ahmed ay dumating sa Canada na walang credit history. Nakakuha siya ng secured credit card na may $500 deposit. Pagkatapos ng 6 buwan ng buong bayad, may score siyang 720. Ang kanyang 'walang score' ay naging 'magandang score' kaagad." },
              { type: "quickQuestion", question: "Kakarating mo lang sa Canada. Ano ang iyong credit situation?", options: ["Zero credit score", "Masamang credit score", "Wala pang credit score", "Average 500 score"], correct: 2, explanation: "Ang mga bagong dating ay nagsisimula nang walang credit score — blank slate. Ito ay mas mabuti kaysa masamang credit dahil maaari kang gumawa ng magandang score mula pa sa simula." }
            ]
          },
          zh: {
            headline: "无分数vs差分数：理解区别",
            contentBreakdown: [
              { type: "text", content: "作为加拿大新移民，你的信用分数不是零——而是你根本没有分数。这与信用差完全不同。无分数意味着空白记录；差分数意味着有逾期还款历史。" },
              { type: "example", title: "新移民优势", content: "Ahmed来到加拿大时没有信用记录。他用$500押金获得了一张担保信用卡。每月全额还款6个月后，他的分数达到了720。他的'无分数'很快变成了'好分数'。" },
              { type: "quickQuestion", question: "你刚到加拿大。你的信用状况是什么？", options: ["零信用分数", "差信用分数", "还没有信用分数", "平均500分"], correct: 2, explanation: "新移民开始时根本没有信用分数——一张白纸。这实际上比差信用更好，因为从第一天起用正确习惯就能建立良好信用。" }
            ]
          },
          ar: {
            headline: "لا يوجد تقييم vs تقييم ضعيف: فهم الفرق",
            contentBreakdown: [
              { type: "text", content: "كمقيم جديد في كندا، ليس لديك تقييم صفر — ليس لديك تقييم على الإطلاق بعد. هذا مختلف تمامًا عن الائتمان الضعيف. لا يوجد تقييم يعني بداية جديدة؛ التقييم الضعيف يعني تاريخ من المدفوعات المتأخرة." },
              { type: "example", title: "ميزة القادم الجديد", content: "وصل أحمد إلى كندا بدون سجل ائتماني. حصل على بطاقة ائتمان مضمونة بإيداع 500 دولار. بعد 6 أشهر من الدفع الكامل شهريًا، كان لديه تقييم 720. تحول 'عدم وجود تقييم' إلى 'تقييم جيد' بسرعة." },
              { type: "quickQuestion", question: "وصلت للتو إلى كندا. ما هي وضعيتك الائتمانية؟", options: ["تقييم صفر", "تقييم ضعيف", "لا يوجد تقييم بعد", "متوسط 500"], correct: 2, explanation: "يبدأ القادمون الجدد بدون أي تقييم ائتماني — بداية جديدة. هذا أفضل من الائتمان الضعيف لأنك تستطيع بناء تقييم جيد من اليوم الأول." }
            ]
          },
          fr: {
            headline: "Pas de score vs mauvais score: Comprendre la différence",
            contentBreakdown: [
              { type: "text", content: "En tant que nouvel arrivant au Canada, vous n'avez pas un score de zéro — vous n'avez simplement pas de score du tout. C'est complètement différent d'avoir mauvais crédit. Pas de score = tableau blanc; mauvais score = historique de paiements manqués." },
              { type: "example", title: "Avantage du nouvel arrivant", content: "Ahmed est arrivé au Canada sans historique de crédit. Il a obtenu une carte sécurisée avec un dépôt de $500. Après 6 mois de paiements complets, il avait un score de 720. Son 'pas de score' est rapidement devenu 'bon score'." },
              { type: "quickQuestion", question: "Vous venez d'arriver au Canada. Quelle est votre situation de crédit?", options: ["Score de zéro", "Mauvais score", "Pas encore de score", "Moyenne de 500"], correct: 2, explanation: "Les nouveaux arrivants commencent sans aucun score de crédit — tableau blanc. C'est mieux que mauvais crédit car vous pouvez construire un bon score dès le premier jour." }
            ]
          },
          pa: {
            headline: "No score vs bad score: Antar samajhna",
            contentBreakdown: [
              { type: "text", content: "Canada vich nawan aan wale de roop vich, tohade kol zero credit score nahi hai — tohade kol abhi tak koi score hi nahi hai. Eh bad credit to bilkul wakh hai. No score matlab blank slate; bad score matlab missed payments da itihaas." },
              { type: "example", title: "Nawan aan wale da fayda", content: "Ahmed Canada aaye bina credit history de. Ohna ne $500 deposit naal secured credit card li. Har mahine full payment karde han 6 mahine baad, ohna da score 720 si. Ohna da 'no score' jaldi hi 'good score' ban gaya." },
              { type: "quickQuestion", question: "Tuhanu abhi Canada aaye ho. Tuhadi credit situation ki hai?", options: ["Zero credit score", "Bad credit score", "Abhi tak koi score nahi", "Average 500 score"], correct: 2, explanation: "Newcomers koi credit score toh bina shuru karde han — ik blank slate. Eh bad credit to changa hai kyunki sahi adataan naal pehle din to hi changa score ban sakda hai." }
            ]
          }
        }
      },
      {
        type: "concept",
        content: {
          en: {
            headline: "The 5 factors that determine your credit score",
            contentBreakdown: [
              { type: "text", content: "Your credit score is calculated from five weighted factors: Payment history (35%), Credit utilization (30%), Length of credit history (15%), Credit mix (10%), and New credit inquiries (10%)." },
              { type: "example", title: "Payment history matters most", content: "If you pay all bills on time for one year, you've mastered 35% of what builds your score. Just one late payment (30+ days overdue) can drop your score by 50-100 points and stay on your report for 6 years." },
              { type: "quickQuestion", question: "Which single factor has the biggest impact on your score?", options: ["How much money you make", "How many credit cards you own", "Payment history", "Your age"], correct: 2, explanation: "Payment history accounts for 35% of your score — the single largest factor. Consistently paying on time is the fastest way to build good credit." }
            ]
          },
          es: {
            headline: "Los 5 factores que determinan tu puntaje de crédito",
            contentBreakdown: [
              { type: "text", content: "Tu puntaje se calcula con cinco factores ponderados: Historial de pagos (35%), Utilización del crédito (30%), Duración del historial (15%), Tipos de crédito (10%) y Nuevas consultas (10%)." },
              { type: "example", title: "El historial de pagos es lo más importante", content: "Si pagas todas las facturas a tiempo durante un año, has dominado el 35% de lo que construye tu puntaje. Solo un pago atrasado (30+ días) puede bajar tu puntaje 50-100 puntos y permanecer 6 años en tu reporte." },
              { type: "quickQuestion", question: "¿Qué factor individual tiene el mayor impacto?", options: ["Cuánto dinero ganas", "Cuántas tarjetas tienes", "Historial de pagos", "Tu edad"], correct: 2, explanation: "El historial de pagos representa el 35% de tu puntaje — el factor individual más grande. Pagar consistentemente a tiempo es la forma más rápida de construir buen crédito." }
            ]
          },
          hi: {
            headline: "5 factors jo credit score determine karte hain",
            contentBreakdown: [
              { type: "text", content: "Aapka credit score paanch weighted factors se calculate hota hai: Payment history (35%), Credit utilization (30%), Length of credit history (15%), Credit mix (10%), aur New credit inquiries (10%)." },
              { type: "example", title: "Payment history sabse zyada matter karta hai", content: "Agar aap ek saal tak sab bills time par chukate ho, toh aapne apne score ka 35% master kar liya. Sirf ek late payment (30+ din overdue) 50-100 points drop kar sakti hai aur 6 saal report mein rahegi." },
              { type: "quickQuestion", question: "Kaunsa single factor aapke score par sabse bada asar dalta hai?", options: ["Kitna paisa kamate ho", "Kitni credit cards hain", "Payment history", "Aapki umar"], correct: 2, explanation: "Payment history aapke score ka 35% hai — sabse bada factor. Consistently time par payment karna good credit banane ka sabse tez tareeka hai." }
            ]
          },
          tl: {
            headline: "Ang 5 salik na tumutukoy sa iyong credit score",
            contentBreakdown: [
              { type: "text", content: "Ang iyong credit score ay kinakalkula mula sa limang timbang na salik: Historial ng pagbabayad (35%), Paggamit ng credit (30%), Tagal ng historial (15%), Uri ng credit (10%) at Bagong tanong (10%)." },
              { type: "example", title: "Ang historial ng pagbabayad ang pinakamahalaga", content: "Kung nagbabayad ka ng lahat ng bills sa tamang oras ng isang taon, nakuha mo na ang 35% ng bumubuo sa score. Isang late payment (30+ araw) ay maaaring magbaba ng 50-100 puntos at manatili sa report ng 6 taon." },
              { type: "quickQuestion", question: "Aling isang salik ang may pinakamalaking epekto?", options: ["Kung magkano ang kinikita", "Kung ilang cards ang mayroon", "Historial ng pagbabayad", "Iyong edad"], correct: 2, explanation: "Ang historial ng pagbabayad ay 35% ng score — pinakamalaking salik. Ang patuloy na pagbabayad sa tamang oras ang pinakamabilis na paraan para gumawa ng magandang credit." }
            ]
          },
          zh: {
            headline: "决定信用分数的5个因素",
            contentBreakdown: [
              { type: "text", content: "你的信用分数由五个加权因素计算：还款历史（35%）、信用使用率（30%）、信用历史长度（15%）、信用组合（10%）和新信用查询（10%）。" },
              { type: "example", title: "还款历史最重要", content: "如果你一整年都按时支付所有账单，你就掌握了构成你分数的35%。仅仅一次逾期付款（超过30天）就能让你的分数下降50-100分，并在报告中保留6年。" },
              { type: "quickQuestion", question: "哪个单一因素对你的分数影响最大？", options: ["你的收入", "你有多少信用卡", "还款历史", "你的年龄"], correct: 2, explanation: "还款历史占你分数的35%——最大的单一因素。坚持按时还款是建立良好信用的最快方式。" }
            ]
          },
          ar: {
            headline: "العوامل الخمسة التي تحدد تقييمك الائتماني",
            contentBreakdown: [
              { type: "text", content: "يُحسب تقييمك الائتماني من خمسة عوامل مرجحة: سجل المدفوعات (35%)، استخدام الائتمان (30%)، مدة السجل (15%)، تنوع الائتمان (10%) والاستفسارات الجديدة (10%)." },
              { type: "example", title: "سجل المدفوعات هو الأهم", content: "إذا دفعت جميع الفواتير في الوقت المحدد لمدة سنة، فقد أتقنت 35% مما يبني تقييمك. تأخير واحد فقط (30+ يومًا) قد يخفض تقييمك 50-100 نقطة ويبقى في التقرير 6 سنوات." },
              { type: "quickQuestion", question: "أي عامل فردي له أكبر تأثير على تقييمك؟", options: ["كمية المال الذي تكسبه", "عدد بطاقات الائتمان", "سجل المدفوعات", "عمرك"], correct: 2, explanation: "سجل المدفوعات يمثل 35% من تقييمك — العامل الفردي الأكبر. الدفع المنتظم في الوقت المحدد هو أسرع طريقة لبناء ائتمان جيد." }
            ]
          },
          fr: {
            headline: "Les 5 facteurs qui déterminent votre pointage de crédit",
            contentBreakdown: [
              { type: "text", content: "Votre pointage est calculé à partir de cinq facteurs pondérés: Historial des paiements (35%), Utilisation du crédit (30%), Durée de l'historial (15%), Types de crédit (10%) et Nouvelles demandes (10%)." },
              { type: "example", title: "L'historial des paiements compte le plus", content: "Si vous payez toutes les factures à temps pendant un an, vous maîtrisez 35% de ce qui construit votre score. Un seul retard (30+ jours) peut baisser votre score de 50-100 points et rester 6 ans sur votre rapport." },
              { type: "quickQuestion", question: "Quel facteur individuel a le plus d'impact?", options: ["Combien vous gagnez", "Combien de cartes vous avez", "Historial des paiements", "Votre âge"], correct: 2, explanation: "L'historial des paiements représente 35% de votre score — le facteur individuel le plus important. Payer régulièrement à temps est le moyen le plus rapide de construire un bon crédit." }
            ]
          },
          pa: {
            headline: "5 factor jo credit score determine karde han",
            contentBreakdown: [
              { type: "text", content: "Tuhada credit score paanj weighted factor toh calculate hunda hai: Payment history (35%), Credit utilization (30%), Length of credit history (15%), Credit mix (10%), ate New credit inquiries (10%)." },
              { type: "example", title: "Payment history sab ton zyada matter karda hai", content: "Jehde tu ik saal tak sab bills time par chukde ho, tan tuhaade score da 35% master kar liya. Sirf ik late payment (30+ din overdue) 50-100 points ghat sakdi hai ate 6 saal report vich rahegi." },
              { type: "quickQuestion", question: "Kaunsa single factor tuhade score te sab ton wadda asar paonda hai?", options: ["Kinna paisa kamaunde ho", "Kinni credit cards han", "Payment history", "Tuhadi umar"], correct: 2, explanation: "Payment history tuhade score da 35% hai — sab ton wadda factor. Consistently time par payment karna good credit ban da sab ton tidda tareeka hai." }
            ]
          }
        }
      },
      {
        type: "concept",
        content: {
          en: {
            headline: "Credit utilization: The second biggest factor",
            contentBreakdown: [
              { type: "text", content: "Credit utilization is how much of your available credit you're using. It's calculated as: (Current balance ÷ Credit limit) × 100. Keeping this below 30% is good, but below 10% is ideal for the best scores." },
              { type: "example", title: "Why maxing out cards hurts you", content: "You have a $1000 limit card with $900 balance = 90% utilization. Even if you pay on time, this high ratio signals 'financial stress' to lenders and can lower your score by 50+ points. Paying it down to $100 (10%) could boost your score significantly." },
              { type: "quickQuestion", question: "You have a $2000 credit limit and $800 balance. What's your utilization rate?", options: ["20%", "40%", "60%", "80%"], correct: 1, explanation: "$800 ÷ $2000 = 0.40 = 40%. This is above the recommended 30% threshold. To get under 30%, you'd need to reduce your balance to $600 or less." }
            ]
          },
          es: {
            headline: "Utilización del crédito: El segundo factor más grande",
            contentBreakdown: [
              { type: "text", content: "La utilización del crédito es cuánto de tu crédito disponible estás usando. Se calcula: (Saldo actual ÷ Límite) × 100. Mantener esto debajo del 30% es bueno, pero debajo del 10% es ideal para los mejores puntajes." },
              { type: "example", title: "Por qué agotar las tarjetas te perjudica", content: "Tienes una tarjeta con límite de $1000 y saldo de $900 = 90% de utilización. Aunque pagues a tiempo, esta alta proporción señala 'estrés financiero' y puede bajar tu puntaje 50+ puntos. Reducirlo a $100 (10%) podría aumentar significativamente tu puntaje." },
              { type: "quickQuestion", question: "Tienes un límite de $2000 y saldo de $800. ¿Cuál es tu tasa de utilización?", options: ["20%", "40%", "60%", "80%"], correct: 1, explanation: "$800 ÷ $2000 = 0.40 = 40%. Esto está por encima del umbral recomendado de 30%. Para bajar del 30%, necesitarías reducir tu saldo a $600 o menos." }
            ]
          },
          hi: {
            headline: "Credit utilization: Doosra sabse bada factor",
            contentBreakdown: [
              { type: "text", content: "Credit utilization aap available credit mein se kitna use kar rahe ho. Ise calculate kiya jata hai: (Current balance ÷ Credit limit) × 100. Isse 30% se neeche rakhna accha hai, lekin 10% se neeche ideal hai best scores ke liye." },
              { type: "example", title: "Cards max karne se kyun nuksan hota hai", content: "Aapke paas $1000 limit ki card hai jis par $900 balance hai = 90% utilization. Agar aap time par bhi pay karein, yeh high ratio lenders ko 'financial stress' signal karta hai aur 50+ points score gira sakta hai. Isse $100 (10%) par laane se score significantly boost ho sakta hai." },
              { type: "quickQuestion", question: "Aapke paas $2000 credit limit hai aur $800 balance hai. Aapka utilization rate kya hai?", options: ["20%", "40%", "60%", "80%"], correct: 1, explanation: "$800 ÷ $2000 = 0.40 = 40%. Yeh recommended 30% threshold se upar hai. 30% se neeche aane ke liye, aapko balance $600 ya kam par lana hoga." }
            ]
          },
          tl: {
            headline: "Paggamit ng credit: Pangalawa pinakamalaking salik",
            contentBreakdown: [
              { type: "text", content: "Ang paggamit ng credit ay kung gaano ang available credit ang ginagamit mo. Kinakalkula: (Kasalukuyang balanse ÷ Limit) × 100. Pagpapanatili nito sa ilalim ng 30% ay mabuti, ngunit sa ilalim ng 10% ay ideal para sa pinakamagandang score." },
              { type: "example", title: "Bakit masama ang maxing out ng cards", content: "Mayroon kang $1000 limit na card na may $900 balanse = 90% utilization. Kahit magbayad ka sa oras, ang mataas na ratio na ito ay nagpapahiwatig ng 'financial stress' sa mga lender at maaaring magbaba ng 50+ puntos. Ang pagbaba nito sa $100 (10%) ay maaaring tumaas nang malaki ang score." },
              { type: "quickQuestion", question: "Mayroon kang $2000 limit at $800 balanse. Ano ang iyong utilization rate?", options: ["20%", "40%", "60%", "80%"], correct: 1, explanation: "$800 ÷ $2000 = 0.40 = 40%. Ito ay lampas sa inirerekomendang 30%. Para makababa ng 30%, kailangan mong ibaba ang balanse sa $600 o mas mababa." }
            ]
          },
          zh: {
            headline: "信用使用率：第二大因素",
            contentBreakdown: [
              { type: "text", content: "信用使用率是你正在使用的可用信用额度占比。计算公式：（当前余额÷信用额度）× 100。保持在30%以下是好的，但10%以下是获得最佳分数的理想状态。" },
              { type: "example", title: "为什么刷爆信用卡会伤害你", content: "你有一张$1000额度的卡，余额为$900 = 90%使用率。即使你按时还款，这个高比例向贷款人发出'财务压力'信号，可能让你的分数下降50多分。将余额降至$100（10%）可能会显著提升你的分数。" },
              { type: "quickQuestion", question: "你有$2000信用额度和$800余额。你的使用率是多少？", options: ["20%", "40%", "60%", "80%"], correct: 1, explanation: "$800÷$2000 = 0.40 = 40%。这超过了建议的30%阈值。要降到30%以下，你需要将余额减少到$600或更少。" }
            ]
          },
          ar: {
            headline: "استخدام الائتمان: ثاني أكبر عامل",
            contentBreakdown: [
              { type: "text", content: "استخدام الائتمان هو مقدار الائتمان المتاح الذي تستخدمه. يُحسب: (الرصيد الحالي ÷ الحد) × 100. الإبقاء على هذا أقل من 30% جيد، لكن أقل من 10% مثالي لأفضل التقييمات." },
              { type: "example", title: "لماذا استنفاد البطاقات يضر بك", content: "لديك بطاقة بحد 1000 دولار ورصيد 900 دولار = 90% استخدام. حتى لو دفعت في الوقت المحدد، هذه النسبة العالية تشير إلى 'ضغط مالي' للمقرضين وقد تخفض تقييمك 50+ نقطة. تقليلها إلى 100 دولار (10%) قد يرفع تقييمك بشكل كبير." },
              { type: "quickQuestion", question: "لديك حد ائتماني 2000 دولار ورصيد 800 دولار. ما معدل استخدامك؟", options: ["20%", "40%", "60%", "80%"], correct: 1, explanation: "800 ÷ 2000 = 0.40 = 40%. هذا أعلى من العتبة الموصى بها 30%. للنزول تحت 30%، تحتاج إلى تقليل رصيدك إلى 600 دولار أو أقل." }
            ]
          },
          fr: {
            headline: "Utilisation du crédit: Le deuxième facteur le plus important",
            contentBreakdown: [
              { type: "text", content: "L'utilisation du crédit est la proportion de votre crédit disponible que vous utilisez. Calcul: (Solde actuel ÷ Limite) × 100. Garder ceci sous 30% est bon, mais sous 10% est idéal pour les meilleurs scores." },
              { type: "example", title: "Pourquoi maximiser les cartes vous nuit", content: "Vous avez une carte avec limite de $1000 et solde de $900 = 90% d'utilisation. Même si vous payez à temps, ce ratio élevé signale un 'stress financier' aux prêteurs et peut baisser votre score de 50+ points. Le réduire à $100 (10%) pourrait augmenter significativement votre score." },
              { type: "quickQuestion", question: "Vous avez une limite de $2000 et un solde de $800. Quel est votre taux d'utilisation?", options: ["20%", "40%", "60%", "80%"], correct: 1, explanation: "$800 ÷ $2000 = 0.40 = 40%. C'est au-dessus du seuil recommandé de 30%. Pour descendre sous 30%, vous devriez réduire votre solde à $600 ou moins." }
            ]
          },
          pa: {
            headline: "Credit utilization: Doosra sab ton wadda factor",
            contentBreakdown: [
              { type: "text", content: "Credit utilization tuhade available credit vichon kinna use kar rahe ho. Eh calculate kita janda hai: (Current balance ÷ Credit limit) × 100. Ehna 30% ton thalle rakhna changa hai, par 10% ton thalle ideal hai best scores layi." },
              { type: "example", title: "Cards max karne naal kyon nuksan hunda hai", content: "Tuhade kol $1000 limit di card hai jis te $900 balance hai = 90% utilization. Jehde tu time par bhi pay karein, eh high ratio lenders nu 'financial stress' signal karda hai ate 50+ points score ghatda hai. Ehna $100 (10%) te la ke score significantly boost ho sakda hai." },
              { type: "quickQuestion", question: "Tuhade kol $2000 credit limit hai ate $800 balance hai. Tuhada utilization rate ki hai?", options: ["20%", "40%", "60%", "80%"], correct: 1, explanation: "$800 ÷ $2000 = 0.40 = 40%. Eh recommended 30% threshold toh upar hai. 30% ton thalle aun layi, tuhannu balance $600 ya kam te lana hovega." }
            ]
          }
        }
      },
      {
        type: "concept",
        content: {
          en: {
            headline: "How to start building credit as a newcomer",
            contentBreakdown: [
              { type: "text", content: "The fastest path to good credit as a newcomer: Step 1) Get a secured credit card with a $200-$500 deposit. Step 2) Use it for small monthly purchases (groceries, gas). Step 3) Pay the FULL balance every month before the due date. Step 4) After 6-12 months, ask to upgrade to an unsecured card." },
              { type: "example", title: "Maria's first year in Canada", content: "Maria arrived with no credit. She got a secured card with $300 deposit, used it only for $50 grocery purchases monthly, and paid in full every month. After 8 months, her score was 712. Her bank upgraded her to a regular card and returned her $300 deposit." },
              { type: "quickQuestion", question: "What's the best practice with a secured credit card for building credit?", options: ["Use it for all purchases and pay minimum", "Use it for small purchases and pay in full monthly", "Keep it unused in a drawer", "Max it out and pay over time"], correct: 1, explanation: "Use the card for small purchases (under 30% of limit) and pay the full balance every month. This shows responsible usage without high utilization, building positive payment history." }
            ]
          },
          es: {
            headline: "Cómo empezar a construir crédito como recién llegado",
            contentBreakdown: [
              { type: "text", content: "El camino más rápido al buen crédito: Paso 1) Obtén una tarjeta asegurada con depósito de $200-$500. Paso 2) Úsala para compras pequeñas mensuales. Paso 3) Paga el SALDO COMPLETO cada mes antes de la fecha límite. Paso 4) Después de 6-12 meses, pide actualizar a tarjeta sin garantía." },
              { type: "example", title: "El primer año de María en Canadá", content: "María llegó sin crédito. Obtuvo tarjeta asegurada con $300 de depósito, la usó solo para compras de $50 mensuales, y pagó al completo cada mes. Después de 8 meses, su puntaje era 712. Su banco la actualizó a tarjeta regular y le devolvió los $300." },
              { type: "quickQuestion", question: "¿Cuál es la mejor práctica con una tarjeta asegurada para construir crédito?", options: ["Usarla para todo y pagar mínimo", "Usarla para compras pequeñas y pagar completo mensual", "Guardarla sin usar", "Agotarla y pagar con tiempo"], correct: 1, explanation: "Usa la tarjeta para compras pequeñas (menos del 30% del límite) y paga el saldo completo cada mes. Esto muestra uso responsable sin alta utilización, construyendo historial positivo." }
            ]
          },
          hi: {
            headline: "Naye aane wale ke roop mein credit kaise banayein",
            contentBreakdown: [
              { type: "text", content: "Achhe credit ka sabse tez rasta: Step 1) $200-$500 deposit ke saath secured credit card lein. Step 2) Chhote monthly purchases ke liye use karein. Step 3) Har mahine due date se pehle FULL balance chukayein. Step 4) 6-12 mahine baad, unsecured card ke liye upgrade maangein." },
              { type: "example", title: "Maria ka Canada mein pehla saal", content: "Maria bina credit ke aayin. Unhone $300 deposit ke saath secured card liya, sirf $50 monthly grocery purchases ke liye use kiya, aur har mahine full payment ki. 8 mahine baad, unka score 712 tha. Bank ne unhe regular card pe upgrade kar diya aur $300 deposit wapas kar diya." },
              { type: "quickQuestion", question: "Credit banane ke liye secured credit card ke saath best practice kya hai?", options: ["Sab purchases ke liye use karo aur minimum pay karo", "Chhote purchases ke liye use karo aur har mahine full pay karo", "Drawer mein unused rakho", "Max out karo aur time par pay karo"], correct: 1, explanation: "Card ko chhote purchases ke liye use karo (limit ka 30% se kam) aur har mahine full balance pay karo. Yeh responsible usage dikhata hai bina high utilization ke, positive payment history banata hai." }
            ]
          },
          tl: {
            headline: "Paano magsimulang gumawa ng credit bilang bagong dating",
            contentBreakdown: [
              { type: "text", content: "Pinakamabilis na paraan sa magandang credit: Hakbang 1) Kumuha ng secured card na may $200-$500 deposit. Hakbang 2) Gamitin para sa maliit na buwanang pagbili. Hakbang 3) Bayaran ang BUONG balanse bawat buwan bago ang due date. Hakbang 4) Pagkatapos ng 6-12 buwan, humiling ng upgrade." },
              { type: "example", title: "Unang taon ni Maria sa Canada", content: "Dumating si Maria na walang credit. Nakakuha ng secured card na may $300 deposit, ginamit lang para sa $50 buwanang grocery, at binayaran ng buo bawat buwan. Pagkatapos ng 8 buwan, ang kanyang score ay 712. Ang bangko ay nag-upgrade sa regular card at ibinalik ang $300." },
              { type: "quickQuestion", question: "Ano ang pinakamahusay na gawin sa secured card para gumawa ng credit?", options: ["Gamitin sa lahat at magbayad ng minimum", "Gamitin sa maliit na pagbili at bayaran ng buo", "Itago nang hindi ginagamit", "Max out at bayaran sa paglipas ng panahon"], correct: 1, explanation: "Gamitin ang card para sa maliit na pagbili (wala sa 30% ng limit) at bayaran ang buong balanse bawat buwan. Nagpapakita ito ng responsableng paggamit nang walang mataas na utilization." }
            ]
          },
          zh: {
            headline: "作为新移民如何开始建立信用",
            contentBreakdown: [
              { type: "text", content: "新移民快速建立良好信用的路径：第1步）用$200-$500押金获得担保信用卡。第2步）用于小额月度消费。第3步）每月到期日前全额还款。第4步）6-12个月后申请升级为普通卡。" },
              { type: "example", title: "Maria在加拿大的第一年", content: "Maria来到加拿大时没有信用记录。她用$300押金获得担保卡，每月仅用于$50的杂货消费，并每月全额还款。8个月后，她的分数达到了712。银行将她升级为普通卡并退还了$300押金。" },
              { type: "quickQuestion", question: "用担保信用卡建立信用的最佳做法是什么？", options: ["用于所有消费并只还最低还款额", "用于小额消费并每月全额还款", "放在抽屉里不用", "刷爆额度然后慢慢还"], correct: 1, explanation: "用卡片进行小额消费（低于额度的30%），并每月全额还款。这显示了负责任的使用，没有高使用率，建立了良好的还款历史。" }
            ]
          },
          ar: {
            headline: "كيف تبدأ في بناء الائتمان كقادم جديد",
            contentBreakdown: [
              { type: "text", content: "أسرع طريق للائتمان الجيد: الخطوة 1) احصل على بطاقة مضمونة بإيداع 200-500 دولار. الخطوة 2) استخدمها لمشتريات شهرية صغيرة. الخطوة 3) ادفع الرصيد الكامل كل شهر قبل تاريخ الاستحقاق. الخطوة 4) بعد 6-12 شهرًا، اطلب الترقية." },
              { type: "example", title: "السنة الأولى لماريا في كندا", content: "وصلت ماريا بدون ائتمان. حصلت على بطاقة مضمونة بإيداع 300 دولار، استخدمتها فقط لمشتريات بقالة 50 دولار شهريًا، ودفعت الكامل كل شهر. بعد 8 أشهر، كان تقييمها 712. قام البنك بترقيتها وإعادة الـ 300 دولار." },
              { type: "quickQuestion", question: "ما هي أفضل ممارسة مع البطاقة المضمونة لبناء الائتمان؟", options: ["استخدمها لكل شيء وادفع الحد الأدنى", "استخدمها لمشتريات صغيرة وادفع الكامل شهريًا", "احتفظ بها دون استخدام", "استنفدها وادفع مع الوقت"], correct: 1, explanation: "استخدم البطاقة لمشتريات صغيرة (أقل من 30% من الحد) وادفع الرصيد الكامل كل شهر. هذا يظهر استخدامًا مسؤولًا دون استخدام عالي، مما يبني سجل دفع إيجابي." }
            ]
          },
          fr: {
            headline: "Comment commencer à construire votre crédit en tant que nouvel arrivant",
            contentBreakdown: [
              { type: "text", content: "Le chemin le plus rapide vers un bon crédit: Étape 1) Obtenez une carte sécurisée avec un dépôt de $200-$500. Étape 2) Utilisez-la pour de petits achats mensuels. Étape 3) Payez le SOLDE COMPLET chaque mois avant la date d'échéance. Étape 4) Après 6-12 mois, demandez une mise à niveau." },
              { type: "example", title: "La première année de Maria au Canada", content: "Maria est arrivée sans crédit. Elle a obtenu une carte sécurisée avec $300 de dépôt, l'a utilisée seulement pour $50 d'épicerie mensuelle, et a payé en entier chaque mois. Après 8 mois, son score était de 712. Sa banque l'a mise à niveau et a rendu son $300." },
              { type: "quickQuestion", question: "Quelle est la meilleure pratique avec une carte sécurisée pour construire du crédit?", options: ["L'utiliser pour tout et payer le minimum", "L'utiliser pour petits achats et payer en entier", "La garder inutilisée", "La maximiser et payer avec le temps"], correct: 1, explanation: "Utilisez la carte pour petits achats (moins de 30% de la limite) et payez le solde complet chaque mois. Cela montre une utilisation responsable sans utilisation élevée, construisant un historial positif." }
            ]
          },
          pa: {
            headline: "Nawan aan wale de roop vich credit kaise banaye",
            contentBreakdown: [
              { type: "text", content: "Changhe credit da sab ton tidda rasta: Step 1) $200-$500 deposit naal secured credit card lao. Step 2) Chhote monthly purchases layi use karo. Step 3) Har mahine due date toh pehlan FULL balance chukao. Step 4) 6-12 mahine baad, unsecured card layi upgrade mango." },
              { type: "example", title: "Maria da Canada vich pehla saal", content: "Maria bina credit aayi. Ohna $300 deposit naal secured card liya, sirf $50 monthly grocery layi use kita, ate har mahine full payment kiti. 8 mahine baad, ohna da score 712 si. Bank ne ohna nu regular card te upgrade kar dita ate $300 deposit wapas kar dita." },
              { type: "quickQuestion", question: "Credit banan layi secured credit card naal best practice ki hai?", options: ["Sab purchases layi use karo ate minimum pay karo", "Chhote purchases layi use karo ate har mahine full pay karo", "Drawer vich unused rakho", "Max out karo ate time par pay karo"], correct: 1, explanation: "Card nu chhote purchases layi use karo (limit da 30% ton thalle) ate har mahine full balance pay karo. Eh responsible usage dikhonda hai bina high utilization de, positive payment history banonda hai." }
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
            headline: "Why checking your credit score matters",
            contentBreakdown: [
              { type: "text", content: "Your credit score affects your ability to rent apartments, get loans, open phone plans, and sometimes even get jobs. Checking it regularly helps you catch errors, track progress, and understand what lenders see when they evaluate you." },
              { type: "example", title: "Finding an error saved Sarah $2,000", content: "Sarah checked her score before applying for a car loan and found a $5,000 collection account she didn't recognize. It was an error from a previous address. She disputed it, got it removed in 2 weeks, and saved 3% on her car loan — that's $2,000+ over the life of the loan." },
              { type: "quickQuestion", question: "How often should you check your credit score?", options: ["Never — it hurts your score", "Once every few years", "At least every few months", "Every single day"], correct: 2, explanation: "Check at least every 3-4 months to catch errors early and track your progress. It's free and doesn't affect your score." }
            ]
          },
          es: {
            headline: "Por qué importa revisar tu puntaje de crédito",
            contentBreakdown: [
              { type: "text", content: "Tu puntuación afecta tu capacidad de rentar apartamentos, obtener préstamos, abrir planes telefónicos y a veces conseguir empleos. Revisarla regularmente te ayuda a detectar errores, seguir tu progreso y entender qué ven los prestamistas." },
              { type: "example", title: "Encontrar un error ahorró a Sarah $2,000", content: "Sarah revisó su puntaje antes de solicitar un préstamo para auto y encontró una cuenta en colecciones de $5,000 que no reconocía. Era un error de una dirección anterior. La disputó, la eliminaron en 2 semanas y ahorró 3% en su préstamo — eso es más de $2,000 durante la vida del préstamo." },
              { type: "quickQuestion", question: "¿Con qué frecuencia deberías revisar tu puntuación de crédito?", options: ["Nunca — daña tu puntaje", "Una vez cada varios años", "Al menos cada pocos meses", "Cada día"], correct: 2, explanation: "Revisa al menos cada 3-4 meses para detectar errores temprano y seguir tu progreso. Es gratis y no afecta tu puntaje." }
            ]
          },
          hi: {
            headline: "Credit score check karna kyun zaroori hai",
            contentBreakdown: [
              { type: "text", content: "Aapka credit score apartments rent karne, loans lene, phone plans shuru karne, aur kabhi-kabhi jobs paane ki capability ko affect karta hai. Regular check karne se errors pakadne, progress track karne, aur lenders kya dekhte hain samajhne mein madad milti hai." },
              { type: "example", title: "Ek error pakadne se Sarah ne $2,000 bachaye", content: "Sarah ne car loan apply karne se pehle apna score check kiya aur ek $5,000 ka collection account mila jo unhone nahi banwaya tha. Yeh pichle address se ek error tha. Unhone dispute kiya, 2 hafte mein remove karwaya, aur car loan par 3% bachaya — loan ki life mein $2,000+ savings!" },
              { type: "quickQuestion", question: "Aapko apna credit score kitni baar check karna chahiye?", options: ["Kabhi nahi — score hurt hota hai", "Har kuchh saal mein ek baar", "Kam se kam har kuchh mahine", "Har roz"], correct: 2, explanation: "Errors jaldi pakadne aur progress track karne ke liye kam se kam har 3-4 mahine mein check karein. Yeh free hai aur score ko affect nahi karta." }
            ]
          },
          tl: {
            headline: "Bakit mahalaga ang pag-check ng iyong credit score",
            contentBreakdown: [
              { type: "text", content: "Ang iyong credit score ay nakakaapekto sa iyong kakayahang mag-upa ng apartment, kumuha ng loan, magbukas ng phone plan, at minsan makakuha ng trabaho. Ang regular na pag-check ay tumutulong na mahuli ang mga mali, subaybayan ang pag-unlad, at maunawaan ang nakikita ng mga lender." },
              { type: "example", title: "Ang paghahanap ng error ay nag-save kay Sarah ng $2,000", content: "Tiningnan ni Sarah ang kanyang score bago mag-apply para sa car loan at nakakita ng $5,000 collection account na hindi niya kilala. Ito ay isang error mula sa dating address. Inireklamo niya ito, inalis sa loob ng 2 linggo, at naka-save ng 3% sa kanyang loan — iyon ay $2,000+ sa buong loan." },
              { type: "quickQuestion", question: "Gaano kadalas mo dapat tingnan ang iyong credit score?", options: ["Hindi kailanman — sinisira nito ang score", "Isang beses bawat ilang taon", "Hindi bababa sa bawat ilang buwan", "Araw-araw"], correct: 2, explanation: "Tingnan kahit papaano bawat 3-4 na buwan para mahuli agad ang mga mali at subaybayan ang pag-unlad. Ito ay libre at hindi nakakaapekto sa score." }
            ]
          },
          zh: {
            headline: "为什么查看信用分数很重要",
            contentBreakdown: [
              { type: "text", content: "你的信用分数影响你租房、申请贷款、开通手机套餐，有时甚至影响找工作的能力。定期查看有助于你发现错误、追踪进度，并了解贷款人评估你时看到的内容。" },
              { type: "example", title: "发现错误为Sarah节省了$2,000", content: "Sarah在申请汽车贷款前查看了分数，发现了一个她不认识的$5,000催收账户。这是她以前地址的错误。她提出了异议，2周内就删除了，在汽车贷款上节省了3%——贷款期间节省了$2,000多！" },
              { type: "quickQuestion", question: "你应该多久查看一次信用分数？", options: ["从不——会伤害分数", "几年一次", "至少每隔几个月", "每天"], correct: 2, explanation: "至少每3-4个月查看一次，以便及早发现错误并追踪进度。这是免费的，不会影响你的分数。" }
            ]
          },
          ar: {
            headline: "لماذا يهم التحقق من تقييمك الائتماني",
            contentBreakdown: [
              { type: "text", content: "التقييم الائتماني يؤثر على قدرتك على استئجار الشقق، الحصول على القروض، فتح خطط الهاتف، وأحيانًا الحصول على الوظائف. التحقق المنتظم يساعدك على اكتشاف الأخطاء وتتبع التقدم وفهم ما يراه المقرضون." },
              { type: "example", title: "اكتشاف خطأ وفّر لسارة 2000 دولار", content: "تحققت سارة من تقييمها قبل التقدم لقرض سيارة ووجدت حساب تحصيل بـ 5000 دولار لم تتعرف عليه. كان خطأً من عنوان سابق. نازعته، تمت إزالته في أسبوعين، ووّفرت 3% على القرض — وهذا أكثر من 2000 دولار طوال عمر القرض." },
              { type: "quickQuestion", question: "كم مرة يجب أن تتحقق من تقييمك الائتماني؟", options: ["أبدًا — يضر التقييم", "مرة كل سنوات قليلة", "على الأقل كل بضعة أشهر", "كل يوم"], correct: 2, explanation: "تحقق على الأقل كل 3-4 أشهر لاكتشاف الأخطاء مبكرًا وتتبع تقدمك. إنه مجاني ولا يؤثر على تقييمك." }
            ]
          },
          fr: {
            headline: "Pourquoi vérifier votre pointage de crédit est important",
            contentBreakdown: [
              { type: "text", content: "Votre pointage affecte votre capacité à louer des appartements, obtenir des prêts, ouvrir des forfaits téléphoniques, et parfois à obtenir des emplois. Le vérifier régulièrement vous aide à détecter les erreurs, suivre vos progrès et comprendre ce que les prêteurs voient." },
              { type: "example", title: "Trouver une erreur a sauvé 2000$ à Sarah", content: "Sarah a vérifié son score avant de demander un prêt auto et a trouvé un compte de recouvrement de 5000$ qu'elle ne reconnaissait pas. C'était une erreur d'une ancienne adresse. Elle l'a contestée, retirée en 2 semaines, et économisé 3% sur son prêt — soit plus de 2000$ sur toute la durée du prêt." },
              { type: "quickQuestion", question: "À quelle fréquence devriez-vous vérifier votre pointage?", options: ["Jamais — cela nuit au score", "Une fois tous les quelques années", "Au moins tous les quelques mois", "Tous les jours"], correct: 2, explanation: "Vérifiez au moins tous les 3-4 mois pour détecter les erreurs tôt et suivre vos progrès. C'est gratuit et n'affecte pas votre score." }
            ]
          },
          pa: {
            headline: "Credit score check karna kyon zaroori hai",
            contentBreakdown: [
              { type: "text", content: "Tuhada credit score apartments rent karan, loans laran, phone plans shuru karan, ate kabhi-kabhi jobs paan di capability nu affect karda hai. Regular check karan naal errors pakkan, progress track karan, ate lenders ki dekhan samajhan vich madad mildi hai." },
              { type: "example", title: "Ik error pakkan naal Sarah ne $2,000 bachaye", content: "Sarah ne car loan apply karan toh pehlan apna score check kita aur ik $5,000 da collection account milia jo ohna banaya nahi si. Eh pichle address toh ik error si. Ohna ne dispute kiti, 2 hafetean vich remove karwaya, ate car loan te 3% bachaya — loan di life vich $2,000+ savings!" },
              { type: "quickQuestion", question: "Tuhanu apna credit score kinni vaar check karna chahida hai?", options: ["Kadi vi nahi — score hurt hunda hai", "Har kuch saal vich ik vaar", "Ghat toh ghat har kuch mahine", "Har din"], correct: 2, explanation: "Errors jaldi pakkan ate progress track karan layi ghat toh ghat har 3-4 mahine vich check karo. Eh free hai ate score nu affect nahi karda." }
            ]
          }
        }
      },
      {
        type: "concept",
        content: {
          en: {
            headline: "Soft check vs hard check: Understanding the difference",
            contentBreakdown: [
              { type: "text", content: "When YOU check your own score, it's called a 'soft inquiry' — it has zero impact on your credit. When a LENDER checks your score (for a loan, credit card, or apartment), it's a 'hard inquiry' — this can lower your score by a few points and stays on your report for 2 years." },
              { type: "example", title: "What counts as what?", content: "Soft checks (no impact): Checking your own score, pre-approved credit card offers, employer background checks. Hard checks (small impact): Applying for a credit card, car loan, mortgage, apartment rental, or phone plan." },
              { type: "quickQuestion", question: "Which action is a SOFT check that doesn't affect your score?", options: ["Applying for a car loan", "Checking your own credit score", "Applying for an apartment", "Getting a new credit card"], correct: 1, explanation: "Checking your OWN score is always a soft inquiry with zero impact. Applying for loans, cards, or apartments creates hard inquiries that can slightly lower your score." }
            ]
          },
          es: {
            headline: "Consulta suave vs consulta dura: Entendiendo la diferencia",
            contentBreakdown: [
              { type: "text", content: "Cuando TÚ revisas tu propia puntuación, se llama 'consulta suave' — no tiene impacto en tu crédito. Cuando un PRESTAMISTA revisa tu puntuación (para préstamo, tarjeta o apartamento), es una 'consulta dura' — puede bajar tu puntaje y permanece 2 años." },
              { type: "example", title: "¿Qué cuenta como qué?", content: "Consultas suaves (sin impacto): Revisar tu propio score, ofertas pre-aprobadas, verificaciones de empleo. Consultas duras (pequeño impacto): Solicitar tarjeta, préstamo de auto, hipoteca, renta de apartamento o plan telefónico." },
              { type: "quickQuestion", question: "¿Qué acción es una consulta SUAVE que no afecta tu puntaje?", options: ["Solicitar un préstamo para auto", "Revisar tu propia puntuación", "Solicitar un apartamento", "Obtener una nueva tarjeta"], correct: 1, explanation: "Revisar tu PROPIA puntuación siempre es una consulta suave con impacto cero. Solicitar préstamos, tarjetas o apartamentos crea consultas duras que pueden bajar ligeramente tu puntaje." }
            ]
          },
          hi: {
            headline: "Soft check vs hard check: Antar samajhna",
            contentBreakdown: [
              { type: "text", content: "Jab AAP apna score check karte ho, isse 'soft inquiry' kehte hain — iska aapke credit par zero impact hota hai. Jab LENDER aapka score check karta hai (loan, credit card, ya apartment ke liye), yeh 'hard inquiry' hai — yeh kuchh points score ghatata hai aur 2 saal report mein rehta hai." },
              { type: "example", title: "Kya kya count hota hai?", content: "Soft checks (no impact): Apna score check karna, pre-approved card offers, employer background checks. Hard checks (small impact): Credit card apply karna, car loan, mortgage, apartment rental, ya phone plan." },
              { type: "quickQuestion", question: "Kaunsa action SOFT check hai jo score ko affect nahi karta?", options: ["Car loan apply karna", "Apna credit score check karna", "Apartment apply karna", "Nayi credit card lena"], correct: 1, explanation: "Apna score check karna hamesha soft inquiry hota hai with zero impact. Loans, cards, ya apartments apply karne se hard inquiries create hoti hain jo score thoda ghatata hai." }
            ]
          },
          tl: {
            headline: "Soft check vs hard check: Pag-unawa sa pagkakaiba",
            contentBreakdown: [
              { type: "text", content: "Kapag IKAW ang titingin sa sarili mong score, tinatawag itong 'soft inquiry' — walang epekto sa iyong credit. Kapag ang LENDER ang tumitingin (para sa loan, card, o apartment), ito ay 'hard inquiry' — maaaring magbaba ng ilang puntos at manatili sa report ng 2 taon." },
              { type: "example", title: "Ano ang bibilangin bilang ano?", content: "Soft checks (walang epekto): Pagtingin sa sariling score, pre-approved offers, employer background checks. Hard checks (maliit na epekto): Pag-apply ng card, car loan, mortgage, apartment rental, o phone plan." },
              { type: "quickQuestion", question: "Aling aksyon ay SOFT check na hindi nakakaapekto sa score?", options: ["Pag-apply ng car loan", "Pagtingin sa sarili mong credit score", "Pag-apply ng apartment", "Pagkuha ng bagong credit card"], correct: 1, explanation: "Ang pagtingin sa SARILING score ay laging soft inquiry na walang epekto. Ang pag-apply ng loans, cards, o apartments ay gumagawa ng hard inquiries na maaaring magbaba ng kaunting puntos." }
            ]
          },
          zh: {
            headline: "软查询vs硬查询：理解区别",
            contentBreakdown: [
              { type: "text", content: "当你自己查看分数时，这称为'软查询'——对你的信用没有影响。当贷款人查看你的分数（用于贷款、信用卡或租房）时，这是'硬查询'——可能会降低几分，并在报告中保留2年。" },
              { type: "example", title: "什么算什么？", content: "软查询（无影响）：查看自己的分数、预先批准的信用卡优惠、雇主背景调查。硬查询（小影响）：申请信用卡、汽车贷款、房贷、租房或手机套餐。" },
              { type: "quickQuestion", question: "哪个操作是不影响分数的软查询？", options: ["申请汽车贷款", "查看自己的信用分数", "申请租房", "办理新信用卡"], correct: 1, explanation: "查看自己的分数始终是零影响的软查询。申请贷款、信用卡或租房会产生可能略微降低分数的硬查询。" }
            ]
          },
          ar: {
            headline: "الفحص الناعم vs الفحص القاسي: فهم الفرق",
            contentBreakdown: [
              { type: "text", content: "عندما تتحقق أنت من تقييمك الخاص، يُسمى 'استفسار ناعم' — ليس له تأثير على ائتمانك. عندما يتحقق المقرض (لقرض أو بطاقة أو شقة)، يكون 'استفسار قاسٍ' — قد يخفض تقييمك ويبقى في التقرير 2 سنوات." },
              { type: "example", title: "ما الذي يُحسب كماذا؟", content: "فحوصات ناعمة (بدون تأثير): التحقق من تقييمك الخاص، عروض بطاقات معتمدة مسبقًا، فحوصات خلفية للعمل. فحوصات قاسية (تأثير صغير): التقدم لبطاقة، قرض سيارة، رهن عقاري، استئجار شقة، أو خطة هاتف." },
              { type: "quickQuestion", question: "أي إجراء هو فحص ناعم لا يؤثر على تقييمك؟", options: ["التقدم لقرض سيارة", "التحقق من تقييمك الخاص", "التقدم لشقة", "الحصول على بطاقة جديدة"], correct: 1, explanation: "التحقق من تقييمك الخاص دائمًا هو استفسار ناعم بتأثير صفر. التقدم للقروض أو البطاقات أو الشقق ينشئ استفسارات قاسية قد تخفض تقييمك قليلاً." }
            ]
          },
          fr: {
            headline: "Consultation souple vs dure: Comprendre la différence",
            contentBreakdown: [
              { type: "text", content: "Quand VOUS vérifiez votre propre score, c'est une 'consultation souple' — zéro impact sur votre crédit. Quand un PRÊTEUR vérifie (pour prêt, carte ou appartement), c'est une 'consultation dure' — peut baisser votre score et reste 2 ans sur le rapport." },
              { type: "example", title: "Qu'est-ce qui compte comme quoi?", content: "Consultations souples (pas d'impact): Vérifier votre propre score, offres pré-approuvées, vérifications d'emploi. Consultations dures (petit impact): Demande de carte, prêt auto, hypothèque, location d'appartement, ou forfait téléphone." },
              { type: "quickQuestion", question: "Quelle action est une consultation SOUPLE qui n'affecte pas votre score?", options: ["Demander un prêt auto", "Vérifier votre propre score", "Demander un appartement", "Obtenir une nouvelle carte"], correct: 1, explanation: "Vérifier votre PROPRE score est toujours une consultation souple avec impact zéro. Demander des prêts, cartes ou appartements crée des consultations dures qui peuvent légèrement baisser votre score." }
            ]
          },
          pa: {
            headline: "Soft check vs hard check: Antar samajhna",
            contentBreakdown: [
              { type: "text", content: "Jadon TUHANU apna score check karde ho, iesnu 'soft inquiry' kehnde han — iesda tuhade credit te zero asar hunda hai. Jadon LENDER tuhada score check karda hai (loan, credit card, ya apartment layi), eh 'hard inquiry' hai — eh kujh points score ghatda hai ate 2 saal report vich rehnda hai." },
              { type: "example", title: "Ki ki count hunda hai?", content: "Soft checks (no impact): Apna score check karna, pre-approved card offers, employer background checks. Hard checks (small impact): Credit card apply karna, car loan, mortgage, apartment rental, ya phone plan." },
              { type: "quickQuestion", question: "Kaunsa action SOFT check hai jo score nu affect nahi karda?", options: ["Car loan apply karna", "Apna credit score check karna", "Apartment apply karna", "Navi credit card leni"], correct: 1, explanation: "Apna score check karna hamesha soft inquiry hunda hai with zero asar. Loans, cards, ya apartments apply karan naal hard inquiries create hundian han jo score thoda ghatdian han." }
            ]
          }
        }
      },
      {
        type: "concept",
        content: {
          en: {
            headline: "Free credit score services in Canada",
            contentBreakdown: [
              { type: "text", content: "Canada offers several free, legitimate ways to check your credit score. The two most popular are Borrowell (uses Equifax data, updates weekly) and Credit Karma (uses TransUnion data, updates monthly). Both are completely free — no credit card required." },
              { type: "example", title: "Why use both services?", content: "Lenders may check either Equifax or TransUnion. By using both Borrowell and Credit Karma, you see what both major bureaus report. If there's an error on one but not the other, you'll catch it. Many Canadians check Borrowell weekly and Credit Karma monthly for complete coverage." },
              { type: "quickQuestion", question: "What's the main difference between Borrowell and Credit Karma?", options: ["One is free, one costs money", "They use different credit bureau data", "One gives scores, one gives reports", "One is for newcomers only"], correct: 1, explanation: "Borrowell uses Equifax data; Credit Karma uses TransUnion data. Since lenders may check either bureau, using both gives you the complete picture." }
            ]
          },
          es: {
            headline: "Servicios gratuitos de puntuación de crédito en Canadá",
            contentBreakdown: [
              { type: "text", content: "Canadá ofrece varias formas gratuitas y legítimas de revisar tu puntuación. Los dos más populares son Borrowell (usa datos de Equifax, actualiza semanalmente) y Credit Karma (usa datos de TransUnion, actualiza mensualmente). Ambos son completamente gratis — no requieren tarjeta de crédito." },
              { type: "example", title: "¿Por qué usar ambos servicios?", content: "Los prestamistas pueden revisar Equifax o TransUnion. Al usar Borrowell y Credit Karma, ves lo que reportan ambas oficinas principales. Si hay un error en una pero no en la otra, lo detectarás. Muchos canadienses revisan Borrowell semanalmente y Credit Karma mensualmente." },
              { type: "quickQuestion", question: "¿Cuál es la diferencia principal entre Borrowell y Credit Karma?", options: ["Uno es gratis, el otro cuesta", "Usan datos de diferentes oficinas de crédito", "Uno da puntajes, el otro reportes", "Solo uno es para recién llegados"], correct: 1, explanation: "Borrowell usa datos de Equifax; Credit Karma usa datos de TransUnion. Como los prestamistas pueden revisar cualquier oficina, usar ambos te da la imagen completa." }
            ]
          },
          hi: {
            headline: "Canada mein free credit score services",
            contentBreakdown: [
              { type: "text", content: "Canada mein apna credit score check karne ke kai free aur legitimate tareeke hain. Do sabse popular hain Borrowell (Equifax data use karta hai, weekly update) aur Credit Karma (TransUnion data use karta hai, monthly update). Dono bilkul free hain — koi credit card nahi chahiye." },
              { type: "example", title: "Dono services kyun use karein?", content: "Lenders Equifax ya TransUnion mein se kuchh bhi check kar sakte hain. Borrowell aur Credit Karma dono use karne se aap dono major bureaus ki report dekhte ho. Agar ek mein error hai aur doosre mein nahi, aap pakad loge. Kai Canadians Borrowell weekly aur Credit Karma monthly check karte hain." },
              { type: "quickQuestion", question: "Borrowell aur Credit Karma mein main difference kya hai?", options: ["Ek free hai, ek paise leta hai", "Dono alag credit bureau data use karte hain", "Ek score deta hai, ek report deta hai", "Ek sirf newcomers ke liye hai"], correct: 1, explanation: "Borrowell Equifax data use karta hai; Credit Karma TransUnion data use karta hai. Kyunki lenders koi bhi bureau check kar sakte hain, dono use karne se complete picture milta hai." }
            ]
          },
          tl: {
            headline: "Libreng serbisyo ng credit score sa Canada",
            contentBreakdown: [
              { type: "text", content: "Ang Canada ay nag-aalok ng ilang libre at lehitimong paraan para tingnan ang iyong credit score. Ang dalawang pinakasikat ay Borrowell (gumagamit ng Equifax data, nag-a-update linggu-linggo) at Credit Karma (gumagamit ng TransUnion data, buwanang update). Parehong libre — walang credit card na kailangan." },
              { type: "example", title: "Bakit gumamit ng parehong serbisyo?", content: "Ang mga lender ay maaaring tingnan ang Equifax o TransUnion. Sa pamamagitan ng paggamit ng parehong Borrowell at Credit Karma, nakikita mo kung ano ang iniulat ng parehong pangunahing opisina. Kung may error sa isa ngunit hindi sa kabila, mahuhuli mo ito." },
              { type: "quickQuestion", question: "Ano ang pangunahing pagkakaiba sa pagitan ng Borrowell at Credit Karma?", options: ["Ang isa ay libre, ang isa ay may bayad", "Gumagamit sila ng iba't ibang credit bureau data", "Ang isa ay nagbibigay ng score, ang isa ng report", "Ang isa ay para sa mga bagong dating lamang"], correct: 1, explanation: "Ang Borrowell ay gumagamit ng Equifax data; Credit Karma ay gumagamit ng TransUnion data. Dahil ang mga lender ay maaaring mag-check ng alinman sa opisina, ang paggamit ng pareho ay nagbibigay sa iyo ng kumpletong larawan." }
            ]
          },
          zh: {
            headline: "加拿大的免费信用分数服务",
            contentBreakdown: [
              { type: "text", content: "加拿大提供多种免费且合法的查看信用分数的方式。两个最受欢迎的是Borrowell（使用Equifax数据，每周更新）和Credit Karma（使用TransUnion数据，每月更新）。两者都是完全免费的——不需要信用卡。" },
              { type: "example", title: "为什么要使用两种服务？", content: "贷款人可能会查看Equifax或TransUnion。通过同时使用Borrowell和Credit Karma，你可以看到两家主要征信机构的报告。如果一家有错误而另一家没有，你会发现它。许多加拿大人每周查看Borrowell，每月查看Credit Karma。" },
              { type: "quickQuestion", question: "Borrowell和Credit Karma的主要区别是什么？", options: ["一个免费，一个收费", "他们使用不同的征信机构数据", "一个给分数，一个给报告", "一个只针对新移民"], correct: 1, explanation: "Borrowell使用Equifax数据；Credit Karma使用TransUnion数据。由于贷款人可能查看任一机构，使用两者可以让你获得完整的画面。" }
            ]
          },
          ar: {
            headline: "خدمات تقييم ائتماني مجانية في كندا",
            contentBreakdown: [
              { type: "text", content: "تقدم كندا عدة طرق مجانية وشرعية للتحقق من تقييمك الائتماني. الأكثر شيوعًا هما Borrowell (يستخدم بيانات Equifax، يحدث أسبوعيًا) وCredit Karma (يستخدم بيانات TransUnion، يحدث شهريًا). كلاهما مجاني تمامًا — لا يتطلب بطاقة ائتمان." },
              { type: "example", title: "لماذا تستخدم كلا الخدمتين؟", content: "قد يتحقق المقرضون من Equifax أو TransUnion. باستخدام Borrowell وCredit Karma معًا، ترى ما تبلغ عنه كلا المكتبين الرئيسيين. إذا كان هناك خطأ في أحدهما وليس الآخر، ستكتشفه." },
              { type: "quickQuestion", question: "ما هو الفرق الرئيسي بين Borrowell وCredit Karma؟", options: ["أحدهما مجاني، والآخر يكلف", "يستخدمان بيانات مكاتب ائتمان مختلفة", "أحدهما يعطي تقييمات، والآخر يعطي تقارير", "أحدهما للقادمين الجدد فقط"], correct: 1, explanation: "يستخدم Borrowell بيانات Equifax؛ يستخدم Credit Karma بيانات TransUnion. نظرًا لأن المقرضين قد يتحققون من أي مكتب، فإن استخدام كليهما يعطيك الصورة الكاملة." }
            ]
          },
          fr: {
            headline: "Services de pointage de crédit gratuits au Canada",
            contentBreakdown: [
              { type: "text", content: "Le Canada offre plusieurs façons gratuites et légitimes de vérifier votre pointage. Les deux plus populaires sont Borrowell (utilise Equifax, mise à jour hebdomadaire) et Credit Karma (utilise TransUnion, mise à jour mensuelle). Les deux sont complètement gratuits — pas de carte de crédit requise." },
              { type: "example", title: "Pourquoi utiliser les deux services?", content: "Les prêteurs peuvent vérifier Equifax ou TransUnion. En utilisant Borrowell et Credit Karma, vous voyez ce que rapportent les deux bureaux principaux. S'il y a une erreur sur l'un mais pas l'autre, vous la détecterez." },
              { type: "quickQuestion", question: "Quelle est la principale différence entre Borrowell et Credit Karma?", options: ["Un est gratuit, l'autre coûte", "Ils utilisent des données de bureaux différents", "Un donne les scores, l'autre les rapports", "Un est seulement pour les nouveaux arrivants"], correct: 1, explanation: "Borrowell utilise Equifax; Credit Karma utilise TransUnion. Comme les prêteurs peuvent vérifier l'un ou l'autre bureau, utiliser les deux vous donne l'image complète." }
            ]
          },
          pa: {
            headline: "Canada vich free credit score services",
            contentBreakdown: [
              { type: "text", content: "Canada vich apna credit score check karan de kai free ate legitimate tareeke han. Do sab ton popular han Borrowell (Equifax data use karda hai, weekly update) ate Credit Karma (TransUnion data use karda hai, monthly update). Dono bilkul free han — koi credit card nahi chahida." },
              { type: "example", title: "Dono services kyon use kariye?", content: "Lenders Equifax ya TransUnion vichon kuchh vi check kar sakde han. Borrowell ate Credit Karma dono use karan naal tusi dono major bureaus di report vekhde ho. Jehde kisi ik vich error hai ate doosre vich nahi, tusi pakad loge." },
              { type: "quickQuestion", question: "Borrowell ate Credit Karma vich main difference ki hai?", options: ["Ik free hai, ik paise lainda hai", "Dono alag credit bureau data use karde han", "Ik score dinda hai, ik report dinda hai", "Ik sirf newcomers layi hai"], correct: 1, explanation: "Borrowell Equifax data use karda hai; Credit Karma TransUnion data use karda hai. Kyunki lenders koi vi bureau check kar sakde han, dovanu use karan naal complete picture milda hai." }
            ]
          }
        }
      },
      {
        type: "concept",
        content: {
          en: {
            headline: "Reading your credit report: What to look for",
            contentBreakdown: [
              { type: "text", content: "Your credit report contains more than just a score — it shows all your credit accounts, payment history, inquiries, and public records. Reviewing it quarterly helps you spot errors that could be hurting your score unnecessarily." },
              { type: "example", title: "Common errors to watch for", content: "1) Accounts you didn't open (identity theft). 2) Late payments marked incorrectly. 3) Paid-off accounts still showing balances. 4) Old accounts that should have been removed (negative items should disappear after 6-7 years). 5) Incorrect personal information." },
              { type: "quickQuestion", question: "How long do negative items (like missed payments) stay on your Canadian credit report?", options: ["1 year", "3 years", "6-7 years", "Forever"], correct: 2, explanation: "Most negative items automatically drop off your Canadian credit report after 6-7 years. This means even serious mistakes eventually fade if you maintain good habits going forward." }
            ]
          },
          es: {
            headline: "Leyendo tu reporte de crédito: Qué buscar",
            contentBreakdown: [
              { type: "text", content: "Tu reporte de crédito contiene más que solo un puntaje — muestra todas tus cuentas de crédito, historial de pagos, consultas y registros públicos. Revisarlo trimestralmente te ayuda a detectar errores que podrían estar dañando tu puntaje." },
              { type: "example", title: "Errores comunes a vigilar", content: "1) Cuentas que no abriste (robo de identidad). 2) Pagos atrasados marcados incorrectamente. 3) Cuentas pagadas que aún muestran saldos. 4) Cuentas viejas que deberían haberse eliminado (los ítems negativos desaparecen después de 6-7 años). 5) Información personal incorrecta." },
              { type: "quickQuestion", question: "¿Cuánto tiempo permanecen los ítems negativos en tu reporte de crédito canadiense?", options: ["1 año", "3 años", "6-7 años", "Para siempre"], correct: 2, explanation: "La mayoría de los ítems negativos desaparecen automáticamente de tu reporte canadiense después de 6-7 años. Esto significa que incluso errores graves eventualmente se desvanecen si mantienes buenos hábitos." }
            ]
          },
          hi: {
            headline: "Credit report padhna: Kya dekhna hai",
            contentBreakdown: [
              { type: "text", content: "Aapki credit report sirf score se zyada kuchh contain karti hai — yeh aapki saari credit accounts, payment history, inquiries, aur public records dikhati hai. Isse quarterly review karne se aap errors pakad sakte hain jo bewajah aapka score hurt kar rahe hain." },
              { type: "example", title: "Common errors ke liye dekhna", content: "1) Accounts jo aapne nahi khole (identity theft). 2) Galat tareeke se marked late payments. 3) Paid-off accounts jo abhi bhi balance dikhate hain. 4) Purani accounts jo remove ho jani chahiye thi (negative items 6-7 saal baad disappear hone chahiye). 5) Galat personal information." },
              { type: "quickQuestion", question: "Negative items (jaise missed payments) Canadian credit report par kitni der rehte hain?", options: ["1 saal", "3 saal", "6-7 saal", "Hamesha"], correct: 2, explanation: "Zyaadaatar negative items 6-7 saal baad aapki Canadian credit report se automatically drop off ho jate hain. Iska matlab hai ki serious mistakes bhi eventually fade ho jati hain agar aap aage achhe habits maintain karein." }
            ]
          },
          tl: {
            headline: "Pagbasa ng iyong credit report: Ano ang hanapin",
            contentBreakdown: [
              { type: "text", content: "Ang iyong credit report ay naglalaman ng higit pa sa isang score — nagpapakita ito ng lahat ng iyong credit accounts, historial ng pagbabayad, mga tanong, at mga pampublikong tala. Ang pagre-review nito quarterly ay tumutulong na makita ang mga mali na maaaring sumisira sa iyong score." },
              { type: "example", title: "Mga karaniwang mali na dapat bantayan", content: "1) Mga account na hindi mo binuksan (pagnanakaw ng pagkakakilanlan). 2) Mali na naka-markang late payments. 3) Mga bayad na account na nagpapakita pa rin ng balanse. 4) Mga lumang account na dapat ay naalis na (mga negatibong item ay dapat mawala pagkatapos ng 6-7 taon). 5) Mali na personal na impormasyon." },
              { type: "quickQuestion", question: "Gaano katagal manatili ang mga negatibong item sa iyong Canadian credit report?", options: ["1 taon", "3 taon", "6-7 taon", "Magpakailanman"], correct: 2, explanation: "Ang karamihan sa mga negatibong item ay awtomatikong natatanggal sa iyong Canadian credit report pagkatapos ng 6-7 taon. Nangangahulugan ito na kahit ang mga seryosong pagkakamali ay unti-unting nawawala kung pinapanatili mo ang magagandang kaugalian." }
            ]
          },
          zh: {
            headline: "阅读信用报告：寻找什么",
            contentBreakdown: [
              { type: "text", content: "你的信用报告包含的不仅仅是分数——它显示你所有的信用账户、还款历史、查询和公共记录。每季度查看有助于你发现可能在不必要地损害你分数的错误。" },
              { type: "example", title: "需要注意的常见错误", content: "1）你没有开过的账户（身份盗窃）。2）错误标记的逾期付款。3）已还清但仍显示余额的账户。4）应该已经删除的旧账户（负面项目应在6-7年后消失）。5）不正确的个人信息。" },
              { type: "quickQuestion", question: "负面项目（如逾期付款）在你的加拿大信用报告中保留多久？", options: ["1年", "3年", "6-7年", "永久"], correct: 2, explanation: "大多数负面项目会在6-7年后自动从你的加拿大信用报告中删除。这意味着即使严重的错误最终也会消失，只要你今后保持良好的习惯。" }
            ]
          },
          ar: {
            headline: "قراءة تقريرك الائتماني: ما الذي تبحث عنه",
            contentBreakdown: [
              { type: "text", content: "يحتوي تقريرك الائتماني على أكثر من مجرد تقييم — يوضح جميع حساباتك الائتمانية، سجل المدفوعات، الاستفسارات والسجلات العامة. مراجعته ربع سنويًا يساعدك على اكتشاف الأخطاء التي قد تضر بتقييمك." },
              { type: "example", title: "أخطاء شائعة يجب مراقبتها", content: "1) حسابات لم تفتحها (سرقة الهوية). 2) مدفوعات متأخرة محددة بشكل غير صحيح. 3) حسابات مدفوعة لا تزال تظهر أرصدة. 4) حسابات قديمة يجب أن تُحذف (البنود السلبية يجب أن تختفي بعد 6-7 سنوات). 5) معلومات شخصية غير صحيحة." },
              { type: "quickQuestion", question: "كم تبقى البنود السلبية (مثل المدفوعات المتأخرة) في تقريرك الائتماني الكندي؟", options: ["1 سنة", "3 سنوات", "6-7 سنوات", "للأبد"], correct: 2, explanation: "معظم البنود السلبية تُحذف تلقائيًا من تقريرك الائتماني الكندي بعد 6-7 سنوات. هذا يعني أن حتى الأخطاء الجادة تتلاشى في النهاية إذا حافظت على عادات جيدة." }
            ]
          },
          fr: {
            headline: "Lire votre rapport de crédit: Quoi chercher",
            contentBreakdown: [
              { type: "text", content: "Votre rapport de crédit contient plus qu'un simple score — il montre tous vos comptes de crédit, historial des paiements, consultations et dossiers publics. Le réviser trimestriellement vous aide à repérer les erreurs qui pourraient nuire à votre score." },
              { type: "example", title: "Erreurs courantes à surveiller", content: "1) Comptes que vous n'avez pas ouverts (vol d'identité). 2) Retards de paiement marqués incorrectement. 3) Comptes payés qui montrent encore des soldes. 4) Anciens comptes qui auraient dû être supprimés (items négatifs disparaissent après 6-7 ans). 5) Informations personnelles incorrectes." },
              { type: "quickQuestion", question: "Combien de temps les items négatifs restent-ils sur votre rapport canadien?", options: ["1 an", "3 ans", "6-7 ans", "Pour toujours"], correct: 2, explanation: "La plupart des items négatifs disparaissent automatiquement de votre rapport canadien après 6-7 ans. Cela signifie que même les erreurs graves finissent par s'effacer si vous maintenez de bonnes habitudes." }
            ]
          },
          pa: {
            headline: "Credit report parhna: Ki vekhna hai",
            contentBreakdown: [
              { type: "text", content: "Tuhadi credit report sirf score ton zyada kujh contain kardi hai — eh tuhadi saari credit accounts, payment history, inquiries, ate public records dikhaundi hai. Ehna quarterly review karan naal tusi errors pakad sakde ho jo bewajah tuhada score hurt kar rahe han." },
              { type: "example", title: "Common errors layi vekhna", content: "1) Accounts jo tusi nahi khole (identity theft). 2) Galat tareeke naal marked late payments. 3) Paid-off accounts jo haje vi balance dikhonde han. 4) Purane accounts jo remove ho jane chahide si (negative items 6-7 saal baad disappear hone chahide han). 5) Galat personal information." },
              { type: "quickQuestion", question: "Negative items (jaise missed payments) Canadian credit report te kinni der rahende han?", options: ["1 saal", "3 saal", "6-7 saal", "Hamesha"], correct: 2, explanation: "Zyadaatar negative items 6-7 saal baad tuhadi Canadian credit report toh automatically drop off ho jande han. Ehsda matlab hai ki serious mistakes vi eventually fade ho jandian han jehde tu aage changhe habits maintain karde ho." }
            ]
          }
        }
      },
      {
        type: "concept",
        content: {
          en: {
            headline: "How to dispute errors on your credit report",
            contentBreakdown: [
              { type: "text", content: "If you find an error on your credit report, you have the right to dispute it with the credit bureau (Equifax or TransUnion). Both bureaus allow online disputes that are typically resolved within 30 days. Fixing errors can boost your score significantly." },
              { type: "example", title: "The dispute process step-by-step", content: "1) Get a free copy of your full credit report. 2) Identify the specific error. 3) Gather supporting documents (bank statements, payment confirmations). 4) Submit dispute online through Equifax.ca or TransUnion.ca. 5) Bureau investigates within 30 days. 6) If verified as error, it's removed and your score may improve within 1-2 billing cycles." },
              { type: "quickQuestion", question: "How long do credit bureaus typically take to investigate a dispute?", options: ["3-5 days", "10-14 days", "30 days", "6 months"], correct: 2, explanation: "Canadian credit bureaus have 30 days to investigate disputes. Many are resolved faster, but they have a full month to verify the information with the creditor and respond to you." }
            ]
          },
          es: {
            headline: "Cómo disputar errores en tu reporte de crédito",
            contentBreakdown: [
              { type: "text", content: "Si encuentras un error en tu reporte de crédito, tienes derecho a disputarlo con la oficina de crédito (Equifax o TransUnion). Ambas permiten disputas en línea que típicamente se resuelven en 30 días. Corregir errores puede aumentar significativamente tu puntaje." },
              { type: "example", title: "El proceso de disputa paso a paso", content: "1) Obtén una copia gratuita de tu reporte completo. 2) Identifica el error específico. 3) Reúne documentos de respaldo. 4) Envía la disputa en línea a través de Equifax.ca o TransUnion.ca. 5) La oficina investiga en 30 días. 6) Si se verifica como error, se elimina y tu puntaje puede mejorar en 1-2 ciclos de facturación." },
              { type: "quickQuestion", question: "¿Cuánto tiempo típicamente toman las oficinas de crédito para investigar una disputa?", options: ["3-5 días", "10-14 días", "30 días", "6 meses"], correct: 2, explanation: "Las oficinas de crédito canadienses tienen 30 días para investigar disputas. Muchas se resuelven más rápido, pero tienen un mes completo para verificar la información con el acreedor." }
            ]
          },
          hi: {
            headline: "Credit report par errors kaise dispute karein",
            contentBreakdown: [
              { type: "text", content: "Agar aapko apni credit report par koi error milta hai, toh aapke paas credit bureau (Equifax ya TransUnion) ke saath dispute karne ka adhikaar hai. Dono bureaus online disputes allow karte hain jo typically 30 din mein resolve ho jate hain. Errors fix karne se score significantly boost ho sakta hai." },
              { type: "example", title: "Dispute process step-by-step", content: "1) Apni full credit report ki free copy lein. 2) Specific error identify karein. 3) Supporting documents gather karein (bank statements, payment confirmations). 4) Equifax.ca ya TransUnion.ca ke through online dispute submit karein. 5) Bureau 30 din mein investigate karta hai. 6) Agar error verify hota hai, remove ho jata hai aur score 1-2 billing cycles mein improve ho sakta hai." },
              { type: "quickQuestion", question: "Credit bureaus typically kitni der mein dispute investigate karte hain?", options: ["3-5 din", "10-14 din", "30 din", "6 mahine"], correct: 2, explanation: "Canadian credit bureaus ke paas disputes investigate karne ke liye 30 din hote hain. Kai jaldi resolve ho jate hain, par unke paas creditor se information verify karne aur aapko response dene ke liye poora mahina hota hai." }
            ]
          },
          tl: {
            headline: "Paano makipagtalo sa mga mali sa iyong credit report",
            contentBreakdown: [
              { type: "text", content: "Kung may nakita kang mali sa iyong credit report, may karapatan kang makipagtalo sa credit bureau (Equifax o TransUnion). Parehong nagpapahintulot ng online disputes na karaniwang nalulutas sa loob ng 30 araw. Ang pag-aayos ng mga mali ay maaaring pataasin ang iyong score." },
              { type: "example", title: "Ang proseso ng pagtalo hakbang-hakbang", content: "1) Kumuha ng libreng kopya ng iyong buong credit report. 2) Kilalanin ang tiyak na mali. 3) Mangalap ng supporting documents. 4) Magsumite ng dispute online sa Equifax.ca o TransUnion.ca. 5) Sinusuri ng bureau sa loob ng 30 araw. 6) Kung na-verify bilang mali, aalisin ito at maaaring tumaas ang iyong score sa 1-2 billing cycles." },
              { type: "quickQuestion", question: "Gaano katagal karaniwang iniuugnay ng mga credit bureau ang isang dispute?", options: ["3-5 araw", "10-14 araw", "30 araw", "6 buwan"], correct: 2, explanation: "Ang mga Canadian credit bureau ay may 30 araw upang imbestigahan ang mga disputes. Marami ang nalulutas nang mas mabilis, ngunit may buwang buwan sila upang i-verify ang impormasyon." }
            ]
          },
          zh: {
            headline: "如何对信用报告中的错误提出异议",
            contentBreakdown: [
              { type: "text", content: "如果你在信用报告中发现错误，你有权向征信机构（Equifax或TransUnion）提出异议。两个机构都允许在线异议，通常在30天内解决。修复错误可以显著提升你的分数。" },
              { type: "example", title: "异议流程分步指南", content: "1）获取完整信用报告的免费副本。2）确定具体错误。3）收集支持文件（银行对账单、付款确认）。4）通过Equifax.ca或TransUnion.ca在线提交异议。5）征信机构在30天内调查。6）如果验证为错误，将被删除，你的分数可能在1-2个账单周期内改善。" },
              { type: "quickQuestion", question: "征信机构通常需要多长时间调查异议？", options: ["3-5天", "10-14天", "30天", "6个月"], correct: 2, explanation: "加拿大征信机构有30天时间调查异议。许多会更快解决，但他们有一个完整的月来向债权人核实信息并回复你。" }
            ]
          },
          ar: {
            headline: "كيفية الاعتراض على الأخطاء في تقريرك الائتماني",
            contentBreakdown: [
              { type: "text", content: "إذا وجدت خطأ في تقريرك الائتماني، فلديك الحق في الاعتراض عليه لدى مكتب الائتمان (Equifax أو TransUnion). يسمح كلا المكتبين بالاعتراضات عبر الإنترنت التي يتم حلها عادةً في غضون 30 يومًا. إصلاح الأخطاء قد يرفع تقييمك بشكل كبير." },
              { type: "example", title: "عملية الاعتراض خطوة بخطوة", content: "1) احصل على نسخة مجانية من تقريرك الكامل. 2) حدد الخطأ المحدد. 3) اجمع المستندات الداعمة. 4) قدم الاعتراض عبر الإنترنت من خلال Equifax.ca أو TransUnion.ca. 5) يحقق المكتب في غضون 30 يومًا. 6) إذا تم التحقق منه كخطأ، يُحذف وقد يتحسن تقييمك في 1-2 دورات فوترة." },
              { type: "quickQuestion", question: "كم من الوقت يستغرق مكاتب الائتمان عادةً للتحقيق في الاعتراض؟", options: ["3-5 أيام", "10-14 يومًا", "30 يومًا", "6 أشهر"], correct: 2, explanation: "لدى مكاتب الائتمان الكندية 30 يومًا للتحقيق في الاعتراضات. يتم حل العديد بشكل أسرع، لكن لديهم شهر كامل للتحقق من المعلومات مع الدائن." }
            ]
          },
          fr: {
            headline: "Comment contester les erreurs sur votre rapport de crédit",
            contentBreakdown: [
              { type: "text", content: "Si vous trouvez une erreur sur votre rapport de crédit, vous avez le droit de la contester auprès du bureau de crédit (Equifax ou TransUnion). Les deux bureaux permettent des contestations en ligne généralement résolues en 30 jours. Corriger les erreurs peut augmenter significativement votre score." },
              { type: "example", title: "Le processus de contestation étape par étape", content: "1) Obtenez une copie gratuite de votre rapport complet. 2) Identifiez l'erreur spécifique. 3) Rassemblez les documents justificatifs. 4) Soumettez la contestation en ligne via Equifax.ca ou TransUnion.ca. 5) Le bureau enquête en 30 jours. 6) Si vérifiée comme erreur, elle est supprimée et votre score peut s'améliorer en 1-2 cycles." },
              { type: "quickQuestion", question: "Combien de temps prennent généralement les bureaux pour enquêter sur une contestation?", options: ["3-5 jours", "10-14 jours", "30 jours", "6 mois"], correct: 2, explanation: "Les bureaux de crédit canadiens ont 30 jours pour enquêter sur les contestations. Beaucoup sont résolues plus vite, mais ils ont un mois complet pour vérifier l'information avec le créancier." }
            ]
          },
          pa: {
            headline: "Credit report te errors kiven dispute kariye",
            contentBreakdown: [
              { type: "text", content: "Jehde tuhannu apni credit report te koi error milda hai, tan tuhade kol credit bureau (Equifax ya TransUnion) naal dispute karan da adhikaar hai. Dono bureaus online disputes di ijaazat dende han jo typically 30 din vich resolve ho jande han. Errors fix karan naal score significantly boost ho sakda hai." },
              { type: "example", title: "Dispute process step-by-step", content: "1) Apni full credit report di free copy lao. 2) Specific error identify karo. 3) Supporting documents gather karo (bank statements, payment confirmations). 4) Equifax.ca ya TransUnion.ca de through online dispute submit karo. 5) Bureau 30 din vich investigate karda hai. 6) Jehde error verify honda hai, remove ho janda hai ate score 1-2 billing cycles vich improve ho sakda hai." },
              { type: "quickQuestion", question: "Credit bureaus typically kinni der vich dispute investigate karde han?", options: ["3-5 din", "10-14 din", "30 din", "6 mahine"], correct: 2, explanation: "Canadian credit bureaus de kol disputes investigate karan layi 30 din hunde han. Kai jaldi resolve ho jande han, par unna de kol creditor toh information verify karan ate tuhannu response den layi poora mahina honda hai." }
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
            headline: "The impact of late and missed payments",
            contentBreakdown: [
              { type: "text", content: "Payment history makes up about 35% of your credit score - the single biggest factor. Even one late payment (30+ days past due) can drop your score by 50-100 points and stay on your report for 6 years in Canada." },
              { type: "example", title: "Late payment impact timeline", content: "Sarah had a 720 credit score. She missed a $50 credit card payment by 35 days. Her score dropped to 640. Even after paying it off, the late payment mark stayed on her report, making it harder to get a car loan at a good rate for years." },
              { type: "quickQuestion", question: "How long does a late payment typically stay on your Canadian credit report?", options: ["1 year", "3 years", "6 years", "Forever"], correct: 2, explanation: "In Canada, negative information like late payments typically stays on your credit report for 6 years from the date of the missed payment, though its impact lessens over time." }
            ]
          },
          es: {
            headline: "El impacto de pagos tardíos y omitidos",
            contentBreakdown: [
              { type: "text", content: "El historial de pagos representa alrededor del 35% de tu puntuación de crédito - el factor más grande. Incluso un pago tardío (30+ días de retraso) puede bajar tu score 50-100 puntos y permanecer en tu reporte por 6 años en Canadá." },
              { type: "example", title: "Cronología del impacto de pagos tardíos", content: "Sarah tenía una puntuación de 720. Olvidó un pago de $50 en su tarjeta de crédito por 35 días. Su puntuación bajó a 640. Incluso después de pagarlo, la marca de pago tardío permaneció en su reporte, dificultando obtener un préstamo para auto con buena tasa por años." },
              { type: "quickQuestion", question: "¿Cuánto tiempo permanece típicamente un pago tardío en tu reporte de crédito canadiense?", options: ["1 año", "3 años", "6 años", "Para siempre"], correct: 2, explanation: "En Canadá, la información negativa como pagos tardíos típicamente permanece en tu reporte de crédito por 6 años desde la fecha del pago omitido, aunque su impacto disminuye con el tiempo." }
            ]
          },
          hi: {
            headline: "Late aur missed payments ka asar",
            contentBreakdown: [
              { type: "text", content: "Payment history aapke credit score ka lagbhag 35% banta hai - sabse bada factor. Sirf ek late payment (30+ din delay) aapka score 50-100 points gira sakti hai aur Canada mein 6 saal tak report par rehti hai." },
              { type: "example", title: "Late payment impact timeline", content: "Sarah ka credit score 720 tha. Usne $50 ki credit card payment 35 din delay se ki. Uska score 640 ho gaya. Payment karne ke baad bhi, late payment mark uski report par reh gaya, jisse kai saal tak achhi rate par car loan lena mushkil ho gaya." },
              { type: "quickQuestion", question: "Late payment typically kitne samay tak Canadian credit report par rehti hai?", options: ["1 saal", "3 saal", "6 saal", "Hamesha"], correct: 2, explanation: "Canada mein, negative information jaise late payments typically 6 saal tak credit report par rehti hai missed payment ki date se, lekin iska asar samay ke saath kam hota hai." }
            ]
          },
          tl: {
            headline: "Epekto ng late at missed payments",
            contentBreakdown: [
              { type: "text", content: "Ang payment history ay bumubuo ng humigit-kumulang 35% ng iyong credit score - ang pinakamalaking factor. Kahit isang late payment (30+ araw na late) ay maaaring bumaba ng 50-100 puntos at manatili sa iyong report ng 6 na taon sa Canada." },
              { type: "example", title: "Timeline ng epekto ng late payment", content: "Si Sarah ay may 720 na credit score. Na-miss niya ang isang $50 na credit card payment ng 35 araw. Bumaba ang kanyang score sa 640. Kahit na nabayaran na, ang marka ng late payment ay nanatili sa kanyang report, nagpapahirap makakuha ng car loan sa magandang rate sa loob ng maraming taon." },
              { type: "quickQuestion", question: "Gaano katagal karaniwang nananatili ang isang late payment sa iyong Canadian credit report?", options: ["1 taon", "3 taon", "6 na taon", "Magpakailanman"], correct: 2, explanation: "Sa Canada, ang negatibong impormasyon tulad ng late payments ay karaniwang nananatili sa iyong credit report ng 6 na taon mula sa petsa ng missed payment, bagama't ang epekto nito ay humihina sa paglipas ng panahon." }
            ]
          },
          zh: {
            headline: "逾期和漏付的影响",
            contentBreakdown: [
              { type: "text", content: "付款历史约占你信用分数的35%——是最大的单一因素。即使一次逾期付款（延迟30天以上）也能让你的分数下降50-100点，并在加拿大信用报告上保留6年。" },
              { type: "example", title: "逾期付款影响时间线", content: "Sarah的信用分数是720。她延迟35天未付50美元的信用卡账单。她的分数降到640。即使后来付清了，逾期标记仍留在她的报告上，多年来让她难以获得优惠利率的汽车贷款。" },
              { type: "quickQuestion", question: "逾期付款通常在加拿大信用报告上保留多久？", options: ["1年", "3年", "6年", "永久"], correct: 2, explanation: "在加拿大，负面信息如逾期付款通常从漏付日期起在信用报告上保留6年，尽管其影响会随时间减轻。" }
            ]
          },
          ar: {
            headline: "تأثير الدفعات المتأخرة والمفقودة",
            contentBreakdown: [
              { type: "text", content: "سجل الدفعات يمثل حوالي 35% من تقييمك الائتماني - العامل الأكبر. حتى دفعة متأخرة واحدة (بعد 30+ يومًا) قد تخفض تقييمك 50-100 نقطة وتبقى في تقريرك لمدة 6 سنوات في كندا." },
              { type: "example", title: "الجدول الزمني لتأثير الدفعات المتأخرة", content: "كانت سارة تمتلك تقييمًا ائتمانيًا 720. فاتتها دفعة 50 دولار على بطاقتها الائتمانية بـ 35 يومًا. انخفض تقييمها إلى 640. حتى بعد سدادها، بقي علامة الدفعة المتأخرة في تقريرها، مما جعل الحصول على قرض سيارة بسعر جيد صعبًا لسنوات." },
              { type: "quickQuestion", question: "كم من الوقت تبقى الدفعة المتأخرة عادةً في تقريرك الائتماني الكندي؟", options: ["سنة واحدة", "3 سنوات", "6 سنوات", "للأبد"], correct: 2, explanation: "في كندا، المعلومات السلبية مثل الدفعات المتأخرة تبقى عادةً في تقريرك الائتماني لمدة 6 سنوات من تاريخ الدفعة المفقودة، على الرغم من أن تأثيرها يقل مع مرور الوقت." }
            ]
          },
          fr: {
            headline: "L'impact des paiements en retard et manqués",
            contentBreakdown: [
              { type: "text", content: "L'historique des paiements représente environ 35% de votre pointage de crédit - le plus grand facteur. Même un seul paiement en retard (30+ jours de retard) peut faire baisser votre score de 50-100 points et rester sur votre rapport pendant 6 ans au Canada." },
              { type: "example", title: "Chronologie de l'impact des paiements en retard", content: "Sarah avait un pointage de 720. Elle a manqué un paiement de 50 $ sur sa carte de crédit de 35 jours. Son score est tombé à 640. Même après l'avoir payé, la marque de paiement en retard est restée sur son rapport, rendant difficile l'obtention d'un prêt auto à un bon taux pendant des années." },
              { type: "quickQuestion", question: "Combien de temps un paiement en retard reste-t-il généralement sur votre rapport de crédit canadien ?", options: ["1 an", "3 ans", "6 ans", "Pour toujours"], correct: 2, explanation: "Au Canada, les informations négatives comme les paiements en retard restent généralement sur votre rapport de crédit pendant 6 ans à partir de la date du paiement manqué, bien que leur impact diminue avec le temps." }
            ]
          },
          pa: {
            headline: "Late ate missed payments da prabhav",
            contentBreakdown: [
              { type: "text", content: "Payment history tuhade credit score da lagbhag 35% banaundi hai - sab ton vadda factor. Sirf ek late payment (30+ din late) tuhada score 50-100 points ghata sakdi hai ate Canada vich 6 saal tak report te rehndi hai." },
              { type: "example", title: "Late payment impact samay-rekha", content: "Sarah da credit score 720 si. Usne $50 di credit card payment 35 din late kiti. Udda score 640 ho gaya. Payment karke vi, late payment mark usdi report te reh gaya, jisse kai saal tak changi rate te car loan lena mushkil ho gaya." },
              { type: "quickQuestion", question: "Late payment typically kinne samay tak Canadian credit report te rehndi hai?", options: ["1 saal", "3 saal", "6 saal", "Hamesha"], correct: 2, explanation: "Canada vich, negative information jaise late payments typically 6 saal tak credit report te rehndian han missed payment di date toh, par isda asar samay naal ghat jaanda hai." }
            ]
          }
        }
      },
      {
        type: "concept",
        content: {
          en: {
            headline: "Credit utilization and high balances",
            contentBreakdown: [
              { type: "text", content: "Credit utilization - how much of your available credit you're using - makes up about 30% of your score. Using more than 30% of your credit limit can significantly hurt your score, even if you pay in full each month. Maxing out cards is especially damaging." },
              { type: "example", title: "Utilization calculation example", content: "You have two credit cards: Card A with $5,000 limit and $4,500 balance (90% used), Card B with $3,000 limit and $0 balance. Your overall utilization is 56% ($4,500/$8,000), which will hurt your score significantly. Ideally keep each card under 30% and overall under 10%." },
              { type: "quickQuestion", question: "Which scenario is better for your credit score?", options: ["$4,000 balance on a $5,000 limit card", "$1,000 balance on a $5,000 limit card", "$500 balance on a $1,000 limit card", "All equally bad"], correct: 1, explanation: "$1,000/$5,000 = 20% utilization, which is under the 30% recommended threshold. High utilization signals to lenders that you might be over-reliant on credit." }
            ]
          },
          es: {
            headline: "Utilización del crédito y saldos altos",
            contentBreakdown: [
              { type: "text", content: "La utilización del crédito - cuánto de tu crédito disponible estás usando - representa alrededor del 30% de tu puntuación. Usar más del 30% de tu límite puede dañar significativamente tu score, incluso si pagas el total cada mes. Llegar al límite máximo es especialmente dañino." },
              { type: "example", title: "Ejemplo de cálculo de utilización", content: "Tienes dos tarjetas de crédito: Tarjeta A con límite de $5,000 y saldo de $4,500 (90% usado), Tarjeta B con límite de $3,000 y saldo de $0. Tu utilización general es 56% ($4,500/$8,000), lo cual dañará tu puntuación significativamente. Idealmente mantén cada tarjeta bajo 30% y general bajo 10%." },
              { type: "quickQuestion", question: "¿Qué escenario es mejor para tu puntuación de crédito?", options: ["$4,000 de saldo en tarjeta con límite de $5,000", "$1,000 de saldo en tarjeta con límite de $5,000", "$500 de saldo en tarjeta con límite de $1,000", "Todos igual de malos"], correct: 1, explanation: "$1,000/$5,000 = 20% de utilización, que está bajo el umbral recomendado del 30%. La alta utilización señala a los prestamistas que podrías depender demasiado del crédito." }
            ]
          },
          hi: {
            headline: "Credit utilization aur high balances",
            contentBreakdown: [
              { type: "text", content: "Credit utilization - aap kitna available credit use kar rahe ho - aapke score ka lagbhag 30% banta hai. Apne credit limit ka 30% se zyada use karna score ko significantly hurt kar sakta hai, chahe aap monthly full pay karte ho. Cards max out karna khaaskar nuksaan karta hai." },
              { type: "example", title: "Utilization calculation example", content: "Aapke paas do credit cards hain: Card A $5,000 limit aur $4,500 balance ke saath (90% used), Card B $3,000 limit aur $0 balance ke saath. Aapki overall utilization 56% hai ($4,500/$8,000), jo aapke score ko significantly hurt karegi. Ideal har card 30% se kam aur overall 10% se kam rakho." },
              { type: "quickQuestion", question: "Kaunsa scenario aapke credit score ke liye behtar hai?", options: ["$5,000 limit card par $4,000 balance", "$5,000 limit card par $1,000 balance", "$1,000 limit card par $500 balance", "Sab equally bure"], correct: 1, explanation: "$1,000/$5,000 = 20% utilization, jo 30% recommended threshold se kam hai. High utilization lenders ko signal karta hai ki aap credit par zyada dependent ho sakte ho." }
            ]
          },
          tl: {
            headline: "Paggamit ng credit at mataas na balances",
            contentBreakdown: [
              { type: "text", content: "Ang credit utilization - kung gaano ang available credit na ginagamit mo - ay bumubuo ng humigit-kumulang 30% ng iyong score. Ang paggamit ng higit sa 30% ng iyong limit ay maaaring makasama nang malaki sa iyong score, kahit na binabayaran mo nang buo bawat buwan. Ang pag-max out ng cards ay lalo nang nakakasira." },
              { type: "example", title: "Halimbawa ng pagkalkula ng utilization", content: "Mayroon kang dalawang credit card: Card A na may $5,000 limit at $4,500 balance (90% nagamit), Card B na may $3,000 limit at $0 balance. Ang iyong kabuuang utilization ay 56% ($4,500/$8,000), na seryosong makakasama sa iyong score. Ideal na panatilihing bawat card sa ilalim ng 30% at kabuuan sa ilalim ng 10%." },
              { type: "quickQuestion", question: "Aling scenario ang mas mabuti para sa iyong credit score?", options: ["$4,000 na balance sa card na may $5,000 limit", "$1,000 na balance sa card na may $5,000 limit", "$500 na balance sa card na may $1,000 limit", "Lahat ay kapwa masama"], correct: 1, explanation: "$1,000/$5,000 = 20% utilization, na nasa ilalim ng inirerekumendang 30% threshold. Ang mataas na utilization ay nagpapahiwatig sa lenders na maaaring sobra kang umaasa sa credit." }
            ]
          },
          zh: {
            headline: "信用利用率和过高余额",
            contentBreakdown: [
              { type: "text", content: "信用利用率——你使用多少可用信用——约占你分数的30%。使用超过30%的信用额度会显著伤害你的分数，即使你每月全额还款。刷爆信用卡尤其有害。" },
              { type: "example", title: "利用率计算示例", content: "你有两张信用卡：A卡额度$5,000，余额$4,500（使用90%），B卡额度$3,000，余额$0。你的总体利用率是56%（$4,500/$8,000），这会显著伤害你的分数。理想情况下每张卡保持在30%以下，总体在10%以下。" },
              { type: "quickQuestion", question: "哪种场景对你的信用分数更好？", options: ["$5,000额度卡上有$4,000余额", "$5,000额度卡上有$1,000余额", "$1,000额度卡上有$500余额", "都一样糟糕"], correct: 1, explanation: "$1,000/$5,000 = 20%利用率，低于30%的推荐阈值。高利用率向贷款人发出信号，表明你可能过度依赖信用。" }
            ]
          },
          ar: {
            headline: "استخدام الائتمان والأرصدة المرتفعة",
            contentBreakdown: [
              { type: "text", content: "استخدام الائتمان - كم من ائتمانك المتاح تستخدمه - يمثل حوالي 30% من تقييمك. استخدام أكثر من 30% من حد ائتمانك قد يضر بتقييمك بشكل كبير، حتى إذا كنت تدفع بالكامل كل شهر. استنفاد البطاقات بشكل خاص مدمر." },
              { type: "example", title: "مثال على حساب الاستخدام", content: "لديك بطاقتي ائتمان: البطاقة أ بحجم 5,000 دولار ورصيد 4,500 دولار (90% مستخدم)، البطاقة ب بحجم 3,000 دولار ورصيد 0. استخدامك الإجمالي هو 56% (4,500/8,000 دولار)، مما سيضر بتقييمك بشكل كبير. من المثالي الحفاظ على كل بطاقة تحت 30% والإجمالي تحت 10%." },
              { type: "quickQuestion", question: "أي سيناريو هو الأفضل لتقييمك الائتماني؟", options: ["رصيد 4,000 دولار على بطاقة بحجم 5,000 دولار", "رصيد 1,000 دولار على بطاقة بحجم 5,000 دولار", "رصيد 500 دولار على بطاقة بحجم 1,000 دولار", "جميعها بنفس السوء"], correct: 1, explanation: "1,000/5,000 دولار = 20% استخدام، وهو أقل من العتبة الموصى بها البالغة 30%. الاستخدام المرتفع يشير إلى المقرضين أنك قد تعتمد بشكل مفرط على الائتمان." }
            ]
          },
          fr: {
            headline: "Utilisation du crédit et soldes élevés",
            contentBreakdown: [
              { type: "text", content: "L'utilisation du crédit - combien de votre crédit disponible vous utilisez - représente environ 30% de votre score. Utiliser plus de 30% de votre limite de crédit peut nuire significativement à votre score, même si vous payez en entier chaque mois. L'utilisation maximale des cartes est particulièrement dommageable." },
              { type: "example", title: "Exemple de calcul d'utilisation", content: "Vous avez deux cartes de crédit : Carte A avec limite de 5,000 $ et solde de 4,500 $ (90% utilisé), Carte B avec limite de 3,000 $ et solde de 0 $. Votre utilisation globale est de 56% (4,500/8,000 $), ce qui nuira significativement à votre score. Idéalement, gardez chaque carte sous 30% et le global sous 10%." },
              { type: "quickQuestion", question: "Quel scénario est meilleur pour votre pointage de crédit ?", options: ["Solde de 4,000 $ sur carte avec limite de 5,000 $", "Solde de 1,000 $ sur carte avec limite de 5,000 $", "Solde de 500 $ sur carte avec limite de 1,000 $", "Tous également mauvais"], correct: 1, explanation: "1,000/5,000 $ = 20% d'utilisation, ce qui est sous le seuil recommandé de 30%. Une utilisation élevée signale aux prêteurs que vous pourriez dépendre trop du crédit." }
            ]
          },
          pa: {
            headline: "Credit utilization ate high balances",
            contentBreakdown: [
              { type: "text", content: "Credit utilization - tusi kitna available credit use kar rahe ho - tuhade score da lagbhag 30% banaunda hai. Apne credit limit da 30% toh zyada use karna score nu significantly hurt kar sakda hai, chahe tusi monthly full pay karde ho. Cards max out karna khaaskar nuksaan karda hai." },
              { type: "example", title: "Utilization calculation example", content: "Tuhade kol do credit cards han: Card A $5,000 limit ate $4,500 balance naal (90% used), Card B $3,000 limit ate $0 balance naal. Tuhadi overall utilization 56% hai ($4,500/$8,000), jo tuhade score nu significantly hurt karegi. Ideal har card 30% toh kam ate overall 10% toh kam rakho." },
              { type: "quickQuestion", question: "Kaunja scenario tuhade credit score lai behtar hai?", options: ["$5,000 limit card te $4,000 balance", "$5,000 limit card te $1,000 balance", "$1,000 limit card te $500 balance", "Sab equally bure"], correct: 1, explanation: "$1,000/$5,000 = 20% utilization, jo 30% recommended threshold toh kam hai. High utilization lenders nu signal karda hai ki tusi credit te zyada dependent ho sakde ho." }
            ]
          }
        }
      },
      {
        type: "concept",
        content: {
          en: {
            headline: "Hard inquiries from credit applications",
            contentBreakdown: [
              { type: "text", content: "Each time you apply for credit, the lender performs a 'hard inquiry' on your credit report. This can lower your score by 5-10 points and stays on your report for 3 years in Canada. Multiple hard inquiries within a short period (14-45 days) for the same type of credit (like mortgage shopping) usually count as one inquiry." },
              { type: "example", title: "Shopping for a car loan", content: "John visited 5 dealerships over 3 weeks, and each ran his credit. Because these were all auto loan inquiries within a short period, they counted as one inquiry on his report. However, if he also applied for 3 credit cards during that time, those would be separate inquiries, potentially dropping his score by 15-30 points." },
              { type: "quickQuestion", question: "How long does a hard inquiry typically stay on your Canadian credit report?", options: ["6 months", "1 year", "3 years", "6 years"], correct: 2, explanation: "In Canada, hard inquiries (credit checks from applications) typically remain on your credit report for 3 years. Unlike late payments, their impact on your score is usually small (5-10 points) and temporary." }
            ]
          },
          es: {
            headline: "Consultas difíciles de solicitudes de crédito",
            contentBreakdown: [
              { type: "text", content: "Cada vez que solicitas crédito, el prestamista realiza una 'consulta difícil' en tu reporte de crédito. Esto puede bajar tu puntuación 5-10 puntos y permanecer en tu reporte por 3 años en Canadá. Múltiples consultas difíciles dentro de un período corto (14-45 días) para el mismo tipo de crédito (como comprar hipotecas) usualmente cuentan como una consulta." },
              { type: "example", title: "Buscando un préstamo para auto", content: "John visitó 5 concesionarios en 3 semanas, y cada uno revisó su crédito. Como estas fueron consultas de préstamos para auto dentro de un período corto, contaron como una consulta en su reporte. Sin embargo, si también solicitó 3 tarjetas de crédito durante ese tiempo, esas serían consultas separadas, potencialmente bajando su puntuación 15-30 puntos." },
              { type: "quickQuestion", question: "¿Cuánto tiempo permanece típicamente una consulta difícil en tu reporte de crédito canadiense?", options: ["6 meses", "1 año", "3 años", "6 años"], correct: 2, explanation: "En Canadá, las consultas difíciles (revisiones de crédito de solicitudes) típicamente permanecen en tu reporte de crédito por 3 años. A diferencia de los pagos tardíos, su impacto en tu puntuación es usualmente pequeño (5-10 puntos) y temporal." }
            ]
          },
          hi: {
            headline: "Credit applications se hard inquiries",
            contentBreakdown: [
              { type: "text", content: "Jab bhi aap credit apply karte ho, lender aapki credit report par 'hard inquiry' karta hai. Yeh aapka score 5-10 points gira sakta hai aur Canada mein 3 saal tak report par rehta hai. Chote period (14-45 din) mein same type ke credit ke liye multiple hard inquiries (jaise mortgage shopping) usually ek inquiry count hote hain." },
              { type: "example", title: "Car loan ke liye shopping", content: "John ne 3 hafton mein 5 dealerships visit kiye, aur har kisi ne uska credit check kiya. Kyunki yeh sab short period mein auto loan inquiries the, yeh uski report par ek inquiry count hue. Lekin agar usne usi time 3 credit cards bhi apply kiye, toh woh alag inquiries hongi, potentially uska score 15-30 points gir sakta hai." },
              { type: "quickQuestion", question: "Hard inquiry typically kitne samay tak Canadian credit report par rehti hai?", options: ["6 mahine", "1 saal", "3 saal", "6 saal"], correct: 2, explanation: "Canada mein, hard inquiries (applications se credit checks) typically 3 saal tak credit report par rehti hain. Late payments ki tarah nahi, inka impact usually chhota (5-10 points) aur temporary hota hai." }
            ]
          },
          tl: {
            headline: "Mga mahihirap na pagtatanong mula sa aplikasyon ng credit",
            contentBreakdown: [
              { type: "text", content: "Bawat beses na mag-apply ka ng credit, ang lender ay gumagawa ng 'hard inquiry' sa iyong credit report. Ito ay maaaring bumaba ng 5-10 puntos sa iyong score at manatili sa iyong report ng 3 taon sa Canada. Ang maraming hard inquiries sa loob ng maikling panahon (14-45 araw) para sa parehong uri ng credit (tulad ng mortgage shopping) ay karaniwang bibilangin bilang isang inquiry." },
              { type: "example", title: "Pagtingin sa car loan", content: "Bumisita si John sa 5 dealerships sa loob ng 3 linggo, at bawat isa ay nag-check ng kanyang credit. Dahil ang mga ito ay lahat ng auto loan inquiries sa loob ng maikling panahon, bibilangin sila bilang isang inquiry sa kanyang report. Gayunpaman, kung nag-apply din siya ng 3 credit cards sa panahong iyon, ang mga iyon ay magiging hiwalay na inquiries, potensyal na bumaba ng 15-30 puntos sa kanyang score." },
              { type: "quickQuestion", question: "Gaano katagal karaniwang nananatili ang isang hard inquiry sa iyong Canadian credit report?", options: ["6 na buwan", "1 taon", "3 taon", "6 na taon"], correct: 2, explanation: "Sa Canada, ang mga hard inquiries (credit checks mula sa mga aplikasyon) ay karaniwang nananatili sa iyong credit report ng 3 taon. Hindi tulad ng mga late payments, ang kanilang epekto sa iyong score ay karaniwang maliit (5-10 puntos) at pansamantala." }
            ]
          },
          zh: {
            headline: "信用申请产生的硬查询",
            contentBreakdown: [
              { type: "text", content: "每次你申请信用时，贷款人都会在你的信用报告上进行'硬查询'。这会让你的分数下降5-10点，并在加拿大报告上保留3年。短期内（14-45天）针对同类信用（如房贷比较）的多次硬查询通常只算作一次查询。" },
              { type: "example", title: "寻找汽车贷款", content: "John在3周内拜访了5家经销商，每一家都查询了他的信用。因为这些都是短期内汽车贷款查询，在他的报告上只算作一次查询。然而，如果他在那段时间还申请了3张信用卡，那些会是单独的查询，可能会让他的分数下降15-30点。" },
              { type: "quickQuestion", question: "硬查询通常在加拿大信用报告上保留多久？", options: ["6个月", "1年", "3年", "6年"], correct: 2, explanation: "在加拿大，硬查询（申请产生的信用检查）通常在信用报告上保留3年。与逾期付款不同，它们对分数的影响通常较小（5-10点）且是暂时的。" }
            ]
          },
          ar: {
            headline: "الاستفسارات الصعبة من طلبات الائتمان",
            contentBreakdown: [
              { type: "text", content: "في كل مرة تتقدم بطلب للحصول على ائتمان، يقوم المُقرض بإجراء 'استفسار صعب' على تقريرك الائتماني. قد يخفض هذا تقييمك بمقدار 5-10 نقاط ويبقى في تقريرك لمدة 3 سنوات في كندا. الاستفسارات الصعبة المتعددة خلال فترة قصيرة (14-45 يومًا) لنفس نوع الائتمان (مثل التسوق للرهن العقاري) تحسب عادةً كاستفسار واحد." },
              { type: "example", title: "التسوق لقرض سيارة", content: "زار جون 5 وكالات خلال 3 أسابيع، وقام كل منهم بفحص ائتمانه. لأن هذه كانت جميعها استفسارات قروض سيارات خلال فترة قصيرة، تم احتسابها كاستفسار واحد في تقريره. ومع ذلك، إذا تقدم أيضًا بطلبات لـ 3 بطاقات ائتمان خلال ذلك الوقت، فستكون تلك استفسارات منفصلة، مما قد يخفض تقييمه بمقدار 15-30 نقطة." },
              { type: "quickQuestion", question: "كم من الوقت تبقى الاستفسار الصعب عادةً في تقريرك الائتماني الكندي؟", options: ["6 أشهر", "سنة واحدة", "3 سنوات", "6 سنوات"], correct: 2, explanation: "في كندا، الاستفسارات الصعبة (فحوصات الائتمان من التطبيقات) تبقى عادةً في تقريرك الائتماني لمدة 3 سنوات. على عكس الدفعات المتأخرة، تأثيرها على تقييمك عادةً صغير (5-10 نقاط) ومؤقت." }
            ]
          },
          fr: {
            headline: "Demandes de renseignements difficiles des demandes de crédit",
            contentBreakdown: [
              { type: "text", content: "Chaque fois que vous demandez du crédit, le prêteur effectue une 'demande de renseignements difficile' sur votre rapport de crédit. Cela peut baisser votre score de 5-10 points et rester sur votre rapport pendant 3 ans au Canada. Les demandes multiples dans une courte période (14-45 jours) pour le même type de crédit (comme les achats hypothécaires) comptent généralement comme une seule demande." },
              { type: "example", title: "Shopping pour un prêt auto", content: "John a visité 5 concessionnaires sur 3 semaines, et chacun a vérifié son crédit. Parce que ceux-ci étaient tous des demandes de prêts auto dans une courte période, ils ont compté comme une seule demande sur son rapport. Cependant, s'il a également demandé 3 cartes de crédit pendant ce temps, celles-ci seraient des demandes séparées, potentiellement faisant baisser son score de 15-30 points." },
              { type: "quickQuestion", question: "Combien de temps une demande de renseignements difficile reste-t-elle généralement sur votre rapport de crédit canadien ?", options: ["6 mois", "1 an", "3 ans", "6 ans"], correct: 2, explanation: "Au Canada, les demandes difficiles (vérifications de crédit des demandes) restent généralement sur votre rapport de crédit pendant 3 ans. Contrairement aux paiements en retard, leur impact sur votre score est généralement faible (5-10 points) et temporaire." }
            ]
          },
          pa: {
            headline: "Credit applications toh hard inquiries",
            contentBreakdown: [
              { type: "text", content: "Jadon vi tusi credit apply karde ho, lender tuhadi credit report te 'hard inquiry' karda hai. Yeh tuhada score 5-10 points ghata sakda hai ate Canada vich 3 saal tak report te rehnda hai. Chhote period (14-45 din) vich same type de credit lai multiple hard inquiries (jaise mortgage shopping) usually ek inquiry count hunde han." },
              { type: "example", title: "Car loan lai shopping", content: "John ne 3 haftiyan vich 5 dealerships visit kite, ate har kisi ne usda credit check kitta. Kyonki yeh sab short period vich auto loan inquiries san, yeh usdi report te ek inquiry count hoe. Par agar usne usi time 3 credit cards vi apply kite, ta oh alag inquiries hongian, potentially usda score 15-30 points ghatt sakda hai." },
              { type: "quickQuestion", question: "Hard inquiry typically kinne samay tak Canadian credit report te rehndi hai?", options: ["6 mahine", "1 saal", "3 saal", "6 saal"], correct: 2, explanation: "Canada vich, hard inquiries (applications toh credit checks) typically 3 saal tak credit report te rehndian han. Late payments vangu nahi, inna da impact usually chhota (5-10 points) ate temporary honda hai." }
            ]
          }
        }
      },
      {
        type: "concept",
        content: {
          en: {
            headline: "Understanding negative items on your report",
            contentBreakdown: [
              { type: "text", content: "Different negative items hurt your score for different lengths of time. Collections (unpaid debts sold to agencies) and charge-offs (debts written off by lenders) are severe and stay for 6 years. Bankruptcies stay for 6-7 years depending on the type. Judgments and liens also stay for 6 years. Even after these fall off, rebuilding takes time." },
              { type: "example", title: "Collections impact example", content: "Maria had a $200 medical bill she didn't know about. It went to collections and appeared on her credit report. Her score dropped from 700 to 620. Even after paying the collection agency, the 'paid collection' mark stayed for the full 6 years, though its impact gradually lessened. Had she addressed it within 30 days of the first notice, she might have prevented it from appearing at all." },
              { type: "quickQuestion", question: "How long does a bankruptcy typically stay on your Canadian credit report?", options: ["3 years", "6-7 years", "10 years", "15 years"], correct: 1, explanation: "In Canada, a first bankruptcy stays on your credit report for 6 years from the date of discharge, or 7 years in some provinces. A second bankruptcy stays for 14 years. This is longer than in the US, making bankruptcy a serious decision in Canada." }
            ]
          },
          es: {
            headline: "Entendiendo los artículos negativos en tu reporte",
            contentBreakdown: [
              { type: "text", content: "Diferentes artículos negativos dañan tu puntuación por diferentes períodos de tiempo. Las colecciones (deudas no pagadas vendidas a agencias) y los cargos cancelados (deudas escritas por los prestamistas) son severos y permanecen por 6 años. Las bancarrotas permanecen por 6-7 años dependiendo del tipo. Los juicios y gravámenes también permanecen por 6 años. Incluso después de que estos desaparezcan, la reconstrucción toma tiempo." },
              { type: "example", title: "Ejemplo de impacto de cobranzas", content: "María tenía una factura médica de $200 que no sabía. Fue a cobranzas y apareció en su reporte de crédito. Su puntuación bajó de 700 a 620. Incluso después de pagar a la agencia de cobranzas, la marca de 'cobranza pagada' permaneció por los 6 años completos, aunque su impacto disminuyó gradualmente. Si hubiera la atendido dentro de 30 días del primer aviso, podría haberla evitado que apareciera en absoluto." },
              { type: "quickQuestion", question: "¿Cuánto tiempo permanece típicamente una bancarrota en tu reporte de crédito canadiense?", options: ["3 años", "6-7 años", "10 años", "15 años"], correct: 1, explanation: "En Canadá, una primera bancarrota permanece en tu reporte de crédito por 6 años desde la fecha de descargo, o 7 años en algunas provincias. Una segunda bancarrota permanece por 14 años. Esto es más largo que en EE.UU., haciendo de la bancarrota una decisión seria en Canadá." }
            ]
          },
          hi: {
            headline: "Report par negative items samajhna",
            contentBreakdown: [
              { type: "text", content: "Alag negative items alag samay ke liye aapke score ko hurt karte hain. Collections (unpaid debts jo agencies ko bech diye gaye) aur charge-offs (jo lenders ne write off kar diye) severe hain aur 6 saal tak rehte hain. Bankruptcies type ke hisaab se 6-7 saal tak rehti hain. Judgments aur liens bhi 6 saal tak rehte hain. Inke hatne ke baad bhi, rebuilding mein time lagta hai." },
              { type: "example", title: "Collections impact example", content: "Maria ke paas ek $200 ka medical bill tha jiske baare mein unhe pata nahi tha. Yeh collections mein chala gaya aur unki credit report par aa gaya. Unka score 700 se 620 ho gaya. Collection agency ko pay karne ke baad bhi, 'paid collection' mark poora 6 saal tak reha, jiska asar dheere-dheere kam hota gaya. Agar wah pehle notice ke 30 din mein isse address kar leti, toh shayad yeh report par aata hi nahi." },
              { type: "quickQuestion", question: "Bankruptcy typically kitne samay tak Canadian credit report par rehti hai?", options: ["3 saal", "6-7 saal", "10 saal", "15 saal"], correct: 1, explanation: "Canada mein, pehli bankruptcy discharge ki date se 6 saal tak credit report par rehti hai, ya kuch provinces mein 7 saal. Doosri bankruptcy 14 saal tak rehti hai. Yeh US se zyada hai, jisse Canada mein bankruptcy ek gambhir decision ban jaata hai." }
            ]
          },
          tl: {
            headline: "Pag-unawa sa mga negatibong item sa iyong report",
            contentBreakdown: [
              { type: "text", content: "Ang iba't ibang negatibong item ay nakakasama sa iyong score sa iba't ibang haba ng panahon. Ang mga koleksyon (hindi nabayarang utang na ipinagbili sa mga ahensya) at mga charge-off (utang na isinulat ng mga lenders) ay malubha at mananatili ng 6 na taon. Ang mga pagkabankrupt ay mananatili ng 6-7 na taon depende sa uri. Ang mga hatol at lien ay mananatili rin ng 6 na taon. Kahit na matanggal na ang mga ito, ang pagbangon ay tumatagal ng oras." },
              { type: "example", title: "Halimbawa ng epekto ng mga koleksyon", content: "Si Maria ay mayroong $200 na medical bill na hindi niya alam. Napunta ito sa koleksyon at lumabas sa kanyang credit report. Bumaba ang kanyang score mula 700 hanggang 620. Kahit na bayaran niya ang ahensya ng koleksyon, ang marka ng 'bayad na koleksyon' ay nanatili sa buong 6 na taon, bagama't ang epekto nito ay unti-unting humina. Kung na-address niya ito sa loob ng 30 araw mula sa unang abiso, maaari niyang na-prevent na lumabas ito sa lahat." },
              { type: "quickQuestion", question: "Gaano katagal karaniwang nananatili ang pagkabankrupt sa iyong Canadian credit report?", options: ["3 taon", "6-7 na taon", "10 taon", "15 taon"], correct: 1, explanation: "Sa Canada, ang unang pagkabankrupt ay nananatili sa iyong credit report ng 6 na taon mula sa petsa ng discharge, o 7 na taon sa ilang mga lalawigan. Ang ikalawang pagkabankrupt ay nananatili ng 14 na taon. Mas mahaba ito kaysa sa US, ginagawang seryosong desisyon ang pagkabankrupt sa Canada." }
            ]
          },
          zh: {
            headline: "了解报告上的负面项目",
            contentBreakdown: [
              { type: "text", content: "不同的负面项目会在不同时间内伤害你的分数。催收（被卖给机构的未付债务）和销账（被贷款人注销的债务）很严重，会保留6年。破产根据类型保留6-7年。判决和留置权也保留6年。即使这些被移除，重建也需要时间。" },
              { type: "example", title: "催收影响示例", content: "Maria有一笔$200的医疗账单她不知道。它进入催收并出现在她的信用报告上。她的分数从700降到620。即使付给了催收机构，'已付催收'标记仍保留整整6年，尽管其影响逐渐减轻。如果她在首次通知后30天内处理，也许能完全防止它出现。" },
              { type: "quickQuestion", question: "破产通常在加拿大信用报告上保留多久？", options: ["3年", "6-7年", "10年", "15年"], correct: 1, explanation: "在加拿大，第一次破产从解除日期起在信用报告上保留6年，某些省份为7年。第二次破产保留14年。这比美国长，使破产在加拿大成为一个严肃的决定。" }
            ]
          },
          ar: {
            headline: "فهم البنود السلبية في تقريرك",
            contentBreakdown: [
              { type: "text", content: "البنود السلبية المختلفة تضر بتقييمك لمدد زمنية مختلفة. المجموعات (الديون غير المدفوعة المباعة للوكالات) والخصومات المشحونة (الديون التي تم شطبها من قبل المقرضين) شديدة وتبقى لمدة 6 سنوات. الإفلاسات تبقى لمدة 6-7 سنوات حسب النوع. الأحكام وال امتلاكات أيضًا تبقى لمدة 6 سنوات. حتى بعد سقوط هذه، يستغرق إعادة البناء وقتًا." },
              { type: "example", title: "مثال على تأثير المجموعات", content: "كانت ماريا تمتلك فاتورة طبية بقيمة 200 دولار لم تكن تعلم بها. ذهبت إلى المجموعات وظهرت في تقريرها الائتماني. انخفض تقييمها من 700 إلى 620. حتى بعد دفع وكالة المجموعات، بقيت علامة 'المجموعة المدفوعة' للسنوات الست الكاملة، على الرغم من أن تأثيرها تضاءل تدريجيًا. لو تعاملت معها خلال 30 يومًا من الإشعار الأول، ربما كانت منعتها من الظهور على الإطلاق." },
              { type: "quickQuestion", question: "كم من الوقت يبقى الإفلاس عادةً في تقريرك الائتماني الكندي؟", options: ["3 سنوات", "6-7 سنوات", "10 سنوات", "15 سنة"], correct: 1, explanation: "في كندا، يبقى الإفلاس الأول في تقريرك الائتماني لمدة 6 سنوات من تاريخ التفريغ، أو 7 سنوات في بعض المقاطعات. يبقى الإفلاس الثاني لمدة 14 سنة. هذا أطول من الولايات المتحدة، مما يجعل الإفلاس قرارًا جادًا في كندا." }
            ]
          },
          fr: {
            headline: "Comprendre les éléments négatifs sur votre rapport",
            contentBreakdown: [
              { type: "text", content: "Différents éléments négatifs nuisent à votre score pendant différentes durées. Les collections (dettes impayées vendues à des agences) et les charges déductibles (dettes rayées par les prêteurs) sont graves et restent pendant 6 ans. Les faillites restent pendant 6-7 ans selon le type. Les jugements et privilèges restent aussi 6 ans. Même après leur disparition, la reconstruction prend du temps." },
              { type: "example", title: "Exemple d'impact des collections", content: "Maria avait une facture médicale de 200 $ dont elle ne savait rien. Elle est allée en collection et est apparue sur son rapport de crédit. Son score est tombé de 700 à 620. Même après avoir payé l'agence de recouvrement, la marque 'collection payée' est restée pendant les 6 années complètes, bien que son impact ait progressivement diminué. Si elle l'avait traitée dans les 30 jours suivant le premier avis, elle aurait pu l'empêcher d'apparaître du tout." },
              { type: "quickQuestion", question: "Combien de temps une faillite reste-t-elle généralement sur votre rapport de crédit canadien ?", options: ["3 ans", "6-7 ans", "10 ans", "15 ans"], correct: 1, explanation: "Au Canada, une première faillite reste sur votre rapport de crédit pendant 6 ans à partir de la date de la décharge, ou 7 ans dans certaines provinces. Une deuxième faillite reste pendant 14 ans. C'est plus long qu'aux États-Unis, faisant de la faillite une décision sérieuse au Canada." }
            ]
          },
          pa: {
            headline: "Report te negative items samajhna",
            contentBreakdown: [
              { type: "text", content: "Alag negative items alag samay lai tuhade score nu hurt karde han. Collections (unpaid debts jo agencies nu bech dite gaye) ate charge-offs (jo lenders ne write off kar dite) severe han ate 6 saal tak rehnde han. Bankruptcies type de hisaab naal 6-7 saal tak rehndian han. Judgments ate liens vi 6 saal tak rehnde han. Inna de hatan toh baad vi, rebuilding vich time lagda hai." },
              { type: "example", title: "Collections impact example", content: "Maria kol ik $200 da medical bill si jis bare usnu pata nahi si. Yeh collections vich chala gaya ate usdi credit report te aa gaya. Udda score 700 to 620 ho gaya. Collection agency nu pay karan toh baad vi, 'paid collection' mark poora 6 saal tak reha, jisda asar dheere-dheere ghatta. Agar usne pehle notice de 30 din vich iss nu address kar liya hunda, ta shayad yeh report te aunda hi nahi." },
              { type: "quickQuestion", question: "Bankruptcy typically kinne samay tak Canadian credit report te rehndi hai?", options: ["3 saal", "6-7 saal", "10 saal", "15 saal"], correct: 1, explanation: "Canada vich, pehli bankruptcy discharge di date toh 6 saal tak credit report te rehndi hai, ya kuch provinces vich 7 saal. Dooji bankruptcy 14 saal tak rehndi hai. Yeh US toh zyada hai, jisse Canada vich bankruptcy ek gambhir decision ban janda hai." }
            ]
          }
        }
      },
      {
        type: "concept",
        content: {
          en: {
            headline: "Rebuilding your credit score",
            contentBreakdown: [
              { type: "text", content: "The good news: credit scores can recover! Start by addressing any errors on your report, then focus on consistent on-time payments going forward. Set up automatic payments to never miss due dates. Keep credit utilization under 30%. Consider a secured credit card if you need to rebuild. Most negative items lose impact after 2 years, even if they stay on your report longer." },
              { type: "example", title: "Rebuilding success story", content: "After a job loss, David's score dropped to 580 due to missed payments. He got a secured card with a $500 limit, used it for small purchases, and paid in full monthly. He set up autopay for all bills. After 12 months of perfect payments, his score climbed to 650. After 24 months, he qualified for a regular credit card with better terms. Patience and consistency were key." },
              { type: "quickQuestion", question: "What's the most important action for rebuilding credit?", options: ["Closing old accounts", "Making all payments on time going forward", "Disputing all negative items", "Opening many new accounts"], correct: 1, explanation: "While disputing errors is important, consistent on-time payments going forward is the single most impactful action. Payment history is 35% of your score, and each month of on-time payments helps rebuild your creditworthiness. New accounts temporarily hurt your score through hard inquiries and reduced average account age." }
            ]
          },
          es: {
            headline: "Reconstruyendo tu puntuación de crédito",
            contentBreakdown: [
              { type: "text", content: "Las buenas noticias: ¡las puntuaciones de crédito pueden recuperarse! Comienza abordando cualquier error en tu reporte, luego enfócate en pagos consistentes a tiempo de ahora en adelante. Configura pagos automáticos para nunca perder fechas de vencimiento. Mantén la utilización del crédito bajo 30%. Considera una tarjeta de crédito asegurada si necesitas reconstruir. La mayoría de los artículos negativos pierden impacto después de 2 años, incluso si permanecen en tu reporte por más tiempo." },
              { type: "example", title: "Historia de éxito de reconstrucción", content: "Después de perder su empleo, la puntuación de David bajó a 580 debido a pagos omitidos. Obtuvo una tarjeta asegurada con un límite de $500, la usó para compras pequeñas, y pagó el total mensualmente. Configuró pagos automáticos para todas las facturas. Después de 12 meses de pagos perfectos, su puntuación subió a 650. Después de 24 meses, calificó para una tarjeta de crédito regular con mejores términos. La paciencia y consistencia fueron clave." },
              { type: "quickQuestion", question: "¿Cuál es la acción más importante para reconstruir crédito?", options: ["Cerrar cuentas antiguas", "Hacer todos los pagos a tiempo de ahora en adelante", "Disputar todos los artículos negativos", "Abrir muchas cuentas nuevas"], correct: 1, explanation: "Aunque disputar errores es importante, hacer pagos consistentes a tiempo de ahora en adelante es la acción más impactante. El historial de pagos es el 35% de tu puntuación, y cada mes de pagos a tiempo ayuda a reconstruir tu solvencia crediticia. Las nuevas cuentas dañan temporalmente tu puntuación a través de consultas difíciles y edad promedio de cuenta reducida." }
            ]
          },
          hi: {
            headline: "Apna credit score dobara banana",
            contentBreakdown: [
              { type: "text", content: "Achhi khabar: credit scores recover ho sakte hain! Shuru karein apni report par koi galti theek karke, phir consistent on-time payments par focus karein. Automatic payments set up karein taaki due dates miss na ho. Credit utilization 30% se kam rakhein. Agar rebuild karna hai toh secured credit card sochiye. Zyadatar negative items 2 saal ke baad impact kho dete hain, chahe report par zyada samay tak rahein." },
              { type: "example", title: "Rebuilding success story", content: "Job loss ke baad, David ka score missed payments ke kaaran 580 ho gaya. Usne $500 limit ke saath ek secured card liya, chhoti kharidari ke liye use kiya, aur monthly full pay kiya. Usne sab bills ke liye autopay set up kiya. 12 mahine perfect payments ke baad, uska score 650 tak pahunch gaya. 24 mahine ke baad, usne behtar terms ke saath regular credit card ke liye qualify kiya. Sabar aur consistency zaroori thi." },
              { type: "quickQuestion", question: "Credit rebuild karne ke liye sabse important action kya hai?", options: ["Purane accounts band karna", "Aage se sab payments time par karna", "Sab negative items dispute karna", "Bahut saare naye accounts kholna"], correct: 1, explanation: "Galtiyan dispute karna important hai par consistent on-time payments aage se sabse impactful action hai. Payment history aapke score ka 35% hai, aur har mahine on-time payments aapki creditworthiness rebuild karne mein madad karta hai. Naye accounts temporarily hard inquiries aur kam average account age ke through score hurt karte hain." }
            ]
          },
          tl: {
            headline: "Pagbangon ng iyong credit score",
            contentBreakdown: [
              { type: "text", content: "Ang magandang balita: ang mga credit score ay maaaring bumangon! Magsimula sa pag-address ng anumang errors sa iyong report, pagkatapos ay mag-focus sa consistent on-time payments going forward. Mag-set up ng automatic payments para hindi makalimutan ang mga due date. Panatilihing ang paggamit ng credit sa ilalim ng 30%. Isaalang-alang ang secured credit card kung kailangan mong mag-rebuild. Karamihan sa mga negatibong item ay nawawalan ng epekto pagkatapos ng 2 taon, kahit na manatili sila sa iyong report nang mas matagal." },
              { type: "example", title: "Kwento ng tagumpay sa pagbangon", content: "Pagkatapos mawalan ng trabaho, ang score ni David ay bumaba sa 580 dahil sa mga missed payments. Kumuha siya ng secured card na may $500 limit, ginamit ito para sa maliliit na pagbili, at nagbayad ng buo monthly. Nag-set up siya ng autopay para sa lahat ng bills. Pagkatapos ng 12 buwan ng perpektong mga pagbabayad, umakyat ang kanyang score sa 650. Pagkatapos ng 24 na buwan, qualified siya para sa regular na credit card na may mas magandang terms. Ang pasensya at pagiging consistent ang susi." },
              { type: "quickQuestion", question: "Ano ang pinakamahalagang aksyon para sa pagbangon ng credit?", options: ["Pagsara ng mga lumang account", "Paggawa ng lahat ng pagbabayad sa oras going forward", "Pagtutol sa lahat ng negatibong item", "Pagbukas ng maraming bagong account"], correct: 1, explanation: "Bagama't mahalaga ang pagtutol sa mga errors, ang consistent on-time payments going forward ay ang pinakamakabuluhang aksyon. Ang payment history ay 35% ng iyong score, at bawat buwan ng on-time payments ay tumutulong sa pagbangon ng iyong creditworthiness. Ang mga bagong account ay pansamantalang nakakasama sa iyong score sa pamamagitan ng mga hard inquiries at binawasan na average account age." }
            ]
          },
          zh: {
            headline: "重建你的信用分数",
            contentBreakdown: [
              { type: "text", content: "好消息：信用分数可以恢复！首先处理报告上的任何错误，然后专注于今后持续的按时付款。设置自动付款以确保不会错过到期日。保持信用利用率在30%以下。如果你需要重建，考虑申请担保信用卡。大多数负面项目在2年后失去影响，即使它们在报告上保留更长时间。" },
              { type: "example", title: "重建成功案例", content: "失业后，David因漏付账单分数降到580。他申请了一张$500额度的担保卡，用于小额购物，并每月全额还款。他为所有账单设置了自动付款。12个月完美付款后，他的分数上升到650。24个月后，他有资格获得条款更好的普通信用卡。耐心和坚持是关键。" },
              { type: "quickQuestion", question: "重建信用最重要的行动是什么？", options: ["关闭旧账户", "今后按时支付所有账单", "对所有负面项目提出异议", "开设许多新账户"], correct: 1, explanation: "虽然对错误提出异议很重要，但今后持续按时付款是最有影响力的行动。付款历史占你分数的35%，每个月按时付款都有助于重建你的信用度。新账户会通过硬查询和降低平均账户年龄暂时伤害你的分数。" }
            ]
          },
          ar: {
            headline: "إعادة بناء تقييمك الائتماني",
            contentBreakdown: [
              { type: "text", content: "الأخبار السارة: يمكن للتقييمات الائتمانية أن تتعافى! ابدأ بمعالجة أي أخطاء في تقريرك، ثم ركز على الدفعات المتسقة في الوقت المحدد من الآن فصاعدًا. أجرِ إعدادات للدفعات التلقائية حتى لا تفوت مواعيد الاستحقاق أبدًا. حافظ على استخدام الائتمان تحت 30%. فكر في بطاقة ائتمان مضمونة إذا كنت بحاجة لإعادة البناء. معظم البنود السلبية تفقد تأثيرها بعد 2 سنة، حتى لو بقيت في تقريرك لفترة أطول." },
              { type: "example", title: "قصة نجاح في إعادة البناء", content: "بعد فقدان الوظيفة، انخفض تقييم ديفيد إلى 580 بسبب الدفعات المتأخرة. حصل على بطاقة مضمونة بحد 500 دولار، استخدمها للمشتريات الصغيرة، ودفع المبلغ كاملًا شهريًا. أجرَ إعدادات للدفع التلقائي لجميع الفواتير. بعد 12 شهرًا من الدفعات المثالية، تسلق تقييمه إلى 650. بعد 24 شهرًا، تأهل لبطاقة ائتمان عادية بشروط أفضل. الصبر والاتساق كانا المفتاح." },
              { type: "quickQuestion", question: "ما هي أهم خطوة لإعادة بناء الائتمان؟", options: ["إغلاق الحسابات القديمة", "إجراء جميع الدفعات في الوقت المحدد من الآن فصاعدًا", "الاعتراض على جميع البنود السلبية", "فتح العديد من الحسابات الجديدة"], correct: 1, explanation: "على الرغم من أن الاعتراض على الأخطاء مهم، فإن الدفعات المتسقة في الوقت المحدد من الآن فصاعدًا هي الخطوة الأكثر تأثيرًا. سجل الدفعات هو 35% من تقييمك، وكل شهر من الدفعات في الوقت المحدد يساعد في إعادة بناء موثوقيتك الائتمانية. الحسابات الجديدة تؤذي تقييمك مؤقتًا من خلال الاستفسارات الصعبة وتقليل متوسط عمر الحساب." }
            ]
          },
          fr: {
            headline: "Reconstruction de votre pointage de crédit",
            contentBreakdown: [
              { type: "text", content: "Les bonnes nouvelles : les scores de crédit peuvent se rétablir ! Commencez par traiter toutes les erreurs sur votre rapport, puis concentrez-vous sur les paiements ponctuels et cohérents à l'avenir. Configurez des paiements automatiques pour ne jamais manquer les dates d'échéance. Gardez l'utilisation du crédit sous 30%. Envisagez une carte de crédit sécurisée si vous avez besoin de reconstruire. La plupart des éléments négatifs perdent de leur impact après 2 ans, même s'ils restent sur votre rapport plus longtemps." },
              { type: "example", title: "Histoire de réussite de reconstruction", content: "Après une perte d'emploi, le score de David est tombé à 580 en raison de paiements manqués. Il a obtenu une carte sécurisée avec une limite de 500 $, l'a utilisée pour de petits achats, et a payé en entier chaque mois. Il a configuré des prélèvements automatiques pour toutes les factures. Après 12 mois de paiements parfaits, son score est remonté à 650. Après 24 mois, il a été admissible à une carte de crédit ordinaire avec de meilleures conditions. La patience et la cohérence étaient essentielles." },
              { type: "quickQuestion", question: "Quelle est l'action la plus importante pour reconstruire son crédit ?", options: ["Fermer les anciens comptes", "Effectuer tous les paiements à temps à l'avenir", "Contester tous les éléments négatifs", "Ouvrir de nombreux nouveaux comptes"], correct: 1, explanation: "Bien que contester les erreurs soit important, les paiements ponctuels et cohérents à l'avenir constituent l'action la plus impactante. L'historique des paiements représente 35% de votre score, et chaque mois de paiements à temps aide à reconstruire votre solvabilité. Les nouveaux comptes nuisent temporairement à votre score via des demandes difficiles et une durée moyenne de compte réduite." }
            ]
          },
          pa: {
            headline: "Apna credit score dobara banana",
            contentBreakdown: [
              { type: "text", content: "Changi khabar: credit scores recover ho sakde han! Shuru karo apni report te koi galti theek karke, phir consistent on-time payments te focus karo. Automatic payments set up karo taan ke due dates miss na hovan. Credit utilization 30% toh kam rakho. Agar rebuild karna hai taan secured credit card vicharo. Zyadatar negative items 2 saal toh baad impact kho dinde han, chahe report te zyada samay tak rahein." },
              { type: "example", title: "Rebuilding safal kahani", content: "Job loss toh baad, David da score missed payments de kaaran 580 ho gaya. Usne $500 limit naal ik secured card li, chhoti kharidari lai use kiti, ate monthly full pay kitta. Usne sab bills lai autopay set up kitta. 12 mahine perfect payments toh baad, usda score 650 tak pahunch gaya. 24 mahine toh baad, usne changian terms naal regular credit card lai qualify kitta. Sabar ate consistency zaroori si." },
              { type: "quickQuestion", question: "Credit rebuild lai sab toh important action ki hai?", options: ["Purane accounts band karna", "Aggon sab payments time te karna", "Sab negative items dispute karna", "Bahut saare nave accounts kholna"], correct: 1, explanation: "Galtiyan dispute karna important hai par consistent on-time payments aggON sab toh impactful action hai. Payment history tuhade score da 35% hai, ate har mahine on-time payments tuhadi creditworthiness rebuild karne vich madad karda hai. Nave accounts temporarily hard inquiries ate ghat average account age rahi score nu hurt karde han." }
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
