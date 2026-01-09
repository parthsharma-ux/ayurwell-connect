// Step images for yoga asanas
import bhujangasanaStep1 from "@/assets/yoga/steps/bhujangasana-step1.jpg";
import bhujangasanaStep2 from "@/assets/yoga/steps/bhujangasana-step2.jpg";
import bhujangasanaStep3 from "@/assets/yoga/steps/bhujangasana-step3.jpg";
import bhujangasanaStep4 from "@/assets/yoga/steps/bhujangasana-step4.jpg";

import vrikshasanaStep1 from "@/assets/yoga/steps/vrikshasana-step1.jpg";
import vrikshasanaStep2 from "@/assets/yoga/steps/vrikshasana-step2.jpg";
import vrikshasanaStep3 from "@/assets/yoga/steps/vrikshasana-step3.jpg";
import vrikshasanaStep4 from "@/assets/yoga/steps/vrikshasana-step4.jpg";

import trikonasanaStep1 from "@/assets/yoga/steps/trikonasana-step1.jpg";
import trikonasanaStep2 from "@/assets/yoga/steps/trikonasana-step2.jpg";
import trikonasanaStep3 from "@/assets/yoga/steps/trikonasana-step3.jpg";

import dhanurasanaStep1 from "@/assets/yoga/steps/dhanurasana-step1.jpg";
import dhanurasanaStep2 from "@/assets/yoga/steps/dhanurasana-step2.jpg";
import dhanurasanaStep3 from "@/assets/yoga/steps/dhanurasana-step3.jpg";

import halasanaStep1 from "@/assets/yoga/steps/halasana-step1.jpg";
import halasanaStep2 from "@/assets/yoga/steps/halasana-step2.jpg";
import halasanaStep3 from "@/assets/yoga/steps/halasana-step3.jpg";

import sarvangasanaStep1 from "@/assets/yoga/steps/sarvangasana-step1.jpg";
import sarvangasanaStep2 from "@/assets/yoga/steps/sarvangasana-step2.jpg";
import sarvangasanaStep3 from "@/assets/yoga/steps/sarvangasana-step3.jpg";

import padmasanaStep1 from "@/assets/yoga/steps/padmasana-step1.jpg";
import padmasanaStep2 from "@/assets/yoga/steps/padmasana-step2.jpg";
import padmasanaStep3 from "@/assets/yoga/steps/padmasana-step3.jpg";

import shavasanaStep1 from "@/assets/yoga/steps/shavasana-step1.jpg";

import vajrasanaStep1 from "@/assets/yoga/steps/vajrasana-step1.jpg";

import suryaNamaskarStep1 from "@/assets/yoga/steps/surya-namaskar-step1.jpg";
import suryaNamaskarStep2 from "@/assets/yoga/steps/surya-namaskar-step2.jpg";
import suryaNamaskarStep3 from "@/assets/yoga/steps/surya-namaskar-step3.jpg";
import suryaNamaskarStep4 from "@/assets/yoga/steps/surya-namaskar-step4.jpg";
import suryaNamaskarStep5 from "@/assets/yoga/steps/surya-namaskar-step5.jpg";
import suryaNamaskarStep6 from "@/assets/yoga/steps/surya-namaskar-step6.jpg";
import suryaNamaskarStep7 from "@/assets/yoga/steps/surya-namaskar-step7.jpg";
import suryaNamaskarStep8 from "@/assets/yoga/steps/surya-namaskar-step8.jpg";
import suryaNamaskarStep12 from "@/assets/yoga/steps/surya-namaskar-step12.jpg";

// Map of asana ID to step images
export const yogaStepImages: Record<string, Record<number, string>> = {
  "bhujangasana": {
    1: bhujangasanaStep1,
    2: bhujangasanaStep2,
    3: bhujangasanaStep3,
    4: bhujangasanaStep4,
    5: bhujangasanaStep4,
    6: bhujangasanaStep1,
  },
  "vrikshasana": {
    1: vrikshasanaStep1,
    2: vrikshasanaStep2,
    3: vrikshasanaStep3,
    4: vrikshasanaStep4,
    5: vrikshasanaStep1,
  },
  "trikonasana": {
    1: trikonasanaStep1,
    2: trikonasanaStep2,
    3: trikonasanaStep3,
    4: trikonasanaStep3,
    5: trikonasanaStep1,
  },
  "dhanurasana": {
    1: dhanurasanaStep1,
    2: dhanurasanaStep2,
    3: dhanurasanaStep3,
    4: dhanurasanaStep3,
    5: dhanurasanaStep1,
  },
  "halasana": {
    1: halasanaStep1,
    2: halasanaStep2,
    3: halasanaStep3,
    4: halasanaStep3,
    5: halasanaStep1,
  },
  "sarvangasana": {
    1: sarvangasanaStep1,
    2: sarvangasanaStep2,
    3: sarvangasanaStep3,
    4: sarvangasanaStep3,
    5: sarvangasanaStep1,
  },
  "padmasana": {
    1: padmasanaStep1,
    2: padmasanaStep2,
    3: padmasanaStep3,
    4: padmasanaStep3,
    5: padmasanaStep1,
  },
  "shavasana": {
    1: shavasanaStep1,
    2: shavasanaStep1,
    3: shavasanaStep1,
    4: shavasanaStep1,
  },
  "vajrasana": {
    1: vajrasanaStep1,
    2: vajrasanaStep1,
    3: vajrasanaStep1,
    4: vajrasanaStep1,
  },
  "surya-namaskar": {
    1: suryaNamaskarStep1,
    2: suryaNamaskarStep2,
    3: suryaNamaskarStep3,
    4: suryaNamaskarStep4,
    5: suryaNamaskarStep5,
    6: suryaNamaskarStep6,
    7: suryaNamaskarStep7,
    8: suryaNamaskarStep8,
    9: suryaNamaskarStep4,
    10: suryaNamaskarStep3,
    11: suryaNamaskarStep2,
    12: suryaNamaskarStep12,
  },
};

export const getStepImage = (asanaId: string, stepNumber: number): string | undefined => {
  return yogaStepImages[asanaId]?.[stepNumber];
};
