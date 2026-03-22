---
title: "Matriz de Riesgos — Car Rental Miami"
date: "2026-03-10"
updated: "2026-03-10"
status: "done"
priority: "High"
owner: "Neero SAS"
---

# Matriz de Riesgos -- Car Rental Miami

## Resumen Ejecutivo

| Metrica                     | Valor                                                                            |
| --------------------------- | -------------------------------------------------------------------------------- |
| Total riesgos identificados | 18                                                                               |
| Riesgos criticos (H-H)      | 3                                                                                |
| Riesgos altos (H-M o M-H)   | 6                                                                                |
| Riesgos medios (M-M)        | 5                                                                                |
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
High    | R03(6) R07(6)  | R01(9) R02(9) R05(9) |
Medium  | R09(4) R11(4)  | R04(6) R06(6) R08(6) | R15(3)
Low     | R14(2) R16(2)  | R10(2) R12(2) R17(2) | R13(1) R18(1)
        |    Low         |   Medium              |   High
                    PROBABILIDAD
```

---

## 1. Riesgos Operacionales

### R01 -- Accidente vehicular grave

| Campo        | Detalle                                                                                                                                                                      |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Categoria    | Operacional                                                                                                                                                                  |
| Descripcion  | Cliente sufre o causa accidente grave con vehiculo de la flota, resultando en lesiones, demanda legal, y/o perdida total del vehiculo                                        |
| Probabilidad | High (accidentes son frecuentes en Miami; FL es top 5 en accidentes vehiculares USA)                                                                                         |
| Impacto      | High (demanda legal, perdida de vehiculo $20K-$40K, aumento prima seguro)                                                                                                    |
| Puntuacion   | 9 (H x H) -- CRITICO                                                                                                                                                         |
| Mitigacion   | Seguro comercial comprehensive con cobertura minima $100K/$300K; verificacion licencia obligatoria; contrato de renta con clausulas de responsabilidad; dashcam en vehiculos |
| Contingencia | Abogado retenido para litigios; fondo emergencia $10K; protocolo de respuesta a incidentes documentado                                                                       |
| Fuente       | FL Statute 322.38, LegalClarity, NerdWallet                                                                                                                                  |

### R02 -- Robo de vehiculo

| Campo        | Detalle                                                                                                                                                         |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Categoria    | Operacional                                                                                                                                                     |
| Descripcion  | Vehiculo robado durante periodo de renta o desde estacionamiento de la flota                                                                                    |
| Probabilidad | High (Miami-Dade es top 10 en robo de vehiculos en USA; turistas son target frecuente)                                                                          |
| Impacto      | High (perdida $15K-$40K por vehiculo; disrupcion operativa; aumento seguro)                                                                                     |
| Puntuacion   | 9 (H x H) -- CRITICO                                                                                                                                            |
| Mitigacion   | GPS tracker en todos los vehiculos; seguro comprehensive con cobertura de robo; deposito en tarjeta credito; verificacion identidad estricta; geofencing alerts |
| Contingencia | Reporte policial inmediato; vehiculo de reemplazo para cliente; claim de seguro dentro de 24h                                                                   |
| Fuente       | FBI UCR, Miami-Dade Police, NerdWallet                                                                                                                          |

### R03 -- Fallo mecanico en ruta

| Campo        | Detalle                                                                                                                                   |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| Categoria    | Operacional                                                                                                                               |
| Descripcion  | Vehiculo falla mecanicamente durante uso del cliente (motor, transmision, llanta, bateria)                                                |
| Probabilidad | Medium (mantenimiento preventivo reduce probabilidad; flota nueva 1-3 anos)                                                               |
| Impacto      | High (cliente varado, experiencia negativa, costo de towing $150-$300, reparacion $500-$5,000)                                            |
| Puntuacion   | 6 (M x H)                                                                                                                                 |
| Mitigacion   | Mantenimiento preventivo cada 5,000 millas; inspeccion pre-entrega obligatoria; roadside assistance 24/7; rotacion de flota cada 3-4 anos |
| Contingencia | Contrato con grua local; vehiculo de backup disponible; reembolso parcial al cliente                                                      |
| Fuente       | OxMaint 2025, SimplyFleet                                                                                                                 |

### R04 -- Danos no reportados por cliente

| Campo        | Detalle                                                                                                                                                                      |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Categoria    | Operacional                                                                                                                                                                  |
| Descripcion  | Cliente devuelve vehiculo con danos no declarados; disputa sobre quien causo el dano                                                                                         |
| Probabilidad | Medium (frecuente en la industria; 15-20% de rentas tienen algun incidente menor)                                                                                            |
| Impacto      | Medium (costo reparacion $200-$2,000; tiempo fuera de servicio; posible disputa de chargeback)                                                                               |
| Puntuacion   | 4 (M x M)                                                                                                                                                                    |
| Mitigacion   | Inspeccion fotografica 360 grados pre y post entrega (con timestamp); video walkthrough con cliente; contrato claro con politica de danos; hold de deposito hasta inspeccion |
| Contingencia | Proceso de claims documentado; fotos como evidencia legal; politica de resolucion rapida                                                                                     |
| Fuente       | Benchmark industria, Lancer Insurance                                                                                                                                        |

---

## 2. Riesgos Financieros

### R05 -- Ocupacion por debajo de break-even

| Campo        | Detalle                                                                                                                                                                                |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Categoria    | Financiero                                                                                                                                                                             |
| Descripcion  | Utilizacion de flota cae consistentemente por debajo del 60% (break-even), especialmente en meses de baja temporada (Sep-Nov)                                                          |
| Probabilidad | High (nuevos operadores promedian 55-65% en Year 1; estacionalidad de Miami es pronunciada)                                                                                            |
| Impacto      | High (perdida operativa de $2,000-$5,000/mes por debajo de break-even; puede agotar capital de trabajo)                                                                                |
| Puntuacion   | 9 (H x H) -- CRITICO                                                                                                                                                                   |
| Mitigacion   | Dynamic pricing agresivo en low season; contratos mensuales con residentes/corporativos; marketing digital continuo; reduccion temporal de flota en low season (subarrendar vehiculos) |
| Contingencia | Linea de credito pre-aprobada; reserva de caja 3 meses ($30K-$45K); renegociacion de seguro                                                                                            |
| Fuente       | FinancialModelsLab, BusinessDojo, GMCVB (estacionalidad)                                                                                                                               |

### R06 -- Costos de seguro superiores al presupuesto

| Campo        | Detalle                                                                                                                                        |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| Categoria    | Financiero                                                                                                                                     |
| Descripcion  | Primas de seguro comercial aumentan significativamente despues de claims o por condiciones del mercado FL                                      |
| Probabilidad | Medium (FL es estado costoso en seguros; reformas 2023 ayudan pero mercado volatil)                                                            |
| Impacto      | High (aumento de $500-$1,000/vehiculo/ano puede eliminar margen de rentabilidad)                                                               |
| Puntuacion   | 6 (M x H)                                                                                                                                      |
| Mitigacion   | Cotizar con 3+ aseguradoras anualmente; deducible mas alto para reducir prima; historial de claims limpio; programa de seguridad del conductor |
| Contingencia | Restructurar mix de flota (menos vehiculos premium); pasar parte del costo al cliente via CDW                                                  |
| Fuente       | Insureon FL, FloridaAllRisk 2025                                                                                                               |

### R07 -- Deudas incobrables y chargebacks

| Campo        | Detalle                                                                                                                                                                    |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Categoria    | Financiero                                                                                                                                                                 |
| Descripcion  | Clientes disputan cargos en tarjeta de credito (danos, fuel, late fees); chargeback rate alto                                                                              |
| Probabilidad | Medium (industria car rental tiene chargeback rate 1-3%; turistas internacionales mayor riesgo)                                                                            |
| Impacto      | High (perdida del ingreso + fee de chargeback $25-$50 + posible perdida de cuenta merchant)                                                                                |
| Puntuacion   | 6 (M x H)                                                                                                                                                                  |
| Mitigacion   | Documentacion fotografica exhaustiva; contrato firmado digitalmente; autorizacion de tarjeta con hold previo; politica clara de cargos adicionales; comunicacion proactiva |
| Contingencia | Proceso de representment para disputar chargebacks; merchant account con proveedor especializado en car rental                                                             |
| Fuente       | Benchmark industria, payment processing best practices                                                                                                                     |

---

## 3. Riesgos Regulatorios

### R08 -- Incumplimiento regulatorio FL/Miami-Dade

| Campo        | Detalle                                                                                                                                                                                   |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Categoria    | Regulatorio                                                                                                                                                                               |
| Descripcion  | Falta de licencia, permiso, o incumplimiento de regulaciones de car rental en FL o Miami-Dade County                                                                                      |
| Probabilidad | Medium (regulaciones son complejas; multiples niveles: state, county, municipal)                                                                                                          |
| Impacto      | High (multas $500-$10,000; suspension de operaciones; responsabilidad legal personal)                                                                                                     |
| Puntuacion   | 6 (M x H)                                                                                                                                                                                 |
| Mitigacion   | Consulta legal pre-lanzamiento con abogado especializado; checklist de compliance: Sales Tax Permit, Rental Car Surcharge, Local Business Tax Receipt, zoning; calendario de renovaciones |
| Contingencia | Abogado retenido; suspension voluntaria hasta regularizacion; seguro de responsabilidad profesional                                                                                       |
| Fuente       | FL Statute 320.0601, miamidade.gov, OpenMyFloridaBusiness                                                                                                                                 |

### R09 -- Cambios en impuestos o surcharges

| Campo        | Detalle                                                                                                                                |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------- |
| Categoria    | Regulatorio                                                                                                                            |
| Descripcion  | Florida o Miami-Dade aumentan taxes o imponen nuevos surcharges sobre car rental (ej: extension a P2P, nuevos fees municipales)        |
| Probabilidad | Low (surcharge actual $2/dia estable; pero hay propuestas legislativas pendientes para P2P)                                            |
| Impacto      | Medium (aumento de 1-2% reduce margen; puede hacer precios menos competitivos vs Turo)                                                 |
| Puntuacion   | 2 (L x M)                                                                                                                              |
| Mitigacion   | Monitorear legislacion FL (flsenate.gov); membership en asociacion de car rental de FL; pasar impuestos al cliente (practica estandar) |
| Contingencia | Ajustar precios automaticamente con CMS Neero; comunicacion transparente al cliente                                                    |
| Fuente       | Tax Foundation, FL Statute 212.0606                                                                                                    |

### R10 -- Requisitos de seguro minimo insuficientes

| Campo        | Detalle                                                                                                                        |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| Categoria    | Regulatorio                                                                                                                    |
| Descripcion  | Minimos de FL ($10K PIP + $10K PDL) son inadecuados para cubrir accidente grave; exposicion legal si cobertura es insuficiente |
| Probabilidad | Medium (minimos FL son bajos comparados con otros estados)                                                                     |
| Impacto      | Low (solucion es simple: comprar cobertura superior al minimo; costo incremental manejable)                                    |
| Puntuacion   | 2 (M x L)                                                                                                                      |
| Mitigacion   | Contratar cobertura $100K/$300K bodily injury + $50K+ property damage (muy por encima del minimo); umbrella policy de $1M      |
| Contingencia | Revisar anualmente con broker de seguros especializado                                                                         |
| Fuente       | FL Statute 324.021, LegalClarity                                                                                               |

---

## 4. Riesgos Competitivos

### R11 -- Expansion agresiva de Turo en Miami

| Campo        | Detalle                                                                                                                                                                          |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Categoria    | Competitivo                                                                                                                                                                      |
| Descripcion  | Turo expande presencia en Miami con partnership Uber (150M MAU), ofreciendo precios 25% mas bajos que rental companies                                                           |
| Probabilidad | Medium (partnership anunciado; implementacion en progreso; Turo ya tiene presencia significativa en FL)                                                                          |
| Impacto      | Medium (reduce pool de clientes price-sensitive; presion a bajar precios)                                                                                                        |
| Puntuacion   | 4 (M x M)                                                                                                                                                                        |
| Mitigacion   | Diferenciacion por servicio (WhatsApp directo, soporte 24/7, multiidioma); target segmento que prefiere empresa formal vs P2P; enfocarse en turistas LATAM que desconfian de P2P |
| Contingencia | Listar vehiculos tambien en Turo como host (canal adicional); ajustar precios dinamicamente                                                                                      |
| Fuente       | Sacra 2024, Turo partnership data                                                                                                                                                |

### R12 -- Guerra de precios de incumbentes

| Campo        | Detalle                                                                                                                                 |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------- |
| Categoria    | Competitivo                                                                                                                             |
| Descripcion  | Enterprise, Hertz, Avis bajan precios agresivamente para recuperar market share (ambos reportaron perdidas billonarias en 2024)         |
| Probabilidad | Medium (Hertz perdio $2.9B en 2024; historial de pricing wars en la industria)                                                          |
| Impacto      | Low (independiente off-airport compite en segmento diferente; pricing war afecta mas al segmento aeropuerto)                            |
| Puntuacion   | 2 (M x L)                                                                                                                               |
| Mitigacion   | No competir en precio con incumbentes; diferenciacion por servicio personalizado, idioma, conveniencia off-airport; enfoque nicho LATAM |
| Contingencia | Reducir temporalmente flota; enfocar en contratos mensuales/corporativos menos sensibles a pricing wars                                 |
| Fuente       | Sacra 2024, MacroTrends (Avis Budget)                                                                                                   |

---

## 5. Riesgos Tecnologicos

### R13 -- Fallo de plataforma Neero

| Campo        | Detalle                                                                                                     |
| ------------ | ----------------------------------------------------------------------------------------------------------- |
| Categoria    | Tecnologico                                                                                                 |
| Descripcion  | Plataforma web o WhatsApp Flows deja de funcionar; clientes no pueden reservar                              |
| Probabilidad | Low (plataforma gestionada por Neero SAS con SLA; infraestructura cloud moderna)                            |
| Impacto      | Low (puede tomar reservas por telefono/email temporalmente; perdida de 1-2 dias de reservas online)         |
| Puntuacion   | 1 (L x L)                                                                                                   |
| Mitigacion   | SLA con Neero SAS para uptime 99.5%+; numero de telefono de backup publicado; email de reservas alternativo |
| Contingencia | Proceso manual de reservas via telefono; comunicacion a clientes por WhatsApp personal                      |
| Fuente       | proposals/04-architecture.md, Neero SAS SLA                                                                 |

### R14 -- Ciberseguridad y datos de clientes

| Campo        | Detalle                                                                                                                                                            |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Categoria    | Tecnologico                                                                                                                                                        |
| Descripcion  | Brecha de datos personales de clientes (tarjetas, licencias, pasaportes almacenados)                                                                               |
| Probabilidad | Low (plataforma Neero maneja datos; responsabilidad compartida)                                                                                                    |
| Impacto      | Medium (multas regulatorias, perdida de confianza, costo de notificacion y remediacion $5K-$50K)                                                                   |
| Puntuacion   | 2 (L x M)                                                                                                                                                          |
| Mitigacion   | No almacenar datos de tarjeta localmente (usar payment processor PCI-compliant); minimizar datos personales retenidos; encriptacion; politica de retencion 90 dias |
| Contingencia | Plan de respuesta a incidentes; seguro cyber liability; notificacion a afectados segun ley FL                                                                      |
| Fuente       | Best practices PCI-DSS, FL data breach notification law                                                                                                            |

### R15 -- Dependencia de WhatsApp API

| Campo        | Detalle                                                                                                                                              |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| Categoria    | Tecnologico                                                                                                                                          |
| Descripcion  | Meta cambia politicas de WhatsApp Business API, aumenta costos, o restringe uso para car rental                                                      |
| Probabilidad | High (Meta ha cambiado pricing y politicas multiples veces; plataforma de terceros)                                                                  |
| Impacto      | Medium (necesidad de migrar canal de comunicacion; perdida temporal de canal principal)                                                              |
| Puntuacion   | 6 (H x M)                                                                                                                                            |
| Mitigacion   | Mantener canal web y email como alternativas funcionales; no depender exclusivamente de WhatsApp; recopilar emails/telefonos de clientes como backup |
| Contingencia | Migrar a SMS/email marketing si WhatsApp se vuelve inviable; usar chatbot web como alternativa                                                       |
| Fuente       | Meta Business Platform policies, historico de cambios API                                                                                            |

---

## 6. Riesgos Reputacionales

### R16 -- Reseñas negativas iniciales

| Campo        | Detalle                                                                                                                                                            |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Categoria    | Reputacional                                                                                                                                                       |
| Descripcion  | Primeras reseñas negativas en Google/TripAdvisor danan reputacion cuando hay pocas reseñas totales (efecto desproporcionado)                                       |
| Probabilidad | Medium (inevitable tener alguna reseña negativa; con pocas reseñas totales el impacto es amplificado)                                                              |
| Impacto      | Low (manejable con respuesta activa; impacto reducido si se genera volumen de reseñas positivas rapidamente)                                                       |
| Puntuacion   | 2 (M x L)                                                                                                                                                          |
| Mitigacion   | Programa proactivo de reseñas (descuento 10% por reseña); respuesta profesional a cada reseña negativa en <24h; over-deliver en servicio para primeros 50 clientes |
| Contingencia | Campana de reseñas incentivadas; mejora de proceso basada en feedback                                                                                              |
| Fuente       | Benchmark industria hospitality                                                                                                                                    |

### R17 -- Incidente grave con cliente (lesion, fraude)

| Campo        | Detalle                                                                                                                                             |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| Categoria    | Reputacional                                                                                                                                        |
| Descripcion  | Incidente grave (cliente lesionado, fraude, vehiculo usado en actividad ilegal) genera cobertura mediatica negativa                                 |
| Probabilidad | Low (poco frecuente pero posible; verificacion de cliente reduce riesgo)                                                                            |
| Impacto      | Medium (dano reputacional, posible investigacion, perdida de confianza del mercado)                                                                 |
| Puntuacion   | 2 (L x M)                                                                                                                                           |
| Mitigacion   | Verificacion estricta de licencia e identidad (FL Statute 322.38); contrato con clausulas de uso prohibido; seguro de responsabilidad comprehensive |
| Contingencia | Abogado retenido; comunicado preparado; cooperacion total con autoridades; seguro de responsabilidad                                                |
| Fuente       | FL Statute 322.38, LegalClarity                                                                                                                     |

### R18 -- Fraude de seguro por cliente

| Campo        | Detalle                                                                                                                                       |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------- |
| Categoria    | Reputacional/Financiero                                                                                                                       |
| Descripcion  | Cliente reporta dano falso, robo ficticio, o exagera claim de seguro para obtener compensacion                                                |
| Probabilidad | Low (ocurre en industria pero verificacion reduce significativamente)                                                                         |
| Impacto      | Low (costo de investigacion; potencial aumento de prima si claim se paga)                                                                     |
| Puntuacion   | 1 (L x L)                                                                                                                                     |
| Mitigacion   | GPS tracking con historial; dashcam; inspeccion fotografica detallada; verificacion de identidad multiple; reportar intentos de fraude a NICB |
| Contingencia | Investigacion interna antes de procesar claim; Special Investigation Unit de aseguradora                                                      |
| Fuente       | NICB, Lancer Insurance                                                                                                                        |

---

## Resumen de Riesgos por Prioridad

### Riesgos Criticos (Puntuacion 9) -- Atencion Inmediata

| ID  | Riesgo                    | P   | I   | Score | Accion prioritaria                                           |
| --- | ------------------------- | --- | --- | ----- | ------------------------------------------------------------ |
| R01 | Accidente vehicular grave | H   | H   | 9     | Seguro comprehensive $100K/$300K + umbrella $1M              |
| R02 | Robo de vehiculo          | H   | H   | 9     | GPS tracker + geofencing + seguro robo                       |
| R05 | Ocupacion bajo break-even | H   | H   | 9     | Dynamic pricing + contratos mensuales + reserva caja 3 meses |

### Riesgos Altos (Puntuacion 6) -- Monitoreo Activo

| ID  | Riesgo                     | P   | I   | Score | Accion prioritaria                              |
| --- | -------------------------- | --- | --- | ----- | ----------------------------------------------- |
| R03 | Fallo mecanico             | M   | H   | 6     | Mantenimiento preventivo cada 5K millas         |
| R06 | Costos seguro superiores   | M   | H   | 6     | Cotizar 3+ aseguradoras anualmente              |
| R07 | Chargebacks/deudas         | M   | H   | 6     | Documentacion fotografica + contratos digitales |
| R08 | Incumplimiento regulatorio | M   | H   | 6     | Consulta legal pre-lanzamiento                  |
| R15 | Dependencia WhatsApp API   | H   | M   | 6     | Canales alternativos (web, email) activos       |
| R04 | Danos no reportados        | M   | M   | 4     | Inspeccion foto 360 pre/post                    |

### Riesgos Medios y Bajos (Puntuacion 1-4) -- Revision Trimestral

| ID  | Riesgo                     | P   | I   | Score |
| --- | -------------------------- | --- | --- | ----- |
| R09 | Cambios taxes              | L   | M   | 2     |
| R10 | Seguro minimo insuficiente | M   | L   | 2     |
| R11 | Expansion Turo             | M   | M   | 4     |
| R12 | Guerra precios incumbentes | M   | L   | 2     |
| R13 | Fallo plataforma           | L   | L   | 1     |
| R14 | Ciberseguridad             | L   | M   | 2     |
| R16 | Reseñas negativas          | M   | L   | 2     |
| R17 | Incidente grave            | L   | M   | 2     |
| R18 | Fraude seguro              | L   | L   | 1     |

---

## Inversion Recomendada en Mitigacion

| Concepto                              | Costo estimado                            | Frecuencia | Riesgos que mitiga               |
| ------------------------------------- | ----------------------------------------- | ---------- | -------------------------------- |
| Seguro comprehensive + umbrella       | $5,000-$7,000/vehiculo/ano                | Anual      | R01, R02, R06, R10               |
| GPS tracker (flota 15)                | $1,500-$3,000 one-time + $30/vehiculo/mes | Mensual    | R02, R04, R18                    |
| Consulta legal pre-lanzamiento        | $2,000-$5,000                             | Una vez    | R08, R09, R10                    |
| Fondo emergencia (3 meses)            | $30,000-$45,000                           | Reserva    | R05, R07                         |
| Dashcam (flota 15)                    | $1,500-$3,000 one-time                    | Una vez    | R01, R04, R18                    |
| Abogado retenido                      | $500-$1,000/mes                           | Mensual    | R01, R08, R17                    |
| **Total inversion mitigacion Year 1** | **$40,000-$65,000**                       | --         | **Cubre los 3 riesgos criticos** |

---

## Fuentes Consultadas

| Fuente                         | URL                                                                                                              | Fecha consulta | Dato extraido                      |
| ------------------------------ | ---------------------------------------------------------------------------------------------------------------- | -------------- | ---------------------------------- |
| FL Statute 322.38              | https://www.leg.state.fl.us/Statutes/index.cfm?App_mode=Display_Statute&URL=0300-0399/0322/Sections/0322.38.html | 2026-03-10     | Obligaciones verificacion licencia |
| FL Statute 320.0601            | https://www.flsenate.gov/laws/statutes/2011/320.0601                                                             | 2026-03-10     | Regulacion car rental FL           |
| FL Statute 212.0606            | https://law.justia.com/codes/florida/title-xiv/chapter-212/section-212-0606/                                     | 2026-03-10     | Rental car surcharge $2/dia        |
| Miami-Dade Consumer Protection | https://www.miamidade.gov/global/economy/consumer-protection/rental-car-companies.page                           | 2026-03-10     | Regulaciones locales car rental    |
| OpenMyFloridaBusiness          | https://openmyfloridabusiness.gov/business/532/rental-and-leasing-services/                                      | 2026-03-10     | Licencias y permisos requeridos    |
| Insureon FL                    | https://www.insureon.com/small-business-insurance/commercial-auto/florida                                        | 2026-03-10     | Costos seguro comercial            |
| Sacra (Turo)                   | https://sacra.com/c/turo/                                                                                        | 2026-03-10     | Turo revenue, Uber partnership     |
| FinancialModelsLab             | https://financialmodelslab.com/blogs/kpi-metrics/car-rental                                                      | 2026-03-10     | Break-even 60%, KPIs               |
| LegalClarity                   | https://legalclarity.org/florida-rental-car-laws-on-age-insurance-and-liability/                                 | 2026-03-10     | Leyes FL car rental, liability     |
| Tax Foundation                 | https://taxfoundation.org/blog/florida-rental-car-tax-florida-car-sharing/                                       | 2026-03-10     | Propuestas legislativas P2P        |
| NerdWallet                     | https://www.nerdwallet.com/article/small-business/car-rental-business-insurance                                  | 2026-03-10     | Seguros car rental business        |
| Lancer Insurance               | https://www.lancerinsurance.com/auto-rental                                                                      | 2026-03-10     | Seguros especializados rental      |
| OxMaint                        | https://www.oxmaint.com/blog/post/fleet-maintenance-costs-budget-2025                                            | 2026-03-10     | Costos mantenimiento flota         |
