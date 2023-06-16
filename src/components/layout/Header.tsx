import { useRouter } from "next/router";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import LogoComponent from "../common/LogoComponent";
import Link from "next/link";

const navigation = [
  { name: "Inicio", href: "/", onlyMobile: true },
  { name: "DeFi Mexicano", href: "/ecosistema", onlyMobile: false },
  { name: "Comunidad", href: "/comunidad", onlyMobile: false },
  { name: "Códices", href: "/codices", onlyMobile: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Header = () => {
  // TODO: use pathname property once components are added
  const { asPath: pathname } = useRouter();

  return (
    <Disclosure
      as="nav"
      className="sticky top-0 z-20 h-16 bg-ldJetBlack font-spaceGrotesk"
    >
      {({ open, close }) => (
        <>
          <div className="mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex">
                <Link className="flex flex-shrink-0 items-center" href="/">
                  <LogoComponent />
                  <span className="ml-2 text-xl font-medium text-white">
                    La DAO
                  </span>
                </Link>
              </div>
              <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
                {navigation.map(
                  (item) =>
                    !item.onlyMobile && (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.href === pathname
                            ? "text-white underline decoration-ldPrimaryOrange-500 decoration-2 underline-offset-8"
                            : "text-gray-300 hover:text-white",
                          "rounded-md px-3 py-2 font-medium hover:bg-gray-700 md:text-base"
                        )}
                        aria-current={
                          item.href === pathname ? "page" : undefined
                        }
                      >
                        {item.name}
                      </Link>
                    )
                )}
                <div className="hidden items-center md:flex">
                  <div className="flex-shrink-0">
                    <button
                      type="button"
                      className="relative inline-flex items-center gap-x-1.5 rounded-md bg-ldPrimaryOrange-500 px-6 py-2 text-base font-medium text-white shadow-sm hover:bg-ldPrimaryOrange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ldPrimaryOrange-500"
                    >
                      Únete
                    </button>
                  </div>
                </div>
              </div>
              <div className="-ml-2 mr-2 flex items-center md:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-1 text-white hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon
                      className="block h-8 w-8 p-1"
                      aria-hidden="true"
                    />
                  ) : (
                    <Bars3Icon
                      className="block h-8 w-8 p-1"
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="absolute w-full space-y-4 bg-ldJetBlack px-2 pb-8 pt-4 sm:px-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="div"
                  className={classNames(
                    item.href === pathname
                      ? "text-white underline decoration-primary decoration-2 underline-offset-8"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-lg font-medium"
                  )}
                  aria-current={item.href === pathname ? "page" : undefined}
                >
                  {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any */}
                  <Link href={item.href} onClick={close as any}>
                    {item.name}
                  </Link>
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Header;
