
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, Video, Headphones, Users, Star, Zap, Crown } from 'lucide-react';

const Products = () => {
  const courses = [
    {
      title: 'Disciplina Positiva na Prática',
      description: 'Curso completo para estabelecer limites claros com amor e firmeza',
      price: 'R$ 297',
      originalPrice: 'R$ 497',
      features: [
        '40+ aulas em vídeo',
        'E-book + Audiobook',
        'Exercícios práticos',
        'Aula tira-dúvidas ao vivo'
      ],
      icon: BookOpen,
      color: 'from-blue-500 to-purple-500',
      badge: 'MAIS VENDIDO'
    },
    {
      title: 'Comunicação Conectada',
      description: 'Aprenda a se comunicar de forma que seu filho realmente te escute',
      price: 'R$ 197',
      originalPrice: 'R$ 297',
      features: [
        '25+ aulas em vídeo',
        'Scripts prontos',
        'Casos práticos',
        'Suporte por 30 dias'
      ],
      icon: Video,
      color: 'from-green-500 to-blue-500',
      badge: null
    },
    {
      title: 'Rotinas que Funcionam',
      description: 'Organize a rotina familiar para reduzir conflitos e stress',
      price: 'R$ 147',
      originalPrice: 'R$ 247',
      features: [
        '15+ aulas práticas',
        'Templates de rotina',
        'Planilhas organizacionais',
        'Grupo exclusivo'
      ],
      icon: Headphones,
      color: 'from-yellow-500 to-green-500',
      badge: null
    }
  ];

  const masterminds = [
    {
      title: 'Mastermind Presencial',
      description: 'Imersão intensiva de 2 dias para transformação acelerada',
      price: 'R$ 2.997',
      location: 'São Paulo',
      date: 'Próxima turma: Março 2024',
      features: [
        'Imersão de 2 dias',
        'Grupos pequenos (máx 20 pessoas)',
        'Atendimento individualizado',
        'Material exclusivo',
        'Networking com outras mães',
        '6 meses de suporte pós-evento'
      ],
      icon: Users,
      color: 'from-purple-600 to-pink-600'
    },
    {
      title: 'Mastermind Online',
      description: 'Programa intensivo de 8 semanas com acompanhamento próximo',
      price: 'R$ 1.997',
      location: 'Online',
      date: 'Início: Todo mês',
      features: [
        '8 encontros ao vivo',
        'Grupos de até 15 pessoas',
        'Casos reais discutidos',
        'Plano de ação personalizado',
        'Gravações disponíveis',
        'Comunidade exclusiva'
      ],
      icon: Crown,
      color: 'from-indigo-600 to-purple-600'
    }
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Cursos Section */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Cursos Especializados
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Aprenda métodos comprovados através de cursos estruturados, 
            com desconto especial para membros da comunidade premium.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {courses.map((course, index) => {
            const IconComponent = course.icon;
            return (
              <Card key={index} className="relative overflow-hidden hover:shadow-xl transition-all duration-300">
                {course.badge && (
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium z-10">
                    {course.badge}
                  </div>
                )}
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${course.color} flex items-center justify-center`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    
                    <div>
                      <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-2">
                        {course.title}
                      </h3>
                      <p className="text-gray-600">
                        {course.description}
                      </p>
                    </div>

                    <div className="space-y-3">
                      {course.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <Star className="h-4 w-4 text-yellow-500" fill="currentColor" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <span className="text-3xl font-bold text-gray-900">{course.price}</span>
                        <span className="text-lg text-gray-500 line-through">{course.originalPrice}</span>
                      </div>
                      <p className="text-sm text-green-600 font-medium">
                        Desconto de 40% para membros premium
                      </p>
                    </div>

                    <Button className={`w-full bg-gradient-to-r ${course.color} text-white hover:opacity-90`}>
                      Inscrever-se Agora
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Masterminds Section */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Masterminds Exclusivos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Para casos mais complexos e aprendizado acelerado. 
            Grupos pequenos com acompanhamento intensivo e personalizado.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {masterminds.map((mastermind, index) => {
            const IconComponent = mastermind.icon;
            return (
              <Card key={index} className="relative overflow-hidden bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${mastermind.color} flex items-center justify-center`}>
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h3 className="font-playfair text-2xl font-bold text-gray-900">
                          {mastermind.title}
                        </h3>
                        <p className="text-gray-600">
                          {mastermind.description}
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div className="bg-white/80 rounded-lg p-3">
                        <div className="font-semibold text-gray-900">Local</div>
                        <div className="text-sm text-gray-600">{mastermind.location}</div>
                      </div>
                      <div className="bg-white/80 rounded-lg p-3">
                        <div className="font-semibold text-gray-900">Data</div>
                        <div className="text-sm text-gray-600">{mastermind.date}</div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      {mastermind.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <Zap className="h-4 w-4 text-purple-500" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="text-center space-y-3">
                      <div className="text-4xl font-bold text-gray-900">{mastermind.price}</div>
                      <p className="text-sm text-purple-600 font-medium">
                        Parcelamento em até 12x disponível
                      </p>
                    </div>

                    <Button className={`w-full bg-gradient-to-r ${mastermind.color} text-white hover:opacity-90 h-12`}>
                      Reservar Minha Vaga
                    </Button>
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

export default Products;
