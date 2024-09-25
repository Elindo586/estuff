import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const product = params.product;
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

  await sql`INSERT INTO social (product, email, campId, date) VALUES ( ${product}, ${userEmail}, ${campId}, ${date});`;
  const redirectUrl = new URL(
    "https://www.iis-servo.com/products/",
    request.url
  );

  //   switch (social) {
  //     case "facebook":
  //       redirectUrl.href = "https://www.facebook.com/theedgarlindo";
  //       break;
  //     case "instagram":
  //       redirectUrl.href = "https://www.instagram.com/mredgarlindo";
  //       break;
  //     case "linkedin":
  //       redirectUrl.href = "https://www.linkedin.com/in/edgarlindo/";
  //       break;
  //     case "snapchat":
  //       redirectUrl.href = "https://www.snapchat.com/add/elindo586";
  //       break;
  //     case "tiktok":
  //       redirectUrl.href = "https://www.tiktok.com/@theedgarlindo";
  //       break;
  //   }
  return NextResponse.redirect(redirectUrl);
}
