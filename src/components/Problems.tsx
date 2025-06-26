import React from 'react';
import { AlertTriangle, Frown, Users, Clock } from 'lucide-react';
const Problems = () => {
  const problems = [{
    icon: AlertTriangle,
    title: 'Birras e Conflitos Constantes',
    description: 'Seu filho faz birra por tudo e você não sabe como lidar sem gritar ou ceder sempre.',
    color: 'from-red-400 to-orange-500'
  }, {
    icon: Frown,
    title: 'Falta de Limites Claros',
    description: 'Você oscila entre ser muito rígida ou muito permissiva, sem encontrar o equilíbrio.',
    color: 'from-orange-400 to-yellow-500'
  }, {
    icon: Users,
    title: 'Relacionamento Família Desgastado',
    description: 'As discussões estão afetando toda a família e você sente que perdeu a conexão.',
    color: 'from-yellow-400 to-red-500'
  }, {
    icon: Clock,
    title: 'Falta de Tempo e Paciência',
    description: 'A correria do dia a dia deixa você esgotada e sem paciência para educar com amor.',
    color: 'from-red-400 to-pink-500'
  }];
  return <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Você se identifica com alguma dessas situações?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Sabemos que educar crianças entre traz desafios únicos. 
Você não está sozinha nessa jornada.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {problems.map((problem, index) => {
          const IconComponent = problem.icon;
          return <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="space-y-4">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${problem.color} flex items-center justify-center`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-playfair text-xl font-semibold text-gray-900">
                    {problem.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </div>;
        })}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-700 font-medium">
            Se você respondeu "sim" para alguma dessas situações, 
            <span className="text-purple-600 font-semibold"> temos a solução para você!</span>
          </p>
        </div>
      </div>
    </section>;
};
export default Problems;