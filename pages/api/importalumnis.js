import { prisma } from "../../libs/prisma.lib"

export default async function handler(req, res) {
  try {
    if (req.method === 'POST') {
      let data = req.body.alumnis
      for (let i = 0; i < data.length; i++) {
        await prisma.alumnis.create({
          data: {
            nim: data[i].nim,
            nik: data[i].no_ktp,
            npwp: '-',
            nama: data[i].nama_mhs,
            gender: data[i].kelamin,
            angkatan: data[i].angkatan,
            lulus: data[i].thn_lulus,
            alamat: data[i].alamat,
            telepon: data[i].tlp_saya,
            email: data[i].email,
            password: data[i].nim,
          }
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