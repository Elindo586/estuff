import nodemailer from "nodemailer";

export async function GET(_, { params }) {
  const pixelId = params.id;

  const transporter = nodemailer.createTransport({
    service: "Outlook365",
    auth: {
      user: process.env.EMAIL2,
      pass: process.env.EPASSWORD2,
    },
  });

  const mailData = {
    from: { name: "Edgar Lindo", address: process.env.EMAIL2 },
    to: "info@tu.biz",
    subject: `We got feedback from ${pixelId}`,
    text: ``,
    html: `<div>
            <di> Hello There,</div>
            <div> This is a test </div>
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

  return new Response(`The pixel id is ${pixelId}`);
}
