# Nunapp Landing — CLAUDE.md

## Qué es este proyecto
Sitio web de marketing para **Nunapp**, app móvil de terapia de sonido para el tinnitus, producto de **Emuna Cloud Technologies Inc.**

- **Repo:** `github.com/juancarlosotero/nunapp-landing`
- **Dominio:** `nunapp.emunacloud.ca`
- **Vercel project:** `nunapp-landing` (scope: sg-360)
- **Stack:** Next.js 16 (App Router) + Tailwind CSS

## Estructura
```
app/
  page.tsx        — Landing page principal (bilingüe ES/EN)
  privacy/        — Política de privacidad
  terms/          — Términos de uso
  layout.tsx      — Layout raíz + metadata SEO
  globals.css     — Variables de color (CSS @theme)
  favicon.ico     — Ícono de la luna creciente salmón
public/
  icon.png        — Ícono de la app (512x512, origen: icono nunapp/nunapp_icon.png)
  apple-touch-icon.png
```

## Colores de marca Nunapp
| Token | Valor |
|---|---|
| `--color-cream` | `#FEFAE0` |
| `--color-night` | `#111827` |
| `--color-night-soft` | `#1f2937` |
| `--color-salmon` | `#D4A373` |
| `--color-salmon-dark` | `#E29578` |

## i18n
Detección automática de idioma del navegador (ES/EN). Toggle manual en la navbar. Sin dependencias externas — strings inline en `page.tsx`.

## Deploy
```bash
cd /Users/juanotero/Desktop/nunapp-landing
vercel --prod --yes --scope sg-360
```
⚠️ **NUNCA** hacer deploy desde `/Desktop/nunapp-web` — ese proyecto es el Flutter web app y pisaría los alias de dominio.

## Dominios del ecosistema Nunapp / Emuna Cloud
| Dominio | Proyecto Vercel | Contenido |
|---|---|---|
| `nunapp.emunacloud.ca` | `nunapp-landing` | Este landing page |
| `nunapp.rigsapanama.com` | `nunapp-web` | Flutter web app (NO tocar con CLI desde este repo) |
| `www.emunacloud.ca` | `emunacloud` | Sitio corporativo Emuna Cloud |

## Links pendientes (App Store / Google Play)
En `app/page.tsx`, los botones de descarga apuntan a `#`. Reemplazar cuando se publique la app:
- App Store: `https://apps.apple.com/app/nunapp/id[ID]`
- Google Play: `https://play.google.com/store/apps/details?id=ca.emunacloud.nunapp`

## Aviso legal importante
Nunapp **no es un dispositivo médico**. Este aviso debe mantenerse en footer, /privacy y /terms. Es requisito de App Store y Google Play.
