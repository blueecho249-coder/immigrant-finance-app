/**
 * Financial literacy lessons for newcomers to Canada and the US.
 * quiz.correctIndex is 0 or 1, matching quiz.options order.
 */

export const lessons = [
  {
    id: "building-credit",
    title: {
      en: "Building credit from zero",
      es: "Construir crédito desde cero",
      hi: "शून्य से क्रेडिट बनाना",
      tl: "Pagbuo ng mula sa zero",
      zh: "从零开始建立信用",
      ar: "بناء الائتمان من الصفر",
      fr: "Construire son crédit à partir de zéro",
      pa: "ਜ਼ੀਰੋ ਤੋਂ ਕ੍ਰੈਡਿਟ ਬਣਾਉਣਾ"
    },
    subtitle: {
      en: "How scores work and the habits that grow them",
      es: "Cómo funcionan las puntuaciones y los hábitos que las hacen crecer",
      hi: "स्कोर कैसे काम करते हैं और उन्हें बढ़ाने वाली आदतें",
      tl: "Kung paano gumana ang mga score at mga kaugalian na tumutulong sa paglago",
      zh: "分数如何运作以及培养良好习惯",
      ar: "كيف تعمل الدرجات والعادات التي تنميها",
      fr: "Comment fonctionnent les scores et les habitudes qui les font grandir",
      pa: "ਸਕੋਰ ਕਿਵੇਂ ਕੰਮ ਕਰਦੇ ਹਨ ਅਤੇ ਉਹਨਾਂ ਨੂੰ ਵਧਾਉਣ ਵਾਲੀਆਂ ਆਦਤਾਂ"
    },
    category: "Credit",
    content: {
      en: [
        "In Canada and the US, a credit score is a number lenders use to see how reliably you repay borrowed money. You are not born with a score—you build it over time by using credit responsibly, like paying a credit card or loan on time.",
        "Starting with a secured card or a small credit limit, keeping balances low, and never missing a payment helps your score grow. Patience matters: most people need several months of good history before their score reflects strong credit habits."
      ],
      es: [
        "En Canadá y EE. UU., una puntuación de crédito es un número que los prestamistas usan para ver qué tan confiablemente pagas dinero prestado. No naces con una puntuación—la construyes con el tiempo usando crédito responsablemente, como pagar una tarjeta de crédito o préstamo a tiempo.",
        "Comenzar con una tarjeta asegurada o un límite de crédito pequeño, mantener saldos bajos y nunca perder un pago ayuda a que tu puntuación crezca. La paciencia importa: la mayoría necesita varios meses de buen historial antes de que su puntuación refleje hábitos crediticios fuertes."
      ],
      hi: [
        "कनाडा और यूएस में, क्रेडिट स्कोर एक संख्या है जिसका उपयोग लेंडर्स यह देखने के लिए करते हैं कि आप कितनी विश्वसनीय रूप से उधार लिए गए पैसे चुकाते हैं। आप स्कोर के साथ पैदा नहीं होते—आप समय के साथ क्रेडिट का जिम्मेदारी से उपयोग करके इसे बनाते हैं, जैसे क्रेडिट कार्ड या ऋण को समय पर चुकाना।",
        "सिक्योर्ड कार्ड या छोटी क्रेडिट सीमा से शुरू करना, बैलेंस को कम रखना, और कभी भी भुगतान नहीं छोड़ना आपके स्कोर को बढ़ने में मदद करता है। धीरज मायने रखती है: ज्यादातर लोगों को कई महीनों के अच्छे इतिहास की आवश्यकता होती है इससे पहले कि उनका स्कोर मजबूत क्रेडिट आदतों को दर्शाए।"
      ],
      tl: [
        "Sa Canada at US, ang credit score ay isang numero na ginagamit ng mga lender upang makita kung gaano k reliable ang pagbabayad mo ng borrowed money. Hindi ka ipinanganak na may score—binubuo mo ito sa paglipas ng panahon sa pamamagitan ng paggamit ng credit nang responsable, tulad ng pagbabayad ng credit card o loan on time.",
        "Pagsisimula sa secured card o maliit na credit limit, pananatilihin ang mga mababang balance, at hindi kailanman miss ng payment ay tumutulong sa paglago ng iyong score. Mahalaga ang patience: karamihan sa mga tao ay kailangan ng ilang buwan ng magandang kasaysayan bago ang kanilang score ay sumasalamin sa malakas na credit habits."
      ],
      zh: [
        "在加拿大和美国，信用评分是贷款机构用来查看您如何可靠地偿还借款资金的数字。您不是天生就有评分——您通过负责任地使用信贷来逐步建立，比如按时支付信用卡或贷款。",
        "从担保卡或小额信用额度开始，保持余额较低，从不错过付款，有助于您的评分增长。耐心很重要：大多数人需要几个月的良好历史记录，他们的评分才能反映出强烈的信贷习惯。"
      ],
      ar: [
        "في كندا والولايات المتحدة، درجة الائتمان هو رقم يستخدمه المقرضون لرؤية مدى موثوقيتك في سداد الأموال المقترضة. لست مولودًا بدرجة—you تبنيها بمرور الوقت باستخدام الائتمان بشكل مسؤول، مثل دفع بطاقة ائتمان أو قرض في الوقت المحدد.",
        "البدء ببطاقة مؤمنة أو حد ائتماني صغير، الحفاظ على رصيد منخفض، وعدم تفويت الدفعة يساعد درجتك على النمو. الصبر مهم: معظم الناس يحتاجون إلى عدة أشهر من التاريخ الجيد قبل أن تعكس درجتهم عادات ائتمان قوية."
      ],
      fr: [
        "Au Canada et aux États-Unis, un score de crédit est un nombre que les prêteurs utilisent pour voir à quel point vous remboursez de manière fiable l'argent emprunté. Vous ne naissez pas avec un score—you le construisez au fil du temps en utilisant le crédit de manière responsable, comme payer une carte de crédit ou un prêt à temps.",
        "Commencer avec une carte sécurisée ou une petite limite de crédit, maintenir les soldes bas, et ne jamais manquer un paiement aide votre score à croître. La patience compte : la plupart des gens ont besoin de plusieurs mois de bon historique avant que leur score ne reflète des habitudes de crédit solides."
      ],
      pa: [
        "ਕੈਨੇਡਾ ਅਤੇ ਯੂਐਸ ਵਿੱਚ, ਕ੍ਰੈਡਿਟ ਸਕੋਰ ਇੱਕ ਨੰਬਰ ਹੈ ਜਿਸਦੀ ਵਰਤੋਂ ਲੈਂਡਰਸ ਇਹ ਦੇਖਣ ਲਈ ਕਰਦੇ ਹਨ ਕਿ ਤੁਸੀਂ ਉਧਾਰ ਲਏ ਪੈਸੇ ਕਿੰਨੀ ਭਰੋਸੇਮੰਦ ਨਾਲ ਵਾਪਸ ਕਰਦੇ ਹੋ। ਤੁਸੀਂ ਸਕੋਰ ਨਾਲ ਪੈਦਾ ਨਹੀਂ ਹੁੰਦੇ—ਤੁਸੀਂ ਸਮੇਂ ਦੇ ਨਾਲ ਕ੍ਰੈਡਿਟ ਦੀ ਜ਼ਿੰਮੇਦਾਰੀ ਨਾਲ ਵਰਤੋਂ ਕਰਕੇ ਇਸਨੂੰ ਬਣਾਉਂਦੇ ਹੋ, ਜਿਵੇਂ ਕਿ ਕ੍ਰੈਡਿਟ ਕਾਰਡ ਜਾਂ ਕਰਜ਼ਾ ਨੂੰ ਸਮੇਂ 'ਤੇ ਚੁਕਾਉਣਾ।",
        "ਸਿਕਯੋਰਡ ਕਾਰਡ ਜਾਂ ਛੋਟੀ ਕ੍ਰੈਡਿਟ ਸੀਮਾ ਨਾਲ ਸ਼ੁਰੂ ਕਰਨਾ, ਬੈਲੇਂਸ ਨੂੰ ਘੱਟ ਰੱਖਣਾ, ਅਤੇ ਕਦੇ ਵੀ ਭੁਗਤਾਨ ਨਹੀਂ ਛੱਡਣਾ ਤੁਹਾਡੇ ਸਕੋਰ ਨੂੰ ਵਧਾਉਣ ਵਿੱਚ ਮਦਦ ਕਰਦਾ ਹੈ। ਧੀਰਜ ਮਾਇਨੇ ਰੱਖਦੀ ਹੈ: ਜ਼ਿਆਦਾਤਰ ਲੋਕਾਂ ਨੂੰ ਕਈ ਮਹੀਨਿਆਂ ਦੇ ਚੰਗੇ ਇਤਿਹਾਸ ਦੀ ਲੋੜ ਹੁੰਦੀ ਹੈ ਇਸ ਤੋਂ ਪਹਿਲਾਂ ਕਿ ਉਹਨਾਂ ਦਾ ਸਕੋਰ ਮਜ਼ਬੂਤ ਕ੍ਰੈਡਿਟ ਆਦਤਾਂ ਨੂੰ ਦਰਸਾਵੇ।"
      ]
    },
    quiz: {
      question: {
        en: "True or false: Paying your credit card balance in full and on time each month helps build a good credit history.",
        es: "Verdadero o falso: Pagar el saldo de tu tarjeta de crédito completo y a tiempo cada mes ayuda a construir un buen historial de crédito.",
        hi: "सही या गलत: हर महीने अपने क्रेडिट कार्ड बैलेंस को पूरी तरह से और समय पर चुकाना एक अच्छे क्रेडिट इतिहास के निर्माण में मदद करता है।",
        tl: "Tama o mali: Ang pagbabayad ng iyong credit card balance sa buo at on time bawat buwan ay tumutulong sa pagbuo ng isang magandang credit history.",
        zh: "对或错：每月全额按时支付信用卡余额有助于建立良好的信用记录。",
        ar: "صحيح أم خاطئ: دفع رصيد بطاقتك الائتمانية بالكامل وفي الوقت المحدد كل شهر يساعد في بناء تاريخ ائتماني جيد.",
        fr: "Vrai ou faux : Payer le solde de votre carte de crédit en totalité et à temps chaque mois aide à construire un bon historique de crédit.",
        pa: "ਸੱਚ ਜਾਂ ਝੂਠ: ਹਰ ਮਹੀਨੇ ਆਪਣੇ ਕ੍ਰੈਡਿਟ ਕਾਰਡ ਬੈਲੇਂਸ ਨੂੰ ਪੂਰੀ ਤਰ੍ਹਾਂ ਅਤੇ ਸਮੇਂ 'ਤੇ ਚੁਕਾਉਣਾ ਇੱਕ ਚੰਗੇ ਕ੍ਰੈਡਿਟ ਇਤਿਹਾਸ ਦੇ ਨਿਰਮਾਣ ਵਿੱਚ ਮਦਦ ਕਰਦਾ ਹੈ।"
      },
      options: {
        en: ["True", "False"],
        es: ["Verdadero", "Falso"],
        hi: ["सही", "गलत"],
        tl: ["Tama", "Mali"],
        zh: ["对", "错"],
        ar: ["صحيح", "خاطئ"],
        fr: ["Vrai", "Faux"],
        pa: ["ਸੱਚ", "ਝੂਠ"]
      },
      correctIndex: 0
    }
  },
  {
    id: "open-bank-account",
    title: {
      en: "How to open a bank account",
      es: "Cómo abrir una cuenta bancaria",
      hi: "बैंक खाता कैसे खोलें",
      tl: "Kung paano magbukas ng bank account",
      zh: "如何开立银行账户",
      ar: "كيفية فتح حساب بنكي",
      fr: "Comment ouvrir un compte bancaire",
      pa: "ਬੈਂਕ ਖਾਤਾ ਕਿਵੇਂ ਖੋਲ੍ਹੋ"
    },
    subtitle: {
      en: "What to bring and which account type to start with",
      es: "Qué llevar y con qué tipo de cuenta empezar",
      hi: "क्या लाना है और किस खाते प्रकार से शुरू करना है",
      tl: "Ano ang dadalhin at kung anong uri ng account ang sisimulan",
      zh: "需要带什么以及从哪种账户开始",
      ar: "ما الذي يجب إحضاره وأي نوع من الحسابات تبدأ به",
      fr: "Ce qu'il faut apporter et quel type de compte commencer",
      pa: "ਕੀ ਲਿਆਉਣਾ ਹੈ ਅਤੇ ਕਿਸ ਖਾਤੇ ਦੀ ਕਿਸਮ ਨਾਲ ਸ਼ੁਰੂ ਕਰਨਾ ਹੈ"
    },
    category: "Banking",
    content: {
      en: [
        "Banks and credit unions need to verify who you are, so you will usually bring government ID, proof of address, and immigration or work documents. Many places let you book an appointment or start online and finish in a branch.",
        "A chequing account is for everyday spending and bill payments; a savings account is for money you do not need right away and often earns a little interest. Ask about monthly fees, ways to waive them, and whether you need a US Social Security number or Canadian SIN for certain products."
      ],
      es: [
        "Los bancos y cooperativas de crédito necesitan verificar quién eres, así que generalmente traerás identificación gubernamental, comprobante de domicilio y documentos de inmigración o trabajo. Muchos lugares te permiten reservar una cita o comenzar en línea y terminar en una sucursal.",
        "Una cuenta de cheques es para gastos diarios y pagos de facturas; una cuenta de ahorros es para dinero que no necesitas de inmediato y a menudo gana un poco de interés. Pregunta sobre tarifas mensuales, formas de eximirlas, y si necesitas un número de Seguro Social de EE. UU. o SIN de Canadá para ciertos productos."
      ],
      hi: [
        "बैंक और क्रेडिट यूनियन को यह सत्यापित करने की आवश्यकता है कि आप कौन हैं, इसलिए आप आमतौर पर सरकारी पहचान, पते का प्रमाण, और आव्रजन या कार्य दस्तावेज़ लाएंगे। कई स्थानों पर आप नियुक्ति बुक कर सकते हैं या ऑनलाइन शुरू करके शाखा में समाप्त कर सकते हैं।",
        "चेकिंग खाता रोज़ के खर्च और बिल भुगतान के लिए है; बचत खाता उस पैसे के लिए है जिसे आपको तुरंत की आवश्यकता नहीं है और अक्सर थोड़ा ब्याज कमाता है। मासिक शुल्क, उन्हें माफ करने के तरीकों, और क्या आपको कुछ उत्पादों के लिए यूएस सोशल सिक्योरिटी नंबर या कनाडियन SIN की आवश्यकता है, के बारे में पूछें।"
      ],
      tl: [
        "Ang mga bangko at credit union ay kailangang i-verify kung sino ka, kaya madalas kang dadalhin ng government ID, proof of address, at immigration o work documents. Maraming lugar ang nagbibigay sa iyo na mag-book ng appointment o magsimula online at tapusin sa branch.",
        "Ang chequing account ay para sa pang-araw-araw na paggastos at pagbabayad ng bills; ang savings account ay para sa pera na hindi mo kailangan ngayon at madalas ay kumikita ng kaunting interes. Magtanong tungkol sa monthly fees, paraan para i-waive sila, at kung kailangan mo ng US Social Security number o Canadian SIN para sa ilang produkto."
      ],
      zh: [
        "银行和信用合作社需要验证您的身份，因此您通常需要携带政府身份证、地址证明和移民或工作文件。许多地方让您预约或在线开始并在分行完成。",
        "支票账户用于日常支出和账单支付；储蓄账户用于您暂时不需要的钱，通常赚取少量利息。询问月费、豁免方式，以及某些产品是否需要美国社会保障号或加拿大SIN。"
      ],
      ar: [
        "تحتاج البنوك والاتحادات الائتمانية إلى التحقق من هويتك، لذا عادة ما ستحضر هوية حكومية وإثبات عنوان ومستندات هجرة أو عمل. العديد من الأماكن تتيح لك حجز موعد أو البدء عبر الإنترنت والإنهاء في فرع.",
        "حساب الجيروت للإنفاق اليومي ودفع الفواتير؛ حساب التوفير للأموال التي لا تحتاجها فوراً وغالباً ما يكسب القليل من الفائدة. اسأل عن الرسوم الشهرية، طرق إعفائها، وما إذا كنت بحاجة إلى رقم الضمان الاجتماعي الأمريكي أو SIN الكندي لمنتجات معينة."
      ],
      fr: [
        "Les banques et coopératives de crédit doivent vérifier qui vous êtes, donc vous apporterez généralement une pièce d'identité gouvernementale, une preuve d'adresse et des documents d'immigration ou de travail. De nombreux endroits vous permettent de prendre rendez-vous ou de commencer en ligne et de terminer en agence.",
        "Un compte chèques est pour les dépenses quotidiennes et les paiements de factures ; un compte d'épargne est pour l'argent dont vous n'avez pas besoin immédiatement et rapporte souvent un peu d'intérêt. Demandez sur les frais mensuels, les moyens de les exonérer, et si vous avez besoin d'un numéro de sécurité sociale américain ou SIN canadien pour certains produits."
      ],
      pa: [
        "ਬੈਂਕਾਂ ਅਤੇ ਕ੍ਰੈਡਿਟ ਯੂਨੀਅਨਾਂ ਨੂੰ ਤੁਹਾਡੀ ਪਛਾਣ ਦੀ ਪੁਸ਼ਟੀ ਕਰਨ ਦੀ ਲੋੜ ਹੈ, ਇਸ ਲਈ ਤੁਸੀਂ ਆਮ ਤੌਰ 'ਤੇ ਸਰਕਾਰੀ ਪਛਾਣ, ਪਤੇ ਦਾ ਪ੍ਰਮਾਣ, ਅਤੇ ਪਰਵਾਸ ਜਾਂ ਕੰਮ ਦਸਤਾਵੇਜ਼ ਲਿਆਉਂਗੇ। ਕਈ ਥਾਵਾਂ 'ਤੇ ਤੁਸੀਂ ਨਿਯੁਕਤੀ ਬੁੱਕ ਕਰ ਸਕਦੇ ਹੋ ਜਾਂ ਆਨਲਾਈਨ ਸ਼ੁਰੂ ਕਰਕੇ ਸ਼ਾਖਾ ਵਿੱਚ ਸਮਾਪਤ ਕਰ ਸਕਦੇ ਹੋ।",
        "ਚੈਕਿੰਗ ਖਾਤਾ ਰੋਜ਼ਾਨਾ ਖਰਚਾਂ ਅਤੇ ਬਿਲ ਭੁਗਤਾਨਾਂ ਲਈ ਹੈ; ਬਚਤ ਖਾਤਾ ਉਸ ਪੈਸੇ ਲਈ ਹੈ ਜਿਸਦੀ ਤੁਹਾਨੂੰ ਤੁਰੰਤ ਲੋੜ ਨਹੀਂ ਹੈ ਅਤੇ ਅਕਸਰ ਥੋੜ੍ਹਾ ਵਿਆਜ ਕਮਾਉਂਦਾ ਹੈ। ਮਾਸਿਕ ਫੀਸਾਂ, ਉਹਨਾਂ ਨੂੰ ਮਾਫ਼ ਕਰਨ ਦੇ ਤਰੀਕਿਆਂ, ਅਤੇ ਕੀ ਤੁਹਾਨੂੰ ਕੁਝ ਉਤਪਾਦਾਂ ਲਈ ਯੂਐਸ ਸੋਸ਼ਲ ਸਿਕਯੋਰਿਟੀ ਨੰਬਰ ਜਾਂ ਕੈਨੇਡੀਅਨ SIN ਦੀ ਲੋੜ ਹੈ, ਬਾਰੇ ਪੁੱਛੋ।"
      ]
    },
    quiz: {
      question: {
        en: "Which account is usually best for paying rent and buying groceries every week?",
        es: "¿Qué cuenta es generalmente mejor para pagar renta y comprar comestibles cada semana?",
        hi: "हर हफ्ते किराया और किराने का सामान खरीदने के लिए कौन सा खाता आमतौर पर सबसे अच्छा है?",
        tl: "Aling account ay karaniwang pinakamabuti para sa pagbabayad ng renta at pagbili ng groceries bawat linggo?",
        zh: "哪个账户通常最适合每周支付房租和购买食品？",
        ar: "أي حساب يكون عادة أفضل لدفع الإيجار وشراء البقالة كل أسبوع؟",
        fr: "Quel compte est généralement le meilleur pour payer le loyer et acheter des épicerie chaque semaine ?",
        pa: "ਹਰ ਹਫ਼ਤੇ ਕਿਰਾਇਆ ਅਤੇ ਕਿਰਾਨੇ ਦਾ ਸਮਾਨ ਖਰੀਦਣ ਲਈ ਕਿਹੜਾ ਖਾਤਾ ਆਮ ਤੌਰ 'ਤੇ ਸਭ ਤੋਂ ਵਧੀਆ ਹੈ?"
      },
      options: {
        en: ["A savings account only", "A chequing account"],
        es: ["Solo una cuenta de ahorros", "Una cuenta de cheques"],
        hi: ["केवल एक बचत खाता", "एक चेकिंग खाता"],
        tl: ["Isang savings account lang", "Isang chequing account"],
        zh: ["仅储蓄账户", "支票账户"],
        ar: ["حساب توفير فقط", "حساب جيروت"],
        fr: ["Un compte d'épargne seulement", "Un compte chèques"],
        pa: ["ਸਿਰਫ਼ ਇੱਕ ਬਚਤ ਖਾਤਾ", "ਇੱਕ ਚੈਕਿੰਗ ਖਾਤਾ"]
      },
      correctIndex: 1
    }
  },
  {
    id: "renting-first-apartment",
    title: {
      en: "Renting your first apartment",
      es: "Alquilar tu primer apartamento",
      hi: "अपना पहला अपार्टमेंट किराए पर लेना",
      tl: "Pag-upa sa iyong unang apartment",
      zh: "租你的第一套公寓",
      ar: "استئجار شقتك الأولى",
      fr: "Louer votre premier appartement",
      pa: "ਆਪਣਾ ਪਹਿਲਾ ਅਪਾਰਟਮੈਂਟ ਕਿਰਾਏ 'ਤੇ ਲੈਣਾ"
    },
    subtitle: {
      en: "Applications, deposits, and reading your lease",
      es: "Solicitudes, depósitos y leer tu contrato de arrendamiento",
      hi: "आवेदन, जमानत और अपनी लीज पढ़ना",
      tl: "Mga application, deposito, at pagbasa ng iyong lease",
      zh: "申请、押金和阅读租约",
      ar: "الطلبات، الودائع، وقراءة عقد الإيجار",
      fr: "Demandes, dépôts et lecture de votre bail",
      pa: "ਅਰਜ਼ੀਆਂ, ਜ਼ਮੀਨਤ, ਅਤੇ ਆਪਣੀ ਲੀਜ਼ ਪੜ੍ਹਨਾ"
    },
    category: "Housing",
    content: {
      en: [
        "Landlords often ask for proof of income, references, and sometimes a credit check. A security deposit holds money against damage or unpaid rent; rules about how much they can charge vary by province or state, so look up local tenant laws.",
        "Your lease is a contract: read the rent amount, due date, rules on guests and pets, and what happens if you leave early. Keep copies of emails and signed papers, and do a move-in checklist with photos so you are not charged for problems you did not cause."
      ],
      es: [
        "Los propietarios a menudo piden prueba de ingresos, referencias y a veces una verificación de crédito. Un depósito de seguridad mantiene dinero contra daños o renta no pagada; las reglas sobre cuánto pueden cobrar varían por provincia o estado, así que busca las leyes locales de inquilinos.",
        "Tu contrato de arrendamiento es un contrato: lee la cantidad de renta, fecha de vencimiento, reglas sobre invitados y mascotas, y qué sucede si te vas temprano. Guarda copias de correos electrónicos y papeles firmados, y haz una lista de mudanza con fotos para que no te cobren por problemas que no causaste."
      ],
      hi: [
        "मकान मालिक अक्सर आय प्रमाण, संदर्भ, और कभी-कभी क्रेडिट जांच मांगते हैं। सुरक्षा जमानत क्षति या अदत्त किराये के खिलाफ पैसा रखती है; यह कि वे कितना चार्ज कर सकते हैं, इस बारे में नियम प्रांत या राज्य के अनुसार अलग-अलग होते हैं, इसलिए स्थानीय किरायेदार कानून देखें।",
        "आपकी लीज एक अनुबंध है: किराया राशि, नियत तारीख, मेहमानों और पालतू जानवरों पर नियम, और यदि आप जल्दी जाते हैं तो क्या होता है, पढ़ें। ईमेल और हस्ताक्षरित कागजा़ात की प्रतियां रखें, और फ़ोटो के साथ मूव-इन चेकलिस्ट बनाएं ताकि आपको उन समस्याओं के लिए चार्ज न किया जाए जिन्हें आपने नहीं किया।"
      ],
      tl: [
        "Ang mga landlord ay madalas na humingi ng proof of income, references, at minsan ay credit check. Ang security deposit ay nagho-hold ng laban sa damage o unpaid rent; ang mga tuntunin kung magkano sila maaaring magcharge ay nag-iiba ayon sa probinsya o estado, kaya hanapin ang mga lokal na batas ng tenant.",
        "Ang iyong lease ay isang kontrata: basahin ang halaga ng renta, due date, mga tuntunin sa mga bisita at alagang hayop, at kung ano ang mangyayari kung aalis ka nang maaga. Panatilihin ang mga kopya ng mga email at pirma na mga papel, at gumawa ng move-in checklist na may mga larawan upang hindi ka ikarga sa mga problema na hindi mo naging sanhi."
      ],
      zh: [
        "房东经常要求收入证明、推荐信，有时还有信用检查。安全押金用于防止损坏或未付租金；关于他们可以收取多少的规则因省或州而异，因此请查看当地租客法律。",
        "您的租约是合同：阅读租金金额、到期日期、关于客人和宠物的规则，以及如果您提前离开会发生什么。保留电子邮件和签名文件的副本，并进行带照片的入住清单，这样您就不会因您未造成的问题而被收费。"
      ],
      ar: [
        "الملاك غالباً ما يطلبون إثبات الدخل، مراجع، وأحياناً فحص ائتماني. الوديعة الأمنية تحتفظ بالمال ضد الأضرار أو الإيجار غير المدفوع؛ القواعد حول مقدار ما يمكنهم تحصيله تختلف حسب المقاطعة أو الولاية، لذا ابحث عن قوانين المستأجرين المحلية.",
        "عقد الإيجار الخاص بك هو عقد: اقرأ مبلغ الإيجار، تاريخ الاستحقاق، القواعد حول الضيوف والحيوانات الأليفة، وماذا يحدث إذا غادرت مبكراً. احتفظ بنسخ من رسائل البريد الإلكتروني والأوراق الموقعة، وقم بعمل قائمة انتقال مع الصور حتى لا تتهم بمشاكل لم تسببها."
      ],
      fr: [
        "Les propriétaires demandent souvent une preuve de revenus, des références, et parfois une vérification de crédit. Un dépôt de sécurité détient de l'argent contre les dommages ou le loyer impayé ; les règles sur combien ils peuvent facturer varient par province ou état, donc cherchez les lois locales des locataires.",
        "Votre bail est un contrat : lisez le montant du loyer, la date d'échéance, les règles sur les invités et animaux, et ce qui se passe si vous partez tôt. Gardez des copies d'e-mails et de papiers signés, et faites une liste d'entrée avec des photos pour ne pas être facturé pour des problèmes que vous n'avez pas causés."
      ],
      pa: [
        "ਮਕਾਨ ਮਾਲਕ ਅਕਸਰ ਆਮਦਨੀ ਦਾ ਪ੍ਰਮਾਣ, ਹਵਾਲੇ, ਅਤੇ ਕਈ ਵਾਰ ਕ੍ਰੈਡਿਟ ਜਾਂਚ ਮੰਗਦੇ ਹਨ। ਸੁਰੱਖਿਆ ਜ਼ਮੀਨਤ ਨੁਕਸਾਨ ਜਾਂ ਅਦਤਤ ਕਿਰਾਏ ਖਿਲਾਫ ਪੈਸਾ ਰੱਖਦੀ ਹੈ; ਇਹ ਕਿ ਉਹ ਕਿੰਨਾ ਚਾਰਜ ਕਰ ਸਕਦੇ ਹਨ, ਬਾਰੇ ਨਿਯਮ ਸੂਬੇ ਜਾਂ ਰਾਜ ਦੁਆਰਾ ਵੱਖਰੇ ਹੁੰਦੇ ਹਨ, ਇਸ ਲਈ ਸਥਾਨਕ ਕਿਰਾਏਦਾਰ ਕਾਨੂਨ ਦੇਖੋ।",
        "ਤੁਹਾਡੀ ਲੀਜ਼ ਇੱਕ ਇਕਰਾਰਨਾਮਾ ਹੈ: ਕਿਰਾਇਆ ਰਕਮ, ਨਿਯਤ ਤਾਰੀਖ, ਮਹਿਮਾਨਾਂ ਅਤੇ ਪਾਲਤੂ ਜਾਨਵਰਾਂ 'ਤੇ ਨਿਯਮ, ਅਤੇ ਜੇ ਤੁਸੀਂ ਜਲਦੀ ਜਾਂਦੇ ਹੋ ਤਾਂ ਕੀ ਹੁੰਦਾ ਹੈ, ਪੜ੍ਹੋ। ਈਮੇਲ ਅਤੇ ਦਸਤਖਤ ਕੀਤੇ ਕਾਗਜ਼ਾਤਾਂ ਦੀਆਂ ਕਾਪੀਆਂ ਰੱਖੋ, ਅਤੇ ਫੋਟੋਆਂ ਨਾਲ ਮੂਵ-ਇਨ ਚੈਕਲਿਸਟ ਬਣਾਓ ਤਾਂ ਜੋ ਤੁਹਾਨੂੰ ਉਨ੍ਹਾਂ ਸਮੱਸਿਆਂ ਲਈ ਚਾਰਜ ਨਾ ਕੀਤਾ ਜਾਵੇ ਜਿਨ੍ਹਾਂ ਨੂੰ ਤੁਸੀਂ ਨਹੀਂ ਕੀਤਾ।"
      ]
    },
    quiz: {
      question: {
        en: "Why is it smart to read your whole lease before you sign?",
        es: "¿Por qué es inteligente leer todo tu contrato de arrendamiento antes de firmar?",
        hi: "हस्ताक्षर करने से पहले अपनी पूरी लीज पढ़ना क्यों स्मार्ट है?",
        tl: "Bakit ang matalinong basahin ang buong iyong lease bago magpirma?",
        zh: "为什么在签署前阅读整个租约是明智的？",
        ar: "لماذا من الذكي قراءة عقد الإيجار بالكامل قبل التوقيع؟",
        fr: "Pourquoi est-ce intelligent de lire votre bail entier avant de signer ?",
        pa: "ਦਸਤਖਤ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਆਪਣੀ ਪੂਰੀ ਲੀਜ਼ ਪੜ੍ਹਣਾ ਕਿਉਂ ਚੁਸਤ ਹੈ?"
      },
      options: {
        en: [
          "So you know your rights, rent rules, and fees before you commit",
          "Leases are optional and do not affect you legally"
        ],
        es: [
          "Para que conozcas tus derechos, reglas de renta y tarifas antes de comprometerte",
          "Los contratos de arrendamiento son opcionales y no te afectan legalmente"
        ],
        hi: [
          "ताकि आप प्रतिबद्ध होने से पहले अपने अधिकार, किराया नियम, और शुल्क जान सकें",
          "लीज वैकल्पिक हैं और कानूनੀ रूप से आपको प्रभावित नहीं करतੀं"
        ],
        tl: [
          "Upang malaman mo ang iyong mga karapatan, mga tuntunin sa renta, at bayad bago ka mag-commit",
          "Ang mga lease ay opsyonal at hindi mo legally affeckt"
        ],
        zh: [
          "这样您在承诺前就知道您的权利、租金规则和费用",
          "租约是可选的，在法律上不影响您"
        ],
        ar: [
          "لتعرف حقوقك وقواعد الإيجار والرسوم قبل الالتزام",
          "عقود الإيجار اختيارية ولا تؤثر عليك قانونياً"
        ],
        fr: [
          "Pour que vous connaissiez vos droits, règles de loyer et frais avant de vous engager",
          "Les baux sont optionnels et ne vous affectent pas légalement"
        ],
        pa: [
          "ਤਾਂ ਜੋ ਤੁਸੀਂ ਪ੍ਰਤਿਬੱਧ ਹੋਣ ਤੋਂ ਪਹਿਲਾਂ ਆਪਣੇ ਅਧਿਕਾਰ, ਕਿਰਾਇਆ ਨਿਯਮ, ਅਤੇ ਫੀਸਾਂ ਜਾਣ ਸਕੋ",
          "ਲੀਜ਼ਾਂ ਵਿਕਲਪਿਕ ਹਨ ਅਤੇ ਕਾਨੂੰਨੀ ਤੌਰ 'ਤੇ ਤੁਹਾਨੂੰ ਪ੍ਰਭਾਵਿਤ ਨਹੀਂ ਕਰਦੀਆਂ"
        ]
      },
      correctIndex: 0
    }
  },
  {
    id: "understanding-pay-stub",
    title: {
      en: "Understanding your pay stub",
      es: "Entendiendo tu talón de pago",
      hi: "अपने वेतन स्लिप को समझना",
      tl: "Pag-unawa sa iyong pay stub",
      zh: "理解你的工资单",
      ar: "فهم كشف راتبك",
      fr: "Comprendre votre bulletin de paie",
      pa: "ਆਪਣੇ ਤਨਖਾਹ ਸਟਬ ਨੂੰ ਸਮਝਣਾ"
    },
    subtitle: {
      en: "Gross pay, deductions, and what lands in your account",
      es: "Salario bruto, deducciones, y qué llega a tu cuenta",
      hi: "सकल वेतन, कटौती, और आपके खाते में क्या आता है",
      tl: "Gross pay, deductions, at kung ano ang lalapag sa iyong account",
      zh: "总工资、扣除额以及存入您账户的金额",
      ar: "الراتب الإجمالي، الخصومات، وما يهبط في حسابك",
      fr: "Salaire brut, déductions, et ce qui atterrit dans votre compte",
      pa: "ਕੁੱਲ ਤਨਖਾਹ, ਕਟੌਤੀਆਂ, ਅਤੇ ਤੁਹਾਡੇ ਖਾਤੇ ਵਿੱਚ ਕੀ ਆਉਂਦਾ ਹੈ"
    },
    category: "Taxes",
    content: {
      en: [
        "Your gross pay is what you earn before anything is taken out. Deductions often include income tax, government programs like CPP/EI in Canada or Social Security/Medicare in the US, and possibly health insurance or retirement contributions your employer offers.",
        "Net pay is what actually goes to your bank—sometimes called take-home pay. Checking each pay period helps you catch mistakes and understand how tax withholdings and benefits change your cash flow."
      ],
      es: [
        "Tu salario bruto es lo que ganas antes de que se quite nada. Las deducciones a menudo incluyen impuesto sobre la renta, programas gubernamentales como CPP/EI en Canadá o Seguro Social/Medicare en EE. UU., y posiblemente seguro médico o contribuciones de jubilación que tu empleador ofrece.",
        "El salario neto es lo que realmente va a tu banco—a veces llamado take-home pay. Verificar cada período de pago te ayuda a detectar errores y entender cómo las retenciones de impuestos y beneficios cambian tu flujo de efectivo."
      ],
      hi: [
        "आपका सकल वेतन वह है जो आप कुछ भी कटवाने से पहले कमाते हैं। कटौती में अक्सर आयकर, सरकारी कार्यक्रम जैसे कनाडा में CPP/EI या यूएस में सोशल सिक्योरिटी/मेडिकेयर, और संभवतः स्वास्थ्य बीमा या रिटायरमेंट योगदान शामिल हैं जो आपका नियोक्ता प्रदान करता है।",
        "शुद्ध वेतन वह है जो वास्तव में आपके बैंक में जाता है—कभी-कभी इसे टेक-होम पे कहा जाता है। प्रत्येक वेतन अवधि की जांच करने से आपको गलतियां पकड़ने और समझने में मदद मिलती है कि कैसे टैक्स कटौती और लाभ आपके नकदी प्रवाह को बदलते हैं।"
      ],
      tl: [
        "Ang iyong gross pay ay kung ano ang kikitain mo bago kunin ang anumang bagay. Ang mga deduction ay karaniwang kasama ang income tax, mga programa ng gobyerno tulad ng CPP/EI sa Canada o Social Security/Medicare sa US, at posibleng health insurance o retirement contributions na inaalok ng iyong employer.",
        "Ang net pay ay kung ano ang talagang pumupunta sa iyong bank—minsan tinatawag na take-home pay. Ang pag-check sa bawat pay period ay tumutulong sa iyo na makahanap ng mga mali at maunawaan kung paano ang mga tax withholdings at benepisyo ay nagbabago sa iyong cash flow."
      ],
      zh: [
        "您的总工资是任何扣除前的收入。扣除通常包括所得税、政府项目如加拿大的CPP/EI或美国的社保/医疗保健，以及可能雇主提供的健康保险或退休供款。",
        "净工资是实际存入您银行的金额——有时称为实得工资。检查每个工资期有助于您发现错误并了解税款扣缴和福利如何改变您的现金流。"
      ],
      ar: [
        "راتبك الإجمالي هو ما تكسبه قبل أن يتم خصم أي شيء. الخصومات غالباً تشمل ضريبة الدخل، برامج حكومية مثل CPP/EI في كندا أو الضمان الاجتماعي/ميديكير في الولايات المتحدة، وربما تأمين صحي أو مساهمات تقاعد يقدمها صاحب العمل.",
        "الراتب الصافي هو ما يذهب فعلياً إلى بنكك—يطلق عليه أحياناً راتب المنزل. فحص كل فترة دفع يساعدك على اكتشاف الأخطاء وفهم كيف تغير حجوزات الضرائب والمزايا تدفق نقودك."
      ],
      fr: [
        "Votre salaire brut est ce que vous gagnez avant que quoi que ce soit soit retiré. Les déductions incluent souvent l'impôt sur le revenu, les programmes gouvernementaux comme RPC/AE au Canada ou Sécurité Sociale/Medicare aux États-Unis, et possiblement l'assurance maladie ou les contributions de retraite que votre employeur offre.",
        "Le salaire net est ce qui va réellement à votre banque—parfois appelé salaire net. Vérifier chaque période de paie vous aide à attraper les erreurs et comprendre comment les retenues d'impôts et les avantages changent votre flux de trésorerie."
      ],
      pa: [
        "ਤੁਹਾਡਾ ਕੁੱਲ ਤਨਖਾਹ ਉਹ ਹੈ ਜੋ ਤੁਸੀਂ ਕੁਝ ਵੀ ਕੱਟਣ ਤੋਂ ਪਹਿਲਾਂ ਕਮਾਉਂਦੇ ਹੋ। ਕਟੌਤੀਆਂ ਵਿੱਚ ਅਕਸਰ ਆਮਦਨੀ ਟੈਕਸ, ਸਰਕਾਰੀ ਪ੍ਰੋਗਰਾਮ ਜਿਵੇਂ ਕਿ ਕੈਨੇਡਾ ਵਿੱਚ CPP/EI ਜਾਂ ਯੂਐਸ ਵਿੱਚ ਸੋਸ਼ਲ ਸਿਕਯੋਰਿਟੀ/ਮੈਡੀਕੇਅਰ, ਅਤੇ ਸੰਭਾਵਤ ਤੌਰ 'ਤੇ ਸਿਹਤ ਬੀਮਾ ਜਾਂ ਰਿਟਾਇਰਮੈਂਟ ਯੋਗਦਾਨ ਸ਼ਾਮਲ ਹਨ ਜੋ ਤੁਹਾਡਾ ਨਿਯੋਕਤਾ ਪੇਸ਼ ਕਰਦਾ ਹੈ।",
        "ਨੈੱਟ ਤਨਖਾਹ ਉਹ ਹੈ ਜੋ ਅਸਲ ਵਿੱਚ ਤੁਹਾਡੇ ਬੈਂਕ ਵਿੱਚ ਜਾਂਦੀ ਹੈ—ਕਈ ਵਾਰ ਇਸਨੂੰ ਟੇਕ-ਹੋਮ ਪੇਅ ਕਿਹਾ ਜਾਂਦਾ ਹੈ। ਹਰ ਤਨਖਾਹ ਅਵਧੀ ਦੀ ਜਾਂਚ ਕਰਨਾ ਤੁਹਾਡੀ ਗਲਤੀਆਂ ਫੜਨ ਅਤੇ ਸਮਝਣ ਵਿੱਚ ਮਦਦ ਕਰਦਾ ਹੈ ਕਿ ਟੈਕਸ ਰੋਕੀਆਂ ਅਤੇ ਲਾਭ ਤੁਹਾਡੇ ਨਕਦ ਪ੍ਰਵਾਹ ਨੂੰ ਕਿਵੇਂ ਬਦਲਦੇ ਹਨ।"
      ]
    },
    quiz: {
      question: {
        en: "What does 'net pay' usually mean on a pay stub?",
        es: "¿Qué suele significar 'salario neto' en un talón de pago?",
        hi: "वेतन स्लिप पर 'नेट पे' आमतौर पर क्या मतलब होता है?",
        tl: "Ano ang karaniwang ibig sabihin ng 'net pay' sa isang pay stub?",
        zh: "工资单上的'净工资'通常是什么意思？",
        ar: "ماذا يعني عادةً 'الراتب الصافي' في كشف الراتب؟",
        fr: "Que veut dire habituellement 'salaire net' sur un bulletin de paie ?",
        pa: "ਤਨਖਾਹ ਸਟਬ 'ਤੇ 'ਨੈੱਟ ਪੇਅ' ਆਮ ਤੌਰ 'ਤੇ ਕੀ ਮਤਲਬ ਹੁੰਦਾ ਹੈ?"
      },
      options: {
        en: [
          "Pay before any taxes or deductions",
          "Pay after deductions—the amount you actually receive"
        ],
        es: [
          "Pago antes de impuestos o deducciones",
          "Pago después de deducciones—la cantidad que realmente recibes"
        ],
        hi: [
          "किसी भी कर या कटौती से पहले भुगतान",
          "कटौती के बाद भुगतान—वह राशि जो आप वास्तव में प्राप्त करते हैं"
        ],
        tl: [
          "Pay bago ang anumang taxes o deductions",
          "Pagkatapos ng deductions—ang halaga na talagang natatanggap mo"
        ],
        zh: [
          "任何税收或扣除前的工资",
          "扣除后的工资——您实际收到的金额"
        ],
        ar: [
          "الدفع قبل أي ضرائب أو خصومات",
          "الدفع بعد الخصومات—المبلغ الذي تتلقاه فعلياً"
        ],
        fr: [
          "Paiement avant impôts ou déductions",
          "Paiement après déductions—le montant que vous recevez réellement"
        ],
        pa: [
          "ਕਿਸੇ ਵੀ ਟੈਕਸ ਜਾਂ ਕਟੌਤੀਆਂ ਤੋਂ ਪਹਿਲਾਂ ਭੁਗਤਾਨ",
          "ਕਟੌਤੀਆਂ ਤੋਂ ਬਾਅਦ ਭੁਗਤਾਨ—ਉਹ ਰਕਮ ਜੋ ਤੁਸੀਂ ਅਸਲ ਵਿੱਚ ਪ੍ਰਾਪਤ ਕਰਦੇ ਹੋ"
        ]
      },
      correctIndex: 1
    }
  },
  {
    id: "first-tax-return",
    title: {
      en: "Filing your first tax return",
      es: "Presentando tu primera declaración de impuestos",
      hi: "अपना पहला टैक्स रिटर्न दाखिल करना",
      tl: "Pag-file ng iyong unang tax return",
      zh: "提交你的第一次纳税申报",
      ar: "تقديم أول إقرار ضريبي لك",
      fr: "Déposer votre première déclaration d'impôts",
      pa: "ਆਪਣਾ ਪਹਿਲਾਂ ਟੈਕਸ ਰਿਟਰਨ ਦਾਖਲ ਕਰਨਾ"
    },
    subtitle: {
      en: "Deadlines, documents, and getting help safely",
      es: "Plazos, documentos, y obtener ayuda de forma segura",
      hi: "समय-सीमा, दस्तावेज़, और सुरक्षित रूप से सहायता प्राप्त करना",
      tl: "Mga deadline, dokumento, at pagkuha ng tulong nang ligtas",
      zh: "截止日期、文件和安全获取帮助",
      ar: "المواعيد النهائية، المستندات، والحصول على المساعدة بأمان",
      fr: "Dates limites, documents, et obtenir de l'aide en toute sécurité",
      pa: "ਸਮਾਂ-ਸੀਮਾਵਾਂ, ਦਸਤਾਵੇਜ਼, ਅਤੇ ਸੁਰੱਖਿਆ ਨਾਲ ਮਦਦ ਪ੍ਰਾਪਤ ਕਰਨਾ"
    },
    category: "Taxes",
    content: {
      en: [
        "A tax return reports your income and tells the government whether you already paid enough tax through withholding or whether you owe more or get a refund. In Canada you generally file a federal return and may file provincially; in the US you file a federal return and often a state return.",
        "Gather T4s, W-2s, or other income slips, records of rent paid if relevant, and notices from immigration or school if they affect credits. Free clinics, reputable software, or licensed preparers can help—avoid anyone who promises a huge refund before seeing your documents."
      ],
      es: [
        "Una declaración de impuestos informa tus ingresos y dice al gobierno si ya pagaste suficientes impuestos a través de retenciones o si debes más o obtienes un reembolso. En Canadá generalmente presentas una declaración federal y puedes presentar provincialmente; en EE. UU. presentas una declaración federal y a menudo una estatal.",
        "Reúne T4s, W-2s, u otros recibos de ingresos, registros de alquiler pagado si es relevante, y avisos de inmigración o escuela si afectan créditos. Clínicas gratuitas, software de buena reputación, o preparadores con licencia pueden ayudar—evita a cualquiera que prometa un reembolso enorme antes de ver tus documentos."
      ],
      hi: [
        "टैक्स रिटर्न आपकी आय की रिपोर्ट करता है और सरकार को बताता है कि आपने पहले ही कर्षण के माध्यम से पर्याप्त टैक्स का भुगतान किया है या आपको और चुकाना है या रिफंड मिलेगा। कनाडा में आप आमतौर पर फेडरल रिटर्न दाखिल करते हैं और प्रांतीय रूप से दाखिल कर सकते हैं; यूएस में आप फेडरल रिटर्न दाखिल करते हैं और अक्सर राज्य रिटर्न भी।",
        "T4s, W-2s, या अन्य आय स्लिप्स, भुगतान किए गए किराए के रिकॉर्ड यदि प्रासंगिक है, और आव्रजन या स्कूल से नोटिस इकट्ठा करें यदि वे क्रेडिट्स को प्रभावित करते हैं। मुफ्त क्लीनिक, प्रतिष्ठित सॉफ्टवेयर, या लाइसेंस प्राप्त तैयार करने वाले मदद कर सकते हैं—उनसे बचें जो आपके दस्तावेज़ देखे बिना बड़ा रिफंड वादा करते हैं।"
      ],
      tl: [
        "Ang isang tax return ay nag-uulat ng iyong kita at nagsasabi sa gobyerno kung sapat ka na nagbayad ng tax sa pamamagitan ng withholding o kung may utang ka pa o makakakuha ng refund. Sa Canada karaniwan kang magfi-file ng federal return at maaaring magfi-file ng provincial; sa US ay magfi-file ka ng federal return at madalas ay state return.",
        "Kolektahin ang mga T4s, W-2s, o iba pang income slips, mga talaan ng bayad na renta kung relevant, at mga abiso mula sa immigration o eskwela kung affecktado ang mga credits. Mga free clinic, reputable software, o licensed preparers ang pwedeng tumulong—iwasan ang sinumang nagpromiso ng malaking refund bago makita ang iyong mga dokumento."
      ],
      zh: [
        "纳税申报报告您的收入并告知政府您是否已通过预扣缴纳了足够的税款，或您需要缴纳更多或获得退款。在加拿大，您通常提交联邦申报表，也可能提交省级申报表；在美国，您提交联邦申报表，通常还有州申报表。",
        "收集T4、W-2或其他收入单据，如相关则支付租金的记录，以及移民或学校的通知（如果它们影响抵免额）。免费诊所、信誉良好的软件或许可的报税员可以帮助——避免任何人在看到您的文件前承诺巨额退款。"
      ],
      ar: [
        "إقرار ضريبي يبلغ عن دخلك ويخبر الحكومة ما إذا كنت قد دفعت ما يكفي من الضرائب بالفعل عبر الحجز أو ما إذا كنت مديناً بالمزيد أو ستحصل على استرداد. في كندا تقدم عادةً إقراراً فيدرالياً وقد تقدم إقليمياً؛ في الولايات المتحدة تقدم إقراراً فيدرالياً وغالباً إقراراً للولاية.",
        "اجمع T4s, W-2s، أو إيصالات دخل أخرى، سجلات إيجار مدفوع إذا كان ذا صلة، وإشعارات من الهجرة أو المدرسة إذا كانت تؤثر على الائتمانات. العيادات المجانية، البرامج الموثوقة، أو المحضرون المرخصون يمكنهم المساعدة—تجنب أي شخص يعد باسترداد ضخم قبل رؤية مستنداتك."
      ],
      fr: [
        "Une déclaration d'impôts rapporte vos revenus et dit au gouvernement si vous avez déjà assez payé d'impôts par retenue ou si vous devez plus ou obtenez un remboursement. Au Canada vous déposez généralement un retour fédéral et pouvez déposer provincialement ; aux États-Unis vous déposez un retour fédéral et souvent un retour d'état.",
        "Rassemblez les T4, W-2, ou autres bordereaux de revenus, les enregistrements de loyer payé si pertinent, et les avis de l'immigration ou de l'école s'ils affectent les crédits. Les cliniques gratuites, les logiciels réputés, ou les préparateurs autorisés peuvent aider—évitez quiconque promet un énorme remboursement avant de voir vos documents."
      ],
      pa: [
        "ਇੱਕ ਟੈਕਸ ਰਿਟਰਨ ਤੁਹਾਡੀ ਆਮਦਨੀ ਦੀ ਰਿਪੋਰਟ ਕਰਦਾ ਹੈ ਅਤੇ ਸਰਕਾਰ ਨੂੰ ਦੱਸਦਾ ਹੈ ਕਿ ਤੁਸੀਂ ਪਹਿਲਾਂ ਹੀ ਕਾਰਜ਼ਕ ਰਾਹੀਂ ਕਾਫ਼ੀ ਟੈਕਸ ਚੁਕਾਇਆ ਹੈ ਜਾਂ ਤੁਹਾਨੂੰ ਹੋਰ ਚੁਕਾਣਾ ਹੈ ਜਾਂ ਰਿਫੰਡ ਮਿਲੇਗਾ। ਕੈਨੇਡਾ ਵਿੱਚ ਤੁਸੀਂ ਆਮ ਤੌਰ 'ਤੇ ਫੈਡਰਲ ਰਿਟਰਨ ਦਾਖਲ ਕਰਦੇ ਹੋ ਅਤੇ ਸੂਬੇ ਦੀ ਤੌਰ 'ਤੇ ਦਾਖਲ ਕਰ ਸਕਦੇ ਹੋ; ਯੂਐਸ ਵਿੱਚ ਤੁਸੀਂ ਫੈਡਰਲ ਰਿਟਰਨ ਦਾਖਲ ਕਰਦੇ ਹੋ ਅਤੇ ਅਕਸਰ ਸੂਬੇ ਦਾ ਰਿਟਰਨ ਵੀ।",
        "T4s, W-2s, ਜਾਂ ਹੋਰ ਆਮਦਨੀ ਸਲਿਪਾਂ, ਚੁਕਾਏ ਗਏ ਕਿਰਾਏ ਦੇ ਰਿਕਾਰਡ ਇਸ ਤੇ ਨਿਰਭਰ ਕਰਦੇ ਹੋਏ, ਅਤੇ ਪਰਵਾਸ ਜਾਂ ਸਕੂਲ ਤੋਂ ਨੋਟਿਸ ਇਕੱਠੇ ਕਰੋ ਜੇ ਉਹ ਕ੍ਰੈਡਿਟਾਂ ਨੂੰ ਪ੍ਰਭਾਵਿਤ ਕਰਦੇ ਹਨ। ਮੁਫ਼ਤ ਕਲੀਨਿਕਾਂ, ਭਰੋਸੇਮੰਦ ਸਾਫਟਵੇਅਰ, ਜਾਂ ਲਾਈਸੈਂਸ਼ਸ਼ੁਦਾ ਤਿਆਰ ਕਰਨ ਵਾਲੇ ਮਦਦ ਕਰ ਸਕਦੇ ਹਨ—ਉਨ੍ਹਾਂ ਤੋਂ ਬਚੋ ਜੋ ਤੁਹਾਡੇ ਦਸਤਾਵੇਜ਼ ਦੇਖਣ ਤੋਂ ਪਹਿਲਾਂ ਵੱਡਾ ਰਿਫੰਡ ਵਾਅਦਾ ਕਰਦੇ ਹਨ।"
      ]
    },
    quiz: {
      question: {
        en: "What is one main purpose of filing a tax return?",
        es: "¿Cuál es un propósito principal de presentar una declaración de impuestos?",
        hi: "टैक्स रिटर्न दाखिल करने का एक मुख्य उद्देश्य क्या है?",
        tl: "Ano ang isang pangunahing layunin ng pag-file ng tax return?",
        zh: "提交纳税申报的一个主要目的是什么？",
        ar: "ما هو أحد الأغراض الرئيسية لتقديم إقرار ضريبي؟",
        fr: "Quel est un but principal de déposer une déclaration d'impôts ?",
        pa: "ਟੈਕਸ ਰਿਟਰਨ ਦਾਖਲ ਕਰਨ ਦਾ ਇੱਕ ਮੁੱਖ ਮਕਸਦ ਕੀ ਹੈ?"
      },
      options: {
        en: [
          "To report income and settle taxes owed or claim a refund",
          "To tell your bank how much you spend on groceries"
        ],
        es: [
          "Para reportar ingresos y liquidar impuestos adeudados o reclamar un reembolso",
          "Para decirle a tu banco cuánto gastas en comestibles"
        ],
        hi: [
          "आय की रिपोर्ट करने और देय करों का निपटान करने या रिफंड का दावा करने के लिए",
          "अपने बैंक को बताने के लिए कि आप किराने पर कितना खर्च करते हैं"
        ],
        tl: [
          "Para iulat ang kita at ayusin ang mga tax na may utang o mag-claim ng refund",
          "Para sabihin sa iyong bank kung gaano ka ang nagastos sa groceries"
        ],
        zh: [
          "报告收入并结算应缴税款或申请退款",
          "告诉你的银行你在食品上花了多少钱"
        ],
        ar: [
          "للإبلاغ عن الدخل وتسوية الضرائب المستحقة أو المطالبة باسترداد",
          "لإخبار بنكك بكم تنفق على البقالة"
        ],
        fr: [
          "Pour rapporter les revenus et régler les impôts dus ou réclamer un remboursement",
          "Pour dire à votre banque combien vous dépensez en épicerie"
        ],
        pa: [
          "ਆਮਦਨੀ ਦੀ ਰਿਪੋਰਟ ਕਰਨ ਅਤੇ ਦੇਣ ਵਾਲੇ ਟੈਕਸਾਂ ਨੂੰ ਨਿਪਟਾਰਨ ਜਾਂ ਰਿਫੰਡ ਦਾ ਦਾਅਵਾ ਕਰਨ ਲਈ",
          "ਆਪਣੇ ਬੈਂਕ ਨੂੰ ਦੱਸਣ ਲਈ ਕਿ ਤੁਸੀਂ ਕਿਰਾਨੇ 'ਤੇ ਕਿੰਨਾ ਖਰਚ ਕਰਦੇ ਹੋ"
        ]
      },
      correctIndex: 0
    }
  },
  {
    id: "rrsp-401k",
    title: {
      en: "What is an RRSP or 401(k)?",
      es: "¿Qué es un RRSP o 401(k)?",
      hi: "RRSP या 401(k) क्या है?",
      tl: "Ano ang isang RRSP o 401(k)?",
      zh: "什么是RRSP或401(k)？",
      ar: "ما هو RRSP أو 401(k)؟",
      fr: "Qu'est-ce qu'un REER ou 401(k) ?",
      pa: "RRSP ਜਾਂ 401(k) ਕੀ ਹੈ?"
    },
    subtitle: {
      en: "Tax-friendly ways to save for retirement",
      es: "Formas amigables con los impuestos para ahorrar para la jubilación",
      hi: "रिटायरमेंट के लिए बचत करने के टैक्स-फ्रेंडली तरीके",
      tl: "Mga paraan na kaibigan sa tax para mag-save para sa retirement",
      zh: "为退休储蓄的税收友好方式",
      ar: "طرق صديقة للضرائب للادخار للتقاعد",
      fr: "Moyens favorables aux impôts d'épargner pour la retraite",
      pa: "ਰਿਟਾਇਰਮੈਂਟ ਲਈ ਬਚਤ ਕਰਨ ਦੇ ਟੈਕਸ-ਦੋਸਤਾਂ ਤਰੀਕੇ"
    },
    category: "Saving",
    content: {
      en: [
        "An RRSP (Canada) and a 401(k) (US) are accounts designed to help you save for retirement, often with tax advantages. Money you contribute may lower your taxable income now, and investments inside the account can grow over many years.",
        "Employer 401(k) plans sometimes match part of what you save—that is extra money if you participate. There are rules on how much you can put in each year and when you can withdraw without penalties, so read your plan summary or ask your provider."
      ],
      es: [
        "Un RRSP (Canadá) y un 401(k) (EE. UU.) son cuentas diseñadas para ayudarte a ahorrar para la jubilación, a menudo con ventajas fiscales. El dinero que contribuyes puede bajar tu ingreso imponible ahora, y las inversiones dentro de la cuenta pueden crecer durante muchos años.",
        "Los planes 401(k) de empleadores a veces igualan parte de lo que ahorras—eso es dinero extra si participas. Hay reglas sobre cuánto puedes poner cada año y cuándo puedes retirar sin penalizaciones, así que lee el resumen de tu plan o pregunta a tu proveedor."
      ],
      hi: [
        "एक RRSP (कनाडा) और 401(k) (यूएस) खाते हैं जिनका डिज़ाइन रिटायरमेंट के लिए बचत करने में आपकी सहायता करने के लिए किया गया है, अक्सर टैक्स लाभों के साथ। आपके द्वारा योगदान किया गया पैसा अभी आपकी कर योग्य आय को कम कर सकता है, और खाते के अंदर निवेश कई वर्षों में बढ़ सकते हैं।",
        "नियोक्ता 401(k) योजनाएं कभी-कभी आपकी बचत के कुछ हिस्से का मिलान करती हैं—यदि आप भाग लेते हैं तो यह अतिरिक्त पैसा है। हर साल आप कितना डाल सकते हैं और कब आप दंड के बिना निकाल सकते हैं, इस पर नियम हैं, इसलिए अपनी योजना सारांश पढ़ें या अपने प्रदाता से पूछें।"
      ],
      tl: [
        "Ang isang RRSP (Canada) at 401(k) (US) ay mga account na idinisenyo upang tulungan kang mag-save para sa retirement, madalas na may tax advantages. Ang pera na iyong contribute ay maaaring mababa ang iyong taxable income ngayon, at mga investments sa loob ng account ay maaaring lumago sa loob ng maraming taon.",
        "Mga employer 401(k) plans ay minsan nag-match ng bahagi ng iyong i-save—yan ay extra money kung ikaw ay sumali. May mga tuntunin kung gaano karami ang ilalagay mo bawat taon at kung kailan mo pwedeng i-withdraw nang walang penalties, kaya basahin ang iyong plan summary o tanong ang iyong provider."
      ],
      zh: [
        "RRSP（加拿大）和401(k)（美国）是旨在帮助您为退休储蓄的账户，通常具有税收优势。您供款的资金现在可能会降低您的应税收入，账户内的投资可以在多年内增长。",
        "雇主401(k)计划有时会匹配您储蓄的一部分——如果您参与，这是额外的钱。关于每年可以存入多少以及何时可以在没有罚款的情况下提取，都有规定，因此请阅读您的计划摘要或询问您的提供者。"
      ],
      ar: [
        "RRSP (كندا) و 401(k) (الولايات المتحدة) هي حسابات مصممة لمساعدتك في الادخار للتقاعد، غالباً مع مزايا ضريبية. المال الذي تساهمه قد يخفض دخلك الخاضع للضريبة الآن، والاستثمارات داخل الحساب يمكن أن تنمو على مدار سنوات عديدة.",
        "خطط 401(k) لأصحاب العمل تطابق أحياناً جزءاً مما توفره—هذا أموال إضافية إذا شاركت. هناك قواعد على مقدار ما يمكنك وضعه كل عام ومتى يمكنك السحب دون عقوبات، لذا اقرأ ملخص خطتك أو اسأل مقدمك."
      ],
      fr: [
        "Un REER (Canada) et un 401(k) (États-Unis) sont des comptes conçus pour vous aider à épargner pour la retraite, souvent avec des avantages fiscaux. L'argent que vous cotisez peut baisser votre revenu imposable maintenant, et les investissements à l'intérieur du compte peuvent croître sur de nombreuses années.",
        "Les plans 401(k) d'employeur correspondent parfois à une partie de ce que vous épargnez—c'est de l'argent supplémentaire si vous participez. Il y a des règles sur combien vous pouvez mettre chaque année et quand vous pouvez retirer sans pénalités, donc lisez le résumé de votre plan ou demandez à votre fournisseur."
      ],
      pa: [
        "ਇੱਕ RRSP (ਕੈਨੇਡਾ) ਅਤੇ 401(k) (ਯੂਐਸ) ਖਾਤੇ ਹਨ ਜਿਨ੍ਹਾਂ ਨੂੰ ਰਿਟਾਇਰਮੈਂਟ ਲਈ ਬਚਤ ਕਰਨ ਵਿੱਚ ਤੁਹਾਡੀ ਮਦਦ ਕਰਨ ਲਈ ਡਿਜ਼ਾਈਨ ਕੀਤਾ ਗਿਆ ਹੈ, ਅਕਸਰ ਟੈਕਸ ਲਾਭਾਂ ਨਾਲ। ਤੁਹਾਡੇ ਵੱਲੋਂ ਯੋਗਦਾਨ ਕੀਤਾ ਪੈਸਾ ਹੁਣ ਤੁਹਾਡੀ ਟੈਕਸੇਬਲ ਆਮਦਨੀ ਨੂੰ ਘਟਾ ਸਕਦਾ ਹੈ, ਅਤੇ ਖਾਤੇ ਦੇ ਅੰਦਰ ਨਿਵੇਸ਼ ਕਈ ਸਾਲਾਂ ਵਿੱਚ ਵਧ ਸਕਦੇ ਹਨ।",
        "ਨਿਯੋਕਤਾ 401(k) ਯੋਜਨਾਵਾਂ ਕਈ ਵਾਰ ਤੁਹਾਡੀ ਬਚਤ ਦੇ ਕੁਝ ਹਿੱਸੇ ਨਾਲ ਮੇਲ ਖਾਂਦੀਆਂ ਹਨ—ਜੇ ਤੁਸੀਂ ਹਿੱਸਾ ਲੈਂਦੇ ਹੋ ਤਾਂ ਇਹ ਵਾਧੂ ਪੈਸਾ ਹੈ। ਹਰ ਸਾਲ ਤੁਸੀਂ ਕਿੰਨਾ ਪਾ ਸਕਦੇ ਹੋ ਅਤੇ ਕਦੋਂ ਤੁਸੀਂ ਬਿਨਾਂ ਦੰਡ ਕੱਢ ਸਕਦੇ ਹੋ, ਇਸ 'ਤੇ ਨਿਯਮ ਹਨ, ਇਸ ਲਈ ਆਪਣੀ ਯੋਜਨਾ ਸਾਰ ਪੜ੍ਹੋ ਜਾਂ ਆਪਣੇ ਪ੍ਰਦਾਤਾ ਤੋਂ ਪੁੱਛੋ।"
      ]
    },
    quiz: {
      question: {
        en: "What is a common benefit of an employer 401(k) plan in the US?",
        es: "¿Cuál es un beneficio común de un plan 401(k) de empleador en EE. UU.?",
        hi: "यूएस में नियोक्ता 401(k) योजना का एक सामान्य लाभ क्या है?",
        tl: "Ano ang isang karaniwang benepisyo ng employer 401(k) plan sa US?",
        zh: "美国雇主401(k)计划的常见好处是什么？",
        ar: "ما هو فائدة شائعة لخطة 401(k) صاحب العمل في الولايات المتحدة؟",
        fr: "Quel est un avantage commun d'un plan 401(k) d'employeur aux États-Unis ?",
        pa: "ਯੂਐਸ ਵਿੱਚ ਨਿਯੋਕਤਾ 401(k) ਯੋਜਨਾ ਦਾ ਇੱਕ ਆਮ ਲਾਭ ਕੀ ਹੈ?"
      },
      options: {
        en: [
          "Your employer may match some of your contributions",
          "The government guarantees your investments will double every year"
        ],
        es: [
          "Tu empleador puede igualar algunas de tus contribuciones",
          "El gobierno garantiza que tus inversiones se duplicarán cada año"
        ],
        hi: [
          "आपका नियोक्ता आपके योगदान के कुछ हिस्से का मिलान कर सकता है",
          "सरकार गारंटी देती है कि आपके निवेश हर साल दोगुने हो जाएंगे"
        ],
        tl: [
          "Ang iyong employer ay maaaring mag-match ng bahagi ng iyong mga contribution",
          "Ang gobyerno ay garantisado na ang iyong mga investments ay magdodoble bawat taon"
        ],
        zh: [
          "您的雇主可能会匹配您的部分供款",
          "政府保证您的投资每年翻倍"
        ],
        ar: [
          "قد يطابق صاحب العمل بعض مساهماتك",
          "الحكومة تضمن أن استثماراتك ستنعم كل عام"
        ],
        fr: [
          "Votre employeur peut correspondre à une partie de vos cotisations",
          "Le gouvernement garantit que vos investissements doubleront chaque année"
        ],
        pa: [
          "ਤੁਹਾਡਾ ਨਿਯੋਕਤਾ ਤੁਹਾਡੇ ਯੋਗਦਾਨਾਂ ਦੇ ਕੁਝ ਹਿੱਸੇ ਨਾਲ ਮੇਲ ਖਾਂਦਾ ਹੋ ਸਕਦਾ ਹੈ",
          "ਸਰਕਾਰ ਗਾਰੰਟੀ ਦਿੰਦੀ ਹੈ ਕਿ ਤੁਹਾਡੇ ਨਿਵੇਸ਼ ਹਰ ਸਾਲ ਦੁਗਣੇ ਹੋ ਜਾਣਗੇ"
        ]
      },
      correctIndex: 0
    }
  },
  {
    id: "send-money-home",
    title: {
      en: "How to send money back home",
      es: "Cómo enviar dinero a casa",
      hi: "घर पैसे कैसे भेजें",
      tl: "Kung paano magpadala ng pera sa bahay",
      zh: "如何汇款回家",
      ar: "كيفية إرسال المال إلى الوطن",
      fr: "Comment envoyer de l'argent à la maison",
      pa: "ਘਰ ਪੈਸੇ ਕਿਵੇਂ ਭੇਜਣੇ ਹਨ"
    },
    subtitle: {
      en: "Affordable options and avoiding high fees",
      es: "Opciones asequibles y evitar tarifas altas",
      hi: "किफायती विकल्प और उच्च शुल्क से बचना",
      tl: "Maaasahan na mga opsyon at pag-iwasan sa mataas na bayad",
      zh: "经济实惠的选择和避免高额费用",
      ar: "خيارات ميسرة وتجنب الرسوم العالية",
      fr: "Options abordables et éviter les frais élevés",
      pa: "ਸਸਤੀ ਵਿਕਲਪ ਅਤੇ ਉੱਚ ਫੀਸਾਂ ਤੋਂ ਬਚਣਾ"
    },
    category: "Banking",
    content: {
      en: [
        "Money transfer services like Western Union, MoneyGram, or bank wire transfers can send money internationally, but fees and exchange rates vary. Digital services like Wise or Remitly often offer better rates and lower fees than traditional banks.",
        "Compare total costs including fees and exchange rates before sending. Some services offer better rates for larger amounts, while others are better for small, regular transfers. Always keep your receipt and tracking number."
      ],
      es: [
        "Servicios de transferencia de dinero como Western Union, MoneyGram, o transferencias bancarias pueden enviar dinero internacionalmente, pero las tarifas y tasas de cambio varían. Servicios digitales como Wise o Remitly a menudo ofrecen mejores tasas y tarifas más bajas que los bancos tradicionales.",
        "Compara los costos totales incluyendo tarifas y tasas de cambio antes de enviar. Algunos servicios ofrecen mejores tasas para cantidades mayores, mientras que otros son mejores para transferencias pequeñas y regulares. Siempre guarda tu recibo y número de seguimiento."
      ],
      hi: [
        "वेस्टर्न यूनियन, मनीग्राम, या बैंक वायर ट्रांसफर जैसे मनी ट्रांसफर सेवाए अंतर्राष्ट्रीय रूप से पैसे भेज सकती हैं, लेकिन शुल्क और विनिमय दरें अलग-अलग होती हैं। वाईज या रेमिटली जैसी डिजिटल सेवाए अक्सर पारंपरिक बैंकों की तुलना में बेहतर दरें और कम शुल्क प्रदान करती हैं।",
        "भेजने से पहले शुल्क और विनिमय दरें सहित कुल लागत की तुलना करें। कुछ सेवाएं बड़ी राशि के लिए बेहतर दरें प्रदान करती हैं, जबकि अन्य छोटी, नियमित ट्रांसफर के लिए बेहतर होती हैं। हमेशा अपनी रसीद और ट्रैकिंग नंबर रखें।"
      ],
      tl: [
        "Mga serbisyo ng money transfer tulad ng Western Union, MoneyGram, o bank wire transfers ay maaaring magpadala ng pera internationally, pero ang mga bayad at exchange rates ay nag-iiba. Mga digital services tulad ng Wise o Remitly ay madalas nag-aalok ng mas mahusay na rates at mas mababang bayad kumpara sa mga traditional bank.",
        "Ikompara ang mga kabuuang gastos kabilang ang mga bayad at exchange rates bago magpadala. Ang ilang serbisyo ay nag-aalok ng mas mahusay na rates para sa mas malaking halaga, habang ang iba ay mas mahusay para sa maliit na regular na transfers. Palagi i-save ang iyong receipt at tracking number."
      ],
      zh: [
        "西联汇款、MoneyGram或银行电汇等汇款服务可以国际汇款，但费用和汇率各不相同。Wise或Remitly等数字服务通常比传统银行提供更好的汇率和更低的费用。",
        "汇款前比较包括费用和汇率在内的总成本。一些服务为大额提供更好的汇率，而其他服务更适合小额定期转账。始终保留您的收据和追踪号码。"
      ],
      ar: [
        "خدمات تحويل الأموال مثل Western Union و MoneyGram أو التحويلات البنكية يمكنها إرسال الأموال دولياً، لكن الرسوم وأسعار الصرف تختلف. الخدمات الرقمية مثل Wise أو Remitly غالباً ما تقدم أسعاراً أفضل ورسوم أقل من البنوك التقليدية.",
        "قارن التكاليف الإجمالية بما في ذلك الرسوم وأسعار الصرف قبل الإرسال. بعض الخدمات تقدم أسعاراً أفضل للمبالغ الكبيرة، بينما البعض الآخر أفضل للتحويلات الصغيرة المنتظمة. احتفظ دائماً بإيصالك ورقم التتبع."
      ],
      fr: [
        "Les services de transfert d'argent comme Western Union, MoneyGram, ou les virements bancaires peuvent envoyer de l'argent internationalement, mais les frais et taux de change varient. Les services numériques comme Wise ou Remitly offrent souvent de meilleurs taux et des frais plus bas que les banques traditionnelles.",
        "Comparez les coûts totaux y compris les frais et taux de change avant d'envoyer. Certains services offrent de meilleurs taux pour les gros montants, tandis que d'autres sont meilleurs pour les petits transferts réguliers. Gardez toujours votre reçu et numéro de suivi."
      ],
      pa: [
        "ਵੈਸਟਰਨ ਯੂਨੀਅਨ, ਮਨੀਗ੍ਰਾਮ, ਜਾਂ ਬੈਂਕ ਵਾਇਰ ਟ੍ਰਾਂਸਫਰ ਵਰਗੇ ਮਨੀ ਟ੍ਰਾਂਸਫਰ ਸੇਵਾਵਾਂ ਅੰਤਰਰਾਸ਼ਟਰੀ ਰੂਪ ਵਿੱਚ ਪੈਸੇ ਭੇਜ ਸਕਦੀਆਂ ਹਨ, ਪਰ ਫੀਸ ਅਤੇ ਵਿਨਮਯ ਦਰਾਂ ਵੱਖਰੀਆਂ ਹੁੰਦੀਆਂ ਹਨ। ਵਾਈਜ ਜਾਂ ਰੇਮਿਟਲੀ ਵਰਗੇ ਡਿਜ਼ਿਟਲ ਸੇਵਾਵਾਂ ਅਕਸਰ ਰਵਾਇਤੀ ਬੈਂਕਾਂ ਦੀ ਤੁਲਨਾ ਵਿੱਚ ਬਿਹਤਰ ਦਰਾਂ ਅਤੇ ਘੱਟ ਫੀਸ ਪ੍ਰਦਾਨ ਕਰਦੀਆਂ ਹਨ।",
        "ਭੇਜਣ ਤੋਂ ਪਹਿਲਾਂ ਫੀਸ ਅਤੇ ਵਿਨਮਯ ਦਰਾਂ ਸਮੇਤ ਕੁੱਲ ਲਾਗਤ ਦੀ ਤੁਲਨਾ ਕਰੋ। ਕੁਝ ਸੇਵਾਵਾਂ ਵੱਡੀ ਰਕਮ ਲਈ ਬਿਹਤਰ ਦਰਾਂ ਪ੍ਰਦਾਨ ਕਰਦੀਆਂ ਹਨ, ਜਦੋਂਕਿ ਹੋਰ ਛੋਟੀ, ਨਿਯਮਤ ਟ੍ਰਾਂਸਫਰਾਂ ਲਈ ਬਿਹਤਰ ਹੁੰਦੀਆਂ ਹਨ। ਹਮੇਸ਼ਾ ਆਪਣੀ ਰਸੀਦ ਅਤੇ ਟ੍ਰੈਕਿੰਗ ਨੰਬਰ ਰੱਖੋ।"
      ]
    },
    quiz: {
      question: {
        en: "What should you compare when choosing a money transfer service?",
        es: "¿Qué deberías comparar al elegir un servicio de transferencia de dinero?",
        hi: "मनी ट्रांसफर सेवा चुनते समय आपको क्या तुलना करनी चाहिए?",
        tl: "Ano ang dapat ikumpara sa pagpili ng isang money transfer service?",
        zh: "选择汇款服务时应该比较什么？",
        ar: "ما الذي يجب مقارنته عند اختيار خدمة تحويل الأموال؟",
        fr: "Que devriez-vous comparer en choisissant un service de transfert d'argent ?",
        pa: "ਮਨੀ ਟ੍ਰਾਂਸਫਰ ਸੇਵਾ ਚੁੰਨਦੇ ਸਮੇਂ ਤੁਹਾਨੂੰ ਕੀ ਤੁਲਨਾ ਕਰਨਾ ਚਾਹੀਦਾ ਹੈ?"
      },
      options: {
        en: [
          "Total fees and exchange rates",
          "Only the company name"
        ],
        es: [
          "Tarifas totales y tasas de cambio",
          "Solo el nombre de la compañía"
        ],
        hi: [
          "कुल शुल्क और विनिमय दरें",
          "केवल कंपनी का नाम"
        ],
        tl: [
          "Kabuuang bayad at exchange rates",
          "Lang pangalan ng kumpanya"
        ],
        zh: [
          "总费用和汇率",
          "仅公司名称"
        ],
        ar: [
          "الرسوم الإجمالية وأسعار الصرف",
          "فقط اسم الشركة"
        ],
        fr: [
          "Frais totaux et taux de change",
          "Seulement le nom de l'entreprise"
        ],
        pa: [
          "ਕੁੱਲ ਫੀਸ ਅਤੇ ਵਿਨਮਯ ਦਰਾਂ",
          "ਸਿਰਫ਼ ਕੰਪਨੀ ਦਾ ਨਾਮ"
        ]
      },
      correctIndex: 0
    }
  },
  {
    id: "health-insurance",
    title: {
      en: "Understanding health insurance",
      es: "Entendiendo el seguro de salud",
      hi: "स्वास्थ्य बीमा समझना",
      tl: "Pag-unawa sa health insurance",
      zh: "理解健康保险",
      ar: "فهم التأمين الصحي",
      fr: "Comprendre l'assurance maladie",
      pa: "ਸਿਹਤ ਬੀਮਾ ਸਮਝਣਾ"
    },
    subtitle: {
      en: "Coverage, costs, and how to get care",
      es: "Cobertura, costos, y cómo obtener atención",
      hi: "कवरेज, लागत, और देखभाल कैसे प्राप्त करें",
      tl: "Coverage, mga gastos, at paano makakuha ng care",
      zh: "保障、费用以及如何获得医疗",
      ar: "التغطية، التكاليف، وكيفية الحصول على الرعاية",
      fr: "Couverture, coûts, et comment obtenir des soins",
      pa: "ਕਵਰੇਜ, ਲਾਗਤ, ਅਤੇ ਦੇਖਭਾਲ ਕਿਵੇਂ ਪ੍ਰਾਪਤ ਕਰਨਾ"
    },
    category: "Housing",
    content: {
      en: [
        "In Canada, provincial health insurance covers basic medical care for residents, including doctor visits and hospital stays. In the US, health insurance is usually tied to employment or purchased individually, with varying coverage levels.",
        "Know your coverage: what's included, deductibles (amount you pay before insurance), and copays (fixed amounts per service). Keep your insurance card handy and understand emergency vs. routine care procedures."
      ],
      es: [
        "En Canadá, el seguro de salud provincial cubre la atención médica básica para residentes, incluyendo visitas al médico y estancias hospitalarias. En EE. UU., el seguro de salud generalmente está vinculado al empleo o comprado individualmente, con niveles de cobertura variables.",
        "Conoce tu cobertura: qué está incluido, deducibles (cantidad que pagas antes del seguro), y copagos (cantidades fijas por servicio). Ten tu tarjeta de seguro a mano y entiende los procedimientos de emergencia versus atención rutinaria."
      ],
      hi: [
        "कनाडा में, प्रांतीय स्वास्थ्य बीमा निवासियों के लिए बुनियादी चिकित्सा देखभाल को कवर करता है, जिसमें डॉक्टर के दौरे और अस्पताल में रहना शामिल है। यूएस में, स्वास्थ्य बीमा आमतौर रोजगार से जुड਼ा होता है या व्यक्तिगत रूप से खरीदा जाता है, जिसमें विभिन्न कवरेज स्तर होते हैं।",
        "अपने कवरेज जानें: क्या शामिल है, डेडक्टिबल (बीमा से पहले आप जो भुगतान करते हैं), और कोपे (प्रति सेवा निर्धारित राशि)। अपना बीमा कार्ड हाथ में रखें और आपातकालीन बनाम नियमित देखभाल प्रक्रियाओं को समझें।"
      ],
      tl: [
        "Sa Canada, ang provincial health insurance ay sumasakop sa basic medical care para sa mga residente, kasama ang mga doctor visits at hospital stays. Sa US, ang health insurance ay karaniwang nakatied sa employment o binili nang individual, na may varying coverage levels.",
        "Kilalanin ang iyong coverage: ano ang kasama, mga deductible (halaga na bayad mo bago ng insurance), at mga copay (mga fixed amount bawat service). Panatilihin ang iyong insurance card at maunawaan ang emergency vs. routine care procedures."
      ],
      zh: [
        "在加拿大，省级健康保险为居民提供基本医疗服务，包括医生就诊和住院。在美国，健康保险通常与工作相关或单独购买，保障水平各不相同。",
        "了解您的保障：包括什么、免赔额（保险前您支付的金额）和共付额（每项服务的固定金额）。随身携带您的保险卡，了解紧急护理与常规护理程序。"
      ],
      ar: [
        "في كندا، التأمين الصحي الإقليمي يغطي الرعاية الطبية الأساسية للمقيمين، بما في ذلك زيارات الأطباء والإقامة في المستشفى. في الولايات المتحدة، التأمين الصحي عادة ما يرتبط بالعمل أو يشترى فردياً، بمستويات تغطية متفاوتة.",
        "اعرف تغطيتك: ما هو مشمول، الخصومات (المبلغ الذي تدفعه قبل التأمين)، والمدفوعات المشتركة (مبالغ ثابتة لكل خدمة). احتفظ ببطاقة التأمين في متناولك وافهم إجراءات الطوارئ مقابل الرعاية الروتينية."
      ],
      fr: [
        "Au Canada, l'assurance maladie provinciale couvre les soins médicaux de base pour les résidents, y compris les visites de médecin et les séjours à l'hôpital. Aux États-Unis, l'assurance maladie est généralement liée à l'emploi ou achetée individuellement, avec des niveaux de couverture variables.",
        "Connaissez votre couverture : ce qui est inclus, les franchises (montant que vous payez avant l'assurance), et les co-paiements (montants fixes par service). Gardez votre carte d'assurance à portée de main et comprenez les procédures d'urgence vs. soins de routine."
      ],
      pa: [
        "ਕੈਨੇਡਾ ਵਿੱਚ, ਸੂਬੇ ਦੀ ਸਿਹਤ ਬੀਮਾ ਨਿਵਾਸੀਆਂ ਲਈ ਬੁਨਿਆਦੀ ਮੈਡੀਕਲ ਦੇਖਭਾਲ ਨੂੰ ਕਵਰ ਕਰਦਾ ਹੈ, ਜਿਸ ਵਿੱਚ ਡਾਕਟਰਾਂ ਦੇ ਦੌਰੇ ਅਤੇ ਹਸਪਤਾਲ ਵਿੱਚ ਰਹਿਣਾ ਸ਼ਾਮਲ ਹੈ। ਯੂਐਸ ਵਿੱਚ, ਸਿਹਤ ਬੀਮਾ ਆਮ ਤੌਰ 'ਤੇ ਰੁਜ਼ਗਾਰ ਨਾਲ ਜੁੜਿਆ ਹੁੰਦਾ ਹੈ ਜਾਂ ਵਿਅਕਤੀਗਤ ਰੂਪ ਵਿੱਚ ਖਰੀਦਾ ਜਾਂਦਾ ਹੈ, ਜਿਸ ਵਿੱਚ ਵੱਖਰੇ ਕਵਰੇਜ ਪੱਧਰ ਹੁੰਦੇ ਹਨ।",
        "ਆਪਣਾ ਕਵਰੇਜ ਜਾਣੋ: ਕੀ ਸ਼ਾਮਲ ਹੈ, ਡੇਡਕਟਿਬਲ (ਬੀਮਾ ਤੋਂ ਪਹਿਲਾਂ ਤੁਸੀਂ ਜੋ ਭੁਗਤਾਨ ਕਰਦੇ ਹੋ), ਅਤੇ ਕੋਪੇ (ਹਰ ਸੇਵਾ ਲਈ ਨਿਰਧਾਰਤ ਰਕਮ)। ਆਪਣਾ ਬੀਮਾ ਕਾਰਡ ਹੱਥ ਵਿੱਚ ਰੱਖੋ ਅਤੇ ਐਮਰਜੈਂਸੀ ਬਨਾਮ ਨਿਯਮਤ ਦੇਖਭਾਲ ਪ੍ਰਕਿਰਿਆਵਾਂ ਨੂੰ ਸਮਝੋ।"
      ]
    },
    quiz: {
      question: {
        en: "What is a deductible in health insurance?",
        es: "¿Qué es un deducible en el seguro de salud?",
        hi: "स्वास्थ्य बीमा में डेडक्टिबल क्या है?",
        tl: "Ano ang isang deductible sa health insurance?",
        zh: "健康保险中的免赔额是什么？",
        ar: "ما هو الخصم في التأمين الصحي؟",
        fr: "Qu'est-ce qu'une franchise dans l'assurance maladie ?",
        pa: "ਸਿਹਤ ਬੀਮਾ ਵਿੱਚ ਡੇਡਕਟਿਬਲ ਕੀ ਹੈ?"
      },
      options: {
        en: [
          "Amount you pay before insurance starts covering costs",
          "Monthly premium you pay for insurance"
        ],
        es: [
          "Cantidad que pagas antes de que el seguro empiece a cubrir costos",
          "Prima mensual que pagas por seguro"
        ],
        hi: [
          "बीमा लागत को कवर करने से पहले आप जो भुगतान करते हैं",
          "बीमा के लिए आप जो मासिक प्रीमियम भुगतान करते हैं"
        ],
        tl: [
          "Halaga na bayad mo bago magsimula ang insurance sa pag-cover ng gastos",
          "Buwanang premium na bayad mo para sa insurance"
        ],
        zh: [
          "保险开始覆盖费用前您支付的金额",
          "您为保险支付的月度保费"
        ],
        ar: [
          "المبلغ الذي تدفعه قبل أن يبدأ التأمين في تغطية التكاليف",
          "القسط الشهري الذي تدفعه للتأمين"
        ],
        fr: [
          "Montant que vous payez avant que l'assurance commence à couvrir les coûts",
          "Prime mensuelle que vous payez pour l'assurance"
        ],
        pa: [
          "ਬੀਮਾ ਲਾਗਤ ਨੂੰ ਕਵਰ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਤੁਸੀਂ ਜੋ ਭੁਗਤਾਨ ਕਰਦੇ ਹੋ",
          "ਬੀਮਾ ਲਈ ਤੁਸੀਂ ਜੋ ਮਾਸਿਕ ਪ੍ਰੀਮੀਅਮ ਭੁਗਤਾਨ ਕਰਦੇ ਹੋ"
        ]
      },
      correctIndex: 0
    }
  },
  {
    id: "drivers-license",
    title: {
      en: "How to get a driver's license",
      es: "Cómo obtener una licencia de conducir",
      hi: "ड्राइवर का लाइसेंस कैसे प्राप्त करें",
      tl: "Kung paano makakuha ng driver's license",
      zh: "如何获得驾照",
      ar: "كيفية الحصول على رخصة قيادة",
      fr: "Comment obtenir un permis de conduire",
      pa: "ਡਰਾਈਵਰ ਦਾ ਲਾਇਸੈਂਸ ਕਿਵੇਂ ਪ੍ਰਾਪਤ ਕਰਨਾ"
    },
    subtitle: {
      en: "Steps, tests, and requirements for newcomers",
      es: "Pasos, pruebas, y requisitos para recién llegados",
      hi: "नए आने वालों के लिए चरण, परीक्षण, और आवश्यकताएं",
      tl: "Mga hakbang, mga test, at mga kinakailangan para sa mga bagong dating",
      zh: "新移民的步骤、考试和要求",
      ar: "الخطوات والاختبارات والمتطلبات للوافدين الجدد",
      fr: "Étapes, tests, et exigences pour les nouveaux arrivants",
      pa: "ਨਵੇਂ ਆਉਣ ਵਾਲਿਆਂ ਲਈ ਪਗ਼ਡੰਡੀਆਂ, ਟੈਸਟ, ਅਤੇ ਲੋੜਾਂ"
    },
    category: "Housing",
    content: {
      en: [
        "Getting a driver's license typically involves a written test on traffic laws, a vision test, and a road test. You may need to bring identification, proof of residence, and sometimes immigration documents.",
        "Study the official driver's handbook for your province or state. Many places offer practice tests online. Some regions allow you to exchange a license from your home country, while others require full testing regardless of experience."
      ],
      es: [
        "Obtener una licencia de conducir generalmente involucra una prueba escrita sobre leyes de tránsito, una prueba de visión, y una prueba de manejo. Puede que necesites traer identificación, prueba de residencia, y a veces documentos de inmigración.",
        "Estudia el manual oficial de conductor para tu provincia o estado. Muchos lugares ofrecen pruebas de práctica en línea. Algunas regiones permiten intercambiar una licencia de tu país de origen, mientras que otras requieren pruebas completas sin importar la experiencia."
      ],
      hi: [
        "ड्राइवर का लाइसेंस प्राप्त करने में आमतौर यातायात कानूनों पर एक लिखित परीक्षा, एक दृष्टि परीक्षण, और एक सड़क परीक्षण शामिल होता है। आपको पहचान, निवास का प्रमाण, और कभी-कभी आव्रजन दस्तावेज़ लाने की आवश्यकता हो सकती है।",
        "अपने प्रांत या राज्य के लिए आधिकारिक ड्राइवर हैंडबुक का अध्ययन करें। कई स्थान ऑनलाइन अभ्यास परीक्षण प्रदान करते हैं। कुछ क्षेत्र आपको अपने देश से लाइसेंस विनिमय करने की अनुमति देते हैं, जबकि अन्य अनुभव के बावजूद पूर्ण परीक्षण की आवश्यकता होती है।"
      ],
      tl: [
        "Ang pagkuha ng driver's license ay karaniwang kasangkapan ng isang written test sa traffic laws, isang vision test, at isang road test. Maaaring kailanganin mong dalhin ang identification, proof of residence, at minsan ay immigration documents.",
        "Aralin ang opisyal na driver handbook para sa iyong probinsya o estado. Maraming lugar ang nag-aalok ng practice tests online. Ang ilang rehiyon ay nagpapahintulot sa iyo na mag-exchange ng license mula sa iyong home country, habang ang iba ay nangangailangan ng full testing kahit na may karanasan."
      ],
      zh: [
        "获得驾照通常包括交通法规笔试、视力测试和路考。您可能需要携带身份证件、居住证明，有时还需要移民文件。",
        "学习您所在省或州的官方驾驶手册。许多地方提供在线练习测试。一些地区允许您兑换来自您国家的驾照，而其他地区则无论经验如何都需要全面测试。"
      ],
      ar: [
        "الحصول على رخصة قيادة يتضمن عادة اختباراً كتابياً على قوانين المرور، اختباراً بصرياً، واختباراً على الطريق. قد تحتاج إلى إحضار هوية، إثبات إقامة، وأحياناً وثائق هجرة.",
        "ادرس دليل القيادة الرسمي لمقاطعتك أو ولايتك. العديد من الأماكن تقدم اختبارات ممارسة عبر الإنترنت. بعض المناطق تسمح لك باستبدال رخصة من بلدك الأصلي، بينما البعض الآخر يتطلب اختبارات كاملة بغض النظر عن الخبرة."
      ],
      fr: [
        "Obtenir un permis de conduire implique généralement un test écrit sur les lois de la circulation, un test de vision, et un test sur route. Vous devrez peut-être apporter une identification, une preuve de résidence, et parfois des documents d'immigration.",
        "Étudiez le manuel de conduite officiel pour votre province ou état. De nombreux endroits offrent des tests pratiques en ligne. Certaines régions permettent d'échanger un permis de votre pays d'origine, tandis que d'autres exigent des tests complets peu importe l'expérience."
      ],
      pa: [
        "ਡਰਾਈਵਰ ਦਾ ਲਾਇਸੈਂਸ ਪ੍ਰਾਪਤ ਕਰਨ ਵਿੱਚ ਆਮ ਤੌਰ 'ਤੇ ਟ੍ਰੈਫਿਕ ਕਾਨੂਨਾਂ 'ਤੇ ਇੱਕ ਲਿਖਤੀ ਟੈਸਟ, ਇੱਕ ਵਿਜ਼ਨ ਟੈਸਟ, ਅਤੇ ਇੱਕ ਰੋਡ ਟੈਸਟ ਸ਼ਾਮਲ ਹੁੰਦਾ ਹੈ। ਤੁਹਾਨੂੰ ਪਛਾਣ, ਨਿਵਾਸ ਦਾ ਪ੍ਰਮਾਣ, ਅਤੇ ਕਈ ਵਾਰ ਪਰਵਾਸ ਦਸਤਾਵੇਜ਼ ਲਿਆਉਣ ਦੀ ਲੋੜ ਹੋ ਸਕਦੀ ਹੈ।",
        "ਆਪਣੇ ਸੂਬੇ ਜਾਂ ਰਾਜ ਲਈ ਅਧਿਕਾਰਤ ਡਰਾਈਵਰ ਹੈਂਡਬੁੱਕ ਦਾ ਅਧਿਐਨ ਕਰੋ। ਕਈ ਥਾਵਾਂ ਆਨਲਾਈਨ ਅਭਿਆਸ ਟੈਸਟ ਪ੍ਰਦਾਨ ਕਰਦੀਆਂ ਹਨ। ਕੁਝ ਖੇਤਰ ਤੁਹਾਨੂੰ ਆਪਣੇ ਦੇਸ਼ ਤੋਂ ਲਾਇਸੈਂਸ ਐਕਸਚੇਂਜ ਕਰਨ ਦੀ ਇਜਾਜ਼ਤ ਦਿੰਦੇ ਹਨ, ਜਦੋਂਕਿ ਹੋਰ ਅਨੁਭਵ ਦੇ ਬਾਵਜੂਦ ਪੂਰੀ ਟੈਸਟਿੰਗ ਦੀ ਲੋੜ ਹੁੰਦੀ ਹੈ।"
      ]
    },
    quiz: {
      question: {
        en: "What tests are typically required for a driver's license?",
        es: "¿Qué pruebas se requieren típicamente para una licencia de conducir?",
        hi: "ड्राइवर का लाइसेंस के लिए आमतौर कौन से परीक्षण आवश्यक होते हैं?",
        tl: "Anong mga test ay karaniwang kinakailangan para sa driver's license?",
        zh: "驾照通常需要哪些考试？",
        ar: "ما هي الاختبارات المطلوبة عادةً لرخصة القيادة؟",
        fr: "Quels tests sont généralement requis pour un permis de conduire ?",
        pa: "ਡਰਾਈਵਰ ਦੇ ਲਾਇਸੈਂਸ ਲਈ ਆਮ ਤੌਰ 'ਤੇ ਕਿਹੜੇ ਟੈਸਟ ਲੋੜੀਦੇ ਹਨ?"
      },
      options: {
        en: [
          "Written test, vision test, and road test",
          "Only a written test"
        ],
        es: [
          "Prueba escrita, prueba de visión, y prueba de manejo",
          "Solo una prueba escrita"
        ],
        hi: [
          "लिखित परीक्षा, दृष्टि परीक्षण, और सड़क परीक्षण",
          "केवल एक लिखित परीक्षा"
        ],
        tl: [
          "Written test, vision test, at road test",
          "Lang isang written test"
        ],
        zh: [
          "笔试、视力测试和路考",
          "仅笔试"
        ],
        ar: [
          "اختبار كتابي، اختبار بصري، واختبار على الطريق",
          "فقط اختبار كتابي"
        ],
        fr: [
          "Test écrit, test de vision, et test sur route",
          "Seulement un test écrit"
        ],
        pa: [
          "ਲਿਖਤੀ ਟੈਸਟ, ਵਿਜ਼ਨ ਟੈਸਟ, ਅਤੇ ਰੋਡ ਟੈਸਟ",
          "ਸਿਰਫ਼ ਇੱਕ ਲਿਖਤੀ ਟੈਸਟ"
        ]
      },
      correctIndex: 0
    }
  },
  {
    id: "avoid-scams",
    title: {
      en: "Protecting yourself from scams",
      es: "Protegiéndote de estafas",
      hi: "धोखाधड़ी से खुद का बचाव करना",
      tl: "Proteksyon sa sarili mula sa mga scam",
      zh: "保护自己免受诈骗",
      ar: "حماية نفسك من الاحتيال",
      fr: "Se protéger des arnaques",
      pa: "ਸਕੈਮਾਂ ਤੋਂ ਆਪਣੇ ਆਪ ਨੂੰ ਬਚਾਉਣਾ"
    },
    subtitle: {
      en: "Common frauds and how to spot them",
      es: "Fraudes comunes y cómo identificarlos",
      hi: "आम धोखाधड़ी और उन्हें कैसे पहचानें",
      tl: "Karaniwang mga panloloko at kung paano makilala sila",
      zh: "常见欺诈以及如何识别",
      ar: "الاحتيالات الشائعة وكيفية التعرف عليها",
      fr: "Arnaques courantes et comment les repérer",
      pa: "ਆਮ ਧੋਖਾਧੜੀ ਅਤੇ ਉਹਨਾਂ ਨੂੰ ਕਿਵੇਂ ਪਛਾਣਨਾ"
    },
    category: "Credit",
    content: {
      en: [
        "Common scams targeting newcomers include fake job offers, rental scams, immigration services fraud, and phishing emails asking for personal information. Legitimate organizations never ask for passwords or payment via gift cards.",
        "Red flags: pressure to act immediately, requests for payment by wire transfer or gift cards, poor grammar in official communications, and unsolicited offers that seem too good to be true. Verify independently before sharing information or money."
      ],
      es: [
        "Estafas comunes dirigidas a recién llegados incluyen ofertas de trabajo falsas, estafas de alquiler, fraude de servicios de inmigración, y correos electrónicos de phishing que piden información personal. Organizaciones legítimas nunca piden contraseñas o pago mediante tarjetas de regalo.",
        "Banderas rojas: presión para actuar inmediatamente, solicitudes de pago por transferencia bancaria o tarjetas de regalo, gramática deficiente en comunicaciones oficiales, y ofertas no solicitadas que parecen demasiado buenas para ser verdad. Verifique independientemente antes de compartir información o dinero."
      ],
      hi: [
        "नए आने वालों को निशाना बनाने वाले आम घोटालों में नकली नौकरी प्रस्ताव, किराया घोटाले, आव्रजन सेवाएं धोखाधड़ी, और व्यक्तिगत जानकारी मांगने वाले फ़िशिंग ईमेल शामिल हैं। वैध संगठन कभी भी पासवर्ड या गिफ्ट कार्ड के माध्यम से भुगतान नहीं मांगते।",
        "रेड फ्लैग: तुरंत कार्य करने के लिए दबाव, वायर ट्रांसफर या गिफ्ट कार्ड द्वारा भुगतान का अनुरोध, आधिकारिक संचार में खराब व्याकरण, और अनुरोधित प्रस्ताव जो बहुत अच्छे लगते हैं। जानकारी या पैसा साझा करने से पहले स्वतंत्र रूप से सत्यापित करें।"
      ],
      tl: [
        "Karaniwang mga scam na tumatarget sa mga bagong dating ay kasama ang fake job offers, rental scams, immigration services fraud, at phishing emails na humihingi ng personal information. Legitimong organisasyon ay hindi humihingi ng passwords o payment sa pamamagitan ng gift cards.",
        "Mga red flag: pressure na kumilos kaagad, hiling ng payment sa pamamagitan ng wire transfer o gift cards, mahirap na grammar sa opisyal na komunikasyon, at unsolicited offers na masyadong mabuti para maging totoo. I-verify nang independiyente bago mag-share ng impormasyon o pera."
      ],
      zh: [
        "针对新移民的常见诈骗包括虚假工作机会、租房诈骗、移民服务欺诈和索要个人信息的钓鱼邮件。合法组织从不要求密码或通过礼品卡付款。",
        "危险信号：要求立即行动、要求通过电汇或礼品卡付款、官方通讯中语法错误，以及看起来好得令人难以置信的主动提供。在分享信息或金钱前请独立核实。"
      ],
      ar: [
        "الاحتيالات الشائعة التي تستهدف الوافدين الجدد تشمل عروض عمل مزيفة، احتيالات الإيجار، احتيال خدمات الهجرة، ورسائل التصيد التي تطلب معلومات شخصية. المنظمات الشرعية لا تطلب أبداً كلمات مرور أو دفع عبر بطاقات الهدايا.",
        "علامات تحذير: ضغط للتصرف فوراً، طلب الدفع عبر التحويل البنكي أو بطاقات الهدايا، قواعد لغوية ضعيفة في الاتصالات الرسمية، وعروض غير مرغوب فيها تبدو جيدة جداً لتكون حقيقية. تحقق بشكل مستقل قبل مشاركة المعلومات أو المال."
      ],
      fr: [
        "Les arnaques courantes ciblant les nouveaux arrivants incluent de fausses offres d'emploi, des arnaques de location, une fraude aux services d'immigration, et des e-mails de hameçonnage demandant des informations personnelles. Les organisations légitimes ne demandent jamais de mots de passe ou de paiement par cartes-cadeaux.",
        "Drapeaux rouges : pression d'agir immédiatement, demandes de paiement par virement bancaire ou cartes-cadeaux, mauvaise grammaire dans les communications officielles, et offres non sollicitées qui semblent trop belles pour être vraies. Vérifiez indépendamment avant de partager des informations ou de l'argent."
      ],
      pa: [
        "ਨਵੇਂ ਆਉਣ ਵਾਲਿਆਂ ਨੂੰ ਨਿਸ਼ਾਨਾ ਬਣਾਉਣ ਵਾਲੇ ਆਮ ਸਕੈਮਾਂ ਵਿੱਚ ਨਕਲੀ ਨੌਕਰੀ ਪੇਸ਼ਕਸ਼, ਕਿਰਾਏ ਦੀਆਂ ਠੱਗੀਆਂ, ਪਰਵਾਸ ਸੇਵਾਵਾਂ ਦੀ ਧੋਖਾਧੜੀ, ਅਤੇ ਨਿੱਜੀ ਜਾਣਕਾਰੀ ਮੰਗਦੇ ਫਿਸ਼ਿੰਗ ਈਮੇਲ ਸ਼ਾਮਲ ਹਨ। ਕਾਨੂਨੀ ਸੰਗਠਨ ਕਦੇ ਵੀ ਪਾਸਵਰਡ ਜਾਂ ਗਿਫਟ ਕਾਰਡ ਰਾਹੀਂ ਭੁਗਤਾਨ ਨਹੀਂ ਮੰਗਦੇ।",
        "ਲਾਲ ਝੰਡੇ: ਤੁਰੰਤ ਕਾਰਵਾਈ ਕਰਨ ਲਈ ਦਬਾਅ, ਵਾਇਰ ਟ੍ਰਾਂਸਫਰ ਜਾਂ ਗਿਫਟ ਕਾਰਡ ਰਾਹੀਂ ਭੁਗਤਾਨ ਦੀ ਬੇਨਤੀ, ਅਧਿਕਾਰਤੀ ਸੰਚਾਰ ਵਿੱਚ ਖਰਾਬ ਵਿਆਕਰਨ, ਅਤੇ ਬਿਨਾਂ ਬੇਸ਼ਕ ਪੇਸ਼ਕਸ਼ ਜੋ ਬਹੁਤ ਚੰਗੇ ਲੱਗਦੇ ਹਨ। ਜਾਣਕਾਰੀ ਜਾਂ ਪੈਸਾ ਸਾਂਝਾ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਸੁਤੰਤਰ ਤੌਰ 'ਤੇ ਤਸਦੀਕ ਕਰੋ।"
      ]
    },
    quiz: {
      question: {
        en: "What is a red flag for potential scams?",
        es: "¿Qué es una bandera roja para posibles estafas?",
        hi: "संभावित धोखाधड़ी के लिए रेड फ्लैग क्या है?",
        tl: "Ano ang isang red flag para sa mga potensyal na scam?",
        zh: "潜在诈骗的危险信号是什么？",
        ar: "ما هي علامة تحذير للاحتيالات المحتملة؟",
        fr: "Qu'est-ce qu'un drapeau rouge pour les arnaques potentielles ?",
        pa: "ਸੰਭਾਵਿਤ ਸਕੈਮਾਂ ਲਈ ਲਾਲ ਝੰਡਾ ਕੀ ਹੈ?"
      },
      options: {
        en: [
          "Requests for payment by gift cards",
          "Official government websites"
        ],
        es: [
          "Solicitudes de pago por tarjetas de regalo",
          "Sitios web gubernamentales oficiales"
        ],
        hi: [
          "गिफ्ट कार्ड द्वारा भुगतान का अनुरोध",
          "आधिकारिक सरकारी वेबसाइटें"
        ],
        tl: [
          "Hiling ng payment sa pamamagitan ng gift cards",
          "Opisyal na government websites"
        ],
        zh: [
          "要求通过礼品卡付款",
          "官方政府网站"
        ],
        ar: [
          "طلبات الدفع عبر بطاقات الهدايا",
          "مواقع حكومية رسمية"
        ],
        fr: [
          "Demandes de paiement par cartes-cadeaux",
          "Sites web gouvernementaux officiels"
        ],
        pa: [
          "ਗਿਫਟ ਕਾਰਡ ਰਾਹੀਂ ਭੁਗਤਾਨ ਦੀ ਬੇਨਤੀ",
          "ਅਧਿਕਾਰਤੀ ਸਰਕਾਰੀ ਵੈੱਬਸਾਈਟਾਂ"
        ]
      },
      correctIndex: 0
    }
  },
  {
    id: "emergency-fund",
    title: {
      en: "How to build an emergency fund",
      es: "Cómo construir un fondo de emergencia",
      hi: "आपातकालीन कोष कैसे बनाएं",
      tl: "Kung paano magbuo ng emergency fund",
      zh: "如何建立应急基金",
      ar: "كيفية بناء صندوق طوارئ",
      fr: "Comment constituer un fonds d'urgence",
      pa: "ਐਮਰਜੈਂਸੀ ਫੰਡ ਕਿਵੇਂ ਬਣਾਉਣਾ"
    },
    subtitle: {
      en: "Saving for unexpected expenses and job loss",
      es: "Ahorrar para gastos inesperados y pérdida de empleo",
      hi: "अप्रत्याशित खर्चों और नौकरी खोने के लिए बचत",
      tl: "Pag-save para sa mga hindi inaasahang gastos at pagkawala ng trabaho",
      zh: "为意外开支和失业储蓄",
      ar: "الادخار للنفقات غير المتوقعة وفقدان الوظيفة",
      fr: "Économiser pour les dépenses imprévues et la perte d'emploi",
      pa: "ਅਣਜਾਣੇ ਖਰਚਿਆਂ ਅਤੇ ਨੌਕਰੀ ਗੁਆਉਣ ਲਈ ਬਚਤ"
    },
    category: "Saving",
    content: {
      en: [
        "An emergency fund should cover 3-6 months of essential expenses like rent, utilities, food, and transportation. Start small: even $500 can help with unexpected car repairs or medical bills.",
        "Automate savings by setting up automatic transfers to a separate savings account. Keep this money separate from daily spending accounts to avoid temptation. Use high-yield savings accounts to earn better interest while keeping funds accessible."
      ],
      es: [
        "Un fondo de emergencia debe cubrir 3-6 meses de gastos esenciales como renta, servicios, comida y transporte. Empieza pequeño: incluso $500 pueden ayudar con reparaciones inesperadas de automóviles o facturas médicas.",
        "Automatiza los ahorros configurando transferencias automáticas a una cuenta de ahorros separada. Mantén este dinero separado de las cuentas de gastos diarios para evitar la tentación. Usa cuentas de ahorros de alto rendimiento para ganar mejores intereses mientras mantienes los fondos accesibles."
      ],
      hi: [
        "आपातकालीन कोष में 3-6 महीनों के आवश्यक खर्चों को शामिल करना चाहिए जैसे किराया, उपयोगिताएं, भोजन, और परिवहन। छोटे से शुरू करें: यहां तक कि $500 अप्रत्याशित कार मरम्मत या मेडिकल बिल में मदद कर सकता है।",
        "एक अलग बचत खाते में स्वचालित हस्तांतरण सेट करके बचत को स्वचालित करें। इस पैसे को दैनिक खर्च खातों से अलग रखें ताकि प्रलोभन से बच सकें। बेहतर ब्याज कमाने के लिए उच्च-उपज बचत खातों का उपयोग करें जब तक कोष सुलभ रहें।"
      ],
      tl: [
        "Ang isang emergency fund ay dapat sakop ang 3-6 buwan na essential expenses tulad ng renta, utilities, pagkain, at transportasyon. Magsimula sa maliit: kahit $500 ay maaaring tumulong sa mga hindi inaasahang car repairs o medical bills.",
        "I-automate ang savings sa pamamagitan ng pag-set up ng automatic transfers sa isang magkahiwalang savings account. Panatilihin ang perang ito nang hiwalay sa mga daily spending accounts upang iwasan ang tentasyon. Gamitin ang mga high-yield savings account upang kumita ng mas mahusay na interest habang pinapanatili ang mga pondo na accessible."
      ],
      zh: [
        "应急基金应涵盖3-6个月的基本开支，如租金、水电费、食物和交通。从小额开始：即使是500美元也可以帮助应对意外的汽车维修或医疗账单。",
        "通过设置自动转账到单独的储蓄账户来自动储蓄。将这笔钱与日常支出账户分开，以避免诱惑。使用高收益储蓄账户在保持资金可及性的同时赚取更好的利息。"
      ],
      ar: [
        "يجب أن يغطي صندوق الطوارئ 3-6 أشهر من النفقات الأساسية مثل الإيجار والمرافق والطعام والنقل. ابدأ صغيراً: حتى 500 دولار يمكن أن تساعد في إصلاحات السيارات غير المتوقعة أو الفواتير الطبية.",
        "أتمتة الادخار عن طريق إعداد تحويلات تلقائية إلى حساب توفير منفصل. احتفظ بهذا المال منفصلاً عن حسابات الإنفاق اليومي لتجنب الإغراء. استخدم حسابات التوفير ذات العائد المرتفع لكسب فائدة أفضل مع الحفاظ على الأموال متاحة."
      ],
      fr: [
        "Un fonds d'urgence devrait couvrir 3-6 mois de dépenses essentielles comme le loyer, les services publics, la nourriture et le transport. Commencez petit : même 500$ peuvent aider avec des réparations de voiture inattendues ou des factures médicales.",
        "Automatisez les économies en configurant des transferts automatiques vers un compte d'épargne séparé. Gardez cet argent séparé des comptes de dépenses quotidiennes pour éviter la tentation. Utilisez des comptes d'épargne à haut rendement pour gagner de meilleurs intérêts tout en gardant les fonds accessibles."
      ],
      pa: [
        "ਐਮਰਜੈਂਸੀ ਫੰਡ ਵਿੱਚ 3-6 ਮਹੀਨਿਆਂ ਦੇ ਜ਼ਰੂਰੀ ਖਰਚਿਆਂ ਨੂੰ ਸ਼ਾਮਲ ਕਰਨਾ ਚਾਹੀਦਾ ਹੈ ਜਿਵੇਂ ਕਿਰਾਇਆ, ਉਪਯੋਗਿਤਾਵਾਂ, ਭੋਜਨ, ਅਤੇ ਆਵਾਜਾਈ। ਛੋਟੇ ਤੋਂ ਸ਼ੁਰੂ ਕਰੋ: ਇੱਥੋਂ ਤੱਕ $500 ਅਣਜਾਣੇ ਕਾਰ ਮੁਰੰਮਤ ਜਾਂ ਮੈਡੀਕਲ ਬਿਲਾਂ ਵਿੱਚ ਮਦਦ ਕਰ ਸਕਦਾ ਹੈ।",
        "ਇੱਕ ਵੱਖਰੀ ਬਚਤ ਖਾਤੇ ਵਿੱਚ ਆਟੋਮੈਟਿਕ ਟ੍ਰਾਂਸਫਰ ਸੈੱਟ ਕਰਕੇ ਬਚਤ ਨੂੰ ਆਟੋਮੈਟ ਕਰੋ। ਇਸ ਪੈਸੇ ਨੂੰ ਰੋਜ਼ਾਣਾ ਖਰਚ ਖਾਤਿਆਂ ਤੋਂ ਵੱਖਰੇ ਰੱਖੋ ਤਾਂ ਜੋ ਲਾਲਸਾ ਤੋਂ ਬਚਿਆ ਜਾ ਸਕੇ। ਜਦੋਂ ਤੱਕ ਫੰਡ ਪਹੁੰਚ ਵਿੱਚ ਹੋਣ, ਬਿਹਤਰ ਵਿਆਜ ਕਮਾਉਣ ਲਈ ਉੱਚ-ਉਪਜ ਬਚਤ ਖਾਤਿਆਂ ਦੀ ਵਰਤੋਂ ਕਰੋ।"
      ]
    },
    quiz: {
      question: {
        en: "How many months of expenses should an emergency fund cover?",
        es: "¿Cuántos meses de gastos debería cubrir un fondo de emergencia?",
        hi: "आपातकालीन कोष में कितने महीनों के खर्च को कवर करना चाहिए?",
        tl: "Ilang buwan ng gastos ang dapat sakop ng isang emergency fund?",
        zh: "应急基金应涵盖几个月的开支？",
        ar: "كم شهراً من النفقات يجب أن يغطي صندوق الطوارئ؟",
        fr: "Combien de mois de dépenses un fonds d'urgence devrait-il couvrir ?",
        pa: "ਐਮਰਜੈਂਸੀ ਫੰਡ ਕਿੰਨੇ ਮਹੀਨਿਆਂ ਦੇ ਖਰਚਿਆਂ ਨੂੰ ਕਵਰ ਕਰਨਾ ਚਾਹੀਦਾ ਹੈ?"
      },
      options: {
        en: [
          "3-6 months",
          "1-2 weeks"
        ],
        es: [
          "3-6 meses",
          "1-2 semanas"
        ],
        hi: [
          "3-6 महीने",
          "1-2 सप्ताह"
        ],
        tl: [
          "3-6 buwan",
          "1-2 linggo"
        ],
        zh: [
          "3-6个月",
          "1-2周"
        ],
        ar: [
          "3-6 أشهر",
          "1-2 أسابيع"
        ],
        fr: [
          "3-6 mois",
          "1-2 semaines"
        ],
        pa: [
          "3-6 ਮਹੀਨੇ",
          "1-2 ਹਫ਼ਤੇ"
        ]
      },
      correctIndex: 0
    }
  },
  {
    id: "employment-rights",
    title: {
      en: "Understanding employment rights",
      es: "Entendiendo los derechos laborales",
      hi: "रोजगार अधिकारों को समझना",
      tl: "Pag-unawa sa employment rights",
      zh: "了解就业权利",
      ar: "فهم حقوق العمل",
      fr: "Comprendre les droits au travail",
      pa: "ਰੁਜ਼ਗਾਰ ਅਧਿਕਾਰਾਂ ਨੂੰ ਸਮਝਣਾ"
    },
    subtitle: {
      en: "Minimum wage, overtime, and workplace protections",
      es: "Salario mínimo, horas extras, y protecciones laborales",
      hi: "न्यूनतम वेतन, ओवरटाइम, और कार्यस्थल सुरक्षा",
      tl: "Minimum wage, overtime, at workplace protections",
      zh: "最低工资、加班和工作场所保护",
      ar: "الحد الأدنى للأجور، العمل الإضافي، وحمايات مكان العمل",
      fr: "Salaire minimum, heures supplémentaires, et protections au travail",
      pa: "ਘੱਟੋਂ ਤੋਂ ਵੇਤਨ, ਓਵਰਟਾਈਮ, ਅਤੇ ਕੰਮ-ਥਾਂ ਸੁਰੱਖਿਆ"
    },
    category: "Housing",
    content: {
      en: [
        "Both Canada and the US have minimum wage laws that vary by province or state. Overtime pay is typically required after 40 hours per week, often at 1.5 times your regular rate.",
        "You have rights to safe working conditions, breaks, and protection from discrimination. Keep copies of your employment contract and pay stubs. Labor standards offices can help with unpaid wages or unsafe conditions."
      ],
      es: [
        "Tanto Canadá como EE. UU. tienen leyes de salario mínimo que varían por provincia o estado. El pago de horas extras generalmente se requiere después de 40 horas por semana, a menudo a 1.5 veces tu tarifa regular.",
        "Tienes derechos a condiciones de trabajo seguras, descansos y protección contra la discriminación. Guarda copias de tu contrato de trabajo y talones de pago. Las oficinas de estándares laborales pueden ayudar con salarios no pagados o condiciones inseguras."
      ],
      hi: [
        "कनाडा और यूएस दोनों में न्यूनतम वेतन कानून हैं जो प्रांत या राज्य के अनुसार भिन्न होते हैं। ओवरटाइम भुगतान आमतौर प्रति सप्ताह 40 घंटे के बाद आवश्यक होता है, अक्सर आपकी नियमित दर का 1.5 गुना।",
        "आपको सुरक्षित कार्य स्थितियों, ब्रेक और भेदभाव से सुरक्षा का अधिकार है। अपने रोजगार अनुबंध और वेतन स्लिप की प्रतियां रखें। श्रम मानक कार्यालय अवैत वेतन या असुरक्षित स्थितियों में मदद कर सकते हैं।"
      ],
      tl: [
        "Ang Canada at US ay pareho may mga batas ng minimum wage na nag-iiba ayon sa probinsya o estado. Ang overtime pay ay karaniwang kinakailangan matapos ang 40 oras bawat linggo, madalas sa 1.5 beses ng iyong regular rate.",
        "Mayroon kang karapatan sa mga safe na working conditions, mga break, at proteksyon mula sa diskriminasyon. Panatilihin ang mga kopya ng iyong employment contract at pay stubs. Mga opisina ng labor standards ay maaaring tumulong sa mga unpaid wages o unsafe conditions."
      ],
      zh: [
        "加拿大和美国都有最低工资法，因省或州而异。加班费通常在每周40小时后要求，通常是您正常费率的1.5倍。",
        "您有权获得安全的工作条件、休息时间和免受歧视的保护。保留您的雇佣合同和工资单副本。劳工标准办公室可以帮助解决未付工资或不安全条件的问题。"
      ],
      ar: [
        "كلا من كندا والولايات المتحدة لديهما قوانين الحد الأدنى للأجور التي تختلف حسب المقاطعة أو الولاية. عادة ما يتطلب دفع العمل الإضافي بعد 40 ساعة في الأسبوع، غالباً 1.5 ضعف معدلك العادي.",
        "لديك حقوق في ظروف عمل آمنة، فترات راحة، وحماية من التمييز. احتفظ بنسخ من عقد عملك وكشوف رواتبك. مكاتب معايير العمل يمكنها المساعدة في الرواتب غير المدفوعة أو الظروف غير الآمنة."
      ],
      fr: [
        "Le Canada et les États-Unis ont tous deux des lois sur le salaire minimum qui varient par province ou état. Le paiement des heures supplémentaires est généralement requis après 40 heures par semaine, souvent à 1,5 fois votre taux normal.",
        "Vous avez droit à des conditions de travail sécuritaires, des pauses et une protection contre la discrimination. Gardez des copies de votre contrat de travail et de vos bulletins de paie. Les bureaux des normes du travail peuvent aider avec les salaires impayés ou les conditions dangereuses."
      ],
      pa: [
        "ਕੈਨੇਡਾ ਅਤੇ ਯੂਐਸ ਦੋਵੇਂ ਵਿੱਚ ਘੱਟੋਂ ਤੋਂ ਵੇਤਨ ਕਾਨੂਨ ਹਨ ਜੋ ਸੂਬੇ ਜਾਂ ਰਾਜ ਦੁਆਰਾ ਵੱਖਰੇ ਹੁੰਦੇ ਹਨ। ਓਵਰਟਾਈਮ ਭੁਗਤਾਨ ਆਮ ਤੌਰ 'ਤੇ ਹਫ਼ਤੇ ਵਿੱਚ 40 ਘੰਟਿਆਂ ਤੋਂ ਬਾਅਦ ਲੋੜੀਦਾ ਹੁੰਦਾ ਹੈ, ਅਕਸਰ ਤੁਹਾਡੀ ਨਿਯਮਤ ਦਰ ਦਾ 1.5 ਗੁਣਾ।",
        "ਤੁਹਾਡਾ ਸੁਰੱਖਿਅਤ ਕੰਮ ਸਥਿਤੀਆਂ, ਬ੍ਰੇਕ, ਅਤੇ ਭੇਦਭਾਅ ਤੋਂ ਸੁਰੱਖਿਆ ਦਾ ਅਧਿਕਾਰ ਹੈ। ਆਪਣੇ ਰੁਜ਼ਗਾਰ ਇਕਰਾਰਨਾਮੇ ਅਤੇ ਤਨਖਾਹ ਸਟਬਾਂ ਦੀਆਂ ਕਾਪੀਆਂ ਰੱਖੋ। ਲੇਬਰ ਸਟੈਂਡਰਡ ਦਫਤਰ ਅਦਾ ਤੁਹਾਡੇ ਵੇਤਨ ਜਾਂ ਅਸੁਰੱਖਿਅਤ ਸਥਿਤੀਆਂ ਵਿੱਚ ਮਦਦ ਕਰ ਸਕਦੇ ਹਨ।"
      ]
    },
    quiz: {
      question: {
        en: "When does overtime pay typically start?",
        es: "¿Cuándo comienza típicamente el pago de horas extras?",
        hi: "ओवरटाइम भुगतान आमतौर कब शुरू होता है?",
        tl: "Kailan karaniwang nag-start ang overtime pay?",
        zh: "加班费通常何时开始？",
        ar: "متى يبدأ عادةً دفع العمل الإضافي؟",
        fr: "Quand commence généralement le paiement des heures supplémentaires ?",
        pa: "ਓਵਰਟਾਈਮ ਭੁਗਤਾਨ ਆਮ ਤੌਰ 'ਤੇ ਕਦੋਂ ਸ਼ੁਰੂ ਹੁੰਦਾ ਹੈ?"
      },
      options: {
        en: [
          "After 40 hours per week",
          "After 20 hours per week"
        ],
        es: [
          "Después de 40 horas por semana",
          "Después de 20 horas por semana"
        ],
        hi: [
          "प्रति सप्ताह 40 घंटे के बाद",
          "प्रति सप्ताह 20 घंटे के बाद"
        ],
        tl: [
          "Matapos ang 40 oras bawat linggo",
          "Matapos ang 20 oras bawat linggo"
        ],
        zh: [
          "每周40小时后",
          "每周20小时后"
        ],
        ar: [
          "بعد 40 ساعة في الأسبوع",
          "بعد 20 ساعة في الأسبوع"
        ],
        fr: [
          "Après 40 heures par semaine",
          "Après 20 heures par semaine"
        ],
        pa: [
          "ਹਫ਼ਤੇ ਵਿੱਚ 40 ਘੰਟਿਆਂ ਤੋਂ ਬਾਅਦ",
          "ਹਫ਼ਤੇ ਵਿੱਚ 20 ਘੰਟਿਆਂ ਤੋਂ ਬਾਅਦ"
        ]
      },
      correctIndex: 0
    }
  },
  {
    id: "salary-negotiation",
    title: {
      en: "How to negotiate your salary",
      es: "Cómo negociar tu salario",
      hi: "अपने वेतन की बातचीत कैसे करें",
      tl: "Kung paano negosyohin ang iyong sahod",
      zh: "如何谈判你的薪水",
      ar: "كيفية التفاوض على راتبك",
      fr: "Comment négocier votre salaire",
      pa: "ਆਪਣੇ ਤਨਖਾਹ ਦੀ ਗੱਲ-ਬਾਤ ਕਿਵੇਂ ਕਰਨਾ"
    },
    subtitle: {
      en: "Research, preparation, and confident communication",
      es: "Investigación, preparación, y comunicación segura",
      hi: "शोध, तैयारी, और आत्मविश्वास से संचार",
      tl: "Research, paghahanda, at kumpiyadong komunikasyon",
      zh: "研究、准备和自信沟通",
      ar: "البحث، التحضير، والتواصل الواثق",
      fr: "Recherche, préparation, et communication confiante",
      pa: "ਖੋਜ, ਤਿਆਰੀ, ਅਤੇ ਆਤਮ-ਵਿਸ਼ਵਾਸ ਨਾਲ ਸੰਚਾਰ"
    },
    category: "Housing",
    content: {
      en: [
        "Research typical salaries for your role, experience level, and location using online resources. Consider your education, skills, and the value you bring to the company.",
        "Practice your negotiation points and be ready to discuss specific accomplishments. Know your minimum acceptable salary but aim higher. Be prepared for counter-offers and consider the full compensation package including benefits and bonuses."
      ],
      es: [
        "Investiga salarios típicos para tu rol, nivel de experiencia, y ubicación usando recursos en línea. Considera tu educación, habilidades, y el valor que aportas a la empresa.",
        "Practica tus puntos de negociación y prepárate para discutir logros específicos. Conoce tu salario mínimo aceptable pero apunta más alto. Prepárate para contraofertas y considera el paquete de compensación completo incluyendo beneficios y bonos."
      ],
      hi: [
        "ऑनलाइन संसाधनों का उपयोग करके अपनी भूमिका, अनुभव स्तर, और स्थान के लिए विशिष्ट वेतन का अनुसंधान करें। अपनी शिक्षा, कौशल, और कंपनी में आपके द्वारा लाए गए मूल्य पर विचार करें।",
        "अपने बातचीत बिंदुओं का अभ्यास करें और विशिष्ट उपलब्धियों पर चर्चा करने के लिए तैयार रहें। अपनी न्यूनतम स्वीकार्य वेतन जानें लेकिन उच्च लक्ष्य रखें। काउंटर-ऑफर के लिए तैयार रहें और लाभ और बोनस सहित पूर्ण प्रतिपूर्ति पैकेज पर विचार करें।"
      ],
      tl: [
        "Mag-research ng mga tipikal na sahod para sa iyong role, level ng experience, at lokasyon gamit ang mga online resource. Isipin ang iyong edukasyon, mga skill, at halaga na dala mo sa kumpanya.",
        "Praktisahin ang iyong mga punto ng negosasyon at maging handa na talakayin ang mga spesipikong accomplishments. Kilalanin ang iyong minimum acceptable na sahod ngunit aim nang mas mataas. Maging handa para sa counter-offers at isipin ang buong compensation package kabilang ang mga benepisyo at bonuses."
      ],
      zh: [
        "使用在线资源研究您职位、经验水平和地点的典型薪资。考虑您的教育、技能以及您为公司带来的价值。",
        "练习您的谈判要点，并准备讨论具体成就。了解您的最低可接受薪资，但要目标更高。为还价做好准备，并考虑包括福利和奖金在内的完整薪酬方案。"
      ],
      ar: [
        "ابحث عن الرواتب النموذجية لدورك ومستوى خبرتك وموقعك باستخدام الموارد عبر الإنترنت. ضع في اعتبارك تعليمك ومهاراتك والقيمة التي تجلبها للشركة.",
        "تدرب على نقاط التفاوض وكن مستعداً لمناقشة إنجازات محددة. اعرف الحد الأدنى للراتب المقبول ولكن استهدف أعلى. كن مستعداً للعروض المضادة وفكر في حزمة التعويض الكاملة بما في ذلك المزايا والمكافآت."
      ],
      fr: [
        "Recherchez les salaires typiques pour votre rôle, niveau d'expérience et localisation en utilisant des ressources en ligne. Considérez votre éducation, compétences et la valeur que vous apportez à l'entreprise.",
        "Pratiquez vos points de négociation et soyez prêt à discuter d'accomplissements spécifiques. Connaissez votre salaire minimum acceptable mais visez plus haut. Préparez-vous aux contre-offres et considérez le package de compensation complet y compris les avantages et bonus."
      ],
      pa: [
        "ਆਪਣੀ ਭੂਮਿਕਾ, ਤਜਰਬਾ ਪੱਧਰ, ਅਤੇ ਟਿਕਾਣੇ ਲਈ ਆਨਲਾਈਨ ਸਰੋਤਾਂ ਦੀ ਵਰਤੋਂ ਕਰਕੇ ਆਮ ਤਨਖਾਹ ਦਾ ਖੋਜ ਕਰੋ। ਆਪਣੀ ਸਿੱਖਿਆ, ਕੌਸ਼ਲਾਂ, ਅਤੇ ਕੰਪਨੀ ਵਿੱਚ ਤੁਹਾਡੇ ਵੱਲੋਂ ਲਿਆਂਦਾ ਮੁੱਲ ਬਾਰੇ ਵਿਚਾਰ ਕਰੋ।",
        "ਆਪਣੇ ਗੱਲ-ਬਾਤ ਬਿੰਦੂਆਂ ਦਾ ਅਭਿਆਸ ਕਰੋ ਅਤੇ ਖਾਸ ਉਪਲਬਧੀਆਂ 'ਤੇ ਚਰਚਾ ਕਰਨ ਲਈ ਤਿਆਰ ਰਹੋ। ਆਪਣੀ ਘੱਟੋਂ ਤੋਂ ਮਨਜ਼ੂਰ ਤਨਖਾਹ ਜਾਣੋ ਪਰ ਉੱਚ ਟੀਚਾ ਰੱਖੋ। ਕਾਊਂਟਰ-ਆਫਰ ਲਈ ਤਿਆਰ ਰਹੋ ਅਤੇ ਲਾਭ ਅਤੇ ਬੋਨਸ ਸਮੇਤ ਪੂਰੀ ਮੁਆਵਜ਼ਾ ਪੈਕੇਜ 'ਤੇ ਵਿਚਾਰ ਕਰੋ।"
      ]
    },
    quiz: {
      question: {
        en: "What should you research before salary negotiation?",
        es: "¿Qué deberías investigar antes de negociar tu salario?",
        hi: "वेतन बातचीत से पहले आपको क्या अनुसंधान करना चाहिए?",
        tl: "Ano ang dapat i-research bago ang salary negotiation?",
        zh: "薪资谈判前你应该研究什么？",
        ar: "ما الذي يجب أن تبحثه قبل التفاوض على الراتب؟",
        fr: "Que devriez-vous rechercher avant la négociation salariale ?",
        pa: "ਤਨਖਾਹ ਗੱਲ-ਬਾਤ ਤੋਂ ਪਹਿਲਾਂ ਤੁਹਾਨੂੰ ਕੀ ਖੋਜ ਕਰਨਾ ਚਾਹੀਦਾ ਹੈ?"
      },
      options: {
        en: [
          "Typical salaries for your role and location",
          "Only the company's profits"
        ],
        es: [
          "Salarios típicos para tu rol y ubicación",
          "Solo las ganancias de la compañía"
        ],
        hi: [
          "आपकी भूमिका और स्थान के लिए विशिष्ट वेतन",
          "केवल कंपनी का लाभ"
        ],
        tl: [
          "Tipikal na sahod para sa iyong role at lokasyon",
          "Lang ang profits ng kumpanya"
        ],
        zh: [
          "您职位和地点的典型薪资",
          "仅公司利润"
        ],
        ar: [
          "الرواتب النموذجية لدورك وموقعك",
          "فقط أرباح الشركة"
        ],
        fr: [
          "Salaires typiques pour votre rôle et localisation",
          "Seulement les profits de l'entreprise"
        ],
        pa: [
          "ਆਪਣੀ ਭੂਮਿਕਾ ਅਤੇ ਟਿਕਾਣੇ ਲਈ ਆਮ ਤਨਖਾਹ",
          "ਸਿਰਫ਼ ਕੰਪਨੀ ਦਾ ਮੁਨਾਫ਼ਾ"
        ]
      },
      correctIndex: 0
    }
  },
  {
    id: "car-loan",
    title: {
      en: "How to get a car loan",
      es: "Cómo obtener un préstamo para auto",
      hi: "कार लोन कैसे प्राप्त करें",
      tl: "Kung paano makakuha ng car loan",
      zh: "如何获得汽车贷款",
      ar: "كيفية الحصول على قرض سيارة",
      fr: "Comment obtenir un prêt automobile",
      pa: "ਕਾਰ ਲੋਨ ਕਿਵੇਂ ਪ੍ਰਾਪਤ ਕਰਨਾ"
    },
    subtitle: {
      en: "Financing options and getting approved",
      es: "Opciones de financiamiento y obtener aprobación",
      hi: "वित्तपोषण विकल्प और स्वीकृति प्राप्त करना",
      tl: "Mga financing options at pag-approve",
      zh: "融资选择和获得批准",
      ar: "خيارات التمويل والحصول على الموافقة",
      fr: "Options de financement et obtenir l'approbation",
      pa: "ਫਾਇਨੈਂਸਿੰਗ ਵਿਕਲਪ ਅਤੇ ਮਨਜ਼ੂਰੀ ਪ੍ਰਾਪਤ ਕਰਨਾ"
    },
    category: "Credit",
    content: {
      en: [
        "Car loans can come from banks, credit unions, or dealership financing. Compare interest rates, loan terms, and total costs. A larger down payment usually means better rates and lower monthly payments.",
        "Get pre-approved before shopping to know your budget. Check your credit score and fix any errors. Consider the total cost including interest, not just the monthly payment. Factor in insurance, maintenance, and fuel costs."
      ],
      es: [
        "Los préstamos para auto pueden venir de bancos, cooperativas de crédito, o financiamiento de concesionarios. Compara tasas de interés, términos del préstamo, y costos totales. Un pago inicial más grande generalmente significa mejores tasas y pagos mensuales más bajos.",
        "Obtén pre-aprobación antes de comprar para conocer tu presupuesto. Revisa tu puntaje de crédito y corrige cualquier error. Considera el costo total incluyendo intereses, no solo el pago mensual. Incluye seguros, mantenimiento y costos de combustible."
      ],
      hi: [
        "कार लोन बैंकों, क्रेडिट यूनियनों, या डीलरशिप फाइनेंसिंग से आ सकते हैं। ब्याज दरों, लोन अवधि, और कुल लागत की तुलना करें। बड़ा डाउन पेमेंट आमतौर बेहतर दरें और कम मासिक भुगतान का मतलब होता है।",
        "खरीदारी से पहले अपने बजट को जानने के लिए पूर्व-स्वीकृत प्राप्त करें। अपने क्रेडिट स्कोर की जांच करें और किसी भी त्रुटि को ठीक करें। केवल मासिक भुगतान के बजाय ब्याज सहित कुल लागत पर विचार करें। बीमा, रखरखाव, और ईंधन लागत को ध्यान में रखें।"
      ],
      tl: [
        "Ang mga car loan ay maaaring galing sa mga bangko, credit unions, o dealership financing. Ikompara ang mga interest rate, loan terms, at kabuuang gastos. Ang mas malaking down payment ay karaniwang nangangahulugan ng mas mahusay na rates at mas mababang monthly payments.",
        "Kumuha ng pre-approval bago mamimili para malaman ang iyong budget. Suriin ang iyong credit score at ayusin ang mga error. Isipin ang kabuuang gastos kasama ang interest, hindi lang ang monthly payment. Isama ang insurance, maintenance, at fuel costs."
      ],
      zh: [
        "汽车贷款可以来自银行、信用合作社或经销商融资。比较利率、贷款期限和总成本。较大的首付通常意味着更好的利率和更低的月供。",
        "在购车前获得预先批准以了解您的预算。检查您的信用评分并修复任何错误。考虑包括利息在内的总成本，而不仅仅是月供。将保险、维护和燃料成本计算在内。"
      ],
      ar: [
        "قروض السيارات يمكن أن تأتي من البنوك، اتحادات الائتمان، أو تمويل الوكالة. قارن أسعار الفائدة، شروط القرض، والتكاليف الإجمالية. الدفعة الأولى الكبيرة تعني عادة أسعاراً أفضل ودفعات شهرية أقل.",
        "احصل على موافقة مسبقة قبل التسوق لمعرفة ميزانيتك. تحقق من درجة الائتمان الخاصة بك وأصلح أي أخطاء. ضع في اعتبارك التكلفة الإجمالية بما في ذلك الفائدة، وليس فقط الدفعة الشهرية. ضع في اعتبارك تكاليف التأمين والصيانة والوقود."
      ],
      fr: [
        "Les prêts automobiles peuvent provenir de banques, coopératives de crédit, ou financement de concessionnaire. Comparez les taux d'intérêt, les termes du prêt, et les coûts totaux. Un acompte plus important signifie généralement de meilleurs taux et des paiements mensuels plus bas.",
        "Obtenez une pré-approbation avant d'acheter pour connaître votre budget. Vérifiez votre score de crédit et corrigez les erreurs. Considérez le coût total y compris les intérêts, pas seulement le paiement mensuel. Tenez compte des coûts d'assurance, d'entretien et de carburant."
      ],
      pa: [
        "ਕਾਰ ਲੋਨ ਬੈਂਕਾਂ, ਕ੍ਰੈਡਿਟ ਯੂਨੀਅਨਾਂ, ਜਾਂ ਡੀਲਰਸ਼ਿਪ ਫਾਈਨੈਂਸਿੰਗ ਤੋਂ ਆ ਸਕਦੇ ਹਨ। ਵਿਆਜ ਦਰਾਂ, ਲੋਨ ਸ਼ਰਤਾਂ, ਅਤੇ ਕੁੱਲ ਲਾਗਤ ਦੀ ਤੁਲਨਾ ਕਰੋ। ਵੱਡਾ ਡਾਊਨ ਭੁਗਤਾਨ ਆਮ ਤੌਰ 'ਤੇ ਬਿਹਤਰ ਦਰਾਂ ਅਤੇ ਘੱਟ ਮਾਸਿਕ ਭੁਗਤਾਨ ਦਾ ਮਤਲਬ ਹੁੰਦਾ ਹੈ।",
        "ਆਪਣੇ ਬਜਟ ਨੂੰ ਜਾਣਨ ਲਈ ਖਰੀਦਦਾਰੀ ਤੋਂ ਪਹਿਲਾਂ ਪ੍ਰੀ-ਅਪਰੂਵਡ ਪ੍ਰਾਪਤ ਕਰੋ। ਆਪਣਾ ਕ੍ਰੈਡਿਟ ਸਕੋਰ ਦੀ ਜਾਂਚ ਕਰੋ ਅਤੇ ਕਿਸੇ ਵੀ ਗਲਤੀ ਨੂੰ ਠੀਕ ਕਰੋ। ਸਿਰਫ਼ ਮਾਸਿਕ ਭੁਗਤਾਨ ਦੀ ਬਜਾਏ ਵਿਆਜ ਸਮੇਤ ਕੁੱਲ ਲਾਗਤ 'ਤੇ ਵਿਚਾਰ ਕਰੋ। ਬੀਮਾ, ਰੱਖ-ਰਖਾਅ, ਅਤੇ ਈਂਧਨ ਦੀਆਂ ਲਾਗਤਾਂ ਨੂੰ ਧਿਆਨ ਵਿੱਚ ਰੱਖੋ।"
      ]
    },
    quiz: {
      question: {
        en: "What should you consider when getting a car loan?",
        es: "¿Qué deberías considerar al obtener un préstamo para auto?",
        hi: "कार लोन लेते समय आपको क्या विचार करना चाहिए?",
        tl: "Ano ang dapat isipin sa pagkuha ng car loan?",
        zh: "获得汽车贷款时应该考虑什么？",
        ar: "ما الذي يجب أن تأخذه في الاعتبار عند الحصول على قرض سيارة؟",
        fr: "Que devriez-vous considérer en obtenant un prêt automobile ?",
        pa: "ਕਾਰ ਲੋਨ ਲੈਂਦੇ ਸਮੇਂ ਤੁਹਾਨੂੰ ਕੀ ਵਿਚਾਰ ਕਰਨਾ ਚਾਹੀਦਾ ਹੈ?"
      },
      options: {
        en: [
          "Total cost including interest and monthly payment",
          "Only the color of the car"
        ],
        es: [
          "Costo total incluyendo intereses y pago mensual",
          "Solo el color del auto"
        ],
        hi: [
          "ब्याज और मासिक भुगतान सहित कुल लागत",
          "केवल कार का रंग"
        ],
        tl: [
          "Kabuuang gastos kasama ang interest at monthly payment",
          "Lang ang kulay ng kotse"
        ],
        zh: [
          "包括利息和月供在内的总成本",
          "仅汽车颜色"
        ],
        ar: [
          "التكلفة الإجمالية بما في ذلك الفائدة والدفعة الشهرية",
          "فقط لون السيارة"
        ],
        fr: [
          "Coût total y compris les intérêts et le paiement mensuel",
          "Seulement la couleur de la voiture"
        ],
        pa: [
          "ਵਿਆਜ ਅਤੇ ਮਾਸਿਕ ਭੁਗਤਾਨ ਸਮੇਤ ਕੁੱਲ ਲਾਗਤ",
          "ਸਿਰਫ਼ ਕਾਰ ਦਾ ਰੰਗ"
        ]
      },
      correctIndex: 0
    }
  },
  {
    id: "home-buying",
    title: {
      en: "How to buy your first home",
      es: "Cómo comprar tu primera casa",
      hi: "अपना पहला घर कैसे खरीदें",
      tl: "Kung paano bumili ng iyong unang bahay",
      zh: "如何购买你的第一套房子",
      ar: "كيفية شراء منزلك الأول",
      fr: "Comment acheter votre première maison",
      pa: "ਆਪਣਾ ਪਹਿਲਾ ਘਰ ਕਿਵੇਂ ਖਰੀਦਣਾ"
    },
    subtitle: {
      en: "From saving to closing the deal",
      es: "Desde ahorrar hasta cerrar el trato",
      hi: "बचत से लेकर सौदा करने तक",
      tl: "Mula sa pag-save hanggang sa pagsasara ng deal",
      zh: "从储蓄到成交",
      ar: "من الادخار حتى إغلاق الصفقة",
      fr: "De l'épargne à la conclusion du marché",
      pa: "ਬਚਤ ਤੋਂ ਲੈ ਕੇ ਡੀਲ ਬੰਦ ਕਰਨ ਤੱਕ"
    },
    category: "Housing",
    content: {
      en: [
        "Start by improving your credit score and saving for a down payment (typically 5-20% of home price). Get pre-approved for a mortgage to know your budget before house hunting.",
        "Work with a real estate agent, make an offer, and get a home inspection. Factor in closing costs, property taxes, insurance, and maintenance. Don't rush - take time to find the right home and understand all terms."
      ],
      es: [
        "Comienza mejorando tu puntaje de crédito y ahorrando para un pago inicial (típicamente 5-20% del precio de la casa). Obtén pre-aprobación para una hipoteca para conocer tu presupuesto antes de buscar casa.",
        "Trabaja con un agente inmobiliario, haz una oferta, y obtén una inspección de la casa. Incluye costos de cierre, impuestos de propiedad, seguros y mantenimiento. No te apures - toma tiempo para encontrar la casa correcta y entender todos los términos."
      ],
      hi: [
        "अपने क्रेडिट स्कोर में सुधार करके और डाउन पेमेंट के लिए बचत करके शुरू करें (आमतौर घर की कीमत का 5-20%)। घर की खोज से पहले अपने बजट को जानने के लिए मॉर्गेज के लिए पूर्व-स्वीकृति प्राप्त करें।",
        "एक रियल एस्टेट एजेंट के साथ काम करें, ऑफर दें, और होम इंस्पेक्शन प्राप्त करें। क्लोजिंग लागत, संपत्ति कर, बीमा, और रखरखाव को ध्यान में रखें। जल्दी मत करें - सही घर खोजने और सभी शर्तों को समझने में समय लें।"
      ],
      tl: [
        "Magsimula sa pagpapabuti sa iyong credit score at pag-save para sa down payment (karaniwang 5-20% ng presyo ng bahay). Kumuha ng pre-approval para sa mortgage para malaman ang iyong budget bago ang house hunting.",
        "Magtrabaho sa isang real estate agent, gumawa ng offer, at kumuha ng home inspection. Isama ang mga closing costs, property taxes, insurance, at maintenance. Huwag magmadali - kumuha ng oras para hanapin ang tamang bahay at maunawaan ang lahat ng terms."
      ],
      zh: [
        "通过提高信用评分和为首付储蓄（通常是房价的5-20%）开始。在寻找房屋之前获得抵押贷款的预先批准以了解您的预算。",
        "与房地产经纪人合作，出价，并获得房屋检查。将交割成本、房产税、保险和维护费用计算在内。不要着急 - 花时间找到合适的房子并了解所有条款。"
      ],
      ar: [
        "ابدأ بتحسين درجة الائتمان الخاصة بك والادخار للدفعة الأولى (عادة 5-20% من سعر المنزل). احصل على موافقة مسبقة للرهن العقاري لمعرفة ميزانيتك قبل البحث عن منزل.",
        "اعمل مع وسيط عقاري، قدم عرضاً، واحصل على فحص للمنزل. ضع في اعتبارك تكاليف الإغلاق، ضرائب الممتلكات، التأمين، والصيانة. لا تستعجل - خذ وقتك لإيجاد المنزل المناسب وفهم جميع الشروط."
      ],
      fr: [
        "Commencez par améliorer votre score de crédit et économiser pour un acompte (généralement 5-20% du prix de la maison). Obtenez une pré-approbation hypothécaire pour connaître votre budget avant la chasse à la maison.",
        "Travaillez avec un agent immobilier, faites une offre, et obtenez une inspection de la maison. Tenez compte des frais de clôture, taxes foncières, assurances et entretien. Ne vous pressez pas - prenez le temps de trouver la bonne maison et comprendre tous les termes."
      ],
      pa: [
        "ਆਪਣੇ ਕ੍ਰੈਡਿਟ ਸਕੋਰ ਨੂੰ ਬਿਹਤਰ ਬਣਾ ਕੇ ਅਤੇ ਡਾਊਨ ਭੁਗਤਾਨ ਲਈ ਬਚਤ ਕਰਕੇ ਸ਼ੁਰੂ ਕਰੋ (ਆਮ ਤੌਰ 'ਤੇ ਘਰ ਦੀ ਕੀਮਤ ਦਾ 5-20%)। ਆਪਣੇ ਬਜਟ ਨੂੰ ਜਾਣਨ ਲਈ ਘਰ ਦੀ ਖੋਜ ਤੋਂ ਪਹਿਲਾਂ ਮਾਰਗੇਜ ਲਈ ਪ੍ਰੀ-ਅਪਰੂਵਡ ਪ੍ਰਾਪਤ ਕਰੋ।",
        "ਇੱਕ ਰੀਅਲ ਅਸਟੇਟ ਏਜੰਟ ਨਾਲ ਕੰਮ ਕਰੋ, ਆਫਰ ਦਿਓ, ਅਤੇ ਹੋਮ ਇੰਸਪੈਕਸ਼ਨ ਪ੍ਰਾਪਤ ਕਰੋ। ਕਲੋਜ਼ਿੰਗ ਲਾਗਤ, ਪ੍ਰਾਪਰਟੀ ਟੈਕਸ, ਬੀਮਾ, ਅਤੇ ਰੱਖ-ਰਖਾਅ ਨੂੰ ਧਿਆਨ ਵਿੱਚ ਰੱਖੋ। ਜਲਦੀ ਨਾ ਕਰੋ - ਸਹੀ ਘਰ ਲੱਭਣ ਅਤੇ ਸਾਰੀਆਂ ਸ਼ਰਤਾਂ ਨੂੰ ਸਮਝਣ ਲਈ ਸਮਾਂ ਲਵੋ।"
      ]
    },
    quiz: {
      question: {
        en: "What is a typical down payment percentage?",
        es: "¿Cuál es un porcentaje típico de pago inicial?",
        hi: "एक विशिष्ट डाउन पेमेंट प्रतिशत क्या है?",
        tl: "Ano ang tipikal na percentage ng down payment?",
        zh: "典型的首付百分比是多少？",
        ar: "ما هي النسبة المئوية النموذجية للدفعة الأولى؟",
        fr: "Quel est le pourcentage typique d'acompte ?",
        pa: "ਆਮ ਡਾਊਨ ਭੁਗਤਾਨ ਪ੍ਰਤੀਸ਼ਤ ਕੀ ਹੈ?"
      },
      options: {
        en: [
          "5-20% of home price",
          "50% of home price"
        ],
        es: [
          "5-20% del precio de la casa",
          "50% del precio de la casa"
        ],
        hi: [
          "घर की कीमत का 5-20%",
          "घर की कीमत का 50%"
        ],
        tl: [
          "5-20% ng presyo ng bahay",
          "50% ng presyo ng bahay"
        ],
        zh: [
          "房价的5-20%",
          "房价的50%"
        ],
        ar: [
          "5-20% من سعر المنزل",
          "50% من سعر المنزل"
        ],
        fr: [
          "5-20% du prix de la maison",
          "50% du prix de la maison"
        ],
        pa: [
          "ਘਰ ਦੀ ਕੀਮਤ ਦਾ 5-20%",
          "ਘਰ ਦੀ ਕੀਮਤ ਦਾ 50%"
        ]
      },
      correctIndex: 0
    }
  },
  {
    id: "childcare-costs",
    title: {
      en: "Managing childcare costs",
      es: "Manejo de costos de cuidado infantil",
      hi: "बाल देखभाल लागत प्रबंधन",
      tl: "Pamamahala sa mga childcare costs",
      zh: "管理育儿成本",
      ar: "إدارة تكاليف رعاية الأطفال",
      fr: "Gestion des coûts de garde d'enfants",
      pa: "ਬੱਚਿਆਂ ਦੀ ਦੇਖਭਾਲ ਦੀਆਂ ਲਾਗਤਾਂ ਦਾ ਪ੍ਰਬੰਧਨ"
    },
    subtitle: {
      en: "Finding affordable care and tax benefits",
      es: "Encontrando cuidado asequible y beneficios fiscales",
      hi: "किफायती देखभाल और कर लाभ खोजना",
      tl: "Paghahanap ng affordable care at tax benefits",
      zh: "找到负担得起的护理和税收优惠",
      ar: "العثور على رعاية ميسرة والمزايا الضريبية",
      fr: "Trouver des soins abordables et des avantages fiscaux",
      pa: "ਸਸਤੀ ਦੇਖਭਾਲ ਅਤੇ ਟੈਕਸ ਲਾਭ ਲੱਭਣਾ"
    },
    category: "Housing",
    content: {
      en: [
        "Childcare costs vary widely by location and type of care. Daycare centers, family childcare homes, and nannies have different price points. Many employers offer dependent care flexible spending accounts.",
        "Look into tax credits like the Child and Dependent Care Credit. Some areas offer subsidized childcare for low-income families. Consider sharing a nanny with other families or arranging work-from-home days to reduce costs."
      ],
      es: [
        "Los costos de cuidado infantil varían ampliamente según la ubicación y tipo de cuidado. Centros de cuidado diurno, hogares de cuidado familiar, y niñeras tienen diferentes puntos de precio. Muchos empleadores ofrecen cuentas de gastos flexibles para dependientes.",
        "Investigue créditos fiscales como el Crédito de Cuidado de Niños y Dependientes. Algunas áreas ofrecen cuidado infantil subsidiado para familias de bajos ingresos. Considere compartir una niñera con otras familias o arreglar días de trabajo desde casa para reducir costos."
      ],
      hi: [
        "बाल देखभाल लागत स्थान और देखभाल के प्रकार के अनुसार काफी भिन्न होती है। डेकेयर सेंटर, फैमिली चाइल्डकेयर होम, और नैनी के विभिन्न मूल्य बिंदु होते हैं। कई नियोक्ता निर्भर देखभाल लचीले खर्च खाते प्रदान करते हैं।",
        "बाल और निर्भर देखभाल क्रेडिट जैसे टैक्स क्रेडिट पर शोध करें। कुछ क्षेत्र निम्न-आय वाले परिवारों के लिए सब्सिडी वाली बाल देखभाल प्रदान करते हैं। लागत को कम करने के लिए अन्य परिवारों के साथ नैनी साझा करने या घर से काम करने के दिन व्यवस्थित करने पर विचार करें।"
      ],
      tl: [
        "Ang mga childcare costs ay nag-iiba nang malaki ayon sa lokasyon at uri ng care. Ang mga daycare centers, family childcare homes, at mga nanny ay may magkaibang price points. Maraming employer ang nag-aalok ng mga dependent care flexible spending accounts.",
        "Tingnan ang mga tax credits tulad ng Child and Dependent Care Credit. Ang ilang lugar ay nag-aalok ng subsidized childcare para sa mga low-income families. Isipin ang pagbabahagi ng nanny sa ibang mga pamilya o pag-aayos ng work-from-home days para bawasan ang mga gastos."
      ],
      zh: [
        "育儿成本因地点和护理类型而差异很大。日托中心、家庭托儿所和保姆有不同的价格点。许多雇主提供受抚养人护理弹性支出账户。",
        "研究诸如儿童和受抚养人护理抵免等税收抵免。一些地区为低收入家庭提供补贴托儿服务。考虑与其他家庭分享保姆或安排在家工作日以降低成本。"
      ],
      ar: [
        "تكاليف رعاية الأطفال تختلف بشكل كبير حسب الموقع ونوع الرعاية. مراكز الرعاية النهارية، منازل رعاية الأطفال العائلية، والمربيات لها نقاط سعرية مختلفة. العديد من أصحاب العمل يقدمون حسابات إنفاق مرنة للمعالين.",
        "ابحث عن أرصدة ضريبية مثل رصيد رعاية الأطفال والمعالين. بعض المناطق تقدم رعاية أطفال مدعومة للأسر ذات الدخل المنخفض. فكر في مشاركة مربية مع أسر أخرى أو ترتيب أيام العمل من المنزل لتقليل التكاليف."
      ],
      fr: [
        "Les coûts de garde d'enfants varient considérablement selon l'emplacement et le type de garde. Les centres de garde, les garderies familiales et les nounous ont des points de prix différents. De nombreux employeurs offrent des comptes de dépenses flexibles pour les personnes à charge.",
        "Recherchez des crédits d'impôt comme le Crédit pour la garde d'enfants et de personnes à charge. Certaines régions offrent des services de garde subventionnés pour les familles à faible revenu. Envisagez de partager une nounou avec d'autres familles ou d'organiser des jours de télétravail pour réduire les coûts."
      ],
      pa: [
        "ਬੱਚਿਆਂ ਦੀ ਦੇਖਭਾਲ ਦੀਆਂ ਲਾਗਤਾਂ ਟਿਕਾਣੇ ਅਤੇ ਦੇਖਭਾਲ ਦੀ ਕਿਸਮ ਦੁਆਰਾ ਬਹੁਤ ਵੱਖਰੀਆਂ ਹੁੰਦੀਆਂ ਹਨ। ਡੇਕੇਅਰ ਸੈਂਟਰ, ਪਰਿਵਾਰਕ ਬਾਲ ਦੇਖਭਾਲ ਘਰ, ਅਤੇ ਨੈਨੀ ਦੇ ਵੱਖਰੇ ਕੀਮਤ ਬਿੰਦੂ ਹੁੰਦੇ ਹਨ। ਕਈ ਨਿਯੋਕਤਾ ਨਿਰਭਰ ਦੇਖਭਾਲ ਲਚੀਲੇ ਖਰਚ ਖਾਤੇ ਪੇਸ਼ ਕਰਦੇ ਹਨ।",
        "ਬੱਚਾ ਅਤੇ ਨਿਰਭਰ ਦੇਖਭਾਲ ਕ੍ਰੈਡਿਟ ਵਰਗੇ ਟੈਕਸ ਕ੍ਰੈਡਿਟ 'ਤੇ ਖੋਜ ਕਰੋ। ਕੁਝ ਖੇਤਰ ਘੱਟ-ਆਮਦਨੀ ਵਾਲੇ ਪਰਿਵਾਰਾਂ ਲਈ ਸਬਸਿਡੀ ਵਾਲੀ ਬਾਲ ਦੇਖਭਾਲ ਪੇਸ਼ ਕਰਦੇ ਹਨ। ਲਾਗਤ ਨੂੰ ਘਟਾਉਣ ਲਈ ਹੋਰ ਪਰਿਵਾਰਾਂ ਨਾਲ ਨੈਨੀ ਸਾਂਝੀ ਕਰਨ ਜਾਂ ਘਰੋਂ ਕੰਮ ਕਰਨ ਵਾਲੇ ਦਿਨਾਂ ਦੀ ਵਿਵਸਥਾ 'ਤੇ ਵਿਚਾਰ ਕਰੋ।"
      ]
    },
    quiz: {
      question: {
        en: "What can help reduce childcare costs?",
        es: "¿Qué puede ayudar a reducir los costos de cuidado infantil?",
        hi: "बाल देखभाल लागत को कम करने में क्या मदद कर सकता है?",
        tl: "Ano ang makakatulong na bawasan ang mga childcare costs?",
        zh: "什么可以帮助降低育儿成本？",
        ar: "ما الذي يمكن أن يساعد في تقليل تكاليف رعاية الأطفال؟",
        fr: "Qu'est-ce qui peut aider à réduire les coûts de garde d'enfants ?",
        pa: "ਬੱਚਿਆਂ ਦੀ ਦੇਖਭਾਲ ਦੀਆਂ ਲਾਗਤਾਂ ਨੂੰ ਘਟਾਉਣ ਵਿੱਚ ਕੀ ਮਦਦ ਕਰ ਸਕਦਾ ਹੈ?"
      },
      options: {
        en: [
          "Tax credits and employer benefits",
          "Only using expensive private nannies"
        ],
        es: [
          "Créditos fiscales y beneficios del empleador",
          "Solo usar niñeras privadas caras"
        ],
        hi: [
          "टैक्स क्रेडिट और नियोक्ता लाभ",
          "केवल महंगी निजी नैनी का उपयोग"
        ],
        tl: [
          "Tax credits at employer benefits",
          "Lang paggamit ng mga mahal na private nannies"
        ],
        zh: [
          "税收抵免和雇主福利",
          "仅使用昂贵的私人保姆"
        ],
        ar: [
          "الأرصدة الضريبية ومزايا صاحب العمل",
          "فقط استخدام المربيات الخاصة باهظة الثمن"
        ],
        fr: [
          "Crédits d'impôt et avantages de l'employeur",
          "Utiliser seulement des nounous privées coûteuses"
        ],
        pa: [
          "ਟੈਕਸ ਕ੍ਰੈਡਿਟ ਅਤੇ ਨਿਯੋਕਤਾ ਲਾਭ",
          "ਸਿਰਫ਼ ਮਹਿੰਗੀਆਂ ਪ੍ਰਾਈਵੇਟ ਨੈਨੀਆਂ ਦੀ ਵਰਤੋਂ"
        ]
      },
      correctIndex: 0
    }
  },
  {
    id: "retirement-planning",
    title: {
      en: "Retirement planning for immigrants",
      es: "Planificación de la jubilación para inmigrantes",
      hi: "प्रवासियों के लिए सेवानिवृत्ति नियोजन",
      tl: "Retirement planning para sa mga imigrante",
      zh: "移民退休规划",
      ar: "تخطيط التقاعد للمهاجرين",
      fr: "Planification de la retraite pour les immigrants",
      pa: "ਪਰਵਾਸੀਆਂ ਲਈ ਰਿਟਾਇਰਮੈਂਟ ਪਲੈਨਿੰਗ"
    },
    subtitle: {
      en: "Starting early and understanding options",
      es: "Empezar temprano y entender opciones",
      hi: "जल्दी शुरू करना और विकल्प समझना",
      tl: "Pag-start nang maaga at pag-unawa sa mga opsyon",
      zh: "及早开始和了解选择",
      ar: "البكور في البدء وفهم الخيارات",
      fr: "Commencer tôt et comprendre les options",
      pa: "ਜਲਦੀ ਸ਼ੁਰੂ ਕਰਨਾ ਅਤੇ ਵਿਕਲਪ ਸਮਝਣਾ"
    },
    category: "Saving",
    content: {
      en: [
        "Start saving for retirement as early as possible, even small amounts grow over time. In Canada, consider RRSPs and TFSAs. In the US, look into 401(k)s and IRAs. Many employers offer matching contributions.",
        "If you have retirement savings from your home country, understand transfer rules and tax implications. Consider your retirement goals, expected expenses, and healthcare needs. The earlier you start, the more compound interest works in your favor."
      ],
      es: [
        "Comienza a ahorrar para la jubilación lo antes posible, incluso cantidades pequeñas crecen con el tiempo. En Canadá, considera RRSPs y TFSAs. En EE. UU., investiga 401(k)s y IRAs. Muchos empleadores ofrecen contribuciones equivalentes.",
        "Si tienes ahorros de jubilación de tu país de origen, entiende las reglas de transferencia e implicaciones fiscales. Considera tus metas de jubilación, gastos esperados y necesidades de atención médica. Cuanto antes comiences, más trabaja el interés compuesto a tu favor."
      ],
      hi: [
        "जितनी जल्दी हो सके सेवानिवृत्ति के लिए बचत करना शुरू करें, यहां तक कि छोटी राशि समय के साथ बढ़ती है। कनाडा में, RRSP और TFSA पर विचार करें। यूएस में, 401(k) और IRA पर शोध करें। कई नियोक्ता मिलान योगदान प्रदान करते हैं।",
        "यदि आपके पास अपने देश से सेवानिवृत्ति बचत है, तो हस्तांतरण नियमों और कर प्रभावों को समझें। अपने सेवानिवृत्ति लक्ष्य, अपेक्षित खर्च, और स्वास्थ्य देखभाल की आवश्यकताओं पर विचार करें। आप जितनी जल्दी शुरू करते हैं, चक्रवृद्धि ब्याज आपके पक्ष में उतना ही काम करता है।"
      ],
      tl: [
        "Magsimulang mag-save para sa retirement nang mas maaga hanggang sa maaari, kahit na maliliit na halaga ay lumalago sa paglipas ng panahon. Sa Canada, isaalang-alang ang mga RRSP at TFSAs. Sa US, tingnan ang mga 401(k) at IRAs. Maraming employer ang nag-aalok ng matching contributions.",
        "Kung mayroon kang retirement savings mula sa iyong home country, unawain ang mga transfer rules at tax implications. Isipin ang iyong retirement goals, inaasahang gastos, at healthcare needs. Mas maaga kang magsimula, mas maraming compound interest ang gumagawa sa pabor mo."
      ],
      zh: [
        "尽早开始为退休储蓄，即使是小额也会随着时间的推移而增长。在加拿大，考虑RRSP和TFSA。在美国，研究401(k)和IRA。许多雇主提供匹配缴款。",
        "如果您有来自您国家的退休储蓄，请了解转移规则和税务影响。考虑您的退休目标、预期开支和医疗保健需求。您开始得越早，复利就越对您有利。"
      ],
      ar: [
        "ابدأ الادخار للتقاعد في أقرب وقت ممكن، حتى المبالغ الصغيرة تنمو مع الوقت. في كندا، فكر في RRSPs و TFSAs. في الولايات المتحدة، ابحث في 401(k)s و IRAs. العديد من أصحاب العمل يقدمون مساهمات مطابقة.",
        "إذا كان لديك مدخرات تقاعد من بلدك الأصلي، افهم قواعد التحويل والآثار الضريبية. ضع في اعتبارك أهداف التقاعد المتوقعة، النفقات المتوقعة، واحتياجات الرعاية الصحية. كلما بدأت مبكراً، كلما عملت الفائدة المركبة لصالحك."
      ],
      fr: [
        "Commencez à épargner pour la retraite le plus tôt possible, même les petits montants augmentent avec le temps. Au Canada, considérez les REER et CELI. Aux États-Unis, explorez les 401(k) et IRA. De nombreux employeurs offrent des contributions assorties.",
        "Si vous avez des économies de retraite de votre pays d'origine, comprenez les règles de transfert et les implications fiscales. Considérez vos objectifs de retraite, les dépenses prévues et les besoins de santé. Plus vous commencez tôt, plus l'intérêt composé travaille en votre faveur."
      ],
      pa: [
        "ਜਿੰਨੀ ਜਲਦੀ ਹੋ ਸਕੇ ਸੇਵਾਨਿਵ੍ਰਿੱਤੀ ਲਈ ਬਚਤ ਕਰਨਾ ਸ਼ੁਰੂ ਕਰੋ, ਇੱਥੋਂ ਤੱਕ ਕਿ ਛੋਟੀ ਰਕਮ ਸਮੇਂ ਦੇ ਨਾਲ ਵਧਦੀ ਹੈ। ਕੈਨੇਡਾ ਵਿੱਚ, RRSPs ਅਤੇ TFSAs 'ਤੇ ਵਿਚਾਰ ਕਰੋ। ਯੂਐਸ ਵਿੱਚ, 401(k)ਸ ਅਤੇ IRAਸ 'ਤੇ ਖੋਜ ਕਰੋ। ਕਈ ਨਿਯੋਕਤਾ ਮੇਲਿੰਗ ਯੋਗਦਾਨ ਪ੍ਰਦਾਨ ਕਰਦੇ ਹਨ।",
        "ਜੇ ਤੁਹਾਡੇ ਕੋਲ ਆਪਣੇ ਦੇਸ਼ ਤੋਂ ਸੇਵਾਨਿਵ੍ਰਿੱਤੀ ਬਚਤ ਹੈ, ਤਾਂ ਟ੍ਰਾਂਸਫਰ ਨਿਯਮਾਂ ਅਤੇ ਟੈਕਸ ਪ੍ਰਭਾਵਾਂ ਨੂੰ ਸਮਝੋ। ਆਪਣੇ ਸੇਵਾਨਿਵ੍ਰਿੱਤੀ ਟੀਚਿਆਂ, ਉਮੀਦ ਦੇ ਖਰਚਾਂ, ਅਤੇ ਸਿਹਤ ਸੰਭਾਲ ਦੀਆਂ ਲੋੜਾਂ 'ਤੇ ਵਿਚਾਰ ਕਰੋ। ਤੁਸੀਂ ਜਿੰਨੀ ਜਲਦੀ ਸ਼ੁਰੂ ਕਰਦੇ ਹੋ, ਚੱਕਰਵਾਧੀ ਵਿਆਜ ਤੁਹਾਡੇ ਹੱਕ ਵਿੱਚ ਉਨਾ ਹੀ ਕੰਮ ਕਰਦਾ ਹੈ।"
      ]
    },
    quiz: {
      question: {
        en: "Why start retirement planning early?",
        es: "¿Por qué empezar la planificación de jubilación temprano?",
        hi: "जल्दी सेवानिवृत्ति नियोजन क्यों शुरू करें?",
        tl: "Bakit mag-start ng retirement planning nang maaga?",
        zh: "为什么要及早开始退休规划？",
        ar: "لماذا تبدأ تخطيط التقاعد مبكراً؟",
        fr: "Pourquoi commencer la planification de la retraite tôt ?",
        pa: "ਜਲਦੀ ਰਿਟਾਇਰਮੈਂਟ ਪਲੈਨਿੰਗ ਕਿਉਂ ਸ਼ੁਰੂ ਕਰਨਾ?"
      },
      options: {
        en: [
          "Compound interest works in your favor over time",
          "It's better to start when you're older"
        ],
        es: [
          "El interés compuesto trabaja a tu favor con el tiempo",
          "Es mejor empezar cuando eres mayor"
        ],
        hi: [
          "चक्रवृद्धि ब्याज समय के साथ आपके पक्ष में काम करता है",
          "जब आप बड़े होते हैं तब शुरू करना बेहतर है"
        ],
        tl: [
          "Ang compound interest ay gumagawa sa pabor mo sa paglipas ng panahon",
          "Mas magandang magsimula kapag mas matanda ka na"
        ],
        zh: [
          "复利随着时间的推移对您有利",
          "年纪大一点开始更好"
        ],
        ar: [
          "الفائدة المركبة تعمل لصالحك بمرور الوقت",
          "من الأفضل البدء عندما تكون أكبر سناً"
        ],
        fr: [
          "L'intérêt composé travaille en votre faveur avec le temps",
          "Il est préférable de commencer quand vous êtes plus âgé"
        ],
        pa: [
          "ਚੱਕਰਵਾਧੀ ਵਿਆਜ ਸਮੇਂ ਦੇ ਨਾਲ ਤੁਹਾਡੇ ਹੱਕ ਵਿੱਚ ਕੰਮ ਕਰਦਾ ਹੈ",
          "ਜਦੋਂ ਤੁਸੀਂ ਵੱਡੇ ਹੁੰਦੇ ਹੋ ਤਾਂ ਸ਼ੁਰੂ ਕਰਨਾ ਬਿਹਤਰ ਹੈ"
        ]
      },
      correctIndex: 0
    }
  },
  {
    id: "tax-basics",
    title: {
      en: "Understanding tax basics",
      es: "Entendiendo los básicos de impuestos",
      hi: "कर मूल बातें समझना",
      tl: "Pag-unawa sa mga tax basics",
      zh: "了解税务基础",
      ar: "فهم أساسيات الضرائب",
      fr: "Comprendre les bases de l'impôt",
      pa: "ਟੈਕਸ ਬੇਸਿਕਸ ਸਮਝਣਾ"
    },
    subtitle: {
      en: "Filing requirements and deductions",
      es: "Requisitos de presentación y deducciones",
      hi: "दाखिल करने की आवश्यकताएं और कटौती",
      tl: "Mga filing requirements at deductions",
      zh: "申报要求和扣除",
      ar: "متطلبات التقديم والخصومات",
      fr: "Exigences de dépôt et déductions",
      pa: "ਫਾਈਲਿੰਗ ਲੋੜਾਂ ਅਤੇ ਕਟੌਤੀਆਂ"
    },
    category: "Taxes",
    content: {
      en: [
        "In Canada, file taxes by April 30 each year. In the US, file by April 15. Keep records of income, expenses, and receipts. Newcomers may need to file partial-year returns depending on arrival date.",
        "Common deductions include work expenses, childcare costs, and moving expenses for a new job. Tax credits can reduce your tax bill directly. Consider using tax software or professional help, especially for complex situations."
      ],
      es: [
        "En Canadá, presenta impuestos antes del 30 de abril cada año. En EE. UU., presenta antes del 15 de abril. Mantén registros de ingresos, gastos y recibos. Los recién llegados pueden necesitar presentar declaraciones de año parcial dependiendo de la fecha de llegada.",
        "Deducciones comunes incluyen gastos de trabajo, costos de cuidado infantil, y gastos de mudanza para un nuevo trabajo. Los créditos fiscales pueden reducir tu factura de impuestos directamente. Considera usar software fiscal o ayuda profesional, especialmente para situaciones complejas."
      ],
      hi: [
        "कनाडा में, प्रत्येक वर्ष 30 अप्रैल तक कर दाखिल करें। यूएस में, 15 अप्रैल तक दाखिल करें। आय, खर्च, और रसीदों के रिकॉर्ड रखें। नए आने वालों को आगमन तिथि के आधार पर आंशिक-वर्ष रिटर्न दाखिल करने की आवश्यकता हो सकती है।",
        "आम कटौतियों में कार्य खर्च, बाल देखभाल लागत, और नए नौकरी के लिए स्थानांतरण खर्च शामिल हैं। टैक्स क्रेडिट सीधे आपके टैक्स बिल को कम कर सकते हैं। जटिल स्थितियों के लिए, विशेष रूप से, टैक्स सॉफ्टवेयर या पेशेवर सहायता का उपयोग करें।"
      ],
      tl: [
        "Sa Canada, mag-file ng mga buwis hanggang Abril 30 bawat taon. Sa US, mag-file hanggang Abril 15. Panatilihin ang mga tala ng income, gastos, at mga receipt. Ang mga bagong dating ay maaaring kailangang mag-file ng partial-year returns depende sa petsa ng pagdating.",
        "Karaniwang deductions ay kasama ang work expenses, childcare costs, at moving expenses para sa bagong trabaho. Ang mga tax credits ay maaaring direktang bawasan ang iyong tax bill. Isipin ang paggamit ng tax software o professional help, lalo na para sa mga complex na sitwasyon."
      ],
      zh: [
        "在加拿大，每年4月30日前报税。在美国，4月15日前报税。保留收入、支出和收据的记录。新移民可能需要根据抵达日期申报部分年度的退税。",
        "常见的扣除包括工作费用、育儿费用和新工作的搬迁费用。税收抵免可以直接减少您的税单。对于复杂情况，考虑使用税务软件或专业帮助。"
      ],
      ar: [
        "في كندا، قدم الضرائب بحلول 30 أبريل من كل عام. في الولايات المتحدة، قدم بحلول 15 أبريل. احتفظ بسجلات الدخل والمصروفات والإيصالات. الوافدون الجدد قد يحتاجون إلى تقديم إقرارات سنوية جزئية حسب تاريخ الوصول.",
        "الخصومات الشائعة تشمل المصروفات العملية، تكاليف رعاية الأطفال، ومصروفات الانتقال لوظيفة جديدة. الأرصدة الضريبية يمكن أن تقلل فاتورة الضرائب الخاصة بك مباشرة. فكر في استخدام برنامج ضريبي أو مساعدة احترافية، خاصة للوضعيات المعقدة."
      ],
      fr: [
        "Au Canada, déclarez les impôts avant le 30 avril chaque année. Aux États-Unis, déclarez avant le 15 avril. Gardez des registres des revenus, dépenses et reçus. Les nouveaux arrivants peuvent avoir besoin de déposer des déclarations partielles selon la date d'arrivée.",
        "Les déductions courantes incluent les dépenses de travail, les coûts de garde d'enfants et les dépenses de déménagement pour un nouvel emploi. Les crédits d'impôt peuvent réduire directement votre facture d'impôt. Considérez utiliser un logiciel fiscal ou une aide professionnelle, surtout pour les situations complexes."
      ],
      pa: [
        "ਕੈਨੇਡਾ ਵਿੱਚ, ਹਰ ਸਾਲ 30 ਅਪ੍ਰੈਲ ਤੱਕ ਟੈਕਸ ਦਾਖਲ ਕਰੋ। ਯੂਐਸ ਵਿੱਚ, 15 ਅਪ੍ਰੈਲ ਤੱਕ ਦਾਖਲ ਕਰੋ। ਆਮਦਨ, ਖਰਚ, ਅਤੇ ਰਸੀਦਾਂ ਦੇ ਰਿਕਾਰਡ ਰੱਖੋ। ਨਵੇਂ ਆਉਣ ਵਾਲਿਆਂ ਨੂੰ ਆਉਣ ਦੀ ਮਿਤੀ ਦੇ ਅਧਾਰ ਤੇ ਅੰਸ਼ਕ-ਸਾਲ ਰਿਟਰਨ ਦਾਖਲ ਕਰਨ ਦੀ ਲੋੜ ਹੋ ਸਕਦੀ ਹੈ।",
        "ਆਮ ਕਟੌਤੀਆਂ ਵਿੱਚ ਕੰਮ ਦੇ ਖਰਚ, ਬੱਚਿਆਂ ਦੀ ਦੇਖਭਾਲ ਦੀਆਂ ਲਾਗਤਾਂ, ਅਤੇ ਨਵੀਂ ਨੌਕਰੀ ਲਈ ਜਾਣ ਦੇ ਖਰਚ ਸ਼ਾਮਲ ਹਨ। ਟੈਕਸ ਕ੍ਰੈਡਿਟ ਸਿੱਧੇ ਤੁਹਾਡੇ ਟੈਕਸ ਬਿਲ ਨੂੰ ਘਟਾ ਸਕਦੇ ਹਨ। ਗੁੰਝਲਦਾਰ ਸਥਿਤੀਆਂ ਲਈ, ਖਾਸ ਤੌਰ 'ਤੇ, ਟੈਕਸ ਸਾਫਟਵੇਅਰ ਜਾਂ ਪੇਸ਼ੇਵਰ ਮਦਦ ਦੀ ਵਰਤੋਂ ਕਰੋ।"
      ]
    },
    quiz: {
      question: {
        en: "What is the tax filing deadline in Canada?",
        es: "¿Cuál es la fecha límite para presentar impuestos en Canadá?",
        hi: "कनाडा में कर दाखिल करने की अंतिम तिथि क्या है?",
        tl: "Ano ang tax filing deadline sa Canada?",
        zh: "加拿大的报税截止日期是什么时候？",
        ar: "ما هو الموعد النهائي لتقديم الضرائب في كندا؟",
        fr: "Quelle est la date limite de déclaration fiscale au Canada ?",
        pa: "ਕੈਨੇਡਾ ਵਿੱਚ ਟੈਕਸ ਫਾਈਲਿੰਗ ਦੀ ਆਖਰੀ ਮਿਤੀ ਕੀ ਹੈ?"
      },
      options: {
        en: [
          "April 30",
          "June 30"
        ],
        es: [
          "30 de abril",
          "30 de junio"
        ],
        hi: [
          "30 अप्रैल",
          "30 जून"
        ],
        tl: [
          "Abril 30",
          "Hunyo 30"
        ],
        zh: [
          "4月30日",
          "6月30日"
        ],
        ar: [
          "30 أبريل",
          "30 يونيو"
        ],
        fr: [
          "30 avril",
          "30 juin"
        ],
        pa: [
          "30 ਅਪ੍ਰੈਲ",
          "30 ਜੂਨ"
        ]
      },
      correctIndex: 0
    }
  }
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
