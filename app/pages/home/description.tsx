import { HighlightedText } from "components/home-animate";
import { motion } from "motion/react";

export default function Description() {
  return (
    <div id="descriptions" className="container mx-auto px-4 py-32">
      <div>
        <motion.p
          className="description-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <motion.span
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          >
            CFBot 是一款由
          </motion.span>
          <HighlightedText>
            <motion.span
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            >
              SamHacker
            </motion.span>
          </HighlightedText>
          <motion.span
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          >
            開發，功能強大的 Discord 機器人框架，
            <br />
            目標是能為 Discord 伺服器管理員和開發者提供
          </motion.span>
          <HighlightedText>
            <motion.span
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            >
              靈活
            </motion.span>
          </HighlightedText>
          <motion.span
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          >
            且
          </motion.span>
          <HighlightedText>
            <motion.span
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            >
              可擴展的
            </motion.span>
          </HighlightedText>
          <motion.span
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          >
            解決方案。
            <br />
            無論你是想要自動化日常任務、增強社群互動，還是打造獨特的伺服器體驗，
            <br />
            CFBot 都將是
          </motion.span>
          <HighlightedText>
            <motion.span
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            >
              你的第一選擇
            </motion.span>
          </HighlightedText>
          <motion.span
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          >
            ！
          </motion.span>
        </motion.p>
      </div>
    </div>
  );
}
