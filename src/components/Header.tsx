
import { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 bg-cover bg-center bg-no-repeat border-b border-border shadow-nav"
      style={{ backgroundImage: 'url(/lovable-uploads/c105d11e-b1c4-4599-aa9c-893a0ad4cf07.png)' }}
    >
      <div className="bg-white/95 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo e Nome da Empresa */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">SJ</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">São José Agropecuária</h1>
                <p className="text-xs text-muted-foreground">Saúde e Bem Estar do Seu Pet</p>
              </div>
            </div>

            {/* Navegação Desktop */}
            <nav className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection('categories')}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Produtos
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Depoimentos
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Contato
              </button>
            </nav>

            {/* Contato Rápido */}
            <div className="hidden lg:flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">(96) 99177-5263</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">saojoseagrorh@gmail.com</span>
              </div>
            </div>

            {/* Menu Mobile */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-md hover:bg-muted transition-colors"
              aria-label="Menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Menu Mobile Expandido */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-border">
              <nav className="flex flex-col space-y-4">
                <button
                  onClick={() => scrollToSection('hero')}
                  className="text-left text-foreground hover:text-primary transition-colors font-medium mobile-nav-link"
                >
                  Início
                </button>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-left text-foreground hover:text-primary transition-colors font-medium mobile-nav-link"
                >
                  Sobre
                </button>
                <button
                  onClick={() => scrollToSection('categories')}
                  className="text-left text-foreground hover:text-primary transition-colors font-medium mobile-nav-link"
                >
                  Produtos
                </button>
                <button
                  onClick={() => scrollToSection('testimonials')}
                  className="text-left text-foreground hover:text-primary transition-colors font-medium mobile-nav-link"
                >
                  Depoimentos
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-left text-foreground hover:text-primary transition-colors font-medium mobile-nav-link"
                >
                  Contato
                </button>
                
                <div className="pt-4 border-t border-border space-y-2">
                  <div className="flex items-center space-x-2 text-sm">
                    <Phone className="h-4 w-4 text-primary" />
                    <span className="text-muted-foreground">(96) 99177-5263</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Mail className="h-4 w-4 text-primary" />
                    <span className="text-muted-foreground">saojoseagrorh@gmail.com</span>
                  </div>
                </div>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
