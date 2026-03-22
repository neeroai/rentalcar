---
title: "Modelo de Negocio — Car Rental Miami"
date: "2026-03-10"
updated: "2026-03-10"
status: "done"
priority: "High"
owner: "Neero SAS"
---

# Modelo de Negocio -- Car Rental Miami

## Resumen Ejecutivo

| Hallazgo                              | Valor                        | Fuente                           |
| ------------------------------------- | ---------------------------- | -------------------------------- |
| Margen operativo tipico independiente | 5-15% neto, 30-50% bruto     | SharpSheets 2024, BusinessDojo   |
| Seguro flota por vehiculo/ano (FL)    | $3,000-$4,000+               | Insureon, Progressive            |
| Mantenimiento por vehiculo/ano        | $720-$2,400 (segun edad)     | OxMaint 2025, SimplyFleet        |
| Break-even ocupacion                  | 60% minimo, 70%+ recomendado | FinancialModelsLab, BusinessDojo |
| LLC Florida costo total anual         | $125 formacion + $138.75/ano | Florida Dept of State (Sunbiz)   |

---

## 1. Estructura Legal

### LLC Florida -- Costos

| Concepto                     | Costo     | Frecuencia                 | Fuente                      |
| ---------------------------- | --------- | -------------------------- | --------------------------- |
| Articles of Organization     | $100      | Una vez                    | dos.fl.gov/sunbiz           |
| Registered Agent designation | $25       | Una vez                    | dos.fl.gov/sunbiz           |
| Annual Report                | $138.75   | Anual (antes May 1)        | dos.fl.gov/sunbiz           |
| Late penalty                 | $400      | Si no se presenta a tiempo | dos.fl.gov/sunbiz           |
| Registered Agent (tercero)   | $100-$300 | Anual (opcional)           | ZenBusiness, BusinessRocket |
| Name Reservation             | $25       | Una vez (120 dias)         | dos.fl.gov/sunbiz           |

**Total formacion**: ~$125 | **Mantenimiento anual**: $138.75-$438.75

**Nota fiscal**: Florida NO tiene state income tax. Single-member LLC reporta en personal tax return federal. (Fuente: ZenBusiness 2025)

### Licencias y Permisos Requeridos

| Licencia                               | Requisito                            | Costo estimado    | Fuente                  |
| -------------------------------------- | ------------------------------------ | ----------------- | ----------------------- |
| Sales Tax Permit (DR-1)                | Obligatorio para cobrar sales tax    | Gratis (registro) | Florida Dept of Revenue |
| Rental Car Surcharge Permit            | $2/dia por vehiculo, remitir al DOR  | Registro gratuito | FL Statute 212.0606     |
| Motor Vehicle Rental Insurance License | Para vender CDW/LDW a clientes       | Variable          | FL Statute 626.321(d)   |
| Local Business Tax Receipt             | Miami-Dade County                    | ~$50-$300/ano     | miamidade.gov           |
| Zoning Permit                          | Para ubicacion fisica de operaciones | Variable          | Municipio local         |

---

## 2. Revenue Streams

### Ingresos por Tipo de Renta

| Tipo                             | Tarifa promedio                | % Revenue estimado | Fuente                |
| -------------------------------- | ------------------------------ | ------------------ | --------------------- |
| Diario (turistas)                | $50-$70 economia, $80-$150 SUV | 40-50%             | QoreUps, StarterStory |
| Semanal (turistas extended)      | $250-$600                      | 25-30%             | VehicleDatabases      |
| Mensual (residentes/corporativo) | $720-$1,680 economia           | 15-20%             | QoreUps               |
| Corporativo (contratos)          | Negociado, descuento 15-25%    | 5-10%              | Benchmark industria   |

### Ingresos Ancillares (Alto Margen)

| Servicio                    | Ingreso por renta  | Margen | Fuente                          |
| --------------------------- | ------------------ | ------ | ------------------------------- |
| CDW/LDW (seguro dano)       | $15-$30/dia        | 80-90% | SharpSheets, FinancialModelsLab |
| GPS addon                   | $5-$10/dia         | 85%+   | Benchmark industria             |
| Conductor adicional         | $10-$15/dia        | 90%+   | Benchmark industria             |
| Silla bebe/child seat       | $5-$10/dia         | 85%+   | Benchmark industria             |
| Late return fee             | $25-$50 por evento | 100%   | Benchmark industria             |
| Fuel service (tanque lleno) | $30-$60 por evento | 40-60% | Benchmark industria             |

**Nota**: Los add-ons de seguros (CDW/LDW) son el revenue ancillar de mayor margen en la industria: 80-90% profit margin. (Fuente: SharpSheets 2024)

---

## 3. Estructura de Costos

### Costos Fijos Mensuales (Flota 15 vehiculos)

| Concepto                        | Costo/vehiculo/mes | Total flota/mes    | Fuente                          |
| ------------------------------- | ------------------ | ------------------ | ------------------------------- |
| Seguro comercial flota          | $250-$333          | $3,750-$5,000      | Insureon FL, Progressive        |
| Parqueo/storage Miami           | $150-$250          | $2,250-$3,750      | Neighbor.com, Spacer Miami      |
| Depreciacion vehiculo           | ~$200-$400         | $3,000-$6,000      | InvestorCampus (30% del costo)  |
| Software/plataforma Neero       | --                 | $25/mes operativo  | proposals/05-investment-roi.md  |
| LLC Annual Report (prorrateado) | --                 | ~$12/mes           | dos.fl.gov/sunbiz               |
| General Liability Insurance     | --                 | $38-$83/mes        | Insuranks (avg $450-$1,000/ano) |
| **Subtotal fijos**              | --                 | **$9,075-$14,845** | --                              |

### Costos Variables por Vehiculo

| Concepto                  | Costo/vehiculo/ano | Costo/vehiculo/mes | Fuente                    |
| ------------------------- | ------------------ | ------------------ | ------------------------- |
| Mantenimiento (1-2 anos)  | $720-$960          | $60-$80            | OxMaint 2025, SimplyFleet |
| Mantenimiento (3-5 anos)  | $1,080-$2,400      | $90-$200           | OxMaint 2025, SimplyFleet |
| Llantas (reemplazo)       | ~$1,000/ano        | ~$83               | OxMaint 2025              |
| Limpieza/detailing        | ~$600-$1,200/ano   | $50-$100           | Benchmark industria       |
| Marketing (5-10% revenue) | --                 | Variable           | FinancialModelsLab        |

### Impuestos y Surcharges (Se cobran al cliente)

| Impuesto                 | Tasa        | Nota                        | Fuente              |
| ------------------------ | ----------- | --------------------------- | ------------------- |
| Florida Sales Tax        | 6%          | Sobre tarifa de renta       | FL Dept of Revenue  |
| Miami-Dade County Surtax | 1%          | Adicional al state tax      | miamidade.gov       |
| Rental Car Surcharge     | $2/dia      | Primeros 30 dias del rental | FL Statute 212.0606 |
| **Total tax efectivo**   | 7% + $2/dia | Se transfiere al cliente    | --                  |

---

## 4. Margenes por Categoria de Vehiculo

### Proyeccion de Margen Diario (70% utilizacion)

| Categoria                    | Tarifa/dia | Costos variables/dia | Margen bruto/dia | Margen % |
| ---------------------------- | ---------- | -------------------- | ---------------- | -------- |
| Economia (Corolla, Civic)    | $55        | $15-$20              | $35-$40          | 64-73%   |
| SUV Compacto (RAV4, CRV)     | $85        | $20-$25              | $60-$65          | 71-76%   |
| SUV Full (Highlander, Pilot) | $120       | $25-$30              | $90-$95          | 75-79%   |
| Premium (BMW, Mercedes)      | $180       | $35-$45              | $135-$145        | 75-81%   |

**Nota**: Margen bruto alto, pero despues de costos fijos (seguro, depreciacion, parking), margen neto tipico: 5-15%. (Fuente: SharpSheets 2024, BusinessDojo)

---

## 5. Modelo de Garantias y Depositos

### Estructura de Depositos por Categoria

| Categoria vehiculo | Deposito tipico | Metodo                  | Fuente              |
| ------------------ | --------------- | ----------------------- | ------------------- |
| Economia           | $200-$500       | Hold en tarjeta credito | WalletHub, Experian |
| SUV/Midsize        | $500-$1,000     | Hold en tarjeta credito | WalletHub           |
| Premium/Luxury     | $1,000-$2,500   | Hold en tarjeta credito | WalletHub, Experian |

### CDW/LDW Ofrecido al Cliente

| Cobertura                    | Costo al cliente/dia | Deducible   | Fuente                 |
| ---------------------------- | -------------------- | ----------- | ---------------------- |
| CDW Basico                   | $15-$25              | $500-$1,000 | Avis, AutoSlash        |
| CDW Premium (zero deducible) | $25-$42              | $0          | AutoSlash, RentalCover |
| PAI (Personal Accident)      | $5-$10               | Variable    | Alamo, Avis            |

**Nota**: CDW es una waiver, no un seguro clasico. El rental company asume el riesgo a cambio de fee diario. Margen 80-90%. (Fuente: SharpSheets 2024)

---

## 6. Analisis Break-Even

### Supuestos Base

| Parametro                  | Valor        | Fuente                           |
| -------------------------- | ------------ | -------------------------------- |
| Flota inicial              | 15 vehiculos | Supuesto operativo               |
| ADR promedio ponderado     | $80/dia      | Mix economia/SUV                 |
| Utilizacion break-even     | 60% minimo   | FinancialModelsLab, BusinessDojo |
| Utilizacion target Year 1  | 65-70%       | Benchmark nuevos operadores      |
| Utilizacion target Year 2+ | 75-80%       | Benchmark industria              |
| Dias rentables/mes a 60%   | 18 dias      | 30 x 0.60                        |
| Dias rentables/mes a 70%   | 21 dias      | 30 x 0.70                        |

### Escenarios de Revenue Mensual (15 vehiculos)

| Escenario   | Utilizacion | Revenue/vehiculo/mes | Revenue total/mes | Costos fijos | Resultado             |
| ----------- | ----------- | -------------------- | ----------------- | ------------ | --------------------- |
| Pesimista   | 55%         | $1,320               | $19,800           | ~$12,000     | Deficit con variables |
| Break-even  | 60%         | $1,440               | $21,600           | ~$12,000     | Punto equilibrio      |
| Conservador | 70%         | $1,680               | $25,200           | ~$12,000     | +$5,000-$8,000 neto   |
| Optimista   | 80%         | $1,920               | $28,800           | ~$12,000     | +$10,000-$13,000 neto |

**Con add-ons (CDW, GPS)**: +15-25% revenue adicional sobre la tarifa base.

### Timeline Break-Even

| Metrica                      | Estimacion  | Fuente                           |
| ---------------------------- | ----------- | -------------------------------- |
| Break-even operativo         | 3-6 meses   | FinancialModelsLab               |
| Break-even capital (payback) | 18-30 meses | BusinessDojo, FinancialModelsLab |
| Ocupacion minima sostenible  | 60%         | FinancialModelsLab               |

---

## 7. Revenue Anual Proyectado (Flota 15 vehiculos)

| Metrica                    | Year 1 (65%) | Year 2 (75%) | Year 3 (80%) |
| -------------------------- | ------------ | ------------ | ------------ |
| Revenue base renta         | $256,000     | $328,500     | $350,400     |
| Revenue add-ons (+20%)     | $51,200      | $65,700      | $70,080      |
| **Revenue total**          | **$307,200** | **$394,200** | **$420,480** |
| Costos totales estimados   | $250,000     | $280,000     | $290,000     |
| **Utilidad neta estimada** | **$57,200**  | **$114,200** | **$130,480** |
| **Margen neto**            | **18.6%**    | **29.0%**    | **31.0%**    |

**Nota**: Proyecciones optimistas. Margen neto industria promedio es 5-15%. Resultado superior posible por costos de plataforma bajos ($25/mes Neero vs $500+/mes soluciones enterprise). (Fuente: SharpSheets, proposals/05-investment-roi.md)

---

## 8. Comparativa: Independiente vs Franquicia

| Factor                | Independiente     | Franquicia (Enterprise, Hertz) |
| --------------------- | ----------------- | ------------------------------ |
| Inversion inicial     | $30K-$80K         | $200K-$500K+                   |
| Fee franquicia        | $0                | 5-8% revenue                   |
| Reconocimiento marca  | Bajo (construir)  | Alto (establecido)             |
| Flexibilidad precios  | Total             | Limitada por franquiciador     |
| Acceso OTA            | Requiere esfuerzo | Incluido                       |
| Soporte operativo     | Autodidacta       | Manual franquiciador           |
| Margen neto potencial | 10-20%            | 5-10% (post fees)              |

**Recomendacion**: Modelo independiente con plataforma digital Neero ofrece mejor ratio inversion/retorno para operador individual. (Fuente: QoreUps, UpFlip)

---

## Fuentes Consultadas

| Fuente                    | URL                                                                                                        | Fecha consulta | Dato extraido                            |
| ------------------------- | ---------------------------------------------------------------------------------------------------------- | -------------- | ---------------------------------------- |
| Insureon FL               | https://www.insureon.com/small-business-insurance/commercial-auto/florida                                  | 2026-03-10     | Seguro comercial $266/mes avg FL         |
| SharpSheets               | https://sharpsheets.io/blog/how-profitable-are-car-rental-businesses/                                      | 2026-03-10     | Margenes industria, 5,200+ empresas      |
| BusinessDojo              | https://dojobusiness.com/blogs/news/car-rental-business-profit-margin                                      | 2026-03-10     | Margen neto 6.7% avg, break-even         |
| FL Dept of State (Sunbiz) | https://dos.fl.gov/sunbiz/forms/fees/llc-fees/                                                             | 2026-03-10     | LLC fees: $125 formacion, $138.75 annual |
| OxMaint                   | https://www.oxmaint.com/blog/post/fleet-maintenance-costs-budget-2025                                      | 2026-03-10     | Mantenimiento $720-$2,400/vehiculo/ano   |
| FinancialModelsLab        | https://financialmodelslab.com/blogs/kpi-metrics/car-rental                                                | 2026-03-10     | KPIs, break-even 60%, EBITDA             |
| QoreUps                   | https://www.qoreups.com/academy/how-much-does-a-car-rental-business-make/                                  | 2026-03-10     | Revenue por tamano flota                 |
| AutoSlash                 | https://blog.autoslash.com/the-fee-detective-visits-florida-and-explores-the-florida-rental-car-surcharge/ | 2026-03-10     | Tax rate FL, surcharges                  |
| FL Statute 212.0606       | https://law.justia.com/codes/florida/title-xiv/chapter-212/section-212-0606/                               | 2026-03-10     | Rental car surcharge $2/dia              |
| Neighbor.com              | https://www.neighbor.com/monthly-parking-near-me/florida/miami                                             | 2026-03-10     | Parking Miami $150-$250/mes              |
| WalletHub                 | https://wallethub.com/edu/ci/collision-damage-waiver/8822                                                  | 2026-03-10     | Depositos, CDW estructura                |
| StarterStory              | https://www.starterstory.com/ideas/car-rental-business/profitability                                       | 2026-03-10     | Rentabilidad car rental                  |
| ZenBusiness               | https://www.zenbusiness.com/florida-filing-fees/                                                           | 2026-03-10     | LLC costs FL 2024-2025                   |
