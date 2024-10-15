import { Icons } from "../../../assets/icons";

interface Iprops {
  onClick: () => void;
}

function CustomNextArrow({ onClick }: Iprops) {
  return (
    <button
      className="custom-next-arrow bg-black06 flex items-center justify-center"
      onClick={onClick}
    >
      
      <img src={Icons.ArrowRight} alt="" />
    </button>
  );
}

export default CustomNextArrow;
