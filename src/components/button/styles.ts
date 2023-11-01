import { motion } from 'framer-motion';
import styled, { css, DefaultTheme } from 'styled-components';

import { getColorByVariant } from '../../utils';

import { typography } from '../../styles';
import { ButtonProps, WrapperProps } from './types';

const spinTransition = {
  loop: Infinity,
  ease: 'linear',
  duration: 1
};

const wrapperModifiers = {
  mini: (theme: DefaultTheme) => css`
    height: ${theme.spacings.small};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
  `,
  small: (theme: DefaultTheme) => css`
    height: ${theme.spacings.medium};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
  `,
  big: (theme: DefaultTheme) => css`
    height: ${theme.spacings.large};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
  `,
  primary: (
    theme: DefaultTheme,
    colorVariation: WrapperProps['colorVariation'],
    customLayoutColor: WrapperProps['customLayoutColor']
  ) => css`
    background-color: ${colorVariation
      ? getColorByVariant(theme, colorVariation)
      : customLayoutColor || theme.colors.primary.orange};
    color: ${theme.colors.neutral.white};
    border: 0;
  `,
  secondary: (
    theme: DefaultTheme,
    colorVariation: WrapperProps['colorVariation'],
    customLayoutColor: WrapperProps['customLayoutColor']
  ) => css`
    background-color: transparent;
    border: 0;
    color: ${colorVariation
      ? getColorByVariant(theme, colorVariation)
      : customLayoutColor || theme.colors.primary.orange};
  `,
  third: (
    theme: DefaultTheme,
    colorVariation: WrapperProps['colorVariation'],
    customLayoutColor: WrapperProps['customLayoutColor']
  ) => css`
    background-color: transparent;
    color: ${colorVariation
      ? getColorByVariant(theme, colorVariation)
      : customLayoutColor || theme.colors.primary.orange};
    border: 0.1rem solid
      ${colorVariation
        ? getColorByVariant(theme, colorVariation)
        : customLayoutColor || theme.colors.primary.orange};
  `,
  withIcon: (theme: DefaultTheme) => css`
    svg {
      & + span {
        margin-left: ${theme.spacings.xxxsmall};
      }
    }
  `,
  fullWidth: () => css`
    width: 100%;
  `,
  square: (theme: DefaultTheme) => css`
    width: 3.6rem;
    height: 3.6rem;
    padding: ${theme.spacings.xxsmall};

    &:hover {
      filter: brightness(90%);
      transition: filter 0.2s;
    }
  `,
  circle: (theme: DefaultTheme) => css`
    border-radius: 50%;
    padding: ${theme.spacings.xxsmall};
  `,
  disabled: () => css`
    &:disabled {
      cursor: not-allowed;
      opacity: 0.3;
    }
  `
};

export const Wrapper = styled.button<WrapperProps>`
  ${({
    theme,
    customLayoutColor,
    size,
    fullWidth,
    hasIcon,
    square,
    disabled,
    variant,
    colorVariation,
    circle
  }) => css`
    ${typography.Buttons.Button1}

    ${!!size && wrapperModifiers[size](theme)};
    ${!!variant &&
    wrapperModifiers[variant](theme, colorVariation, customLayoutColor)};
    ${!!hasIcon && wrapperModifiers.withIcon(theme)};
    ${circle
      ? wrapperModifiers.circle(theme)
      : `border-radius: ${theme.spacings.xxxsmall};`};
    ${!!fullWidth && wrapperModifiers.fullWidth()};
    ${!!square && wrapperModifiers.square(theme)};
    ${disabled && wrapperModifiers.disabled()};
  `}

  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const Icon = styled.div<ButtonProps>`
  display: flex;
  order: ${({ iconPosition }) => (iconPosition === 'right' ? 1 : 0)};
`;

export const Loading = styled(motion.span).attrs({
  transition: spinTransition,
  animate: { rotate: 360 }
})`
  ${({ theme }) => css`
    display: block;
    width: 2rem;
    height: 2rem;
    border: 0.2rem solid ${theme.colors.neutral.darkGrey};
    border-top: 0.2rem solid ${theme.colors.neutral.white};
    border-radius: 50%;
    box-sizing: border-box;
  `}
`;
