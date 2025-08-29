
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Globe, ChefHat } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Navbar = () => {
  const { t, toggleLanguage, language } = useLanguage();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="p-2 rounded-lg hero-gradient group-hover:animate-pulse-glow transition-all duration-300">
              <ChefHat className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              FoodShare
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`nav-link ${isActive('/') ? 'text-primary' : 'text-foreground'}`}
            >
              {t('home')}
            </Link>
            <Link 
              to="/about" 
              className={`nav-link ${isActive('/about') ? 'text-primary' : 'text-foreground'}`}
            >
              {t('about')}
            </Link>
            <Link 
              to="/auth" 
              className={`nav-link ${isActive('/auth') ? 'text-primary' : 'text-foreground'}`}
            >
              {t('login')}
            </Link>
            <Link 
              to="/contribute" 
              className={`nav-link ${isActive('/contribute') ? 'text-primary' : 'text-foreground'}`}
            >
              {t('contribute')}
            </Link>
            <Link 
              to="/recipes" 
              className={`nav-link ${isActive('/recipes') ? 'text-primary' : 'text-foreground'}`}
            >
              {t('recipes')}
            </Link>
          </div>

          {/* Language Toggle */}
          <Button
            variant="outline"
            size="icon"
            onClick={toggleLanguage}
            className="relative overflow-hidden group"
          >
            <Globe className="h-4 w-4 transition-transform group-hover:rotate-12" />
            <span className="sr-only">Toggle language</span>
            <span className="absolute -top-1 -right-1 text-xs font-bold text-primary">
              {language.toUpperCase()}
            </span>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
