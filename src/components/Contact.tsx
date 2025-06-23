
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, MessageCircle, Users } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'E-mail',
      info: 'contato@matriamae.com.br',
      action: 'mailto:contato@matriamae.com.br'
    },
    {
      icon: Phone,
      title: 'WhatsApp',
      info: '(11) 99999-9999',
      action: 'tel:+5511999999999'
    },
    {
      icon: MapPin,
      title: 'Atendimento',
      info: 'Online e São Paulo, SP',
      action: '#'
    },
    {
      icon: Clock,
      title: 'Horário',
      info: 'Seg-Sex: 9h às 18h',
      action: '#'
    }
  ];

  const socialLinks = [
    {
      icon: Instagram,
      name: 'Instagram',
      handle: '@matriamae.oficial',
      color: 'from-pink-500 to-purple-500',
      url: 'https://instagram.com/matriamae.oficial'
    },
    {
      icon: Facebook,
      name: 'Facebook',
      handle: 'MatriaMãe',
      color: 'from-blue-500 to-blue-600',
      url: 'https://facebook.com/matriamae'
    },
    {
      icon: MessageCircle,
      name: 'WhatsApp',
      handle: '(11) 99999-9999',
      color: 'from-green-500 to-green-600',
      url: 'https://wa.me/5511999999999'
    }
  ];

  return (
    <section id="contact" className="py-20 gradient-bg">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Vamos Transformar Sua Família?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estou aqui para ajudar você a criar uma relação mais harmoniosa com seus filhos. 
            Entre em contato e dê o primeiro passo para a transformação.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-white/60 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900 mb-1">
                            {item.title}
                          </div>
                          <div className="text-gray-600">
                            {item.info}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h3 className="font-playfair text-2xl font-semibold text-gray-900">
                Siga-me nas Redes Sociais
              </h3>
              <div className="grid gap-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-white/60 backdrop-blur-sm cursor-pointer">
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-4">
                          <div className={`w-10 h-10 bg-gradient-to-br ${social.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                            <IconComponent className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <div className="font-medium text-gray-900">
                              {social.name}
                            </div>
                            <div className="text-sm text-gray-600">
                              {social.handle}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="space-y-8">
            <Card className="border-0 bg-white/80 backdrop-blur-sm shadow-xl">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Users className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-playfair text-3xl font-semibold text-gray-900 mb-3">
                      Entre na Comunidade
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Comece sua jornada de transformação hoje mesmo. 
                      Junte-se a mais de 1.200 mães que já mudaram suas vidas.
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 text-gray-600">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span>Acesso imediato à comunidade gratuita</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-600">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span>Conteúdos exclusivos e práticos</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-600">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span>Suporte de uma comunidade acolhedora</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-600">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span>Sem compromisso • Cancele quando quiser</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <Button 
                      size="lg" 
                      className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white h-14"
                    >
                      Entrar na Comunidade Gratuita
                    </Button>
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="w-full border-purple-300 text-purple-600 hover:bg-purple-50 h-14"
                    >
                      Falar no WhatsApp
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Guarantee */}
            <Card className="border-2 border-green-200 bg-green-50/50">
              <CardContent className="p-6">
                <div className="text-center space-y-3">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900">
                    Garantia de 7 dias
                  </h4>
                  <p className="text-sm text-gray-600">
                    Se não ficar satisfeita com a comunidade premium, 
                    devolvemos 100% do seu investimento
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
