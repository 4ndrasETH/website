/** @type {import('next').NextConfig} */

const redirects = [
  {
    source: "/icebreaker",
    destination:
      "https://app.icebreaker.xyz/eth/0xff001e305dCc787Da1D1ff554C25f8876A37cb22?key=UGqhZyU993wNk_ZbU7Zve",
    permanent: true,
  },
  {
    source: "/ens",
    destination: "https://app.ens.domains/andrascodes.eth",
    permanent: true,
  },
  {
    source: "/lens",
    destination: "https://www.lensfrens.xyz/4ndras.lens",
    permanent: true,
  },
];

const nextConfig = {
  async redirects() {
    return redirects;
  },
};

module.exports = nextConfig;
