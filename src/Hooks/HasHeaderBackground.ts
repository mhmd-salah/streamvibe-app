import { useEffect, useState } from "react";

const useHeaderBackground = (scrollThresHold:number)=>{
  const [hasBackground, setHasBackground] = useState<boolean>(false);
  useEffect(()=>{
    const handleScroll =()=>{
      if (window.scrollY > scrollThresHold) {
        setHasBackground(true);
      } else {
        setHasBackground(false);
      }
    }
    window.addEventListener("scroll", handleScroll)
    return ()=>{
      window.removeEventListener("scroll", handleScroll);
    }
  },[scrollThresHold])
  return hasBackground
}

export default useHeaderBackground;