import Image from "next/image";

const LogoComponent = () => (
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  <Image
    height={28}
    width={28}
    src="/svg/logos/d-logo-beigeWhite-512x512.svg"
    alt="La DAO's D letter logo"
  />
);

export default LogoComponent;
