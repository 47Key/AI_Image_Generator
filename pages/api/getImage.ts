import { NextApiRequest, NextApiResponse } from "next";

const GetImage = async (req: NextApiRequest, res: NextApiResponse) => {
    const response:any = await fetch("https://stablediffusion.0gku54smtinjm.us-east-1.cs.amazonlightsail.com/static/images/image.png");
    const buffer = await response.buffer();

    res.setHeader("Content-Disposition", "attachment; image.png");

    buffer.pipe(res);
  }
    
  export default GetImage;