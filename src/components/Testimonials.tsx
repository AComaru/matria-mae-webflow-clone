
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Mariana Santos',
      role: 'Mãe da Sofia (5 anos)',
      image: 'https://images.unsplash.com/photo-1494790108755-2616c9a04a4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      content: 'Minha filha mudou completamente após aplicar o método da Ana. Antes eram birras diárias, agora ela me escuta e entende os limites. O melhor é que nossa relação ficou ainda mais forte!',
      rating: 5,
      highlight: 'Birras diminuíram 90%'
    },
    {
      name: 'Juliana Oliveira',
      role: 'Mãe do Lucas (6 anos)',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      content: 'Eu gritava muito com meu filho e me sentia péssima. Com as técnicas do MatriaMãe, aprendi a me comunicar de forma firme mas amorosa. Hoje somos muito mais próximos.',
      rating: 5,
      highlight: 'Parou de gritar'
    },
    {
      name: 'Patricia Lima',
      role: 'Mãe da Ana (4 anos) e João (7 anos)',
      image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      content: 'Com dois filhos pequenos, eu estava perdida. A comunidade me acolheu e as estratégias funcionaram para ambos, mesmo com idades diferentes. Nossa casa ficou mais harmoniosa.',
      rating: 5,
      highlight: 'Casa mais harmoniosa'
    },
    {
      name: 'Camila Rodrigues',
      role: 'Mãe do Pedro (5 anos)',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      content: 'Meu filho tinha dificuldades na escola por não obedecer. Após 2 meses aplicando o método, as professoras notaram uma mudança incrível no comportamento dele.',
      rating: 5,
      highlight: 'Melhora na escola'
    },
    {
      name: 'Fernanda Costa',
      role: 'Mãe da Beatriz (6 anos)',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      content: 'Era muito permissiva e depois explodia. Aprendi a estabelecer limites claros desde o início. Minha filha agora sabe exatamente o que espero dela e responde super bem.',
      rating: 5,
      highlight: 'Limites claros'
    },
    {
      name: 'Roberta Mendes',
      role: 'Mãe do Gabriel (7 anos)',
      image: 'https://images.unsplash.com/photo-1590086782792-42dd2350140d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      content: 'O mastermind foi transformador! Poder discutir casos reais com outras mães e ter o acompanhamento da Ana me deu ferramentas que uso até hoje. Investimento que vale cada centavo.',
      rating: 5,
      highlight: 'Transformação completa'
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Histórias de Transformação
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Veja como outras mães transformaram sua relação com os filhos 
            e criaram um ambiente familiar mais harmonioso e amoroso.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-purple-50/50">
              <CardContent className="p-8">
                <div className="space-y-6">
                  {/* Quote icon */}
                  <Quote className="h-8 w-8 text-purple-400 opacity-60" />
                  
                  {/* Highlight */}
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium inline-block">
                    {testimonial.highlight}
                  </div>
                  
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
                  <div className="flex items-center space-x-4 pt-4 border-t border-purple-100">
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

        <div className="text-center mt-12">
          <p className="text-lg text-gray-700 mb-6">
            Junte-se a mais de <span className="font-bold text-purple-600">1.200 mães</span> que já transformaram suas famílias!
          </p>
          <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3">
            Começar Minha Transformação
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
