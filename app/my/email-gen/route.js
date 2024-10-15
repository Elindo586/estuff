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
  const campId = "10-15-24";
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
    subject: `Hidráulica | Electro-Mecánica para  ${nameFull} `,
    text: ``,
    html: `
    <div> 
    <div>Hola ${nameFirst},</div> <br>

    <div>Como va todo?</div> <br>
    <div> Ustedes tambien trabajan con electro-mecánica?</div> <br/>
    <div> Abajo una reseña de productos para automatización industrial para su consideración en el mercado. <div/> <br/> 
    <div> Productos <span style="background-color: #FFFF00">Fluidyne</span>: <a href= "https://email.tu.biz/my/email-follow/${email}/${campId}/fluidyne "> literatura hidráulica </a> <div/>
    <div> Bombas de:  </div> 
    <div> Pistones tipo Vickers. </div>
    <div> Pistones tipo Rexroth A10V y A4V. </div>
    <div> Paletas: tipo Vickers y Denison. </div>
    <div> Engranes: bombas C101 y C102 de volteo, y bombas de aluminio. </div> <br/>
    <div> Motores hidráulicos tipo Charlynn, pero también intercambiables con muchas marcas. </div> <br/> 
    <div> Válvulas direccionales y de presión estándar.</div> <br/> 
    <div> Productos <span style = "background-color: #FFFF00" > WON Linear</span>: <a href= "https://email.tu.biz/my/email-follow/${email}/${campId}/won-linear "> literatura mecánica </a> </div> 
    <div> Todas las guías lineales y ballscrews para automatización electro-mecánica.</div>
    <div> Muchas de estas piezas pueden reemplazar guías como las de THK.</div> <br>
    <div> Productos de <span style="background-color: #FFFF00">Industrial Indexing Systems</span>: </div>
    <div> IIS <a href= "https://email.tu.biz/my/email-follow/${email}/${campId}/iss-applications "> Aplicaciones electro-mecánicas </a></div>
    <div> ISS <a href= "https://email.tu.biz/my/email-follow/${email}/${campId}/iss-products "> Productos de control. </a></div>
    <div> Servo controladores.</div>
    <div> Drives. </div>
    <div> Amplificadores Toshiba.</div>
    <div> Servo motores modificados para aplicaciones.</div>
    <div> Software y programación completa para cualquier proyecto.</div><br/>

    <div> Saludos, </div> <br/>
    <div> Edgar Lindo </div> <br/>
      
    
   
   
    </div>
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
