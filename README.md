# Descubre Tijuana

Cartelera independiente de actividades en Tijuana, preparada para Vercel.

## Funciones

- 52 eventos provenientes de fuentes oficiales, revisados el 5 de septiembre de 2026.
- Búsqueda sin distinción de acentos y filtros combinados de categoría, lugar, fecha y presupuesto.
- Calendario mensual con sesiones exactas; los eventos pasados se excluyen por defecto.
- Filtros compartibles mediante URL.
- Páginas individuales generadas al construir, metadatos, datos estructurados y sitemap.
- Fechas, precios, ubicación, fuente y enlaces para compartir cada evento.
- Descarga de calendario para actividades con horario confirmado. Una discrepancia de horario se señala y deshabilita esa descarga.
- Modo oscuro automático (respeta el sistema) con interruptor manual persistente.
- Evento destacado y estadísticas rápidas (planes activos, gratuitos, esta semana) en el inicio. Marca un evento con `"featured": true` en `events.json` para destacarlo.

## Desarrollo

npm run check verifica sintaxis y pruebas de filtros. npm run build genera dist y las fichas individuales. npm start sirve dist en el puerto 4173.

Vercel usa vercel.json. No requiere secretos ni dependencias externas.

## Contenido

Editar events.json y desplegar. Las sesiones discontinuas se guardan en sessions, con date y time. Nunca marcar un precio desconocido como gratis ni inventar un horario.

Fuentes: https://ferianacionaldetijuana.com/lineup/ · https://madueno.mx/collections/boletos · https://www.bajacalifornia.travel/es/eventos · https://servieventos.com.mx/ · https://www.cecut.gob.mx/qr/cecut.pdf · https://tecatepeninsula.com/ · https://expofactorfiesta.com/ · https://boletomovil.com/toros-tijuana · https://pwrticket.mx/ · https://haztj.com/

La selección no es exhaustiva y no se actualiza automáticamente. No hay panel público, venta de entradas, scraping programado ni cuentas sociales conectadas. Las imágenes pertenecen a sus respectivos organizadores y se referencian desde sus páginas.
