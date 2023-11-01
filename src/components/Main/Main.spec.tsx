import { createSetupToTests } from 'utils';

import Main, { MainProps } from './Main';

const setup = createSetupToTests<MainProps>(
  { children: <h1>Next example</h1> },
  Main
);

describe('<Main />', () => {
  it('should render the component', () => {
    const { container, getByRole } = setup();

    expect(getByRole('heading', { name: /next example/i })).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });
});
