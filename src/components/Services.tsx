
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Baby, Users, BookOpen, Smartphone, MessageCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: 'Acompanhamento Pré-Natal',
      description: 'Suporte emocional e informativo durante toda a gestação, preparando você para o parto.',
      color: 'from-rose-400 to-pink-500'
    },
    {
      icon: Baby,
      title: 'Apoio no Parto',
      description: 'Presença contínua durante o trabalho de parto, oferecendo conforto e advocacy.',
      color: 'from-pink-400 to-rose-500'
    },
    {
      icon: Users,
      title: 'Cuidados Pós-Parto',
      description: 'Orientação sobre amamentação, cuidados com o bebê e recuperação pós-parto.',
      color: 'from-purple-400 to-pink-500'
    },
    {
      icon: BookOpen,
      title: 'Educação Perinatal',
      description: 'Cursos e workshops sobre parto, amamentação e cuidados com o recém-nascido.',
      color: 'from-indigo-400 to-purple-500'
    },
    {
      icon: Smartphone,
      title: 'Consultoria Online',
      description: 'Atendimento virtual para dúvidas e orientações, disponível 24/7.',
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
            Oferecemos um cuidado integral e personalizado para cada fase da sua jornada materna, 
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
