import Image from "next/image";
import LogoLaDAO from "../../assets/images/logos/ladao-logo-v2.svg";

const LogoComponent = () => (
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  <Image height={32} width={32} src={LogoLaDAO} alt="La DAO's D letter logo" />
);

export default LogoComponent;
