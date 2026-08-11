---
title: "Checklist de seguridad básica para el sitio web de tu empresa"
description: "Diez medidas concretas que reducen la mayoría de los riesgos, ordenadas por impacto y facilidad de implementación."
pubDate: 2026-08-01
tags: ["ciberseguridad", "buenas prácticas"]
---

No hace falta un presupuesto de corporativo para tener un sitio razonablemente seguro. La mayor parte de los incidentes que vemos se habrían evitado con medidas básicas.

## Lo que deberías tener hoy mismo

1. **HTTPS en todo el sitio**, con redirección forzada desde HTTP y HSTS activado.
2. **Autenticación en dos pasos** en el registrador del dominio, el hosting y el panel de DNS. Es la cuenta más crítica y la que menos se protege.
3. **Respaldos automáticos** con restauración probada. Un respaldo que nunca has restaurado es una suposición, no un respaldo.
4. **Actualizaciones al día** del CMS, plugins y dependencias. La mayoría de los ataques masivos explotan fallos ya parcheados.
5. **WAF y protección DDoS** delante del origen. En Cloudflare esto se activa en minutos.

## Lo que suele olvidarse

6. **SPF, DKIM y DMARC** configurados. Sin ellos, cualquiera puede enviar correos suplantando tu dominio.
7. **Cabeceras de seguridad**: `Content-Security-Policy`, `X-Frame-Options`, `Referrer-Policy`.
8. **Principio de mínimo privilegio**: nadie necesita ser administrador "por si acaso".
9. **Monitoreo de disponibilidad** con alertas. Enterarte por un cliente de que el sitio está caído es la peor forma de enterarte.
10. **Control de vencimientos** del dominio y los certificados. Un dominio expirado por olvido es un problema caro de revertir.

## Cómo priorizar

Si solo puedes hacer tres cosas esta semana: activa 2FA en el registrador, verifica que tus respaldos restauran de verdad, y pon el sitio detrás de un WAF. Con eso cubres los escenarios más frecuentes y más costosos.

¿Quieres saber en qué punto está tu sitio? Hacemos un diagnóstico gratuito y te decimos qué atender primero.
