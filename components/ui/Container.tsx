import { cn } from "@/lib/utils/cn";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  /**
   * "default" — lebar baca umum untuk konten section (max-w-7xl).
   * "narrow"  — untuk konten tekstual panjang (mis. artikel, about).
   */
  size?: "default" | "narrow";
} & React.HTMLAttributes<HTMLDivElement>;

/**
 * Server Component murni — tidak ada state atau interaktivitas,
 * jadi tidak perlu "use client".
 */
export function Container({
  children,
  className,
  size = "default",
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        size === "default" ? "max-w-7xl" : "max-w-3xl",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
