import Image from "next/image"
import Link from "next/link"
import useLoginStore from "../../../store/store"

export default function Sidebar({ isActiveNavItem = 0, activeUser = '' }) {
  return (
    <aside className="main-sidebar sidebar-light-primary elevation-4">
      {/* Brand Logo */}
      <Link href="/admin-pages/admin" className="brand-link text-center">
        <div className="font-weight-bold">Tracer Study</div>
      </Link>
      {/* Sidebar */}
      <div className="sidebar">
        {/* Sidebar Menu */}
        <nav className="mt-2">
          <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
            <li className="nav-item" >
              <Link href="/admin-pages/profile" className={`nav-link ${isActiveNavItem == 0 ? ' active' : ''}`}>
                <i className="nav-icon fas fa-user" />
                <p>
                  Profile
                </p>
              </Link>
            </li>
            <li className="nav-item" >
              <Link href="/admin-pages/admin" className={`nav-link ${isActiveNavItem == 1 ? ' active' : ''}`}>
                <i className="nav-icon fas fa-home" />
                <p>
                  Dashboard
                </p>
              </Link>
            </li>
            <li className="nav-item" >
              <Link href="/admin-pages/tambah-user-admin" className={`nav-link ${isActiveNavItem == 2 ? ' active' : ''}`}>
                <i className="nav-icon fas fa-users-cog" />
                <p>
                  Tambah User Admin
                </p>
              </Link>
            </li>
            <li className="nav-item" >
              <Link href="/admin-pages/upload" className={`nav-link ${isActiveNavItem == 3 ? ' active' : ''}`}>
                <i className="nav-icon fas fa-upload" />
                <p>
                  Upload Data
                </p>
              </Link>
            </li>
            <li className="nav-item" >
              <Link href="/admin-pages/alumni" className={`nav-link ${isActiveNavItem == 4 ? ' active' : ''}`}>
                <i className="nav-icon fas fa-clock" />
                <p>
                  Data Tracer Alumni
                </p>
              </Link>
            </li>
            <li className="nav-item" >
              <Link href="/admin-pages/questioner" className={`nav-link ${isActiveNavItem == 5 ? ' active' : ''}`}>
                <i className="nav-icon fas fa-question" />
                <p>
                  Data Questioner
                </p>
              </Link>
            </li>
            <li className="nav-item" >
              <Link href="/" className='nav-link text-danger'>
                <i className="nav-icon fas fa-sign-out-alt" />
                <p>
                  Logout
                </p>
              </Link>
            </li>
          </ul>
        </nav>
        {/* /.sidebar-menu */}
      </div>
      {/* /.sidebar */}
    </aside>

  )
}