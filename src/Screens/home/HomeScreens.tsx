import { useEffect } from "react";
import { scrollToTop } from "../../utilities/ScrollToTop";
import { Banner } from "../../Components";

function HomeScreens() {
  useEffect(()=>scrollToTop(),[])
  return (
    <div className="pg-home">
      <Banner/>
    </div>
  )
}

export default HomeScreens;
