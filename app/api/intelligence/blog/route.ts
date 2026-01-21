import { NextResponse } from "next/server"
import { blogTopicEngine, blogWriterEngine } from "@/lib/intel/blog"
import { BlogContext } from "@/lib/admin/blog.types"

export async function POST(req: Request) {
  const body = (await req.json()) as { ctx: BlogContext; topic?: string }

  if (body.topic) {
    const post = blogWriterEngine(body.ctx, body.topic)
    return NextResponse.json({ ok: true, data: post })
  }

  const topics = blogTopicEngine(body.ctx)
  return NextResponse.json({ ok: true, data: topics })
}
