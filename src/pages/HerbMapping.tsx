import { useState, useMemo } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { medicines } from "@/data/medicines";
import { 
  Search, 
  Leaf, 
  ChevronRight,
  ChevronDown,
  Pill,
  Heart,
  Brain,
  Bone,
  Thermometer,
  Wind,
  Activity,
  Stethoscope,
  Sparkles,
  Eye,
  Baby,
  Users,
  Droplets,
  Sun,
  Moon,
  Filter
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Layout from "@/components/layout/Layout";
import LocalizedLink from "@/components/LocalizedLink";

// Comprehensive herb profiles with detailed information
const herbProfiles: Record<string, {
  name: string;
  nameHi: string;
  sanskrit: string;
  botanicalName: string;
  description: string;
  descriptionHi: string;
  properties: string[];
  propertiesHi: string[];
  uses: string[];
  usesHi: string[];
  dosage: string;
  dosageHi: string;
  precautions: string[];
  precautionsHi: string[];
  category: string;
  image?: string;
}> = {
  "ashwagandha": {
    name: "Ashwagandha",
    nameHi: "अश्वगंधा",
    sanskrit: "Ashwagandha",
    botanicalName: "Withania somnifera",
    description: "Known as Indian Ginseng, Ashwagandha is a powerful adaptogenic herb that helps the body manage stress and promotes overall vitality.",
    descriptionHi: "भारतीय जिनसेंग के रूप में जाना जाता है, अश्वगंधा एक शक्तिशाली एडाप्टोजेनिक जड़ी-बूटी है जो शरीर को तनाव प्रबंधन में मदद करती है और समग्र जीवन शक्ति को बढ़ावा देती है।",
    properties: ["Adaptogenic", "Anti-inflammatory", "Antioxidant", "Immunomodulatory"],
    propertiesHi: ["एडाप्टोजेनिक", "सूजन-रोधी", "एंटीऑक्सीडेंट", "इम्यूनोमॉड्यूलेटरी"],
    uses: ["Stress & Anxiety", "Insomnia", "Joint Pain", "Weakness", "Memory Enhancement"],
    usesHi: ["तनाव और चिंता", "अनिद्रा", "जोड़ों का दर्द", "कमजोरी", "स्मृति वृद्धि"],
    dosage: "3-6g powder with warm milk at bedtime",
    dosageHi: "3-6 ग्राम पाउडर गर्म दूध के साथ सोते समय",
    precautions: ["Avoid during pregnancy", "May cause drowsiness", "Not with sedatives"],
    precautionsHi: ["गर्भावस्था में न लें", "उनींदापन हो सकता है", "सेडेटिव के साथ न लें"],
    category: "adaptogen"
  },
  "brahmi": {
    name: "Brahmi",
    nameHi: "ब्राह्मी",
    sanskrit: "Brahmi",
    botanicalName: "Bacopa monnieri",
    description: "A renowned brain tonic in Ayurveda, Brahmi enhances cognitive function, memory, and concentration while reducing anxiety.",
    descriptionHi: "आयुर्वेद में एक प्रसिद्ध मस्तिष्क टॉनिक, ब्राह्मी संज्ञानात्मक कार्य, स्मृति और एकाग्रता को बढ़ाता है और चिंता को कम करता है।",
    properties: ["Nootropic", "Anxiolytic", "Antioxidant", "Neuroprotective"],
    propertiesHi: ["नूट्रोपिक", "चिंता-रोधी", "एंटीऑक्सीडेंट", "न्यूरोप्रोटेक्टिव"],
    uses: ["Memory Loss", "Anxiety", "ADHD", "Stress", "Epilepsy"],
    usesHi: ["स्मृति हानि", "चिंता", "एडीएचडी", "तनाव", "मिर्गी"],
    dosage: "2-3g powder or 1-2 tablets twice daily",
    dosageHi: "2-3 ग्राम पाउडर या 1-2 गोलियां दिन में दो बार",
    precautions: ["May cause stomach upset", "Avoid during pregnancy"],
    precautionsHi: ["पेट खराब हो सकता है", "गर्भावस्था में न लें"],
    category: "neurological"
  },
  "turmeric": {
    name: "Turmeric (Haridra)",
    nameHi: "हल्दी (हरिद्रा)",
    sanskrit: "Haridra",
    botanicalName: "Curcuma longa",
    description: "The golden spice of India, Turmeric is a powerful anti-inflammatory and antioxidant herb used for countless health conditions.",
    descriptionHi: "भारत का सुनहरा मसाला, हल्दी एक शक्तिशाली सूजन-रोधी और एंटीऑक्सीडेंट जड़ी-बूटी है जो अनगिनत स्वास्थ्य स्थितियों के लिए उपयोग की जाती है।",
    properties: ["Anti-inflammatory", "Antioxidant", "Antiseptic", "Hepatoprotective"],
    propertiesHi: ["सूजन-रोधी", "एंटीऑक्सीडेंट", "एंटीसेप्टिक", "यकृत रक्षक"],
    uses: ["Arthritis", "Skin Disorders", "Digestive Issues", "Wounds", "Diabetes"],
    usesHi: ["गठिया", "त्वचा विकार", "पाचन समस्याएं", "घाव", "मधुमेह"],
    dosage: "1-3g with warm milk or honey",
    dosageHi: "1-3 ग्राम गर्म दूध या शहद के साथ",
    precautions: ["May stain teeth", "Avoid before surgery", "Caution with gallstones"],
    precautionsHi: ["दांतों पर दाग लग सकता है", "सर्जरी से पहले न लें", "पित्त पथरी में सावधानी"],
    category: "anti-inflammatory"
  },
  "tulsi": {
    name: "Tulsi (Holy Basil)",
    nameHi: "तुलसी",
    sanskrit: "Tulasi",
    botanicalName: "Ocimum sanctum",
    description: "Sacred herb of India, Tulsi is an adaptogen that boosts immunity, reduces stress, and protects against infections.",
    descriptionHi: "भारत की पवित्र जड़ी-बूटी, तुलसी एक एडाप्टोजेन है जो प्रतिरक्षा को बढ़ाती है, तनाव को कम करती है और संक्रमण से बचाती है।",
    properties: ["Adaptogenic", "Antimicrobial", "Immunomodulatory", "Expectorant"],
    propertiesHi: ["एडाप्टोजेनिक", "रोगाणुरोधी", "इम्यूनोमॉड्यूलेटरी", "कफ निस्सारक"],
    uses: ["Cold & Cough", "Respiratory Infections", "Stress", "Fever", "Skin Issues"],
    usesHi: ["सर्दी और खांसी", "श्वसन संक्रमण", "तनाव", "बुखार", "त्वचा समस्याएं"],
    dosage: "5-10 fresh leaves or 1-2g powder daily",
    dosageHi: "5-10 ताजी पत्तियां या 1-2 ग्राम पाउडर रोजाना",
    precautions: ["May affect blood clotting", "Avoid during pregnancy in excess"],
    precautionsHi: ["रक्त के थक्के को प्रभावित कर सकता है", "गर्भावस्था में अधिक मात्रा में न लें"],
    category: "immunity"
  },
  "triphala": {
    name: "Triphala",
    nameHi: "त्रिफला",
    sanskrit: "Triphala",
    botanicalName: "Combination of three fruits",
    description: "A legendary Ayurvedic formula combining Amalaki, Bibhitaki, and Haritaki. It's a complete digestive and detoxification remedy.",
    descriptionHi: "आमलकी, बिभीतकी और हरीतकी को मिलाकर बना एक प्रसिद्ध आयुर्वेदिक फॉर्मूला। यह एक संपूर्ण पाचन और विषहरण उपाय है।",
    properties: ["Laxative", "Antioxidant", "Detoxifying", "Rejuvenating"],
    propertiesHi: ["रेचक", "एंटीऑक्सीडेंट", "विषहरण", "कायाकल्प"],
    uses: ["Constipation", "Detox", "Eye Health", "Weight Management", "Digestion"],
    usesHi: ["कब्ज", "विषहरण", "आंखों का स्वास्थ्य", "वजन प्रबंधन", "पाचन"],
    dosage: "3-6g with warm water at bedtime",
    dosageHi: "3-6 ग्राम गर्म पानी के साथ सोते समय",
    precautions: ["May cause loose stools initially", "Avoid during pregnancy"],
    precautionsHi: ["शुरू में दस्त हो सकते हैं", "गर्भावस्था में न लें"],
    category: "digestive"
  },
  "guggulu": {
    name: "Guggulu",
    nameHi: "गुग्गुलु",
    sanskrit: "Guggulu",
    botanicalName: "Commiphora mukul",
    description: "A powerful resin known for its anti-inflammatory and lipid-lowering properties. Essential for joint and metabolic health.",
    descriptionHi: "एक शक्तिशाली राल जो अपने सूजन-रोधी और लिपिड कम करने वाले गुणों के लिए जानी जाती है। जोड़ों और चयापचय स्वास्थ्य के लिए आवश्यक।",
    properties: ["Anti-inflammatory", "Hypolipidemic", "Thyroid Stimulant", "Analgesic"],
    propertiesHi: ["सूजन-रोधी", "लिपिड कम करने वाला", "थायराइड उत्तेजक", "दर्द निवारक"],
    uses: ["Arthritis", "High Cholesterol", "Obesity", "Hypothyroidism", "Skin Disorders"],
    usesHi: ["गठिया", "उच्च कोलेस्ट्रॉल", "मोटापा", "हाइपोथायरायडिज्म", "त्वचा विकार"],
    dosage: "500mg-1g twice daily after meals",
    dosageHi: "500mg-1g दिन में दो बार भोजन के बाद",
    precautions: ["May interact with thyroid medications", "Avoid during pregnancy"],
    precautionsHi: ["थायराइड दवाओं के साथ प्रतिक्रिया कर सकता है", "गर्भावस्था में न लें"],
    category: "musculoskeletal"
  },
  "neem": {
    name: "Neem",
    nameHi: "नीम",
    sanskrit: "Nimba",
    botanicalName: "Azadirachta indica",
    description: "The village pharmacy of India, Neem has powerful antimicrobial, antifungal, and blood-purifying properties.",
    descriptionHi: "भारत की गांव की फार्मेसी, नीम में शक्तिशाली रोगाणुरोधी, एंटीफंगल और रक्त शुद्ध करने वाले गुण हैं।",
    properties: ["Antimicrobial", "Antifungal", "Blood Purifier", "Antiparasitic"],
    propertiesHi: ["रोगाणुरोधी", "एंटीफंगल", "रक्त शोधक", "परजीवी-रोधी"],
    uses: ["Skin Diseases", "Diabetes", "Dental Care", "Hair Problems", "Infections"],
    usesHi: ["त्वचा रोग", "मधुमेह", "दंत चिकित्सा", "बालों की समस्याएं", "संक्रमण"],
    dosage: "1-2 tablets or 5ml juice daily",
    dosageHi: "1-2 गोलियां या 5ml रस रोजाना",
    precautions: ["Very bitter taste", "May reduce fertility temporarily"],
    precautionsHi: ["बहुत कड़वा स्वाद", "अस्थायी रूप से प्रजनन क्षमता कम कर सकता है"],
    category: "skin"
  },
  "amla": {
    name: "Amla (Amalaki)",
    nameHi: "आंवला (आमलकी)",
    sanskrit: "Amalaki",
    botanicalName: "Phyllanthus emblica",
    description: "The richest natural source of Vitamin C, Amla is a powerful rejuvenator and immunity booster.",
    descriptionHi: "विटामिन सी का सबसे समृद्ध प्राकृतिक स्रोत, आंवला एक शक्तिशाली कायाकल्प और प्रतिरक्षा बूस्टर है।",
    properties: ["Antioxidant", "Immunomodulatory", "Rejuvenating", "Cooling"],
    propertiesHi: ["एंटीऑक्सीडेंट", "इम्यूनोमॉड्यूलेटरी", "कायाकल्प", "शीतल"],
    uses: ["Immunity", "Hair Health", "Acidity", "Anemia", "Eye Health"],
    usesHi: ["प्रतिरक्षा", "बालों का स्वास्थ्य", "एसिडिटी", "एनीमिया", "आंखों का स्वास्थ्य"],
    dosage: "1-2 fresh fruits or 3-6g powder daily",
    dosageHi: "1-2 ताजे फल या 3-6 ग्राम पाउडर रोजाना",
    precautions: ["May increase cold sensations", "Caution in diarrhea"],
    precautionsHi: ["ठंडक बढ़ा सकता है", "दस्त में सावधानी"],
    category: "immunity"
  },
  "shatavari": {
    name: "Shatavari",
    nameHi: "शतावरी",
    sanskrit: "Shatavari",
    botanicalName: "Asparagus racemosus",
    description: "The queen of herbs for women's health, Shatavari balances hormones and supports reproductive health.",
    descriptionHi: "महिलाओं के स्वास्थ्य के लिए जड़ी-बूटियों की रानी, शतावरी हार्मोन को संतुलित करती है और प्रजनन स्वास्थ्य का समर्थन करती है।",
    properties: ["Phytoestrogenic", "Galactagogue", "Adaptogenic", "Cooling"],
    propertiesHi: ["फाइटोएस्ट्रोजेनिक", "दूध बढ़ाने वाला", "एडाप्टोजेनिक", "शीतल"],
    uses: ["Menstrual Issues", "Menopause", "Lactation", "Infertility", "Acidity"],
    usesHi: ["मासिक धर्म समस्याएं", "रजोनिवृत्ति", "स्तनपान", "बांझपन", "एसिडिटी"],
    dosage: "3-6g powder with milk twice daily",
    dosageHi: "3-6 ग्राम पाउडर दूध के साथ दिन में दो बार",
    precautions: ["Avoid in estrogen-sensitive conditions", "May cause weight gain"],
    precautionsHi: ["एस्ट्रोजन-संवेदनशील स्थितियों में न लें", "वजन बढ़ सकता है"],
    category: "womens-health"
  },
  "arjuna": {
    name: "Arjuna",
    nameHi: "अर्जुन",
    sanskrit: "Arjuna",
    botanicalName: "Terminalia arjuna",
    description: "The heart-protector herb, Arjuna bark strengthens cardiac muscles and regulates blood pressure naturally.",
    descriptionHi: "हृदय रक्षक जड़ी-बूटी, अर्जुन की छाल हृदय की मांसपेशियों को मजबूत करती है और रक्तचाप को प्राकृतिक रूप से नियंत्रित करती है।",
    properties: ["Cardioprotective", "Antioxidant", "Hypotensive", "Anti-ischemic"],
    propertiesHi: ["हृदय रक्षक", "एंटीऑक्सीडेंट", "रक्तचाप कम करने वाला", "एंटी-इस्केमिक"],
    uses: ["Heart Disease", "High Blood Pressure", "High Cholesterol", "Chest Pain"],
    usesHi: ["हृदय रोग", "उच्च रक्तचाप", "उच्च कोलेस्ट्रॉल", "सीने में दर्द"],
    dosage: "3-6g bark powder with water twice daily",
    dosageHi: "3-6 ग्राम छाल पाउडर पानी के साथ दिन में दो बार",
    precautions: ["May interact with heart medications", "Monitor blood pressure"],
    precautionsHi: ["हृदय दवाओं के साथ प्रतिक्रिया कर सकता है", "रक्तचाप की निगरानी करें"],
    category: "cardiovascular"
  },
  "giloy": {
    name: "Giloy (Guduchi)",
    nameHi: "गिलोय (गुडूची)",
    sanskrit: "Guduchi",
    botanicalName: "Tinospora cordifolia",
    description: "Known as Amrita (nectar of immortality), Giloy is a powerful immunomodulator and detoxifier.",
    descriptionHi: "अमृता (अमृत) के रूप में जाना जाता है, गिलोय एक शक्तिशाली इम्यूनोमॉड्यूलेटर और विषहरण है।",
    properties: ["Immunomodulatory", "Antipyretic", "Anti-inflammatory", "Hepatoprotective"],
    propertiesHi: ["इम्यूनोमॉड्यूलेटरी", "ज्वरनाशक", "सूजन-रोधी", "यकृत रक्षक"],
    uses: ["Fever", "Low Immunity", "Diabetes", "Arthritis", "Liver Disorders"],
    usesHi: ["बुखार", "कमजोर प्रतिरक्षा", "मधुमेह", "गठिया", "यकृत विकार"],
    dosage: "1-2g powder or 20-30ml juice daily",
    dosageHi: "1-2 ग्राम पाउडर या 20-30ml रस रोजाना",
    precautions: ["May lower blood sugar", "Avoid in autoimmune conditions"],
    precautionsHi: ["रक्त शर्करा कम कर सकता है", "ऑटोइम्यून स्थितियों में न लें"],
    category: "immunity"
  },
  "shilajit": {
    name: "Shilajit",
    nameHi: "शिलाजीत",
    sanskrit: "Shilajit",
    botanicalName: "Asphaltum punjabianum",
    description: "The destroyer of weakness, Shilajit is a mineral-rich substance that enhances energy, vitality, and sexual health.",
    descriptionHi: "कमजोरी को नष्ट करने वाला, शिलाजीत एक खनिज-समृद्ध पदार्थ है जो ऊर्जा, जीवन शक्ति और यौन स्वास्थ्य को बढ़ाता है।",
    properties: ["Adaptogenic", "Rejuvenating", "Anti-aging", "Energy Booster"],
    propertiesHi: ["एडाप्टोजेनिक", "कायाकल्प", "एंटी-एजिंग", "ऊर्जा बूस्टर"],
    uses: ["Weakness", "Low Energy", "Diabetes", "Anemia", "Reproductive Health"],
    usesHi: ["कमजोरी", "कम ऊर्जा", "मधुमेह", "एनीमिया", "प्रजनन स्वास्थ्य"],
    dosage: "300-500mg with milk twice daily",
    dosageHi: "300-500mg दूध के साथ दिन में दो बार",
    precautions: ["Buy from reputable sources", "Avoid with high uric acid"],
    precautionsHi: ["प्रतिष्ठित स्रोतों से खरीदें", "उच्च यूरिक एसिड में न लें"],
    category: "rejuvenation"
  },
  "sarpagandha": {
    name: "Sarpagandha",
    nameHi: "सर्पगंधा",
    sanskrit: "Sarpagandha",
    botanicalName: "Rauvolfia serpentina",
    description: "Known as the serpent root, Sarpagandha is highly valued for its ability to calm the mind and lower blood pressure naturally.",
    descriptionHi: "सर्प जड़ के रूप में जाना जाता है, सर्पगंधा मन को शांत करने और रक्तचाप को प्राकृतिक रूप से कम करने की क्षमता के लिए अत्यधिक मूल्यवान है।",
    properties: ["Hypotensive", "Sedative", "Anxiolytic", "Antipsychotic"],
    propertiesHi: ["रक्तचाप कम करने वाला", "शामक", "चिंता-रोधी", "एंटीसाइकोटिक"],
    uses: ["High Blood Pressure", "Insomnia", "Anxiety", "Mental Disorders", "Hysteria"],
    usesHi: ["उच्च रक्तचाप", "अनिद्रा", "चिंता", "मानसिक विकार", "हिस्टीरिया"],
    dosage: "250-500mg under medical supervision only",
    dosageHi: "250-500mg केवल चिकित्सक की देखरेख में",
    precautions: ["Must be taken under medical supervision", "Not for pregnant women", "May cause depression in some"],
    precautionsHi: ["चिकित्सक की देखरेख में ही लें", "गर्भवती महिलाओं के लिए नहीं", "कुछ में अवसाद हो सकता है"],
    category: "cardiovascular"
  },
  "manjishtha": {
    name: "Manjishtha",
    nameHi: "मंजिष्ठा",
    sanskrit: "Manjishtha",
    botanicalName: "Rubia cordifolia",
    description: "The queen of blood purifiers, Manjishtha cleanses the blood, improves skin complexion, and supports lymphatic health.",
    descriptionHi: "रक्त शोधकों की रानी, मंजिष्ठा रक्त को शुद्ध करती है, त्वचा की रंगत सुधारती है और लसीका स्वास्थ्य का समर्थन करती है।",
    properties: ["Blood Purifier", "Anti-inflammatory", "Antioxidant", "Lymphatic Cleanser"],
    propertiesHi: ["रक्त शोधक", "सूजन-रोधी", "एंटीऑक्सीडेंट", "लसीका शोधक"],
    uses: ["Skin Disorders", "Acne", "Pigmentation", "Arthritis", "Menstrual Issues"],
    usesHi: ["त्वचा विकार", "मुंहासे", "पिगमेंटेशन", "गठिया", "मासिक धर्म समस्याएं"],
    dosage: "1-3g powder twice daily or as directed",
    dosageHi: "1-3 ग्राम पाउडर दिन में दो बार या निर्देशानुसार",
    precautions: ["May stain clothes and urine red", "Avoid during pregnancy", "Caution in bleeding disorders"],
    precautionsHi: ["कपड़े और मूत्र को लाल रंग दे सकता है", "गर्भावस्था में न लें", "रक्तस्राव विकारों में सावधानी"],
    category: "skin"
  },
  "gudmar": {
    name: "Gudmar (Gymnema)",
    nameHi: "गुड़मार",
    sanskrit: "Madhunashini",
    botanicalName: "Gymnema sylvestre",
    description: "Known as the 'sugar destroyer', Gudmar is renowned for its ability to reduce sugar cravings and support healthy blood sugar levels.",
    descriptionHi: "'चीनी विनाशक' के रूप में जाना जाता है, गुड़मार चीनी की लालसा को कम करने और स्वस्थ रक्त शर्करा के स्तर को बनाए रखने की क्षमता के लिए प्रसिद्ध है।",
    properties: ["Anti-diabetic", "Appetite Suppressant", "Lipid Lowering", "Anti-inflammatory"],
    propertiesHi: ["मधुमेह-रोधी", "भूख दमनकारी", "लिपिड कम करने वाला", "सूजन-रोधी"],
    uses: ["Diabetes", "Sugar Cravings", "Obesity", "High Cholesterol", "Metabolic Syndrome"],
    usesHi: ["मधुमेह", "चीनी की लालसा", "मोटापा", "उच्च कोलेस्ट्रॉल", "मेटाबोलिक सिंड्रोम"],
    dosage: "400-600mg standardized extract daily",
    dosageHi: "400-600mg मानकीकृत अर्क दैनिक",
    precautions: ["Monitor blood sugar closely", "May interact with diabetes medications", "Not for children"],
    precautionsHi: ["रक्त शर्करा की बारीकी से निगरानी करें", "मधुमेह दवाओं के साथ प्रतिक्रिया कर सकता है", "बच्चों के लिए नहीं"],
    category: "metabolic"
  },
  "punarnava": {
    name: "Punarnava",
    nameHi: "पुनर्नवा",
    sanskrit: "Punarnava",
    botanicalName: "Boerhavia diffusa",
    description: "Meaning 'one that renews the body', Punarnava is excellent for kidney health, reducing swelling, and rejuvenation.",
    descriptionHi: "'शरीर को नवीनीकृत करने वाला' अर्थ है, पुनर्नवा गुर्दे के स्वास्थ्य, सूजन कम करने और कायाकल्प के लिए उत्कृष्ट है।",
    properties: ["Diuretic", "Anti-inflammatory", "Hepatoprotective", "Rejuvenating"],
    propertiesHi: ["मूत्रवर्धक", "सूजन-रोधी", "यकृत रक्षक", "कायाकल्प"],
    uses: ["Kidney Disorders", "Edema", "Obesity", "Liver Problems", "Arthritis"],
    usesHi: ["गुर्दे के विकार", "सूजन", "मोटापा", "यकृत समस्याएं", "गठिया"],
    dosage: "1-2g powder twice daily",
    dosageHi: "1-2 ग्राम पाउडर दिन में दो बार",
    precautions: ["May increase urination", "Avoid in dehydration", "Consult before using with diuretics"],
    precautionsHi: ["पेशाब बढ़ा सकता है", "निर्जलीकरण में न लें", "मूत्रवर्धक के साथ प्रयोग से पहले परामर्श करें"],
    category: "rejuvenation"
  },
  "kutki": {
    name: "Kutki",
    nameHi: "कुटकी",
    sanskrit: "Katuki",
    botanicalName: "Picrorhiza kurroa",
    description: "A powerful liver protector, Kutki is used for liver disorders, jaundice, and as a potent digestive stimulant.",
    descriptionHi: "एक शक्तिशाली यकृत रक्षक, कुटकी का उपयोग यकृत विकारों, पीलिया और एक शक्तिशाली पाचन उत्तेजक के रूप में किया जाता है।",
    properties: ["Hepatoprotective", "Cholagogue", "Antipyretic", "Immunomodulatory"],
    propertiesHi: ["यकृत रक्षक", "पित्त-स्रावक", "ज्वरनाशक", "इम्यूनोमॉड्यूलेटरी"],
    uses: ["Liver Disorders", "Jaundice", "Fever", "Skin Diseases", "Asthma"],
    usesHi: ["यकृत विकार", "पीलिया", "बुखार", "त्वचा रोग", "अस्थमा"],
    dosage: "500mg-1g twice daily",
    dosageHi: "500mg-1g दिन में दो बार",
    precautions: ["Bitter taste may cause nausea", "Avoid in diarrhea", "Not during pregnancy"],
    precautionsHi: ["कड़वा स्वाद मतली का कारण बन सकता है", "दस्त में न लें", "गर्भावस्था में नहीं"],
    category: "digestive"
  },
  "haritaki": {
    name: "Haritaki",
    nameHi: "हरीतकी",
    sanskrit: "Haritaki",
    botanicalName: "Terminalia chebula",
    description: "Called the 'King of Medicines' in Tibet, Haritaki is one of the three fruits in Triphala, known for digestive and brain benefits.",
    descriptionHi: "तिब्बत में 'दवाओं का राजा' कहा जाता है, हरीतकी त्रिफला के तीन फलों में से एक है, जो पाचन और मस्तिष्क लाभों के लिए जानी जाती है।",
    properties: ["Laxative", "Rejuvenating", "Antioxidant", "Neuroprotective"],
    propertiesHi: ["रेचक", "कायाकल्प", "एंटीऑक्सीडेंट", "न्यूरोप्रोटेक्टिव"],
    uses: ["Constipation", "Digestive Issues", "Memory", "Eye Health", "Skin Health"],
    usesHi: ["कब्ज", "पाचन समस्याएं", "स्मृति", "आंखों का स्वास्थ्य", "त्वचा स्वास्थ्य"],
    dosage: "1-3g powder at bedtime with warm water",
    dosageHi: "1-3 ग्राम पाउडर सोते समय गर्म पानी के साथ",
    precautions: ["May cause loose stools", "Avoid during pregnancy", "Reduce dose if diarrhea occurs"],
    precautionsHi: ["दस्त हो सकते हैं", "गर्भावस्था में न लें", "दस्त होने पर खुराक कम करें"],
    category: "digestive"
  },
  "vidanga": {
    name: "Vidanga",
    nameHi: "विडंग",
    sanskrit: "Vidanga",
    botanicalName: "Embelia ribes",
    description: "A powerful antiparasitic herb, Vidanga is traditionally used for intestinal worms and digestive health.",
    descriptionHi: "एक शक्तिशाली परजीवी-रोधी जड़ी-बूटी, विडंग का उपयोग पारंपरिक रूप से आंतों के कीड़ों और पाचन स्वास्थ्य के लिए किया जाता है।",
    properties: ["Antiparasitic", "Carminative", "Laxative", "Antimicrobial"],
    propertiesHi: ["परजीवी-रोधी", "वातहर", "रेचक", "रोगाणुरोधी"],
    uses: ["Intestinal Worms", "Obesity", "Skin Diseases", "Flatulence", "Constipation"],
    usesHi: ["आंतों के कीड़े", "मोटापा", "त्वचा रोग", "पेट फूलना", "कब्ज"],
    dosage: "1-3g powder with honey",
    dosageHi: "1-3 ग्राम पाउडर शहद के साथ",
    precautions: ["Avoid during pregnancy", "May cause loose motions", "Not for long-term use without supervision"],
    precautionsHi: ["गर्भावस्था में न लें", "दस्त हो सकते हैं", "देखरेख के बिना लंबे समय तक उपयोग नहीं"],
    category: "digestive"
  },
  "yashtimadhu": {
    name: "Yashtimadhu (Licorice)",
    nameHi: "यष्टिमधु (मुलेठी)",
    sanskrit: "Yashtimadhu",
    botanicalName: "Glycyrrhiza glabra",
    description: "Sweet root herb that soothes the throat, supports digestion, and is excellent for respiratory and skin health.",
    descriptionHi: "मीठी जड़ वाली जड़ी-बूटी जो गले को आराम देती है, पाचन में सहायता करती है और श्वसन और त्वचा स्वास्थ्य के लिए उत्कृष्ट है।",
    properties: ["Demulcent", "Expectorant", "Anti-inflammatory", "Adaptogenic"],
    propertiesHi: ["मृदुकारी", "कफ निस्सारक", "सूजन-रोधी", "एडाप्टोजेनिक"],
    uses: ["Sore Throat", "Cough", "Acidity", "Ulcers", "Adrenal Fatigue"],
    usesHi: ["गले में खराश", "खांसी", "एसिडिटी", "अल्सर", "एड्रेनल थकान"],
    dosage: "1-3g powder with honey or warm water",
    dosageHi: "1-3 ग्राम पाउडर शहद या गर्म पानी के साथ",
    precautions: ["May increase blood pressure", "Avoid in hypertension", "Not for long-term use"],
    precautionsHi: ["रक्तचाप बढ़ा सकता है", "उच्च रक्तचाप में न लें", "लंबे समय तक उपयोग नहीं"],
    category: "respiratory"
  },
  "bhringaraj": {
    name: "Bhringaraj",
    nameHi: "भृंगराज",
    sanskrit: "Bhringaraja",
    botanicalName: "Eclipta alba",
    description: "The king of herbs for hair, Bhringaraj promotes hair growth, prevents premature graying, and supports liver health.",
    descriptionHi: "बालों के लिए जड़ी-बूटियों का राजा, भृंगराज बालों के विकास को बढ़ावा देता है, समय से पहले सफेद होने से रोकता है और यकृत स्वास्थ्य का समर्थन करता है।",
    properties: ["Hair Tonic", "Hepatoprotective", "Rejuvenating", "Cooling"],
    propertiesHi: ["बाल टॉनिक", "यकृत रक्षक", "कायाकल्प", "शीतल"],
    uses: ["Hair Loss", "Premature Graying", "Liver Disorders", "Skin Problems", "Eye Health"],
    usesHi: ["बालों का झड़ना", "समय से पहले सफेद होना", "यकृत विकार", "त्वचा समस्याएं", "आंखों का स्वास्थ्य"],
    dosage: "1-2g powder internally or oil for external use",
    dosageHi: "1-2 ग्राम पाउडर आंतरिक रूप से या तेल बाहरी उपयोग के लिए",
    precautions: ["May cause cold symptoms in excess", "Avoid during pregnancy"],
    precautionsHi: ["अधिक मात्रा में ठंड के लक्षण हो सकते हैं", "गर्भावस्था में न लें"],
    category: "skin"
  },
  "shankhpushpi": {
    name: "Shankhpushpi",
    nameHi: "शंखपुष्पी",
    sanskrit: "Shankhapushpi",
    botanicalName: "Convolvulus pluricaulis",
    description: "A powerful brain tonic that enhances memory, concentration, and overall cognitive function while calming anxiety.",
    descriptionHi: "एक शक्तिशाली मस्तिष्क टॉनिक जो स्मृति, एकाग्रता और समग्र संज्ञानात्मक कार्य को बढ़ाता है जबकि चिंता को शांत करता है।",
    properties: ["Nootropic", "Anxiolytic", "Memory Enhancer", "Cooling"],
    propertiesHi: ["नूट्रोपिक", "चिंता-रोधी", "स्मृति वर्धक", "शीतल"],
    uses: ["Memory Loss", "Anxiety", "Insomnia", "Epilepsy", "Mental Fatigue"],
    usesHi: ["स्मृति हानि", "चिंता", "अनिद्रा", "मिर्गी", "मानसिक थकान"],
    dosage: "3-6g powder or 2-4 tablets daily",
    dosageHi: "3-6 ग्राम पाउडर या 2-4 गोलियां दैनिक",
    precautions: ["May cause drowsiness", "Avoid driving after intake", "Not during pregnancy"],
    precautionsHi: ["उनींदापन हो सकता है", "सेवन के बाद गाड़ी न चलाएं", "गर्भावस्था में नहीं"],
    category: "neurological"
  },
  "vacha": {
    name: "Vacha (Calamus)",
    nameHi: "वचा",
    sanskrit: "Vacha",
    botanicalName: "Acorus calamus",
    description: "A powerful herb for speech and memory, Vacha is used for neurological conditions and mental clarity.",
    descriptionHi: "वाणी और स्मृति के लिए एक शक्तिशाली जड़ी-बूटी, वचा का उपयोग न्यूरोलॉजिकल स्थितियों और मानसिक स्पष्टता के लिए किया जाता है।",
    properties: ["Nervine", "Carminative", "Expectorant", "Memory Enhancer"],
    propertiesHi: ["तंत्रिका टॉनिक", "वातहर", "कफ निस्सारक", "स्मृति वर्धक"],
    uses: ["Speech Disorders", "Memory", "Epilepsy", "Digestive Issues", "Respiratory Problems"],
    usesHi: ["वाणी विकार", "स्मृति", "मिर्गी", "पाचन समस्याएं", "श्वसन समस्याएं"],
    dosage: "250-500mg powder (use with caution)",
    dosageHi: "250-500mg पाउडर (सावधानी से प्रयोग करें)",
    precautions: ["Use only under expert supervision", "Not for long-term use", "Avoid during pregnancy"],
    precautionsHi: ["केवल विशेषज्ञ देखरेख में प्रयोग करें", "लंबे समय तक उपयोग नहीं", "गर्भावस्था में न लें"],
    category: "neurological"
  }
};

// Comprehensive symptom to herb mappings
const symptomHerbMappings: Record<string, {
  symptom: string;
  symptomHi: string;
  description: string;
  descriptionHi: string;
  herbs: string[];
  medicines: string[];
  icon: any;
  category: string;
}> = {
  // Pain & Musculoskeletal
  "joint-pain": {
    symptom: "Joint Pain",
    symptomHi: "जोड़ों का दर्द",
    description: "Inflammation and pain in joints, common in arthritis and aging",
    descriptionHi: "जोड़ों में सूजन और दर्द, गठिया और उम्र बढ़ने में आम",
    herbs: ["guggulu", "ashwagandha", "shilajit", "turmeric"],
    medicines: ["med-8", "med-9", "med-10"],
    icon: Bone,
    category: "pain"
  },
  "back-pain": {
    symptom: "Back Pain",
    symptomHi: "पीठ दर्द",
    description: "Lower back pain, sciatica, and spinal discomfort",
    descriptionHi: "पीठ के निचले हिस्से में दर्द, साइटिका और रीढ़ की असुविधा",
    herbs: ["guggulu", "ashwagandha", "turmeric"],
    medicines: ["med-9"],
    icon: Bone,
    category: "pain"
  },
  "headache": {
    symptom: "Headache & Migraine",
    symptomHi: "सिरदर्द और माइग्रेन",
    description: "Tension headaches, migraines, and chronic head pain",
    descriptionHi: "तनाव सिरदर्द, माइग्रेन और पुराना सिर दर्द",
    herbs: ["brahmi", "ashwagandha"],
    medicines: ["med-21", "med-22", "med-23"],
    icon: Brain,
    category: "neurological"
  },

  // Digestive
  "acidity": {
    symptom: "Acidity & Heartburn",
    symptomHi: "एसिडिटी और सीने में जलन",
    description: "Acid reflux, hyperacidity, and burning sensation",
    descriptionHi: "एसिड रिफ्लक्स, हाइपर एसिडिटी और जलन",
    herbs: ["amla", "shatavari", "triphala"],
    medicines: ["med-12", "med-13", "med-14"],
    icon: Thermometer,
    category: "digestive"
  },
  "constipation": {
    symptom: "Constipation",
    symptomHi: "कब्ज",
    description: "Difficulty in bowel movements and hard stools",
    descriptionHi: "मल त्याग में कठिनाई और कठोर मल",
    herbs: ["triphala", "amla"],
    medicines: ["med-15", "med-16", "med-17"],
    icon: Activity,
    category: "digestive"
  },
  "bloating": {
    symptom: "Bloating & Gas",
    symptomHi: "पेट फूलना और गैस",
    description: "Abdominal distension, flatulence, and discomfort",
    descriptionHi: "पेट में सूजन, पेट फूलना और असुविधा",
    herbs: ["triphala", "turmeric"],
    medicines: ["med-17"],
    icon: Activity,
    category: "digestive"
  },

  // Respiratory
  "cough": {
    symptom: "Cough & Cold",
    symptomHi: "खांसी और सर्दी",
    description: "Dry cough, productive cough, and common cold",
    descriptionHi: "सूखी खांसी, बलगम वाली खांसी और सामान्य सर्दी",
    herbs: ["tulsi", "turmeric", "giloy"],
    medicines: ["med-18", "med-19", "med-20"],
    icon: Wind,
    category: "respiratory"
  },
  "breathing": {
    symptom: "Breathing Difficulty",
    symptomHi: "सांस लेने में कठिनाई",
    description: "Shortness of breath, asthma, and respiratory weakness",
    descriptionHi: "सांस की तकलीफ, अस्थमा और श्वसन कमजोरी",
    herbs: ["tulsi", "turmeric"],
    medicines: ["med-18", "med-19"],
    icon: Wind,
    category: "respiratory"
  },

  // Cardiovascular
  "high-bp": {
    symptom: "High Blood Pressure",
    symptomHi: "उच्च रक्तचाप",
    description: "Hypertension and elevated blood pressure",
    descriptionHi: "हाइपरटेंशन और ऊंचा रक्तचाप",
    herbs: ["arjuna", "brahmi", "ashwagandha"],
    medicines: ["med-5", "med-6", "med-7"],
    icon: Heart,
    category: "cardiovascular"
  },
  "heart-weakness": {
    symptom: "Heart Weakness",
    symptomHi: "हृदय की कमजोरी",
    description: "Cardiac weakness, palpitations, and heart health",
    descriptionHi: "हृदय की कमजोरी, धड़कन और हृदय स्वास्थ्य",
    herbs: ["arjuna", "ashwagandha"],
    medicines: ["med-6"],
    icon: Heart,
    category: "cardiovascular"
  },

  // Mental Health
  "anxiety": {
    symptom: "Anxiety & Stress",
    symptomHi: "चिंता और तनाव",
    description: "Anxiety disorders, chronic stress, and nervousness",
    descriptionHi: "चिंता विकार, पुराना तनाव और घबराहट",
    herbs: ["ashwagandha", "brahmi", "tulsi"],
    medicines: ["med-27", "med-28", "med-29"],
    icon: Brain,
    category: "mental"
  },
  "insomnia": {
    symptom: "Insomnia",
    symptomHi: "अनिद्रा",
    description: "Difficulty sleeping, poor sleep quality, and restlessness",
    descriptionHi: "सोने में कठिनाई, खराब नींद की गुणवत्ता और बेचैनी",
    herbs: ["ashwagandha", "brahmi"],
    medicines: ["med-5", "med-27"],
    icon: Moon,
    category: "mental"
  },
  "memory": {
    symptom: "Memory & Focus",
    symptomHi: "स्मृति और एकाग्रता",
    description: "Poor memory, lack of concentration, and brain fog",
    descriptionHi: "कमजोर याददाश्त, एकाग्रता की कमी और मानसिक धुंधलापन",
    herbs: ["brahmi", "ashwagandha", "shilajit"],
    medicines: ["med-23", "med-28"],
    icon: Brain,
    category: "mental"
  },

  // Metabolic
  "diabetes": {
    symptom: "High Blood Sugar",
    symptomHi: "उच्च रक्त शर्करा",
    description: "Diabetes management and blood sugar control",
    descriptionHi: "मधुमेह प्रबंधन और रक्त शर्करा नियंत्रण",
    herbs: ["neem", "turmeric", "giloy", "amla"],
    medicines: ["med-1", "med-2", "med-3", "med-4"],
    icon: Activity,
    category: "metabolic"
  },
  "obesity": {
    symptom: "Obesity & Weight",
    symptomHi: "मोटापा और वजन",
    description: "Weight management, metabolism boost, and fat reduction",
    descriptionHi: "वजन प्रबंधन, चयापचय वृद्धि और वसा कमी",
    herbs: ["guggulu", "triphala", "turmeric"],
    medicines: ["med-24", "med-25", "med-26"],
    icon: Activity,
    category: "metabolic"
  },

  // Skin
  "skin-rashes": {
    symptom: "Skin Rashes & Eczema",
    symptomHi: "त्वचा पर चकत्ते और एक्जिमा",
    description: "Skin rashes, eczema, psoriasis, and dermatitis",
    descriptionHi: "त्वचा पर चकत्ते, एक्जिमा, सोरायसिस और जिल्द की सूजन",
    herbs: ["neem", "turmeric", "amla"],
    medicines: ["med-30", "med-31", "med-32"],
    icon: Sparkles,
    category: "skin"
  },
  "acne": {
    symptom: "Acne & Pimples",
    symptomHi: "मुंहासे और फुंसियां",
    description: "Acne, pimples, and facial skin issues",
    descriptionHi: "मुंहासे, फुंसियां और चेहरे की त्वचा की समस्याएं",
    herbs: ["neem", "turmeric", "amla"],
    medicines: ["med-30"],
    icon: Sparkles,
    category: "skin"
  },

  // General Health
  "weakness": {
    symptom: "Weakness & Fatigue",
    symptomHi: "कमजोरी और थकान",
    description: "General weakness, low energy, and chronic fatigue",
    descriptionHi: "सामान्य कमजोरी, कम ऊर्जा और पुरानी थकान",
    herbs: ["ashwagandha", "shilajit", "amla", "giloy"],
    medicines: ["med-1", "med-10"],
    icon: Stethoscope,
    category: "general"
  },
  "immunity": {
    symptom: "Low Immunity",
    symptomHi: "कमजोर रोग प्रतिरोधक क्षमता",
    description: "Frequent infections, weak immune system",
    descriptionHi: "बार-बार संक्रमण, कमजोर प्रतिरक्षा प्रणाली",
    herbs: ["giloy", "tulsi", "amla", "ashwagandha"],
    medicines: ["med-14", "med-20"],
    icon: Stethoscope,
    category: "general"
  },

  // Women's Health
  "menstrual": {
    symptom: "Menstrual Issues",
    symptomHi: "मासिक धर्म की समस्याएं",
    description: "Irregular periods, painful menstruation, and PMS",
    descriptionHi: "अनियमित पीरियड्स, दर्दनाक मासिक धर्म और पीएमएस",
    herbs: ["shatavari", "ashwagandha"],
    medicines: [],
    icon: Users,
    category: "womens"
  },
  "menopause": {
    symptom: "Menopause Symptoms",
    symptomHi: "रजोनिवृत्ति के लक्षण",
    description: "Hot flashes, mood swings, and hormonal changes",
    descriptionHi: "गर्म चमक, मूड स्विंग और हार्मोनल परिवर्तन",
    herbs: ["shatavari", "ashwagandha", "brahmi"],
    medicines: [],
    icon: Users,
    category: "womens"
  }
};

const categories = [
  { id: "all", label: "All Symptoms", labelHi: "सभी लक्षण", icon: Leaf },
  { id: "pain", label: "Pain", labelHi: "दर्द", icon: Bone },
  { id: "digestive", label: "Digestive", labelHi: "पाचन", icon: Activity },
  { id: "respiratory", label: "Respiratory", labelHi: "श्वसन", icon: Wind },
  { id: "cardiovascular", label: "Heart", labelHi: "हृदय", icon: Heart },
  { id: "mental", label: "Mental", labelHi: "मानसिक", icon: Brain },
  { id: "metabolic", label: "Metabolic", labelHi: "चयापचय", icon: Thermometer },
  { id: "skin", label: "Skin", labelHi: "त्वचा", icon: Sparkles },
  { id: "general", label: "General", labelHi: "सामान्य", icon: Stethoscope },
  { id: "womens", label: "Women's", labelHi: "महिला", icon: Users },
];

const herbCategories = [
  { id: "all", label: "All Herbs", labelHi: "सभी जड़ी-बूटियां" },
  { id: "adaptogen", label: "Adaptogens", labelHi: "एडाप्टोजेन" },
  { id: "immunity", label: "Immunity", labelHi: "प्रतिरक्षा" },
  { id: "digestive", label: "Digestive", labelHi: "पाचन" },
  { id: "neurological", label: "Brain", labelHi: "मस्तिष्क" },
  { id: "cardiovascular", label: "Heart", labelHi: "हृदय" },
  { id: "musculoskeletal", label: "Joints", labelHi: "जोड़" },
  { id: "skin", label: "Skin", labelHi: "त्वचा" },
  { id: "womens-health", label: "Women's", labelHi: "महिला" },
  { id: "rejuvenation", label: "Rejuvenation", labelHi: "कायाकल्प" },
];

const HerbMapping = () => {
  const { language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSymptomCategory, setSelectedSymptomCategory] = useState("all");
  const [selectedHerbCategory, setSelectedHerbCategory] = useState("all");
  const [activeTab, setActiveTab] = useState("symptoms");

  const filteredSymptoms = useMemo(() => {
    return Object.entries(symptomHerbMappings).filter(([_, data]) => {
      const matchesCategory = selectedSymptomCategory === "all" || data.category === selectedSymptomCategory;
      const searchLower = searchQuery.toLowerCase();
      const matchesSearch = 
        data.symptom.toLowerCase().includes(searchLower) ||
        data.symptomHi.includes(searchQuery) ||
        data.herbs.some(h => h.toLowerCase().includes(searchLower));
      
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedSymptomCategory]);

  const filteredHerbs = useMemo(() => {
    return Object.entries(herbProfiles).filter(([_, data]) => {
      const matchesCategory = selectedHerbCategory === "all" || data.category === selectedHerbCategory;
      const searchLower = searchQuery.toLowerCase();
      const matchesSearch = 
        data.name.toLowerCase().includes(searchLower) ||
        data.nameHi.includes(searchQuery) ||
        data.uses.some(u => u.toLowerCase().includes(searchLower)) ||
        data.usesHi.some(u => u.includes(searchQuery));
      
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedHerbCategory]);

  const getMedicine = (medId: string) => {
    return medicines.find(m => m.id === medId);
  };

  const getHerbProfile = (herbId: string) => {
    return herbProfiles[herbId];
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
        {/* Hero Section */}
        <section className="py-12 md:py-16 bg-gradient-to-b from-primary/5 to-transparent">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
                <Leaf className="h-4 w-4" />
                <span className="text-sm font-medium">
                  {language === 'hi' ? 'आयुर्वेदिक ज्ञानकोश' : 'Ayurvedic Knowledge Base'}
                </span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
                {language === 'hi' ? 'लक्षण से जड़ी-बूटी मार्गदर्शिका' : 'Symptom to Herb Guide'}
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                {language === 'hi' 
                  ? 'अपने स्वास्थ्य संबंधी समस्याओं के लिए सही आयुर्वेदिक जड़ी-बूटियां और औषधियां खोजें। प्राचीन ज्ञान, आधुनिक समझ।' 
                  : 'Find the right Ayurvedic herbs and medicines for your health concerns. Ancient wisdom, modern understanding.'}
              </p>

              {/* Search Bar */}
              <div className="relative max-w-xl mx-auto">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder={language === 'hi' ? 'लक्षण, जड़ी-बूटी या रोग खोजें...' : 'Search symptoms, herbs, or conditions...'}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 h-14 text-base bg-background border-2 focus:border-primary rounded-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 h-12">
                <TabsTrigger value="symptoms" className="text-base">
                  <Stethoscope className="h-4 w-4 mr-2" />
                  {language === 'hi' ? 'लक्षण' : 'By Symptom'}
                </TabsTrigger>
                <TabsTrigger value="herbs" className="text-base">
                  <Leaf className="h-4 w-4 mr-2" />
                  {language === 'hi' ? 'जड़ी-बूटियां' : 'By Herb'}
                </TabsTrigger>
              </TabsList>

              {/* Symptoms Tab */}
              <TabsContent value="symptoms" className="space-y-6">
                {/* Category Filter */}
                <div className="flex flex-wrap gap-2 justify-center">
                  {categories.map((cat) => {
                    const Icon = cat.icon;
                    return (
                      <button
                        key={cat.id}
                        onClick={() => setSelectedSymptomCategory(cat.id)}
                        className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all
                          ${selectedSymptomCategory === cat.id 
                            ? 'bg-primary text-primary-foreground shadow-md' 
                            : 'bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground'
                          }`}
                      >
                        <Icon className="h-4 w-4" />
                        {language === 'hi' ? cat.labelHi : cat.label}
                      </button>
                    );
                  })}
                </div>

                {/* Results Count */}
                <p className="text-center text-sm text-muted-foreground">
                  {language === 'hi' 
                    ? `${filteredSymptoms.length} लक्षण मिले` 
                    : `${filteredSymptoms.length} symptoms found`}
                </p>

                {/* Symptoms Accordion */}
                <div className="max-w-4xl mx-auto">
                  <Accordion type="single" collapsible className="space-y-4">
                    {filteredSymptoms.map(([key, data]) => {
                      const Icon = data.icon;
                      return (
                        <AccordionItem 
                          key={key} 
                          value={key}
                          className="border rounded-xl bg-card shadow-sm overflow-hidden"
                        >
                          <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/50">
                            <div className="flex items-center gap-4">
                              <div className="p-2.5 bg-primary/10 rounded-lg">
                                <Icon className="h-5 w-5 text-primary" />
                              </div>
                              <div className="text-left">
                                <h3 className="font-semibold text-foreground text-lg">
                                  {language === 'hi' ? data.symptomHi : data.symptom}
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                  {language === 'hi' ? data.descriptionHi : data.description}
                                </p>
                              </div>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="px-6 pb-6">
                            <div className="space-y-6">
                              {/* Recommended Herbs */}
                              <div>
                                <h4 className="font-medium text-foreground mb-3 flex items-center gap-2">
                                  <Leaf className="h-4 w-4 text-primary" />
                                  {language === 'hi' ? 'अनुशंसित जड़ी-बूटियां' : 'Recommended Herbs'}
                                </h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                  {data.herbs.map((herbId) => {
                                    const herb = getHerbProfile(herbId);
                                    if (!herb) return null;
                                    return (
                                      <div 
                                        key={herbId}
                                        className="p-4 bg-muted/50 rounded-lg border"
                                      >
                                        <div className="flex items-start justify-between mb-2">
                                          <div>
                                            <p className="font-medium text-foreground">
                                              {language === 'hi' ? herb.nameHi : herb.name}
                                            </p>
                                            <p className="text-xs text-muted-foreground italic">
                                              {herb.botanicalName}
                                            </p>
                                          </div>
                                        </div>
                                        <p className="text-sm text-muted-foreground mb-2">
                                          {language === 'hi' ? herb.descriptionHi.slice(0, 100) : herb.description.slice(0, 100)}...
                                        </p>
                                        <p className="text-xs text-primary">
                                          <span className="font-medium">{language === 'hi' ? 'खुराक: ' : 'Dosage: '}</span>
                                          {language === 'hi' ? herb.dosageHi : herb.dosage}
                                        </p>
                                      </div>
                                    );
                                  })}
                                </div>
                              </div>

                              {/* Recommended Medicines */}
                              {data.medicines.length > 0 && (
                                <div>
                                  <h4 className="font-medium text-foreground mb-3 flex items-center gap-2">
                                    <Pill className="h-4 w-4 text-accent" />
                                    {language === 'hi' ? 'अनुशंसित औषधियां' : 'Recommended Medicines'}
                                  </h4>
                                  <div className="space-y-2">
                                    {data.medicines.map((medId) => {
                                      const med = getMedicine(medId);
                                      if (!med) return null;
                                      return (
                                        <LocalizedLink
                                          key={medId}
                                          to={`/medicines/${med.id}`}
                                          className="flex items-center justify-between p-3 bg-muted/50 rounded-lg hover:bg-muted transition-colors"
                                        >
                                          <div>
                                            <p className="font-medium text-foreground">{med.name}</p>
                                            <p className="text-xs text-muted-foreground">{med.brand} • {med.form}</p>
                                          </div>
                                          <ChevronRight className="h-4 w-4 text-muted-foreground" />
                                        </LocalizedLink>
                                      );
                                    })}
                                  </div>
                                </div>
                              )}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      );
                    })}
                  </Accordion>
                </div>
              </TabsContent>

              {/* Herbs Tab */}
              <TabsContent value="herbs" className="space-y-6">
                {/* Category Filter */}
                <div className="flex flex-wrap gap-2 justify-center">
                  {herbCategories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedHerbCategory(cat.id)}
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all
                        ${selectedHerbCategory === cat.id 
                          ? 'bg-primary text-primary-foreground shadow-md' 
                          : 'bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground'
                        }`}
                    >
                      {language === 'hi' ? cat.labelHi : cat.label}
                    </button>
                  ))}
                </div>

                {/* Results Count */}
                <p className="text-center text-sm text-muted-foreground">
                  {language === 'hi' 
                    ? `${filteredHerbs.length} जड़ी-बूटियां मिलीं` 
                    : `${filteredHerbs.length} herbs found`}
                </p>

                {/* Herb Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                  {filteredHerbs.map(([key, herb]) => (
                    <Card key={key} className="overflow-hidden hover:shadow-lg transition-shadow">
                      <CardHeader className="pb-3 bg-gradient-to-br from-primary/5 to-accent/5">
                        <div className="flex items-start justify-between">
                          <div>
                            <CardTitle className="text-xl">
                              {language === 'hi' ? herb.nameHi : herb.name}
                            </CardTitle>
                            <p className="text-sm text-muted-foreground italic mt-1">
                              {herb.botanicalName}
                            </p>
                            <p className="text-xs text-primary mt-1">
                              Sanskrit: {herb.sanskrit}
                            </p>
                          </div>
                          <Leaf className="h-8 w-8 text-primary/30" />
                        </div>
                      </CardHeader>
                      <CardContent className="pt-4 space-y-4">
                        <p className="text-sm text-muted-foreground">
                          {language === 'hi' ? herb.descriptionHi : herb.description}
                        </p>

                        {/* Properties */}
                        <div>
                          <h5 className="text-xs font-medium text-muted-foreground mb-2">
                            {language === 'hi' ? 'गुण' : 'Properties'}
                          </h5>
                          <div className="flex flex-wrap gap-1">
                            {(language === 'hi' ? herb.propertiesHi : herb.properties).map((prop, idx) => (
                              <Badge key={idx} variant="secondary" className="text-xs">
                                {prop}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Uses */}
                        <div>
                          <h5 className="text-xs font-medium text-muted-foreground mb-2">
                            {language === 'hi' ? 'उपयोग' : 'Uses'}
                          </h5>
                          <div className="flex flex-wrap gap-1">
                            {(language === 'hi' ? herb.usesHi : herb.uses).slice(0, 4).map((use, idx) => (
                              <Badge key={idx} variant="outline" className="text-xs">
                                {use}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Dosage */}
                        <div className="p-3 bg-muted/50 rounded-lg">
                          <h5 className="text-xs font-medium text-foreground mb-1">
                            {language === 'hi' ? 'खुराक' : 'Dosage'}
                          </h5>
                          <p className="text-sm text-muted-foreground">
                            {language === 'hi' ? herb.dosageHi : herb.dosage}
                          </p>
                        </div>

                        {/* Precautions */}
                        <div>
                          <h5 className="text-xs font-medium text-destructive mb-2">
                            {language === 'hi' ? 'सावधानियां' : 'Precautions'}
                          </h5>
                          <ul className="text-xs text-muted-foreground space-y-1">
                            {(language === 'hi' ? herb.precautionsHi : herb.precautions).map((prec, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span className="text-destructive">•</span>
                                {prec}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>

            {/* Empty State */}
            {((activeTab === "symptoms" && filteredSymptoms.length === 0) || 
              (activeTab === "herbs" && filteredHerbs.length === 0)) && (
              <div className="text-center py-12">
                <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-medium text-foreground mb-2">
                  {language === 'hi' ? 'कोई परिणाम नहीं मिला' : 'No results found'}
                </h3>
                <p className="text-muted-foreground">
                  {language === 'hi' 
                    ? 'अपनी खोज बदलने का प्रयास करें' 
                    : 'Try adjusting your search or category filter'}
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Disclaimer */}
        <section className="py-8 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-sm text-muted-foreground">
                {language === 'hi' 
                  ? '⚠️ अस्वीकरण: यह जानकारी केवल शैक्षिक उद्देश्यों के लिए है। किसी भी जड़ी-बूटी या औषधि का उपयोग करने से पहले कृपया एक योग्य आयुर्वेदिक चिकित्सक से परामर्श करें।'
                  : '⚠️ Disclaimer: This information is for educational purposes only. Please consult a qualified Ayurvedic practitioner before using any herbs or medicines.'}
              </p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default HerbMapping;
