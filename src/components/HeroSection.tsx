
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
      {/* Background com gradiente */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-blue-50 to-pink-50"></div>
      
      {/* Elementos decorativos */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-accent/20 rounded-full blur-lg animate-pulse"></div>
      <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-blue-200/30 rounded-full blur-md animate-float" style={{animationDelay: '2s'}}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge principal */}
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6 animate-on-scroll">
            <Heart className="h-4 w-4 mr-2" />
            Dedicados ao Bem-Estar dos Seus Pets
          </div>

          {/* Título principal */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 animate-on-scroll">
            <span className="text-foreground">São José</span>
            <br />
            <span className="text-primary">Agropecuária</span>
          </h1>

          {/* Slogan */}
          <p className="text-xl md:text-2xl text-muted-foreground font-medium mb-8 animate-on-scroll">
            Saúde e Bem Estar do Seu Pet
          </p>

          {/* Descrição */}
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed animate-on-scroll">
            Oferecemos produtos de alta qualidade e serviços especializados para promover a saúde, 
            o bem-estar e a felicidade dos seus animais de estimação, com atendimento personalizado 
            e orientação especializada.
          </p>

          {/* Botões de ação */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-on-scroll">
            <Button 
              size="lg" 
              className="px-8 py-4 text-lg bg-primary hover:bg-primary/90 text-primary-foreground shadow-button"
              onClick={handleWhatsAppContact}
            >
              Entre em Contato
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="px-8 py-4 text-lg border-primary/30 hover:bg-primary/10"
              onClick={() => document.getElementById('categories')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Ver Produtos
            </Button>
          </div>

          {/* Cards de destaque */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto animate-on-scroll">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-border/50">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Heart className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Amor pelos Animais</h3>
              <p className="text-muted-foreground text-sm">
                Colocamos o bem-estar dos animais em primeiro lugar em todas as nossas ações
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-border/50">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Shield className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Produtos de Qualidade</h3>
              <p className="text-muted-foreground text-sm">
                Oferecemos apenas produtos de alta qualidade e serviços especializados
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-border/50">
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Sparkles className="h-6 w-6 text-pink-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Atendimento Personalizado</h3>
              <p className="text-muted-foreground text-sm">
                Fornecemos orientação especializada para cada necessidade específica
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
