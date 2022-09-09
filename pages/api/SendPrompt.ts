import type { NextApiRequest, NextApiResponse } from 'next/types';

interface Data {
  prompt: String,
  date: BigInt,
}

async function SendPrompt(req: NextApiRequest, res: NextApiResponse) {

  const body:Data = JSON.parse(req.body);
  const prompt:String = body.prompt;
  
  try {
    
      const sendPrompt = await fetch(`https://stablediffusion.0gku54smtinjm.us-east-1.cs.amazonlightsail.com/prompt?prompt=${prompt}`)
      .then((res) => res.json())
      .then((data) => {
        return res.status(200).json(data);
      })
      .catch((err: any) => {
        return res.status(500).json(err)
      })

  } catch (error) {

    return res.status(400).json({ error: "Could not complete your request, please wait a few minutes and try again." });
  
  }
}
  
export default SendPrompt;
  