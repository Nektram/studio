"use client";

import { SlideWrapper } from './slide-wrapper';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { FileText, ArrowLeftCircle } from 'lucide-react';

export function SlideRevenueDetails() {
  const goBackToSlide9 = () => {
    window.dispatchEvent(new Event('closeRevenueDetails'));
  };

  return (
    <SlideWrapper>
      <div className="w-full h-full flex flex-col items-center justify-center gap-8 px-8">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary">
            <FileText className="h-4 w-4" />
            Anexo Financiero
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">💰 Flujo de Ingresos Compuesto</h2>
        </div>

        <Card className="max-w-5xl w-full border-primary/20">
          <CardHeader>
            <CardTitle className="text-2xl">Ejemplo con 50 restaurantes (Año 1)</CardTitle>
          </CardHeader>
          <CardContent className="text-lg leading-relaxed">
            <div className="space-y-6">
              <div>
                <p className="font-semibold mb-2">MRR Suscripciones:</p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>48 en Impulso ($400) = $19,200/mes</li>
                  <li>1 en Crecimiento ($750) = $750/mes (~3% de 50 ≈ 1-2 restaurantes)</li>
                  <li>1 en Éxito Pro ($999) = $999/mes (~1% de 50 ≈ 0-1 restaurante)</li>
                  <li className="font-semibold text-foreground">Total MRR: $20,949/mes = <span className="text-primary font-bold">$251,388/año</span></li>
                </ul>
              </div>

              <div>
                <p className="font-semibold mb-2">Comisiones Transaccionales:</p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Cálculo: 50 rest × 5 órdenes/día × 25 días × $350 MXN ticket × 0.0132 (1.32%)</li>
                  <li className="font-semibold text-foreground">50 × 5 × 25 × 350 × 0.0132 = $28,875/mes = <span className="text-primary font-bold">$346,500/año</span></li>
                  <li>Nota: 1.32% = 0.0132 es el promedio ponderado (40% tarjeta 2.54%, 30% transfer 1%, 30% efectivo 0%)</li>
                </ul>
              </div>

              <div>
                <p className="font-semibold mb-1">Ingreso Total Año 1:</p>
                <p className="text-foreground text-xl font-bold">$251k (MRR) + $346k (comisiones) = <span className="text-primary">$598,000 MXN</span></p>
              </div>

              <div className="text-muted-foreground">
                <p>Entre más restaurantes sumemos = más MRR</p>
                <p>Entre más vendan = más comisiones</p>
                <p className="font-semibold text-foreground">¡Todos ganan, nosotros también!</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div>
          <Button variant="outline" size="lg" onClick={goBackToSlide9} className="gap-2">
            <ArrowLeftCircle className="h-5 w-5" />
            Volver a Slide 9
          </Button>
        </div>
      </div>
    </SlideWrapper>
  );
}
