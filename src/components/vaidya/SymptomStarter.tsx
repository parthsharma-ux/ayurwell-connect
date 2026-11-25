import { useState } from "react";
import { AlertTriangle, ChevronDown, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type Lang = "hinglish" | "english";

type Props = {
  language: Lang;
  disabled?: boolean;
  onSubmit: (message: string) => void;
};

const COMMON_SYMPTOMS = [
  { en: "Acidity / gas", hi: "Acidity / gas" },
  { en: "Constipation", hi: "Kabz" },
  { en: "Cough & cold", hi: "Khaansi-zukaam" },
  { en: "Joint pain", hi: "Jodon ka dard" },
  { en: "Headache / migraine", hi: "Sar dard / migraine" },
  { en: "Poor sleep", hi: "Neend na aana" },
  { en: "Stress / anxiety", hi: "Stress / ghabrahat" },
  { en: "Skin problem", hi: "Skin problem" },
  { en: "Hair fall", hi: "Baal jhadna" },
  { en: "Low energy", hi: "Kamzori" },
];

const DURATIONS = [
  { key: "days", en: "A few days", hi: "Kuch din" },
  { key: "weeks", en: "A few weeks", hi: "Kuch hafte" },
  { key: "months", en: "Months or longer", hi: "Mahino se" },
];

const SEVERITIES = [
  { key: "mild", en: "Mild", hi: "Halka" },
  { key: "moderate", en: "Moderate", hi: "Theek-thaak" },
  { key: "severe", en: "Severe", hi: "Tez" },
];

const DOSHAS = [
  { key: "vata", en: "Dry / restless (Vata)", hi: "Sookha / bechain (Vata)" },
  { key: "pitta", en: "Hot / acidic (Pitta)", hi: "Garmi / acidity (Pitta)" },
  { key: "kapha", en: "Heavy / sluggish (Kapha)", hi: "Bhaari / sust (Kapha)" },
  { key: "unsure", en: "Not sure", hi: "Pata nahi" },
];

// Safety: symptoms that need real emergency care, never a home remedy.
const RED_FLAGS = [
  "chest pain", "heart attack", "seene me dard", "seene mein dard",
  "breathless", "can't breathe", "cannot breathe", "saans nahi",
  "unconscious", "behosh", "fainted", "stroke", "paralysis", "lakwa",
  "severe bleeding", "bleeding heavily", "khoon bahut",
  "suicide", "kill myself", "aatmhatya", "jaan dena",
  "poison", "zeher", "overdose", "seizure", "fits", "mirgi ka daura",
  "blurred vision sudden", "vomiting blood", "khoon ki ulti",
  "high fever 104", "newborn fever", "pregnancy bleeding",
];

export const hasRedFlag = (text: string) => {
  const t = text.toLowerCase();
  return RED_FLAGS.some((f) => t.includes(f));
};

const chipClass = (active: boolean) =>
  `h-8 rounded-md border px-3 text-xs ${active ? "border-secondary/60 bg-secondary/15 text-secondary-foreground" : "border-border bg-muted/30 text-muted-foreground hover:border-secondary/40 hover:bg-muted"}`;

export const SymptomStarter = ({ language, disabled, onSubmit }: Props) => {
  const hi = language === "hinglish";
  const [symptom, setSymptom] = useState("");
  const [custom, setCustom] = useState("");
  const [duration, setDuration] = useState("");
  const [severity, setSeverity] = useState("");
  const [dosha, setDosha] = useState("");
  const [emergency, setEmergency] = useState(false);
  const [showAllSymptoms, setShowAllSymptoms] = useState(false);

  const chosen = custom.trim() || symptom;
  const ready = chosen.length > 1;

  const handleStart = () => {
    if (!ready || disabled) return;
    if (hasRedFlag(chosen)) {
      setEmergency(true);
      return;
    }
    setEmergency(false);

    const parts = [
      `Main symptom: ${chosen}`,
      duration ? `Duration: ${DURATIONS.find((d) => d.key === duration)?.en}` : "",
      severity ? `Severity: ${SEVERITIES.find((s) => s.key === severity)?.en}` : "",
      dosha && dosha !== "unsure" ? `Self-reported body type: ${dosha}` : "",
    ].filter(Boolean);

    onSubmit(
      `${parts.join(" | ")}\n\nPlease ask me the 2 most important follow-up questions first, then suggest safe initial Ayurvedic remedies.`
    );
  };

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-base font-semibold">
          {hi ? "Aapko kis takleef mein madad chahiye?" : "What is troubling you today?"}
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          {hi ? "Pehle kuch zaroori baatein samajhte hain." : "A few details will help me understand."}
        </p>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium">{hi ? "Mukhya lakshan" : "Main concern"}</p>
        <div className="flex flex-wrap gap-2">
          {(showAllSymptoms ? COMMON_SYMPTOMS : COMMON_SYMPTOMS.slice(0, 6)).map((s) => (
            <Button
              key={s.en}
              type="button"
              variant="ghost"
              size="sm"
              aria-pressed={symptom === s.en && !custom.trim()}
              onClick={() => { setSymptom(s.en); setCustom(""); setEmergency(false); }}
              className={chipClass(symptom === s.en && !custom.trim())}
            >
              {hi ? s.hi : s.en}
            </Button>
          ))}
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => setShowAllSymptoms((current) => !current)}
            aria-expanded={showAllSymptoms}
            className="h-8 gap-1 px-2 text-xs text-muted-foreground"
          >
            {showAllSymptoms ? (hi ? "Kam" : "Less") : (hi ? "Aur" : "More")}
            <ChevronDown className={`h-3.5 w-3.5 transition-transform ${showAllSymptoms ? "rotate-180" : ""}`} />
          </Button>
        </div>
        <Input
          value={custom}
          onChange={(event) => { setCustom(event.target.value); setEmergency(false); }}
          placeholder={hi ? "Ya apne shabdon mein batayein…" : "Or describe it in your own words…"}
          aria-label={hi ? "Apne lakshan likhein" : "Describe your symptoms"}
          className="h-10 text-base"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <p className="text-sm font-medium">{hi ? "Kitne samay se?" : "How long?"}</p>
          <div className="flex flex-wrap gap-2">
            {DURATIONS.map((d) => (
              <Button key={d.key} type="button" variant="ghost" size="sm" aria-pressed={duration === d.key} onClick={() => setDuration(d.key)} className={chipClass(duration === d.key)}>
                {hi ? d.hi : d.en}
              </Button>
            ))}
          </div>
        </div>
        <div className="space-y-2">
          <p className="text-sm font-medium">{hi ? "Takleef kitni hai?" : "How severe is it?"}</p>
          <div className="flex flex-wrap gap-2">
            {SEVERITIES.map((s) => (
              <Button key={s.key} type="button" variant="ghost" size="sm" aria-pressed={severity === s.key} onClick={() => setSeverity(s.key)} className={chipClass(severity === s.key)}>
                {hi ? s.hi : s.en}
              </Button>
            ))}
          </div>
        </div>
      </div>

      <details className="border-t border-border pt-3">
        <summary className="cursor-pointer text-sm text-muted-foreground">
          {hi ? "Prakriti ke baare mein (optional)" : "Share your body type (optional)"}
        </summary>
        <div className="mt-3 flex flex-wrap gap-2">
          {DOSHAS.map((d) => (
            <Button key={d.key} type="button" variant="ghost" size="sm" aria-pressed={dosha === d.key} onClick={() => setDosha(d.key)} className={chipClass(dosha === d.key)}>
              {hi ? d.hi : d.en}
            </Button>
          ))}
        </div>
      </details>

      {emergency && (
        <div className="flex items-start gap-3 rounded-md border border-destructive/40 bg-destructive/10 p-3" role="alert">
          <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-destructive" />
          <p className="text-sm text-destructive">
            {hi
              ? "Yeh emergency lakshan lagta hai. Turant nazdeeki hospital jayein ya emergency number (India: 108) par call karein. Home remedy safe nahi hai."
              : "This looks like an emergency symptom. Please seek immediate medical care or call your local emergency number (India: 108). A home remedy is not safe here."}
          </p>
        </div>
      )}

      <div className="flex flex-col gap-3 border-t border-border pt-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-xl text-xs leading-5 text-muted-foreground">
          {hi
            ? "Pregnancy, bachchon, chronic bimari ya chal rahi dawai ke liye doctor se salah lein."
            : "For pregnancy, children, chronic conditions, or current medication, consult a clinician."}
        </p>
        <Button type="button" onClick={handleStart} disabled={!ready || disabled} className="h-10 shrink-0 gap-2 rounded-md">
          <Send className="h-4 w-4" />
          {hi ? "Vaidya se poochein" : "Continue"}
        </Button>
      </div>
    </div>
  );
};

export default SymptomStarter;
