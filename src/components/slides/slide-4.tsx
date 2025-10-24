"use client";

import { SlideWrapper } from './slide-wrapper';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Wallet, Users, ShieldCheck, Sparkles, Globe, CheckCircle2 } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import { useState } from 'react';

export function Slide4() {
  const [open, setOpen] = useState(false);

  return (
    <SlideWrapper>
      <div className="flex flex-col items-center gap-8 w-full max-w-7xl mx-auto px-8 animate-slide-fade-up" style={{ transform: 'scale(1.2)' }}>
        <div className="text-center space-y-4 animate-slide-fade-up opacity-0">
          <Badge variant="outline" className="px-4 py-2 text-lg border-primary/20">
            <Sparkles className="mr-2 h-4 w-4 text-primary" />
            Beneficios Completos
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold">
            Todo lo que <span className="text-primary">incluimos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Plataforma completa con todo lo necesario para tu éxito
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 w-full animate-slide-fade-up opacity-0 delay-300">
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Card className="group relative overflow-hidden border-2 border-primary/50 hover-card cursor-pointer transition-all hover:scale-105 hover:border-primary shadow-lg hover:shadow-xl">
                <CardHeader className="relative text-center space-y-3">
                  <div className="mx-auto w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Globe className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Micrositio Profesional</CardTitle>
                </CardHeader>
                <CardContent className="relative text-center space-y-2">
                  <p className="text-sm text-foreground/80 font-medium">
                    tuRestaurante.studio-mars.net con menú digital, pedidos online y WhatsApp
                  </p>
                  <Badge variant="default" className="text-xs">Incluido · Ver detalles</Badge>
                </CardContent>
              </Card>
            </DialogTrigger>
            <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-3xl flex items-center gap-2">
                  <Globe className="h-8 w-8 text-primary" />
                  Micrositio Profesional Incluido
                </DialogTitle>
                <DialogDescription className="text-lg pt-2">
                  Cada restaurante recibe un sitio web profesional personalizado{' '}
                  <span className="text-primary font-semibold">tuRestaurante.studio-mars.net</span>
                </DialogDescription>
              </DialogHeader>
              
              <div className="space-y-6 py-4">
                <div>
                  <h4 className="text-xl font-semibold mb-4">¿Qué incluye?</h4>
                  <div className="grid gap-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Diseño profesional responsive</p>
                        <p className="text-sm text-muted-foreground">Con la identidad del restaurante</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Menú digital completo</p>
                        <p className="text-sm text-muted-foreground">Con fotos, descripciones y precios</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Sistema de pedidos en línea</p>
                        <p className="text-sm text-muted-foreground">Con WhatsApp directo</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">WhatsApp directo</p>
                        <p className="text-sm text-muted-foreground">Para consultas y pedidos</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Información de delivery</p>
                        <p className="text-sm text-muted-foreground">Con mapas de cobertura</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Métodos de pago y horarios</p>
                        <p className="text-sm text-muted-foreground">De atención completos</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Integración con redes sociales</p>
                        <p className="text-sm text-muted-foreground">Del restaurante</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">SEO local optimizado</p>
                        <p className="text-sm text-muted-foreground">Para aparecer en búsquedas de Google</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 space-y-2">
                  <p className="font-semibold text-lg">Un canal de ventas adicional 24/7</p>
                  <p className="text-sm">
                    Esto no es solo un sitio web bonito - es un <span className="font-semibold text-primary">canal de ventas adicional</span> que funciona 24/7. 
                    Los restaurantes pueden vender directamente sin depender de las apps de delivery.
                  </p>
                </div>

                <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                  <p className="text-sm font-medium text-green-400">
                    💰 El costo de desarrollo de un sitio así normalmente es de <span className="font-bold">$15,000-$30,000</span>, 
                    pero nosotros lo incluimos <span className="font-bold">gratis</span> en nuestros planes desde $400/mes.
                  </p>
                </div>
              </div>
            </DialogContent>
          </Dialog>

          <Card className="group relative overflow-hidden border-2 border-primary/40 hover-card transition-all hover:scale-105 hover:border-primary/60 shadow-lg">
            <CardHeader className="relative text-center space-y-3">
              <div className="mx-auto w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                <Wallet className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-xl">Pagos Flexibles</CardTitle>
            </CardHeader>
            <CardContent className="relative text-center space-y-2">
              <p className="text-sm text-foreground/80 font-medium">
                Efectivo, transferencia y tarjeta
              </p>
              <div className="bg-primary/10 border border-primary/30 rounded-lg p-2">
                <p className="text-xs text-primary font-semibold">Cliente: 1.32% checkout</p>
                <p className="text-xs text-muted-foreground">vs 7-8% competencia</p>
              </div>
            </CardContent>
          </Card>

          <Card className="group relative overflow-hidden border-2 border-primary/40 hover-card transition-all hover:scale-105 hover:border-primary/60 shadow-lg">
            <CardHeader className="relative text-center space-y-3">
              <div className="mx-auto w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-xl">Repartidores Locales</CardTitle>
            </CardHeader>
            <CardContent className="relative text-center space-y-2">
              <p className="text-sm text-foreground/80 font-medium">
                Conexión directa con repartidores independientes de la zona
              </p>
              <Badge variant="outline" className="text-xs border-primary/30">Verificados</Badge>
            </CardContent>
          </Card>

          <Card className="group relative overflow-hidden border-2 border-primary/40 hover-card transition-all hover:scale-105 hover:border-primary/60 shadow-lg">
            <CardHeader className="relative text-center space-y-3">
              <div className="mx-auto w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                <ShieldCheck className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-xl">Totalmente Legal</CardTitle>
            </CardHeader>
            <CardContent className="relative text-center space-y-2">
              <p className="text-sm text-foreground/80 font-medium">
                Proceso de registro RESICO en marcha
              </p>
              <Badge variant="outline" className="text-xs border-green-500/30 text-green-400">
                Cumplimiento Legal
              </Badge>
            </CardContent>
          </Card>
        </div>

        <div className="w-full max-w-5xl animate-slide-fade-up opacity-0 delay-900">
          <Card className="border border-primary/20 bg-primary/5">
            <CardContent className="py-6 px-8">
              <p className="text-2xl font-semibold text-center mb-6">
                3 Planes <span className="text-primary">Flexibles</span>
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center space-y-1">
                  <Badge variant="secondary" className="text-xs">Emprendiendo</Badge>
                  <p className="text-2xl font-bold text-primary">$400<span className="text-sm text-muted-foreground">/mes</span></p>
                  <p className="text-xs text-muted-foreground">Volumen bajo</p>
                </div>
                <div className="text-center space-y-1 border-x border-primary/20 px-2">
                  <Badge variant="default" className="text-xs">Popular</Badge>
                  <p className="text-2xl font-bold text-primary">$750<span className="text-sm text-muted-foreground">/mes</span></p>
                  <p className="text-xs text-muted-foreground">En expansión</p>
                </div>
                <div className="text-center space-y-1">
                  <Badge variant="secondary" className="text-xs">Premium</Badge>
                  <p className="text-2xl font-bold text-primary">$999<span className="text-sm text-muted-foreground">/mes</span></p>
                  <p className="text-xs text-muted-foreground">Alto volumen</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="animate-slide-fade-up opacity-0 delay-1000">
          <Card className="border border-green-500/20 bg-green-500/5">
            <CardContent className="py-3 px-6 flex items-center gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              <p className="text-lg font-medium text-green-400">
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
