
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, MessageCircle } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefone',
      info: '(11) 99999-9999',
      action: 'tel:+5511999999999'
    },
    {
      icon: Mail,
      title: 'E-mail',
      info: 'bea@matriamae.com',
      action: 'mailto:bea@matriamae.com'
    },
    {
      icon: MapPin,
      title: 'Localização',
      info: 'São Paulo, SP',
      action: '#'
    },
    {
      icon: Clock,
      title: 'Horário',
      info: 'Seg-Sex: 8h às 18h',
      action: '#'
    }
  ];

  const socialLinks = [
    {
      icon: Instagram,
      name: 'Instagram',
      handle: '@matriamae_bea',
      color: 'from-pink-500 to-purple-500'
    },
    {
      icon: Facebook,
      name: 'Facebook',
      handle: 'MatriaMãe Bea',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: MessageCircle,
      name: 'WhatsApp',
      handle: '(11) 99999-9999',
      color: 'from-green-500 to-green-600'
    }
  ];

  return (
    <section id="contact" className="py-20 gradient-bg">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Vamos Conversar?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estou aqui para esclarecer suas dúvidas e apoiar você nesta jornada especial. 
            Entre em contato e vamos começar esta caminhada juntas.
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
                        <div className="w-12 h-12 bg-gradient-to-br from-rose-400 to-pink-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
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
                Siga nas Redes Sociais
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
                  <h3 className="font-playfair text-3xl font-semibold text-gray-900">
                    Pronta para Começar?
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Agende uma conversa inicial gratuita para conhecermos melhor suas 
                    necessidades e desejos para sua jornada materna. Juntas, vamos 
                    criar um plano de cuidado personalizado para você.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 text-gray-600">
                      <div className="w-2 h-2 bg-rose-400 rounded-full"></div>
                      <span>Consulta inicial gratuita de 30 minutos</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-600">
                      <div className="w-2 h-2 bg-rose-400 rounded-full"></div>
                      <span>Atendimento personalizado e humanizado</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-600">
                      <div className="w-2 h-2 bg-rose-400 rounded-full"></div>
                      <span>Apoio contínuo durante toda jornada</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <Button 
                      size="lg" 
                      className="w-full bg-gradient-to-r from-rose-400 to-pink-500 hover:from-rose-500 hover:to-pink-600 text-white h-14"
                    >
                      Agendar Consulta Gratuita
                    </Button>
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="w-full border-rose-300 text-rose-600 hover:bg-rose-50 h-14"
                    >
                      Chamar no WhatsApp
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Emergency Contact */}
            <Card className="border-2 border-rose-200 bg-rose-50/50">
              <CardContent className="p-6">
                <div className="text-center space-y-3">
                  <div className="w-12 h-12 bg-rose-500 rounded-full flex items-center justify-center mx-auto">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900">
                    Suporte de Emergência
                  </h4>
                  <p className="text-sm text-gray-600">
                    Para situações urgentes durante o trabalho de parto
                  </p>
                  <p className="font-semibold text-rose-600">
                    (11) 99999-9999
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
