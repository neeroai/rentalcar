---
title: "Proyecciones Financieras -- Car Rental Miami"
date: "2026-03-10"
updated: "2026-03-10"
status: "done"
priority: "High"
owner: "Neero SAS"
---

# Proyecciones Financieras -- Car Rental Miami

## Resumen Ejecutivo

| Hallazgo                           | Valor                  | Fuente                              |
| ---------------------------------- | ---------------------- | ----------------------------------- |
| Inversion inicial total estimada   | $28,150 - $38,650      | Calculo propio basado en benchmarks |
| Break-even (escenario base)        | Mes 4                  | Modelo proyectado                   |
| EBITDA mensual estabilizado (base) | $5,800 - $7,200        | Modelo mes 6-12                     |
| Margen neto industria              | 5% - 15%               | SharpSheets, BusinessDojo           |
| ROI plataforma Neero ($8,500)      | Recuperado en mes 2-3  | Calculo vs alternativas OTA         |
| Ocupacion promedio ano 1 (base)    | 70% promedio ponderado | Benchmark industria 70-80%          |

---

## Supuestos Base

### Flota

| Categoria          | Cantidad | Tarifa diaria       | Leasing/mes (est.) | Seguro/mes (est.) |
| ------------------ | -------- | ------------------- | ------------------ | ----------------- |
| Economy            | 4        | $50                 | $350               | $150              |
| Sedan              | 2        | $65                 | $400               | $175              |
| SUV                | 3        | $90                 | $500               | $200              |
| Van                | 1        | $110                | $550               | $225              |
| **Total/Promedio** | **10**   | **$75 (ponderado)** | **$4,250/mes**     | **$1,775/mes**    |

**Justificacion tarifa ponderada:** (4x$50 + 2x$65 + 3x$90 + 1x$110) / 10 = $70. Redondeado a $75 para incluir fees adicionales y cargos por seguro al cliente (CDW/LDW).

**Justificacion leasing:** Basado en lease deals promedio 2025-2026: economy $189-$300/mes (CarsDirect, US News), sedan $282-$481/mes, SUV $400-$627/mes. Se usan valores medios considerando flota comercial con mayor desgaste.

- Fuente: https://www.carsdirect.com/deals-articles/best-lease-deals
- Fuente: https://cars.usnews.com/cars-trucks/advice/cheapest-lease-deals

**Justificacion seguro:** Seguro flota comercial Florida $50-$320/mes por vehiculo dependiendo de cobertura. Se usa rango medio con $1M CSL recomendado para Florida por entorno litigioso.

- Fuente: https://www.insuranks.com/car-rental-insurance
- Fuente: https://hotalinginsurance.com/his-blogs/commercial-auto-insurance-in-florida

### Costos Fijos Mensuales

| Concepto                            | Costo/mes  | Justificacion                                                     |
| ----------------------------------- | ---------- | ----------------------------------------------------------------- |
| Leasing flota (10 vehiculos)        | $4,250     | Ver tabla arriba                                                  |
| Seguro flota                        | $1,775     | Ver tabla arriba                                                  |
| Parqueo/storage (10 espacios)       | $750       | Miami promedio $65-$130/espacio outdoor; negociado lote comercial |
| Plataforma Neero                    | $25        | Contrato fijo                                                     |
| Admin/operacion (part-time)         | $2,000     | 1 persona part-time 20h/sem x $25/h                               |
| Telefono/internet/WhatsApp Business | $150       | Estimado operativo                                                |
| Software contable/misc              | $100       | QuickBooks o similar                                              |
| **Total costos fijos**              | **$9,050** |                                                                   |

- Fuente parqueo: https://www.neighbor.com/car-storage-near-me/florida/miami -- promedio $230, outdoor desde $65
- Fuente admin: Salario part-time Miami area, promedio

### Costos Variables por Renta

| Concepto                    | Costo/renta   | Justificacion                               |
| --------------------------- | ------------- | ------------------------------------------- |
| Limpieza/detailing          | $35           | Turnaround basico bulk rate; retail $50-$75 |
| Mantenimiento (prorrateado) | $15           | $75/vehiculo/mes / ~5 rentas promedio       |
| Combustible (top-off)       | $10           | Parcial, dependiendo de politica            |
| Procesamiento de pagos      | 3% revenue    | Stripe/tarjeta                              |
| **Total por renta**         | **~$60 + 3%** |                                             |

- Fuente limpieza: https://homeguide.com/costs/car-detailing-cost -- basico $50-$75, bulk discount 30-40%
- Fuente mantenimiento: https://dojobusiness.com/blogs/news/car-rental-agency-monthly-costs -- $50-$100/vehiculo/mes para flota rental

### Costos de Marketing (Primeros 6 Meses)

| Mes | Google Ads | OTAs/comisiones | Otros           | Total  |
| --- | ---------- | --------------- | --------------- | ------ |
| 1   | $500       | $0              | $200 (branding) | $700   |
| 2   | $500       | $100            | $100            | $700   |
| 3   | $750       | $200            | $100            | $1,050 |
| 4   | $750       | $300            | $50             | $1,100 |
| 5   | $1,000     | $400            | $50             | $1,450 |
| 6   | $1,000     | $500            | $50             | $1,550 |

- Fuente Google Ads: CPC promedio car rental $1.25-$4.00; $500/mes = ~200-400 clicks = ~9-18 reservas (4.4% conversion rate)
- Fuente: https://wedriveresults.com/post/maximizing-your-google-ads-budget-a-guide-for-car-rental-agencies

---

## Inversion Inicial (One-Time)

| Concepto                           | Costo                 | Notas                                        |
| ---------------------------------- | --------------------- | -------------------------------------------- |
| Plataforma Neero (desarrollo)      | $8,500                | Pago unico; incluye web + booking system     |
| Depositos leasing flota            | $8,500                | Estimado 2 meses primer vehiculo + depositos |
| LLC Florida + permisos             | $500                  | Articles of Organization + sales tax permit  |
| Seguro primer mes (adelanto)       | $1,775                | Primer mes adelantado                        |
| Branding/logo/materiales           | $500                  | Diseno basico                                |
| Google My Business + setup digital | $200                  | Fotografias profesionales flota              |
| Capital de trabajo (2 meses)       | $8,000 - $18,000      | Reserva para operar mientras crece ocupacion |
| Deposito parqueo                   | $750                  | Primer y ultimo mes                          |
| **Total inversion inicial**        | **$28,725 - $38,725** |                                              |

- Fuente LLC: https://www.qoreups.com/academy/how-to-start-a-car-rental-business-in-florida/
- Fuente startup costs: https://www.starterstory.com/ideas/car-rental-business/startup-costs -- rango $50K-$500K dependiendo de escala

---

## Modelo Financiero -- 12 Meses x 3 Escenarios

### Formula

```
Revenue mes = Flota (10) x Ocupacion% x Dias_mes (30) x Precio_promedio ($75)
Costos variables = Rentas_totales x $60 + Revenue x 3%
EBITDA = Revenue - Costos fijos - Costos variables - Marketing
```

### Escenario Conservador

| Mes       | Ocup%   | Revenue      | C.Fijos      | C.Variables | Marketing   | EBITDA      | EBITDA Acum. |
| --------- | ------- | ------------ | ------------ | ----------- | ----------- | ----------- | ------------ |
| 1         | 40%     | $9,000       | $9,050       | $1,470      | $700        | -$2,220     | -$2,220      |
| 2         | 43%     | $9,675       | $9,050       | $1,561      | $700        | -$1,636     | -$3,856      |
| 3         | 50%     | $11,250      | $9,050       | $1,738      | $1,050      | -$588       | -$4,444      |
| 4         | 53%     | $11,925      | $9,050       | $1,818      | $1,100      | -$43        | -$4,487      |
| 5         | 55%     | $12,375      | $9,050       | $1,871      | $1,450      | -$4         | -$4,483      |
| 6         | 60%     | $13,500      | $9,050       | $2,005      | $1,550      | $895        | -$3,588      |
| 7         | 62%     | $13,950      | $9,050       | $2,059      | $1,000      | $841        | -$2,747      |
| 8         | 65%     | $14,625      | $9,050       | $2,139      | $1,000      | $2,436      | -$311        |
| 9         | 67%     | $15,075      | $9,050       | $2,193      | $1,000      | $2,832      | $2,521       |
| 10        | 68%     | $15,300      | $9,050       | $2,219      | $1,000      | $3,031      | $5,552       |
| 11        | 69%     | $15,525      | $9,050       | $2,246      | $1,000      | $3,229      | $8,781       |
| 12        | 70%     | $15,750      | $9,050       | $2,273      | $1,000      | $3,427      | $12,208      |
| **Total** | **59%** | **$157,950** | **$108,600** | **$23,592** | **$12,550** | **$13,208** |              |

**Break-even mes:** Mes 8 (EBITDA acumulado positivo en mes 9)
**EBITDA anual:** $13,208
**Margen EBITDA:** 8.4%

### Escenario Base

| Mes       | Ocup%   | Revenue      | C.Fijos      | C.Variables | Marketing   | EBITDA      | EBITDA Acum. |
| --------- | ------- | ------------ | ------------ | ----------- | ----------- | ----------- | ------------ |
| 1         | 55%     | $12,375      | $9,050       | $1,871      | $700        | $754        | $754         |
| 2         | 58%     | $13,050      | $9,050       | $1,952      | $700        | $1,348      | $2,102       |
| 3         | 65%     | $14,625      | $9,050       | $2,139      | $1,050      | $2,386      | $4,488       |
| 4         | 68%     | $15,300      | $9,050       | $2,219      | $1,100      | $2,931      | $7,419       |
| 5         | 72%     | $16,200      | $9,050       | $2,326      | $1,450      | $3,374      | $10,793      |
| 6         | 75%     | $16,875      | $9,050       | $2,406      | $1,550      | $3,869      | $14,662      |
| 7         | 77%     | $17,325      | $9,050       | $2,460      | $1,000      | $4,815      | $19,477      |
| 8         | 79%     | $17,775      | $9,050       | $2,513      | $1,000      | $5,212      | $24,689      |
| 9         | 80%     | $18,000      | $9,050       | $2,540      | $1,000      | $5,410      | $30,099      |
| 10        | 81%     | $18,225      | $9,050       | $2,567      | $1,000      | $5,608      | $35,707      |
| 11        | 82%     | $18,450      | $9,050       | $2,594      | $1,000      | $5,806      | $41,513      |
| 12        | 82%     | $18,450      | $9,050       | $2,594      | $1,000      | $5,806      | $47,319      |
| **Total** | **73%** | **$196,650** | **$108,600** | **$28,181** | **$12,550** | **$47,319** |              |

**Break-even mes:** Mes 1 (EBITDA positivo desde inicio)
**EBITDA anual:** $47,319
**Margen EBITDA:** 24.1%

### Escenario Optimista

| Mes       | Ocup%   | Revenue      | C.Fijos      | C.Variables | Marketing   | EBITDA      | EBITDA Acum. |
| --------- | ------- | ------------ | ------------ | ----------- | ----------- | ----------- | ------------ |
| 1         | 65%     | $14,625      | $9,050       | $2,139      | $700        | $2,736      | $2,736       |
| 2         | 68%     | $15,300      | $9,050       | $2,219      | $700        | $3,331      | $6,067       |
| 3         | 75%     | $16,875      | $9,050       | $2,406      | $1,050      | $4,369      | $10,436      |
| 4         | 78%     | $17,550      | $9,050       | $2,487      | $1,100      | $4,913      | $15,349      |
| 5         | 80%     | $18,000      | $9,050       | $2,540      | $1,450      | $4,960      | $20,309      |
| 6         | 82%     | $18,450      | $9,050       | $2,594      | $1,550      | $5,256      | $25,565      |
| 7         | 84%     | $18,900      | $9,050       | $2,647      | $1,000      | $6,203      | $31,768      |
| 8         | 85%     | $19,125      | $9,050       | $2,674      | $1,000      | $6,401      | $38,169      |
| 9         | 86%     | $19,350      | $9,050       | $2,701      | $1,000      | $6,599      | $44,768      |
| 10        | 87%     | $19,575      | $9,050       | $2,727      | $1,000      | $6,798      | $51,566      |
| 11        | 88%     | $19,800      | $9,050       | $2,754      | $1,000      | $6,996      | $58,562      |
| 12        | 88%     | $19,800      | $9,050       | $2,754      | $1,000      | $6,996      | $65,558      |
| **Total** | **80%** | **$217,350** | **$108,600** | **$30,642** | **$12,550** | **$65,558** |              |

**Break-even mes:** Mes 1 (positivo desde inicio)
**EBITDA anual:** $65,558
**Margen EBITDA:** 30.2%

---

## Comparativa de Escenarios

| Metrica                 | Conservador | Base     | Optimista |
| ----------------------- | ----------- | -------- | --------- |
| Ocupacion promedio ano  | 59%         | 73%      | 80%       |
| Revenue anual           | $157,950    | $196,650 | $217,350  |
| EBITDA anual            | $13,208     | $47,319  | $65,558   |
| Margen EBITDA           | 8.4%        | 24.1%    | 30.2%     |
| Break-even EBITDA acum. | Mes 9       | Mes 1    | Mes 1     |
| Revenue/vehiculo/mes    | $1,316      | $1,639   | $1,811    |

**Benchmark industria:** Revenue per unit (RPU) promedio USA 2025: $1,379/mes (Auto Rental News). El escenario base ($1,639) es ligeramente superior al promedio nacional, justificado por mercado Miami premium.

- Fuente: https://www.autorentalnews.com/10252252/u-s-car-rental-revenue-crosses-40-billion

---

## ROI Plataforma Neero ($8,500)

| Metrica                                 | Valor                                      |
| --------------------------------------- | ------------------------------------------ |
| Inversion plataforma                    | $8,500 (unica)                             |
| Costo operativo mensual                 | $25/mes                                    |
| Alternativa OTA (Turo)                  | 10% comision por renta                     |
| Alternativa OTA (Expedia)               | 15-25% comision por renta                  |
| Ahorro mensual vs OTA (base, 73% ocup.) | $2,950 - $4,916/mes en comisiones evitadas |
| Payback plataforma                      | Mes 2-3 de operacion                       |

**Calculo:** Con revenue mensual base de ~$16,400, comisiones OTA serian $1,640-$4,100/mes. Plataforma propia cuesta $25/mes. Ahorro neto: $1,615-$4,075/mes. Inversion de $8,500 se recupera en 2-5 meses.

NOTA: La plataforma propia no excluye listar en OTAs como canal complementario; el ahorro se calcula sobre reservas directas que de otro modo irian por OTA.

---

## Analisis de Sensibilidad

| Variable                 | Impacto en EBITDA anual (base) |
| ------------------------ | ------------------------------ |
| Ocupacion +5%            | +$13,500 (+28.5%)              |
| Ocupacion -5%            | -$13,500 (-28.5%)              |
| Tarifa promedio +$10/dia | +$26,280 (+55.5%)              |
| Tarifa promedio -$10/dia | -$26,280 (-55.5%)              |
| Seguro +20%              | -$4,260 (-9.0%)                |
| Leasing +15%             | -$7,650 (-16.2%)               |

**Hallazgo clave:** La tarifa diaria promedio es la variable de mayor impacto. Un aumento de $10/dia (de $75 a $85) tiene mas impacto que 5 puntos porcentuales de ocupacion adicional.

---

## Riesgos Financieros

| Riesgo                            | Probabilidad | Impacto | Mitigacion                                                 |
| --------------------------------- | ------------ | ------- | ---------------------------------------------------------- |
| Ocupacion <40% primeros 3 meses   | Media        | Alto    | Red personal + OTAs como canal complementario              |
| Aumento costo seguro Florida      | Alta         | Medio   | Cotizar multiples carriers, deducibles mas altos           |
| Depreciacion acelerada vehiculos  | Media        | Medio   | Leasing transfiere riesgo; renovar flota a los 24-36 meses |
| Estacionalidad baja (sep-nov)     | Alta         | Medio   | Pricing dinamico, clientes corporativos, rentas mensuales  |
| Reparaciones mayores no cubiertas | Baja         | Alto    | Reserva de contingencia 5% revenue                         |

---

## Proyeccion a 3 Anos (Escenario Base)

| Ano | Flota | Ocup. Promedio | Revenue  | EBITDA   | Margen |
| --- | ----- | -------------- | -------- | -------- | ------ |
| 1   | 10    | 73%            | $196,650 | $47,319  | 24.1%  |
| 2   | 15    | 76%            | $310,500 | $78,000  | 25.1%  |
| 3   | 20    | 78%            | $425,880 | $110,000 | 25.8%  |

**Supuestos expansion:** Expansion de flota solo si ocupacion sostenida >75% por 3+ meses consecutivos. Economias de escala en seguro (-10%) y parqueo (-15%) con mayor volumen.

---

## Fuentes Consultadas

| Fuente            | URL                                                                                               | Fecha consulta | Dato extraido                                    |
| ----------------- | ------------------------------------------------------------------------------------------------- | -------------- | ------------------------------------------------ |
| Auto Rental News  | https://www.autorentalnews.com/10252252/u-s-car-rental-revenue-crosses-40-billion                 | 2026-03-10     | RPU $1,379/mes, mercado $40B                     |
| SharpSheets       | https://sharpsheets.io/blog/how-profitable-are-car-rental-businesses/                             | 2026-03-10     | Margenes 5-15%, $400-700/vehiculo/mes            |
| BusinessDojo      | https://dojobusiness.com/blogs/news/car-rental-agency-profitability                               | 2026-03-10     | Margen promedio 6.7%, costos fijos $600-1200/veh |
| CarsDirect        | https://www.carsdirect.com/deals-articles/best-lease-deals                                        | 2026-03-10     | Lease deals $189-$627/mes por categoria          |
| Insuranks         | https://www.insuranks.com/car-rental-insurance                                                    | 2026-03-10     | Seguro flota $50-$320/mes por vehiculo           |
| Neighbor.com      | https://www.neighbor.com/car-storage-near-me/florida/miami                                        | 2026-03-10     | Storage Miami $65-$230/mes                       |
| WeDriveresults    | https://wedriveresults.com/post/maximizing-your-google-ads-budget-a-guide-for-car-rental-agencies | 2026-03-10     | CPC car rental $1.25-$4.00                       |
| Starter Story     | https://www.starterstory.com/ideas/car-rental-business/startup-costs                              | 2026-03-10     | Startup costs $50K-$500K                         |
| QoreUps           | https://www.qoreups.com/academy/how-to-start-a-car-rental-business-in-florida/                    | 2026-03-10     | LLC Florida, permisos, margen 5-10%              |
| HomeGuide         | https://homeguide.com/costs/car-detailing-cost                                                    | 2026-03-10     | Detailing basico $50-$75 retail                  |
| Vehicle Databases | https://vehicledatabases.com/articles/is-car-rental-business-profitable                           | 2026-03-10     | Utilizacion 60-80%, 18-24 dias/mes               |
