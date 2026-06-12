import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import heroWedding from "@/assets/hero-wedding.jpg";
import galleryBodas from "@/assets/gallery-bodas.jpg";
import galleryParejas from "@/assets/gallery-parejas.jpg";
import galleryEventos from "@/assets/gallery-eventos.jpg";
import galleryFamilia from "@/assets/gallery-familia.jpg";
import galleryRetratos from "@/assets/gallery-retratos.jpg";
import boda1 from "@/assets/boda-1.jpg";
import boda2 from "@/assets/boda-2.jpg";
import boda3 from "@/assets/boda-3.jpg";
import pareja1 from "@/assets/pareja-1.jpg";
import pareja2 from "@/assets/pareja-2.jpg";
import pareja3 from "@/assets/pareja-3.jpg";
import evento1 from "@/assets/evento-1.jpg";
import evento2 from "@/assets/evento-2.jpg";
import evento3 from "@/assets/evento-3.jpg";
import familia1 from "@/assets/familia-1.jpg";
import familia2 from "@/assets/familia-2.jpg";
import familia3 from "@/assets/familia-3.jpg";
import retrato1 from "@/assets/retrato-1.jpg";
import retrato2 from "@/assets/retrato-2.jpg";
import retrato3 from "@/assets/retrato-3.jpg";

import boda4 from "@/assets/boda-4.jpg";
import boda5 from "@/assets/boda-5.jpg";
import boda6 from "@/assets/boda-6.jpg";
import boda7 from "@/assets/boda-7.jpg";
import boda8 from "@/assets/boda-8.jpg";

import pareja4 from "@/assets/pareja-4.jpg";
import pareja5 from "@/assets/pareja-5.jpg";
import pareja6 from "@/assets/pareja-6.jpg";
import pareja7 from "@/assets/pareja-7.jpg";
import pareja8 from "@/assets/pareja-8.jpg";

import evento4 from "@/assets/evento-4.jpg";
import evento5 from "@/assets/evento-5.jpg";
import evento6 from "@/assets/evento-6.jpg";
import evento7 from "@/assets/evento-7.jpg";
import evento8 from "@/assets/evento-8.jpg";

import familia4 from "@/assets/familia-4.jpg";
import familia5 from "@/assets/familia-5.jpg";
import familia6 from "@/assets/familia-6.jpg";
import familia7 from "@/assets/familia-7.jpg";
import familia8 from "@/assets/familia-8.jpg";

import retrato4 from "@/assets/retrato-4.jpg";
import retrato5 from "@/assets/retrato-5.jpg";
import retrato6 from "@/assets/retrato-6.jpg";
import retrato7 from "@/assets/retrato-7.jpg";
import retrato8 from "@/assets/retrato-8.jpg";

import aboutAlejandro from "@/assets/about-alejandro.jpg";
import ctaBg from "@/assets/cta-bg.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Alejandro de Larriva — Fotógrafo de bodas y eventos en Sevilla" },
      { name: "description", content: "Fotógrafo profesional en Sevilla especializado en bodas, parejas, eventos y retratos. Reportajes creativos, naturales y atemporales." },
      { property: "og:title", content: "Alejandro de Larriva — Fotografía de bodas y eventos en Sevilla" },
      { property: "og:description", content: "Reportajes creativos de bodas y eventos en Sevilla. Profesional, cercano y con un estilo muy original." },
      { property: "og:url", content: "https://fotografiadelarriva.com/" },
    ],
    links: [{ rel: "canonical", href: "https://fotografiadelarriva.com/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Alejandro de Larriva Fotografía",
          description: "Fotógrafo profesional en Sevilla especializado en bodas, parejas, eventos, retratos y fotografía corporativa.",
          image: "https://fotografiadelarriva.com/og-image.jpg",
          url: "https://fotografiadelarriva.com/",
          areaServed: "Sevilla, España",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Calle Manuel Villalobos, 41, 3C",
            addressLocality: "Sevilla",
            postalCode: "41009",
            addressCountry: "ES",
          },
          contactPoint: {
            "@type": "ContactPoint",
            contactType: "customer service",
            telephone: "+34630033787",
            availableLanguage: ["Spanish"],
          },
        }),
      },
    ],
  }),
  component: Index,
});

type Category = {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  alt: string;
  count: string;
};

const categories: Category[] = [
  { id: "bodas",    title: "Bodas",    subtitle: "Ceremonias, preparativos y celebraciones", image: galleryBodas,    alt: "Reportajes de bodas en Sevilla",            count: "01" },
  { id: "parejas",  title: "Parejas",  subtitle: "Sesiones románticas y naturales",          image: galleryParejas,  alt: "Sesiones de parejas en Sevilla",            count: "02" },
  { id: "eventos",  title: "Eventos",  subtitle: "Privados, corporativos y celebraciones",   image: galleryEventos,  alt: "Fotografía de eventos privados y corporativos", count: "03" },
  { id: "familia",  title: "Familia",  subtitle: "Momentos familiares auténticos",           image: galleryFamilia,  alt: "Sesiones familiares en Sevilla",            count: "04" },
  { id: "retratos", title: "Retratos", subtitle: "Retratos artísticos y personales",         image: galleryRetratos, alt: "Retratos artísticos y editoriales",         count: "05" },
];

const galleryImages: Record<string, string[]> = {
  bodas:    [galleryBodas,    boda1,    boda2,    boda3,    boda4,    boda5,    boda6,    boda7,    boda8],
  parejas:  [galleryParejas,  pareja1,  pareja2,  pareja3,  pareja4,  pareja5,  pareja6,  pareja7,  pareja8],
  eventos:  [galleryEventos,  evento1,  evento2,  evento3,  evento4,  evento5,  evento6,  evento7,  evento8],
  familia:  [galleryFamilia,  familia1, familia2, familia3, familia4, familia5, familia6, familia7, familia8],
  retratos: [galleryRetratos, retrato1, retrato2, retrato3, retrato4, retrato5, retrato6, retrato7, retrato8],
};

const services = [
  { title: "Fotografía de bodas",     desc: "Cobertura completa del día. Reportaje narrativo y emocional desde los preparativos hasta el último baile." },
  { title: "Eventos privados",        desc: "Celebraciones, aniversarios y fiestas familiares contadas con sensibilidad." },
  { title: "Eventos corporativos",    desc: "Empresas, marcas y experiencias documentadas con mirada editorial." },
  { title: "Sesiones de pareja",      desc: "Reportajes románticos en localizaciones únicas de Sevilla y Andalucía." },
  { title: "Retratos profesionales",  desc: "Marca personal, fotografía artística y retrato editorial." },
  { title: "Sesiones familiares",     desc: "Maternidad, recién nacidos y momentos espontáneos en familia llenos de naturalidad." },
];

const testimonials = [
  { quote: "Lo conocí en una boda y las fotos fueron una maravilla. Estuvimos un rato charlando y ademas de buena gente es un gran profesional, siempre atento en todo momento y muy cuidadoso con todo lo que hace. El día que me case será mi fotógrafo sin duda.", author: "Manuel Fraile Márquez", role: "Fotografía de Boda" },
  { quote: "Siempre que tenemos algún evento del que queremos unos recuerdos bonitos, ya sea bautizos bodas, cumpleaños... contamos con su trabajo, súper profesional, te hace sentir muy cómodx delante de la cámara, se adapta a los gustos del cliente 100 por 100 y te da ideas muy creativas!!", author: "Pi", role: "Eventos y celebraciones" },
  { quote: "Excelente profesional, lo recomiendo 100%. Hizo la boda de mi cuñada y quedaron unas fotos increíbles.", author: "Yolanda Prieto", role: "Reportaje de Boda" },
  { quote: "Alejandro es muy atento y profesional, tiene un equipo con el que hace grandes obras de arte! Muy recomendable.", author: "Cristina González Díaz", role: "Fotografía profesional" },
  { quote: "Ha hecho las fotos de dos amigos y me arrepiento de no haberlo conocido antes, tiene un estilo muy original y unos detalles muy chulos. Un crack!", author: "Elena González Díaz", role: "Sesiones fotográficas" },
  { quote: "Simpatía y profesionalidad lo definen. Su fotografía es creativa y singular. Reportajes de bodas excelentes.", author: "Ana Jesús Gil", role: "Reportaje de Boda" },
  { quote: "El mejor fotógrafo que he conocido. Impresionante y muy Profesional, sinceramente le doy un 10!!!", author: "Joselu Pine", role: "Fotografía profesional" },
  { quote: "Es un fenómeno, super atento, tiene un gran equipo y muy buenas ideas. Lo recomiendo!!", author: "Rafael R", role: "Eventos y Bodas" },
  { quote: "Muy profesional, gran sesión de fotos. Recomendable.", author: "Rebels Tarifa Kitesurf", role: "Sesión fotográfica" },
  { quote: "Su talento y profesionalidad son la esencia del trabajo bien hecho.", author: "Raquel García", role: "Fotografía profesional" },
  { quote: "Servicio amable, rápido y eficaz.", author: "Juliroler", role: "Sesión fotográfica" },
  { quote: "Maravillosa manera de congelar momentos!", author: "Ana Boheme", role: "Fotografía artística" },
];

const values = ["Cercanía", "Creatividad", "Profesionalidad", "Atención al detalle", "Adaptación al cliente"];

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
          Fotografía<span className="text-gold">.</span> Alejandro de Larriva
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
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover animate-hero-zoom"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-transparent" />

      <div className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col justify-end px-6 pb-24 md:px-12 md:pb-32">
        <p className="eyebrow animate-fade-up delay-100">Fotografía de bodas y eventos en Sevilla</p>
        <h1 className="mt-6 max-w-4xl text-[clamp(2.5rem,6vw,5.5rem)] leading-[1.02] animate-fade-up delay-200">
          <span className="sr-only">Alejandro de Larriva — Fotógrafo de bodas y eventos en Sevilla. </span>
          Momentos únicos que merecen ser
          <span className="font-serif-italic text-gold"> recordados </span>
          para siempre.
        </h1>
        <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground animate-fade-up delay-300">
          Capturo emociones reales, miradas irrepetibles y momentos auténticos con un estilo creativo y muy personal.
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
            <img src={categories[0].image} alt={categories[0].alt} loading="lazy" width={1024} height={1280} className="h-full w-full object-cover" />
            <CardOverlay c={categories[0]} large />
          </button>

          <button type="button" onClick={() => onOpen(categories[1])} className="hover-zoom group relative md:col-span-2 aspect-[4/5] md:aspect-auto md:h-[330px] overflow-hidden">
            <img src={categories[1].image} alt={categories[1].alt} loading="lazy" width={1024} height={1280} className="h-full w-full object-cover" />
            <CardOverlay c={categories[1]} />
          </button>

          <button type="button" onClick={() => onOpen(categories[2])} className="hover-zoom group relative md:col-span-2 aspect-[4/5] md:aspect-auto md:h-[330px] overflow-hidden">
            <img src={categories[2].image} alt={categories[2].alt} loading="lazy" width={1024} height={1280} className="h-full w-full object-cover" />
            <CardOverlay c={categories[2]} />
          </button>

          <button type="button" onClick={() => onOpen(categories[3])} className="hover-zoom group relative md:col-span-3 aspect-[4/5] md:aspect-auto md:h-[440px] overflow-hidden">
            <img src={categories[3].image} alt={categories[3].alt} loading="lazy" width={1024} height={1280} className="h-full w-full object-cover" />
            <CardOverlay c={categories[3]} />
          </button>

          <button type="button" onClick={() => onOpen(categories[4])} className="hover-zoom group relative md:col-span-3 aspect-[4/5] md:aspect-auto md:h-[440px] overflow-hidden">
            <img src={categories[4].image} alt={categories[4].alt} loading="lazy" width={1024} height={1280} className="h-full w-full object-cover" />
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

  const images = galleryImages[category.id] || [category.image];

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
            <img src={aboutAlejandro} alt="Retrato de Alejandro de Larriva" loading="lazy" width={1024} height={1280} className="h-full w-full object-cover" />
          </div>
          <div className="pointer-events-none absolute -bottom-6 -right-6 hidden h-40 w-40 border border-gold/60 md:block" />
        </div>

        <div className="reveal lg:col-span-7 flex flex-col justify-center">
          <p className="eyebrow">Sobre mí</p>
          <h2 className="mt-5 text-[clamp(2rem,4vw,3.5rem)] leading-[1.05]">
            Hola, soy <span className="font-serif-italic text-gold">Alejandro</span>
          </h2>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Creo que las mejores fotografías son aquellas que consiguen detener el tiempo.
            Mi trabajo consiste en capturar emociones auténticas y convertirlas en recuerdos
            que permanecerán para siempre, con un estilo creativo, original y muy personal.
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
            <Stat n="+200" label="Sesiones realizadas" />
            <Stat n="+80"  label="Bodas documentadas" />
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
    const id = setInterval(() => setI((v) => (v + 1) % testimonials.length), 8500);
    return () => clearInterval(id);
  }, []);

  const handlePrev = () => {
    setI((v) => (v - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setI((v) => (v + 1) % testimonials.length);
  };

  const t = testimonials[i];

  return (
    <section id="testimonios" className="relative overflow-hidden bg-card px-6 py-28 md:px-12 md:py-40">
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
        <div className="absolute -left-20 top-10 font-display text-[20rem] text-gold leading-none">"</div>
      </div>

      <div className="relative mx-auto max-w-4xl text-center">
        <p className="eyebrow">Testimonios</p>
        <div className="mt-4 flex justify-center gap-1 text-gold">
          {Array.from({ length: 5 }).map((_, k) => <span key={k}>★</span>)}
        </div>

        <div className="relative mt-12 flex items-center justify-between gap-4 md:gap-10">
          <button
            onClick={handlePrev}
            aria-label="Testimonio anterior"
            className="group flex h-12 w-12 shrink-0 items-center justify-center border border-foreground/10 hover:border-gold rounded-full text-muted-foreground hover:text-gold transition-colors duration-300"
          >
            <span className="text-xl transition-transform duration-300 group-hover:-translate-x-0.5">←</span>
          </button>

          <blockquote key={i} className="flex-1 animate-fade-up px-2 md:px-6">
            <p className="font-display text-lg sm:text-2xl md:text-3xl leading-snug">"{t.quote}"</p>
            <footer className="mt-8">
              <div className="text-sm tracking-[0.3em] uppercase text-gold">{t.author}</div>
              <div className="mt-2 text-xs text-muted-foreground">{t.role}</div>
            </footer>
          </blockquote>

          <button
            onClick={handleNext}
            aria-label="Siguiente testimonio"
            className="group flex h-12 w-12 shrink-0 items-center justify-center border border-foreground/10 hover:border-gold rounded-full text-muted-foreground hover:text-gold transition-colors duration-300"
          >
            <span className="text-xl transition-transform duration-300 group-hover:translate-x-0.5">→</span>
          </button>
        </div>

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
              <dd className="mt-2"><a href="mailto:info@fotografiadelarriva.com" className="link-underline">info@fotografiadelarriva.com</a></dd>
            </div>
            <div>
              <dt className="text-[0.7rem] tracking-[0.35em] uppercase text-gold">WhatsApp / Móvil</dt>
              <dd className="mt-2"><a href="https://wa.me/34630033787" target="_blank" rel="noopener" className="link-underline">+34 630 03 37 87</a></dd>
            </div>
            <div>
              <dt className="text-[0.7rem] tracking-[0.35em] uppercase text-gold">Web</dt>
              <dd className="mt-2"><a href="https://fotografiadelarriva.com" target="_blank" rel="noopener" className="link-underline">fotografiadelarriva.com</a></dd>
            </div>
            <div>
              <dt className="text-[0.7rem] tracking-[0.35em] uppercase text-gold">Dirección / Estudio</dt>
              <dd className="mt-2 text-muted-foreground">
                Calle Manuel Villalobos, 41, 3C, 41009 Sevilla<br />
                <span className="text-[0.75rem] text-muted-foreground/75">Disponible en toda Andalucía y España</span>
              </dd>
            </div>
            <div>
              <dt className="text-[0.7rem] tracking-[0.35em] uppercase text-gold">Horarios de atención</dt>
              <dd className="mt-2 text-muted-foreground">
                Lunes a Viernes: 10:00 - 19:00<br />
                Sábado y Domingo: 09:00 - 18:00
              </dd>
            </div>
          </dl>
        </div>

        <div className="reveal lg:col-span-7 relative overflow-hidden bg-gradient-to-br from-card to-background border border-border p-10 md:p-14 hover:border-gold/30 transition-all duration-500">
          {/* Subtle glowing accent */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-gold/5 blur-[80px]" />
          
          <div className="flex flex-col gap-8">
            <div className="flex flex-col sm:flex-row sm:items-center gap-5">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold border border-gold/20">
                <svg className="h-6 w-6 fill-current" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
                </svg>
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="text-[0.6rem] font-semibold tracking-[0.3em] uppercase text-gold/80 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Atención directa por chat
                </span>
                <h3 className="font-display text-2xl md:text-3.5xl">
                  ¿Hablamos <span className="font-serif-italic text-gold">directamente</span>?
                </h3>
              </div>
            </div>
            
            <p className="text-sm leading-relaxed text-muted-foreground max-w-xl">
              Si prefieres una atención inmediata y sin rodeos, pulsa el botón de abajo para escribirme por WhatsApp. Estaré encantado de responder tus preguntas y darte un presupuesto a medida.
            </p>
            
            <div>
              <a
                href="https://wa.me/34630033787"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-4 border border-gold/50 px-8 py-5 text-xs tracking-[0.32em] uppercase text-gold hover:bg-gold hover:text-gold-foreground transition-all duration-500"
              >
                Contactar por WhatsApp
                <span className="transition-transform duration-500 group-hover:translate-x-1.5">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:items-end">
          <div>
            <a href="#top" className="font-display text-2xl">
              Fotografía<span className="text-gold">.</span> Alejandro de Larriva
            </a>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground leading-relaxed">
              Fotografía profesional de bodas y eventos en Sevilla y toda Andalucía.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-7 gap-y-3 text-sm text-muted-foreground md:justify-center">
            <a href="#galeria"     className="link-underline hover:text-foreground">Galería</a>
            <a href="#sobre-mi"    className="link-underline hover:text-foreground">Sobre mí</a>
            <a href="#servicios"   className="link-underline hover:text-foreground">Servicios</a>
            <a href="#testimonios" className="link-underline hover:text-foreground">Testimonios</a>
            <a href="#contacto"    className="link-underline hover:text-foreground">Contacto</a>
          </nav>

          <div className="flex flex-wrap gap-5 md:justify-end text-xs tracking-[0.3em] uppercase">
            <a href="https://www.instagram.com/fotografiadelarriva/" target="_blank" rel="noopener" className="text-muted-foreground hover:text-gold transition-colors">Instagram</a>
            <a href="https://www.facebook.com/fotografiadelarriva" target="_blank" rel="noopener" className="text-muted-foreground hover:text-gold transition-colors">Facebook</a>
            <a href="https://fotografiadelarriva.com" target="_blank" rel="noopener" className="text-muted-foreground hover:text-gold transition-colors">Web oficial</a>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-border pt-8 text-xs text-muted-foreground md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Alejandro de Larriva Fotografía. Todos los derechos reservados.</p>
          <p className="font-serif-italic">Hecho con pasión en Sevilla.</p>
        </div>
      </div>
    </footer>
  );
}
