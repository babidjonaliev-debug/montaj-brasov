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

/** Ruletă: un tambur rotund cu banda de măsură trasă în afară. */
export function TapeMeasureIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <circle cx="16" cy="18" r="10.5" />
      <circle cx="16" cy="18" r="3" />
      <path d="M25 22.5 33 30" />
      <path d="M29.5 28 33 24.5v6.5h-6.5Z" strokeOpacity={0.6} />
    </IconBase>
  );
}

/** Umidometru: o carcasă dreptunghiulară cu ac indicator și doi electrozi. */
export function MoistureMeterIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect x="8" y="12" width="18" height="16" rx="2" />
      <circle cx="17" cy="20" r="4.2" />
      <path d="M17 20l2.4-2.4" strokeOpacity={0.8} />
      <path d="M13 28l-1.5 6M21 28l1.5 6" />
    </IconBase>
  );
}

/** Nivelă cu bulă: o riglă lungă cu o fiolă centrală. */
export function LevelIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect x="4" y="17" width="32" height="7" rx="1.5" />
      <circle cx="20" cy="20.5" r="3.4" />
      <path d="M20 18.2v1M9 20.5h1.6M29.4 20.5H31" strokeOpacity={0.7} />
    </IconBase>
  );
}
