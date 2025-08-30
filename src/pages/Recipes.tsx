
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Play, Volume2, FileText, Heart } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Layout from '@/components/Layout';

// Import recipe images
import biryaniImg from '@/assets/biryani.jpg';
import dosaImg from '@/assets/masala-dosa.jpg';
import pesarattuImg from '@/assets/pesarattu.jpg';
import butterChickenImg from '@/assets/butter-chicken.jpg';
import fishCurryImg from '@/assets/fish-curry.jpg';
import rajmaImg from '@/assets/rajma-chawal.jpg';

const Recipes = () => {
  const { t } = useLanguage();
  const [likedRecipes, setLikedRecipes] = useState<Set<number>>(new Set());

  // Sample recipe data
  const recipes = [
    {
      id: 1,
      title: "Hyderabadi Biryani",
      type: "photo",
      location: "Hyderabad",
      author: "Chef Priya",
      image: biryaniImg,
      description: "Authentic Hyderabadi biryani with aromatic basmati rice and tender mutton",
      likes: 245
    },
    {
      id: 2,
      title: "Masala Dosa",
      type: "video",
      location: "Bengaluru",
      author: "Rajesh Kumar",
      image: dosaImg,
      description: "Traditional South Indian dosa with spiced potato filling",
      likes: 189
    },
    {
      id: 3,
      title: "Pesarattu",
      type: "audio",
      location: "Vijayawada",
      author: "Lakshmi Devi",
      image: pesarattuImg,
      description: "Healthy green gram pancake with ginger and chili",
      likes: 156
    },
    {
      id: 4,
      title: "Butter Chicken",
      type: "text",
      location: "Delhi",
      author: "Arjun Singh",
      image: butterChickenImg,
      description: "Creamy tomato-based chicken curry with rich spices",
      likes: 298
    },
    {
      id: 5,
      title: "Fish Curry",
      type: "video",
      location: "Kochi",
      author: "Maria Jose",
      image: fishCurryImg,
      description: "Kerala-style fish curry with coconut milk",
      likes: 167
    },
    {
      id: 6,
      title: "Rajma Chawal",
      type: "photo",
      location: "Punjab",
      author: "Gurpreet Kaur",
      image: rajmaImg,
      description: "Comfort food - kidney beans curry with rice",
      likes: 203
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'video': return Play;
      case 'audio': return Volume2;
      case 'text': return FileText;
      default: return null;
    }
  };

  const getTypeBadge = (type: string) => {
    const colors = {
      video: 'bg-red-100 text-red-800 hover:bg-red-200',
      audio: 'bg-green-100 text-green-800 hover:bg-green-200',
      text: 'bg-blue-100 text-blue-800 hover:bg-blue-200',
      photo: 'bg-purple-100 text-purple-800 hover:bg-purple-200'
    };
    return colors[type as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const toggleLike = (recipeId: number) => {
    setLikedRecipes(prev => {
      const newLiked = new Set(prev);
      if (newLiked.has(recipeId)) {
        newLiked.delete(recipeId);
      } else {
        newLiked.add(recipeId);
      }
      return newLiked;
    });
  };

  const handlePlayContent = (recipe: any) => {
    if (recipe.type === 'video') {
      // Simulate video play
      alert(`Playing video: ${recipe.title}`);
    } else if (recipe.type === 'audio') {
      // Simulate audio play
      alert(`Playing audio instructions for: ${recipe.title}`);
    } else if (recipe.type === 'text') {
      // Simulate text view
      alert(`Viewing recipe text for: ${recipe.title}`);
    }
  };

  return (
    <Layout>
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="food-heading mb-4">
              {t('recipesTitle')}
            </h1>
            <p className="food-subheading">
              {t('recipesSubtitle')}
            </p>
          </div>

          {/* Recipes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recipes.map((recipe) => {
              const TypeIcon = getTypeIcon(recipe.type);
              
              return (
                <Card key={recipe.id} className="food-card border-0 shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="relative group">
                    <img
                      src={recipe.image}
                      alt={recipe.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className={`${getTypeBadge(recipe.type)} flex items-center gap-1`}>
                        {TypeIcon && <TypeIcon className="h-3 w-3" />}
                        {recipe.type}
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4 flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="bg-white/90 hover:bg-white text-red-500 hover:text-red-600 px-2 py-1 h-auto"
                        onClick={() => toggleLike(recipe.id)}
                      >
                        <Heart className={`h-4 w-4 mr-1 ${likedRecipes.has(recipe.id) ? 'fill-current' : ''}`} />
                        {likedRecipes.has(recipe.id) ? recipe.likes + 1 : recipe.likes}
                      </Button>
                    </div>
                    
                    {/* Play button overlay for video/audio */}
                    {(recipe.type === 'video' || recipe.type === 'audio' || recipe.type === 'text') && (
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
                        <Button
                          onClick={() => handlePlayContent(recipe)}
                          className="bg-white/90 hover:bg-white text-primary rounded-full p-3"
                        >
                          {TypeIcon && <TypeIcon className="h-6 w-6" />}
                        </Button>
                      </div>
                    )}
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">{recipe.title}</h3>
                    <p className="text-muted-foreground mb-3 line-clamp-2">
                      {recipe.description}
                    </p>
                    
                    <div className="flex items-center text-sm text-muted-foreground mb-4">
                      <MapPin className="h-4 w-4 mr-1" />
                      {recipe.location}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">{t('by')} {recipe.author}</span>
                      {recipe.type === 'photo' && (
                        <div className="w-8 h-8 rounded-full hero-gradient flex items-center justify-center">
                          <Heart className="h-4 w-4 text-white" />
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-16">
            <button className="btn-food px-8 py-3 rounded-lg font-medium transition-all duration-300">
              {t('loadMoreRecipes')}
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Recipes;
