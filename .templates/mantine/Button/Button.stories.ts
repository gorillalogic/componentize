import { CustomButton } from './Button';

const meta = {
  title: 'Mantine/CustomButton',
  component: CustomButton,
  tags: ['autodocs'],
  argTypes: {
    color: { control: 'color' },
    variant: { control: 'select', options: ['default', 'filled', 'light', 'subtle', 'outline'] },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = Object;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    variant: 'default',
    children: 'Default Button',
  },
};

export const Filled: Story = {
  args: {
    variant: 'filled',
    children: 'Filled Button',
  },
};

export const Light: Story = {
  args: {
    variant: 'light',
    children: 'Light Button',
  },
};

export const Subtle: Story = {
  args: {
    variant: 'subtle',
    children: 'Subtle Button',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline Button',
  },
};

export const Compact: Story = {
  args: {
    variant: 'default',
    compact: true,
    children: 'Compact Button',
  },
};

export const Disabled: Story = {
  args: {
    variant: 'default',
    disabled: true,
    children: 'Disabled Button',
  },
};
