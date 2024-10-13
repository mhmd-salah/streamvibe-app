import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import { PageWrapper } from "../../Styles/global/default";
import Footer from "../Footer/Footer";

function BaseLayout() {
  return (
    <PageWrapper>
      <Header />
      <main
        style={{
          minHeight: "100vh",
        }}
      >
        <Outlet />
      </main>
      <Footer />
    </PageWrapper>
  );
}

export default BaseLayout;
