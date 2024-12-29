import nodemailer from "nodemailer";
import quotes from "../../../thejsons/list";

// import { NextResponse } from 'next/server';

// export async function GET() {
//   return NextResponse.json({ ok: true });
// }

export async function POST(req) {
  const d = new Date();
  const month = d.getMonth();
  const days = d.getDate();
  const year = d.getFullYear();
  const hour = d.getHours();
  const minutes = d.getMinutes();
  const seconds = d.getSeconds();

  var timesRun = 0;
  var arrayIndex = 0;

  console.log(
    `We are moving on ${month}/${days}/${year} at ${hour}:${minutes}:${seconds}s`
  );

  setInterval(async function () {
    const currentQuote = quotes[arrayIndex++];
    
     const  email = currentQuote.email;
     const  id = currentQuote.id;
     const campId = "090324";


    nodemailer.createTransport({
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

    const mailData = {
      from: { name: "Edgar Lindo", address: process.env.EMAIL2 },
      to: email,
      subject: `Bombas de Reemplazo con Rexroth | Guías Lineales | Controladores  | ${id}`,
      text: ``,
      html: `Testing it baby.`,
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

    timesRun += 1;
    console.log(
      `we ran ${timesRun} times at ${month}/${days}/${year} at ${hour}:${minutes}:${seconds}s`
    );
    console.log(arrayIndex, quotes.length);

    if (arrayIndex === 2) {
      console.log("We are done!");

      clearInterval(myIntervals);
      arrayIndex = 0;
    }
  }, 10 * 1000);
  return Response.json({ message: "Emails sent!" });
}
