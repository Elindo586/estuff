import nodemailer from "nodemailer";
import quotes from "../../../thejsons/list";

// Exporting a handler for the GET request
export const dynamic = 'force-dynamic';

console.log(quotes);

export async function POST (req) {
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
  });

  // Verify the connection before starting the process
  await new Promise((resolve, reject) => {
    transporter.verify(function (error, success) {
      if (error) {
        console.log("Error verifying transporter:", error);
        reject(error);
      } else {
        console.log("Server is ready to take our messages");
        resolve(success);
      }
    });
  });

  const sendEmail = async () => {
    if (arrayIndex >= quotes.length) {
      console.log("All emails have been sent!");
      return;
    }

    const currentQuote = quotes[arrayIndex];
    const email = currentQuote.email;
    const id = currentQuote.id;

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

    arrayIndex += 1;

    // Set the timeout for sending the next email
    setTimeout(sendEmail, 10 * 1000); // Sends the next email after 10 seconds
  };

  // Start sending emails
  await sendEmail();

  // Response for the GET request
  return new Response(
    JSON.stringify({ message: "Emails are being sent!" }),
    { status: 200, headers: { "Content-Type": "application/json" } }
  );
}
