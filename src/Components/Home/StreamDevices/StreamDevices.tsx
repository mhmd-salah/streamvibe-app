import { STREAM_DEVICES } from "../../../Constant/mockData";
import { Container, HeadingTitle, Paragraph } from "../../../Styles/global/default";
import SectionTitle from "../../Common/SectionTitle/SectionTitle";
import { StreamDevicesWrapper } from "./StreamDevices.styles";

function StreamDevices() {
  return (
    <StreamDevicesWrapper className="section-py ">
      <SectionTitle
        title="We Provide you streaming experience"
        text="with stream vibe you can enjoy"
        rightContentType=""
      />
      <Container>
        <div className="stream-dev-content">
          <div className="stream-dev-list grid">
            {STREAM_DEVICES?.map((streamDevices) => {
              return (
                <div className="stream-dev-item " key={streamDevices.id}>
                  <div className="item-head flex items-center justify-start">
                    <div className="item-icon bg-black10 flex items-center justify-center">
                      <div className="icon-wrapper flex items-center justify-center">
                        <img src={streamDevices.icon} alt="" />
                      </div>
                    </div>
                    <HeadingTitle className="item-title">
                      {streamDevices.device_name}
                    </HeadingTitle>
                  </div>
                  <div className="item-body">
                    <Paragraph>{streamDevices.description}</Paragraph>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </StreamDevicesWrapper>
  );
}

export default StreamDevices;
