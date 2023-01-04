import AdminDashboardContent from '../../../components/admin_components/admin_dashboard/contents';
import ContentHeader from '../../../components/admin_components/utils/content-header';
import Layout from '../../../components/admin_components/utils/layout';
import useLoginStore from "../../../store/store";

export default function AdminHome(){
  return (
    <Layout title="Admin - Tracer Study" activeNavBarItem={1} activeUser={''}>
      <ContentHeader title={'Dashboard'} />
      <AdminDashboardContent />
    </Layout>
  )
}
