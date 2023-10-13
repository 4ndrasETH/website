import NextLink, { LinkProps as InternalLinkProps } from "next/link";
import React, { PropsWithChildren } from "react";

// Copied from `next/link` source code
type Props = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  keyof InternalLinkProps
> &
  InternalLinkProps & {
    children?: React.ReactNode;
  } & React.RefAttributes<HTMLAnchorElement>;

export default function Link({ className, ...props }: Props) {
  return (
    <NextLink
      {...props}
      className={`underline hover:text-blue-600 ${className}`}
    />
  );
}
