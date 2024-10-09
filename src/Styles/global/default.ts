// Default styles - In the context of Styled Components, the default.js file is typically used to define reusable styled components that can be imported and used across various parts of your application.

import styled, { css } from "styled-components";
import { media, theme } from "../theme/theme";

export const PageWrapper = styled.div`
  overflow: hidden;
`;

// Heading components
export const HeadingBanner = styled.h1`
  font-size: ${theme.typography.fontSize.superTitle}; // 48px

  ${media.lg`
    font-size: 32px !important; // 32px
  `}

  ${media.lg`
    font-size: 24px !important; // 24px
  `}
`;

export const HeadingTitle = styled.h2`
  font-size: ${theme.typography.fontSize.title};

  ${media.lg`
    font-size: 24px !important;
  `}

  ${media.lg`
    font-size: 20px !important;
  `}
`;

export const HeadingTitleMd = styled.h3`
  font-size: 24px;

  ${media.xxl`
    font-size: 20px !important;
  `}

  ${media.lg`
    font-size: 18px !important;
  `}
`;



const commonText = css`
  font-size: ${theme.typography.fontSize.medium};
  color: ${theme.colors.gray60};
  ${media.sm`
      font-size:15px !important;
      line-height:1.6;     `}
  ${media.xs`
      font-size: 14px !important;
      line-height: 1.5;
    `}
`;

const commonTextStyles = css`
  font-size: ${theme.typography.fontSize.medium};
  line-height: ${theme.typography.lineHeight.medium};
  color: ${theme.colors.gray60};
  font-weight: ${theme.typography.fontWeight.regular};

  // max-width: 576px
  ${media.sm`
    font-size: 15px!important;
    line-height: 1.6;
  `}

  ${media.xs`
    font-size: 14px !important;
    line-height: 1.5;
  `}
`;

// Paragraph component
export const Paragraph = styled.p`
  ${commonTextStyles}
  p {
    ${commonTextStyles}; // applying to nested p tag also
  }
`;

export const Text = styled.p`
  ${commonTextStyles}
`;

// Container component
export const Container = styled.div`
  max-width: ${theme.breakpoints.xxxl};
  margin: 0 auto;
  padding-left: ${theme.spacing.md};
  padding-right: ${theme.spacing.md};
`;
