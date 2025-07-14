
import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const BrandsSection = () => {
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

  const brands = [
    { name: "Royal Canin", logo: "https://logos-world.net/wp-content/uploads/2020/12/Royal-Canin-Logo.png" },
    { name: "Pedigree", logo: "https://logos-world.net/wp-content/uploads/2021/02/Pedigree-Logo.png" },
    { name: "Whiskas", logo: "https://logos-world.net/wp-content/uploads/2021/02/Whiskas-Logo.png" },
    { name: "Purina", logo: "https://logos-world.net/wp-content/uploads/2021/02/Purina-Logo.png" },
    { name: "Premier", logo: "https://example.com/premier-logo.png" },
    { name: "Golden", logo: "https://example.com/golden-logo.png" }
  ];

  return (
    <section id="brands" ref={sectionRef} className="section-padding bg-secondary/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 animate-on-scroll">
            Nossas Marcas Parceiras
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">
            Trabalhamos com as <span className="text-primary">Melhores Marcas</span> para Pets
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-on-scroll">
            Parceria com fabricantes reconhecidos mundialmente pela qualidade em produtos para animais de estimação
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {brands.map((brand, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 bg-background/80 backdrop-blur-sm animate-on-scroll cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 flex items-center justify-center h-24">
                <div className="text-lg font-bold text-muted-foreground group-hover:text-primary transition-colors text-center">
                  {brand.name}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center animate-on-scroll">
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
              Distribuidor Autorizado
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
              Produtos Originais
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
              Orientação Especializada
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
