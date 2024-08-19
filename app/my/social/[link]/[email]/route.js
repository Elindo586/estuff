export async function GET(request, { params }) {
  const { link, email } = params;

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
    subject: `We got feedback from ${link}`,
    text: ``,
    html: `<div>
            <div>Hello There,</div>
            <div>This is a click. ${link}</div>
            <div>He clicked on ${email}</div>
          </div>`,
  };

  try {
    await transporter.sendMail(mailData);
    console.log("email sent");
  } catch (err) {
    console.error("Failed to send email:", err);
    return NextResponse.error();
  }

  const redirectUrls = {
    facebook: "https://www.facebook.com",
    instagram: "https://www.instagram.com",
    linkedin: "https://www.linkedin.com",
    snapchat: "https://www.snapchat.com",
    tiktok: "https://www.tiktok.com",
  };

  const redirectUrl = redirectUrls[link] || "https://www.youtube.com";

  return NextResponse.redirect(redirectUrl);
}
