import ContentHeader from "../../../components/admin_components/utils/content-header";
import Layout from "../../../components/admin_components/utils/layout";
import TableTracerAlumni from "../../../components/admin_components/table/table_tracer_alumni";
import useLoginStore from "../../../store/store";

export default function Alumni() {
  return (
    <Layout title="Data Tracer Alumni - Tracer Study" activeNavBarItem={4} activeUser={''}>
      <ContentHeader title={'Data Tracer Alumni'} />
      <TableTracerAlumni />
    </Layout>
  )
}