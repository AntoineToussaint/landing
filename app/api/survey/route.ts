import { notion } from "@/lib/notion";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const data = await req.json();
  try {
    const entry = await notion.pages.create({
      parent: {
        database_id: process.env.NOTION_DATABASE as string,
      },
      properties: {
        Name: {
          title: [
            {
              text: {
                content: data.name,
              },
            },
          ],
        },
        Email: {
          email: data.email,
        },
        Need: {
          rich_text: [
            {
              text: {
                content: data.need,
              },
            },
          ],
        },
      },
    });

    return NextResponse.json({ success: true, entry });
  } catch (error) {
    return NextResponse.json({ success: false, error });
  }
}
