import React from "react";
import Button from 'react-bootstrap/Button';

export function CustomButton({
  variant,
  href,
  disabled,
  children,
  size,
  onClick
}: ButtonProps) {
  return (
    <Button
      variant={variant}
      href={href}
      disabled={disabled}
      size={size}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}

export type ButtonProps = {
  variant?: "primary" | "secondary" | "success" | "warning" | "danger" | "info" | "light" | "dark" | "link" | "outline-primary" | "outline-secondary" | "outline-success" | "outline-warning" | "outline-danger" | "outline-info" | "outline-light" | "outline-dark";
  size?: "sm" | "lg";
  href?: string;
  disabled?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
};
