
import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Check, Target, Heart, Award } from 'lucide-react';

const AboutSection = () => {
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

  return (
    <section id="about" ref={sectionRef} className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 animate-on-scroll">
            Sobre Nós
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">
            Amor e Dedicação pelo <span className="text-primary">Bem-Estar</span> dos Pets
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-on-scroll">
            Mais que uma loja de produtos para pets, somos um parceiro dedicado ao cuidado e 
            bem-estar dos seus animais de estimação.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="animate-on-scroll">
              <h3 className="text-2xl font-bold mb-4">
                Conte com a São José Agropecuária
              </h3>
              <p className="text-muted-foreground mb-6">
                Desde 2020, oferecemos produtos de alta qualidade para o cuidado dos seus pets.
                Nossa abordagem combina amor pelos animais com atendimento especializado,
                garantindo que cada cliente receba os melhores produtos e orientações adequadas
                às necessidades específicas dos seus animais de estimação.
              </p>
              <ul className="space-y-3">
                {[
                  'Equipe especializada em cuidados com pets',
                  'Amplo portfólio de marcas renomadas para pets',
                  'Orientação qualificada e produtos originais',
                  'Atendimento personalizado e suporte especializado'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AboutCard 
              icon={<Target className="h-10 w-10 text-primary" />}
              title="Missão"
              description="Fornecer produtos de qualidade superior para pets, oferecendo soluções completas que promovem a saúde, bem-estar e felicidade dos animais de estimação."
            />
            <AboutCard 
              icon={<Heart className="h-10 w-10 text-primary" />}
              title="Visão"
              description="Ser reconhecida como a principal loja de produtos para pets do Amapá, criando relacionamentos duradouros baseados em confiança e amor pelos animais."
            />
            <AboutCard 
              icon={<Award className="h-10 w-10 text-primary" />}
              title="Valores"
              description="Amor pelos animais, compromisso com a qualidade, sustentabilidade, ética nos negócios e excelência no atendimento aos tutores de pets."
            />
            <AboutCard 
              icon={<Check className="h-10 w-10 text-primary" />}
              title="Diferenciais"
              description="Orientação especializada, produtos de qualidade, atendimento personalizado, entrega rápida e equipe apaixonada por pets."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

interface AboutCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const AboutCard = ({ icon, title, description }: AboutCardProps) => (
  <Card className="animate-on-scroll service-card border border-border/50 shadow-card">
    <CardContent className="p-6">
      <div className="mb-4">{icon}</div>
      <h4 className="text-xl font-bold mb-2">{title}</h4>
      <p className="text-muted-foreground text-sm">{description}</p>
    </CardContent>
  </Card>
);

export default AboutSection;
