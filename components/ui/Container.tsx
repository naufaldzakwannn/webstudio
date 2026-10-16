import { cn } from "@/lib/utils/cn";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "narrow";
} & React.HTMLAttributes<HTMLDivElement>;

export function Container({ children, className, size = "default", ...props }: ContainerProps) {
  return (
    <div className={cn("mx-auto w-full px-(--page-gutter)", size === "default" ? "max-w-7xl" : "max-w-3xl", className)} {...props}>
      {children}
    </div>
  );
}
