import { LevelIcon, MoistureMeterIcon, TapeMeasureIcon } from "@/components/site/tool-icons";

const KIT = [
  {
    icon: TapeMeasureIcon,
    title: "Ruletă / metru laser",
    description: "Măsor exact suprafața și lungimile de tăiere, nu estimez din ochi.",
  },
  {
    icon: MoistureMeterIcon,
    title: "Umidometru",
    description: "Verific dacă șapa sau lemnul sunt suficient de uscate pentru montaj.",
  },
  {
    icon: LevelIcon,
    title: "Nivelă",
    description: "Verific dacă suportul e drept — nu „cam drept”, ci verificat cu nivela.",
  },
];

export function MeasureKitSection() {
  return (
    <section className="border-t border-border bg-secondary">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <h2 className="font-heading text-2xl font-bold sm:text-3xl">Ce iau la măsurătoare</h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Nu vin doar să „mă uit”. Vin cu scule de măsurat, ca vizita să dea un preț real,
          nu unul aproximativ.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {KIT.map((item) => (
            <div key={item.title} className="flex gap-4">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-lg border border-primary/25 bg-background text-primary">
                <item.icon className="size-6" />
              </span>
              <div>
                <h3 className="font-heading text-base font-bold">{item.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
