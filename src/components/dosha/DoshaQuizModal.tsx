import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Wind, Flame, Droplets, ArrowRight, ArrowLeft, RotateCcw, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface DoshaQuizModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

interface Question {
  id: number;
  question: string;
  questionHindi: string;
  options: {
    text: string;
    textHindi: string;
    dosha: "vata" | "pitta" | "kapha";
  }[];
}

const questions: Question[] = [
  {
    id: 1,
    question: "How would you describe your body frame?",
    questionHindi: "Aapka body frame kaisa hai?",
    options: [
      { text: "Thin, light, hard to gain weight", textHindi: "Patla, halka, weight badhna mushkil", dosha: "vata" },
      { text: "Medium build, athletic", textHindi: "Medium build, athletic", dosha: "pitta" },
      { text: "Large, sturdy, gains weight easily", textHindi: "Bhari, mazboot, weight jaldi badhta hai", dosha: "kapha" },
    ],
  },
  {
    id: 2,
    question: "How is your skin typically?",
    questionHindi: "Aapki skin kaisi hai?",
    options: [
      { text: "Dry, rough, thin", textHindi: "Sukhi, rough, patli", dosha: "vata" },
      { text: "Warm, oily, prone to rashes", textHindi: "Garam, oily, rashes aate hain", dosha: "pitta" },
      { text: "Thick, smooth, moist", textHindi: "Moti, smooth, nami wali", dosha: "kapha" },
    ],
  },
  {
    id: 3,
    question: "How do you handle cold weather?",
    questionHindi: "Thande mausam mein kaisa feel hota hai?",
    options: [
      { text: "I dislike cold, hands/feet often cold", textHindi: "Thanda pasand nahi, haath pair thande rehte hain", dosha: "vata" },
      { text: "I enjoy cool weather, feel warm naturally", textHindi: "Thanda mausam pasand hai, naturally garam rehta hoon", dosha: "pitta" },
      { text: "I tolerate cold well", textHindi: "Thanda easily tolerate kar leta hoon", dosha: "kapha" },
    ],
  },
  {
    id: 4,
    question: "How is your appetite?",
    questionHindi: "Aapki bhook kaisi hai?",
    options: [
      { text: "Irregular, sometimes forget to eat", textHindi: "Irregular, kabhi kabhi khana bhool jata hoon", dosha: "vata" },
      { text: "Strong, get irritable if I miss meals", textHindi: "Strong, khana miss karo toh gussa aata hai", dosha: "pitta" },
      { text: "Steady, can skip meals easily", textHindi: "Steady, khana skip kar sakta hoon easily", dosha: "kapha" },
    ],
  },
  {
    id: 5,
    question: "How would you describe your sleep?",
    questionHindi: "Aapki neend kaisi hai?",
    options: [
      { text: "Light, often disturbed, insomnia", textHindi: "Halki, disturbed, neend nahi aati", dosha: "vata" },
      { text: "Moderate, wake up if needed", textHindi: "Moderate, zaroorat ho toh uth jaata hoon", dosha: "pitta" },
      { text: "Deep, heavy, hard to wake up", textHindi: "Gehri, bhari, uthne mein mushkil", dosha: "kapha" },
    ],
  },
  {
    id: 6,
    question: "How do you respond to stress?",
    questionHindi: "Stress mein kaise react karte ho?",
    options: [
      { text: "Anxiety, worry, fear", textHindi: "Anxiety, chinta, darr", dosha: "vata" },
      { text: "Irritation, anger, frustration", textHindi: "Irritation, gussa, frustration", dosha: "pitta" },
      { text: "Withdrawal, denial, depression", textHindi: "Withdrawal, denial, depression", dosha: "kapha" },
    ],
  },
  {
    id: 7,
    question: "How is your digestion?",
    questionHindi: "Aapka digestion kaisa hai?",
    options: [
      { text: "Irregular, bloating, gas", textHindi: "Irregular, bloating, gas", dosha: "vata" },
      { text: "Quick, strong, sometimes acidity", textHindi: "Jaldi, strong, kabhi acidity", dosha: "pitta" },
      { text: "Slow, feel heavy after meals", textHindi: "Slow, khane ke baad bhari lagta hai", dosha: "kapha" },
    ],
  },
  {
    id: 8,
    question: "How would you describe your memory?",
    questionHindi: "Aapki memory kaisi hai?",
    options: [
      { text: "Quick to learn, quick to forget", textHindi: "Jaldi seekhta hoon, jaldi bhoolata bhi hoon", dosha: "vata" },
      { text: "Sharp, focused, good recall", textHindi: "Sharp, focused, yaad rehta hai", dosha: "pitta" },
      { text: "Slow to learn, but never forget", textHindi: "Seekhne mein time lagta hai, par bhoolata nahi", dosha: "kapha" },
    ],
  },
  {
    id: 9,
    question: "What is your energy pattern throughout the day?",
    questionHindi: "Din mein energy level kaisa rehta hai?",
    options: [
      { text: "Variable, bursts of energy", textHindi: "Variable, kabhi high kabhi low", dosha: "vata" },
      { text: "Steady and intense when focused", textHindi: "Steady aur intense jab focus ho", dosha: "pitta" },
      { text: "Slow start, steady endurance", textHindi: "Dhire start, par lamba chalta hai", dosha: "kapha" },
    ],
  },
  {
    id: 10,
    question: "How do you make decisions?",
    questionHindi: "Decisions kaise lete ho?",
    options: [
      { text: "Quickly, but change my mind often", textHindi: "Jaldi, par mann badalte rehta hoon", dosha: "vata" },
      { text: "Decisively, stick to choices", textHindi: "Firmly, apni choice par tikta hoon", dosha: "pitta" },
      { text: "Slowly, after much thought", textHindi: "Dhire dhire, kaafi soch ke", dosha: "kapha" },
    ],
  },
];

const doshaResults = {
  vata: {
    name: "Vata",
    hindi: "वात",
    icon: Wind,
    color: "text-blue-400",
    bgColor: "bg-blue-500/20",
    borderColor: "border-blue-500/30",
    description: "You have a Vata-dominant constitution! Vata is governed by Air and Space elements.",
    descriptionHindi: "Aap Vata prakriti ke hain! Vata Vayu aur Akash tatva se bana hai.",
    characteristics: [
      "Creative and imaginative mind",
      "Quick learner with active thoughts",
      "Enthusiastic and energetic",
      "Flexible and adaptable",
    ],
    recommendations: [
      { category: "Diet", tip: "Favor warm, cooked, moist foods. Include ghee, sesame oil" },
      { category: "Lifestyle", tip: "Maintain regular routine for meals and sleep" },
      { category: "Exercise", tip: "Gentle yoga, walking, swimming - avoid overexertion" },
      { category: "Herbs", tip: "Ashwagandha, Brahmi, Shatavari, Triphala" },
    ],
  },
  pitta: {
    name: "Pitta",
    hindi: "पित्त",
    icon: Flame,
    color: "text-orange-400",
    bgColor: "bg-orange-500/20",
    borderColor: "border-orange-500/30",
    description: "You have a Pitta-dominant constitution! Pitta is governed by Fire and Water elements.",
    descriptionHindi: "Aap Pitta prakriti ke hain! Pitta Agni aur Jal tatva se bana hai.",
    characteristics: [
      "Strong intellect and focus",
      "Natural leadership qualities",
      "Good digestion and metabolism",
      "Determined and ambitious",
    ],
    recommendations: [
      { category: "Diet", tip: "Favor cooling foods - coconut, cucumber, mint. Avoid spicy" },
      { category: "Lifestyle", tip: "Stay cool, avoid excessive heat and competition" },
      { category: "Exercise", tip: "Swimming, moonlight walks, moderate intensity" },
      { category: "Herbs", tip: "Amalaki, Shatavari, Neem, Brahmi, Aloe Vera" },
    ],
  },
  kapha: {
    name: "Kapha",
    hindi: "कफ",
    icon: Droplets,
    color: "text-green-400",
    bgColor: "bg-green-500/20",
    borderColor: "border-green-500/30",
    description: "You have a Kapha-dominant constitution! Kapha is governed by Earth and Water elements.",
    descriptionHindi: "Aap Kapha prakriti ke hain! Kapha Prithvi aur Jal tatva se bana hai.",
    characteristics: [
      "Calm and grounded personality",
      "Strong and steady nature",
      "Excellent long-term memory",
      "Loving and compassionate",
    ],
    recommendations: [
      { category: "Diet", tip: "Favor light, warm, dry foods. Add spices like ginger, pepper" },
      { category: "Lifestyle", tip: "Wake early, stay active, embrace new experiences" },
      { category: "Exercise", tip: "Vigorous exercise - running, cycling, active sports" },
      { category: "Herbs", tip: "Trikatu, Guggulu, Punarnava, Triphala" },
    ],
  },
};

export const DoshaQuizModal = ({ open, onOpenChange }: DoshaQuizModalProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, "vata" | "pitta" | "kapha">>({});
  const [showResult, setShowResult] = useState(false);

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const handleAnswer = (dosha: "vata" | "pitta" | "kapha") => {
    setAnswers((prev) => ({ ...prev, [currentQuestion]: dosha }));
    
    if (currentQuestion < questions.length - 1) {
      setTimeout(() => setCurrentQuestion((prev) => prev + 1), 300);
    } else {
      setTimeout(() => setShowResult(true), 300);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  };

  const handleReset = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResult(false);
  };

  const calculateResult = (): "vata" | "pitta" | "kapha" => {
    const counts = { vata: 0, pitta: 0, kapha: 0 };
    Object.values(answers).forEach((dosha) => {
      counts[dosha]++;
    });
    
    if (counts.vata >= counts.pitta && counts.vata >= counts.kapha) return "vata";
    if (counts.pitta >= counts.vata && counts.pitta >= counts.kapha) return "pitta";
    return "kapha";
  };

  const getDoshaPercentages = () => {
    const counts = { vata: 0, pitta: 0, kapha: 0 };
    Object.values(answers).forEach((dosha) => {
      counts[dosha]++;
    });
    const total = Object.values(counts).reduce((a, b) => a + b, 0) || 1;
    return {
      vata: Math.round((counts.vata / total) * 100),
      pitta: Math.round((counts.pitta / total) * 100),
      kapha: Math.round((counts.kapha / total) * 100),
    };
  };

  const result = showResult ? doshaResults[calculateResult()] : null;
  const percentages = showResult ? getDoshaPercentages() : null;
  const question = questions[currentQuestion];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-primary" />
            Dosha Quiz
          </DialogTitle>
        </DialogHeader>

        <AnimatePresence mode="wait">
          {!showResult ? (
            <motion.div
              key="quiz"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              {/* Progress */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Question {currentQuestion + 1} of {questions.length}</span>
                  <span>{Math.round(progress)}% complete</span>
                </div>
                <Progress value={progress} className="h-2" />
              </div>

              {/* Question */}
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-foreground">
                  {question.question}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {question.questionHindi}
                </p>
              </div>

              {/* Options */}
              <div className="space-y-3">
                {question.options.map((option, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    onClick={() => handleAnswer(option.dosha)}
                    className={`w-full p-4 rounded-xl border text-left transition-all ${
                      answers[currentQuestion] === option.dosha
                        ? "border-primary bg-primary/10"
                        : "border-border hover:border-primary/50 hover:bg-muted/50"
                    }`}
                  >
                    <p className="font-medium text-foreground">{option.text}</p>
                    <p className="text-sm text-muted-foreground mt-1">{option.textHindi}</p>
                  </motion.button>
                ))}
              </div>

              {/* Navigation */}
              <div className="flex justify-between pt-4">
                <Button
                  variant="outline"
                  onClick={handlePrevious}
                  disabled={currentQuestion === 0}
                  className="gap-2"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Previous
                </Button>
                <Button
                  variant="outline"
                  onClick={handleReset}
                  className="gap-2"
                >
                  <RotateCcw className="h-4 w-4" />
                  Reset
                </Button>
              </div>
            </motion.div>
          ) : result && percentages && (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-6"
            >
              {/* Result Header */}
              <div className={`p-6 rounded-2xl ${result.bgColor} border ${result.borderColor}`}>
                <div className="flex items-center gap-4">
                  <div className={`p-4 rounded-xl bg-background/50`}>
                    <result.icon className={`h-10 w-10 ${result.color}`} />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-bold text-foreground">
                      {result.name} Dosha
                    </h3>
                    <p className="text-lg text-muted-foreground">{result.hindi}</p>
                  </div>
                </div>
                <p className="mt-4 text-foreground">{result.description}</p>
                <p className="text-sm text-muted-foreground mt-1">{result.descriptionHindi}</p>
              </div>

              {/* Dosha Breakdown */}
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground">Your Dosha Balance</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <Wind className="h-5 w-5 text-blue-400" />
                    <span className="w-16 text-sm">Vata</span>
                    <div className="flex-1 bg-muted rounded-full h-3 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${percentages.vata}%` }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="h-full bg-blue-400 rounded-full"
                      />
                    </div>
                    <span className="w-12 text-sm text-right">{percentages.vata}%</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Flame className="h-5 w-5 text-orange-400" />
                    <span className="w-16 text-sm">Pitta</span>
                    <div className="flex-1 bg-muted rounded-full h-3 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${percentages.pitta}%` }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="h-full bg-orange-400 rounded-full"
                      />
                    </div>
                    <span className="w-12 text-sm text-right">{percentages.pitta}%</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Droplets className="h-5 w-5 text-green-400" />
                    <span className="w-16 text-sm">Kapha</span>
                    <div className="flex-1 bg-muted rounded-full h-3 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${percentages.kapha}%` }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="h-full bg-green-400 rounded-full"
                      />
                    </div>
                    <span className="w-12 text-sm text-right">{percentages.kapha}%</span>
                  </div>
                </div>
              </div>

              {/* Characteristics */}
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground">Your Characteristics</h4>
                <div className="grid grid-cols-2 gap-2">
                  {result.characteristics.map((char, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${result.color.replace('text-', 'bg-')}`} />
                      {char}
                    </div>
                  ))}
                </div>
              </div>

              {/* Recommendations */}
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground">Personalized Recommendations</h4>
                <div className="grid gap-3">
                  {result.recommendations.map((rec, index) => (
                    <div
                      key={index}
                      className="p-3 rounded-lg bg-muted/50 border border-border"
                    >
                      <span className="text-xs font-medium text-primary uppercase tracking-wide">
                        {rec.category}
                      </span>
                      <p className="text-sm text-foreground mt-1">{rec.tip}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4">
                <Button onClick={handleReset} variant="outline" className="flex-1 gap-2">
                  <RotateCcw className="h-4 w-4" />
                  Retake Quiz
                </Button>
                <Button onClick={() => onOpenChange(false)} className="flex-1 gap-2">
                  Done
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
};

export default DoshaQuizModal;
