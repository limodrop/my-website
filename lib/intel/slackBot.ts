import { generateDigest } from "./digest"
import { detectWinners } from "./winner"
import { exportCampaignData } from "./export"

export async function handleSlackCommand(
  text: string,
  user: string
): Promise<string> {
  const cmd = text.trim().toLowerCase()

  if (cmd === "digest") {
    const digest = generateDigest()
    return `📬 *Daily Digest for ${user}*\n\n${digest}`
  }

  if (cmd === "winners") {
    const winners = detectWinners()
    return (
      `🏆 *Top Performers*\n\n` +
      winners
        .map(
          (w) =>
            `• ${w.type.toUpperCase()} — ${w.label} (Score: ${w.score.toFixed(
              1
            )})`
        )
        .join("\n")
    )
  }

  if (cmd === "export") {
    const csv = exportCampaignData("csv")
    return `📊 *Campaign Export (CSV)*\n\`\`\`\n${csv.slice(
      0,
      1000
    )}...\n\`\`\`\n_(truncated)_`
  }

  return `🤖 Available commands:\n• \`/digest\` — Daily campaign summary\n• \`/winners\` — Top performers\n• \`/export\` — CSV export preview`
}
