"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const EMAIL = "support@emunacloud.ca";

const content = {
  en: {
    title: "Support",
    updated: "We answer every message, usually within one business day.",
    contactLabel: "Email us",
    contactNote: "Tell us your device model and iOS or Android version — it saves a round trip.",
    sections: [
      {
        heading: "How do I find my tinnitus frequency?",
        body: "Open the calibration wizard and move the slider until the tone matches the pitch of your tinnitus as closely as you can. Use headphones in a quiet room, at a comfortable volume. Getting within a few hundred hertz is enough for the therapy to work — the notch is wider than the tone itself. You can recalibrate whenever you like.",
      },
      {
        heading: "The calibration tone sounds odd or harsh.",
        body: "It should be a clean, single tone at every frequency. If you hear a whistle or a metallic edge alongside it, make sure you are running the latest version of the app, then write to us with the frequency where you hear it. Small phone speakers reproduce low tones poorly, so headphones give a much more reliable match below about 500 Hz.",
      },
      {
        heading: "Why does a sound take a moment to change when I move the notch?",
        body: "The notch filter is applied to the whole audio track rather than in real time, which is what keeps the filtering accurate and the battery cost low. Changing the frequency or the width re-processes the track in the background, so you hear the new setting a moment later.",
      },
      {
        heading: "Does Nunapp work without an internet connection?",
        body: "Yes. Every sound ships inside the app and plays offline. The first time you play one, the app also downloads a longer, higher-quality version in the background so long sessions do not loop noticeably. That download is optional.",
      },
      {
        heading: "How much storage does Nunapp use, and can I free it up?",
        body: "Open Settings → About and look at the Storage section. It shows how much downloaded audio you have and lets you clear it at any time. You can also turn off high-quality downloads there — the app keeps working with the bundled sounds. Clearing never loses your settings or your log.",
      },
      {
        heading: "How do the free trial and the subscription work?",
        body: "Nunapp includes a 7-day free trial, then a monthly or annual subscription. Billing goes through your App Store or Google Play account, and the subscription renews automatically unless you cancel at least 24 hours before the period ends. If you do not cancel during the trial, it converts to a paid subscription when the trial ends.",
      },
      {
        heading: "How do I cancel?",
        body: "Cancelling happens in your store account, not in the app. On iPhone: Settings → your name → Subscriptions → Nunapp. On Android: Play Store → profile → Payments and subscriptions → Subscriptions → Nunapp. Cancelling stops future renewals and you keep access until the end of the period you already paid for.",
      },
      {
        heading: "I already subscribed but the app is asking me to pay again.",
        body: 'Tap "Restore purchases" on the subscription screen, signed in with the same Apple ID or Google account you bought it with. Purchases are tied to that store account, so a different account will not see them. If restoring does not work, email us the store receipt and we will sort it out.',
      },
      {
        heading: "Can I ask for a refund?",
        body: "Refunds are handled by Apple and Google, not by us — we have no way to issue them. On iOS use reportaproblem.apple.com; on Android use the Play Store order history. Write to us anyway if something went wrong, so we can fix the underlying cause.",
      },
      {
        heading: "Is Nunapp a medical treatment?",
        body: "No. Nunapp is a wellness and relaxation tool. It is not a medical device and is not intended to diagnose, treat, cure, or prevent tinnitus or any other condition, and it does not replace professional medical or audiological care. If your tinnitus is new, sudden, one-sided, or comes with hearing loss or dizziness, see a healthcare professional.",
      },
      {
        heading: "How should I use it, and for how long?",
        body: "Listen at a comfortable, moderate volume — the sound should sit alongside your tinnitus, not drown it out. Regular sessions matter more than long ones. Research on notched sound therapy generally measures effects over weeks and months rather than days, so give it time.",
      },
    ],
  },
  es: {
    title: "Soporte",
    updated: "Respondemos todos los mensajes, normalmente en un día laborable.",
    contactLabel: "Escríbenos",
    contactNote: "Cuéntanos el modelo de tu dispositivo y la versión de iOS o Android — nos ahorra una ida y vuelta.",
    sections: [
      {
        heading: "¿Cómo encuentro la frecuencia de mi tinnitus?",
        body: "Abre el asistente de calibración y mueve el control hasta que el tono coincida lo más posible con el de tu tinnitus. Hazlo con auriculares, en una habitación silenciosa y a un volumen cómodo. Acertar con un margen de unos cientos de hercios es suficiente para que la terapia funcione: la muesca es más ancha que el tono. Puedes recalibrar cuando quieras.",
      },
      {
        heading: "El tono de calibración suena raro o áspero.",
        body: "Debe oírse como un tono limpio en cualquier frecuencia. Si percibes un silbido o un filo metálico encima, comprueba que tienes la última versión de la app y escríbenos indicando la frecuencia donde lo notas. El altavoz del móvil reproduce mal los tonos graves, así que por debajo de unos 500 Hz los auriculares dan una coincidencia mucho más fiable.",
      },
      {
        heading: "¿Por qué el sonido tarda un momento en cambiar al mover la muesca?",
        body: "El filtro se aplica a la pista completa en lugar de en tiempo real, y eso es lo que mantiene el filtrado preciso y el consumo de batería bajo. Al cambiar la frecuencia o la anchura, la pista se reprocesa en segundo plano, así que oyes el ajuste nuevo un momento después.",
      },
      {
        heading: "¿Funciona Nunapp sin conexión a internet?",
        body: "Sí. Todos los sonidos vienen dentro de la app y suenan sin conexión. La primera vez que reproduces uno, la app además descarga en segundo plano una versión más larga y de mejor calidad para que las sesiones largas no se noten repetitivas. Esa descarga es opcional.",
      },
      {
        heading: "¿Cuánto espacio ocupa Nunapp y puedo liberarlo?",
        body: "Entra en Ajustes → Acerca de y mira la sección de Almacenamiento. Te dice cuánto audio descargado tienes y te deja borrarlo cuando quieras. Ahí mismo puedes desactivar las descargas en alta calidad: la app sigue funcionando con los sonidos incluidos. Borrar nunca pierde tus ajustes ni tu registro.",
      },
      {
        heading: "¿Cómo funcionan la prueba gratuita y la suscripción?",
        body: "Nunapp incluye 7 días de prueba gratuita y después una suscripción mensual o anual. El cobro se hace a través de tu cuenta de App Store o Google Play, y la suscripción se renueva automáticamente salvo que la canceles al menos 24 horas antes de que termine el periodo. Si no cancelas durante la prueba, pasa a ser una suscripción de pago al terminar.",
      },
      {
        heading: "¿Cómo cancelo?",
        body: "La cancelación se hace en tu cuenta de la tienda, no dentro de la app. En iPhone: Ajustes → tu nombre → Suscripciones → Nunapp. En Android: Play Store → tu perfil → Pagos y suscripciones → Suscripciones → Nunapp. Al cancelar dejan de cobrarte y conservas el acceso hasta el final del periodo que ya pagaste.",
      },
      {
        heading: "Ya me suscribí pero la app me vuelve a pedir el pago.",
        body: 'Pulsa "Restaurar compras" en la pantalla de suscripción, con la misma cuenta de Apple o de Google con la que compraste. Las compras van ligadas a esa cuenta de la tienda, así que desde otra no aparecen. Si restaurar no funciona, mándanos el recibo de la tienda y lo resolvemos.',
      },
      {
        heading: "¿Puedo pedir un reembolso?",
        body: "Los reembolsos los gestionan Apple y Google, no nosotros: no tenemos forma de emitirlos. En iOS, usa reportaproblem.apple.com; en Android, el historial de pedidos de Play Store. Escríbenos igualmente si algo salió mal, para que podamos arreglar la causa.",
      },
      {
        heading: "¿Nunapp es un tratamiento médico?",
        body: "No. Nunapp es una herramienta de bienestar y relajación. No es un dispositivo médico y no está destinada a diagnosticar, tratar, curar ni prevenir el tinnitus ni ninguna otra condición, y no sustituye la atención médica o audiológica profesional. Si tu tinnitus es nuevo, repentino, de un solo oído, o va acompañado de pérdida de audición o mareos, consulta a un profesional de la salud.",
      },
      {
        heading: "¿Cómo conviene usarla y durante cuánto tiempo?",
        body: "Escucha a un volumen cómodo y moderado: el sonido debe acompañar a tu tinnitus, no taparlo. Importa más la constancia que la duración. La investigación sobre terapia de sonido con muesca mide sus efectos en semanas y meses más que en días, así que dale tiempo.",
      },
    ],
  },
};

type Lang = "en" | "es";

export default function SupportPage() {
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
        <p className="text-sm opacity-50 mb-10">{c.updated}</p>

        <div className="rounded-2xl border p-6 mb-14"
          style={{ borderColor: "rgba(0,0,0,0.08)", background: "rgba(255,255,255,0.5)" }}>
          <p className="text-xs font-semibold uppercase tracking-wider mb-2"
            style={{ color: "var(--color-salmon)" }}>{c.contactLabel}</p>
          <a href={`mailto:${EMAIL}`} className="text-lg font-bold hover:underline"
            style={{ color: "var(--color-night)" }}>{EMAIL}</a>
          <p className="text-sm leading-relaxed opacity-70 mt-3">{c.contactNote}</p>
        </div>

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
