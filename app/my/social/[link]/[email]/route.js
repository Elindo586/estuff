import nodemailer from "nodemailer";
import { redirect } from "next/navigation";

export async function GET(request, { params }) {
  // Assuming `params` is used to extract `linkClick`
  const linkClick = params.link;
  const userEmail = params.email;

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
    subject: `We got feedback from ${linkClick}`,
    text: ``,
    html: `<div>
            <div>Hello There,</div>
            <div>This is a click. ${linkClick}</div>
            <div>He clicked on ${userEmail}</div>
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
  let redirectUrl = "https://www.youtube.com";

  switch (linkClick) {
    case "facebook":
      redirectUrl = "https://www.facebook.com";
      break;
    case "instagram":
      redirectUrl = "https://www.instagram.com";
      break;
    case "linkedin":
      redirectUrl = "https://www.linkedin.com";
      break;
    case "snapchat":
      redirectUrl = "https://www.snapchat.com";
      break;
    case "tiktok":
      redirectUrl = "https://www.tiktok.com";
      break;
  }

  redirect(redirectUrl);
}
