import { type ComponentPropsWithoutRef } from "react";

type TSvgProps = ComponentPropsWithoutRef<"svg">;

export type TIconLink = {
  text: string;
  href: string;
  icon: ({ ...props }: TSvgProps) => React.JSX.Element;
};
