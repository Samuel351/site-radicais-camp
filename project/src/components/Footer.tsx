import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  var date = new Date();
  return (
    <footer className="bg-gray-800 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-green-400 mb-4">Radical Camp</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Criamos experiências únicas em contato com a natureza. Há mais de 8 anos 
              transformando sonhos em realidade através de eventos memoráveis.
            </p>
            {/* <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Youtube className="w-6 h-6" />
              </a>
            </div> */}
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-green-400 transition-colors">Início</a></li>
              <li><a href="#eventos" className="text-gray-300 hover:text-green-400 transition-colors">Eventos</a></li>
              <li><a href="#galeria" className="text-gray-300 hover:text-green-400 transition-colors">Galeria</a></li>
              <li><a href="#sobre" className="text-gray-300 hover:text-green-400 transition-colors">Sobre Nós</a></li>
              <li><a href="#contato" className="text-gray-300 hover:text-green-400 transition-colors">Contato</a></li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-3 text-green-400" />
                <span className="text-gray-300 text-sm">(11) 99999-9999</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-3 text-green-400" />
                <span className="text-gray-300 text-sm">contato@radicalcamp.com.br</span>
              </div>
              <div className="flex items-start">
                <MapPin className="w-4 h-4 mr-3 text-green-400 mt-1" />
                <span className="text-gray-300 text-sm">
                  Estrada da Natureza, 1234<br />
                  Zona Rural - São Paulo, SP
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {date.getFullYear()} Radical Camp. Todos os direitos reservados.
            </p>
            {/* <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                Termos de Uso
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;