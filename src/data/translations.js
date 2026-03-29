// App copy used for multi-language support.
// Language codes:
// - en: English
// - hi: Hindi (हिन्दी)
// - tl: Tagalog
// - zh: Mandarin (中文)

export const SUPPORTED_LANGUAGES = [
  { code: "en", label: "English", buttonText: "EN" },
  { code: "hi", label: "हिन्दी", buttonText: "हि" },
  { code: "tl", label: "Tagalog", buttonText: "TL" },
  { code: "zh", label: "中文", buttonText: "中" },
];

const lessons = {
  "building-credit": {
    title: {
      en: "Building credit from zero",
      hi: "शून्य से क्रेडिट बनाना",
      tl: "Pagbuo ng credit mula sa simula",
      zh: "从零开始建立信用",
    },
    subtitle: {
      en: "How scores work and the habits that grow them",
      hi: "स्कोर कैसे काम करता है और कौन-सी आदतें उसे बढ़ाती हैं",
      tl: "Paano gumagana ang credit score at kung anong mga ugali ang nagpapalakas nito",
      zh: "分数如何产生，以及哪些习惯会让它变好",
    },
    content: {
      en: [
        "In Canada and the US, a credit score is a number lenders use to judge how reliably you repay borrowed money. You are not born with a score—you build it over time by using credit responsibly.",
        "A good start often looks like a secured card or a small credit limit, keeping balances low, and paying on time. Patience matters because most people need a few months of good history before their score improves.",
      ],
      hi: [
        "कनाडा और अमेरिका में क्रेडिट स्कोर वह नंबर है जिसे उधार देने वाले यह जानने के लिए देखते हैं कि आप पैसा कितनी भरोसेमंद तरीके से वापस करते हैं। आपका स्कोर जन्म से नहीं होता—आप जिम्मेदारी से क्रेडिट इस्तेमाल करके समय के साथ इसे बनाते हैं।",
        "शुरूआत के लिए अक्सर से큐र्ड कार्ड या कम क्रेडिट लिमिट मदद करती है, क्रेडिट कार्ड का बैलेंस कम रखना और हर महीने समय पर भुगतान करना भी जरूरी है। धैर्य रखें—अधिकांश लोगों के स्कोर में अच्छा बदलाव आने में कुछ महीने लगते हैं।",
      ],
      tl: [
        "Sa Canada at US, ang credit score ay isang numero na ginagamit ng mga nagpapautang para malaman kung gaano ka maaasahan magbayad ng hiniram na pera. Wala kang credit score sa simula—nabubuo ito habang ginagamit mo nang responsable ang credit.",
        "Magandang simula ang secured card o maliit na credit limit, pananatiling mababa ang balance, at laging pagbabayad sa oras. Mahalaga ang patience dahil karamihan ay kailangan ng ilang buwan ng magandang record bago gumanda ang score.",
      ],
      zh: [
        "在加拿大和美国，信用分数是放贷方用来判断你偿还借款的可靠程度的数字。你的信用分并不是与生俱来的——你需要通过负责任地使用信用，随时间逐步建立。",
        "良好的起点常常是办理有担保的信用卡或较小的信用额度、让信用卡余额保持较低，并且按时还款。要有耐心：大多数人需要几个月的良好记录，分数才会明显提升。",
      ],
    },
    quiz: {
      question: {
        en: "True or false: Paying your credit card balance in full and on time each month helps build a good credit history.",
        hi: "सही या गलत: हर महीने क्रेडिट कार्ड का बैलेंस पूरा और समय पर चुकाने से अच्छी क्रेडिट हिस्ट्री बनती है।",
        tl: "Tama o mali: Ang pagbabayad nang buo at on time sa credit card balance bawat buwan ay nakakatulong para buuin ang magandang credit history.",
        zh: "判断对错：每个月把信用卡欠款全额且按时还清，会帮助建立良好的信用记录。",
      },
      options: {
        en: ["True", "False"],
        hi: ["सही", "गलत"],
        tl: ["Tama", "Mali"],
        zh: ["对", "错"],
      },
    },
    correctIndex: 0,
    meta: { category: "Credit" },
  },
  "open-bank-account": {
    title: {
      en: "How to open a bank account",
      hi: "बैंक अकाउंट कैसे खोलें",
      tl: "Paano magbukas ng bank account",
      zh: "如何开立银行账户",
    },
    subtitle: {
      en: "What to bring and which account type to start with",
      hi: "क्या साथ रखें और किस तरह के अकाउंट से शुरू करें",
      tl: "Ano ang ihahanda at anong uri ng account ang simula",
      zh: "需要带什么、从哪种账户开始",
    },
    content: {
      en: [
        "Banks and credit unions need to verify who you are, so you will usually bring government ID, proof of address, and immigration or work documents. Many places let you book an appointment or start online and finish in a branch.",
        "A chequing account helps with everyday spending and bill payments, while a savings account is for money you do not need right away. Before you open an account, ask about monthly fees and any requirements for IDs or numbers like SIN or Social Security.",
      ],
      hi: [
        "बैंक और क्रेडिट यूनियन को आपका पहचान सत्यापित करने की जरूरत होती है, इसलिए आमतौर पर आपको सरकारी पहचान पत्र, पता का प्रमाण और इमिग्रेशन या वर्क दस्तावेज लाने पड़ते हैं। कई जगह आप अपॉइंटमेंट बुक कर सकते हैं या ऑनलाइन शुरू करके ब्रांच में जाकर पूरा कर सकते हैं।",
        "चेकिंग (chequing) अकाउंट रोज़मर्रा के खर्च और बिल भुगतान के लिए होता है, जबकि सेविंग (savings) अकाउंट उन पैसों के लिए होता है जो आपको तुरंत नहीं चाहिए। अकाउंट खोलने से पहले मासिक फीस और SIN या Social Security जैसे नंबर की जरूरतों के बारे में पूछें।",
      ],
      tl: [
        "Kailangan ng bangko at credit union na i-verify kung sino ka, kaya karaniwan kang magdadala ng government ID, proof of address, at immigration o work documents. Maraming lugar ang puwedeng magpa-schedule muna o magsimula online at tapusin sa sangay.",
        "Ang chequing account ay para sa pang-araw-araw na gastusin at pagbabayad ng bills, habang ang savings account ay para sa pera na hindi mo agad kailangan. Bago magbukas, alamin kung magkano ang buwanang fees at kung may requirements sa ID o mga numero gaya ng SIN o Social Security.",
      ],
      zh: [
        "银行和信用合作社需要核实你的身份，所以你通常要准备政府身份证件、住址证明，以及移民或工作相关文件。很多地方允许你预约，或先线上开始再到分行完成。",
        "支票账户（chequing）适合日常消费和缴纳账单，储蓄账户（savings）适合暂时不需要的资金。开设账户前，先问清楚月费以及对 SIN 或 Social Security 等号码的要求。",
      ],
    },
    quiz: {
      question: {
        en: "Which account is usually best for paying rent and buying groceries every week?",
        hi: "किराया देने और हर हफ्ते किराने का सामान खरीदने के लिए आमतौर पर कौन-सा अकाउंट सबसे अच्छा होता है?",
        tl: "Aling account ang kadalasang pinakaangkop para sa pagbabayad ng upa at pagbili ng groceries kada linggo?",
        zh: "通常用来付房租、每周买日常食物的账户一般是哪一种？",
      },
      options: {
        en: ["A savings account only", "A chequing account"],
        hi: ["सिर्फ़ सेविंग अकाउंट", "चेकिंग (chequing) अकाउंट"],
        tl: ["Savings account lang", "Chequing account"],
        zh: ["只有储蓄账户", "支票账户（chequing）"],
      },
    },
    correctIndex: 1,
    meta: { category: "Banking" },
  },
  "renting-first-apartment": {
    title: {
      en: "Renting your first apartment",
      hi: "अपना पहला अपार्टमेंट किराये पर लेना",
      tl: "Pagrenta ng iyong unang apartment",
      zh: "首次租房：你需要知道的事",
    },
    subtitle: {
      en: "Applications, deposits, and reading your lease",
      hi: "आवेदन, डिपॉज़िट, और लीज़ (किराये का अनुबंध) पढ़ना",
      tl: "Pag-aaplay, deposit, at pagbabasa ng lease",
      zh: "申请、押金，以及阅读租约",
    },
    content: {
      en: [
        "Landlords often ask for proof of income, references, and sometimes a credit check. A security deposit is money held in case of damage or unpaid rent, and local tenant rules set the limits.",
        "Your lease is a contract, so read the rent amount, due date, rules for guests and pets, and what happens if you leave early. Keep copies of emails and signed papers, and do a move-in checklist with photos.",
      ],
      hi: [
        "मकान मालिक अक्सर आय का प्रमाण, रेफरेंस, और कभी-कभी क्रेडिट चेक मांगते हैं। सिक्योरिटी डिपॉज़िट वह पैसा होता है जो नुकसान या बकाया किराये के लिए रखा जाता है, और स्थानीय किरायेदार नियम इसकी सीमाएँ तय करते हैं।",
        "लीज़ एक अनुबंध है, इसलिए किराया राशि, भुगतान की तारीख, मेहमान और पालतू जानवरों के नियम, और जल्दी छोड़ने पर क्या होगा—सब पढ़ें। ईमेल और साइन किए गए कागज़ों की कॉपी रखें, और मूव-इन चेकलिस्ट फोटो के साथ करें।",
      ],
      tl: [
        "Karaniwan sa may-ari ng apartment ang humihiling ng proof of income, references, at minsan ay credit check. Ang security deposit ay pera na hawak kung may pinsala o hindi nabayarang upa, at may mga lokal na patakaran para sa mga limitasyon.",
        "Ang lease ay kontrata, kaya basahin ang upa, takdang petsa, rules para sa bisita at alagang hayop, at kung ano ang mangyayari kapag umalis ka nang maaga. Itago ang kopya ng mga email at signed papers, at gumawa ng move-in checklist na may mga larawan.",
      ],
      zh: [
        "房东通常会要求收入证明、推荐信，有时还会做信用审查。押金（security deposit）是为了在出现损坏或未付房租时作保障，具体额度受当地租房规则影响。",
        "租约（lease）是合同，所以要阅读租金金额、到期日、访客和宠物规则，以及如果你提前搬走会怎样。保留邮件和签署文件的副本，并在入住时做一份带照片的验房清单。",
      ],
    },
    quiz: {
      question: {
        en: "Why is it smart to read your whole lease before you sign?",
        hi: "साइन करने से पहले पूरी लीज़ पढ़ना समझदारी क्यों है?",
        tl: "Bakit kapaki-pakinabang na basahin ang buong lease bago ka pumirma?",
        zh: "为什么签约前通读整份租约很重要？",
      },
      options: {
        en: [
          "So you know your rights, rent rules, and fees before you commit",
          "Leases are optional and do not affect you legally",
        ],
        hi: [
          "ताकि आप कमिट करने से पहले अपने अधिकार, किराये के नियम और फीस जानें",
          "लीज़ वैकल्पिक हैं और कानूनी तौर पर आप पर असर नहीं डालती",
        ],
        tl: [
          "Para alam mo ang iyong rights, rules sa upa, at mga bayarin bago ka sumang-ayon",
          "Optional ang lease at hindi ka legal na naaapektuhan",
        ],
        zh: [
          "这样你能在承诺之前了解自己的权利、租金规则和费用",
          "租约是可选的，并且不会从法律上影响你",
        ],
      },
    },
    correctIndex: 0,
    meta: { category: "Housing" },
  },
  "understanding-pay-stub": {
    title: {
      en: "Understanding your pay stub",
      hi: "अपनी पे-स्लिप (pay stub) समझना",
      tl: "Pag-unawa sa iyong pay stub",
      zh: "理解你的工资单（pay stub）",
    },
    subtitle: {
      en: "Gross pay, deductions, and what lands in your account",
      hi: "ग्रॉस पे, कटौतियाँ, और जो रकम आपके खाते में आती है",
      tl: "Gross pay, deductions, at kung ano ang pumapasok sa iyong account",
      zh: "毛工资、扣除项，以及最终入账金额",
    },
    content: {
      en: [
        "Your gross pay is what you earn before anything is taken out. Deductions often include income tax, government programs (like CPP/EI in Canada or Social Security/Medicare in the US), and sometimes benefits your employer offers.",
        "Net pay is what actually goes to your bank, also called take-home pay. Checking each pay period helps you spot mistakes and understand how withholdings and benefits affect your cash flow.",
      ],
      hi: [
        "आपका ग्रॉस पे वह होता है जो आप कमाते हैं उससे पहले कि कुछ भी कटौती हो। कटौतियों में अक्सर इनकम टैक्स, सरकार के प्रोग्राम (कनाडा में CPP/EI या अमेरिका में Social Security/Medicare जैसी चीजें) और कभी-कभी आपके नियोक्ता द्वारा दिए जाने वाले लाभ शामिल होते हैं।",
        "नेट पे वह रकम है जो वास्तव में आपके बैंक खाते में जाती है, जिसे take-home pay भी कहते हैं। हर पे-पिरियड देखकर आप गलतियाँ पकड़ सकते हैं और समझ सकते हैं कि टैक्स withholdings और लाभ आपके कैश फ्लो को कैसे प्रभावित करते हैं।",
      ],
      tl: [
        "Ang gross pay ay kung magkano ang kinikita mo bago pa mabawasan. Kadalasan, may income tax, mga programang para sa gobyerno (gaya ng CPP/EI sa Canada o Social Security/Medicare sa US), at minsan ay mga benepisyong inaalok ng employer.",
        "Ang net pay ay kung ano talaga ang napupunta sa bangko mo, o take-home pay. Kapag tinitingnan mo ang bawat pay period, mas madali mong mahahanap ang mga error at mauunawaan kung paano nagbabago ang withholdings at benefits sa iyong cash flow.",
      ],
      zh: [
        "毛工资（gross pay）指的是在扣除任何项目之前你赚到的金额。扣除项通常包括所得税、政府项目（加拿大的 CPP/EI 或美国的 Social Security/Medicare），有时也会包含雇主提供的福利。",
        "净到手工资（net pay）是最终进入你银行账户的金额，也叫 take-home pay。每次发薪时核对一下，可以帮助你发现错误，并理解代扣项目和福利如何影响你的现金流。",
      ],
    },
    quiz: {
      question: {
        en: "What does “net pay” usually mean on a pay stub?",
        hi: "पे-स्लिप पर “नेट पे” का आमतौर पर क्या मतलब होता है?",
        tl: "Ano ang karaniwang ibig sabihin ng “net pay” sa pay stub?",
        zh: "工资单上“净到手工资（net pay）”通常是什么意思？",
      },
      options: {
        en: ["Pay before any taxes or deductions", "Pay after deductions—the amount you actually receive"],
        hi: ["टैक्स/कटौतियों से पहले की रकम", "कटौतियों के बाद—वही रकम जो आपको सच में मिलती है"],
        tl: ["Sahod bago pa mabawasan ng taxes o deductions", "Sahod pagkatapos ng deductions—ang halagang talagang matatanggap mo"],
        zh: ["扣税和扣除前的金额", "扣除之后的金额——你实际拿到的钱"],
      },
    },
    correctIndex: 1,
    meta: { category: "Taxes" },
  },
  "first-tax-return": {
    title: {
      en: "Filing your first tax return",
      hi: "अपना पहला टैक्स रिटर्न दाखिल करना",
      tl: "Pag-file ng iyong unang tax return",
      zh: "第一次报税（tax return）",
    },
    subtitle: {
      en: "Deadlines, documents, and getting help safely",
      hi: "डेडलाइन, दस्तावेज़, और सुरक्षित तरीके से मदद लेना",
      tl: "Deadlines, mga dokumento, at ligtas na paghingi ng tulong",
      zh: "截止日期、需要的材料，以及安全地寻求帮助",
    },
    content: {
      en: [
        "A tax return reports your income and tells the government whether you already paid enough tax through withholding or whether you owe more or may get a refund. In Canada you often file federal and maybe a provincial return; in the US you file federal and sometimes a state return.",
        "Gather your slips like T4s or W-2s, plus relevant records (for example, rent paid if it matters). Use reputable software, free tax help, or a licensed preparer—avoid anyone who promises a huge refund without reviewing your documents.",
      ],
      hi: [
        "टैक्स रिटर्न आपकी आय की जानकारी देता है और बताता है कि क्या आपने withholding के जरिए पर्याप्त टैक्स चुका दिया है, या आपको और टैक्स देना है/आपको रिफंड मिल सकता है। कनाडा में आप अक्सर फेडरल रिटर्न और जरूरत पर प्रांतीय (provincial) रिटर्न फाइल करते हैं; अमेरिका में फेडरल और कभी-कभी राज्य (state) रिटर्न।",
        "T4s या W-2s जैसे स्लिप्स और संबंधित रिकॉर्ड (जैसे किराया भुगतान अगर लागू हो) इकट्ठा करें। भरोसेमंद सॉफ्टवेयर, मुफ्त टैक्स मदद, या लाइसेंस्ड preparer से मदद लें—ऐसे लोगों से बचें जो आपके दस्तावेज़ देखे बिना “बहुत बड़ा रिफंड” का वादा करें।",
      ],
      tl: [
        "Ang tax return ay nag-uulat ng iyong income at sinasabi kung sapat na ba ang tax na na-withhold na, o kung may dagdag na kailangan pang bayaran—o kung may refund na pwedeng makuha. Sa Canada madalas may federal return at minsan ay provincial return; sa US may federal return at minsan ay state return.",
        "Maghanda ng mga slip gaya ng T4s o W-2s, pati na rin ang mga tamang record (halimbawa, rent paid kung may kinalaman ito). Gumamit ng reputable na software, libreng tulong sa buwis, o licensed tax preparer—iwasan ang mga nangangakong malaking refund nang hindi muna tinitingnan ang iyong mga dokumento.",
      ],
      zh: [
        "税务申报（tax return）会记录你的收入，并告诉政府：你通过预扣（withholding）已经缴足了税，还是你还需要补缴，或可能会收到退税。在加拿大通常会报联邦税，必要时还要报省税；在美国一般报联邦税，通常也会报州税。",
        "准备好 T4、W-2 等收入证明，以及相关记录（例如如果涉及可抵扣项，提供租金记录）。选择可信的报税软件、正规免费的税务帮助或持牌代办人员——避免在不看你材料的情况下就承诺“巨额退税”的人。",
      ],
    },
    quiz: {
      question: {
        en: "What is one main purpose of filing a tax return?",
        hi: "टैक्स रिटर्न फाइल करने का एक मुख्य उद्देश्य क्या है?",
        tl: "Ano ang isa sa pangunahing layunin ng pag-file ng tax return?",
        zh: "报税的一个主要目的是什么？",
      },
      options: {
        en: [
          "To report income and settle taxes owed or claim a refund",
          "To tell your bank how much you spend on groceries",
        ],
        hi: [
          "आय की रिपोर्ट करना और जो टैक्स बाकी है उसे तय करना या रिफंड मांगना",
          "आपके बैंक को बताना कि आप किराने पर कितना खर्च करते हैं",
        ],
        tl: [
          "I-report ang income at ayusin kung magkano ang dapat bayaran o claim ng refund",
          "Sabihin sa bangko kung magkano ang ginagastos mo sa groceries",
        ],
        zh: [
          "申报收入，并结算你需要缴纳的税额或申请退税",
          "告诉银行你在杂货上花了多少钱",
        ],
      },
    },
    correctIndex: 0,
    meta: { category: "Taxes" },
  },
  "rrsp-401k": {
    title: {
      en: "What is an RRSP or 401(k)?",
      hi: "RRSP या 401(k) क्या है?",
      tl: "Ano ang RRSP o 401(k)?",
      zh: "RRSP 或 401(k) 是什么？",
    },
    subtitle: {
      en: "Tax-friendly ways to save for retirement",
      hi: "रिटायरमेंट के लिए टैक्स-फ्रेंडली तरीके से बचत",
      tl: "Mga paraan na may tax advantages para makapag-ipon para sa retirement",
      zh: "适合税务规划的退休储蓄方式",
    },
    content: {
      en: [
        "An RRSP (Canada) and a 401(k) (US) are retirement accounts that can offer tax advantages. Money you contribute may lower your taxable income now, and investments inside the account can grow over many years.",
        "In the US, some employer 401(k) plans also match part of what you save, which can be extra money. Each plan has rules for yearly limits and when you can withdraw without penalties, so read the plan summary or ask your provider.",
      ],
      hi: [
        "RRSP (कनाडा) और 401(k) (अमेरिका) रिटायरमेंट के लिए बनाए गए खाते हैं, जिनमें अक्सर टैक्स के फायदे हो सकते हैं। आप जो पैसा योगदान करते हैं वह अभी आपकी टैक्सेबल इनकम कम कर सकता है, और खाते के अंदर निवेश कई सालों में बढ़ सकते हैं।",
        "अमेरिका में कुछ नियोक्ता 401(k) योजनाएँ आपके योगदान का कुछ हिस्सा भी मिलाती हैं (match), जो अतिरिक्त पैसा हो सकता है। हर योजना में सालाना लिमिट और बिना पेनल्टी कब निकाल सकते हैं—ऐसे नियम होते हैं, इसलिए प्लान का सार पढ़ें या अपने provider से पूछें।",
      ],
      tl: [
        "Ang RRSP (Canada) at 401(k) (US) ay retirement accounts na maaaring may tax advantages. Ang pera na inaambag mo ay puwedeng magpababa ng iyong taxable income ngayon, at ang investments sa loob ng account ay puwedeng lumago sa loob ng maraming taon.",
        "Sa US, minsan may employer match ang 401(k) plan, ibig sabihin may dagdag na pera mula sa employer kapag nag-participate ka. May mga patakaran din sa yearly limits at kung kailan puwede ang withdrawal nang hindi napaparusahan, kaya basahin ang plan summary o magtanong sa provider.",
      ],
      zh: [
        "RRSP（加拿大）和 401(k)（美国）是退休储蓄账户，通常可能提供一定的税务优势。你在账户中投入的资金，可能会降低你当前需要缴税的收入；而账户内的投资则可以在多年里持续增长。",
        "在美国，一些雇主的 401(k) 计划还会对你的储蓄进行部分配比（employer match），这可能意味着额外的钱。每个计划都有关于年度限额以及何时可以在不受惩罚的情况下提取资金的规则，所以请阅读计划摘要或咨询你的服务方。",
      ],
    },
    quiz: {
      question: {
        en: "What is a common benefit of an employer 401(k) plan in the US?",
        hi: "अमेरिका में नियोक्ता 401(k) योजना का एक आम फायदा क्या है?",
        tl: "Ano ang karaniwang benepisyo ng employer 401(k) plan sa US?",
        zh: "美国的雇主 401(k) 计划常见的好处是什么？",
      },
      options: {
        en: [
          "Your employer may match some of your contributions",
          "The government guarantees your investments will double every year",
        ],
        hi: [
          "आपका नियोक्ता आपकी कुछ योगदान राशि मैच कर सकता है",
          "सरकार गारंटी देती है कि आपके निवेश हर साल दोगुने हो जाएंगे",
        ],
        tl: [
          "Maaaring i-match ng employer ang ilan sa iyong contributions",
          "Gagarantiyahan ng gobyerno na dodoble ang investments mo kada taon",
        ],
        zh: [
          "你的雇主可能会匹配（配比）你的一部分缴纳",
          "政府保证你的投资每年都会翻倍",
        ],
      },
    },
    correctIndex: 0,
    meta: { category: "Saving" },
  },
};

export const translations = {
  en: {
    nav: {
      learn: "Learn",
      score: "Score",
      tools: "Tools",
      offers: "Offers",
    },
    common: {
      completed: "Completed",
      nextLesson: "Next lesson",
      allLessons: "All lessons",
      correct: "Correct!",
      correctSuffix: "Nice work—you have finished this lesson.",
      wrongTryOther: "Not quite—try the other option.",
    },
    learn: {
      title: "Learn",
      subtitle:
        "Short lessons for newcomers to Canada and the United States. Tap a lesson to read and take the quick check.",
      progressTitle: "Your progress",
      progressText: "{completedCount} of {lessonCount} lessons complete",
      allLessonsTitle: "All lessons",
      detailLinkAllLessons: "All lessons",
      detailInPlainEnglish: "In plain English",
      detailQuickCheck: "Quick check",
      detailNextLesson: "Next lesson",
      detailBackToAllLessons:
        "Back to all lessons — you finished all {lessonCount}!",
      categories: {
        Credit: "Credit",
        Banking: "Banking",
        Housing: "Housing",
        Taxes: "Taxes",
        Saving: "Saving",
      },
    },
    score: {
      title: "Score",
      subtitle:
        "Track where you stand and what to do next. Adjust the slider below to preview different ranges while you build.",
      cardLabel: "Your credit score",
      tipsHeading: "Tips for you right now",
      previewHeading: "Preview score (demo)",
      previewDescription:
        "Drag the slider or type a value. Your choice is saved on this device.",
      scoreInputLabel: "Score:",
      scoreRanges: {
        none: {
          label: "No score yet",
          subtitle: "Building your history",
          tips: [
            "Open a secured credit card",
            "Set up a bank account",
            "Ask about a credit builder loan",
          ],
        },
        poor: {
          label: "Poor",
          subtitle: "Early range—focus on on-time payments",
          tips: [
            "Pay every bill on time",
            "Keep credit card balance under 30%",
            "Avoid applying for multiple cards",
          ],
        },
        fair: {
          label: "Fair",
          subtitle: "You are on the right track",
          tips: [
            "Pay down balances to lower credit utilization",
            "Set calendar reminders so you never miss a due date",
            "Review your credit report for errors once a year",
          ],
        },
        good: {
          label: "Good",
          subtitle: "Solid credit for many goals",
          tips: [
            "Keep old accounts open to protect average account age",
            "Continue paying in full and on time every month",
            "Only apply for new credit when you really need it",
          ],
        },
        veryGood: {
          label: "Very good",
          subtitle: "Lenders usually see you as low risk",
          tips: [
            "Maintain low balances relative to your limits",
            "Diversify credit types only if it fits your plan—don’t force it",
            "Monitor your score before large loans to catch surprises early",
          ],
        },
        excellent: {
          label: "Excellent",
          subtitle: "Top-tier range—keep protecting your record",
          tips: [
            "Keep the habits that got you here: on-time payments and low utilization",
            "Avoid closing your oldest card without a reason",
            "Check that your report stays accurate as your profile grows",
          ],
        },
      },
      monthsToPayOffLabel: "Months to pay off",
    },
    tools: {
      title: "Tools",
      subtitle: "Plan your month and your debt—numbers update live as you change them.",
      budget: {
        title: "Budget calculator",
        description:
          "Add your after-tax income and regular bills to see what you have left each month and how spending splits across categories.",
        fields: {
          income: "Monthly income (after tax)",
          rent: "Rent",
          groceries: "Groceries",
          transport: "Transport",
          phone: "Phone bill",
          other: "Other expenses",
        },
        results: {
          totalExpenses: "Total expenses",
          leftOver: "Money left over",
        },
        breakdown: {
          title: "Breakdown by category (% of income)",
          description:
            "The bar shows how much of each dollar of income goes to each expense.",
          empty: "Add your after-tax income to see the breakdown bar.",
          over100: "Spending is over 100% of income on paper—time to trim costs or double-check your numbers.",
        },
      },
      payoff: {
        title: "Credit card payoff calculator",
        description:
          "Estimate how long it will take to clear a balance and how much interest you will pay at your current APR and payment level.",
        fields: {
          balance: "Current balance owing",
          apr: "Interest rate (APR %)",
          payment: "Monthly payment amount",
        },
        warning:
          "This payment won't reduce your balance",
        warningDetail:
          "You need to pay more than the monthly interest for the balance to go down.",
        results: {
          heading: "Results",
          months: "Months to pay off",
          interest: "Total interest you will pay",
          totalPaid: "Total amount you will pay overall",
          emptyBalance:
            "Enter a balance and a payment above the monthly interest to see payoff time.",
          tooLow: "Increase your monthly payment to see payoff estimates.",
          default: "Enter your details to see results.",
        },
      },
    },
    offers: {
      title: "Offers",
      note: "We may earn a referral fee — this helps keep the app free.",
      subtitle:
        "Partners we think newcomers may find useful. Always read terms before you apply.",
      mostPopular: "Most Popular",
      bestFor: "Best for: {label}",
      applyNow: "Apply Now",
      partnerNames: {
        neo: "Neo Financial",
        eq: "EQ Bank",
        borrowell: "Borrowell",
        wealthsimple: "Wealthsimple",
      },
      productNames: {
        neo: "Secured Credit Card",
        eq: "Savings Plus Account",
        borrowell: "Free credit score & report",
        wealthsimple: "Invest (RRSP, TFSA & more)",
      },
      partners: {
        neo: {
          description:
            "A secured card that can help you establish payment history while you control your spending limit with a deposit.",
          bestFor: "No credit history",
        },
        eq: {
          description:
            "A digital savings option with competitive interest so your first emergency fund can grow without monthly fees.",
          bestFor: "Building an emergency fund",
        },
        borrowell: {
          description:
            "Check your score and credit report in one place to spot errors and track improvement over time.",
          bestFor: "Monitoring your credit for free",
        },
        wealthsimple: {
          description:
            "Guided investing for long-term goals with clear fees—useful once you are ready to invest beyond day-to-day cash.",
          bestFor: "First-time investors",
        },
      },
    },
    // lessons property is populated by the expansion loop below
  },
  hi: {
    nav: {
      learn: "सीखें",
      score: "स्कोर",
      tools: "टूल्स",
      offers: "ऑफ़र्स",
    },
    common: {
      completed: "पूरा हुआ",
      nextLesson: "अगला लेसन",
      allLessons: "सभी लेसन",
      correct: "सही!",
      correctSuffix: "बहुत बढ़िया! आपने यह लेसन पूरा कर लिया है।",
      wrongTryOther: "अभी नहीं—दूसरा विकल्प आज़माएँ।",
    },
    learn: {
      title: "सीखें",
      subtitle:
        "कनाडा और अमेरिका आए नए लोगों के लिए छोटी-छोटी सीख। किसी लेसन पर टैप करें, पढ़ें और क्विक चेक करें।",
      progressTitle: "आपकी प्रगति",
      progressText: "{completedCount} में से {lessonCount} लेसन पूरे हुए",
      allLessonsTitle: "सभी लेसन",
      detailLinkAllLessons: "सभी लेसन",
      detailInPlainEnglish: "सरल भाषा में",
      detailQuickCheck: "क्विक चेक",
      detailNextLesson: "अगला लेसन",
      detailBackToAllLessons:
        "सभी लेसन पर वापस — आपने सभी {lessonCount} पूरे कर लिए!",
      categories: {
        Credit: "क्रेडिट",
        Banking: "बैंकिंग",
        Housing: "आवास",
        Taxes: "टैक्स",
        Saving: "बचत",
      },
    },
    score: {
      title: "स्कोर",
      subtitle:
        "आपकी स्थिति और अगला कदम समझें। अलग-अलग रेंज देखने के लिए नीचे स्लाइडर सेट करें।",
      cardLabel: "आपका क्रेडिट स्कोर",
      tipsHeading: "अभी आपके लिए सुझाव",
      previewHeading: "स्कोर प्रीव्यू (डेमो)",
      previewDescription:
        "स्लाइडर को खींचें या कोई वैल्यू लिखें। यह चयन इस डिवाइस पर सेव होता है।",
      scoreInputLabel: "स्कोर:",
      scoreRanges: {
        none: {
          label: "अभी स्कोर नहीं है",
          subtitle: "अपनी हिस्ट्री बनाना",
          tips: [
            "सेक्योरड क्रेडिट कार्ड लें",
            "बैंक अकाउंट सेट करें",
            "क्रेडिट बिल्डर लोन के बारे में पूछें",
          ],
        },
        poor: {
          label: "कमज़ोर (Poor)",
          subtitle: "शुरुआती रेंज—समय पर भुगतान पर फोकस करें",
          tips: [
            "हर बिल समय पर चुकाएँ",
            "क्रेडिट कार्ड बैलेंस लिमिट का 30% से कम रखें",
            "एक साथ कई कार्ड के लिए आवेदन न करें",
          ],
        },
        fair: {
          label: "ठीक-ठाक (Fair)",
          subtitle: "आप सही दिशा में हैं",
          tips: [
            "बैलेंस घटाकर क्रेडिट उपयोग (utilization) कम करें",
            "कैलेंडर रिमाइंडर सेट करें ताकि देय तारीख न छूटे",
            "साल में एक बार क्रेडिट रिपोर्ट में गलतियाँ देखें",
          ],
        },
        good: {
          label: "अच्छा (Good)",
          subtitle: "कई लक्ष्यों के लिए मजबूत क्रेडिट",
          tips: [
            "पुराने अकाउंट खुले रखें ताकि औसत उम्र सुरक्षित रहे",
            "हर महीने पूरा और समय पर भुगतान जारी रखें",
            "नए क्रेडिट के लिए तभी आवेदन करें जब सच में ज़रूरत हो",
          ],
        },
        veryGood: {
          label: "बहुत अच्छा (Very good)",
          subtitle: "आमतौर पर लेंडर्स आपको कम जोखिम मानते हैं",
          tips: [
            "अपनी लिमिट के मुकाबले बैलेंस कम रखें",
            "सिर्फ़ तभी क्रेडिट टाइप बदलें जब आपके प्लान के अनुसार हो—जबरदस्ती नहीं",
            "बड़े लोन से पहले अपने स्कोर की निगरानी करें",
          ],
        },
        excellent: {
          label: "उत्कृष्ट (Excellent)",
          subtitle: "टॉप-टियर रेंज—अपना रिकॉर्ड सुरक्षित रखें",
          tips: [
            "वे ही आदतें रखें: समय पर भुगतान और कम utilization",
            "सबसे पुराने कार्ड को बिना कारण बंद न करें",
            "जैसे-जैसे आपकी प्रोफ़ाइल बढ़े, रिपोर्ट को सही रखें",
          ],
        },
      },
      monthsToPayOffLabel: "पेऑफ़ होने में कितने महीने",
    },
    tools: {
      title: "टूल्स",
      subtitle: "अपना महीना और कर्ज़ प्लान करें—जैसे ही आप बदलते हैं, नंबर तुरंत अपडेट होते हैं।",
      budget: {
        title: "बजट कैलकुलेटर",
        description:
          "अपनी टैक्स के बाद की आय और नियमित खर्च जोड़ें ताकि आपको हर महीने कितना बचेगा और खर्च कैटेगरी के हिसाब से कैसे बंटता है, पता चले।",
        fields: {
          income: "मासिक आय (टैक्स के बाद)",
          rent: "किराया",
          groceries: "किराना",
          transport: "यातायात/ट्रांसपोर्ट",
          phone: "फ़ोन बिल",
          other: "अन्य खर्च",
        },
        results: {
          totalExpenses: "कुल खर्च",
          leftOver: "बचत/बचा हुआ पैसा",
        },
        breakdown: {
          title: "कैटेगरी के अनुसार ब्रेकडाउन (% of income)",
          description: "बार दिखाता है कि आपकी आय के हर डॉलर का कितना हिस्सा किस खर्च में जाता है।",
          empty: "ब्रेकडाउन बार देखने के लिए अपनी टैक्स के बाद की आय जोड़ें।",
          over100:
            "कागज़ पर आपका खर्च 100% से ज़्यादा है—खर्च कम करने या अपने नंबर दोबारा जाँचने का समय है।",
        },
      },
      payoff: {
        title: "क्रेडिट कार्ड पेऑफ़ कैलकुलेटर",
        description:
          "अनुमान लगाएँ कि आपका बैलेंस साफ़ होने में कितना समय लगेगा और आपके मौजूदा APR और पेमेंट स्तर पर कितना ब्याज लगेगा।",
        fields: {
          balance: "वर्तमान बैलेंस (बकाया)",
          apr: "ब्याज दर (APR %)",
          payment: "मासिक भुगतान राशि",
        },
        warning: "यह भुगतान आपका बैलेंस कम नहीं करेगा",
        warningDetail:
          "बैलेंस घटाने के लिए आपको मासिक ब्याज से ज़्यादा भुगतान करना होगा।",
        results: {
          heading: "रिज़ल्ट",
          months: "कितने महीनों में भुगतान पूरा होगा",
          interest: "कुल ब्याज",
          totalPaid: "कुल भुगतान (कुल मिलाकर)",
          emptyBalance:
            "पेऑफ़ टाइम देखने के लिए बैलेंस और मासिक ब्याज से ज़्यादा भुगतान डालें।",
          tooLow: "पेऑफ़ अनुमान देखने के लिए अपना मासिक भुगतान बढ़ाएँ।",
          default: "रिज़ल्ट देखने के लिए अपने विवरण भरें।",
        },
      },
    },
    offers: {
      title: "ऑफ़र्स",
      note: "हम रेफ़रल फ़ीस कमा सकते हैं — इससे ऐप मुफ्त रखने में मदद मिलती है।",
      subtitle:
        "हमारे हिसाब से नए लोगों के लिए उपयोगी पार्टनर। आवेदन करने से पहले हमेशा शर्तें पढ़ें।",
      mostPopular: "सबसे लोकप्रिय",
      bestFor: "सबसे अच्छा: {label}",
      applyNow: "अभी आवेदन करें",
      partnerNames: {
        neo: "Neo Financial",
        eq: "EQ Bank",
        borrowell: "Borrowell",
        wealthsimple: "Wealthsimple",
      },
      productNames: {
        neo: "सिक्योरड क्रेडिट कार्ड",
        eq: "सेविंग्स प्लस अकाउंट",
        borrowell: "मुफ्त क्रेडिट स्कोर और रिपोर्ट",
        wealthsimple: "निवेश करें (RRSP, TFSA और अधिक)",
      },
      partners: {
        neo: {
          description:
            "एक सिक्योरड/डिपॉज़िट वाला कार्ड जो आपको पेमेंट हिस्ट्री बनाने में मदद कर सकता है, और आप अपना खर्च-सीमा नियंत्रित कर सकते हैं।",
          bestFor: "कोई क्रेडिट हिस्ट्री नहीं",
        },
        eq: {
          description:
            "डिजिटल सेविंग्स विकल्प, प्रतिस्पर्धी ब्याज के साथ—ताकि आपका पहला इमरजेंसी फंड मासिक शुल्क के बिना बढ़ सके।",
          bestFor: "इमरजेंसी फंड बनाना",
        },
        borrowell: {
          description:
            "एक ही जगह पर अपना स्कोर और क्रेडिट रिपोर्ट देखें ताकि गलतियाँ पकड़ सकें और समय के साथ सुधार ट्रैक कर सकें।",
          bestFor: "फ्री में अपने क्रेडिट की निगरानी",
        },
        wealthsimple: {
          description:
            "लंबी अवधि के लक्ष्यों के लिए गाइडेड निवेश—स्पष्ट फीस के साथ। जब आप रोज़मर्रा के खर्च से आगे निवेश के लिए तैयार हों तब उपयोगी।",
          bestFor: "पहली बार निवेश करने वाले",
        },
      },
    },
    // lessons property is populated by the expansion loop below
  },
  tl: {
    nav: {
      learn: "Matuto",
      score: "Score",
      tools: "Mga Tool",
      offers: "Mga Alok",
    },
    common: {
      completed: "Tapos na",
      nextLesson: "Susunod na lesson",
      allLessons: "Lahat ng lessons",
      correct: "Tama!",
      correctSuffix: "Magaling! Natapos mo na ang lesson na ito.",
      wrongTryOther: "Hindi pa—subukan ang ibang opsyon.",
    },
    learn: {
      title: "Matuto",
      subtitle:
        "Mga maiikling aral para sa mga bagong dating sa Canada at US. Pindutin ang isang lesson para basahin at sagutan ang quick check.",
      progressTitle: "Ang iyong progress",
      progressText: "{completedCount} sa {lessonCount} lessons ay kumpleto",
      allLessonsTitle: "Lahat ng lessons",
      detailLinkAllLessons: "Lahat ng lessons",
      detailInPlainEnglish: "Sa simpleng salita",
      detailQuickCheck: "Quick check",
      detailNextLesson: "Susunod na lesson",
      detailBackToAllLessons:
        "Bumalik sa lahat ng lessons — tapos mo na ang lahat ng {lessonCount}!",
      categories: {
        Credit: "Credit",
        Banking: "Banking",
        Housing: "Pag-aari ng Bahay",
        Taxes: "Taxes",
        Saving: "Pag-ipon",
      },
    },
    score: {
      title: "Score",
      subtitle:
        "Tingnan kung nasaan ka at ano ang susunod mong gagawin. Ayusin ang slider para mapag-aralan ang iba’t ibang range habang natututo ka.",
      cardLabel: "Ang iyong credit score",
      tipsHeading: "Mga tips para sa’yo ngayon",
      previewHeading: "Preview score (demo)",
      previewDescription:
        "I-drag ang slider o mag-type ng value. Ang iyong pinili ay nai-save sa device na ito.",
      scoreInputLabel: "Score:",
      scoreRanges: {
        none: {
          label: "Wala pang score",
          subtitle: "Pagbuo ng iyong history",
          tips: [
            "Magbukas ng secured credit card",
            "Mag-set up ng bank account",
            "Tanungin ang tungkol sa credit builder loan",
          ],
        },
        poor: {
          label: "Mahina (Poor)",
          subtitle: "Maagang range—mag-focus sa pagbabayad sa oras",
          tips: [
            "Bayaran ang bawat bill sa tamang araw",
            "Panatilihing nasa ilalim ng 30% ang credit card balance",
            "Iwasan ang pag-apply nang sabay-sabay sa maraming card",
          ],
        },
        fair: {
          label: "Katamtaman (Fair)",
          subtitle: "Nasa tamang direksyon ka",
          tips: [
            "Bawasan ang balances para mababa ang credit utilization",
            "Maglagay ng paalala sa calendar para hindi ka makaligtaan",
            "Suriin ang credit report para sa mga error kahit isang beses sa taon",
          ],
        },
        good: {
          label: "Maganda (Good)",
          subtitle: "Matibay na credit para sa maraming layunin",
          tips: [
            "Panatilihing bukas ang lumang accounts para protektahan ang average age",
            "Patuloy na magbayad nang buo at on time buwan-buwan",
            "Mag-apply lang ng bagong credit kapag kailangan talaga",
          ],
        },
        veryGood: {
          label: "Napakaganda (Very good)",
          subtitle: "Karaniwang tingin ng mga lender na mababa ang risk",
          tips: [
            "Panatilihing mababa ang balances kaugnay sa limits",
            "Mag-diversify ng credit types kung tugma sa plano—huwag pilitin",
            "Subaybayan ang score bago ang malalaking pautang",
          ],
        },
        excellent: {
          label: "Napakahusay (Excellent)",
          subtitle: "Top-tier—ingatan ang iyong record",
          tips: [
            "Ituloy ang mga ugaling nagdala sa’yo dito: on-time payments at mababang utilization",
            "Iwasang isara ang pinakamatandang card kung walang dahilan",
            "Tiyaking tama ang report habang lumalaki ang iyong profile",
          ],
        },
      },
      monthsToPayOffLabel: "Ilang buwan bago matapos",
    },
    tools: {
      title: "Mga Tool",
      subtitle: "Planuhin ang buwan at utang mo—agad nag-a-update ang mga numero habang nagbabago ka.",
      budget: {
        title: "Budget calculator",
        description:
          "Ilagay ang after-tax income mo at regular na bills para malaman kung ano ang natitira bawat buwan at paano hinahati-hati ang paggastos sa kategorya.",
        fields: {
          income: "Buwanang income (pagkatapos ng tax)",
          rent: "Renta",
          groceries: "Groceries",
          transport: "Transport",
          phone: "Phone bill",
          other: "Iba pang expenses",
        },
        results: {
          totalExpenses: "Kabuuang gastos",
          leftOver: "Natirang pera",
        },
        breakdown: {
          title: "Hatiin ayon sa kategorya (% ng income)",
          description:
            "Ipinapakita ng bar kung gaano karami sa bawat dollar ng income ang napupunta sa bawat expense.",
          empty: "Ilagay ang after-tax income para makita ang breakdown bar.",
          over100:
            "Sa papel, lumalampas sa 100% ng income ang gastos—oras na bawasan ang gastos o suriin ulit ang mga numero.",
        },
      },
      payoff: {
        title: "Credit card payoff calculator",
        description:
          "Tantiyahin kung gaano katagal bago mabayaran ang balance at kung magkano ang interest sa iyong kasalukuyang APR at buwanang payment.",
        fields: {
          balance: "Kasulukuyang balance (babayaran)",
          apr: "Interest rate (APR %)",
          payment: "Halagang buwanang payment",
        },
        warning: "Ang payment na ito ay hindi magbabawas ng balance mo",
        warningDetail:
          "Para bumaba ang balance, kailangan mong magbayad nang mas mataas pa sa buwanang interest.",
        results: {
          heading: "Results",
          months: "Ilang buwan bago mabayaran",
          interest: "Kabuuang interest",
          totalPaid: "Kabuuang mababayaran",
          emptyBalance:
            "Para makita ang oras ng payoff, ilagay ang balance at payment na mas mataas sa buwanang interest.",
          tooLow: "Taasan ang buwanang payment para makita ang payoff estimates.",
          default: "Ilagay ang mga detalye para makita ang results.",
        },
      },
    },
    offers: {
      title: "Mga Alok",
      note: "Maaaring magkaroon kami ng referral fee — nakakatulong ito para manatiling libre ang app.",
      subtitle:
        "Mga partner na sa tingin namin ay kapaki-pakinabang sa mga bagong dating. Basahin palagi ang terms bago mag-apply.",
      mostPopular: "Pinaka-Popular",
      bestFor: "Angkop para sa: {label}",
      applyNow: "Mag-apply na",
      partnerNames: {
        neo: "Neo Financial",
        eq: "EQ Bank",
        borrowell: "Borrowell",
        wealthsimple: "Wealthsimple",
      },
      productNames: {
        neo: "Secured Credit Card",
        eq: "Savings Plus Account",
        borrowell: "Libreng credit score & report",
        wealthsimple: "Mag-invest (RRSP, TFSA at iba pa)",
      },
      partners: {
        neo: {
          description:
            "Ang secured card na makakatulong sa pagbuo ng payment history habang kontrolado mo ang spending limit gamit ang deposit.",
          bestFor: "Walang credit history",
        },
        eq: {
          description:
            "Isang digital savings na may competitive interest para lumaki ang iyong unang emergency fund nang hindi nagkakaroon ng buwanang bayad.",
          bestFor: "Pagbuo ng emergency fund",
        },
        borrowell: {
          description:
            "Tingnan ang iyong score at credit report sa iisang lugar para makita ang mga error at masubaybayan ang improvement sa paglipas ng panahon.",
          bestFor: "Monitoring ng credit nang libre",
        },
        wealthsimple: {
          description:
            "Guided investing para sa pangmatagalang goals na may malinaw na fees—kapaki-pakinabang kapag handa ka nang mag-invest na lampas sa day-to-day na cash.",
          bestFor: "Unang beses na investors",
        },
      },
    },
    // lessons property is populated by the expansion loop below
  },
  zh: {
    nav: {
      learn: "学习",
      score: "分数",
      tools: "工具",
      offers: "优惠",
    },
    common: {
      completed: "已完成",
      nextLesson: "下一课",
      allLessons: "所有课程",
      correct: "答对了！",
      correctSuffix: "太棒了！你已经完成了本节课。",
      wrongTryOther: "还不对——请选另一个选项。",
    },
    learn: {
      title: "学习",
      subtitle:
        "为加拿大和美国新移民准备的简短课程。点开某个课程阅读并完成快速测验。",
      progressTitle: "你的进度",
      progressText: "已完成 {completedCount} / {lessonCount} 课",
      allLessonsTitle: "所有课程",
      detailLinkAllLessons: "所有课程",
      detailInPlainEnglish: "用简单的话说明",
      detailQuickCheck: "快速测验",
      detailNextLesson: "下一课",
      detailBackToAllLessons: "返回所有课程——你已完成全部 {lessonCount} 课！",
      categories: {
        Credit: "信用",
        Banking: "银行业务",
        Housing: "住房",
        Taxes: "税务",
        Saving: "储蓄",
      },
    },
    score: {
      title: "分数",
      subtitle:
        "了解你现在的水平以及接下来该做什么。拖动下面的滑块可以预览不同分数区间。",
      cardLabel: "你的信用分数",
      tipsHeading: "你现在最需要的建议",
      previewHeading: "分数预览（演示）",
      previewDescription:
        "拖动滑块或输入一个数值。你的选择会保存在此设备上。",
      scoreInputLabel: "分数：",
      scoreRanges: {
        none: {
          label: "目前还没有分数",
          subtitle: "建立信用记录",
          tips: [
            "申请有担保的信用卡",
            "先开立银行账户",
            "咨询信用建设贷款（credit builder loan）",
          ],
        },
        poor: {
          label: "较差（Poor）",
          subtitle: "早期区间——重点是按时付款",
          tips: [
            "每一笔账单都要按时支付",
            "让信用卡余额低于额度的 30%",
            "尽量避免同时申请多张信用卡",
          ],
        },
        fair: {
          label: "一般（Fair）",
          subtitle: "你走在正确的路上",
          tips: [
            "减少余额以降低信用使用率",
            "设置日历提醒，别错过到期日",
            "每年至少检查一次信用报告是否有错误",
          ],
        },
        good: {
          label: "良好（Good）",
          subtitle: "对很多目标都很有帮助",
          tips: [
            "尽量保留较老的账户，保护平均账户年龄",
            "每个月都全额并按时还款",
            "只有真正需要时才申请新信用",
          ],
        },
        veryGood: {
          label: "很不错（Very good）",
          subtitle: "通常被放贷方视为低风险",
          tips: [
            "保持余额相对额度较低",
            "如果符合你的计划，再考虑适度多样化，不要硬来",
            "在申请大额贷款前关注你的分数",
          ],
        },
        excellent: {
          label: "优秀（Excellent）",
          subtitle: "顶级区间——继续保护你的记录",
          tips: [
            "保持让你到达这里的习惯：按时还款和低使用率",
            "没有理由不要关闭最老的信用卡",
            "随着你的资料增长，确认报告始终准确",
          ],
        },
      },
      monthsToPayOffLabel: "还清需要多久",
    },
    tools: {
      title: "工具",
      subtitle: "规划你的用钱和负债——你输入什么，数据会立即更新。",
      budget: {
        title: "预算计算器",
        description:
          "输入税后收入和常规账单，看看每个月你能剩下多少，以及支出在不同类别之间如何分配。",
        fields: {
          income: "每月税后收入",
          rent: "房租",
          groceries: "日常杂货",
          transport: "交通",
          phone: "手机账单",
          other: "其他开支",
        },
        results: {
          totalExpenses: "总开支",
          leftOver: "剩余金额",
        },
        breakdown: {
          title: "按类别拆分（占收入百分比）",
          description: "这条条形图显示：你收入中的每一块钱，分别流向哪些开支。",
          empty: "先输入税后收入，才能显示拆分条。",
          over100: "纸面上的支出已超过 100% 的收入——是时候削减开支或核对数字。",
        },
      },
      payoff: {
        title: "信用卡还款计算器",
        description:
          "根据你的当前 APR 和每月还款金额，估算还清余额需要多久、以及会支付多少利息。",
        fields: {
          balance: "当前欠款余额",
          apr: "利率（年利率 APR %）",
          payment: "每月还款金额",
        },
        warning: "这笔还款不会降低你的余额",
        warningDetail: "要让余额下降，你需要支付超过每月利息的金额。",
        results: {
          heading: "结果",
          months: "还清需要的月份",
          interest: "预计总利息",
          totalPaid: "预计总还款金额",
          emptyBalance: "输入余额，并选择高于每月利息的还款金额以查看还清时间。",
          tooLow: "请提高每月还款金额以查看还款估算。",
          default: "请填写信息以查看结果。",
        },
      },
    },
    offers: {
      title: "优惠",
      note: "我们可能会收到推荐佣金——这有助于让应用保持免费。",
      subtitle: "我们觉得可能对新移民有用的合作伙伴。申请前请务必阅读条款。",
      mostPopular: "最受欢迎",
      bestFor: "适合：{label}",
      applyNow: "立即申请",
      partnerNames: {
        neo: "Neo Financial",
        eq: "EQ Bank",
        borrowell: "Borrowell",
        wealthsimple: "Wealthsimple",
      },
      productNames: {
        neo: "有担保信用卡",
        eq: "储蓄加账户",
        borrowell: "免费信用分数和报告",
        wealthsimple: "投资（RRSP、TFSA 等）",
      },
      partners: {
        neo: {
          description:
            "一张有担保/押金的信用卡，帮助你建立还款记录，并在你掌控额度的情况下使用。",
          bestFor: "没有信用记录的人",
        },
        eq: {
          description:
            "一种数字化储蓄方案，拥有有竞争力的利率，让你在不必担心月费的情况下，先把紧急备用金慢慢建立起来。",
          bestFor: "建立紧急备用金",
        },
        borrowell: {
          description:
            "在一个地方查看你的分数与信用报告，帮助你发现错误并持续跟踪改善。",
          bestFor: "免费监控你的信用",
        },
        wealthsimple: {
          description:
            "面向长期目标的引导式投资，并有清晰的费用结构。等你准备好在日常现金之外进行投资时很有用。",
          bestFor: "首次投资者",
        },
      },
    },
    // lessons property is populated by the expansion loop below
  },
};

// Expand lesson translations into each language so code can simply read:
// translations[lang].lessons[lessonId].title/subtitle/content/quiz/options
// IMPORTANT: Create a NEW lessons object for each language to avoid shared references
for (const lang of Object.keys(translations)) {
  translations[lang].lessons = {}; // Create fresh object per language
  for (const [lessonId, lesson] of Object.entries(lessons)) {
    translations[lang].lessons[lessonId] = {
      title: lesson.title[lang],
      subtitle: lesson.subtitle[lang],
      content: lesson.content[lang],
      quiz: {
        question: lesson.quiz.question[lang],
        options: lesson.quiz.options[lang],
      },
      correctIndex: lesson.correctIndex,
      category: lesson.meta.category,
    };
  }
}

export default translations;

