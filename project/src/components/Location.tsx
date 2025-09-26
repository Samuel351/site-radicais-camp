import React from 'react';
import { MapPin, Navigation, Clock, Phone, Mail } from 'lucide-react';
import { EMAIL_CONTACT, PHONE_CONTACT } from '../constants/const-info';

const Location = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Nossa Localização
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Encontre-nos em meio à natureza, com fácil acesso e localização privilegiada
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Informações de Localização */}
          <div className="space-y-8">
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Como Chegar
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-green-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Endereço</h4>
                    <p className="text-gray-600">
                      Estr. Bairro dos Almeidas<br />
                      Torre de Pedra - SP<br />
                      CEP: 18265-000
                    </p>
                  </div>
                </div>

                {/* <div className="flex items-start">
                  <Navigation className="w-6 h-6 text-green-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Distâncias</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Centro de São Paulo: aproximadamente 160 km</li>
                      <li>• Aeroporto de Guarulhos: aproximadamente 180 km</li>
                      <li>• Sorocaba: aproximadamente 90 km</li>
                    </ul>
                  </div>
                </div> */}

                {/* <div className="flex items-start">
                  <Clock className="w-6 h-6 text-green-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Tempo de Viagem</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• De carro: cerca de 2h</li>
                      <li>• Transporte público: 3h+</li>
                      <li>• Transfer privado disponível</li>
                    </ul>
                  </div>
                </div> */}

                <div className="flex flex-col gap-5 items-start">
                  <div className='flex flex-row'>
                    <Phone className="w-6 h-6 text-green-600 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Precisa de Ajuda?</h4>
                      <p className="text-green-600 font-semibold">
                        {PHONE_CONTACT}
                      </p>
                    </div>
                  </div>

                  <div className='flex flex-row'>
                    <Mail className="w-6 h-6 text-green-600 mr-4 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">E-mail</h4>
                      <p className="text-gray-600">{EMAIL_CONTACT}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mapa */}
          <div className="relative">
            <div className="bg-gray-200 rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4547.887008231871!2d-48.235734713112215!3d-23.278217197078302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c68f2a63b327c5%3A0x89cf4101f5d60ce3!2sRadical%20Camp!5e1!3m2!1sen!2sbr!4v1757286363952!5m2!1sen!2sbr"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-96 lg:h-full min-h-[400px]"
                title="Localização do Radical Camp"
              ></iframe>
            </div>
            
            {/* Overlay com botão para abrir no Google Maps */}
            <div className="absolute bottom-4 left-4 right-4">
              <a
                href="https://maps.google.com/?q=Estr.+Bairro+dos+Almeidas,+Torre+de+Pedra+-+SP,+18265-000,+radical+camp"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-white hover:bg-gray-50 text-gray-800 px-4 py-3 rounded-lg shadow-lg text-center font-semibold transition-colors"
              >
                <Navigation className="w-5 h-5 inline mr-2" />
                Abrir no Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
