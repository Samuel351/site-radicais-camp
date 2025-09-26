import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Plus } from 'lucide-react';
import { IMAGES } from '../constants/image-list';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const visibleCount = 5; // Sempre mostra apenas 5 imagens na grid

  const images = IMAGES;
  const hasMoreImages = images.length > visibleCount;

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
    }
  };

  const openNextImage = () => {
    // Abre o modal na próxima imagem (índice 5, que seria a 6ª imagem)
    setSelectedImage(visibleCount);
  };

  return (
    <section id="galeria" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Galeria do Local
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça nossos espaços e se apaixone pela beleza natural do Radical Camp
          </p>
        </div>

        {/* Grid de Imagens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {/* Primeiras 5 imagens */}
          {images.slice(0, visibleCount).map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => openModal(index)}
            >
              <div
                className="h-64 sm:h-72 lg:h-80 bg-cover bg-center transform group-hover:scale-105 transition-transform duration-300"
                style={{ backgroundImage: `url(${image.src})` }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-lg font-semibold">{image.title}</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Card "Ver Mais" - aparece só quando há mais imagens */}
          {hasMoreImages && (
            <div
              className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-green-500 to-green-700"
              onClick={openNextImage}
            >
              <div className="h-64 sm:h-72 lg:h-80 flex flex-col items-center justify-center bg-black text-white transform group-hover:scale-105 transition-transform duration-300">
                <Plus className="w-8 h-8 sm:w-12 sm:h-12 mb-2 sm:mb-4 opacity-80 group-hover:opacity-100" />
                <h3 className="text-lg sm:text-2xl font-bold mb-1 sm:mb-2">Ver Mais</h3>
                <p className="text-sm sm:text-lg opacity-90">
                  +{images.length - visibleCount} fotos
                </p>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
            </div>
          )}
        </div>

        {/* Modal de Imagem */}
        {selectedImage !== null && (
          <div className="max-h-screen fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-5xl max-h-5xl object-scale-down">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
              >
                <X className="w-8 h-8" />
              </button>
              
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
              >
                <ChevronRight className="w-8 h-8" />
              </button>

              <img
                src={images[selectedImage].src}
                alt={images[selectedImage].alt}
                className="max-w-full max-h-full object-contain rounded-lg"
                loading="lazy"
              />
              
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-center">
                {/* <h3 className="text-xl font-semibold mb-2">{images[selectedImage].title}</h3> */}
                <p className="text-sm opacity-75">
                  {selectedImage + 1} de {images.length}
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="text-center">
          <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105">
            Entre em contato
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;