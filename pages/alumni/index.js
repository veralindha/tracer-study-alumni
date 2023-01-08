import ContentHeader from '../../components/admin_components/utils/content-header'
import Layout from '../../components/admin_components/utils/layout'
import useLoginStore from "../../store/store";

export default function AlumniHome(){
  return (
    <Layout title="Alumni - Tracer Study" activeNavBarItem={1} activeUser={''}>
      <ContentHeader title={'Halo, Alumni'} />
    </Layout>
  )
}
