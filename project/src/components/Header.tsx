import React, { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <img src='logo.svg' />
            <h1 className="text-2xl font-bold text-green-700"><a href="#home">Radical Camp</a></h1>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-green-600 transition-colors">Início</a>
            <a href="#eventos" className="text-gray-700 hover:text-green-600 transition-colors">Eventos</a>
            <a href="#galeria" className="text-gray-700 hover:text-green-600 transition-colors">Galeria</a>
            <a href="#sobre" className="text-gray-700 hover:text-green-600 transition-colors">Sobre</a>
            <a href="#contato" className="text-gray-700 hover:text-green-600 transition-colors">Contato</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            {/* <div className="flex items-center text-sm text-gray-600">
              <Phone className="w-4 h-4 mr-1" />
              <span>(11) 99999-9999</span>
            </div> */}
            <button  className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors">
              <a href="#contato">Solicitar Orçamento</a>
            </button>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 hover:text-green-600">Início</a>
              <a href="#eventos" className="text-gray-700 hover:text-green-600">Eventos</a>
              <a href="#galeria" className="text-gray-700 hover:text-green-600">Galeria</a>
              <a href="#sobre" className="text-gray-700 hover:text-green-600">Sobre</a>
              <a href="#contato" className="text-gray-700 hover:text-green-600">Contato</a>
              <button className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors w-full">
                Solicitar Orçamento
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;