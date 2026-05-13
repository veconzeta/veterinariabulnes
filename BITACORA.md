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

## Sesión 3 — 2026-05-02

### Rediseño visual — Estilo The Paw Advisor con colores Veterinaria Bulnes
- Hero con fondo blanco + logo en círculo punteado navy + stats navy
- Servicios con círculos navy para íconos, centrado
- SobreElDr con patrón huellas y stats navy con texto blanco
- Tailwind extendido con navy-100 a navy-400
*(hecho por Claude)*

### Rediseño completo — Estética médica de autoridad
El diseño "amigable" no representaba la trayectoria del Dr. Pozo. Se rehízo todo con dirección de clínica médica de prestigio.

**Cambios por componente:**
- **globals.css:** Sin patrones decorativos. Botones con esquinas rectas (`rounded-sm`). Nueva clase `section-label` (tiny caps navy), `section-divider` (línea navy 12px), tipografía más formal.
- **Header:** Barra superior con dirección y teléfono. Nav en uppercase tracking-widest. CTA rectangular sin redondeo. "Veterinaria" light / "Bulnes" bold.
- **Hero:** Fondo blanco limpio. Headline directo: "50 años al servicio de la salud animal." Tarjeta de credenciales navy a la derecha con datos reales (no decoración).
- **Servicios:** Grid con borde compartido (gap-px bg-gray-200). Sin círculos. Íconos SVG línea fina. Cards con separadores internos de borde.
- **SobreElDr:** Statement tipográfico izquierda. Lista de credenciales con líneas separadoras derecha. Stat "50+" en bloque navy.
- **Contacto:** Grid con separador gris (gap-px). Íconos SVG inline. Hover navy completo con texto blanco.
*(hecho por Claude)*

---

## Sesión 3 — 2026-05-02

### Lo que se hizo

**Rediseño visual estilo "The Paw Advisor" (Opción B — colores Veterinaria Bulnes)**

- **`src/app/globals.css`:** Agregado patrón de huellas de pata (SVG inline como background-image CSS) con opacidad 4% en clase `.paw-pattern`. Agregada clase `.btn-outline` para botón secundario con borde navy.
- **`src/components/Hero.tsx`:** Fondo oscuro navy → fondo blanco con patrón de huellas. Texto cambia a navy. Logo color (logo.svg) en círculo blanco con borde punteado navy y sombra. Botón secundario cambia a outline.
- **`src/components/Servicios.tsx`:** Cards centradas. Ícono emoji dentro de círculo navy sólido (w-20 h-20). Texto centrado. Hover con sombra más pronunciada.
- **`src/components/SobreElDr.tsx`:** Sección con patrón de huellas. Círculo decorativo con borde punteado navy. Stats cards cambian a fondo navy-800 con texto blanco (estilo del reference).
- **`tailwind.config.ts`:** Agregados tonos navy-100 a navy-400 para tener el espectro completo disponible.

*(hecho por Claude)*

---

## Sesión 4 — 2026-05-03

### Lo que se hizo

**1. Horario actualizado**
- `src/lib/constants.ts`: horario actualizado a "Lunes a Sábado · 15:00 – 20:00 · Solo con agendamiento previo"

**2. Refinamiento de diseño — iteraciones visuales**
- **Header:** Integración de `logo-horizontal-white.svg` (versión blanca creada por el cliente). viewBox corregido de 0 0 1080 1080 a "85 430 900 220" para recortar el canvas vacío. Logo aumentado a `h-12`. Barra superior eliminada. Botón Agendar eliminado. "Inicio" agregado al nav. Indicador activo por scroll con `IntersectionObserver` (cápsula `bg-white/20` en sección visible).
- **Hero:** Dr. Guillermo Pozo Ruiz como protagonista (h1 principal). "50 años al servicio..." como subtítulo. Línea de horario inferior eliminada. Textos agrandados. `whitespace-nowrap` removido del nombre para evitar overflow móvil. Tarjeta de credenciales con horario en dos líneas limpias.
- **Servicios:** Íconos reemplazados 3 veces hasta llegar a: portapapeles (consulta), gecko/lagartija (exóticos), vendaje diagonal (cirugía). `max-w-none` en subtítulo para una sola línea.
- **SobreElDr:** Grid `md:grid-cols-[1fr_320px]` para columna credenciales más angosta. Título ajustado a 2 líneas con `<br />` en punto óptimo.
- **Agendamiento:** Cada oración en su propio `<p>` para que el punto siempre termine la línea. `text-balance` aplicado. Teléfono con `whitespace-nowrap`.
- **Contacto:** `grid-cols-1` agregado para mobile. Correo: `mailto:` (universal). Ícono WhatsApp corregido (era PhoneIcon, ahora es el SVG de WhatsApp real).
- **Footer:** `logo-white.svg` con viewBox corregido ("180 140 720 900"). Logo `h-32 md:h-52`. Links con `py-1 block` para mejor touch target.

**3. Favicon**
- `public/icon.png` creado por el cliente (fondo navy + isotipo blanco). Copiado a `src/app/icon.png` y `src/app/apple-icon.png` para que Next.js lo use como favicon de navegador y Apple.

**4. Optimización móvil**
- `layout.tsx`: exportación `viewport` explícita (`width: device-width, initialScale: 1, maximumScale: 1`)
- Header hamburguesa: `min-w/h-[44px]` para cumplir mínimo de touch target Apple/Google
- Todos los grids revisados para colapsar correctamente en móvil

*(hecho por Claude)*

---

## Sesión 4 continuación — 2026-05-03

**Mapa Google Maps**
- Primer intento: cambio a `maps.google.com/maps?q=...&output=embed` — seguía mostrando ruta
- Solución final: URL formato `maps/embed?pb=` con coordenadas directas de la clínica → muestra solo el pin sin rutas ni popups de directions

*(hecho por Claude)*

---

## Estado al cierre de sesión 4 (2026-05-03)

- Sitio en línea: **veterinariabulnes.pages.dev** ✓
- Favicon: navy + isotipo blanco ✓
- Horario: Lunes a Sábado 15:00–20:00 ✓
- Mapa: pin directo sin rutas ✓
- Dominio `.cl`: pendiente de conectar
- Repo: público en GitHub (pendiente hacer privado)

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
