"use client";

import { SlideWrapper } from './slide-wrapper';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { AnimatedCounter } from '../animated-counter';
import { Building, AppWindow, Globe, Award, MapPin, DollarSign } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useEffect, useRef, useState } from 'react';

const mapImg = PlaceHolderImages.find((p) => p.id === 'slide6-map');

export function Slide6() {
  const [visible, setVisible] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            // Once visible, we can disconnect to avoid retriggers
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return (
    <SlideWrapper>
      <div ref={rootRef} className="flex flex-col items-center gap-6 animate-slide-fade-up w-full" style={{ transform: 'scale(1.1)' }}>
        <h2 className="text-4xl md:text-5xl font-bold">Ya Funcionando en San Luis Potosí</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
          <Card className="hover-card animate-slide-parallax-left opacity-0 delay-200">
            <CardHeader className="items-center text-center">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Building className="h-7 w-7 text-primary" />
              </div>
              <CardTitle>Restaurantes Activos</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold"><AnimatedCounter value={visible ? 19 : 0} duration={2500} /></p>
            </CardContent>
          </Card>
          <Card className="hover-card animate-slide-fade-scale opacity-0 delay-300">
            <CardHeader className="items-center text-center">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <DollarSign className="h-7 w-7 text-primary" />
              </div>
              <CardTitle>Proyección Año 1</CardTitle>
              <CardDescription className="font-light">(50 restaurantes)</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold"><AnimatedCounter value={visible ? 598000 : 0} duration={2800} formatter={(v) => `$${Math.round(v/1000)}K MXN`} /></p>
            </CardContent>
          </Card>
          <Card className="hover-card animate-slide-parallax-right opacity-0 delay-400">
            <CardHeader className="items-center text-center">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Globe className="h-7 w-7 text-primary" />
              </div>
              <CardTitle>Mercado Total (México)</CardTitle>
              <CardDescription className="font-light">INEGI</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold"><AnimatedCounter value={visible ? 600000 : 0} duration={2600} formatter={(v) => `${Math.round(v/1000)}K`} /></p>
            </CardContent>
          </Card>
           <Card className="hover-card animate-slide-fade-up opacity-0 delay-500">
            <CardHeader className="items-center text-center">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <AppWindow className="h-7 w-7 text-primary" />
              </div>
              <CardTitle>Ya en Apps de Delivery</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold"><AnimatedCounter value={visible ? 153000 : 0} duration={2700} formatter={(v) => `+${Math.round(v/1000)}K`} /></p>
            </CardContent>
          </Card>
        </div>
        <div className="grid md:grid-cols-3 gap-6 w-full max-w-6xl">
            <Card className="md:col-span-2 hover-card animate-slide-parallax-left opacity-0 delay-600">
                <CardHeader>
                    <CardTitle>Expansión</CardTitle>
                </CardHeader>
                <CardContent>
                {mapImg && (
                    <div className="relative aspect-video">
                    <Image
                        src={mapImg.imageUrl}
                        alt={mapImg.description}
                        fill
                        className="rounded-lg object-cover"
                        data-ai-hint={mapImg.imageHint}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="flex items-center gap-2 bg-background/90 backdrop-blur-sm p-3 rounded-lg border border-primary/20">
                            <MapPin className="h-6 w-6 text-primary" />
                            <span className="font-semibold">San Luis Potosí</span>
                        </div>
                    </div>
                    </div>
                )}
                </CardContent>
            </Card>
            <div className="flex flex-col gap-6">
                 <Card className="flex-1 hover-card animate-slide-fade-scale opacity-0 delay-700">
                    <CardHeader>
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                          <Award className="h-7 w-7 text-primary" />
                        </div>
                        <CardTitle>Reconocimiento</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-2xl font-bold">Finalistas CREO MX</p>
                    </CardContent>
                </Card>
                <Card className="flex-1 bg-primary/5 border-primary/10 hover-card animate-slide-parallax-right opacity-0 delay-800">
                  <CardHeader>
                    <CardTitle>Testimonios</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 text-left">
                    <blockquote className="italic text-base font-light">“Antes pagaba comisiones por todo. Ahora con $400 al mes y pagos en efectivo/transferencia, me quedo con el margen.”<br /><span className="not-italic font-medium">— Laura G., Taquería Don Pepe</span></blockquote>
                    <blockquote className="italic text-base font-light">“Los repartidores son de aquí, llegan rápido y me sale mejor que con las apps grandes.”<br /><span className="not-italic font-medium">— Carlos M., Pizzería San Luis</span></blockquote>
                  </CardContent>
                </Card>
            </div>
        </div>
      </div>
    </SlideWrapper>
  );
}
