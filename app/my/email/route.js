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
    <div> 
    <div>Hola ${nameFirst},</div> <br>

    <div>Todo bien con su cotización? Necesita algo más?</div> <br>

    
    <div><pre>${contents}</pre></div> <br/>
    <div> Por aparte le comento que tengo muchos otros productos disponibles, incluyendo Guías Lineales, Controladores y Drives. <div/>
    <div> Productos <span style = "background-color: #FFFF00" > Guias Lineales </span>: <a href= "https://email.tu.biz/my/email-follow/${email}/${campId}/won-linear "> literatura mecánica </a> </div> 
    <div> Todas las guías lineales y ballscrews para automatización electro-mecánica.</div>
    <div> Muchas de estas piezas pueden reemplazar guías como las de THK.</div> <br>
    <div> Productos para<span style="background-color: #FFFF00"> Controladores y Drives </span>: </div>
    <div> <a href= "https://email.tu.biz/my/email-follow/${email}/${campId}/iss-applications "> Aplicaciones electro-mecánicas </a></div>
    <div> <a href= "https://email.tu.biz/my/email-follow/${email}/${campId}/iss-products "> Productos de control. </a></div>
    <div> Servo controladores.</div>
    <div> Drives. </div>
    <div> Amplificadores Toshiba.</div>
    <div> Servo motores modificados para aplicaciones.</div>
    <div> Software y programación completa para cualquier proyecto.</div><br/>

    <div> Saludos, </div> <br/>
    <div> Edgar Lindo </div> <br/>
      
    
   
   
    </div>
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
