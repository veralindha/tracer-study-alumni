import { prisma } from "../../libs/prisma.lib"

export default async function handler(req, res) {
  try {
    if (req.method === 'POST') {
      let data = req.body.alumnis
      for (let i = 0; i < data.length; i++) {
        await prisma.alumnis.create({
          data: data[i]
        }).catch((error) => {
          return res.status(500).json({
            message: error.message
          })
        })
      }
      res.status(201).json({
        message: 'success'
      })
    }
  } catch (error) {
    res.status(500).json({
      message: "Error occured, contact your Administrator for more information."
    })
  }
}