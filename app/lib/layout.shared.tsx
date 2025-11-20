import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { BookOpenText, Bot, Github, Info } from "lucide-react";

// Logo元件
function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <img
        src="/icons/navbar_icon/light.png"
        alt="Logo"
        className="w-auto h-8 block dark:hidden"
      />
      <img
        src="/icons/navbar_icon/dark.png"
        alt="Logo"
        className="w-auto h-8 hidden dark:block"
      />
      <span className="font-extrabold text-lg">CFBot</span>
    </div>
  );
}

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: <Logo />,
    },
    links: [
      {
        icon: <BookOpenText />,
        text: "說明文件",
        url: "/docs",
        secondary: false, // controls display style
      },
      {
        icon: <Github />,
        text: "原始碼",
        url: "https://github.com/510208/cfbot",
        secondary: false, // controls display style
        external: true,
      },
      {
        icon: <Bot />,
        text: "DeepWiki",
        url: "https://deepwiki.com/510208/cfbot",
        external: true,
      },
      {
        icon: <Info />,
        text: "關於專案",
        url: "#",
      },
    ],
  };
}
