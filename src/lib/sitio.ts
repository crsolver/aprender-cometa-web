/** Enlaces compartidos del sitio. */
export const COMETA_WEB = 'https://crsolver.github.io/cometadev/';
export const GITHUB = 'https://github.com/crsolver/cometa';
export const CORREO = 'crsolver@proton.me';

/** Enlace de descarga de aprender. Mientras esté vacío la página muestra "Próximamente". */
export const DESCARGA = 'https://github.com/crsolver/cometa/releases/download/v0.1.1/cometa-aprender_v0.1.1_windows_amd64.zip';

/** Ruta del sitio. Cámbiala si se publica en una subcarpeta (por ejemplo '/aprender'). */
export const BASE = '/aprender-cometa-web';
export const url = (ruta: string) => BASE + ruta;
