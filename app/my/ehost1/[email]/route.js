import nodemailer from "nodemailer";

export async function GET(_, { params }) {
  const email = params.email;
  const d = new Date();
  const year = d.getFullYear();

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
    subject: `We got feedback from ${email}`,
    text: ``,
    html: `<div>
            <di> This guy ${email} made a click to see the web email ehost1.</div>

            
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

  const htmlResponse = `
      <!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Email</title>
    </head>
    <body>
    <div> 
    Hello
    </div>
  </body>
</html>
    `;

  return new Response(htmlResponse, {
    headers: { "Content-Type": "text/html" },
  });
}
