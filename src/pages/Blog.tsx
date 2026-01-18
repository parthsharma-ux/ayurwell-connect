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
import { blogPosts, categories } from "@/data/blogPosts";

const categoryIcons: Record<string, any> = {
  all: BookOpen,
  fundamentals: Leaf,
  herbs: Leaf,
  remedies: Heart,
  lifestyle: Sparkles,
  diet: Heart,
  diseases: Heart,
  women: Heart,
  children: Heart,
  therapies: Brain,
  beauty: Sparkles
};
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
