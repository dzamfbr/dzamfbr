export type Project = {
  id: string;
  title: string;
  description: string;
  image?: string; // path under /public or external URL
  demo?: string;
  github?: string;
  client?: string; // for commercial projects
  createdAt: string; // ISO date string
};

// Personal projects: easiest way to add is push a new object here.
export const personalProjects: Project[] = [
  {
    id: "personal-portfolio-01",
    title: "Portfolio of Dzamfbrb",
    description:
      "Website portofolio pribadi yang menampilkan profil, keterampilan, dan berbagai proyek yang telah saya kerjakan dengan desain modern, responsif, dan interaktif.",
    image: "/screenshoot_portofolio_web_dzamfbr.png",
    demo: "https://dzamfbr.my.id",
    createdAt: "2026-07-19",
  },
];

// Commercial projects: GitHub link is intentionally omitted for client work.
export const commercialProjects: Project[] = [
  {
    id: "commercial-project-01",
    title: "Rajeva Ayla Official Website",
    description:
      "Website portofolio Official Creator Landing Page merupakan platform personal branding dan hub interaktif yang dirancang khusus untuk kreator konten di TikTok Live. Website ini berfungsi sebagai pusat informasi utama bagi penonton dan community, mengintegrasikan jadwal streaming, informasi peran, status live secara real-time, hingga akses cepat ke platform dukungan/donasi dan pemesanan Mabar VIP.",
    image: "/screenshoot_rajevayla_web.png",
    demo: "https://rajevayla.vercel.app",
    createdAt: "2026-08-31",
  },
];

export default { personalProjects, commercialProjects };
