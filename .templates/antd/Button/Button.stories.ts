import { CustomButton } from './Button';

const meta = {
  title: 'AntDesign/CustomButton',
  component: CustomButton,
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', options: ['default', 'filled', 'light', 'subtle', 'outline'] },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
  },
};

export default meta;
type Story = Object;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    type: 'primary',
    children: 'Primary Button',
  },
};

export const Default: Story = {
  args: {
    type: 'default',
    children: 'Default Button',
  },
};

export const Dashed: Story = {
  args: {
    type: 'dashed',
    children: 'Dashed Button',
  },
};

export const Text: Story = {
  args: {
    type: 'text',
    children: 'Text Button',
  },
};

export const Link: Story = {
  args: {
    type: 'link',
    children: 'Link Button',
  },
};

export const Loading: Story = {
  args: {
    type: 'default',
    loading: true,
    children: 'Loading Button',
  },
};

export const Disabled: Story = {
  args: {
    variant: 'default',
    disabled: true,
    children: 'Disabled Button',
  },
};
