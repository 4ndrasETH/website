import React, { PropsWithChildren } from "react";
import { Typography } from "./Typography";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function CVSection({
  title,
  children,
}: PropsWithChildren<{ title: string }>) {
  return (
    <section>
      <div className="border-t-black border-t-2">
        <Typography variant="h2" className={montserrat.className}>
          {title}
        </Typography>
      </div>
      {children}
    </section>
  );
}
