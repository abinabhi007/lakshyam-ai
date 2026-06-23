import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "node_modules")],
  },
  env: {
    baseUrl:"http://127.0.0.1:8000/api"
  }
};

export default nextConfig;
