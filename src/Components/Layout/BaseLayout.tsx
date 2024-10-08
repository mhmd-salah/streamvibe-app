import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import { PageWrapper } from "../../Styles/global/default";
import Footer from "../Footer/Footer";

function BaseLayout() {
  return (
    <PageWrapper>
      <Header />
      <Outlet />
      <Footer />
    </PageWrapper>
  );
}

export default BaseLayout;
