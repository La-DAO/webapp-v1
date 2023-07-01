import { type Dispatch, Fragment, type SetStateAction } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { type TProject } from "../landing/Projects";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

type TSelectInputProps = {
  projects: TProject[];
  selected: TProject;
  setSelected: Dispatch<SetStateAction<TProject>>;
};

const SelectInput = ({
  projects,
  selected,
  setSelected,
}: TSelectInputProps) => {
  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <div className="relative mt-2 w-full px-8">
          <Listbox.Button className="relative w-full cursor-default rounded-md bg-ldBeigeWhite py-1.5 pl-3 pr-10 text-center text-xl font-bold text-ldPrimaryOrange-600 ring-1 ring-inset  focus:outline-none focus:ring-2 focus:ring-ldPrimaryOrange-500 sm:leading-6">
            <span className="block truncate">{selected?.name}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>

          <Transition
            show={open}
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute z-10 mt-2 max-h-48 w-fit overflow-auto rounded-md bg-ldBeigeWhite px-8 py-1 text-base ring-1 ring-black ring-opacity-5 focus:outline-none">
              {projects.map((project) => (
                <Listbox.Option
                  key={project.id}
                  className={({ selected, active }) =>
                    classNames(
                      selected || active ? "text-primary" : "text-gray-900",
                      "relative w-full cursor-default select-none px-4 py-2 text-base"
                    )
                  }
                  value={project}
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        className={classNames(
                          selected || active ? "font-bold" : "font-normal",
                          "block truncate"
                        )}
                      >
                        {project.name}
                      </span>
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      )}
    </Listbox>
  );
};

export default SelectInput;
