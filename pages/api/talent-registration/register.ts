// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../../lib/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      let client = await connectToDatabase();
      let db = client.db('crossbell-executive-search');
      let collection = db.collection('talents');
      let result = await collection.insertOne(req.body);
      res.status(200).json(result);
    } catch (err) {
      console.log(err);
      if (err instanceof Error) {
        res.status(500).json({ error: err.message });
      } else {
        res.status(500).json({ err });
      }
    }
  }
}
