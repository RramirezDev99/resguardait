# Publicar ResguardaIt — pasos exactos

Tiempo estimado: 10 minutos.

---

## Paso 0 — Probar en tu máquina

```bash
cd resguardait
npm install
npm run dev
```

Abre http://localhost:4321 y revisa las 7 páginas. `Ctrl+C` para detener.

---

## Paso 1 — Activar el formulario (2 min)

1. Entra a **https://web3forms.com** → escribe `contacto@resguardait.lat` → **Create Access Key**
2. Te llega la clave por correo (no hay que crear cuenta ni tarjeta)
3. Abre `src/pages/contacto.astro`, línea 9, y reemplaza:

   ```js
   const WEB3FORMS_ACCESS_KEY = 'TU_ACCESS_KEY';
   ```

   por tu clave real. Es pública por diseño, no es un secreto — no pasa nada si queda en GitHub.

Al enviar el formulario el visitante cae en `/gracias` y a ti te llega el correo.

---

## Paso 2 — Subir a GitHub

El repositorio ya viene inicializado con el primer commit hecho.

1. Ve a **https://github.com/new** → nombre `resguardait` → **Private** → **Create repository**
   (no marques ninguna casilla de README, .gitignore ni licencia)

2. En tu terminal, dentro de la carpeta `resguardait`:

   ```bash
   git remote add origin https://github.com/TU_USUARIO/resguardait.git
   git push -u origin main
   ```

> Si git te pide identificarte, configura una vez:
> ```bash
> git config --global user.name "Ruben"
> git config --global user.email "tu@correo.com"
> ```

---

## Paso 3 — Conectar Cloudflare Pages

1. Panel de Cloudflare → **Workers & Pages** → **Create** → pestaña **Pages** → **Connect to Git**
2. Autoriza GitHub y elige el repo `resguardait`
3. Configura el build:

   | Campo | Valor |
   |---|---|
   | Framework preset | `Astro` |
   | Build command | `npm run build` |
   | Build output directory | `dist` |

4. En **Environment variables** añade:

   | Variable | Valor |
   |---|---|
   | `NODE_VERSION` | `20` |

5. **Save and Deploy**. En ~1 minuto tendrás una URL tipo `resguardait.pages.dev`. Ábrela y verifica.

---

## Paso 4 — Apuntar tu dominio

1. Dentro del proyecto de Pages → pestaña **Custom domains** → **Set up a custom domain**
2. Escribe `resguardait.lat` → **Continue** → **Activate domain**
   Como el dominio ya está en Cloudflare, el registro DNS se crea solo.
3. Repite con `www.resguardait.lat` si quieres esa variante.

### ⚠️ Importante: quitar el sitio anterior

Tu `index.html` viejo está en otro sitio de Pages o en un bucket. Si no lo desconectas, los dos pelearán por el mismo dominio.

- Ve a **Workers & Pages**, abre el proyecto antiguo → **Custom domains** → elimina `resguardait.lat` de ahí
- Cuando el nuevo sitio esté funcionando bien, borra el proyecto viejo

---

## Paso 5 — Verificar que quedó bien

- [ ] `https://resguardait.lat` carga con candado (HTTPS)
- [ ] `https://resguardait.lat/sitemap-index.xml` devuelve XML
- [ ] `https://resguardait.lat/robots.txt` se ve
- [ ] Envías el formulario y te llega el correo
- [ ] Una URL inventada (`/asdf`) muestra tu página 404
- [ ] Pruebas el menú en el celular

Extra recomendado: da de alta el sitio en **Google Search Console** y envía el sitemap. Es lo que hace que Google te encuentre.

---

## Y a partir de ahora

Cada cambio se publica solo:

```bash
git add .
git commit -m "Actualizo precios"
git push
```

Cloudflare detecta el push y despliega en menos de un minuto. Si algo sale mal, en el panel de Pages puedes volver a cualquier despliegue anterior con un clic.

---

## Pendientes tuyos

- [ ] Clave de Web3Forms (Paso 1)
- [ ] Precios reales en `src/consts.ts` — ahora dicen `$—`
- [ ] Tu WhatsApp en `src/consts.ts`
- [ ] Confirmar que `contacto@resguardait.lat` existe y lo revisas
- [ ] Reemplazar los 3 casos de ejemplo en `src/consts.ts` por clientes reales
- [ ] Tu logo en `public/favicon.svg`
