import { useRouter } from "next/router"
import { useState } from "react"
import Head from "next/head"
import Swal from "sweetalert2"
import useLoginStore from "../store/store"


export default function Login() {
  const router = useRouter()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('')
 
  const handleSubmit = (e) => {
    e.preventDefault()
    fetch(`/api/user/${username}-${password}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(result => result.json())
      .then(res => {
        if (res.message === 'success') {
          useLoginStore.setState({
            username: res.data.username,
            role: res.data.role
          })
          router.push('/admin-pages/admin')
        } else {
          Swal.fire({
            icon: 'warning',
            title: 'Oops...',
            text: 'Username atau password salah!',
          })
        }
      })
      .catch((err) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: "Can't connect to server...",
        })
      })
  }

  return (
    <div className="container">
      <Head>
        <title>Login - Tracer Study</title>
      </Head>
      <div className="row justify-content-center text-center">
        <div className="col-4">
          <form onSubmit={handleSubmit} className="form-signin">
            <i className="fas fa-sign-in-alt fa-7x"></i>
            <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
            <label htmlFor="inputEmail" className="sr-only">Email address</label>
            <input type="text" id="inputEmail" className="form-control" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} required autoFocus />
            <label htmlFor="inputPassword" className="sr-only">Password</label>
            <input type="password" id="inputPassword" className="form-control" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
            <button className="btn btn-lg btn-primary btn-block" type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}