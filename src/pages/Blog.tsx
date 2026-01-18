import { useState, useMemo } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { 
  Search, 
  Calendar, 
  Clock, 
  User, 
  ChevronRight,
  Leaf,
  Heart,
  Brain,
  Sparkles,
  Tag,
  BookOpen
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import LocalizedLink from "@/components/LocalizedLink";

// Blog posts data with SEO-optimized content
const blogPosts = [
  {
    id: "ayurveda-basics-beginners-guide",
    title: "Ayurveda Basics: A Complete Beginner's Guide to Ancient Healing",
    titleHi: "आयुर्वेद की मूल बातें: प्राचीन चिकित्सा के लिए शुरुआती गाइड",
    excerpt: "Discover the fundamental principles of Ayurveda, including doshas, prakriti, and how this 5,000-year-old science can transform your health naturally.",
    excerptHi: "आयुर्वेद के मौलिक सिद्धांतों की खोज करें, जिसमें दोष, प्रकृति और यह 5,000 साल पुराना विज्ञान आपके स्वास्थ्य को प्राकृतिक रूप से कैसे बदल सकता है।",
    content: `
      <h2>What is Ayurveda?</h2>
      <p>Ayurveda, meaning "Science of Life" in Sanskrit, is one of the world's oldest holistic healing systems. Developed more than 5,000 years ago in India, it's based on the belief that health and wellness depend on a delicate balance between the mind, body, and spirit.</p>
      
      <h2>The Three Doshas</h2>
      <p>According to Ayurveda, every person is made of five basic elements: space, air, fire, water, and earth. These combine to form three life forces or energies called doshas:</p>
      <ul>
        <li><strong>Vata (Space + Air):</strong> Controls movement, breathing, and circulation</li>
        <li><strong>Pitta (Fire + Water):</strong> Controls digestion, metabolism, and intelligence</li>
        <li><strong>Kapha (Water + Earth):</strong> Controls growth, immunity, and stability</li>
      </ul>
      
      <h2>Finding Your Prakriti</h2>
      <p>Your unique combination of doshas is called your Prakriti or constitution. Understanding your Prakriti helps you make better lifestyle and dietary choices.</p>
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
    content: "",
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
    content: "",
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
    content: "",
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
    content: "",
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
    content: "",
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
    content: "",
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
    content: "",
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
    content: "",
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
    content: "",
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
    content: "",
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
    content: "",
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
    content: "",
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

const categories = [
  { id: "all", label: "All Posts", labelHi: "सभी पोस्ट", icon: BookOpen },
  { id: "fundamentals", label: "Fundamentals", labelHi: "मूल बातें", icon: Leaf },
  { id: "herbs", label: "Herbs & Plants", labelHi: "जड़ी-बूटियां", icon: Leaf },
  { id: "remedies", label: "Home Remedies", labelHi: "घरेलू उपचार", icon: Heart },
  { id: "lifestyle", label: "Lifestyle", labelHi: "जीवनशैली", icon: Sparkles },
  { id: "diet", label: "Diet & Nutrition", labelHi: "आहार", icon: Heart },
  { id: "diseases", label: "Disease Management", labelHi: "रोग प्रबंधन", icon: Heart },
  { id: "women", label: "Women's Health", labelHi: "महिला स्वास्थ्य", icon: Heart },
  { id: "children", label: "Children's Health", labelHi: "बाल स्वास्थ्य", icon: Heart },
  { id: "therapies", label: "Therapies", labelHi: "चिकित्सा", icon: Brain },
  { id: "beauty", label: "Beauty & Skin", labelHi: "सौंदर्य", icon: Sparkles }
];

const Blog = () => {
  const { language, t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesSearch = searchQuery === "" || 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.titleHi.includes(searchQuery) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerptHi.includes(searchQuery) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
    <Layout>
      <SEOHead 
        titleKey="nav_blog"
        descriptionKey="blog_description"
      />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              <BookOpen className="w-3 h-3 mr-1" />
              {language === 'hi' ? 'आयुर्वेद ब्लॉग' : 'Ayurveda Blog'}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {language === 'hi' 
                ? 'आयुर्वेदिक ज्ञान और जीवनशैली' 
                : 'Ayurvedic Knowledge & Lifestyle'}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              {language === 'hi'
                ? 'प्राचीन आयुर्वेदिक ज्ञान, जड़ी-बूटियों के लाभ, घरेलू उपचार और स्वस्थ जीवनशैली के बारे में पढ़ें।'
                : 'Explore ancient Ayurvedic wisdom, herb benefits, home remedies, and healthy lifestyle tips from our experts.'}
            </p>
            
            {/* Search */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder={language === 'hi' ? 'ब्लॉग खोजें...' : 'Search articles...'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-6 text-lg rounded-full bg-background/80 backdrop-blur-sm border-primary/20 focus:border-primary"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted hover:bg-primary/10 text-muted-foreground hover:text-primary'
                }`}
              >
                <cat.icon className="w-4 h-4" />
                {language === 'hi' ? cat.labelHi : cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {selectedCategory === "all" && searchQuery === "" && (
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-primary" />
              {language === 'hi' ? 'विशेष लेख' : 'Featured Articles'}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredPosts.slice(0, 3).map((post) => (
                <Card key={post.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <Leaf className="w-16 h-16 text-primary/40" />
                  </div>
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                      <span>•</span>
                      <Clock className="w-4 h-4" />
                      <span>{language === 'hi' ? post.readTimeHi : post.readTime}</span>
                    </div>
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                      {language === 'hi' ? post.titleHi : post.title}
                    </h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {language === 'hi' ? post.excerptHi : post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <User className="w-4 h-4" />
                        <span>{language === 'hi' ? post.authorHi : post.author}</span>
                      </div>
                      <LocalizedLink 
                        to={`/blog/${post.id}`}
                        className="text-primary font-medium text-sm flex items-center gap-1 hover:gap-2 transition-all"
                      >
                        {language === 'hi' ? 'पढ़ें' : 'Read More'}
                        <ChevronRight className="w-4 h-4" />
                      </LocalizedLink>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-foreground mb-8">
            {selectedCategory === "all" 
              ? (language === 'hi' ? 'सभी लेख' : 'All Articles')
              : (language === 'hi' 
                  ? categories.find(c => c.id === selectedCategory)?.labelHi 
                  : categories.find(c => c.id === selectedCategory)?.label)}
            <span className="text-muted-foreground font-normal ml-2">({filteredPosts.length})</span>
          </h2>
          
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <BookOpen className="w-16 h-16 text-muted-foreground/30 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-muted-foreground">
                {language === 'hi' ? 'कोई लेख नहीं मिला' : 'No articles found'}
              </h3>
              <p className="text-sm text-muted-foreground mt-2">
                {language === 'hi' ? 'अपनी खोज बदलकर देखें' : 'Try adjusting your search or filter'}
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post) => (
                <Card key={post.id} className="group hover:shadow-lg transition-all duration-300">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Badge variant="outline" className="text-xs">
                        {language === 'hi' 
                          ? categories.find(c => c.id === post.category)?.labelHi 
                          : categories.find(c => c.id === post.category)?.label}
                      </Badge>
                      <span>•</span>
                      <Clock className="w-3 h-3" />
                      <span>{language === 'hi' ? post.readTimeHi : post.readTime}</span>
                    </div>
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                      {language === 'hi' ? post.titleHi : post.title}
                    </h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {language === 'hi' ? post.excerptHi : post.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {(language === 'hi' ? post.tagsHi : post.tags).slice(0, 3).map((tag, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          <Tag className="w-3 h-3 mr-1" />
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <User className="w-4 h-4" />
                        <span className="truncate max-w-[100px]">{language === 'hi' ? post.authorHi : post.author}</span>
                      </div>
                      <LocalizedLink 
                        to={`/blog/${post.id}`}
                        className="text-primary font-medium text-sm flex items-center gap-1 hover:gap-2 transition-all"
                      >
                        {language === 'hi' ? 'पढ़ें' : 'Read'}
                        <ChevronRight className="w-4 h-4" />
                      </LocalizedLink>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              {language === 'hi' 
                ? 'आयुर्वेदिक स्वास्थ्य टिप्स प्राप्त करें' 
                : 'Get Ayurvedic Health Tips'}
            </h2>
            <p className="text-muted-foreground mb-6">
              {language === 'hi'
                ? 'नवीनतम आयुर्वेदिक लेख, उपचार और स्वास्थ्य सुझाव सीधे अपने इनबॉक्स में प्राप्त करें।'
                : 'Receive the latest Ayurvedic articles, remedies, and health tips directly in your inbox.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder={language === 'hi' ? 'आपका ईमेल' : 'Your email address'}
                className="flex-1"
              />
              <button className="px-6 py-2 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors">
                {language === 'hi' ? 'सब्सक्राइब करें' : 'Subscribe'}
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
