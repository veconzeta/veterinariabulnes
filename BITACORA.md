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
- Recepción de paquete gráfico (logos en SVG, iconos en PNG para Web y Apple, imagen OpenGraph).
- Migración de archivos gráficos a directorios correspondientes (`public/` para SVGs estáticos, `src/app/` para metadatos automatizados de Next.js).
- Integración de `logo-white.svg` en `Header.tsx`, `Footer.tsx` y `Hero.tsx` (reemplazando emojis de huellas). *(hecho por gemini)*

### Pendientes
1. Actualizar `src/lib/constants.ts` con datos confirmados por el cliente (horario, depósito, banco).
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
