
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Gift, Crown, Star, Headphones, BookOpen, Video, MessageCircle } from 'lucide-react';

const Community = () => {
  const freeFeatures = [
    { icon: Users, text: 'Acesso à comunidade de mães' },
    { icon: Headphones, text: 'Podcasts educativos' },
    { icon: BookOpen, text: 'E-books de conscientização' },
    { icon: MessageCircle, text: 'Trocas de experiências' }
  ];

  const premiumFeatures = [
    { icon: Crown, text: 'Tudo da comunidade gratuita' },
    { icon: BookOpen, text: 'E-books exclusivos e avançados' },
    { icon: Video, text: 'Lives e podcasts ao vivo' },
    { icon: Star, text: 'Entrevistas exclusivas com especialistas' },
    { icon: MessageCircle, text: 'Sessões tira-dúvidas ao vivo' },
    { icon: Gift, text: 'Descontos em cursos e masterminds' }
  ];

  return (
    <section id="community" className="py-20 gradient-bg">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Faça Parte da Nossa Comunidade
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conecte-se com outras mães que passam pelos mesmos desafios e 
            compartilham o mesmo objetivo: educar com amor e firmeza.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Comunidade Gratuita */}
          <Card className="relative overflow-hidden border-2 border-purple-200 bg-white/80 backdrop-blur-sm">
            <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
              GRATUITO
            </div>
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="text-center space-y-3">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-500 rounded-2xl flex items-center justify-center mx-auto">
                    <Gift className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-playfair text-3xl font-bold text-gray-900">
                    Comunidade Aberta
                  </h3>
                  <p className="text-gray-600">
                    Comece sua jornada de transformação gratuitamente
                  </p>
                </div>

                <div className="space-y-4">
                  {freeFeatures.map((feature, index) => {
                    const IconComponent = feature.icon;
                    return (
                      <div key={index} className="flex items-center space-x-3">
                        <IconComponent className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature.text}</span>
                      </div>
                    );
                  })}
                </div>

                <Button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white h-12">
                  Entrar Gratuitamente
                </Button>

                <p className="text-sm text-gray-500 text-center">
                  Cadastro simples • Acesso imediato • Sem cobrança
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Comunidade Premium */}
          <Card className="relative overflow-hidden border-2 border-purple-500 bg-gradient-to-br from-purple-50 to-pink-50">
            <div className="absolute top-4 right-4 bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
              PREMIUM
            </div>
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="text-center space-y-3">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto">
                    <Crown className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-playfair text-3xl font-bold text-gray-900">
                    Comunidade Premium
                  </h3>
                  <p className="text-gray-600">
                    Acesso total aos nossos métodos avançados
                  </p>
                </div>

                <div className="space-y-4">
                  {premiumFeatures.map((feature, index) => {
                    const IconComponent = feature.icon;
                    return (
                      <div key={index} className="flex items-center space-x-3">
                        <IconComponent className="h-5 w-5 text-purple-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature.text}</span>
                      </div>
                    );
                  })}
                </div>

                <div className="text-center space-y-3">
                  <div className="space-y-1">
                    <span className="text-3xl font-bold text-gray-900">R$ 47</span>
                    <span className="text-gray-600">/mês</span>
                  </div>
                  <p className="text-sm text-gray-500">
                    Primeiro mês por apenas R$ 1
                  </p>
                </div>

                <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white h-12">
                  Assinar Premium
                </Button>

                <p className="text-sm text-gray-500 text-center">
                  Cancele quando quiser • Garantia de 7 dias
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-700">
            Mais de <span className="font-bold text-purple-600">1.200 mães</span> já fazem parte da nossa comunidade!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Community;
