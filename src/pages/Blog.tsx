import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Calendar, Clock, User, ArrowRight, Search, Tag, TrendingUp, Bookmark, Leaf, Heart, Brain, Sun, Baby, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Layout from "@/components/layout/Layout";
import LocalizedLink from "@/components/LocalizedLink";
import { blogPosts, categories } from "@/data/blogPosts";

// Category-based image backgrounds and icons for visual appeal
const categoryImages: Record<string, { gradient: string; icon: React.ReactNode; pattern: string }> = {
  fundamentals: { 
    gradient: "from-emerald-500/30 via-green-400/20 to-teal-500/30", 
    icon: <Leaf className="w-16 h-16 text-emerald-600" />,
    pattern: "radial-gradient(circle at 20% 80%, rgba(16, 185, 129, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(20, 184, 166, 0.15) 0%, transparent 50%)"
  },
  doshas: { 
    gradient: "from-purple-500/30 via-violet-400/20 to-indigo-500/30", 
    icon: <Sparkles className="w-16 h-16 text-purple-600" />,
    pattern: "radial-gradient(circle at 30% 70%, rgba(139, 92, 246, 0.15) 0%, transparent 50%), radial-gradient(circle at 70% 30%, rgba(99, 102, 241, 0.15) 0%, transparent 50%)"
  },
  herbs: { 
    gradient: "from-green-500/30 via-lime-400/20 to-emerald-500/30", 
    icon: <Leaf className="w-16 h-16 text-green-600" />,
    pattern: "radial-gradient(circle at 25% 75%, rgba(34, 197, 94, 0.15) 0%, transparent 50%), radial-gradient(circle at 75% 25%, rgba(16, 185, 129, 0.15) 0%, transparent 50%)"
  },
  lifestyle: { 
    gradient: "from-sky-500/30 via-blue-400/20 to-cyan-500/30", 
    icon: <Sun className="w-16 h-16 text-sky-600" />,
    pattern: "radial-gradient(circle at 20% 80%, rgba(14, 165, 233, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(6, 182, 212, 0.15) 0%, transparent 50%)"
  },
  diet: { 
    gradient: "from-orange-500/30 via-amber-400/20 to-yellow-500/30", 
    icon: <Heart className="w-16 h-16 text-orange-600" />,
    pattern: "radial-gradient(circle at 30% 70%, rgba(249, 115, 22, 0.15) 0%, transparent 50%), radial-gradient(circle at 70% 30%, rgba(234, 179, 8, 0.15) 0%, transparent 50%)"
  },
  yoga: { 
    gradient: "from-rose-500/30 via-pink-400/20 to-fuchsia-500/30", 
    icon: <Sparkles className="w-16 h-16 text-rose-600" />,
    pattern: "radial-gradient(circle at 25% 75%, rgba(244, 63, 94, 0.15) 0%, transparent 50%), radial-gradient(circle at 75% 25%, rgba(217, 70, 239, 0.15) 0%, transparent 50%)"
  },
  children: { 
    gradient: "from-cyan-500/30 via-teal-400/20 to-emerald-500/30", 
    icon: <Baby className="w-16 h-16 text-cyan-600" />,
    pattern: "radial-gradient(circle at 20% 80%, rgba(6, 182, 212, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(16, 185, 129, 0.15) 0%, transparent 50%)"
  },
  women: { 
    gradient: "from-pink-500/30 via-rose-400/20 to-red-500/30", 
    icon: <Heart className="w-16 h-16 text-pink-600" />,
    pattern: "radial-gradient(circle at 30% 70%, rgba(236, 72, 153, 0.15) 0%, transparent 50%), radial-gradient(circle at 70% 30%, rgba(239, 68, 68, 0.15) 0%, transparent 50%)"
  },
  seasonal: { 
    gradient: "from-amber-500/30 via-yellow-400/20 to-orange-500/30", 
    icon: <Sun className="w-16 h-16 text-amber-600" />,
    pattern: "radial-gradient(circle at 25% 75%, rgba(245, 158, 11, 0.15) 0%, transparent 50%), radial-gradient(circle at 75% 25%, rgba(249, 115, 22, 0.15) 0%, transparent 50%)"
  },
  diseases: { 
    gradient: "from-blue-500/30 via-indigo-400/20 to-violet-500/30", 
    icon: <Brain className="w-16 h-16 text-blue-600" />,
    pattern: "radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)"
  }
};

const getCategoryVisual = (categoryId: string) => {
  return categoryImages[categoryId] || categoryImages.fundamentals;
};

const Blog = () => {
  const { language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

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
                    <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-primary/20">
                      <CardHeader className="pb-3">
                        <Badge variant="secondary" className="w-fit text-xs">
                          {category ? (language === "hi" ? category.labelHi : category.label) : "Ayurveda"}
                        </Badge>
                      </CardHeader>
                      <CardContent className="pb-3">
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
                            <div className="md:w-1/3 p-4">
                              <div 
                                className={`aspect-video md:aspect-square rounded-lg bg-gradient-to-br ${getCategoryVisual(post.category).gradient} flex items-center justify-center relative overflow-hidden`}
                                style={{ backgroundImage: getCategoryVisual(post.category).pattern }}
                              >
                                <div className="absolute inset-0 bg-white/5 backdrop-blur-[1px]" />
                                <div className="relative z-10 transform hover:scale-110 transition-transform duration-300">
                                  {getCategoryVisual(post.category).icon}
                                </div>
                              </div>
                            </div>
                            <div className="md:w-2/3 p-4 md:pl-0">
                              <div className="flex items-center gap-2 mb-2">
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
              {/* Ad Placeholder */}
              <div className="p-6 bg-muted/30 rounded-lg border-2 border-dashed border-muted-foreground/20 text-center">
                <p className="text-sm text-muted-foreground">
                  {language === "hi" ? "विज्ञापन स्थान" : "Advertisement Space"}
                </p>
              </div>

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
                        <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
                          <Bookmark className="w-6 h-6 text-primary/60" />
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

              {/* Ad Placeholder */}
              <div className="p-6 bg-muted/30 rounded-lg border-2 border-dashed border-muted-foreground/20 text-center">
                <p className="text-sm text-muted-foreground">
                  {language === "hi" ? "विज्ञापन स्थान" : "Advertisement Space"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            {language === "hi" 
              ? "आयुर्वेदिक स्वास्थ्य टिप्स प्राप्त करें" 
              : "Get Ayurvedic Health Tips"}
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            {language === "hi"
              ? "हमारे न्यूज़लेटर की सदस्यता लें और साप्ताहिक स्वास्थ्य युक्तियाँ प्राप्त करें।"
              : "Subscribe to our newsletter and receive weekly wellness tips."}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder={language === "hi" ? "आपका ईमेल" : "Your email"}
              className="flex-1"
            />
            <Button className="bg-primary hover:bg-primary/90">
              {language === "hi" ? "सदस्यता लें" : "Subscribe"}
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
