# Notes techniques — formulaire newsletter

## Cause du bug (une phrase)

Cloudflare Pages ignorait silencieusement le dossier `functions/` et le fichier `_worker.js` manuel placés dans `dist/`, car sans l'adaptateur officiel `@astrojs/cloudflare` le projet était traité en mode purement statique et aucun Worker n'était activé.

## Ce qui a été changé

| Fichier | Action |
|---|---|
| `src/pages/api/subscribe.ts` | Créé — route API Astro native (`prerender = false`), appelle Brevo côté serveur |
| `astro.config.mjs` | Ajout adaptateur `@astrojs/cloudflare` en mode `hybrid` |
| `src/env.d.ts` | Ajout types Cloudflare Runtime pour `BREVO_API_KEY` |
| `package.json` | Ajout dépendance `@astrojs/cloudflare@10` |
| `public/_worker.js` | Supprimé (remplacé par la route Astro) |
| `functions/api/subscribe.js` | Supprimé (approche précédente sans adaptateur) |
| `public/_routes.json` | Supprimé (inutile avec l'adaptateur) |

## Architecture finale

- Toutes les pages Astro existantes restent **statiques** (pré-rendues au build).
- `/api/subscribe` est la seule route **SSR** (exécutée à la demande par le Worker Cloudflare).
- La clé `BREVO_API_KEY` n'est jamais exposée côté client — elle est lue depuis les variables d'environnement Cloudflare Pages au runtime.

## Confirmation

Testé en production le 2026-07-30 :
- `GET /api/subscribe` → `{"error":"Method not allowed"}` ✅
- `POST /api/subscribe` avec un email valide → `{"success":true}` ✅
- Le formulaire newsletter affiche "Merci ! Vérifie ta boîte mail." ✅
