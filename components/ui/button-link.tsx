import { cn } from "@/lib/utils";
import { buttonVariants } from "./button";
import type { VariantProps } from "class-variance-authority";
import type { AnchorHTMLAttributes } from "react";

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> &
  VariantProps<typeof buttonVariants> & {
    className?: string;
  };

export function ButtonLink({ className, variant, size, ...props }: ButtonLinkProps) {
  return (
    <a
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}
