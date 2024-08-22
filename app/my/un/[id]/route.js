import nodemailer from "nodemailer";

export async function GET(_, { params }) {
  const userEmail = params.id;

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
      <html>
        <body style = "color: blue">
          <div>
            <div> <h1> Hello There, </h1> </div>
            <div> Your email: ${userEmail} has been unsubcribed. </div>
          </div>
        </body>
      </html>
    `;

  return new Response(htmlResponse, {
    headers: { "Content-Type": "text/html" },
  });
}
