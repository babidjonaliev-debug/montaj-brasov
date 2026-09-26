const STEPS = [
  {
    number: "1",
    title: "Scrii pe WhatsApp",
    description:
      "Trimiți localitatea, ce vrei să montezi și suprafața aproximativă. Poți scrie oricând, chiar și noaptea — răspund cum sunt liber.",
  },
  {
    number: "2",
    title: "Vin la măsurătoare",
    description:
      "În Brașov, de obicei în aceeași zi. Măsor camera, verific suportul și îți spun clar dacă are nevoie de pregătire înainte de montaj.",
  },
  {
    number: "3",
    title: "Fac lucrarea",
    description:
      "Primești suma și data pe WhatsApp după măsurătoare. Când confirmi, vin cu scule și montez — cu curățenie la final.",
  },
];

export function StepsSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <h2 className="font-heading text-2xl font-semibold sm:text-3xl">Cum lucrăm</h2>
      <div className="mt-8 grid gap-8 sm:grid-cols-3">
        {STEPS.map((step) => (
          <div key={step.number}>
            <span className="font-heading text-3xl font-semibold text-primary">
              {step.number}
            </span>
            <h3 className="mt-3 text-lg font-semibold">{step.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
