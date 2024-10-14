import { Icons } from "../../../assets/icons";

interface iprops {
  onClick: () => void;
}

function CustomPrevArrow({ onClick }: iprops) {
  return (
    <button
      className="custom-prev-arrow bg-black06 flex item-center justify-center"
      onClick={onClick}
    >
      <img src={Icons.ArrowLeft} alt="" />
    </button>
  );
}

export default CustomPrevArrow;
