
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
      number: '20+',
      label: 'Anos de Experiência'
    },
    {
      icon: Award,
      number: '12+',
      label: 'Anos do BeaBrincar'
    },
    {
      icon: Heart,
      number: '98%',
      label: 'Satisfação'
    }
  ];

  const qualifications = [
    'Mãe do Felipe e da Manuela - vivência real da maternidade',
    'Formada em Educação Física pela UFPR',
    'Estudante de Psicologia',
    'Especialista em Psicomotricidade Relacional há 20+ anos',
    'Ex-coordenadora pedagógica escolar',
    'Autora do livro "Sala de Embarque - Uma Experiência Pedagógica"',
    'Criadora da clínica BeaBrincar há 12 anos'
  ];

  return (
    <section id="about" className="py-20 gradient-bg">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-3xl transform -rotate-3"></div>
            <img
              src="/lovable-uploads/e9476310-b1b6-434f-be42-f38ac197cf23.png"
              alt="Beatriz do BeaBrincar - Especialista em Psicomotricidade Relacional"
              className="relative rounded-3xl shadow-2xl w-full h-[600px] object-cover"
            />
            
            {/* Floating card */}
            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl max-w-xs">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-600">Transformando famílias há 20+ anos</span>
              </div>
              <p className="text-sm text-gray-700">
                "Toda criança pode aprender a se comportar bem quando entendemos o que ela expressa através do brincar."
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
                  Olá, mães! Sou a Bea, mãe do Felipe e da Manuela, e sei exatamente como é 
                  difícil equilibrar amor e firmeza na educação dos nossos filhos. Como vocês, 
                  já passei por momentos de dúvida: "Será que estou sendo muito rígida? Ou muito 
                  permissiva?"
                </p>
                <p>
                  Há mais de 20 anos, dedico minha vida a desvendar os mistérios do comportamento 
                  infantil através da <strong>Psicomotricidade Relacional</strong>. Descobri que as 
                  crianças nos contam tudo através do brincar - suas angústias, medos, necessidades 
                  e desejos. Precisamos apenas aprender a "ler" essas mensagens.
                </p>
                <p>
                  No BeaBrincar, minha clínica há 12 anos, desenvolvi um método que vai além do que 
                  se vê no comportamento da criança. <strong>Você não precisa mais gritar, brigar ou 
                  se sentir perdida</strong>. Existe um caminho para estabelecer limites claros com 
                  muito amor, criando a harmonia familiar que você tanto deseja.
                </p>
                <p>
                  Minha missão é ajudar você a transformar sua relação com seus filhos, cultivando 
                  <strong>laços fortes, limites claros e muito carinho</strong> - porque toda família 
                  merece viver em paz e acolhimento.
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
