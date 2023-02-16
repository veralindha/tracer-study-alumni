import Question from "../../../components/admin_components/questioner/question";
import ContentHeader from "../../../components/admin_components/utils/content-header";
import Layout from "../../../components/admin_components/utils/layout";

export default function Questioner() {
  return (
    <Layout title="Data Kuisioner - Study" activeNavBarItem={5} activeUser={''}>
      <ContentHeader title={'Data Kuisioner'} />
      <Question idAlumni={'1117101393-1117101393'}/>
    </Layout>
  )
}