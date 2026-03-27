---
title: "Modelo de Negocio — Car Rental Orlando"
date: "2026-03-22"
updated: "2026-03-22"
status: "done"
priority: "High"
owner: "Neero SAS"
---

# Modelo de Negocio -- Car Rental Orlando

## Resumen Ejecutivo

| Hallazgo                              | Valor                         | Fuente                           |
| ------------------------------------- | ----------------------------- | -------------------------------- |
| Mercado objetivo                      | Orlando #1 car rental mundial | GOAA, 01-mercado-orlando.md      |
| Visitantes anuales                    | 75.33M (2024), +10M con Epic  | 01-mercado-orlando.md            |
| Seguro flota por vehiculo/mes (FL)    | $207-$577                     | 11-garantias-modelo-rental.md    |
| Margen operativo tipico independiente | 5-15% neto, 30-50% bruto      | SharpSheets 2024, BusinessDojo   |
| Break-even ocupacion                  | 60% minimo, 70%+ recomendado  | FinancialModelsLab, BusinessDojo |
| LLC Florida costo total anual         | $125 formacion + $138.75/ano  | Florida Dept of State (Sunbiz)   |
| Ventaja vs Miami                      | CFC $9/dia MCO (2do mas alto) | 03-inteligencia-precios.md       |
| Turo channel (Orlando #1 USA)         | ~$31,248/mes bruto (20 veh)   | 12-integracion-turo.md           |

---

## 1. Estructura Legal

### LLC Florida -- Costos (Orange County)

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

### Licencias y Permisos Requeridos (Orange County / Orlando)

| Licencia                               | Requisito                               | Costo estimado    | Fuente                        |
| -------------------------------------- | --------------------------------------- | ----------------- | ----------------------------- |
| Sales Tax Permit (DR-1)                | Obligatorio para cobrar sales tax       | Gratis (registro) | Florida Dept of Revenue       |
| Rental Car Surcharge Permit            | $2/dia por vehiculo, remitir al DOR     | Registro gratuito | FL Statute 212.0606           |
| Motor Vehicle Rental Insurance License | Para vender CDW/LDW a clientes          | Variable          | FL Statute 626.321(d)         |
| DHSMV Motor Vehicle Dealer License     | Obligatorio para fleet commercial       | $75-$300          | 11-garantias-modelo-rental.md |
| Motor Vehicle Rental Firm License      | Especifico para empresas de renta       | Variable          | 11-garantias-modelo-rental.md |
| Surety Bond                            | Requerido por DHSMV                     | $25,000           | 11-garantias-modelo-rental.md |
| BTR Orange County                      | Licencia municipal anual                | $50-$400/ano      | octaxcol.com/taxes/business   |
| Zoning Permit (off-airport)            | Aprobacion ubicacion fisica operaciones | Variable          | Orange County Fast Track      |

### Estructura Societaria Recomendada

| Componente        | Recomendacion                         | Razon                                             |
| ----------------- | ------------------------------------- | ------------------------------------------------- |
| Entidad legal     | Single-member LLC (Florida)           | Proteccion personal, pass-through tax, simplicity |
| Jurisdiccion      | Orange County / City of Orlando       | Donde opera la flota                              |
| Banco comercial   | Cuenta separada LLC                   | Separacion activos personales/empresariales       |
| Contabilidad      | CPA o software (QuickBooks)           | Compliance taxes, depreciation tracking           |
| Estructura futura | S-Corp election si ingresos >$80K/ano | Ahorro self-employment tax                        |

---

## 2. Revenue Streams

### Ingresos por Tipo de Renta (Por Categoria)

| Categoria                   | ADR Base (off-airport) | ADR Temporada Alta | % Revenue estimado | Fuente                     |
| --------------------------- | ---------------------- | ------------------ | ------------------ | -------------------------- |
| Economy (Corolla)           | $25-$28/dia            | $45-$55/dia        | 20%                | 03-inteligencia-precios.md |
| SUV Compacto (RAV4)         | $55-$65/dia            | $90-$110/dia       | 33%                | 03-inteligencia-precios.md |
| Minivan (Sienna/Pacifica)   | $75-$90/dia            | $120-$150/dia      | 20%                | 03-inteligencia-precios.md |
| SUV Grande (Pilot/Palisade) | $85-$100/dia           | $140-$165/dia      | 13%                | 03-inteligencia-precios.md |
| Luxury (Tesla/BMW)          | $110-$130/dia          | $175-$220/dia      | 13%                | 03-inteligencia-precios.md |

**ADR Ponderado Base**: ~$70/dia | **ADR Ponderado Temporada Alta**: ~$110/dia

### Ingresos Ancillares (Alto Margen)

| Stream                       | Precio al cliente      | Frecuencia uso estimado | Margen | Fuente                        |
| ---------------------------- | ---------------------- | ----------------------- | ------ | ----------------------------- |
| CDW Basico                   | $14.99-$19.99/dia      | 60-70% de rentas        | 80-90% | 11-garantias-modelo-rental.md |
| CDW Premium (zero ded)       | $19.99-$24.99/dia      | 20-30% de rentas        | 75-85% | 11-garantias-modelo-rental.md |
| SLI (Supplemental Liability) | $9.99-$14.99/dia       | 40-50% de rentas        | 85%+   | Benchmark industria           |
| GPS addon                    | $5-$10/dia             | 15-25%                  | 85%+   | Benchmark industria           |
| Conductor adicional          | $10-$15/dia            | 20-30%                  | 90%+   | Benchmark industria           |
| Car seat / silla bebe        | $8-$12/dia             | 25-40% (familia target) | 85%+   | Benchmark industria           |
| Young driver surcharge (<25) | $25-$35/dia            | 10-15% rentas           | 100%   | Benchmark industria           |
| Fuel pre-pay                 | $40-$70 por renta      | 20-30%                  | 40-60% | Benchmark industria           |
| Late return fee              | $25-$50 por evento     | 5-10%                   | 100%   | Benchmark industria           |
| Turo channel (baja demanda)  | Revenue cuando occ<65% | Variable                | 80%    | 12-integracion-turo.md        |

**Impacto ancillares**: +20-35% revenue adicional sobre tarifa base cuando se captura CDW + car seat (familia Orlando).

### Estimacion Revenue Ancillar por Renta (Mix Orlando Familias)

| Escenario renta (7 dias) | Base | CDW $18/dia | Car seat $10/dia | Conductor adic $12/dia | Total ancillar | Total renta |
| ------------------------ | ---- | ----------- | ---------------- | ---------------------- | -------------- | ----------- |
| Familia SUV Compacto     | $420 | $126        | $70              | $0                     | $196           | $616        |
| Familia Minivan          | $595 | $126        | $70              | $0                     | $196           | $791        |
| Pareja Economia          | $175 | $126        | $0               | $84                    | $210           | $385        |

---

## 3. Estructura de Costos Fijos

### Costos Fijos Mensuales (Flota 15 Vehiculos)

| Concepto                           | Costo/vehiculo/mes | Total flota/mes    | Fuente                                 |
| ---------------------------------- | ------------------ | ------------------ | -------------------------------------- |
| Seguro comercial flota             | $207-$577          | $3,100-$8,655      | 11-garantias-modelo-rental.md          |
| Parqueo/storage off-airport        | $80-$150           | $1,200-$2,250      | Benchmark Orlando (sin aeropuerto CFC) |
| Depreciacion vehiculo              | ~$200-$400         | $3,000-$6,000      | InvestorCampus (30% costo/ano)         |
| Software reservas (HQ Rental/1Now) | --                 | $50-$150/mes       | hqrentalsoftware.com, 1now.io          |
| Oficina/administracion Orlando     | --                 | $800-$1,400/mes    | commercialcafe.com Orlando             |
| LLC Annual Report (prorrateado)    | --                 | ~$12/mes           | dos.fl.gov/sunbiz                      |
| General Liability Insurance        | --                 | $38-$83/mes        | Insuranks (avg $450-$1,000/ano)        |
| Telefono/utilities                 | --                 | $100-$200/mes      | Estimado operativo                     |
| Marketing mensual                  | --                 | $300-$600/mes      | 5-10% revenue (FinancialModelsLab)     |
| **Subtotal fijos**                 | --                 | **$8,600-$19,350** | --                                     |

**Referencia base operacion conservadora**: ~$11,000-$13,000/mes fijos (sin depreciacion).

### Nomina (Estructura inicial)

| Rol                        | Salario/ano     | Salario/mes   | Fuente                   |
| -------------------------- | --------------- | ------------- | ------------------------ |
| Owner/operador (1 persona) | Variable        | Draw variable | Reinversion Year 1       |
| Asistente operaciones PT   | $27,000-$30,000 | $2,250-$2,500 | ziprecruiter.com Orlando |
| Segundo empleado (Year 2+) | $28,000-$35,000 | $2,333-$2,917 | ziprecruiter.com Orlando |

**Florida minimum wage**: $13/hora (2024), $14/hora (2025), $15/hora (2026). (Fuente: livingwage.mit.edu Orange County)

**Estructura recomendada Year 1**: Owner solo + 1 PT ($2,250-$2,500/mes). **Year 2+**: Owner + 2 FT.

---

## 4. Costos Variables por Vehiculo / Renta

| Concepto                   | Costo/vehiculo/ano | Costo/vehiculo/mes | Costo/renta (7 dias) | Fuente                    |
| -------------------------- | ------------------ | ------------------ | -------------------- | ------------------------- |
| Mantenimiento (1-2 anos)   | $720-$960          | $60-$80            | $14-$19              | OxMaint 2025, SimplyFleet |
| Mantenimiento (3-5 anos)   | $1,080-$2,400      | $90-$200           | $21-$47              | OxMaint 2025, SimplyFleet |
| Llantas (reemplazo)        | ~$1,000/ano        | ~$83               | ~$19                 | OxMaint 2025              |
| Limpieza/detailing         | ~$600-$1,200/ano   | $50-$100           | $12-$23              | Benchmark industria       |
| Combustible (full-to-full) | Variable cliente   | $0 (cliente paga)  | $0 si full-to-full   | Practica industria        |
| **Total variable/mes/veh** | --                 | **$193-$463**      | --                   | --                        |

### Impuestos y Surcharges (Transferibles al Cliente)

| Impuesto                           | Tasa          | Nota                        | Fuente                     |
| ---------------------------------- | ------------- | --------------------------- | -------------------------- |
| Florida Sales Tax                  | 6%            | Sobre tarifa de renta       | FL Dept of Revenue         |
| Orange County Surtax               | 0.5%          | Adicional al state tax      | Orange County DOR          |
| Rental Car Surcharge (FL)          | $2/dia        | Primeros 30 dias del rental | FL Statute 212.0606        |
| MCO CFC (si on-airport)            | $9/dia        | Solo si usa MCO — EVITAR    | 03-inteligencia-precios.md |
| **Total tax efectivo off-airport** | 6.5% + $2/dia | Off-airport evita MCO CFC   | --                         |

**Ventaja clave off-airport Orlando**: Evitar CFC MCO de $9/dia = ahorro $63/semana para cliente vs on-airport. Argumento de venta directo.

---

## 5. Margenes y Break-Even

### Margen Bruto por Renta (Por Categoria, 7 dias)

| Categoria         | Tarifa renta base | + Ancillar (20%) | Costo variable/7d | Margen bruto $ | Margen bruto % |
| ----------------- | ----------------- | ---------------- | ----------------- | -------------- | -------------- |
| Economy           | $175              | $35              | $45-$60           | $150-$165      | 70-78%         |
| SUV Compacto      | $420              | $84              | $60-$80           | $364-$444      | 73-88%         |
| Minivan           | $595              | $119             | $70-$95           | $549-$644      | 76-82%         |
| SUV Grande        | $630              | $126             | $75-$100          | $581-$681      | 78-83%         |
| Luxury            | $840              | $168             | $85-$110          | $842-$923      | 77-83%         |
| **Mix ponderado** | **$430**          | **$86**          | **$65-$90**       | **$371-$451**  | **73-80%**     |

**Margen neto post-fijos**: 5-15% tipico industria; modelo Neero proyecta 12-18% por costos software bajos.

### Break-Even Mensual

| Parametro                   | Valor        | Calculo                              |
| --------------------------- | ------------ | ------------------------------------ |
| Costos fijos base (sin dep) | ~$11,500/mes | Seguro + nomina + oficina + software |
| ADR ponderado off-airport   | $70/dia      | Mix 15 vehiculos                     |
| Revenue/vehiculo/mes a 60%  | $1,260       | $70 x 18 dias                        |
| Revenue total 15 veh a 60%  | $18,900      | $1,260 x 15                          |
| Con ancillares +20%         | $22,680      | $18,900 x 1.20                       |
| Break-even ocupacion        | ~55%         | Costos fijos $11,500 / ADR $70       |
| Ocupacion objetivo Year 1   | 65-70%       | Benchmark nuevos operadores          |

### Punto de Inflexion Turo vs Directo

| Escenario                | Recomendacion canal               | Revenue estimado             |
| ------------------------ | --------------------------------- | ---------------------------- |
| Ocupacion directa <65%   | Activar Turo para veh disponibles | +$1,562/veh/mes (Plan 80)    |
| Ocupacion directa 65-80% | Mezcla directa + Turo selectivo   | Optimizar por temporada      |
| Ocupacion directa >80%   | Solo canal directo                | Margen superior sin comision |

**Turo Plan 80 Orlando**: Host retiene 80% del precio. Estimado 20 veh: ~$31,248/mes bruto. (Fuente: 12-integracion-turo.md)

---

## 6. Proyecciones Financieras 3 Anos

### Supuestos Base

| Parametro          | Valor        | Fuente                       |
| ------------------ | ------------ | ---------------------------- |
| Flota inicial      | 15 vehiculos | 04-carros-mas-rentados.md    |
| ADR base ponderado | $70/dia      | 03-inteligencia-precios.md   |
| Ancillares         | +20% revenue | CDW + car seat mix familiar  |
| Estacionalidad     | +40% Jun-Aug | 01-mercado-orlando.md        |
| Costos fijos base  | $11,500/mes  | Seccion 3 (sin depreciacion) |
| Depreciacion flota | $4,000/mes   | 15 veh x $267/mes avg        |
| Nomina Year 1      | $2,500/mes   | Owner + 1 PT asistente       |
| Nomina Year 2+     | $5,000/mes   | Owner + 2 FT empleados       |
| Costos variables   | $200/veh/mes | Mantenimiento + limpieza     |
| Marketing          | 5% revenue   | FinancialModelsLab benchmark |

### Escenarios Anuales (Year 1 — Flota 15 Vehiculos)

| Escenario   | Ocupacion | Revenue base | + Ancillar 20% | Revenue total | Costos totales | EBITDA   | Margen neto |
| ----------- | --------- | ------------ | -------------- | ------------- | -------------- | -------- | ----------- |
| Conservador | 50%       | $189,000     | $37,800        | $226,800      | $208,000       | $18,800  | 8.3%        |
| Base        | 65%       | $245,700     | $49,140        | $294,840      | $230,000       | $64,840  | 22.0%       |
| Optimista   | 80%       | $302,400     | $60,480        | $362,880      | $252,000       | $110,880 | 30.6%       |
| Excepcional | 90%       | $340,200     | $68,040        | $408,240      | $265,000       | $143,240 | 35.1%       |

**Calculo base**: $70/dia x 15 veh x 365 dias x ocupacion% x 1.20 ancillar.

### Proyecciones 3 Anos (Escenario Base)

| Metrica                 | Year 1 (65%) | Year 2 (75%)  | Year 3 (80%)  |
| ----------------------- | ------------ | ------------- | ------------- |
| Flota                   | 15 veh       | 15-18 veh     | 18-22 veh     |
| ADR ponderado           | $70/dia      | $74/dia (+5%) | $77/dia (+4%) |
| Revenue base renta      | $245,700     | $305,100      | $369,600      |
| Revenue ancillar (+20%) | $49,140      | $61,020       | $73,920       |
| **Revenue total**       | **$294,840** | **$366,120**  | **$443,520**  |
| Costos fijos            | $138,000     | $155,000      | $175,000      |
| Costos variables        | $36,000      | $43,200       | $52,800       |
| Nomina                  | $30,000      | $60,000       | $65,000       |
| Marketing (5%)          | $14,742      | $18,306       | $22,176       |
| Depreciacion            | $48,000      | $51,600       | $57,600       |
| **Costos totales**      | **$266,742** | **$328,106**  | **$372,576**  |
| **EBITDA**              | **$28,098**  | **$38,014**   | **$70,944**   |
| **Margen EBITDA**       | **9.5%**     | **10.4%**     | **16.0%**     |
| Cash flow (post-dep)    | $76,098      | $89,614       | $128,544      |

**Nota**: Year 1 margen conservador por inversion en marketing y nomina. Year 3 refleja escala de flota y mayor ADR por reputacion construida.

### Proyecciones 3 Anos — Todos Escenarios

| Escenario   | Year 1 EBITDA | Year 2 EBITDA | Year 3 EBITDA | Payback Capital |
| ----------- | ------------- | ------------- | ------------- | --------------- |
| Conservador | $18,800       | $28,000       | $45,000       | 36-42 meses     |
| Base        | $28,098       | $38,014       | $70,944       | 24-30 meses     |
| Optimista   | $110,880      | $148,000      | $195,000      | 12-18 meses     |
| Excepcional | $143,240      | $185,000      | $240,000      | 10-14 meses     |

---

## 7. Comparacion Financiera Orlando vs Miami

### Diferencias Estructurales de Mercado

| Factor                    | Orlando                        | Miami                        | Ventaja       |
| ------------------------- | ------------------------------ | ---------------------------- | ------------- |
| Visitantes anuales        | 75.33M (2024)                  | 28M (est)                    | Orlando +169% |
| Pasajeros aeropuerto      | 57.21M MCO                     | 51.8M MIA/FLL combinado      | Orlando       |
| Estacionalidad            | Mas estable (parques 12 meses) | Picos invierno/verano        | Orlando       |
| CFC aeropuerto            | $9/dia (MCO 2do mas alto USA)  | $9-$12/dia (MIA)             | Similar       |
| Segmento dominante        | Familia con hijos (60-70%)     | Turismo internacional        | Distinto      |
| Mercado LATAM             | 6.5M intl visits/ano           | 8M+ intl visits (mayor base) | Miami         |
| Competencia independiente | Crisis reputacion (F/D- BBB)   | Mas establecida              | Orlando       |
| Turo market               | #1 USA                         | Top 5 USA                    | Orlando       |

### Diferencias en Estructura de Costos

| Concepto                    | Orlando                   | Miami                         | Delta          |
| --------------------------- | ------------------------- | ----------------------------- | -------------- |
| Parqueo/storage             | $80-$150/veh/mes          | $150-$250/veh/mes             | -$70-$100/veh  |
| Oficina 500 sqft            | ~$1,360/mes (Class B avg) | ~$1,800-$2,500/mes            | -$440-$1,140   |
| Seguro flota (FL statewide) | $207-$577/veh/mes         | $207-$577/veh/mes             | Sin diferencia |
| Nomina (avg wage)           | $13-$14/hora minimo       | $16.50/hora minimo Miami-Dade | -$2.5-$3/hora  |
| BTR licencia                | ~$50-$400/ano             | ~$50-$300/ano Miami-Dade      | Similar        |

**Ahorro operativo estimado Orlando vs Miami (15 veh)**: $1,800-$3,500/mes en parqueo + nomina + oficina.

### ROI Comparativo

| Metrica                  | Orlando (base 65%) | Miami (base 65%) | Diferencia       |
| ------------------------ | ------------------ | ---------------- | ---------------- |
| ADR ponderado            | $70/dia            | $80/dia          | Miami +$10/dia   |
| Revenue total Year 1     | $294,840           | $307,200         | Miami +$12,360   |
| Costos totales Year 1    | $266,742           | $250,000         | Miami -$16,742   |
| EBITDA Year 1            | $28,098            | $57,200          | Miami +$29,102   |
| Inversion flota (15 veh) | $400,500           | $400,500         | Igual            |
| Payback capital (base)   | 24-30 meses        | 18-24 meses      | Miami mas rapido |

### Analisis: Cual Mercado es Mas Atractivo?

| Dimension                  | Ganador | Razon                                                  |
| -------------------------- | ------- | ------------------------------------------------------ |
| ADR y margen por renta     | Miami   | $80 vs $70/dia; turismo premium + LATAM                |
| Volumen de demanda         | Orlando | 75M vs 28M visitantes; Epic Universe +10M              |
| Costos operativos          | Orlando | Parqueo, oficina y nomina menores                      |
| Estabilidad/estacionalidad | Orlando | Parques tematicos nivelan demanda 12 meses             |
| Competencia independiente  | Orlando | Crisis reputacion = oportunidad mayor diferenciacion   |
| ROI Year 1                 | Miami   | Payback mas rapido por ADR superior                    |
| ROI Year 3+                | Orlando | Escala de mercado domina a largo plazo                 |
| Turo integration           | Orlando | #1 mercado Turo USA vs top 5                           |
| Segmento LATAM WhatsApp    | Empate  | Ambos tienen base LATAM significativa sin atender bien |

**Conclusion**: Miami es mas atractivo para validacion rapida (ROI Y1 superior). Orlando es superior a largo plazo por volumen, estabilidad, y ventaja competitiva clara en independientes (BBB crisis + gap LATAM/WhatsApp).

**Estrategia recomendada**: Iniciar en Miami para validar modelo (menor escala inicial), expandir a Orlando en Year 2-3.

---

## 8. KPIs Financieros Clave

### KPI Framework Operativo

| KPI                                        | Formula                           | Target Year 1 | Target Year 2 | Fuente                      |
| ------------------------------------------ | --------------------------------- | ------------- | ------------- | --------------------------- |
| Revenue per Available Vehicle/dia (RevPAV) | Revenue total / (flota x dias)    | $45-$50       | $55-$60       | FinancialModelsLab          |
| Occupancy Rate                             | Dias rentados / dias disponibles  | 65%           | 75%           | Benchmark nuevos operadores |
| Average Daily Rate (ADR)                   | Revenue renta / dias rentados     | $70/dia       | $74/dia       | 03-inteligencia-precios.md  |
| Revenue per Transaction                    | Revenue total / # rentas          | $420 (7d avg) | $440          | Mix segmento familias       |
| Cost per Vehicle per Day                   | Costos totales / (flota x dias)   | $22-$28       | $20-$25       | Estructura costos seccion 3 |
| Net Margin                                 | EBITDA / Revenue                  | 9-12%         | 10-15%        | SharpSheets, BusinessDojo   |
| Ancillar Attach Rate                       | Rentas con CDW / total rentas     | 60%+          | 70%+          | Benchmark industria         |
| Turo Utilization Rate                      | Veh en Turo / veh disponibles     | <35%          | <20%          | 12-integracion-turo.md      |
| Customer Acquisition Cost (CAC)            | Marketing spend / nuevos clientes | <$25          | <$20          | Target digital-first        |
| Average Fleet Age                          | Promedio anos flota               | <2 anos       | <3 anos       | Para seguro favorable       |

### KPIs de Calidad (Diferenciadores vs Competencia)

| KPI                    | Target      | Impacto negocio                       |
| ---------------------- | ----------- | ------------------------------------- |
| Google rating          | 4.8+/5.0    | Conversion online directa             |
| Response time WhatsApp | <15 minutos | LATAM segment retention               |
| BBB rating             | A+          | Diferenciador vs 6+ competidores F/D- |
| Repeat customer rate   | >25% Year 2 | CAC reduccion                         |
| No-show rate           | <5%         | Revenue integrity                     |

---

## Asunciones del Modelo

| Asuncion                | Valor            | Justificacion                               |
| ----------------------- | ---------------- | ------------------------------------------- |
| Flota inicial           | 15 vehiculos     | 04-carros-mas-rentados.md optimo            |
| Duracion promedio renta | 7 dias           | Turismo familiar Orlando (perfil dominante) |
| Mix ADR                 | $70/dia base     | Promedio ponderado flota Mix (off-airport)  |
| Ancillar capture        | 20% sobre base   | CDW 65% + car seat 35% (familias)           |
| Overhead indirecto      | $11,500/mes      | Conservador, sin depreciacion               |
| Crecimiento ADR anual   | 4-5%             | Inflacion + reputacion construida           |
| Expansion flota Year 2  | +3-4 veh         | Cash flow positivo Year 1                   |
| Canal Turo              | Activar <65% occ | Complemento, no sustituto                   |
| Estacionalidad          | +40% pico verano | Benchmark Orlando GOAA                      |

---

## Fuentes Consultadas

| Fuente                        | URL                                                                          | Fecha consulta | Dato extraido                           |
| ----------------------------- | ---------------------------------------------------------------------------- | -------------- | --------------------------------------- |
| 01-mercado-orlando.md         | Local spec                                                                   | 2026-03-22     | 75.33M visitantes, Epic Universe, MCO   |
| 02-competencia-orlando.md     | Local spec                                                                   | 2026-03-22     | 9 marcas MCO, crisis BBB independientes |
| 03-inteligencia-precios.md    | Local spec                                                                   | 2026-03-22     | ADRs por categoria, CFC $9/dia MCO      |
| 04-carros-mas-rentados.md     | Local spec                                                                   | 2026-03-22     | Flota 15 veh optima, inversion $400,500 |
| 11-garantias-modelo-rental.md | Local spec                                                                   | 2026-03-22     | Seguro $207-577/veh, surety bond $25K   |
| 12-integracion-turo.md        | Local spec                                                                   | 2026-03-22     | Plan 80, $31,248/mes bruto 20 veh       |
| FL Dept of State (Sunbiz)     | https://dos.fl.gov/sunbiz/forms/fees/llc-fees/                               | 2026-03-22     | LLC $125 formacion, $138.75 annual      |
| SharpSheets                   | https://sharpsheets.io/blog/how-profitable-are-car-rental-businesses/        | 2026-03-22     | Margenes industria 5-15% neto           |
| BusinessDojo                  | https://dojobusiness.com/blogs/news/car-rental-business-profit-margin        | 2026-03-22     | Margen neto 6.7% avg, break-even        |
| ZenBusiness                   | https://www.zenbusiness.com/florida-filing-fees/                             | 2026-03-22     | LLC costs FL 2024-2025                  |
| FinancialModelsLab            | https://financialmodelslab.com/blogs/kpi-metrics/car-rental                  | 2026-03-22     | KPIs, break-even 60%, RevPAV            |
| OxMaint 2025                  | https://www.oxmaint.com/blog/post/fleet-maintenance-costs-budget-2025        | 2026-03-22     | Mantenimiento $720-$2,400/vehiculo/ano  |
| ZipRecruiter Orlando          | https://www.ziprecruiter.com/Salaries/Car-Rental-Driver-Salary-in-Orlando,FL | 2026-03-22     | Car rental driver $27,178/ano Orlando   |
| MIT Living Wage Orange Co     | https://livingwage.mit.edu/counties/12095                                    | 2026-03-22     | Living wage Orange County FL            |
| CommercialCafe Orlando        | https://www.commercialcafe.com/office-market-trends/us/fl/orlando/           | 2026-03-22     | Office space avg $32.66/sqft Orlando    |
| HQ Rental Software            | https://hqrentalsoftware.com/                                                | 2026-03-22     | Software reservas $50-$150/mes          |
| 1Now Fleet Software           | https://1now.io/the-best-car-fleet-management-software-in-the-world/         | 2026-03-22     | $150/mes hasta 10 veh plan basico       |
| Orange County Tax Col         | https://www.octaxcol.com/taxes/business-taxes/                               | 2026-03-22     | BTR Orange County proceso y costo       |
| FL Statute 212.0606           | https://law.justia.com/codes/florida/title-xiv/chapter-212/section-212-0606/ | 2026-03-22     | Rental car surcharge $2/dia             |
| specs/02-modelo-negocio.md    | Local Miami reference spec                                                   | 2026-03-22     | Formato y estructura de referencia      |
