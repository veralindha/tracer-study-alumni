import Image from "next/image"
import Link from "next/link"
import { useEffect } from "react"
export default function Navbar({ ...props }) {

  return (
    <>
      <div className={`${props.className}`} style={{ background: "#ffffff" }}>
        <div className="row p-2" style={{ background: "#49b5e7" }} >
          <div className="col">
            <div className="container text-light">
              <div><i className="bi bi-geo-alt"></i> Jl. Jendral A. Yani 80 Banyuwangi, 68450  <Link className="text-light" href={'mailto:pusatkarier@stikombanyuwangi.ac.id'}><i className="bi bi-envelope"></i> pusatkarier@stikombanyuwangi.ac.id</Link> </div>
            </div>
          </div>
        </div>
        <div className="container d-flex align-items-center justify-content-between">
          <a href="index.html" className="logo"><Image src="/dist/img/logo-stikom.png" width={50} height={50} alt='' /></a>
          <nav id="navbar" className="navbar">
            <ul>
              <li><Link className="nav-link scrollto active" href="#hero" >Home</Link></li>
              <li><Link className="nav-link scrollto" href="#about" >About</Link></li>
              <li><Link className="nav-link scrollto" href="#services" >Services</Link></li>
              {/* <li className="dropdown"><a href="#"><span>Drop Down</span> <i className="bi bi-chevron-down" /></a>
                <ul>
                  <li><a href="#">Drop Down 1</a></li>
                  <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right" /></a>
                    <ul>
                      <li><a href="#">Deep Drop Down 1</a></li>
                      <li><a href="#">Deep Drop Down 2</a></li>
                      <li><a href="#">Deep Drop Down 3</a></li>
                      <li><a href="#">Deep Drop Down 4</a></li>
                      <li><a href="#">Deep Drop Down 5</a></li>
                    </ul>
                  </li>
                  <li><a href="#">Drop Down 2</a></li>
                  <li><a href="#">Drop Down 3</a></li>
                  <li><a href="#">Drop Down 4</a></li>
                </ul>
              </li> */}
              <li><Link className="nav-link scrollto" href="#footer" >Contact</Link></li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle" />
          </nav>
        </div>
      </div>
    </>

  )
}