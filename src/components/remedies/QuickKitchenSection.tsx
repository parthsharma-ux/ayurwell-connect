import { useMemo } from "react";
import LocalizedLink from "@/components/LocalizedLink";
import { useLanguage } from "@/contexts/LanguageContext";
import { remedies } from "@/data/remedies";
import { ChefHat, Clock, Leaf, ArrowRight, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

// Kitchen remedy IDs for quick access
const kitchenRemedyIds = [
  "kitchen-51", "kitchen-52", "kitchen-53", "kitchen-55", "kitchen-56",
  "kitchen-57", "kitchen-58", "kitchen-74", "kitchen-75", "kitchen-76",
  "kitchen-83", "kitchen-84", "kitchen-85", "kitchen-90", "kitchen-91",
  "kitchen-92", "kitchen-93", "kitchen-94"
];

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case "Easy":
      return "bg-emerald-500/10 text-emerald-400 border-emerald-500/20";
    case "Medium":
      return "bg-amber-500/10 text-amber-400 border-amber-500/20";
    case "Advanced":
      return "bg-rose-500/10 text-rose-400 border-rose-500/20";
    default:
      return "bg-muted text-muted-foreground";
  }
};

interface QuickKitchenSectionProps {
  maxItems?: number;
  showViewAll?: boolean;
}

const QuickKitchenSection = ({ maxItems = 12, showViewAll = true }: QuickKitchenSectionProps) => {
  const { language } = useLanguage();

  const kitchenRemedies = useMemo(() => {
    return remedies
      .filter(r => kitchenRemedyIds.includes(r.id) || r.id.startsWith('kitchen-'))
      .slice(0, maxItems);
  }, [maxItems]);

  if (kitchenRemedies.length === 0) return null;

  return (
    <Card className="border-secondary/20 bg-gradient-to-br from-secondary/5 via-card to-card overflow-hidden">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-secondary/15 rounded-xl">
              <ChefHat className="h-5 w-5 text-secondary" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-display text-lg md:text-xl font-semibold text-foreground">
                  {language === "hi" ? "झटपट रसोई उपचार" : "Quick Kitchen Remedies"}
                </h2>
                <Badge variant="secondary" className="text-[10px] bg-secondary/15 text-secondary border-secondary/20 hidden sm:flex">
                  <Sparkles className="h-2.5 w-2.5 mr-1" />
                  {language === "hi" ? "लोकप्रिय" : "Popular"}
                </Badge>
              </div>
              <p className="text-xs md:text-sm text-muted-foreground mt-0.5">
                {language === "hi" 
                  ? "घर में उपलब्ध सामग्री से तुरंत राहत" 
                  : "Instant relief with common household ingredients"}
              </p>
            </div>
          </div>
          {showViewAll && (
            <LocalizedLink
              to="/remedies?filter=kitchen"
              className="hidden sm:flex items-center gap-1.5 text-sm text-secondary hover:underline font-medium"
            >
              {language === "hi" ? "सभी देखें" : "View all"}
              <ArrowRight className="h-4 w-4" />
            </LocalizedLink>
          )}
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        {/* Horizontal scroll on mobile, grid on larger screens */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          {kitchenRemedies.map((remedy) => (
            <RemedyCard key={remedy.id} remedy={remedy} language={language} />
          ))}
        </div>

        {/* Mobile horizontal scroll */}
        <div className="md:hidden">
          <ScrollArea className="w-full whitespace-nowrap">
            <div className="flex gap-3 pb-3">
              {kitchenRemedies.map((remedy) => (
                <div key={remedy.id} className="w-[280px] flex-shrink-0">
                  <RemedyCard remedy={remedy} language={language} />
                </div>
              ))}
            </div>
            <ScrollBar orientation="horizontal" className="h-1.5" />
          </ScrollArea>
        </div>

        {/* Mobile view all link */}
        {showViewAll && (
          <div className="mt-4 sm:hidden">
            <LocalizedLink
              to="/remedies?filter=kitchen"
              className="flex items-center justify-center gap-2 text-sm text-secondary font-medium py-2 border border-secondary/20 rounded-lg hover:bg-secondary/5 transition-colors"
            >
              {language === "hi" ? "सभी रसोई उपचार देखें" : "View all kitchen remedies"}
              <ArrowRight className="h-4 w-4" />
            </LocalizedLink>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

// Individual remedy card component
interface RemedyCardProps {
  remedy: typeof remedies[0];
  language: string;
}

const RemedyCard = ({ remedy, language }: RemedyCardProps) => {
  return (
    <LocalizedLink
      to={`/remedies/${remedy.id}`}
      className="group flex flex-col h-full bg-card/80 rounded-lg border border-border/50 hover:border-secondary/40 hover:shadow-md transition-all duration-200 whitespace-normal"
    >
      <div className="p-3 flex-1">
        <div className="flex items-center justify-between gap-2 mb-2">
          <Badge className="bg-secondary/10 text-secondary border-secondary/20 text-[10px] font-medium px-2 py-0.5 truncate max-w-[120px]">
            {remedy.problem}
          </Badge>
          <Badge className={`text-[10px] font-medium px-1.5 py-0.5 border flex-shrink-0 ${getDifficultyColor(remedy.difficulty)}`}>
            {language === "hi" 
              ? remedy.difficulty === "Easy" ? "आसान" : remedy.difficulty === "Medium" ? "मध्यम" : "कठिन"
              : remedy.difficulty}
          </Badge>
        </div>
        
        <h3 className="font-display text-sm font-semibold mb-2 line-clamp-2 group-hover:text-secondary transition-colors leading-snug min-h-[2.5rem]">
          {remedy.title}
        </h3>
        
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <Leaf className="h-3 w-3 text-secondary flex-shrink-0" />
          <span className="truncate">{remedy.ingredients.slice(0, 2).map((i) => i.name).join(", ")}</span>
        </div>
      </div>
      
      <div className="px-3 py-2 bg-secondary/5 border-t border-secondary/10 flex items-center gap-1.5 text-[11px] text-muted-foreground rounded-b-lg">
        <Clock className="h-3 w-3" />
        <span>{remedy.preparation_time}</span>
      </div>
    </LocalizedLink>
  );
};

export default QuickKitchenSection;
