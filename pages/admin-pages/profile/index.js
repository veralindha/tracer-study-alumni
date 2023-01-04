import { useRouter } from "next/router"
import Profile from '../../../components/admin_components/profile/profile'
import ContentHeader from "../../../components/admin_components/utils/content-header"
import Layout from "../../../components/admin_components/utils/layout"
import useLoginStore from "../../../store/store"

export default function ProfilePage() {
  return (
    <Layout title="Profile - Tracer Study" activeNavBarItem={0} activeUser={''}>
      <ContentHeader title={'Profile'} />
      <Profile />
    </Layout>
  )
}