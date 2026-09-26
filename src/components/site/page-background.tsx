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
 * Voalul e ținut jos (≈60%) ca fibra lemnului și rosturile dintre plăci să
 * se vadă clar în spațiile libere; unde e nevoie de contrast suplimentar
 * (titlul din hero), se adaugă un scrim local, nu se întărește voalul global.
 */
export function PageBackground() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 -z-10 h-full w-full"
      style={{
        backgroundImage:
          "linear-gradient(rgba(247, 248, 247, 0.6), rgba(247, 248, 247, 0.6)), url('/laminate-bg.webp')",
        backgroundSize: "cover, cover",
        backgroundPosition: "center, center",
        backgroundRepeat: "no-repeat, no-repeat",
      }}
    />
  );
}
