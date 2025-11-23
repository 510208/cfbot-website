import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Github, MessageCircle } from "lucide-react";
import { motion } from "motion/react";

export default function OpenSourceDescription() {
  return (
    <div id="features" className="container mx-auto px-4 py-16">
      {/* 功能網格 */}
      <div className="gap-2">
        <h2 className="description-content text-center! font-bold!">
          開源專案
        </h2>
        <p className="text-fd-muted-foreground col-span-full text-center">
          CFBot
          是一個完全開源的專案，歡迎任何人檢視、貢獻或提出建議。我們相信開源的力量，讓我們一起打造更好的工具！
        </p>
      </div>
      <div className="flex gap-4 mt-10 max-w-[800px] mx-auto">
        <Card className="w-1/2">
          <CardHeader className="flex gap-4 items-center">
            <div className="bg-amber-800/20 p-4 max-w-20 max-h-20 rounded-2xl">
              <Github size={40} />
            </div>
            <div>
              <CardTitle>GitHub 儲存庫</CardTitle>
              <CardDescription className="mt-2">
                CFBot 的完整原始碼可在 GitHub
                上找到。歡迎檢視、分支和提出拉取請求！
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <Button>
              <a
                className="card-action"
                href="https://github.com/510208/cfbot"
                target="_blank"
                rel="noopener noreferrer"
              >
                前往 GitHub 儲存庫
              </a>
            </Button>
          </CardContent>
        </Card>
        <Card className="w-1/2">
          <CardHeader className="flex gap-4 items-center">
            <div className="bg-amber-800/20 p-4 max-w-20 max-h-20 rounded-2xl">
              <MessageCircle size={40} />
            </div>
            <div>
              <CardTitle>加入 Discord 群組</CardTitle>
              <CardDescription className="mt-2">
                加入我們的 Discord
                群組，與其他使用者和開發者交流，分享想法和獲取支援！
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <Button>
              <a
                className="card-action"
                href="https://discord.gg/CWCjhRGJ2e"
                target="_blank"
                rel="noopener noreferrer"
              >
                加入 SamHacker 聊天室
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
