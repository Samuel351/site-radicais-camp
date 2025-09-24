import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    eventType: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você implementaria o envio do formulário
    console.log('Formulário enviado:', formData);
    alert('Orçamento solicitado com sucesso! Entraremos em contato em breve.');
  };

  return (
    <section id="contato" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Solicite seu Orçamento
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Entre em contato conosco e vamos planejar juntos o seu evento perfeito
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Informações de Contato */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-8">
              Informações de Contato
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <Phone className="w-6 h-6 text-green-600 mr-4 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Telefone</h4>
                  <p className="text-gray-600">(11) 99999-9999</p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="w-6 h-6 text-green-600 mr-4 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">E-mail</h4>
                  <p className="text-gray-600">contato@radicalcamp.com.br</p>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-green-600 mr-4 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Endereço</h4>
                  <p className="text-gray-600">
                    Estr. Bairro dos Almeidas<br />
                    Torre de Pedra - SP<br />
                    CEP: 18265-000
                  </p>
                </div>
              </div>

              {/* <div className="flex items-start">
                <Clock className="w-6 h-6 text-green-600 mr-4 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Horário de Atendimento</h4>
                  <p className="text-gray-600">
                    Segunda a Sexta: 8h às 18h<br />
                    Sábados: 8h às 16h<br />
                    Domingos: Sob agendamento
                  </p>
                </div>
              </div> */}
            </div>

            {/* <div className="mt-8 p-6 bg-green-50 rounded-xl">
              <h4 className="font-semibold text-green-800 mb-2">
                Atendimento Personalizado
              </h4>
              <p className="text-green-700 text-sm">
                Nossa equipe está pronta para atender você e criar o evento dos seus sonhos. 
                Entre em contato e receba uma proposta personalizada!
              </p>
            </div> */}
          </div>

          {/* Formulário */}
          <div>
            <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Telefone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="(11) 99999-9999"
                  />
                </div>

                <div className="mb-6">
                    <label className="block text-gray-700 font-semibold mb-2">
                      Tipo de Evento
                    </label>
                    <select
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                      <option value="">Selecione o tipo de evento</option>
                      <option value="casamento">Casamento</option>
                      <option value="corporativo">Evento Corporativo</option>
                      <option value="acampamento">Acampamento Escolar</option>
                      <option value="retiro">Retiro Espiritual</option>
                      <option value="aniversario">Aniversário</option>
                      <option value="outro">Outro</option>
                    </select>
                    </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Data de inicio do Evento
                  </label>
                  <input
                    type="date"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>

                                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Data de fim do Evento
                  </label>
                  <input
                    type="date"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2">
                  Mensagem
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Conte-nos mais sobre seu evento: número de convidados, preferências, necessidades especiais..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center"
              >
                <Send className="w-5 h-5 mr-2" />
                Solicitar Orçamento
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;