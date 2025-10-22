"use client";

import { SlideWrapper } from './slide-wrapper';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Wallet, Users, ShieldCheck, Sparkles } from 'lucide-react';

export function Slide4() {
  return (
    <SlideWrapper>
      <div className="flex flex-col items-center gap-12 w-full max-w-7xl mx-auto px-8 animate-slide-fade-up" style={{ transform: 'scale(1.25)' }}>
        <div className="text-center space-y-6 animate-slide-fade-up opacity-0">
          <Badge variant="outline" className="px-4 py-2 text-lg border-primary/20">
            <Sparkles className="mr-2 h-4 w-4 text-primary" />
            La Solución Innovadora
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold">
            <span className="text-primary">Studio Mars</span> presenta{' '}
            <span className="bg-gradient-to-r from-primary via-orange-500 to-primary bg-clip-text text-transparent">
              Go Delivery
            </span>
          </h2>
        </div>

        <div className="animate-slide-fade-scale opacity-0 delay-300">
          <Card className="relative overflow-hidden border border-primary/20">
            <CardContent className="py-6 px-12">
              <p className="text-3xl md:text-4xl font-semibold text-center">
                <span className="text-primary">Mensualidad fija</span>, NO comisiones
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-3 gap-8 w-full animate-slide-fade-up opacity-0 delay-500">
          <Card className="group relative overflow-hidden border border-border/30 hover-card animate-slide-parallax-left opacity-0 delay-600">
            <CardHeader className="relative text-center space-y-4">
              <div className="mx-auto w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                <Wallet className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl">Pagos Flexibles</CardTitle>
            </CardHeader>
            <CardContent className="relative text-center space-y-3">
              <p className="text-lg text-foreground/80 font-light">
                Acepta <span className="font-semibold text-primary">efectivo</span>,{' '}
                <span className="font-semibold text-primary">transferencia</span> y{' '}
                <span className="font-semibold text-primary">tarjeta</span>
              </p>
              <p className="text-sm text-muted-foreground font-light">
                Tú eliges cómo recibir tu dinero
              </p>
              <div className="flex justify-center gap-2 pt-2">
                <Badge variant="secondary" className="text-xs font-light"> Efectivo</Badge>
                <Badge variant="secondary" className="text-xs font-light"> Tarjeta</Badge>
                <Badge variant="secondary" className="text-xs font-light"> Transfer</Badge>
              </div>
              <p className="text-xs text-muted-foreground mt-2">Pagos con tarjeta: inicio en noviembre (Proyecciones)</p>
            </CardContent>
          </Card>

          <Card className="group relative overflow-hidden border border-border/30 hover-card animate-slide-fade-scale opacity-0 delay-700">
            <CardHeader className="relative text-center space-y-4">
              <div className="mx-auto w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl">Repartidores Locales</CardTitle>
            </CardHeader>
            <CardContent className="relative text-center space-y-3">
              <p className="text-lg text-foreground/80 font-light">
                Conexión directa con repartidores{' '}
                <span className="font-semibold text-primary">independientes</span>
              </p>
              <p className="text-sm text-muted-foreground font-light">
                De San Luis Potosí, conocen tu ciudad
              </p>
              <Badge variant="outline" className="mt-2 border-primary/20">
                 Repartidores verificados
              </Badge>
            </CardContent>
          </Card>

          <Card className="group relative overflow-hidden border border-border/30 hover-card animate-slide-parallax-right opacity-0 delay-800">
            <CardHeader className="relative text-center space-y-4">
              <div className="mx-auto w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                <ShieldCheck className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl">Totalmente Legal</CardTitle>
            </CardHeader>
            <CardContent className="relative text-center space-y-3">
              <p className="text-lg text-foreground/80 font-light">
                En proceso de registro{' '}
                <span className="font-semibold text-primary">RESICO</span>
              </p>
              <p className="text-sm text-muted-foreground font-light">
                Para tu tranquilidad y cumplimiento fiscal
              </p>
              <Badge variant="outline" className="mt-2 border-green-500/20 text-green-400 font-light">
                 Cumplimiento Legal
              </Badge>
            </CardContent>
          </Card>
        </div>

        <div className="animate-slide-fade-up opacity-0 delay-1000">
          <Card className="border border-green-500/20 bg-green-500/5">
            <CardContent className="py-4 px-8 flex items-center gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              <p className="text-xl font-medium text-green-400">
                Plataforma terminada y funcionando en San Luis
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="absolute top-40 left-40 w-48 h-48 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-40 right-40 w-56 h-56 bg-primary/3 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
      </div>
    </SlideWrapper>
  );
}
