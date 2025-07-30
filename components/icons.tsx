import type { SVGProps } from "react"

type IconProps = SVGProps<SVGSVGElement>

export const Icons = {
  logo: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M14 12h.01" />
      <path d="M10 12h.01" />
      <path d="M12 8h.01" />
      <path d="M12 16h.01" />
      <path d="M15.5 10.5c.7-1.2 1.4-2.3 2.5-3" />
      <path d="M8.5 10.5c-.7-1.2-1.4-2.3-2.5-3" />
      <path d="M12 20.5c-4.5 0-8-3.5-8-8s3.5-8 8-8 8 3.5 8 8-3.5 8-8 8Z" />
      <path d="M18 13a2.9 2.9 0 0 1-2 2.5 2.9 2.9 0 0 1-2.5 0 2.9 2.9 0 0 1-2-2.5" />
    </svg>
  ),
}
