import { useEffect } from "react";
import { scrollToTop } from "../../utilities/ScrollToTop";
import { Banner, Genre } from "../../Components";

function HomeScreens() {
  useEffect(()=>scrollToTop(),[])
  return (
    <div className="pg-home">
      <Banner/>
      <Genre/>
    </div>
  )
}

export default HomeScreens;
