
'use client';

import * as React from 'react';
import { SlideWrapper } from './slide-wrapper';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Code, Smartphone, BrainCircuit, ChefHat, ShieldCheck } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '../../lib/placeholder-images';
import type { ImagePlaceholder } from '../../lib/placeholder-images';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"


const carouselImages: (ImagePlaceholder | undefined)[] = [
  PlaceHolderImages.find((p) => p.id === 'slide7-platform'),
  PlaceHolderImages.find((p) => p.id === 'slide7-google-play'),
  PlaceHolderImages.find((p) => p.id === 'slide7-market-knowledge'),
  PlaceHolderImages.find((p) => p.id === 'slide7-real-experience'),
];

export function Slide7() {

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  return (
    <SlideWrapper>
      <div className="flex flex-col items-center gap-12 w-full max-w-7xl mx-auto px-8 animate-slide-fade-up" style={{ transform: 'scale(1.25)' }}>
        <h2 className="text-5xl md:text-6xl font-bold animate-slide-fade-up opacity-0">Creado con tecnología Propia</h2>
        <div className="grid md:grid-cols-2 gap-8 w-full items-center">
          <div className="flex flex-col gap-6 text-left animate-slide-parallax-left opacity-0 delay-200">
            <div className="flex items-start gap-6">
              <div className="p-3 rounded-xl bg-primary/10 flex-shrink-0">
                <Code className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-2xl">Plataforma Web Funcionando</h3>
                <p className="text-lg text-muted-foreground font-light">Un sistema robusto y escalable listo para operar.</p>
              </div>
            </div>
             <div className="flex items-start gap-6">
              <div className="p-3 rounded-xl bg-primary/10 flex-shrink-0">
                <Smartphone className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-2xl">App Móvil de Drivers</h3>
                <p className="text-lg text-muted-foreground font-light">Ya publicada y disponible en Google Play Store.</p>
              </div>
            </div>
             <div className="flex items-start gap-6">
              <div className="p-3 rounded-xl bg-primary/10 flex-shrink-0">
                <BrainCircuit className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-2xl">Conocimiento del Mercado Mexicano</h3>
                <p className="text-lg text-muted-foreground font-light">Una solución pensada por y para México, no una fórmula extranjera.</p>
              </div>
            </div>
             <div className="flex items-start gap-6">
              <div className="p-3 rounded-xl bg-primary/10 flex-shrink-0">
                <ChefHat className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-2xl">Experiencia Real</h3>
                <p className="text-lg text-muted-foreground font-light">Basada en años de trabajo en el sector.</p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="p-3 rounded-xl bg-primary/10 flex-shrink-0">
                <ShieldCheck className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-2xl">Factibilidad Técnica</h3>
                <p className="text-lg text-muted-foreground font-light">Stack probado (Next.js + app drivers) y procesos listos para producción.</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 animate-slide-parallax-right opacity-0 delay-300">
            {/* Link y QR arriba del carrusel */}
            <div className="flex items-center justify-end gap-4">
              <a href="https://godelivery.app" target="_blank" rel="noopener noreferrer" className="text-primary text-4xl font-semibold underline-offset-4 hover:underline">
                https://godelivery.app
              </a>
              <Image 
                src="https://res.cloudinary.com/drswibb0s/image/upload/v1761144913/qr-code_b4xuxk.png"
                alt="QR Go Delivery"
                width={320}
                height={320}
                className="rounded-md border border-primary/20"
              />
            </div>
            <Carousel
              plugins={[plugin.current]}
              className="w-full"
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
            >
              <CarouselContent>
                {carouselImages.map((img, index) => (
                  img && (
                    <CarouselItem key={index}>
                      <Card className="border-border/30">
                        <CardContent className="relative aspect-video p-0">
                           <Image
                              src={img.imageUrl}
                              alt={img.description}
                              fill
                              className="rounded-lg object-cover"
                              data-ai-hint={img.imageHint}
                            />
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  )
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
        <p className="mt-2 text-xl text-muted-foreground italic font-light animate-slide-fade-up opacity-0 delay-500">"Colonia por colonia, restaurante por restaurante."</p>
      </div>
    </SlideWrapper>
  );
}
