import React, { ElementType } from "react";

type Variant = "h1" | "h2" | "h3" | "h4" | "h5" | "body" | "small" | "ul";

interface Props {
  variant: Variant;
  children: React.ReactNode;
  className?: string;
  as?: ElementType;
}

const tags: Record<Variant, ElementType> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  body: "p",
  ul: "ul",
  small: "span",
};

const sizes: Record<Variant, string> = {
  h1: "text-4xl font-medium print:text-2xl",
  h2: "text-base font-bold uppercase print:text-xs",
  h3: "text-lg font-semibold print:text-sm/5",
  h4: "",
  h5: "",
  body: "text-base print:text-xs",
  ul: "text-base print:text-xs/4",
  small: "text-sm print:text-[10px]/4",
};

export const Typography = ({ variant, children, className, as }: Props) => {
  const sizeClasses = sizes[variant];
  const Tag = as || tags[variant];

  return <Tag className={`${sizeClasses} ${className}`}>{children}</Tag>;
};
