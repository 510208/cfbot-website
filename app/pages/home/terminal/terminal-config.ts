export const terminalLines = [
  { type: "command" as const, content: "python main.py", delay: 0 },
  { type: "empty" as const, delay: 0.3 },
  {
    type: "output" as const,
    content: "[2024-06-29 21:16:46,384][INFO] - [main] 載入annou_stat.py中...",
    color: "text-gray-400",
    delay: 0.5,
  },
  {
    type: "output" as const,
    content:
      "[2024-06-29 21:16:46,412][INFO] - [annou_stat] AnnouStat cog 已經載入",
    color: "text-gray-400",
    delay: 0.7,
  },
  {
    type: "output" as const,
    content: "[2024-06-29 21:16:46,415][INFO] - [main] 載入annou_stat.py成功",
    color: "text-gray-400",
    delay: 0.9,
  },
  {
    type: "output" as const,
    content:
      "[2024-06-29 21:16:46,416][INFO] - [main] 跳過nlfile.py, 原因：採用nl方式跳過載入",
    color: "text-gray-500",
    delay: 1.1,
  },
  {
    type: "output" as const,
    content: "[2024-06-29 21:16:46,416][INFO] - [main] 跳過__pycache__",
    color: "text-gray-500",
    delay: 1.3,
  },
  { type: "empty" as const, delay: 1.5 },
  {
    type: "status" as const,
    content: "logging in using static token",
    delay: 1.7,
  },
  {
    type: "success" as const,
    content: "✓ Shard ID None has connected to Gateway",
    delay: 2.0,
  },
  { type: "empty" as const, delay: 2.3 },
  {
    type: "ready" as const,
    content: "🚀 Logged in as CFBot#1234 (ID: 123456789)",
    delay: 2.5,
  },
  {
    type: "output" as const,
    content: "Press Ctrl+C to stop",
    color: "text-gray-500",
    delay: 2.8,
  },
  { type: "empty" as const, delay: 3.1 },
  { type: "cursor" as const, delay: 3.4 },
];
