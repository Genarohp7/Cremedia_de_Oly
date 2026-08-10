# Cremería D’Oly

Sitio web comercial para Cremería D’Oly, construido como una primera propuesta profesional lista para revisión con cliente. La página presenta la identidad, categorías confirmadas, bloque editorial, sección de sucursales preparada para datos reales y contacto sin inventar información comercial.

## Stack

- Next.js con App Router
- React
- TypeScript
- CSS global moderno
- ESLint

## Instalación

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

## Build

```bash
npm run build
```

## GitHub Pages

El proyecto ya incluye el workflow:

```text
.github/workflows/deploy-pages.yml
```

Para activar la publicación en GitHub:

1. Entra al repositorio en GitHub.
2. Abre `Settings`.
3. Ve a `Pages`.
4. En `Build and deployment`, selecciona `GitHub Actions`.
5. Guarda la configuración.
6. Haz push a `main` o ejecuta manualmente el workflow `Deploy to GitHub Pages`.

El build de GitHub Pages usa `GITHUB_PAGES=true` para publicar correctamente bajo:

```text
/Cremedia_de_Oly
```

## Lint

```bash
npm run lint
```

## Estructura principal

```text
src/
  app/
    layout.tsx
    page.tsx
    globals.css
    robots.ts
    sitemap.ts
    manifest.ts
  data/
    site.ts
public/
  images/
    brand/
    history/
    generated/
    illustrations/
```

## Cambiar información comercial

La información editable vive en:

```text
src/data/site.ts
```

Ahí se modifican:

- Nombre del negocio
- Claim
- Descripción
- Navegación
- Categorías
- Teléfono
- WhatsApp
- Email
- Facebook
- Instagram
- Sucursales
- Dominio final del sitio

Si un dato de contacto está vacío, el sitio no lo muestra. No uses correos, teléfonos, direcciones o enlaces provisionales falsos.

## Agregar sucursales

Edita el arreglo `locations` en `src/data/site.ts`:

```ts
locations: [
  {
    id: "sucursal-principal",
    name: "",
    address: "",
    phone: "",
    whatsapp: "",
    hours: "",
    mapsUrl: "",
    latitude: null,
    longitude: null
  }
]
```

Completa solo datos confirmados por el cliente.

## Reemplazar imágenes

- Logo original: `public/images/brand/`
- Foto histórica del local: `public/images/history/`
- Fotografías provisionales generadas: `public/images/generated/`
- Ilustraciones SVG originales: `public/images/illustrations/`

Las imágenes provisionales pueden reemplazarse conservando los mismos nombres de archivo, o actualizando las rutas en `src/data/site.ts`.

## Assets actuales

El logo proporcionado por el cliente está copiado en:

```text
public/images/brand/cremeria-doly-logo-original.jpeg
```

Las fotografías gastronómicas provisionales están en:

```text
public/images/generated/hero-gourmet.png
public/images/generated/categoria-quesos.png
public/images/generated/categoria-artesanales.png
public/images/generated/categoria-gourmet.png
```

Los SVG originales están en:

```text
public/images/illustrations/cheese-wheel.svg
public/images/illustrations/cheese-wedge.svg
public/images/illustrations/gourmet-pattern.svg
public/images/illustrations/register-mark.svg
```

## SEO

La metadata principal está en `src/app/layout.tsx`. El dominio final se debe colocar en `siteConfig.siteUrl` cuando exista. Mientras no haya dominio real, no se inventa una URL productiva.

También se incluyen:

- Open Graph
- Twitter card
- Favicon
- Manifest
- Robots
- Sitemap preparado
- JSON-LD con datos confirmados
