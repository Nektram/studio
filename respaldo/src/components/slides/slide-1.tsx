"use client";

import { useState } from 'react';
import { SlideWrapper } from './slide-wrapper';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '../ui/badge';
import { Sparkles, MousePointerClick } from 'lucide-react';
import { cn } from '@/lib/utils';

const studioMarsLogo = PlaceHolderImages.find((p) => p.id === 'studio-mars-logo');

export function Slide1() {
  const [pumVisible, setPumVisible] = useState(false);

  return (
    <SlideWrapper>
      <div className="flex flex-col items-center justify-center gap-8 md:gap-10 lg:gap-12 w-full px-4 md:px-6 animate-slide-fade-up" style={{ transform: 'scale(1.1)' }}>
        {/* Título principal con animación parallax */}
        <div className="space-y-6 text-center animate-slide-parallax-left delay-200">
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-balance leading-tight">
            <span style={{ color: '#ff6f00' }}>
              Studio Mars
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light text-foreground/80 text-balance max-w-5xl mx-auto">
            Diseño Web y Delivery para Restaurantes en SLP
          </h2>
        </div>

        {/* Tagline con badge minimalista */}
        <div className="animate-slide-parallax-right delay-400">
          <Badge variant="outline" className="px-6 py-3 text-xl font-medium border-primary/20 hover:border-primary/40 transition-all">
            <Sparkles className="mr-2 h-5 w-5 text-primary" />
            Go Delivery - Devolviendo el Control a los Restaurantes Mexicanos
          </Badge>
        </div>

        {/* Estadística impactante minimalista */}
        <div
          className="relative animate-slide-fade-up delay-700 cursor-pointer w-full max-w-4xl"
          onClick={() => setPumVisible(true)}
        >
          <div className="relative bg-card/40 backdrop-blur-sm border border-primary/10 rounded-2xl p-6 md:p-10 lg:p-12 hover-lift">
            {pumVisible ? (
              <div className="text-center space-y-4 md:space-y-6 animate-slide-blur-fade">
                <p className="text-5xl md:text-6xl lg:text-8xl font-black text-primary">
                  ¡PUM!
                </p>
                <div className="space-y-2 md:space-y-3">
                  <p className="text-4xl md:text-6xl lg:text-7xl font-black text-foreground">
                    <span className="bg-gradient-to-r from-red-500 to-destructive bg-clip-text text-transparent">
                      $420
                    </span>
                  </p>
                  <p className="text-xl md:text-2xl lg:text-3xl font-normal text-muted-foreground max-w-2xl mx-auto px-4">
                    de cada $1,000 se lo llevan las plataformas
                  </p>
                  <p className="text-base md:text-lg lg:text-xl text-destructive font-medium">
                    Casi la mitad de tus ventas 💸
                  </p>
                </div>
              </div>
            ) : (
               <div className="text-center space-y-3 md:space-y-4 flex flex-col items-center">
                 <MousePointerClick className="h-10 w-10 md:h-12 md:w-12 text-primary animate-pulse" />
                 <p className="text-xl md:text-2xl font-semibold text-primary">Haz clic para revelar el dato</p>
                 <p className="text-sm md:text-base text-muted-foreground">¿Cuánto te quitan las apps?</p>
              </div>
            )}
          </div>
        </div>

        {/* Presentador minimalista */}
        <div className="animate-slide-fade-up delay-1000 mt-8">
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground font-light text-center px-4">
            Presentado por: <span className="text-primary font-semibold">Mario Rico</span>, estudiante UTAN San Luis
          </p>
        </div>

        {/* Decorative elements sutiles */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-primary/3 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>
    </SlideWrapper>
  );
}
