import { useParams, useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect } from "react";
import { 
  Calendar, 
  Clock, 
  User, 
  ArrowLeft,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  Link2,
  Tag,
  ChevronRight,
  Bookmark,
  MessageCircle,
  ThumbsUp,
  Leaf,
  Heart,
  Brain,
  Sun,
  Baby,
  Sparkles
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Layout from "@/components/layout/Layout";
import LocalizedLink from "@/components/LocalizedLink";
import { blogPosts, categories } from "@/data/blogPosts";
import { toast } from "sonner";

// Category-based visuals for professional blog images
const categoryVisuals: Record<string, { gradient: string; icon: React.ReactNode; bgPattern: string }> = {
  fundamentals: { 
    gradient: "from-emerald-600 via-green-500 to-teal-600", 
    icon: <Leaf className="w-24 h-24 text-white/90" />,
    bgPattern: "radial-gradient(circle at 20% 80%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 50%)"
  },
  doshas: { 
    gradient: "from-purple-600 via-violet-500 to-indigo-600", 
    icon: <Sparkles className="w-24 h-24 text-white/90" />,
    bgPattern: "radial-gradient(circle at 30% 70%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 70% 30%, rgba(255,255,255,0.1) 0%, transparent 50%)"
  },
  herbs: { 
    gradient: "from-green-600 via-lime-500 to-emerald-600", 
    icon: <Leaf className="w-24 h-24 text-white/90" />,
    bgPattern: "radial-gradient(circle at 25% 75%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 75% 25%, rgba(255,255,255,0.1) 0%, transparent 50%)"
  },
  lifestyle: { 
    gradient: "from-sky-600 via-blue-500 to-cyan-600", 
    icon: <Sun className="w-24 h-24 text-white/90" />,
    bgPattern: "radial-gradient(circle at 20% 80%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 50%)"
  },
  diet: { 
    gradient: "from-orange-600 via-amber-500 to-yellow-600", 
    icon: <Heart className="w-24 h-24 text-white/90" />,
    bgPattern: "radial-gradient(circle at 30% 70%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 70% 30%, rgba(255,255,255,0.1) 0%, transparent 50%)"
  },
  yoga: { 
    gradient: "from-rose-600 via-pink-500 to-fuchsia-600", 
    icon: <Sparkles className="w-24 h-24 text-white/90" />,
    bgPattern: "radial-gradient(circle at 25% 75%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 75% 25%, rgba(255,255,255,0.1) 0%, transparent 50%)"
  },
  children: { 
    gradient: "from-cyan-600 via-teal-500 to-emerald-600", 
    icon: <Baby className="w-24 h-24 text-white/90" />,
    bgPattern: "radial-gradient(circle at 20% 80%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 50%)"
  },
  women: { 
    gradient: "from-pink-600 via-rose-500 to-red-600", 
    icon: <Heart className="w-24 h-24 text-white/90" />,
    bgPattern: "radial-gradient(circle at 30% 70%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 70% 30%, rgba(255,255,255,0.1) 0%, transparent 50%)"
  },
  seasonal: { 
    gradient: "from-amber-600 via-yellow-500 to-orange-600", 
    icon: <Sun className="w-24 h-24 text-white/90" />,
    bgPattern: "radial-gradient(circle at 25% 75%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 75% 25%, rgba(255,255,255,0.1) 0%, transparent 50%)"
  },
  diseases: { 
    gradient: "from-blue-600 via-indigo-500 to-violet-600", 
    icon: <Brain className="w-24 h-24 text-white/90" />,
    bgPattern: "radial-gradient(circle at 20% 80%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 50%)"
  }
};

const getCategoryVisual = (categoryId: string) => {
  return categoryVisuals[categoryId] || categoryVisuals.fundamentals;
};

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { language, t } = useLanguage();

  const post = blogPosts.find(p => p.id === id);
  const category = categories.find(c => c.id === post?.category);

  // Get related posts (same category, excluding current)
  const relatedPosts = blogPosts
    .filter(p => p.category === post?.category && p.id !== id)
    .slice(0, 3);

  // Get recent posts (excluding current)
  const recentPosts = blogPosts
    .filter(p => p.id !== id)
    .slice(0, 4);

  useEffect(() => {
    if (post) {
      // SEO: Update document title and meta
      const title = language === "hi" ? post.titleHi : post.title;
      const description = language === "hi" ? post.excerptHi : post.excerpt;
      
      document.title = `${title} | AyurVeda Blog`;
      
      // Update meta description
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name', 'description');
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute('content', description);

      // Update OG tags
      const setOG = (property: string, content: string) => {
        let el = document.querySelector(`meta[property="${property}"]`);
        if (!el) {
          el = document.createElement('meta');
          el.setAttribute('property', property);
          document.head.appendChild(el);
        }
        el.setAttribute('content', content);
      };

      setOG('og:title', title);
      setOG('og:description', description);
      setOG('og:type', 'article');
      setOG('og:url', window.location.href);
      setOG('article:published_time', post.date);
      setOG('article:author', language === "hi" ? post.authorHi : post.author);
      
      // Twitter cards
      const setTwitter = (name: string, content: string) => {
        let el = document.querySelector(`meta[name="${name}"]`);
        if (!el) {
          el = document.createElement('meta');
          el.setAttribute('name', name);
          document.head.appendChild(el);
        }
        el.setAttribute('content', content);
      };

      setTwitter('twitter:card', 'summary_large_image');
      setTwitter('twitter:title', title);
      setTwitter('twitter:description', description);

      // Add JSON-LD structured data for articles (good for AdSense)
      const existingScript = document.querySelector('script[type="application/ld+json"]');
      if (existingScript) existingScript.remove();

      const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": title,
        "description": description,
        "author": {
          "@type": "Person",
          "name": language === "hi" ? post.authorHi : post.author
        },
        "datePublished": post.date,
        "dateModified": post.date,
        "publisher": {
          "@type": "Organization",
          "name": "AyurVeda",
          "logo": {
            "@type": "ImageObject",
            "url": "https://ayurveda.app/logo.png"
          }
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": window.location.href
        },
        "articleSection": category ? (language === "hi" ? category.labelHi : category.label) : "Ayurveda",
        "keywords": (language === "hi" ? post.tagsHi : post.tags).join(", ")
      };

      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(jsonLd);
      document.head.appendChild(script);

      return () => {
        const scriptEl = document.querySelector('script[type="application/ld+json"]');
        if (scriptEl) scriptEl.remove();
      };
    }
  }, [post, language]);

  if (!post) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">
            {language === "hi" ? "पोस्ट नहीं मिली" : "Post Not Found"}
          </h1>
          <Button onClick={() => navigate(`/${language}/blog`)}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            {language === "hi" ? "ब्लॉग पर वापस जाएं" : "Back to Blog"}
          </Button>
        </div>
      </Layout>
    );
  }

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareTitle = language === "hi" ? post.titleHi : post.title;

  const handleShare = (platform: string) => {
    let url = '';
    
    switch (platform) {
      case 'facebook':
        url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
        break;
      case 'twitter':
        url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`;
        break;
      case 'linkedin':
        url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
        break;
      case 'whatsapp':
        url = `https://wa.me/?text=${encodeURIComponent(shareTitle + ' ' + shareUrl)}`;
        break;
      case 'copy':
        navigator.clipboard.writeText(shareUrl);
        toast.success(language === "hi" ? "लिंक कॉपी किया गया!" : "Link copied!");
        return;
    }

    if (url) {
      window.open(url, '_blank', 'width=600,height=400');
    }
  };

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
      {/* Breadcrumb */}
      <nav className="bg-muted/50 py-3 border-b">
        <div className="container mx-auto px-4">
          <ol className="flex items-center gap-2 text-sm text-muted-foreground" itemScope itemType="https://schema.org/BreadcrumbList">
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <LocalizedLink to="/" className="hover:text-primary transition-colors" itemProp="item">
                <span itemProp="name">{language === "hi" ? "होम" : "Home"}</span>
              </LocalizedLink>
              <meta itemProp="position" content="1" />
            </li>
            <ChevronRight className="w-4 h-4" />
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <LocalizedLink to="/blog" className="hover:text-primary transition-colors" itemProp="item">
                <span itemProp="name">{language === "hi" ? "ब्लॉग" : "Blog"}</span>
              </LocalizedLink>
              <meta itemProp="position" content="2" />
            </li>
            <ChevronRight className="w-4 h-4" />
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <span className="text-foreground font-medium" itemProp="name">
                {language === "hi" ? post.titleHi.slice(0, 40) + "..." : post.title.slice(0, 40) + "..."}
              </span>
              <meta itemProp="position" content="3" />
            </li>
          </ol>
        </div>
      </nav>

      <article className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Article Header */}
            <header className="mb-8">
              <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
                {category ? (language === "hi" ? category.labelHi : category.label) : "Ayurveda"}
              </Badge>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                {language === "hi" ? post.titleHi : post.title}
              </h1>

              <p className="text-lg text-muted-foreground mb-6">
                {language === "hi" ? post.excerptHi : post.excerpt}
              </p>

              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <User className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">
                      {language === "hi" ? post.authorHi : post.author}
                    </p>
                    <p className="text-xs">
                      {language === "hi" ? "आयुर्वेद विशेषज्ञ" : "Ayurveda Expert"}
                    </p>
                  </div>
                </div>
                <Separator orientation="vertical" className="h-6" />
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{formatDate(post.date)}</span>
                </div>
                <Separator orientation="vertical" className="h-6" />
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{language === "hi" ? post.readTimeHi : post.readTime} {language === "hi" ? "पढ़ने का समय" : "read"}</span>
                </div>
              </div>

              {/* Social Share Buttons */}
              <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
                <span className="text-sm font-medium text-foreground flex items-center gap-2">
                  <Share2 className="w-4 h-4" />
                  {language === "hi" ? "शेयर करें:" : "Share:"}
                </span>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="rounded-full hover:bg-blue-600 hover:text-white hover:border-blue-600"
                  onClick={() => handleShare('facebook')}
                >
                  <Facebook className="w-4 h-4" />
                </Button>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="rounded-full hover:bg-sky-500 hover:text-white hover:border-sky-500"
                  onClick={() => handleShare('twitter')}
                >
                  <Twitter className="w-4 h-4" />
                </Button>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="rounded-full hover:bg-blue-700 hover:text-white hover:border-blue-700"
                  onClick={() => handleShare('linkedin')}
                >
                  <Linkedin className="w-4 h-4" />
                </Button>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="rounded-full hover:bg-green-600 hover:text-white hover:border-green-600"
                  onClick={() => handleShare('whatsapp')}
                >
                  <MessageCircle className="w-4 h-4" />
                </Button>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="rounded-full hover:bg-gray-700 hover:text-white hover:border-gray-700"
                  onClick={() => handleShare('copy')}
                >
                  <Link2 className="w-4 h-4" />
                </Button>
              </div>
            </header>

            {/* Featured Image - Professional Category-based Design */}
            <div 
              className={`relative aspect-video rounded-xl overflow-hidden mb-8 bg-gradient-to-br ${getCategoryVisual(post.category).gradient} flex items-center justify-center shadow-lg`}
              style={{ backgroundImage: getCategoryVisual(post.category).bgPattern }}
            >
              <div className="absolute inset-0 bg-black/10" />
              <div className="absolute inset-0 backdrop-blur-[0.5px]" />
              <div className="relative z-10 text-center">
                <div className="mb-4 transform hover:scale-110 transition-transform duration-500">
                  {getCategoryVisual(post.category).icon}
                </div>
                <p className="text-white/90 text-xl font-semibold">
                  {category ? (language === "hi" ? category.labelHi : category.label) : "Ayurveda"}
                </p>
                <p className="text-white/70 text-sm mt-1">
                  {language === "hi" ? "आयुर्वेदिक ज्ञान" : "Ayurvedic Wisdom"}
                </p>
              </div>
              {/* Decorative elements */}
              <div className="absolute top-4 left-4 w-20 h-20 border-2 border-white/20 rounded-full" />
              <div className="absolute bottom-4 right-4 w-32 h-32 border-2 border-white/10 rounded-full" />
              <div className="absolute top-1/2 left-8 w-2 h-16 bg-white/10 rounded-full transform -translate-y-1/2" />
              <div className="absolute top-1/2 right-8 w-2 h-16 bg-white/10 rounded-full transform -translate-y-1/2" />
            </div>

            {/* Ad Placeholder - Top */}
            <div className="mb-8 p-4 bg-muted/30 rounded-lg border-2 border-dashed border-muted-foreground/20 text-center">
              <p className="text-xs text-muted-foreground">
                {language === "hi" ? "विज्ञापन स्थान" : "Advertisement Space"}
              </p>
            </div>

            {/* Article Content */}
            <div 
              className="prose prose-lg max-w-none 
                prose-headings:text-foreground prose-headings:font-bold
                prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-h2:border-b prose-h2:pb-2 prose-h2:border-primary/20
                prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3
                prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-4
                prose-ul:my-4 prose-ul:list-disc prose-ul:pl-6
                prose-ol:my-4 prose-ol:list-decimal prose-ol:pl-6
                prose-li:text-muted-foreground prose-li:mb-2
                prose-strong:text-foreground prose-strong:font-semibold
                prose-a:text-primary prose-a:underline hover:prose-a:no-underline
                prose-table:w-full prose-table:border-collapse
                prose-th:border prose-th:border-border prose-th:bg-muted prose-th:p-2 prose-th:text-left
                prose-td:border prose-td:border-border prose-td:p-2"
              dangerouslySetInnerHTML={{ 
                __html: language === "hi" ? post.contentHi : post.content 
              }}
            />

            {/* Ad Placeholder - Mid Content */}
            <div className="my-8 p-4 bg-muted/30 rounded-lg border-2 border-dashed border-muted-foreground/20 text-center">
              <p className="text-xs text-muted-foreground">
                {language === "hi" ? "विज्ञापन स्थान" : "Advertisement Space"}
              </p>
            </div>

            {/* Tags */}
            <div className="mt-8 pt-6 border-t">
              <div className="flex items-center gap-2 flex-wrap">
                <Tag className="w-5 h-5 text-primary" />
                <span className="font-medium text-foreground mr-2">
                  {language === "hi" ? "टैग:" : "Tags:"}
                </span>
                {(language === "hi" ? post.tagsHi : post.tags).map((tag, index) => (
                  <Badge key={index} variant="secondary" className="cursor-pointer hover:bg-primary/20">
                    #{tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Author Box */}
            <div className="mt-8 p-6 bg-muted/50 rounded-xl">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <User className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">
                    {language === "hi" ? "लेखक" : "Written by"}
                  </p>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {language === "hi" ? post.authorHi : post.author}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {language === "hi" 
                      ? "एक अनुभवी आयुर्वेद विशेषज्ञ जो पारंपरिक भारतीय चिकित्सा और समग्र स्वास्थ्य के बारे में भावुक हैं।"
                      : "An experienced Ayurveda practitioner passionate about traditional Indian medicine and holistic wellness."
                    }
                  </p>
                </div>
              </div>
            </div>

            {/* Engagement Section */}
            <div className="mt-8 flex items-center justify-between p-4 bg-muted/30 rounded-lg">
              <div className="flex items-center gap-4">
                <Button variant="outline" className="gap-2">
                  <ThumbsUp className="w-4 h-4" />
                  {language === "hi" ? "सहायक" : "Helpful"}
                </Button>
                <Button variant="outline" className="gap-2">
                  <Bookmark className="w-4 h-4" />
                  {language === "hi" ? "सहेजें" : "Save"}
                </Button>
              </div>
              <div className="flex items-center gap-2">
                <Share2 className="w-4 h-4 text-muted-foreground" />
                <Button variant="ghost" size="sm" onClick={() => handleShare('copy')}>
                  {language === "hi" ? "लिंक कॉपी करें" : "Copy Link"}
                </Button>
              </div>
            </div>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <section className="mt-12">
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <span className="w-1 h-6 bg-primary rounded-full" />
                  {language === "hi" ? "संबंधित लेख" : "Related Articles"}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedPosts.map((relPost) => (
                    <LocalizedLink key={relPost.id} to={`/blog/${relPost.id}`}>
                      <Card className="h-full hover:shadow-lg transition-shadow group">
                        <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                          <Tag className="w-8 h-8 text-primary/50 group-hover:text-primary transition-colors" />
                        </div>
                        <CardContent className="p-4">
                          <Badge variant="secondary" className="mb-2 text-xs">
                            {categories.find(c => c.id === relPost.category)?.[language === "hi" ? "labelHi" : "label"]}
                          </Badge>
                          <h3 className="font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                            {language === "hi" ? relPost.titleHi : relPost.title}
                          </h3>
                          <p className="text-xs text-muted-foreground mt-2">
                            {language === "hi" ? relPost.readTimeHi : relPost.readTime}
                          </p>
                        </CardContent>
                      </Card>
                    </LocalizedLink>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Ad Placeholder - Sidebar */}
              <div className="p-4 bg-muted/30 rounded-lg border-2 border-dashed border-muted-foreground/20 text-center min-h-[250px] flex items-center justify-center">
                <p className="text-xs text-muted-foreground">
                  {language === "hi" ? "विज्ञापन स्थान" : "Advertisement Space"}
                </p>
              </div>

              {/* Table of Contents */}
              <Card>
                <CardContent className="p-4">
                  <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                    <span className="w-1 h-5 bg-primary rounded-full" />
                    {language === "hi" ? "इस लेख में" : "In This Article"}
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                        • {language === "hi" ? "परिचय" : "Introduction"}
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                        • {language === "hi" ? "मुख्य लाभ" : "Key Benefits"}
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                        • {language === "hi" ? "उपयोग कैसे करें" : "How to Use"}
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                        • {language === "hi" ? "निष्कर्ष" : "Conclusion"}
                      </a>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Recent Posts */}
              <Card>
                <CardContent className="p-4">
                  <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                    <span className="w-1 h-5 bg-accent rounded-full" />
                    {language === "hi" ? "हाल के लेख" : "Recent Posts"}
                  </h3>
                  <div className="space-y-4">
                    {recentPosts.map((recentPost) => (
                      <LocalizedLink 
                        key={recentPost.id} 
                        to={`/blog/${recentPost.id}`}
                        className="flex gap-3 group"
                      >
                        <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 flex-shrink-0 flex items-center justify-center">
                          <Tag className="w-6 h-6 text-primary/50" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-medium text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                            {language === "hi" ? recentPost.titleHi : recentPost.title}
                          </h4>
                          <p className="text-xs text-muted-foreground mt-1">
                            {formatDate(recentPost.date)}
                          </p>
                        </div>
                      </LocalizedLink>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Categories */}
              <Card>
                <CardContent className="p-4">
                  <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                    <span className="w-1 h-5 bg-primary rounded-full" />
                    {language === "hi" ? "श्रेणियां" : "Categories"}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {categories.filter(c => c.id !== "all").map((cat) => (
                      <LocalizedLink key={cat.id} to={`/blog?category=${cat.id}`}>
                        <Badge 
                          variant="secondary" 
                          className="cursor-pointer hover:bg-primary/20 transition-colors"
                        >
                          {language === "hi" ? cat.labelHi : cat.label}
                        </Badge>
                      </LocalizedLink>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Newsletter CTA */}
              <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
                <CardContent className="p-6 text-center">
                  <h3 className="font-bold text-foreground mb-2">
                    {language === "hi" ? "अपडेट रहें" : "Stay Updated"}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {language === "hi" 
                      ? "आयुर्वेदिक स्वास्थ्य युक्तियां अपने इनबॉक्स में पाएं"
                      : "Get Ayurvedic health tips in your inbox"
                    }
                  </p>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    {language === "hi" ? "सब्सक्राइब करें" : "Subscribe"}
                  </Button>
                </CardContent>
              </Card>

              {/* Ad Placeholder - Sidebar Bottom */}
              <div className="p-4 bg-muted/30 rounded-lg border-2 border-dashed border-muted-foreground/20 text-center min-h-[250px] flex items-center justify-center">
                <p className="text-xs text-muted-foreground">
                  {language === "hi" ? "विज्ञापन स्थान" : "Advertisement Space"}
                </p>
              </div>
            </div>
          </aside>
        </div>
      </article>

      {/* Bottom Ad Placeholder */}
      <div className="container mx-auto px-4 pb-8">
        <div className="p-4 bg-muted/30 rounded-lg border-2 border-dashed border-muted-foreground/20 text-center">
          <p className="text-xs text-muted-foreground">
            {language === "hi" ? "विज्ञापन स्थान" : "Advertisement Space"}
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default BlogDetail;
