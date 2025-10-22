"use client";

import { SlideWrapper } from './slide-wrapper';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { AnimatedCounter } from '../animated-counter';
import { Badge } from '../ui/badge';
import { DollarSign, Info, Calendar, CheckCircle2 } from 'lucide-react';
import { Button } from '../ui/button';

export function SlideYear1Rationale() {
  return (
    <SlideWrapper>
      <div className="flex flex-col items-center gap-10 w-full max-w-6xl mx-auto px-4 py-6" style={{ transform: 'scale(0.95)' }}>
        <div className="text-center space-y-3">
          <Badge variant="outline" className="px-4 py-2 text-base border-primary/20">
            <DollarSign className="mr-2 h-4 w-4 text-primary" />
            ¿Cómo se componen los $598K del Año 1?
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold">Modelo Híbrido: MRR + Comisiones</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 w-full">
          {/* MRR */}
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" /> MRR Suscripciones
              </CardTitle>
              <CardDescription>48 Impulso ($400) + 1 Crecimiento ($750) + 1 Éxito Pro ($999)</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline gap-3">
                <p className="text-5xl font-black text-primary">
                  <AnimatedCounter value={251388} formatter={(v)=>`$${Math.round(v).toLocaleString('es-MX')}`} />
                </p>
                <span className="text-muted-foreground">/año</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">= $20,949/mes × 12</p>
            </CardContent>
          </Card>

          {/* Comisiones */}
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Info className="h-5 w-5 text-primary" /> Comisiones por Transacción
              </CardTitle>
              <CardDescription>Las paga el cliente final (promedio ponderado 1.32%)</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline gap-3">
                <p className="text-5xl font-black text-primary">
                  <AnimatedCounter value={346500} formatter={(v)=>`$${Math.round(v).toLocaleString('es-MX')}`} />
                </p>
                <span className="text-muted-foreground">/año</span>
              </div>
              <ul className="mt-3 text-sm text-muted-foreground list-disc pl-5 space-y-1">
                <li>Supuestos: 50 rest × 5 órdenes/día × 25 días × $350 × 1.32%</li>
                <li>Mix realista: 40% tarjeta (2.54%), 30% transferencia (1%), 30% efectivo (0%)</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Total */}
        <Card className="w-full border-primary/30 bg-gradient-to-br from-primary/5 to-transparent">
          <CardHeader>
            <CardTitle className="text-2xl">Total Año 1 (50 restaurantes)</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center gap-3">
            <p className="text-6xl font-black text-primary">
              <AnimatedCounter value={598000} formatter={(v)=>`$${Math.round(v).toLocaleString('es-MX')}`} />
            </p>
            <p className="text-sm text-muted-foreground">$251,388 (MRR) + $346,500 (comisiones)</p>
            <div className="text-xs text-left text-muted-foreground mt-2">
              <p className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Efectivo: 0% comisión</p>
              <p className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Transferencia: 1% lo aporta el cliente</p>
              <p className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Tarjeta: 2.54% retenido vía Stripe Connect</p>
            </div>
            <Button variant="outline" className="mt-2" onClick={() => window.dispatchEvent(new Event('closeRevenueDetails'))}>
              Entendido
            </Button>
          </CardContent>
        </Card>
      </div>
    </SlideWrapper>
  );
}
