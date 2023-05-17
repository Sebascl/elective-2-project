import { Layout } from "antd";
import { FooterPage } from "../../components/FooterPage/FooterPage";
import { TopRegister } from "../../components/NewComponent/TopRegister/TopRegister";

export const RegisterAndLogin = (props) => {
  const { children } = props;
  const { Header, Footer, Content } = Layout;

  return (
    <Layout>
      <Header>
        <TopRegister></TopRegister>
      </Header>
      <br></br>
      <Content>{children}</Content>
      <Footer>
        <FooterPage></FooterPage>
      </Footer>
    </Layout>
  );
};
