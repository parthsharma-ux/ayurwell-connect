import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { medicines } from "@/data/medicines";
import { 
  Search, 
  Leaf, 
  ChevronRight,
  Pill,
  Heart,
  Brain,
  Bone,
  Thermometer,
  Wind,
  Activity,
  Stethoscope,
  Sparkles
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import LocalizedLink from "@/components/LocalizedLink";

// Symptom to Herb mappings with icons and categories
const symptomHerbData = {
  // Pain & Inflammation
  "Joint Pain": {
    herbs: ["Guggulu", "Ashwagandha", "Shallaki", "Rasna", "Nirgundi"],
    medicines: ["med-8", "med-9", "med-10"],
    icon: Bone,
    category: "pain",
    hi: "जोड़ों का दर्द"
  },
  "Back Pain": {
    herbs: ["Rasna", "Eranda", "Guggulu", "Devdaru", "Shunthi"],
    medicines: ["med-9"],
    icon: Bone,
    category: "pain",
    hi: "पीठ दर्द"
  },
  "Headache": {
    herbs: ["Brahmi", "Jatamansi", "Godanti", "Sarpagandha"],
    medicines: ["med-21", "med-22", "med-23"],
    icon: Brain,
    category: "neurological",
    hi: "सिरदर्द"
  },
  
  // Digestive
  "Acidity": {
    herbs: ["Amalaki", "Yashtimadhu", "Shatavari", "Shankha Bhasma"],
    medicines: ["med-12", "med-13", "med-14"],
    icon: Thermometer,
    category: "digestive",
    hi: "एसिडिटी"
  },
  "Constipation": {
    herbs: ["Triphala", "Haritaki", "Isabgol", "Senna"],
    medicines: ["med-15", "med-16", "med-17"],
    icon: Activity,
    category: "digestive",
    hi: "कब्ज"
  },
  "Bloating": {
    herbs: ["Ajwain", "Saunf", "Hingvastak", "Trikatu"],
    medicines: ["med-17"],
    icon: Activity,
    category: "digestive",
    hi: "पेट फूलना"
  },
  
  // Respiratory
  "Cough": {
    herbs: ["Vasa", "Tulsi", "Pippali", "Kantakari", "Yashtimadhu"],
    medicines: ["med-18", "med-19", "med-20"],
    icon: Wind,
    category: "respiratory",
    hi: "खांसी"
  },
  "Breathlessness": {
    herbs: ["Vasa", "Kantakari", "Haridra", "Pippali"],
    medicines: ["med-18", "med-19"],
    icon: Wind,
    category: "respiratory",
    hi: "सांस फूलना"
  },
  "Cold": {
    herbs: ["Tulsi", "Ginger", "Black Pepper", "Sitopaladi"],
    medicines: ["med-20"],
    icon: Thermometer,
    category: "respiratory",
    hi: "सर्दी"
  },
  
  // Cardiovascular
  "High Blood Pressure": {
    herbs: ["Sarpagandha", "Arjuna", "Jatamansi", "Brahmi"],
    medicines: ["med-5", "med-6", "med-7"],
    icon: Heart,
    category: "cardiovascular",
    hi: "उच्च रक्तचाप"
  },
  "Heart Weakness": {
    herbs: ["Arjuna", "Ashwagandha", "Pushkarmool"],
    medicines: ["med-6"],
    icon: Heart,
    category: "cardiovascular",
    hi: "हृदय की कमजोरी"
  },
  
  // Mental Health
  "Anxiety": {
    herbs: ["Ashwagandha", "Brahmi", "Jatamansi", "Shankhpushpi"],
    medicines: ["med-27", "med-28", "med-29"],
    icon: Brain,
    category: "mental",
    hi: "चिंता"
  },
  "Insomnia": {
    herbs: ["Ashwagandha", "Jatamansi", "Brahmi", "Tagara"],
    medicines: ["med-5", "med-27"],
    icon: Brain,
    category: "mental",
    hi: "अनिद्रा"
  },
  "Stress": {
    herbs: ["Ashwagandha", "Brahmi", "Tulsi", "Shankhpushpi"],
    medicines: ["med-27", "med-28", "med-29"],
    icon: Brain,
    category: "mental",
    hi: "तनाव"
  },
  
  // Metabolic
  "High Blood Sugar": {
    herbs: ["Gudmar", "Karela", "Jamun", "Methi", "Neem"],
    medicines: ["med-1", "med-2", "med-3", "med-4"],
    icon: Activity,
    category: "metabolic",
    hi: "उच्च रक्त शर्करा"
  },
  "Obesity": {
    herbs: ["Guggulu", "Triphala", "Garcinia", "Vidanga"],
    medicines: ["med-24", "med-25", "med-26"],
    icon: Activity,
    category: "metabolic",
    hi: "मोटापा"
  },
  
  // Skin
  "Skin Rashes": {
    herbs: ["Neem", "Manjishtha", "Haridra", "Khadira"],
    medicines: ["med-30", "med-31", "med-32"],
    icon: Sparkles,
    category: "skin",
    hi: "त्वचा पर चकत्ते"
  },
  "Itching": {
    herbs: ["Neem", "Khadira", "Haridra", "Bakuchi"],
    medicines: ["med-32"],
    icon: Sparkles,
    category: "skin",
    hi: "खुजली"
  },
  
  // General
  "Weakness": {
    herbs: ["Ashwagandha", "Shatavari", "Amalaki", "Shilajit"],
    medicines: ["med-1", "med-10"],
    icon: Stethoscope,
    category: "general",
    hi: "कमजोरी"
  },
  "Low Immunity": {
    herbs: ["Giloy", "Ashwagandha", "Tulsi", "Amalaki"],
    medicines: ["med-14", "med-20"],
    icon: Stethoscope,
    category: "general",
    hi: "कमजोर रोग प्रतिरोधक क्षमता"
  }
};

const categories = [
  { id: "all", label: "All", labelHi: "सभी", icon: Leaf },
  { id: "pain", label: "Pain", labelHi: "दर्द", icon: Bone },
  { id: "digestive", label: "Digestive", labelHi: "पाचन", icon: Activity },
  { id: "respiratory", label: "Respiratory", labelHi: "श्वसन", icon: Wind },
  { id: "cardiovascular", label: "Heart", labelHi: "हृदय", icon: Heart },
  { id: "mental", label: "Mental", labelHi: "मानसिक", icon: Brain },
  { id: "metabolic", label: "Metabolic", labelHi: "चयापचय", icon: Thermometer },
  { id: "skin", label: "Skin", labelHi: "त्वचा", icon: Sparkles },
];

const SymptomHerbMapping = () => {
  const { language, t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [expandedSymptom, setExpandedSymptom] = useState<string | null>(null);

  const filteredSymptoms = useMemo(() => {
    return Object.entries(symptomHerbData).filter(([symptom, data]) => {
      const matchesCategory = selectedCategory === "all" || data.category === selectedCategory;
      const searchLower = searchQuery.toLowerCase();
      const matchesSearch = 
        symptom.toLowerCase().includes(searchLower) ||
        data.herbs.some(herb => herb.toLowerCase().includes(searchLower)) ||
        (data.hi && data.hi.includes(searchQuery));
      
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const getMedicine = (medId: string) => {
    return medicines.find(m => m.id === medId);
  };

  return (
    <section className="py-12 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
            <Leaf className="h-4 w-4" />
            <span className="text-sm font-medium">
              {language === 'hi' ? 'आयुर्वेदिक ज्ञान' : 'Ayurvedic Wisdom'}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            {language === 'hi' ? 'लक्षण से जड़ी-बूटी' : 'Symptom to Herb Mapping'}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {language === 'hi' 
              ? 'अपने लक्षणों के लिए प्राकृतिक आयुर्वेदिक जड़ी-बूटियां और औषधियां खोजें' 
              : 'Discover natural Ayurvedic herbs and medicines for your symptoms'}
          </p>
        </div>

        {/* Search & Categories */}
        <div className="max-w-4xl mx-auto mb-8">
          {/* Search Bar */}
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder={language === 'hi' ? 'लक्षण या जड़ी-बूटी खोजें...' : 'Search symptom or herb...'}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 h-12 text-base bg-background border-2 focus:border-primary"
            />
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all
                    ${selectedCategory === cat.id 
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
        </div>

        {/* Results Count */}
        <p className="text-center text-sm text-muted-foreground mb-6">
          {language === 'hi' 
            ? `${filteredSymptoms.length} लक्षण मिले` 
            : `${filteredSymptoms.length} symptoms found`}
        </p>

        {/* Symptom Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {filteredSymptoms.map(([symptom, data]) => {
            const Icon = data.icon;
            const isExpanded = expandedSymptom === symptom;
            
            return (
              <Card 
                key={symptom}
                className={`cursor-pointer transition-all duration-300 hover:shadow-lg border-2
                  ${isExpanded ? 'border-primary shadow-lg' : 'border-transparent hover:border-primary/30'}`}
                onClick={() => setExpandedSymptom(isExpanded ? null : symptom)}
              >
                <CardContent className="p-4">
                  {/* Symptom Header */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">
                          {language === 'hi' ? data.hi : symptom}
                        </h3>
                        {language === 'hi' && (
                          <span className="text-xs text-muted-foreground">{symptom}</span>
                        )}
                      </div>
                    </div>
                    <ChevronRight className={`h-5 w-5 text-muted-foreground transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                  </div>

                  {/* Herbs Preview */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {data.herbs.slice(0, isExpanded ? data.herbs.length : 3).map((herb, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs bg-accent/50">
                        <Leaf className="h-3 w-3 mr-1" />
                        {herb}
                      </Badge>
                    ))}
                    {!isExpanded && data.herbs.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{data.herbs.length - 3} {language === 'hi' ? 'और' : 'more'}
                      </Badge>
                    )}
                  </div>

                  {/* Expanded Content */}
                  {isExpanded && (
                    <div className="mt-4 pt-4 border-t space-y-4 animate-in fade-in slide-in-from-top-2">
                      {/* Recommended Medicines */}
                      <div>
                        <h4 className="text-sm font-medium text-foreground mb-2 flex items-center gap-2">
                          <Pill className="h-4 w-4 text-primary" />
                          {language === 'hi' ? 'अनुशंसित औषधियां' : 'Recommended Medicines'}
                        </h4>
                        <div className="space-y-2">
                          {data.medicines.slice(0, 3).map((medId) => {
                            const med = getMedicine(medId);
                            if (!med) return null;
                            return (
                              <LocalizedLink
                                key={medId}
                                to={`/medicines/${med.id}`}
                                onClick={(e) => e.stopPropagation()}
                                className="flex items-center justify-between p-2 bg-muted/50 rounded-lg hover:bg-muted transition-colors"
                              >
                                <div>
                                  <p className="text-sm font-medium text-foreground">{med.name}</p>
                                  <p className="text-xs text-muted-foreground">{med.brand}</p>
                                </div>
                                <ChevronRight className="h-4 w-4 text-muted-foreground" />
                              </LocalizedLink>
                            );
                          })}
                        </div>
                      </div>

                      {/* View All Link */}
                      <LocalizedLink
                        to={`/medicines?search=${encodeURIComponent(symptom)}`}
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center text-sm text-primary hover:underline"
                      >
                        {language === 'hi' ? 'सभी औषधियां देखें' : 'View all medicines'}
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </LocalizedLink>
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredSymptoms.length === 0 && (
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

        {/* Browse All Link */}
        <div className="text-center mt-8">
          <LocalizedLink
            to="/herb-mapping"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
          >
            {language === 'hi' ? 'संपूर्ण जड़ी-बूटी गाइड देखें' : 'View Complete Herb Guide'}
            <ChevronRight className="h-5 w-5" />
          </LocalizedLink>
        </div>
      </div>
    </section>
  );
};

export default SymptomHerbMapping;
