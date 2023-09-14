import React from "react";
import { Button } from "@mantine/core";

export function CustomButton({
  variant,
  disabled,
  children,
  compact,
  onClick
}: ButtonProps) {
  return (
    <Button
      variant={variant}
      disabled={disabled}
      onClick={onClick}
      compact={compact}
    >
      {children}
    </Button>
  );
}

export type ButtonProps = {
  variant?: "default" | "outline" | "light" | "subtle";
  disabled?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
  compact?: boolean;
};
