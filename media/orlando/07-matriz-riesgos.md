---
title: "Matriz de Riesgos — Car Rental Orlando"
date: "2026-03-22"
updated: "2026-03-22"
status: "done"
priority: "High"
owner: "Neero SAS"
---

# Matriz de Riesgos -- Car Rental Orlando

## Resumen Ejecutivo

| Metrica                     | Valor                                                                            |
| --------------------------- | -------------------------------------------------------------------------------- |
| Total riesgos identificados | 19                                                                               |
| Riesgos criticos (H-H)      | 4                                                                                |
| Riesgos altos (H-M o M-H)   | 7                                                                                |
| Riesgos medios (M-M)        | 4                                                                                |
| Riesgos bajos (L-M o M-L)   | 4                                                                                |
| Categorias cubiertas        | 6 (Operacional, Financiero, Regulatorio, Competitivo, Tecnologico, Reputacional) |

---

## Escala de Evaluacion

| Nivel      | Probabilidad                  | Impacto                                           |
| ---------- | ----------------------------- | ------------------------------------------------- |
| High (3)   | >60% probabilidad en Year 1   | Puede cerrar el negocio o perdida >$20K           |
| Medium (2) | 30-60% probabilidad en Year 1 | Reduce rentabilidad significativamente ($5K-$20K) |
| Low (1)    | <30% probabilidad en Year 1   | Inconveniente manejable (<$5K)                    |

**Puntuacion**: P x I (max 9, min 1)

---

## Heatmap de Riesgos

```
IMPACTO
High    | R03(6) R07(6) R08(6)   | R01(9) R02(9) R05(9) R06(9) |
Medium  | R10(4) R11(4) R13(4)   | R04(6) R09(6) R15(6)        | R16(3)
Low     | R14(2) R17(2) R19(2)   | R12(2) R18(2)               |
        |    Low                 |   Medium                     |   High
                    PROBABILIDAD
```

---

## 1. Riesgos Operacionales

### R01 -- Accidente vehicular grave

| Campo        | Detalle                                                                                                                                                                                              |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Categoria    | Operacional                                                                                                                                                                                          |
| Descripcion  | Cliente sufre o causa accidente grave con vehiculo de la flota en Orlando; lesiones, demanda legal y/o perdida total del vehiculo. Corredores I-4 y US-192 son de alto riesgo.                       |
| Probabilidad | High (Orlando tiene uno de los corredores de mayor accidentalidad en FL; I-4 es historicamente top 5 en accidentes fatales USA)                                                                      |
| Impacto      | High (demanda legal, perdida de vehiculo $20K-$40K, aumento prima seguro, suspension de operaciones por investigacion)                                                                               |
| Puntuacion   | 9 (H x H) -- CRITICO                                                                                                                                                                                 |
| Mitigacion   | Seguro comercial comprehensive $100K/$300K + umbrella $1M; verificacion licencia obligatoria; dashcam en todos los vehiculos; contrato con clausulas de responsabilidad; protocolo de entrega segura |
| Contingencia | Abogado retenido para litigios; fondo emergencia $10K; protocolo de respuesta a incidentes documentado; vehiculo de reemplazo para cliente                                                           |
| Fuente       | FL Statute 322.38, NHTSA I-4 crash data, LegalClarity                                                                                                                                                |

### R02 -- Robo de vehiculo

| Campo        | Detalle                                                                                                                                                                                                       |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Categoria    | Operacional                                                                                                                                                                                                   |
| Descripcion  | Vehiculo robado durante periodo de renta en zonas turisticas de Orlando (International Drive, Disney corridors) o desde estacionamiento de la operacion off-airport                                           |
| Probabilidad | High (turistas son target frecuente; vehiculos con logos de rental son identificados facilmente; Orange County tiene tasa de robo vehicular elevada)                                                          |
| Impacto      | High (perdida $15K-$40K por vehiculo; disrupcion operativa; aumento seguro; impacto sobre break-even Year 1 fragil)                                                                                           |
| Puntuacion   | 9 (H x H) -- CRITICO                                                                                                                                                                                          |
| Mitigacion   | GPS tracker con geofencing en toda la flota; seguro comprehensive con cobertura de robo; deposito en tarjeta credito ($250-$550); verificacion identidad con DL + pasaporte; no branding visible en vehiculos |
| Contingencia | Reporte policial inmediato (OPD); vehiculo de reemplazo para cliente; claim de seguro dentro de 24h; activacion geofencing alert                                                                              |
| Fuente       | FBI UCR, Orange County Sheriff, NerdWallet                                                                                                                                                                    |

### R03 -- Fallo mecanico en ruta

| Campo        | Detalle                                                                                                                                                                               |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Categoria    | Operacional                                                                                                                                                                           |
| Descripcion  | Vehiculo falla mecanicamente durante uso del cliente en corredores turisticos de alta demanda (I-4, US-192, SR-528 Beachline) lejos de la operacion                                   |
| Probabilidad | Medium (flota nueva 1-3 anos; mantenimiento preventivo reduce probabilidad; pero kilometraje alto en corredores turisticos acelera desgaste)                                          |
| Impacto      | High (cliente varado en corredor turistico, experiencia catastrofica para turista en vacaciones; costo towing $150-$400; reparacion $500-$5,000; resena negativa garantizada)         |
| Puntuacion   | 6 (M x H)                                                                                                                                                                             |
| Mitigacion   | Mantenimiento preventivo cada 5,000 millas; inspeccion pre-entrega obligatoria con checklist; roadside assistance 24/7 con cobertura hasta 50 millas; rotacion de flota cada 3-4 anos |
| Contingencia | Contrato con grua local en zonas I-4 y US-192; vehiculo de backup disponible para turistas varados; reembolso parcial documentado                                                     |
| Fuente       | OxMaint 2025, SimplyFleet, benchmark industria Orlando                                                                                                                                |

### R04 -- Danos no reportados por cliente

| Campo        | Detalle                                                                                                                                                                                            |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Categoria    | Operacional                                                                                                                                                                                        |
| Descripcion  | Cliente (frecuentemente turista internacional) devuelve vehiculo con danos no declarados; disputa sobre responsabilidad agravada por barrera de idioma o salida del pais                           |
| Probabilidad | Medium (frecuente en zona turistica; turistas internacionales representan 30%+ de visitantes; chargeback internacional mas dificil de recuperar)                                                   |
| Impacto      | Medium (costo reparacion $200-$2,000; tiempo fuera de servicio; disputa de chargeback internacional; recuperacion legal compleja si cliente ya salio del pais)                                     |
| Puntuacion   | 4 (M x M)                                                                                                                                                                                          |
| Mitigacion   | Inspeccion fotografica 360 grados pre y post entrega (con timestamp y GPS); video walkthrough con cliente; contrato en idioma del cliente (ES/PT/EN); hold de deposito hasta inspeccion completada |
| Contingencia | Proceso de claims documentado con fotos como evidencia; politica de resolucion en 48h; contacto con aseguradora del cliente si aplica                                                              |
| Fuente       | Benchmark industria, Lancer Insurance, Orlando tourism data                                                                                                                                        |

### R07 -- Impacto de hurricane en flota

| Campo        | Detalle                                                                                                                                                                    |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Categoria    | Operacional                                                                                                                                                                |
| Descripcion  | Huracan o tormenta tropical impacta Orlando (Jun-Nov), causando danos fisicos a vehiculos de la flota estacionados en instalaciones off-airport sin cobertura techada      |
| Probabilidad | Medium (Orlando tierra adentro reduce pero no elimina riesgo; Ian 2022 causo danos masivos en vehiculos en Central FL)                                                     |
| Impacto      | High (perdida potencial de 30-50% de flota = $150K-$400K en danos; paralisis operativa en temporada alta de verano/caida)                                                  |
| Puntuacion   | 6 (M x H)                                                                                                                                                                  |
| Mitigacion   | Seguro comprehensive con cobertura climatica obligatoria; protocolo de evacuacion de flota a garaje techado ante alerta; contrato previo con garaje cubierto de emergencia |
| Contingencia | Activacion inmediata de claims de seguro; acuerdo de vehiculos de reemplazo con dealer local; comunicacion proactiva a clientes con reservas activas                       |
| Fuente       | NOAA Hurricane data, Ian 2022 damage reports FL, Insureon FL                                                                                                               |

---

## 2. Riesgos Financieros

### R05 -- Ocupacion por debajo de break-even

| Campo        | Detalle                                                                                                                                                                                                 |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Categoria    | Financiero                                                                                                                                                                                              |
| Descripcion  | Utilizacion de flota cae consistentemente por debajo del 55% (break-even), especialmente en meses Sep-Nov (baja temporada pre-Epic Universe); Year 1 EBITDA base de $28,098 es fragil                   |
| Probabilidad | High (nuevos operadores off-airport promedian 50-60% en Year 1; competencia enterprise MCO con pricing power masivo; curva de aprendizaje en nuevo mercado)                                             |
| Impacto      | High (perdida operativa $2,000-$5,000/mes por debajo de break-even; puede agotar capital de trabajo y comprometer expansion Year 2-3 desde Miami)                                                       |
| Puntuacion   | 9 (H x H) -- CRITICO                                                                                                                                                                                    |
| Mitigacion   | Dynamic pricing agresivo en low season; contratos mensuales con trabajadores temporales Walt Disney World/Universal; marketing digital local desde mes 1; reduccion temporal de flota en baja temporada |
| Contingencia | Linea de credito pre-aprobada; reserva de caja 3 meses ($30K-$45K); renegociacion de contratos de seguro en ciclo bajo                                                                                  |
| Fuente       | specs/05-modelo-negocio.md (EBITDA $28,098 Year 1), FinancialModelsLab, benchmark car rental independiente                                                                                              |

### R06 -- Costos de seguro de flota superiores al presupuesto

| Campo        | Detalle                                                                                                                                                                                                    |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Categoria    | Financiero                                                                                                                                                                                                 |
| Descripcion  | Primas de seguro comercial de flota ($3,100-$8,655/mes para 15 vehiculos) aumentan por claims, condiciones del mercado FL, o clasificacion de riesgo inicial desfavorable para nuevo operador              |
| Probabilidad | High (FL es uno de los estados mas costosos para seguro vehicular; nuevo operador sin historial paga primas maximas; cualquier claim en Year 1 dispara renovacion)                                         |
| Impacto      | High (aumento de $1,000-$2,000/mes puede eliminar el EBITDA de $28,098 Year 1 completamente; es el mayor costo variable del modelo)                                                                        |
| Puntuacion   | 9 (H x H) -- CRITICO                                                                                                                                                                                       |
| Mitigacion   | Cotizar con 5+ aseguradoras especializadas en fleet rental antes de lanzar; deducible mas alto para reducir prima; programa de seguridad del conductor documentado; historial limpio Year 1 como prioridad |
| Contingencia | Restructurar mix de flota (reducir vehiculos premium, aumentar sedanes economicos); pasar costo al cliente via CDW obligatorio; renegociar a los 6 meses con historial de claims                           |
| Fuente       | specs/05-modelo-negocio.md (seguro $3,100-$8,655/mes), Insureon FL, FloridaAllRisk 2025                                                                                                                    |

### R08 -- Deudas incobrables y chargebacks internacionales

| Campo        | Detalle                                                                                                                                                                              |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Categoria    | Financiero                                                                                                                                                                           |
| Descripcion  | Clientes internacionales (Brazil, Colombia, Argentina son top mercados Orlando) disputan cargos en tarjeta; chargeback rate aumentado por turistas que ya salieron del pais          |
| Probabilidad | Medium (industry chargeback rate 1-3%; turistas internacionales representan 30%+ en Orlando; mas dificil de recuperar una vez fuera de USA)                                          |
| Impacto      | High (perdida del ingreso + fee chargeback $25-$50 + posible perdida de cuenta merchant; acumulacion puede impactar flujo de caja mensual significativamente)                        |
| Puntuacion   | 6 (M x H)                                                                                                                                                                            |
| Mitigacion   | Documentacion fotografica exhaustiva; contrato firmado digitalmente en idioma del cliente; autorizacion de tarjeta con hold previo al viaje; politica de cargos en contrato bilingue |
| Contingencia | Proceso de representment con documentacion; merchant account con proveedor especializado en car rental; seguro de chargebacks si volumen justifica                                   |
| Fuente       | Benchmark industria, payment processing best practices, Orlando international tourism data                                                                                           |

### R09 -- Demand shock negativo post-Epic Universe

| Campo        | Detalle                                                                                                                                                                             |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Categoria    | Financiero                                                                                                                                                                          |
| Descripcion  | Epic Universe (apertura mayo 2025) genera demand shock inicial positivo, pero si el parque no cumple expectativas o hay over-capacity en mercado, demanda de rental cae bruscamente |
| Probabilidad | Medium (los primeros 12-18 meses post-apertura son impredecibles; si parque defrauda expectativas el mercado de turismo puede contraerse)                                           |
| Impacto      | Medium (reduccion de 10-15% en ocupacion de flota por 2-3 meses = $5K-$10K de ingreso perdido)                                                                                      |
| Puntuacion   | 4 (M x M)                                                                                                                                                                           |
| Mitigacion   | Diversificar canales mas alla de turismo de parques (negocios, residentes, trabajadores de hospitality); no depender excesivamente de demanda de parques tematicos                  |
| Contingencia | Ajustar pricing dinamicamente; activar canal de rentas mensuales/corporativas; marketing en segmento de residentes locales                                                          |
| Fuente       | Epic Universe opening data, Orlando tourism market analysis                                                                                                                         |

---

## 3. Riesgos Regulatorios

### R10 -- Perdida de licencia DHSMV o BTR

| Campo        | Detalle                                                                                                                                                                                                 |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Categoria    | Regulatorio                                                                                                                                                                                             |
| Descripcion  | Incumplimiento de requisitos de licencia DHSMV dealer, Business Tax Receipt de Orange County, o mantenimiento de surety bond $25K resulta en suspension o revocacion de licencia de operacion           |
| Probabilidad | Low (si se gestiona correctamente desde inicio; pero nuevo operador sin experiencia regulatoria FL puede cometer errores en renovaciones o reportes)                                                    |
| Impacto      | Medium (suspension de operaciones hasta regularizacion = $10K-$30K en ingresos perdidos; multas $500-$10,000; dano reputacional con clientes que tenian reservas)                                       |
| Puntuacion   | 2 (L x M)                                                                                                                                                                                               |
| Mitigacion   | Consulta legal pre-lanzamiento con abogado especializado en FL car rental; calendario de renovaciones con alertas 60 dias antes; checklist de compliance: DHSMV, BTR, surety bond, zoning Orange County |
| Contingencia | Abogado retenido para respuesta inmediata; suspension voluntaria hasta regularizacion; comunicacion proactiva a clientes afectados                                                                      |
| Fuente       | FL Statute 320.0601, DHSMV dealer licensing, Orange County BTR                                                                                                                                          |

### R11 -- Customer Facility Charge (CFC) MCO aumenta

| Campo        | Detalle                                                                                                                                                                      |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Categoria    | Regulatorio                                                                                                                                                                  |
| Descripcion  | CFC de MCO aumento 50% en noviembre 2024 (de ~$7 a ~$10.50/dia); nueva regulacion puede extender CFC o crear surcharges adicionales sobre operadores off-airport con shuttle |
| Probabilidad | Medium (regulacion en movimiento activo; MCO GOAA tiene historial de aumentos regulares de fees; operadores off-airport son objetivo frecuente)                              |
| Impacto      | Medium (aumento de $2-$5/dia/vehiculo puede reducir competitividad frente a enterprise on-airport; compresion de margen en rentas de bajo precio)                            |
| Puntuacion   | 4 (M x M)                                                                                                                                                                    |
| Mitigacion   | Monitorear regulacion GOAA y FL Legislature (flsenate.gov); membership en Florida Rental Car Association; estructura de precios con fees separados y transparentes           |
| Contingencia | Ajustar precios automaticamente en plataforma Neero; comunicacion transparente al cliente sobre fees regulatorios                                                            |
| Fuente       | MCO GOAA Nov 2024 announcement, FL Statute 212.0606, Tax Foundation                                                                                                          |

### R12 -- Cambios en impuestos estatales o surcharges FL

| Campo        | Detalle                                                                                                                                             |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| Categoria    | Regulatorio                                                                                                                                         |
| Descripcion  | Florida o Orange County imponen nuevos surcharges sobre car rental o extienden regulacion de P2P (propuestas legislativas pendientes para Turo/P2P) |
| Probabilidad | Medium (surcharge actual $2/dia estable pero hay propuestas activas para P2P en FL Legislature; podria nivelar campo de juego con Turo)             |
| Impacto      | Low (si aplica a P2P, beneficia indirectamente al operador formal; si aplica a todos, aumento de 1-2% manejable con ajuste de precios)              |
| Puntuacion   | 2 (M x L)                                                                                                                                           |
| Mitigacion   | Monitorear flsenate.gov; membership en asociacion; structure de precios con fees separados para facilitar ajuste                                    |
| Contingencia | Ajustar precios en plataforma Neero; comunicacion transparente a clientes                                                                           |
| Fuente       | Tax Foundation, FL Statute 212.0606, FL Legislature session data                                                                                    |

---

## 4. Riesgos Competitivos

### R13 -- Concentracion enterprise en MCO sin alternativa viable

| Campo        | Detalle                                                                                                                                                                                            |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Categoria    | Competitivo                                                                                                                                                                                        |
| Descripcion  | Las 9 marcas enterprise en MCO (Hertz, Enterprise, Avis, Budget, National, Alamo, Thrifty, Dollar, Sixt) con pricing power masivo y acceso directo en terminal capturan la mayor parte del mercado |
| Probabilidad | High (estructura del mercado es permanente; enterprise tiene ventaja estructural de locacion en terminal MCO; cliente de bajo esfuerzo siempre preferira on-airport)                               |
| Impacto      | Medium (limita el mercado addressable a segmentos que enterprise no sirve bien: turistas LATAM, clientes con mal credito, rentas extendidas, precio ultra-bajo)                                    |
| Puntuacion   | 6 (H x M)                                                                                                                                                                                          |
| Mitigacion   | Diferenciacion clara por segmento: turista hispanohablante, renta extendida, servicio personalizado; no competir frontalmente en precio vs enterprise; enfocarse en NPS > 4.5                      |
| Contingencia | Ajustar modelo hacia segmento corporativo local si mercado turistico se contrae; explorar contratos con hoteles y resorts de International Drive                                                   |
| Fuente       | specs/03-competencia.md, MCO rental car market data, 9 brands on-airport confirmed                                                                                                                 |

### R14 -- Turo como competidor P2P directo

| Campo        | Detalle                                                                                                                                                                             |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Categoria    | Competitivo                                                                                                                                                                         |
| Descripcion  | Turo expande presencia en Orlando (ya con flota significativa) ofreciendo precios 20-30% menores a car rental tradicional; partnership con Uber (150M MAU) amplifica reach          |
| Probabilidad | Low (Turo ya es una amenaza existente, no futura; pero su crecimiento puede acelerar y capturar segmento price-sensitive que podria usar operador nuevo)                            |
| Impacto      | Medium (reduce pool de clientes price-sensitive; presion a bajar tarifas en segmento economico)                                                                                     |
| Puntuacion   | 2 (L x M)                                                                                                                                                                           |
| Mitigacion   | Diferenciacion por servicio (empresa formal, responsabilidad, cobertura de seguro clara, soporte 24/7); target turista LATAM que prefiere empresa sobre P2P; opciones de CDW claras |
| Contingencia | Listar vehiculos tambien en Turo como host (canal adicional); ajustar precios dinamicamente segun Turo pricing en zona                                                              |
| Fuente       | Sacra 2024, Turo Orlando market presence, Uber partnership data                                                                                                                     |

### R15 -- Reputacion deteriorada de independientes en Orlando

| Campo        | Detalle                                                                                                                                                                                 |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Categoria    | Competitivo                                                                                                                                                                             |
| Descripcion  | Mercado de car rental independiente en Orlando tiene reputacion deteriorada (6+ operadores con calificacion F/D- en BBB); nuevo entrante hereda escepticismo de mercado                 |
| Probabilidad | High (desconfianza del consumidor es una barrera real; reviews negativos de otros independientes afectan busquedas organicas y consideracion de marca nueva)                            |
| Impacto      | Medium (dificulta adquisicion de primeros clientes; require mayor inversion en credibilidad inicial; ciclo de ventas mas largo)                                                         |
| Puntuacion   | 6 (H x M)                                                                                                                                                                               |
| Mitigacion   | Certificacion BBB desde mes 1; programa agresivo de reseñas verificadas (Google, TripAdvisor) en primeros 90 dias; transparencia total en politicas publicadas; no usar nombre generico |
| Contingencia | Campaña de reputation building con descuento en primeras 50 rentas; respuesta publica a cada review negativo en <24h; partnership con hotel de International Drive como credibilidad    |
| Fuente       | BBB Orlando car rental data (6+ F/D- ratings confirmed), specs/03-competencia.md                                                                                                        |

---

## 5. Riesgos Tecnologicos

### R16 -- Falla del sistema de reservas en temporada alta

| Campo        | Detalle                                                                                                                                                                           |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Categoria    | Tecnologico                                                                                                                                                                       |
| Descripcion  | Plataforma Neero (unico operador independiente con booking online en Orlando) falla durante temporada alta de diciembre-enero o apertura Epic Universe mayo 2025; reservas caen   |
| Probabilidad | High (0 competidores independientes tienen booking funcional = ventaja, pero tambien toda la demanda digital concentrada en una plataforma; mayor exposicion en picos de demanda) |
| Impacto      | Medium (perdida de 2-5 dias de reservas online en temporada alta = $1,500-$4,000; dano reputacional con clientes que encontraron plataforma caida)                                |
| Puntuacion   | 6 (H x M)                                                                                                                                                                         |
| Mitigacion   | SLA con Neero SAS para uptime 99.5%+ con SLA especial en temporadas altas (dic-ene, jun-ago); numero de telefono de backup prominente; pre-test de carga previo a temporadas      |
| Contingencia | Proceso manual de reservas via telefono/WhatsApp publicado; comunicacion a clientes por email y SMS; modo de mantenimiento con formulario de captura de leads                     |
| Fuente       | proposals/04-architecture.md, Neero SAS SLA, benchmark fallas en temporada alta                                                                                                   |

### R17 -- CarSync/Fleetwire bloqueados para Turo integration

| Campo        | Detalle                                                                                                                                                                       |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Categoria    | Tecnologico                                                                                                                                                                   |
| Descripcion  | Las herramientas de fleet management con integracion Turo (CarSync, Fleetwire) estan bloqueadas; solo Zubie disponible como opcion — limita capacidad de gestion multichannel |
| Probabilidad | Low (situacion actual ya conocida; Zubie funcional como alternativa; pero bloqueo puede extenderse a otras plataformas)                                                       |
| Impacto      | Medium (double-booking risk si se opera Turo channel manualmente; overhead operativo alto; perdida de oportunidad de canal adicional si no se gestiona bien)                  |
| Puntuacion   | 2 (L x M)                                                                                                                                                                     |
| Mitigacion   | Implementar Zubie desde lanzamiento; establecer proceso manual de sync de calendarios Turo + plataforma Neero; evaluar alternativas cada trimestre                            |
| Contingencia | Si double-booking ocurre: protocolo de compensacion a cliente con vehiculo de backup o reembolso; penalidad por cancelacion en Turo impacta rating de host                    |
| Fuente       | specs/04-canales.md (CarSync/Fleetwire bloqueados, Zubie disponible)                                                                                                          |

### R18 -- Ciberseguridad y datos de turistas internacionales

| Campo        | Detalle                                                                                                                                                                                                    |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Categoria    | Tecnologico                                                                                                                                                                                                |
| Descripcion  | Brecha de datos de turistas internacionales (pasaportes, tarjetas de credito extranjeras, datos personales) almacenados en plataforma; implicaciones legales multi-jurisdiccionales (GDPR si hay europeos) |
| Probabilidad | Medium (plataforma Neero maneja datos; turistas internacionales = datos bajo legislaciones de multiples paises)                                                                                            |
| Impacto      | Low (Neero SAS como responsable tecnico; operator tiene responsabilidad compartida; costo de notificacion $5K-$20K + reputacion)                                                                           |
| Puntuacion   | 2 (M x L)                                                                                                                                                                                                  |
| Mitigacion   | No almacenar datos de tarjeta localmente (PCI-compliant); minimizar retencion de documentos de identidad; politica de retencion 90 dias; transparencia en privacy policy                                   |
| Contingencia | Plan de respuesta a incidentes con Neero SAS; seguro cyber liability; notificacion segun ley FL y GDPR si aplica                                                                                           |
| Fuente       | PCI-DSS standards, FL data breach notification law, GDPR Art. 4                                                                                                                                            |

---

## 6. Riesgos Reputacionales

### R19 -- Reseñas negativas iniciales con efecto amplificado

| Campo        | Detalle                                                                                                                                                                                              |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Categoria    | Reputacional                                                                                                                                                                                         |
| Descripcion  | Primeras reseñas negativas en Google/TripAdvisor/Yelp danan reputacion cuando hay pocas reseñas totales; contexto Orlando agravado por herencia negativa de mercado independiente                    |
| Probabilidad | Medium (inevitable tener alguna reseña negativa; con pocas reseñas totales el impacto es desproporcionado; turistas deja reseñas a tasas mas altas que locales)                                      |
| Impacto      | Low (manejable con respuesta activa y volumen rapido de positivas; pero en mercado con reputacion deteriorada el umbral de tolerancia es mas bajo)                                                   |
| Puntuacion   | 2 (M x L)                                                                                                                                                                                            |
| Mitigacion   | Programa proactivo de reseñas en primeros 90 dias (descuento en proxima renta); certificacion BBB visible; respuesta profesional a negativos en <12h; servicio sobre-entregado primeros 100 clientes |
| Contingencia | Campana de reseñas incentivadas; mejora de proceso basada en feedback; partnership con hotel o agencia para credibilidad externa                                                                     |
| Fuente       | BBB Orlando data, benchmark industria hospitality, TripAdvisor tourism review patterns                                                                                                               |

---

## Resumen de Riesgos por Prioridad

### Riesgos Criticos (Puntuacion 9) -- Atencion Inmediata

| ID  | Riesgo                         | P   | I   | Score | Accion prioritaria                                                  |
| --- | ------------------------------ | --- | --- | ----- | ------------------------------------------------------------------- |
| R01 | Accidente vehicular grave      | H   | H   | 9     | Seguro $100K/$300K + umbrella $1M + dashcam + protocolo incidentes  |
| R02 | Robo de vehiculo               | H   | H   | 9     | GPS tracker + geofencing + seguro robo + sin branding visible       |
| R05 | Ocupacion bajo break-even      | H   | H   | 9     | Dynamic pricing + contratos mensuales + reserva caja 3 meses        |
| R06 | Costos seguro flota superiores | H   | H   | 9     | Cotizar 5+ aseguradoras + CDW obligatorio + historial limpio Year 1 |

### Riesgos Altos (Puntuacion 6) -- Monitoreo Activo

| ID  | Riesgo                         | P   | I   | Score | Accion prioritaria                                         |
| --- | ------------------------------ | --- | --- | ----- | ---------------------------------------------------------- |
| R03 | Fallo mecanico en ruta         | M   | H   | 6     | Mantenimiento preventivo 5K millas + roadside assistance   |
| R07 | Hurricane impacto flota        | M   | H   | 6     | Seguro climatico + protocolo evacuacion + garaje cubierto  |
| R08 | Chargebacks internacionales    | M   | H   | 6     | Documentacion + contrato bilingue + hold previo            |
| R13 | Concentracion enterprise MCO   | H   | M   | 6     | Diferenciacion por segmento LATAM + servicio personalizado |
| R15 | Reputacion mercado deteriorado | H   | M   | 6     | Certificacion BBB + programa reseñas agresivo mes 1        |
| R16 | Falla reservas temporada alta  | H   | M   | 6     | SLA Neero 99.5% + backup telefono + pre-test de carga      |

### Riesgos Medios (Puntuacion 4) -- Revision Mensual

| ID  | Riesgo                          | P   | I   | Score |
| --- | ------------------------------- | --- | --- | ----- |
| R04 | Danos no reportados             | M   | M   | 4     |
| R09 | Demand shock post-Epic Universe | M   | M   | 4     |
| R11 | CFC MCO aumenta                 | M   | M   | 4     |

### Riesgos Bajos (Puntuacion 1-2) -- Revision Trimestral

| ID  | Riesgo                        | P   | I   | Score |
| --- | ----------------------------- | --- | --- | ----- |
| R10 | Perdida licencia DHSMV/BTR    | L   | M   | 2     |
| R12 | Cambios taxes/surcharges FL   | M   | L   | 2     |
| R14 | Turo competidor P2P           | L   | M   | 2     |
| R17 | CarSync/Fleetwire bloqueados  | L   | M   | 2     |
| R18 | Ciberseguridad datos turistas | M   | L   | 2     |
| R19 | Reseñas negativas iniciales   | M   | L   | 2     |

---

## Inversion Recomendada en Mitigacion

| Concepto                              | Costo estimado                       | Frecuencia | Riesgos que mitiga               |
| ------------------------------------- | ------------------------------------ | ---------- | -------------------------------- |
| Seguro comprehensive + umbrella $1M   | $5,500-$8,655/mes (flota 15 veh)     | Mensual    | R01, R02, R06, R07               |
| GPS tracker + geofencing (flota 15)   | $1,500-$3,000 one-time + $30/veh/mes | Mensual    | R02, R04, R17                    |
| Dashcam (flota 15)                    | $1,500-$3,000 one-time               | Una vez    | R01, R04                         |
| Consulta legal pre-lanzamiento FL     | $2,000-$5,000                        | Una vez    | R10, R11, R12                    |
| Certificacion BBB + programa reseñas  | $500-$1,500 Year 1                   | Anual      | R15, R19                         |
| Fondo emergencia (3 meses)            | $30,000-$45,000                      | Reserva    | R05, R06, R08                    |
| Abogado retenido                      | $500-$1,000/mes                      | Mensual    | R01, R10, R13                    |
| Garaje cubierto emergencia hurricane  | $300-$800/mes (contrato previo)      | Mensual    | R07                              |
| Roadside assistance 24/7              | $50-$100/veh/ano                     | Anual      | R03                              |
| **Total inversion mitigacion Year 1** | **$45,000-$75,000**                  | --         | **Cubre los 4 riesgos criticos** |

**Nota:** El rango superior refleja el escenario conservador con seguro de flota a tasa maxima para nuevo operador sin historial. Reducir 20-30% en Year 2 con historial limpio.

---

## Diferencias Clave vs. Miami

| Dimension              | Miami                             | Orlando                                              |
| ---------------------- | --------------------------------- | ---------------------------------------------------- |
| Riesgo critico nuevo   | Robo vehicular alto (Miami #1 FL) | Seguro flota mas caro (nuevo operador sin historial) |
| Competencia            | Mercado mixto local + turista     | 9 enterprise brands MCO con acceso en terminal       |
| Reputacion mercado     | Moderada                          | Deteriorada (6+ F/D- BBB independientes)             |
| Regulacion adicional   | N/A                               | CFC MCO en movimiento activo (+50% Nov 2024)         |
| Riesgo climatico       | Hurricane costero directo         | Hurricane tierra adentro (Ian 2022 demostro impacto) |
| Integracion tecnologia | WhatsApp API dependencia          | CarSync/Fleetwire bloqueados para Turo integration   |
| Demanda                | Estacionalidad Miami              | Epic Universe demand shock impredecible              |
| Riesgo financiero      | EBITDA fragil en baja temporada   | 4 riesgos criticos vs 3 en Miami (mas exposicion)    |

---

## Fuentes Consultadas

| Fuente                     | Referencia                                         | Fecha consulta | Dato extraido                            |
| -------------------------- | -------------------------------------------------- | -------------- | ---------------------------------------- |
| specs/05-modelo-negocio.md | EBITDA $28,098, seguro $3,100-$8,655/mes           | 2026-03-22     | Datos financieros Year 1 Orlando         |
| specs/03-competencia.md    | 9 enterprise brands MCO, reputacion independientes | 2026-03-22     | Estructura competitiva Orlando           |
| specs/06-dofa.md           | A1-A9 amenazas identificadas                       | 2026-03-22     | Amenazas base para riesgos competitivos  |
| FL Statute 322.38          | Obligaciones verificacion licencia                 | 2026-03-22     | Requisitos legales car rental FL         |
| FL Statute 320.0601        | Regulacion car rental FL                           | 2026-03-22     | DHSMV dealer licensing                   |
| FL Statute 212.0606        | Rental car surcharge $2/dia                        | 2026-03-22     | Surcharges FL car rental                 |
| MCO GOAA Nov 2024          | CFC aumento 50% noviembre 2024                     | 2026-03-22     | Customer Facility Charge MCO             |
| NHTSA I-4 crash data       | I-4 top 5 accidentes fatales USA                   | 2026-03-22     | Riesgo accidentalidad corredor Orlando   |
| NOAA Hurricane data        | Ian 2022 danos Central FL                          | 2026-03-22     | Riesgo hurricane tierra adentro          |
| BBB Orlando                | 6+ operadores F/D- rating                          | 2026-03-22     | Reputacion mercado independiente Orlando |
| Sacra 2024 (Turo)          | Turo revenue, Uber partnership                     | 2026-03-22     | Competidor P2P Orlando                   |
| Insureon FL                | Costos seguro comercial FL                         | 2026-03-22     | Rango primas seguro flota                |
| FinancialModelsLab         | Break-even 55-60%, KPIs car rental                 | 2026-03-22     | Umbral de break-even Year 1              |
| LegalClarity               | Leyes FL car rental, liability                     | 2026-03-22     | Marco legal responsabilidad              |
| Lancer Insurance           | Seguros especializados rental                      | 2026-03-22     | Seguros fleet rental                     |
| Orange County DHSMV        | BTR Orange County requirements                     | 2026-03-22     | Licencias operacion Orlando              |
