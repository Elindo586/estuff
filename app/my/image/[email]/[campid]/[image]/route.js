import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const userEmail = params.email;
  const campId = params.campid;
  const image = params.image;

  const d = new Date();
  const month = d.getMonth()+ 1;
  const days = d.getDate();
  const year = d.getFullYear();
  const hour = d.getHours();
  const minutes = d.getMinutes();
  const seconds = d.getSeconds();

  const date = ` ${year}/${month}/${days} at ${hour}:${minutes}:${seconds}s`;

  await sql`INSERT INTO image (image, email, campid, date) VALUES ( ${image}, ${userEmail}, ${campId}, ${date});`;

  
  const redirectUrl = new URL(
    "https://www.tu.biz",
    request.url
  );

  switch (image) {
    case "fluidyne":
      redirectUrl.href = "https://www.fluidynefp.com/Literature.aspx ";
      break;
    case "won-linear":
      redirectUrl.href = "http://wonst.co.kr/english/product/product_main.php";
      break;
    case "iis-applications":
      redirectUrl.href = "https://www.iis-servo.com/industries/";
      break;
      case "linearguides":
      redirectUrl.href = "http://wonst.co.kr/english/product/product_main.php";
      break;
      case "vq-pump":
      redirectUrl.href = "https://www.tu.biz/products/vane-pumps";
      break;
      case "controller":
      redirectUrl.href = "https://www.iis-servo.com/products/emerald-automation-controller/";
      break;

  }
  return NextResponse.redirect(redirectUrl);
}
