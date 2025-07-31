
import React, { useEffect, useRef } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { type CarouselApi } from "@/components/ui/carousel";
import { Card, CardContent } from '@/components/ui/card';

const AgroSection = () => {
  const [api, setApi] = React.useState<CarouselApi>();

  React.useEffect(() => {
    if (!api) {
      return;
    }

    const interval = setInterval(() => {
      api.scrollNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [api]);

  const slideData = [
    {
      title: "Nossa Fachada",
      description: "Localizada no coração da cidade",
      src: "/lovable-uploads/dec4fc0a-5d06-4789-9e8a-fb882bc00df3.png",
    },
    {
      title: "Produtos para Jardinagem", 
      description: "Vasos, terra e tudo para seu jardim",
      src: "/lovable-uploads/0bf981a1-f655-4663-b807-4927357b3761.png",
    },
    {
      title: "Variedade de Produtos",
      description: "Amplo estoque para todas as necessidades",
      src: "/lovable-uploads/c053131a-c9a1-42d3-ab27-8aa3aea39144.png",
    },
    {
      title: "Ambiente Organizado",
      description: "Produtos bem organizados para facilitar sua compra",
      src: "/lovable-uploads/d9c3dcb4-e331-47e1-ac30-cd749fbb80fa.png",
    },
    {
      title: "Seção de Pets",
      description: "Tudo para o cuidado dos seus animais",
      src: "/lovable-uploads/e47aa0d8-2afe-43a0-8b5d-dc76802fea44.png",
    },
    {
      title: "Ferramentas e Utensílios",
      description: "Equipamentos para agricultura e jardinagem",
      src: "/lovable-uploads/3ae121d6-e130-4d1a-8af9-0011a292d5ee.png",
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 animate-on-scroll">
            Nossa Loja
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">
            Um Pouco Sobre Nossa <span className="text-primary">Agro</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-on-scroll">
            Conheça nossos espaços e a variedade de produtos que oferecemos para 
            atender todas as suas necessidades agropecuárias e de jardinagem.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Carousel 
            setApi={setApi}
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              {slideData.map((slide, index) => (
                <CarouselItem key={index}>
                  <Card className="border-0 shadow-lg overflow-hidden">
                    <CardContent className="p-0">
                      <div className="relative h-[400px] md:h-[500px]">
                        <img
                          src={slide.src}
                          alt={slide.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute bottom-6 left-6 right-6 text-white">
                          <h3 className="text-2xl md:text-3xl font-bold mb-2">
                            {slide.title}
                          </h3>
                          <p className="text-white/90 text-lg">
                            {slide.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default AgroSection;
