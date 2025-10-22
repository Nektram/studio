"use client";

import { SlideWrapper } from './slide-wrapper';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { TrendingDown, TrendingUp } from 'lucide-react';

export function Slide2() {
  return (
    <SlideWrapper>
      <div className="flex flex-col items-center gap-12 w-full max-w-7xl mx-auto px-8 animate-slide-fade-up" style={{ transform: 'scale(1.25)' }}>
        <h2 className="text-5xl md:text-6xl font-bold animate-slide-fade-up opacity-0">El Problema: Comisiones Excesivas</h2>
        <p className="text-2xl text-muted-foreground max-w-4xl text-center animate-slide-fade-up opacity-0 delay-200 font-light">
          Las plataformas de delivery populares imponen comisiones que pueden ahogar a un restaurante.
          Nosotros ofrecemos una alternativa justa y sostenible.
        </p>
        <div className="grid md:grid-cols-2 gap-8 w-full">
          <Card className="border-destructive/30 hover-card animate-slide-parallax-left opacity-0 delay-300">
            <CardHeader>
              <div className="flex items-center gap-6">
                <div className="p-3 rounded-xl bg-destructive/10">
                  <TrendingDown className="h-10 w-10 text-destructive" />
                </div>
                <div>
                  <CardTitle className="text-2xl">Plataformas Actuales</CardTitle>
                  <CardDescription className="text-lg font-light">Modelo basado en altas comisiones</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-5xl font-black text-destructive">30-42%</p>
              <p className="text-base text-muted-foreground font-light">De cada venta se va en comisiones e impuestos.</p>
            </CardContent>
          </Card>
          <Card className="border-primary/30 hover-card animate-slide-parallax-right opacity-0 delay-400">
            <CardHeader>
              <div className="flex items-center gap-6">
                <div className="p-3 rounded-xl bg-primary/10">
                  <TrendingUp className="h-10 w-10 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-2xl">Go Delivery</CardTitle>
                  <CardDescription className="text-lg font-light">Un pago fijo mensual, sin sorpresas</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-5xl font-black text-primary">$400/mes</p>
              <p className="text-base text-muted-foreground font-light">Sin comisiones. Todas las ganancias son para ti.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </SlideWrapper>
  );
}