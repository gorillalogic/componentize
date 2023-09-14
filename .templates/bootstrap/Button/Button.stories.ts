import { CustomButton } from './Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const meta: Object = {
  title: 'ReactBootstrap/CustomButton',
  component: CustomButton,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['primary', 'secondary', 'success', 'warning', 'danger', 'info', 'light', 'dark', 'link', 'outline-primary', 'outline-secondary', 'outline-success', 'outline-warning', 'outline-danger', 'outline-info', 'outline-light', 'outline-dark'] },
    disabled: { control: 'boolean' },
    size: { control: 'select', options: ['sm', 'lg'] },
  },
};

export default meta;
type Story = Object;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    children: 'Success Button',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    children: 'Warning Button',
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    children: 'Danger Button',
  },
};

export const Info: Story = {
  args: {
    variant: 'info',
    children: 'Info Button',
  },
};

export const Light: Story = {
  args: {
    variant: 'light',
    children: 'Light Button',
  },
};

export const Dark: Story = {
  args: {
    variant: 'dark',
    children: 'Dark Button',
  },
};

export const OutlinedPrimary: Story = {
  args: {
    variant: 'outline-primary',
    children: 'Outlined Primary Button',
  },
};

export const OutlinedSecondary: Story = {
  args: {
    variant: 'outline-secondary',
    children: 'Outlined Secondary Button',
  },
};

export const OutlinedSuccess: Story = {
  args: {
    variant: 'outline-success',
    children: 'Outlined Success Button',
  },
};

export const OutlinedWarning: Story = {
  args: {
    variant: 'outline-warning',
    children: 'Outlined Warning Button',
  },
};

export const OutlinedDanger: Story = {
  args: {
    variant: 'outline-danger',
    children: 'Outlined Danger Button',
  },
};

export const OutlinedInfo: Story = {
  args: {
    variant: 'outline-info',
    children: 'Outlined Info Button',
  },
};

export const OutlinedLight: Story = {
  args: {
    variant: 'outline-light',
    children: 'Outlined Light Button',
  },
};

export const OutlinedDark: Story = {
  args: {
    variant: 'outline-dark',
    children: 'Outlined Dark Button',
  },
};

export const Link: Story = {
  args: {
    variant: 'primary',
    href: 'https://www.google.com',
    children: 'Link Button',
  },
};

export const Size: Story = {
  args: {
    variant: 'primary',
    size: 'lg',
    children: 'Large Size Button',
  },
};

export const Disabled: Story = {
  args: {
    variant: 'primary',
    disabled: true,
    children: 'Disabled Button',
  },
};
