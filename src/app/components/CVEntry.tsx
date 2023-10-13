import React, { PropsWithChildren } from "react";
import { Typography } from "./Typography";
import Link from "./Link";
import { Montserrat, Lora } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

interface Props {
  title: string;
  org: string;
  orgUrl: string;
  location: string;
  start: string;
  end: string;
  bulletPoints: string[];
  keywords?: string[];
}

export default function CVEntry({
  title,
  org,
  orgUrl,
  location,
  start,
  end,
  bulletPoints,
  keywords,
}: Props) {
  return (
    <div className="flex flex-col px-2 py-1">
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <Typography variant="h3">{title}</Typography>
          <div className="flex">
            <Typography variant="small">
              <Link href={orgUrl} target="_blank" rel="noopener noreferrer">
                {org}
              </Link>
            </Typography>
            <Typography variant="small" className="text-gray-500 ml-1">
              &#x2022; {location}
            </Typography>
          </div>
        </div>
        <Typography
          variant="body"
          className="text-right"
        >{`${start} - ${end}`}</Typography>
      </div>
      <Typography
        variant="ul"
        className="list-disc list-outside mx-8 mt-2 leading-5"
      >
        {bulletPoints.map((bulletPoint, ind) => (
          <li key={ind}>{bulletPoint}</li>
        ))}
      </Typography>
      {keywords ? (
        <div className="bg-gray-100 mt-2 px-2 py-1 flex items-center justify-center rounded">
          <Typography
            variant="small"
            className={`${montserrat.className} text-justify w-full tracking-wide text-gray-600`}
          >
            {keywords.join(", ")}
          </Typography>
        </div>
      ) : null}
    </div>
  );
}
