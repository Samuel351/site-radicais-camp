import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, Loader2, CheckCircle, XCircle, X } from 'lucide-react';
import { EMAIL_CONTACT, PHONE_CONTACT } from '../constants/const-info';

interface Toast {
  id: number;
  type: 'success' | 'error';
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    initDate: '',
    endDate: '',
    eventType: '',
    message: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = (type: 'success' | 'error', message: string) => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, type, message }]);
    
    // Remove o toast após 5 segundos
    setTimeout(() => {
      setToasts(prev => prev.filter(toast => toast.id !== id));
    }, 5000);
  };

  const removeToast = (id: number) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Impede múltiplos envios
    if (isLoading) return;
    
    setIsLoading(true);

    try {
      const response = await fetch('https://api-emailsender-ffgwb7ehbbdchxdc.brazilsouth-01.azurewebsites.net/api/orcamento', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      // Limpa o formulário após sucesso
      setFormData({
        name: '',
        email: '',
        phone: '',
        initDate: '',
        endDate: '',
        eventType: '',
        message: ''
      });

      addToast('success', 'Orçamento enviado com sucesso! Entraremos em contato em breve.');

    } catch (error) {
      console.error('Erro ao enviar orçamento:', error);
      addToast('error', 'Erro ao enviar orçamento. Tente novamente mais tarde.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Toaster Container */}
      <div className="fixed top-4 right-4 z-50 space-y-2">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`flex items-center gap-3 p-4 rounded-lg shadow-lg min-w-80 max-w-md animate-in slide-in-from-right duration-300 ${
              toast.type === 'success' 
                ? 'bg-green-50 border border-green-200 text-green-800' 
                : 'bg-red-50 border border-red-200 text-red-800'
            }`}
          >
            {toast.type === 'success' ? (
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
            ) : (
              <XCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
            )}
            
            <p className="flex-1 text-sm font-medium">
              {toast.message}
            </p>
            
            <button
              onClick={() => removeToast(toast.id)}
              className={`p-1 rounded-full hover:bg-opacity-20 transition-colors ${
                toast.type === 'success' ? 'hover:bg-green-600' : 'hover:bg-red-600'
              }`}
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>

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
                    <p className="text-gray-600">{PHONE_CONTACT}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-green-600 mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">E-mail</h4>
                    <p className="text-gray-600">{EMAIL_CONTACT}</p>
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
              </div>
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
                      disabled={isLoading}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent disabled:bg-gray-200 disabled:cursor-not-allowed"
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
                      disabled={isLoading}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent disabled:bg-gray-200 disabled:cursor-not-allowed"
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
                      disabled={isLoading}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent disabled:bg-gray-200 disabled:cursor-not-allowed"
                      placeholder="(11) 99999-9999"
                    />
                  </div>

                  <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Tipo de Evento
                      </label>
                      <select
                        name="eventType"
                        value={formData.eventType}
                        onChange={handleChange}
                        disabled={isLoading}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent disabled:bg-gray-200 disabled:cursor-not-allowed"
                      >
                        <option value="">Selecione o tipo de evento</option>
                        <option value="casamento">Acampamentos Escolares</option>
                        <option value="corporativo">Eventos Familiares</option>
                        <option value="acampamento">Retiros Religiosos</option>
                        <option value="retiro">Workshop</option>
                        <option value="outro">Outro</option>
                      </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Data de inicio do Evento
                    </label>
                    <input
                      type="date"
                      name="initDate"
                      value={formData.initDate}
                      onChange={handleChange}
                      disabled={isLoading}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent disabled:bg-gray-200 disabled:cursor-not-allowed"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Data de fim do Evento
                    </label>
                    <input
                      type="date"
                      name="endDate"
                      value={formData.endDate}
                      onChange={handleChange}
                      disabled={isLoading}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent disabled:bg-gray-200 disabled:cursor-not-allowed"
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
                    disabled={isLoading}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent disabled:bg-gray-200 disabled:cursor-not-allowed"
                    placeholder="Conte-nos mais sobre seu evento: número de convidados, preferências, necessidades especiais..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center disabled:bg-gray-400 disabled:cursor-not-allowed disabled:hover:bg-gray-400"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Solicitar Orçamento
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;