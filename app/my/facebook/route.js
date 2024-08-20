import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function Facebook() {
  // Assuming `params` is used to extract `linkClick`

  const transporter = nodemailer.createTransport({
    service: "Outlook365",
    auth: {
      user: process.env.EMAIL2,
      pass: process.env.EPASSWORD2,
    },
  });

  const mailData = {
    from: { name: "Edgar Lindo1", address: process.env.EMAIL2 },
    to: "edgar@tu.biz",
    subject: `We got feedback from a link click`,
    text: ``,
    html: `<div>
            <div>Hello There,</div>
            <div>This is a click for facebook </div>
            
          </div>`,
  };

  try {
    await transporter.sendMail(mailData);
    console.log("email sent");
  } catch (err) {
    console.error("Failed to send email:", err);
    // You might want to handle the error, return an error response, etc.
    return NextResponse.error();
  }

  // Ensure you use `request.url` if `request` is used
  const redirectUrl = new URL("https://www.facebook.com", request.url);

  //   switch (linkClick) {
  //     case "facebook":
  //       redirectUrl.href = "https://www.facebook.com";
  //       break;
  //     case "instagram":
  //       redirectUrl.href = "https://www.instagram.com";
  //       break;
  //     case "linkedin":
  //       redirectUrl.href = "https://www.linkedin.com";
  //       break;
  //     case "snapchat":
  //       redirectUrl.href = "https://www.snapchat.com";
  //       break;
  //     case "tiktok":
  //       redirectUrl.href = "https://www.tiktok.com";
  //       break;
  //   }

  return NextResponse.redirect(redirectUrl);
}
