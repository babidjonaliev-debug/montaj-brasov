/**
 * Fundalul paginii: o fotografie reală de parchet laminat (stejar, plăci
 * late, cadru de sus, lumină naturală), fixă pe viewport, cu un voal alb
 * translucid peste ea — ca lemnul să rămână vizibil în spații, dar textul,
 * cardurile și butoanele teal să rămână perfect lizibile.
 *
 * Voalul e desenat ca primul strat de background-image (un gradient plat,
 * de aceeași culoare cu fundalul de bază #F7F8F7), suprapus fotografiei —
 * niciun element separat, nicio iconiță, niciun pattern ilustrat.
 *
 * Voalul e ≈70%: fibra lemnului rămâne vizibilă în spațiile libere, dar
 * mai liniștită. Unde titlul are nevoie de contrast, se adaugă un scrim
 * local, nu se întărește voalul global. Cardurile, headerul, banda teal
 * și bara de WhatsApp de pe mobil stau pe fundaluri opace, nu pe poză.
 */
export function PageBackground() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 -z-10 h-full w-full"
      style={{
        backgroundImage:
          "linear-gradient(rgba(247, 248, 247, 0.7), rgba(247, 248, 247, 0.7)), url('/laminate-bg.webp')",
        backgroundSize: "cover, cover",
        backgroundPosition: "center, center",
        backgroundRepeat: "no-repeat, no-repeat",
      }}
    />
  );
}
