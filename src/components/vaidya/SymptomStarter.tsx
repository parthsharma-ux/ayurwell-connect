import { useState } from "react";
import { AlertTriangle, Stethoscope, Send } from "lucide-react";
import { Input } from "@/components/ui/input";

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
  `text-xs px-3 py-1.5 rounded-full border transition-all ${
    active
      ? "bg-primary text-primary-foreground border-primary"
      : "border-border bg-muted/50 hover:bg-muted text-foreground"
  }`;

export const SymptomStarter = ({ language, disabled, onSubmit }: Props) => {
  const hi = language === "hinglish";
  const [symptom, setSymptom] = useState("");
  const [custom, setCustom] = useState("");
  const [duration, setDuration] = useState("");
  const [severity, setSeverity] = useState("");
  const [dosha, setDosha] = useState("");
  const [emergency, setEmergency] = useState(false);

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
    <div className="rounded-xl border border-border bg-muted/30 p-4 space-y-4">
      <div className="flex items-center gap-2">
        <Stethoscope className="h-4 w-4 text-secondary" />
        <h2 className="text-sm font-semibold">
          {hi ? "Shuruaat karein — apne lakshan batayein" : "Start here — tell us your symptoms"}
        </h2>
      </div>

      <div>
        <p className="text-xs text-muted-foreground mb-2">
          {hi ? "1. Main takleef kya hai?" : "1. What is the main problem?"}
        </p>
        <div className="flex flex-wrap gap-2">
          {COMMON_SYMPTOMS.map((s) => {
            const label = hi ? s.hi : s.en;
            return (
              <button
                key={s.en}
                type="button"
                onClick={() => { setSymptom(s.en); setCustom(""); setEmergency(false); }}
                className={chipClass(symptom === s.en && !custom.trim())}
              >
                {label}
              </button>
            );
          })}
        </div>
        <Input
          value={custom}
          onChange={(e) => { setCustom(e.target.value); setEmergency(false); }}
          placeholder={hi ? "Ya apne shabdon me likhein..." : "Or describe it in your own words..."}
          className="mt-2 h-9 text-sm"
        />
      </div>

      <div>
        <p className="text-xs text-muted-foreground mb-2">
          {hi ? "2. Kitne samay se?" : "2. How long has it lasted?"}
        </p>
        <div className="flex flex-wrap gap-2">
          {DURATIONS.map((d) => (
            <button key={d.key} type="button" onClick={() => setDuration(d.key)} className={chipClass(duration === d.key)}>
              {hi ? d.hi : d.en}
            </button>
          ))}
        </div>
      </div>

      <div>
        <p className="text-xs text-muted-foreground mb-2">
          {hi ? "3. Kitna tez hai?" : "3. How severe is it?"}
        </p>
        <div className="flex flex-wrap gap-2">
          {SEVERITIES.map((s) => (
            <button key={s.key} type="button" onClick={() => setSeverity(s.key)} className={chipClass(severity === s.key)}>
              {hi ? s.hi : s.en}
            </button>
          ))}
        </div>
      </div>

      <div>
        <p className="text-xs text-muted-foreground mb-2">
          {hi ? "4. Aapki prakriti (optional)" : "4. Your body type / dosha (optional)"}
        </p>
        <div className="flex flex-wrap gap-2">
          {DOSHAS.map((d) => (
            <button key={d.key} type="button" onClick={() => setDosha(d.key)} className={chipClass(dosha === d.key)}>
              {hi ? d.hi : d.en}
            </button>
          ))}
        </div>
      </div>

      {emergency && (
        <div className="flex items-start gap-3 rounded-lg border border-destructive/40 bg-destructive/10 p-3">
          <AlertTriangle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
          <p className="text-sm text-destructive">
            {hi
              ? "Yeh emergency lakshan lagta hai. Turant nazdeeki hospital jayein ya emergency number (India: 108) par call karein. Home remedy safe nahi hai."
              : "This looks like an emergency symptom. Please seek immediate medical care or call your local emergency number (India: 108). A home remedy is not safe here."}
          </p>
        </div>
      )}

      <button
        type="button"
        onClick={handleStart}
        disabled={!ready || disabled}
        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-primary to-gold text-primary-foreground text-sm font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <Send className="h-4 w-4" />
        {hi ? "AI Vaidya se poochein" : "Ask AI Vaidya"}
      </button>

      <p className="text-[11px] text-muted-foreground">
        {hi
          ? "Suraksha: pregnancy, bachche, chronic bimari ya dawai chal rahi ho to pehle doctor se poochein."
          : "Safety: if you are pregnant, treating a child, have a chronic illness, or take medication, consult a doctor first."}
      </p>
    </div>
  );
};

export default SymptomStarter;
