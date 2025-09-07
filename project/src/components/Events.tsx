import React from 'react';
import { Calendar, Users, Heart, GraduationCap, Building, MapPin, Clock, icons } from 'lucide-react';

const Events = () => {
  const eventTypes = [
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Acampamentos Escolares",
      description: "No Radical Camp, os alunos vivem experiências educativas e divertidas em contato direto com a natureza. Nossa estrutura oferece segurança, atividades de integração e aprendizado, promovendo união, aventura e lembranças que ficam para sempre.",
      image: "/VIT_0171.jpg",
      features: []
    },
    {
      icon: "",
      title: "Eventos Familiares",
      description: "Momentos especiais merecem um lugar único. No Radical Camp, sua família encontra estrutura completa em meio à natureza para aniversários, encontros, confraternizações e celebrações inesquecíveis. Um espaço acolhedor, seguro e cheio de diversão para todas as idades.",
      image: "/workshop.jpg",
      features: []
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Retiros Religiosos",
      description: "Adicionar a descrição: O Radical Camp é o cenário ideal para momentos de fé e reflexão. Em meio à tranquilidade da natureza, oferecemos estrutura completa para encontros espirituais, com espaços que favorecem a paz, a união",
      image: "/dji_fly_20250707_143138_0069_1751909781010_photo.jpg",
      features: []
    },
    {
      icon: "",
      title: "Workshop",
      description: "O Radical Camp oferece o ambiente perfeito para aprendizado e desenvolvimento. Com áreas ao ar livre e infraestrutura completa, seus workshops ganham um toque especial de imersão, criatividade e conexão com a natureza.",
      image: "family.jpg",
      features: []
    },
  ];

  const upcomingEvents = [
    {
      date: "15 Mar",
      title: "Retiro de Yoga e Meditação",
      participants: "25 pessoas",
      image: "/dji_fly_20250707_143054_0067_1751909782551_photo.jpg"
    },
    {
      date: "22 Mar",
      title: "Casamento ao Ar Livre",
      participants: "80 pessoas",
      image: "/dji_fly_20250707_143138_0069_1751909781010_photo.jpg"
    },
    {
      date: "05 Abr",
      title: "Acampamento Escolar",
      participants: "45 estudantes",
      image: "/VIT_0171.jpg"
    }
  ];

  return (
    <section id="eventos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Nossos Eventos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Criamos experiências únicas para cada tipo de celebração e encontro
          </p>
        </div>

        {/* Tipos de Eventos */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Tipos de Eventos que Realizamos
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {eventTypes.map((event, index) => (
              <div key={index} className="flex flex-col bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div 
                  className="h-48 bg-cover bg-center relative"
                  style={{ backgroundImage: `url(${event.image})` }}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                  <div className="absolute top-4 left-4 text-white">
                    {event.icon}
                  </div>
                </div>
                <div className="flex flex-col  justify-strech p-6">
                  <h4 className="text-xl font-semibold text-gray-800 mb-3">{event.title}</h4>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  <ul className="space-y-2">
                    {event.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition-colors">
                    Solicitar Orçamento
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Próximos Eventos */}
        {/* <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Próximos Eventos
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div 
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${event.image})` }}
                ></div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                      <Calendar className="w-4 h-4 mr-1" />
                      {event.date}
                    </span>
                    <span className="text-gray-500 text-sm flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {event.participants}
                    </span>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-800">{event.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div> */}

      </div>
    </section>
  );
};

export default Events;