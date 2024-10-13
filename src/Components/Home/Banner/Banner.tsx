import { Icons } from "../../../assets/icons";
import routeConstants from "../../../Constant/routeConstants";
import { BaseLinkPrimary } from "../../../Styles/components/Button";
import {
  Container,
  HeadingBanner,
  Paragraph,
} from "../../../Styles/global/default";
import { BannerWrapper } from "./Banner.styles";

function Banner() {
  return (
    <BannerWrapper>
      <div className="banner-img flex items-center justify-center">
        <img className="banner-icon" src={Icons.Streamvibe} alt="banner icon" />
      </div>
      <Container className="text-center">
        <div className="banner-content mx-auto">
          <HeadingBanner>The Best Streaming Experience</HeadingBanner>
          <Paragraph className="banner-text text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            vero blanditiis mollitia a ipsam, officiis id. Veniam reprehenderit
            quibusdam eaque. Cum, et placeat rem asperiores consequatur aut
            aliquam explicabo ad.
          </Paragraph>
          <BaseLinkPrimary to={routeConstants.SHOWS}>
            <span className="btn-icon">
              <img src={Icons.Play} />
            </span>
            <span className="btn-text">Start Watching Now</span>
          </BaseLinkPrimary>
        </div>
      </Container>
    </BannerWrapper>
  );
}

export default Banner;
