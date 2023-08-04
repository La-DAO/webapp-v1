import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import Layout from "~/components/layout/Layout";
import { WagmiConfig } from "wagmi";
import { RainbowKitProvider, getDefaultWallets, lightTheme } from "../../node_modules/@rainbow-me/rainbowkit";
import { chains, wagmiConfig, configureChains, createConfig } from "wagmi";
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  zora,
} from 'wagmi/chains';
import { Toaster } from "react-hot-toast";
import { publicProvider} from 'wagmi/providers/public'

const MyApp: AppType = ({ Component, pageProps }) => {
  const { chains, publicClient } = configureChains(
    [mainnet, polygon, optimism, arbitrum, zora],
    [
      publicProvider()
    ]
  );

  const {} = getDefaultWallets({
    appName: 'La DAO App',
    projectId: 'd52d85bd92577a468423808ef0b2e103',
    chains
  })

  const wagmiConfig = createConfig({
    autoConnect: true,
    publicClient
  })

  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider
        chains={chains}
        theme={lightTheme({
          accentColor: "#f25b3d",
          accentColorForeground: "#f6f2e6",
          borderRadius: "medium",
          fontStack: "system",
        })}
      >
        <Toaster
          containerClassName="flex justify-center"
          toastOptions={{
            className: "border-2 border-primary shadow-none text-center",
          }}
        />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </RainbowKitProvider>
    </WagmiConfig>
  );
};

export default api.withTRPC(MyApp);
