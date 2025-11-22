import { AnimatedTitle } from "components/home-animate";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { Code, Play } from "lucide-react";
import NoticeBadge from "./notice-badge";

export default function HeroSection() {
  return (
    <div
      id="hero-section"
      className="relative p-4 pt-30 pb-20 flex flex-col items-center justify-start text-center gap-5 min-h-screen"
    >
      {/* CFBot 2.0 開發中公告 */}
      <NoticeBadge>
        <Code />
        <p>CFBot 2.0 火熱進入開發中！</p>
      </NoticeBadge>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[50vw] min-w-[300px] -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-linear-to-b from-transparent to-black opacity-100"></div>
        <img
          src="/vectors/homepage/cfbot-mcsm_non-ani.svg"
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
      </div>
      <AnimatedTitle>
        <h1 className="text-7xl font-bold">
          你的群組，
          <br />
          應該
          <span className="mx-2 bg-clip-text text-transparent bg-linear-to-r from-[#FF9292] to-[#92FFA2]">
            由你一手掌控
          </span>
          ！
        </h1>
      </AnimatedTitle>
      <p className="text-fd-muted-foreground text-2xl">
        CFBot，一款專為 Discord 伺服器打造的機器人框架。
        <br />
        如果你是個技術大佬（或者你覺得自己是），那這肯定是你的必備工具箱！
      </p>
      <div className="flex gap-4 mt-4">
        <Link to="/docs/">
          <Button size="vlarge" variant="gradient">
            <Play />
            我們開始吧
          </Button>
        </Link>
        <Link to="/dashboard">
          <Button size="vlarge">
            <Code /> 研究原始碼
          </Button>
        </Link>
      </div>
    </div>
  );
}
