import { type ReactNode } from "react";

type TCardWithHeaderProps = {
  header: string;
  children: ReactNode;
};

const CardWithHeader = ({ header, children }: TCardWithHeaderProps) => {
  return (
    <div className="rounded-md border-2 border-ldPrimaryOrange-600">
      <div className="bg-primary px-4 py-2 text-center">
        <h4 className="font-bold text-white">{header}</h4>
      </div>
      <div className="p-4 sm:p-6">{children}</div>
    </div>
  );
};

export default CardWithHeader;
