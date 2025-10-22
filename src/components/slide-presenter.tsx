"use client";

import * as React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';
import { Slide1 } from './slides/slide-1';
import { Slide2 } from './slides/slide-2';
import { Slide3 } from './slides/slide-3';
import { Slide4 } from './slides/slide-4';
import { Slide5 } from './slides/slide-5';
import { Slide6 } from './slides/slide-6';
import { Slide7 } from './slides/slide-7';
import { Slide8 } from './slides/slide-8';
import { Slide9 } from './slides/slide-9';
import { Slide10 } from './slides/slide-10';
import { SlideRevenueDetails } from './slides/slide-revenue-details';
import { SlideYear1Rationale } from './slides/slide-year1-rationale';
import { Badge } from './ui/badge';
import { Clock, Maximize2, Minimize2 } from 'lucide-react';
import { Button } from './ui/button';
import Image from 'next/image';

const SLIDE_COUNT = 10; // visible slides
const slides = [
  Slide1,
  Slide2,
  Slide3,
  Slide4,
  Slide5,
  Slide6,
  Slide7,
  Slide8,
  Slide9,
  Slide10,
  // Hidden appendix slide (no dot, no numeric shortcut)
  SlideRevenueDetails,
];

// Animaciones sutiles y elegantes con efecto parallax
const slideAnimations = [
  'animate-dramatic-entry',
  'animate-slide-fade-up',
  'animate-slide-fade-scale',
  'animate-slide-parallax-left',
  'animate-slide-parallax-right',
  'animate-slide-depth-fade',
  'animate-slide-blur-fade',
  'animate-slide-float-in',
  'animate-slide-perspective-left',
  'animate-slide-rise',
];

export function SlidePresenter() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [timer, setTimer] = React.useState(0);
  const [isTimerRunning, setIsTimerRunning] = React.useState(false);
  const [isFullscreen, setIsFullscreen] = React.useState(false);
  const [slideAnimation, setSlideAnimation] = React.useState(slideAnimations[0]);
  const [showRevenueOverlay, setShowRevenueOverlay] = React.useState(false);
  const [overlayView, setOverlayView] = React.useState<'revenue' | 'year1'>('revenue');

  // Timer functionality
  React.useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning]);

  // Start timer on first slide change
  React.useEffect(() => {
    if (current > 0 && !isTimerRunning) {
      setIsTimerRunning(true);
    }
  }, [current, isTimerRunning]);

  // Keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        api?.scrollNext();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        api?.scrollPrev();
      } else if (/^[0-9]$/.test(e.key)) {
        // Numeric shortcuts: '1'->slide 1 (index 0), ..., '9'->slide 9 (index 8), '0'->slide 10 (index 9)
        e.preventDefault();
        const num = parseInt(e.key, 10);
        const targetIndex = num === 0 ? 9 : num - 1; // map 1..9 -> 0..8, 0 -> 9
        if (targetIndex >= 0 && targetIndex < SLIDE_COUNT) {
          api?.scrollTo(targetIndex);
        }
      } else if (e.key === 'f' || e.key === 'F') {
        e.preventDefault();
        toggleFullscreen();
      } else if (e.key === 'r' || e.key === 'R') {
        e.preventDefault();
        api?.scrollTo(0);
        setTimer(0);
        setIsTimerRunning(false);
      } else if (e.key === 't' || e.key === 'T') {
        e.preventDefault();
        setIsTimerRunning((prev) => !prev);
      } else if (e.key === 'Escape' && isFullscreen) {
        document.exitFullscreen();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [api, isFullscreen]);

  // Listen for custom navigation events from slides
  React.useEffect(() => {
    const handler = (e: Event) => {
      const custom = e as CustomEvent<number>;
      const index = custom.detail;
      if (typeof index === 'number') {
        api?.scrollTo(index);
      }
    };
    window.addEventListener('goToSlide', handler as EventListener);
    return () => window.removeEventListener('goToSlide', handler as EventListener);
  }, [api]);

  // Overlay for revenue details: slide up with parallax
  React.useEffect(() => {
    const openHandler = () => {
      setOverlayView('revenue');
      setShowRevenueOverlay(true);
    };
    const openYear1Handler = () => {
      setOverlayView('year1');
      setShowRevenueOverlay(true);
    };
    const closeHandler = () => setShowRevenueOverlay(false);
    window.addEventListener('openRevenueDetails', openHandler);
    window.addEventListener('openYear1Rationale', openYear1Handler);
    window.addEventListener('closeRevenueDetails', closeHandler);
    return () => {
      window.removeEventListener('openRevenueDetails', openHandler);
      window.removeEventListener('openYear1Rationale', openYear1Handler);
      window.removeEventListener('closeRevenueDetails', closeHandler);
    };
  }, []);

  // Fullscreen change detection
  React.useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on('select', () => {
      const newIndex = api.selectedScrollSnap();
      setCurrent(newIndex);
      // Aplicar animación única a cada slide
      setSlideAnimation(slideAnimations[newIndex]);
    });
  }, [api]);

  const toggleFullscreen = async () => {
    if (!document.fullscreenElement) {
      await document.documentElement.requestFullscreen();
    } else {
      await document.exitFullscreen();
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getTimerColor = () => {
    if (timer < 180) return 'bg-green-500/20 text-green-400 border-green-500/30';
    if (timer < 300) return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
    return 'bg-red-500/20 text-red-400 border-red-500/30';
  };

  return (
    <div className="relative w-full h-[100svh] overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5 pointer-events-none" />
      
      {/* Logo de Go Delivery en la esquina superior derecha */}
      <div className="absolute top-6 right-6 md:top-8 md:right-8 z-30">
        <Image
          src="https://res.cloudinary.com/drswibb0s/image/upload/v1758686485/godeliverylogo_sin_fondo_cndxai.png"
          alt="Go Delivery Logo"
          width={200}
          height={67}
          className="object-contain drop-shadow-2xl"
          priority
        />
      </div>
      
      <Carousel 
        setApi={setApi} 
        className="w-full h-full relative z-10"
        opts={{
          loop: false,
          align: 'start',
        }}
      >
        <CarouselContent>
          {slides.map((SlideComponent, index) => (
            <CarouselItem key={index}>
              <div className={cn(
                current === index && slideAnimation,
                "w-full h-full"
              )}>
                <SlideComponent />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {/* Navigation Controls - Hidden in fullscreen for cleaner look */}
        {!isFullscreen && (
          <>
            <CarouselPrevious className="absolute left-8 top-1/2 -translate-y-1/2 z-20 h-14 w-14 bg-card/80 backdrop-blur-lg border-primary/20 hover:bg-primary/20 hover:border-primary transition-all duration-300" />
            <CarouselNext className="absolute right-8 top-1/2 -translate-y-1/2 z-20 h-14 w-14 bg-card/80 backdrop-blur-lg border-primary/20 hover:bg-primary/20 hover:border-primary transition-all duration-300" />
          </>
        )}
      </Carousel>

      {/* Progress Dots - Más sutil, pequeña y hasta abajo */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20">
        <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-black/10 backdrop-blur-sm border border-white/5">
          {Array.from({ length: SLIDE_COUNT }).map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={cn(
                'h-1 rounded-full transition-all duration-500 hover:scale-125',
                current === index 
                  ? 'w-6 bg-primary shadow-md shadow-primary/30' 
                  : 'w-1 bg-white/30 hover:bg-white/50'
              )}
            />
          ))}
        </div>
      </div>

      {/* Timer Display - Bottom left */}
      <div className="absolute bottom-6 left-6 z-20 flex items-center gap-3">
        <Badge 
          variant="outline" 
          className={cn(
            "px-4 py-2 text-lg font-mono transition-all duration-300",
            getTimerColor()
          )}
        >
          <Clock className="mr-2 h-4 w-4" />
          {formatTime(timer)}
        </Badge>
      </div>

      {/* Fullscreen Toggle */}
      {!isFullscreen && (
        <div className="absolute top-6 right-6 z-20 flex items-center gap-3">
          <Button
            variant="outline"
            size="icon"
            onClick={toggleFullscreen}
            className="h-10 w-10 glass hover:bg-primary/20"
          >
            <Maximize2 className="h-4 w-4" />
          </Button>
        </div>
      )}

      {/* Slide Counter - Bottom right */}
      <div className="absolute bottom-6 right-6 z-20">
        <Badge variant="outline" className="px-4 py-2 text-base glass">
          <span className="text-primary font-bold">{current + 1}</span>
          <span className="text-muted-foreground mx-1">/</span>
          <span className="text-muted-foreground">{SLIDE_COUNT}</span>
        </Badge>
      </div>

      {/* Keyboard Shortcuts Hint - Top Left */}
      {!isFullscreen && (
        <div className="absolute top-6 left-6 z-20">
          <div className="text-xs text-muted-foreground glass px-3 py-2 rounded-lg">
            <div className="flex gap-4">
              <span><kbd className="px-1.5 py-0.5 bg-muted rounded text-xs">→</kbd> Siguiente</span>
              <span><kbd className="px-1.5 py-0.5 bg-muted rounded text-xs">F</kbd> Pantalla</span>
              <span><kbd className="px-1.5 py-0.5 bg-muted rounded text-xs">R</kbd> Reiniciar</span>
            </div>
          </div>
        </div>
      )}

      {/* Revenue Details Overlay */}
      {showRevenueOverlay && (
        <div 
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm animate-slide-fade-up"
          onClick={() => setShowRevenueOverlay(false)}
        >
          <div onClick={(e) => e.stopPropagation()}>
            {overlayView === 'revenue' ? <SlideRevenueDetails /> : <SlideYear1Rationale />}
          </div>
        </div>
      )}

    </div>
  );
}
