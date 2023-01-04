import Head from 'next/head'
import Navbar from '../../components/admin_components/utils/navbar'
import Scripts from '../../components/admin_components/utils/scripts'
import Sidebar from '../../components/admin_components/utils/sidebar'

export default function Home() {
  return (
    <div className="hold-transition sidebar-mini layout-fixed">
      <div className='wrapper'>
        <Head>
          <title>Tracer Study</title>
          <meta name="description" content="Powered by Haho Team" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar />
      </div>
      <Sidebar />
      {/* <Content /> */}
      <Scripts />
    </div>
  )
}
