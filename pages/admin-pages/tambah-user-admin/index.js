import TambahDataContents from "../../../components/admin_components/admin_dashboard/tambahdatacontents";
import Layout from '../../../components/admin_components/utils/layout'
import TableUsers from '../../../components/admin_components/table/table_users'
import ContentHeader from '../../../components/admin_components/utils/content-header';
import useLoginStore from "../../../store/store";

export default function TambahUserAdmin() {
  return (
    <Layout title="Tambah User Admin - Tracer Study" activeNavBarItem={2} activeUser={''}>
      <ContentHeader title={'Tambah User Admin'}/>
      <TambahDataContents />
      <TableUsers />
    </Layout>
  )
}