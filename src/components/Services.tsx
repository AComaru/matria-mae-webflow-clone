
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Users, BookOpen, Smartphone, MessageCircle, Home } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: 'Consultoria Familiar',
      description: 'Orientação personalizada para melhorar o relacionamento entre pais e filhos.',
      color: 'from-rose-400 to-pink-500'
    },
    {
      icon: Users,
      title: 'Workshops Educativos',
      description: 'Encontros práticos para aprender técnicas de educação positiva e comunicação.',
      color: 'from-pink-400 to-rose-500'
    },
    {
      icon: BookOpen,
      title: 'Educação Comportamental',
      description: 'Estratégias para lidar com birras, estabelecer limites e criar rotinas saudáveis.',
      color: 'from-purple-400 to-pink-500'
    },
    {
      icon: Home,
      title: 'Ambiente Familiar Harmonioso',
      description: 'Dicas para criar um lar acolhedor onde todos se sintam respeitados e amados.',
      color: 'from-indigo-400 to-purple-500'
    },
    {
      icon: Smartphone,
      title: 'Consultoria Online',
      description: 'Atendimento virtual para dúvidas e orientações sobre educação infantil.',
      color: 'from-blue-400 to-indigo-500'
    },
    {
      icon: MessageCircle,
      title: 'Grupos de Apoio',
      description: 'Encontros com outras mães para compartilhar experiências e criar rede de apoio.',
      color: 'from-teal-400 to-blue-500'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Serviços Especializados
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos um cuidado integral e personalizado para apoiar você na educação dos seus filhos, 
            sempre com carinho, respeito e profissionalismo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-rose-50/50 hover:from-rose-50 hover:to-pink-50"
              >
                <CardContent className="p-8">
                  <div className="space-y-4">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-playfair text-xl font-semibold text-gray-900">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
