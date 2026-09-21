import Link from "next/link";
import { cn } from "@/lib/utils/cn";

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-(--radius-md) font-medium " +
  "transition-[transform,background-color,border-color,color] duration-150 ease-out " +
  "hover:-translate-y-0.5 active:translate-y-0 disabled:pointer-events-none disabled:opacity-50";

const variantStyles = {
  primary: "bg-accent text-accent-foreground hover:bg-accent/90",
  secondary:
    "border border-border bg-transparent text-foreground hover:border-accent hover:text-accent",
  ghost: "text-foreground hover:text-accent",
} as const;

const sizeStyles = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-base",
  lg: "h-12 px-7 text-base",
} as const;

type ButtonOwnProps = {
  variant?: keyof typeof variantStyles;
  size?: keyof typeof sizeStyles;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsLink = ButtonOwnProps &
  Omit<React.ComponentPropsWithoutRef<typeof Link>, "href"> & {
    href: string;
  };

type ButtonAsButton = ButtonOwnProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonProps = ButtonAsLink | ButtonAsButton;

/**
 * Server Component murni — tidak menyimpan state apa pun.
 * Jika diberi `href`, dirender sebagai next/link (prefetch otomatis).
 * Jika tidak, dirender sebagai elemen <button> native.
 * Efek hover hanya CSS transform + transition, tanpa JS tambahan.
 */
export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(baseStyles, variantStyles[variant], sizeStyles[size], className);

  if ("href" in props && props.href) {
    const { href, ...linkProps } = props as ButtonAsLink;
    return (
      <Link href={href} className={classes} {...linkProps}>
        {children}
      </Link>
    );
  }

  const buttonProps = props as ButtonAsButton;
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
