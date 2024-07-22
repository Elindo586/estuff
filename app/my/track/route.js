export async function GET (`/:id`, (req, res)) {

const pixelId = req.params.id;

res.send (`The pixel id is ${pixelId}`);
  
}

 

