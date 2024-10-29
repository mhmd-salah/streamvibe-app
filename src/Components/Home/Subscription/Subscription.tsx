import { SUBSCRIPTIONS } from "../../../Constant/mockData";
import { BaseLinkSecondary } from "../../../Styles/components/Button";
import {
  Container,
  HeadingTitleMd,
  Paragraph,
} from "../../../Styles/global/default";
import SectionTitle from "../../Common/SectionTitle/SectionTitle";
import {
  SubscriptionItemWrapper,
  SubscriptionWrapper,
} from "./Subscription.style";

function Subscription() {
  return (
    <SubscriptionWrapper>
      <SectionTitle
        title={"Choose the plan that's right for you"}
        text={
          "Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!"
        }
      />
      <Container>
        <div className="subs-content">
          <div className="subs-list grid">
            {SUBSCRIPTIONS?.map((subscription) => (
              <SubscriptionItem
                key={subscription.id}
                subscription={subscription}
              />
            ))}
          </div>
        </div>
      </Container>
    </SubscriptionWrapper>
  );
}

export default Subscription;

interface props {
  subscription: {
    id: string;
    plan: string;
    description: string;
    monthly_price: number;
    yearly_price: number;
  };
}

const SubscriptionItem = ({ subscription }: props) => {
  return (
    <SubscriptionItemWrapper className="bg-black10 flex flex-col justify-between">
      <div className="item-top">
        <HeadingTitleMd>{subscription.plan}</HeadingTitleMd>
        <Paragraph>{subscription.description}</Paragraph>
      </div>
      <div className="item-bottom">
        <div className="item-price flex items-baseline flex-wrap">
          <p className="item-price-text font-semibold">
            ${subscription.monthly_price}
          </p>
        </div>

        <div className="item-btn-group flex item-center flex-wrap">
          <BaseLinkSecondary to={""} className="item-btn">
            <span className="btn-text">Start Free Trial</span>
          </BaseLinkSecondary>
          <BaseLinkSecondary to={""} className="item-btn">
            <span className="btn-text">Choose Plan</span>
          </BaseLinkSecondary>
        </div>
      </div>
    </SubscriptionItemWrapper>
  );
};
