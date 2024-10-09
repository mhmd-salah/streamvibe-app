import { Link, useLocation } from "react-router-dom";
import { Icons } from "../../assets/icons";
import { Images } from "../../assets/images";
import routeConstants from "../../Constant/routeConstants";
import { Container } from "../../Styles/global/default";
import {
  BrandWrapper,
  HeaderIconsWrapper,
  HeaderWrapper,
  NavWrapper,
} from "./Header.styles";
import { navItems } from "../../Constant/navItems";



function Header() {
  const location = useLocation();
  return (
    <HeaderWrapper className={`flex items-center`}>
      <Container className="w-full">
        <div className="header-content flex items-center justify-between">
          <BrandWrapper to={routeConstants.HOME}>
            <img src={Images.Logo} alt="side logo" />
          </BrandWrapper>
          <NavWrapper className="flex items-center justify-center">
            <button type="button" className="sidebar-close-btn">
              <img src={Icons.Close} alt="" />
            </button>
            <ul className="nav-list flex items-center justify-center bg-black06">
              {navItems.map((item, index) => (
                <li key={index} className="nav-item">
                  <Link
                    to={item.to}
                    className={`nav-link inline-flex items-center justify-center text-center ${
                      location.pathname === item.path ? "active" : ""
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </NavWrapper>
          <HeaderIconsWrapper className="flex items-center justify-center">
            <Link
              to={"/search"}
              className="icon-link flex items-center justify-center"
            >
              <img src={Icons.Search} alt="" />
            </Link>
            <Link
              to={"/"}
              className="icon-link flex items-center justify-center"
            >
              <img src={Icons.Bell} alt="" />
            </Link>
            <button className="icon-link flex items-center justify-center sidebar-open-btn">
              <img src={Icons.Menu} alt="" />
            </button>
          </HeaderIconsWrapper>
        </div>
      </Container>
    </HeaderWrapper>
  );
}

export default Header;
