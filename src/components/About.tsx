
import React from 'react';
import { Button } from '@/components/ui/button';
import { Award, Heart, Star, Users } from 'lucide-react';

const About = () => {
  const achievements = [
    {
      icon: Users,
      number: '500+',
      label: 'Famílias Atendidas'
    },
    {
      icon: Star,
      number: '5.0',
      label: 'Avaliação Média'
    },
    {
      icon: Award,
      number: '3',
      label: 'Certificações'
    },
    {
      icon: Heart,
      number: '100%',
      label: 'Dedicação'
    }
  ];

  return (
    <section id="about" className="py-20 gradient-bg">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-rose-400/20 to-pink-500/20 rounded-3xl transform -rotate-3"></div>
            <img
              src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Bea - Doula especializada"
              className="relative rounded-3xl shadow-2xl w-full h-[600px] object-cover"
            />
            
            {/* Floating card */}
            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl max-w-xs">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-600">Disponível agora</span>
              </div>
              <p className="text-sm text-gray-700">
                "Estou aqui para apoiar você em cada momento da sua jornada materna."
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-gray-900">
                Conheça a 
                <span className="text-gradient block">Bea</span>
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Sou Beatriz, doula certificada e apaixonada por apoiar mulheres em sua 
                  jornada materna. Com mais de 5 anos de experiência, já tive o privilégio 
                  de acompanhar centenas de famílias em momentos únicos e transformadores.
                </p>
                <p>
                  Minha missão é oferecer suporte emocional, físico e informativo, 
                  respeitando sempre as escolhas e desejos de cada família. Acredito que 
                  toda mulher merece se sentir empoderada, segura e amada durante a 
                  gestação, parto e pós-parto.
                </p>
                <p>
                  Formada em Psicologia e especializada em saúde materna, combino 
                  conhecimento científico com sensibilidade humana para oferecer o 
                  melhor cuidado possível.
                </p>
              </div>
            </div>

            {/* Achievements */}
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon;
                return (
                  <div key={index} className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 text-center">
                    <IconComponent className="h-6 w-6 text-rose-500 mx-auto mb-2" />
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
              className="bg-gradient-to-r from-rose-400 to-pink-500 hover:from-rose-500 hover:to-pink-600 text-white"
            >
              Agendar uma Conversa
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
