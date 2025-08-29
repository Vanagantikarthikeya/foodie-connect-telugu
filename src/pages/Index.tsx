
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ChefHat, Users, Heart, Star } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Layout from '@/components/Layout';
import HeroCarousel from '@/components/HeroCarousel';

const Index = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: ChefHat,
      title: "Share Recipes",
      description: "Upload your favorite recipes with photos, videos, and audio instructions"
    },
    {
      icon: Users,
      title: "Join Community",
      description: "Connect with food lovers from around the world"
    },
    {
      icon: Heart,
      title: "Inspire Others",
      description: "Share your culinary journey and inspire fellow food enthusiasts"
    },
    {
      icon: Star,
      title: "Discover New Flavors",
      description: "Explore diverse cuisines and cooking techniques"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 hero-gradient opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <HeroCarousel />
          <div className="animate-float">
            <h1 className="food-heading mb-6">
              {t('heroTitle')}
            </h1>
            <p className="food-subheading mb-8 max-w-3xl mx-auto">
              {t('heroSubtitle')}
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/contribute">
              <Button size="lg" className="btn-food px-8 py-4 text-lg">
                {t('getStarted')}
              </Button>
            </Link>
            <Link to="/recipes">
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg border-primary text-primary hover:bg-primary hover:text-white">
                {t('exploreRecipes')}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose FoodShare?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join thousands of food enthusiasts sharing their passion for cooking
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="food-card border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg hero-gradient mb-4">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="border-0 shadow-2xl overflow-hidden">
            <div className="hero-gradient p-12 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Share Your Recipe?
              </h2>
              <p className="text-xl opacity-90 mb-8">
                Join our community and start sharing your culinary creations today
              </p>
              <Link to="/auth">
                <Button size="lg" variant="secondary" className="px-8 py-4 text-lg">
                  Join Now
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
