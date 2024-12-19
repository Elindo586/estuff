import nodemailer from "nodemailer";

export async function POST(req) {
  const transporter = nodemailer.createTransport({
    service: "Outlook365",
    auth: {
      user: process.env.EMAIL2,
      pass: process.env.EPASSWORD2,
    },
    
    // tls: {
    //   rejectUnauthorized: false, // Allow self-signed certificates (development only)
    //   // ca: fs.readFileSync('path/to/your/self-signed-cert.pem'),  
    //   // since I don't have a file I copy and post it the SSL code given by Vercel.
    //   // ca: process.env.SSLCERTIFICATE,
    // },
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

  const email = body.email;
  const title = body.id;
  const campId = "090324";

  const d = new Date();
  const year = d.getFullYear();

  const mailData = {
    from: { name: "Edgar Lindo", address: process.env.EMAIL2 },
    to: email,
    subject: `Bombas de Reemplazo con Rexroth | Guías Lineales | Motores Orbitales | ${title}`,
    text: ``,
    html: `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Email</title>
    <style>
      /* General Styles */
      @media only screen and (max-width: 1000px) {
        .container {
          width: 100% !important;
          padding: 0 !important;
        }
        .container2 {
          width: 100% !important;
        }
        .social-icons img {
          width: 24px !important;
          height: 24px !important;
        }
      }

      /* Make images responsive */
      img {
        max-width: 100%;
        height: auto;
        border: 0;
        display: block;
      }

      /* Responsive Layout for Two Column */
      @media only screen and (max-width: 600px) {
        .two-column td {
          display: block;
          width: 100% !important;
          text-align: center;
          padding: 0;
        }
        .two-column td img {
          margin: 0 auto;
          display: block;
        }
        .tbutton {
          width: 75% !important;
          margin-left: auto;
          margin-right: auto;
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
      width="99%"
      cellspacing="0"
      cellpadding="0"
      style="
        background-color: whitesmoke;
        padding: 20px;
        margin-top: 2px;
        margin-right: auto;
        margin-left: auto;
      "
    >
      <tr>
        <td style="text-align: center">
          <p style="margin-bottom: 0.1em; margin-top: 0.1em">
            Si no puede ver imágenes, haga
            <a href="https://email.tu.biz/my/ehost/${email}/${campId}/${title}"
              >clic aquí</a
            >
            para ver el email en página web.
          </p>
          <p style="margin-bottom: 0; margin-top: 0.1em">${title}</p>
        </td>
      </tr>
      <tr>
        <td align="center">
          <!-- Main Container -->
          <table
            width="1000"
            border="0"
            cellspacing="0"
            cellpadding="0"
            class="container"
            style="
              background-color: #016698;
              margin-bottom: 0.3em;
              margin-top: 0;
              border-radius: 10px;
              padding: 1em;
            "
          >
            <tr>
              <td style="text-align: center">
                <h1 style="margin: 0; color: white">Technical Union</h1>
                <p style="margin: 0; color: white">by Edgar Lindo</p>
                <p style="margin-top: 1em; margin-bottom: 0.3em; color: white">
                  Automatización de Maquinaria
                </p>
                <p style="color: white; margin: 0">
                  Hidráulica | Neumática | Eléctrica | Mecánica
                </p>
              </td>
            </tr>
          </table>
          <!-- Middle line  -->
          <table
            width="1000"
            border="0"
            cellspacing="0"
            cellpadding="0"
            class="container2"
            style="
              background-color: #016698;
              margin-bottom: 0.3em;
              border-radius: 10px;
              padding: 0.1em;
            "
          ></table>

          <!-- Two Column Layout -->
          <table
            width="1000"
            border="0"
            cellspacing="0"
            cellpadding="0"
            class="container two-column"
            style="
              background-color: white;
              margin-bottom: 0.3em;
              border-radius: 10px;
              padding: 1em;
            "
          >
            <tr>
              <td style="text-align: center" colspan="2">
                <p style="color: #3a6b83"><b> Bombas de pistones</b></p>
              </td>
            </tr>
            <tr>
              <td
                width="50%"
                style="text-align: center; padding: 2%; box-sizing: border-box"
              >
                <a
                  href="https://email.tu.biz/my/image/rexrothpump/${email}/${campId}"
                >
                  <img
                    src="https://email.tu.biz/_next/image?url=%2Fimages%2Fproducts%2Frexrothpump-5.png&w=1920&q=75"
                    alt="Rexroth pump replacement"
                    style="
                      max-width: 100%;
                      height: auto;
                      display: block;
                      border: 0;
                      margin: 0 auto;
                    "
                  />
                </a>
              </td>
              <td
                width="50%"
                style="
                  vertical-align: top;
                  padding-left: 2%;
                  box-sizing: border-box;
                "
              >
                <p style="color: #3a6b83">
                  Tenemos bombas de reemplazo para <b>Rexroth</b> serie A10V.
                </p>
                <p style="color: #3a6b83">
                  <b>Repuestos</b>: grupos rotatorios, kit de sellos, kit de
                  rodamientos.
                </p>
                <p style="color: #3a6b83">
                  Bombas completas desde 18cc hasta 140cc.
                </p>
                <br />
                <p style="color: #3a6b83">
                  Intercambios directos todo en <b>STOCK</b>
                </p>

                <!-- Button links -->
                <table
                  border="0"
                  cellspacing="0"
                  cellpadding="0"
                  style="margin-top: 1em"
                  class="tbutton"
                >
                  <tr>
                    <td
                      align="center"
                      style="border-radius: 15px"
                      bgcolor="#016698"
                    >
                      <p style="margin: 0.5em">
                        <a
                          href="https://email.tu.biz/my/image/rexrothpump/${email}/${campId}"
                          style="
                            display: inline-block;
                            color: white;
                            text-decoration: none;
                            padding: 0;
                            font-weight: bold;
                            border-radius: 5px;
                            font-size: 15px;
                          "
                        >
                          Ver más
                        </a>
                      </p>
                    </td>
                    <td width="10"></td>
                    <!-- Spacer -->
                    <td
                      align="center"
                      style="border-radius: 15px"
                      bgcolor="#51ce70"
                    >
                      <p style="margin: 0.5em">
                        <a
                          href="https://wa.me/15866125270"
                          style="
                            display: inline-block;
                            color: white;
                            text-decoration: none;
                            padding: 0;
                            font-weight: bold;
                            border-radius: 5px;
                            font-size: 15px;
                          "
                        >
                          WhatsApp
                        </a>
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
          <!-- Middle line  -->
          <table
            width="1000"
            border="0"
            cellspacing="0"
            cellpadding="0"
            class="container2"
            style="
              background-color: #016698;
              margin-bottom: 0.3em;
              border-radius: 10px;
              padding: 0.1em;
            "
          ></table>
          <!-- Two Column Layout -->
          <table
            width="1000"
            border="0"
            cellspacing="0"
            cellpadding="0"
            class="container two-column"
            style="
              background-color: white;
              margin-bottom: 0.3em;
              border-radius: 10px;
              padding: 1em;
            "
          >
            <tr>
              <td style="text-align: center" colspan="2">
                <p style="color: #3a6b83"><b> Guías Lineales</b></p>
              </td>
            </tr>
            <tr>
              <td
                width="50%"
                style="text-align: center; padding: 2%; box-sizing: border-box"
              >
                <a
                  href="https://email.tu.biz/my/image/linearguides/${email}/${campId}"
                >
                  <img
                    src="https://email.tu.biz/_next/image?url=%2Fimages%2Fproducts%2Flinear-guides263.png&w=1920&q=75"
                    alt="Linear Guides"
                    style="
                      max-width: 100%;
                      height: auto;
                      display: block;
                      border: 0;
                      margin: 0 auto;
                    "
                  />
                </a>
              </td>
              <td
                width="50%"
                style="
                  vertical-align: top;
                  padding-left: 2%;
                  box-sizing: border-box;
                "
              >
                <p style="color: #3a6b83">
                  Manejamos guías lineales de intercambios con todas marcas.
                </p>
                <p style="color: #3a6b83">
                  <b>Repuestos</b>: rieles, bloques, ensambles completos.
                </p>
                <p style="color: #3a6b83">
                  Material de alta calidad, precios competitivos, entrega
                  rápida.
                </p>
                <br />
                <p style="color: #3a6b83; margin-top: 1em">
                  <b> Soporte</b> técnico y comercial para crecimiento de su
                  empresa.
                </p>

                <!-- Button links -->
                <table
                  border="0"
                  cellspacing="0"
                  cellpadding="0"
                  style="margin-top: 1em"
                  class="tbutton"
                >
                  <tr class="buttonsT">
                    <td
                      align="center"
                      style="border-radius: 15px"
                      bgcolor="#016698"
                      class="buttonsT"
                    >
                      <p style="margin: 0.5em">
                        <a
                          href="https://email.tu.biz/my/image/linearguides/${email}/${campId}"
                          style="
                            display: inline-block;
                            color: white;
                            text-decoration: none;
                            padding: 0;
                            font-weight: bold;
                            border-radius: 5px;
                            font-size: 15px;
                          "
                        >
                          Ver más
                        </a>
                      </p>
                    </td>
                    <td width="10"></td>
                    <!-- Spacer -->
                    <td
                      align="center"
                      style="border-radius: 15px"
                      bgcolor="#51ce70"
                      class="buttonsT"
                    >
                      <p style="margin: 0.5em">
                        <a
                          href="https://wa.me/15866125270"
                          style="
                            display: inline-block;
                            color: white;
                            text-decoration: none;
                            padding: 0;
                            font-weight: bold;
                            border-radius: 5px;
                            font-size: 15px;
                          "
                        >
                          WhatsApp
                        </a>
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>

          <!-- Middle line  -->
          <table
            width="1000"
            border="0"
            cellspacing="0"
            cellpadding="0"
            class="container2"
            style="
              background-color: #016698;
              margin-bottom: 0.3em;
              border-radius: 10px;
              padding: 0.1em;
            "
          ></table>
          <!-- Two Column Layout -->
          <table
            width="1000"
            border="0"
            cellspacing="0"
            cellpadding="0"
            class="container two-column"
            style="
              background-color: white;
              margin-bottom: 0.3em;
              border-radius: 10px;
              padding: 1em;
            "
          >
            <tr>
              <td style="text-align: center" colspan="2">
                <p style="color: #3a6b83"><b> Motores de Orbitrol</b></p>
              </td>
            </tr>
            <tr>
              <td
                width="50%"
                style="text-align: center; padding: 2%; box-sizing: border-box"
              >
                <a
                  href="https://email.tu.biz/my/image/charlynn/${email}/${campId}"
                >
                  <img
                    src="https://email.tu.biz/_next/image?url=%2Fimages%2Fproducts%2Fcharlynn263.png&w=1920&q=75"
                    alt="Motores Orbitales"
                    style="
                      max-width: 100%;
                      height: auto;
                      display: block;
                      border: 0;
                      margin: 0 auto;
                    "
                  />
                </a>
              </td>
              <td width="50%" style="vertical-align: top; padding-left: 2%">
                <br />
                <p style="color: #3a6b83">
                  Manejamos motores hidráulicos de orbitrol.
                </p>
                <p style="color: #3a6b83">
                  <b>Intercambios</b> directos con <b>Charlynn</b>.
                </p>
                <p style="color: #3a6b83">
                  También podemos reemplazar casi todas las marcas en el
                  mercado.
                </p>
                <br />
                <p style="color: #3a6b83">
                  Material para entrega <b>rápida</b>.
                </p>

                <!-- Button links -->
                <table
                  border="0"
                  cellspacing="0"
                  cellpadding="0"
                  style="margin-top: 1em"
                  class="tbutton"
                >
                  <tr>
                    <td
                      align="center"
                      style="border-radius: 15px"
                      bgcolor="#016698"
                    >
                      <p style="margin: 0.5em">
                        <a
                          href="https://email.tu.biz/my/image/charlynn/${email}/${campId}"
                          style="
                            display: inline-block;
                            color: white;
                            text-decoration: none;
                            padding: 0;
                            font-weight: bold;
                            border-radius: 5px;
                            font-size: 15px;
                          "
                        >
                          Ver más
                        </a>
                      </p>
                    </td>
                    <td width="10"></td>
                    <!-- Spacer -->
                    <td
                      align="center"
                      style="border-radius: 15px"
                      bgcolor="#51ce70"
                    >
                      <p style="margin: 0.5em">
                        <a
                          href="https://wa.me/15866125270"
                          style="
                            display: inline-block;
                            color: white;
                            text-decoration: none;
                            padding: 0;
                            font-weight: bold;
                            border-radius: 5px;
                            font-size: 15px;
                          "
                        >
                          WhatsApp
                        </a>
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>

          <!-- Industry table  -->

          <table
            width="1000"
            border="0"
            cellspacing="0"
            cellpadding="0"
            class="container"
            style="
              background-color: #016698;
              margin-bottom: 0.3em;
              border-radius: 10px;
              padding: 1em;
            "
          >
            <tr>
              <td style="text-align: center">
                <h1 style="margin: 0; color: white">Industrias</h1>

                <p style="color: white; margin: 0">
                  Metal-mecánica | Plástica | Automotriz | Energía | Química |
                  Medica | Petrolera | Cementos | Papelera | Alimenticia |
                  Entretenimiento | Forestal | Agricultura | Construcción |
                  Pesca | Minería | Imprenta | Empaquetadoras | Embotelladoras |
                  Transportadores
                </p>
              </td>
            </tr>
          </table>
          <!-- Middle line  -->
          <table
            width="1000"
            border="0"
            cellspacing="0"
            cellpadding="0"
            class="container2"
            style="
              background-color: #016698;
              margin-bottom: 0.3em;
              border-radius: 10px;
              padding: 0.1em;
            "
          ></table>

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
                <p style="color: grey; margin-bottom: 0.5em">Redes Sociales</p>
              </td>
            </tr>
            <tr>
              <td style="text-align: center">
                <a
                  href="https://email.tu.biz/my/social/linkedin/${email}/${campId}"
                >
                  <img
                    src="https://email.tu.biz/_next/image?url=%2Fimages%2Fsocial-icons%2Flinkedin24.png&w=1920&q=75"
                    alt="LinkedIn"
                    style="
                      max-width: 100%;
                      height: auto;
                      display: block;
                      border: 0;
                      margin: 0 auto;
                    "
                  />
                </a>
              </td>
              <td style="text-align: center">
                <a
                  href="https://email.tu.biz/my/social/youtube/${email}/${campId}"
                >
                  <img
                    src="https://email.tu.biz/_next/image?url=%2Fimages%2Fsocial-icons%2Fyoutube24.png&w=1920&q=75"
                    alt="YouTube"
                    style="
                      max-width: 100%;
                      height: auto;
                      margin-left: auto;
                      margin-right: auto;
                    "
                  />
                </a>
              </td>
              <td style="text-align: center">
                <a
                  href="https://email.tu.biz/my/social/snapchat/${email}/${campId}"
                >
                  <img
                    src="https://email.tu.biz/_next/image?url=%2Fimages%2Fsocial-icons%2Fsnapchat24.png&w=1920&q=75"
                    alt="Snapchat"
                    style="
                      max-width: 100%;
                      height: auto;
                      margin-left: auto;
                      margin-right: auto;
                    "
                  />
                </a>
              </td>
              <td style="text-align: center">
                <a
                  href="https://email.tu.biz/my/social/instagram/${email}/${campId}"
                >
                  <img
                    src="https://email.tu.biz/_next/image?url=%2Fimages%2Fsocial-icons%2Finstagram24.png&w=1920&q=75"
                    alt="Instagram"
                    style="
                      max-width: 100%;
                      height: auto;
                      margin-left: auto;
                      margin-right: auto;
                    "
                  />
                </a>
              </td>
              <td style="text-align: center">
                <a
                  href="https://email.tu.biz/my/social/tiktok/${email}/${campId}"
                >
                  <img
                    src="https://email.tu.biz/_next/image?url=%2Fimages%2Fsocial-icons%2Ftiktok24.png&w=1920&q=75"
                    alt="TikTok"
                    style="
                      max-width: 100%;
                      height: auto;
                      margin-left: auto;
                      margin-right: auto;
                    "
                  />
                </a>
              </td>
              <td style="text-align: center">
                <a
                  href="https://email.tu.biz/my/social/facebook/${email}/${campId}"
                >
                  <img
                    src="https://email.tu.biz/_next/image?url=%2Fimages%2Fsocial-icons%2Ffacebook24.png&w=1920&q=75"
                    alt="Facebook"
                    style="
                      max-width: 100%;
                      height: auto;
                      margin-left: auto;
                      margin-right: auto;
                    "
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
                    href="https://email.tu.biz/my/un1/${email}/${campId}"
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
