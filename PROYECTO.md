# Plan: Sitio Web Veterinaria Bulnes

## Contexto

El Dr. Guillermo Pozo Ruiz (~80 años, 50 años de experiencia, titulado Universidad de Chile) necesita presencia web profesional para su clínica veterinaria ubicada en Gral. Bulnes 28-A, Santiago. El objetivo es digitalizar su visibilidad (Google), facilitar el primer contacto vía WhatsApp, y comunicar de forma clara su política de agendamiento con depósito previo para evitar ausentismos. El cliente trabaja solo, no usa fotos propias, y el desarrollador es quien mantiene el sitio post-lanzamiento.

---

## Cliente

| Campo | Dato |
|---|---|
| Doctor | Dr. Guillermo Pozo Ruiz |
| Edad aprox. | ~80 años |
| Experiencia | 50 años |
| Universidad | Universidad de Chile |
| Dirección | Gral. Bulnes 28-A, Santiago |
| Metro | Metro República (a pasos) |
| Teléfono/WhatsApp | +56998205598 |
| Correo | drpozo@gmail.com |
| Dominio | www.veterinariabulnes.cl |
| Fotos | No tiene (decisión del cliente) |

## Servicios

1. Consulta Veterinaria General (perros y gatos)
2. Animales Exóticos *(previa confirmación telefónica)*
3. Cirugía Menor

## Datos Pendientes de Confirmar con el Cliente

| Item | Estado |
|---|---|
| Logo final (vectorial SVG) | En desarrollo |
| Monto del depósito de agendamiento | **A definir** |
| Horarios de atención | **A definir** |
| Datos bancarios para transferencia | **A definir** |
| ¿Tiene Google Business Profile? | **A verificar** |

---

## Stack Tecnológico

| Herramienta | Decisión |
|---|---|
| Framework | Next.js 16 (App Router) |
| Lenguaje | TypeScript |
| Estilos | Tailwind CSS |
| Hosting | Cloudflare Pages (gratuito) |
| Repositorio | github.com/veconzeta/veterinariabulnes |
| Dominio | www.veterinariabulnes.cl (pendiente de conectar) |
| Deploy preview | veterinariabulnes.pages.dev |

---

## Paleta de Colores

- **Azul marino oscuro** `#1B2D4F` — color principal, navbar, textos
- **Blanco** `#FFFFFF` — fondos limpios
- **Gris claro** `#F5F6FA` — fondos alternos de sección
- **Azul medio** `#2E4D80` — hover, acentos secundarios
- **Verde** `#22c55e` — WhatsApp, acentos
- *El logo final puede ajustar estos valores*

---

## Estructura del Proyecto

```
VETERINARIABULNES/
├── public/
│   └── (favicon, logo, og-image — pendientes)
├── src/
│   ├── app/
│   │   ├── layout.tsx        ← SEO global + Schema.org VeterinaryCare
│   │   ├── page.tsx          ← One-page principal
│   │   ├── sitemap.ts        ← Sitemap automático
│   │   ├── robots.ts         ← robots.txt
│   │   └── globals.css
│   ├── components/
│   │   ├── Header.tsx        ← Nav + CTA WhatsApp + menú mobile
│   │   ├── Hero.tsx          ← Sección principal con CTA
│   │   ├── Servicios.tsx     ← 3 cards de servicios
│   │   ├── SobreElDr.tsx     ← Bio del doctor + stats
│   │   ├── Agendamiento.tsx  ← Política + pasos + CTA WhatsApp
│   │   ├── Ubicacion.tsx     ← Google Maps + datos
│   │   ├── Contacto.tsx      ← Cards contacto + métodos de pago
│   │   ├── Footer.tsx
│   │   └── WhatsAppFAB.tsx   ← Botón flotante WhatsApp
│   └── lib/
│       └── constants.ts      ← TODOS los datos del cliente acá
├── next.config.ts            ← output: export (Cloudflare Pages)
├── tailwind.config.ts        ← colores navy + cream
├── PROYECTO.md               ← este archivo
└── BITACORA.md               ← historial de sesiones
```

---

## Secciones del Sitio (one-page)

1. **Header** — logo + menú anclas + botón WhatsApp
2. **Hero** — nombre clínica, tagline, dirección, CTA WhatsApp
3. **Servicios** — 3 cards de servicios
4. **Sobre el Dr.** — bio + stats, sin fotos
5. **Agendamiento** — política + 3 pasos + CTA WhatsApp
6. **Cómo llegar** — Google Maps + Metro República
7. **Contacto** — teléfono, WhatsApp, correo, métodos de pago
8. **Footer** — datos básicos + navegación

---

## Política de Agendamiento (redactada)

> El agendamiento se realiza exclusivamente por teléfono o WhatsApp al **+56 9 9820 5598**.
>
> Para confirmar y reservar tu hora, se solicita el pago de un **depósito previo** mediante transferencia bancaria. Este monto se descuenta del valor total de la consulta al momento de la atención.
>
> **Política de reagendamiento:** Si necesitas cambiar tu hora, comunícate con al menos **24 horas de anticipación**. Solo se permite un reagendamiento por reserva.
>
> **En caso de no presentarse o no avisar:** El depósito no será reembolsado, ya que garantiza el bloque de tiempo reservado para tu mascota.

---

## WhatsApp Integration

Mensaje automático configurado:
```
Hola Dr. Guillermo Pozo Ruiz, me gustaría agendar una consulta para mi mascota.
¿Podría indicarme disponibilidad y los pasos para reservar mi hora?
```

Puntos de contacto: Header (desktop), Hero, Agendamiento, Botón flotante FAB.

---

## SEO

- **Title:** `Veterinaria Bulnes | Dr. Guillermo Pozo - Veterinario en Santiago`
- **Description:** `Clínica veterinaria en Gral. Bulnes 28-A, a pasos del Metro República. Consultas para perros, gatos y animales exóticos. Más de 50 años de experiencia. Agenda por WhatsApp.`
- Schema.org tipo `VeterinaryCare` con dirección, teléfono, coordenadas
- Sitemap y robots.txt automáticos

---

## Próximos Pasos

- [ ] Recibir logo final del cliente → integrar en `public/logo.svg` + favicon
- [ ] Confirmar datos pendientes con el cliente (horario, depósito, banco)
- [ ] Conectar dominio `veterinariabulnes.cl` a Cloudflare Pages
- [ ] Hacer repo privado en GitHub (Settings → Change visibility)
- [ ] Crear/reclamar Google Business Profile
- [ ] Verificar en Google Search Console post-dominio

---

## Checklist Final

- [ ] Sitio carga en menos de 3 segundos en móvil (Lighthouse ≥ 90)
- [ ] Todos los botones WhatsApp funcionan con mensaje predefinido
- [ ] Mapa Google Maps muestra la dirección correcta
- [ ] Responsive: iPhone SE, iPhone 14, Samsung Galaxy, desktop
- [ ] SEO: title, description, og:image presentes
- [ ] Schema.org validado en Google Rich Results Test
- [ ] Dominio `www.veterinariabulnes.cl` apunta correctamente
- [ ] SSL activo
