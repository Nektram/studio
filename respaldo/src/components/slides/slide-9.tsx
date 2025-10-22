"use client";

import { SlideWrapper } from './slide-wrapper';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { AnimatedCounter } from '../animated-counter';
import { InvestmentPieChart } from '../investment-pie-chart';
import { TrendingUp, Calendar, DollarSign } from 'lucide-react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell } from 'recharts';
import { ChartContainer, ChartTooltipContent } from '@/components/ui/chart';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { useState } from 'react';

export function Slide9() {
  const [currentYear, setCurrentYear] = useState<1 | 3>(1);

  const year1Data = [
    { rubro: 'MRR', valor: 251388, color: 'hsl(var(--chart-1))' },
    { rubro: 'Comisiones', valor: 346500, color: 'hsl(var(--chart-2))' },
  ];

  // Año 3 ajustado a 500 restaurantes (10x de Año 1): total ~$5.98M manteniendo proporción Año 1 (~42% / ~58%)
  const year3Data = [
    { rubro: 'MRR', valor: 2513880, color: 'hsl(var(--chart-1))' },
    { rubro: 'Comisiones', valor: 3465000, color: 'hsl(var(--chart-2))' },
  ];

  const currentData = currentYear === 1 ? year1Data : year3Data;
  const currentTotal = currentYear === 1 ? 598000 : 5980000;
  const currentRestaurants = currentYear === 1 ? 50 : 500;

  return (
    <SlideWrapper>
      <div className="flex flex-col items-center gap-16 w-full max-w-7xl mx-auto px-8" style={{ transform: 'scale(1.05)' }}>
        {/* Header */}
        <div className="text-center space-y-4 animate-slide-fade-up opacity-0">
          <Badge variant="outline" className="px-4 py-2 text-base border-primary/20">
            <DollarSign className="mr-2 h-4 w-4 text-primary" />
            Inversión y Proyecciones
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold">
            <AnimatedCounter
              value={100000}
              formatter={(v) => `$${Math.round(v).toLocaleString('es-MX')}`}
              className="text-primary"
            />{' '}
            para Hacer Esto en Grande
          </h2>
        </div>

        {/* Sección proyección y controles */}
        <div className="w-full max-w-6xl animate-slide-fade-up opacity-0 delay-300">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Calendar className="h-6 w-6 text-primary" />
            <h3 className="text-3xl font-semibold">Proyección Financiera</h3>
          </div>

          <div className="flex justify-center gap-4 mb-8">
            <Badge
              variant={currentYear === 1 ? 'default' : 'outline'}
              className="text-lg px-6 py-2 cursor-pointer"
              onClick={() => setCurrentYear(1)}
            >
              Año 1
            </Badge>
            <Badge
              variant={currentYear === 3 ? 'default' : 'outline'}
              className="text-lg px-6 py-2 cursor-pointer"
              onClick={() => setCurrentYear(3)}
            >
              Año 3
            </Badge>
            <Button
              variant="outline"
              className="ml-6"
              onClick={() => window.dispatchEvent(new Event('openRevenueDetails'))}
            >
              Ver desglose detallado
            </Button>
          </div>

          {/* Grid principal: izquierda (donut), derecha (gráfica + métricas) */}
          <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] items-start gap-12 mb-10">
            {/* Izquierda: Donut pegado a la izquierda */}
            <div className="flex flex-col gap-6">
              <div className="w-full">
                <h4 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary" /> Uso de Fondos
                </h4>
                <div className="max-w-md self-start">
                  <InvestmentPieChart />
                </div>
              </div>
            </div>

            {/* Derecha: Gráfica de barras pegada a la derecha + métricas debajo */}
            <div className="w-full md:justify-self-end flex flex-col gap-6">
              <Card className="border-border/50 w-full">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">Desglose: Año {currentYear}</CardTitle>
                  <CardDescription className="text-center text-sm">Selecciona el período con los botones</CardDescription>
                </CardHeader>
                <CardContent>
                  <ChartContainer config={{}} className="mx-auto w-full">
                    <div style={{ width: '100%', height: 260 }}>
                      <ResponsiveContainer>
                        <BarChart data={currentData} margin={{ top: 16, right: 16, bottom: 16, left: 16 }}>
                          <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.2} />
                          <XAxis dataKey="rubro" tick={{ fontSize: 12, fontWeight: 600 }} axisLine={{ stroke: 'hsl(var(--border))' }} />
                          <YAxis
                            tickFormatter={(v) => (v >= 1000000 ? `$${(v / 1000000).toFixed(1)}M` : `$${(v / 1000).toFixed(0)}k`)}
                            tick={{ fontSize: 11 }}
                            axisLine={{ stroke: 'hsl(var(--border))' }}
                          />
                          <Tooltip cursor={{ fill: 'hsl(var(--muted))' }} content={<ChartTooltipContent />} />
                          <Bar dataKey="valor" radius={[8, 8, 0, 0]} animationDuration={700}>
                            {currentData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Bar>
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </ChartContainer>

                  {/* Desglose textual */}
                  <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                    <div className="space-y-1">
                      <p className="text-xs text-muted-foreground">MRR</p>
                      <p className="text-sm font-bold text-primary">
                        <AnimatedCounter
                          key={`mrr-${currentYear}`}
                          value={currentData[0].valor}
                          formatter={(v) => (v >= 1000000 ? `$${(v / 1000000).toFixed(2)}M` : `$${Math.round(v / 1000)}K`)}
                        />
                      </p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs text-muted-foreground">Comisiones</p>
                      <p className="text-sm font-bold text-primary">
                        <AnimatedCounter
                          key={`com-${currentYear}`}
                          value={currentData[1].valor}
                          formatter={(v) => (v >= 1000000 ? `$${(v / 1000000).toFixed(2)}M` : `$${Math.round(v / 1000)}K`)}
                        />
                      </p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs text-muted-foreground font-semibold">Total</p>
                      <p className="text-base font-black text-primary">
                        <AnimatedCounter
                          key={`sum-${currentYear}`}
                          value={currentTotal}
                          formatter={(v) => (v >= 1000000 ? `$${(v / 1000000).toFixed(1)}M` : `$${Math.round(v / 1000)}K`)}
                        />
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Métricas debajo del gráfico de barras */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="relative overflow-hidden border border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
                  <CardHeader className="text-center pb-3">
                    <CardDescription className="text-base">Restaurantes</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-5xl font-black text-primary transition-all duration-700">
                      <AnimatedCounter key={`rest-${currentYear}`} value={currentRestaurants} />
                    </p>
                  </CardContent>
                  <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
                </Card>

                <Card className="relative overflow-hidden border border-primary/20 bg-gradient-to-br from-primary/10 to-transparent">
                  <CardHeader className="text-center pb-3">
                    <CardDescription className="text-base">Ingresos Anuales</CardDescription>
                  </CardHeader>
                    <CardContent className="text-center">
                    <p className="text-5xl font-black text-primary transition-all duration-700">
                      <AnimatedCounter
                        key={`total-${currentYear}`}
                        value={currentTotal}
                        formatter={(v) => (v >= 1000000 ? `$${(v / 1000000).toFixed(1)}M` : `$${Math.round(v / 1000)}K`)}
                      />
                    </p>
                  </CardContent>
                  <div className="absolute -left-6 -bottom-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* Elementos flotantes de fondo */}
        <div className="absolute top-20 left-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>
    </SlideWrapper>
  );
}
