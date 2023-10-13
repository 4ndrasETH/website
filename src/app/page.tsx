import Image from "next/image";
import { Typography } from "./components/Typography";
import CVEntry from "./components/CVEntry";
import CVSection from "./components/CVSection";
import Link from "./components/Link";
import cv from "./cv.json";
import { Montserrat, Lora } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });
const playfair = Lora({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`${playfair.className} container mx-auto my-20 print:my-5 flex flex-col gap-4`}
    >
      <div className={`${montserrat.className} flex`}>
        <div className="flex flex-1 flex-col items-center text-center">
          <Typography variant="h1" className="uppercase whitespace-nowrap">
            {cv.name}
          </Typography>
          <Typography variant="body" className="mt-2 print:mt-0.5">
            {cv.title}
          </Typography>
          <Typography
            variant="body"
            className="flex-1 flex items-end uppercase italic"
          >
            {cv.location}
          </Typography>
        </div>
        <div className="flex flex-col gap-2 print:gap-1">
          <div className="flex gap-2">
            <Typography variant="body">Email: </Typography>
            <Typography variant="body">
              <Link href={`mailto:${cv.email}`}>{cv.email}</Link>
            </Typography>
          </div>
          <div className="flex gap-2">
            <Typography variant="body">LinkedIn: </Typography>
            <Typography variant="body">
              <Link
                href={`https://www.linkedin.com/in/${cv.linkedin}/`}
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/{cv.linkedin}
              </Link>
            </Typography>
          </div>
          <div className="flex gap-2">
            <Typography variant="body">Github: </Typography>
            <Typography variant="body">
              <Link
                href={`https://github.com/${cv.github}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/{cv.github}
              </Link>
            </Typography>
          </div>
        </div>
      </div>
      <CVSection title="Experience">
        {cv.experience.map(
          (
            {
              bulletPoints,
              company,
              companyUrl,
              end,
              location,
              start,
              keywords,
              title,
            },
            ind
          ) => (
            <CVEntry
              key={ind}
              org={company}
              orgUrl={companyUrl}
              location={location}
              title={title}
              start={new Date(start).toLocaleDateString("en", {
                year: "numeric",
                month: "short",
              })}
              end={new Date(end).toLocaleDateString("en", {
                year: "numeric",
                month: "short",
              })}
              bulletPoints={bulletPoints}
              keywords={keywords}
            />
          )
        )}
      </CVSection>
      <CVSection title="Education">
        {cv.education.map(
          (
            {
              bulletPoints,
              university,
              universityUrl,
              end,
              location,
              start,
              title,
            },
            ind
          ) => (
            <CVEntry
              key={ind}
              org={university}
              orgUrl={universityUrl}
              location={location}
              title={title}
              start={new Date(start).toLocaleDateString("en", {
                year: "numeric",
              })}
              end={new Date(end).toLocaleDateString("en", {
                year: "numeric",
              })}
              bulletPoints={bulletPoints}
            />
          )
        )}
      </CVSection>
    </main>
  );
}
