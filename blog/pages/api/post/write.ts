import { NextApiRequest, NextApiResponse } from 'next';
import { createPost } from '../../../lib/posts';
import { format } from 'date-fns';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id, title, content } = req.body;

  try {
    await createPost({
      id,
      title,
      date: format(new Date(), 'yyyy-MM-dd'),
      content,
    });

    res.status(200).json({ message: 'Create Success!' });
  } catch (error) {
    res.status(500).json({ error: `Create Failed ${error}` });
  }
}
