import { CustomButton } from './Button';

const meta: Object = {
  title: 'MaterialUI/CustomButton',
  component: CustomButton,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['text', 'contained', 'outlined'] },
    disabled: { control: 'boolean' },
    color: { control: 'select', options: ["secondary", "success", "error"] },
    size: { control: 'select', options: ['small', 'medium', 'large'] },
  },
};

export default meta;
type Story = Object;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Text: Story = {
  args: {
    variant: 'text',
    children: 'Text Button',
  },
};

export const Contained: Story = {
  args: {
    variant: 'contained',
    children: 'Contained Button',
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    children: 'Outlined Button',
  },
};

export const Color: Story = {
  args: {
    variant: 'contained',
    color: 'success',
    children: 'Color Button',
  },
};

export const Link: Story = {
  args: {
    variant: 'contained',
    href: 'https://www.google.com',
    children: 'Link Button',
  },
};

export const Size: Story = {
  args: {
    variant: 'contained',
    size: 'large',
    children: 'Large Size Button',
  },
};

export const Disabled: Story = {
  args: {
    variant: 'contained',
    disabled: true,
    children: 'Disabled Button',
  },
};
