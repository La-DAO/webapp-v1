import { type ReactNode } from "react";

type TCardWithHeaderProps = {
  header: string;
  content: ReactNode;
};

const CardWithHeader = ({ header, content }: TCardWithHeaderProps) => {
  return (
    <div className="rounded-md border-2 border-ldPrimaryOrange-600">
      <h4 className="px-4 py-5 text-xl font-medium text-primary sm:px-6">
        {header}
      </h4>
      <div className="px-4 py-5 sm:p-6">{content}</div>
    </div>
  );
};

export default CardWithHeader;
