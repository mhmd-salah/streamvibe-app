import { Link } from "react-router-dom";
import { FOOTER_LINKS } from "../../Constant/mockData";
import { Container, Text } from "../../Styles/global/default";
import { FooterWrapper } from "./footer.styles";

function Footer() {
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
      </Container>
    </FooterWrapper>
  );
}

export default Footer;
interface LinksItem {
  link_name: string;
  link_url: string;
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
    <FooterWrapper>
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
        <ul className="item-icons-links flex items-center items-warp"></ul>
      )}
    </FooterWrapper>
  );
};
