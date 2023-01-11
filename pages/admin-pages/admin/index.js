import { useRouter } from 'next/router';
import { useEffect } from 'react';
import AdminDashboardContent from '../../../components/admin_components/admin_dashboard/contents';
import ContentHeader from '../../../components/admin_components/utils/content-header';
import Layout from '../../../components/admin_components/utils/layout';
import { getCookie } from '../../../libs/cookies.lib';
import useLoginStore from "../../../store/store";

export default function AdminHome(){
  const router = useRouter()
  useEffect(() => {
    const session = getCookie('user')
    if (!session) {
      router.push('/login_admin')
    }
  }, [])
  return (
    <Layout title="Admin - Tracer Study" activeNavBarItem={1} activeUser={''}>
      <ContentHeader title={'Dashboard'} />
      <AdminDashboardContent />
    </Layout>
  )
}
