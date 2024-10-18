import { FAQS } from "../../../Constant/mockData";
import { Container } from "../../../Styles/global/default";
import SectionTitle from "../../Common/SectionTitle/SectionTitle";
import { CommonWrapper } from "./CommonQuestions.styles";

function CommonQuestions() {
  const halfValue = Math.ceil(FAQS.length / 2);
  return <CommonWrapper className="section-y">
    <SectionTitle title="Frequently asked questions" text="Have a question?" rightContentType="title-button" />
    <Container>
      <div className="common-q-content">
        <div className="common-q-list grid">
          <div className="q-list-one">
            {
              FAQS?.slice(0,halfValue).map((faq,index)=>{
                let tempIndex= index + 1;
                return (
                  <CommonQuestionItem key={faq.id} data={faq} count={tempIndex} />
                )
              })
            }
          </div>
        </div>
      </div>
    </Container>
  </CommonWrapper>;
}

export default CommonQuestions;


const CommonQuestionItem = ({data}:{id:string,question:string,answer:string})=>{
  return <h1>hi</h1>
}