export interface TranslationKeys {
  // Navigation
  nav_diseases: string;
  nav_medicines: string;
  nav_remedies: string;
  nav_kits: string;
  nav_ai_doctor: string;
  nav_about_ayurveda: string;

  // Header
  header_tagline: string;
  header_search_placeholder: string;

  // Hero Section
  hero_badge: string;
  hero_title_1: string;
  hero_title_2: string;
  hero_subtitle_1: string;
  hero_subtitle_2: string;
  hero_subtitle_3: string;
  hero_subtitle_4: string;
  hero_search_placeholder: string;
  hero_search_listening: string;
  hero_search_button: string;
  hero_popular_searches: string;
  hero_voice_captured: string;
  hero_searching_for: string;

  // Popular searches
  popular_diabetes: string;
  popular_joint_pain: string;
  popular_acidity: string;
  popular_hair_fall: string;
  popular_anxiety: string;
  popular_cold_cough: string;

  // Stats
  stat_diseases: string;
  stat_medicines: string;
  stat_remedies: string;
  stat_documented_diseases: string;
  stat_herbal_medicines: string;
  stat_home_remedies: string;

  // Trending Diseases
  trending_label: string;
  trending_title: string;
  trending_subtitle: string;
  trending_view_all: string;
  trending_explore: string;

  // Popular Remedies
  remedies_label: string;
  remedies_title: string;
  remedies_subtitle: string;
  remedies_view_all: string;
  remedies_see_recipe: string;

  // Featured Medicines
  medicines_label: string;
  medicines_title: string;
  medicines_subtitle: string;
  medicines_view_all: string;
  medicines_details: string;

  // AI Doctor
  ai_doctor_label: string;
  ai_doctor_title: string;
  ai_doctor_subtitle: string;
  ai_doctor_feature_1: string;
  ai_doctor_feature_2: string;
  ai_doctor_feature_3: string;
  ai_doctor_cta: string;
  ai_doctor_free_badge: string;

  // Dosha Section
  dosha_label: string;
  dosha_title: string;
  dosha_subtitle: string;
  dosha_learn_more: string;
  dosha_vata: string;
  dosha_vata_desc: string;
  dosha_pitta: string;
  dosha_pitta_desc: string;
  dosha_kapha: string;
  dosha_kapha_desc: string;

  // About Ayurveda Page
  about_title: string;
  about_subtitle: string;
  about_what_is_title: string;
  about_what_is_content: string;
  about_principles_title: string;
  about_panch_mahabhoot: string;
  about_panch_mahabhoot_desc: string;
  about_tridosha: string;
  about_tridosha_desc: string;
  about_agni: string;
  about_agni_desc: string;
  about_ama: string;
  about_ama_desc: string;
  about_benefits_title: string;
  about_benefit_1: string;
  about_benefit_2: string;
  about_benefit_3: string;
  about_benefit_4: string;
  about_benefit_5: string;
  about_start_today: string;
  about_start_today_desc: string;
  about_start_today_cta: string;

  // Diseases Page
  diseases_title: string;
  diseases_subtitle: string;
  diseases_search_placeholder: string;
  diseases_all_categories: string;

  // Medicines Page
  medicines_page_title: string;
  medicines_page_subtitle: string;
  medicines_search_placeholder: string;
  medicines_all_categories: string;

  // Remedies Page
  remedies_page_title: string;
  remedies_page_subtitle: string;
  remedies_search_placeholder: string;
  remedies_all_categories: string;

  // Kits Page
  kits_page_title: string;
  kits_page_subtitle: string;
  kits_add_to_cart: string;
  kits_know_more: string;

  // Cart
  cart_title: string;
  cart_empty: string;
  cart_browse_kits: string;
  cart_remove: string;
  cart_total: string;
  cart_checkout: string;
  cart_continue_shopping: string;

  // Footer
  footer_tagline: string;
  footer_quick_links: string;
  footer_explore: string;
  footer_legal: string;
  footer_privacy: string;
  footer_disclaimer: string;
  footer_copyright: string;
  footer_all_rights: string;

  // Common
  common_back: string;
  common_search: string;
  common_loading: string;
  common_no_results: string;
  common_did_you_mean: string;
  common_try_common: string;
  common_search_anyway: string;

  // SEO Meta
  meta_home_title: string;
  meta_home_description: string;
  meta_diseases_title: string;
  meta_diseases_description: string;
  meta_medicines_title: string;
  meta_medicines_description: string;
  meta_remedies_title: string;
  meta_remedies_description: string;
  meta_kits_title: string;
  meta_kits_description: string;
  meta_about_title: string;
  meta_about_description: string;
}

export const translations: Record<"en" | "hi", TranslationKeys> = {
  en: {
    // Navigation
    nav_diseases: "Diseases",
    nav_medicines: "Medicines",
    nav_remedies: "Remedies",
    nav_kits: "Kits",
    nav_ai_doctor: "AI Doctor",
    nav_about_ayurveda: "About Ayurveda",

    // Header
    header_tagline: "Heal Naturally",
    header_search_placeholder: "Search...",

    // Hero Section
    hero_badge: "India's #1 Ayurvedic Health Platform",
    hero_title_1: "Discover the Power of",
    hero_title_2: "Ayurveda",
    hero_subtitle_1: "Search any disease or symptom to unlock",
    hero_subtitle_2: "ancient remedies",
    hero_subtitle_3: "natural medicines",
    hero_subtitle_4: "holistic wellness",
    hero_search_placeholder: "Search diseases, medicines, or remedies...",
    hero_search_listening: "Listening... speak now",
    hero_search_button: "Search",
    hero_popular_searches: "Popular searches:",
    hero_voice_captured: "🎤 Voice captured",
    hero_searching_for: "Searching for",

    // Popular searches
    popular_diabetes: "Diabetes",
    popular_joint_pain: "Joint Pain",
    popular_acidity: "Acidity",
    popular_hair_fall: "Hair Fall",
    popular_anxiety: "Anxiety",
    popular_cold_cough: "Cold & Cough",

    // Stats
    stat_diseases: "50+",
    stat_medicines: "200+",
    stat_remedies: "100+",
    stat_documented_diseases: "Documented Diseases",
    stat_herbal_medicines: "Herbal Medicines",
    stat_home_remedies: "Home Remedies",

    // Trending Diseases
    trending_label: "Common Ailments",
    trending_title: "Trending Health Concerns",
    trending_subtitle: "Explore Ayurvedic solutions for the most searched health conditions",
    trending_view_all: "View all diseases",
    trending_explore: "Explore",

    // Popular Remedies
    remedies_label: "Natural Solutions",
    remedies_title: "Popular Home Remedies",
    remedies_subtitle: "Time-tested remedies using kitchen ingredients for everyday ailments",
    remedies_view_all: "View all remedies",
    remedies_see_recipe: "See recipe →",

    // Featured Medicines
    medicines_label: "Ayurvedic Formulations",
    medicines_title: "Popular Medicines",
    medicines_subtitle: "Classical and proprietary Ayurvedic medicines for holistic healing",
    medicines_view_all: "View all medicines",
    medicines_details: "Details",

    // AI Doctor
    ai_doctor_label: "AI-Powered",
    ai_doctor_title: "Meet Your AI Ayurveda Doctor",
    ai_doctor_subtitle: "Get personalized health recommendations based on ancient Ayurvedic wisdom, powered by modern AI technology.",
    ai_doctor_feature_1: "Personalized **Dosha** analysis",
    ai_doctor_feature_2: "Custom diet & lifestyle tips",
    ai_doctor_feature_3: "24/7 health guidance",
    ai_doctor_cta: "Consult AI Doctor",
    ai_doctor_free_badge: "Free Consultation",

    // Dosha Section
    dosha_label: "Know Your Constitution",
    dosha_title: "Understand Your Dosha",
    dosha_subtitle: "In **Ayurveda**, your unique body constitution is determined by three fundamental energies",
    dosha_learn_more: "Explore Dosha Types",
    dosha_vata: "Vata",
    dosha_vata_desc: "Air & Space element. Creative, quick-thinking, prone to anxiety",
    dosha_pitta: "Pitta",
    dosha_pitta_desc: "Fire & Water element. Ambitious, focused, prone to inflammation",
    dosha_kapha: "Kapha",
    dosha_kapha_desc: "Earth & Water element. Calm, nurturing, prone to weight gain",

    // About Ayurveda Page
    about_title: "About Ayurveda",
    about_subtitle: "5000-year-old ancient medical science of India",
    about_what_is_title: "What is **Ayurveda**?",
    about_what_is_content: "**Ayurveda** is derived from two Sanskrit words - \"Ayur\" (life) and \"Veda\" (knowledge). It is the world's oldest holistic healing system that developed in India approximately 5,000 years ago. **Ayurveda** doesn't just treat diseases; it improves overall health and quality of life.",
    about_principles_title: "Principles of **Ayurveda**",
    about_panch_mahabhoot: "**Panch Mahabhoot** (Five Elements)",
    about_panch_mahabhoot_desc: "According to **Ayurveda**, everything is made of five elements - **Prithvi** (Earth), **Jal** (Water), **Agni** (Fire), **Vayu** (Air) and **Akash** (Space).",
    about_tridosha: "**Tridosha** Theory",
    about_tridosha_desc: "Three **doshas** - **Vata**, **Pitta** and **Kapha** - control our body and mind.",
    about_agni: "**Agni** (Digestive Fire)",
    about_agni_desc: "Strong digestive fire is essential for good health. Weak **agni** is the cause of many diseases.",
    about_ama: "**Ama** (Toxins)",
    about_ama_desc: "Undigested food creates **ama** which is the root cause of diseases. **Ayurveda** focuses on eliminating **ama**.",
    about_benefits_title: "Benefits of **Ayurveda**",
    about_benefit_1: "Natural and side-effect free treatment",
    about_benefit_2: "Treatment of root cause, not just symptoms",
    about_benefit_3: "Personalized treatment for each individual",
    about_benefit_4: "Focus on prevention and immunity building",
    about_benefit_5: "Balance of mind, body and soul",
    about_start_today: "Start Today",
    about_start_today_desc: "Adopting **Ayurveda** is not difficult. You can bring big changes by making small habit changes. Waking up early, drinking warm water, eating seasonal fruits - all these are part of **Ayurveda**.",
    about_start_today_cta: "Talk to our AI Doctor and learn about your **dosha**!",

    // Diseases Page
    diseases_title: "Diseases & Conditions",
    diseases_subtitle: "Explore Ayurvedic understanding and treatment of various health conditions",
    diseases_search_placeholder: "Search by disease name or symptoms...",
    diseases_all_categories: "All Categories",

    // Medicines Page
    medicines_page_title: "Ayurvedic Medicines",
    medicines_page_subtitle: "Explore classical and proprietary Ayurvedic formulations",
    medicines_search_placeholder: "Search by medicine name or uses...",
    medicines_all_categories: "All Categories",

    // Remedies Page
    remedies_page_title: "Home Remedies",
    remedies_page_subtitle: "Time-tested natural remedies for everyday health issues",
    remedies_search_placeholder: "Search remedies by name or problem...",
    remedies_all_categories: "All Categories",

    // Kits Page
    kits_page_title: "Ayurvedic Wellness Kits",
    kits_page_subtitle: "Curated wellness kits for specific health goals",
    kits_add_to_cart: "Add to Cart",
    kits_know_more: "Know More",

    // Cart
    cart_title: "Your Cart",
    cart_empty: "Your cart is empty",
    cart_browse_kits: "Browse our wellness kits and start your healing journey",
    cart_remove: "Remove",
    cart_total: "Total",
    cart_checkout: "Proceed to Checkout",
    cart_continue_shopping: "Continue Shopping",

    // Footer
    footer_tagline: "Bringing ancient wisdom to modern wellness",
    footer_quick_links: "Quick Links",
    footer_explore: "Explore",
    footer_legal: "Legal",
    footer_privacy: "Privacy Policy",
    footer_disclaimer: "Disclaimer",
    footer_copyright: "© 2024 AyurVeda",
    footer_all_rights: "All rights reserved",

    // Common
    common_back: "Back",
    common_search: "Search",
    common_loading: "Loading...",
    common_no_results: "No results found",
    common_did_you_mean: "Did you mean?",
    common_try_common: "Try these common diseases:",
    common_search_anyway: "Search anyway for",

    // SEO Meta
    meta_home_title: "AyurVeda - India's #1 Ayurvedic Health Platform",
    meta_home_description: "Discover ancient Ayurvedic remedies, herbal medicines, and holistic wellness solutions for modern health problems.",
    meta_diseases_title: "Diseases & Conditions | AyurVeda",
    meta_diseases_description: "Explore Ayurvedic understanding and natural treatments for various health conditions and diseases.",
    meta_medicines_title: "Ayurvedic Medicines | AyurVeda",
    meta_medicines_description: "Browse classical and proprietary Ayurvedic formulations for holistic healing.",
    meta_remedies_title: "Home Remedies | AyurVeda",
    meta_remedies_description: "Time-tested natural remedies using kitchen ingredients for everyday health issues.",
    meta_kits_title: "Wellness Kits | AyurVeda",
    meta_kits_description: "Curated Ayurvedic wellness kits for specific health goals and holistic healing.",
    meta_about_title: "About Ayurveda | AyurVeda",
    meta_about_description: "Learn about the 5000-year-old ancient medical science of Ayurveda and its principles.",
  },
  hi: {
    // Navigation
    nav_diseases: "रोग",
    nav_medicines: "औषधियाँ",
    nav_remedies: "घरेलू नुस्खे",
    nav_kits: "किट्स",
    nav_ai_doctor: "AI डॉक्टर",
    nav_about_ayurveda: "आयुर्वेद के बारे में",

    // Header
    header_tagline: "प्राकृतिक चिकित्सा",
    header_search_placeholder: "खोजें...",

    // Hero Section
    hero_badge: "भारत का #1 आयुर्वेदिक स्वास्थ्य प्लेटफॉर्म",
    hero_title_1: "खोजिए",
    hero_title_2: "आयुर्वेद",
    hero_subtitle_1: "किसी भी रोग या लक्षण को खोजें और पाएं",
    hero_subtitle_2: "प्राचीन उपचार",
    hero_subtitle_3: "प्राकृतिक औषधियाँ",
    hero_subtitle_4: "समग्र स्वास्थ्य",
    hero_search_placeholder: "रोग, औषधि या उपचार खोजें...",
    hero_search_listening: "सुन रहा हूँ... अभी बोलें",
    hero_search_button: "खोजें",
    hero_popular_searches: "लोकप्रिय खोज:",
    hero_voice_captured: "🎤 आवाज़ सुनी गई",
    hero_searching_for: "खोज रहे हैं",

    // Popular searches
    popular_diabetes: "मधुमेह",
    popular_joint_pain: "जोड़ों का दर्द",
    popular_acidity: "एसिडिटी",
    popular_hair_fall: "बाल झड़ना",
    popular_anxiety: "चिंता",
    popular_cold_cough: "सर्दी-खांसी",

    // Stats
    stat_diseases: "50+",
    stat_medicines: "200+",
    stat_remedies: "100+",
    stat_documented_diseases: "प्रलेखित रोग",
    stat_herbal_medicines: "हर्बल औषधियाँ",
    stat_home_remedies: "घरेलू नुस्खे",

    // Trending Diseases
    trending_label: "आम बीमारियाँ",
    trending_title: "ट्रेंडिंग स्वास्थ्य समस्याएं",
    trending_subtitle: "सबसे ज्यादा खोजी जाने वाली स्वास्थ्य समस्याओं के आयुर्वेदिक समाधान खोजें",
    trending_view_all: "सभी रोग देखें",
    trending_explore: "जानें",

    // Popular Remedies
    remedies_label: "प्राकृतिक समाधान",
    remedies_title: "लोकप्रिय घरेलू नुस्खे",
    remedies_subtitle: "रोज़मर्रा की बीमारियों के लिए रसोई की सामग्री से बने समय-परीक्षित नुस्खे",
    remedies_view_all: "सभी नुस्खे देखें",
    remedies_see_recipe: "विधि देखें →",

    // Featured Medicines
    medicines_label: "आयुर्वेदिक योग",
    medicines_title: "लोकप्रिय औषधियाँ",
    medicines_subtitle: "समग्र उपचार के लिए शास्त्रीय और पेटेंट आयुर्वेदिक औषधियाँ",
    medicines_view_all: "सभी औषधियाँ देखें",
    medicines_details: "विवरण",

    // AI Doctor
    ai_doctor_label: "AI-संचालित",
    ai_doctor_title: "अपने AI आयुर्वेद डॉक्टर से मिलें",
    ai_doctor_subtitle: "आधुनिक AI तकनीक द्वारा संचालित प्राचीन आयुर्वेदिक ज्ञान पर आधारित व्यक्तिगत स्वास्थ्य सिफारिशें प्राप्त करें।",
    ai_doctor_feature_1: "व्यक्तिगत **दोष** विश्लेषण",
    ai_doctor_feature_2: "कस्टम आहार और जीवनशैली सुझाव",
    ai_doctor_feature_3: "24/7 स्वास्थ्य मार्गदर्शन",
    ai_doctor_cta: "AI डॉक्टर से परामर्श",
    ai_doctor_free_badge: "मुफ्त परामर्श",

    // Dosha Section
    dosha_label: "अपनी प्रकृति जानें",
    dosha_title: "अपना दोष समझें",
    dosha_subtitle: "**आयुर्वेद** में, आपकी अद्वितीय शारीरिक संरचना तीन मूल ऊर्जाओं द्वारा निर्धारित होती है",
    dosha_learn_more: "दोष प्रकार जानें",
    dosha_vata: "वात",
    dosha_vata_desc: "वायु और आकाश तत्व। रचनात्मक, तेज़ सोच, चिंता की प्रवृत्ति",
    dosha_pitta: "पित्त",
    dosha_pitta_desc: "अग्नि और जल तत्व। महत्वाकांक्षी, केंद्रित, सूजन की प्रवृत्ति",
    dosha_kapha: "कफ",
    dosha_kapha_desc: "पृथ्वी और जल तत्व। शांत, पोषक, वजन बढ़ने की प्रवृत्ति",

    // About Ayurveda Page
    about_title: "आयुर्वेद के बारे में",
    about_subtitle: "भारत का 5000 वर्ष पुराना प्राचीन चिकित्सा विज्ञान",
    about_what_is_title: "**आयुर्वेद** क्या है?",
    about_what_is_content: "**आयुर्वेद** संस्कृत के दो शब्दों से बना है - \"आयुर\" (जीवन) और \"वेद\" (ज्ञान)। यह दुनिया की सबसे पुरानी समग्र चिकित्सा प्रणाली है जो लगभग 5,000 वर्ष पहले भारत में विकसित हुई थी। **आयुर्वेद** सिर्फ बीमारियों का इलाज नहीं करता, बल्कि संपूर्ण स्वास्थ्य और जीवन की गुणवत्ता को बेहतर बनाता है।",
    about_principles_title: "**आयुर्वेद** के सिद्धांत",
    about_panch_mahabhoot: "**पंच महाभूत** (पांच तत्व)",
    about_panch_mahabhoot_desc: "**आयुर्वेद** के अनुसार, सब कुछ पांच तत्वों से बना है - **पृथ्वी**, **जल**, **अग्नि**, **वायु** और **आकाश**।",
    about_tridosha: "**त्रिदोष** सिद्धांत",
    about_tridosha_desc: "तीन **दोष** - **वात**, **पित्त** और **कफ** - हमारे शरीर और मन को नियंत्रित करते हैं।",
    about_agni: "**अग्नि** (पाचक अग्नि)",
    about_agni_desc: "अच्छे स्वास्थ्य के लिए मजबूत पाचक अग्नि आवश्यक है। कमजोर **अग्नि** कई बीमारियों का कारण बनती है।",
    about_ama: "**आम** (विषाक्त पदार्थ)",
    about_ama_desc: "अधूरा पचा हुआ खाना **आम** बनाता है जो बीमारियों की जड़ है। **आयुर्वेद** **आम** को निकालने पर ध्यान केंद्रित करता है।",
    about_benefits_title: "**आयुर्वेद** के फायदे",
    about_benefit_1: "प्राकृतिक और साइड-इफेक्ट मुक्त उपचार",
    about_benefit_2: "बीमारी की जड़ से इलाज, सिर्फ लक्षणों का नहीं",
    about_benefit_3: "हर व्यक्ति के लिए व्यक्तिगत उपचार",
    about_benefit_4: "रोकथाम और प्रतिरक्षा निर्माण पर ध्यान",
    about_benefit_5: "मन, शरीर और आत्मा का संतुलन",
    about_start_today: "आज से शुरू करें",
    about_start_today_desc: "**आयुर्वेद** अपनाना मुश्किल नहीं है। छोटी-छोटी आदत बदलकर आप बड़े बदलाव ला सकते हैं। सुबह जल्दी उठना, गर्म पानी पीना, मौसमी फल खाना - ये सब **आयुर्वेद** का हिस्सा हैं।",
    about_start_today_cta: "हमारे AI डॉक्टर से बात करें और अपने **दोष** के बारे में जानें!",

    // Diseases Page
    diseases_title: "रोग और स्थितियाँ",
    diseases_subtitle: "विभिन्न स्वास्थ्य स्थितियों की आयुर्वेदिक समझ और उपचार का अन्वेषण करें",
    diseases_search_placeholder: "रोग के नाम या लक्षणों से खोजें...",
    diseases_all_categories: "सभी श्रेणियाँ",

    // Medicines Page
    medicines_page_title: "आयुर्वेदिक औषधियाँ",
    medicines_page_subtitle: "शास्त्रीय और पेटेंट आयुर्वेदिक योगों का अन्वेषण करें",
    medicines_search_placeholder: "औषधि के नाम या उपयोग से खोजें...",
    medicines_all_categories: "सभी श्रेणियाँ",

    // Remedies Page
    remedies_page_title: "घरेलू नुस्खे",
    remedies_page_subtitle: "रोज़मर्रा की स्वास्थ्य समस्याओं के लिए समय-परीक्षित प्राकृतिक उपचार",
    remedies_search_placeholder: "नाम या समस्या से नुस्खे खोजें...",
    remedies_all_categories: "सभी श्रेणियाँ",

    // Kits Page
    kits_page_title: "आयुर्वेदिक वेलनेस किट्स",
    kits_page_subtitle: "विशिष्ट स्वास्थ्य लक्ष्यों के लिए क्यूरेटेड वेलनेस किट्स",
    kits_add_to_cart: "कार्ट में जोड़ें",
    kits_know_more: "और जानें",

    // Cart
    cart_title: "आपकी कार्ट",
    cart_empty: "आपकी कार्ट खाली है",
    cart_browse_kits: "हमारे वेलनेस किट्स ब्राउज़ करें और अपनी उपचार यात्रा शुरू करें",
    cart_remove: "हटाएं",
    cart_total: "कुल",
    cart_checkout: "चेकआउट करें",
    cart_continue_shopping: "खरीदारी जारी रखें",

    // Footer
    footer_tagline: "आधुनिक स्वास्थ्य में प्राचीन ज्ञान",
    footer_quick_links: "त्वरित लिंक",
    footer_explore: "अन्वेषण करें",
    footer_legal: "कानूनी",
    footer_privacy: "गोपनीयता नीति",
    footer_disclaimer: "अस्वीकरण",
    footer_copyright: "© 2024 आयुर्वेद",
    footer_all_rights: "सर्वाधिकार सुरक्षित",

    // Common
    common_back: "वापस",
    common_search: "खोजें",
    common_loading: "लोड हो रहा है...",
    common_no_results: "कोई परिणाम नहीं मिला",
    common_did_you_mean: "क्या आपका मतलब था?",
    common_try_common: "इन आम बीमारियों को आज़माएं:",
    common_search_anyway: "फिर भी खोजें",

    // SEO Meta
    meta_home_title: "आयुर्वेद - भारत का #1 आयुर्वेदिक स्वास्थ्य प्लेटफॉर्म",
    meta_home_description: "आधुनिक स्वास्थ्य समस्याओं के लिए प्राचीन आयुर्वेदिक उपचार, हर्बल औषधियाँ और समग्र स्वास्थ्य समाधान खोजें।",
    meta_diseases_title: "रोग और स्थितियाँ | आयुर्वेद",
    meta_diseases_description: "विभिन्न स्वास्थ्य स्थितियों और रोगों के लिए आयुर्वेदिक समझ और प्राकृतिक उपचार का अन्वेषण करें।",
    meta_medicines_title: "आयुर्वेदिक औषधियाँ | आयुर्वेद",
    meta_medicines_description: "समग्र उपचार के लिए शास्त्रीय और पेटेंट आयुर्वेदिक योगों को ब्राउज़ करें।",
    meta_remedies_title: "घरेलू नुस्खे | आयुर्वेद",
    meta_remedies_description: "रोज़मर्रा की स्वास्थ्य समस्याओं के लिए रसोई की सामग्री से बने समय-परीक्षित प्राकृतिक उपचार।",
    meta_kits_title: "वेलनेस किट्स | आयुर्वेद",
    meta_kits_description: "विशिष्ट स्वास्थ्य लक्ष्यों और समग्र उपचार के लिए क्यूरेटेड आयुर्वेदिक वेलनेस किट्स।",
    meta_about_title: "आयुर्वेद के बारे में | आयुर्वेद",
    meta_about_description: "आयुर्वेद के 5000 वर्ष पुराने प्राचीन चिकित्सा विज्ञान और इसके सिद्धांतों के बारे में जानें।",
  },
};
