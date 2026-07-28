"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

type Lang = "en" | "es";

type Study = {
  signal: "promising" | "no-primary-effect" | "strongest-evidence" | "technical";
  title: string;
  authors: string;
  year: number;
  journal: string;
  summary: string;
  link: string;
  linkLabel: string;
};

const studies: Record<Lang, Study[]> = {
  en: [
    {
      signal: "promising",
      title: "Listening to tailor-made notched music reduces tinnitus loudness and tinnitus-related auditory cortex activity",
      authors: "Okamoto H, Stracke H, Stoll W, Pantev C",
      year: 2010,
      journal: "PNAS, 107(3):1207–1210",
      summary:
        "An early influential study that found daily listening to music with a notch at the tinnitus frequency reduced perceived loudness and corresponding auditory cortex over-activity after 12 months. It provided the neurological rationale for notch therapy through lateral inhibition.",
      link: "https://doi.org/10.1073/pnas.0911268107",
      linkLabel: "DOI 10.1073/pnas.0911268107",
    },
    {
      signal: "no-primary-effect",
      title: "Clinical trial on tonal tinnitus with tailor-made notched music training",
      authors: "Stein A, Wunderlich R, Lau P, et al.",
      year: 2016,
      journal: "BMC Neurology, 16:38",
      summary:
        "A larger randomized controlled trial (n=100, 3 months, 2 h/day) that did not find a significant effect on the primary outcome (tinnitus distress on the Tinnitus Questionnaire). A secondary measure — tinnitus loudness at follow-up — did show a significant reduction. A reminder that results vary.",
      link: "https://pubmed.ncbi.nlm.nih.gov/26987755/",
      linkLabel: "PubMed 26987755",
    },
    {
      signal: "promising",
      title: "Tailor-made notched music training versus tinnitus retraining therapy: a randomized controlled trial",
      authors: "Tong J, Feng Y, Chen B, et al.",
      year: 2023,
      journal: "Ear & Hearing, 44(4):670–681",
      summary:
        "This RCT (n=112) compared notched music training directly against tinnitus retraining therapy (TRT). TMNMT showed advantages over TRT in reducing tinnitus loudness and functional/emotional disturbance, with better compliance. Encouraging, though both groups improved.",
      link: "https://pubmed.ncbi.nlm.nih.gov/36534646/",
      linkLabel: "PubMed 36534646",
    },
    {
      signal: "strongest-evidence",
      title: "Cognitive behavioural therapy for tinnitus",
      authors: "Fuller T, Cima R, Langguth B, Mazurek B, Vlaeyen JW, Hoare DJ",
      year: 2020,
      journal: "Cochrane Database of Systematic Reviews, 1:CD012614",
      summary:
        "The most rigorous review on tinnitus management: a Cochrane meta-analysis of 28 RCTs (2,733 participants). CBT consistently reduces tinnitus-related distress and improves quality of life, though it does not reduce the perceived loudness of the sound itself. This is why Nunapp combines sound therapy with relaxation and mindfulness.",
      link: "https://doi.org/10.1002/14651858.CD012614.pub2",
      linkLabel: "DOI 10.1002/14651858.CD012614.pub2",
    },
    {
      signal: "technical",
      title: "Impact of spectral notch width on neurophysiological plasticity and clinical effectiveness of tailor-made notched music training",
      authors: "Wunderlich R, Lau P, Stein A, Engell A, Wollbrink A, Rudack C, Pantev C",
      year: 2015,
      journal: "PLOS ONE, 10(9):e0138595",
      summary:
        "A technical study examining whether the width of the frequency notch (1 octave vs. ½ vs. ¼) affects outcomes. Notch width did not have a significant influence on behavioral or neural effects, suggesting the therapy works within a range of filter parameters.",
      link: "https://doi.org/10.1371/journal.pone.0138595",
      linkLabel: "DOI 10.1371/journal.pone.0138595",
    },
  ],
  es: [
    {
      signal: "promising",
      title: "Escuchar música con muesca personalizada reduce la intensidad del tinnitus y la actividad del córtex auditivo",
      authors: "Okamoto H, Stracke H, Stoll W, Pantev C",
      year: 2010,
      journal: "PNAS, 107(3):1207–1210",
      summary:
        "Un estudio temprano e influyente que encontró que escuchar diariamente música con una muesca en la frecuencia del tinnitus redujo la sonoridad percibida y la sobreactividad del córtex auditivo después de 12 meses. Aportó la base neurológica de la terapia notch mediante inhibición lateral.",
      link: "https://doi.org/10.1073/pnas.0911268107",
      linkLabel: "DOI 10.1073/pnas.0911268107",
    },
    {
      signal: "no-primary-effect",
      title: "Ensayo clínico sobre tinnitus tonal con entrenamiento de música con muesca personalizada",
      authors: "Stein A, Wunderlich R, Lau P, et al.",
      year: 2016,
      journal: "BMC Neurology, 16:38",
      summary:
        "Un ensayo controlado aleatorio más grande (n=100, 3 meses, 2 h/día) que no encontró un efecto significativo en el resultado primario (malestar por tinnitus en el Tinnitus Questionnaire). Una medida secundaria —la sonoridad del tinnitus en el seguimiento— sí mostró reducción significativa. Un recordatorio de que los resultados varían.",
      link: "https://pubmed.ncbi.nlm.nih.gov/26987755/",
      linkLabel: "PubMed 26987755",
    },
    {
      signal: "promising",
      title: "Entrenamiento con música con muesca vs. terapia de reentrenamiento del tinnitus: ensayo controlado aleatorio",
      authors: "Tong J, Feng Y, Chen B, et al.",
      year: 2023,
      journal: "Ear & Hearing, 44(4):670–681",
      summary:
        "Este ECA (n=112) comparó directamente el entrenamiento con música con muesca frente a la terapia de reentrenamiento del tinnitus (TRT). El TMNMT mostró ventajas sobre la TRT en reducción de sonoridad y malestar funcional/emocional, con mejor adherencia. Alentador, aunque ambos grupos mejoraron.",
      link: "https://pubmed.ncbi.nlm.nih.gov/36534646/",
      linkLabel: "PubMed 36534646",
    },
    {
      signal: "strongest-evidence",
      title: "Terapia cognitivo-conductual para el tinnitus",
      authors: "Fuller T, Cima R, Langguth B, Mazurek B, Vlaeyen JW, Hoare DJ",
      year: 2020,
      journal: "Cochrane Database of Systematic Reviews, 1:CD012614",
      summary:
        "La revisión más rigurosa sobre el manejo del tinnitus: un metaanálisis Cochrane de 28 ECA (2.733 participantes). La TCC reduce consistentemente el malestar asociado al tinnitus y mejora la calidad de vida, aunque no reduce la sonoridad percibida del sonido en sí. Por eso Nunapp combina terapia de sonido con relajación y atención plena.",
      link: "https://doi.org/10.1002/14651858.CD012614.pub2",
      linkLabel: "DOI 10.1002/14651858.CD012614.pub2",
    },
    {
      signal: "technical",
      title: "Impacto del ancho de la muesca espectral en la plasticidad neurofisiológica y la efectividad clínica del entrenamiento con música con muesca",
      authors: "Wunderlich R, Lau P, Stein A, Engell A, Wollbrink A, Rudack C, Pantev C",
      year: 2015,
      journal: "PLOS ONE, 10(9):e0138595",
      summary:
        "Un estudio técnico que examina si el ancho de la muesca de frecuencia (1 octava vs. ½ vs. ¼) afecta los resultados. El ancho de la muesca no tuvo una influencia significativa en los efectos conductuales ni neurales, lo que sugiere que la terapia funciona en un rango de parámetros del filtro.",
      link: "https://doi.org/10.1371/journal.pone.0138595",
      linkLabel: "DOI 10.1371/journal.pone.0138595",
    },
  ],
};

const signalConfig = {
  promising: { label: { en: "Promising", es: "Prometedor" }, color: "#2d6a4f" },
  "no-primary-effect": { label: { en: "Mixed — no primary effect", es: "Mixto — sin efecto primario" }, color: "#b5451b" },
  "strongest-evidence": { label: { en: "Strongest evidence", es: "Evidencia más sólida" }, color: "#1d3461" },
  technical: { label: { en: "Technical / exploratory", es: "Técnico / exploratorio" }, color: "#6b6b6b" },
};

const ui = {
  en: {
    title: "What the research says",
    updated: "Last reviewed: July 2026",
    intro:
      "Sound therapy with a notch for tinnitus is an active area of research, with promising but mixed results. Here we gather some of the most relevant studies — both the encouraging ones and those that found no clear benefit — so you have the full picture. Nunapp is a wellness tool, not a medical device or a cure; results vary from person to person.",
    studiesTitle: "Key studies",
    viewStudy: "View study →",
    closing: {
      heading: "The bottom line",
      body: "The science of tinnitus is still evolving. Nunapp combines sound therapy with education and relaxation exercises because tinnitus management tends to work best as an integrated approach. If your tinnitus is sudden, in one ear only, or comes with hearing loss, dizziness, or pain, please consult a specialist.",
    },
    disclaimer:
      "Nunapp is a wellness tool, not a medical device, and does not replace professional medical or audiological care.",
    back: "← Back to Nunapp",
  },
  es: {
    title: "Qué dice la investigación",
    updated: "Última revisión: julio de 2026",
    intro:
      "La terapia de sonido con muesca para el tinnitus es un área activa de investigación, con resultados prometedores pero mixtos. Aquí reunimos algunos de los estudios más relevantes, tanto los alentadores como los que no encontraron un beneficio claro, para que tengas el panorama completo. Nunapp es una herramienta de bienestar, no un dispositivo médico ni una cura; los resultados varían de persona a persona.",
    studiesTitle: "Estudios clave",
    viewStudy: "Ver estudio →",
    closing: {
      heading: "En resumen",
      body: "La ciencia del tinnitus sigue evolucionando. Nunapp combina terapia de sonido con educación y ejercicios de relajación porque el manejo del tinnitus suele funcionar mejor de forma integral. Si tu tinnitus es súbito, en un solo oído, o viene con pérdida auditiva, mareo o dolor, consulta a un especialista.",
    },
    disclaimer:
      "Nunapp es una herramienta de bienestar, no un dispositivo médico, y no sustituye la atención médica o audiológica profesional.",
    back: "← Volver a Nunapp",
  },
};

export default function ResearchPage() {
  const [lang, setLang] = useState<Lang>("en");
  useEffect(() => {
    if (navigator.language.toLowerCase().startsWith("es")) setLang("es");
  }, []);

  const c = ui[lang];
  const list = studies[lang];

  return (
    <div style={{ background: "var(--color-cream)", minHeight: "100vh" }}>
      <header
        className="sticky top-0 z-50 border-b border-black/[0.06] backdrop-blur-xl"
        style={{ background: "rgba(254,250,224,0.85)" }}
      >
        <nav className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/icon.png" alt="Nunapp" width={28} height={28} className="rounded-lg" />
            <span className="font-bold" style={{ color: "var(--color-night)" }}>Nunapp</span>
          </Link>
          <button
            onClick={() => setLang(lang === "en" ? "es" : "en")}
            className="text-xs font-semibold px-3 py-1.5 rounded-full border transition-all"
            style={{ borderColor: "var(--color-salmon)", color: "var(--color-salmon)" }}
          >
            {lang === "en" ? "ES" : "EN"}
          </button>
        </nav>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-4xl font-extrabold mb-2" style={{ color: "var(--color-night)" }}>
          {c.title}
        </h1>
        <p className="text-xs opacity-40 mb-10">{c.updated}</p>

        <p className="text-sm leading-relaxed opacity-70 mb-16 max-w-2xl">{c.intro}</p>

        <h2 className="text-xl font-bold mb-8" style={{ color: "var(--color-night)" }}>
          {c.studiesTitle}
        </h2>

        <div className="space-y-6">
          {list.map((s, i) => {
            const sig = signalConfig[s.signal];
            return (
              <div
                key={i}
                className="rounded-2xl border p-6"
                style={{ borderColor: "rgba(0,0,0,0.08)", background: "rgba(255,255,255,0.55)" }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className="inline-block rounded-full px-3 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white"
                    style={{ background: sig.color }}
                  >
                    {sig.label[lang]}
                  </span>
                  <span className="text-xs opacity-40">{s.year}</span>
                </div>

                <p className="text-sm font-semibold leading-snug mb-1" style={{ color: "var(--color-night)" }}>
                  {s.title}
                </p>
                <p className="text-xs opacity-50 mb-3">
                  {s.authors} · {s.journal}
                </p>
                <p className="text-sm leading-relaxed opacity-70 mb-4">{s.summary}</p>

                <a
                  href={s.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs font-semibold transition-opacity hover:opacity-70"
                  style={{ color: "var(--color-salmon)" }}
                >
                  {c.viewStudy}
                  <span className="ml-1 text-[10px] opacity-60 font-normal">{s.linkLabel}</span>
                </a>
              </div>
            );
          })}
        </div>

        <div
          className="mt-14 rounded-2xl p-8"
          style={{ background: "var(--color-night)" }}
        >
          <h2 className="text-lg font-bold text-white mb-3">{c.closing.heading}</h2>
          <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.7)" }}>
            {c.closing.body}
          </p>
          <p
            className="text-xs leading-relaxed px-4 py-3 rounded-xl"
            style={{ background: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.45)" }}
          >
            ⚠️ {c.disclaimer}
          </p>
        </div>
      </main>

      <footer
        className="py-8 border-t text-center text-xs"
        style={{ borderColor: "rgba(0,0,0,0.06)", color: "rgba(0,0,0,0.35)" }}
      >
        <Link href="/" className="hover:underline">
          {c.back}
        </Link>
      </footer>
    </div>
  );
}
