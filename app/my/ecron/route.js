import nodemailer from "nodemailer";
import quotes from "../../../thejsons/list";

// Exporting a handler for the GET request
export const dynamic = 'force-dynamic';

console.log(quotes);

export async function GET(req) {
  const d = new Date();
  const month = d.getMonth() + 1; // Month is 0-indexed in JS
  const days = d.getDate();
  const year = d.getFullYear();
  const hour = d.getHours();
  const minutes = d.getMinutes();
  const seconds = d.getSeconds();

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

  const sendEmail = async (index) => {
    if (index >= quotes.length) {
      console.log("All emails have been sent!");
      return;
    }

    const currentQuote = quotes[index];
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
    } catch (err) {
      console.log("Error sending email:", err);
    }

    console.log(`Sent email #${index + 1} at ${month}/${days}/${year} at ${hour}:${minutes}:${seconds}s`);
  };

  // Using a for loop to send emails every 10 seconds
  for (let index = 0; index < quotes.length; index++) {
    await sendEmail(index);  // Send email at index
    if (index < quotes.length - 1) {
      // Wait for 10 seconds before sending the next email
      await new Promise((resolve) => setTimeout(resolve, 10 * 1000));
    }
  }

  // Response for the GET request
  return new Response(
    JSON.stringify({ message: "Emails are being sent!" }),
    { status: 200, headers: { "Content-Type": "application/json" } }
  );
}


