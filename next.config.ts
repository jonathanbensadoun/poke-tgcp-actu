import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: "export", // Exporte un site statique
  images: {
    unoptimized: true, // Désactive l'optimisation d'image (compatible Netlify)
  },
};

export default nextConfig;
