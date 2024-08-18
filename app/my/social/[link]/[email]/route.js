import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function GET(_, { params }) {
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
    subject: `We got feedback from ${userEmail}`,
    text: ``,
    html: `<div>
            <di> Hello There,</div>
            <div> This guy wants to be unsubscribe ${userEmail} </div>
            <div> he clicked on ${linkClick} </div>
          </div>`,
  };
  await new Promise((resolve, reject) => {
    transporter.sendMail(mailData, function (err, info) {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        console.log("email sent");
        resolve(info);
      }
    });
  });

  if (linkClick === "facebook") {
    return NextResponse.redirect(
      new URL("https://www.facebook.com", request.url)
    );
  } else if (linkClick === "instagram") {
    return NextResponse.redirect(
      new URL("https://www.instagram.com", request.url)
    );
  } else if (linkClick === "linkedin") {
    return NextResponse.redirect(
      new URL("https://www.linkedin.com", request.url)
    );
  } else if (linkClick === "snapchat") {
    return NextResponse.redirect(
      new URL("https://www.snapchat.com", request.url)
    );
  } else if (linkClick === "tiktok") {
    return NextResponse.redirect(
      new URL("https://www.tiktok.com", request.url)
    );
  } else
    return NextResponse.redirect(
      new URL("https://www.youtube.com", request.url)
    );
}
