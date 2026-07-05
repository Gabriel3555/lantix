import { useEffect, useState } from 'react'

// ──────────────────────────────────────────────────────────────────────────
// Datos de contacto — edita estos valores con los reales de Lantix.
// El número de WhatsApp va en formato internacional sin "+", espacios ni guiones.
const WHATSAPP_NUMBER = '50600000000' // p. ej. Costa Rica: 506 + número
const WHATSAPP_MESSAGE =
  'Hola Lantix 👋, me gustaría conversar sobre un proyecto de software.'
const EMAIL = 'hola@lantix.dev'
// ──────────────────────────────────────────────────────────────────────────

const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`
const mailtoUrl = `mailto:${EMAIL}?subject=${encodeURIComponent(
  'Consulta de proyecto — Lantix',
)}`

// Wordmark transparente: funciona igual sobre papel claro o blueprint oscuro.
function Logo({ className = '' }) {
  return <img src="/lantix-transparent.png" alt="Lantix" className={className} />
}

function WhatsAppIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.523 5.24l-.999 3.648 3.965-.587zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
    </svg>
  )
}

// Capacidades presentadas como índice de plano, no como tarjetas.
const capabilities = [
  {
    ref: 'S—01',
    title: 'Software a medida',
    desc: 'Plataformas que se ajustan a tus procesos, no al revés.',
  },
  {
    ref: 'S—02',
    title: 'Aplicaciones web',
    desc: 'Sistemas para tu equipo y portales para tus clientes, desde cualquier navegador.',
  },
  {
    ref: 'S—03',
    title: 'Apps móviles',
    desc: 'Tu negocio en el celular de tus clientes, en iPhone y Android.',
  },
  {
    ref: 'S—04',
    title: 'Sistemas conectados',
    desc: 'Tus pagos, facturación y herramientas compartiendo información sin trabajo manual.',
  },
  {
    ref: 'S—05',
    title: 'Siempre disponible',
    desc: 'Tu sistema en línea las 24 horas: rápido, seguro y con costos bajo control.',
  },
  {
    ref: 'S—06',
    title: 'Soporte & evolución',
    desc: 'Medimos, mejoramos y acompañamos el crecimiento del producto.',
  },
]

// El proceso sí es una secuencia real → la numeración carga información.
const phases = [
  {
    n: '01',
    title: 'Descubrimiento',
    desc: 'Escuchamos el problema real y definimos qué construir y por qué importa.',
  },
  {
    n: '02',
    title: 'Diseño',
    desc: 'Te mostramos cómo se verá y funcionará antes de construirlo, para ajustar a tiempo.',
  },
  {
    n: '03',
    title: 'Construcción',
    desc: 'Desarrollamos por entregas cortas, con avances reales cada semana.',
  },
  {
    n: '04',
    title: 'Lanzamiento',
    desc: 'Tu producto sale al mundo. Medimos resultados y lo mejoramos con datos reales.',
  },
]

const principles = [
  {
    k: 'A',
    title: 'Te hablamos claro, sin tecnicismos',
    desc: 'Cada decisión responde a un objetivo tuyo: vender más, ahorrar tiempo o reducir errores. Y te la explicamos en tu idioma.',
  },
  {
    k: 'B',
    title: 'Entregas visibles cada semana',
    desc: 'Nada de proyectos eternos sin avances. Ves progreso tangible y corriges el rumbo a tiempo.',
  },
  {
    k: 'C',
    title: 'El producto es tuyo, sin ataduras',
    desc: 'Todo queda documentado y a tu nombre. Si mañana quieres seguir con otro equipo, puedes hacerlo sin problema.',
  },
  {
    k: 'D',
    title: 'Un solo interlocutor',
    desc: 'Trato directo y comunicación clara. Sin intermediarios ni letra pequeña.',
  },
]

// Compromisos verificables — funcionan como banda de confianza bajo el hero.
const commitments = [
  { v: '< 24 h', l: 'Tiempo de respuesta' },
  { v: 'Sin costo', l: 'Primera reunión' },
  { v: 'Semanal', l: 'Entrega de avances' },
  { v: 'Cerrado', l: 'Presupuesto sin sorpresas' },
]

// Las dudas que frenan a un cliente antes de escribir — respondidas de frente.
const faqs = [
  {
    q: '¿Cuánto cuesta un proyecto?',
    a: 'Depende del tamaño del problema. Después de la primera conversación —que es gratis— te damos un presupuesto cerrado, sin sorpresas ni cobros ocultos.',
  },
  {
    q: '¿Cuánto tiempo tarda?',
    a: 'La mayoría de los proyectos tiene una primera versión funcionando en semanas, no meses. Y desde la primera semana ves avances reales.',
  },
  {
    q: '¿Necesito saber de tecnología?',
    a: 'No. Nosotros nos encargamos de lo técnico y te lo explicamos todo en lenguaje claro. Tú solo necesitas conocer tu negocio.',
  },
  {
    q: '¿Qué pasa cuando el proyecto termina?',
    a: 'El producto queda a tu nombre, documentado y funcionando. Si quieres, seguimos contigo mejorándolo; si no, cualquier equipo puede continuarlo.',
  },
  {
    q: '¿Y si ya tengo un sistema?',
    a: 'Lo evaluamos juntos. A veces conviene mejorarlo o conectarlo con otras herramientas; otras, reemplazarlo por etapas sin frenar tu operación.',
  },
  {
    q: '¿Qué necesito para empezar?',
    a: 'Solo contarnos el problema o la idea. De la primera reunión salimos con claridad sobre los próximos pasos, sin ningún compromiso.',
  },
]

// Tema manual: parte de la preferencia del sistema y persiste la elección.
function useTheme() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('lantix-theme')
    if (saved === 'light' || saved === 'dark') return saved
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })
  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('lantix-theme', theme)
  }, [theme])
  return [theme, setTheme]
}

// Marca los bloques .reveal como visibles al entrar en pantalla (una sola vez).
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}

function SunIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="4.4" />
      <path d="M12 2.5v2.6M12 18.9v2.6M2.5 12h2.6M18.9 12h2.6M5.2 5.2l1.9 1.9M16.9 16.9l1.9 1.9M18.8 5.2l-1.9 1.9M7.1 16.9l-1.9 1.9" />
    </svg>
  )
}

function MoonIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className} aria-hidden="true">
      <path d="M20.2 14.2A8.3 8.3 0 019.8 3.8a8.3 8.3 0 1010.4 10.4z" />
    </svg>
  )
}

// Pie de cota monoespaciado que ancla cada sección al lenguaje de plano.
function SectionTag({ id, label }) {
  return (
    <div className="mb-10 flex items-baseline gap-3 border-b bp-rule pb-3">
      <span className="font-mono text-xs bp-accent">{id}</span>
      <span className="eyebrow">{label}</span>
    </div>
  )
}

const navLinks = [
  { href: '#capacidades', label: 'Capacidades' },
  { href: '#proceso', label: 'Proceso' },
  { href: '#metodo', label: 'Método' },
  { href: '#preguntas', label: 'Preguntas' },
]

function App() {
  const [theme, setTheme] = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)
  useReveal()

  return (
    <div className="min-h-screen">
      {/* ─── Header ─────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 border-b bp-rule backdrop-blur-md" style={{ background: 'color-mix(in srgb, var(--bp-bg) 82%, transparent)' }}>
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <a href="#inicio" className="flex items-center" aria-label="Lantix — inicio">
            <Logo className="h-12 w-auto" />
          </a>
          <nav className="hidden items-center gap-8 font-mono text-xs uppercase tracking-widest md:flex bp-muted">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="hover-accent">{l.label}</a>
            ))}
          </nav>
          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="inline-flex h-9 w-9 items-center justify-center border bp-rule hover-accent"
              aria-label={theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
              title={theme === 'dark' ? 'Modo claro' : 'Modo oscuro'}
            >
              {theme === 'dark' ? <SunIcon className="h-4 w-4" /> : <MoonIcon className="h-4 w-4" />}
            </button>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border bp-rule px-4 py-2 font-mono text-xs uppercase tracking-widest hover-accent"
              style={{ borderColor: 'var(--bp-accent)' }}
            >
              <WhatsAppIcon className="h-3.5 w-3.5" />
              Hablemos
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="inline-flex h-9 w-9 flex-col items-center justify-center gap-[5px] border bp-rule md:hidden"
              aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={menuOpen}
            >
              <span className="block h-px w-4 transition-transform" style={{ background: 'currentColor', transform: menuOpen ? 'translateY(3px) rotate(45deg)' : 'none' }} />
              <span className="block h-px w-4 transition-transform" style={{ background: 'currentColor', transform: menuOpen ? 'translateY(-3px) rotate(-45deg)' : 'none' }} />
            </button>
          </div>
        </div>
        {/* Menú móvil desplegable */}
        {menuOpen && (
          <nav className="border-t bp-rule px-5 py-4 md:hidden">
            <ul className="flex flex-col gap-4 font-mono text-xs uppercase tracking-widest bp-muted">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="hover-accent" onClick={() => setMenuOpen(false)}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>

      <main className="mx-auto max-w-6xl px-5">
        {/* ─── Hero ─────────────────────────────────────────────── */}
        <section id="inicio" className="grid items-center gap-12 py-16 sm:py-24 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rise">
            <p className="eyebrow flex items-center gap-2">
              <span className="inline-block h-px w-8" style={{ background: 'var(--bp-accent)' }} />
              Ingeniería de software a medida
            </p>
            <h1 className="mt-6 max-w-xl text-balance font-display text-5xl font-bold leading-[1.04] tracking-tight sm:text-6xl">
              Construimos tu software como se construye un edificio:
              <span className="bp-accent"> con plano.</span>
            </h1>
            <p className="mt-7 max-w-md text-lg leading-relaxed bp-muted">
              En Lantix diseñamos y desarrollamos los sistemas y aplicaciones
              que tu empresa necesita, para computadora y celular. Cada pieza,
              medida y ajustada a tu operación.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 font-mono text-sm font-medium uppercase tracking-widest text-[var(--bp-bg)] transition hover:opacity-90"
                style={{ background: 'var(--bp-accent)' }}
              >
                <WhatsAppIcon className="h-4 w-4" />
                Iniciar proyecto
              </a>
              <a
                href={mailtoUrl}
                className="inline-flex items-center justify-center gap-2 border bp-rule px-7 py-3.5 font-mono text-sm uppercase tracking-widest hover-accent"
              >
                Escríbenos →
              </a>
            </div>
          </div>

          {/* Lámina técnica: la marca isométrica aislada como dibujo de ingeniería */}
          <figure className="relative">
            <div className="corner-ticks plate relative aspect-[4/3] w-full">
              {/* Anotaciones del rótulo */}
              <span className="absolute left-4 top-4 font-mono text-[0.65rem] bp-muted">LANTIX · ISO—01</span>
              <span className="absolute right-4 top-4 font-mono text-[0.65rem] bp-muted">ESC 1:1</span>

              {/* Marca isométrica centrada como dibujo técnico */}
              <div className="flex h-full w-full items-center justify-center p-6 pb-14">
                <img
                  src="/icon.png"
                  alt="Marca isométrica de Lantix"
                  className="h-full w-auto object-contain"
                  style={{ filter: 'drop-shadow(0 0 30px var(--bp-glow))' }}
                />
              </div>

              {/* Línea de rótulo inferior con celdas tipo plano */}
              <div className="absolute inset-x-0 bottom-0 grid grid-cols-3 border-t bp-rule font-mono text-[0.62rem] bp-muted">
                <span className="border-r bp-rule px-3 py-2">REV. 2026</span>
                <span className="border-r bp-rule px-3 py-2">HOJA 01/01</span>
                <span className="px-3 py-2 bp-accent">∎ A MEDIDA</span>
              </div>
            </div>
            <figcaption className="mt-3 text-center font-mono text-[0.65rem] bp-muted">
              Fig. 01 — estructura de marca · ejes X·Y·Z
            </figcaption>
          </figure>
        </section>

        {/* ─── Banda de compromisos ─────────────────────────────── */}
        <div className="reveal grid grid-cols-2 gap-px overflow-hidden border bp-rule lg:grid-cols-4" style={{ background: 'var(--bp-rule)' }}>
          {commitments.map((c) => (
            <div key={c.l} className="cell-hover px-6 py-5 text-center" style={{ background: 'var(--bp-bg)' }}>
              <p className="font-display text-2xl font-bold bp-accent">{c.v}</p>
              <p className="mt-1 font-mono text-[0.65rem] uppercase tracking-widest bp-muted">{c.l}</p>
            </div>
          ))}
        </div>

        {/* ─── Capacidades (índice de plano) ────────────────────── */}
        <section id="capacidades" className="reveal pt-28 pb-16 sm:pt-40 sm:pb-24">
          <SectionTag id="01" label="Capacidades / alcance" />
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <h2 className="font-display text-3xl font-semibold leading-tight sm:text-4xl">
              Construimos la tecnología;
              <br />
              tú haces crecer el negocio.
            </h2>
            <ul>
              {capabilities.map((c) => (
                <li
                  key={c.ref}
                  className="index-row group flex flex-wrap items-baseline gap-x-5 gap-y-1 border-t bp-rule py-5 first:border-t-0 sm:flex-nowrap"
                >
                  <span className="w-12 shrink-0 font-mono text-xs bp-accent">{c.ref}</span>
                  <span className="w-52 shrink-0 font-display text-lg font-medium">{c.title}</span>
                  <span className="text-sm bp-muted">{c.desc}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ─── Proceso (secuencia real) ─────────────────────────── */}
        <section id="proceso" className="reveal py-16 sm:py-24">
          <SectionTag id="02" label="Proceso / fases del proyecto" />
          <div className="grid gap-px overflow-hidden border bp-rule sm:grid-cols-2 lg:grid-cols-4" style={{ background: 'var(--bp-rule)' }}>
            {phases.map((p) => (
              <div key={p.n} className="cell-hover relative p-7" style={{ background: 'var(--bp-bg)' }}>
                <div className="flex items-baseline gap-2">
                  <span className="font-mono text-xs bp-accent">FASE</span>
                  <span className="font-display text-4xl font-bold leading-none" style={{ color: 'color-mix(in srgb, var(--bp-fg) 18%, transparent)' }}>
                    {p.n}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed bp-muted">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ─── Método / por qué Lantix ──────────────────────────── */}
        <section id="metodo" className="reveal py-16 sm:py-24">
          <SectionTag id="03" label="Método / principios de trabajo" />
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <h2 className="font-display text-3xl font-semibold leading-tight sm:text-4xl">
                Un socio para tu negocio, no un proveedor más.
              </h2>
              <p className="mt-5 text-lg leading-relaxed bp-muted">
                Trabajamos con empresas que quieren resolver problemas reales con
                tecnología bien hecha. Nos importa tu resultado tanto como el
                nuestro.
              </p>
              <div className="mt-8 plate corner-ticks relative p-5">
                <p className="font-mono text-xs uppercase tracking-widest bp-muted">Nuestro compromiso</p>
                <p className="mt-4 text-sm leading-relaxed bp-muted">
                  Construimos con tecnología moderna y probada, la misma que usan
                  las empresas más grandes del mundo. Tú no necesitas entender el
                  cómo: nosotros nos encargamos de que funcione hoy y siga
                  funcionando mañana.
                </p>
              </div>
              {/* Interlocutor con rostro: sustituye las iniciales por una foto real cuando la tengas */}
              <div className="mt-4 plate corner-ticks relative flex items-center gap-4 p-5">
                <div
                  className="flex h-14 w-14 shrink-0 items-center justify-center border bp-rule font-display text-lg font-semibold bp-accent"
                  style={{ background: 'var(--bp-bg)' }}
                  aria-hidden="true"
                >
                  GB
                </div>
                <div>
                  <p className="font-display text-base font-semibold">Gabriel Barrantes</p>
                  <p className="mt-0.5 text-sm leading-relaxed bp-muted">
                    Ingeniero a cargo de tu proyecto. Del primer mensaje a la
                    entrega, hablas siempre con la misma persona.
                  </p>
                </div>
              </div>
            </div>

            <ul className="grid gap-px border bp-rule sm:grid-cols-2" style={{ background: 'var(--bp-rule)' }}>
              {principles.map((pr) => (
                <li key={pr.k} className="cell-hover p-7" style={{ background: 'var(--bp-bg)' }}>
                  <span className="font-mono text-sm bp-accent">{pr.k}.</span>
                  <h3 className="mt-3 font-display text-lg font-semibold">{pr.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed bp-muted">{pr.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ─── Preguntas frecuentes ─────────────────────────────── */}
        <section id="preguntas" className="reveal py-16 sm:py-24">
          <SectionTag id="04" label="Preguntas / antes de escribirnos" />
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <h2 className="text-balance font-display text-3xl font-semibold leading-tight sm:text-4xl">
              Las dudas de siempre, respondidas de frente.
            </h2>
            <ul className="grid gap-px border bp-rule sm:grid-cols-2" style={{ background: 'var(--bp-rule)' }}>
              {faqs.map((f) => (
                <li key={f.q} className="cell-hover p-7" style={{ background: 'var(--bp-bg)' }}>
                  <h3 className="font-display text-base font-semibold">{f.q}</h3>
                  <p className="mt-2 text-sm leading-relaxed bp-muted">{f.a}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ─── CTA final ────────────────────────────────────────── */}
        <section id="contacto" className="reveal pb-24">
          <div className="corner-ticks relative border bp-rule p-10 text-center sm:p-16" style={{ background: 'var(--bp-panel)' }}>
            <p className="eyebrow">Inicio de proyecto</p>
            <h2 className="mx-auto mt-5 max-w-2xl font-display text-3xl font-bold leading-tight sm:text-5xl">
              ¿Tienes una idea o un problema que resolver?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg bp-muted">
              La primera conversación es gratis y sin compromiso. Salimos de ahí
              con claridad sobre los próximos pasos.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 px-7 py-3.5 font-mono text-sm font-medium uppercase tracking-widest text-[var(--bp-bg)] transition hover:opacity-90 sm:w-auto"
                style={{ background: 'var(--bp-accent)' }}
              >
                <WhatsAppIcon className="h-4 w-4" />
                Escríbenos por WhatsApp
              </a>
              <a
                href={mailtoUrl}
                className="inline-flex w-full items-center justify-center gap-2 border bp-rule px-7 py-3.5 font-mono text-sm uppercase tracking-widest hover-accent sm:w-auto"
              >
                {EMAIL}
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ─── Footer ───────────────────────────────────────────── */}
      <footer className="border-t bp-rule">
        <div className="mx-auto max-w-6xl px-5 py-8">
          <div className="flex flex-col items-center justify-between gap-5 sm:flex-row">
            <Logo className="h-12 w-auto" />
            <nav className="flex flex-wrap items-center justify-center gap-5 font-mono text-xs uppercase tracking-widest bp-muted">
              {navLinks.map((l) => (
                <a key={l.href} href={l.href} className="hover-accent">{l.label}</a>
              ))}
            </nav>
            <div className="flex items-center gap-5 font-mono text-xs uppercase tracking-widest bp-muted">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover-accent">WhatsApp</a>
              <a href={mailtoUrl} className="hover-accent">Email</a>
            </div>
          </div>
          <p className="mt-6 text-center font-mono text-xs bp-muted">
            © {new Date().getFullYear()} LANTIX · SOFTWARE A MEDIDA
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
