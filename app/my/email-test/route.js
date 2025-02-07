import nodemailer from "nodemailer";

export async function POST(req) {
  const transporter = nodemailer.createTransport({
    service: "Outlook365",
    auth: {
      user: process.env.EMAIL2,
      pass: process.env.EPASSWORD2,
    },
    // secure: true,
    
    // tls: {
    //   rejectUnauthorized: false, // Allow self-signed certificates (development only)
      
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
  const campId = "2-7-25-sdistributor";

  const d = new Date();
  const year = d.getFullYear();

  const mailData = {
    from: { name: "Edgar Lindo", address: process.env.EMAIL2 },
    to: email,
    subject: `Hydraulic Motors | Servo Controllers  | Linear Guides | ${title}`,
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
          <p style="margin-bottom: 0.2em; margin-top: 0.1em">
            If you can't see images,
            <a href="https://email.tu.biz/my/ehost/${email}/${campId}/${title}"
              >click here</a
            >
            to view it on the web.
          </p>
          <!-- <p style="margin-bottom: 0; margin-top: 0.1em">${title}</p> -->
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
                  Industrial Automation
                </p>
                <p style="color: white; margin: 0">
                  Hydraulics | Pneumatics | Electrical | Mechanical
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
                <p style="color: #3a6b83"><b style=" background-color: yellow;"> Hydraulic items</b></p>
              </td>
            </tr>
            <tr>
              <td
                width="50%"
                style="text-align: center; padding: 2%; box-sizing: border-box"
              >
                <a
                  href="https://email.tu.biz/my/email-follow/${email}/${campId}/charlynn"
                >
                  <img
                    src="https://email.tu.biz/_next/image?url=%2Fimages%2Fproducts%2Fcharlynn263.png&w=1920&q=75"
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
                 • We provide a full range of hydraulic motor, pumps, and valves. 
                </p>
                <p style="color: #3a6b83">
                   • We offer spare parts as well as complete units to replace popular hydraulic brand names.
                </p>
                <p style="color: #3a6b83">
                  • Technical support, competitive pricing, and quick delivery from inventory is standard.  
                </p>
                <br />
                <p style="color: #3a6b83">
                
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
                          href="https://email.tu.biz/my/email-follow/${email}/${campId}/charlynn"
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
                          See more
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
                <p style="color: #3a6b83;"><b style = "background-color: yellow;" > Linear Guides</b></p>
              </td>
            </tr>
            <tr>
              <td
                width="50%"
                style="text-align: center; padding: 2%; box-sizing: border-box"
              >
                <a
                  href="https://email.tu.biz/my/email-follow/${email}/${campId}/linearguides-english"
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
                  • We handle a large variety to interchange with all brands.
                </p>
                <p style="color: #3a6b83">
                  • <b>Replacements for:</b>: linear guides, blocks, complete assemblies.
                </p>
                <p style="color: #3a6b83">
                  • Hight quality prouducts with competitive prices and fast delivery.
                </p>
                <br />
                <p style="color: #3a6b83; margin-top: 1em">
                  • <b> Technical Support</b> for all applications.
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
                          href="https://email.tu.biz/my/email-follow/${email}/${campId}/linearguides-english"
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
                          See more
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
                <p style="color: #3a6b83"><b style = "background-color: yellow;"> Controllers for new and existing machines.</b></p>
              </td>
            </tr>
            <tr>
              <td
                width="50%"
                style="text-align: center; padding: 2%; box-sizing: border-box"
              >
                <a
                  href="https://email.tu.biz/my/email-follow/${email}/${campId}/controller"
                >
                  <img
                    src="https://email.tu.biz/_next/image?url=%2Fimages%2Fproducts%2Fcontroller.png&w=1920&q=75"
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
                <p style="color: #3a6b83"> Do you have an old machine with an old controller? We can refrofit your machine's controllers with new alternatives. Applications include:</p>
                <p style="color: #3a6b83">
                  • Positioning.
                </p>
                <p style="color: #3a6b83">
                • indexation.
                </p>
                <p style="color: #3a6b83">
                  • syncronization.
                </p>

                <p style="color: #3a6b83">
                  • Acceleration / Deceleration
                </p> </br>
                <p style="color: #3a6b83">
                    Complete control solutions for servo-motors.
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
                          href="https://email.tu.biz/my/email-follow/${email}/${campId}/controller"
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
                          See more
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
                <h1 style="margin: 0; color: white">Industries</h1>

                <p style="color: white; margin: 0">
                  Steel | Aluminum | Metal Forming | Plastic | Automotive | Energy | Chemical |
                  Medical | Petroleum | Cement | Paper | Food |
                  Entertainment | Forestal | Agricultural | Construction |
                  Fishing | Mining | Packaging | Printing |  | Bottling |
                  Transportation
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
              <td colspan="3">
                <p style="color: grey; margin-bottom: 0.5em">Contact</p>
              </td>
            </tr>
            <tr>
              <td style="text-align: center">
                <a
                  href="https://wa.me/15866125270"
                >
                  <img
                    src="https://email.tu.biz/_next/image?url=%2Fimages%2Fsocial-icons%2Fwhatsapp.png&w=1920&q=75"
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
                <p style="color: grey; margin-bottom: 0.5em">WhatsApp</p>
              </td>
              <td style="text-align: center">
                <a
                  href="mailto:info@tu.biz"
                >
                  <img
                    src="https://email.tu.biz/_next/image?url=%2Fimages%2Fsocial-icons%2Femail.png&w=1920&q=75"
                    alt="YouTube"
                    style="
                      max-width: 100%;
                      height: auto;
                      margin-left: auto;
                      margin-right: auto;
                    "
                  /> 
                </a>
                <p style="color: grey; margin-bottom: 0.5em">Email</p>
              </td>
              <td style="text-align: center">
                <a
                  href="https://t.me/elindo586"
                >
                  <img
                    src="https://email.tu.biz/_next/image?url=%2Fimages%2Fsocial-icons%2Ftelegram.png&w=1920&q=75"
                    alt="Snapchat"
                    style="
                      max-width: 100%;
                      height: auto;
                      margin-left: auto;
                      margin-right: auto;
                    "
                  />
                </a> 
                <p style="color: grey; margin-bottom: 0.5em">Telegram</p>
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
