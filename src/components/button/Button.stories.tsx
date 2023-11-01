import React from 'react';
import { MdAdd } from 'react-icons/md';

import { useArgs } from '@storybook/addons';
import { StoryFn, Meta } from '@storybook/react';

import { Button } from '.';
import { ButtonProps } from './types';

const meta: Meta = {
  title: 'Components/Button',
  component: Button,
  args: {
    square: false,
    circle: false
  },
  argTypes: {
    customLayoutColor: {
      control: {
        type: 'color'
      }
    },
    variant: {
      control: {
        type: 'radio',
        options: ['primary', 'secondary', 'third']
      }
    },
    size: {
      control: {
        type: 'radio',
        options: ['mini', 'small', 'big']
      }
    },
    colorVariation: {
      control: {
        type: 'radio',
        options: [
          'orange',
          'green',
          'lightGreen',
          'red',
          'darkBlue',
          'blue',
          'black',
          'darkGrey',
          'grey',
          'lightGrey',
          'extraLightGrey',
          'white'
        ]
      }
    },
    onClick: { action: 'onClick called' }
  }
};

export default meta;

export const Template: StoryFn<ButtonProps> = ({ ...args }) => (
  <Button variant="primary" {...args}>
    children
  </Button>
);

export const Square: StoryFn<ButtonProps> = ({ ...args }) => (
  <Button variant="primary" square {...args}>
    <MdAdd size={24} />
  </Button>
);

export const WithIcon: StoryFn<ButtonProps> = (args) => <Button {...args} />;

WithIcon.args = {
  children: 'with icon',
  icon: <MdAdd size={24} />
};

export const Circle: StoryFn<ButtonProps> = (args) => <Button {...args} />;

Circle.args = {
  circle: true,
  square: true,
  icon: <MdAdd size={24} />,
  iconPosition: 'right'
};

export const FullWidth: StoryFn<ButtonProps> = ({ ...args }) => (
  <Button variant="primary" fullWidth {...args}>
    Button
  </Button>
);

export const Disabled: StoryFn<ButtonProps> = ({ ...args }) => (
  <Button variant="primary" disabled {...args}>
    Disabled
  </Button>
);

export const LoadingOnClick: StoryFn<ButtonProps> = ({ ...args }) => {
  const [, updateArgs] = useArgs();

  function handleButtonClick() {
    updateArgs({ loading: true });
  }

  return (
    <Button onClick={handleButtonClick} fullWidth variant="primary" {...args}>
      Loading On Click
    </Button>
  );
};

export const Timeout: StoryFn<ButtonProps> = ({ ...args }) => (
  <Button timeout={10} {...args}>
    children
  </Button>
);
