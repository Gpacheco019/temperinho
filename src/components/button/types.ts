import { ButtonHTMLAttributes, MouseEvent } from 'react';

import { ColorVariation } from '../../types';

export type ButtonTypes = ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = ButtonTypes & {
  customLayoutColor?: string;
  size?: 'big' | 'small' | 'mini';
  variant?: 'primary' | 'secondary' | 'third';
  colorVariation?: ColorVariation;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  loading?: boolean;
  square?: boolean;
  disabled?: boolean;
  circle?: boolean;
  icon?: JSX.Element;
  timeout?: number;
  onClick?: (event?: MouseEvent<HTMLButtonElement>) => void;
};

export type IconProps = Record<
  | 'primary.orange'
  | 'primary.green'
  | 'secondary.lightGreen'
  | 'secondary.red'
  | 'secondary.darkBlue'
  | 'secondary.blue'
  | 'neutral.black'
  | 'neutral.grey'
  | 'neutral.darkGrey'
  | 'neutral.lightGrey'
  | 'neutral.extraLightGrey'
  | 'neutral.white',
  ButtonProps
>;

export type WrapperProps = {
  hasIcon: boolean;
} & Pick<
  ButtonProps,
  | 'customLayoutColor'
  | 'size'
  | 'fullWidth'
  | 'square'
  | 'variant'
  | 'circle'
  | 'colorVariation'
>;
