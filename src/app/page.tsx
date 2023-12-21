import { Lora, Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });
const playfair = Lora({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`${playfair.className} container xl:max-w-7xl mx-auto my-12 md:my-20 print:my-5 p-1 md:p-4 flex flex-col gap-4`}
    >
      <div
        className={`${montserrat.className} flex flex-col md:flex-row print:flex-row gap-10`}
      >
        <div className="flex flex-1 flex-col items-center text-center">
          Coming soon!
        </div>
      </div>
    </main>
  );
}
