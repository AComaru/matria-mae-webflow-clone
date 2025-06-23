
import React from 'react';
import { CheckCircle, Heart, Users, Target, BookOpen, Lightbulb } from 'lucide-react';

const Solutions = () => {
  const solutions = [
    {
      icon: Heart,
      title: 'Disciplina Positiva',
      description: 'Aprenda técnicas comprovadas para estabelecer limites com amor e firmeza, sem gritos ou castigos.',
      color: 'from-purple-400 to-pink-500'
    },
    {
      icon: Users,
      title: 'Comunicação Efetiva',
      description: 'Desenvolva habilidades para se conectar verdadeiramente com seu filho e resolver conflitos.',
      color: 'from-blue-400 to-purple-500'
    },
    {
      icon: Target,
      title: 'Rotinas Organizadas',
      description: 'Estruture o dia a dia da família de forma que todos se sintam seguros e organizados.',
      color: 'from-green-400 to-blue-500'
    },
    {
      icon: Lightbulb,
      title: 'Estratégias Práticas',
      description: 'Ferramentas simples e eficazes que você pode aplicar imediatamente no seu dia a dia.',
      color: 'from-yellow-400 to-green-500'
    },
    {
      icon: BookOpen,
      title: 'Desenvolvimento Emocional',
      description: 'Ajude seu filho a entender e expressar suas emoções de forma saudável.',
      color: 'from-pink-400 to-purple-500'
    },
    {
      icon: CheckCircle,
      title: 'Resultados Duradouros',
      description: 'Métodos baseados em evidências que criam mudanças positivas permanentes.',
      color: 'from-indigo-400 to-pink-500'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            A Transformação que Você Busca
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nosso método comprovado ajuda mães como você a criar filhos mais seguros, 
            obedientes e emocionalmente saudáveis através de estratégias práticas e amorosas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => {
            const IconComponent = solution.icon;
            return (
              <div 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-purple-50/50 hover:from-purple-50 hover:to-pink-50 rounded-2xl p-8"
              >
                <div className="space-y-4">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${solution.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-playfair text-xl font-semibold text-gray-900">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {solution.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
