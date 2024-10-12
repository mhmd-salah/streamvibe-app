import { Link } from "react-router-dom";
import { FOOTER_LINKS } from "../../Constant/mockData";
import { Container, Paragraph, Text } from "../../Styles/global/default";
import { FooterItemWrapper, FooterWrapper } from "./footer.styles";
  
function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <FooterWrapper>
      <Container>
        <div className="footer-top">
          <div className="footer-list grid">
            {FOOTER_LINKS?.map((footerLink) => {
              return <FooterItem key={footerLink.id} data={footerLink} />;
            })} 
          </div>
        </div>
        <div className="footer-bottom flex items-center justify-between">
          <Paragraph className="copyright-text">
            &copy; {currentYear} StreamVibe. All rights reserved.
          </Paragraph>
          <ul className="flex items-center flex-wrap bottom-links">
            <li>
              <Link to="/terms" className="bottom-link">
                <Text>Terms of use</Text>
              </Link>
            </li>
            <li>
              <Link to="/terms" className="bottom-link">
                <Text>Privacy Police</Text>
              </Link>
            </li>
            <li>
              <Link to="/terms" className="bottom-link">
                <Text>Cookie Police</Text>
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </FooterWrapper>
  );
}

export default Footer;
interface LinksItem {
  link_name: string;
  link_url: string;
  link_icon?:string;
}

interface FooterItemProps {
  data: {
    id: number;
    link_title: string;
    link_type: string;
    links: LinksItem[];
  };
}



const FooterItem = ({ data }: FooterItemProps) => {
  console.log(data);
  return (
    <FooterItemWrapper>
      <h4 className="item-title text-xl capitalize font-semibold">
        {data?.link_title}
      </h4>
      {data?.link_type === "text" ? (
        <ul className="item-text-link">
          {data?.links.map((link, index: number) => (
            <li key={index}>
              <Link to={link.link_url}>
                <Text className="capitalize font-medium">{link.link_name}</Text>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <ul className="item-icons-links flex items-center items-warp">
          {data?.links.map((link, index: number) => (
            <li key={index}>
              <Link
                to={link.link_url}
                className="item-icon-link bg-black10 inline-flex items-center justify-center rounded-full"
              >
                <img src={link.link_icon} />
              </Link>
            </li>
          ))}
        </ul>
      )}
    </FooterItemWrapper>
  );
};
