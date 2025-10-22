"use client";

import { SlideWrapper } from './slide-wrapper';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { DollarSign, Percent, Package, Briefcase } from 'lucide-react';
import { AnimatedCounter } from '../animated-counter';

export function Slide5() {
  return (
    <SlideWrapper>
      <div className="flex flex-col items-center gap-12 w-full max-w-7xl mx-auto px-8 animate-slide-fade-up" style={{ transform: 'scale(1.35)' }}>
        <h2 className="text-6xl md:text-7xl font-bold animate-slide-fade-up opacity-0">Modelo Simple y Justo</h2>
        <div className="grid md:grid-cols-3 gap-8 w-full text-center">
          <Card className="hover-card animate-slide-parallax-left opacity-0 delay-200">
            <CardHeader>
              <div className="mx-auto w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                <DollarSign className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="mt-2 text-2xl">Suscripción</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-6xl font-extrabold">$400/mes</p>
              <p className="text-lg text-muted-foreground font-light">por restaurante</p>
            </CardContent>
          </Card>
          <Card className="hover-card animate-slide-fade-scale opacity-0 delay-300">
            <CardHeader>
              <div className="mx-auto w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                <Percent className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="mt-2 text-2xl">Comisiones</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-6xl font-extrabold">0%</p>
              <p className="text-lg text-muted-foreground font-light">al restaurante por pedido</p>
            </CardContent>
          </Card>
          <Card className="hover-card animate-slide-parallax-right opacity-0 delay-400">
            <CardHeader>
              <div className="mx-auto w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                <Package className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="mt-2 text-2xl">Paquetes Studio Mars</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-1 text-left text-sm md:text-base">
                <p><span className="font-semibold">Impulso</span> — $400/mes</p>
                <p><span className="font-semibold">Crecimiento</span> — $750/mes</p>
                <p><span className="font-semibold">Éxito Pro</span> — $999/mes</p>
                <p className="text-xs md:text-sm text-muted-foreground mt-2">
                  También desarrollamos proyectos one‑time: <span className="font-semibold">Ground Zero</span> ($10,500), <span className="font-semibold">Evolve Pro</span> ($16,500).
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
        {/* Bloque en dos columnas: Tarifa de servicio y Ahorro típico */}
        <div className="w-full max-w-6xl grid md:grid-cols-2 gap-8">
          <Card className="animate-slide-fade-up opacity-0 delay-500">
            <CardHeader>
              <CardTitle className="text-3xl text-center">Tarifa de servicio en checkout</CardTitle>
              <CardDescription className="text-center text-lg font-light">
                Transparente para el cliente y configurable por restaurante.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-center text-xl text-muted-foreground">
                Rango <span className="font-semibold">0%–2.54%</span> según método elegido: efectivo 0%, transferencia 1%, tarjeta 2.54%.
                El <span className="font-semibold">restaurante no paga comisiones por pedido</span>.
              </p>
              <p className="text-center text-xs text-muted-foreground mt-2">Pagos con tarjeta: inicio en noviembre (proyecciones)</p>
            </CardContent>
          </Card>

          {/* Ahorro típico con plataformas tradicionales (fórmula de proyección) */}
          <Card className="animate-slide-fade-up opacity-0 delay-600">
            <CardHeader>
              <CardTitle className="text-3xl text-center">Ahorro típico de un restaurante</CardTitle>
              <CardDescription className="text-center text-base font-light">
                10 pedidos/día × 25 días × $350 × 42% = lo que hoy se va en comisiones
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-5xl font-extrabold text-primary">
                <AnimatedCounter value={36750} formatter={(v) => `$${v.toLocaleString('es-MX')}/mes`} />
              </div>
              <div className="text-muted-foreground mt-2 text-lg">
                ≈ <span className="font-semibold">$441,000/año</span>
              </div>
              <p className="mt-3 inline-block px-3 py-1 rounded-lg border border-primary/30 bg-primary/10 text-primary font-semibold">
                Con nosotros: $400/mes (Impulso). Sin comisiones por pedido.
              </p>
            </CardContent>
          </Card>
        </div>

        <p className="mt-4 text-lg text-muted-foreground font-light animate-slide-fade-up opacity-0 delay-700">Ya funcionando en San Luis Potosí</p>
      </div>
    </SlideWrapper>
  );
}
