# Sitio web de Cometa · aprender

Página de presentación y descarga de la plataforma `learn/`, hecha con Astro con el mismo estilo que `webpage/`.

```sh
npm install
npm run dev
npm run build
```

- `src/lib/sitio.ts`: enlaces. Pon la URL de descarga en `DESCARGA`; mientras esté vacía la página muestra «Descarga próximamente».
- `public/cursos/catalogo.json`: el catálogo que lee `aprender` (versión más nueva, contacto y cursos para instalar). Los `.zip` de los cursos van en la misma carpeta. Ver `learn/LICENCIAS.md`.
- `public/licencias/`: las licencias publicadas, una carpeta por equipo. Las escribe `licencias emitir --web`.
- `public/captura-leccion.jpg`: captura de la plataforma (lección «El calabozo»). Vuelve a tomarla si cambia la interfaz.
- `src/styles/global.css`, `Logo.astro` y `favicon.svg` son copia de `webpage/`.
