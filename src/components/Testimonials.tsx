
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Marina Silva',
      role: 'Mãe de primeira viagem',
      image: 'https://images.unsplash.com/photo-1494790108755-2616c9a04a4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      content: 'A Bea foi fundamental na minha gestação. Seu apoio me deu a confiança que eu precisava para ter um parto natural. Ela esteve presente em todos os momentos, me orientando com tanto carinho.',
      rating: 5
    },
    {
      name: 'Ana Carolina',
      role: 'Mãe de gêmeos',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      content: 'Ter a Bea ao meu lado durante a gestação dos gêmeos foi uma bênção. Ela me ajudou a me preparar para os desafios únicos e me deu todo o suporte emocional que eu precisava.',
      rating: 5
    },
    {
      name: 'Juliana Mendes',
      role: 'Mãe de 2 filhos',
      image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      content: 'No meu segundo parto, quis ter uma experiência diferente e procurei a Bea. Ela transformou completamente minha visão sobre o parto. Gratidão eterna por todo cuidado e dedicação.',
      rating: 5
    },
    {
      name: 'Fernanda Costa',
      role: 'Mãe e empresária',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      content: 'Como empresária, estava muito ansiosa sobre como conciliar maternidade e trabalho. A Bea me ajudou não só no parto, mas também no pós-parto com orientações preciosas.',
      rating: 5
    },
    {
      name: 'Carla Rodrigues',
      role: 'Mãe solo',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      content: 'Como mãe solo, precisava de muito apoio. A Bea foi minha rede de apoio durante toda a gestação. Sua presença me deu força e segurança para enfrentar essa jornada linda.',
      rating: 5
    },
    {
      name: 'Patrícia Lima',
      role: 'Mãe de 3 filhos',
      image: 'https://images.unsplash.com/photo-1590086782792-42dd2350140d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      content: 'Mesmo sendo minha terceira gestação, a Bea trouxe uma perspectiva nova e muito especial. Cada parto é único e ela soube respeitar minhas escolhas e me apoiar em todas elas.',
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Histórias de Amor e Cuidado
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cada família tem sua história única. Aqui estão algumas das experiências 
            especiais que tive o privilégio de acompanhar.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-rose-50/50">
              <CardContent className="p-8">
                <div className="space-y-6">
                  {/* Quote icon */}
                  <Quote className="h-8 w-8 text-rose-400 opacity-60" />
                  
                  {/* Content */}
                  <p className="text-gray-600 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  
                  {/* Rating */}
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400" fill="currentColor" />
                    ))}
                  </div>
                  
                  {/* Author */}
                  <div className="flex items-center space-x-4 pt-4 border-t border-rose-100">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
