---
title: "Cómo transferir tu dominio sin que se caiga tu página"
description: "Guía paso a paso para mover un dominio entre registradores manteniendo la web y el correo funcionando en todo momento."
pubDate: 2026-07-15
tags: ["dominios", "migración"]
---

Cambiar de registrador asusta a mucha gente, y con razón: si se hace mal, el sitio y el correo pueden quedar fuera de línea durante horas. La buena noticia es que un traspaso bien planificado **no genera ninguna interrupción**.

## El error más común

La mayoría de las caídas ocurren por un motivo simple: se ejecuta la transferencia antes de replicar la configuración DNS en el nuevo proveedor. Al completarse el cambio, el dominio apunta a una zona vacía y todo deja de resolver.

## El orden correcto

1. **Inventario.** Documenta cada registro DNS actual: A, AAAA, CNAME, MX, TXT (SPF, DKIM, DMARC), y cualquier verificación de servicios externos.
2. **Bajar el TTL.** Entre 24 y 48 horas antes, reduce el TTL a 300 segundos para que los cambios se propaguen rápido.
3. **Crear la zona destino.** Replica todos los registros en el proveedor nuevo, sin activar nada todavía.
4. **Desbloquear y obtener el código EPP.** En el registrador actual, quita el bloqueo de transferencia y pide el código de autorización.
5. **Iniciar la transferencia** y aprobar el correo de confirmación que llega al contacto administrativo del WHOIS.
6. **Cambiar los nameservers** una vez completada la transferencia.
7. **Verificar.** Comprueba que la web carga, que el correo entra y sale, y que el certificado SSL sigue válido.
8. **Restaurar el TTL** a su valor normal y volver a activar el bloqueo del dominio.

## Detalles que conviene tener presentes

- Un dominio **no se puede transferir dentro de los 60 días** siguientes a su registro o a una transferencia previa.
- Los datos del WHOIS deben estar actualizados: si el correo administrativo es inaccesible, el proceso se detiene.
- La transferencia normalmente **añade un año** a la vigencia del dominio, así que no pierdes tiempo pagado.

## ¿Y si prefieres no tocar nada?

Es exactamente lo que hacemos en ResguardaIt: nos encargamos del proceso completo y te avisamos cuando está listo. El dominio queda siempre a nombre de tu empresa.
