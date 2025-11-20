import type { Route } from "./+types/home";
import { HomeLayout } from "fumadocs-ui/layouts/home";
import { baseOptions } from "@/lib/layout.shared";
import { motion } from "motion/react";
import HomePage from "@/pages/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "CFBot - 你唯一需要的 Discord 機器人" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

function HighlightedText({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-[#fff892] mx-2 font-bold underline decoration-white/40 hover:decoration-white/70 transition-decoration duration-300">
      {children}
    </span>
  );
}

export default function Home() {
  return (
    <HomeLayout {...baseOptions()}>
      <HomePage />
    </HomeLayout>
  );
}
