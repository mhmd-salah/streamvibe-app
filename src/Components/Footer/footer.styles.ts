import { media, theme } from "./../../Styles/theme/theme";
import { styled } from "styled-components";

export const FooterWrapper = styled.footer`
  padding-top: 60px;
  margin-inline: auto;

  ${media.xl`
        padding-top: 40px;
    `}

  ${media.lg`
        padding-top: 30px;
    `}

    ${media.sm`
        padding-top: 20px;
    `}
    .footer-top {
    margin-bottom: 60px;

    ${media.lg`
        margin-bottom: 40px;
    `}
  }
  .footer-list {
    grid-template-columns: repeat(6, 1fr);
    gap: 20px;

    ${media.lg`
     grid-template-columns:repeat(2,1fr); 
    `}
    ${media.xs`
     grid-template-columns:100%; 
     text-align:center;
    `}
  }
  .footer-bottom {
    column-gap: 40px;
    row-gap: 16px;
    padding-top: 24px;
    border-top: 1px solid ${theme.colors.black15};

    ${media.lg`
        flex-direction:column;
      
      `}
    .bottom-links {
      ${media.sm`
            justify-content:center;
          `}
          .bottom-links{
            padding:0 20px;
            display:inline-flex;
            justify-content:center;
            border-right:1px solid ${theme.colors.black15}
          }
    }
  }
`;

export const FooterItemWrapper = styled.div``;
