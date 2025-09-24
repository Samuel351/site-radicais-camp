import { Users, Award, Heart, Leaf } from 'lucide-react';

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Quem Somos
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              O Radical Camp nasceu do sonho de criar um espaço onde pessoas pudessem se conectar com a natureza e viver experiências extraordinárias. 
              Nossa missão é proporcionar eventos únicos e memoráveis, sempre respeitando o meio ambiente e promovendo o bem-estar de todos os participantes. Cada detalhe é pensado para criar uma experiência completa e inesquecível.

              Venha descobrir por que o Radical Camp é o destino preferido para quem busca algo além do comum.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Venha descobrir por que o Radical Camp é o destino preferido para quem busca algo além do comum.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <Users className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-800 mb-2">Equipe Dedicada</h3>
                <p className="text-sm text-gray-600">Profissionais experientes e apaixonados</p>
              </div>
              <div className="text-center">
                <Award className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-800 mb-2">Excelência</h3>
                <p className="text-sm text-gray-600">Compromisso com a qualidade em tudo</p>
              </div>
              <div className="text-center">
                <Heart className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-800 mb-2">Paixão</h3>
                <p className="text-sm text-gray-600">Amor pelo que fazemos em cada projeto</p>
              </div>
              <div className="text-center">
                <Leaf className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-800 mb-2">Sustentabilidade</h3>
                <p className="text-sm text-gray-600">Respeito e preservação da natureza</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div 
              className="h-96 bg-cover bg-center rounded-xl shadow-lg"
              style={{ backgroundImage: 'url(/HOUSE.jpg)' }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;