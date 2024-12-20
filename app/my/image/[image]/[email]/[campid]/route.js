import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  // Assuming `params` is used to extract `linkClick`
  const image = params.image;
  const email = params.email;
  const campId = params.campid;

  const d = new Date();
  const month = d.getMonth();
  const days = d.getDate();
  const year = d.getFullYear();
  const hour = d.getHours();
  const minutes = d.getMinutes();
  const seconds = d.getSeconds();

  const date = ` ${year}/${month}/${days} at ${hour}:${minutes}:${seconds}s`;

  await sql`INSERT INTO image (image, email, campId, date) VALUES ( ${image}, ${email}, ${campId}, ${date});`;

  // Ensure you use `request.url` if `request` is used
  // const redirectUrl0 = new URL(
  //   "https://www.tu.biz/castellano/productos",
  //   request.url
  // );

  // return NextResponse.redirect(redirectUrl0);

  const redirectUrl = new URL(
    "https://www.tu.biz/castellano/productos",
    request.url
  );

  switch (image) {
    
    case "controller":
      redirectUrl.href = "https://www.iis-servo.com/products/emerald-automation-controller/";
      break;
  }
  return NextResponse.redirect(redirectUrl);

}
