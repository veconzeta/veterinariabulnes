# Bitácora — Veterinaria Bulnes

---

## Sesión 1 — 2026-04-25

### Lo que se hizo

- Planificación completa del proyecto (stack, secciones, SEO, política de agendamiento)
- Setup manual de Next.js 16 + TypeScript + Tailwind CSS (create-next-app rechazó el nombre en mayúsculas)
- Desarrollo completo del sitio one-page:
  - Header, Hero, Servicios, SobreElDr, Agendamiento, Ubicacion, Contacto, Footer, WhatsAppFAB
  - SEO: metadata, Schema.org VeterinaryCare, sitemap, robots.txt
  - WhatsApp integrado con mensaje automático predefinido
- Configuración SSH multi-cuenta GitHub en el equipo
- Push a GitHub bajo cuenta veconzeta
- Deploy exitoso en Cloudflare Pages → **veterinariabulnes.pages.dev**

### Decisiones tomadas

| Decisión | Alternativa descartada | Razón |
|---|---|---|
| Cloudflare Pages | Vercel | ISP bloqueaba vercel.com a nivel SSL |
| SSH multi-cuenta | HTTPS + token | Más limpio, permite múltiples cuentas sin conflictos |
| One-page | Multi-página | Más fácil de mantener, mejor UX mobile |
| output: export | Server-side | Sitio 100% estático, no necesita servidor |

### Problemas resueltos

1. **vercel.com bloqueado por ISP (ERR_CONNECTION_CLOSED)**
   - Diagnóstico: tracert mostró que la IP de vercel.com resolvía a servidores internos del ISP (ISP interceptaba SSL)
   - Solución: instalar **Cloudflare WARP** → cifra el tráfico antes de que el ISP lo intercepte

2. **DNS del ISP interceptando consultas**
   - Acción: cambiar DNS a `8.8.8.8` / `1.1.1.1` en interfaz Ethernet vía netsh (como administrador)
   - Resultado: parcialmente útil, el WARP fue la solución definitiva

3. **create-next-app rechazó el nombre VETERINARIABULNES (mayúsculas)**
   - Solución: configurar el proyecto manualmente (package.json con nombre `veterinaria-bulnes`, instalar dependencias, crear archivos de config)

4. **Git push con cuenta incorrecta (occulta-app en vez de veconzeta)**
   - Causa: Windows Credential Manager tenía guardada credencial `git:https://github.com` con usuario `occulta-app`
   - Solución: configurar SSH con dos pares de claves separadas y hosts distintos en `~/.ssh/config`

5. **Configuración SSH multi-cuenta GitHub**
   - Claves generadas: `~/.ssh/id_veconzeta` y `~/.ssh/id_occulta`
   - Config en `~/.ssh/config` con hosts `github-veconzeta` y `github-occulta`
   - Remote del proyecto: `git@github-veconzeta:veconzeta/veterinariabulnes.git`
   - **Regla:** para el proyecto Occulta, verificar que el remote use `git@github-occulta:occulta-app/repo.git`

6. **Cloudflare Pages en bucle de autenticación GitHub**
   - Causa: problema de cookies/sesión en el navegador principal
   - Solución: usar **modo incógnito** (Ctrl+Shift+N)

7. **Build error en Cloudflare Pages: sitemap.xml y robots.txt**
   - Error: `export const dynamic = "force-static" not configured on route "/sitemap.xml"`
   - Solución: agregar `export const dynamic = "force-static"` en `src/app/sitemap.ts` y `src/app/robots.ts`

### Estado al cierre de sesión

- Sitio en línea: **veterinariabulnes.pages.dev** ✓
- Dominio `.cl`: pendiente (no conectar hasta aprobación del cliente)
- Logo: pendiente (en desarrollo)
- Datos del cliente: incompletos (horario, depósito, banco)

---

## Sesión 2 — 2026-05-02

### Lo que se hizo

**1. Actualización de Textos y Políticas**
- Se eliminó el monto específico del depósito ($10.000) y la mención a bancos en `src/lib/constants.ts` y en `src/components/Agendamiento.tsx`. Ahora se indica que el proceso será gestionado internamente por el doctor.

**2. Ubicación de Archivos y Assets Gráficos**
- `public/logo.svg` y `public/logo-white.svg`: Logos principales (con texto). Se ubican en `public/` para uso general como imágenes `<img>`.
- `public/icon-white.svg`: Isotipo aislado (solo la "B"). Lo generé a partir del logo principal editando el `viewBox` del SVG para poder usarlo en espacios horizontales pequeños.
- `src/app/icon.png` y `src/app/apple-icon.png`: Íconos de navegador web y atajo de Apple. Se ubican dentro de `src/app/` porque Next.js los compila automáticamente como metadata estandarizada.
- `src/app/opengraph-image.jpg`: Imagen miniatura para redes sociales (WhatsApp, Facebook). También se auto-procesa por Next.js.

**3. Cirugía de Diseño UX/UI**
- **Header (`src/components/Header.tsx`):** Se reemplazó el logo vertical cuadrado (que era ilegible al reducirse a 48px) por el isotipo `icon-white.svg` limpio, acompañado del nombre estructurado en texto HTML a su lado. Esto crea un diseño horizontal óptimo.
- **Hero (`src/components/Hero.tsx`):** Se eliminó el círculo contenedor para el logo. El `logo-white.svg` gigante ahora flota en la derecha (con animación de hover). Para evitar redundancia de lectura, el texto a la izquierda ya no repite "Veterinaria Bulnes", sino que se cambió por un eslogan ("Tu clínica de confianza"). El nombre real se ocultó visualmente para el SEO en un `<h1 className="sr-only">`.
- **Footer (`src/components/Footer.tsx`):** Integración de `logo-white.svg` a mayor escala.

*(hecho por gemini)*

### Pendientes
1. Confirmar y actualizar horario final en `src/lib/constants.ts` (Google dice hasta las 21:00, el código dice 19:00).
2. Conectar dominio `veterinariabulnes.cl` en Cloudflare Pages.
3. Hacer el repositorio privado en GitHub.

---

## Notas técnicas importantes

### Para hacer commits/push en este proyecto
```bash
# El remote ya está configurado con SSH veconzeta
git add .
git commit -m "descripcion del cambio"
git push
# Usa automáticamente git@github-veconzeta → cuenta veconzeta
```

### Para actualizar datos del cliente
Todos los datos están centralizados en un solo archivo:
```
src/lib/constants.ts
```
Editar ahí y el sitio completo se actualiza automáticamente.

### Cloudflare Pages
- Dashboard: dash.cloudflare.com
- Cuenta: Contacto.veconzeta@gmail.com
- Proyecto: veterinariabulnes
- Cada `git push` a `main` dispara un redeploy automático
