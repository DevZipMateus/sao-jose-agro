
import { Heart, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4">
        <div className="py-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Sobre a Empresa */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/lovable-uploads/2dd9e36e-1c9b-4152-b20d-e331cf921397.png" 
                alt="São José Agropecuária" 
                className="h-12 w-auto"
              />
              <div>
                <p className="text-background/70 text-sm">Saúde e Bem Estar do Seu Pet</p>
              </div>
            </div>
            <p className="text-background/80 mb-6 leading-relaxed">
              Oferecemos produtos de alta qualidade e serviços especializados para promover 
              a saúde, o bem-estar e a felicidade dos seus animais de estimação.
            </p>
            <div className="flex items-center space-x-2 text-background/80">
              <Heart className="h-4 w-4 text-primary" />
              <span className="text-sm">Feito com amor para pets desde 2020</span>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="text-lg font-bold mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-background/80 hover:text-primary transition-colors text-sm"
                >
                  Início
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-background/80 hover:text-primary transition-colors text-sm"
                >
                  Sobre Nós
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('categories')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-background/80 hover:text-primary transition-colors text-sm"
                >
                  Produtos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-background/80 hover:text-primary transition-colors text-sm"
                >
                  Depoimentos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-background/80 hover:text-primary transition-colors text-sm"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                <div>
                  <a 
                    href="tel:+5596991775263" 
                    className="text-background/80 hover:text-primary transition-colors text-sm"
                  >
                    (96) 99177-5263
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                <div>
                  <a 
                    href="mailto:saojoseagrorh@gmail.com" 
                    className="text-background/80 hover:text-primary transition-colors text-sm"
                  >
                    saojoseagrorh@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                <div>
                  <span className="text-background/80 text-sm">
                    Rua Brasil Novo, 298
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Linha de separação */}
        <div className="border-t border-background/20 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-background/60 text-sm">
              © {currentYear} São José Agropecuária. Todos os direitos reservados.
            </div>
            <div className="flex items-center space-x-4 text-background/60 text-sm">
              <span>Desenvolvido com</span>
              <Heart className="h-4 w-4 text-primary fill-current" />
              <span>para pets</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
