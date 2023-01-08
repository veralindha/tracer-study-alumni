export default function handler(req, res) {
  const { query: { nim } } = req
  if (req.method === 'POST') {
    if (req.body.answer && req.body.answer.length > 0) {
      res.status(200).json({ message: 'success' })
    }
    
  }
}