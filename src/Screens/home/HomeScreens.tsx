import { useEffect } from "react";
import { scrollToTop } from "../../utilities/ScrollToTop";
import { Banner, Genre } from "../../Components";
import StreamDevices from "../../Components/Home/StreamDevices/StreamDevices";
import CommonQuestions from "../../Components/Home/CommonQuestions/CommonQuestions";

function HomeScreens() {
  useEffect(()=>scrollToTop(),[])
  return (
    <div className="pg-home">
      <Banner/>
      <Genre/>
      <StreamDevices/>
      <CommonQuestions/>
    </div>
  )
}

export default HomeScreens;
