import { BaseLinkPrimary } from "../../../Styles/components/Button";
import {
  Container,
  HeadingTitle,
  Paragraph,
} from "../../../Styles/global/default";
import { FreeTrialWrapper } from "./FreeTrial.style";

const FreeTrial = () => {
  return (
    <FreeTrialWrapper className="section-py">
      <Container>
        <div className="free-trial-content bg-black06 flex  items-center justify-between flex-wrap">
          <HeadingTitle>Start your free trial today!</HeadingTitle>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis
            aspernatur dolore laborum dicta architecto? Doloribus magnam
            reiciendis eaque incidunt nemo!
          </Paragraph>
        </div>
        <BaseLinkPrimary to={""}>Start a Free Trial</BaseLinkPrimary>
      </Container>
    </FreeTrialWrapper>
  );
};

export default FreeTrial;
