
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Heart, Users, BookOpen } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-16 min-h-screen gradient-bg">
      <div className="container mx-auto px-4 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <h1 className="font-playfair text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Eduque com 
                <span className="text-gradient block">
                  amor e firmeza
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Transforme a educação dos seus filhos entre 4 e 7 anos. 
                Aprenda a criar limites claros com afeto, resolver conflitos e 
                fortalecer os laços familiares com métodos comprovados.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white h-14 px-8"
              >
                Entrar na Comunidade Gratuita
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-purple-300 text-purple-600 hover:bg-purple-50 h-14 px-8"
              >
                <Play className="mr-2 h-5 w-5" />
                Ver Depoimentos
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-purple-200">
              <div className="text-center">
                <div className="font-playfair text-3xl font-bold text-purple-600">1.200+</div>
                <div className="text-sm text-gray-600">Famílias Transformadas</div>
              </div>
              <div className="text-center">
                <div className="font-playfair text-3xl font-bold text-purple-600">98%</div>
                <div className="text-sm text-gray-600">Satisfação</div>
              </div>
              <div className="text-center">
                <div className="font-playfair text-3xl font-bold text-purple-600">24h</div>
                <div className="text-sm text-gray-600">Suporte na Comunidade</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="lg:order-2 animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-3xl transform rotate-3"></div>
              <img
                src="https://images.unsplash.com/photo-1609220136736-443140cffec6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Mãe e criança em momento de aprendizado"
                className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <Heart className="h-6 w-6 text-white" fill="currentColor" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Educação com Amor</div>
                    <div className="text-sm text-gray-600">Limites Claros + Afeto</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
