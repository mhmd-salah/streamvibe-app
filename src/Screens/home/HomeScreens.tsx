import { useEffect } from "react";
import { scrollToTop } from "../../utilities/ScrollToTop";
import { Banner, FreeTrial, Genre } from "../../Components";
import StreamDevices from "../../Components/Home/StreamDevices/StreamDevices";
import CommonQuestions from "../../Components/Home/CommonQuestions/CommonQuestions";
import Subscription from "../../Components/Home/Subscription/Subscription";


function HomeScreens() {
  useEffect(()=>scrollToTop(),[])
  return (
    <div className="pg-home">
      <Banner/>
      <Genre/>
      <StreamDevices/>
      <CommonQuestions/>
      <Subscription/>
      <FreeTrial/>
    </div>
  )
}

export default HomeScreens;
