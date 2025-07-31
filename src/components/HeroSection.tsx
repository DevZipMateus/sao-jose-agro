
import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Heart, Shield, Sparkles, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const handleWhatsAppContact = () => {
    const message = 'Olá! Gostaria de saber mais sobre os produtos para pets da São José Agropecuária.';
    const whatsappUrl = `https://wa.me/5596991775263?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="hero" ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background com imagem responsiva */}
      <div className="absolute inset-0">
        <img 
          src="/lovable-uploads/1bacb47d-c13f-492d-a3b8-c9daf2228fb0.png" 
          alt="São José Agropecuária"
          className="w-full h-full object-cover object-center sm:object-center md:object-center lg:object-center xl:object-center"
        />
        {/* Overlay gradient mais forte para melhor contraste */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70 sm:bg-gradient-to-r sm:from-black/70 sm:via-black/50 sm:to-black/70"></div>
      </div>
      
      {/* Elementos decorativos responsivos */}
      <div className="absolute top-10 left-4 w-20 h-20 sm:top-20 sm:left-10 sm:w-32 sm:h-32 bg-primary/10 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-10 right-4 w-16 h-16 sm:bottom-20 sm:right-10 sm:w-24 sm:h-24 bg-accent/20 rounded-full blur-lg animate-pulse"></div>
      <div className="absolute top-1/4 right-1/4 w-12 h-12 sm:top-1/3 sm:right-1/4 sm:w-16 sm:h-16 bg-blue-200/30 rounded-full blur-md animate-float" style={{animationDelay: '2s'}}></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge principal com melhor contraste */}
          <div className="inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 bg-primary/20 backdrop-blur-md border border-white/20 text-white rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 animate-on-scroll shadow-lg">
            <Heart className="h-3 w-3 sm:h-4 sm:w-4 mr-2 text-primary" />
            Dedicados ao Bem-Estar dos Seus Pets
          </div>

          {/* Título principal com sombra mais forte */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-4 sm:mb-6 animate-on-scroll leading-tight">
            <span className="text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)] [text-shadow:2px_2px_4px_rgba(0,0,0,0.9)]">São José</span>
            <br />
            <span className="text-primary drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)] [text-shadow:2px_2px_4px_rgba(0,0,0,0.9)]">Agropecuária</span>
          </h1>

          {/* Slogan com melhor contraste */}
          <p className="text-lg sm:text-xl md:text-2xl text-white font-medium mb-6 sm:mb-8 animate-on-scroll drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] [text-shadow:1px_1px_2px_rgba(0,0,0,0.9)] px-4 sm:px-0">
            Saúde e Bem Estar do Seu Pet
          </p>

          {/* Descrição com melhor legibilidade */}
          <p className="text-base sm:text-lg text-white/95 max-w-3xl mx-auto mb-8 sm:mb-10 leading-relaxed animate-on-scroll drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)] [text-shadow:1px_1px_2px_rgba(0,0,0,0.8)] px-4 sm:px-0">
            Oferecemos produtos de alta qualidade e serviços especializados para promover a saúde, 
            o bem-estar e a felicidade dos seus animais de estimação, com atendimento personalizado 
            e orientação especializada.
          </p>

          {/* Botões com melhor contraste e visibilidade */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 animate-on-scroll px-4 sm:px-0">
            <Button 
              size="lg" 
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold bg-primary hover:bg-primary/90 text-white shadow-[0_8px_16px_rgba(0,0,0,0.3)] hover:shadow-[0_12px_24px_rgba(0,0,0,0.4)] transform hover:scale-105 transition-all duration-300"
              onClick={handleWhatsAppContact}
            >
              Entre em Contato
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold border-2 border-white bg-white/10 text-white hover:bg-white hover:text-black backdrop-blur-md shadow-[0_8px_16px_rgba(0,0,0,0.2)] hover:shadow-[0_12px_24px_rgba(0,0,0,0.3)] transform hover:scale-105 transition-all duration-300"
              onClick={() => document.getElementById('categories')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Ver Produtos
            </Button>
          </div>

          {/* Cards com fundo mais sólido para melhor legibilidade */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto animate-on-scroll px-4 sm:px-0">
            <div className="bg-white/95 backdrop-blur-md rounded-xl p-4 sm:p-6 shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] transition-all duration-300 hover:-translate-y-2 border border-white/20">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4 mx-auto shadow-lg">
                <Heart className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" />
              </div>
              <h3 className="font-bold text-base sm:text-lg mb-2 text-gray-800">Amor pelos Animais</h3>
              <p className="text-gray-600 text-xs sm:text-sm font-medium">
                Colocamos o bem-estar dos animais em primeiro lugar em todas as nossas ações
              </p>
            </div>

            <div className="bg-white/95 backdrop-blur-md rounded-xl p-4 sm:p-6 shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] transition-all duration-300 hover:-translate-y-2 border border-white/20">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4 mx-auto shadow-lg">
                <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
              </div>
              <h3 className="font-bold text-base sm:text-lg mb-2 text-gray-800">Produtos de Qualidade</h3>
              <p className="text-gray-600 text-xs sm:text-sm font-medium">
                Oferecemos apenas produtos de alta qualidade e serviços especializados
              </p>
            </div>

            <div className="bg-white/95 backdrop-blur-md rounded-xl p-4 sm:p-6 shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] transition-all duration-300 hover:-translate-y-2 border border-white/20 sm:col-span-2 md:col-span-1">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4 mx-auto shadow-lg">
                <Sparkles className="h-5 w-5 sm:h-6 sm:w-6 text-pink-600" />
              </div>
              <h3 className="font-bold text-base sm:text-lg mb-2 text-gray-800">Atendimento Personalizado</h3>
              <p className="text-gray-600 text-xs sm:text-sm font-medium">
                Fornecemos orientação especializada para cada necessidade específica
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator com melhor visibilidade */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white rounded-full flex justify-center shadow-lg backdrop-blur-sm">
          <div className="w-1 h-2 sm:h-3 bg-white rounded-full mt-1 sm:mt-2 animate-pulse shadow-sm"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
