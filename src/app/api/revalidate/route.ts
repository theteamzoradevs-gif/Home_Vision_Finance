import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get("secret");

  if (!process.env.REVALIDATE_SECRET || secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  const path = request.nextUrl.searchParams.get("path") || "/";

  revalidatePath(path);
  revalidatePath("/blogs");

  return NextResponse.json({ revalidated: true, now: Date.now(), path });
}
