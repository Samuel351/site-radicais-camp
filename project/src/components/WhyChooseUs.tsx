import React from 'react';
import { Shield, Leaf, Settings, HeartHandshake, Clock, MapPin } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <Leaf className="w-12 h-12" />,
      title: "Contato com a Natureza",
      description: "Ambiente natural preservado que proporciona paz e tranquilidade para seus eventos"
    },
    {
      icon: <Settings className="w-12 h-12" />,
      title: "Estrutura Completa",
      description: "Instalações modernas e equipamentos de qualidade para garantir o sucesso do seu evento"
    },
    {
      icon: <HeartHandshake className="w-12 h-12" />,
      title: "Pacotes Personalizados",
      description: "Criamos soluções sob medida para atender às necessidades específicas do seu evento"
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Segurança Garantida",
      description: "Protocolos de segurança rigorosos e equipe treinada para emergências"
    },
    {
      icon: <Clock className="w-12 h-12" />,
      title: "Atendimento 24h",
      description: "Suporte completo durante todo o evento, do planejamento à execução"
    },
    {
      icon: <MapPin className="w-12 h-12" />,
      title: "Localização Estratégica",
      description: "Fácil acesso e localização privilegiada, longe do barulho da cidade"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Por que nos escolher?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos muito mais que um espaço - criamos experiências memoráveis
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
              <div className="text-green-600 mb-6">
                {reason.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {reason.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105">
            Conheça Nossa Estrutura
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;