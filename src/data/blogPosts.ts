// Blog posts data with SEO-optimized content for Google AdSense
export interface BlogPost {
  id: string;
  title: string;
  titleHi: string;
  excerpt: string;
  excerptHi: string;
  content: string;
  contentHi: string;
  category: string;
  author: string;
  authorHi: string;
  date: string;
  readTime: string;
  readTimeHi: string;
  image: string;
  tags: string[];
  tagsHi: string[];
  featured: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: "ayurveda-basics-beginners-guide",
    title: "Ayurveda Basics: A Complete Beginner's Guide to Ancient Healing",
    titleHi: "आयुर्वेद की मूल बातें: प्राचीन चिकित्सा के लिए शुरुआती गाइड",
    excerpt: "Discover the fundamental principles of Ayurveda, including doshas, prakriti, and how this 5,000-year-old science can transform your health naturally.",
    excerptHi: "आयुर्वेद के मौलिक सिद्धांतों की खोज करें, जिसमें दोष, प्रकृति और यह 5,000 साल पुराना विज्ञान आपके स्वास्थ्य को प्राकृतिक रूप से कैसे बदल सकता है।",
    content: `
      <h2>What is Ayurveda?</h2>
      <p>Ayurveda, meaning "Science of Life" in Sanskrit, is one of the world's oldest holistic healing systems. Developed more than 5,000 years ago in India, it's based on the belief that health and wellness depend on a delicate balance between the mind, body, and spirit. The primary goal of Ayurveda is to promote good health, rather than fight disease.</p>
      
      <p>Unlike modern medicine which often treats symptoms, Ayurveda focuses on finding and treating the root cause of illness. This ancient wisdom considers each person unique and provides personalized health recommendations based on one's constitution.</p>

      <h2>The Five Elements (Pancha Mahabhutas)</h2>
      <p>Ayurveda believes that everything in the universe, including the human body, is composed of five basic elements:</p>
      <ul>
        <li><strong>Akasha (Space/Ether):</strong> Provides room for other elements to exist</li>
        <li><strong>Vayu (Air):</strong> Represents movement and change</li>
        <li><strong>Agni (Fire):</strong> Represents transformation and metabolism</li>
        <li><strong>Jala (Water):</strong> Represents cohesion and fluidity</li>
        <li><strong>Prithvi (Earth):</strong> Represents structure and stability</li>
      </ul>

      <h2>The Three Doshas: Your Body's Operating System</h2>
      <p>According to Ayurveda, these five elements combine to form three life forces or energies called doshas. Understanding your dominant dosha is the first step to personalized wellness:</p>
      
      <h3>Vata Dosha (Space + Air)</h3>
      <p>Vata controls all movement in the body, including breathing, blood circulation, and the nervous system. People with dominant Vata tend to be creative, energetic, and quick-thinking. When imbalanced, they may experience anxiety, dry skin, constipation, and insomnia.</p>
      <p><strong>Balancing Tips:</strong> Maintain regular routines, stay warm, eat warm and nourishing foods, practice calming activities like meditation.</p>

      <h3>Pitta Dosha (Fire + Water)</h3>
      <p>Pitta governs digestion, metabolism, and intelligence. Pitta-dominant individuals are often ambitious, focused, and have strong digestion. Imbalanced Pitta can lead to inflammation, heartburn, skin rashes, and irritability.</p>
      <p><strong>Balancing Tips:</strong> Stay cool, avoid spicy foods, practice moderation, engage in calming exercises, spend time in nature.</p>

      <h3>Kapha Dosha (Water + Earth)</h3>
      <p>Kapha provides structure, stability, and lubrication to the body. Those with Kapha dominance are typically calm, loyal, and have excellent stamina. When out of balance, they may experience weight gain, lethargy, congestion, and depression.</p>
      <p><strong>Balancing Tips:</strong> Stay active, wake up early, eat light and warming foods, embrace change and new experiences.</p>

      <h2>Finding Your Prakriti (Constitution)</h2>
      <p>Your unique combination of doshas determined at conception is called your Prakriti. This doesn't change throughout your life and represents your natural state of balance. Understanding your Prakriti helps you:</p>
      <ul>
        <li>Choose the right foods for your body type</li>
        <li>Select appropriate exercise routines</li>
        <li>Understand your emotional patterns</li>
        <li>Prevent diseases you're predisposed to</li>
        <li>Make lifestyle choices that promote longevity</li>
      </ul>

      <h2>The Concept of Agni (Digestive Fire)</h2>
      <p>In Ayurveda, Agni or digestive fire is considered the cornerstone of health. Strong Agni ensures proper digestion, absorption, and assimilation of food. It also helps eliminate toxins (Ama) from the body. Signs of healthy Agni include:</p>
      <ul>
        <li>Regular hunger at mealtimes</li>
        <li>Clear tongue without coating</li>
        <li>Regular bowel movements</li>
        <li>Good energy levels</li>
        <li>Mental clarity</li>
      </ul>

      <h2>Understanding Ama (Toxins)</h2>
      <p>Ama is the toxic byproduct of improper digestion. It accumulates in the body and is considered the root cause of many diseases. Signs of Ama include:</p>
      <ul>
        <li>Thick white coating on tongue</li>
        <li>Fatigue and heaviness</li>
        <li>Brain fog</li>
        <li>Body aches</li>
        <li>Bad breath</li>
      </ul>

      <h2>Daily Routines (Dinacharya)</h2>
      <p>Ayurveda emphasizes daily routines aligned with nature's rhythms. Key practices include:</p>
      <ul>
        <li><strong>Wake up before sunrise</strong> (ideally during Brahma Muhurta)</li>
        <li><strong>Tongue scraping</strong> to remove Ama</li>
        <li><strong>Oil pulling</strong> for oral health</li>
        <li><strong>Abhyanga</strong> (self-massage with oil)</li>
        <li><strong>Eating meals at regular times</strong></li>
        <li><strong>Sleeping by 10 PM</strong> for optimal rest</li>
      </ul>

      <h2>Getting Started with Ayurveda</h2>
      <p>Beginning your Ayurvedic journey doesn't require drastic changes. Start with these simple steps:</p>
      <ol>
        <li>Take a dosha quiz to understand your constitution</li>
        <li>Establish a regular sleep and meal schedule</li>
        <li>Drink warm water throughout the day</li>
        <li>Practice mindful eating</li>
        <li>Include all six tastes in your meals</li>
        <li>Spend time in nature</li>
      </ol>

      <h2>Conclusion</h2>
      <p>Ayurveda offers a time-tested path to holistic health that addresses the unique needs of each individual. By understanding your dosha, maintaining strong Agni, and following daily routines, you can achieve optimal health and prevent disease naturally. Remember, Ayurveda is not about quick fixes but sustainable lifestyle changes that bring lasting wellness.</p>
    `,
    contentHi: `
      <h2>आयुर्वेद क्या है?</h2>
      <p>आयुर्वेद, संस्कृत में "जीवन का विज्ञान" का अर्थ, दुनिया की सबसे पुरानी समग्र चिकित्सा प्रणालियों में से एक है। भारत में 5,000 वर्षों से भी पहले विकसित, यह इस विश्वास पर आधारित है कि स्वास्थ्य और कल्याण मन, शरीर और आत्मा के बीच नाजुक संतुलन पर निर्भर करता है।</p>
      
      <h2>तीन दोष: आपके शरीर का ऑपरेटिंग सिस्टम</h2>
      <p>आयुर्वेद के अनुसार, पांच तत्व मिलकर तीन जीवन शक्तियां या ऊर्जाएं बनाते हैं जिन्हें दोष कहा जाता है:</p>
      
      <h3>वात दोष (आकाश + वायु)</h3>
      <p>वात शरीर में सभी गति को नियंत्रित करता है, जिसमें श्वास, रक्त परिसंचरण और तंत्रिका तंत्र शामिल हैं।</p>

      <h3>पित्त दोष (अग्नि + जल)</h3>
      <p>पित्त पाचन, चयापचय और बुद्धि को नियंत्रित करता है।</p>

      <h3>कफ दोष (जल + पृथ्वी)</h3>
      <p>कफ शरीर को संरचना, स्थिरता और स्नेहन प्रदान करता है।</p>

      <h2>अपनी प्रकृति खोजना</h2>
      <p>गर्भाधान के समय निर्धारित आपके दोषों का अद्वितीय संयोजन आपकी प्रकृति कहलाता है। यह आपके जीवन भर नहीं बदलता।</p>

      <h2>निष्कर्ष</h2>
      <p>आयुर्वेद समग्र स्वास्थ्य के लिए एक समय-परीक्षित मार्ग प्रदान करता है जो प्रत्येक व्यक्ति की अद्वितीय आवश्यकताओं को संबोधित करता है।</p>
    `,
    category: "fundamentals",
    author: "Dr. Ayush Sharma",
    authorHi: "डॉ. आयुष शर्मा",
    date: "2024-01-15",
    readTime: "8 min",
    readTimeHi: "8 मिनट",
    image: "/placeholder.svg",
    tags: ["ayurveda", "doshas", "beginners", "holistic-health"],
    tagsHi: ["आयुर्वेद", "दोष", "शुरुआती", "समग्र-स्वास्थ्य"],
    featured: true
  },
  {
    id: "ashwagandha-benefits-uses",
    title: "Ashwagandha: Benefits, Uses, Dosage & Side Effects - Complete Guide",
    titleHi: "अश्वगंधा: लाभ, उपयोग, खुराक और दुष्प्रभाव - संपूर्ण गाइड",
    excerpt: "Learn everything about Ashwagandha, the powerful adaptogenic herb that helps manage stress, boost energy, and improve overall health.",
    excerptHi: "अश्वगंधा के बारे में सब कुछ जानें, शक्तिशाली एडाप्टोजेनिक जड़ी-बूटी जो तनाव प्रबंधन, ऊर्जा बढ़ाने और समग्र स्वास्थ्य में सुधार करने में मदद करती है।",
    content: `
      <h2>What is Ashwagandha?</h2>
      <p>Ashwagandha (Withania somnifera), also known as Indian Ginseng or Winter Cherry, is one of the most powerful herbs in Ayurvedic healing. It has been used for over 3,000 years to relieve stress, increase energy levels, and improve concentration. The name "Ashwagandha" is Sanskrit for "smell of the horse," referring to both its unique smell and ability to increase strength.</p>

      <h2>Key Benefits of Ashwagandha</h2>
      
      <h3>1. Reduces Stress and Anxiety</h3>
      <p>Ashwagandha is classified as an adaptogen, meaning it helps the body manage stress. Multiple studies have shown it can significantly reduce cortisol levels, the body's stress hormone. In clinical trials, participants taking Ashwagandha showed a 30% reduction in cortisol levels compared to the placebo group.</p>

      <h3>2. Boosts Energy and Stamina</h3>
      <p>This powerful herb enhances physical performance and increases energy levels without the jittery effects of caffeine. Athletes and fitness enthusiasts often use it to improve endurance and recovery time.</p>

      <h3>3. Improves Sleep Quality</h3>
      <p>The "somnifera" in its botanical name means "sleep-inducing." Ashwagandha helps promote restful sleep by calming the nervous system. It's particularly effective for those with stress-related insomnia.</p>

      <h3>4. Enhances Brain Function</h3>
      <p>Research shows Ashwagandha supports memory, cognitive function, and concentration. It may also help protect nerve cells from damage and support overall brain health.</p>

      <h3>5. Supports Thyroid Function</h3>
      <p>Ashwagandha has shown promise in supporting healthy thyroid function, particularly in cases of hypothyroidism. It may help normalize thyroid hormone levels.</p>

      <h3>6. Boosts Immunity</h3>
      <p>The herb strengthens the immune system by increasing the activity of natural killer cells and other immune cells that fight off infections and disease.</p>

      <h3>7. Supports Male Fertility</h3>
      <p>Studies have shown that Ashwagandha can improve sperm quality, increase testosterone levels, and enhance reproductive health in men.</p>

      <h2>Recommended Dosage</h2>
      <p>The typical dosage of Ashwagandha depends on the form:</p>
      <ul>
        <li><strong>Root Powder:</strong> 1-2 teaspoons (3-6 grams) daily</li>
        <li><strong>Capsules/Tablets:</strong> 300-500 mg twice daily</li>
        <li><strong>KSM-66 Extract:</strong> 300-600 mg daily</li>
        <li><strong>Churna:</strong> 3-6 grams with warm milk before bed</li>
      </ul>
      <p>It's best to start with a lower dose and gradually increase. Consult an Ayurvedic practitioner for personalized guidance.</p>

      <h2>Best Time to Take Ashwagandha</h2>
      <ul>
        <li><strong>For stress and anxiety:</strong> Morning or afternoon</li>
        <li><strong>For better sleep:</strong> 30-60 minutes before bedtime with warm milk</li>
        <li><strong>For energy:</strong> Morning with breakfast</li>
      </ul>

      <h2>Possible Side Effects</h2>
      <p>While generally safe, some people may experience:</p>
      <ul>
        <li>Digestive upset in high doses</li>
        <li>Drowsiness (especially initially)</li>
        <li>Headache in rare cases</li>
      </ul>

      <h2>Who Should Avoid Ashwagandha?</h2>
      <ul>
        <li>Pregnant or breastfeeding women</li>
        <li>People with autoimmune conditions (unless supervised)</li>
        <li>Those taking thyroid medications</li>
        <li>People scheduled for surgery (stop 2 weeks before)</li>
      </ul>

      <h2>How to Take Ashwagandha</h2>
      <p>Traditional methods include:</p>
      <ul>
        <li><strong>With warm milk:</strong> Mix powder with warm milk and honey before bed</li>
        <li><strong>With ghee:</strong> Enhances absorption and effectiveness</li>
        <li><strong>As a decoction:</strong> Boil in water for medicinal purposes</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Ashwagandha is a versatile and powerful herb that offers numerous health benefits. When used correctly, it can significantly improve stress resilience, energy levels, and overall wellbeing. Always source high-quality Ashwagandha and consult with a healthcare provider before starting supplementation.</p>
    `,
    contentHi: `
      <h2>अश्वगंधा क्या है?</h2>
      <p>अश्वगंधा (विथानिया सोम्निफेरा), जिसे भारतीय जिनसेंग या विंटर चेरी भी कहा जाता है, आयुर्वेदिक चिकित्सा में सबसे शक्तिशाली जड़ी-बूटियों में से एक है। इसका उपयोग 3,000 से अधिक वर्षों से तनाव दूर करने, ऊर्जा बढ़ाने और एकाग्रता में सुधार के लिए किया जाता रहा है।</p>

      <h2>अश्वगंधा के मुख्य लाभ</h2>
      
      <h3>1. तनाव और चिंता कम करता है</h3>
      <p>अश्वगंधा को एडाप्टोजेन के रूप में वर्गीकृत किया गया है, जिसका अर्थ है कि यह शरीर को तनाव प्रबंधित करने में मदद करता है।</p>

      <h3>2. ऊर्जा और सहनशक्ति बढ़ाता है</h3>
      <p>यह शक्तिशाली जड़ी-बूटी शारीरिक प्रदर्शन को बढ़ाती है और कैफीन के घबराहट वाले प्रभावों के बिना ऊर्जा स्तर बढ़ाती है।</p>

      <h3>3. नींद की गुणवत्ता में सुधार</h3>
      <p>अश्वगंधा तंत्रिका तंत्र को शांत करके आरामदायक नींद को बढ़ावा देने में मदद करता है।</p>

      <h2>अनुशंसित खुराक</h2>
      <ul>
        <li><strong>जड़ का पाउडर:</strong> 1-2 चम्मच (3-6 ग्राम) दैनिक</li>
        <li><strong>कैप्सूल/गोलियां:</strong> 300-500 मिलीग्राम दिन में दो बार</li>
      </ul>

      <h2>निष्कर्ष</h2>
      <p>अश्वगंधा एक बहुमुखी और शक्तिशाली जड़ी-बूटी है जो कई स्वास्थ्य लाभ प्रदान करती है।</p>
    `,
    category: "herbs",
    author: "Vaidya Priya Patel",
    authorHi: "वैद्य प्रिया पटेल",
    date: "2024-01-10",
    readTime: "10 min",
    readTimeHi: "10 मिनट",
    image: "/placeholder.svg",
    tags: ["ashwagandha", "adaptogens", "stress-relief", "herbs"],
    tagsHi: ["अश्वगंधा", "एडाप्टोजेन", "तनाव-राहत", "जड़ी-बूटी"],
    featured: true
  },
  {
    id: "home-remedies-common-cold",
    title: "15 Effective Ayurvedic Home Remedies for Common Cold and Cough",
    titleHi: "सर्दी और खांसी के लिए 15 प्रभावी आयुर्वेदिक घरेलू उपचार",
    excerpt: "Natural and time-tested Ayurvedic remedies to treat cold, cough, and flu symptoms using ingredients from your kitchen.",
    excerptHi: "सर्दी, खांसी और फ्लू के लक्षणों का इलाज करने के लिए प्राकृतिक और समय-परीक्षित आयुर्वेदिक उपचार जो आपकी रसोई की सामग्री का उपयोग करते हैं।",
    content: `
      <h2>Understanding Cold and Cough in Ayurveda</h2>
      <p>In Ayurveda, common cold (Pratishyaya) is primarily caused by an imbalance of Kapha and Vata doshas. The accumulation of toxins (Ama) combined with weakened digestive fire (Agni) makes the body susceptible to respiratory infections. Here are 15 time-tested remedies to help you recover naturally.</p>

      <h2>1. Tulsi (Holy Basil) Tea</h2>
      <p>Tulsi is the queen of herbs for respiratory health. Boil 8-10 fresh tulsi leaves in 2 cups of water for 10 minutes. Add honey and drink 2-3 times daily. Tulsi has powerful antimicrobial and anti-inflammatory properties.</p>

      <h2>2. Ginger and Honey</h2>
      <p>Grate fresh ginger and extract its juice. Mix 1 teaspoon of ginger juice with 1 teaspoon of raw honey. Take this 3-4 times a day. This combination soothes the throat and reduces cough.</p>

      <h2>3. Turmeric Milk (Golden Milk)</h2>
      <p>Add 1/2 teaspoon of turmeric powder to a glass of warm milk. Add a pinch of black pepper (enhances absorption) and honey to taste. Drink before bed for its anti-inflammatory and immune-boosting benefits.</p>

      <h2>4. Steam Inhalation with Eucalyptus</h2>
      <p>Boil water and add a few drops of eucalyptus oil or a handful of ajwain seeds. Cover your head with a towel and inhale the steam for 10 minutes. This opens nasal passages and provides relief from congestion.</p>

      <h2>5. Black Pepper and Honey</h2>
      <p>Mix 1/4 teaspoon of freshly ground black pepper with 1 tablespoon of honey. Take this mixture 2-3 times a day. Black pepper is excellent for breaking up chest congestion.</p>

      <h2>6. Mulethi (Licorice) Decoction</h2>
      <p>Boil 1 teaspoon of mulethi powder in 2 cups of water until reduced to half. Strain and drink warm. Mulethi soothes the throat and has expectorant properties.</p>

      <h2>7. Kadha (Ayurvedic Immunity Drink)</h2>
      <p>Boil tulsi leaves, ginger, black pepper, cloves, and cinnamon in water for 15 minutes. Strain, add honey, and drink 2 times daily. This traditional recipe boosts immunity and fights infection.</p>

      <h2>8. Garlic Remedy</h2>
      <p>Crush 2-3 garlic cloves and let them sit for 10 minutes to activate allicin. Swallow with warm water or add to soup. Garlic is a natural antibiotic and immune booster.</p>

      <h2>9. Saltwater Gargle</h2>
      <p>Dissolve 1/2 teaspoon of salt in a glass of warm water. Gargle for 30 seconds, 3-4 times daily. This reduces throat inflammation and kills bacteria.</p>

      <h2>10. Cinnamon and Honey</h2>
      <p>Mix 1/4 teaspoon of cinnamon powder with 1 tablespoon of honey. Take twice daily. Cinnamon has warming properties that help clear congestion.</p>

      <h2>11. Trikatu Churna</h2>
      <p>This powerful Ayurvedic formula contains black pepper, long pepper, and ginger. Take 1/4 teaspoon with honey twice daily to boost respiratory health and digestion.</p>

      <h2>12. Sitopaladi Churna</h2>
      <p>A classical Ayurvedic formulation for cough and cold. Take 1/2 teaspoon with honey 2-3 times a day. It's especially effective for productive cough.</p>

      <h2>13. Onion and Honey</h2>
      <p>Extract juice from half an onion and mix with equal amount of honey. Take 1 teaspoon every few hours. This is particularly effective for cough relief.</p>

      <h2>14. Ajwain (Carom Seeds) Steam</h2>
      <p>Dry roast 1 tablespoon of ajwain and wrap in a cloth. Inhale the aroma when congested. You can also make ajwain tea by boiling in water.</p>

      <h2>15. Jaggery, Ghee, and Black Pepper</h2>
      <p>Mix 1 teaspoon of jaggery with 1/4 teaspoon of black pepper and 1/2 teaspoon of ghee. Take before bed to soothe night cough.</p>

      <h2>Prevention Tips</h2>
      <ul>
        <li>Stay hydrated with warm fluids</li>
        <li>Avoid cold foods and drinks</li>
        <li>Get adequate rest</li>
        <li>Keep your environment clean and well-ventilated</li>
        <li>Practice good hand hygiene</li>
      </ul>

      <h2>When to See a Doctor</h2>
      <p>Consult a healthcare provider if you experience high fever lasting more than 3 days, difficulty breathing, chest pain, or symptoms that worsen despite home treatment.</p>
    `,
    contentHi: `
      <h2>आयुर्वेद में सर्दी और खांसी को समझना</h2>
      <p>आयुर्वेद में, सामान्य सर्दी (प्रतिश्याय) मुख्य रूप से कफ और वात दोषों के असंतुलन के कारण होती है।</p>

      <h2>1. तुलसी की चाय</h2>
      <p>तुलसी श्वसन स्वास्थ्य के लिए जड़ी-बूटियों की रानी है। 8-10 ताजी तुलसी की पत्तियों को 2 कप पानी में 10 मिनट तक उबालें। शहद मिलाएं और दिन में 2-3 बार पिएं।</p>

      <h2>2. अदरक और शहद</h2>
      <p>ताजा अदरक कद्दूकस करें और उसका रस निकालें। 1 चम्मच अदरक के रस में 1 चम्मच कच्चा शहद मिलाएं।</p>

      <h2>3. हल्दी दूध (गोल्डन मिल्क)</h2>
      <p>एक गिलास गर्म दूध में 1/2 चम्मच हल्दी पाउडर मिलाएं। एक चुटकी काली मिर्च और शहद मिलाएं।</p>

      <h2>रोकथाम के सुझाव</h2>
      <ul>
        <li>गर्म तरल पदार्थों से हाइड्रेटेड रहें</li>
        <li>ठंडे खाद्य पदार्थों और पेय से बचें</li>
        <li>पर्याप्त आराम करें</li>
      </ul>
    `,
    category: "remedies",
    author: "Dr. Meera Joshi",
    authorHi: "डॉ. मीरा जोशी",
    date: "2024-01-08",
    readTime: "12 min",
    readTimeHi: "12 मिनट",
    image: "/placeholder.svg",
    tags: ["cold", "cough", "home-remedies", "immunity"],
    tagsHi: ["सर्दी", "खांसी", "घरेलू-उपचार", "प्रतिरक्षा"],
    featured: false
  },
  {
    id: "yoga-ayurveda-connection",
    title: "The Connection Between Yoga and Ayurveda for Holistic Wellness",
    titleHi: "समग्र स्वास्थ्य के लिए योग और आयुर्वेद के बीच संबंध",
    excerpt: "Explore how Yoga and Ayurveda work together as sister sciences to create complete mind-body-spirit harmony.",
    excerptHi: "जानें कि कैसे योग और आयुर्वेद बहन विज्ञान के रूप में मिलकर संपूर्ण मन-शरीर-आत्मा सामंजस्य बनाते हैं।",
    content: `
      <h2>Sister Sciences: Yoga and Ayurveda</h2>
      <p>Yoga and Ayurveda are often called "sister sciences" because they share the same Vedic roots and complement each other perfectly. While Yoga focuses on the spiritual evolution of the individual through physical postures, breathing techniques, and meditation, Ayurveda addresses the physical and mental health through diet, lifestyle, and herbal remedies.</p>

      <h2>How They Work Together</h2>
      <p>Ayurveda provides the foundation for optimal health that allows deeper Yoga practice, while Yoga provides the spiritual path that Ayurveda acknowledges as essential for complete wellbeing. Together, they offer a complete system for self-care and spiritual growth.</p>

      <h2>Yoga for Your Dosha</h2>
      
      <h3>Yoga for Vata Types</h3>
      <p>Vata individuals benefit from grounding, calming practices:</p>
      <ul>
        <li>Slow, gentle asanas</li>
        <li>Long holds in poses</li>
        <li>Forward bends and hip openers</li>
        <li>Pranayama: Nadi Shodhana (alternate nostril breathing)</li>
        <li>Meditation and Yoga Nidra</li>
      </ul>

      <h3>Yoga for Pitta Types</h3>
      <p>Pitta types need cooling, non-competitive practices:</p>
      <ul>
        <li>Moderate-paced flow</li>
        <li>Cooling poses like forward folds</li>
        <li>Avoid excessive heat-building practices</li>
        <li>Pranayama: Sheetali (cooling breath)</li>
        <li>Heart-opening poses</li>
      </ul>

      <h3>Yoga for Kapha Types</h3>
      <p>Kapha individuals benefit from energizing, stimulating practices:</p>
      <ul>
        <li>Vigorous, dynamic flows</li>
        <li>Sun Salutations</li>
        <li>Backbends and inversions</li>
        <li>Pranayama: Kapalabhati (skull-shining breath)</li>
        <li>Early morning practice</li>
      </ul>

      <h2>Integrating Both in Daily Life</h2>
      <p>Follow these principles to combine Yoga and Ayurveda:</p>
      <ol>
        <li>Practice yoga at the optimal time for your dosha</li>
        <li>Eat according to Ayurvedic guidelines</li>
        <li>Use seasonal routines (Ritucharya)</li>
        <li>Include pranayama and meditation</li>
        <li>Take herbs that support your practice</li>
      </ol>

      <h2>Conclusion</h2>
      <p>By understanding and applying both Yoga and Ayurveda, you create a comprehensive approach to health that addresses every aspect of your being. This integration leads to greater vitality, clarity, and spiritual growth.</p>
    `,
    contentHi: `
      <h2>बहन विज्ञान: योग और आयुर्वेद</h2>
      <p>योग और आयुर्वेद को अक्सर "बहन विज्ञान" कहा जाता है क्योंकि वे समान वैदिक जड़ें साझा करते हैं और एक दूसरे के पूरक हैं।</p>

      <h2>वे एक साथ कैसे काम करते हैं</h2>
      <p>आयुर्वेद इष्टतम स्वास्थ्य की नींव प्रदान करता है जो गहरे योग अभ्यास की अनुमति देता है।</p>

      <h2>आपके दोष के लिए योग</h2>
      <h3>वात प्रकार के लिए योग</h3>
      <p>वात व्यक्तियों को ग्राउंडिंग, शांत करने वाले अभ्यासों से लाभ होता है।</p>

      <h2>निष्कर्ष</h2>
      <p>योग और आयुर्वेद दोनों को समझकर और लागू करके, आप स्वास्थ्य के लिए एक व्यापक दृष्टिकोण बनाते हैं।</p>
    `,
    category: "lifestyle",
    author: "Yogacharya Amit Kumar",
    authorHi: "योगाचार्य अमित कुमार",
    date: "2024-01-05",
    readTime: "7 min",
    readTimeHi: "7 मिनट",
    image: "/placeholder.svg",
    tags: ["yoga", "wellness", "lifestyle", "meditation"],
    tagsHi: ["योग", "कल्याण", "जीवनशैली", "ध्यान"],
    featured: false
  },
  {
    id: "triphala-digestive-health",
    title: "Triphala for Digestive Health: Benefits, How to Use & Best Time",
    titleHi: "पाचन स्वास्थ्य के लिए त्रिफला: लाभ, उपयोग कैसे करें और सबसे अच्छा समय",
    excerpt: "Complete guide to Triphala - the legendary Ayurvedic formula for digestive wellness, detoxification, and rejuvenation.",
    excerptHi: "त्रिफला के लिए संपूर्ण गाइड - पाचन स्वास्थ्य, विषहरण और कायाकल्प के लिए प्रसिद्ध आयुर्वेदिक फॉर्मूला।",
    content: `
      <h2>What is Triphala?</h2>
      <p>Triphala, meaning "three fruits" in Sanskrit, is one of the most revered formulas in Ayurveda. It's a blend of three powerful medicinal fruits: Amalaki (Emblica officinalis), Bibhitaki (Terminalia bellirica), and Haritaki (Terminalia chebula). Each fruit corresponds to and balances one of the three doshas.</p>

      <h2>The Three Fruits</h2>
      
      <h3>Amalaki (Indian Gooseberry)</h3>
      <p>Rich in Vitamin C and antioxidants, Amalaki balances Pitta dosha. It supports digestion, immunity, and rejuvenation.</p>

      <h3>Bibhitaki</h3>
      <p>Bibhitaki balances Kapha dosha. It supports respiratory health and helps remove excess mucus and toxins.</p>

      <h3>Haritaki</h3>
      <p>Known as the "King of Medicines," Haritaki balances Vata dosha. It's a powerful detoxifier and supports healthy elimination.</p>

      <h2>Benefits of Triphala</h2>
      <ul>
        <li><strong>Digestive Health:</strong> Promotes regular bowel movements and healthy digestion</li>
        <li><strong>Detoxification:</strong> Removes toxins (Ama) from the body gently</li>
        <li><strong>Antioxidant:</strong> Protects cells from oxidative damage</li>
        <li><strong>Weight Management:</strong> Supports healthy metabolism</li>
        <li><strong>Eye Health:</strong> Traditionally used to improve vision</li>
        <li><strong>Immunity:</strong> Strengthens the immune system</li>
        <li><strong>Anti-inflammatory:</strong> Reduces inflammation in the body</li>
      </ul>

      <h2>How to Take Triphala</h2>
      
      <h3>Triphala Powder</h3>
      <p>Mix 1/2 to 1 teaspoon of Triphala powder in warm water. Let it steep for 10 minutes. Drink before bed or first thing in the morning.</p>

      <h3>Triphala Tablets</h3>
      <p>Take 2 tablets with warm water before bed. This is convenient for those who find the taste too bitter.</p>

      <h3>Triphala Decoction</h3>
      <p>Boil 1 teaspoon of Triphala in 2 cups of water until reduced to 1 cup. Strain and drink warm.</p>

      <h2>Best Time to Take Triphala</h2>
      <ul>
        <li><strong>Before bed:</strong> For gentle overnight detox and morning elimination</li>
        <li><strong>Empty stomach morning:</strong> For maximum absorption and cleansing</li>
        <li><strong>Between meals:</strong> For digestive support throughout the day</li>
      </ul>

      <h2>Dosage Guidelines</h2>
      <p>Start with 1/2 teaspoon and gradually increase to 1 teaspoon. Some people may need up to 2 teaspoons for optimal effect. Listen to your body and adjust accordingly.</p>

      <h2>Precautions</h2>
      <ul>
        <li>Avoid during pregnancy and breastfeeding</li>
        <li>Start with lower doses if you have sensitive digestion</li>
        <li>Reduce dose if you experience loose stools</li>
        <li>Consult a practitioner if taking medications</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Triphala is a gentle yet powerful formula that supports digestive health and overall wellbeing. Its balanced composition makes it suitable for most people when used appropriately.</p>
    `,
    contentHi: `
      <h2>त्रिफला क्या है?</h2>
      <p>त्रिफला, जिसका अर्थ संस्कृत में "तीन फल" है, आयुर्वेद में सबसे सम्मानित फॉर्मूलों में से एक है। यह तीन शक्तिशाली औषधीय फलों का मिश्रण है: आमलकी, बिभीतकी और हरीतकी।</p>

      <h2>तीन फल</h2>
      <h3>आमलकी (भारतीय आंवला)</h3>
      <p>विटामिन सी और एंटीऑक्सीडेंट से भरपूर, आमलकी पित्त दोष को संतुलित करता है।</p>

      <h2>त्रिफला के लाभ</h2>
      <ul>
        <li><strong>पाचन स्वास्थ्य:</strong> नियमित मल त्याग और स्वस्थ पाचन को बढ़ावा देता है</li>
        <li><strong>विषहरण:</strong> शरीर से विषाक्त पदार्थों को धीरे से हटाता है</li>
      </ul>

      <h2>निष्कर्ष</h2>
      <p>त्रिफला एक सौम्य लेकिन शक्तिशाली फॉर्मूला है जो पाचन स्वास्थ्य और समग्र कल्याण का समर्थन करता है।</p>
    `,
    category: "herbs",
    author: "Dr. Ayush Sharma",
    authorHi: "डॉ. आयुष शर्मा",
    date: "2024-01-02",
    readTime: "9 min",
    readTimeHi: "9 मिनट",
    image: "/placeholder.svg",
    tags: ["triphala", "digestion", "detox", "constipation"],
    tagsHi: ["त्रिफला", "पाचन", "विषहरण", "कब्ज"],
    featured: false
  },
  {
    id: "ayurvedic-diet-for-weight-loss",
    title: "Ayurvedic Diet for Weight Loss: Foods, Tips & Meal Plan",
    titleHi: "वजन घटाने के लिए आयुर्वेदिक आहार: खाद्य पदार्थ, सुझाव और भोजन योजना",
    excerpt: "Discover how to lose weight naturally with Ayurvedic dietary principles tailored to your dosha type.",
    excerptHi: "जानें कि आयुर्वेदिक आहार सिद्धांतों के साथ स्वाभाविक रूप से वजन कैसे कम करें जो आपके दोष प्रकार के अनुसार हैं।",
    content: `
      <h2>The Ayurvedic Approach to Weight Loss</h2>
      <p>Unlike modern dieting, Ayurveda views weight gain as a result of imbalanced Kapha dosha, weakened digestive fire (Agni), and accumulation of toxins (Ama). The focus is on strengthening digestion and addressing the root cause rather than calorie restriction.</p>

      <h2>Understanding Your Metabolism</h2>
      <p>In Ayurveda, your Agni (digestive fire) determines how efficiently you metabolize food. Weak Agni leads to incomplete digestion, toxin formation, and weight gain. The goal is to kindle Agni while eating foods appropriate for your constitution.</p>

      <h2>General Ayurvedic Weight Loss Principles</h2>
      <ol>
        <li><strong>Eat your main meal at lunch</strong> when digestive fire is strongest</li>
        <li><strong>Avoid snacking</strong> - allow 4-6 hours between meals</li>
        <li><strong>Drink warm water</strong> throughout the day</li>
        <li><strong>Include all six tastes</strong> in your meals</li>
        <li><strong>Eat freshly cooked food</strong> - avoid leftovers</li>
        <li><strong>Stop eating when 75% full</strong></li>
        <li><strong>Avoid eating after sunset</strong> or keep dinner light</li>
      </ol>

      <h2>Foods That Support Weight Loss</h2>
      
      <h3>Spices to Kindle Agni</h3>
      <ul>
        <li>Ginger - Stimulates digestion</li>
        <li>Black pepper - Increases metabolism</li>
        <li>Cumin - Aids fat metabolism</li>
        <li>Turmeric - Anti-inflammatory</li>
        <li>Cinnamon - Regulates blood sugar</li>
      </ul>

      <h3>Beneficial Foods</h3>
      <ul>
        <li>Moong dal - Easy to digest protein</li>
        <li>Leafy greens - Light and cleansing</li>
        <li>Bitter gourd - Reduces Kapha</li>
        <li>Barley - Low glycemic grain</li>
        <li>Honey - Scrapes fat (use unheated)</li>
      </ul>

      <h3>Foods to Avoid</h3>
      <ul>
        <li>Cold, heavy foods</li>
        <li>Dairy products (especially cold)</li>
        <li>Refined sugars and carbs</li>
        <li>Fried and oily foods</li>
        <li>Excessive salt</li>
      </ul>

      <h2>Sample Day Meal Plan</h2>
      
      <h3>Morning (6-7 AM)</h3>
      <p>Warm lemon water with honey and a pinch of black pepper</p>

      <h3>Breakfast (8-9 AM)</h3>
      <p>Light options: Fresh fruit, vegetable upma, or moong dal cheela</p>

      <h3>Lunch (12-1 PM)</h3>
      <p>Main meal: Rice or roti, dal, vegetables, salad, and buttermilk</p>

      <h3>Evening (4-5 PM)</h3>
      <p>Herbal tea with ginger or green tea (optional light snack if needed)</p>

      <h3>Dinner (6-7 PM)</h3>
      <p>Light meal: Khichdi, vegetable soup, or steamed vegetables</p>

      <h2>Herbs for Weight Loss</h2>
      <ul>
        <li><strong>Guggulu:</strong> Supports healthy metabolism</li>
        <li><strong>Triphala:</strong> Detoxifies and aids elimination</li>
        <li><strong>Garcinia:</strong> Reduces fat accumulation</li>
        <li><strong>Punarnava:</strong> Reduces water retention</li>
      </ul>

      <h2>Lifestyle Tips</h2>
      <ul>
        <li>Wake up before sunrise</li>
        <li>Exercise daily, preferably in the morning</li>
        <li>Practice yoga and pranayama</li>
        <li>Get adequate sleep (not excessive)</li>
        <li>Manage stress through meditation</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Ayurvedic weight loss is sustainable because it addresses the root cause and creates lasting lifestyle changes. Be patient, consistent, and work with your body's natural rhythms for best results.</p>
    `,
    contentHi: `
      <h2>वजन घटाने के लिए आयुर्वेदिक दृष्टिकोण</h2>
      <p>आधुनिक डाइटिंग के विपरीत, आयुर्वेद वजन बढ़ने को असंतुलित कफ दोष, कमजोर पाचक अग्नि और विषाक्त पदार्थों के संचय का परिणाम मानता है।</p>

      <h2>सामान्य आयुर्वेदिक वजन घटाने के सिद्धांत</h2>
      <ol>
        <li>दोपहर में अपना मुख्य भोजन खाएं जब पाचक अग्नि सबसे मजबूत हो</li>
        <li>स्नैकिंग से बचें</li>
        <li>पूरे दिन गर्म पानी पिएं</li>
      </ol>

      <h2>निष्कर्ष</h2>
      <p>आयुर्वेदिक वजन घटाना टिकाऊ है क्योंकि यह मूल कारण को संबोधित करता है।</p>
    `,
    category: "diet",
    author: "Vaidya Priya Patel",
    authorHi: "वैद्य प्रिया पटेल",
    date: "2023-12-28",
    readTime: "11 min",
    readTimeHi: "11 मिनट",
    image: "/placeholder.svg",
    tags: ["weight-loss", "diet", "metabolism", "obesity"],
    tagsHi: ["वजन-घटाना", "आहार", "चयापचय", "मोटापा"],
    featured: true
  },
  {
    id: "brahmi-memory-brain-health",
    title: "Brahmi for Memory & Brain Health: Science-Backed Benefits",
    titleHi: "स्मृति और मस्तिष्क स्वास्थ्य के लिए ब्राह्मी: विज्ञान-समर्थित लाभ",
    excerpt: "Explore how Brahmi (Bacopa monnieri) enhances memory, focus, and cognitive function with scientific evidence.",
    excerptHi: "जानें कि ब्राह्मी (बैकोपा मोनिएरी) वैज्ञानिक साक्ष्य के साथ स्मृति, फोकस और संज्ञानात्मक कार्य को कैसे बढ़ाती है।",
    content: `
      <h2>What is Brahmi?</h2>
      <p>Brahmi (Bacopa monnieri) is a revered Ayurvedic herb named after Brahma, the creator god in Hindu tradition. It has been used for centuries as a brain tonic to enhance memory, concentration, and cognitive function. Modern science has validated many of these traditional claims.</p>

      <h2>Scientific Evidence for Brain Benefits</h2>
      <p>Multiple clinical studies have demonstrated Brahmi's effectiveness:</p>
      <ul>
        <li>Improved memory acquisition and retention</li>
        <li>Enhanced attention and cognitive processing</li>
        <li>Reduced anxiety and stress</li>
        <li>Neuroprotective effects</li>
      </ul>

      <h2>How Brahmi Works</h2>
      <p>Brahmi contains active compounds called bacosides that:</p>
      <ul>
        <li>Enhance nerve impulse transmission</li>
        <li>Increase antioxidant activity in the brain</li>
        <li>Modulate serotonin, dopamine, and acetylcholine</li>
        <li>Support the growth of nerve endings</li>
      </ul>

      <h2>Key Benefits</h2>
      <h3>1. Memory Enhancement</h3>
      <p>Studies show significant improvement in memory after 12 weeks of regular use.</p>

      <h3>2. Anxiety Reduction</h3>
      <p>Brahmi has adaptogenic properties that help manage stress and anxiety naturally.</p>

      <h3>3. ADHD Support</h3>
      <p>Research indicates potential benefits for attention and hyperactivity in children.</p>

      <h3>4. Neuroprotection</h3>
      <p>The antioxidant properties may help protect against age-related cognitive decline.</p>

      <h2>How to Use Brahmi</h2>
      <ul>
        <li><strong>Powder:</strong> 1/2-1 teaspoon with warm milk or ghee</li>
        <li><strong>Tablets:</strong> 300-450mg standardized extract daily</li>
        <li><strong>Fresh juice:</strong> 2-3 teaspoons daily</li>
        <li><strong>Brahmi Ghrita:</strong> Medicated ghee for enhanced absorption</li>
      </ul>

      <h2>Best Time to Take</h2>
      <p>Morning on empty stomach or before studying/mental work. Can also be taken before bed for calming effect.</p>

      <h2>Conclusion</h2>
      <p>Brahmi is one of the most well-researched Ayurvedic herbs with proven benefits for brain health. Include it in your routine for better memory, focus, and mental clarity.</p>
    `,
    contentHi: `
      <h2>ब्राह्मी क्या है?</h2>
      <p>ब्राह्मी (बैकोपा मोनिएरी) एक सम्मानित आयुर्वेदिक जड़ी-बूटी है जिसका नाम हिंदू परंपरा में निर्माता देवता ब्रह्मा के नाम पर रखा गया है।</p>

      <h2>मस्तिष्क लाभों के लिए वैज्ञानिक साक्ष्य</h2>
      <p>कई नैदानिक अध्ययनों ने ब्राह्मी की प्रभावशीलता प्रदर्शित की है।</p>

      <h2>निष्कर्ष</h2>
      <p>ब्राह्मी मस्तिष्क स्वास्थ्य के लिए सिद्ध लाभों के साथ सबसे अच्छी तरह से शोध की गई आयुर्वेदिक जड़ी-बूटियों में से एक है।</p>
    `,
    category: "herbs",
    author: "Dr. Meera Joshi",
    authorHi: "डॉ. मीरा जोशी",
    date: "2023-12-25",
    readTime: "8 min",
    readTimeHi: "8 मिनट",
    image: "/placeholder.svg",
    tags: ["brahmi", "memory", "brain-health", "focus"],
    tagsHi: ["ब्राह्मी", "स्मृति", "मस्तिष्क-स्वास्थ्य", "फोकस"],
    featured: false
  },
  {
    id: "tulsi-immunity-benefits",
    title: "Tulsi (Holy Basil): The Queen of Herbs for Immunity & Wellness",
    titleHi: "तुलसी: प्रतिरक्षा और कल्याण के लिए जड़ी-बूटियों की रानी",
    excerpt: "Learn why Tulsi is revered in Ayurveda and how to use it daily for boosting immunity and overall health.",
    excerptHi: "जानें कि तुलसी आयुर्वेद में क्यों पूजनीय है और प्रतिरक्षा और समग्र स्वास्थ्य के लिए इसे दैनिक रूप से कैसे उपयोग करें।",
    content: `
      <h2>The Sacred Tulsi Plant</h2>
      <p>Tulsi (Ocimum sanctum), also known as Holy Basil, holds a special place in Indian culture and Ayurvedic medicine. Called the "Queen of Herbs" and "Mother Medicine of Nature," it has been worshipped for thousands of years for its healing properties.</p>

      <h2>Types of Tulsi</h2>
      <ul>
        <li><strong>Rama Tulsi:</strong> Green leaves, milder taste</li>
        <li><strong>Krishna Tulsi:</strong> Purple leaves, stronger medicinal properties</li>
        <li><strong>Vana Tulsi:</strong> Wild variety, most aromatic</li>
      </ul>

      <h2>Health Benefits</h2>
      <h3>1. Immune System Support</h3>
      <p>Tulsi enhances the body's natural defense mechanisms by increasing antibody production and immune cell activity.</p>

      <h3>2. Respiratory Health</h3>
      <p>Excellent for colds, coughs, and asthma. Acts as an expectorant and bronchodilator.</p>

      <h3>3. Stress Relief</h3>
      <p>As an adaptogen, Tulsi helps the body cope with stress and reduces cortisol levels.</p>

      <h3>4. Antimicrobial</h3>
      <p>Has antibacterial, antiviral, and antifungal properties.</p>

      <h3>5. Heart Health</h3>
      <p>Helps maintain healthy blood pressure and cholesterol levels.</p>

      <h2>How to Use Tulsi</h2>
      <ul>
        <li><strong>Fresh leaves:</strong> Chew 4-5 leaves daily on empty stomach</li>
        <li><strong>Tulsi tea:</strong> Steep leaves in hot water for 5-10 minutes</li>
        <li><strong>Tulsi drops:</strong> Add to water or juice</li>
        <li><strong>Tulsi powder:</strong> Mix with honey</li>
      </ul>

      <h2>Tulsi for Common Ailments</h2>
      <table>
        <tr><th>Condition</th><th>How to Use</th></tr>
        <tr><td>Fever</td><td>Decoction with black pepper and ginger</td></tr>
        <tr><td>Cough</td><td>Tulsi leaves with honey</td></tr>
        <tr><td>Headache</td><td>Tulsi paste applied on forehead</td></tr>
        <tr><td>Stress</td><td>Tulsi tea morning and evening</td></tr>
      </table>

      <h2>Growing Tulsi at Home</h2>
      <p>Keep a Tulsi plant at home for fresh leaves and to purify the air. It thrives in warm conditions with moderate watering.</p>

      <h2>Conclusion</h2>
      <p>Incorporating Tulsi into your daily routine is one of the simplest ways to support immunity and overall health. This sacred herb offers protection against various ailments while promoting vitality and wellbeing.</p>
    `,
    contentHi: `
      <h2>पवित्र तुलसी का पौधा</h2>
      <p>तुलसी भारतीय संस्कृति और आयुर्वेदिक चिकित्सा में विशेष स्थान रखती है। "जड़ी-बूटियों की रानी" और "प्रकृति की माँ औषधि" कहलाती है।</p>

      <h2>स्वास्थ्य लाभ</h2>
      <h3>1. प्रतिरक्षा प्रणाली समर्थन</h3>
      <p>तुलसी एंटीबॉडी उत्पादन और प्रतिरक्षा कोशिका गतिविधि को बढ़ाकर शरीर की प्राकृतिक रक्षा तंत्र को बढ़ाती है।</p>

      <h2>निष्कर्ष</h2>
      <p>तुलसी को अपनी दैनिक दिनचर्या में शामिल करना प्रतिरक्षा और समग्र स्वास्थ्य का समर्थन करने के सबसे सरल तरीकों में से एक है।</p>
    `,
    category: "herbs",
    author: "Dr. Ayush Sharma",
    authorHi: "डॉ. आयुष शर्मा",
    date: "2023-12-22",
    readTime: "7 min",
    readTimeHi: "7 मिनट",
    image: "/placeholder.svg",
    tags: ["tulsi", "immunity", "respiratory", "stress"],
    tagsHi: ["तुलसी", "प्रतिरक्षा", "श्वसन", "तनाव"],
    featured: false
  },
  {
    id: "ayurveda-for-diabetes",
    title: "Ayurvedic Treatment for Diabetes: Herbs, Diet & Lifestyle Tips",
    titleHi: "मधुमेह के लिए आयुर्वेदिक उपचार: जड़ी-बूटियां, आहार और जीवनशैली सुझाव",
    excerpt: "Comprehensive guide on managing diabetes naturally with Ayurvedic herbs, dietary modifications, and lifestyle changes.",
    excerptHi: "आयुर्वेदिक जड़ी-बूटियों, आहार संशोधनों और जीवनशैली परिवर्तनों के साथ मधुमेह को प्राकृतिक रूप से प्रबंधित करने पर व्यापक गाइड।",
    content: `
      <h2>Understanding Diabetes in Ayurveda</h2>
      <p>In Ayurveda, diabetes is known as Prameha (meaning excessive urination) and Madhumeha (meaning sweet urine). It's considered a Kapha disorder that progresses to involve Pitta and Vata as it advances.</p>

      <h2>Ayurvedic Classification</h2>
      <ul>
        <li><strong>Sahaja Prameha:</strong> Genetic/hereditary diabetes</li>
        <li><strong>Apathyaja Prameha:</strong> Acquired through unhealthy lifestyle</li>
      </ul>

      <h2>Powerful Herbs for Diabetes</h2>
      
      <h3>1. Gudmar (Gymnema sylvestre)</h3>
      <p>Called "sugar destroyer," it reduces sugar cravings and supports healthy blood sugar levels. Take 400-600mg extract daily.</p>

      <h3>2. Bitter Melon (Karela)</h3>
      <p>Contains plant insulin that helps lower blood glucose. Drink fresh juice on empty stomach.</p>

      <h3>3. Fenugreek (Methi)</h3>
      <p>Soaked seeds taken before meals help control post-meal blood sugar spikes.</p>

      <h3>4. Turmeric</h3>
      <p>The active compound curcumin improves insulin sensitivity and reduces inflammation.</p>

      <h3>5. Neem</h3>
      <p>Improves insulin receptor sensitivity and has hypoglycemic properties.</p>

      <h3>6. Jamun (Indian Blackberry)</h3>
      <p>Seeds, fruit, and leaves all help regulate blood sugar. Jamun seed powder is particularly effective.</p>

      <h2>Dietary Guidelines</h2>
      <h3>Foods to Include</h3>
      <ul>
        <li>Bitter vegetables (karela, methi)</li>
        <li>Whole grains (barley, millets)</li>
        <li>Green leafy vegetables</li>
        <li>Low glycemic fruits (jamun, guava)</li>
        <li>Legumes and lentils</li>
      </ul>

      <h3>Foods to Avoid</h3>
      <ul>
        <li>Refined sugars and sweets</li>
        <li>White rice and refined flour</li>
        <li>Potatoes and starchy vegetables</li>
        <li>Sweet fruits (mango, banana)</li>
        <li>Excessive dairy</li>
      </ul>

      <h2>Lifestyle Modifications</h2>
      <ul>
        <li>Regular exercise (walking, yoga)</li>
        <li>Wake up before sunrise</li>
        <li>Avoid daytime sleep</li>
        <li>Manage stress</li>
        <li>Regular meal times</li>
      </ul>

      <h2>Yoga for Diabetes</h2>
      <p>Beneficial asanas include:</p>
      <ul>
        <li>Surya Namaskar</li>
        <li>Paschimottanasana</li>
        <li>Dhanurasana</li>
        <li>Halasana</li>
        <li>Kapalbhati pranayama</li>
      </ul>

      <h2>Important Note</h2>
      <p>While Ayurveda can help manage diabetes, always work with your healthcare provider. Never stop prescribed medications without medical guidance.</p>
    `,
    contentHi: `
      <h2>आयुर्वेद में मधुमेह को समझना</h2>
      <p>आयुर्वेद में, मधुमेह को प्रमेह (अत्यधिक पेशाब) और मधुमेह (मीठा पेशाब) के रूप में जाना जाता है।</p>

      <h2>मधुमेह के लिए शक्तिशाली जड़ी-बूटियां</h2>
      <h3>1. गुड़मार</h3>
      <p>"चीनी नाशक" कहलाता है, यह चीनी की लालसा को कम करता है।</p>

      <h3>2. करेला</h3>
      <p>पौधे का इंसुलिन होता है जो रक्त शर्करा को कम करने में मदद करता है।</p>

      <h2>आहार दिशानिर्देश</h2>
      <h3>शामिल करने योग्य खाद्य पदार्थ</h3>
      <ul>
        <li>कड़वी सब्जियां (करेला, मेथी)</li>
        <li>साबुत अनाज (जौ, बाजरा)</li>
      </ul>

      <h2>महत्वपूर्ण नोट</h2>
      <p>जबकि आयुर्वेद मधुमेह प्रबंधन में मदद कर सकता है, हमेशा अपने स्वास्थ्य देखभाल प्रदाता के साथ काम करें।</p>
    `,
    category: "diseases",
    author: "Vaidya Priya Patel",
    authorHi: "वैद्य प्रिया पटेल",
    date: "2023-12-18",
    readTime: "13 min",
    readTimeHi: "13 मिनट",
    image: "/placeholder.svg",
    tags: ["diabetes", "blood-sugar", "gudmar", "lifestyle"],
    tagsHi: ["मधुमेह", "रक्त-शर्करा", "गुड़मार", "जीवनशैली"],
    featured: true
  },
  {
    id: "panchakarma-detox-therapy",
    title: "Panchakarma: The Ultimate Ayurvedic Detox and Rejuvenation Therapy",
    titleHi: "पंचकर्म: अंतिम आयुर्वेदिक विषहरण और कायाकल्प चिकित्सा",
    excerpt: "Understand the five cleansing procedures of Panchakarma and how they can reset your body and mind.",
    excerptHi: "पंचकर्म की पांच शुद्धिकरण प्रक्रियाओं को समझें और वे आपके शरीर और मन को कैसे रीसेट कर सकती हैं।",
    content: `
      <h2>What is Panchakarma?</h2>
      <p>Panchakarma means "five actions" in Sanskrit and refers to the five therapeutic procedures designed to cleanse the body of toxins (Ama) and restore doshic balance. It's the ultimate Ayurvedic detoxification and rejuvenation therapy.</p>

      <h2>The Five Procedures</h2>
      
      <h3>1. Vamana (Therapeutic Vomiting)</h3>
      <p>Used to eliminate excess Kapha from the respiratory and digestive tracts. Beneficial for asthma, allergies, and chronic congestion.</p>

      <h3>2. Virechana (Purgation)</h3>
      <p>Removes excess Pitta through the bowels. Helps with skin disorders, liver problems, and inflammatory conditions.</p>

      <h3>3. Basti (Medicated Enema)</h3>
      <p>The most important procedure for Vata disorders. Medicinal oils or decoctions are administered through the rectum for deep cleansing.</p>

      <h3>4. Nasya (Nasal Administration)</h3>
      <p>Medicated oils or powders administered through the nose. Benefits sinuses, brain, and nervous system.</p>

      <h3>5. Raktamokshana (Blood Purification)</h3>
      <p>Purifies the blood using various techniques. Used for skin diseases and blood disorders.</p>

      <h2>Preparation Phase (Purvakarma)</h2>
      <p>Before main procedures:</p>
      <ul>
        <li><strong>Snehana:</strong> Internal and external oleation with medicated oils</li>
        <li><strong>Swedana:</strong> Therapeutic sweating to open channels</li>
      </ul>

      <h2>Post-Treatment (Paschatkarma)</h2>
      <p>Gradual return to normal diet and activities with specific guidelines for diet, rest, and lifestyle.</p>

      <h2>Benefits of Panchakarma</h2>
      <ul>
        <li>Deep detoxification at cellular level</li>
        <li>Restores metabolic fire (Agni)</li>
        <li>Balances all three doshas</li>
        <li>Enhances immunity</li>
        <li>Promotes longevity</li>
        <li>Improves mental clarity</li>
        <li>Reverses the effects of stress</li>
      </ul>

      <h2>Who Should Consider Panchakarma?</h2>
      <ul>
        <li>Those with chronic health conditions</li>
        <li>People with digestive issues</li>
        <li>Anyone seeking deep rejuvenation</li>
        <li>Those with accumulated stress</li>
        <li>For seasonal or annual cleansing</li>
      </ul>

      <h2>Important Considerations</h2>
      <ul>
        <li>Always undergo Panchakarma under qualified supervision</li>
        <li>Duration typically 7-21 days</li>
        <li>Not suitable during pregnancy or acute illness</li>
        <li>Requires commitment to diet and lifestyle guidelines</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Panchakarma offers a profound reset for body and mind. When done properly under expert guidance, it can address deep-seated health issues and promote lasting wellness.</p>
    `,
    contentHi: `
      <h2>पंचकर्म क्या है?</h2>
      <p>पंचकर्म का अर्थ संस्कृत में "पांच क्रियाएं" है और यह पांच चिकित्सीय प्रक्रियाओं को संदर्भित करता है जो शरीर को विषाक्त पदार्थों से साफ करने और दोष संतुलन बहाल करने के लिए डिज़ाइन की गई हैं।</p>

      <h2>पांच प्रक्रियाएं</h2>
      <h3>1. वमन (चिकित्सीय उल्टी)</h3>
      <p>श्वसन और पाचन तंत्र से अतिरिक्त कफ को खत्म करने के लिए उपयोग किया जाता है।</p>

      <h3>2. विरेचन (शोधन)</h3>
      <p>आंतों के माध्यम से अतिरिक्त पित्त को हटाता है।</p>

      <h2>पंचकर्म के लाभ</h2>
      <ul>
        <li>कोशिकीय स्तर पर गहरा विषहरण</li>
        <li>चयापचय अग्नि को बहाल करता है</li>
        <li>तीनों दोषों को संतुलित करता है</li>
      </ul>

      <h2>निष्कर्ष</h2>
      <p>पंचकर्म शरीर और मन के लिए गहन रीसेट प्रदान करता है।</p>
    `,
    category: "therapies",
    author: "Dr. Meera Joshi",
    authorHi: "डॉ. मीरा जोशी",
    date: "2023-12-15",
    readTime: "14 min",
    readTimeHi: "14 मिनट",
    image: "/placeholder.svg",
    tags: ["panchakarma", "detox", "rejuvenation", "therapy"],
    tagsHi: ["पंचकर्म", "विषहरण", "कायाकल्प", "चिकित्सा"],
    featured: false
  },
  {
    id: "ayurveda-skin-care",
    title: "Ayurvedic Skin Care: Natural Remedies for Glowing Skin",
    titleHi: "आयुर्वेदिक त्वचा देखभाल: चमकती त्वचा के लिए प्राकृतिक उपचार",
    excerpt: "Discover Ayurvedic herbs and home remedies for acne, pigmentation, aging, and achieving naturally radiant skin.",
    excerptHi: "मुंहासे, पिगमेंटेशन, उम्र बढ़ने और प्राकृतिक रूप से चमकदार त्वचा पाने के लिए आयुर्वेदिक जड़ी-बूटियों और घरेलू उपचारों की खोज करें।",
    content: `
      <h2>Ayurvedic Approach to Skin Health</h2>
      <p>In Ayurveda, beautiful skin is a reflection of overall health. The skin (Twak) is considered a mirror of the body's internal state. True skin care addresses nutrition, digestion, detoxification, and mental wellbeing.</p>

      <h2>Skin Types According to Doshas</h2>
      
      <h3>Vata Skin</h3>
      <p>Thin, dry, prone to premature wrinkles. Needs regular moisturizing and nourishment.</p>

      <h3>Pitta Skin</h3>
      <p>Sensitive, prone to inflammation, acne, and redness. Needs cooling and soothing care.</p>

      <h3>Kapha Skin</h3>
      <p>Oily, thick, prone to congestion and large pores. Needs regular cleansing and stimulation.</p>

      <h2>Key Herbs for Skin</h2>
      
      <h3>Manjishtha</h3>
      <p>The premier blood purifier and skin herb. Excellent for pigmentation, acne scars, and achieving even skin tone.</p>

      <h3>Neem</h3>
      <p>Antibacterial and antifungal. Perfect for acne-prone and problem skin.</p>

      <h3>Turmeric</h3>
      <p>Anti-inflammatory and brightening. Use in face masks for glowing skin.</p>

      <h3>Aloe Vera (Kumari)</h3>
      <p>Cooling and healing. Soothes irritated skin and promotes cell regeneration.</p>

      <h3>Sandalwood (Chandan)</h3>
      <p>Cooling and fragrant. Excellent for Pitta skin and reducing inflammation.</p>

      <h2>DIY Face Masks</h2>
      
      <h3>For Glowing Skin</h3>
      <p>Mix turmeric, besan (gram flour), and milk/rose water. Apply for 15 minutes.</p>

      <h3>For Acne</h3>
      <p>Mix neem powder, multani mitti (fuller's earth), and rose water. Apply for 20 minutes.</p>

      <h3>For Anti-Aging</h3>
      <p>Mix ashwagandha powder, honey, and almond oil. Apply overnight.</p>

      <h2>Daily Skin Care Routine</h2>
      <ol>
        <li><strong>Cleanse:</strong> Use gentle, natural cleansers</li>
        <li><strong>Tone:</strong> Rose water or herb-infused water</li>
        <li><strong>Moisturize:</strong> Natural oils based on skin type</li>
        <li><strong>Protect:</strong> Use natural sun protection</li>
      </ol>

      <h2>Internal Care for Skin</h2>
      <ul>
        <li>Stay hydrated with warm water</li>
        <li>Eat fresh, seasonal foods</li>
        <li>Include healthy fats (ghee, coconut oil)</li>
        <li>Take blood-purifying herbs</li>
        <li>Manage stress</li>
      </ul>

      <h2>Conclusion</h2>
      <p>True Ayurvedic skin care goes beyond surface treatments. By addressing internal health, using appropriate herbs, and following dosha-specific routines, you can achieve naturally radiant skin that reflects inner vitality.</p>
    `,
    contentHi: `
      <h2>त्वचा स्वास्थ्य के लिए आयुर्वेदिक दृष्टिकोण</h2>
      <p>आयुर्वेद में, सुंदर त्वचा समग्र स्वास्थ्य का प्रतिबिंब है। त्वचा को शरीर की आंतरिक स्थिति का दर्पण माना जाता है।</p>

      <h2>दोषों के अनुसार त्वचा के प्रकार</h2>
      <h3>वात त्वचा</h3>
      <p>पतली, सूखी, समय से पहले झुर्रियों की संभावना। नियमित मॉइस्चराइजिंग की जरूरत।</p>

      <h2>त्वचा के लिए प्रमुख जड़ी-बूटियां</h2>
      <h3>मंजिष्ठा</h3>
      <p>प्रमुख रक्त शोधक और त्वचा जड़ी-बूटी।</p>

      <h2>निष्कर्ष</h2>
      <p>सच्ची आयुर्वेदिक त्वचा देखभाल सतही उपचारों से परे जाती है।</p>
    `,
    category: "beauty",
    author: "Yogacharya Amit Kumar",
    authorHi: "योगाचार्य अमित कुमार",
    date: "2023-12-12",
    readTime: "10 min",
    readTimeHi: "10 मिनट",
    image: "/placeholder.svg",
    tags: ["skin-care", "beauty", "acne", "anti-aging"],
    tagsHi: ["त्वचा-देखभाल", "सौंदर्य", "मुंहासे", "एंटी-एजिंग"],
    featured: false
  },
  {
    id: "children-health-ayurveda",
    title: "Ayurveda for Children: Safe Remedies for Common Childhood Ailments",
    titleHi: "बच्चों के लिए आयुर्वेद: सामान्य बचपन की बीमारियों के लिए सुरक्षित उपचार",
    excerpt: "Gentle and effective Ayurvedic solutions for children's colic, cold, teething, immunity, and overall development.",
    excerptHi: "बच्चों के पेट दर्द, सर्दी, दांत निकलना, प्रतिरक्षा और समग्र विकास के लिए सौम्य और प्रभावी आयुर्वेदिक समाधान।",
    content: `
      <h2>Ayurveda for Growing Children</h2>
      <p>Children are considered predominantly Kapha in nature, which supports their growth and development. Ayurveda offers gentle, natural remedies that work with a child's delicate constitution without harsh side effects.</p>

      <h2>Building Immunity in Children</h2>
      <p>Key approaches include:</p>
      <ul>
        <li>Chyawanprash - 1/2 teaspoon daily (after age 1)</li>
        <li>Tulsi drops in warm water</li>
        <li>Golden milk before bed</li>
        <li>Regular oil massage (Abhyanga)</li>
      </ul>

      <h2>Common Ailments and Remedies</h2>
      
      <h3>Colic and Digestive Issues</h3>
      <ul>
        <li>Hing (asafoetida) paste on navel</li>
        <li>Jeera (cumin) water</li>
        <li>Gentle tummy massage with warm oil</li>
      </ul>

      <h3>Cold and Cough</h3>
      <ul>
        <li>Tulsi and honey (after age 1)</li>
        <li>Warm ginger-jaggery decoction</li>
        <li>Steam inhalation (with supervision)</li>
        <li>Chest rub with mustard oil and camphor</li>
      </ul>

      <h3>Teething Discomfort</h3>
      <ul>
        <li>Massage gums with honey and licorice powder</li>
        <li>Cold chamomile tea compress</li>
        <li>Gentle gum massage</li>
      </ul>

      <h3>Fever</h3>
      <ul>
        <li>Tulsi and ginger tea</li>
        <li>Sponging with room temperature water</li>
        <li>Light, easily digestible foods</li>
      </ul>

      <h2>Brain Development Support</h2>
      <ul>
        <li><strong>Brahmi:</strong> Enhances memory and concentration</li>
        <li><strong>Shankhpushpi:</strong> Supports cognitive development</li>
        <li><strong>Cow's ghee:</strong> Nourishes brain tissues</li>
      </ul>

      <h2>Diet for Growing Children</h2>
      <ul>
        <li>Fresh, warm, home-cooked meals</li>
        <li>Include all six tastes</li>
        <li>Avoid processed and cold foods</li>
        <li>Ghee with rice for brain development</li>
        <li>Milk with turmeric for immunity</li>
      </ul>

      <h2>Daily Routine for Children</h2>
      <ol>
        <li>Wake up early with the sun</li>
        <li>Oil massage before bath</li>
        <li>Regular meal times</li>
        <li>Outdoor play and physical activity</li>
        <li>Early bedtime (by 8-9 PM)</li>
      </ol>

      <h2>When to Seek Medical Help</h2>
      <p>Always consult a doctor for:</p>
      <ul>
        <li>High fever lasting more than 2 days</li>
        <li>Difficulty breathing</li>
        <li>Severe dehydration</li>
        <li>Unusual rashes or symptoms</li>
        <li>Any concerning changes in behavior</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Ayurveda offers safe, gentle remedies that support children's natural development. Always use age-appropriate dosages and consult with healthcare providers for persistent or serious conditions.</p>
    `,
    contentHi: `
      <h2>बढ़ते बच्चों के लिए आयुर्वेद</h2>
      <p>बच्चों को प्रकृति में मुख्य रूप से कफ प्रधान माना जाता है, जो उनके विकास और वृद्धि का समर्थन करता है।</p>

      <h2>बच्चों में प्रतिरक्षा निर्माण</h2>
      <ul>
        <li>च्यवनप्राश - दैनिक 1/2 चम्मच (1 वर्ष की आयु के बाद)</li>
        <li>गर्म पानी में तुलसी की बूंदें</li>
      </ul>

      <h2>सामान्य बीमारियां और उपचार</h2>
      <h3>पेट दर्द और पाचन समस्याएं</h3>
      <ul>
        <li>नाभि पर हींग का पेस्ट</li>
        <li>जीरा पानी</li>
      </ul>

      <h2>निष्कर्ष</h2>
      <p>आयुर्वेद सुरक्षित, सौम्य उपचार प्रदान करता है जो बच्चों के प्राकृतिक विकास का समर्थन करते हैं।</p>
    `,
    category: "children",
    author: "Dr. Ayush Sharma",
    authorHi: "डॉ. आयुष शर्मा",
    date: "2023-12-08",
    readTime: "11 min",
    readTimeHi: "11 मिनट",
    image: "/placeholder.svg",
    tags: ["children", "immunity", "colic", "pediatric"],
    tagsHi: ["बच्चे", "प्रतिरक्षा", "पेट-दर्द", "बाल-चिकित्सा"],
    featured: false
  },
  {
    id: "women-health-shatavari",
    title: "Shatavari for Women's Health: Hormonal Balance & Reproductive Wellness",
    titleHi: "महिलाओं के स्वास्थ्य के लिए शतावरी: हार्मोनल संतुलन और प्रजनन कल्याण",
    excerpt: "Complete guide to Shatavari - the queen of herbs for women's health, from menstruation to menopause.",
    excerptHi: "शतावरी के लिए संपूर्ण गाइड - महिलाओं के स्वास्थ्य के लिए जड़ी-बूटियों की रानी, मासिक धर्म से रजोनिवृत्ति तक।",
    content: `
      <h2>What is Shatavari?</h2>
      <p>Shatavari (Asparagus racemosus) is known as the "Queen of Herbs" for women's health. The name means "she who possesses a hundred husbands," referring to its rejuvenating effects on the female reproductive system. It's one of the most important herbs for women in Ayurveda.</p>

      <h2>Key Benefits for Women</h2>
      
      <h3>1. Hormonal Balance</h3>
      <p>Shatavari is an adaptogen that helps regulate hormonal fluctuations throughout a woman's life. It supports healthy estrogen levels naturally.</p>

      <h3>2. Menstrual Health</h3>
      <p>Helps with:</p>
      <ul>
        <li>Irregular periods</li>
        <li>Painful menstruation</li>
        <li>PMS symptoms</li>
        <li>Heavy bleeding</li>
      </ul>

      <h3>3. Fertility Support</h3>
      <p>Nourishes the reproductive tissues and supports healthy ovulation. Often used in fertility protocols alongside other herbs.</p>

      <h3>4. Pregnancy and Postpartum</h3>
      <ul>
        <li>Supports healthy pregnancy (consult practitioner)</li>
        <li>Promotes lactation in nursing mothers</li>
        <li>Helps with postpartum recovery</li>
      </ul>

      <h3>5. Menopause Relief</h3>
      <p>Eases menopausal symptoms including:</p>
      <ul>
        <li>Hot flashes</li>
        <li>Night sweats</li>
        <li>Mood swings</li>
        <li>Vaginal dryness</li>
      </ul>

      <h2>How Shatavari Works</h2>
      <p>Shatavari contains steroidal saponins that mimic estrogen, helping to balance hormones naturally. It also nourishes and tones the reproductive organs.</p>

      <h2>How to Take Shatavari</h2>
      <ul>
        <li><strong>Powder:</strong> 1/2-1 teaspoon with warm milk and ghee</li>
        <li><strong>Tablets:</strong> 500mg-1000mg twice daily</li>
        <li><strong>Shatavari Kalpa:</strong> Traditional preparation with sugar and spices</li>
        <li><strong>Shatavari Ghrita:</strong> Medicated ghee for enhanced benefits</li>
      </ul>

      <h2>When to Take</h2>
      <ul>
        <li>Morning and evening with warm milk</li>
        <li>Best taken with fat for absorption (ghee or coconut oil)</li>
        <li>For lactation: Start immediately postpartum</li>
      </ul>

      <h2>Complementary Herbs</h2>
      <ul>
        <li><strong>Ashwagandha:</strong> For stress and energy</li>
        <li><strong>Lodhra:</strong> For menstrual disorders</li>
        <li><strong>Ashoka:</strong> For uterine health</li>
        <li><strong>Brahmi:</strong> For mental clarity</li>
      </ul>

      <h2>Precautions</h2>
      <ul>
        <li>Avoid in estrogen-sensitive conditions without guidance</li>
        <li>May interact with some medications</li>
        <li>Consult practitioner during pregnancy</li>
        <li>Those with kidney issues should use cautiously</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Shatavari is a powerful ally for women's health at every stage of life. Its nourishing, cooling properties make it ideal for the female constitution. Work with a qualified practitioner to get the most benefit from this remarkable herb.</p>
    `,
    contentHi: `
      <h2>शतावरी क्या है?</h2>
      <p>शतावरी महिलाओं के स्वास्थ्य के लिए "जड़ी-बूटियों की रानी" के रूप में जानी जाती है। इसका नाम "सौ पतियों वाली" का अर्थ रखता है, जो महिला प्रजनन प्रणाली पर इसके कायाकल्प प्रभावों को दर्शाता है।</p>

      <h2>महिलाओं के लिए प्रमुख लाभ</h2>
      <h3>1. हार्मोनल संतुलन</h3>
      <p>शतावरी एक एडाप्टोजेन है जो एक महिला के जीवन भर हार्मोनल उतार-चढ़ाव को नियंत्रित करने में मदद करती है।</p>

      <h3>2. मासिक धर्म स्वास्थ्य</h3>
      <p>इसमें मदद करती है:</p>
      <ul>
        <li>अनियमित माहवारी</li>
        <li>दर्दनाक मासिक धर्म</li>
      </ul>

      <h2>निष्कर्ष</h2>
      <p>शतावरी जीवन के हर चरण में महिलाओं के स्वास्थ्य के लिए एक शक्तिशाली सहयोगी है।</p>
    `,
    category: "women",
    author: "Vaidya Priya Patel",
    authorHi: "वैद्य प्रिया पटेल",
    date: "2023-12-05",
    readTime: "12 min",
    readTimeHi: "12 मिनट",
    image: "/placeholder.svg",
    tags: ["shatavari", "women-health", "hormones", "menopause"],
    tagsHi: ["शतावरी", "महिला-स्वास्थ्य", "हार्मोन", "रजोनिवृत्ति"],
    featured: true
  }
];

export const categories = [
  { id: "all", label: "All Posts", labelHi: "सभी पोस्ट" },
  { id: "fundamentals", label: "Fundamentals", labelHi: "मूल बातें" },
  { id: "herbs", label: "Herbs & Plants", labelHi: "जड़ी-बूटियां" },
  { id: "remedies", label: "Home Remedies", labelHi: "घरेलू उपचार" },
  { id: "lifestyle", label: "Lifestyle", labelHi: "जीवनशैली" },
  { id: "diet", label: "Diet & Nutrition", labelHi: "आहार" },
  { id: "diseases", label: "Disease Management", labelHi: "रोग प्रबंधन" },
  { id: "women", label: "Women's Health", labelHi: "महिला स्वास्थ्य" },
  { id: "children", label: "Children's Health", labelHi: "बाल स्वास्थ्य" },
  { id: "therapies", label: "Therapies", labelHi: "चिकित्सा" },
  { id: "beauty", label: "Beauty & Skin", labelHi: "सौंदर्य" }
];
