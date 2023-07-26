import Link from "next/link";

type TLink = {
  name: string;
  href: string;
  isExternal: boolean;
  tags: string[];
};

type TLinksListCardProps = {
  header: string;
  links: TLink[];
};

const LinksListCard = ({
  header = "Title",
  links = [],
}: TLinksListCardProps) => {
  const linksList = (
    <ul className="list-square marker:text-ldPrimaryOrange-400">
      {links.map((link, index) => (
        <Link
          href={link.href}
          target={link.isExternal ? "_blank" : ""}
          rel={link.isExternal ? "noopener" : ""}
          key={`technical_doc_link_${index + 1}`}
          className="block w-fit"
        >
          <li className="my-3 decoration-primary">
            <span
              className="relative my-3 decoration-primary before:absolute before:-bottom-1 before:left-0 before:block before:h-[2px] 
          before:w-full before:origin-top-left before:scale-x-0
          before:bg-primary before:transition before:duration-300
          before:ease-in-out before:content-[''] before:hover:scale-x-100"
            >
              {link.name}
            </span>
          </li>
        </Link>
      ))}
    </ul>
  );

  return (
    <div className="flex h-full w-full flex-col rounded-md border-2 border-ldPrimaryOrange-600">
      <div className="bg-primary py-2">
        <h4 className="px-8 text-xl font-bold text-white">{header}</h4>
      </div>
      <div className="px-8 py-4 sm:px-6 lg:px-10">{linksList}</div>
    </div>
  );
};

export default LinksListCard;
