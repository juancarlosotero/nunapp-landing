"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const content = {
  en: {
    title: "Privacy Policy",
    updated: "Last updated: July 26, 2026",
    sections: [
      { heading: "1. We do not collect your personal data.", body: "Nunapp does not collect, transmit, or share any personal information. It does not require an account; it does not ask for your name, email, location, or contacts; and it contains no third-party advertising or analytics." },
      { heading: "2. Data stored only on your device.", body: "For the app to work, some data is stored solely in your device's local storage. This data never leaves your phone and never reaches us or any server. It includes: your calibrated tinnitus frequency and filter settings; saved sound mixes (presets) and per-sound volumes; your tinnitus diary entries (severity and any notes you choose to write); and app preferences such as theme. You can delete all of it by uninstalling the app." },
      { heading: "3. Audio playback.", body: "The app plays sounds bundled with it and sounds generated on your device. It may continue playback in the background and show lock-screen controls; this happens locally and involves no data collection." },
      { heading: "4. Children.", body: "Nunapp is not directed to children under 13. Since we collect no data from any user, no data is collected from children." },
      { heading: "5. Important health notice.", body: "Nunapp is a wellness tool, not a medical device, and does not replace professional medical or audiological care. If your tinnitus is sudden, in one ear only, or comes with hearing loss, dizziness, or pain, consult a specialist." },
      { heading: "6. Changes to this policy.", body: "We may update this policy from time to time; the current version will be posted on this page with its date." },
      { heading: "7. Contact.", body: "support@emunacloud.ca" },
    ],
  },
  es: {
    title: "Política de Privacidad",
    updated: "Última actualización: 26 de julio de 2026",
    sections: [
      { heading: "1. No recopilamos tus datos personales.", body: "Nunapp no recopila, transmite ni comparte ninguna información personal. No requiere crear una cuenta, no pide tu nombre, correo, ubicación ni contactos, y no incluye herramientas de publicidad ni de analítica de terceros." },
      { heading: "2. Datos que se guardan solo en tu dispositivo.", body: "Para que la aplicación funcione, se almacenan algunos datos únicamente en el almacenamiento local de tu dispositivo. Estos datos nunca salen de tu teléfono ni llegan a nosotros ni a ningún servidor. Incluyen: tu frecuencia de tinnitus calibrada y los ajustes del filtro; las mezclas de sonido guardadas (presets) y los volúmenes por sonido; tus registros del diario de tinnitus (severidad y notas que decidas escribir); y preferencias de la aplicación, como el tema. Puedes eliminar todos estos datos desinstalando la aplicación." },
      { heading: "3. Reproducción de audio.", body: "La aplicación reproduce sonidos incluidos en la propia app y sonidos generados en tu dispositivo. Puede continuar la reproducción en segundo plano y mostrar controles en la pantalla de bloqueo; esto ocurre localmente y no implica recopilación de datos." },
      { heading: "4. Menores de edad.", body: "Nunapp no está dirigida a menores de 13 años. Como no recopilamos datos de ningún usuario, no se recopila información de menores." },
      { heading: "5. Aviso importante de salud.", body: "Nunapp es una herramienta de bienestar, no un dispositivo médico, y no sustituye la atención médica o audiológica profesional. Si tu tinnitus es súbito, en un solo oído, o viene acompañado de pérdida auditiva, mareo o dolor, consulta a un especialista." },
      { heading: "6. Cambios a esta política.", body: "Podemos actualizar esta política ocasionalmente; publicaremos la versión vigente en esta página con su fecha." },
      { heading: "7. Contacto.", body: "support@emunacloud.ca" },
    ],
  },
};

type Lang = "en" | "es";

export default function PrivacyPage() {
  const [lang, setLang] = useState<Lang>("en");
  useEffect(() => {
    if (navigator.language.toLowerCase().startsWith("es")) setLang("es");
  }, []);
  const c = content[lang];

  return (
    <div style={{ background: "var(--color-cream)", minHeight: "100vh" }}>
      <header className="sticky top-0 z-50 border-b border-black/[0.06] backdrop-blur-xl"
        style={{ background: "rgba(254,250,224,0.85)" }}>
        <nav className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/icon.png" alt="Nunapp" width={28} height={28} className="rounded-lg" />
            <span className="font-bold" style={{ color: "var(--color-night)" }}>Nunapp</span>
          </Link>
          <button onClick={() => setLang(lang === "en" ? "es" : "en")}
            className="text-xs font-semibold px-3 py-1.5 rounded-full border transition-all"
            style={{ borderColor: "var(--color-salmon)", color: "var(--color-salmon)" }}>
            {lang === "en" ? "ES" : "EN"}
          </button>
        </nav>
      </header>
      <main className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-4xl font-extrabold mb-2" style={{ color: "var(--color-night)" }}>{c.title}</h1>
        <p className="text-sm opacity-50 mb-12">{c.updated}</p>
        <div className="space-y-10">
          {c.sections.map((s) => (
            <div key={s.heading}>
              <h2 className="text-base font-bold mb-2" style={{ color: "var(--color-night)" }}>{s.heading}</h2>
              <p className="text-sm leading-relaxed opacity-75">{s.body}</p>
            </div>
          ))}
        </div>
      </main>
      <footer className="py-8 border-t text-center text-xs"
        style={{ borderColor: "rgba(0,0,0,0.06)", color: "rgba(0,0,0,0.35)" }}>
        <Link href="/" className="hover:underline">← Back to Nunapp</Link>
      </footer>
    </div>
  );
}
