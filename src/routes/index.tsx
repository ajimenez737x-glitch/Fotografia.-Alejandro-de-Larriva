import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type FormEvent } from "react";

import heroWedding from "@/assets/hero-wedding.jpg";
import galleryBodas from "@/assets/gallery-bodas.jpg";
import galleryParejas from "@/assets/gallery-parejas.jpg";
import galleryEventos from "@/assets/gallery-eventos.jpg";
import galleryFamilia from "@/assets/gallery-familia.jpg";
import galleryRetratos from "@/assets/gallery-retratos.jpg";
import boda1 from "@/assets/boda-1.jpg";
import boda2 from "@/assets/boda-2.jpg";
import pareja1 from "@/assets/pareja-1.jpg";
import pareja2 from "@/assets/pareja-2.jpg";
import evento1 from "@/assets/evento-1.jpg";
import evento2 from "@/assets/evento-2.jpg";
import familia1 from "@/assets/familia-1.jpg";
import familia2 from "@/assets/familia-2.jpg";
import retrato1 from "@/assets/retrato-1.jpg";
import retrato2 from "@/assets/retrato-2.jpg";
import aboutCharo from "@/assets/about-charo.jpg";
import ctaBg from "@/assets/cta-bg.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Charo Sevilla Fotografía — Fotógrafa de bodas en Sevilla" },
      { name: "description", content: "Fotógrafa freelance en Sevilla especializada en bodas, parejas y eventos. Reportajes emocionales, naturales y atemporales." },
      { property: "og:title", content: "Charo Sevilla Fotografía — Bodas y eventos en Sevilla" },
      { property: "og:description", content: "Reportajes emocionales de bodas y eventos en Sevilla." },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

type Category = {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  count: string;
};

const categories: Category[] = [
  { id: "bodas",    title: "Bodas",    subtitle: "Ceremonias, preparativos y celebraciones", image: galleryBodas,    count: "01" },
  { id: "parejas",  title: "Parejas",  subtitle: "Sesiones románticas y naturales",          image: galleryParejas,  count: "02" },
  { id: "eventos",  title: "Eventos",  subtitle: "Privados, corporativos y celebraciones",   image: galleryEventos,  count: "03" },
  { id: "familia",  title: "Familia",  subtitle: "Momentos familiares auténticos",           image: galleryFamilia,  count: "04" },
  { id: "retratos", title: "Retratos", subtitle: "Retratos artísticos y personales",         image: galleryRetratos, count: "05" },
];

const galleryImages: Record<string, string[]> = {
  bodas:    [galleryBodas,    boda1,    boda2,    pareja1, evento1],
  parejas:  [galleryParejas,  pareja1,  pareja2,  boda1,   familia1],
  eventos:  [galleryEventos,  evento1,  evento2,  boda2,   familia2],
  familia:  [galleryFamilia,  familia1, familia2, pareja2, retrato1],
  retratos: [galleryRetratos, retrato1, retrato2, evento2, boda1],
};

const services = [
  { title: "Fotografía de bodas",     desc: "Cobertura completa del día. Reportaje narrativo y emocional desde los preparativos hasta el último baile." },
  { title: "Eventos privados",        desc: "Celebraciones, aniversarios y fiestas familiares contadas con sensibilidad." },
  { title: "Eventos corporativos",    desc: "Empresas, marcas y experiencias documentadas con mirada editorial." },
  { title: "Sesiones de pareja",      desc: "Reportajes románticos en localizaciones únicas de Sevilla y Andalucía." },
  { title: "Retratos profesionales",  desc: "Marca personal, fotografía artística y retrato editorial." },
];

const testimonials = [
  { quote: "Las fotografías superaron todas nuestras expectativas. Cada imagen nos devuelve a ese día.", author: "Lucía & Álvaro", role: "Boda en Sevilla" },
  { quote: "Consiguió capturar cada emoción de nuestro día sin que apenas la notáramos.", author: "María & Pablo", role: "Boda en Carmona" },
  { quote: "Profesional, cercana y con una sensibilidad increíble. Volveríamos a elegirla mil veces.", author: "Familia Romero", role: "Sesión familiar" },
];

const values = ["Cercanía", "Naturalidad", "Sensibilidad artística", "Atención al detalle", "Profesionalidad"];

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Index() {
  useReveal();
  const [active, setActive] = useState<Category | null>(null);

  useEffect(() => {
    if (active) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [active]);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <Gallery onOpen={setActive} />
      <About />
      <Services />
      <Testimonials />
      <CTA />
      <Contact />
      <Footer />
      {active && <Lightbox category={active} onClose={() => setActive(null)} />}
    </main>
  );
}

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = [
    { href: "#galeria", label: "Galería" },
    { href: "#sobre-mi", label: "Sobre mí" },
    { href: "#servicios", label: "Servicios" },
    { href: "#testimonios", label: "Testimonios" },
    { href: "#contacto", label: "Contacto" },
  ];
  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        scrolled ? "bg-background/85 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 md:px-12">
        <a href="#top" className="font-display text-lg tracking-wide">
          Charo<span className="text-gold">.</span>Sevilla
        </a>
        <nav className="hidden items-center gap-9 text-sm text-muted-foreground md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="link-underline hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contacto"
          className="hidden md:inline-flex border border-gold text-gold px-5 py-2.5 text-xs tracking-[0.28em] uppercase hover:bg-gold hover:text-gold-foreground transition-colors duration-500"
        >
          Presupuesto
        </a>
        <button
          aria-label="Abrir menú"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden flex flex-col gap-1.5 p-2"
        >
          <span className={`block h-px w-6 bg-foreground transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`} />
          <span className={`block h-px w-6 bg-foreground transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`block h-px w-6 bg-foreground transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur">
          <nav className="flex flex-col gap-1 px-6 py-6">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-3 text-sm tracking-wide text-muted-foreground hover:text-foreground">
                {l.label}
              </a>
            ))}
            <a href="#contacto" onClick={() => setOpen(false)} className="mt-3 inline-flex justify-center border border-gold text-gold px-5 py-3 text-xs tracking-[0.28em] uppercase">
              Solicitar presupuesto
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      <img
        src={heroWedding}
        alt="Pareja de novios al atardecer en Sevilla"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover animate-hero-zoom"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-transparent" />

      <div className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col justify-end px-6 pb-24 md:px-12 md:pb-32">
        <p className="eyebrow animate-fade-up delay-100">Fotografía de bodas y eventos</p>
        <h1 className="mt-6 max-w-4xl text-[clamp(2.5rem,6vw,5.5rem)] leading-[1.02] animate-fade-up delay-200">
          Historias que merecen ser
          <span className="font-serif-italic text-gold"> recordadas </span>
          para siempre.
        </h1>
        <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground animate-fade-up delay-300">
          Capturo emociones reales, miradas irrepetibles y momentos auténticos para que vuelvas a sentirlos toda la vida.
        </p>
        <div className="mt-10 flex flex-wrap gap-4 animate-fade-up delay-400">
          <a
            href="#galeria"
            className="group inline-flex items-center gap-3 bg-gold px-7 py-4 text-xs tracking-[0.3em] uppercase text-gold-foreground hover:-translate-y-0.5 transition-transform duration-500"
          >
            Ver galería
            <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
          </a>
          <a
            href="#contacto"
            className="inline-flex items-center gap-3 border border-foreground/30 px-7 py-4 text-xs tracking-[0.3em] uppercase hover:border-foreground hover:bg-foreground/5 transition-all duration-500"
          >
            Solicitar presupuesto
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center gap-3">
        <span className="text-[0.65rem] tracking-[0.4em] uppercase text-muted-foreground">Scroll</span>
        <div className="relative h-12 w-px overflow-hidden bg-foreground/15">
          <span className="absolute inset-x-0 top-0 h-1/2 bg-gold animate-scroll-cue" />
        </div>
      </div>
    </section>
  );
}

function SectionHeader({ eyebrow, title, italic, intro }: { eyebrow: string; title: string; italic?: string; intro?: string }) {
  return (
    <div className="reveal mx-auto max-w-3xl text-center">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-5 text-[clamp(2rem,4.4vw,3.75rem)] leading-[1.05]">
        {title}{" "}
        {italic && <span className="font-serif-italic text-gold">{italic}</span>}
      </h2>
      {intro && <p className="mt-6 text-muted-foreground leading-relaxed">{intro}</p>}
    </div>
  );
}

function Gallery({ onOpen }: { onOpen: (c: Category) => void }) {
  return (
    <section id="galeria" className="relative px-6 py-28 md:px-12 md:py-40">
      <div className="mx-auto max-w-[1400px]">
        <SectionHeader
          eyebrow="Portfolio"
          title="Una mirada"
          italic="atemporal"
          intro="Cada categoría es un fragmento de mi forma de mirar. Selecciones cuidadas, en busca de la verdad detrás de cada gesto."
        />

        <div className="reveal mt-20 grid grid-cols-1 gap-6 md:grid-cols-6 md:gap-7">
          {/* Bodas - large feature */}
          <button
            type="button"
            onClick={() => onOpen(categories[0])}
            className="hover-zoom group relative md:col-span-4 md:row-span-2 aspect-[4/5] md:aspect-auto md:h-[680px] overflow-hidden"
          >
            <img src={categories[0].image} alt={categories[0].title} loading="lazy" width={1024} height={1280} className="h-full w-full object-cover" />
            <CardOverlay c={categories[0]} large />
          </button>

          <button type="button" onClick={() => onOpen(categories[1])} className="hover-zoom group relative md:col-span-2 aspect-[4/5] md:aspect-auto md:h-[330px] overflow-hidden">
            <img src={categories[1].image} alt={categories[1].title} loading="lazy" width={1024} height={1280} className="h-full w-full object-cover" />
            <CardOverlay c={categories[1]} />
          </button>

          <button type="button" onClick={() => onOpen(categories[2])} className="hover-zoom group relative md:col-span-2 aspect-[4/5] md:aspect-auto md:h-[330px] overflow-hidden">
            <img src={categories[2].image} alt={categories[2].title} loading="lazy" width={1024} height={1280} className="h-full w-full object-cover" />
            <CardOverlay c={categories[2]} />
          </button>

          <button type="button" onClick={() => onOpen(categories[3])} className="hover-zoom group relative md:col-span-3 aspect-[4/5] md:aspect-auto md:h-[440px] overflow-hidden">
            <img src={categories[3].image} alt={categories[3].title} loading="lazy" width={1024} height={1280} className="h-full w-full object-cover" />
            <CardOverlay c={categories[3]} />
          </button>

          <button type="button" onClick={() => onOpen(categories[4])} className="hover-zoom group relative md:col-span-3 aspect-[4/5] md:aspect-auto md:h-[440px] overflow-hidden">
            <img src={categories[4].image} alt={categories[4].title} loading="lazy" width={1024} height={1280} className="h-full w-full object-cover" />
            <CardOverlay c={categories[4]} />
          </button>
        </div>
      </div>
    </section>
  );
}

function CardOverlay({ c, large }: { c: Category; large?: boolean }) {
  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/10 to-transparent" />
      <div className="absolute inset-0 flex flex-col justify-between p-6 text-left md:p-8">
        <span className="text-[0.65rem] tracking-[0.4em] uppercase text-foreground/70">{c.count} / 05</span>
        <div>
          <h3 className={`font-display ${large ? "text-4xl md:text-6xl" : "text-2xl md:text-3xl"}`}>
            {c.title}
          </h3>
          <p className="mt-2 text-sm text-muted-foreground max-w-sm">{c.subtitle}</p>
          <span className="mt-5 inline-flex items-center gap-2 text-[0.65rem] tracking-[0.35em] uppercase text-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            Ver galería →
          </span>
        </div>
      </div>
    </>
  );
}

function Lightbox({ category, onClose }: { category: Category; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  // Show variations using the category image plus siblings for richness
  const images = [category.image, ...categories.filter((c) => c.id !== category.id).map((c) => c.image)];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-background/95 backdrop-blur-xl animate-fade-up">
      <div className="sticky top-0 z-10 flex items-center justify-between border-b border-border bg-background/80 px-6 py-5 md:px-12 backdrop-blur">
        <div>
          <p className="eyebrow">Galería</p>
          <h3 className="mt-2 font-display text-2xl md:text-3xl">
            {category.title} <span className="font-serif-italic text-gold">— {category.subtitle.toLowerCase()}</span>
          </h3>
        </div>
        <button
          onClick={onClose}
          aria-label="Cerrar galería"
          className="group flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-muted-foreground hover:text-foreground"
        >
          Cerrar
          <span className="grid h-10 w-10 place-items-center border border-border group-hover:border-gold group-hover:text-gold transition-colors">×</span>
        </button>
      </div>
      <div className="mx-auto max-w-[1400px] px-6 py-12 md:px-12">
        <div className="columns-1 gap-6 sm:columns-2 lg:columns-3 [column-fill:_balance]">
          {images.map((src, i) => (
            <div key={i} className="mb-6 break-inside-avoid overflow-hidden">
              <img src={src} alt={`${category.title} ${i + 1}`} loading="lazy" className="w-full" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function About() {
  return (
    <section id="sobre-mi" className="relative px-6 py-28 md:px-12 md:py-40 bg-card">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-20">
        <div className="reveal relative lg:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden">
            <img src={aboutCharo} alt="Retrato de Charo" loading="lazy" width={1024} height={1280} className="h-full w-full object-cover" />
          </div>
          <div className="pointer-events-none absolute -bottom-6 -right-6 hidden h-40 w-40 border border-gold/60 md:block" />
        </div>

        <div className="reveal lg:col-span-7 flex flex-col justify-center">
          <p className="eyebrow">Sobre mí</p>
          <h2 className="mt-5 text-[clamp(2rem,4vw,3.5rem)] leading-[1.05]">
            Hola, soy <span className="font-serif-italic text-gold">Charo</span>
          </h2>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Creo que las mejores fotografías son aquellas que consiguen detener el tiempo.
            Mi trabajo consiste en capturar emociones auténticas y convertirlas en recuerdos
            que permanecerán para siempre.
          </p>

          <ul className="mt-10 grid grid-cols-2 gap-x-8 gap-y-4 max-w-lg md:grid-cols-3">
            {values.map((v) => (
              <li key={v} className="flex items-center gap-3 text-sm text-foreground/80">
                <span className="hairline" />
                {v}
              </li>
            ))}
          </ul>

          <div className="mt-12 grid grid-cols-3 gap-6 border-t border-border pt-10 max-w-xl">
            <Stat n="+100" label="Sesiones realizadas" />
            <Stat n="+50"  label="Bodas documentadas" />
            <Stat n="100%" label="Clientes en Andalucía" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div>
      <div className="font-display text-3xl md:text-4xl text-gold">{n}</div>
      <div className="mt-2 text-xs tracking-[0.2em] uppercase text-muted-foreground">{label}</div>
    </div>
  );
}

function Services() {
  return (
    <section id="servicios" className="px-6 py-28 md:px-12 md:py-40">
      <div className="mx-auto max-w-[1400px]">
        <SectionHeader
          eyebrow="Servicios"
          title="Reportajes pensados"
          italic="para ti"
          intro="Cada propuesta se diseña a medida. Estos son los reportajes que con más cariño documento."
        />

        <div className="reveal mt-20 grid grid-cols-1 gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <article
              key={s.title}
              className="group relative bg-background p-10 md:p-12 transition-colors duration-500 hover:bg-card"
            >
              <div className="flex items-start justify-between">
                <span className="font-display text-sm text-gold">0{i + 1}</span>
                <span className="h-px w-10 bg-gold/60 mt-3" />
              </div>
              <h3 className="mt-8 font-display text-2xl md:text-3xl">{s.title}</h3>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              <a
                href="#contacto"
                className="mt-8 inline-flex items-center gap-3 text-[0.7rem] tracking-[0.35em] uppercase text-foreground/80 hover:text-gold transition-colors"
              >
                Solicitar información
                <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % testimonials.length), 6500);
    return () => clearInterval(id);
  }, []);
  const t = testimonials[i];

  return (
    <section id="testimonios" className="relative overflow-hidden bg-card px-6 py-28 md:px-12 md:py-40">
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
        <div className="absolute -left-20 top-10 font-display text-[20rem] text-gold leading-none">"</div>
      </div>

      <div className="relative mx-auto max-w-3xl text-center">
        <p className="eyebrow">Testimonios</p>
        <div className="mt-4 flex justify-center gap-1 text-gold">
          {Array.from({ length: 5 }).map((_, k) => <span key={k}>★</span>)}
        </div>

        <blockquote key={i} className="mt-10 animate-fade-up">
          <p className="font-display text-2xl md:text-4xl leading-snug">"{t.quote}"</p>
          <footer className="mt-10">
            <div className="text-sm tracking-[0.3em] uppercase text-gold">{t.author}</div>
            <div className="mt-2 text-xs text-muted-foreground">{t.role}</div>
          </footer>
        </blockquote>

        <div className="mt-12 flex justify-center gap-3">
          {testimonials.map((_, k) => (
            <button
              key={k}
              onClick={() => setI(k)}
              aria-label={`Ver testimonio ${k + 1}`}
              className={`h-px transition-all duration-500 ${k === i ? "w-12 bg-gold" : "w-6 bg-foreground/25 hover:bg-foreground/50"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="relative overflow-hidden">
      <img src={ctaBg} alt="" aria-hidden loading="lazy" width={1920} height={1080} className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-background/80" />
      <div className="relative mx-auto max-w-3xl px-6 py-32 md:px-12 md:py-44 text-center">
        <div className="reveal">
          <p className="eyebrow">Hablemos</p>
          <h2 className="mt-6 text-[clamp(2.25rem,5vw,4.5rem)] leading-[1.05]">
            ¿Hablamos sobre tu <span className="font-serif-italic text-gold">historia</span>?
          </h2>
          <p className="mt-8 text-lg text-muted-foreground">
            Cuéntame qué estás preparando y crearé un reportaje único para ti.
          </p>
          <a
            href="#contacto"
            className="mt-12 inline-flex items-center gap-4 bg-gold px-9 py-5 text-xs tracking-[0.32em] uppercase text-gold-foreground hover:-translate-y-0.5 transition-transform duration-500"
          >
            Solicitar presupuesto →
          </a>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const tipo = String(data.get("tipo") ?? "").trim();
    const fecha = String(data.get("fecha") ?? "").trim();
    const msg = String(data.get("mensaje") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const tel = String(data.get("telefono") ?? "").trim();
    const text = encodeURIComponent(
      `Hola Charo, soy ${name}.\n\nTipo de sesión: ${tipo}\nFecha: ${fecha}\nEmail: ${email}\nTel: ${tel}\n\n${msg}`,
    );
    window.open(`https://wa.me/34600000000?text=${text}`, "_blank", "noopener");
    setSent(true);
    formRef.current?.reset();
  };

  return (
    <section id="contacto" className="px-6 py-28 md:px-12 md:py-40">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-16 lg:grid-cols-12">
        <div className="reveal lg:col-span-5">
          <p className="eyebrow">Contacto</p>
          <h2 className="mt-5 text-[clamp(2rem,4vw,3.5rem)] leading-[1.05]">
            Cuéntame tu <span className="font-serif-italic text-gold">historia</span>.
          </h2>
          <p className="mt-8 max-w-md text-muted-foreground leading-relaxed">
            Respondo personalmente a cada mensaje en menos de 24 horas. Si prefieres, también puedes escribirme por WhatsApp.
          </p>

          <dl className="mt-12 space-y-7 text-sm">
            <div>
              <dt className="text-[0.7rem] tracking-[0.35em] uppercase text-gold">Email</dt>
              <dd className="mt-2"><a href="mailto:hola@charosevilla.com" className="link-underline">hola@charosevilla.com</a></dd>
            </div>
            <div>
              <dt className="text-[0.7rem] tracking-[0.35em] uppercase text-gold">WhatsApp</dt>
              <dd className="mt-2"><a href="https://wa.me/34600000000" target="_blank" rel="noopener" className="link-underline">+34 600 000 000</a></dd>
            </div>
            <div>
              <dt className="text-[0.7rem] tracking-[0.35em] uppercase text-gold">Ubicación</dt>
              <dd className="mt-2 text-muted-foreground">Sevilla, España — disponible en toda Andalucía</dd>
            </div>
          </dl>
        </div>

        <form ref={formRef} onSubmit={onSubmit} className="reveal lg:col-span-7 grid grid-cols-1 gap-7 md:grid-cols-2">
          <Field label="Nombre"      name="name"     type="text"     required />
          <Field label="Email"       name="email"    type="email"    required />
          <Field label="Teléfono"    name="telefono" type="tel" />
          <Field label="Tipo de sesión" name="tipo" as="select">
            <option value="">Elige una opción</option>
            <option>Boda</option>
            <option>Pareja</option>
            <option>Evento privado</option>
            <option>Evento corporativo</option>
            <option>Familia</option>
            <option>Retrato</option>
          </Field>
          <Field label="Fecha del evento" name="fecha" type="date" className="md:col-span-2" />
          <Field label="Cuéntame más" name="mensaje" as="textarea" className="md:col-span-2" />

          <div className="md:col-span-2 flex flex-col items-start gap-5 pt-2">
            <button
              type="submit"
              className="group inline-flex items-center gap-3 bg-gold px-8 py-4 text-xs tracking-[0.32em] uppercase text-gold-foreground hover:-translate-y-0.5 transition-transform duration-500"
            >
              Enviar consulta
              <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
            </button>
            {sent && (
              <p className="text-xs tracking-[0.25em] uppercase text-gold animate-fade-up">
                Gracias — abrimos WhatsApp para finalizar tu mensaje.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}

function Field({
  label, name, type = "text", required, className, as, children,
}: {
  label: string; name: string; type?: string; required?: boolean; className?: string;
  as?: "select" | "textarea"; children?: React.ReactNode;
}) {
  const base = "w-full bg-transparent border-b border-border focus:border-gold focus:outline-none py-3 text-sm placeholder-muted-foreground transition-colors";
  return (
    <label className={`flex flex-col gap-2 ${className ?? ""}`}>
      <span className="text-[0.65rem] tracking-[0.35em] uppercase text-muted-foreground">{label}{required && " *"}</span>
      {as === "textarea" ? (
        <textarea name={name} required={required} rows={4} className={base} />
      ) : as === "select" ? (
        <select name={name} required={required} className={`${base} appearance-none bg-background`}>{children}</select>
      ) : (
        <input name={name} type={type} required={required} className={base} />
      )}
    </label>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:items-end">
          <div>
            <a href="#top" className="font-display text-2xl">
              Charo<span className="text-gold">.</span>Sevilla
            </a>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground leading-relaxed">
              Fotografía emocional de bodas y eventos en Sevilla y toda Andalucía.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-7 gap-y-3 text-sm text-muted-foreground md:justify-center">
            <a href="#galeria"     className="link-underline hover:text-foreground">Galería</a>
            <a href="#sobre-mi"    className="link-underline hover:text-foreground">Sobre mí</a>
            <a href="#servicios"   className="link-underline hover:text-foreground">Servicios</a>
            <a href="#testimonios" className="link-underline hover:text-foreground">Testimonios</a>
            <a href="#contacto"    className="link-underline hover:text-foreground">Contacto</a>
          </nav>

          <div className="flex gap-5 md:justify-end text-xs tracking-[0.3em] uppercase">
            <a href="#" className="text-muted-foreground hover:text-gold transition-colors">Instagram</a>
            <a href="#" className="text-muted-foreground hover:text-gold transition-colors">Facebook</a>
            <a href="#" className="text-muted-foreground hover:text-gold transition-colors">Pinterest</a>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-border pt-8 text-xs text-muted-foreground md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Charo Sevilla Fotografía. Todos los derechos reservados.</p>
          <p className="font-serif-italic">Hecho con cariño en Sevilla.</p>
        </div>
      </div>
    </footer>
  );
}
