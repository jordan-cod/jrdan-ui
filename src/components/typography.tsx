import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "../lib/utils";

const typographyVariants = cva("", {
  variants: {
    variant: {
      h1: "text-6xl md:text-7xl font-bold tracking-tight",
      h2: "text-4xl font-bold",
      h3: "text-2xl font-bold",
      h4: "text-xl font-semibold",
      h5: "text-lg font-semibold",
      lead: "text-lg leading-relaxed text-muted-foreground",
      p: "text-muted-foreground",
      small: "text-sm text-muted-foreground",
      blockquote:
        "text-base md:text-lg italic text-muted-foreground leading-relaxed border-l-2 border-primary pl-4",
      stat: "text-5xl font-semibold tracking-tight",
    },
  },
  defaultVariants: {
    variant: "p",
  },
});

type VariantKey = NonNullable<VariantProps<typeof typographyVariants>["variant"]>;

const defaultElementMap: Record<VariantKey, keyof React.JSX.IntrinsicElements> =
  {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    lead: "p",
    p: "p",
    small: "small",
    blockquote: "blockquote",
    stat: "span",
  };

type TypographyProps<T extends React.ElementType = "p"> =
  VariantProps<typeof typographyVariants> & {
    as?: T;
    className?: string;
    children?: React.ReactNode;
  } & Omit<React.ComponentPropsWithoutRef<T>, "as" | "className" | "children">;

function Typography<T extends React.ElementType = "p">({
  variant = "p",
  as,
  className,
  ...props
}: TypographyProps<T>) {
  const Comp = as || defaultElementMap[variant as VariantKey] || "p";

  return (
    <Comp
      data-slot="typography"
      className={cn(typographyVariants({ variant, className }))}
      {...props}
    />
  );
}

export { Typography, typographyVariants };
