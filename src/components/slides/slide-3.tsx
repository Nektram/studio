"use client";

import { SlideWrapper } from './slide-wrapper';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { AnimatedCounter } from '../animated-counter';
import { Badge } from '../ui/badge';
import { TrendingDown, TrendingUp, Zap, DollarSign } from 'lucide-react';

export function Slide3() {
  return (
    <SlideWrapper>
      <div className="flex flex-col items-center gap-12 w-full max-w-7xl mx-auto px-8 animate-slide-fade-up" style={{ transform: 'scale(0.9)' }}>
        <div className="text-center space-y-4 animate-slide-fade-up opacity-0">
          <Badge variant="outline" className="px-4 py-2 text-lg border-primary/20">
            <Zap className="mr-2 h-4 w-4 text-primary" />
            La Gran Diferencia
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold">
            Solo <span className="text-primary">$13 Pesos</span> al Día
          </h2>
          <p className="text-xl text-muted-foreground font-light">
            La diferencia entre el éxito y el fracaso de tu restaurante
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 w-full max-w-5xl animate-slide-fade-up opacity-0 delay-300">
          <Card className="group relative overflow-hidden border border-destructive/20 hover-card animate-slide-parallax-left opacity-0 delay-400">
            <div className="absolute top-4 right-4">
              <TrendingDown className="h-6 w-6 text-destructive" />
            </div>
            <CardHeader className="relative">
              <Badge variant="outline" className="w-fit mb-2 border-destructive/30 text-destructive">
                Modelo Antiguo
              </Badge>
              <CardTitle className="text-3xl">Plataformas Tradicionales</CardTitle>
              <CardDescription className="text-base font-light">Todos pierden (excepto ellos)</CardDescription>
            </CardHeader>
            <CardContent className="relative text-center space-y-6">
              <div className="space-y-3">
                <div className="text-6xl font-bold text-destructive">
                  42%
                </div>
                <p className="text-lg font-light text-foreground/80">al restaurante por pedido</p>
                <div className="text-4xl font-bold text-destructive/80 mt-2">
                  +7-8%
                </div>
                <p className="text-lg font-light text-foreground/80">al cliente en checkout</p>
                <div className="h-2 bg-destructive/10 rounded-full overflow-hidden">
                  <div className="h-full w-[50%] bg-destructive rounded-full" />
                </div>
              </div>
              <div className="bg-destructive/5 border border-destructive/10 p-5 rounded-xl space-y-2">
                <p className="text-base text-muted-foreground font-medium">
                  En ventas de $1,000
                </p>
                <p className="text-4xl font-extrabold text-destructive">
                  -$420
                </p>
                <p className="text-sm text-destructive/80">
                  Más $70-80 extra que paga el cliente
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="group relative overflow-hidden border border-primary/20 hover-card animate-slide-parallax-right opacity-0 delay-500">
            <div className="absolute top-4 right-4">
              <TrendingUp className="h-6 w-6 text-primary" />
            </div>
            <CardHeader className="relative">
              <Badge variant="outline" className="w-fit mb-2 bg-primary/10 border-primary/30 text-primary">
                Modelo Innovador
              </Badge>
              <CardTitle className="text-3xl text-primary">Go Delivery</CardTitle>
              <CardDescription className="text-base font-light">Todos ganan</CardDescription>
            </CardHeader>
            <CardContent className="relative text-center space-y-6">
              <div className="space-y-3">
                <div className="text-6xl font-bold text-primary">
                  $13
                </div>
                <p className="text-lg font-light text-foreground/80">al día para el restaurante</p>
                <div className="text-4xl font-bold text-primary/80 mt-2">
                  +1.32%
                </div>
                <p className="text-lg font-light text-foreground/80">al cliente en checkout</p>
                <div className="h-2 bg-primary/10 rounded-full overflow-hidden">
                  <div className="h-full w-[1.5%] bg-primary rounded-full" />
                </div>
              </div>
              <div className="bg-primary/5 border border-primary/10 p-5 rounded-xl space-y-2">
                <p className="text-base text-muted-foreground font-medium">
                  Costo mensual fijo
                </p>
                <p className="text-4xl font-extrabold text-primary">
                  $400/30 días = $13.33
                </p>
                <p className="text-sm text-primary/80">
                  Para el restaurante (sin comisiones por pedido)
                </p>
                <p className="text-sm text-primary/80 mt-1">
                  Cliente paga solo procesamiento real
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="animate-slide-fade-up opacity-0 delay-700">
          <p className="text-xl mt-2 font-light text-muted-foreground">
            Es como <span className="text-primary font-semibold">Netflix</span>, pero un delivery para negocios, que si genera ventas.
          </p>
        </div>

        <div className="absolute top-32 left-32 w-40 h-40 bg-destructive/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-32 right-32 w-40 h-40 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>
    </SlideWrapper>
  );
}
