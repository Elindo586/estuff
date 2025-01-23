import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { product, email: userEmail, campid: campId } = params;

  const d = new Date();
  const year = d.getFullYear();
  const month = d.getMonth() + 1; // months are 0-based, so add 1
  const days = d.getDate();
  const hour = d.getHours();
  const minutes = d.getMinutes();
  const seconds = d.getSeconds();

  const date = `${year}-${month.toString().padStart(2, "0")}-${days
    .toString()
    .padStart(2, "0")} ${hour.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

  // Debug: Log parameters to check if data is correct
  console.log("Inserting data into database:", { product, userEmail, campId, date });

  try {
    // Insert into the database
    const result = await sql`
      INSERT INTO product (product, email, campId, date)
      VALUES (${product}, ${userEmail}, ${campId}, ${date});
    `;
    console.log("Data inserted successfully:", result);

  } catch (error) {
    console.error("Error inserting data:", error);
    return NextResponse.error();  // Optional: Return error response if insertion fails
  }

  // Define the redirect URL based on the product
  const redirectUrl = new URL("https://tu.biz", request.url);

  switch (product) {
    case "fluidyne":
      redirectUrl.href = "https://www.fluidynefp.com/Literature.aspx";
      break;
    case "won-linear":
      redirectUrl.href = "http://wonst.co.kr/english/product/product_main.php";
      break;
    case "linearguides":
    case "linearguides-english":
      redirectUrl.href = "https://www.tu.biz/products/mechanical/linear-bearings";
      break;
    case "iis-applications":
      redirectUrl.href = "https://www.iis-servo.com/industries/";
      break;
    case "controller":
      redirectUrl.href = "https://www.iis-servo.com/products/emerald-automation-controller/";
      break;
    case "vq-pump":
      redirectUrl.href = "https://www.tu.biz/products/vane-pumps";
      break;
    default:
      // Handle unknown products with a default redirect
      redirectUrl.href = "https://www.tu.biz";
      break;
  }

  return NextResponse.redirect(redirectUrl);
}
