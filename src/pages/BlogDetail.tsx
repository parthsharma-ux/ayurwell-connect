import { useParams, useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect, useState, useMemo } from "react";
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
  Mail,
  Loader2,
  Check
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Layout from "@/components/layout/Layout";
import LocalizedLink from "@/components/LocalizedLink";
import { blogPosts, categories } from "@/data/blogPosts";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

// Import professional hero images
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

// Category to hero image mapping
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

interface TableOfContentsItem {
  id: string;
  text: string;
  level: number;
}

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { language, t } = useLanguage();
  const [activeHeading, setActiveHeading] = useState<string>("");
  const [email, setEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const post = blogPosts.find(p => p.id === id);
  const category = categories.find(c => c.id === post?.category);

  // Parse headings from content for dynamic TOC
  const tableOfContents = useMemo(() => {
    if (!post) return [];
    
    const content = language === "hi" ? post.contentHi : post.content;
    const headingRegex = /<h([2-3])[^>]*>([^<]+)<\/h[2-3]>/gi;
    const headings: TableOfContentsItem[] = [];
    let match;
    
    while ((match = headingRegex.exec(content)) !== null) {
      const level = parseInt(match[1]);
      const text = match[2].trim();
      const id = text.toLowerCase().replace(/[^a-z0-9\u0900-\u097F]+/gi, '-').replace(/(^-|-$)/g, '');
      headings.push({ id, text, level });
    }
    
    return headings;
  }, [post, language]);

  // Process content to add IDs to headings
  const processedContent = useMemo(() => {
    if (!post) return "";
    
    let content = language === "hi" ? post.contentHi : post.content;
    
    // Add IDs to h2 and h3 tags
    content = content.replace(/<h([2-3])([^>]*)>([^<]+)<\/h[2-3]>/gi, (match, level, attrs, text) => {
      const id = text.trim().toLowerCase().replace(/[^a-z0-9\u0900-\u097F]+/gi, '-').replace(/(^-|-$)/g, '');
      return `<h${level}${attrs} id="${id}">${text}</h${level}>`;
    });
    
    return content;
  }, [post, language]);

  // Get related posts (same category, excluding current)
  const relatedPosts = blogPosts
    .filter(p => p.category === post?.category && p.id !== id)
    .slice(0, 3);

  // Get recent posts (excluding current)
  const recentPosts = blogPosts
    .filter(p => p.id !== id)
    .slice(0, 4);

  // Smooth scroll to heading
  const scrollToHeading = (headingId: string) => {
    const element = document.getElementById(headingId);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Track active heading on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHeading(entry.target.id);
          }
        });
      },
      { rootMargin: '-100px 0px -70% 0px' }
    );

    tableOfContents.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [tableOfContents]);

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
        setIsSubscribed(true);
        toast.success(language === "hi" ? "सफलतापूर्वक सब्सक्राइब किया!" : "Successfully subscribed!");
      }
      setEmail("");
    } catch (error) {
      console.error("Subscription error:", error);
      toast.error(language === "hi" ? "सब्सक्रिप्शन विफल। कृपया पुनः प्रयास करें।" : "Subscription failed. Please try again.");
    } finally {
      setIsSubscribing(false);
    }
  };

  useEffect(() => {
    if (post) {
      const title = language === "hi" ? post.titleHi : post.title;
      const description = language === "hi" ? post.excerptHi : post.excerpt;
      
      document.title = `${title} | AyurVeda Blog`;
      
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name', 'description');
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute('content', description);

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
      setOG('og:image', getCategoryImage(post.category));
      setOG('article:published_time', post.date);
      setOG('article:author', language === "hi" ? post.authorHi : post.author);
      
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
      setTwitter('twitter:image', getCategoryImage(post.category));

      const existingScript = document.querySelector('script[type="application/ld+json"]');
      if (existingScript) existingScript.remove();

      const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": title,
        "description": description,
        "image": getCategoryImage(post.category),
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
      {/* Hero Image Section */}
      <div className="relative h-[300px] md:h-[400px] w-full overflow-hidden">
        <img 
          src={getCategoryImage(post.category)} 
          alt={language === "hi" ? post.titleHi : post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
          <div className="container mx-auto">
            <Badge className="mb-3 bg-primary text-primary-foreground">
              {category ? (language === "hi" ? category.labelHi : category.label) : "Ayurveda"}
            </Badge>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-3 max-w-4xl leading-tight">
              {language === "hi" ? post.titleHi : post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-white/80 text-sm">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{language === "hi" ? post.authorHi : post.author}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(post.date)}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{language === "hi" ? post.readTimeHi : post.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

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
                {language === "hi" ? post.titleHi.slice(0, 30) + "..." : post.title.slice(0, 30) + "..."}
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
            {/* Excerpt */}
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed border-l-4 border-primary pl-4 italic">
              {language === "hi" ? post.excerptHi : post.excerpt}
            </p>

            {/* Social Share Buttons */}
            <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg mb-8">
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

            {/* Article Content */}
            <div 
              className="prose prose-lg max-w-none 
                prose-headings:text-foreground prose-headings:font-bold prose-headings:scroll-mt-24
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
              dangerouslySetInnerHTML={{ __html: processedContent }}
            />

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
                      <Card className="h-full hover:shadow-lg transition-all group overflow-hidden">
                        <div className="aspect-video overflow-hidden">
                          <img 
                            src={getCategoryImage(relPost.category)} 
                            alt={language === "hi" ? relPost.titleHi : relPost.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
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
              {/* Dynamic Table of Contents */}
              {tableOfContents.length > 0 && (
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                      <span className="w-1 h-5 bg-primary rounded-full" />
                      {language === "hi" ? "इस लेख में" : "In This Article"}
                    </h3>
                    <nav className="space-y-1">
                      {tableOfContents.map((item) => (
                        <button
                          key={item.id}
                          onClick={() => scrollToHeading(item.id)}
                          className={`block w-full text-left text-sm py-1.5 px-2 rounded transition-all ${
                            item.level === 3 ? 'pl-5' : ''
                          } ${
                            activeHeading === item.id
                              ? 'bg-primary/10 text-primary font-medium'
                              : 'text-muted-foreground hover:text-primary hover:bg-muted/50'
                          }`}
                        >
                          <span className="line-clamp-2">
                            {item.level === 3 ? '◦ ' : '• '}{item.text}
                          </span>
                        </button>
                      ))}
                    </nav>
                  </CardContent>
                </Card>
              )}

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
                        <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                          <img 
                            src={getCategoryImage(recentPost.category)} 
                            alt={language === "hi" ? recentPost.titleHi : recentPost.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
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

              {/* Newsletter Signup */}
              <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
                <CardContent className="p-6">
                  {isSubscribed ? (
                    <div className="text-center py-4">
                      <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-3">
                        <Check className="w-6 h-6 text-green-600" />
                      </div>
                      <h3 className="font-bold text-foreground mb-2">
                        {language === "hi" ? "सब्सक्राइब्ड!" : "Subscribed!"}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {language === "hi" 
                          ? "आयुर्वेदिक स्वास्थ्य युक्तियां जल्द ही आपके इनबॉक्स में"
                          : "Ayurvedic health tips coming to your inbox soon"
                        }
                      </p>
                    </div>
                  ) : (
                    <>
                      <div className="text-center mb-4">
                        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3">
                          <Mail className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="font-bold text-foreground mb-2">
                          {language === "hi" ? "अपडेट रहें" : "Stay Updated"}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {language === "hi" 
                            ? "आयुर्वेदिक स्वास्थ्य युक्तियां अपने इनबॉक्स में पाएं"
                            : "Get Ayurvedic health tips in your inbox"
                          }
                        </p>
                      </div>
                      <form onSubmit={handleSubscribe} className="space-y-3">
                        <Input
                          type="email"
                          placeholder={language === "hi" ? "आपका ईमेल" : "Your email"}
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="bg-background"
                          required
                        />
                        <Button 
                          type="submit" 
                          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                          disabled={isSubscribing}
                        >
                          {isSubscribing ? (
                            <>
                              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                              {language === "hi" ? "सब्सक्राइब हो रहा है..." : "Subscribing..."}
                            </>
                          ) : (
                            language === "hi" ? "सब्सक्राइब करें" : "Subscribe"
                          )}
                        </Button>
                      </form>
                      <p className="text-xs text-muted-foreground text-center mt-3">
                        {language === "hi" 
                          ? "हम आपकी गोपनीयता का सम्मान करते हैं"
                          : "We respect your privacy"
                        }
                      </p>
                    </>
                  )}
                </CardContent>
              </Card>
            </div>
          </aside>
        </div>
      </article>
    </Layout>
  );
};

export default BlogDetail;
