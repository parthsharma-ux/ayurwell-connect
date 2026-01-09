import { useParams } from "react-router-dom";
import { ArrowLeft, Clock, Activity, AlertTriangle, CheckCircle2, Heart, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Layout from "@/components/layout/Layout";
import LocalizedLink from "@/components/LocalizedLink";
import { useLanguage } from "@/contexts/LanguageContext";
import { yogaAsanas } from "@/data/yoga";
import { getStepImage } from "@/data/yogaStepImages";
import SEOHead from "@/components/SEOHead";

const YogaDetail = () => {
  const { id } = useParams();
  const { language } = useLanguage();

  const asana = yogaAsanas.find((y) => y.id === id);

  if (!asana) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">
            {language === "hi" ? "आसन नहीं मिला" : "Asana not found"}
          </h1>
          <LocalizedLink to="/yoga" className="text-primary hover:underline">
            {language === "hi" ? "← योग पृष्ठ पर वापस जाएं" : "← Back to Yoga"}
          </LocalizedLink>
        </div>
      </Layout>
    );
  }

  const getDifficultyColor = (diff: string) => {
    switch (diff) {
      case "Beginner":
        return "bg-emerald-500/10 text-emerald-600 border-emerald-500/20";
      case "Intermediate":
        return "bg-amber-500/10 text-amber-600 border-amber-500/20";
      case "Advanced":
        return "bg-rose-500/10 text-rose-600 border-rose-500/20";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const name = language === "hi" ? asana.name_hi : asana.name;
  const description = language === "hi" ? asana.description_hi : asana.description;
  const benefits = language === "hi" ? asana.benefits_hi : asana.benefits;
  const precautions = language === "hi" ? asana.precautions_hi : asana.precautions;
  const categoryName = language === "hi" ? asana.category_hi : asana.category;
  const difficultyName = language === "hi" ? asana.difficulty_hi : asana.difficulty;
  const duration = language === "hi" ? asana.duration_hi : asana.duration;

  return (
    <Layout>
      <SEOHead
        titleKey="meta_yoga_title"
        descriptionKey="meta_yoga_description"
      />

      <div className="container mx-auto px-4 py-8">
        {/* Back Link */}
        <LocalizedLink
          to="/yoga"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6"
        >
          <ArrowLeft className="h-4 w-4" />
          {language === "hi" ? "योग पर वापस जाएं" : "Back to Yoga"}
        </LocalizedLink>

        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
          {/* Main Image */}
          <div className="lg:col-span-1">
            <div className="relative h-72 lg:h-96 rounded-2xl overflow-hidden">
              {asana.image ? (
                <img 
                  src={asana.image} 
                  alt={name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <div className="text-9xl opacity-50">🧘</div>
                </div>
              )}
              <div className="absolute top-4 right-4">
                <Badge className={getDifficultyColor(asana.difficulty)}>
                  {difficultyName}
                </Badge>
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="lg:col-span-2">
            <Badge className="mb-3 bg-primary/10 text-primary border-primary/20">
              {categoryName}
            </Badge>
            <h1 className="text-3xl md:text-4xl font-display font-bold mb-2">
              <span className="text-gradient-terracotta">{name}</span>
            </h1>
            <p className="text-xl text-muted-foreground italic mb-4">
              {asana.sanskrit_name}
            </p>

            <p className="text-lg text-muted-foreground mb-6">{description}</p>

            {/* Quick Info */}
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center gap-2 px-4 py-2 bg-muted/50 rounded-lg">
                <Clock className="h-5 w-5 text-primary" />
                <span className="font-medium">{duration}</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-muted/50 rounded-lg">
                <Activity className="h-5 w-5 text-primary" />
                <span className="font-medium">{categoryName}</span>
              </div>
            </div>

            {/* Dosha Balance */}
            <div className="mb-6">
              <h4 className="text-sm font-medium text-muted-foreground mb-2">
                {language === "hi" ? "दोष संतुलन" : "Dosha Balance"}
              </h4>
              <div className="flex flex-wrap gap-2">
                {asana.dosha_balance.map((dosha) => (
                  <Badge
                    key={dosha}
                    variant="outline"
                    className="text-sm px-3 py-1"
                  >
                    {dosha}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Diseases Helped */}
            <div>
              <h4 className="text-sm font-medium text-muted-foreground mb-2">
                {language === "hi" ? "सहायक रोगों में" : "Helpful for"}
              </h4>
              <div className="flex flex-wrap gap-2">
                {asana.diseases_helped.map((disease) => (
                  <Badge
                    key={disease}
                    variant="secondary"
                    className="text-xs capitalize"
                  >
                    {disease.replace(/-/g, " ")}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Benefits & Precautions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
          {/* Benefits */}
          <Card className="border-emerald-500/20 bg-emerald-500/5">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-emerald-600">
                <Heart className="h-5 w-5" />
                {language === "hi" ? "लाभ" : "Benefits"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Precautions */}
          <Card className="border-amber-500/20 bg-amber-500/5">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-amber-600">
                <AlertTriangle className="h-5 w-5" />
                {language === "hi" ? "सावधानियां" : "Precautions"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {precautions.map((precaution, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{precaution}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <Separator className="my-10" />

        {/* Step-by-Step Instructions */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-8">
            <Sparkles className="h-6 w-6 text-primary" />
            <h2 className="text-2xl md:text-3xl font-display font-bold">
              {language === "hi" ? "चरण-दर-चरण निर्देश" : "Step-by-Step Instructions"}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {asana.steps.map((step) => (
              <Card
                key={step.step}
                className="relative overflow-hidden hover:shadow-lg transition-shadow"
              >
                {/* Step Number Badge */}
                <div className="absolute top-4 left-4 h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                  {step.step}
                </div>

                {/* Step Image */}
                <div className="h-40 overflow-hidden">
                  {getStepImage(asana.id, step.step) ? (
                    <img 
                      src={getStepImage(asana.id, step.step)} 
                      alt={`Step ${step.step}`}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="h-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                      <div className="text-5xl opacity-40">🧘‍♀️</div>
                    </div>
                  )}
                </div>

                <CardContent className="pt-4">
                  <p className="text-sm leading-relaxed">
                    {language === "hi" ? step.instruction_hi : step.instruction}
                  </p>
                  {step.duration && (
                    <div className="flex items-center gap-1 mt-3 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      {step.duration}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Related Asanas */}
        <Separator className="my-10" />

        <div>
          <h2 className="text-2xl font-display font-bold mb-6">
            {language === "hi" ? "संबंधित आसन" : "Related Asanas"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {yogaAsanas
              .filter(
                (y) =>
                  y.id !== asana.id &&
                  (y.category === asana.category ||
                    y.dosha_balance.some((d) => asana.dosha_balance.includes(d)))
              )
              .slice(0, 3)
              .map((related) => (
                <LocalizedLink key={related.id} to={`/yoga/${related.id}`}>
                  <Card className="hover:shadow-md hover:border-primary/30 transition-all">
                    <CardContent className="pt-4">
                      <h3 className="font-semibold mb-1">
                        {language === "hi" ? related.name_hi : related.name}
                      </h3>
                      <p className="text-sm text-muted-foreground italic">
                        {related.sanskrit_name}
                      </p>
                    </CardContent>
                  </Card>
                </LocalizedLink>
              ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default YogaDetail;
