import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Calendar, Clock, User, ArrowRight, Search, Tag, TrendingUp, Mail, Loader2, Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Layout from "@/components/layout/Layout";
import LocalizedLink from "@/components/LocalizedLink";
import { blogPosts, categories } from "@/data/blogPosts";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

// Import hero images for each category
import fundamentalsHero from "@/assets/blog/fundamentals-hero.jpg";
import doshasHero from "@/assets/blog/doshas-hero.jpg";
import herbsHero from "@/assets/blog/herbs-hero.jpg";
import lifestyleHero from "@/assets/blog/lifestyle-hero.jpg";
import dietHero from "@/assets/blog/diet-hero.jpg";
import yogaHero from "@/assets/blog/yoga-hero.jpg";
import childrenHero from "@/assets/blog/children-hero.jpg";
import womenHero from "@/assets/blog/women-hero.jpg";
import seasonalHero from "@/assets/blog/seasonal-hero.jpg";
import diseasesHero from "@/assets/blog/diseases-hero.jpg";

// Category-based hero images mapping
const categoryHeroImages: Record<string, string> = {
  fundamentals: fundamentalsHero,
  doshas: doshasHero,
  herbs: herbsHero,
  lifestyle: lifestyleHero,
  diet: dietHero,
  yoga: yogaHero,
  children: childrenHero,
  women: womenHero,
  seasonal: seasonalHero,
  diseases: diseasesHero
};

const getCategoryImage = (categoryId: string) => {
  return categoryHeroImages[categoryId] || fundamentalsHero;
};

const Blog = () => {
  const { language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [email, setEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  useEffect(() => {
    document.title = language === "hi" 
      ? "आयुर्वेद ब्लॉग - स्वास्थ्य, जड़ी-बूटियाँ और प्राकृतिक उपचार | AyurVeda"
      : "Ayurveda Blog - Health, Herbs & Natural Remedies | AyurVeda";
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', language === "hi"
      ? "आयुर्वेद, दोष, जड़ी-बूटियों, योग और प्राकृतिक स्वास्थ्य पर विशेषज्ञ लेख पढ़ें।"
      : "Read expert articles on Ayurveda, doshas, herbs, yoga, and natural health."
    );

    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) existingScript.remove();

    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Blog",
      "name": "AyurVeda Blog",
      "description": "Expert articles on Ayurveda, doshas, herbs, yoga, and natural health",
      "url": window.location.href,
      "publisher": {
        "@type": "Organization",
        "name": "AyurVeda"
      },
      "blogPost": blogPosts.slice(0, 10).map(post => ({
        "@type": "BlogPosting",
        "headline": language === "hi" ? post.titleHi : post.title,
        "description": language === "hi" ? post.excerptHi : post.excerpt,
        "datePublished": post.date,
        "author": {
          "@type": "Person",
          "name": language === "hi" ? post.authorHi : post.author
        }
      }))
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(jsonLd);
    document.head.appendChild(script);

    return () => {
      const scriptEl = document.querySelector('script[type="application/ld+json"]');
      if (scriptEl) scriptEl.remove();
    };
  }, [language]);

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = searchQuery === "" || 
      (language === "hi" ? post.titleHi : post.title).toLowerCase().includes(searchQuery.toLowerCase()) ||
      (language === "hi" ? post.excerptHi : post.excerpt).toLowerCase().includes(searchQuery.toLowerCase()) ||
      (language === "hi" ? post.tagsHi : post.tags).some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);
  const recentPosts = [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 5);

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString(language === "hi" ? "hi-IN" : "en-US", {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Newsletter subscription handler
  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast.error(language === "hi" ? "कृपया वैध ईमेल दर्ज करें" : "Please enter a valid email");
      return;
    }

    setIsSubscribing(true);
    
    try {
      const { error } = await supabase
        .from('newsletter_subscribers')
        .insert({ email: email.trim(), source: 'blog' });
      
      if (error) {
        if (error.code === '23505') {
          toast.info(language === "hi" ? "आप पहले से सब्सक्राइब हैं!" : "You're already subscribed!");
        } else {
          throw error;
        }
      } else {
        // Send welcome email
        try {
          await supabase.functions.invoke('send-welcome-email', {
            body: { email: email.trim(), language }
          });
        } catch (emailError) {
          console.error("Failed to send welcome email:", emailError);
        }
        
        setIsSubscribed(true);
        toast.success(
          language === "hi" 
            ? "सफलतापूर्वक सब्सक्राइब किया! स्वागत ईमेल भेजा गया।" 
            : "Successfully subscribed! Welcome email sent."
        );
      }
      setEmail("");
    } catch (error) {
      console.error("Subscription error:", error);
      toast.error(language === "hi" ? "सब्सक्रिप्शन विफल। कृपया पुनः प्रयास करें।" : "Subscription failed. Please try again.");
    } finally {
      setIsSubscribing(false);
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-accent/10 to-background py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="mb-4 bg-primary/20 text-primary">
              {language === "hi" ? "आयुर्वेद ब्लॉग" : "Ayurveda Blog"}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {language === "hi" 
                ? "प्राचीन ज्ञान, आधुनिक स्वास्थ्य" 
                : "Ancient Wisdom, Modern Wellness"}
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              {language === "hi"
                ? "आयुर्वेद, योग, जड़ी-बूटियों और समग्र स्वास्थ्य पर विशेषज्ञ लेख पढ़ें।"
                : "Read expert articles on Ayurveda, yoga, herbs, and holistic health."}
            </p>
            
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                type="text"
                placeholder={language === "hi" ? "लेख खोजें..." : "Search articles..."}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-6 text-lg rounded-full border-2 focus:border-primary"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && searchQuery === "" && selectedCategory === "all" && (
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 mb-8">
              <TrendingUp className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold text-foreground">
                {language === "hi" ? "विशेष लेख" : "Featured Articles"}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredPosts.map((post) => {
                const category = categories.find(c => c.id === post.category);
                return (
                  <LocalizedLink key={post.id} to={`/blog/${post.id}`}>
                    <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-primary/20 overflow-hidden">
                      <div className="relative h-40 overflow-hidden">
                        <img 
                          src={getCategoryImage(post.category)} 
                          alt={language === "hi" ? post.titleHi : post.title}
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <Badge className="absolute bottom-3 left-3 bg-white/90 text-foreground text-xs">
                          {category ? (language === "hi" ? category.labelHi : category.label) : "Ayurveda"}
                        </Badge>
                      </div>
                      <CardContent className="pt-4 pb-3">
                        <h3 className="font-bold text-foreground mb-2 line-clamp-2 hover:text-primary transition-colors">
                          {language === "hi" ? post.titleHi : post.title}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {language === "hi" ? post.excerptHi : post.excerpt}
                        </p>
                      </CardContent>
                      <CardFooter className="pt-0 text-xs text-muted-foreground">
                        <div className="flex items-center gap-3">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {language === "hi" ? post.readTimeHi : post.readTime}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {formatDate(post.date)}
                          </span>
                        </div>
                      </CardFooter>
                    </Card>
                  </LocalizedLink>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Articles Grid */}
            <div className="lg:col-span-2">
              {/* Category Tabs */}
              <Tabs defaultValue="all" className="mb-8">
                <TabsList className="flex flex-wrap h-auto gap-2 bg-transparent">
                  <TabsTrigger 
                    value="all" 
                    onClick={() => setSelectedCategory("all")}
                    className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                  >
                    {language === "hi" ? "सभी" : "All"}
                  </TabsTrigger>
                  {categories.slice(0, 6).map((category) => (
                    <TabsTrigger 
                      key={category.id} 
                      value={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                    >
                      {language === "hi" ? category.labelHi : category.label}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>

              {/* Articles List */}
              <div className="space-y-6">
                {filteredPosts.length === 0 ? (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground">
                      {language === "hi" ? "कोई लेख नहीं मिला" : "No articles found"}
                    </p>
                  </div>
                ) : (
                  filteredPosts.map((post) => {
                    const category = categories.find(c => c.id === post.category);
                    return (
                      <LocalizedLink key={post.id} to={`/blog/${post.id}`}>
                        <Card className="hover:shadow-lg transition-all duration-300 hover:border-primary/40 overflow-hidden">
                          <div className="flex flex-col md:flex-row">
                            <div className="md:w-1/3">
                              <div className="aspect-video md:aspect-square h-full relative overflow-hidden">
                                <img 
                                  src={getCategoryImage(post.category)} 
                                  alt={language === "hi" ? post.titleHi : post.title}
                                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/10" />
                              </div>
                            </div>
                            <div className="md:w-2/3 p-4 md:p-6">
                              <div className="flex items-center gap-2 mb-3">
                                <Badge variant="secondary" className="text-xs">
                                  {category ? (language === "hi" ? category.labelHi : category.label) : "Ayurveda"}
                                </Badge>
                                {post.featured && (
                                  <Badge className="bg-yellow-500/20 text-yellow-600 text-xs">
                                    {language === "hi" ? "विशेष" : "Featured"}
                                  </Badge>
                                )}
                              </div>
                              <h3 className="text-xl font-bold text-foreground mb-2 hover:text-primary transition-colors">
                                {language === "hi" ? post.titleHi : post.title}
                              </h3>
                              <p className="text-muted-foreground mb-4 line-clamp-2">
                                {language === "hi" ? post.excerptHi : post.excerpt}
                              </p>
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                  <span className="flex items-center gap-1">
                                    <User className="w-4 h-4" />
                                    {language === "hi" ? post.authorHi : post.author}
                                  </span>
                                  <span className="flex items-center gap-1">
                                    <Calendar className="w-4 h-4" />
                                    {formatDate(post.date)}
                                  </span>
                                  <span className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    {language === "hi" ? post.readTimeHi : post.readTime}
                                  </span>
                                </div>
                                <ArrowRight className="w-5 h-5 text-primary" />
                              </div>
                            </div>
                          </div>
                        </Card>
                      </LocalizedLink>
                    );
                  })
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Categories */}
              <Card>
                <CardHeader>
                  <h3 className="font-bold text-foreground flex items-center gap-2">
                    <Tag className="w-5 h-5 text-primary" />
                    {language === "hi" ? "श्रेणियाँ" : "Categories"}
                  </h3>
                </CardHeader>
                <CardContent className="space-y-2">
                  {categories.map((category) => {
                    const count = blogPosts.filter(p => p.category === category.id).length;
                    return (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`w-full flex items-center justify-between p-2 rounded-lg transition-colors ${
                          selectedCategory === category.id 
                            ? "bg-primary text-primary-foreground" 
                            : "hover:bg-muted"
                        }`}
                      >
                        <span>{language === "hi" ? category.labelHi : category.label}</span>
                        <Badge variant="secondary" className="ml-2">{count}</Badge>
                      </button>
                    );
                  })}
                </CardContent>
              </Card>

              {/* Recent Posts */}
              <Card>
                <CardHeader>
                  <h3 className="font-bold text-foreground flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary" />
                    {language === "hi" ? "हाल के लेख" : "Recent Posts"}
                  </h3>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentPosts.map((post) => (
                    <LocalizedLink key={post.id} to={`/blog/${post.id}`}>
                      <div className="flex gap-3 hover:bg-muted p-2 rounded-lg transition-colors">
                        <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                          <img 
                            src={getCategoryImage(post.category)} 
                            alt={language === "hi" ? post.titleHi : post.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-medium text-foreground text-sm line-clamp-2 hover:text-primary transition-colors">
                            {language === "hi" ? post.titleHi : post.title}
                          </h4>
                          <p className="text-xs text-muted-foreground mt-1">
                            {formatDate(post.date)}
                          </p>
                        </div>
                      </div>
                    </LocalizedLink>
                  ))}
                </CardContent>
              </Card>

              {/* Popular Tags */}
              <Card>
                <CardHeader>
                  <h3 className="font-bold text-foreground flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    {language === "hi" ? "लोकप्रिय टैग" : "Popular Tags"}
                  </h3>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {Array.from(new Set(blogPosts.flatMap(p => language === "hi" ? p.tagsHi : p.tags)))
                      .slice(0, 15)
                      .map((tag, index) => (
                        <Badge 
                          key={index} 
                          variant="secondary" 
                          className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                          onClick={() => setSearchQuery(tag)}
                        >
                          #{tag}
                        </Badge>
                      ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-primary/20 rounded-full">
              <Mail className="w-8 h-8 text-primary" />
            </div>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            {language === "hi" 
              ? "आयुर्वेदिक स्वास्थ्य टिप्स प्राप्त करें" 
              : "Get Ayurvedic Health Tips"}
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            {language === "hi"
              ? "हमारे न्यूज़लेटर की सदस्यता लें और साप्ताहिक घरेलू उपचार और स्वास्थ्य युक्तियाँ प्राप्त करें।"
              : "Subscribe to our newsletter and receive weekly home remedies and wellness tips."}
          </p>
          
          {isSubscribed ? (
            <div className="flex items-center justify-center gap-2 text-primary">
              <Check className="w-5 h-5" />
              <span className="font-medium">
                {language === "hi" ? "सफलतापूर्वक सब्सक्राइब किया!" : "Successfully subscribed!"}
              </span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder={language === "hi" ? "आपका ईमेल" : "Your email"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1"
                required
              />
              <Button type="submit" className="bg-primary hover:bg-primary/90" disabled={isSubscribing}>
                {isSubscribing ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    {language === "hi" ? "प्रोसेसिंग..." : "Processing..."}
                  </>
                ) : (
                  language === "hi" ? "सदस्यता लें" : "Subscribe"
                )}
              </Button>
            </form>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
