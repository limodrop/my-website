export async function sendToSlack(
  webhookUrl: string,
  message: string
): Promise<boolean> {
  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: message })
    })
    return res.ok
  } catch (e) {
    console.error("Slack delivery failed:", e)
    return false
  }
}

export async function sendEmail(
  to: string,
  subject: string,
  body: string
): Promise<boolean> {
  try {
    const res = await fetch("https://api.postmarkapp.com/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Postmark-Server-Token": process.env.POSTMARK_API_KEY || ""
      },
      body: JSON.stringify({
        From: "noreply@oregontowncar.com",
        To: to,
        Subject: subject,
        TextBody: body
      })
    })
    return res.ok
  } catch (e) {
    console.error("Email delivery failed:", e)
    return false
  }
}
