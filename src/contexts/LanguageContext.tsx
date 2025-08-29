
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'te';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  en: {
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
    
    // About page
    aboutTitle: 'About FoodShare',
    aboutDescription: 'This platform is a community space for sharing food recipes, vlogs, videos, audios, and photos. Anyone can contribute their food-making experience and inspire others.',
    
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
    uploadVideo: 'Upload Video',
    uploadAudio: 'Upload Audio',
    uploadText: 'Upload Text Recipe',
    uploadPhoto: 'Upload Photos',
    location: 'Location',
    submit: 'Submit Recipe',
    
    // Recipes
    recipesTitle: 'Community Recipes',
    allRecipes: 'All Recipes',
    
    // Common
    or: 'or',
    cancel: 'Cancel',
    save: 'Save',
    loading: 'Loading...',
  },
  te: {
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
    
    // About page
    aboutTitle: 'ఫుడ్‌షేర్ గురించి',
    aboutDescription: 'ఈ ప్లాట్‌ఫారమ్ ఆహార వంటకాలు, వ్లాగ్‌లు, వీడియోలు, ఆడియోలు మరియు ఫోటోలను పంచుకోవడానికి కమ్యూనిటీ స్థలం. ఎవరైనా వారి వంట అనుభవాన్ని సహకరించవచ్చు మరియు ఇతరులను ప్రేరేపించవచ్చు.',
    
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
    uploadVideo: 'వీడియో అప్‌లోడ్ చేయండి',
    uploadAudio: 'ఆడియో అప్‌లోడ్ చేయండి',
    uploadText: 'టెక్స్ట్ వంటకం అప్‌లోడ్ చేయండి',
    uploadPhoto: 'ఫోటోలు అప్‌లోడ్ చేయండి',
    location: 'స్థానం',
    submit: 'వంటకం సమర్పించండి',
    
    // Recipes
    recipesTitle: 'కమ్యూనిటీ వంటకాలు',
    allRecipes: 'అన్ని వంటకాలు',
    
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
