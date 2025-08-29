
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Users, Globe, Utensils } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Layout from '@/components/Layout';

const About = () => {
  const { t } = useLanguage();

  const values = [
    {
      icon: Heart,
      title: t('passionForFood'),
      description: t('passionDesc')
    },
    {
      icon: Users,
      title: t('communityFirst'),
      description: t('communityDesc')
    },
    {
      icon: Globe,
      title: t('globalFlavors'),
      description: t('globalDesc')
    },
    {
      icon: Utensils,
      title: t('shareLearn'),
      description: t('shareLearnDesc')
    }
  ];

  return (
    <Layout>
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="food-heading mb-6">
              {t('aboutTitle')}
            </h1>
            <div className="max-w-4xl mx-auto">
              <Card className="border-0 shadow-xl overflow-hidden">
                <div className="fresh-gradient p-8">
                  <p className="text-lg md:text-xl text-secondary-foreground leading-relaxed">
                    {t('aboutDescription')}
                  </p>
                </div>
              </Card>
            </div>
          </div>

          {/* Mission Statement */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {t('ourMission')}
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {t('missionDescription')}
              </p>
            </div>
          </section>

          {/* Values */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {t('whatWeStandFor')}
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="food-card border-0 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full spice-gradient mb-6">
                      <value.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Community Stats */}
          <section className="py-16">
            <Card className="border-0 shadow-xl overflow-hidden">
              <div className="hero-gradient p-12 text-white text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  {t('joinGrowingCommunity')}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                    <div className="text-4xl font-bold mb-2">10K+</div>
                    <div className="text-lg opacity-90">{t('activeMembers')}</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold mb-2">25K+</div>
                    <div className="text-lg opacity-90">{t('recipesShared')}</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold mb-2">50+</div>
                    <div className="text-lg opacity-90">{t('countries')}</div>
                  </div>
                </div>
              </div>
            </Card>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default About;
