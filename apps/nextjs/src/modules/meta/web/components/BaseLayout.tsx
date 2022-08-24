import React, { FC } from "react";

export type BaseLayoutProps = {
  children: React.ReactNode;
};
export const BaseLayout: FC<BaseLayoutProps> = ({ children }) => {
  return <div className="flex flex-col min-h-screen">{children}</div>;
};
