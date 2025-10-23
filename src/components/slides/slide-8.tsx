"use client";

import { SlideWrapper } from './slide-wrapper';
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Lightbulb, Map, Network, Shield, DollarSign } from 'lucide-react';

export function Slide8() {
  return (
    <SlideWrapper>
  <div className="flex flex-col items-center gap-10 animate-slide-fade-up w-full" style={{ transform: 'scale(1.25)' }}>
        <h2 className="text-5xl md:text-6xl font-bold text-balance">
          ¿Por Qué las Plataformas No Hacen lo Mismo?
        </h2>
        <Card className="max-w-3xl animate-slide-fade-up opacity-0 delay-250">
          <CardHeader>
            <CardTitle className="text-xl font-normal">Objeción común: "Las grandes pueden contratar talento local y copiarlos".</CardTitle>
            <CardDescription className="text-base">
              Nuestro modelo sin comisión + SaaS, relaciones de barrio y operación integrada crean <span className="font-semibold">costos de cambio altos</span> y preferencia local que no se compran con presupuesto.
            </CardDescription>
          </CardHeader>
        </Card>
        <div className="w-full max-w-6xl">
            <h3 className="text-3xl font-semibold mb-5">Nuestras Defensas</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                <Card className="hover-card animate-slide-parallax-left opacity-0 delay-300 p-6">
                    <CardHeader>
                        <div className="w-20 h-20 mx-auto rounded-xl bg-primary/10 flex items-center justify-center">
                          <Map className="h-12 w-12 text-primary" />
                        </div>
                        <CardTitle className="text-3xl mt-4">Conocimiento Local</CardTitle>
                        <CardDescription className="text-base font-light">vs Empresas Extranjeras</CardDescription>
                    </CardHeader>
                </Card>
                <Card className="hover-card animate-slide-fade-scale opacity-0 delay-400 p-6">
                    <CardHeader>
                        <div className="w-20 h-20 mx-auto rounded-xl bg-primary/10 flex items-center justify-center">
                          <Network className="h-12 w-12 text-primary" />
                        </div>
                        <CardTitle className="text-3xl mt-4">Operación Integrada</CardTitle>
                         <CardDescription className="text-base font-light">Difícil de replicar</CardDescription>
                    </CardHeader>
                </Card>
                 <Card className="hover-card animate-slide-parallax-right opacity-0 delay-500 p-6">
                    <CardHeader>
                        <div className="w-20 h-20 mx-auto rounded-xl bg-primary/10 flex items-center justify-center">
                          <Shield className="h-12 w-12 text-primary" />
                        </div>
                        <CardTitle className="text-3xl mt-4">Red Local</CardTitle>
                         <CardDescription className="text-base font-light">Construida colonia por colonia</CardDescription>
                    </CardHeader>
                </Card>
                 <Card className="hover-card animate-slide-fade-up opacity-0 delay-600 p-6">
                    <CardHeader>
                        <div className="w-20 h-20 mx-auto rounded-xl bg-primary/10 flex items-center justify-center">
                          <DollarSign className="h-12 w-12 text-primary" />
                        </div>
                        <CardTitle className="text-3xl mt-4">Márgenes Altos</CardTitle>
                         <CardDescription className="text-base font-light">Costos operativos mínimos</CardDescription>
                    </CardHeader>
                </Card>
            </div>
        </div>
        <p className="mt-6 text-2xl text-muted-foreground italic text-balance font-light animate-slide-fade-up opacity-0 delay-700">
          "Una empresa gringa desde Estados Unidos no entiende el mercado como nosotros."
        </p>
      </div>
    </SlideWrapper>
  );
}
