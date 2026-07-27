"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const content = {
  en: {
    title: "Terms of Use",
    updated: "Last updated: July 26, 2026",
    sections: [
      { heading: "1. Acceptance.", body: 'By downloading or using Nunapp ("the app"), developed by Emuna Cloud, you agree to these Terms of Use. If you do not agree, do not use the app.' },
      { heading: "2. License.", body: "Emuna Cloud grants you a personal, limited, non-exclusive, non-transferable license to use the app on your devices for personal, non-commercial use." },
      { heading: "3. Subscriptions and billing.", body: "Nunapp offers a 7-day free trial and then a paid subscription (monthly or annual). Payment is charged to your Apple App Store or Google Play account upon confirmation of purchase. The subscription renews automatically at the same price unless canceled at least 24 hours before the end of the current period. You can manage or cancel your subscription anytime in your store account settings. If you do not cancel during the free trial, you will be charged automatically when it ends. Prices may vary by country." },
      { heading: "4. Intended use and medical notice.", body: "Nunapp is a wellness and relaxation tool. It is not a medical device and is not intended to diagnose, treat, cure, or prevent tinnitus or any other condition, and it does not replace professional medical or audiological care. Consult a healthcare professional about any concerning symptoms. Always listen at a comfortable, moderate volume." },
      { heading: "5. No warranties.", body: 'The app is provided "as is," without warranties of any kind. We do not guarantee specific results.' },
      { heading: "6. Limitation of liability.", body: "To the extent permitted by law, Emuna Cloud is not liable for damages arising from the use of, or inability to use, the app." },
      { heading: "7. Changes.", body: "We may update these Terms; continued use of the app constitutes acceptance of the current version." },
      { heading: "8. Contact.", body: "support@emunacloud.ca" },
    ],
  },
  es: {
    title: "Términos de Uso",
    updated: "Última actualización: 26 de julio de 2026",
    sections: [
      { heading: "1. Aceptación.", body: 'Al descargar o usar Nunapp ("la aplicación"), desarrollada por Emuna Cloud, aceptas estos Términos de Uso. Si no estás de acuerdo, no uses la aplicación.' },
      { heading: "2. Licencia.", body: "Emuna Cloud te otorga una licencia personal, limitada, no exclusiva e intransferible para usar la aplicación en tus dispositivos, para uso personal y no comercial." },
      { heading: "3. Suscripciones y facturación.", body: "Nunapp ofrece una prueba gratuita de 7 días y luego una suscripción de pago (mensual o anual). El pago se cobra a tu cuenta de Apple App Store o Google Play al confirmar la compra. La suscripción se renueva automáticamente al mismo precio, a menos que la canceles al menos 24 horas antes del final del periodo actual. Puedes administrar o cancelar tu suscripción en cualquier momento en los ajustes de tu cuenta de la tienda. Si no cancelas durante la prueba gratuita, se te cobrará automáticamente al finalizar. Los precios pueden variar según el país." },
      { heading: "4. Uso previsto y aviso médico.", body: 'Nunapp es una herramienta de bienestar y relajación. No es un dispositivo médico y no está destinada a diagnosticar, tratar, curar ni prevenir el tinnitus ni ninguna otra condición, y no sustituye la atención médica o audiológica profesional. Consulta a un profesional de la salud ante cualquier síntoma preocupante. Escucha siempre a un volumen cómodo y moderado.' },
      { heading: "5. Sin garantías.", body: 'La aplicación se proporciona "tal cual", sin garantías de ningún tipo. No garantizamos resultados específicos.' },
      { heading: "6. Limitación de responsabilidad.", body: "En la medida permitida por la ley, Emuna Cloud no será responsable de daños derivados del uso o la imposibilidad de uso de la aplicación." },
      { heading: "7. Cambios.", body: "Podemos actualizar estos Términos; el uso continuado de la aplicación implica la aceptación de la versión vigente." },
      { heading: "8. Contacto.", body: "support@emunacloud.ca" },
    ],
  },
};

type Lang = "en" | "es";

export default function TermsPage() {
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
