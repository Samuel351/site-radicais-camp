import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
const testimonials = [
  {
    name: "Sara Damasceno",
    text: "Não tenho do que reclamar. O local está cada vez mais incrível, proporcionando momentos de comunhão entre nós e, principalmente, com Deus.",
    rating: 5,
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  },
  {
    name: "Maria José",
    text: "Foi muito impactante ver Deus trabalhando e transformando a vida dos acampantes. Por isso tenho certeza que estou no lugar certo, servindo com muito amor ao Reino de Deus. E uma honra fazer parte da grande obra que o Senhor está fazendo no Radical Camp. Estou com meu coração transbordando de alegria por ter servido nos três acampamentos.",
    rating: 5,
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  },
  {
    name: "Ana Sophia",
    text: "O espaço é incrível e lindo demais! Vivi as melhores experiências lá.",
    rating: 5,
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  },
  {
    name: "Gabriel",
    text: "Um dos melhores lugares que já fui, experiências extraordinárias são construídas nesse lugar.",
    rating: 5,
    image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  }
];


  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Depoimentos */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-6">
            O que falam sobre nós
          </h2>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-16">
            A satisfação dos nossos clientes é nossa maior conquista
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <Quote className="w-8 h-8 text-green-600 mb-4" />
                
                <p className="text-gray-600 mb-6 leading-relaxed text-justify">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center">
                  {/* <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  /> */}
                  <div>
                    <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;