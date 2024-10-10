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
import useHeaderBackground from "../../Hooks/HasHeaderBackground";
import {
  closeSidebar,
  openSidebar,
  selectorSidebar,
} from "../../Redux/Slices/sidebarSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";

function Header() {
  const location = useLocation();
  const scrollThreshold = 0;
  const hasBackground = useHeaderBackground(scrollThreshold);
  const headerStyle = hasBackground ? "bg-black06 sm-header" : "bg-transparent";
  const dispatch = useDispatch();
  const { isSidebarOpen } = useSelector(selectorSidebar);
  const navRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        dispatch(closeSidebar());
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dispatch]);

  return (
    <HeaderWrapper className={`flex items-center ${headerStyle}`}>
      <Container className="w-full">
        <div className="header-content flex items-center justify-between">
          <BrandWrapper to={routeConstants.HOME}>
            <img src={Images.Logo} alt="side logo" />
          </BrandWrapper>
          <NavWrapper
            ref={navRef}
            className={`flex items-center justify-center ${
              isSidebarOpen ? "show" : ""
            }`}
          >
            <button
              type="button"
              className="sidebar-close-btn"
              onClick={() => dispatch(closeSidebar())}
            >
              <img src={Icons.Close} alt="" />
            </button>
            <ul className="nav-list flex items-center justify-center bg-black06">
              {navItems.map((item, index) => (
                <li key={index} className="nav-item">
                  <Link
                    onClick={() => dispatch(closeSidebar())}
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
            <button
              className="icon-link flex items-center justify-center sidebar-open-btn"
              onClick={() => dispatch(openSidebar())}
            >
              <img src={Icons.Menu} alt="" />
            </button>
          </HeaderIconsWrapper>
        </div>
      </Container>
    </HeaderWrapper>
  );
}

export default Header;
