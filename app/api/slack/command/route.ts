import { NextRequest, NextResponse } from "next/server"
import { handleSlackCommand } from "@/lib/intel/slackBot"

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const token = body.token
    
    if (token !== process.env.SLACK_VERIFICATION_TOKEN) {
      return NextResponse.json({ text: "Invalid token" }, { status: 403 })
    }

    const text = body.text || ""
    const user = body.user_name || "unknown"
    const response = await handleSlackCommand(text, user)

    return NextResponse.json({
      response_type: "in_channel",
      text: response
    })
  } catch (error) {
    console.error("Slack command error:", error)
    return NextResponse.json(
      { text: "Error processing command" },
      { status: 500 }
    )
  }
}
