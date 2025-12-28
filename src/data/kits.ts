import kitImmunity from '@/assets/kits/kit-immunity.jpg';
import kitDigestion from '@/assets/kits/kit-digestion.jpg';
import kitStress from '@/assets/kits/kit-stress.jpg';
import kitWomen from '@/assets/kits/kit-women.jpg';
import kitHairSkin from '@/assets/kits/kit-hair-skin.jpg';
import kitDetox from '@/assets/kits/kit-detox.jpg';
import kitJoint from '@/assets/kits/kit-joint.jpg';
import kitSleep from '@/assets/kits/kit-sleep.jpg';
import kitEnergy from '@/assets/kits/kit-energy.jpg';
import kitDaily from '@/assets/kits/kit-daily.jpg';
import kitPitta from '@/assets/kits/kit-pitta.jpg';
import kitCustom from '@/assets/kits/kit-custom.jpg';

export interface Kit {
  id: number;
  slug: string;
  name: string;
  price: number;
  short: string;
  duration: string;
  image: string;
  description: string;
  ingredients: string[];
  benefits: string[];
  usage: {
    dosage: string;
    timing: string;
    instructions: string[];
  };
  includes: string[];
  warnings: string[];
}

export const kits: Kit[] = [
  {
    id: 1,
    slug: 'immunity-booster',
    name: 'Immunity Booster Kit',
    price: 799,
    short: 'Amla, Giloy & Tulsi formulation for daily immunity',
    duration: '30 days',
    image: kitImmunity,
    description: 'Strengthen your natural defenses with this powerful blend of traditional Ayurvedic immunity boosters. Our Immunity Booster Kit combines the antioxidant power of Amla, the immune-modulating properties of Giloy, and the antimicrobial benefits of Tulsi to create a comprehensive daily wellness routine.',
    ingredients: ['Amla (Indian Gooseberry)', 'Giloy (Tinospora Cordifolia)', 'Tulsi (Holy Basil)', 'Ashwagandha', 'Black Pepper Extract', 'Ginger Root'],
    benefits: ['Enhances natural immune response', 'Rich in Vitamin C and antioxidants', 'Supports respiratory health', 'Helps fight seasonal infections', 'Improves overall vitality'],
    usage: {
      dosage: '2 tablets twice daily',
      timing: 'After breakfast and dinner',
      instructions: ['Take with warm water or milk', 'Maintain consistent timing for best results', 'Continue for at least 3 months for optimal benefits']
    },
    includes: ['60 Immunity Tablets', '30 Tulsi Drops (15ml)', 'Wellness Guide Booklet'],
    warnings: ['Consult physician if pregnant or nursing', 'Not recommended for children under 12']
  },
  {
    id: 2,
    slug: 'digestion-care',
    name: 'Digestion Care Kit',
    price: 699,
    short: 'Triphala based digestive support',
    duration: '30 days',
    image: kitDigestion,
    description: 'Restore digestive balance with this time-tested Triphala-based formulation. The Digestion Care Kit gently cleanses the digestive tract, promotes healthy bowel movements, and supports optimal nutrient absorption for overall gut health.',
    ingredients: ['Triphala (Haritaki, Bibhitaki, Amalaki)', 'Ajwain (Carom Seeds)', 'Fennel Seeds', 'Ginger', 'Cumin', 'Hing (Asafoetida)'],
    benefits: ['Promotes healthy digestion', 'Relieves bloating and gas', 'Supports regular bowel movements', 'Enhances nutrient absorption', 'Detoxifies the digestive system'],
    usage: {
      dosage: '1 tablet before meals + 1 digestive churna sachet',
      timing: '15 minutes before lunch and dinner',
      instructions: ['Take tablets with warm water', 'Mix churna in warm water and drink', 'Avoid heavy meals while on this regimen']
    },
    includes: ['60 Triphala Tablets', '30 Digestive Churna Sachets', 'Diet Guide'],
    warnings: ['May cause mild detox symptoms initially', 'Increase water intake during use']
  },
  {
    id: 3,
    slug: 'stress-relief',
    name: 'Stress Relief Kit',
    price: 899,
    short: 'Ashwagandha + Brahmi calm blend',
    duration: '30 days',
    image: kitStress,
    description: 'Find your calm with this powerful adaptogenic blend. The Stress Relief Kit combines Ashwagandha and Brahmi to help your body adapt to stress, promote mental clarity, and support restful sleep without causing drowsiness.',
    ingredients: ['Ashwagandha Root Extract', 'Brahmi (Bacopa Monnieri)', 'Jatamansi', 'Shankhpushpi', 'Tagara', 'Lavender Extract'],
    benefits: ['Reduces cortisol levels', 'Promotes mental calmness', 'Enhances cognitive function', 'Supports healthy sleep patterns', 'Improves stress resilience'],
    usage: {
      dosage: '1 capsule morning, 2 capsules night',
      timing: 'Morning after breakfast, night before bed',
      instructions: ['Take with warm milk for better absorption', 'Practice deep breathing alongside', 'Avoid caffeine after 4 PM for best results']
    },
    includes: ['90 Stress Relief Capsules', 'Brahmi Brain Tonic (30ml)', 'Meditation Guide'],
    warnings: ['May cause mild drowsiness', 'Not for use with sedative medications']
  },
  {
    id: 4,
    slug: 'women-wellness',
    name: 'Women Wellness Kit',
    price: 999,
    short: 'Shatavari & herbs for hormonal balance',
    duration: '30 days',
    image: kitWomen,
    description: 'Specially formulated for women\'s unique health needs, this kit supports hormonal balance, reproductive health, and overall vitality. Shatavari, the queen of herbs for women, forms the foundation of this nurturing formulation.',
    ingredients: ['Shatavari (Asparagus Racemosus)', 'Lodhra', 'Ashoka Bark', 'Dashamoola', 'Aloe Vera', 'Fenugreek'],
    benefits: ['Supports hormonal balance', 'Eases menstrual discomfort', 'Promotes reproductive health', 'Enhances energy and vitality', 'Nourishes skin and hair'],
    usage: {
      dosage: '2 tablets twice daily',
      timing: 'After breakfast and before bed',
      instructions: ['Take with warm water or milk', 'Best results when taken consistently', 'Can be continued long-term']
    },
    includes: ['60 Shatavari Tablets', 'Women\'s Wellness Syrup (100ml)', 'Women\'s Health Guide'],
    warnings: ['Consult doctor if pregnant or trying to conceive', 'Not for use during heavy menstruation']
  },
  {
    id: 5,
    slug: 'hair-skin-glow',
    name: 'Hair & Skin Glow Kit',
    price: 899,
    short: 'Bhringraj, Amla & natural oils',
    duration: '30 days',
    image: kitHairSkin,
    description: 'Unlock your natural radiance with this comprehensive beauty kit. Combining internal supplements with traditional oils, this kit addresses hair and skin health from the inside out for lasting, natural beauty.',
    ingredients: ['Bhringraj (Eclipta Alba)', 'Amla', 'Brahmi Oil', 'Coconut Oil', 'Neem', 'Manjistha', 'Kumkumadi Oil'],
    benefits: ['Promotes hair growth and thickness', 'Reduces hair fall', 'Enhances skin radiance', 'Fights signs of aging', 'Improves skin texture'],
    usage: {
      dosage: '2 beauty capsules daily + weekly oil massage',
      timing: 'Capsules after dinner, oil application on weekends',
      instructions: ['Apply hair oil 1 hour before washing', 'Use face oil at night on cleansed skin', 'Massage gently in circular motions']
    },
    includes: ['60 Beauty Capsules', 'Bhringraj Hair Oil (100ml)', 'Kumkumadi Face Oil (15ml)', 'Application Guide'],
    warnings: ['Patch test oils before first use', 'Avoid oil near eyes']
  },
  {
    id: 6,
    slug: 'detox-rejuvenate',
    name: 'Detox & Rejuvenate Kit',
    price: 1099,
    short: 'Gentle liver and gut detox',
    duration: '14 days',
    image: kitDetox,
    description: 'Reset and rejuvenate with this intensive 14-day detox program. Designed to gently cleanse the liver, kidneys, and digestive system, this kit helps eliminate toxins and restore your body\'s natural vitality.',
    ingredients: ['Kutki (Picrorhiza Kurroa)', 'Punarnava', 'Kalmegh', 'Bhumyamalaki', 'Triphala', 'Neem', 'Turmeric'],
    benefits: ['Deep liver detoxification', 'Supports kidney function', 'Clears skin and complexion', 'Boosts energy levels', 'Improves metabolic function'],
    usage: {
      dosage: 'Morning detox drink + 2 tablets evening',
      timing: 'Empty stomach morning, after dinner evening',
      instructions: ['Mix detox powder in warm water each morning', 'Follow the included diet plan strictly', 'Drink at least 3 liters of water daily']
    },
    includes: ['14 Detox Powder Sachets', '28 Liver Support Tablets', 'Detox Diet Plan', 'Recipe Guide'],
    warnings: ['Not for pregnant women', 'May cause mild detox symptoms first 3 days', 'Avoid alcohol and processed foods']
  },
  {
    id: 7,
    slug: 'joint-mobility',
    name: 'Joint Mobility Kit',
    price: 1199,
    short: 'Boswellia & turmeric joint support',
    duration: '30 days',
    image: kitJoint,
    description: 'Restore comfortable movement with this powerful joint support formulation. Combining the anti-inflammatory benefits of Boswellia and Turmeric with traditional bone-strengthening herbs, this kit provides comprehensive joint care.',
    ingredients: ['Boswellia Serrata', 'Turmeric (Curcumin)', 'Guggulu', 'Shallaki', 'Ashwagandha', 'Rasna', 'Nirgundi Oil'],
    benefits: ['Reduces joint inflammation', 'Improves flexibility and mobility', 'Strengthens bones and cartilage', 'Relieves joint stiffness', 'Supports post-exercise recovery'],
    usage: {
      dosage: '2 tablets twice daily + oil massage as needed',
      timing: 'After breakfast and dinner',
      instructions: ['Take tablets with warm water', 'Massage oil into affected joints for 15 minutes', 'Use warm compress after oil application']
    },
    includes: ['120 Joint Support Tablets', 'Nirgundi Joint Oil (100ml)', 'Exercise Guide for Joint Health'],
    warnings: ['Consult doctor if on blood thinners', 'Not for acute injury treatment']
  },
  {
    id: 8,
    slug: 'sleep-support',
    name: 'Sleep Support Kit',
    price: 649,
    short: 'Herbal nighttime blend for restful sleep',
    duration: '30 days',
    image: kitSleep,
    description: 'Embrace restful nights naturally with this gentle sleep support formula. Unlike conventional sleep aids, this kit works with your body\'s natural rhythms to promote deep, restorative sleep without morning grogginess.',
    ingredients: ['Ashwagandha', 'Jatamansi', 'Brahmi', 'Tagara (Indian Valerian)', 'Nutmeg', 'Poppy Seeds', 'Chamomile'],
    benefits: ['Promotes natural sleep onset', 'Improves sleep quality', 'Reduces nighttime awakening', 'Non-habit forming', 'Wake up refreshed'],
    usage: {
      dosage: '2 tablets 30 minutes before bed',
      timing: 'Every night, same time',
      instructions: ['Take with warm milk and honey', 'Create a dark, quiet sleep environment', 'Avoid screens 1 hour before bed']
    },
    includes: ['60 Sleep Support Tablets', 'Relaxing Night Tea (20 bags)', 'Sleep Hygiene Guide'],
    warnings: ['May cause drowsiness', 'Do not operate machinery after taking', 'Not for daytime use']
  },
  {
    id: 9,
    slug: 'energy-vitality',
    name: 'Energy & Vitality Kit',
    price: 749,
    short: 'Herbal tonic for daily energy',
    duration: '30 days',
    image: kitEnergy,
    description: 'Fuel your active lifestyle with sustained, natural energy. This rejuvenating kit combines adaptogenic herbs that support your body\'s energy production without the crash associated with caffeine or stimulants.',
    ingredients: ['Shilajit', 'Ashwagandha', 'Safed Musli', 'Gokshura', 'Amla', 'Kapikacchu', 'Black Pepper'],
    benefits: ['Sustained energy throughout the day', 'Enhances physical stamina', 'Supports mental alertness', 'Improves recovery after exercise', 'Boosts overall vitality'],
    usage: {
      dosage: '2 capsules morning + energy tonic',
      timing: 'After breakfast',
      instructions: ['Take capsules with warm water', 'Mix 10ml tonic in water or juice', 'Best taken early morning for all-day energy']
    },
    includes: ['60 Energy Capsules', 'Shilajit Energy Tonic (200ml)', 'Lifestyle Tips Guide'],
    warnings: ['Not recommended before bedtime', 'May increase blood pressure in sensitive individuals']
  },
  {
    id: 10,
    slug: 'classic-daily-wellness',
    name: 'Classic Daily Wellness',
    price: 549,
    short: 'Everyday wellness trifecta',
    duration: '30 days',
    image: kitDaily,
    description: 'The essential daily Ayurvedic routine for overall health maintenance. This simple yet effective kit provides the foundation for daily wellness, supporting digestion, immunity, and mental clarity.',
    ingredients: ['Triphala', 'Ashwagandha', 'Tulsi', 'Chyawanprash Herbs', 'Ginger', 'Turmeric'],
    benefits: ['Daily health maintenance', 'Supports digestion and immunity', 'Promotes mental clarity', 'Easy to incorporate daily', 'Suitable for all body types'],
    usage: {
      dosage: '1 tablet each of 3 formulas',
      timing: 'Morning, afternoon, and evening',
      instructions: ['Triphala at night for digestion', 'Ashwagandha morning for energy', 'Tulsi afternoon for immunity']
    },
    includes: ['30 Triphala Tablets', '30 Ashwagandha Tablets', '30 Tulsi Tablets', 'Daily Routine Guide'],
    warnings: ['Safe for long-term use', 'Adjust dosage if any discomfort occurs']
  },
  {
    id: 11,
    slug: 'pitta-balance',
    name: 'Pitta Balance Kit',
    price: 799,
    short: 'Cooling herbs for Pitta balance',
    duration: '30 days',
    image: kitPitta,
    description: 'Cool and calm your Pitta dosha with this specially designed formulation. Ideal for those experiencing excess heat, irritability, or inflammatory conditions, this kit helps restore balance to the fire element.',
    ingredients: ['Shatavari', 'Amalaki', 'Chandana (Sandalwood)', 'Guduchi', 'Yashtimadhu (Licorice)', 'Rose Petals', 'Coriander'],
    benefits: ['Cools excess body heat', 'Reduces acidity and inflammation', 'Calms irritability and anger', 'Supports healthy skin', 'Balances digestion'],
    usage: {
      dosage: '2 tablets twice daily + cooling drink',
      timing: 'After meals',
      instructions: ['Take with cool water', 'Prepare cooling drink with included powder', 'Avoid spicy and fried foods during treatment']
    },
    includes: ['60 Pitta Balance Tablets', 'Cooling Drink Powder (200g)', 'Pitta Pacifying Diet Guide'],
    warnings: ['Not for Kapha predominant individuals', 'May increase coldness in some']
  },
  {
    id: 12,
    slug: 'customized-starter',
    name: 'Customized Starter Kit',
    price: 1299,
    short: 'Personalized herbs + mini consult',
    duration: '30 days',
    image: kitCustom,
    description: 'Begin your personalized Ayurvedic journey with this comprehensive starter kit. Includes a mini consultation to determine your unique constitution and customized herbal recommendations tailored specifically for you.',
    ingredients: ['Customized based on consultation', 'Dosha-specific herbs', 'Seasonal recommendations', 'Lifestyle-appropriate formulas'],
    benefits: ['Personalized health protocol', 'Professional guidance included', 'Herbs matched to your constitution', 'Ongoing support available', 'Foundation for long-term wellness'],
    usage: {
      dosage: 'As prescribed in consultation',
      timing: 'Based on individual recommendation',
      instructions: ['Complete online assessment before consultation', 'Follow personalized protocol provided', 'Schedule follow-up after 30 days']
    },
    includes: ['15-minute Video Consultation', 'Customized Herb Selection', 'Personalized Diet Plan', 'Lifestyle Recommendations', 'Email Support for 30 Days'],
    warnings: ['Consultation required before kit dispatch', 'Results vary based on individual compliance']
  }
];

export const getKitBySlug = (slug: string): Kit | undefined => {
  return kits.find(kit => kit.slug === slug);
};

export const getKitById = (id: number): Kit | undefined => {
  return kits.find(kit => kit.id === id);
};
