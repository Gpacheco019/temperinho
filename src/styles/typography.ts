import { css } from 'styled-components';

export const typography = {
  SmallText: {
    Caption1: css`
      font-size: ${({ theme }) => theme.font.sizes.xsmall};
      font-weight: ${({ theme }) => theme.font.regular};
      line-height: ${({ theme }) => theme.spacings.xsmall};
    `,
    Caption2: css`
      font-size: 1rem;
      line-height: ${({ theme }) => theme.spacings.xsmall};
      font-weight: ${({ theme }) => theme.font.regular};
    `,
    Link1: css`
      font-size: ${({ theme }) => theme.font.sizes.xsmall};
      font-weight: ${({ theme }) => theme.font.medium};
      line-height: ${({ theme }) => theme.spacings.xsmall};
    `
  },
  Subtitles: {
    Sub1: css`
      display: block;
      font-size: ${({ theme }) => theme.font.sizes.medium};
      font-weight: ${({ theme }) => theme.font.medium};
      line-height: 2.4rem;
    `,
    Sub2: css`
      font-size: ${({ theme }) => theme.font.sizes.small};
      font-weight: ${({ theme }) => theme.font.medium};
      line-height: ${({ theme }) => theme.spacings.small};
    `
  },
  Text: {
    Body1: css`
      font-size: ${({ theme }) => theme.font.sizes.medium};
      line-height: ${({ theme }) => theme.spacings.small};
      font-weight: ${({ theme }) => theme.font.regular};
    `,
    Body2: css`
      font-size: ${({ theme }) => theme.font.sizes.small};
      line-height: 2rem;
      font-weight: ${({ theme }) => theme.font.regular};
    `,
    Body2Semibold: css`
      font-size: ${({ theme }) => theme.font.sizes.small};
      line-height: 2rem;
      font-weight: ${({ theme }) => theme.font.semibold};
    `,
    Link2: css`
      font-size: ${({ theme }) => theme.font.sizes.small};
      line-height: ${({ theme }) => theme.spacings.xsmall};
      font-weight: ${({ theme }) => theme.font.regular};
    `
  },
  Titles: {
    H1: css`
      font-weight: ${({ theme }) => theme.font.medium};
      font-size: 4.8rem;
      line-height: ${({ theme }) => theme.spacings.xxlarge};
    `,
    H2: css`
      font-weight: ${({ theme }) => theme.font.medium};
      font-size: 4rem;
      line-height: ${({ theme }) => theme.spacings.xlarge};
    `,
    H3: css`
      font-weight: ${({ theme }) => theme.font.medium};
      font-size: 3.2rem;
      line-height: ${({ theme }) => theme.spacings.large};
    `,
    H4: css`
      font-weight: ${({ theme }) => theme.font.medium};
      font-size: 2.4rem;
      line-height: ${({ theme }) => theme.spacings.medium};
    `,
    H5: css`
      font-weight: ${({ theme }) => theme.font.medium};
      font-size: ${({ theme }) => theme.font.sizes.xlarge};
      line-height: ${({ theme }) => theme.spacings.small};
    `,
    H6: css`
      font-size: ${({ theme }) => theme.font.sizes.large};
      font-weight: ${({ theme }) => theme.font.medium};
      line-height: ${({ theme }) => theme.spacings.small};
    `
  },
  Buttons: {
    Button1: css`
      text-decoration: none;
      background-color: transparent;
      text-transform: uppercase;
      letter-spacing: 0.1rem;
      border: none;
      font-size: ${({ theme }) => theme.font.sizes.small};
      font-weight: ${({ theme }) => theme.font.medium};
      line-height: ${({ theme }) => theme.spacings.small};
      cursor: pointer;
    `,
    Button2: css`
      text-decoration: none;
      background-color: transparent;
      text-transform: uppercase;
      letter-spacing: 0.1rem;
      border: none;
      font-size: ${({ theme }) => theme.font.sizes.xsmall};
      font-weight: ${({ theme }) => theme.font.medium};
      line-height: ${({ theme }) => theme.spacings.small};
      cursor: pointer;
    `
  }
};
