export async function GET(_, { params }) {
  const userEmail = params.id;

  const htmlResponse = `
      <html>
        <body style = "color: blue">
          <div>
            <div> <h1> Hello There, </h1> </div>
            <div> Your email: ${userEmail} has been unsubscribed. </div>
          </div>
        </body>
      </html>
    `;

  return new Response(htmlResponse, {
    headers: { "Content-Type": "text/html" },
  });
}
