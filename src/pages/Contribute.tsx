
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Upload, Video, Music, FileText, Image } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Layout from '@/components/Layout';

const Contribute = () => {
  const { t } = useLanguage();
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    location: '',
    file: null as File | null
  });

  const contributionTypes = [
    {
      id: 'video',
      title: t('uploadVideo'),
      icon: Video,
      description: 'Share cooking videos and tutorials',
      accept: 'video/*'
    },
    {
      id: 'audio',
      title: t('uploadAudio'),
      icon: Music,
      description: 'Record cooking instructions or stories',
      accept: 'audio/*'
    },
    {
      id: 'text',
      title: t('uploadText'),
      icon: FileText,
      description: 'Write detailed recipe instructions',
      accept: '.txt,.doc,.docx'
    },
    {
      id: 'photo',
      title: t('uploadPhoto'),
      icon: Image,
      description: 'Share beautiful food photography',
      accept: 'image/*'
    }
  ];

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFormData({ ...formData, file });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitting recipe:', { ...formData, type: selectedType });
    // Handle form submission here
  };

  return (
    <Layout>
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="food-heading mb-4">
              {t('contributeTitle')}
            </h1>
            <p className="food-subheading">
              Share your culinary masterpiece with the world
            </p>
          </div>

          {!selectedType ? (
            /* Type Selection */
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {contributionTypes.map((type) => (
                <Card 
                  key={type.id} 
                  className="food-card border-0 shadow-lg cursor-pointer hover:border-primary/50 transition-all duration-300"
                  onClick={() => setSelectedType(type.id)}
                >
                  <CardContent className="p-8 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full hero-gradient mb-4">
                      <type.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{type.title}</h3>
                    <p className="text-muted-foreground">{type.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            /* Upload Form */
            <Card className="border-0 shadow-xl">
              <CardHeader className="hero-gradient text-white">
                <CardTitle className="flex items-center gap-3">
                  {React.createElement(
                    contributionTypes.find(t => t.id === selectedType)?.icon || Upload,
                    { className: "h-6 w-6" }
                  )}
                  {contributionTypes.find(t => t.id === selectedType)?.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Recipe Title */}
                  <div className="space-y-2">
                    <Label htmlFor="title">Recipe Title</Label>
                    <Input
                      id="title"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      placeholder="Enter your recipe name..."
                      required
                    />
                  </div>

                  {/* Description */}
                  <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      placeholder="Tell us about your recipe..."
                      rows={4}
                    />
                  </div>

                  {/* File Upload */}
                  <div className="space-y-2">
                    <Label>Upload {selectedType}</Label>
                    <div className="upload-zone">
                      <input
                        type="file"
                        accept={contributionTypes.find(t => t.id === selectedType)?.accept}
                        onChange={handleFileUpload}
                        className="hidden"
                        id="file-upload"
                      />
                      <label htmlFor="file-upload" className="cursor-pointer">
                        <Upload className="h-12 w-12 mx-auto mb-4 text-primary" />
                        <p className="text-lg font-semibold mb-2">
                          Click to upload or drag and drop
                        </p>
                        <p className="text-muted-foreground">
                          {formData.file ? formData.file.name : 'No file selected'}
                        </p>
                      </label>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="space-y-2">
                    <Label htmlFor="location">{t('location')}</Label>
                    <Input
                      id="location"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      placeholder="Where is this recipe from?"
                    />
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4 pt-6">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setSelectedType(null)}
                      className="flex-1"
                    >
                      Back
                    </Button>
                    <Button type="submit" className="btn-food flex-1">
                      {t('submit')}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Contribute;
