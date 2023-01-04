import Layout from "../../../components/admin_components/utils/layout";
import ContentHeader from "../../../components/admin_components/utils/content-header";
import useLoginStore from "../../../store/store";
import UploadComponent from '../../../components/admin_components/upload/upload';

export default function Upload() {
  return (
    <Layout title="Upload - Tracer Study" activeNavBarItem={3} activeUser={''}>
      <ContentHeader title={'Upload Data Alumni'} />
      <UploadComponent/>
    </Layout>
  )
}