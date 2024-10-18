import styled from "styled-components";
import { media, theme } from "../../../Styles/theme/theme";

export const StreamDevicesWrapper = styled.section`
  .stream-dev-list {
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;

    ${media.lg`
        grid-template-columns: repeat(2,1fr);
        gap:16px;
      `}
    ${media.sm`
        grid-template-columns: 100%;
      `}
  }

  .stream-dev-item {
    background: ${theme.linearGradient.full};
    padding: 40px;
    border-radius: 12px;
    border: 1px solid ${theme.colors.black15};

    ${media.xl`
        padding:30px;
      `}
    ${media.lg`
          padding:16px;
        `}
    .item-head {
      column-gap: 16px;
    }
    .item-icon {
      width: 60px;
      height: 60px;
      border-radius: 8px;
      border: 1px solid ${theme.colors.black15};
    }
    .icon-wrapper {
      width: 32px;
      height: 32px;
      img {
        width: auto;
        --a: 8deg; 
        aspect-ratio: 1;
        transform: perspective(400px) rotate3d(var(--i, 1, -1), 0, var(--a));
        mask: linear-gradient(135deg, #000c 40%, #000, #000c 60%) 100% 100%/240%
          240%;
        transition: 0.4s;
      }
      img:hover {
        --i: -1, 1;
        mask-position: 0 0;
      }
    }
    .item-body {
      margin-top: 30px;

      ${media.lg`
          margin-top:16px;
        `}
    }
  }
`;
