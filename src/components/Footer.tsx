
import React from 'react';
import { Heart, Instagram, Facebook, MessageCircle, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Serviços',
      links: [
        'Consultoria Familiar',
        'Educação Comportamental',
        'Workshops Educativos',
        'Consultoria Online',
        'Grupos de Apoio'
      ]
    },
    {
      title: 'Recursos',
      links: [
        'Blog',
        'Dicas de Educação',
        'E-books Gratuitos',
        'Vídeos Educativos',
        'FAQ'
      ]
    },
    {
      title: 'Empresa',
      links: [
        'Sobre a Bea',
        'Depoimentos',
        'Certificações',
        'Parcerias',
        'Contato'
      ]
    }
  ];

  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com/beabrincar', label: 'Instagram' },
    { icon: Facebook, href: 'https://facebook.com/beabrincar', label: 'Facebook' },
    { icon: MessageCircle, href: 'https://wa.me/5541992588785', label: 'WhatsApp' },
    { icon: Mail, href: 'mailto:contato@beabrincar.com.br', label: 'E-mail' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="p-2 bg-gradient-to-br from-rose-400 to-pink-500 rounded-lg">
                <Heart className="h-6 w-6 text-white" fill="currentColor" />
              </div>
              <span className="font-playfair text-2xl font-bold text-white">
                MatriaMãe
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Apoio às mães na jornada de educar seus filhos para um convívio familiar harmonioso.
            </p>
            
            {/* Address Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-rose-400 flex-shrink-0 mt-1" />
                <div className="text-gray-300">
                  <div className="font-medium">Endereço:</div>
                  <div>Rua Inácio Lustosa, 1134</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-rose-400 flex-shrink-0" />
                <div className="text-gray-300">
                  <span className="font-medium">Telefone: </span>
                  (41) 3082-3929
                </div>
              </div>
            </div>
            
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gradient-to-br hover:from-rose-400 hover:to-pink-500 transition-all duration-300"
                  >
                    <IconComponent className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="font-playfair text-xl font-semibold mb-6">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-rose-400 transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} MatriaMãe. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-rose-400 transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-400 hover:text-rose-400 transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="text-gray-400 hover:text-rose-400 transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
