/**
 * Iconițe originale, cu contur teal, pentru cele 5 servicii. Nu sunt
 * emoji, nu sunt festive și nu vin dintr-un pachet de iconițe stoc — sunt
 * ilustrații simple, realiste, de aceeași mărime, gândite să se recunoască
 * clar unele de altele:
 *
 * - Laminat: planșe rigide, puse ca podea, cu rosturi decalate, fibră de
 *   lemn în fiecare planșă și o îmbinare click la capătul scurt.
 * - Vinil: planșe mai subțiri și mai netede, aliniate la aceeași lungime,
 *   fără noduri de lemn, cu o dungă de luciu și muchia subțire vizibilă.
 * - Linoleum: o rolă din care se desprinde o foaie întinsă. Nu sunt planșe.
 * - OSB: o placă în picioare, nu o podea, cu așchii de lemn presate.
 * - Lucrări mici: o priză de perete.
 *
 * Un singur set, folosit pe cardurile de servicii de pe homepage și în
 * capul fiecărei pagini de serviciu.
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

/** Podea din planșe rigide, rosturi decalate, fibră și un dinte de click. */
export function LaminatIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M3 4.5h19v9.2H3z" />
      <path d="M23 4.5H37v9.2H23z" />
      <path d="M3 15.2h11.2V18h2.2v1.15h1.15v2.5H16.4V23h-2.2v1.4H3z" />
      <path d="M18.6 15.2H37v9.2H18.6z" />
      <path d="M3 25.8h22.2v9.2H3z" />
      <path d="M26.2 25.8H37v9.2H26.2z" />
      <path d="M5.2 7.6c2.2.85 3.3-.65 5.4.12 2.1.75 3.2-.55 5.2.1" strokeOpacity={0.55} />
      <path d="M5.2 10.6c2.2.75 3.3-.55 5.4.1 2.1.65 3.2-.45 5.2.08" strokeOpacity={0.4} />
      <path d="M25 7.6c1.7.75 2.6-.55 4.3.1s2.5-.45 4 .08" strokeOpacity={0.55} />
      <path d="M5 18.4c1.5.65 2.2-.45 3.7.08" strokeOpacity={0.55} />
      <path d="M5 21.2c1.5.55 2.2-.35 3.7.08" strokeOpacity={0.4} />
      <path d="M20.8 18.4c2.3.85 3.4-.65 5.6.1 2.2.75 3.3-.55 5.4.1" strokeOpacity={0.55} />
      <path d="M20.8 21.2c2.3.7 3.4-.5 5.6.08 2.2.6 3.3-.4 5.4.08" strokeOpacity={0.4} />
      <path d="M5.2 29c2.5.85 3.7-.65 6.1.1 2.4.75 3.6-.55 5.8.1" strokeOpacity={0.55} />
      <path d="M5.2 32c2.5.7 3.7-.5 6.1.08 2.4.6 3.6-.4 5.8.08" strokeOpacity={0.4} />
      <path d="M28.2 29c1.2.55 1.8-.35 3 .08" strokeOpacity={0.55} />
    </IconBase>
  );
}

/** Planșe subțiri, drepte, cu luciu și muchie vizibilă — fără fibră de lemn. */
export function VinilIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect x="3.5" y="6" width="30" height="5" rx="1.3" />
      <rect x="3.5" y="13.3" width="30" height="5" rx="1.3" />
      <rect x="3.5" y="20.6" width="30" height="5" rx="1.3" />
      <rect x="3.5" y="27.9" width="30" height="5" rx="1.3" />
      <path d="M7 7.4h11" strokeOpacity={0.5} />
      <path d="M7 14.7h11" strokeOpacity={0.5} />
      <path d="M7 22h11" strokeOpacity={0.5} />
      <path d="M7 29.3h11" strokeOpacity={0.5} />
      <path d="M33.5 7.1 36 8.2v2.8l-2.5-1" strokeOpacity={0.75} />
      <path d="M33.5 14.4 36 15.5v2.8l-2.5-1" strokeOpacity={0.75} />
      <path d="M33.5 21.7 36 22.8v2.8l-2.5-1" strokeOpacity={0.75} />
      <path d="M33.5 29 36 30.1v2.8l-2.5-1" strokeOpacity={0.75} />
    </IconBase>
  );
}

/** Rolă văzută din capăt, din care se desprinde o foaie întinsă. */
export function LinoleumIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <circle cx="13" cy="11.5" r="7" />
      <circle cx="13" cy="11.5" r="4" strokeOpacity={0.55} />
      <circle cx="13" cy="11.5" r="1.4" />
      <path d="M18.2 16.2c2.4 2.2 4 4.4 4 7.6" />
      <path d="M4.5 23.8h31v10.2h-31z" />
      <path d="M8.5 29h23" strokeOpacity={0.4} />
    </IconBase>
  );
}

/** Placă OSB în picioare, cu așchii presate și muchia de grosime. */
export function OsbIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <g transform="rotate(-10 19 20)">
        <rect x="8" y="3.5" width="20" height="31" rx="1" />
        <path d="M28 5.6 31.4 7.6V33L28 31" strokeOpacity={0.65} />
        <g strokeOpacity={0.85}>
          <ellipse cx="13.5" cy="9.5" rx="2.3" ry="0.95" transform="rotate(-28 13.5 9.5)" />
          <ellipse cx="19.4" cy="8.6" rx="2.15" ry="0.85" transform="rotate(16 19.4 8.6)" />
          <ellipse cx="24.6" cy="10.4" rx="1.8" ry="0.75" transform="rotate(-42 24.6 10.4)" />
          <ellipse cx="13.2" cy="15.4" rx="2.2" ry="0.9" transform="rotate(32 13.2 15.4)" />
          <ellipse cx="19.2" cy="15" rx="2.4" ry="0.95" transform="rotate(-14 19.2 15)" />
          <ellipse cx="24.8" cy="16" rx="1.7" ry="0.72" transform="rotate(40 24.8 16)" />
          <ellipse cx="13.6" cy="21.2" rx="2.05" ry="0.85" transform="rotate(-34 13.6 21.2)" />
          <ellipse cx="19.5" cy="20.8" rx="2.3" ry="0.9" transform="rotate(12 19.5 20.8)" />
          <ellipse cx="24.7" cy="21.8" rx="1.85" ry="0.75" transform="rotate(-22 24.7 21.8)" />
          <ellipse cx="13.4" cy="26.8" rx="2.1" ry="0.85" transform="rotate(24 13.4 26.8)" />
          <ellipse cx="19.3" cy="26.4" rx="2.25" ry="0.9" transform="rotate(-30 19.3 26.4)" />
          <ellipse cx="24.6" cy="27.2" rx="1.75" ry="0.7" transform="rotate(38 24.6 27.2)" />
        </g>
      </g>
    </IconBase>
  );
}

/** Priză de perete: ramă, șuruburi, două găuri și clemele laterale. */
export function SocketIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect x="8" y="4" width="24" height="32" rx="3.5" />
      <circle cx="20" cy="7.6" r="0.75" fill="currentColor" stroke="none" />
      <circle cx="20" cy="32.4" r="0.75" fill="currentColor" stroke="none" />
      <circle cx="20" cy="20" r="8" />
      <circle cx="16.4" cy="20" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="23.6" cy="20" r="1.5" fill="currentColor" stroke="none" />
      <path d="M12.3 17.1v5.8M27.7 17.1v5.8" />
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
