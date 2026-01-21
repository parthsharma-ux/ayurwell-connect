export interface BlogPost {
  id: string;
  title: string;
  titleHi: string;
  excerpt: string;
  excerptHi: string;
  content: string;
  contentHi: string;
  author: string;
  authorHi: string;
  date: string;
  readTime: string;
  readTimeHi: string;
  category: string;
  tags: string[];
  tagsHi: string[];
  featured?: boolean;
}

export interface Category {
  id: string;
  label: string;
  labelHi: string;
}

export const categories: Category[] = [
  { id: "fundamentals", label: "Ayurveda Fundamentals", labelHi: "आयुर्वेद के मूल सिद्धांत" },
  { id: "doshas", label: "Doshas & Constitution", labelHi: "दोष और प्रकृति" },
  { id: "herbs", label: "Herbs & Remedies", labelHi: "जड़ी-बूटियाँ और उपचार" },
  { id: "lifestyle", label: "Lifestyle & Wellness", labelHi: "जीवनशैली और स्वास्थ्य" },
  { id: "diet", label: "Diet & Nutrition", labelHi: "आहार और पोषण" },
  { id: "yoga", label: "Yoga & Meditation", labelHi: "योग और ध्यान" },
  { id: "children", label: "Children's Health", labelHi: "बच्चों का स्वास्थ्य" },
  { id: "women", label: "Women's Health", labelHi: "महिलाओं का स्वास्थ्य" },
  { id: "seasonal", label: "Seasonal Health", labelHi: "मौसमी स्वास्थ्य" },
  { id: "diseases", label: "Disease Management", labelHi: "रोग प्रबंधन" }
];

export const blogPosts: BlogPost[] = [
  {
    id: "ayurveda-basics-beginners-guide",
    title: "Ayurveda Basics: A Complete Beginner's Guide to Ancient Healing",
    titleHi: "आयुर्वेद की मूल बातें: प्राचीन चिकित्सा के लिए शुरुआती गाइड",
    excerpt: "Discover the fundamental principles of Ayurveda, the 5000-year-old science of life. Learn about doshas, prakruti, and how to begin your Ayurvedic wellness journey.",
    excerptHi: "आयुर्वेद के मूल सिद्धांतों की खोज करें, जो 5000 साल पुराना जीवन विज्ञान है। दोष, प्रकृति और अपनी आयुर्वेदिक स्वास्थ्य यात्रा कैसे शुरू करें, यह जानें।",
    content: `
      <h2>What is Ayurveda?</h2>
      <p>Ayurveda, meaning "Science of Life" in Sanskrit, is one of the world's oldest holistic healing systems. Developed more than 5,000 years ago in India, it's based on the belief that health and wellness depend on a delicate balance between the mind, body, and spirit.</p>
      
      <h2>The Three Doshas</h2>
      <p>At the core of Ayurvedic medicine are the three doshas: Vata, Pitta, and Kapha. These biological energies govern all physical and mental processes and are derived from the five elements.</p>
      
      <h3>Vata (Air + Space)</h3>
      <p>Vata controls movement, breathing, and circulation. When balanced, it promotes creativity and flexibility. When imbalanced, it can cause anxiety and dryness.</p>
      
      <h3>Pitta (Fire + Water)</h3>
      <p>Pitta governs digestion, metabolism, and energy production. Balanced Pitta leads to intelligence and contentment. Imbalance causes anger and inflammation.</p>
      
      <h3>Kapha (Earth + Water)</h3>
      <p>Kapha provides structure and stability. When balanced, it expresses love and calmness. Imbalance leads to attachment and congestion.</p>
      
      <h2>Your Prakruti (Constitution)</h2>
      <p>Everyone has a unique constitution determined at conception. Understanding your prakruti helps you make lifestyle choices that maintain balance and prevent disease.</p>
      
      <h2>Getting Started with Ayurveda</h2>
      <ul>
        <li>Take a dosha quiz to understand your constitution</li>
        <li>Follow a daily routine (Dinacharya)</li>
        <li>Eat according to your dosha</li>
        <li>Practice yoga and meditation</li>
        <li>Use herbs and spices mindfully</li>
      </ul>
    `,
    contentHi: `
      <h2>आयुर्वेद क्या है?</h2>
      <p>आयुर्वेद, जिसका संस्कृत में अर्थ है "जीवन का विज्ञान", दुनिया की सबसे पुरानी समग्र चिकित्सा प्रणालियों में से एक है। भारत में 5,000 साल से अधिक पहले विकसित, यह इस विश्वास पर आधारित है कि स्वास्थ्य और कल्याण मन, शरीर और आत्मा के बीच नाजुक संतुलन पर निर्भर करता है।</p>
      
      <h2>तीन दोष</h2>
      <p>आयुर्वेदिक चिकित्सा के केंद्र में तीन दोष हैं: वात, पित्त और कफ। ये जैविक ऊर्जाएं सभी शारीरिक और मानसिक प्रक्रियाओं को नियंत्रित करती हैं।</p>
      
      <h3>वात (वायु + आकाश)</h3>
      <p>वात गति, श्वास और रक्त संचार को नियंत्रित करता है। संतुलित होने पर यह रचनात्मकता को बढ़ावा देता है।</p>
      
      <h3>पित्त (अग्नि + जल)</h3>
      <p>पित्त पाचन और चयापचय को नियंत्रित करता है। संतुलित पित्त बुद्धि और संतोष की ओर ले जाता है।</p>
      
      <h3>कफ (पृथ्वी + जल)</h3>
      <p>कफ संरचना और स्थिरता प्रदान करता है। संतुलित होने पर यह प्रेम और शांति व्यक्त करता है।</p>
      
      <h2>आयुर्वेद शुरू करना</h2>
      <ul>
        <li>अपनी प्रकृति समझने के लिए दोष परीक्षण लें</li>
        <li>दैनिक दिनचर्या का पालन करें</li>
        <li>अपने दोष के अनुसार खाएं</li>
        <li>योग और ध्यान का अभ्यास करें</li>
      </ul>
    `,
    author: "Dr. Ananya Sharma",
    authorHi: "डॉ. अनन्या शर्मा",
    date: "2024-01-15",
    readTime: "8 min",
    readTimeHi: "8 मिनट",
    category: "fundamentals",
    tags: ["ayurveda", "doshas", "beginners", "wellness", "holistic health"],
    tagsHi: ["आयुर्वेद", "दोष", "शुरुआती", "स्वास्थ्य", "समग्र स्वास्थ्य"],
    featured: true
  },
  {
    id: "understanding-vata-dosha",
    title: "Understanding Vata Dosha: Signs, Symptoms & Balancing Tips",
    titleHi: "वात दोष को समझना: लक्षण और संतुलन के उपाय",
    excerpt: "Learn everything about Vata dosha - the energy of movement. Discover how to identify Vata imbalance and natural ways to restore harmony.",
    excerptHi: "वात दोष के बारे में सब कुछ जानें - गति की ऊर्जा। वात असंतुलन की पहचान और सामंजस्य बहाल करने के प्राकृतिक तरीके जानें।",
    content: `
      <h2>What is Vata Dosha?</h2>
      <p>Vata is composed of air and space elements, making it the principle of movement in the body. It governs all movement including breathing, circulation, nerve impulses, and elimination.</p>
      
      <h2>Characteristics of Vata Types</h2>
      <ul>
        <li>Thin, light body frame</li>
        <li>Dry skin and hair</li>
        <li>Creative and quick-thinking</li>
        <li>Enthusiastic but easily fatigued</li>
        <li>Light, interrupted sleep</li>
      </ul>
      
      <h2>Signs of Vata Imbalance</h2>
      <ul>
        <li>Anxiety and worry</li>
        <li>Dry, rough skin</li>
        <li>Constipation</li>
        <li>Joint pain and stiffness</li>
        <li>Insomnia</li>
      </ul>
      
      <h2>How to Balance Vata</h2>
      <h3>Diet</h3>
      <p>Favor warm, moist, grounding foods. Include healthy fats, root vegetables, and warming spices like ginger and cinnamon.</p>
      
      <h3>Lifestyle</h3>
      <p>Maintain regular routines, practice gentle yoga, get adequate sleep, and avoid cold environments.</p>
      
      <h3>Herbs</h3>
      <p>Ashwagandha, Brahmi, and Shatavari are excellent for calming Vata.</p>
    `,
    contentHi: `
      <h2>वात दोष क्या है?</h2>
      <p>वात वायु और आकाश तत्वों से बना है, जो इसे शरीर में गति का सिद्धांत बनाता है। यह श्वास, रक्त संचार और उत्सर्जन सहित सभी गतिविधियों को नियंत्रित करता है।</p>
      
      <h2>वात प्रकार की विशेषताएं</h2>
      <ul>
        <li>पतला, हल्का शरीर</li>
        <li>रूखी त्वचा और बाल</li>
        <li>रचनात्मक और तेज सोच</li>
        <li>उत्साही लेकिन जल्दी थक जाते हैं</li>
      </ul>
      
      <h2>वात असंतुलन के लक्षण</h2>
      <ul>
        <li>चिंता और घबराहट</li>
        <li>रूखी त्वचा</li>
        <li>कब्ज</li>
        <li>जोड़ों का दर्द</li>
        <li>अनिद्रा</li>
      </ul>
      
      <h2>वात को संतुलित करने के उपाय</h2>
      <h3>आहार</h3>
      <p>गर्म, नम, ग्राउंडिंग खाद्य पदार्थों को प्राथमिकता दें।</p>
      
      <h3>जड़ी-बूटियाँ</h3>
      <p>अश्वगंधा, ब्राह्मी और शतावरी वात को शांत करने के लिए उत्कृष्ट हैं।</p>
    `,
    author: "Dr. Vikram Patel",
    authorHi: "डॉ. विक्रम पटेल",
    date: "2024-01-10",
    readTime: "10 min",
    readTimeHi: "10 मिनट",
    category: "doshas",
    tags: ["vata", "dosha", "balance", "anxiety", "digestion"],
    tagsHi: ["वात", "दोष", "संतुलन", "चिंता", "पाचन"],
    featured: true
  },
  {
    id: "ashwagandha-complete-guide",
    title: "Ashwagandha: The Complete Guide to India's Most Powerful Adaptogen",
    titleHi: "अश्वगंधा: भारत के सबसे शक्तिशाली एडाप्टोजेन की पूरी गाइड",
    excerpt: "Explore the science-backed benefits of Ashwagandha, from stress relief to improved strength. Learn dosage, uses, and precautions.",
    excerptHi: "तनाव से राहत से लेकर बेहतर शक्ति तक अश्वगंधा के विज्ञान-समर्थित लाभों का पता लगाएं।",
    content: `
      <h2>What is Ashwagandha?</h2>
      <p>Ashwagandha (Withania somnifera), also known as Indian Ginseng, is one of the most important herbs in Ayurveda. It has been used for over 3,000 years to relieve stress, increase energy, and improve concentration.</p>
      
      <h2>Scientific Benefits</h2>
      <h3>Stress and Anxiety Relief</h3>
      <p>Multiple studies show Ashwagandha significantly reduces cortisol levels and anxiety symptoms.</p>
      
      <h3>Improved Physical Performance</h3>
      <p>Research indicates improvements in strength, muscle mass, and exercise performance.</p>
      
      <h3>Better Sleep</h3>
      <p>The herb promotes restful sleep and helps with insomnia.</p>
      
      <h2>How to Take Ashwagandha</h2>
      <ul>
        <li><strong>Powder:</strong> 1-2 teaspoons with warm milk</li>
        <li><strong>Capsules:</strong> 300-600mg daily</li>
        <li><strong>Best time:</strong> Before bed or with meals</li>
      </ul>
      
      <h2>Precautions</h2>
      <p>Avoid during pregnancy. Consult a doctor if you have thyroid conditions or are on medications.</p>
    `,
    contentHi: `
      <h2>अश्वगंधा क्या है?</h2>
      <p>अश्वगंधा, जिसे भारतीय जिनसेंग भी कहा जाता है, आयुर्वेद में सबसे महत्वपूर्ण जड़ी-बूटियों में से एक है। इसका उपयोग 3,000 से अधिक वर्षों से तनाव दूर करने के लिए किया जाता है।</p>
      
      <h2>वैज्ञानिक लाभ</h2>
      <h3>तनाव और चिंता से राहत</h3>
      <p>कई अध्ययन दिखाते हैं कि अश्वगंधा कोर्टिसोल के स्तर को कम करता है।</p>
      
      <h3>बेहतर शारीरिक प्रदर्शन</h3>
      <p>शोध शक्ति और मांसपेशियों में सुधार दर्शाता है।</p>
      
      <h2>अश्वगंधा कैसे लें</h2>
      <ul>
        <li><strong>चूर्ण:</strong> गर्म दूध के साथ 1-2 चम्मच</li>
        <li><strong>कैप्सूल:</strong> 300-600mg दैनिक</li>
      </ul>
      
      <h2>सावधानियां</h2>
      <p>गर्भावस्था में बचें। थायराइड की स्थिति हो तो डॉक्टर से परामर्श करें।</p>
    `,
    author: "Dr. Priya Mehta",
    authorHi: "डॉ. प्रिया मेहता",
    date: "2024-01-08",
    readTime: "12 min",
    readTimeHi: "12 मिनट",
    category: "herbs",
    tags: ["ashwagandha", "adaptogen", "stress", "herbs", "immunity"],
    tagsHi: ["अश्वगंधा", "एडाप्टोजेन", "तनाव", "जड़ी-बूटी", "प्रतिरक्षा"],
    featured: true
  },
  {
    id: "ayurvedic-morning-routine",
    title: "The Perfect Ayurvedic Morning Routine (Dinacharya) for Optimal Health",
    titleHi: "इष्टतम स्वास्थ्य के लिए संपूर्ण आयुर्वेदिक सुबह की दिनचर्या",
    excerpt: "Transform your mornings with this ancient Ayurvedic routine. Learn the step-by-step Dinacharya practices for energy, clarity, and wellness.",
    excerptHi: "इस प्राचीन आयुर्वेदिक दिनचर्या से अपनी सुबह को बदलें। ऊर्जा और स्वास्थ्य के लिए दिनचर्या अभ्यास जानें।",
    content: `
      <h2>What is Dinacharya?</h2>
      <p>Dinacharya means "daily routine" in Sanskrit. According to Ayurveda, following a consistent morning routine aligns your body with nature's rhythms and promotes optimal health.</p>
      
      <h2>The Ideal Ayurvedic Morning Routine</h2>
      
      <h3>1. Wake Up Before Sunrise (Brahma Muhurta)</h3>
      <p>Wake up during Brahma Muhurta, approximately 1.5 hours before sunrise, when the environment is pure and peaceful.</p>
      
      <h3>2. Drink Warm Water</h3>
      <p>Start your day with a glass of warm water to stimulate digestion and flush toxins.</p>
      
      <h3>3. Tongue Scraping</h3>
      <p>Use a copper or steel tongue scraper to remove overnight toxins and stimulate digestive organs.</p>
      
      <h3>4. Oil Pulling (Gandusha)</h3>
      <p>Swish sesame or coconut oil in your mouth for 10-15 minutes to remove bacteria.</p>
      
      <h3>5. Abhyanga (Self-Massage)</h3>
      <p>Massage warm oil into your skin. Use sesame oil for Vata, coconut for Pitta, and mustard for Kapha.</p>
      
      <h3>6. Yoga and Meditation</h3>
      <p>Spend 15-20 minutes in meditation and breathing exercises.</p>
    `,
    contentHi: `
      <h2>दिनचर्या क्या है?</h2>
      <p>दिनचर्या का अर्थ संस्कृत में "दैनिक दिनचर्या" है। आयुर्वेद के अनुसार, एक सुसंगत सुबह की दिनचर्या का पालन करने से आपका शरीर प्रकृति की लय के साथ संरेखित होता है।</p>
      
      <h2>आदर्श आयुर्वेदिक सुबह की दिनचर्या</h2>
      
      <h3>1. सूर्योदय से पहले जागें (ब्रह्म मुहूर्त)</h3>
      <p>ब्रह्म मुहूर्त के दौरान जागें, सूर्योदय से लगभग 1.5 घंटे पहले।</p>
      
      <h3>2. गर्म पानी पिएं</h3>
      <p>पाचन को उत्तेजित करने के लिए गर्म पानी से दिन की शुरुआत करें।</p>
      
      <h3>3. जीभ की सफाई</h3>
      <p>रात भर के विषाक्त पदार्थों को हटाने के लिए तांबे के जीभ स्क्रेपर का उपयोग करें।</p>
      
      <h3>4. तेल खींचना (गंडूष)</h3>
      <p>बैक्टीरिया हटाने के लिए 10-15 मिनट तक तिल या नारियल का तेल मुंह में घुमाएं।</p>
      
      <h3>5. अभ्यंग (स्व-मालिश)</h3>
      <p>गर्म तेल से अपनी त्वचा की मालिश करें।</p>
      
      <h3>6. योग और ध्यान</h3>
      <p>ध्यान और श्वास व्यायाम में 15-20 मिनट बिताएं।</p>
    `,
    author: "Dr. Ravi Kumar",
    authorHi: "डॉ. रवि कुमार",
    date: "2024-01-05",
    readTime: "15 min",
    readTimeHi: "15 मिनट",
    category: "lifestyle",
    tags: ["dinacharya", "morning routine", "wellness", "daily habits", "health"],
    tagsHi: ["दिनचर्या", "सुबह की दिनचर्या", "स्वास्थ्य", "दैनिक आदतें"],
    featured: false
  },
  {
    id: "ayurvedic-diet-principles",
    title: "Ayurvedic Diet: Eating According to Your Dosha for Perfect Health",
    titleHi: "आयुर्वेदिक आहार: उत्तम स्वास्थ्य के लिए अपने दोष के अनुसार खाना",
    excerpt: "Discover the Ayurvedic approach to nutrition. Learn which foods suit your body type and how to eat for balance and vitality.",
    excerptHi: "पोषण के आयुर्वेदिक दृष्टिकोण की खोज करें। जानें कौन से खाद्य पदार्थ आपके शरीर के प्रकार के अनुकूल हैं।",
    content: `
      <h2>The Six Tastes of Ayurveda</h2>
      <p>Ayurveda recognizes six tastes (Rasa) that should be present in every meal for complete nutrition and satisfaction.</p>
      
      <h3>Sweet (Madhura)</h3>
      <p>Builds tissues, calms the mind. Examples: grains, dairy, sweet fruits.</p>
      
      <h3>Sour (Amla)</h3>
      <p>Stimulates digestion, increases appetite. Examples: citrus, yogurt, fermented foods.</p>
      
      <h3>Salty (Lavana)</h3>
      <p>Aids digestion, maintains electrolyte balance. Examples: sea salt, seaweed.</p>
      
      <h3>Pungent (Katu)</h3>
      <p>Stimulates metabolism, clears congestion. Examples: chili, ginger, garlic.</p>
      
      <h3>Bitter (Tikta)</h3>
      <p>Detoxifies, reduces inflammation. Examples: leafy greens, turmeric.</p>
      
      <h3>Astringent (Kashaya)</h3>
      <p>Tones tissues, absorbs excess moisture. Examples: legumes, raw vegetables.</p>
      
      <h2>Eating for Your Dosha</h2>
      <h3>Vata Diet</h3>
      <p>Favor warm, moist, grounding foods. Avoid cold, dry, raw foods.</p>
      
      <h3>Pitta Diet</h3>
      <p>Favor cooling, mild foods. Avoid hot, spicy, fermented foods.</p>
      
      <h3>Kapha Diet</h3>
      <p>Favor light, dry, warming foods. Avoid heavy, oily, cold foods.</p>
    `,
    contentHi: `
      <h2>आयुर्वेद के छह स्वाद</h2>
      <p>आयुर्वेद छह स्वाद (रस) को पहचानता है जो पूर्ण पोषण के लिए हर भोजन में होने चाहिए।</p>
      
      <h3>मधुर (मीठा)</h3>
      <p>ऊतकों का निर्माण करता है। उदाहरण: अनाज, डेयरी, मीठे फल।</p>
      
      <h3>अम्ल (खट्टा)</h3>
      <p>पाचन को उत्तेजित करता है। उदाहरण: खट्टे फल, दही।</p>
      
      <h3>लवण (नमकीन)</h3>
      <p>पाचन में सहायता करता है। उदाहरण: समुद्री नमक।</p>
      
      <h3>कटु (तीखा)</h3>
      <p>चयापचय को उत्तेजित करता है। उदाहरण: मिर्च, अदरक।</p>
      
      <h3>तिक्त (कड़वा)</h3>
      <p>विषहरण करता है। उदाहरण: पत्तेदार साग, हल्दी।</p>
      
      <h3>कषाय (कसैला)</h3>
      <p>ऊतकों को टोन करता है। उदाहरण: दालें, कच्ची सब्जियां।</p>
      
      <h2>अपने दोष के लिए खाना</h2>
      <h3>वात आहार</h3>
      <p>गर्म, नम, ग्राउंडिंग खाद्य पदार्थों को प्राथमिकता दें।</p>
      
      <h3>पित्त आहार</h3>
      <p>ठंडे, हल्के खाद्य पदार्थों को प्राथमिकता दें।</p>
      
      <h3>कफ आहार</h3>
      <p>हल्के, सूखे, गर्म खाद्य पदार्थों को प्राथमिकता दें।</p>
    `,
    author: "Dr. Ananya Sharma",
    authorHi: "डॉ. अनन्या शर्मा",
    date: "2024-01-02",
    readTime: "11 min",
    readTimeHi: "11 मिनट",
    category: "diet",
    tags: ["diet", "nutrition", "doshas", "six tastes", "food"],
    tagsHi: ["आहार", "पोषण", "दोष", "छह स्वाद", "भोजन"],
    featured: false
  },
  {
    id: "yoga-for-beginners-ayurveda",
    title: "Yoga for Beginners: An Ayurvedic Approach to Starting Your Practice",
    titleHi: "शुरुआती लोगों के लिए योग: अपना अभ्यास शुरू करने का आयुर्वेदिक तरीका",
    excerpt: "Learn how to start yoga the Ayurvedic way. Discover which poses suit your dosha and how to create a balanced practice.",
    excerptHi: "आयुर्वेदिक तरीके से योग शुरू करना सीखें। जानें कौन से आसन आपके दोष के अनुकूल हैं।",
    content: `
      <h2>Yoga and Ayurveda: Sister Sciences</h2>
      <p>Yoga and Ayurveda are complementary practices that originated together in ancient India. While Ayurveda focuses on the body's health, yoga addresses the mind and spirit.</p>
      
      <h2>Yoga for Each Dosha</h2>
      
      <h3>Vata-Balancing Yoga</h3>
      <ul>
        <li>Practice slow, grounding poses</li>
        <li>Hold poses longer for stability</li>
        <li>Recommended: Tadasana, Vrikshasana, Padmasana</li>
      </ul>
      
      <h3>Pitta-Balancing Yoga</h3>
      <ul>
        <li>Practice cooling, calming sequences</li>
        <li>Avoid competitive attitudes</li>
        <li>Recommended: Shitali Pranayama, Moon Salutation</li>
      </ul>
      
      <h3>Kapha-Balancing Yoga</h3>
      <ul>
        <li>Practice vigorous, heating sequences</li>
        <li>Sun Salutations are excellent</li>
        <li>Recommended: Surya Namaskar, Bhujangasana</li>
      </ul>
      
      <h2>Starting Your Practice</h2>
      <p>Begin with 15-20 minutes daily. Focus on breath awareness. Practice on an empty stomach, ideally in the morning.</p>
    `,
    contentHi: `
      <h2>योग और आयुर्वेद: बहन विज्ञान</h2>
      <p>योग और आयुर्वेद पूरक अभ्यास हैं जो प्राचीन भारत में एक साथ उत्पन्न हुए।</p>
      
      <h2>प्रत्येक दोष के लिए योग</h2>
      
      <h3>वात-संतुलन योग</h3>
      <ul>
        <li>धीमे, ग्राउंडिंग आसनों का अभ्यास करें</li>
        <li>अनुशंसित: ताड़ासन, वृक्षासन, पद्मासन</li>
      </ul>
      
      <h3>पित्त-संतुलन योग</h3>
      <ul>
        <li>शीतलन, शांत अनुक्रमों का अभ्यास करें</li>
        <li>अनुशंसित: शीतली प्राणायाम, चंद्र नमस्कार</li>
      </ul>
      
      <h3>कफ-संतुलन योग</h3>
      <ul>
        <li>जोरदार, गर्म अनुक्रमों का अभ्यास करें</li>
        <li>अनुशंसित: सूर्य नमस्कार, भुजंगासन</li>
      </ul>
      
      <h2>अपना अभ्यास शुरू करना</h2>
      <p>दैनिक 15-20 मिनट से शुरू करें। सांस जागरूकता पर ध्यान दें।</p>
    `,
    author: "Yoga Master Ramesh",
    authorHi: "योग गुरु रमेश",
    date: "2023-12-28",
    readTime: "9 min",
    readTimeHi: "9 मिनट",
    category: "yoga",
    tags: ["yoga", "beginners", "doshas", "asanas", "practice"],
    tagsHi: ["योग", "शुरुआती", "दोष", "आसन", "अभ्यास"],
    featured: false
  },
  {
    id: "childrens-immunity-ayurveda",
    title: "Boosting Children's Immunity Naturally with Ayurveda",
    titleHi: "आयुर्वेद से बच्चों की रोग प्रतिरोधक क्षमता को प्राकृतिक रूप से बढ़ाएं",
    excerpt: "Safe and effective Ayurvedic methods to strengthen your child's immune system naturally without side effects.",
    excerptHi: "बिना साइड इफेक्ट के प्राकृतिक रूप से बच्चे की प्रतिरक्षा प्रणाली को मजबूत करने के सुरक्षित आयुर्वेदिक तरीके।",
    content: `
      <h2>Understanding Children's Health in Ayurveda</h2>
      <p>In Ayurveda, children are predominantly Kapha in nature, which makes them prone to respiratory issues and congestion. Building immunity early is crucial for lifelong health.</p>
      
      <h2>Safe Herbs for Children</h2>
      
      <h3>Chyawanprash</h3>
      <p>This traditional Ayurvedic jam is excellent for children. Give 1/2 to 1 teaspoon daily with warm milk.</p>
      
      <h3>Tulsi (Holy Basil)</h3>
      <p>Add fresh tulsi leaves to food or give as tea. Excellent for respiratory health.</p>
      
      <h3>Giloy (Guduchi)</h3>
      <p>Known as Amrita (nectar), it's one of the safest immunity boosters for children.</p>
      
      <h3>Honey and Turmeric</h3>
      <p>Mix a pinch of turmeric in honey for natural immune support (for children over 1 year).</p>
      
      <h2>Lifestyle Tips</h2>
      <ul>
        <li>Ensure adequate sleep (10-12 hours for young children)</li>
        <li>Massage with warm sesame oil</li>
        <li>Include seasonal fruits and vegetables</li>
        <li>Limit cold foods and drinks</li>
        <li>Encourage outdoor play in sunlight</li>
      </ul>
    `,
    contentHi: `
      <h2>आयुर्वेद में बच्चों के स्वास्थ्य को समझना</h2>
      <p>आयुर्वेद में, बच्चे प्रकृति में मुख्य रूप से कफ होते हैं, जो उन्हें श्वसन समस्याओं के प्रति संवेदनशील बनाता है।</p>
      
      <h2>बच्चों के लिए सुरक्षित जड़ी-बूटियाँ</h2>
      
      <h3>च्यवनप्राश</h3>
      <p>यह पारंपरिक आयुर्वेदिक अवलेह बच्चों के लिए उत्कृष्ट है। गर्म दूध के साथ दैनिक 1/2 से 1 चम्मच दें।</p>
      
      <h3>तुलसी</h3>
      <p>भोजन में ताजी तुलसी की पत्तियां डालें। श्वसन स्वास्थ्य के लिए उत्कृष्ट।</p>
      
      <h3>गिलोय (गुडूची)</h3>
      <p>अमृत के रूप में जाना जाता है, यह बच्चों के लिए सबसे सुरक्षित प्रतिरक्षा बूस्टर में से एक है।</p>
      
      <h2>जीवनशैली युक्तियाँ</h2>
      <ul>
        <li>पर्याप्त नींद सुनिश्चित करें (छोटे बच्चों के लिए 10-12 घंटे)</li>
        <li>गर्म तिल के तेल से मालिश करें</li>
        <li>मौसमी फल और सब्जियां शामिल करें</li>
        <li>ठंडे खाद्य पदार्थों को सीमित करें</li>
      </ul>
    `,
    author: "Dr. Meera Joshi",
    authorHi: "डॉ. मीरा जोशी",
    date: "2023-12-22",
    readTime: "8 min",
    readTimeHi: "8 मिनट",
    category: "children",
    tags: ["children", "immunity", "herbs", "health", "natural remedies"],
    tagsHi: ["बच्चे", "प्रतिरक्षा", "जड़ी-बूटी", "स्वास्थ्य", "प्राकृतिक उपचार"],
    featured: false
  },
  {
    id: "womens-health-ayurveda",
    title: "Women's Health in Ayurveda: A Comprehensive Guide to Hormonal Balance",
    titleHi: "आयुर्वेद में महिलाओं का स्वास्थ्य: हार्मोनल संतुलन की व्यापक गाइड",
    excerpt: "Discover Ayurvedic wisdom for women's health issues including menstrual health, fertility, menopause, and hormonal balance.",
    excerptHi: "मासिक धर्म स्वास्थ्य, प्रजनन क्षमता, रजोनिवृत्ति और हार्मोनल संतुलन सहित महिलाओं के स्वास्थ्य के लिए आयुर्वेदिक ज्ञान की खोज करें।",
    content: `
      <h2>Women's Health Across Life Stages</h2>
      <p>Ayurveda recognizes that women go through unique life stages, each requiring specific care and attention to maintain doshic balance.</p>
      
      <h2>Menstrual Health</h2>
      <h3>Balancing the Cycle</h3>
      <p>A healthy menstrual cycle reflects overall health. Ayurveda offers natural solutions for irregular periods, painful cramps, and PMS.</p>
      
      <h3>Key Herbs</h3>
      <ul>
        <li><strong>Shatavari:</strong> The premier women's tonic for all life stages</li>
        <li><strong>Ashoka:</strong> Excellent for menstrual disorders</li>
        <li><strong>Lodhra:</strong> Helps regulate cycles</li>
      </ul>
      
      <h2>Fertility Support</h2>
      <p>Ayurveda emphasizes preparing both body and mind for conception. Key practices include:</p>
      <ul>
        <li>Panchakarma cleansing before conception</li>
        <li>Shatavari and Ashwagandha supplementation</li>
        <li>Stress reduction through yoga and meditation</li>
      </ul>
      
      <h2>Menopause Management</h2>
      <p>Natural transition can be smooth with Ayurvedic support. Focus on Vata-balancing practices, cooling herbs like Shatavari, and lifestyle modifications.</p>
      
      <h2>Daily Self-Care</h2>
      <ul>
        <li>Abhyanga (self-massage) with warm oil</li>
        <li>Gentle yoga suited to your cycle phase</li>
        <li>Warm, nourishing foods</li>
        <li>Adequate rest, especially during menstruation</li>
      </ul>
    `,
    contentHi: `
      <h2>जीवन के चरणों में महिलाओं का स्वास्थ्य</h2>
      <p>आयुर्वेद मानता है कि महिलाएं अद्वितीय जीवन चरणों से गुजरती हैं।</p>
      
      <h2>मासिक धर्म स्वास्थ्य</h2>
      <h3>चक्र को संतुलित करना</h3>
      <p>एक स्वस्थ मासिक धर्म चक्र समग्र स्वास्थ्य को दर्शाता है।</p>
      
      <h3>प्रमुख जड़ी-बूटियाँ</h3>
      <ul>
        <li><strong>शतावरी:</strong> सभी जीवन चरणों के लिए प्रमुख महिला टॉनिक</li>
        <li><strong>अशोक:</strong> मासिक धर्म विकारों के लिए उत्कृष्ट</li>
        <li><strong>लोध्र:</strong> चक्रों को नियमित करने में मदद करता है</li>
      </ul>
      
      <h2>प्रजनन सहायता</h2>
      <p>आयुर्वेद गर्भाधान के लिए शरीर और मन दोनों को तैयार करने पर जोर देता है।</p>
      
      <h2>रजोनिवृत्ति प्रबंधन</h2>
      <p>आयुर्वेदिक सहायता से प्राकृतिक संक्रमण सुचारू हो सकता है।</p>
      
      <h2>दैनिक स्व-देखभाल</h2>
      <ul>
        <li>गर्म तेल से अभ्यंग (आत्म-मालिश)</li>
        <li>आपके चक्र चरण के अनुकूल हल्का योग</li>
        <li>गर्म, पौष्टिक भोजन</li>
        <li>मासिक धर्म के दौरान पर्याप्त आराम</li>
      </ul>
    `,
    author: "Dr. Lakshmi Devi",
    authorHi: "डॉ. लक्ष्मी देवी",
    date: "2023-12-18",
    readTime: "13 min",
    readTimeHi: "13 मिनट",
    category: "women",
    tags: ["women's health", "hormones", "menstrual", "fertility", "menopause"],
    tagsHi: ["महिलाओं का स्वास्थ्य", "हार्मोन", "मासिक धर्म", "प्रजनन", "रजोनिवृत्ति"],
    featured: true
  },
  {
    id: "seasonal-health-ritucharya",
    title: "Ritucharya: The Ayurvedic Guide to Seasonal Living",
    titleHi: "ऋतुचर्या: मौसमी जीवन के लिए आयुर्वेदिक गाइड",
    excerpt: "Learn how to adapt your diet, lifestyle, and routines according to seasons for optimal health throughout the year.",
    excerptHi: "पूरे वर्ष इष्टतम स्वास्थ्य के लिए मौसम के अनुसार अपने आहार और जीवनशैली को अनुकूलित करना सीखें।",
    content: `
      <h2>What is Ritucharya?</h2>
      <p>Ritucharya (seasonal routine) is the Ayurvedic practice of adjusting diet and lifestyle according to seasonal changes to maintain doshic balance and prevent disease.</p>
      
      <h2>The Six Seasons of Ayurveda</h2>
      
      <h3>Shishira (Late Winter: January-February)</h3>
      <p>Kapha accumulates. Eat warm, light foods. Increase physical activity.</p>
      
      <h3>Vasanta (Spring: March-April)</h3>
      <p>Kapha aggravates. Favor bitter, pungent, and astringent tastes. Best time for detox.</p>
      
      <h3>Grishma (Summer: May-June)</h3>
      <p>Vata accumulates. Stay cool with sweet, cold, liquid foods. Reduce physical exertion.</p>
      
      <h3>Varsha (Monsoon: July-August)</h3>
      <p>Vata aggravates. Eat light, easily digestible foods. Avoid raw vegetables.</p>
      
      <h3>Sharad (Autumn: September-October)</h3>
      <p>Pitta aggravates. Favor sweet, bitter, astringent tastes. Eat cooling foods.</p>
      
      <h3>Hemanta (Early Winter: November-December)</h3>
      <p>Digestive fire is strongest. Eat nourishing, heavy foods. Exercise regularly.</p>
      
      <h2>General Seasonal Tips</h2>
      <ul>
        <li>Eat locally grown, seasonal produce</li>
        <li>Adjust wake and sleep times with daylight</li>
        <li>Perform seasonal cleansing (Panchakarma)</li>
      </ul>
    `,
    contentHi: `
      <h2>ऋतुचर्या क्या है?</h2>
      <p>ऋतुचर्या (मौसमी दिनचर्या) दोषिक संतुलन बनाए रखने के लिए मौसमी परिवर्तनों के अनुसार आहार और जीवनशैली को समायोजित करने का आयुर्वेदिक अभ्यास है।</p>
      
      <h2>आयुर्वेद के छह मौसम</h2>
      
      <h3>शिशिर (देर सर्दी: जनवरी-फरवरी)</h3>
      <p>कफ जमा होता है। गर्म, हल्के खाद्य पदार्थ खाएं।</p>
      
      <h3>वसंत (वसंत: मार्च-अप्रैल)</h3>
      <p>कफ बढ़ता है। कड़वे, तीखे स्वादों को प्राथमिकता दें। डिटॉक्स का सबसे अच्छा समय।</p>
      
      <h3>ग्रीष्म (गर्मी: मई-जून)</h3>
      <p>वात जमा होता है। मीठे, ठंडे खाद्य पदार्थों से ठंडे रहें।</p>
      
      <h3>वर्षा (मानसून: जुलाई-अगस्त)</h3>
      <p>वात बढ़ता है। हल्के, आसानी से पचने वाले खाद्य पदार्थ खाएं।</p>
      
      <h3>शरद (शरद ऋतु: सितंबर-अक्टूबर)</h3>
      <p>पित्त बढ़ता है। मीठे, कड़वे स्वादों को प्राथमिकता दें।</p>
      
      <h3>हेमंत (शुरुआती सर्दी: नवंबर-दिसंबर)</h3>
      <p>पाचन अग्नि सबसे मजबूत होती है। पौष्टिक खाद्य पदार्थ खाएं।</p>
    `,
    author: "Dr. Vikram Patel",
    authorHi: "डॉ. विक्रम पटेल",
    date: "2023-12-12",
    readTime: "10 min",
    readTimeHi: "10 मिनट",
    category: "seasonal",
    tags: ["ritucharya", "seasons", "diet", "lifestyle", "prevention"],
    tagsHi: ["ऋतुचर्या", "मौसम", "आहार", "जीवनशैली", "रोकथाम"],
    featured: false
  },
  {
    id: "managing-diabetes-ayurveda",
    title: "Managing Diabetes Naturally with Ayurveda: A Complete Guide",
    titleHi: "आयुर्वेद से मधुमेह का प्राकृतिक प्रबंधन: एक संपूर्ण गाइड",
    excerpt: "Explore Ayurvedic approaches to managing diabetes including herbs, diet modifications, and lifestyle changes for blood sugar control.",
    excerptHi: "रक्त शर्करा नियंत्रण के लिए जड़ी-बूटियों, आहार संशोधनों और जीवनशैली परिवर्तनों सहित मधुमेह प्रबंधन के आयुर्वेदिक दृष्टिकोणों का पता लगाएं।",
    content: `
      <h2>Understanding Diabetes in Ayurveda</h2>
      <p>In Ayurveda, diabetes is known as Madhumeha or Prameha. It's primarily a Kapha disorder caused by diminished digestive fire (Agni) leading to the accumulation of sugar in the body.</p>
      
      <h2>Ayurvedic Herbs for Diabetes</h2>
      
      <h3>Bitter Melon (Karela)</h3>
      <p>Contains compounds that mimic insulin. Consume as juice or cooked vegetable.</p>
      
      <h3>Fenugreek (Methi)</h3>
      <p>Slows carbohydrate absorption. Soak seeds overnight and consume in the morning.</p>
      
      <h3>Gudmar (Gymnema sylvestre)</h3>
      <p>Known as the "sugar destroyer," it reduces sugar cravings and supports pancreatic function.</p>
      
      <h3>Turmeric (Haldi)</h3>
      <p>Anti-inflammatory and helps improve insulin sensitivity.</p>
      
      <h3>Jamun</h3>
      <p>The seeds and fruit help control blood sugar levels.</p>
      
      <h2>Diet Recommendations</h2>
      <ul>
        <li>Favor bitter, astringent, and pungent tastes</li>
        <li>Avoid sweet, sour, and salty foods</li>
        <li>Include barley, bitter gourd, and green vegetables</li>
        <li>Eat smaller, more frequent meals</li>
      </ul>
      
      <h2>Lifestyle Modifications</h2>
      <ul>
        <li>Regular exercise, especially walking</li>
        <li>Yoga asanas like Dhanurasana and Surya Namaskar</li>
        <li>Stress management through meditation</li>
        <li>Adequate sleep</li>
      </ul>
      
      <h2>Important Note</h2>
      <p>Always work with healthcare providers. Ayurveda can complement but not replace medical treatment.</p>
    `,
    contentHi: `
      <h2>आयुर्वेद में मधुमेह को समझना</h2>
      <p>आयुर्वेद में, मधुमेह को मधुमेह या प्रमेह के रूप में जाना जाता है। यह मुख्य रूप से एक कफ विकार है।</p>
      
      <h2>मधुमेह के लिए आयुर्वेदिक जड़ी-बूटियाँ</h2>
      
      <h3>करेला</h3>
      <p>इसमें इंसुलिन की नकल करने वाले यौगिक होते हैं। रस या पकी हुई सब्जी के रूप में सेवन करें।</p>
      
      <h3>मेथी</h3>
      <p>कार्बोहाइड्रेट अवशोषण को धीमा करती है। बीजों को रात भर भिगोएं।</p>
      
      <h3>गुड़मार</h3>
      <p>"चीनी विनाशक" के रूप में जाना जाता है।</p>
      
      <h3>हल्दी</h3>
      <p>सूजन-रोधी और इंसुलिन संवेदनशीलता में सुधार करती है।</p>
      
      <h3>जामुन</h3>
      <p>बीज और फल रक्त शर्करा के स्तर को नियंत्रित करते हैं।</p>
      
      <h2>आहार सिफारिशें</h2>
      <ul>
        <li>कड़वे, कसैले और तीखे स्वादों को प्राथमिकता दें</li>
        <li>मीठे, खट्टे खाद्य पदार्थों से बचें</li>
        <li>जौ, करेला और हरी सब्जियां शामिल करें</li>
        <li>छोटे, अधिक बार भोजन करें</li>
      </ul>
      
      <h2>जीवनशैली संशोधन</h2>
      <ul>
        <li>नियमित व्यायाम, विशेष रूप से चलना</li>
        <li>धनुरासन और सूर्य नमस्कार जैसे योग आसन</li>
        <li>ध्यान के माध्यम से तनाव प्रबंधन</li>
      </ul>
    `,
    author: "Dr. Suresh Acharya",
    authorHi: "डॉ. सुरेश आचार्य",
    date: "2023-12-08",
    readTime: "14 min",
    readTimeHi: "14 मिनट",
    category: "diseases",
    tags: ["diabetes", "blood sugar", "herbs", "diet", "natural treatment"],
    tagsHi: ["मधुमेह", "रक्त शर्करा", "जड़ी-बूटी", "आहार", "प्राकृतिक उपचार"],
    featured: false
  },
  {
    id: "home-remedies-cold-cough",
    title: "15 Powerful Home Remedies for Cold and Cough That Actually Work",
    titleHi: "सर्दी-खांसी के 15 शक्तिशाली घरेलू उपचार जो वास्तव में काम करते हैं",
    excerpt: "Discover effective kitchen-based remedies for cold and cough. These natural solutions provide quick relief without side effects.",
    excerptHi: "सर्दी और खांसी के लिए प्रभावी किचन-आधारित उपचार खोजें। ये प्राकृतिक समाधान बिना साइड इफेक्ट के तेज राहत प्रदान करते हैं।",
    content: `
      <h2>Why Choose Home Remedies for Cold and Cough?</h2>
      <p>While modern medicines suppress symptoms, Ayurvedic home remedies work with your body to naturally expel toxins and strengthen immunity. These time-tested remedies are safe, effective, and readily available in your kitchen.</p>
      
      <h2>Top 15 Home Remedies</h2>
      
      <h3>1. Ginger-Honey-Lemon Tea (Adrak Chai)</h3>
      <p><strong>Ingredients:</strong> 1 inch fresh ginger, 1 tbsp honey, juice of half lemon, 1 cup hot water</p>
      <p><strong>Method:</strong> Grate ginger into hot water, steep for 5 minutes, strain, add honey and lemon. Drink 3-4 times daily.</p>
      <p><strong>Benefits:</strong> Ginger reduces inflammation, honey soothes throat, lemon provides vitamin C.</p>
      
      <h3>2. Turmeric Milk (Haldi Doodh / Golden Milk)</h3>
      <p><strong>Ingredients:</strong> 1 cup warm milk, 1/2 tsp turmeric, pinch of black pepper, 1 tsp honey</p>
      <p><strong>Method:</strong> Mix turmeric in warm milk, add pepper (enhances absorption), sweeten with honey. Drink before bed.</p>
      <p><strong>Benefits:</strong> Curcumin in turmeric has powerful anti-inflammatory and antibacterial properties.</p>
      
      <h3>3. Tulsi (Holy Basil) Kadha</h3>
      <p><strong>Ingredients:</strong> 10-15 tulsi leaves, 5 black pepper, 1 inch ginger, 1 cup water</p>
      <p><strong>Method:</strong> Boil all ingredients until water reduces to half. Strain and drink warm with honey.</p>
      <p><strong>Benefits:</strong> Tulsi is a natural expectorant and immunity booster.</p>
      
      <h3>4. Steam Inhalation with Ajwain</h3>
      <p><strong>Method:</strong> Add 1 tbsp ajwain (carom seeds) to boiling water. Cover head with towel and inhale steam for 10 minutes.</p>
      <p><strong>Benefits:</strong> Clears nasal congestion, relieves chest heaviness, kills bacteria.</p>
      
      <h3>5. Mulethi (Licorice) Water</h3>
      <p><strong>Method:</strong> Soak mulethi stick in water overnight. Drink in the morning or chew small pieces throughout day.</p>
      <p><strong>Benefits:</strong> Soothes sore throat, reduces inflammation, natural cough suppressant.</p>
      
      <h3>6. Black Pepper and Honey</h3>
      <p><strong>Ingredients:</strong> 1/4 tsp black pepper powder, 1 tbsp honey</p>
      <p><strong>Method:</strong> Mix and consume twice daily.</p>
      <p><strong>Benefits:</strong> Clears chest congestion, stimulates circulation, enhances immunity.</p>
      
      <h3>7. Onion Juice with Honey</h3>
      <p><strong>Method:</strong> Extract juice from half an onion, mix with equal honey. Take 1 tsp twice daily.</p>
      <p><strong>Benefits:</strong> Natural antibiotic, expectorant, reduces cough frequency.</p>
      
      <h3>8. Garlic and Ghee</h3>
      <p><strong>Method:</strong> Roast 2 garlic cloves in 1 tsp ghee. Consume when warm.</p>
      <p><strong>Benefits:</strong> Allicin in garlic fights infection, ghee lubricates throat.</p>
      
      <h3>9. Betel Leaf (Paan) with Honey</h3>
      <p><strong>Method:</strong> Crush 2-3 betel leaves, extract juice, mix with honey. Take twice daily.</p>
      <p><strong>Benefits:</strong> Excellent for chest congestion and persistent cough.</p>
      
      <h3>10. Clove and Honey</h3>
      <p><strong>Method:</strong> Keep a clove in mouth and suck slowly, or powder cloves and mix with honey.</p>
      <p><strong>Benefits:</strong> Natural anesthetic for sore throat, antibacterial properties.</p>
      
      <h3>11. Jaggery and Black Pepper</h3>
      <p><strong>Method:</strong> Melt 1 tbsp jaggery, add pinch of black pepper, consume warm.</p>
      <p><strong>Benefits:</strong> Clears lungs, provides instant relief from cough.</p>
      
      <h3>12. Cumin (Jeera) Water</h3>
      <p><strong>Method:</strong> Boil 1 tsp cumin seeds in water, strain and drink warm.</p>
      <p><strong>Benefits:</strong> Reduces throat irritation, aids digestion affected by cold.</p>
      
      <h3>13. Fenugreek (Methi) Seeds Tea</h3>
      <p><strong>Method:</strong> Boil 1 tsp fenugreek seeds in water for 10 minutes. Strain and drink with honey.</p>
      <p><strong>Benefits:</strong> Dissolves mucus, reduces fever, powerful antiviral.</p>
      
      <h3>14. Cinnamon (Dalchini) and Honey</h3>
      <p><strong>Method:</strong> Mix 1/4 tsp cinnamon powder with 1 tbsp honey. Take twice daily.</p>
      <p><strong>Benefits:</strong> Warming spice, reduces congestion, antibacterial.</p>
      
      <h3>15. Sesame Oil Massage</h3>
      <p><strong>Method:</strong> Warm sesame oil, massage on chest and back, cover with warm cloth.</p>
      <p><strong>Benefits:</strong> Relieves chest congestion, promotes circulation, induces sweating.</p>
      
      <h2>Dietary Tips During Cold and Cough</h2>
      <ul>
        <li>Avoid cold foods and drinks - stick to warm liquids</li>
        <li>Reduce dairy products as they increase mucus</li>
        <li>Eat light, easily digestible foods like khichdi</li>
        <li>Include warming spices in all meals</li>
        <li>Stay hydrated with warm water throughout the day</li>
      </ul>
      
      <h2>When to See a Doctor</h2>
      <p>Consult a healthcare provider if symptoms persist beyond 7 days, you have high fever, difficulty breathing, or blood in mucus.</p>
    `,
    contentHi: `
      <h2>सर्दी-खांसी के लिए घरेलू उपचार क्यों चुनें?</h2>
      <p>जबकि आधुनिक दवाएं लक्षणों को दबाती हैं, आयुर्वेदिक घरेलू उपचार आपके शरीर के साथ मिलकर विषाक्त पदार्थों को प्राकृतिक रूप से बाहर निकालते हैं और प्रतिरक्षा को मजबूत करते हैं।</p>
      
      <h2>शीर्ष 15 घरेलू उपचार</h2>
      
      <h3>1. अदरक-शहद-नींबू चाय</h3>
      <p><strong>सामग्री:</strong> 1 इंच ताजा अदरक, 1 बड़ा चम्मच शहद, आधा नींबू का रस, 1 कप गर्म पानी</p>
      <p><strong>विधि:</strong> अदरक को गर्म पानी में कद्दूकस करें, 5 मिनट भिगोएं, छानें, शहद और नींबू डालें। दिन में 3-4 बार पिएं।</p>
      
      <h3>2. हल्दी दूध (गोल्डन मिल्क)</h3>
      <p><strong>सामग्री:</strong> 1 कप गर्म दूध, 1/2 चम्मच हल्दी, चुटकी काली मिर्च, 1 चम्मच शहद</p>
      <p><strong>विधि:</strong> गर्म दूध में हल्दी मिलाएं, काली मिर्च डालें, शहद से मीठा करें। सोने से पहले पिएं।</p>
      
      <h3>3. तुलसी काढ़ा</h3>
      <p><strong>सामग्री:</strong> 10-15 तुलसी पत्ते, 5 काली मिर्च, 1 इंच अदरक, 1 कप पानी</p>
      <p><strong>विधि:</strong> सभी सामग्री को तब तक उबालें जब तक पानी आधा न रह जाए। छानकर शहद के साथ गर्म पिएं।</p>
      
      <h3>4. अजवाइन भाप</h3>
      <p><strong>विधि:</strong> उबलते पानी में 1 बड़ा चम्मच अजवाइन डालें। तौलिये से सिर ढकें और 10 मिनट भाप लें।</p>
      
      <h3>5. मुलेठी पानी</h3>
      <p><strong>विधि:</strong> मुलेठी को रात भर पानी में भिगोएं। सुबह पिएं या छोटे टुकड़े दिन भर चबाएं।</p>
      
      <h3>6. काली मिर्च और शहद</h3>
      <p><strong>सामग्री:</strong> 1/4 चम्मच काली मिर्च पाउडर, 1 बड़ा चम्मच शहद</p>
      <p><strong>विधि:</strong> मिलाकर दिन में दो बार सेवन करें।</p>
      
      <h3>7. प्याज का रस शहद के साथ</h3>
      <p><strong>विधि:</strong> आधे प्याज का रस निकालें, समान शहद मिलाएं। 1 चम्मच दिन में दो बार लें।</p>
      
      <h3>8. लहसुन और घी</h3>
      <p><strong>विधि:</strong> 2 लहसुन की कली 1 चम्मच घी में भूनें। गर्म होने पर खाएं।</p>
      
      <h2>सर्दी-खांसी में आहार संबंधी सुझाव</h2>
      <ul>
        <li>ठंडे खाद्य पदार्थों से बचें - गर्म तरल पदार्थ लें</li>
        <li>डेयरी उत्पाद कम करें क्योंकि वे बलगम बढ़ाते हैं</li>
        <li>खिचड़ी जैसे हल्के, आसानी से पचने वाले भोजन खाएं</li>
        <li>सभी भोजन में गर्म मसाले शामिल करें</li>
      </ul>
    `,
    author: "Dr. Ananya Sharma",
    authorHi: "डॉ. अनन्या शर्मा",
    date: "2024-02-05",
    readTime: "15 min",
    readTimeHi: "15 मिनट",
    category: "herbs",
    tags: ["cold", "cough", "home remedies", "natural cure", "kitchen remedies", "immunity"],
    tagsHi: ["सर्दी", "खांसी", "घरेलू उपचार", "प्राकृतिक इलाज", "किचन उपचार", "प्रतिरक्षा"],
    featured: true
  },
  {
    id: "digestive-problems-home-remedies",
    title: "Ayurvedic Home Remedies for Digestive Problems: Gas, Acidity & Constipation",
    titleHi: "पाचन समस्याओं के लिए आयुर्वेदिक घरेलू उपचार: गैस, एसिडिटी और कब्ज",
    excerpt: "Simple kitchen ingredients that solve common digestive issues. Learn natural remedies for gas, bloating, acidity, and constipation.",
    excerptHi: "सामान्य पाचन समस्याओं को हल करने वाली सरल रसोई सामग्री। गैस, सूजन, एसिडिटी और कब्ज के प्राकृतिक उपचार जानें।",
    content: `
      <h2>Understanding Digestion in Ayurveda</h2>
      <p>In Ayurveda, strong digestive fire (Agni) is the foundation of good health. When Agni is weak or imbalanced, it leads to ama (toxins) accumulation, causing various digestive issues.</p>
      
      <h2>Home Remedies for Gas and Bloating</h2>
      
      <h3>1. Ajwain (Carom Seeds) Water</h3>
      <p><strong>Method:</strong> Boil 1 tsp ajwain in 1 cup water for 5 minutes. Add rock salt and drink warm after meals.</p>
      <p><strong>Why it works:</strong> Ajwain contains thymol which stimulates gastric juices and provides instant relief.</p>
      
      <h3>2. Heeng (Asafoetida) Remedy</h3>
      <p><strong>Method:</strong> Mix a pinch of heeng in warm water or buttermilk. Drink after meals.</p>
      <p><strong>External use:</strong> Mix heeng with warm water, apply around navel for babies' gas problems.</p>
      
      <h3>3. Fennel (Saunf) Tea</h3>
      <p><strong>Method:</strong> Steep 1 tsp fennel seeds in hot water for 10 minutes. Drink after meals.</p>
      <p><strong>Benefit:</strong> Relaxes intestinal muscles, reduces gas formation.</p>
      
      <h3>4. Ginger Juice with Lime</h3>
      <p><strong>Method:</strong> Mix 1 tsp fresh ginger juice with lime juice and rock salt. Take before meals.</p>
      
      <h2>Home Remedies for Acidity</h2>
      
      <h3>1. Cold Milk</h3>
      <p><strong>Method:</strong> Drink 1 glass cold milk without sugar when experiencing acidity.</p>
      <p><strong>Why it works:</strong> Calcium neutralizes stomach acid, provides instant cooling effect.</p>
      
      <h3>2. Banana</h3>
      <p><strong>Method:</strong> Eat a ripe banana when experiencing heartburn.</p>
      <p><strong>Why it works:</strong> Creates protective mucus layer in stomach, neutralizes acid.</p>
      
      <h3>3. Jeera (Cumin) Water</h3>
      <p><strong>Method:</strong> Roast 1 tsp cumin seeds, powder them, mix in water. Drink after meals.</p>
      <p><strong>Benefit:</strong> Stimulates digestion, reduces acid production.</p>
      
      <h3>4. Coconut Water</h3>
      <p><strong>Method:</strong> Drink fresh coconut water on empty stomach or when acidity strikes.</p>
      <p><strong>Benefit:</strong> Alkaline nature neutralizes acid, soothes stomach lining.</p>
      
      <h3>5. Amla (Indian Gooseberry)</h3>
      <p><strong>Method:</strong> Eat 1 fresh amla daily or take amla powder with water.</p>
      <p><strong>Benefit:</strong> Rich in vitamin C, heals stomach lining, reduces acid.</p>
      
      <h2>Home Remedies for Constipation</h2>
      
      <h3>1. Triphala Churna</h3>
      <p><strong>Method:</strong> Mix 1 tsp Triphala powder in warm water. Drink before bed.</p>
      <p><strong>Why it works:</strong> The three fruits cleanse the colon, regulate bowel movements naturally.</p>
      
      <h3>2. Warm Water with Lemon</h3>
      <p><strong>Method:</strong> Drink 1 glass warm water with juice of half lemon on empty stomach.</p>
      <p><strong>Benefit:</strong> Stimulates peristalsis, flushes toxins.</p>
      
      <h3>3. Soaked Raisins (Kishmish)</h3>
      <p><strong>Method:</strong> Soak 10-15 raisins in water overnight. Eat raisins and drink water in the morning.</p>
      <p><strong>Benefit:</strong> Natural laxative, high in fiber.</p>
      
      <h3>4. Castor Oil</h3>
      <p><strong>Method:</strong> Take 1-2 tsp castor oil with warm milk before bed (not for regular use).</p>
      <p><strong>Benefit:</strong> Powerful laxative for occasional severe constipation.</p>
      
      <h3>5. Isabgol (Psyllium Husk)</h3>
      <p><strong>Method:</strong> Mix 1-2 tsp isabgol in warm milk or water. Take before bed.</p>
      <p><strong>Benefit:</strong> Adds bulk to stool, gentle and safe for regular use.</p>
      
      <h3>6. Ghee with Warm Milk</h3>
      <p><strong>Method:</strong> Add 1-2 tsp pure ghee to warm milk. Drink before bed.</p>
      <p><strong>Benefit:</strong> Lubricates intestines, promotes smooth bowel movement.</p>
      
      <h2>Daily Habits for Healthy Digestion</h2>
      <ul>
        <li>Drink warm water throughout the day</li>
        <li>Eat meals at regular times</li>
        <li>Chew food properly - at least 32 times</li>
        <li>Walk for 10-15 minutes after meals</li>
        <li>Avoid drinking water immediately after meals</li>
        <li>Include fiber-rich foods in diet</li>
      </ul>
    `,
    contentHi: `
      <h2>आयुर्वेद में पाचन को समझना</h2>
      <p>आयुर्वेद में, मजबूत पाचन अग्नि (अग्नि) अच्छे स्वास्थ्य की नींव है। जब अग्नि कमजोर या असंतुलित होती है, तो यह आम (विषाक्त पदार्थों) के संचय की ओर ले जाती है।</p>
      
      <h2>गैस और सूजन के लिए घरेलू उपचार</h2>
      
      <h3>1. अजवाइन का पानी</h3>
      <p><strong>विधि:</strong> 1 चम्मच अजवाइन को 1 कप पानी में 5 मिनट उबालें। सेंधा नमक डालें और भोजन के बाद गर्म पिएं।</p>
      
      <h3>2. हींग का उपाय</h3>
      <p><strong>विधि:</strong> एक चुटकी हींग गर्म पानी या छाछ में मिलाएं। भोजन के बाद पिएं।</p>
      
      <h3>3. सौंफ की चाय</h3>
      <p><strong>विधि:</strong> 1 चम्मच सौंफ को गर्म पानी में 10 मिनट भिगोएं। भोजन के बाद पिएं।</p>
      
      <h2>एसिडिटी के लिए घरेलू उपचार</h2>
      
      <h3>1. ठंडा दूध</h3>
      <p><strong>विधि:</strong> एसिडिटी होने पर 1 गिलास ठंडा दूध बिना चीनी के पिएं।</p>
      
      <h3>2. केला</h3>
      <p><strong>विधि:</strong> जलन होने पर पका हुआ केला खाएं।</p>
      
      <h3>3. जीरा पानी</h3>
      <p><strong>विधि:</strong> 1 चम्मच जीरा भूनें, पीसें, पानी में मिलाएं। भोजन के बाद पिएं।</p>
      
      <h2>कब्ज के लिए घरेलू उपचार</h2>
      
      <h3>1. त्रिफला चूर्ण</h3>
      <p><strong>विधि:</strong> 1 चम्मच त्रिफला पाउडर गर्म पानी में मिलाएं। सोने से पहले पिएं।</p>
      
      <h3>2. गर्म पानी और नींबू</h3>
      <p><strong>विधि:</strong> खाली पेट आधे नींबू के रस के साथ 1 गिलास गर्म पानी पिएं।</p>
      
      <h3>3. भिगोई हुई किशमिश</h3>
      <p><strong>विधि:</strong> 10-15 किशमिश रात भर पानी में भिगोएं। सुबह किशमिश खाएं और पानी पिएं।</p>
      
      <h2>स्वस्थ पाचन के लिए दैनिक आदतें</h2>
      <ul>
        <li>पूरे दिन गर्म पानी पिएं</li>
        <li>नियमित समय पर भोजन करें</li>
        <li>भोजन को ठीक से चबाएं - कम से कम 32 बार</li>
        <li>भोजन के बाद 10-15 मिनट टहलें</li>
      </ul>
    `,
    author: "Dr. Priya Mehta",
    authorHi: "डॉ. प्रिया मेहता",
    date: "2024-02-10",
    readTime: "14 min",
    readTimeHi: "14 मिनट",
    category: "herbs",
    tags: ["digestion", "gas", "acidity", "constipation", "home remedies", "stomach problems"],
    tagsHi: ["पाचन", "गैस", "एसिडिटी", "कब्ज", "घरेलू उपचार", "पेट की समस्याएं"],
    featured: true
  },
  {
    id: "skin-care-home-remedies",
    title: "Natural Ayurvedic Home Remedies for Glowing Skin: Face Packs & Treatments",
    titleHi: "चमकती त्वचा के लिए प्राकृतिक आयुर्वेदिक घरेलू उपचार: फेस पैक और उपचार",
    excerpt: "Achieve radiant skin naturally with kitchen ingredients. DIY face packs, treatments for acne, dark spots, and anti-aging remedies.",
    excerptHi: "रसोई की सामग्री से प्राकृतिक रूप से चमकदार त्वचा पाएं। DIY फेस पैक, मुंहासे, दाग-धब्बे और एंटी-एजिंग उपचार।",
    content: `
      <h2>Ayurvedic Approach to Skin Care</h2>
      <p>In Ayurveda, beautiful skin is a reflection of internal health. Healthy digestion, proper sleep, and balanced doshas create natural radiance from within.</p>
      
      <h2>DIY Face Packs for All Skin Types</h2>
      
      <h3>1. Besan (Gram Flour) Ubtan - Universal Cleanser</h3>
      <p><strong>Ingredients:</strong> 2 tbsp besan, 1 tsp turmeric, 2 tbsp raw milk, 1 tsp honey</p>
      <p><strong>Method:</strong> Mix all ingredients to form paste. Apply on face for 15 minutes, scrub gently while washing.</p>
      <p><strong>Benefits:</strong> Cleanses, exfoliates, brightens skin naturally.</p>
      
      <h3>2. Multani Mitti (Fuller's Earth) Pack - For Oily Skin</h3>
      <p><strong>Ingredients:</strong> 2 tbsp multani mitti, 1 tbsp rose water, 1 tsp neem powder</p>
      <p><strong>Method:</strong> Mix to paste, apply for 20 minutes until dry, wash with cold water.</p>
      <p><strong>Benefits:</strong> Controls oil, shrinks pores, prevents acne.</p>
      
      <h3>3. Sandalwood (Chandan) Pack - For Pigmentation</h3>
      <p><strong>Ingredients:</strong> 1 tbsp sandalwood powder, 1 tbsp milk, pinch of saffron</p>
      <p><strong>Method:</strong> Mix and apply for 20 minutes. Use 3 times weekly.</p>
      <p><strong>Benefits:</strong> Reduces dark spots, evens skin tone, cooling effect.</p>
      
      <h3>4. Papaya-Honey Mask - For Dry Skin</h3>
      <p><strong>Ingredients:</strong> 2 tbsp ripe papaya, 1 tbsp honey, 1 tsp malai (cream)</p>
      <p><strong>Method:</strong> Mash papaya, mix other ingredients, apply for 20 minutes.</p>
      <p><strong>Benefits:</strong> Deep moisturization, natural enzymes exfoliate gently.</p>
      
      <h2>Home Remedies for Common Skin Problems</h2>
      
      <h3>For Acne and Pimples</h3>
      <ul>
        <li><strong>Neem Paste:</strong> Apply fresh neem paste on pimples overnight</li>
        <li><strong>Tea Tree + Coconut Oil:</strong> Mix 2 drops tea tree oil in 1 tsp coconut oil, apply on spots</li>
        <li><strong>Aloe Vera Gel:</strong> Apply fresh aloe gel directly on acne</li>
        <li><strong>Cinnamon + Honey:</strong> Mix to paste, apply on pimples for 10 minutes</li>
      </ul>
      
      <h3>For Dark Circles</h3>
      <ul>
        <li><strong>Potato Slices:</strong> Place cold potato slices on eyes for 15 minutes</li>
        <li><strong>Almond Oil Massage:</strong> Gently massage under eyes before bed</li>
        <li><strong>Cold Tea Bags:</strong> Place used green tea bags after refrigeration</li>
        <li><strong>Rose Water + Cucumber:</strong> Mix and apply with cotton pads</li>
      </ul>
      
      <h3>For Dark Spots and Pigmentation</h3>
      <ul>
        <li><strong>Lemon + Honey:</strong> Mix equal parts, apply on spots for 10 minutes</li>
        <li><strong>Vitamin E + Castor Oil:</strong> Apply before bed on pigmented areas</li>
        <li><strong>Tomato Pulp:</strong> Apply fresh tomato pulp for 15 minutes daily</li>
        <li><strong>Saffron + Milk:</strong> Soak saffron in milk, apply for 20 minutes</li>
      </ul>
      
      <h2>Anti-Aging Home Remedies</h2>
      
      <h3>1. Aloe-Vitamin E Treatment</h3>
      <p><strong>Method:</strong> Mix fresh aloe gel with vitamin E oil. Apply before bed, leave overnight.</p>
      
      <h3>2. Coconut Oil Massage</h3>
      <p><strong>Method:</strong> Warm coconut oil massage in upward strokes for 10 minutes daily.</p>
      
      <h3>3. Banana-Avocado Mask</h3>
      <p><strong>Method:</strong> Mash half banana with quarter avocado, add 1 tsp honey. Apply 20 minutes.</p>
      
      <h2>Internal Care for Skin Health</h2>
      <ul>
        <li>Drink 8-10 glasses of water daily</li>
        <li>Include amla, papaya, and leafy greens in diet</li>
        <li>Take 1 tsp triphala powder before bed for detox</li>
        <li>Apply ghee on navel before sleep</li>
        <li>Get 7-8 hours of quality sleep</li>
      </ul>
    `,
    contentHi: `
      <h2>त्वचा देखभाल का आयुर्वेदिक दृष्टिकोण</h2>
      <p>आयुर्वेद में, सुंदर त्वचा आंतरिक स्वास्थ्य का प्रतिबिंब है। स्वस्थ पाचन, उचित नींद और संतुलित दोष भीतर से प्राकृतिक चमक पैदा करते हैं।</p>
      
      <h2>सभी त्वचा प्रकारों के लिए DIY फेस पैक</h2>
      
      <h3>1. बेसन उबटन - यूनिवर्सल क्लींजर</h3>
      <p><strong>सामग्री:</strong> 2 बड़े चम्मच बेसन, 1 चम्मच हल्दी, 2 बड़े चम्मच कच्चा दूध, 1 चम्मच शहद</p>
      <p><strong>विधि:</strong> सभी सामग्री मिलाकर पेस्ट बनाएं। 15 मिनट चेहरे पर लगाएं, धोते समय धीरे से स्क्रब करें।</p>
      
      <h3>2. मुल्तानी मिट्टी पैक - तैलीय त्वचा के लिए</h3>
      <p><strong>सामग्री:</strong> 2 बड़े चम्मच मुल्तानी मिट्टी, 1 बड़ा चम्मच गुलाब जल, 1 चम्मच नीम पाउडर</p>
      <p><strong>विधि:</strong> पेस्ट बनाएं, 20 मिनट सूखने तक लगाएं, ठंडे पानी से धोएं।</p>
      
      <h3>3. चंदन पैक - पिगमेंटेशन के लिए</h3>
      <p><strong>सामग्री:</strong> 1 बड़ा चम्मच चंदन पाउडर, 1 बड़ा चम्मच दूध, चुटकी केसर</p>
      <p><strong>विधि:</strong> मिलाकर 20 मिनट लगाएं। सप्ताह में 3 बार उपयोग करें।</p>
      
      <h2>सामान्य त्वचा समस्याओं के लिए घरेलू उपचार</h2>
      
      <h3>मुंहासे और पिंपल्स के लिए</h3>
      <ul>
        <li><strong>नीम पेस्ट:</strong> पिंपल्स पर रात भर ताजा नीम पेस्ट लगाएं</li>
        <li><strong>एलोवेरा जेल:</strong> सीधे मुंहासों पर ताजा एलो जेल लगाएं</li>
        <li><strong>दालचीनी + शहद:</strong> पेस्ट बनाएं, पिंपल्स पर 10 मिनट लगाएं</li>
      </ul>
      
      <h3>डार्क सर्कल्स के लिए</h3>
      <ul>
        <li><strong>आलू के स्लाइस:</strong> ठंडे आलू के स्लाइस 15 मिनट आंखों पर रखें</li>
        <li><strong>बादाम तेल मालिश:</strong> सोने से पहले आंखों के नीचे धीरे से मालिश करें</li>
      </ul>
      
      <h2>त्वचा स्वास्थ्य के लिए आंतरिक देखभाल</h2>
      <ul>
        <li>रोजाना 8-10 गिलास पानी पिएं</li>
        <li>आहार में आंवला, पपीता और हरी सब्जियां शामिल करें</li>
        <li>डिटॉक्स के लिए सोने से पहले 1 चम्मच त्रिफला लें</li>
        <li>सोने से पहले नाभि पर घी लगाएं</li>
      </ul>
    `,
    author: "Dr. Lakshmi Devi",
    authorHi: "डॉ. लक्ष्मी देवी",
    date: "2024-02-15",
    readTime: "16 min",
    readTimeHi: "16 मिनट",
    category: "lifestyle",
    tags: ["skin care", "face pack", "home remedies", "glowing skin", "acne treatment", "natural beauty"],
    tagsHi: ["त्वचा देखभाल", "फेस पैक", "घरेलू उपचार", "चमकती त्वचा", "मुंहासे उपचार", "प्राकृतिक सौंदर्य"],
    featured: true
  },
  {
    id: "hair-fall-home-remedies",
    title: "Stop Hair Fall Naturally: 20+ Ayurvedic Home Remedies for Hair Growth",
    titleHi: "बालों का झड़ना प्राकृतिक रूप से रोकें: बालों के विकास के लिए 20+ आयुर्वेदिक घरेलू उपचार",
    excerpt: "Combat hair fall with powerful home remedies. Learn about hair oils, masks, and dietary changes for thick, healthy hair naturally.",
    excerptHi: "शक्तिशाली घरेलू उपचारों से बालों का झड़ना रोकें। घने, स्वस्थ बालों के लिए तेल, मास्क और आहार परिवर्तन के बारे में जानें।",
    content: `
      <h2>Understanding Hair Fall in Ayurveda</h2>
      <p>In Ayurveda, hair health is connected to bone tissue (Asthi Dhatu) and is influenced by Pitta dosha. Excess heat in the body, poor nutrition, and stress are primary causes of hair fall.</p>
      
      <h2>Ayurvedic Hair Oils - The Foundation</h2>
      
      <h3>1. Coconut Oil with Curry Leaves (Best for Hair Fall)</h3>
      <p><strong>Preparation:</strong> Heat 1 cup coconut oil, add 15-20 curry leaves, let them turn crisp. Cool and store.</p>
      <p><strong>Use:</strong> Massage into scalp twice weekly, leave overnight.</p>
      <p><strong>Benefits:</strong> Curry leaves prevent premature graying, strengthen roots, contain proteins.</p>
      
      <h3>2. Amla (Indian Gooseberry) Oil</h3>
      <p><strong>Preparation:</strong> Dry amla pieces, powder them, add to coconut oil, heat on low for 30 minutes.</p>
      <p><strong>Use:</strong> Apply warm, massage for 15 minutes, leave for minimum 2 hours.</p>
      <p><strong>Benefits:</strong> Rich in Vitamin C, strengthens follicles, prevents premature graying.</p>
      
      <h3>3. Bhringraj Oil (King of Hair Herbs)</h3>
      <p><strong>Preparation:</strong> Mix bhringraj powder with sesame oil, sun-infuse for 7 days or heat gently.</p>
      <p><strong>Benefits:</strong> Promotes hair growth, reduces dandruff, calms mind.</p>
      
      <h3>4. Onion Oil</h3>
      <p><strong>Preparation:</strong> Blend onions, extract juice, mix with coconut oil. Heat briefly and store.</p>
      <p><strong>Benefits:</strong> Sulfur in onions boosts collagen production, improves blood circulation.</p>
      
      <h2>Hair Masks for Hair Growth</h2>
      
      <h3>1. Egg and Yogurt Mask</h3>
      <p><strong>Ingredients:</strong> 1 egg, 2 tbsp yogurt, 1 tbsp honey</p>
      <p><strong>Method:</strong> Mix well, apply from roots to tips. Leave 30 minutes, wash with mild shampoo.</p>
      <p><strong>Benefits:</strong> Protein-rich, strengthens hair shaft, adds shine.</p>
      
      <h3>2. Fenugreek (Methi) Hair Pack</h3>
      <p><strong>Ingredients:</strong> 2 tbsp fenugreek seeds soaked overnight, 1 tbsp coconut oil</p>
      <p><strong>Method:</strong> Grind seeds to paste, mix oil, apply on scalp. Leave 45 minutes.</p>
      <p><strong>Benefits:</strong> Contains proteins and nicotinic acid that stimulate hair growth.</p>
      
      <h3>3. Aloe Vera and Coconut Milk Mask</h3>
      <p><strong>Ingredients:</strong> 1/4 cup fresh aloe gel, 1/4 cup coconut milk</p>
      <p><strong>Method:</strong> Blend together, apply on scalp and hair. Leave 30 minutes.</p>
      <p><strong>Benefits:</strong> Deep conditioning, promotes new hair growth, reduces dandruff.</p>
      
      <h3>4. Hibiscus (Gudhal) Hair Pack</h3>
      <p><strong>Ingredients:</strong> 5-6 hibiscus flowers and leaves, 2 tbsp yogurt</p>
      <p><strong>Method:</strong> Grind flowers and leaves, mix with yogurt. Apply for 1 hour.</p>
      <p><strong>Benefits:</strong> Natural conditioner, prevents split ends, promotes thickness.</p>
      
      <h2>Quick Home Remedies</h2>
      <ul>
        <li><strong>Onion Juice:</strong> Apply fresh onion juice directly on scalp, leave 15-30 minutes before washing</li>
        <li><strong>Green Tea Rinse:</strong> Brew green tea, cool, use as final rinse after shampoo</li>
        <li><strong>Lemon Juice:</strong> Mix with coconut oil for dandruff control</li>
        <li><strong>Banana Mask:</strong> Mash ripe banana with olive oil, apply for 30 minutes</li>
        <li><strong>Henna Pack:</strong> Natural conditioner, covers gray hair naturally</li>
      </ul>
      
      <h2>Diet for Healthy Hair</h2>
      <ul>
        <li><strong>Proteins:</strong> Dal, paneer, eggs, nuts - hair is made of protein</li>
        <li><strong>Iron:</strong> Spinach, dates, jaggery - prevents hair fall</li>
        <li><strong>Biotin:</strong> Sweet potato, almonds, eggs - strengthens hair</li>
        <li><strong>Omega-3:</strong> Flaxseeds, walnuts - nourishes scalp</li>
        <li><strong>Vitamin C:</strong> Amla, citrus fruits - aids iron absorption</li>
      </ul>
      
      <h2>Lifestyle Tips</h2>
      <ul>
        <li>Oil hair at least twice weekly</li>
        <li>Avoid hot water on hair - use lukewarm</li>
        <li>Don't comb wet hair</li>
        <li>Manage stress through yoga and meditation</li>
        <li>Get adequate sleep (7-8 hours)</li>
        <li>Avoid chemical treatments and excessive heat styling</li>
      </ul>
    `,
    contentHi: `
      <h2>आयुर्वेद में बालों का झड़ना समझना</h2>
      <p>आयुर्वेद में, बालों का स्वास्थ्य अस्थि धातु से जुड़ा है और पित्त दोष से प्रभावित होता है। शरीर में अधिक गर्मी, खराब पोषण और तनाव बालों के झड़ने के प्राथमिक कारण हैं।</p>
      
      <h2>आयुर्वेदिक बालों के तेल - नींव</h2>
      
      <h3>1. करी पत्ते के साथ नारियल तेल (बालों के झड़ने के लिए सर्वश्रेष्ठ)</h3>
      <p><strong>तैयारी:</strong> 1 कप नारियल तेल गर्म करें, 15-20 करी पत्ते डालें, उन्हें कुरकुरा होने दें। ठंडा करें और स्टोर करें।</p>
      <p><strong>उपयोग:</strong> सप्ताह में दो बार स्कैल्प पर मालिश करें, रात भर छोड़ दें।</p>
      
      <h3>2. आंवला तेल</h3>
      <p><strong>तैयारी:</strong> आंवला के टुकड़े सुखाएं, पाउडर करें, नारियल तेल में डालें, 30 मिनट धीमी आंच पर गर्म करें।</p>
      
      <h3>3. भृंगराज तेल (बालों की जड़ी-बूटियों का राजा)</h3>
      <p><strong>तैयारी:</strong> भृंगराज पाउडर को तिल के तेल के साथ मिलाएं।</p>
      
      <h2>बालों के विकास के लिए हेयर मास्क</h2>
      
      <h3>1. अंडा और दही मास्क</h3>
      <p><strong>सामग्री:</strong> 1 अंडा, 2 बड़े चम्मच दही, 1 बड़ा चम्मच शहद</p>
      <p><strong>विधि:</strong> अच्छी तरह मिलाएं, जड़ों से सिरों तक लगाएं। 30 मिनट छोड़ें, हल्के शैम्पू से धोएं।</p>
      
      <h3>2. मेथी हेयर पैक</h3>
      <p><strong>सामग्री:</strong> 2 बड़े चम्मच रात भर भिगोई मेथी, 1 बड़ा चम्मच नारियल तेल</p>
      <p><strong>विधि:</strong> बीजों को पेस्ट बनाएं, तेल मिलाएं, स्कैल्प पर लगाएं। 45 मिनट छोड़ें।</p>
      
      <h3>3. गुड़हल हेयर पैक</h3>
      <p><strong>सामग्री:</strong> 5-6 गुड़हल के फूल और पत्ते, 2 बड़े चम्मच दही</p>
      <p><strong>विधि:</strong> फूल और पत्तियों को पीसें, दही के साथ मिलाएं। 1 घंटे लगाएं।</p>
      
      <h2>स्वस्थ बालों के लिए आहार</h2>
      <ul>
        <li><strong>प्रोटीन:</strong> दाल, पनीर, अंडे, नट्स</li>
        <li><strong>आयरन:</strong> पालक, खजूर, गुड़</li>
        <li><strong>बायोटिन:</strong> शकरकंद, बादाम, अंडे</li>
        <li><strong>ओमेगा-3:</strong> अलसी, अखरोट</li>
      </ul>
    `,
    author: "Dr. Meera Joshi",
    authorHi: "डॉ. मीरा जोशी",
    date: "2024-02-20",
    readTime: "18 min",
    readTimeHi: "18 मिनट",
    category: "lifestyle",
    tags: ["hair fall", "hair growth", "home remedies", "hair oil", "natural treatment", "hair care"],
    tagsHi: ["बालों का झड़ना", "बालों का विकास", "घरेलू उपचार", "बालों का तेल", "प्राकृतिक उपचार", "बाल देखभाल"],
    featured: false
  },
  {
    id: "joint-pain-arthritis-remedies",
    title: "Ayurvedic Home Remedies for Joint Pain & Arthritis: Natural Relief",
    titleHi: "जोड़ों के दर्द और गठिया के लिए आयुर्वेदिक घरेलू उपचार: प्राकृतिक राहत",
    excerpt: "Find natural relief from joint pain and arthritis with kitchen remedies. Oils, pastes, and dietary changes that reduce inflammation.",
    excerptHi: "किचन उपचारों से जोड़ों के दर्द और गठिया से प्राकृतिक राहत पाएं। सूजन कम करने वाले तेल, पेस्ट और आहार परिवर्तन।",
    content: `
      <h2>Understanding Joint Pain in Ayurveda</h2>
      <p>In Ayurveda, joint pain (Sandhivata) is primarily a Vata disorder. Imbalanced Vata causes dryness in joints, reduced synovial fluid, and eventual degeneration. Treatment focuses on pacifying Vata and reducing ama (toxins).</p>
      
      <h2>External Remedies - Oils & Massage</h2>
      
      <h3>1. Sesame Oil Massage (Abhyanga)</h3>
      <p><strong>Method:</strong> Warm sesame oil, massage affected joints in circular motions for 15-20 minutes.</p>
      <p><strong>Benefits:</strong> Sesame oil is naturally warming, penetrates deep, nourishes joints.</p>
      <p><strong>Enhancement:</strong> Add 2-3 drops of eucalyptus or camphor oil for additional pain relief.</p>
      
      <h3>2. Mahanarayan Oil Application</h3>
      <p><strong>Method:</strong> Apply warm Mahanarayan oil, massage gently, cover with warm cloth.</p>
      <p><strong>Benefits:</strong> Traditional Ayurvedic oil with 50+ herbs specifically for joint and muscle pain.</p>
      
      <h3>3. Garlic-Mustard Oil</h3>
      <p><strong>Preparation:</strong> Heat 1/2 cup mustard oil, add 10 garlic cloves, cook until garlic turns brown.</p>
      <p><strong>Use:</strong> Cool slightly, massage on painful joints twice daily.</p>
      <p><strong>Benefits:</strong> Garlic is anti-inflammatory, mustard oil provides deep heat penetration.</p>
      
      <h3>4. Castor Oil Pack</h3>
      <p><strong>Method:</strong> Soak cloth in warm castor oil, wrap around joint, cover with plastic wrap, apply heating pad.</p>
      <p><strong>Duration:</strong> 45-60 minutes, 3-4 times weekly.</p>
      <p><strong>Benefits:</strong> Ricinoleic acid in castor oil has powerful anti-inflammatory properties.</p>
      
      <h2>Paste Applications (Lepa)</h2>
      
      <h3>1. Ginger-Turmeric Paste</h3>
      <p><strong>Ingredients:</strong> 1 tbsp ginger paste, 1 tsp turmeric, warm mustard oil to bind</p>
      <p><strong>Method:</strong> Mix to form paste, apply on joints, cover with banana leaf or cloth. Leave 30 minutes.</p>
      <p><strong>Benefits:</strong> Both are powerful anti-inflammatory agents.</p>
      
      <h3>2. Fenugreek Seed Paste</h3>
      <p><strong>Method:</strong> Soak 2 tbsp fenugreek seeds overnight, grind to paste, warm slightly, apply on joints.</p>
      <p><strong>Benefits:</strong> Reduces inflammation and swelling effectively.</p>
      
      <h3>3. Ajwain (Carom) Poultice</h3>
      <p><strong>Method:</strong> Dry roast ajwain seeds, tie in cloth while warm, apply on painful areas.</p>
      <p><strong>Benefits:</strong> Provides immediate warmth and pain relief.</p>
      
      <h2>Internal Remedies</h2>
      
      <h3>1. Turmeric Milk (Golden Milk)</h3>
      <p><strong>Recipe:</strong> 1 cup warm milk, 1/2 tsp turmeric, 1/4 tsp black pepper, 1 tsp ghee</p>
      <p><strong>When:</strong> Drink before bed daily.</p>
      <p><strong>Benefits:</strong> Curcumin reduces inflammation, pepper enhances absorption, ghee lubricates joints.</p>
      
      <h3>2. Ginger Tea</h3>
      <p><strong>Method:</strong> Boil 1 inch ginger in 2 cups water for 10 minutes. Add honey and drink 2-3 times daily.</p>
      <p><strong>Benefits:</strong> Gingerol compounds reduce joint inflammation and pain.</p>
      
      <h3>3. Ashwagandha Milk</h3>
      <p><strong>Method:</strong> Mix 1/2 tsp ashwagandha powder in warm milk. Take daily.</p>
      <p><strong>Benefits:</strong> Reduces inflammation, strengthens muscles and joints.</p>
      
      <h3>4. Fenugreek Water</h3>
      <p><strong>Method:</strong> Soak 1 tsp fenugreek seeds overnight, drink water and chew seeds in morning.</p>
      <p><strong>Benefits:</strong> Anti-inflammatory, lubricates joints from within.</p>
      
      <h2>Diet for Joint Health</h2>
      <ul>
        <li><strong>Include:</strong> Ghee, warm foods, ginger, garlic, turmeric</li>
        <li><strong>Avoid:</strong> Cold foods, raw vegetables, nightshades (in some cases), excess sugar</li>
        <li><strong>Beneficial:</strong> Fish oil, walnuts, flaxseeds for omega-3</li>
        <li><strong>Stay hydrated:</strong> Warm water throughout the day</li>
      </ul>
      
      <h2>Lifestyle Recommendations</h2>
      <ul>
        <li>Daily gentle movement - don't rest joints completely</li>
        <li>Warm oil self-massage (Abhyanga) regularly</li>
        <li>Avoid exposure to cold and dampness</li>
        <li>Practice gentle yoga - avoid high-impact exercises</li>
        <li>Maintain healthy weight to reduce joint stress</li>
      </ul>
    `,
    contentHi: `
      <h2>आयुर्वेद में जोड़ों के दर्द को समझना</h2>
      <p>आयुर्वेद में, जोड़ों का दर्द (संधिवात) मुख्य रूप से वात विकार है। असंतुलित वात जोड़ों में सूखापन, कम साइनोवियल तरल पदार्थ और अंततः क्षरण का कारण बनता है।</p>
      
      <h2>बाहरी उपचार - तेल और मालिश</h2>
      
      <h3>1. तिल के तेल की मालिश (अभ्यंग)</h3>
      <p><strong>विधि:</strong> तिल का तेल गर्म करें, प्रभावित जोड़ों पर 15-20 मिनट गोलाकार गति में मालिश करें।</p>
      
      <h3>2. लहसुन-सरसों का तेल</h3>
      <p><strong>तैयारी:</strong> 1/2 कप सरसों का तेल गर्म करें, 10 लहसुन की कलियां डालें, लहसुन भूरा होने तक पकाएं।</p>
      <p><strong>उपयोग:</strong> थोड़ा ठंडा करें, दर्दनाक जोड़ों पर दिन में दो बार मालिश करें।</p>
      
      <h2>पेस्ट अनुप्रयोग (लेप)</h2>
      
      <h3>1. अदरक-हल्दी पेस्ट</h3>
      <p><strong>सामग्री:</strong> 1 बड़ा चम्मच अदरक पेस्ट, 1 चम्मच हल्दी, बांधने के लिए गर्म सरसों का तेल</p>
      <p><strong>विधि:</strong> पेस्ट बनाने के लिए मिलाएं, जोड़ों पर लगाएं, केले के पत्ते या कपड़े से ढकें। 30 मिनट छोड़ें।</p>
      
      <h3>2. मेथी बीज पेस्ट</h3>
      <p><strong>विधि:</strong> 2 बड़े चम्मच मेथी के बीज रात भर भिगोएं, पेस्ट बनाएं, हल्का गर्म करें, जोड़ों पर लगाएं।</p>
      
      <h2>आंतरिक उपचार</h2>
      
      <h3>1. हल्दी दूध (गोल्डन मिल्क)</h3>
      <p><strong>रेसिपी:</strong> 1 कप गर्म दूध, 1/2 चम्मच हल्दी, 1/4 चम्मच काली मिर्च, 1 चम्मच घी</p>
      <p><strong>कब:</strong> रोजाना सोने से पहले पिएं।</p>
      
      <h3>2. अदरक की चाय</h3>
      <p><strong>विधि:</strong> 1 इंच अदरक को 2 कप पानी में 10 मिनट उबालें। शहद डालें और दिन में 2-3 बार पिएं।</p>
      
      <h2>जोड़ों के स्वास्थ्य के लिए आहार</h2>
      <ul>
        <li><strong>शामिल करें:</strong> घी, गर्म भोजन, अदरक, लहसुन, हल्दी</li>
        <li><strong>बचें:</strong> ठंडे खाद्य पदार्थ, कच्ची सब्जियां, अतिरिक्त चीनी</li>
        <li><strong>लाभदायक:</strong> मछली का तेल, अखरोट, अलसी ओमेगा-3 के लिए</li>
      </ul>
    `,
    author: "Dr. Suresh Acharya",
    authorHi: "डॉ. सुरेश आचार्य",
    date: "2024-02-25",
    readTime: "17 min",
    readTimeHi: "17 मिनट",
    category: "diseases",
    tags: ["joint pain", "arthritis", "home remedies", "natural relief", "inflammation", "vata"],
    tagsHi: ["जोड़ों का दर्द", "गठिया", "घरेलू उपचार", "प्राकृतिक राहत", "सूजन", "वात"],
    featured: false
  },
  {
    id: "immunity-boosting-home-remedies",
    title: "Build Strong Immunity Naturally: 25 Ayurvedic Home Remedies",
    titleHi: "प्राकृतिक रूप से मजबूत प्रतिरक्षा बनाएं: 25 आयुर्वेदिक घरेलू उपचार",
    excerpt: "Strengthen your immune system with proven Ayurvedic remedies. From immunity kadha to lifestyle practices that protect against infections.",
    excerptHi: "सिद्ध आयुर्वेदिक उपचारों से अपनी प्रतिरक्षा प्रणाली को मजबूत करें। इम्युनिटी काढ़ा से लेकर संक्रमण से बचाने वाली जीवनशैली प्रथाओं तक।",
    content: `
      <h2>Immunity in Ayurveda (Vyadhikshamatva)</h2>
      <p>Ayurveda describes immunity as Vyadhikshamatva - the body's ability to resist and recover from disease. Strong Agni (digestive fire), balanced Ojas (vital essence), and healthy tissues create natural immunity.</p>
      
      <h2>The Famous Immunity Kadha (Decoction)</h2>
      
      <h3>Traditional Immunity Kadha Recipe</h3>
      <p><strong>Ingredients:</strong></p>
      <ul>
        <li>4-5 Tulsi leaves (Holy Basil)</li>
        <li>1 inch ginger, crushed</li>
        <li>5-6 black pepper</li>
        <li>1 cinnamon stick</li>
        <li>4-5 cloves</li>
        <li>1/4 tsp turmeric</li>
        <li>1 tsp jaggery or honey (add when lukewarm)</li>
      </ul>
      <p><strong>Method:</strong> Boil all spices in 2 cups water until reduced to 1 cup. Strain and drink warm.</p>
      <p><strong>When:</strong> Once daily, preferably morning. Especially during season changes.</p>
      
      <h2>Top Immunity-Boosting Remedies</h2>
      
      <h3>1. Chyawanprash</h3>
      <p><strong>Dosage:</strong> 1-2 teaspoons with warm milk, morning and evening.</p>
      <p><strong>Benefits:</strong> Contains 40+ herbs, rich in Vitamin C from amla, traditional immunity rasayana.</p>
      
      <h3>2. Giloy (Guduchi) Juice</h3>
      <p><strong>Method:</strong> Extract juice from fresh giloy stem or use powder. Take 2 tbsp with honey.</p>
      <p><strong>Benefits:</strong> Called "Amrita" (nectar) - one of the most powerful immunomodulators.</p>
      
      <h3>3. Ashwagandha</h3>
      <p><strong>Method:</strong> 1/2 tsp powder with warm milk before bed.</p>
      <p><strong>Benefits:</strong> Adaptogen that helps body resist stress, boosts white blood cells.</p>
      
      <h3>4. Amla (Indian Gooseberry)</h3>
      <p><strong>Options:</strong> Fresh amla, amla juice, amla candy, or powder.</p>
      <p><strong>Dosage:</strong> 1 fresh amla daily or 1 tsp powder with honey.</p>
      <p><strong>Benefits:</strong> Highest natural source of Vitamin C, powerful antioxidant.</p>
      
      <h3>5. Turmeric and Black Pepper</h3>
      <p><strong>Golden Paste Recipe:</strong> Mix 1/4 cup turmeric powder, 1/2 tsp black pepper, 1/4 cup coconut oil. Heat until combined.</p>
      <p><strong>Use:</strong> 1/2 tsp daily with warm water or milk.</p>
      
      <h3>6. Tulsi Tea</h3>
      <p><strong>Method:</strong> Boil 8-10 fresh tulsi leaves in water. Drink 2-3 times daily.</p>
      <p><strong>Benefits:</strong> Antimicrobial, antiviral, adaptogenic properties.</p>
      
      <h3>7. Honey and Cinnamon</h3>
      <p><strong>Method:</strong> 1 tbsp honey + 1/4 tsp cinnamon powder daily.</p>
      <p><strong>Benefits:</strong> Antimicrobial, antioxidant, supports respiratory health.</p>
      
      <h3>8. Garlic (Lasuna)</h3>
      <p><strong>Method:</strong> Chew 1-2 raw garlic cloves on empty stomach, or add liberally to cooking.</p>
      <p><strong>Benefits:</strong> Allicin is a powerful natural antibiotic and immune booster.</p>
      
      <h3>9. Triphala</h3>
      <p><strong>Method:</strong> 1 tsp Triphala powder with warm water before bed.</p>
      <p><strong>Benefits:</strong> Detoxifies, improves digestion, enhances nutrient absorption.</p>
      
      <h3>10. Mulethi (Licorice)</h3>
      <p><strong>Method:</strong> Chew small piece or make tea with mulethi powder.</p>
      <p><strong>Benefits:</strong> Antiviral, supports respiratory immunity.</p>
      
      <h2>Daily Immunity Practices</h2>
      
      <h3>Morning Routine</h3>
      <ul>
        <li>Wake up early (before 6 AM)</li>
        <li>Drink warm water with lemon</li>
        <li>Oil pulling with sesame or coconut oil (10 min)</li>
        <li>Nasya - apply sesame oil in nostrils</li>
        <li>Pranayama - 10 minutes breathing exercises</li>
      </ul>
      
      <h3>Dietary Guidelines</h3>
      <ul>
        <li>Eat warm, freshly cooked meals</li>
        <li>Include all six tastes in diet</li>
        <li>Add immune-boosting spices: turmeric, ginger, black pepper, cumin</li>
        <li>Avoid processed and cold foods</li>
        <li>Fast once weekly to strengthen Agni</li>
      </ul>
      
      <h3>Lifestyle Practices</h3>
      <ul>
        <li>Sleep by 10 PM, wake by 6 AM</li>
        <li>Daily exercise - yoga, walking</li>
        <li>Manage stress through meditation</li>
        <li>Maintain positive relationships and mental peace</li>
      </ul>
    `,
    contentHi: `
      <h2>आयुर्वेद में प्रतिरक्षा (व्याधिक्षमत्व)</h2>
      <p>आयुर्वेद प्रतिरक्षा को व्याधिक्षमत्व के रूप में वर्णित करता है - रोग का प्रतिरोध करने और ठीक होने की शरीर की क्षमता। मजबूत अग्नि, संतुलित ओजस और स्वस्थ धातु प्राकृतिक प्रतिरक्षा बनाते हैं।</p>
      
      <h2>प्रसिद्ध इम्युनिटी काढ़ा</h2>
      
      <h3>पारंपरिक इम्युनिटी काढ़ा रेसिपी</h3>
      <p><strong>सामग्री:</strong></p>
      <ul>
        <li>4-5 तुलसी पत्ते</li>
        <li>1 इंच अदरक, कुचला हुआ</li>
        <li>5-6 काली मिर्च</li>
        <li>1 दालचीनी स्टिक</li>
        <li>4-5 लौंग</li>
        <li>1/4 चम्मच हल्दी</li>
        <li>1 चम्मच गुड़ या शहद (गुनगुना होने पर डालें)</li>
      </ul>
      <p><strong>विधि:</strong> सभी मसालों को 2 कप पानी में 1 कप तक उबालें। छानें और गर्म पिएं।</p>
      
      <h2>शीर्ष प्रतिरक्षा-बढ़ाने वाले उपचार</h2>
      
      <h3>1. च्यवनप्राश</h3>
      <p><strong>खुराक:</strong> 1-2 चम्मच गर्म दूध के साथ, सुबह और शाम।</p>
      
      <h3>2. गिलोय (गुडूची) जूस</h3>
      <p><strong>विधि:</strong> ताजे गिलोय के तने से रस निकालें या पाउडर का उपयोग करें। 2 बड़े चम्मच शहद के साथ लें।</p>
      
      <h3>3. अश्वगंधा</h3>
      <p><strong>विधि:</strong> 1/2 चम्मच पाउडर सोने से पहले गर्म दूध के साथ।</p>
      
      <h3>4. आंवला</h3>
      <p><strong>विकल्प:</strong> ताजा आंवला, आंवला जूस, आंवला कैंडी, या पाउडर।</p>
      <p><strong>खुराक:</strong> 1 ताजा आंवला दैनिक या 1 चम्मच पाउडर शहद के साथ।</p>
      
      <h2>दैनिक प्रतिरक्षा अभ्यास</h2>
      
      <h3>सुबह की दिनचर्या</h3>
      <ul>
        <li>जल्दी उठें (सुबह 6 बजे से पहले)</li>
        <li>नींबू के साथ गर्म पानी पिएं</li>
        <li>तिल या नारियल तेल से ऑयल पुलिंग (10 मिनट)</li>
        <li>नस्य - नाक में तिल का तेल लगाएं</li>
        <li>प्राणायाम - 10 मिनट श्वास व्यायाम</li>
      </ul>
      
      <h3>आहार दिशानिर्देश</h3>
      <ul>
        <li>गर्म, ताजा पका हुआ भोजन खाएं</li>
        <li>आहार में छह स्वाद शामिल करें</li>
        <li>प्रतिरक्षा-बढ़ाने वाले मसाले जोड़ें: हल्दी, अदरक, काली मिर्च, जीरा</li>
        <li>प्रोसेस्ड और ठंडे खाद्य पदार्थों से बचें</li>
      </ul>
    `,
    author: "Dr. Ravi Kumar",
    authorHi: "डॉ. रवि कुमार",
    date: "2024-03-01",
    readTime: "20 min",
    readTimeHi: "20 मिनट",
    category: "herbs",
    tags: ["immunity", "home remedies", "kadha", "chyawanprash", "natural health", "prevention"],
    tagsHi: ["प्रतिरक्षा", "घरेलू उपचार", "काढ़ा", "च्यवनप्राश", "प्राकृतिक स्वास्थ्य", "रोकथाम"],
    featured: true
  },
  {
    id: "weight-loss-ayurveda",
    title: "Ayurvedic Weight Loss: Home Remedies to Burn Fat Naturally",
    titleHi: "आयुर्वेदिक वजन घटाना: प्राकृतिक रूप से वसा जलाने के घरेलू उपचार",
    excerpt: "Lose weight the Ayurvedic way without crash diets. Natural drinks, herbs, and lifestyle changes for sustainable fat loss.",
    excerptHi: "क्रैश डाइट के बिना आयुर्वेदिक तरीके से वजन कम करें। स्थायी वसा हानि के लिए प्राकृतिक पेय, जड़ी-बूटियां और जीवनशैली परिवर्तन।",
    content: `
      <h2>Ayurvedic Perspective on Weight Gain</h2>
      <p>In Ayurveda, excess weight (Sthaulya) is primarily a Kapha disorder caused by weak digestive fire (Agni), sedentary lifestyle, and improper eating habits. The goal is to kindle Agni and remove Ama (toxins).</p>
      
      <h2>Morning Drinks for Weight Loss</h2>
      
      <h3>1. Warm Lemon Honey Water</h3>
      <p><strong>Recipe:</strong> 1 glass warm water + juice of half lemon + 1 tsp honey</p>
      <p><strong>When:</strong> First thing in the morning on empty stomach</p>
      <p><strong>Benefits:</strong> Boosts metabolism, alkalizes body, aids digestion</p>
      
      <h3>2. Triphala Water</h3>
      <p><strong>Recipe:</strong> Soak 1 tsp Triphala powder in water overnight, drink in morning</p>
      <p><strong>Benefits:</strong> Powerful detox, improves digestion, reduces bloating</p>
      
      <h3>3. Methi (Fenugreek) Water</h3>
      <p><strong>Recipe:</strong> Soak 1 tsp fenugreek seeds overnight, drink water and chew seeds</p>
      <p><strong>Benefits:</strong> Controls blood sugar, reduces appetite, burns belly fat</p>
      
      <h3>4. Jeera (Cumin) Water</h3>
      <p><strong>Recipe:</strong> Boil 1 tsp cumin in water, cool and drink</p>
      <p><strong>Benefits:</strong> Boosts metabolism, reduces bloating, improves digestion</p>
      
      <h3>5. Ajwain (Carom) Water</h3>
      <p><strong>Recipe:</strong> Soak 1 tsp ajwain overnight, boil in morning, strain and drink</p>
      <p><strong>Benefits:</strong> Increases metabolic rate, reduces water retention</p>
      
      <h2>Fat-Burning Home Remedies</h2>
      
      <h3>1. Apple Cider Vinegar Drink</h3>
      <p><strong>Recipe:</strong> 1 tbsp ACV + 1 glass warm water + 1 tsp honey</p>
      <p><strong>When:</strong> Before meals</p>
      <p><strong>Benefits:</strong> Reduces appetite, improves fat burning</p>
      
      <h3>2. Ginger-Lemon Tea</h3>
      <p><strong>Recipe:</strong> Boil 1 inch ginger in water, add lemon juice and honey</p>
      <p><strong>When:</strong> 2-3 times daily</p>
      <p><strong>Benefits:</strong> Thermogenic, boosts metabolism naturally</p>
      
      <h3>3. Curry Leaves Water</h3>
      <p><strong>Recipe:</strong> Boil 15-20 curry leaves in water, drink on empty stomach</p>
      <p><strong>Benefits:</strong> Reduces cholesterol, burns abdominal fat</p>
      
      <h3>4. Black Pepper + Honey</h3>
      <p><strong>Recipe:</strong> 1/4 tsp black pepper powder + 1 tbsp honey + warm water</p>
      <p><strong>When:</strong> Morning empty stomach</p>
      <p><strong>Benefits:</strong> Piperine increases thermogenesis</p>
      
      <h2>Herbs for Weight Loss</h2>
      <ul>
        <li><strong>Guggul:</strong> Traditional fat-burning herb, take as supplement</li>
        <li><strong>Triphala:</strong> Detoxifies, improves metabolism</li>
        <li><strong>Garcinia Cambogia:</strong> Suppresses appetite naturally</li>
        <li><strong>Green Tea:</strong> EGCG boosts fat oxidation</li>
        <li><strong>Ashwagandha:</strong> Reduces stress-related weight gain</li>
      </ul>
      
      <h2>Dietary Guidelines</h2>
      
      <h3>Foods to Include</h3>
      <ul>
        <li>Light grains: barley, millet, quinoa</li>
        <li>Bitter vegetables: bitter gourd, fenugreek leaves</li>
        <li>Warming spices: ginger, black pepper, cinnamon</li>
        <li>Lean proteins: moong dal, sprouts</li>
        <li>Hot water throughout the day</li>
      </ul>
      
      <h3>Foods to Avoid</h3>
      <ul>
        <li>Heavy, cold, oily foods</li>
        <li>Sweet, sour, salty excess</li>
        <li>Dairy products (except buttermilk)</li>
        <li>Refined carbs and sugar</li>
        <li>Late-night eating</li>
      </ul>
      
      <h2>Lifestyle Changes</h2>
      <ul>
        <li>Eat largest meal at lunch (strongest Agni)</li>
        <li>Light dinner before 7 PM</li>
        <li>Fast once weekly</li>
        <li>Exercise daily - brisk walking, yoga</li>
        <li>Dry massage (Garshana) with silk gloves</li>
        <li>Adequate sleep (7-8 hours)</li>
      </ul>
    `,
    contentHi: `
      <h2>वजन बढ़ने पर आयुर्वेदिक दृष्टिकोण</h2>
      <p>आयुर्वेद में, अतिरिक्त वजन (स्थौल्य) मुख्य रूप से कफ विकार है जो कमजोर पाचन अग्नि, गतिहीन जीवनशैली और अनुचित खान-पान की आदतों के कारण होता है।</p>
      
      <h2>वजन घटाने के लिए सुबह के पेय</h2>
      
      <h3>1. गर्म नींबू शहद पानी</h3>
      <p><strong>रेसिपी:</strong> 1 गिलास गर्म पानी + आधे नींबू का रस + 1 चम्मच शहद</p>
      <p><strong>कब:</strong> सुबह खाली पेट सबसे पहले</p>
      
      <h3>2. त्रिफला पानी</h3>
      <p><strong>रेसिपी:</strong> 1 चम्मच त्रिफला पाउडर रात भर पानी में भिगोएं, सुबह पिएं</p>
      
      <h3>3. मेथी पानी</h3>
      <p><strong>रेसिपी:</strong> 1 चम्मच मेथी के बीज रात भर भिगोएं, पानी पिएं और बीज चबाएं</p>
      
      <h3>4. जीरा पानी</h3>
      <p><strong>रेसिपी:</strong> 1 चम्मच जीरा पानी में उबालें, ठंडा करें और पिएं</p>
      
      <h2>वसा जलाने वाले घरेलू उपचार</h2>
      
      <h3>1. सेब का सिरका पेय</h3>
      <p><strong>रेसिपी:</strong> 1 बड़ा चम्मच ACV + 1 गिलास गर्म पानी + 1 चम्मच शहद</p>
      <p><strong>कब:</strong> भोजन से पहले</p>
      
      <h3>2. अदरक-नींबू चाय</h3>
      <p><strong>रेसिपी:</strong> 1 इंच अदरक पानी में उबालें, नींबू का रस और शहद डालें</p>
      <p><strong>कब:</strong> दिन में 2-3 बार</p>
      
      <h2>आहार दिशानिर्देश</h2>
      
      <h3>शामिल करने वाले खाद्य पदार्थ</h3>
      <ul>
        <li>हल्के अनाज: जौ, बाजरा, क्विनोआ</li>
        <li>कड़वी सब्जियां: करेला, मेथी के पत्ते</li>
        <li>गर्म मसाले: अदरक, काली मिर्च, दालचीनी</li>
        <li>पूरे दिन गर्म पानी</li>
      </ul>
      
      <h3>बचने वाले खाद्य पदार्थ</h3>
      <ul>
        <li>भारी, ठंडे, तैलीय खाद्य पदार्थ</li>
        <li>मीठा, खट्टा, नमकीन अधिक</li>
        <li>रिफाइंड कार्ब्स और चीनी</li>
        <li>रात को देर से खाना</li>
      </ul>
    `,
    author: "Dr. Vikram Patel",
    authorHi: "डॉ. विक्रम पटेल",
    date: "2024-03-05",
    readTime: "16 min",
    readTimeHi: "16 मिनट",
    category: "lifestyle",
    tags: ["weight loss", "fat burning", "home remedies", "metabolism", "natural diet", "kapha"],
    tagsHi: ["वजन घटाना", "वसा जलाना", "घरेलू उपचार", "चयापचय", "प्राकृतिक आहार", "कफ"],
    featured: false
  }
];
