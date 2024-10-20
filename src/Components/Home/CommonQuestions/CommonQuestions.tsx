import { useState } from "react";
import { FAQS } from "../../../Constant/mockData";
import { Container, Paragraph } from "../../../Styles/global/default";
import SectionTitle from "../../Common/SectionTitle/SectionTitle";
import { CommonQItemWrapper, CommonWrapper } from "./CommonQuestions.styles";
import { Icons } from "../../../assets/icons";

function CommonQuestions() {
  const halfValue = Math.ceil(FAQS.length / 2);
  return (
    <CommonWrapper className="section-y">
      <SectionTitle
        title="Frequently asked questions"
        text="Have a question?"
        rightContentType="title-button"
      />
      <Container>
        <div className="common-q-content">
          <div className="common-q-list grid">
            {/* first half of FAQ */}
            <div className="q-list-one">
              {FAQS?.slice(0, halfValue).map((faq, index) => {
                let tempIndex = index + 1;
                return (
                  <CommonQuestionItem
                    key={faq.id}
                    data={faq}
                    count={tempIndex}
                  />
                );
              })}
            </div>
            {/* second half of FAQ */}
            <div className="q-list-two">
              {FAQS?.slice(halfValue).map((faq, index) => {
                const tempIndex = halfValue + (index + 1);
                return (
                  <CommonQuestionItem
                    key={faq.id}
                    data={faq}
                    count={tempIndex}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </CommonWrapper>
  );
}

export default CommonQuestions;

interface CommonQuestionItemProps {
  data: {
    id: string;
    question: string;
    answer: string;
  };
  count: number;
}

const CommonQuestionItem: React.FC<CommonQuestionItemProps> = ({
  data,
  count,
}) => {
  const tempIndex = count < 10 ? `0${count}` : count;
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleAcccordion = () => {
    setIsCollapsed(!isCollapsed);
  };
  return (
    <CommonQItemWrapper className="item">
      <div className="item-grid grid">
        <div className="item-sm bg-black12 text-white flex item-center justify-center text-xl font-semibold">
          {tempIndex}
        </div>
        <div className="item-body">
          <div className="item-head flex item-start justify-between">
            <h4 className="item-title text-xl">{data.question}</h4>
            <button className="item-btn bg-transparent">
              {!isCollapsed ? (
                <img src={Icons.Plus} alt="plus" />
              ) : (
                <img src={Icons.Minus} alt="minus" />
              )}
            </button>
          </div>
          <div className={`item-text ${!isCollapsed?"show":""}`}>
            <Paragraph>{data.}</Paragraph>
          </div>
        </div>
      </div>
    </CommonQItemWrapper>
  );
};
