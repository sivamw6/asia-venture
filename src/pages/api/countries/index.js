import { destinations } from '../../../database/db'

function handler(req, res) {
  if (req.method === 'GET') {
    res
      .status(200)
      .json(destinations)
  }
}

export default handler