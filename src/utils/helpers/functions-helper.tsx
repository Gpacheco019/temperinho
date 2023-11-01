import { RenderOptions, render } from '@testing-library/react';
import { DefaultTheme, ThemeProvider } from 'styled-components';

import { theme } from 'styles';

export const getColorByVariant = (theme: DefaultTheme, colorParam: string) => {
  const [type, color]: string[] = colorParam.split('.') || [];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const colorTheme = (theme.colors as Record<string, any>)[type][color];

  return colorTheme;
};

type SetupReturn<T> = {
  state: T;
  ui: (props?: Partial<T>) => React.ReactElement;
} & ReturnType<typeof render>;

export function createSetupToTests<T = Record<string, unknown>>(
  mockProps: T,
  Component: React.FC<T>,
  options?: RenderOptions
) {
  return function setup(props?: Partial<T>): SetupReturn<T> {
    const mock: T = {
      ...mockProps,
      ...props
    };
    const ui = (componentProps: Partial<T> = {}) => {
      const finalMock = {
        ...mock,
        ...componentProps
      };

      return (
        <ThemeProvider theme={theme}>
          <Component {...finalMock} />
        </ThemeProvider>
      );
    };

    return { state: mock, ui, ...render(ui(mock), options) };
  };
}
