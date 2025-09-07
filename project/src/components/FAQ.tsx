import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Qual a capacidade máxima do local?",
      answer: "Nosso espaço pode acomodar até 200 pessoas confortavelmente, com diferentes configurações disponíveis dependendo do tipo de evento."
    },
    {
      question: "Vocês fornecem catering/alimentação?",
      answer: "Sim, temos parcerias com fornecedores de qualidade e podemos organizar desde coffee breaks até jantares completos, adaptados ao seu orçamento e preferências."
    },
    {
      question: "É possível fazer eventos noturnos?",
      answer: "Absolutamente! Nosso espaço conta com iluminação adequada e geradores de energia para garantir que seu evento noturno seja perfeito."
    },
    {
      question: "Qual o prazo mínimo para reserva?",
      answer: "Recomendamos reservar com pelo menos 30 dias de antecedência, mas podemos atender solicitações de última hora dependendo da disponibilidade."
    },
    {
      question: "Vocês oferecem decoração?",
      answer: "Temos parcerias com decoradores especializados e podemos incluir a decoração no pacote do seu evento, desde decorações simples até montagens elaboradas."
    },
    {
      question: "Há estacionamento disponível?",
      answer: "Sim, oferecemos estacionamento gratuito para até 100 veículos, com segurança 24 horas durante o evento."
    },
    {
      question: "Qual a política de cancelamento?",
      answer: "Nossa política varia conforme o tipo de evento e antecedência. Entre em contato conosco para conhecer os detalhes específicos para sua situação."
    },
    {
      question: "Vocês permitem música ao vivo?",
      answer: "Sim! Temos estrutura para shows e apresentações musicais, respeitando os limites de horário e volume estabelecidos pela legislação local."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tire suas dúvidas sobre nossos serviços e estrutura
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="w-full text-left bg-gray-50 hover:bg-gray-100 p-6 rounded-lg transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-800 pr-4">
                    {faq.question}
                  </h3>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-green-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-green-600 flex-shrink-0" />
                  )}
                </div>
              </button>
              
              {openIndex === index && (
                <div className="bg-white p-6 border-l-4 border-green-600 ml-4">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Não encontrou a resposta que procurava?
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold transition-colors">
            Entre em Contato
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;