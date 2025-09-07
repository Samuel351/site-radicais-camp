import React from 'react';
import { Calendar, MapPin, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/banner.jpg)',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Viva Momentos
          <span className="block text-green-400">Inesquecíveis</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
          O lugar perfeito para seus eventos, retiros e celebrações em contato com a natureza
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          {/* <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105">
            Reservar Agora
          </button> */}
          <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full text-lg font-semibold transition-all">
            <a href="#contato">Solicitar Orçamento</a>
          </button>
        </div>

        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="flex flex-col items-center">
            <Calendar className="w-12 h-12 text-green-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Eventos Personalizados</h3>
            <p className="text-gray-300">Planejamos cada detalhe do seu evento especial</p>
          </div>
          <div className="flex flex-col items-center">
            <MapPin className="w-12 h-12 text-green-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Localização Privilegiada</h3>
            <p className="text-gray-300">Em meio à natureza, longe da agitação urbana</p>
          </div>
          <div className="flex flex-col items-center">
            <Users className="w-12 h-12 text-green-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Equipe Especializada</h3>
            <p className="text-gray-300">Profissionais experientes para cuidar de tudo</p>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;