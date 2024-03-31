import { Layout } from "antd"
import User from "./components/User";
import Channels from "./components/Channels";
import { useSession } from "next-auth/react";
const { Header, Content, Footer } = Layout;

export const SideBar = () => {
  const { data: session, status } = useSession()

  return (
    <Layout style={{ height: '100%' }}>
      <Header style={{ backgroundColor: '#ACE2E1', padding: '0 10px 0 10px' }}>
        <User user={session?.user} />
      </Header>
      <Content style={{ backgroundColor: '#f3eee5' }}>
        <Channels />
      </Content>
      {/* <Footer style={{ backgroundColor: 'blue' }}>
        Nose
      </Footer> */}
    </Layout>
  )
}