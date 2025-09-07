import React from 'react';
import { Calendar, Users, Star, Award } from 'lucide-react';

const Stats = () => {
  const stats = [
    {
      icon: <Calendar className="w-8 h-8" />,
      number: "200+",
      label: "Eventos Realizados"
    },
    {
      icon: <Users className="w-8 h-8" />,
      number: "5000+",
      label: "Visitantes Satisfeitos"
    },
    {
      icon: <Star className="w-8 h-8" />,
      number: "4.9",
      label: "Avaliação Média"
    },
    {
      icon: <Award className="w-8 h-8" />,
      number: "8",
      label: "Anos de Experiência"
    }
  ];

  return (
    <section className="py-20 bg-green-600">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Nossos Números
          </h2>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            A confiança dos nossos clientes reflete em nossos resultados
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center text-white">
              <div className="flex justify-center mb-4 text-green-200">
                {stat.icon}
              </div>
              <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
              <div className="text-green-100 text-lg">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;