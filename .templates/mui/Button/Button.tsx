import React from "react";
import Button from '@mui/material/Button';

export function CustomButton({
  variant,
  href,
  disabled,
  children,
  color,
  size,
  onClick
}: ButtonProps) {
  return (
    <Button
      variant={variant}
      href={href}
      disabled={disabled}
      color={color}
      size={size}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}

export type ButtonProps = {
  variant?: "text" | "contained" | "outlined";
  color?: "secondary" | "success" | "error";
  size?: "small" | "medium" | "large";
  href?: string;
  disabled?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
};
