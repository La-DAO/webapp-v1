import { ConnectButton } from "@rainbow-me/rainbowkit";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";

/**
 * Custom Wagmi Connect Button (watch balance + custom design)
 */
export const RainbowKitCustomConnectButton = () => {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openConnectModal,
        openChainModal,
        mounted,
      }) => {
        const connected = mounted && account && chain;

        return (
          <>
            {(() => {
              if (!connected) {
                return (
                  <button
                    className="text-md w-full rounded-md bg-ldPrimaryOrange-500 py-2 font-spaceGrotesk font-medium text-white hover:bg-ldPrimaryOrange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ldPrimaryOrange-500 md:text-lg"
                    onClick={openConnectModal}
                    type="button"
                  >
                    Connect Wallet
                  </button>
                );
              }

              if (chain.unsupported) {
                return (
                  <button
                    className="w-full rounded-md bg-ldPrimaryOrange-500 py-2 font-spaceGrotesk text-xl font-medium text-white hover:bg-ldPrimaryOrange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ldPrimaryOrange-500 md:w-1/2 md:text-lg lg:w-3/5"
                    onClick={openChainModal}
                    type="button"
                  >
                    <span>Wrong network</span>
                    <ChevronDownIcon className="ml-2 h-6 w-4 sm:ml-0" />
                  </button>
                );
              }

              return (
                <div className="flex items-center justify-end px-2">
                  <div className="border-1 flex items-center justify-center rounded-lg">
                    <button
                      onClick={openAccountModal}
                      type="button"
                      className="btn btn-secondary btn-sm pl-0 pr-2 shadow-md"
                    >
                      <span className="ml-2 mr-1">{account.displayName}</span>
                      <span>
                        <ChevronDownIcon className="h-6 w-4" />
                      </span>
                    </button>
                  </div>
                </div>
              );
            })()}
          </>
        );
      }}
    </ConnectButton.Custom>
  );
};

type TButtonProps = {
  accountBtnClasses?: string;
  connectBtnClasses?: string;
  connectBtnText?: string;
  containerClasses?: string;
};

export const MinimalistConnectButton = ({
  accountBtnClasses,
  connectBtnClasses,
  connectBtnText = "Conectar cartera",
  containerClasses = "w-full",
}: TButtonProps) => {
  const [hasMounted, setHasMounted] = useState(false);
  // Hooks
  useEffect(() => {
    setHasMounted(true);
  }, []);

  // Render
  if (!hasMounted) return null;
  else
    return (
      <div className={containerClasses}>
        <ConnectButton.Custom>
          {({
            account,
            chain,
            openAccountModal,
            openConnectModal,
            openChainModal,
            mounted,
          }) => {
            const connected = mounted && account && chain;

            return (
              <>
                {(() => {
                  if (!connected) {
                    return (
                      <button
                        className={
                          connectBtnClasses ||
                          "text-md w-full rounded-md bg-ldPrimaryOrange-500 py-2 font-spaceGrotesk font-medium text-white hover:bg-ldPrimaryOrange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ldPrimaryOrange-500 md:text-lg"
                        }
                        onClick={openConnectModal}
                        type="button"
                      >
                        {connectBtnText}
                      </button>
                    );
                  }

                  if (chain.unsupported) {
                    return (
                      <button
                        className="w-full rounded-md bg-ldPrimaryOrange-500 py-2 font-spaceGrotesk text-xl font-medium text-white hover:bg-ldPrimaryOrange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ldPrimaryOrange-500 md:w-1/2 md:text-lg lg:w-3/5"
                        onClick={openChainModal}
                        type="button"
                      >
                        <span>Wrong network</span>
                        <ChevronDownIcon className="ml-2 h-6 w-4 sm:ml-0" />
                      </button>
                    );
                  }

                  return (
                    <button
                      onClick={openAccountModal}
                      type="button"
                      className={
                        accountBtnClasses ||
                        "text-md bg-red flex w-full items-center justify-center rounded-md border-2 border-ldPrimaryOrange-500 py-2 font-spaceGrotesk font-medium text-primary hover:bg-ldBeigeWhite/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ldPrimaryOrange-500 md:text-lg"
                      }
                    >
                      <span className="mr-4">{account.displayName}</span>
                      <span>
                        <ChevronDownIcon className="h-6 w-4" />
                      </span>
                    </button>
                  );
                })()}
              </>
            );
          }}
        </ConnectButton.Custom>
      </div>
    );
};
