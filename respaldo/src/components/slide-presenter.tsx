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
      {/* Logo */}
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
        opts={{ loop: false, align: 'start' }}
      >
        <CarouselContent>
          <CarouselItem>
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-xl text-muted-foreground">Cargando presentación…</span>
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
}
