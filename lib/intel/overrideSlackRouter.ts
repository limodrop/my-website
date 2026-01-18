import fetch from "node-fetch"

const ROUTES: Record<string, string> = {
  "portland/airport": process.env.SLACK_PORTLAND_AIRPORT_WEBHOOK || "",
  "portland/wine": process.env.SLACK_PORTLAND_WINE_WEBHOOK || "",
  "beaverton/airport": process.env.SLACK_BEAVERTON_AIRPORT_WEBHOOK || "",
  "default": process.env.SLACK_OVERRIDE_ALERT_WEBHOOK || ""
}

export async function sendRoutedSlackAlert(
  city: string,
  service: string,
  title: string,
  message: string,
  context?: Record<string, any>
) {
  const key = `${city.toLowerCase()}/${service.toLowerCase()}`
  const url = ROUTES[key] || ROUTES["default"]
  if (!url) return

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

  await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ blocks })
  })
}
