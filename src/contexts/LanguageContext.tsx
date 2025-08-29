
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'te';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Site branding
    siteTitle: 'FoodShare',
    
    // Navigation
    home: 'Home',
    about: 'About',
    login: 'Login',
    register: 'Register',
    contribute: 'Contribute',
    recipes: 'Recipes',
    
    // Home page
    heroTitle: 'Share Your Culinary Journey',
    heroSubtitle: 'A community space for food lovers to share recipes, vlogs, and culinary experiences',
    getStarted: 'Get Started',
    exploreRecipes: 'Explore Recipes',
    whyChoose: 'Why Choose FoodShare?',
    whyChooseSubtitle: 'Join thousands of food enthusiasts sharing their passion for cooking',
    shareRecipes: 'Share Recipes',
    shareRecipesDesc: 'Upload your favorite recipes with photos, videos, and audio instructions',
    joinCommunity: 'Join Community',
    joinCommunityDesc: 'Connect with food lovers from around the world',
    inspireOthers: 'Inspire Others',
    inspireOthersDesc: 'Share your culinary journey and inspire fellow food enthusiasts',
    discoverFlavors: 'Discover New Flavors',
    discoverFlavorsDesc: 'Explore diverse cuisines and cooking techniques',
    readyToShare: 'Ready to Share Your Recipe?',
    readyToShareDesc: 'Join our community and start sharing your culinary creations today',
    joinNow: 'Join Now',
    
    // About page
    aboutTitle: 'About FoodShare',
    aboutDescription: 'This platform is a community space for sharing food recipes, vlogs, videos, audios, and photos. Anyone can contribute their food-making experience and inspire others.',
    ourMission: 'Our Mission',
    missionDescription: 'To create a vibrant community where food enthusiasts from all walks of life can share their culinary wisdom, learn from each other, and celebrate the universal language of food.',
    whatWeStandFor: 'What We Stand For',
    passionForFood: 'Passion for Food',
    passionDesc: 'We believe food brings people together and creates lasting memories',
    communityFirst: 'Community First',
    communityDesc: 'Our platform is built by food lovers, for food lovers',
    globalFlavors: 'Global Flavors',
    globalDesc: 'Celebrating diverse cuisines and cooking traditions worldwide',
    shareLearn: 'Share & Learn',
    shareLearnDesc: 'Everyone has something unique to contribute to the culinary world',
    joinGrowingCommunity: 'Join Our Growing Community',
    activeMembers: 'Active Members',
    recipesShared: 'Recipes Shared',
    countries: 'Countries',
    
    // Login/Register
    loginTitle: 'Welcome Back',
    registerTitle: 'Join Our Community',
    signInGoogle: 'Sign in with Google',
    signInFacebook: 'Sign in with Facebook',
    email: 'Email',
    password: 'Password',
    confirmPassword: 'Confirm Password',
    name: 'Name',
    
    // Contribute
    contributeTitle: 'Contribute Your Recipe',
    contributeSubtitle: 'Share your culinary creations with our community',
    uploadVideo: 'Upload Video',
    uploadAudio: 'Upload Audio',
    uploadText: 'Upload Text Recipe',
    uploadPhoto: 'Upload Photos',
    location: 'Location',
    submit: 'Submit Recipe',
    selectContributionType: 'Select how you\'d like to share your recipe',
    videoDesc: 'Record a cooking video to show your process',
    audioDesc: 'Share audio instructions for your recipe',
    textDesc: 'Write down your recipe with detailed steps',
    photoDesc: 'Upload photos of your delicious creation',
    
    // Recipes
    recipesTitle: 'Community Recipes',
    recipesSubtitle: 'Discover amazing recipes from food lovers around the world',
    allRecipes: 'All Recipes',
    loadMoreRecipes: 'Load More Recipes',
    by: 'By',
    
    // Common
    or: 'or',
    cancel: 'Cancel',
    save: 'Save',
    loading: 'Loading...',
  },
  te: {
    // Site branding
    siteTitle: 'ఫుడ్‌షేర్',
    
    // Navigation
    home: 'హోమ్',
    about: 'గురించి',
    login: 'లాగిన్',
    register: 'నమోదు',
    contribute: 'సహకారం',
    recipes: 'వంటకాలు',
    
    // Home page
    heroTitle: 'మీ వంట ప్రయాణాన్ని పంచుకోండి',
    heroSubtitle: 'వంటకాలు, వ్లాగ్‌లు మరియు వంట అనుభవాలను పంచుకోవడానికి ఆహార ప్రేమికుల కమ్యూనిటీ స్థలం',
    getStarted: 'ప్రారంభించండి',
    exploreRecipes: 'వంటకాలను అన్వేషించండి',
    whyChoose: 'ఫుడ్‌షేర్‌ను ఎందుకు ఎంచుకోవాలి?',
    whyChooseSubtitle: 'వంట పట్ల అభిరుచి పంచుకునే వేలాది మంది ఆహార ప్రేమికులతో చేరండి',
    shareRecipes: 'వంటకాలను పంచుకోండి',
    shareRecipesDesc: 'మీ ఇష్టమైన వంటకాలను ఫోటోలు, వీడియోలు మరియు ఆడియో సూచనలతో అప్‌లోడ్ చేయండి',
    joinCommunity: 'కమ్యూనిటీలో చేరండి',
    joinCommunityDesc: 'ప్రపంచవ్యాప్తంగా ఉన్న ఆహార ప్రేమికులతో కనెక్ట్ అవ్వండి',
    inspireOthers: 'ఇతరులను ప్రేరేపించండి',
    inspireOthersDesc: 'మీ వంట ప్రయాణాన్ని పంచుకుని తోటి ఆహార ప్రేమికులను ప్రేరేపించండి',
    discoverFlavors: 'కొత్త రుచులను కనుగొనండి',
    discoverFlavorsDesc: 'వైవిధ్యమైన వంటకాలు మరియు వంట పద్ధతులను అన్వేషించండి',
    readyToShare: 'మీ వంటకాన్ని పంచుకోవడానికి సిద్ధంగా ఉన్నారా?',
    readyToShareDesc: 'మా కమ్యూనిటీలో చేరి ఈరోజే మీ వంట సృష్టులను పంచుకోవడం ప్రారంభించండి',
    joinNow: 'ఇప్పుడే చేరండి',
    
    // About page
    aboutTitle: 'ఫుడ్‌షేర్ గురించి',
    aboutDescription: 'ఈ ప్లాట్‌ఫారమ్ ఆహార వంటకాలు, వ్లాగ్‌లు, వీడియోలు, ఆడియోలు మరియు ఫోటోలను పంచుకోవడానికి కమ్యూనిటీ స్థలం. ఎవరైనా వారి వంట అనుభవాన్ని సహకరించవచ్చు మరియు ఇతరులను ప్రేరేపించవచ్చు.',
    ourMission: 'మా లక్ష్యం',
    missionDescription: 'జీవన రంగాల నుండి వచ్చిన ఆహార ప్రేమికులు వారి వంట జ్ఞానాన్ని పంచుకునే, ఒకరి నుండి ఒకరు నేర్చుకునే మరియు ఆహారం యొక్క సార్వత్రిక భాషను జరుపుకునే చైతన్యవంతమైన కమ్యూనిటీని సృష్టించడం.',
    whatWeStandFor: 'మేము దేని కోసం నిలబడతాం',
    passionForFood: 'ఆహార పట్ల అభిరుచి',
    passionDesc: 'ఆహారం ప్రజలను కలిపి తీసుకువస్తుందని మరియు చిరస్మరణీయ జ్ఞాపకాలను సృష్టిస్తుందని మేము నమ్ముతున్నాము',
    communityFirst: 'కమ్యూనిటీ మొదట',
    communityDesc: 'మా ప్లాట్‌ఫారమ్ ఆహార ప్రేమికులచే, ఆహార ప్రేమికుల కోసం నిర్మించబడింది',
    globalFlavors: 'గ్లోబల్ రుచులు',
    globalDesc: 'ప్రపంచవ్యాప్తంగా వైవిధ్యమైన వంటకాలు మరియు వంట సంప్రదాయాలను జరుపుకోవడం',
    shareLearn: 'పంచుకోండి & నేర్చుకోండి',
    shareLearnDesc: 'వంట ప్రపంచానికి అందరికీ ప్రత్యేకమైనది ఏదో కంట్రిబ్యూట్ చేయగలది',
    joinGrowingCommunity: 'మా పెరుగుతున్న కమ్యూనిటీలో చేరండి',
    activeMembers: 'క్రియాశీల సభ్యులు',
    recipesShared: 'పంచుకున్న వంటకాలు',
    countries: 'దేశాలు',
    
    // Login/Register
    loginTitle: 'తిరిగి స్వాగతం',
    registerTitle: 'మా కమ్యూనిటీలో చేరండి',
    signInGoogle: 'గూగుల్‌తో సైన్ ఇన్ చేయండి',
    signInFacebook: 'ఫేస్‌బుక్‌తో సైన్ ఇన్ చేయండి',
    email: 'ఇమెయిల్',
    password: 'పాస్‌వర్డ్',
    confirmPassword: 'పాస్‌వర్డ్ నిర్ధారించండి',
    name: 'పేరు',
    
    // Contribute
    contributeTitle: 'మీ వంటకాన్ని సహకరించండి',
    contributeSubtitle: 'మా కమ్యూనిటీతో మీ వంట సృష్టులను పంచుకోండి',
    uploadVideo: 'వీడియో అప్‌లోడ్ చేయండి',
    uploadAudio: 'ఆడియో అప్‌లోడ్ చేయండి',
    uploadText: 'టెక్స్ట్ వంటకం అప్‌లోడ్ చేయండి',
    uploadPhoto: 'ఫోటోలు అప్‌లోడ్ చేయండి',
    location: 'స్థానం',
    submit: 'వంటకం సమర్పించండి',
    selectContributionType: 'మీరు మీ వంటకాన్ని ఎలా పంచుకోవాలనుకుంటున్నారో ఎంచుకోండి',
    videoDesc: 'మీ ప్రక్రియను చూపించడానికి వంట వీడియో రికార్డ్ చేయండి',
    audioDesc: 'మీ వంటకం కోసం ఆడియో సూచనలను పంచుకోండి',
    textDesc: 'వివరణాత్మక దశలతో మీ వంటకాన్ని వ్రాయండి',
    photoDesc: 'మీ రుచికరమైన సృష్టి యొక్క ఫోటోలను అప్‌లోడ్ చేయండి',
    
    // Recipes
    recipesTitle: 'కమ్యూనిటీ వంటకాలు',
    recipesSubtitle: 'ప్రపంచవ్యాప్తంగా ఉన్న ఆహార ప్రేమికుల నుండి అద్భుతమైన వంటకాలను కనుగొనండి',
    allRecipes: 'అన్ని వంటకాలు',
    loadMoreRecipes: 'మరిన్ని వంటకాలను లోడ్ చేయండి',
    by: 'ద్వారా',
    
    // Common
    or: 'లేదా',
    cancel: 'రద్దు చేయండి',
    save: 'సేవ్ చేయండి',
    loading: 'లోడ్ అవుతోంది...',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'te' : 'en');
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
