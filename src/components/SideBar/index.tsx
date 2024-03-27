import { Layout } from "antd"
import User from "./components/User";
import Channels from "./components/Channels";
const { Header, Content, Footer } = Layout;

export const SideBar = () => {
  return (
    <Layout style={{ height: '100%' }}>
      <Header style={{ backgroundColor: '#ACE2E1' }}>
        <User />
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