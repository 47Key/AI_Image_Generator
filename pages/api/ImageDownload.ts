import { NextApiRequest, NextApiResponse } from "next";

const GetImage = async (req: NextApiRequest, res: NextApiResponse) => {
    
    // Fetch the generated image
    const response:any = await fetch("https://stablediffusion.0gku54smtinjm.us-east-1.cs.amazonlightsail.com/static/images/image.png");
    
    // Turn the fetched image into a buffer
    const buffer = await response.buffer();

    // Set response headers to accomodate the image buffer
    res.setHeader("Content-Type", "image/png");
    res.setHeader("Content-Disposition", "attachment; filename=image.png");

    // Send the buffer in the response
    res.send(buffer);
  }
    
  export default GetImage;