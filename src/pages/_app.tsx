import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import Layout from "~/components/layout/Layout";
import { WagmiConfig } from "wagmi";
import { RainbowKitProvider, lightTheme } from "@rainbow-me/rainbowkit";
import { chains, wagmiConfig } from "~/services/web3/wagmiClient";
import { Toaster } from "react-hot-toast";

const MyApp: AppType = ({ Component, pageProps }) => {
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
        <Toaster />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </RainbowKitProvider>
    </WagmiConfig>
  );
};

export default api.withTRPC(MyApp);
