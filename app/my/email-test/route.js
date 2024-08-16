import nodemailer from "nodemailer";

export async function POST(req) {
  const transporter = nodemailer.createTransport({
    service: "Outlook365",
    auth: {
      user: process.env.EMAIL2,
      pass: process.env.EPASSWORD2,
    },
  });

  await new Promise((resolve, reject) => {
    // verify connection configuration
    transporter.verify(function (error, success) {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        console.log("Server is ready to take our messages");
        resolve(success);
      }
    });
  });

  const body = await req.json();
  const nameFull = body.contact;
  const nameFirst = body.upper;
  const email = body.email;
  const title = body.id;
  const quote = body.quote;

  const d = new Date();
  const year = d.getFullYear();
  // const img = body.img;

  const textArray = quote;
  const contents = textArray
    .map(
      ({ QuoteN, ItemCode, ItemName, Qty, Price, ExtPrice, LeadTime }) =>
        `Quote Number: ${QuoteN} \nQyt ${Qty}, Part: ${ItemCode}, Description: ${ItemName}, Price: ${Price}, Ext Price: ${ExtPrice}, Lead Time: ${LeadTime}
    `
    )
    .join("\n");

  // const text = `Hola ${nameFirst},\n\nTodo bien con su cotizacion? Necesita algo mas? \n \n${contents} \n \nSaludos, \n \nEdgar \n`;

  // console.log(text);

  const mailData = {
    from: { name: "Edgar Lindo", address: process.env.EMAIL2 },
    to: email,
    subject: `cotizaciones para ${nameFull} | ${title}`,
    text: ``,
    html: `
   <!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Email</title>
    <style>
      @media only screen and (max-width: 1000px) {
        .container {
          width: 100% !important;
          padding: 0 !important;
        }
        .social-icons img {
          width: 24px !important;
          height: 24px !important;
        }
      }
    </style>
  </head>
  <body
    style="
      font-family: Arial, sans-serif;
      background-color: whitesmoke;
      margin: 0;
      padding: 0;
    "
  >
    <table
      width="100%"
      border="0"
      cellspacing="0"
      cellpadding="0"
      style="background-color: whitesmoke; padding: 20px"
    >
      <tr>
        <td align="center">
          <!-- Main Container -->
          <table
            width="1000"
            border=""
            cellspacing="0"
            cellpadding="0"
            class="container"
            style="
              background-color: rgb(48, 38, 110);
              margin-bottom: 0.3em;
              border-radius: 10px;
              padding: 1em;
            "
          >
            <tr>
              <td style="text-align: center">
                <h1 style="margin: 0; color: white">Todo lo Industrial.</h1>
                <p style="margin: 0.1em; color: white">
                  Automatizción de maquinaria.
                </p>
                <p style="color: white">
                  Hidráulica | Neumática |Eléctrica | Mecánica
                </p>
              </td>
            </tr>
          </table>
          <!-- Two Column Layout -->
          <table
            width="1000"
            border="0"
            cellspacing="0"
            cellpadding="0"
            class="container"
            style="
              background-color: lightblue;
              margin-bottom: 0.3em;
              border-radius: 10px;
              padding: 1em;
            "
          >
            <tr>
              <td width="50%" style="text-align: center; padding: 2%">
                <a href="https://www.facebook.com/theedgarlindo">
                  <img
                    src="https://www.tu.biz/_next/image?url=%2Fimages%2Frexrothpump-1.png&w=1920&q=75"
                    alt="Facebook"
                    style="
                      border: 0;
                      display: block;
                      width: 395px;
                      height: 287px;
                    "
                  />
                </a>
              </td>
              <td width="50%" style="vertical-align: top">
                <p style="padding: 2%">
                  We'll be in touch soon with more information about our
                  campaign.
                </p>
              </td>
            </tr>
          </table>
          <!-- Social Media -->
          <table
            width="400"
            border="0"
            cellspacing="0"
            cellpadding="0"
            class="container"
            style="
              background-color: whitesmoke;
              margin-bottom: 1em;
              margin-left: auto;
              margin-right: auto;
              padding-top: 0.5em;
              text-align: center;
            "
          >
            <tr>
              <td colspan="6">
                <p style="color: grey; margin-bottom: 0.5em">
                  Social Media Follow
                </p>
              </td>
            </tr>
            <tr>
              <td style="text-align: center">
                <a href="https://www.linkedin.com/in/edgarlindo/">
                  <img
                    src="https://email.tu.biz/_next/image?url=%2Fimages%2Fsocial-icons%2Flinkedin24.png&w=1920&q=75"
                    alt="LinkedIn"
                    style="border: 0; display: block; width: 24px; height: 24px"
                  />
                </a>
              </td>
              <td style="text-align: center">
                <a href="https://www.youtube.com/@EdgarLindo">
                  <img
                    src="https://email.tu.biz/_next/image?url=%2Fimages%2Fsocial-icons%2Fyoutube24.png&w=1920&q=75"
                    alt="YouTube"
                    style="border: 0; display: block; width: 24px; height: 24px"
                  />
                </a>
              </td>
              <td style="text-align: center">
                <a href="https://www.snapchat.com/add/elindo586">
                  <img
                    src="https://email.tu.biz/_next/image?url=%2Fimages%2Fsocial-icons%2Fsnapchat24.png&w=1920&q=75"
                    alt="Snapchat"
                    style="border: 0; display: block; width: 24px; height: 24px"
                  />
                </a>
              </td>
              <td style="text-align: center">
                <a href="https://www.instagram.com/mredgarlindo">
                  <img
                    src="https://email.tu.biz/_next/image?url=%2Fimages%2Fsocial-icons%2Finstagram24.png&w=1920&q=75"
                    alt="Instagram"
                    style="border: 0; display: block; width: 24px; height: 24px"
                  />
                </a>
              </td>
              <td style="text-align: center">
                <a href="https://www.tiktok.com/@theedgarlindo">
                  <img
                    src="https://email.tu.biz/_next/image?url=%2Fimages%2Fsocial-icons%2Ftiktok24.png&w=1920&q=75"
                    alt="TikTok"
                    style="border: 0; display: block; width: 24px; height: 24px"
                  />
                </a>
              </td>
              <td style="text-align: center">
                <a href="https://www.facebook.com/theedgarlindo">
                  <img
                    src="https://email.tu.biz/_next/image?url=%2Fimages%2Fsocial-icons%2Ffacebook24.png&w=1920&q=75"
                    alt="Facebook"
                    style="border: 0; display: block; width: 24px; height: 24px"
                  />
                </a>
              </td>
            </tr>
          </table>

          <!-- Footer -->
          <table
            width="1000"
            border="0"
            cellspacing="0"
            cellpadding="0"
            class="container"
            style="
              background-color: whitesmoke;
              margin: auto;
              padding: 0.5em;
              text-align: center;
              font-size: 10px;
            "
          >
            <tr>
              <td>
                <p style="color: grey; margin: 0 0 0.5em">
                  ${year} Edgar Lindo, all rights reserved.
                </p>
                <p style="color: grey; margin: 0 0 0.5em">
                  This email was sent to: ${email}
                </p>
                <p style="color: grey; margin: 0 0 0.5em">
                  This email was sent by: Edgar Lindo | 4 N Rammer | Arglington
                  Heights IL 60004 | USA
                </p>
                <p style="color: grey; margin: 0 0 0.5em">
                  To unsubscribe
                  <a
                    href="https://email.tu.biz/my/un/${email}"
                    style="color: grey"
                    >click here</a
                  >
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>


    `,
    dsn: {
      id: `${nameFull} | ${title}`,
      return: "headers",
      notify: "success",
      recipient: `${email}`,
    },
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
  return Response.json({ message: "Email sent!" });
}
