import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const social = params.link;
  const userEmail = params.email;
  const campId = params.campid;

  const d = new Date();
  const month = d.getMonth();
  const days = d.getDate();
  const year = d.getFullYear();
  const hour = d.getHours();
  const minutes = d.getMinutes();
  const seconds = d.getSeconds();

  const date = ` ${year}/${month}/${days} at ${hour}:${minutes}:${seconds}s`;

  try {
    await sql`INSERT INTO social (social, email, campId, date) VALUES ( ${social}, ${userEmail}, ${campId}, ${date});`;
    const redirectUrl = new URL(
      "https://www.youtube.com/@EdgarLindo",
      request.url
    );

    switch (linkClick) {
      case "facebook":
        redirectUrl.href = "https://www.facebook.com";
        break;
      case "instagram":
        redirectUrl.href = "https://www.instagram.com/mredgarlindo";
        break;
      case "linkedin":
        redirectUrl.href = "https://www.linkedin.com/in/edgarlindo/";
        break;
      case "snapchat":
        redirectUrl.href = "https://www.snapchat.com/add/elindo586";
        break;
      case "tiktok":
        redirectUrl.href = "https://www.tiktok.com/@theedgarlindo";
        break;
    }
    return NextResponse.redirect(redirectUrl);
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
