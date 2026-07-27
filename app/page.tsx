"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const t = {
  en: {
    nav: { privacy: "Privacy", terms: "Terms" },
    hero: {
      badge: "Sound Therapy · Tinnitus Relief",
      title: "Nunapp",
      tagline: "Sound therapy for tinnitus relief",
      sub: "Personalized notch therapy that helps your brain tune out the ringing — based on scientific evidence.",
      appStore: "Download on the App Store",
      googlePlay: "Get it on Google Play",
    },
    how: {
      badge: "How it works",
      title: "Three steps to quieter days",
      steps: [
        { n: "01", title: "Calibrate your frequency", body: "The app guides you through a quick calibration to identify the exact pitch of your tinnitus." },
        { n: "02", title: "Apply the notch filter", body: "We remove that specific frequency from ambient sounds and audio, reducing the signal that feeds your tinnitus." },
        { n: "03", title: "Listen and habituate", body: "Over time your brain learns to suppress the phantom sound through lateral inhibition and neural habituation." },
      ],
    },
    features: {
      badge: "Features",
      title: "Everything you need",
      items: [
        { icon: "🎵", title: "Sound library", body: "White, pink and brown noise, rain, ocean waves, forest and more — all filtered and personalised for you." },
        { icon: "🔇", title: "Background playback", body: "Keep the therapy going while you work, sleep or move. Lock-screen controls included." },
        { icon: "📓", title: "Progress diary", body: "Log your daily tinnitus severity and notes to spot patterns and track improvement over time." },
        { icon: "🌬️", title: "Breathing exercises", body: "Guided breathing sessions to reduce stress — a key trigger that worsens tinnitus symptoms." },
      ],
    },
    science: {
      badge: "The science",
      title: "Evidence-based therapy",
      body: "Tailor-made notch music therapy works by exploiting lateral inhibition in the auditory cortex — neurons surrounding the tinnitus frequency inhibit the overactive region responsible for the phantom sound. With regular listening, the brain gradually habituates and the perceived loudness decreases. This approach is supported by peer-reviewed clinical research.",
      cite: "Based on: Okamoto et al. (2010), PNAS; Stein et al. (2016), Neural Plasticity.",
    },
    pricing: {
      badge: "Pricing",
      title: "Start free, stay flexible",
      trial: "7-day free trial",
      trialSub: "No commitment. Cancel anytime during the trial.",
      monthly: "$2.99 / month",
      annual: "$14.99 / year",
      annualSave: "Save 58%",
      billing: "Billed through App Store or Google Play. Subscription renews automatically.",
    },
    footer: {
      medical: "Nunapp is a wellness tool, not a medical device, and does not replace professional medical or audiological care.",
      rights: "All rights reserved.",
    },
  },
  es: {
    nav: { privacy: "Privacidad", terms: "Términos" },
    hero: {
      badge: "Terapia de Sonido · Alivio del Tinnitus",
      title: "Nunapp",
      tagline: "Terapia de sonido para el alivio del tinnitus",
      sub: "Terapia notch personalizada que ayuda a tu cerebro a ignorar el zumbido — basada en evidencia científica.",
      appStore: "Descargar en App Store",
      googlePlay: "Disponible en Google Play",
    },
    how: {
      badge: "Cómo funciona",
      title: "Tres pasos hacia días más tranquilos",
      steps: [
        { n: "01", title: "Calibra tu frecuencia", body: "La app te guía en una calibración rápida para identificar el tono exacto de tu tinnitus." },
        { n: "02", title: "Aplicamos el filtro notch", body: "Eliminamos esa frecuencia de los sonidos ambientales, reduciendo la señal que alimenta tu tinnitus." },
        { n: "03", title: "Escucha y habitúa tu cerebro", body: "Con el tiempo tu cerebro aprende a suprimir el sonido fantasma mediante inhibición lateral y habituación neural." },
      ],
    },
    features: {
      badge: "Características",
      title: "Todo lo que necesitas",
      items: [
        { icon: "🎵", title: "Biblioteca de sonidos", body: "Ruido blanco, rosa y marrón, lluvia, olas del mar, bosque y más — filtrados y personalizados para ti." },
        { icon: "🔇", title: "Reproducción en segundo plano", body: "Continúa la terapia mientras trabajas, duermes o te mueves. Con controles en pantalla de bloqueo." },
        { icon: "📓", title: "Diario de progreso", body: "Registra la severidad diaria de tu tinnitus y notas para detectar patrones y seguir tu mejoría." },
        { icon: "🌬️", title: "Ejercicios de respiración", body: "Sesiones de respiración guiada para reducir el estrés — un factor clave que agrava los síntomas." },
      ],
    },
    science: {
      badge: "La ciencia",
      title: "Terapia basada en evidencia",
      body: "La terapia de música notch personalizada funciona aprovechando la inhibición lateral en la corteza auditiva: las neuronas que rodean la frecuencia del tinnitus inhiben la región hiperactiva responsable del sonido fantasma. Con la escucha regular, el cerebro se habitúa gradualmente y la intensidad percibida disminuye. Este enfoque está respaldado por investigación clínica revisada por pares.",
      cite: "Basado en: Okamoto et al. (2010), PNAS; Stein et al. (2016), Neural Plasticity.",
    },
    pricing: {
      badge: "Precios",
      title: "Empieza gratis, sin compromiso",
      trial: "7 días de prueba gratuita",
      trialSub: "Sin compromisos. Cancela en cualquier momento.",
      monthly: "$2.99 / mes",
      annual: "$14.99 / año",
      annualSave: "Ahorra 58%",
      billing: "Cobrado por App Store o Google Play. La suscripción se renueva automáticamente.",
    },
    footer: {
      medical: "Nunapp es una herramienta de bienestar, no un dispositivo médico, y no sustituye la atención médica o audiológica profesional.",
      rights: "Todos los derechos reservados.",
    },
  },
};

type Lang = "en" | "es";

export default function Home() {
  const [lang, setLang] = useState<Lang>("en");
  useEffect(() => {
    if (navigator.language.toLowerCase().startsWith("es")) setLang("es");
  }, []);
  const c = t[lang];

  return (
    <div style={{ background: "var(--color-cream)", minHeight: "100vh" }}>
      <header className="sticky top-0 z-50 border-b border-black/[0.06] backdrop-blur-xl"
        style={{ background: "rgba(254,250,224,0.85)" }}>
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <Image src="/icon.png" alt="Nunapp" width={32} height={32} className="rounded-xl" />
            <span className="text-lg font-bold tracking-tight" style={{ color: "var(--color-night)" }}>Nunapp</span>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-sm opacity-60 hover:opacity-100 transition-opacity">{c.nav.privacy}</Link>
            <Link href="/terms" className="text-sm opacity-60 hover:opacity-100 transition-opacity">{c.nav.terms}</Link>
            <button onClick={() => setLang(lang === "en" ? "es" : "en")}
              className="text-xs font-semibold px-3 py-1.5 rounded-full border transition-all"
              style={{ borderColor: "var(--color-salmon)", color: "var(--color-salmon)" }}>
              {lang === "en" ? "ES" : "EN"}
            </button>
          </div>
        </nav>
      </header>

      <main>
        <section className="mx-auto max-w-5xl px-6 pt-24 pb-20 text-center">
          <span className="inline-block rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest mb-8"
            style={{ background: "rgba(212,163,115,0.15)", color: "var(--color-salmon)" }}>
            {c.hero.badge}
          </span>
          <div className="flex justify-center mb-8">
            <Image src="/icon.png" alt="Nunapp icon" width={120} height={120} className="rounded-[28px] shadow-2xl" />
          </div>
          <h1 className="text-6xl sm:text-7xl font-extrabold tracking-tight mb-4" style={{ color: "var(--color-night)" }}>
            {c.hero.title}
          </h1>
          <p className="text-2xl sm:text-3xl font-light mb-6" style={{ color: "var(--color-salmon)" }}>
            {c.hero.tagline}
          </p>
          <p className="mx-auto max-w-xl text-base leading-relaxed opacity-70 mb-12">{c.hero.sub}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#" className="inline-flex items-center gap-3 rounded-2xl px-6 py-3.5 text-sm font-semibold text-white transition-all hover:scale-[1.03] active:scale-[0.98] shadow-lg"
              style={{ background: "var(--color-night)" }}>
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
              {c.hero.appStore}
            </a>
            <a href="#" className="inline-flex items-center gap-3 rounded-2xl px-6 py-3.5 text-sm font-semibold text-white transition-all hover:scale-[1.03] active:scale-[0.98] shadow-lg"
              style={{ background: "var(--color-salmon)" }}>
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M3.18 23.76c.3.17.64.22.99.14l13.12-7.44-2.93-2.93-11.18 10.23zm16.64-9.35L17.07 13l-2.93 2.93 2.75 2.75c.28.28.65.41 1.02.38.37-.02.73-.19.99-.5.51-.62.44-1.55-.18-2.15zM.46 1.07C.17 1.4 0 1.88 0 2.5v19c0 .62.17 1.1.46 1.43l.08.07 10.64-10.64v-.25L.54 1.01l-.08.06zm14.54 8.43L1.88.06.99.56l12.94 7.34 1.07-1.07-.08.07.08-.07z"/></svg>
              {c.hero.googlePlay}
            </a>
          </div>
        </section>

        <section className="py-24" style={{ background: "var(--color-night)" }}>
          <div className="mx-auto max-w-5xl px-6">
            <div className="text-center mb-16">
              <span className="inline-block rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest mb-4"
                style={{ background: "rgba(212,163,115,0.15)", color: "var(--color-salmon)" }}>
                {c.how.badge}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">{c.how.title}</h2>
            </div>
            <div className="grid gap-8 sm:grid-cols-3">
              {c.how.steps.map((s) => (
                <div key={s.n} className="rounded-3xl p-8" style={{ background: "rgba(255,255,255,0.05)" }}>
                  <span className="text-4xl font-black mb-4 block" style={{ color: "var(--color-salmon)" }}>{s.n}</span>
                  <h3 className="text-lg font-bold text-white mb-3">{s.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24" style={{ background: "var(--color-cream)" }}>
          <div className="mx-auto max-w-5xl px-6">
            <div className="text-center mb-16">
              <span className="inline-block rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest mb-4"
                style={{ background: "rgba(212,163,115,0.15)", color: "var(--color-salmon)" }}>
                {c.features.badge}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold" style={{ color: "var(--color-night)" }}>{c.features.title}</h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {c.features.items.map((f) => (
                <div key={f.title} className="rounded-3xl p-8 border"
                  style={{ borderColor: "rgba(212,163,115,0.2)", background: "rgba(212,163,115,0.06)" }}>
                  <span className="text-3xl mb-4 block">{f.icon}</span>
                  <h3 className="text-lg font-bold mb-2" style={{ color: "var(--color-night)" }}>{f.title}</h3>
                  <p className="text-sm leading-relaxed opacity-70">{f.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24" style={{ background: "var(--color-night-soft)" }}>
          <div className="mx-auto max-w-3xl px-6 text-center">
            <span className="inline-block rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ background: "rgba(212,163,115,0.15)", color: "var(--color-salmon)" }}>
              {c.science.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-8">{c.science.title}</h2>
            <p className="text-base leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.75)" }}>{c.science.body}</p>
            <p className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>{c.science.cite}</p>
          </div>
        </section>

        <section className="py-24" style={{ background: "var(--color-cream)" }}>
          <div className="mx-auto max-w-5xl px-6">
            <div className="text-center mb-16">
              <span className="inline-block rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest mb-4"
                style={{ background: "rgba(212,163,115,0.15)", color: "var(--color-salmon)" }}>
                {c.pricing.badge}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold" style={{ color: "var(--color-night)" }}>{c.pricing.title}</h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-3 max-w-3xl mx-auto">
              <div className="rounded-3xl p-8 border text-center"
                style={{ borderColor: "rgba(212,163,115,0.3)", background: "rgba(212,163,115,0.07)" }}>
                <p className="text-lg font-bold mb-1" style={{ color: "var(--color-salmon)" }}>{c.pricing.trial}</p>
                <p className="text-xs opacity-60">{c.pricing.trialSub}</p>
              </div>
              <div className="rounded-3xl p-8 text-center text-white" style={{ background: "var(--color-night)" }}>
                <p className="text-2xl font-extrabold mb-1">{c.pricing.monthly}</p>
                <p className="text-xs opacity-50">Monthly</p>
              </div>
              <div className="rounded-3xl p-8 text-center text-white relative overflow-hidden" style={{ background: "var(--color-salmon)" }}>
                <span className="absolute top-3 right-3 text-[10px] font-bold bg-white/20 px-2 py-0.5 rounded-full">{c.pricing.annualSave}</span>
                <p className="text-2xl font-extrabold mb-1">{c.pricing.annual}</p>
                <p className="text-xs opacity-70">Annual</p>
              </div>
            </div>
            <p className="text-center text-xs opacity-50 mt-8">{c.pricing.billing}</p>
          </div>
        </section>
      </main>

      <footer className="py-12 border-t" style={{ background: "var(--color-night)", borderColor: "rgba(255,255,255,0.06)" }}>
        <div className="mx-auto max-w-5xl px-6 flex flex-col items-center gap-6 text-center">
          <div className="flex items-center gap-2">
            <Image src="/icon.png" alt="Nunapp" width={28} height={28} className="rounded-lg opacity-80" />
            <span className="text-sm font-semibold text-white">Nunapp</span>
          </div>
          <p className="text-xs max-w-md" style={{ color: "rgba(255,255,255,0.35)" }}>{c.footer.medical}</p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
            <Link href="/privacy" className="hover:text-white transition-colors">{c.nav.privacy}</Link>
            <Link href="/terms" className="hover:text-white transition-colors">{c.nav.terms}</Link>
            <a href="mailto:support@emunacloud.ca" className="hover:text-white transition-colors">support@emunacloud.ca</a>
            <a href="https://www.emunacloud.ca" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">emunacloud.ca</a>
          </div>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.2)" }}>
            © {new Date().getFullYear()} Emuna Cloud Technologies Inc. {c.footer.rights}
          </p>
        </div>
      </footer>
    </div>
  );
}
