declare module "@my-monorepo/core" {
  import React from "react";

  export interface ButtonProps {
    children: React.ReactNode;
    onClick: () => void;
  }

  export const Button: React.FC<ButtonProps>;
  export const logger: (message: string) => void;
}
