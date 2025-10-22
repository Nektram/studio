"use client";

import { SlideWrapper } from './slide-wrapper';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { Badge } from '../ui/badge';
import { TrendingUp, Code, DollarSign, Users, Heart } from 'lucide-react';

export function Slide10() {
  return (
    <SlideWrapper>
      <div className="flex flex-col items-center justify-center gap-16 w-full max-w-7xl mx-auto px-8" style={{ transform: 'scale(0.9)' }}>
        
        {/* Hero Statement */}
        <div className="text-center space-y-6 animate-slide-fade-up opacity-0">
          <Badge variant="outline" className="px-6 py-3 text-lg border-primary/30">
            <Heart className="mr-2 h-5 w-5 text-primary" />
            Impacto Real
          </Badge>
          <h2 className="text-6xl md:text-7xl font-extrabold leading-tight">
            No Es Solo un Negocio
          </h2>
          <p className="text-3xl max-w-5xl text-balance font-light">
            "Cada peso que ahorramos a un restaurante mexicano{' '}
            <span className="text-primary font-bold">se queda en México</span>,<br />
            no se va a Silicon Valley."
          </p>
        </div>

        {/* Key Metrics - Hero Numbers */}
        <div className="grid md:grid-cols-2 gap-8 w-full max-w-6xl animate-slide-fade-scale opacity-0 delay-200">
          <Card className="relative overflow-hidden border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-primary/10">
            <CardHeader className="text-center pb-2">
              <Badge variant="secondary" className="w-fit mx-auto mb-2">Año 1</Badge>
              <CardTitle className="text-2xl">50 Restaurantes</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-6xl font-black text-primary mb-2">$598K</p>
              <p className="text-lg text-muted-foreground">Ingresos anuales</p>
            </CardContent>
            <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
          </Card>

          <Card className="relative overflow-hidden border-2 border-primary/30 bg-gradient-to-br from-primary/10 to-primary/5">
            <CardHeader className="text-center pb-2">
              <Badge variant="secondary" className="w-fit mx-auto mb-2">Año 3</Badge>
              <CardTitle className="text-2xl">500 Restaurantes</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-6xl font-black text-primary mb-2">$6.0M</p>
              <p className="text-lg text-muted-foreground">Ingresos anuales</p>
            </CardContent>
            <div className="absolute -left-8 -bottom-8 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
          </Card>
        </div>

        {/* Validation Grid - Compact */}
        <div className="grid md:grid-cols-3 gap-6 w-full max-w-6xl animate-slide-parallax-left opacity-0 delay-300">
          <Card className="group hover-card border-border/50">
            <CardHeader className="text-center space-y-3 pb-4">
              <div className="mx-auto w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Code className="h-7 w-7 text-primary" />
              </div>
              <CardTitle className="text-xl">Técnico</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Next.js + app drivers lista. Pagos en noviembre. Stack probado.
              </p>
            </CardContent>
          </Card>

          <Card className="group hover-card border-border/50">
            <CardHeader className="text-center space-y-3 pb-4">
              <div className="mx-auto w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <DollarSign className="h-7 w-7 text-primary" />
              </div>
              <CardTitle className="text-xl">Financiero</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm text-muted-foreground leading-relaxed">
                MRR + comisiones. $598k año 1. Alto margen. Escalable.
              </p>
            </CardContent>
          </Card>

          <Card className="group hover-card border-border/50">
            <CardHeader className="text-center space-y-3 pb-4">
              <div className="mx-auto w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Users className="h-7 w-7 text-primary" />
              </div>
              <CardTitle className="text-xl">Operativo</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Red local. Onboarding simple. Soporte humano cercano.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Final CTA - Maximum Impact */}
        <div className="text-center space-y-8 animate-slide-fade-up opacity-0 delay-500">
          <div className="space-y-4">
            <h3 className="text-5xl md:text-6xl font-black leading-tight text-balance">
              <span className="text-primary">Mensualidad justa.</span> Comisiones cero. <span className="text-primary">Impacto nacional.</span>
            </h3>
            <p className="text-2xl text-muted-foreground font-light max-w-4xl mx-auto">
              Tecnología mexicana salvando restaurantes mexicanos.
            </p>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>
    </SlideWrapper>
  );
}
