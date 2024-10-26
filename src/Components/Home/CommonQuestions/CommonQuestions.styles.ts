import styled from "styled-components";
import { media } from "../../../Styles/theme/theme";

export const CommonWrapper = styled.section`
  .common-q-list {
    grid-template-columns: repeat(2, 1fr);

    .q-list-one,
    .q-list-two {
      .item {
        &:last-child {
          &::after {
            display: none;
          }
        }
      }
    }
    ${media.lg`
      grid-template-columns:100%;
      .q-list-one{
        .item{
          &:last-child{
            &::after{
              display: block;
            }
          }
        }
      }
      `}
  }
`;

export const CommonQItemWrapper = styled.div`
  position: relative;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    height: 1px;
    width: 100%;
    background: linear-gradient(
      90deg,
      rgba(229, 0, 0, 0) 0%,
      #e50000 16.67%,
      rgba(229, 0, 0, 0) 100%
    );
  }
  &.no-b-gradient{
    &::after{
      display: none;
    }
  }
  .item-grid{
    grid-template-columns: 52px auto;
    column-gap: 20px;
    padding:30px
  }
`;
