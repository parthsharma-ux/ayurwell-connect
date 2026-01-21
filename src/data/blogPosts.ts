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
  }
];
