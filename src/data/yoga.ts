import suryaNamaskarImg from "@/assets/yoga/surya-namaskar.jpg";
import bhujangasanaImg from "@/assets/yoga/bhujangasana.jpg";
import padmasanaImg from "@/assets/yoga/padmasana.jpg";
import vrikshasanaImg from "@/assets/yoga/vrikshasana.jpg";
import dhanurasanaImg from "@/assets/yoga/dhanurasana.jpg";
import sarvangasanaImg from "@/assets/yoga/sarvangasana.jpg";
import shavasanaImg from "@/assets/yoga/shavasana.jpg";
import kapalbhatiImg from "@/assets/yoga/kapalbhati.jpg";
import anulomVilomImg from "@/assets/yoga/anulom-vilom.jpg";
import vajrasanaImg from "@/assets/yoga/vajrasana.jpg";
import trikonasanaImg from "@/assets/yoga/trikonasana.jpg";
import halasanaImg from "@/assets/yoga/halasana.jpg";

export interface YogaStep {
  step: number;
  instruction: string;
  instruction_hi: string;
  duration?: string;
  image?: string;
}

export interface YogaAsana {
  id: string;
  name: string;
  name_hi: string;
  sanskrit_name: string;
  category: string;
  category_hi: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  difficulty_hi: string;
  duration: string;
  duration_hi: string;
  description: string;
  description_hi: string;
  benefits: string[];
  benefits_hi: string[];
  precautions: string[];
  precautions_hi: string[];
  steps: YogaStep[];
  diseases_helped: string[];
  dosha_balance: string[];
  image: string;
}

export const yogaAsanas: YogaAsana[] = [
  {
    id: "surya-namaskar",
    name: "Sun Salutation",
    name_hi: "सूर्य नमस्कार",
    sanskrit_name: "Surya Namaskar",
    category: "Full Body",
    category_hi: "पूर्ण शरीर",
    difficulty: "Beginner",
    difficulty_hi: "आसान",
    duration: "15-20 minutes",
    duration_hi: "15-20 मिनट",
    description: "Surya Namaskar is a sequence of 12 powerful yoga poses that provide a complete body workout. It is best performed at sunrise facing the sun.",
    description_hi: "सूर्य नमस्कार 12 शक्तिशाली योग आसनों का एक क्रम है जो संपूर्ण शारीरिक व्यायाम प्रदान करता है। इसे सूर्योदय के समय सूर्य की ओर मुख करके करना सर्वोत्तम है।",
    benefits: [
      "Improves blood circulation throughout the body",
      "Strengthens the heart and improves cardiovascular health",
      "Stimulates the nervous system and enhances mental clarity",
      "Tones muscles and improves flexibility",
      "Aids in weight loss and boosts metabolism",
      "Regulates menstrual cycles in women",
      "Improves digestion and eliminates toxins",
      "Reduces stress and anxiety"
    ],
    benefits_hi: [
      "पूरे शरीर में रक्त संचार में सुधार करता है",
      "हृदय को मजबूत करता है और हृदय स्वास्थ्य में सुधार करता है",
      "तंत्रिका तंत्र को उत्तेजित करता है और मानसिक स्पष्टता बढ़ाता है",
      "मांसपेशियों को टोन करता है और लचीलापन बढ़ाता है",
      "वजन घटाने में सहायता करता है और चयापचय को बढ़ाता है",
      "महिलाओं में मासिक धर्म चक्र को नियंत्रित करता है",
      "पाचन में सुधार करता है और विषाक्त पदार्थों को बाहर निकालता है",
      "तनाव और चिंता को कम करता है"
    ],
    precautions: [
      "Avoid during pregnancy after first trimester",
      "People with high blood pressure should practice slowly",
      "Those with back injuries should consult a doctor",
      "Avoid if you have hernia or intestinal tuberculosis"
    ],
    precautions_hi: [
      "पहली तिमाही के बाद गर्भावस्था के दौरान बचें",
      "उच्च रक्तचाप वाले लोगों को धीरे-धीरे अभ्यास करना चाहिए",
      "पीठ की चोट वाले लोगों को डॉक्टर से परामर्श लेना चाहिए",
      "हर्निया या आंतों के क्षय रोग में बचें"
    ],
    steps: [
      { step: 1, instruction: "Pranamasana (Prayer Pose): Stand at the edge of your mat, keep feet together, expand chest, and relax shoulders. Bring palms together in prayer position.", instruction_hi: "प्रणामासन: चटाई के किनारे खड़े हों, पैर एक साथ रखें, छाती फैलाएं और कंधों को आराम दें। हथेलियों को प्रार्थना की स्थिति में लाएं।", duration: "5 seconds" },
      { step: 2, instruction: "Hastauttanasana (Raised Arms Pose): Breathe in, lift arms up and back. Stretch the whole body from heels to fingertips.", instruction_hi: "हस्तउत्तानासन: सांस लें, बाहों को ऊपर और पीछे उठाएं। पूरे शरीर को एड़ी से उंगलियों तक खींचें।", duration: "5 seconds" },
      { step: 3, instruction: "Hastapadasana (Hand to Foot Pose): Breathe out, bend forward from waist. Keep spine straight and bring hands down to floor beside feet.", instruction_hi: "हस्तपादासन: सांस छोड़ें, कमर से आगे झुकें। रीढ़ सीधी रखें और हाथों को पैरों के पास फर्श पर लाएं।", duration: "5 seconds" },
      { step: 4, instruction: "Ashwa Sanchalanasana (Equestrian Pose): Breathe in, push right leg back. Right knee touches floor, look up.", instruction_hi: "अश्व संचालनासन: सांस लें, दाहिने पैर को पीछे धकेलें। दायां घुटना फर्श को छूता है, ऊपर देखें।", duration: "5 seconds" },
      { step: 5, instruction: "Dandasana (Stick Pose): Breathe in, take left leg back. Bring body in straight line, keep arms perpendicular to floor.", instruction_hi: "दंडासन: सांस लें, बाएं पैर को पीछे ले जाएं। शरीर को सीधी रेखा में लाएं, बाहों को फर्श के लंबवत रखें।", duration: "5 seconds" },
      { step: 6, instruction: "Ashtanga Namaskara (Eight Limbed Pose): Breathe out, gently bring knees, chest and chin to floor. Eight parts touch floor.", instruction_hi: "अष्टांग नमस्कार: सांस छोड़ें, धीरे से घुटने, छाती और ठोड़ी को फर्श पर लाएं। आठ अंग फर्श को छूते हैं।", duration: "5 seconds" },
      { step: 7, instruction: "Bhujangasana (Cobra Pose): Slide forward and raise chest. Keep elbows bent, shoulders away from ears. Look up.", instruction_hi: "भुजंगासन: आगे खिसकें और छाती उठाएं। कोहनी मुड़ी रखें, कंधे कानों से दूर। ऊपर देखें।", duration: "5 seconds" },
      { step: 8, instruction: "Adho Mukha Svanasana (Downward Dog): Breathe out, lift hips and tailbone up. Chest moves towards thighs.", instruction_hi: "अधो मुख श्वानासन: सांस छोड़ें, कूल्हों और पूंछ की हड्डी को ऊपर उठाएं। छाती जांघों की ओर चलती है।", duration: "5 seconds" },
      { step: 9, instruction: "Ashwa Sanchalanasana (Equestrian Pose): Breathe in, bring right foot forward between hands. Left knee goes down, look up.", instruction_hi: "अश्व संचालनासन: सांस लें, दाहिने पैर को हाथों के बीच आगे लाएं। बायां घुटना नीचे जाता है, ऊपर देखें।", duration: "5 seconds" },
      { step: 10, instruction: "Hastapadasana (Hand to Foot Pose): Breathe out, bring left foot forward. Keep palms on floor, bend forward from waist.", instruction_hi: "हस्तपादासन: सांस छोड़ें, बाएं पैर को आगे लाएं। हथेलियों को फर्श पर रखें, कमर से आगे झुकें।", duration: "5 seconds" },
      { step: 11, instruction: "Hastauttanasana (Raised Arms Pose): Breathe in, roll spine up. Raise hands up and bend back slightly.", instruction_hi: "हस्तउत्तानासन: सांस लें, रीढ़ को ऊपर घुमाएं। हाथ ऊपर उठाएं और थोड़ा पीछे झुकें।", duration: "5 seconds" },
      { step: 12, instruction: "Tadasana (Mountain Pose): Breathe out, straighten body. Bring arms down. Relax and observe sensations.", instruction_hi: "ताड़ासन: सांस छोड़ें, शरीर सीधा करें। बाहों को नीचे लाएं। आराम करें और संवेदनाओं को महसूस करें।", duration: "5 seconds" }
    ],
    diseases_helped: ["obesity", "diabetes", "digestive-disorders", "stress", "anxiety", "depression", "back-pain"],
    dosha_balance: ["Vata", "Pitta", "Kapha"],
    image: suryaNamaskarImg
  },
  {
    id: "bhujangasana",
    name: "Cobra Pose",
    name_hi: "भुजंगासन",
    sanskrit_name: "Bhujangasana",
    category: "Back Bend",
    category_hi: "पीठ मोड़",
    difficulty: "Beginner",
    difficulty_hi: "आसान",
    duration: "5-10 minutes",
    duration_hi: "5-10 मिनट",
    description: "Bhujangasana resembles a serpent with raised hood. This pose strengthens the spine and opens the chest and heart.",
    description_hi: "भुजंगासन उठे हुए फन वाले सर्प जैसा दिखता है। यह आसन रीढ़ को मजबूत करता है और छाती और हृदय को खोलता है।",
    benefits: [
      "Strengthens the spine and back muscles",
      "Opens up the chest and shoulders",
      "Improves flexibility of the spine",
      "Stimulates abdominal organs and improves digestion",
      "Helps relieve stress and fatigue",
      "Firms and tones the buttocks",
      "Stimulates heart and lungs",
      "Therapeutic for asthma patients"
    ],
    benefits_hi: [
      "रीढ़ और पीठ की मांसपेशियों को मजबूत करता है",
      "छाती और कंधों को खोलता है",
      "रीढ़ के लचीलेपन में सुधार करता है",
      "पेट के अंगों को उत्तेजित करता है और पाचन में सुधार करता है",
      "तनाव और थकान से राहत दिलाता है",
      "नितंबों को मजबूत और टोन करता है",
      "हृदय और फेफड़ों को उत्तेजित करता है",
      "अस्थमा रोगियों के लिए चिकित्सीय"
    ],
    precautions: [
      "Avoid if you have carpal tunnel syndrome",
      "Not recommended during pregnancy",
      "Avoid if you have back injury or headache",
      "People with peptic ulcer should avoid this pose"
    ],
    precautions_hi: [
      "कार्पल टनल सिंड्रोम में बचें",
      "गर्भावस्था के दौरान अनुशंसित नहीं",
      "पीठ की चोट या सिरदर्द में बचें",
      "पेप्टिक अल्सर वाले लोगों को इस आसन से बचना चाहिए"
    ],
    steps: [
      { step: 1, instruction: "Lie flat on your stomach with legs straight and feet together. Place forehead on the floor.", instruction_hi: "पेट के बल सीधे लेट जाएं, पैर सीधे और एक साथ। माथा फर्श पर रखें।", duration: "5 seconds" },
      { step: 2, instruction: "Place palms under shoulders, keeping elbows close to body. Fingers should point forward.", instruction_hi: "हथेलियों को कंधों के नीचे रखें, कोहनी को शरीर के करीब रखें। उंगलियां आगे की ओर इशारा करें।", duration: "5 seconds" },
      { step: 3, instruction: "Breathe in deeply and slowly lift your head, chest, and abdomen. Keep navel on the floor.", instruction_hi: "गहरी सांस लें और धीरे-धीरे सिर, छाती और पेट उठाएं। नाभि फर्श पर रखें।", duration: "5 seconds" },
      { step: 4, instruction: "Pull your torso back and off the floor with support of your hands. Keep shoulders relaxed.", instruction_hi: "अपने हाथों के सहारे धड़ को पीछे और फर्श से ऊपर खींचें। कंधे आराम से रखें।", duration: "10 seconds" },
      { step: 5, instruction: "Look slightly upward. Ensure equal weight on both palms. Keep breathing normally.", instruction_hi: "थोड़ा ऊपर देखें। दोनों हथेलियों पर समान वजन रखें। सामान्य रूप से सांस लेते रहें।", duration: "15-30 seconds" },
      { step: 6, instruction: "Exhale slowly and gently lower your abdomen, chest, and head back to the floor.", instruction_hi: "धीरे-धीरे सांस छोड़ें और धीरे से पेट, छाती और सिर को वापस फर्श पर लाएं।", duration: "5 seconds" }
    ],
    diseases_helped: ["asthma", "back-pain", "sciatica", "digestive-disorders", "fatigue"],
    dosha_balance: ["Kapha", "Vata"],
    image: bhujangasanaImg
  },
  {
    id: "padmasana",
    name: "Lotus Pose",
    name_hi: "पद्मासन",
    sanskrit_name: "Padmasana",
    category: "Meditation",
    category_hi: "ध्यान",
    difficulty: "Intermediate",
    difficulty_hi: "मध्यम",
    duration: "10-30 minutes",
    duration_hi: "10-30 मिनट",
    description: "Padmasana is the ultimate meditation pose. The crossed legs and straight spine create a stable foundation for extended meditation.",
    description_hi: "पद्मासन परम ध्यान मुद्रा है। क्रॉस किए हुए पैर और सीधी रीढ़ विस्तारित ध्यान के लिए एक स्थिर आधार बनाते हैं।",
    benefits: [
      "Calms the mind and reduces stress",
      "Improves concentration and focus",
      "Keeps joints and ligaments flexible",
      "Stimulates the pelvis, spine, abdomen, and bladder",
      "Helps restore energy levels",
      "Eases menstrual discomfort",
      "Awakens kundalini energy",
      "Reduces muscular tension and blood pressure"
    ],
    benefits_hi: [
      "मन को शांत करता है और तनाव कम करता है",
      "एकाग्रता और ध्यान में सुधार करता है",
      "जोड़ों और स्नायुबंधन को लचीला रखता है",
      "श्रोणि, रीढ़, पेट और मूत्राशय को उत्तेजित करता है",
      "ऊर्जा स्तर बहाल करने में मदद करता है",
      "मासिक धर्म की परेशानी कम करता है",
      "कुंडलिनी ऊर्जा जागृत करता है",
      "मांसपेशियों के तनाव और रक्तचाप को कम करता है"
    ],
    precautions: [
      "Avoid if you have knee or ankle injury",
      "Not recommended for sciatica patients",
      "Those with weak or injured sacral area should avoid",
      "Beginners should practice half lotus first"
    ],
    precautions_hi: [
      "घुटने या टखने की चोट में बचें",
      "साइटिका रोगियों के लिए अनुशंसित नहीं",
      "कमजोर या घायल त्रिक क्षेत्र वाले बचें",
      "शुरुआती पहले अर्ध पद्मासन का अभ्यास करें"
    ],
    steps: [
      { step: 1, instruction: "Sit on the floor with legs stretched out. Keep spine erect.", instruction_hi: "फर्श पर पैर फैलाकर बैठें। रीढ़ सीधी रखें।", duration: "5 seconds" },
      { step: 2, instruction: "Bend the right knee and place it on the left thigh. Sole should face upward, heel close to abdomen.", instruction_hi: "दाहिने घुटने को मोड़ें और बाईं जांघ पर रखें। तलवा ऊपर की ओर, एड़ी पेट के पास।", duration: "10 seconds" },
      { step: 3, instruction: "Repeat the same step with the left leg on right thigh.", instruction_hi: "बाएं पैर के साथ भी यही करें, दाहिनी जांघ पर रखें।", duration: "10 seconds" },
      { step: 4, instruction: "Place hands on knees in chin mudra or gyan mudra. Keep head straight and spine erect.", instruction_hi: "हाथों को घुटनों पर चिन मुद्रा या ज्ञान मुद्रा में रखें। सिर सीधा और रीढ़ सीधी रखें।", duration: "5 seconds" },
      { step: 5, instruction: "Breathe deeply and rhythmically. Hold the position as long as comfortable.", instruction_hi: "गहरी और लयबद्ध सांस लें। जब तक आरामदायक हो, स्थिति बनाए रखें।", duration: "5-30 minutes" },
      { step: 6, instruction: "To release, slowly unfold legs and return to starting position. Repeat with opposite leg on top.", instruction_hi: "छोड़ने के लिए, धीरे-धीरे पैर खोलें। विपरीत पैर ऊपर रखकर दोहराएं।", duration: "5 seconds" }
    ],
    diseases_helped: ["stress", "anxiety", "insomnia", "hypertension", "menstrual-disorders"],
    dosha_balance: ["Vata", "Pitta"],
    image: padmasanaImg
  },
  {
    id: "vrikshasana",
    name: "Tree Pose",
    name_hi: "वृक्षासन",
    sanskrit_name: "Vrikshasana",
    category: "Balance",
    category_hi: "संतुलन",
    difficulty: "Beginner",
    difficulty_hi: "आसान",
    duration: "5-10 minutes",
    duration_hi: "5-10 मिनट",
    description: "Vrikshasana replicates the graceful, steady stance of a tree. It improves balance and stability in the legs.",
    description_hi: "वृक्षासन एक पेड़ की सुंदर, स्थिर मुद्रा की नकल करता है। यह पैरों में संतुलन और स्थिरता में सुधार करता है।",
    benefits: [
      "Strengthens the legs and improves balance",
      "Opens the hips and stretches inner thighs",
      "Improves concentration and focus",
      "Strengthens ligaments and tendons of feet",
      "Builds core strength and stability",
      "Reduces flat feet",
      "Calms and relaxes the mind",
      "Improves neuromuscular coordination"
    ],
    benefits_hi: [
      "पैरों को मजबूत करता है और संतुलन में सुधार करता है",
      "कूल्हों को खोलता है और भीतरी जांघों को खींचता है",
      "एकाग्रता और ध्यान में सुधार करता है",
      "पैरों के स्नायुबंधन और कंडराओं को मजबूत करता है",
      "कोर शक्ति और स्थिरता बनाता है",
      "फ्लैट फीट कम करता है",
      "मन को शांत और आराम देता है",
      "न्यूरोमस्कुलर समन्वय में सुधार करता है"
    ],
    precautions: [
      "Avoid if you have vertigo or migraine",
      "Those with low blood pressure should be careful",
      "Not recommended for insomnia patients",
      "Avoid if you have high blood pressure (don't raise arms)"
    ],
    precautions_hi: [
      "चक्कर या माइग्रेन में बचें",
      "कम रक्तचाप वालों को सावधान रहना चाहिए",
      "अनिद्रा रोगियों के लिए अनुशंसित नहीं",
      "उच्च रक्तचाप में बचें (बाहें न उठाएं)"
    ],
    steps: [
      { step: 1, instruction: "Stand straight with arms at sides. Find a focal point in front of you.", instruction_hi: "बाहों को बगल में रखकर सीधे खड़े हों। अपने सामने एक केंद्र बिंदु खोजें।", duration: "5 seconds" },
      { step: 2, instruction: "Shift weight to left foot. Bend right knee and place right foot on inner left thigh.", instruction_hi: "वजन बाएं पैर पर स्थानांतरित करें। दाहिना घुटना मोड़ें और दाहिना पैर बाईं जांघ के अंदर रखें।", duration: "10 seconds" },
      { step: 3, instruction: "Press right foot into thigh and thigh into foot. Find balance.", instruction_hi: "दाहिने पैर को जांघ में और जांघ को पैर में दबाएं। संतुलन खोजें।", duration: "10 seconds" },
      { step: 4, instruction: "Once balanced, slowly raise arms overhead. Join palms in namaste or keep arms parallel.", instruction_hi: "संतुलन होने पर, धीरे-धीरे बाहों को ऊपर उठाएं। नमस्ते में जोड़ें या समानांतर रखें।", duration: "10 seconds" },
      { step: 5, instruction: "Hold the pose for 30-60 seconds. Breathe deeply and maintain focus.", instruction_hi: "30-60 सेकंड तक मुद्रा बनाए रखें। गहरी सांस लें और ध्यान बनाए रखें।", duration: "30-60 seconds" },
      { step: 6, instruction: "Lower arms and right foot slowly. Repeat on the other side.", instruction_hi: "बाहों और दाहिने पैर को धीरे-धीरे नीचे लाएं। दूसरी तरफ दोहराएं।", duration: "5 seconds" }
    ],
    diseases_helped: ["flat-feet", "sciatica", "leg-weakness", "concentration-issues"],
    dosha_balance: ["Vata", "Kapha"],
    image: vrikshasanaImg
  },
  {
    id: "dhanurasana",
    name: "Bow Pose",
    name_hi: "धनुरासन",
    sanskrit_name: "Dhanurasana",
    category: "Back Bend",
    category_hi: "पीठ मोड़",
    difficulty: "Intermediate",
    difficulty_hi: "मध्यम",
    duration: "5-10 minutes",
    duration_hi: "5-10 मिनट",
    description: "Dhanurasana forms the shape of a bow. This powerful pose stretches the entire front body and strengthens the back.",
    description_hi: "धनुरासन धनुष का आकार बनाता है। यह शक्तिशाली आसन पूरे शरीर के सामने को खींचता है और पीठ को मजबूत करता है।",
    benefits: [
      "Strengthens back muscles and spine",
      "Stretches the entire front of the body",
      "Improves posture and spinal flexibility",
      "Stimulates reproductive organs",
      "Opens chest, neck, and shoulders",
      "Tones leg and arm muscles",
      "Helps with respiratory ailments",
      "Reduces belly fat and improves digestion"
    ],
    benefits_hi: [
      "पीठ की मांसपेशियों और रीढ़ को मजबूत करता है",
      "शरीर के पूरे सामने के हिस्से को खींचता है",
      "आसन और रीढ़ के लचीलेपन में सुधार करता है",
      "प्रजनन अंगों को उत्तेजित करता है",
      "छाती, गर्दन और कंधों को खोलता है",
      "पैर और बाहों की मांसपेशियों को टोन करता है",
      "श्वसन संबंधी बीमारियों में मदद करता है",
      "पेट की चर्बी कम करता है और पाचन में सुधार करता है"
    ],
    precautions: [
      "Avoid during pregnancy",
      "Not recommended for hernia or appendicitis",
      "Those with high or low blood pressure should avoid",
      "Avoid if you have neck injury or migraine"
    ],
    precautions_hi: [
      "गर्भावस्था के दौरान बचें",
      "हर्निया या अपेंडिसाइटिस में अनुशंसित नहीं",
      "उच्च या निम्न रक्तचाप वालों को बचना चाहिए",
      "गर्दन की चोट या माइग्रेन में बचें"
    ],
    steps: [
      { step: 1, instruction: "Lie on your stomach with feet hip-width apart. Place arms alongside body.", instruction_hi: "पेट के बल लेटें, पैर कूल्हे की चौड़ाई पर। बाहों को शरीर के साथ रखें।", duration: "5 seconds" },
      { step: 2, instruction: "Fold knees and bring heels close to buttocks. Hold ankles with hands.", instruction_hi: "घुटने मोड़ें और एड़ियों को नितंबों के पास लाएं। हाथों से टखने पकड़ें।", duration: "10 seconds" },
      { step: 3, instruction: "Inhale deeply and lift chest off the floor. Pull legs up and back simultaneously.", instruction_hi: "गहरी सांस लें और छाती को फर्श से उठाएं। पैरों को एक साथ ऊपर और पीछे खींचें।", duration: "5 seconds" },
      { step: 4, instruction: "Look straight ahead. Body now resembles a bow. Only abdomen touches floor.", instruction_hi: "सीधे आगे देखें। शरीर अब धनुष जैसा दिखता है। केवल पेट फर्श को छूता है।", duration: "10 seconds" },
      { step: 5, instruction: "Hold the pose for 15-30 seconds. Continue breathing normally.", instruction_hi: "15-30 सेकंड तक मुद्रा बनाए रखें। सामान्य रूप से सांस लेते रहें।", duration: "15-30 seconds" },
      { step: 6, instruction: "Exhale and slowly release. Lower legs and chest to floor. Rest.", instruction_hi: "सांस छोड़ें और धीरे-धीरे छोड़ें। पैर और छाती को फर्श पर लाएं। आराम करें।", duration: "5 seconds" }
    ],
    diseases_helped: ["diabetes", "constipation", "back-pain", "obesity", "menstrual-disorders"],
    dosha_balance: ["Kapha", "Vata"],
    image: dhanurasanaImg
  },
  {
    id: "sarvangasana",
    name: "Shoulder Stand",
    name_hi: "सर्वांगासन",
    sanskrit_name: "Sarvangasana",
    category: "Inversion",
    category_hi: "उलटा",
    difficulty: "Intermediate",
    difficulty_hi: "मध्यम",
    duration: "5-15 minutes",
    duration_hi: "5-15 मिनट",
    description: "Known as the 'Queen of Asanas', Sarvangasana benefits the entire body. It reverses blood flow, stimulating thyroid and improving overall health.",
    description_hi: "आसनों की रानी के रूप में जाना जाता है, सर्वांगासन पूरे शरीर को लाभ पहुंचाता है। यह रक्त प्रवाह को उलट देता है, थायरॉयड को उत्तेजित करता है।",
    benefits: [
      "Stimulates thyroid and parathyroid glands",
      "Improves blood circulation to brain",
      "Relieves stress and mild depression",
      "Calms the mind and helps with insomnia",
      "Strengthens the heart and lungs",
      "Improves digestion and appetite",
      "Tones legs and buttocks",
      "Reduces symptoms of menopause"
    ],
    benefits_hi: [
      "थायरॉयड और पैराथायरॉयड ग्रंथियों को उत्तेजित करता है",
      "मस्तिष्क में रक्त संचार में सुधार करता है",
      "तनाव और हल्के अवसाद से राहत दिलाता है",
      "मन को शांत करता है और अनिद्रा में मदद करता है",
      "हृदय और फेफड़ों को मजबूत करता है",
      "पाचन और भूख में सुधार करता है",
      "पैरों और नितंबों को टोन करता है",
      "रजोनिवृत्ति के लक्षणों को कम करता है"
    ],
    precautions: [
      "Avoid during menstruation",
      "Not recommended for high blood pressure",
      "Avoid if you have neck or shoulder injury",
      "Those with glaucoma should not practice"
    ],
    precautions_hi: [
      "मासिक धर्म के दौरान बचें",
      "उच्च रक्तचाप के लिए अनुशंसित नहीं",
      "गर्दन या कंधे की चोट में बचें",
      "ग्लूकोमा वालों को अभ्यास नहीं करना चाहिए"
    ],
    steps: [
      { step: 1, instruction: "Lie flat on your back. Keep arms alongside body, palms facing down.", instruction_hi: "पीठ के बल सीधे लेट जाएं। बाहों को शरीर के साथ रखें, हथेलियां नीचे।", duration: "5 seconds" },
      { step: 2, instruction: "Inhale and lift legs to 90 degrees using abdominal muscles.", instruction_hi: "सांस लें और पेट की मांसपेशियों का उपयोग करके पैरों को 90 डिग्री तक उठाएं।", duration: "5 seconds" },
      { step: 3, instruction: "Continue lifting by raising hips off floor. Support back with hands.", instruction_hi: "कूल्हों को फर्श से उठाकर जारी रखें। हाथों से पीठ को सहारा दें।", duration: "10 seconds" },
      { step: 4, instruction: "Walk hands down back towards shoulder blades. Straighten spine and legs.", instruction_hi: "हाथों को पीठ पर कंधे के ब्लेड की ओर चलाएं। रीढ़ और पैर सीधे करें।", duration: "10 seconds" },
      { step: 5, instruction: "Hold position with body in straight line from shoulders to toes. Breathe deeply.", instruction_hi: "कंधों से पैर की उंगलियों तक सीधी रेखा में शरीर के साथ स्थिति बनाए रखें। गहरी सांस लें।", duration: "30-60 seconds" },
      { step: 6, instruction: "To release, lower legs towards head, then roll down slowly. Rest in Shavasana.", instruction_hi: "छोड़ने के लिए, पैरों को सिर की ओर नीचे करें, फिर धीरे-धीरे रोल करें। शवासन में आराम करें।", duration: "5 seconds" }
    ],
    diseases_helped: ["thyroid", "varicose-veins", "insomnia", "stress", "digestive-disorders"],
    dosha_balance: ["Pitta", "Kapha"],
    image: sarvangasanaImg
  },
  {
    id: "shavasana",
    name: "Corpse Pose",
    name_hi: "शवासन",
    sanskrit_name: "Shavasana",
    category: "Relaxation",
    category_hi: "विश्राम",
    difficulty: "Beginner",
    difficulty_hi: "आसान",
    duration: "10-20 minutes",
    duration_hi: "10-20 मिनट",
    description: "Shavasana is the final relaxation pose practiced at the end of yoga sessions. It allows the body to absorb the benefits of practice.",
    description_hi: "शवासन योग सत्र के अंत में अभ्यास की जाने वाली अंतिम विश्राम मुद्रा है। यह शरीर को अभ्यास के लाभों को अवशोषित करने देता है।",
    benefits: [
      "Deeply relaxes the entire body",
      "Reduces blood pressure and heart rate",
      "Decreases muscle tension",
      "Reduces fatigue, insomnia, and headache",
      "Calms the nervous system",
      "Reduces stress and anxiety",
      "Improves concentration and mental clarity",
      "Helps repair cells and tissues"
    ],
    benefits_hi: [
      "पूरे शरीर को गहराई से आराम देता है",
      "रक्तचाप और हृदय गति को कम करता है",
      "मांसपेशियों के तनाव को कम करता है",
      "थकान, अनिद्रा और सिरदर्द को कम करता है",
      "तंत्रिका तंत्र को शांत करता है",
      "तनाव और चिंता को कम करता है",
      "एकाग्रता और मानसिक स्पष्टता में सुधार करता है",
      "कोशिकाओं और ऊतकों की मरम्मत में मदद करता है"
    ],
    precautions: [
      "Avoid in extreme cold without blanket",
      "Not recommended immediately after heavy meal",
      "Those with low back pain may use bolster under knees",
      "Pregnant women should lie on their side"
    ],
    precautions_hi: [
      "बिना कंबल के अत्यधिक ठंड में बचें",
      "भारी भोजन के तुरंत बाद अनुशंसित नहीं",
      "पीठ के निचले हिस्से में दर्द वाले घुटनों के नीचे बोल्स्टर लगा सकते हैं",
      "गर्भवती महिलाएं अपनी तरफ लेटें"
    ],
    steps: [
      { step: 1, instruction: "Lie flat on your back on the yoga mat. Separate legs comfortably.", instruction_hi: "योग चटाई पर पीठ के बल सीधे लेट जाएं। पैरों को आराम से अलग करें।", duration: "5 seconds" },
      { step: 2, instruction: "Place arms alongside body with palms facing upward. Close eyes.", instruction_hi: "बाहों को शरीर के साथ रखें, हथेलियां ऊपर की ओर। आंखें बंद करें।", duration: "5 seconds" },
      { step: 3, instruction: "Relax head in neutral position. Let feet fall open naturally.", instruction_hi: "सिर को तटस्थ स्थिति में आराम दें। पैरों को स्वाभाविक रूप से खुलने दें।", duration: "5 seconds" },
      { step: 4, instruction: "Take slow, deep breaths. With each exhale, release tension from every body part.", instruction_hi: "धीमी, गहरी सांस लें। प्रत्येक सांस छोड़ने के साथ, शरीर के हर हिस्से से तनाव छोड़ें।", duration: "30 seconds" },
      { step: 5, instruction: "Mentally scan your body from toes to head. Consciously relax each area.", instruction_hi: "पैर की उंगलियों से सिर तक मानसिक रूप से शरीर को स्कैन करें। प्रत्येक क्षेत्र को सचेत रूप से आराम दें।", duration: "5-15 minutes" },
      { step: 6, instruction: "To come out, wiggle fingers and toes. Roll to right side, then slowly sit up.", instruction_hi: "बाहर आने के लिए, उंगलियों और पैर की उंगलियों को हिलाएं। दाईं ओर करवट लें, फिर धीरे-धीरे बैठें।", duration: "30 seconds" }
    ],
    diseases_helped: ["stress", "anxiety", "insomnia", "hypertension", "fatigue", "depression"],
    dosha_balance: ["Vata", "Pitta", "Kapha"],
    image: shavasanaImg
  },
  {
    id: "kapalbhati",
    name: "Skull Shining Breath",
    name_hi: "कपालभाति",
    sanskrit_name: "Kapalbhati Pranayama",
    category: "Breathing",
    category_hi: "श्वास",
    difficulty: "Beginner",
    difficulty_hi: "आसान",
    duration: "10-15 minutes",
    duration_hi: "10-15 मिनट",
    description: "Kapalbhati is a powerful breathing technique that cleanses the respiratory system and energizes the body and mind.",
    description_hi: "कपालभाति एक शक्तिशाली श्वास तकनीक है जो श्वसन तंत्र को शुद्ध करती है और शरीर और मन को ऊर्जावान बनाती है।",
    benefits: [
      "Cleanses lungs and respiratory system",
      "Boosts oxygen supply to all cells",
      "Improves digestive system function",
      "Helps reduce belly fat",
      "Clears sinuses and respiratory passages",
      "Increases metabolic rate",
      "Improves concentration and memory",
      "Creates sense of exhilaration"
    ],
    benefits_hi: [
      "फेफड़ों और श्वसन तंत्र को साफ करता है",
      "सभी कोशिकाओं में ऑक्सीजन की आपूर्ति बढ़ाता है",
      "पाचन तंत्र के कार्य में सुधार करता है",
      "पेट की चर्बी कम करने में मदद करता है",
      "साइनस और श्वसन मार्ग साफ करता है",
      "चयापचय दर बढ़ाता है",
      "एकाग्रता और स्मृति में सुधार करता है",
      "उत्साह की भावना पैदा करता है"
    ],
    precautions: [
      "Avoid during pregnancy",
      "Not recommended for high blood pressure patients",
      "Those with heart disease should avoid",
      "Avoid during menstruation"
    ],
    precautions_hi: [
      "गर्भावस्था के दौरान बचें",
      "उच्च रक्तचाप के रोगियों के लिए अनुशंसित नहीं",
      "हृदय रोग वालों को बचना चाहिए",
      "मासिक धर्म के दौरान बचें"
    ],
    steps: [
      { step: 1, instruction: "Sit comfortably in Padmasana or Sukhasana. Keep spine erect and hands on knees.", instruction_hi: "पद्मासन या सुखासन में आराम से बैठें। रीढ़ सीधी रखें और हाथ घुटनों पर।", duration: "10 seconds" },
      { step: 2, instruction: "Take a deep breath in through both nostrils.", instruction_hi: "दोनों नासिका से गहरी सांस अंदर लें।", duration: "3 seconds" },
      { step: 3, instruction: "Exhale forcefully through nostrils by contracting abdominal muscles. Pull belly inward.", instruction_hi: "पेट की मांसपेशियों को सिकोड़कर नासिका से जोर से सांस छोड़ें। पेट को अंदर खींचें।", duration: "1 second" },
      { step: 4, instruction: "Let inhalation happen automatically as you relax the abdomen. Focus only on exhalation.", instruction_hi: "पेट को आराम देते हुए सांस स्वतः अंदर जाने दें। केवल सांस छोड़ने पर ध्यान दें।", duration: "1 second" },
      { step: 5, instruction: "Continue this pattern rapidly - 1 second per breath. Start with 30 breaths per round.", instruction_hi: "इस पैटर्न को तेजी से जारी रखें - 1 सेकंड प्रति सांस। 30 सांस प्रति राउंड से शुरू करें।", duration: "30 seconds" },
      { step: 6, instruction: "After one round, take deep breaths and relax. Repeat 3-5 rounds.", instruction_hi: "एक राउंड के बाद, गहरी सांस लें और आराम करें। 3-5 राउंड दोहराएं।", duration: "30 seconds" }
    ],
    diseases_helped: ["obesity", "diabetes", "constipation", "respiratory-disorders", "sinus"],
    dosha_balance: ["Kapha"],
    image: kapalbhatiImg
  },
  {
    id: "anulom-vilom",
    name: "Alternate Nostril Breathing",
    name_hi: "अनुलोम-विलोम",
    sanskrit_name: "Anulom Vilom Pranayama",
    category: "Breathing",
    category_hi: "श्वास",
    difficulty: "Beginner",
    difficulty_hi: "आसान",
    duration: "10-15 minutes",
    duration_hi: "10-15 मिनट",
    description: "Anulom Vilom balances the left and right hemispheres of the brain, calms the mind, and purifies the nadis (energy channels).",
    description_hi: "अनुलोम विलोम मस्तिष्क के बाएं और दाएं गोलार्द्धों को संतुलित करता है, मन को शांत करता है, और नाड़ियों को शुद्ध करता है।",
    benefits: [
      "Balances both hemispheres of brain",
      "Purifies the energy channels (nadis)",
      "Reduces stress and anxiety",
      "Improves concentration and patience",
      "Enhances heart health",
      "Helps with respiratory allergies",
      "Balances the three doshas",
      "Prepares mind for meditation"
    ],
    benefits_hi: [
      "मस्तिष्क के दोनों गोलार्द्धों को संतुलित करता है",
      "ऊर्जा चैनलों (नाड़ियों) को शुद्ध करता है",
      "तनाव और चिंता को कम करता है",
      "एकाग्रता और धैर्य में सुधार करता है",
      "हृदय स्वास्थ्य को बढ़ाता है",
      "श्वसन एलर्जी में मदद करता है",
      "तीनों दोषों को संतुलित करता है",
      "ध्यान के लिए मन तैयार करता है"
    ],
    precautions: [
      "Practice on empty stomach",
      "Those with severe heart conditions should avoid",
      "Avoid if you have uncontrolled high blood pressure",
      "Don't practice during fever or cold"
    ],
    precautions_hi: [
      "खाली पेट अभ्यास करें",
      "गंभीर हृदय स्थितियों वाले बचें",
      "अनियंत्रित उच्च रक्तचाप में बचें",
      "बुखार या सर्दी के दौरान अभ्यास न करें"
    ],
    steps: [
      { step: 1, instruction: "Sit in comfortable meditation pose. Keep spine straight and shoulders relaxed.", instruction_hi: "आरामदायक ध्यान मुद्रा में बैठें। रीढ़ सीधी और कंधे आराम से रखें।", duration: "10 seconds" },
      { step: 2, instruction: "Place left hand on left knee in gyan mudra. Use right hand for nostril control.", instruction_hi: "बाएं हाथ को ज्ञान मुद्रा में बाएं घुटने पर रखें। नासिका नियंत्रण के लिए दाहिने हाथ का उपयोग करें।", duration: "5 seconds" },
      { step: 3, instruction: "Close right nostril with thumb. Inhale slowly through left nostril for 4 counts.", instruction_hi: "अंगूठे से दाहिनी नासिका बंद करें। 4 गिनती तक बाईं नासिका से धीरे-धीरे सांस लें।", duration: "4 seconds" },
      { step: 4, instruction: "Close left nostril with ring finger. Hold breath for 16 counts (optional for beginners).", instruction_hi: "अनामिका से बाईं नासिका बंद करें। 16 गिनती तक सांस रोकें (शुरुआती के लिए वैकल्पिक)।", duration: "16 seconds" },
      { step: 5, instruction: "Release right nostril and exhale slowly through right side for 8 counts.", instruction_hi: "दाहिनी नासिका छोड़ें और 8 गिनती तक दाहिनी ओर से धीरे-धीरे सांस छोड़ें।", duration: "8 seconds" },
      { step: 6, instruction: "Inhale through right nostril, hold, exhale through left. This completes one round. Do 10-15 rounds.", instruction_hi: "दाहिनी नासिका से सांस लें, रोकें, बाईं से छोड़ें। यह एक राउंड पूरा होता है। 10-15 राउंड करें।", duration: "5 minutes" }
    ],
    diseases_helped: ["stress", "anxiety", "hypertension", "respiratory-disorders", "insomnia", "migraine"],
    dosha_balance: ["Vata", "Pitta", "Kapha"],
    image: anulomVilomImg
  },
  {
    id: "vajrasana",
    name: "Thunderbolt Pose",
    name_hi: "वज्रासन",
    sanskrit_name: "Vajrasana",
    category: "Seated",
    category_hi: "बैठक",
    difficulty: "Beginner",
    difficulty_hi: "आसान",
    duration: "5-15 minutes",
    duration_hi: "5-15 मिनट",
    description: "Vajrasana is the only yoga pose that can be done immediately after eating. It strengthens the thighs and improves digestion.",
    description_hi: "वज्रासन एकमात्र योग आसन है जो खाने के तुरंत बाद किया जा सकता है। यह जांघों को मजबूत करता है और पाचन में सुधार करता है।",
    benefits: [
      "Improves digestion and prevents acidity",
      "Strengthens thigh and calf muscles",
      "Reduces lower back pain",
      "Helps with urinary disorders",
      "Improves blood circulation to pelvis",
      "Strengthens reproductive organs",
      "Calms the mind and reduces stress",
      "Good for meditation and pranayama"
    ],
    benefits_hi: [
      "पाचन में सुधार करता है और एसिडिटी रोकता है",
      "जांघ और पिंडली की मांसपेशियों को मजबूत करता है",
      "पीठ के निचले हिस्से में दर्द कम करता है",
      "मूत्र संबंधी विकारों में मदद करता है",
      "श्रोणि में रक्त संचार में सुधार करता है",
      "प्रजनन अंगों को मजबूत करता है",
      "मन को शांत करता है और तनाव कम करता है",
      "ध्यान और प्राणायाम के लिए अच्छा"
    ],
    precautions: [
      "Avoid if you have severe knee pain",
      "Those with ankle injury should be careful",
      "Use cushion if you have joint problems",
      "Avoid in case of hernia"
    ],
    precautions_hi: [
      "गंभीर घुटने के दर्द में बचें",
      "टखने की चोट वालों को सावधान रहना चाहिए",
      "जोड़ों की समस्या में कुशन का उपयोग करें",
      "हर्निया के मामले में बचें"
    ],
    steps: [
      { step: 1, instruction: "Kneel down on the floor with knees together. Big toes touch, heels apart.", instruction_hi: "घुटनों के बल फर्श पर बैठें, घुटने एक साथ। बड़े पैर की उंगलियां छूती हैं, एड़ियां अलग।", duration: "5 seconds" },
      { step: 2, instruction: "Lower your body and sit back on your heels. Buttocks rest on heels.", instruction_hi: "शरीर को नीचे करें और एड़ियों पर बैठें। नितंब एड़ियों पर टिकते हैं।", duration: "5 seconds" },
      { step: 3, instruction: "Place hands on thighs with palms down. Keep spine straight.", instruction_hi: "हाथों को जांघों पर रखें, हथेलियां नीचे। रीढ़ सीधी रखें।", duration: "5 seconds" },
      { step: 4, instruction: "Relax shoulders and keep head straight. Gaze forward.", instruction_hi: "कंधों को आराम दें और सिर सीधा रखें। आगे देखें।", duration: "5 seconds" },
      { step: 5, instruction: "Breathe normally and hold position for 5-15 minutes. Especially after meals.", instruction_hi: "सामान्य रूप से सांस लें और 5-15 मिनट तक स्थिति बनाए रखें। विशेष रूप से भोजन के बाद।", duration: "5-15 minutes" },
      { step: 6, instruction: "To release, lean forward slightly, stretch legs out one at a time.", instruction_hi: "छोड़ने के लिए, थोड़ा आगे झुकें, एक-एक करके पैर फैलाएं।", duration: "10 seconds" }
    ],
    diseases_helped: ["digestive-disorders", "acidity", "constipation", "lower-back-pain", "urinary-disorders"],
    dosha_balance: ["Pitta", "Kapha"],
    image: vajrasanaImg
  },
  {
    id: "trikonasana",
    name: "Triangle Pose",
    name_hi: "त्रिकोणासन",
    sanskrit_name: "Trikonasana",
    category: "Standing",
    category_hi: "खड़े",
    difficulty: "Beginner",
    difficulty_hi: "आसान",
    duration: "5-10 minutes",
    duration_hi: "5-10 मिनट",
    description: "Trikonasana stretches and strengthens the thighs, knees, and ankles while stretching the hips, groin, and spine.",
    description_hi: "त्रिकोणासन जांघों, घुटनों और टखनों को खींचता और मजबूत करता है जबकि कूल्हों, कमर और रीढ़ को खींचता है।",
    benefits: [
      "Strengthens legs, knees, and ankles",
      "Stretches hips, groin, and hamstrings",
      "Opens chest and shoulders",
      "Improves spinal flexibility",
      "Stimulates abdominal organs",
      "Helps relieve stress and anxiety",
      "Improves digestion",
      "Therapeutic for flat feet"
    ],
    benefits_hi: [
      "पैरों, घुटनों और टखनों को मजबूत करता है",
      "कूल्हों, कमर और हैमस्ट्रिंग को खींचता है",
      "छाती और कंधों को खोलता है",
      "रीढ़ के लचीलेपन में सुधार करता है",
      "पेट के अंगों को उत्तेजित करता है",
      "तनाव और चिंता से राहत दिलाता है",
      "पाचन में सुधार करता है",
      "फ्लैट फीट के लिए चिकित्सीय"
    ],
    precautions: [
      "Avoid if you have low blood pressure",
      "Those with neck problems should look straight",
      "Avoid deep bending with back injuries",
      "Those with heart conditions should practice against wall"
    ],
    precautions_hi: [
      "कम रक्तचाप में बचें",
      "गर्दन की समस्या वाले सीधे देखें",
      "पीठ की चोट में गहरे झुकाव से बचें",
      "हृदय रोग वाले दीवार के सहारे अभ्यास करें"
    ],
    steps: [
      { step: 1, instruction: "Stand straight with feet 3-4 feet apart. Turn right foot out 90 degrees, left foot slightly inward.", instruction_hi: "पैर 3-4 फीट अलग रखकर सीधे खड़े हों। दाहिना पैर 90 डिग्री बाहर, बायां पैर थोड़ा अंदर।", duration: "5 seconds" },
      { step: 2, instruction: "Raise both arms parallel to floor, palms facing down. Shoulders relaxed.", instruction_hi: "दोनों बाहों को फर्श के समानांतर उठाएं, हथेलियां नीचे। कंधे आराम से।", duration: "5 seconds" },
      { step: 3, instruction: "Exhale and extend torso to right directly over right leg. Bend from hip joint, not waist.", instruction_hi: "सांस छोड़ें और धड़ को दाहिने पैर के ऊपर दाईं ओर फैलाएं। कूल्हे के जोड़ से झुकें, कमर से नहीं।", duration: "5 seconds" },
      { step: 4, instruction: "Rest right hand on shin, ankle, or floor. Extend left arm toward ceiling.", instruction_hi: "दाहिने हाथ को पिंडली, टखने या फर्श पर रखें। बाएं हाथ को छत की ओर फैलाएं।", duration: "10 seconds" },
      { step: 5, instruction: "Turn head to gaze at left thumb. Hold for 30-60 seconds while breathing steadily.", instruction_hi: "बाएं अंगूठे की ओर देखने के लिए सिर घुमाएं। 30-60 सेकंड तक रोकें, स्थिर सांस लेते हुए।", duration: "30-60 seconds" },
      { step: 6, instruction: "Inhale and rise. Repeat on the other side for equal duration.", instruction_hi: "सांस लें और उठें। दूसरी तरफ भी समान अवधि के लिए दोहराएं।", duration: "5 seconds" }
    ],
    diseases_helped: ["digestive-disorders", "anxiety", "flat-feet", "back-pain", "neck-pain"],
    dosha_balance: ["Vata", "Kapha"],
    image: trikonasanaImg
  },
  {
    id: "halasana",
    name: "Plow Pose",
    name_hi: "हलासन",
    sanskrit_name: "Halasana",
    category: "Inversion",
    category_hi: "उलटा",
    difficulty: "Intermediate",
    difficulty_hi: "मध्यम",
    duration: "5-10 minutes",
    duration_hi: "5-10 मिनट",
    description: "Halasana resembles a traditional plow. This inversion stretches the spine and stimulates the thyroid gland.",
    description_hi: "हलासन पारंपरिक हल जैसा दिखता है। यह उलटा आसन रीढ़ को खींचता है और थायरॉयड ग्रंथि को उत्तेजित करता है।",
    benefits: [
      "Stimulates thyroid gland and metabolism",
      "Stretches shoulders and spine",
      "Calms the nervous system",
      "Reduces stress and fatigue",
      "Helps relieve symptoms of menopause",
      "Therapeutic for backache, headache, and sinusitis",
      "Improves digestion and appetite",
      "Reduces insomnia"
    ],
    benefits_hi: [
      "थायरॉयड ग्रंथि और चयापचय को उत्तेजित करता है",
      "कंधों और रीढ़ को खींचता है",
      "तंत्रिका तंत्र को शांत करता है",
      "तनाव और थकान कम करता है",
      "रजोनिवृत्ति के लक्षणों से राहत दिलाता है",
      "पीठ दर्द, सिरदर्द और साइनसाइटिस के लिए चिकित्सीय",
      "पाचन और भूख में सुधार करता है",
      "अनिद्रा कम करता है"
    ],
    precautions: [
      "Avoid during menstruation and pregnancy",
      "Not recommended for neck or shoulder injuries",
      "Those with high blood pressure should avoid",
      "Avoid if you have diarrhea"
    ],
    precautions_hi: [
      "मासिक धर्म और गर्भावस्था के दौरान बचें",
      "गर्दन या कंधे की चोट के लिए अनुशंसित नहीं",
      "उच्च रक्तचाप वालों को बचना चाहिए",
      "दस्त में बचें"
    ],
    steps: [
      { step: 1, instruction: "Lie on your back with arms alongside body, palms down.", instruction_hi: "पीठ के बल लेट जाएं, बाहें शरीर के साथ, हथेलियां नीचे।", duration: "5 seconds" },
      { step: 2, instruction: "Inhale and lift legs to 90 degrees using abdominal strength.", instruction_hi: "सांस लें और पेट की ताकत का उपयोग करके पैरों को 90 डिग्री तक उठाएं।", duration: "5 seconds" },
      { step: 3, instruction: "Exhale and lift hips off floor, bringing legs over head. Support back with hands.", instruction_hi: "सांस छोड़ें और कूल्हों को फर्श से उठाएं, पैरों को सिर के ऊपर लाएं। हाथों से पीठ को सहारा दें।", duration: "10 seconds" },
      { step: 4, instruction: "Lower feet behind head until toes touch floor. Keep legs straight.", instruction_hi: "पैरों को सिर के पीछे नीचे करें जब तक पैर की उंगलियां फर्श को न छू लें। पैर सीधे रखें।", duration: "10 seconds" },
      { step: 5, instruction: "Release hands from back and stretch arms out opposite direction. Hold for 30-60 seconds.", instruction_hi: "हाथों को पीठ से छोड़ें और विपरीत दिशा में फैलाएं। 30-60 सेकंड तक रोकें।", duration: "30-60 seconds" },
      { step: 6, instruction: "To release, support back with hands and slowly roll down one vertebra at a time.", instruction_hi: "छोड़ने के लिए, हाथों से पीठ को सहारा दें और धीरे-धीरे एक-एक कशेरुक नीचे रोल करें।", duration: "10 seconds" }
    ],
    diseases_helped: ["thyroid", "diabetes", "insomnia", "sinusitis", "digestive-disorders"],
    dosha_balance: ["Pitta", "Kapha"],
    image: halasanaImg
  }
];

export const yogaCategories = [
  { id: "all", name: "All Asanas", name_hi: "सभी आसन" },
  { id: "Full Body", name: "Full Body", name_hi: "पूर्ण शरीर" },
  { id: "Back Bend", name: "Back Bend", name_hi: "पीठ मोड़" },
  { id: "Meditation", name: "Meditation", name_hi: "ध्यान" },
  { id: "Balance", name: "Balance", name_hi: "संतुलन" },
  { id: "Inversion", name: "Inversion", name_hi: "उलटा" },
  { id: "Relaxation", name: "Relaxation", name_hi: "विश्राम" },
  { id: "Breathing", name: "Breathing", name_hi: "श्वास" },
  { id: "Seated", name: "Seated", name_hi: "बैठक" },
  { id: "Standing", name: "Standing", name_hi: "खड़े" }
];
