
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-16 min-h-screen gradient-bg">
      <div className="container mx-auto px-4 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <h1 className="font-playfair text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Apoio completo para
                <span className="text-gradient block">
                  sua jornada materna
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Descubra o cuidado personalizado que você merece. Da gestação ao pós-parto, 
                estou aqui para apoiar você em cada momento especial da maternidade.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-rose-400 to-pink-500 hover:from-rose-500 hover:to-pink-600 text-white h-14 px-8"
              >
                Começar Agora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-rose-300 text-rose-600 hover:bg-rose-50 h-14 px-8"
              >
                <Play className="mr-2 h-5 w-5" />
                Assistir Vídeo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-rose-200">
              <div className="text-center">
                <div className="font-playfair text-3xl font-bold text-rose-600">500+</div>
                <div className="text-sm text-gray-600">Mães Atendidas</div>
              </div>
              <div className="text-center">
                <div className="font-playfair text-3xl font-bold text-rose-600">5+</div>
                <div className="text-sm text-gray-600">Anos de Experiência</div>
              </div>
              <div className="text-center">
                <div className="font-playfair text-3xl font-bold text-rose-600">98%</div>
                <div className="text-sm text-gray-600">Satisfação</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="lg:order-2 animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-rose-400/20 to-pink-500/20 rounded-3xl transform rotate-3"></div>
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Mãe e bebê em momento carinhoso"
                className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">B</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Bea</div>
                    <div className="text-sm text-gray-600">Doula & Consultora</div>
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
