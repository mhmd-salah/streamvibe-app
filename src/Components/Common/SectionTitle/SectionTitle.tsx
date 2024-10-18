import { BaseLinkPrimary } from "../../../Styles/components/Button";
import {
  Container,
  HeadingTitle,
  Paragraph,
} from "../../../Styles/global/default";
import { SectionTitleWrapper } from "./SectionTitle.styles";

interface Iprops {
  title: string;
  text: string;
  rightContentType: string;
}

function SectionTitle({ title, text, rightContentType }: Iprops) {
  return (
    <SectionTitleWrapper>
      <Container>
        <div className="title-grid flex item-center justify-between flex-wrap">
          <div className="title-left">
            <HeadingTitle>{title}</HeadingTitle>
            <Paragraph>{text}</Paragraph>
          </div>
          <div className="title-right">
            {rightContentType === "title-button" && (
              <BaseLinkPrimary to={""}>
                <span className="btn-text">Ask A Qusetion</span>
              </BaseLinkPrimary>
            )}
          </div>
        </div>
      </Container>
    </SectionTitleWrapper>
  );
}

export default SectionTitle;
