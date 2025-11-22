import { motion } from "motion/react";

function FeatureCard({
  title,
  description,
  vectorImg,
}: {
  title: string;
  description: string;
  vectorImg: string;
}) {
  return (
    <motion.div
      className="relative border bg-fd-secondary/20 p-0 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 h-[300px] max-h-[300px] flex flex-col justify-end hover-eff overflow-hidden"
      initial="initial"
      whileHover="hover"
    >
      <div className="absolute inset-0 overflow-hidden">
        <motion.img
          className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-3/4"
          src={vectorImg}
          alt={title}
          variants={{
            initial: { y: 0, opacity: 0.1 },
            hover: { y: -180, opacity: 0.8 },
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      </div>
      <div className="relative px-6 py-10 bg-linear-to-b from-transparent to-fd-secondary/50">
        <h3 className="text-2xl font-semibold mb-4">{title}</h3>
        <p className="text-fd-muted-foreground">{description}</p>
      </div>
    </motion.div>
  );
}

export default function Features() {
  const features = [
    {
      title: "客服單系統",
      description:
        "不要再被無止盡的支援請求淹沒了！CFBot 的客服單系統讓你輕鬆管理和追蹤用戶的問題、回應他們。使用極為優秀的體驗集中處理所有請求。",
      vectorImg: "/vectors/homepage/feature-icons/cfbot_ticket-system.svg",
    },
    {
      title: "群組紀錄",
      description:
        "CFBot 自動記錄所有重要的群組活動，讓你隨時掌握最新動態。無論是惡意連結、成員的辱罵或任何違規行為，都絕不逃離你的法眼！",
      vectorImg: "/vectors/homepage/feature-icons/cfbot_logging.svg",
    },
    {
      title: "智慧歡迎訊息",
      description:
        "給新成員一個熱情的迎接！CFBot 的歡迎訊息功能讓你自訂專屬的歡迎訊息，並根據不同條件觸發，讓每個新成員都感受到特別的關注。",
      vectorImg: "/vectors/homepage/feature-icons/cfbot_hello-message.svg",
    },
    {
      title: "DiscordSRV 插件支援",
      description:
        "CFBot 支持 DiscordSRV 插件，讓你能夠將遊戲內的活動和訊息無縫整合到你的 Discord 伺服器中，提升社群互動體驗。",
      vectorImg: "/vectors/homepage/feature-icons/cfbot_discordsrv.svg",
    },
    {
      title: "自動回應",
      description:
        "你是不是被重複的問題搞得頭昏眼花？CFBot 的自動回應功能能夠根據關鍵字或特定條件，自動回應常見問題，把你的精力用在更重要的事情上！",
      vectorImg: "/vectors/homepage/feature-icons/cfbot_auto-reply.svg",
    },
    {
      title: "公告系統",
      description:
        "綁定好你的公告頻道，之後只要要求發布公告，CFBot 就會用你的格式自動幫你發送到指定頻道，讓你的成員隨時掌握最新消息。更棒的是，公告的格式是固定的，讓你的公告比別人更專業！",
      vectorImg: "/vectors/homepage/feature-icons/cfbot_announcement.svg",
    },
  ];
  return (
    <div id="features" className="container mx-auto px-4 py-16">
      {/* 功能網格 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature) => (
          <FeatureCard
            key={feature.title}
            title={feature.title}
            description={feature.description}
            vectorImg={feature.vectorImg}
          />
        ))}
      </div>
    </div>
  );
}
