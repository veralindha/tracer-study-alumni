import AddQuestioner from "../../../components/admin_components/questioner/addquestioner";
import ListQuestioners from "../../../components/admin_components/questioner/listquestioners";
import ContentHeader from "../../../components/admin_components/utils/content-header";
import Layout from "../../../components/admin_components/utils/layout";

export default function Questioner() {
  return (
    <Layout title="Data Questioner - Study" activeNavBarItem={5} activeUser={''}>
      <ContentHeader title={'Data Questioner'} />
      <AddQuestioner />
      <ListQuestioners />
    </Layout>
  )
}