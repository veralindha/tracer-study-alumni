import { useState } from 'react'
import Card from '../utils/card'
import Swal from 'sweetalert2'

export default function Profile() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const handleUpdate = (e) => {
    e.preventDefault()
    let updateData = {
      username: username,
      password: password
    }
    fetch('/api/user/update', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updateData)
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === 'Data user berhasil diubah!') {
          Swal.fire({
            icon: 'success',
            title: 'Berhasil',
            text: data.message
          })
        } else {
          Swal.fire({
            icon: 'warning',
            title: 'Gagal',
            text: data.message
          })
        }
      })
      .catch((err) => {
        Swal.fire({
          icon: 'error',
          title: 'Gagal',
          text: err.message
        })
      })
  }
  return (
    <section className="content">
      <Card cardTitle="Update Profile" cardIcon="fa-user">
        <form onSubmit={handleUpdate} className="container-fluid">
          <div className="form-group">
            <div className="row">
              <div className="col-md-6">
                <div>
                  <label htmlFor="username">Username</label>
                  <input type="text" className="form-control form-control-sm text-left" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                </div>
              </div>
              <div className="col-md-6">
                <div>
                  <label htmlFor="password">Password</label>
                  <input type="password" className="form-control form-control-sm text-left" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
              </div>
            </div>
          </div>
          <div className="row float-right">
            <button type='submit' className="btn btn-primary"><i className="fas fa-fw fa-sync"></i> Update</button>
          </div>
        </form>
      </Card>
    </section>
  )
}