
import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
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

  const testimonials = [
    {
      id: 1,
      name: "Maria Silva",
      role: "Tutora da Luna",
      content: "Excelente atendimento! Os produtos são de ótima qualidade e minha cachorrinha Luna adora a ração premium que compro aqui. Recomendo muito!",
      rating: 5
    },
    {
      id: 2,
      name: "João Santos",
      role: "Tutor do Rex",
      content: "Encontro tudo que preciso para meu cachorro Rex. A equipe sempre me orienta sobre os melhores produtos. Atendimento personalizado e preços justos.",
      rating: 5
    },
    {
      id: 3,
      name: "Ana Costa",
      role: "Tutora da Mimi",
      content: "A São José Agropecuária se tornou minha loja de confiança. Produtos de qualidade, bom atendimento e sempre têm novidades para pets. Minha gata ama!",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" ref={sectionRef} className="section-padding bg-secondary/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 animate-on-scroll">
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">
            O Que Nossos <span className="text-primary">Clientes</span> Dizem
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-on-scroll">
            A satisfação dos nossos clientes e seus pets é nossa maior conquista. 
            Veja o que eles falam sobre nossos produtos e atendimento.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 bg-background/80 backdrop-blur-sm animate-on-scroll"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Quote className="h-8 w-8 text-primary/20 mr-2" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center">
                  <div>
                    <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-on-scroll">
          <div className="inline-flex items-center px-6 py-3 bg-primary/10 rounded-full">
            <Star className="h-5 w-5 text-yellow-400 fill-current mr-2" />
            <span className="text-foreground font-medium">
              Mais de 500 clientes satisfeitos e seus pets felizes!
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
