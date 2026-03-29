import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive group",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground border-b-[3px] border-black/30 dark:border-white/30 shadow-sm hover:bg-primary/90 hover:-translate-y-[2px] hover:border-b-[4px] hover:border-black/40 dark:hover:border-white/40 active:translate-y-[1px] active:border-b-[2px] active:border-black/20 dark:active:border-white/15 disabled:hover:translate-y-0 disabled:hover:border-b-[3px]",
        destructive:
          "bg-destructive text-white border-b-[3px] border-black/30 dark:border-white/30 shadow-sm hover:bg-destructive/90 hover:-translate-y-[2px] hover:border-b-[4px] hover:border-black/40 dark:hover:border-white/40 active:translate-y-[1px] active:border-b-[2px] active:border-black/20 dark:active:border-white/15 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60 disabled:hover:translate-y-0 disabled:hover:border-b-[3px]",
        outline:
          "border bg-background border-b-[3px] border-black/30 dark:border-white/30 shadow-sm hover:bg-accent hover:text-accent-foreground hover:-translate-y-[2px] hover:border-b-[4px] hover:border-black/40 dark:hover:border-white/40 active:translate-y-[1px] active:border-b-[2px] active:border-black/20 dark:active:border-white/15 dark:bg-input/50 disabled:hover:translate-y-0 disabled:hover:border-b-[3px]",
        secondary:
          "bg-secondary text-secondary-foreground border-b-[3px] border-black/30 dark:border-white/30 shadow-sm hover:bg-secondary/80 hover:-translate-y-[2px] hover:border-b-[4px] hover:border-black/40 dark:hover:border-white/40 active:translate-y-[1px] active:border-b-[2px] active:border-black/20 dark:active:border-white/15 disabled:hover:translate-y-0 disabled:hover:border-b-[3px]",
        ghost:
          "bg-accent/50 text-accent-foreground dark:bg-accent/30 hover:bg-accent dark:hover:bg-accent/50 hover:-translate-y-[2px] active:translate-y-[1px]",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        xs: "h-6 gap-1 rounded-md px-2 text-xs has-[>svg]:px-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-xs": "size-6 rounded-md [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
