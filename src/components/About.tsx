
import React from 'react';
import { Button } from '@/components/ui/button';
import { Award, Heart, Star, Users, BookOpen, Lightbulb } from 'lucide-react';

const About = () => {
  const achievements = [
    {
      icon: Users,
      number: '1.200+',
      label: 'Famílias Transformadas'
    },
    {
      icon: Star,
      number: '4.9',
      label: 'Avaliação Média'
    },
    {
      icon: Award,
      number: '5+',
      label: 'Anos de Experiência'
    },
    {
      icon: Heart,
      number: '98%',
      label: 'Satisfação'
    }
  ];

  const qualifications = [
    'Psicóloga especializada em desenvolvimento infantil',
    'Certificação em Disciplina Positiva',
    'Especialização em Terapia Familiar',
    'Mais de 1.000 horas de atendimento',
    'Palestrante em congressos nacionais',
    'Autora de 3 e-books sobre educação parental'
  ];

  return (
    <section id="about" className="py-20 gradient-bg">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-3xl transform -rotate-3"></div>
            <img
              src="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Educadora especializada em desenvolvimento infantil"
              className="relative rounded-3xl shadow-2xl w-full h-[600px] object-cover"
            />
            
            {/* Floating card */}
            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl max-w-xs">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-600">Ajudando famílias desde 2019</span>
              </div>
              <p className="text-sm text-gray-700">
                "Acredito que toda criança pode aprender a se comportar bem quando os pais sabem como ensinar."
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-gray-900">
                Quem está por trás do 
                <span className="text-gradient block">MatriaMãe</span>
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Olá! Sou Ana Carolina, psicóloga especializada em desenvolvimento infantil 
                  e criadora do método MatriaMãe. Há mais de 5 anos, dedico minha vida a 
                  ajudar mães a transformarem sua relação com os filhos.
                </p>
                <p>
                  Depois de atender centenas de famílias em consultório, percebi que muitas 
                  mães enfrentavam os mesmos desafios: como estabelecer limites sem gritar, 
                  como lidar com birras, como manter a conexão mesmo nos momentos difíceis.
                </p>
                <p>
                  Foi assim que nasceu o MatriaMãe: um espaço seguro onde mães podem aprender, 
                  compartilhar experiências e descobrir que é possível educar com amor E firmeza.
                </p>
              </div>
            </div>

            {/* Qualifications */}
            <div className="space-y-4">
              <h3 className="font-playfair text-2xl font-semibold text-gray-900">
                Formação e Experiência
              </h3>
              <div className="grid gap-3">
                {qualifications.map((qualification, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <BookOpen className="h-5 w-5 text-purple-500 flex-shrink-0" />
                    <span className="text-gray-700">{qualification}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon;
                return (
                  <div key={index} className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 text-center">
                    <IconComponent className="h-6 w-6 text-purple-500 mx-auto mb-2" />
                    <div className="font-playfair text-2xl font-bold text-gray-900">
                      {achievement.number}
                    </div>
                    <div className="text-sm text-gray-600">
                      {achievement.label}
                    </div>
                  </div>
                );
              })}
            </div>

            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
            >
              Conhecer Meu Método
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
