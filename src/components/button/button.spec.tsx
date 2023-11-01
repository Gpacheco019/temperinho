import React from 'react';
import { MdAdd } from 'react-icons/md';

import { act, fireEvent } from '@testing-library/react';

import { createSetupToTests } from '../../utils/';

import { Button } from '../../components/button';
import { ButtonProps } from '../../components/button/types';
import { theme } from '../../styles/index';

const setup = createSetupToTests<ButtonProps>({ children: 'Click me' }, Button);

describe('<Button />', () => {
  it('should render the small size by default', () => {
    const { container, getByRole } = setup();

    expect(container.firstChild).toMatchSnapshot();
    expect(getByRole('button', { name: /Click me/i })).toHaveStyle({
      height: theme.spacings.medium,
      padding: `${theme.spacings.xxsmall} ${theme.spacings.xsmall}`
    });
  });

  it('should render the mini size', () => {
    const { getByRole } = setup({ size: 'mini' });

    expect(getByRole('button', { name: /Click me/i })).toHaveStyle({
      height: theme.spacings.small
    });
  });

  it('should render the big size', () => {
    const { getByRole } = setup({ size: 'big' });

    expect(getByRole('button', { name: /Click me/i })).toHaveStyle({
      height: theme.spacings.large,
      padding: `${theme.spacings.xxsmall} ${theme.spacings.xsmall}`
    });
  });

  it('should render primary variant', () => {
    const { getByRole } = setup({ square: true });

    expect(getByRole('button', { name: /Click me/i })).toHaveStyle({
      backgroundColor: theme.colors.primary.orange,
      color: theme.colors.neutral.white
    });
  });

  it('should render secondary variant', () => {
    const { getByRole } = setup({
      variant: 'secondary',
      colorVariation: 'neutral.darkGrey'
    });

    expect(getByRole('button', { name: /Click me/i })).toHaveStyle({
      color: theme.colors.neutral.darkGrey
    });
  });

  it('should render third button variant', () => {
    const { getByRole } = setup({
      variant: 'third',
      colorVariation: 'neutral.darkGrey'
    });

    expect(getByRole('button', { name: /Click me/i })).toHaveStyle({
      color: theme.colors.neutral.darkGrey,
      border: `0.1rem solid ${theme.colors.neutral.darkGrey}`
    });
  });

  it('should render a fullWidth variant', () => {
    const { getByRole } = setup({ fullWidth: true });

    expect(getByRole('button', { name: /Click me/i })).toHaveStyle({
      width: '100%'
    });
  });

  it('should render an icon variant', () => {
    const { getByText, getByTestId } = setup({
      icon: <MdAdd data-testid="icon" />
    });

    expect(getByText(/Click me/i)).toBeInTheDocument();
    expect(getByTestId('icon')).toBeInTheDocument();
  });

  it('should render a square variant', () => {
    const { getByRole } = setup({ square: true });

    expect(getByRole('button', { name: /Click me/i })).toHaveStyle({
      backgroundColor: theme.colors.primary.orange
    });
  });

  it('should render a circle variant', () => {
    const { getByRole } = setup({ square: true, circle: true });

    expect(getByRole('button', { name: /Click me/i })).toHaveStyle({
      borderRadius: '50%'
    });
  });

  it('should render a disabled Button', () => {
    const { getByRole } = setup({ disabled: true });

    expect(getByRole('button', { name: /Click me/i })).toHaveStyleRule(
      'cursor',
      'not-allowed',
      {
        modifier: ':disabled'
      }
    );
  });

  it('should render a loading Button', () => {
    const { getByLabelText } = setup({ disabled: true, loading: true });

    expect(getByLabelText('carregando')).toBeInTheDocument();
  });

  describe(' Button with timeout', () => {
    it('should render a Button with timeout', () => {
      const { getByText } = setup({ timeout: 10, children: 'texto' });

      expect(getByText('texto (10)')).toBeInTheDocument();
    });

    it('should render a Button with timeout', () => {
      const onClick = jest.fn();
      const { getByText } = setup({
        timeout: 0,
        children: 'texto',
        onClick: onClick
      });
      const textButton = getByText('texto');

      expect(textButton).toBeInTheDocument();

      fireEvent.click(textButton);
      expect(onClick).toBeCalled();
      expect(onClick).toBeCalledWith(expect.anything());
    });

    it('should render with timer running', () => {
      jest.useFakeTimers();
      jest.spyOn(global, 'setInterval');
      const handleSubmit = jest.fn();
      setup({
        onClick: handleSubmit,
        timeout: 1
      });
      act(() => {
        jest.runOnlyPendingTimers();
      });

      expect(setInterval).toHaveBeenCalledTimes(2);
    });
  });
});
