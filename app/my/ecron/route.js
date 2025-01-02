import nodemailer from "nodemailer";
import quotes from "../../../thejsons/list";

// export { NextResponse } from 'next/server';

// export async function GET() {
//   return NextResponse.json({ ok: true });
// }

export const dynamic = 'force-dynamic'; 

console.log(quotes);

export async function GET (req) {
  const d = new Date();
  const month = d.getMonth() + 1; // Month is 0-indexed in JS
  const days = d.getDate();
  const year = d.getFullYear();
  const hour = d.getHours();
  const minutes = d.getMinutes();
  const seconds = d.getSeconds();

  let timesRun = 0;
  let arrayIndex = 0;

  console.log(
    `We are moving on ${month}/${days}/${year} at ${hour}:${minutes}:${seconds}s`
  );

  // Create a transporter once, outside the loop
  const transporter = nodemailer.createTransport({
    service: "Outlook365",
    auth: {
      user: process.env.EMAIL2,
      pass: process.env.EPASSWORD2,
    },
    // tls: {
    //   rejectUnauthorized: false, // Allow self-signed certificates (development only)
    // },
  });

  // Verify the connection before starting the interval
  await new Promise((resolve, reject) => {
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

  const sendEmail = async () => {
    const currentQuote = quotes[arrayIndex];
    
    const email = currentQuote.email;
    const id = currentQuote.id;
    const campId = "090324"; // This seems unused, you can remove if not needed.

    const mailData = {
      from: { name: "Edgar Lindo", address: process.env.EMAIL2 },
      to: email,
      subject: `This is a test ${id}`,
      text: ``,
      html: `Testing it baby.`,
    };

    try {
      await transporter.sendMail(mailData);
      console.log("Email sent to: " + email);
      timesRun += 1;
    } catch (err) {
      console.log("Error sending email:", err);
    }

    console.log(`We ran ${timesRun} times at ${month}/${days}/${year} at ${hour}:${minutes}:${seconds}s`);
    console.log(arrayIndex, quotes.length);

    // If all emails are sent, clear the interval and reset index
    if (arrayIndex === quotes.length - 1) {
      console.log("All emails have been sent!");
      clearInterval(interval); // Clear the interval after sending all emails
    }

    arrayIndex += 1;
  };

  // Set interval to send one email every 10 seconds
  const interval = setInterval(sendEmail, 10 * 1000);

  return Response.json({ message: "Emails are being sent!" });
}
