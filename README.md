# MIA Tijuana

Primera versión de una cartelera independiente para descubrir actividades en Tijuana.

## Uso

`npm run check` verifica sintaxis y `npm run build` prepara `dist/`. `npm start` sirve el proyecto en http://127.0.0.1:4173.

Vercel: importar este repositorio. La configuración incluida ejecuta el build y publica dist. No requiere paquetes externos ni secretos.

## Alcance actual

- Cartelera responsive con búsqueda, filtros y detalles enlazados a fuentes oficiales.
- Cuatro eventos iniciales revisados el 5 de septiembre de 2026. No es un feed en tiempo real.
- Estudio de captura manual con cartel local, descarga y recuperación de fichas JSON y textos por plantilla para cuatro canales.
- El estudio no guarda datos en un servidor ni modifica la cartelera. Su acceso público no otorga permisos de publicación. Las fichas deben descargarse para conservarlas; las imágenes no se incluyen.
- No hay scraping automático, OCR, cuentas sociales conectadas, generación de video, venta de entradas ni cobros.

Para actualizar la cartelera se edita events.json y se despliega. Antes de habilitar publicación desde el estudio se necesita autenticación, almacenamiento persistente, revisión editorial y autorización del servidor.

## Fuentes de eventos e imágenes

https://tecatepeninsula.com/ · https://expofactorfiesta.com/ · https://www.cecut.gob.mx/

Las imágenes se referencian desde los sitios de sus organizadores. MIA no afirma organizar esos eventos. Fechas, precios y disponibilidad deben reconfirmarse con la fuente oficial.
