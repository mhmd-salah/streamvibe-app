import { useEffect } from "react";
import { scrollToTop } from "../../utilities/ScrollToTop";
import { Banner, Genre } from "../../Components";
import StreamDevices from "../../Components/Home/StreamDevices/StreamDevices";

function HomeScreens() {
  useEffect(()=>scrollToTop(),[])
  return (
    <div className="pg-home">
      <Banner/>
      <Genre/>
      <StreamDevices/>
    </div>
  )
}

export default HomeScreens;
