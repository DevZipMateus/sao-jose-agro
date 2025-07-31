
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
    <section 
      id="hero" 
      ref={sectionRef} 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url('/lovable-uploads/fa4c1ed2-8c6d-48d7-b6b0-25731880d9b0.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Responsive overlay gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/70 
                      sm:bg-gradient-to-br sm:from-black/40 sm:via-black/30 sm:to-black/60
                      md:bg-gradient-to-r md:from-black/50 md:via-black/30 md:to-black/40
                      lg:bg-gradient-to-br lg:from-black/40 lg:via-black/20 lg:to-black/50"></div>
      
      {/* Enhanced decorative elements with better positioning */}
      <div className="absolute top-8 left-4 w-16 h-16 sm:top-16 sm:left-8 sm:w-24 sm:h-24 md:top-20 md:left-12 md:w-32 md:h-32 bg-primary/10 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-8 right-4 w-12 h-12 sm:bottom-16 sm:right-8 sm:w-20 sm:h-20 md:bottom-20 md:right-12 md:w-24 md:h-24 bg-accent/20 rounded-full blur-lg animate-pulse"></div>
      <div className="absolute top-1/3 right-1/6 w-8 h-8 sm:top-1/4 sm:right-1/5 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-blue-200/30 rounded-full blur-md animate-float" style={{animationDelay: '2s'}}></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge with improved backdrop */}
          <div className="inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 bg-white/10 backdrop-blur-md text-white rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 animate-on-scroll border border-white/20">
            <Heart className="h-3 w-3 sm:h-4 sm:w-4 mr-2 text-primary" />
            Dedicados ao Bem-Estar dos Seus Pets
          </div>

          {/* Enhanced responsive typography */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold mb-4 sm:mb-6 animate-on-scroll leading-tight">
            <span className="text-white drop-shadow-2xl">São José</span>
            <br />
            <span className="text-primary drop-shadow-2xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Agropecuária</span>
          </h1>

          {/* Improved slogan with better contrast */}
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white font-medium mb-6 sm:mb-8 animate-on-scroll drop-shadow-2xl px-4 sm:px-0">
            <span className="bg-black/20 backdrop-blur-sm px-4 py-2 rounded-lg">
              Saúde e Bem Estar do Seu Pet
            </span>
          </p>

          {/* Enhanced description with better readability */}
          <p className="text-base sm:text-lg md:text-xl text-white/95 max-w-4xl mx-auto mb-8 sm:mb-10 leading-relaxed animate-on-scroll px-4 sm:px-0">
            <span className="bg-black/20 backdrop-blur-sm px-6 py-3 rounded-xl inline-block">
              Oferecemos produtos de alta qualidade e serviços especializados para promover a saúde, 
              o bem-estar e a felicidade dos seus animais de estimação, com atendimento personalizado 
              e orientação especializada.
            </span>
          </p>

          {/* Responsive action buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 animate-on-scroll px-4 sm:px-0">
            <Button 
              size="lg" 
              className="w-full sm:w-auto px-6 sm:px-8 py-4 sm:py-5 text-base sm:text-lg bg-primary hover:bg-primary/90 text-primary-foreground shadow-button backdrop-blur-sm border border-primary/20"
              onClick={handleWhatsAppContact}
            >
              Entre em Contato
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="w-full sm:w-auto px-6 sm:px-8 py-4 sm:py-5 text-base sm:text-lg border-white/40 bg-white/10 text-white hover:bg-white/20 backdrop-blur-md"
              onClick={() => document.getElementById('categories')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Ver Produtos
            </Button>
          </div>

          {/* Enhanced feature cards with better mobile layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto animate-on-scroll px-4 sm:px-0">
            <div className="bg-white/95 backdrop-blur-md rounded-xl p-5 sm:p-6 shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-white/20">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-green-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Heart className="h-6 w-6 sm:h-7 sm:w-7 text-green-600" />
              </div>
              <h3 className="font-bold text-lg sm:text-xl mb-2 text-foreground">Amor pelos Animais</h3>
              <p className="text-muted-foreground text-sm sm:text-base">
                Colocamos o bem-estar dos animais em primeiro lugar em todas as nossas ações
              </p>
            </div>

            <div className="bg-white/95 backdrop-blur-md rounded-xl p-5 sm:p-6 shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-white/20">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Shield className="h-6 w-6 sm:h-7 sm:w-7 text-blue-600" />
              </div>
              <h3 className="font-bold text-lg sm:text-xl mb-2 text-foreground">Produtos de Qualidade</h3>
              <p className="text-muted-foreground text-sm sm:text-base">
                Oferecemos apenas produtos de alta qualidade e serviços especializados
              </p>
            </div>

            <div className="bg-white/95 backdrop-blur-md rounded-xl p-5 sm:p-6 shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-white/20 sm:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-pink-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Sparkles className="h-6 w-6 sm:h-7 sm:w-7 text-pink-600" />
              </div>
              <h3 className="font-bold text-lg sm:text-xl mb-2 text-foreground">Atendimento Personalizado</h3>
              <p className="text-muted-foreground text-sm sm:text-base">
                Fornecemos orientação especializada para cada necessidade específica
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 sm:w-7 sm:h-12 border-2 border-white/60 bg-white/10 backdrop-blur-sm rounded-full flex justify-center">
          <div className="w-1.5 h-3 sm:h-4 bg-white rounded-full mt-2 sm:mt-3 animate-pulse"></div>
        </div>
      </div>

      {/* Mobile-specific background fallback */}
      <div className="absolute inset-0 sm:hidden" 
           style={{
             backgroundImage: `url('/lovable-uploads/fa4c1ed2-8c6d-48d7-b6b0-25731880d9b0.png')`,
             backgroundSize: 'cover',
             backgroundPosition: 'center top',
             backgroundRepeat: 'no-repeat'
           }}>
      </div>
    </section>
  );
};

export default HeroSection;
