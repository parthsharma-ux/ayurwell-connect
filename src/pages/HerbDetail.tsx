import { ArrowLeft, Leaf } from "lucide-react";
import { useParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import LocalizedLink from "@/components/LocalizedLink";
import SEO from "@/components/SEO";
import { herbProfiles } from "@/pages/HerbMapping";
import { useLanguage } from "@/contexts/LanguageContext";

const HerbDetail = () => {
  const { id } = useParams();
  const { language } = useLanguage();
  const herb = id ? herbProfiles[id] : undefined;

  if (!herb) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="font-display text-2xl font-semibold text-foreground">
            {language === "hi" ? "जड़ी-बूटी नहीं मिली" : "Herb not found"}
          </h1>
          <LocalizedLink to="/herb-mapping" className="mt-4 inline-flex items-center gap-2 text-primary hover:underline">
            <ArrowLeft className="h-4 w-4" />
            {language === "hi" ? "जड़ी-बूटी मार्गदर्शिका पर लौटें" : "Back to herb guide"}
          </LocalizedLink>
        </div>
      </Layout>
    );
  }

  const isHindi = language === "hi";
  const title = isHindi
    ? `${herb.nameHi} | AyurVeda`
    : `${herb.name} Ayurvedic Herb Guide | AyurVeda`;
  const description = isHindi
    ? `${herb.nameHi} (${herb.botanicalName}) के पारंपरिक आयुर्वेदिक उपयोग, गुण, खुराक संबंधी जानकारी और सावधानियां। यह शैक्षिक सामग्री है; योग्य चिकित्सक से सलाह लें।`
    : `${herb.name} (${herb.botanicalName}) in Ayurveda: traditional uses, properties, dosage guidance, and precautions. For education only; consult a qualified practitioner.`;

  return (
    <Layout>
      <SEO title={title} description={description} />
      <article className="container mx-auto max-w-4xl px-4 py-10 md:py-14">
        <LocalizedLink
          to="/herb-mapping"
          className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          {isHindi ? "सभी जड़ी-बूटियां" : "All herbs"}
        </LocalizedLink>

        <header className="border-b border-border pb-8">
          <div className="mb-4 flex items-center gap-3 text-primary">
            <Leaf className="h-6 w-6" />
            <span className="text-sm font-medium">
              {isHindi ? "आयुर्वेदिक जड़ी-बूटी मार्गदर्शिका" : "Ayurvedic herb guide"}
            </span>
          </div>
          <h1 className="font-display text-3xl font-bold text-foreground md:text-4xl">
            {isHindi ? herb.nameHi : herb.name}
          </h1>
          <p className="mt-2 text-muted-foreground">
            <span className="italic">{herb.botanicalName}</span>
            <span className="mx-2" aria-hidden="true">·</span>
            <span>{isHindi ? "संस्कृत" : "Sanskrit"}: {herb.sanskrit}</span>
          </p>
          <p className="mt-5 max-w-3xl leading-relaxed text-muted-foreground">
            {isHindi ? herb.descriptionHi : herb.description}
          </p>
        </header>

        <div className="grid gap-10 py-8 md:grid-cols-2">
          <section>
            <h2 className="font-display text-xl font-semibold text-foreground">
              {isHindi ? "पारंपरिक गुण" : "Traditional properties"}
            </h2>
            <ul className="mt-4 space-y-2">
              {(isHindi ? herb.propertiesHi : herb.properties).map((property) => (
                <li key={property} className="flex gap-3 text-muted-foreground">
                  <span className="text-primary" aria-hidden="true">•</span>{property}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground">
              {isHindi ? "पारंपरिक उपयोग" : "Traditional uses"}
            </h2>
            <ul className="mt-4 space-y-2">
              {(isHindi ? herb.usesHi : herb.uses).map((use) => (
                <li key={use} className="flex gap-3 text-muted-foreground">
                  <span className="text-primary" aria-hidden="true">•</span>{use}
                </li>
              ))}
            </ul>
          </section>

          <section className="border-t border-border pt-6">
            <h2 className="font-display text-xl font-semibold text-foreground">
              {isHindi ? "खुराक संबंधी जानकारी" : "Dosage guidance"}
            </h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              {isHindi ? herb.dosageHi : herb.dosage}
            </p>
          </section>

          <section className="border-t border-border pt-6">
            <h2 className="font-display text-xl font-semibold text-foreground">
              {isHindi ? "सावधानियां" : "Precautions"}
            </h2>
            <ul className="mt-4 space-y-2">
              {(isHindi ? herb.precautionsHi : herb.precautions).map((precaution) => (
                <li key={precaution} className="flex gap-3 text-muted-foreground">
                  <span className="text-destructive" aria-hidden="true">•</span>{precaution}
                </li>
              ))}
            </ul>
          </section>
        </div>

        <p className="border-t border-border pt-5 text-sm text-muted-foreground">
          {isHindi
            ? "यह जानकारी केवल शैक्षिक उद्देश्यों के लिए है। किसी जड़ी-बूटी का उपयोग करने से पहले योग्य आयुर्वेदिक चिकित्सक से सलाह लें।"
            : "This information is for educational purposes only. Consult a qualified Ayurvedic practitioner before using any herb."}
        </p>
      </article>
    </Layout>
  );
};

export default HerbDetail;