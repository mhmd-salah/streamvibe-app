import { Container } from "../../../../Styles/global/default";
import SectionTitle from "../../SectionTitle/SectionTitle";
import { GenreWrapper } from "./Genre.styles";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import { GENRES } from "../../../../Constant/mockData";
import GenreItem from "../GenreItem/GenreItem";
import { SliderWrapper } from "../../Slider/Slider.styles";
import Slider from "react-slick";
import CustomNextArrow from "../../Slider/CustomNextArrow";
import CustomPrevArrow from "../../Slider/CustomPrevArrow";

const Genre = () => {
  const settings = {
    dots: true,
    autoPlay: true,
    Infinity: true,
    autoPlaySpeed: 60,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 2,
    autoplay:true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <GenreWrapper className="section-y">
      <SectionTitle
        title="Explore our wide variety of categories"
        text="Whether you're looking for comedy to make you laugh, a drama to make you think or a documentary to learn something new"
        rightContentType="btn-text"
      />
      <Container>
        <SliderWrapper>
          <Slider
            {...settings}
            nextArrow={<CustomNextArrow onClick={() => {}} />}
            prevArrow={<CustomPrevArrow onClick={() => {}} />}
          >
            {GENRES?.map((genre) => (
              <GenreItem data={genre} key={genre.id} />
            ))} 
          </Slider>
        </SliderWrapper>
      </Container>
    </GenreWrapper>
  );
};

export default Genre;
