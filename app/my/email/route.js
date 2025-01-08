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
  const campId = "q10-30-24";
  // const img = body.img;

  const textArray = quote;
  const contents = textArray
    .map(
      ({ QuoteN, ItemCode, ItemName, Qty, Price, ExtPrice, LeadTime }) => `<tr><td><p>
         Quote Number: ${QuoteN} \nQyt ${Qty}, Part: ${ItemCode}, Description: ${ItemName}, Price: ${Price}, Ext Price: ${ExtPrice}, Lead Time: ${LeadTime}\n \n
    
        </p></td></tr>`
       
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
    <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Email</title>
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
      width="99%"
      cellspacing="0"
      cellpadding="0"
      style="background-color: whitesmoke; padding: 20px; margin-top: 2px"
    >
      <tr>
        <td align="left">
          <!-- Main Container -->

          <table
            width="99%"
            cellspacing="0"
            cellpadding="0"
            style="background-color: whitesmoke; padding: 10px; margin-top: 2px"
          >
            <table>
              <tr>
                <td>
                  <p>${nameFirst},</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Todo bien con su cotización? Necesita algo más?</p>
                </td>
              </tr>
            </table>

            <table>
              
                  ${contents}
                
            </table>

            <tr>
              <td>
                <p>
                  Por aparte le comento que tengo muchos otros productos
                  disponibles, incluyendo Guías Lineales, Controladores y
                  Drives.
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p>
                  Productos
                  <span style="background-color: #ffff00"> Guias Lineales </span>
                  :
                  <a
                    href="https://email.tu.biz/my/email-follow/${email}/${campId}/won-linear "
                  >
                    literatura mecánica
                  </a>
                </p>
                <p>
                  Todas las guías lineales y ballscrews para automatización
                  electro-mecánica.
                </p>
                <p>
                  Muchas de estas piezas pueden reemplazar guías como las de
                  THK.
                </p>
              </td>
            </tr>

            <tr>
              <td>
                <p> Productos de <span style="background-color: #ffff00 ">control electro-mecánico</span>: </p>
                <p>
                  <a
                    href="https://email.tu.biz/my/email-follow/${email}/${campId}/iss-applications "
                  >
                    Aplicaciones electro-mecánicas
                  </a>
                </p>
                <p>
                  <a
                    href="https://email.tu.biz/my/email-follow/${email}/${campId}/iss-products "
                  >
                    Productos para servo control.
                  </a>
                </p>
                <p>
                  Servo Controladores | Drives | Amplificadores Toshiba | Servo
                  Motores | Software
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p>Saludos,</p>
                <p>Edgar Lindo</p>
                <p>
                  <a style=" text-decoration: none; color: rgb(29, 72, 119)" href="https://wa.me/15866125270">WhatsApp</a> |
                  <a style=" text-decoration: none; color: rgb(29, 72, 119)" href="mailto:info@tu.biz"> Email</a> |
                  <a style=" text-decoration: none; color: rgb(29, 72, 119)" href="https://t.me/elindo586"> Telegram</a>
                </p>
              </td>
            </tr>
            <tr>
              <td></td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
   
    `,
    // dsn: {
    //   id: `${nameFull} | ${title}`,
    //   return: "headers",
    //   notify: "success",
    //   recipient: `${email}`,
    // },
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
