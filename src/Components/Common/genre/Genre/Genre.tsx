import { Container } from "../../../../Styles/global/default";
import SectionTitle from "../../SectionTitle/SectionTitle";
import { GenreWrapper } from "./Genre.styles";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import { GENRES } from "../../../../Constant/mockData";
import GenreItem from "../GenreItem/GenreItem";
import { SliderWrapper } from "../../Slider/Slider.styles";
import Slider from "react-slick";

const Genre = () => {
  const settings = {
    dots: true,
    Infinity: true,
    autoPlay: true,
    autoPlaySpeed: 600,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 2,
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
    <GenreWrapper>
      <SectionTitle
        title="Explore our wide variety of categories"
        text="Whether you're looking for comedy to make you laugh, a drama to make you think or a documentary to learn something new"
        rightContentType="btn-text"
      />
      <Container>
        <SliderWrapper>
          <Slider {...settings} >
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
