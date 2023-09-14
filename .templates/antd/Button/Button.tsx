import React from "react";
import { Button } from 'antd';

export function CustomButton({
  type,
  disabled,
  children,
  loading,
  onClick
}: ButtonProps) {
  return (
    <Button
      type={type}
      disabled={disabled}
      onClick={onClick}
      loading={loading}
    >
      {children}
    </Button>
  );
}

export type ButtonProps = {
  type?: "primary" | "dashed" | "text" | "link";
  disabled?: boolean;
  loading?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
};
