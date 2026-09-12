// Central localization strings for the whole app.
// Add a key in both `en` and `ur` — components should never hardcode
// user-facing copy, they should pull it from here via useLanguage().t

export const translations = {
  en: {
    dir: "ltr",
    lang: "en",
    docTitle: "Government Service Guides",

    // Header
    brandName: "Government Service Guides",
    brandTagline: "Voice-first guidance for government services",
    navHow: "How It Works",
    navServices: "Services",
    navAbout: "About",
    navAsk: "Ask a Question",
    langToggleLabel: "اردو",

    // Hero
    heroEyebrow: "Simple. Voice-first. Source-based guidance.",
    heroTitle: "Government services, explained simply.",
    heroSubtitle:
      "Ask questions in your own words. Get clear, step-by-step guidance on government procedures, documents and requirements.",
    heroCtaPrimary: "Ask your question",
    heroCtaSecondary: "How it works",
    heroDemoLabel: "Sample question",
    heroDemoQuery: "\u201cMera CNIC kho gaya hai, mujhe kya karna hai?\u201d",
    heroDemoAnswerLabel: "Guided answer",
    heroDemoAnswer: "Report the loss, then reapply for a CNIC at your nearest NADRA centre.",
    heroDemoVerified: "Source-based",

    // Service categories
    servicesEyebrow: "Services",
    servicesTitle: "How can we help?",
    servicesSubtitle:
      "Start from a common topic, or just ask in your own words below.",
    serviceCnicTitle: "CNIC & Identity",
    serviceCnicDesc: "Corrections, lost CNIC and identity-related procedures.",
    serviceCnicPrompt: "What documents do I need for a CNIC correction?",
    serviceBirthTitle: "Birth Certificate",
    serviceBirthDesc: "How to register a birth and get an official certificate.",
    serviceBirthPrompt: "How do I apply for a birth certificate?",
    servicePoliceTitle: "Police / FIR",
    servicePoliceDesc: "Filing a complaint or a First Information Report.",
    servicePolicePrompt: "How do I register a police complaint?",
    serviceLandTitle: "Land Records",
    serviceLandDesc: "Checking ownership records and property mutation.",
    serviceLandPrompt: "How can I check my land ownership record?",
    servicePassportTitle: "Passport & Travel",
    servicePassportDesc: "New passports, renewals and travel documents.",
    servicePassportPrompt: "What is the process to renew my passport?",
    serviceFormsTitle: "Government Forms",
    serviceFormsDesc: "Finding and filling common official forms.",
    serviceFormsPrompt: "Where can I find the correct government form?",

    // How it works
    howEyebrow: "Process",
    howTitle: "How it works",
    howSubtitle: "Three steps between your question and a clear answer.",
    howStep1Title: "Ask",
    howStep1Desc: "Speak or type your question, in Urdu, English, or a mix of both.",
    howStep2Title: "Understand",
    howStep2Desc: "The assistant identifies the relevant government service and what you actually need.",
    howStep3Title: "Get guided",
    howStep3Desc: "Receive simple, step-by-step guidance grounded in trusted information.",

    // Assistant / chat section
    assistantEyebrow: "Assistant",
    assistantTitle: "Ask the government service assistant",
    assistantSubtitle: "Tell us what you need help with — by voice or by typing.",
    assistantSuggestedLabel: "Try asking",
    assistantEmptyTitle: "Ask your first question",
    assistantEmptyBody:
      "For example: \u201cMera CNIC kho gaya hai, mujhe kya karna hai?\u201d",
    assistantInputPlaceholder: "Type your question here...",
    assistantMicLabel: "Speak",
    assistantMicRecording: "Recording...",
    assistantLoading: "Preparing your answer...",
    assistantErrorGeneric: "Something went wrong. Please try again.",
    assistantErrorService: "The service is temporarily unavailable, please try again.",
    assistantErrorShort: "That was too short, try again or type your question instead.",
    assistantErrorUnclear: "We couldn't make that out, please try again or type your question.",
    assistantErrorMic: "Microphone access is needed to use voice input.",
    assistantRetry: "Retry",

    // Answer card labels
    labelNextStep: "Next step",
    labelDocuments: "Documents needed",
    labelProcedure: "Procedure",
    labelFee: "Fee",
    labelProcessingTime: "Processing time",
    labelOfficialSource: "Official source",
    labelListen: "Listen",
    labelPlaying: "Playing...",
    labelAudioUnavailable: "Audio unavailable",
    fallbackServiceName: "Service",

    // Trust section
    trustEyebrow: "Trust",
    trustTitle: "Guidance you can trace.",
    trustBody:
      "Answers are designed to be grounded in verified government information, so you can see where the guidance comes from.",
    trustCard1: "Source-based",
    trustCard2: "Clear steps",
    trustCard3: "Easy to understand",

    // Footer
    footerBrand: "Government Service Guides",
    footerTagline: "Making government procedures easier to understand.",
    footerHome: "Home",
    footerHow: "How It Works",
    footerServices: "Services",
    footerAbout: "About",
    footerBuiltFor: "Built for Hackathon 2026",
    footerDisclaimer:
      "This assistant provides informational guidance. Always confirm requirements with the relevant government department.",
  },

  ur: {
    dir: "rtl",
    lang: "ur",
    docTitle: "سرکاری خدمات کی رہنمائی",

    // Header
    brandName: "سرکاری خدمات کی رہنمائی",
    brandTagline: "سرکاری خدمات کے لیے آواز پر مبنی رہنمائی",
    navHow: "یہ کیسے کام کرتا ہے",
    navServices: "خدمات",
    navAbout: "تعارف",
    navAsk: "سوال پوچھیں",
    langToggleLabel: "English",

    // Hero
    heroEyebrow: "آسان۔ آواز پر مبنی۔ مصدقہ معلومات پر مبنی رہنمائی۔",
    heroTitle: "سرکاری خدمات کو آسانی سے سمجھیں",
    heroSubtitle:
      "اپنے سوالات اپنے الفاظ میں پوچھیں اور سرکاری طریقہ کار، ضروری دستاویزات اور مراحل کے بارے میں واضح، مرحلہ وار رہنمائی حاصل کریں۔",
    heroCtaPrimary: "اپنا سوال پوچھیں",
    heroCtaSecondary: "یہ کیسے کام کرتا ہے",
    heroDemoLabel: "نمونہ سوال",
    heroDemoQuery: "\u201cمیرا CNIC کھو گیا ہے، مجھے کیا کرنا ہے؟\u201d",
    heroDemoAnswerLabel: "رہنمائی شدہ جواب",
    heroDemoAnswer: "گمشدگی کی اطلاع دیں، پھر اپنے قریبی نادرا مرکز سے نیا CNIC بنوائیں۔",
    heroDemoVerified: "مصدقہ ذریعہ",

    // Service categories
    servicesEyebrow: "خدمات",
    servicesTitle: "ہم آپ کی کس طرح مدد کر سکتے ہیں؟",
    servicesSubtitle: "کسی عام موضوع سے شروع کریں، یا نیچے اپنے الفاظ میں سوال کریں۔",
    serviceCnicTitle: "شناختی کارڈ (CNIC)",
    serviceCnicDesc: "اصلاحات، گمشدہ شناختی کارڈ اور شناخت سے متعلق طریقہ کار۔",
    serviceCnicPrompt: "CNIC میں تصحیح کے لیے کون سے دستاویزات درکار ہیں؟",
    serviceBirthTitle: "پیدائشی سرٹیفکیٹ",
    serviceBirthDesc: "پیدائش کا اندراج اور سرکاری سرٹیفکیٹ کا حصول۔",
    serviceBirthPrompt: "پیدائشی سرٹیفکیٹ کے لیے درخواست کیسے دوں؟",
    servicePoliceTitle: "پولیس / ایف آئی آر",
    servicePoliceDesc: "شکایت یا فرسٹ انفارمیشن رپورٹ درج کروانا۔",
    servicePolicePrompt: "پولیس شکایت کیسے درج کروائیں؟",
    serviceLandTitle: "زمین کے ریکارڈ",
    serviceLandDesc: "ملکیت کے ریکارڈ اور انتقال کی جانچ۔",
    serviceLandPrompt: "میں اپنی زمین کی ملکیت کا ریکارڈ کیسے چیک کروں؟",
    servicePassportTitle: "پاسپورٹ اور سفر",
    servicePassportDesc: "نیا پاسپورٹ، تجدید اور سفری دستاویزات۔",
    servicePassportPrompt: "میرا پاسپورٹ تجدید کرنے کا طریقہ کار کیا ہے؟",
    serviceFormsTitle: "سرکاری فارمز",
    serviceFormsDesc: "عام سرکاری فارمز کو تلاش اور پُر کرنا۔",
    serviceFormsPrompt: "مجھے صحیح سرکاری فارم کہاں سے ملے گا؟",

    // How it works
    howEyebrow: "طریقہ کار",
    howTitle: "یہ کیسے کام کرتا ہے",
    howSubtitle: "آپ کے سوال اور واضح جواب کے درمیان تین مراحل۔",
    howStep1Title: "پوچھیں",
    howStep1Desc: "اپنا سوال اردو، انگریزی یا دونوں میں بولیں یا لکھیں۔",
    howStep2Title: "سمجھیں",
    howStep2Desc: "اسسٹنٹ متعلقہ سرکاری خدمت اور آپ کی اصل ضرورت کی نشاندہی کرتا ہے۔",
    howStep3Title: "رہنمائی حاصل کریں",
    howStep3Desc: "قابلِ اعتماد معلومات پر مبنی آسان، مرحلہ وار رہنمائی حاصل کریں۔",

    // Assistant / chat section
    assistantEyebrow: "اسسٹنٹ",
    assistantTitle: "سرکاری خدمات کے اسسٹنٹ سے سوال کریں",
    assistantSubtitle: "ہمیں بتائیں کہ آپ کو کس چیز میں مدد چاہیے — آواز سے یا لکھ کر۔",
    assistantSuggestedLabel: "یہ پوچھ کر دیکھیں",
    assistantEmptyTitle: "اپنا پہلا سوال پوچھیں",
    assistantEmptyBody: "مثال کے طور پر: \u201cمیرا CNIC کھو گیا ہے، مجھے کیا کرنا ہے؟\u201d",
    assistantInputPlaceholder: "اپنا سوال یہاں لکھیں...",
    assistantMicLabel: "بولیں",
    assistantMicRecording: "ریکارڈ ہو رہا ہے...",
    assistantLoading: "جواب تیار ہو رہا ہے...",
    assistantErrorGeneric: "کچھ غلط ہو گیا، دوبارہ کوشش کریں۔",
    assistantErrorService: "سروس عارضی طور پر دستیاب نہیں، براہ کرم دوبارہ کوشش کریں۔",
    assistantErrorShort: "آواز بہت مختصر تھی، دوبارہ کوشش کریں یا ٹائپ کریں۔",
    assistantErrorUnclear: "آواز سمجھ نہیں آئی، براہ کرم دوبارہ کوشش کریں یا ٹائپ کریں۔",
    assistantErrorMic: "آواز کے لیے مائیک کی اجازت درکار ہے۔",
    assistantRetry: "دوبارہ کوشش کریں",

    // Answer card labels
    labelNextStep: "اگلا مرحلہ",
    labelDocuments: "درکار دستاویزات",
    labelProcedure: "طریقہ کار",
    labelFee: "فیس",
    labelProcessingTime: "کارروائی کا وقت",
    labelOfficialSource: "سرکاری ذریعہ",
    labelListen: "سنیں",
    labelPlaying: "چل رہا ہے...",
    labelAudioUnavailable: "آواز دستیاب نہیں",
    fallbackServiceName: "خدمت",

    // Trust section
    trustEyebrow: "اعتماد",
    trustTitle: "ایسی رہنمائی جس کا سراغ لگایا جا سکے۔",
    trustBody:
      "جوابات مصدقہ سرکاری معلومات پر مبنی ہونے کے لیے تیار کیے گئے ہیں، تاکہ آپ دیکھ سکیں کہ رہنمائی کہاں سے آئی ہے۔",
    trustCard1: "مصدقہ ذریعہ",
    trustCard2: "واضح مراحل",
    trustCard3: "سمجھنے میں آسان",

    // Footer
    footerBrand: "سرکاری خدمات کی رہنمائی",
    footerTagline: "سرکاری طریقہ کار کو سمجھنا آسان بنانا۔",
    footerHome: "ہوم",
    footerHow: "یہ کیسے کام کرتا ہے",
    footerServices: "خدمات",
    footerAbout: "تعارف",
    footerBuiltFor: "ہیکاتھون 2026 کے لیے تیار کیا گیا",
    footerDisclaimer:
      "یہ اسسٹنٹ معلوماتی رہنمائی فراہم کرتا ہے۔ ہمیشہ متعلقہ سرکاری ادارے سے تقاضوں کی تصدیق کریں۔",
  },
};
