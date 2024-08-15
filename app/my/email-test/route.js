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
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Email</title>
    <style>
.row::after {
  content: "";
  clear: both;
  display: table;
}
[class*="col-"] {
  float: left;
  padding: 15px;
}

/* For mobile phones: */
[class*="col-"] {
  width: 100%;
}

@media only screen and (min-width: 600px) {
  /* For tablets: */
  .col-s-1 {
    width: 8.33% !important;
  }
  .col-s-2 {
    width: 16.66% !important;
  }
  .col-s-3 {
    width: 25% !important;
  }
  .col-s-4 {
    width: 33.33% !important;
  }
  .col-s-5 {
    width: 41.66%  !important;
  }
  .col-s-6 {
    width: 50% !important;
  }
  .col-s-7 {
    width: 58.33% !important;
  }
  .col-s-8 {
    width: 66.66%   !important;
  }
  .col-s-9 {
    width: 75% !important;
  }
  .col-s-10 {
    width: 83.33% !important;
  }
  .col-s-11 {
    width: 91.66% !important;
  }
  .col-s-12 {
    width: 100% !important;
  }
}
@media only screen and (min-width: 768px) {
  /* For desktop: */
  .col-1 {
    width: 8.33% !important;
  }
  .col-2 {
    width: 16.66% !important;
  }
  .col-3 {
    width: 25% !important;
  }
  .col-4 {
    width: 33.33% !important;
  }
  .col-5 {
    width: 41.66% !important;
  }
  .col-6 {
    width: 50% !important;
  }
  .col-7 {
    width: 58.33% !important;
  }
  .col-8 {
    width: 66.66% !important;
  }
  .col-9 {
    width: 75% !important;
  }
  .col-10 {
    width: 83.33% !important;
  }
  .col-11 {
    width: 91.66% !important;
  }
  .col-12 {
    width: 100% !important;
  }
}
.row::after {
  content: "";
  clear: both;
  display: table;
}
[class*="col-"] {
  float: left;
  padding: 15px;
}

.email-main {
  background-color: whitesmoke;
  width: auto;
  height: auto;
  padding: 1em;
  border-radius: 10px;
  position: relative;
  margin-bottom: 1em;
}

.email-content {
  background-color: lightblue;
  position: relative;
  padding: 1em;
  height: auto;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 1em;
}

.email-social {
  background-color: whitesmoke;
  position: relative;
  padding-top: 0.5em;
  height: auto;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 0.1em;
  text-align: center;
  overflow: auto;
}
.social-meddia-text {
  color: grey;
}
.email-social-icons {
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: auto;
}
.email-footer {
  background-color: whitesmoke;
  position: relative;
  padding: 0.5em;
  height: auto;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 0.5em;
  text-align: center;
  font-size: 10px;
}
.email-footer-text {
  color: grey;
  margin-bottom: 0.05em;
}

</style>
    </head>
    <body>
    <div class="email-main">
      <div class="email-content">
        <h1>Thanks for signing up!</h1>
        <p>We'll be in touch soon with more information about our campaign.</p>
      </div>
      <div class="email-content row">
        <div class="col-6 col-s-12">
          <h1>Thanks for signing up!</h1>
        </div>
        <div class="col-6 col-s-12">
          <p>
            We'll be in touch soon with more information about our campaign.
          </p>
        </div>
      </div>
      <br />
      <div class="email-social">
        <p class="social-media-text"> Social Media Follow</p>
        <div class="col-12 col-s-12 email-social-icons">
         
            <a href="https://www.linkedin.com/in/edgarlindo/">
              <img src=   />
            </a>
            
          &nbsp; &nbsp;
         
            <a href="https://www.youtube.com/@EdgarLindo">
              <img src=   />
            </a>
           
          &nbsp; &nbsp;
         
            <a href="https://www.snapchat.com/add/elindo586">
              <img src=   />
            </a>
            
          &nbsp; &nbsp;
         
            <a href="https://www.instagram.com/mredgarlindo">
             img src=   />
            </a>
          
          &nbsp; &nbsp;
          
            <a href="https://www.tiktok.com/@theedgarlindo">
             img src=   />
            </a>
           
          &nbsp; &nbsp;
          
            <a href="https://www.facebook.com/theedgarlindo">
              img src=   />
            </a>
            
        </div>
      </div>
      <br />

      <div class="email-footer">
        <p class="email-footer-text">
          ${year} Edgar Lindo, all rights reserved.
        </p>
        <p class="email-footer-text">This email was sent to: ${email}</p>
        <p class="email-footer-text">
          This email was sent by: Edgar Lindo | 4 N Rammer | Arglington Heights
          IL 60004 | USA
        </p>
        <p>
          To unsubscribe
          <a href="https://email.tu.biz/my/un/${email} ">click here</a>
        </p>
      </div>
    </div>
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
