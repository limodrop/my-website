import fetch from "node-fetch"

const SLACK_WEBHOOK_URL = process.env.SLACK_OVERRIDE_ALERT_WEBHOOK || ""

export async function sendOverrideSlackAlert(
  title: string,
  message: string,
  context?: Record<string, any>
) {
  if (!SLACK_WEBHOOK_URL) return

  const blocks = [
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: `*${title}*\n${message}`
      }
    }
  ]

  if (context) {
    blocks.push({
      type: "context",
      elements: [
        {
          type: "mrkdwn",
          text: "```" + JSON.stringify(context, null, 2) + "```"
        }
      ]
    })
  }

  await fetch(SLACK_WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ blocks })
  })
}
