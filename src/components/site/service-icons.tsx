/**
 * Iconițe originale, cu contur (stroke), pentru cele 5 servicii. Nu sunt
 * emoji și nu vin dintr-un pachet de iconițe stoc — sunt desenate ca forme
 * simple, tehnice, care se recunosc dintr-o privire: o planșă de laminat,
 * o planșă de vinil (cu o picătură, pentru rezistența la apă), o rolă de
 * linoleum, o placă de OSB (cu textura de talaș) și o priză.
 *
 * Un singur set, folosit atât pe cardurile de servicii de pe homepage, cât
 * și în capul fiecărei pagini de serviciu.
 */
import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function IconBase({ children, ...props }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

/** Planșă de laminat: o placă alungită, cu profil „click" la un capăt și linii de fibră. */
export function LaminatIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect x="5" y="14" width="26" height="12" rx="1.5" />
      <path d="M31 17.5h4v5h-4" />
      <path d="M10 18.5h16M10 21.5h16" strokeOpacity={0.55} />
    </IconBase>
  );
}

/** Planșă de vinil: aceeași placă, plus o picătură — rezistența la apă. */
export function VinilIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect x="5" y="16" width="24" height="11" rx="1.5" />
      <path d="M10 19.5h14M10 22h14" strokeOpacity={0.55} />
      <path d="M30 9.5c2.4 2.7 3.4 4.6 3.4 6.2a3.4 3.4 0 1 1-6.8 0c0-1.6 1-3.5 3.4-6.2Z" />
    </IconBase>
  );
}

/** Rolă de linoleum: un cilindru (rola) și o foaie scurtă, dreaptă, derulată din el. */
export function LinoleumIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <ellipse cx="12" cy="9" rx="6" ry="2.4" />
      <path d="M6 9v13a6 2.4 0 0 0 12 0V9" />
      <rect x="18" y="19" width="15" height="6" />
      <path d="M18 22h15" strokeOpacity={0.55} />
    </IconBase>
  );
}

/** Placă OSB: un panou cu talaș — câteva linii scurte, aleatorii, ca fulgii de lemn. */
export function OsbIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect x="6" y="8" width="28" height="24" rx="1.5" />
      <path
        d="M12 14.5l3-1.4M18.5 12.5l2.6 1.7M25.5 13l3 1.2M11 21l2.7 1.6M17.5 20l3 .6M24 20.5l3.3-1M12.5 27.5l2.8-1.3M19 26.5l2.8 1.3M26 27l2.6-1.4"
        strokeOpacity={0.7}
      />
    </IconBase>
  );
}

/** Priză: o cutie cu două fante și pin de împământare — pentru lucrări mici. */
export function SocketIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect x="8" y="6" width="24" height="28" rx="4" />
      <path d="M16.5 15v6M23.5 15v6" />
      <circle cx="20" cy="26" r="1.6" fill="currentColor" stroke="none" />
    </IconBase>
  );
}

export const SERVICE_ICONS = {
  laminat: LaminatIcon,
  vinil: VinilIcon,
  linoleum: LinoleumIcon,
  osb: OsbIcon,
  lucrariMici: SocketIcon,
} as const;

export type ServiceIconKey = keyof typeof SERVICE_ICONS;
