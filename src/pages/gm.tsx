import { type ComponentPropsWithoutRef, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { useAccount, useDisconnect } from "wagmi";
import { MinimalistConnectButton } from "~/components/web3/RainbowKitCustomConnectButton";
import { useForm, type SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import Link from "next/link";
import SimpleLoader from "~/components/common/SimpleLoader";
import { api } from "~/utils/api";

type TSvgProps = ComponentPropsWithoutRef<"svg">;

type TContactForm = {
  applicantEthAddress: string;
  applicantEmail: string;
  projectId: string;
  userId: string;
};

const SocialMediaNav = [
  {
    name: "Discord",
    href: "https://discord.gg/tQXDnJrxX3",
    icon: ({ ...props }: TSvgProps) => (
      <svg viewBox="0 0 640 512" fill="currentColor" {...props}>
        <path d="M524.531 69.836a1.5 1.5 0 00-.764-.7A485.065 485.065 0 00404.081 32.03a1.816 1.816 0 00-1.923.91 337.461 337.461 0 00-14.9 30.6 447.848 447.848 0 00-134.426 0 309.541 309.541 0 00-15.135-30.6 1.89 1.89 0 00-1.924-.91 483.689 483.689 0 00-119.688 37.107 1.712 1.712 0 00-.788.676C39.068 183.651 18.186 294.69 28.43 404.354a2.016 2.016 0 00.765 1.375 487.666 487.666 0 00146.825 74.189 1.9 1.9 0 002.063-.676A348.2 348.2 0 00208.12 430.4a1.86 1.86 0 00-1.019-2.588 321.173 321.173 0 01-45.868-21.853 1.885 1.885 0 01-.185-3.126 251.047 251.047 0 009.109-7.137 1.819 1.819 0 011.9-.256c96.229 43.917 200.41 43.917 295.5 0a1.812 1.812 0 011.924.233 234.533 234.533 0 009.132 7.16 1.884 1.884 0 01-.162 3.126 301.407 301.407 0 01-45.89 21.83 1.875 1.875 0 00-1 2.611 391.055 391.055 0 0030.014 48.815 1.864 1.864 0 002.063.7A486.048 486.048 0 00610.7 405.729a1.882 1.882 0 00.765-1.352c12.264-126.783-20.532-236.912-86.934-334.541zM222.491 337.58c-28.972 0-52.844-26.587-52.844-59.239s23.409-59.241 52.844-59.241c29.665 0 53.306 26.82 52.843 59.239 0 32.654-23.41 59.241-52.843 59.241zm195.38 0c-28.971 0-52.843-26.587-52.843-59.239s23.409-59.241 52.843-59.241c29.667 0 53.307 26.82 52.844 59.239 0 32.654-23.177 59.241-52.844 59.241z" />
      </svg>
    ),
  },
  {
    name: "Telegram",
    href: "https://t.me/+ecIF8k2pUSgwMjQx",
    icon: ({ ...props }: TSvgProps) => (
      <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M20.665 3.717l-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z" />
      </svg>
    ),
  },
  {
    name: "Twitter",
    href: "https://twitter.com/LaDAO_Club",
    icon: ({ ...props }: TSvgProps) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/ladao_club/",
    icon: ({ ...props }: TSvgProps) => (
      <svg viewBox="0 0 1024 1024" fill="currentColor" {...props}>
        <path d="M512 378.7c-73.4 0-133.3 59.9-133.3 133.3S438.6 645.3 512 645.3 645.3 585.4 645.3 512 585.4 378.7 512 378.7zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zM512 717.1c-113.5 0-205.1-91.6-205.1-205.1S398.5 306.9 512 306.9 717.1 398.5 717.1 512 625.5 717.1 512 717.1zm213.5-370.7c-26.5 0-47.9-21.4-47.9-47.9s21.4-47.9 47.9-47.9 47.9 21.4 47.9 47.9a47.84 47.84 0 01-47.9 47.9z" />
      </svg>
    ),
  },
  {
    name: "Lens",
    href: "https://lensfrens.com/ladao",
    icon: () => (
      <svg
        className="mr-1 flex h-5 w-5 items-center justify-center rounded-md bg-primary pl-[2px] pt-[1.5px] hover:bg-ldPrimaryOrange-700 hover:text-ldPrimaryOrange-600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask id="a" maskUnits="userSpaceOnUse" x="0" y="0">
          <path fill="#fff" d="M0 0h16v16H0z" />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7.73 10.01a8.97 8.97 0 0 1-5.82-2.76 2.57 2.57 0 0 1-.72-1.97c.04-.63.33-1.24.8-1.72a2.64 2.64 0 0 1 1.66-.81 2.4 2.4 0 0 1 1.79.62c.05-.7.34-1.3.82-1.73A2.62 2.62 0 0 1 8.01 1c.66 0 1.28.23 1.74.64.49.43.78 1.03.83 1.73a2.38 2.38 0 0 1 1.78-.62 2.77 2.77 0 0 1 2.47 2.53c.05.72-.2 1.4-.72 1.97l-.16.16a8.97 8.97 0 0 1-5.7 2.6v.13c.03 1.17.53 2.03 1.4 2.44.89.41 2 .26 2.82-.34l.3.43c-.59.44-1.3.67-2.03.67a3.1 3.1 0 0 1-1.24-.25 4.59 4.59 0 0 0 5.26.9l.23.49a5.1 5.1 0 0 1-6.28-1.5 4.83 4.83 0 0 1-.46-.74v2.74h-.52v-2.75A5.13 5.13 0 0 1 1 14.47l.22-.47a4.6 4.6 0 0 0 5.26-.9 3.46 3.46 0 0 1-3.27-.42l.3-.44c.82.6 1.94.75 2.82.34.88-.4 1.37-1.27 1.4-2.45v-.12ZM2.35 3.94c.38-.39.91-.66 1.48-.66.46 0 .94.17 1.38.6a7.36 7.36 0 0 1 .26.27l.5.53-.03-.73v-.38a2 2 0 0 1 2.07-2.04 2 2 0 0 1 2.06 2.04v.21a2.96 2.96 0 0 1 0 .17l-.02.73.5-.53a5.34 5.34 0 0 1 .26-.27c.99-.96 2.18-.64 2.86.06.68.7 1 1.92.06 2.94l-.15.15A8.58 8.58 0 0 1 8.01 9.5a8.55 8.55 0 0 1-5.72-2.61c-.94-1.02-.63-2.23.06-2.94Z"
          />
        </mask>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M7.73 10.01a8.97 8.97 0 0 1-5.82-2.76 2.57 2.57 0 0 1-.72-1.97c.04-.63.33-1.24.8-1.72a2.64 2.64 0 0 1 1.66-.81 2.4 2.4 0 0 1 1.79.62c.05-.7.34-1.3.82-1.73A2.62 2.62 0 0 1 8.01 1c.66 0 1.28.23 1.74.64.49.43.78 1.03.83 1.73a2.38 2.38 0 0 1 1.78-.62 2.77 2.77 0 0 1 2.47 2.53c.05.72-.2 1.4-.72 1.97l-.16.16a8.97 8.97 0 0 1-5.7 2.6v.13c.03 1.17.53 2.03 1.4 2.44.89.41 2 .26 2.82-.34l.3.43c-.59.44-1.3.67-2.03.67a3.1 3.1 0 0 1-1.24-.25 4.59 4.59 0 0 0 5.26.9l.23.49a5.1 5.1 0 0 1-6.28-1.5 4.83 4.83 0 0 1-.46-.74v2.74h-.52v-2.75A5.13 5.13 0 0 1 1 14.47l.22-.47a4.6 4.6 0 0 0 5.26-.9 3.46 3.46 0 0 1-3.27-.42l.3-.44c.82.6 1.94.75 2.82.34.88-.4 1.37-1.27 1.4-2.45v-.12ZM2.35 3.94c.38-.39.91-.66 1.48-.66.46 0 .94.17 1.38.6a7.36 7.36 0 0 1 .26.27l.5.53-.03-.73v-.38a2 2 0 0 1 2.07-2.04 2 2 0 0 1 2.06 2.04v.21a2.96 2.96 0 0 1 0 .17l-.02.73.5-.53a5.34 5.34 0 0 1 .26-.27c.99-.96 2.18-.64 2.86.06.68.7 1 1.92.06 2.94l-.15.15A8.58 8.58 0 0 1 8.01 9.5a8.55 8.55 0 0 1-5.72-2.61c-.94-1.02-.63-2.23.06-2.94Z"
          fill="#fff"
        />
        <path
          d="M7.73 10.01h.4v-.37l-.37-.03-.03.4Zm-5.66-2.6.28-.28-.28.28Zm-.16-.17.3-.27-.3.28Zm-.72-1.96-.4-.03.4.03Zm.8-1.72.28.28-.29-.28Zm1.66-.81-.03-.4.03.4Zm1.79.62-.27.3.6.53.06-.8-.4-.03Zm.82-1.73.27.3-.27-.3Zm3.5 0 .26-.3-.27.3Zm.82 1.73-.4.04.07.79.6-.52-.27-.3Zm1.78-.62-.03.4.03-.4Zm1.68.81-.29.28.29-.28Zm.79 1.72-.4.03.4-.03Zm-.72 1.97.3.27-.3-.27Zm-.16.16-.28-.28.28.28Zm-5.7 2.6-.02-.4-.38.03v.38h.4Zm0 .13h-.4.4Zm1.4 2.44.17-.36-.17.36Zm2.82-.34.33-.23-.23-.33-.33.24.23.32Zm.3.43.24.33.32-.23-.23-.32-.32.22Zm-2.03.67v-.4.4ZM9.5 13.1l.16-.36-.44.65.28-.29Zm2.24 1.25.09-.4-.1.4Zm3.02-.34.37-.17-.17-.37-.37.18.17.36Zm.23.48.17.36.35-.17-.16-.36-.36.17Zm-2.22.5v-.4.4Zm-1.15-.12.1-.4-.1.4Zm-2.91-1.88-.32.24.32-.24Zm0 0-.33.23.32-.23Zm-.46-.74.36-.18-.76.18h.4Zm0 2.74v.4h.4v-.4h-.4Zm-.52 0h-.4v.4h.4v-.4Zm0-2.75h.4l-.75-.17.35.17Zm-.45.74.32.25-.32-.25Zm0 0 .32.25-.32-.24Zm-2.92 1.88-.09-.39.1.4Zm-1.14.13v-.4.4ZM1 14.48l-.36-.17-.17.36.36.17.17-.36Zm.22-.48.17-.36-.36-.18-.17.37.36.17Zm3.03.34-.09-.4.09.4Zm2.23-1.25.28.29-.44-.65.16.36Zm-1.23.25v-.4.4Zm-2.04-.67-.33-.23-.22.33.31.23.24-.33Zm.3-.43.24-.32-.33-.25-.24.34.33.23Zm2.82.34-.16-.36.16.36Zm1.4-2.45.4.01h-.4ZM2.35 3.94l-.29-.28.29.28Zm2.86-.06-.28.29.28-.29Zm.15.15.29-.28-.3.28Zm.11.12-.3.27.3-.27Zm.5.53-.3.28.72.78-.03-1.07-.4.01Zm-.03-.73.4-.01v-.02l-.4.03Zm0-.28h-.4.4Zm0-.1-.4-.02v.02h.4Zm4.13 0h-.4v.01l.4-.01Zm0 .3h.4-.4Zm0 .08.4.01v-.01h-.4Zm-.02.73h-.4l-.02 1.06.72-.78-.3-.28Zm.5-.53.3.27-.3-.27Zm.1-.12.3.28-.3-.28Zm.16-.15.28.29-.28-.29Zm2.92 3-.3-.27.3.27Zm-.15.15-.28-.27.28.27Zm-11.15 0-.28.28.28-.28Zm-.14-.15.3-.27-.3.27Zm5.47 2.73a8.57 8.57 0 0 1-5.4-2.48l-.58.56a9.37 9.37 0 0 0 5.93 2.72l.05-.8Zm-5.4-2.48-.16-.16-.58.55.16.17.57-.56Zm-.16-.16a2.17 2.17 0 0 1-.61-1.66l-.8-.06c-.06.84.23 1.62.83 2.27l.58-.55ZM1.6 5.31c.04-.53.27-1.05.68-1.47l-.58-.55a3.18 3.18 0 0 0-.9 1.96l.8.06Zm.68-1.47c.4-.41.9-.65 1.41-.7l-.06-.79c-.72.06-1.4.4-1.93.94l.58.55Zm1.41-.7a2 2 0 0 1 1.5.54l.52-.6a2.8 2.8 0 0 0-2.08-.73l.06.8Zm2.15.27c.05-.62.3-1.12.7-1.47L6 1.34c-.57.5-.9 1.2-.96 2l.8.07Zm.7-1.47c.39-.35.91-.54 1.48-.54V.6C7.26.6 6.54.86 6 1.34l.53.6Zm1.48-.54c.57 0 1.09.2 1.48.54l.53-.6A3.02 3.02 0 0 0 8 .6v.8Zm1.48.54c.4.35.64.85.7 1.47l.8-.07c-.07-.8-.4-1.5-.97-2l-.53.6Zm1.35 1.74c.46-.4.97-.57 1.5-.53l.06-.8c-.76-.06-1.48.2-2.08.72l.52.6Zm1.5-.53c.5.04 1 .28 1.41.7l.57-.56a3.05 3.05 0 0 0-1.92-.94l-.07.8Zm1.41.7c.4.4.64.93.68 1.46l.8-.06a3.17 3.17 0 0 0-.9-1.96l-.58.55Zm.68 1.46c.05.6-.16 1.17-.62 1.66l.6.55c.59-.65.88-1.43.82-2.27l-.8.06Zm-.62 1.66-.14.16.57.56.16-.17-.59-.55Zm-.15.16a8.57 8.57 0 0 1-5.43 2.49l.05.8c.86-.06 3.7-.41 5.96-2.73l-.58-.56Zm-5 3v-.11h-.8v.12h.8Zm1.16 2.09c-.7-.33-1.14-1.03-1.17-2.1l-.8.03c.04 1.28.59 2.3 1.63 2.8l.34-.73Zm2.42-.3c-.71.52-1.68.64-2.42.3l-.34.72c1.03.48 2.3.3 3.23-.38l-.47-.64Zm.86.53-.3-.44-.65.46.3.43.65-.45Zm-2.36 1.3c.81 0 1.6-.27 2.27-.75l-.47-.65c-.53.39-1.16.6-1.8.6v.8Zm-1.4-.29c.45.19.92.28 1.4.28v-.8a2.7 2.7 0 0 1-1.08-.21l-.31.73Zm2.49.49a4.19 4.19 0 0 1-2.04-1.14l-.57.57a5 5 0 0 0 2.43 1.35l.18-.78Zm2.76-.31a4.2 4.2 0 0 1-2.76.3l-.18.79a5 5 0 0 0 3.29-.37l-.35-.72Zm.76.67-.22-.48-.73.33.22.49.73-.34Zm-2.58 1.08a5.5 5.5 0 0 0 2.39-.55l-.35-.72a4.7 4.7 0 0 1-2.04.47v.8Zm-1.24-.15c.4.1.82.15 1.24.15v-.8c-.36 0-.71-.04-1.06-.12l-.18.77ZM8.4 13.22a5.53 5.53 0 0 0 3.14 2.03l.18-.78a4.73 4.73 0 0 1-2.69-1.73l-.63.48Zm0 0 .64-.48-.65.48Zm-.5-.8c.14.28.3.54.5.8l.63-.48c-.15-.21-.3-.44-.4-.68l-.73.36Zm.76 2.56v-2.74h-.8v2.74h.8Zm-.92.4h.52v-.8h-.52v.8Zm-.4-3.15v2.75h.8v-2.75h-.8Zm.27.98c.19-.25.35-.52.5-.8l-.72-.35c-.12.24-.26.46-.42.68l.64.47Zm0 .01-.64-.49.64.5Zm-3.15 2.02c1.25-.28 2.36-1 3.15-2.02l-.64-.49a4.73 4.73 0 0 1-2.69 1.73l.18.78Zm-1.23.14c.41 0 .83-.04 1.23-.14l-.18-.78c-.34.08-.7.13-1.05.13v.8Zm-2.4-.54a5.5 5.5 0 0 0 2.4.54v-.8c-.7 0-1.4-.15-2.05-.46l-.34.72Zm.04-1.01-.22.48.72.33.22-.48-.72-.33Zm3.3.12c-.93.21-1.9.1-2.77-.31l-.34.72a5 5 0 0 0 3.29.36l-.18-.77ZM6.2 12.8c-.57.57-1.27.96-2.04 1.14l.18.78c.91-.21 1.75-.68 2.42-1.35l-.56-.57Zm-.95.93c.47 0 .95-.1 1.39-.28l-.32-.73c-.34.14-.7.21-1.07.21v.8ZM2.97 13c.67.48 1.46.74 2.28.74v-.8c-.65 0-1.28-.2-1.8-.59l-.48.65Zm.21-.99-.3.43.66.46.3-.43-.66-.46Zm2.99.2c-.75.35-1.71.23-2.42-.3l-.48.65c.92.69 2.2.86 3.23.38l-.33-.72Zm1.16-2.09c-.02 1.07-.46 1.77-1.16 2.1l.33.72c1.05-.48 1.6-1.51 1.63-2.8l-.8-.02Zm0-.1v.11h.8v-.12h-.8Zm-3.5-7.14c-.7 0-1.33.33-1.77.78l.57.56c.32-.33.76-.54 1.2-.54v-.8Zm1.66.71a2.34 2.34 0 0 0-1.66-.71v.8c.35 0 .73.13 1.1.49l.56-.58Zm.16.16-.16-.16-.56.58.14.14.58-.56Zm.12.13a7.16 7.16 0 0 0-.12-.13l-.58.56.1.11.6-.54Zm.49.53-.5-.53-.58.54.49.54.59-.55Zm-.71-.45.01.74.8-.03-.02-.73-.8.02Zm0-.18v.19l.8-.05v-.14h-.8Zm0-.11v.11h.8v-.1l-.8-.01Zm0-.1v.1l.8.01v-.11h-.8ZM8 1.13a2.42 2.42 0 0 0-2.46 2.42l.8.03c.01-.6.24-1 .54-1.25.3-.27.72-.4 1.12-.4v-.8Zm2.46 2.43a2.42 2.42 0 0 0-.82-1.84 2.54 2.54 0 0 0-1.64-.59v.8c.4 0 .81.13 1.12.4.3.26.53.66.54 1.25l.8-.02Zm0 .22v-.23l-.8.03v.2h.8Zm0 0h-.8.8Zm0 .1v-.1h-.8v.07l.8.03Zm0 .07v-.07l-.8-.03v.1h.8Zm-.02.75.02-.74-.8-.02-.02.73.8.03Zm-.2-.82-.49.53.59.55.5-.54-.6-.54Zm.12-.13-.12.13.6.54.1-.11-.58-.56Zm.16-.16-.16.16.58.56.14-.14-.56-.58Zm3.43.07c-.4-.4-.95-.71-1.57-.77a2.32 2.32 0 0 0-1.86.7l.56.58c.41-.4.84-.52 1.23-.49.4.04.78.25 1.06.54l.58-.56Zm.06 3.5c.55-.6.74-1.27.69-1.9a2.66 2.66 0 0 0-.75-1.6l-.58.56c.29.3.5.7.53 1.1.04.41-.08.86-.47 1.29l.58.54Zm-.15.15.15-.16-.58-.54-.14.15.57.55ZM8.01 9.9c.06 0 3.38-.03 5.86-2.58l-.57-.55A7.82 7.82 0 0 1 9.8 8.79c-1.05.3-1.81.3-1.8.3v.8ZM2.15 7.31A8.95 8.95 0 0 0 8 9.9v-.8s-.76 0-1.8-.3a7.82 7.82 0 0 1-3.49-2.03l-.57.55Zm-.16-.16.16.16.57-.55-.14-.15-.59.54Zm.07-3.49c-.4.41-.7.98-.75 1.6-.05.63.14 1.3.68 1.9l.6-.55c-.4-.43-.52-.87-.48-1.28.04-.42.24-.82.52-1.1l-.57-.57Z"
          fill="#fff"
          mask="url(#a)"
        />
      </svg>
    ),
  },
];

const Gm = () => {
  const { disconnect } = useDisconnect();
  const { address } = useAccount();

  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);

  const { mutate, isLoading: isSubmitting } =
    api.waitlists.createWaitlistApplication.useMutation({
      onSuccess: () => {
        setIsSubmitSuccess(true);
        setIsLoading(false);
        onSuccessHandler("Successful submission");
      },
      onError: (error) => {
        console.log(error);
        const errorMsg = error.message || "Ocurrió un error";
        setIsLoading(false);
        onErrorHandler(errorMsg);
      },
    });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TContactForm>();

  const onSubmit: SubmitHandler<TContactForm> = (data) => {
    setIsLoading(true);
    if (!address) return;
    data["applicantEthAddress"] = address;
    data["projectId"] = "clkdc9mge0000lir8r8cdwice";
    mutate(data);
  };

  const onSuccessHandler = (successMsg: string) => {
    toast.success(successMsg);
  };

  const onErrorHandler = (errorMsg: string) => {
    toast.error(errorMsg);
  };

  return (
    <div className="ld-page bg-ldBeigeWhite">
      <div className="flex max-w-7xl flex-col justify-start px-6 text-center md:max-w-lg lg:w-full lg:max-w-none lg:px-16 xl:max-w-6xl">
        <div className="w-full">
          <h3 className="mb-4">
            Construye con nosotros el
            <br />
            <span className="text-3xl font-black text-primary md:text-4xl">
              DeFi Mexicano
            </span>
          </h3>
        </div>
        <div className="lg:mt-4 lg:flex lg:gap-x-4 xl:gap-x-16">
          {isSubmitSuccess ? (
            <div className="my-8 flex w-full flex-col gap-y-2 px-2 md:my-4 md:gap-y-4 lg:mb-8 lg:mt-12 lg:w-1/2 lg:justify-center lg:px-8 xl:mt-8 xl:gap-y-6">
              <h3 className="">¡Gracias por aplicar!</h3>
              <p className="text-lg">
                Recibirás un correo confirmando tu solicitud.
              </p>
              <p className="text-lg">
                Te informaremos cuando la membresía esté lista para acuñar.
                Conecta con nosotros:
              </p>
              <div className="my-6 flex w-full flex-wrap justify-center gap-x-4 gap-y-2 md:px-4 lg:my-0">
                {SocialMediaNav.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center justify-center text-lg text-ldJetBlack"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <item.icon
                      className="mr-1 h-6 w-6 text-primary hover:text-ldPrimaryOrange-700"
                      aria-hidden="true"
                    />
                    <span
                      className="relative decoration-primary before:absolute before:-bottom-0.5 before:left-0 before:block before:h-[2px] 
          before:w-full before:origin-top-left before:scale-x-0
          before:bg-primary before:transition before:duration-300
          before:ease-in-out before:content-[''] before:hover:scale-x-100"
                    >
                      {item.name}
                    </span>
                  </Link>
                ))}
              </div>
              <div>
                <Link href="/">
                  <button className="text-md w-2/3 rounded-md bg-ldPrimaryOrange-500 py-2 font-spaceGrotesk font-medium text-white hover:bg-ldPrimaryOrange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ldPrimaryOrange-500 disabled:bg-primary/50 md:w-1/2 md:text-lg lg:w-3/5">
                    Ir a Inicio
                  </button>
                </Link>
              </div>
            </div>
          ) : (
            <form
              className="my-8 flex w-full flex-col gap-y-2 px-2 md:my-4 md:gap-y-4 lg:mb-8 lg:mt-12 lg:w-1/2 lg:justify-center lg:px-8 xl:mt-8"
              onSubmit={(event) => {
                const onSubmitFunction = handleSubmit(onSubmit);
                void onSubmitFunction(event);
              }}
            >
              <p className="text-xl">Aplica para nuestra Membresía</p>
              <div className="flex flex-col text-left">
                <label htmlFor="email" className="mb-1 ml-2 font-semibold">
                  Correo electrónico
                </label>
                <input
                  id="applicantEmail"
                  type="email"
                  className="w-full rounded-md border-none p-4 text-center tracking-wide outline-none focus:ring-2 focus:ring-inset focus:ring-ldDeepGreen"
                  placeholder="satoshi@ladao.club"
                  {...register("applicantEmail", {
                    required: "Email requerido",
                  })}
                />
              </div>
              <div className="flex flex-col gap-y-2 text-left md:gap-y-4">
                <div>
                  <label htmlFor="Name" className="mb-1 ml-2 font-semibold">
                    Dirección Cartera
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-md border-none p-4 text-center tracking-wide outline-none focus:ring-2 focus:ring-inset focus:ring-ldDeepGreen"
                    placeholder="Haz click en el botón ⬇"
                    value={address ? address : ""}
                    readOnly
                  />
                </div>
                <div className="flex w-full justify-center">
                  <button
                    className={`${
                      !address
                        ? "cursor-default select-none text-ldBeigeWhite"
                        : "text-ldJetBlack"
                    }
                  `}
                    onClick={() => {
                      event?.preventDefault();
                      disconnect();
                    }}
                  >
                    {!address ? "Conectar cartera" : "Desconectar"}
                  </button>
                </div>
              </div>
              <div className="flex w-full flex-col items-center justify-center gap-y-2 md:gap-y-4">
                {!address ? (
                  <MinimalistConnectButton containerClasses="w-2/3 md:w-1/2 lg:w-3/5" />
                ) : (
                  <button
                    type="submit"
                    className="text-md flex w-2/3 items-center justify-center gap-x-2 rounded-md bg-ldPrimaryOrange-500 py-2 font-spaceGrotesk font-medium text-white hover:bg-ldPrimaryOrange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ldPrimaryOrange-500 disabled:bg-primary/50 md:w-1/2 md:text-lg lg:w-3/5"
                    disabled={isLoading || isSubmitting}
                  >
                    {isLoading || isSubmitting ? "Enviando..." : "Enviar"}
                    {(isLoading || isSubmitting) && <SimpleLoader />}
                  </button>
                )}
                {errors?.applicantEmail && (
                  <p role="alert" className="font-bold text-red-600">
                    {errors.applicantEmail?.message}
                  </p>
                )}
              </div>
            </form>
          )}
          <div className="mt-16 w-full md:mt-8 lg:flex lg:w-1/2 lg:items-start lg:justify-center lg:px-8">
            <h4 className="mb-2 md:mb-4 lg:hidden">
              Tenemos grandes planes para la comunidad DeFi y Web3.
            </h4>
            <div className="mb-4 flex w-full items-center justify-center lg:hidden">
              <ChevronDownIcon className="h-8 w-8 text-primary" />
            </div>
            <div className="flex w-full justify-center">
              <div className="flex w-full flex-col rounded-md border-2 border-ldPrimaryOrange-600 md:w-4/5 lg:w-full">
                <div className="bg-primary py-2 text-center">
                  <h4 className="font-bold text-white">Beneficios</h4>
                </div>
                <div className="px-2 py-4 md:px-4">
                  <ul className="list-square text-left text-lg marker:text-ldPrimaryOrange-400">
                    <li className="my-3 ml-8 decoration-primary">
                      Forma parte de La DAO Club
                    </li>
                    <li className="my-3 ml-8 decoration-primary">
                      Acceso anticipado a funciones y proyectos nuevos
                    </li>
                    <li className="my-3 ml-8 decoration-primary">
                      Análisis y Estrategias DeFi
                    </li>
                    <li className="my-3 ml-8 decoration-primary">
                      Coleccionables y Merch
                    </li>
                    <li className="my-3 ml-8 decoration-primary">
                      Proyectos a seguir y Noticias
                    </li>
                    <li className="my-3 ml-8 decoration-primary">
                      Otras ideas Web3 y experimentos{" "}
                      <span className="italic">on-chain</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gm;
