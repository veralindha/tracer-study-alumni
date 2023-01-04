import ContentHeader from "../../../components/admin_components/utils/content-header";
import Layout from "../../../components/admin_components/utils/layout";

export default function Questions({id}) {
  return (
    <Layout title="Data Questions - Study" activeNavBarItem={5} activeUser={''}>
      <ContentHeader title={'Data Questions'} />
      <h1>{id}</h1>
    </Layout>
  )
}