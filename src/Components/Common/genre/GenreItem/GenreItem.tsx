import { GenreItemWrapper } from "./GenreItem.styles";

interface Iprops {
  data: {
    id: string;
    thumbnail:string,
    name:string,
  };
}

const GenreItem = ({data}:Iprops) => {
  return <GenreItemWrapper>
    <div className="item-content">
      <div className="item-img">
        <img src={data.thumbnail} alt="" />
      </div>
      <div className="item-body flex items-center justify-between">
        <div className="item-title font-semibold">{data.name}</div>
      </div>
    </div>
  </GenreItemWrapper>;
};
export default GenreItem;
