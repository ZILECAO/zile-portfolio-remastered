import { ethers, Wallet } from "ethers";
import { useEffect, useState } from "react";
import { Web3Provider } from '@ethersproject/providers';
import Link from 'next/link'


const WalletConnect = () => {

    // getting whether user is authenticated
    const [authenticated, setAuthenticated] = useState(false);

    const [walletAddress, setWalletAddress] = useState("");

    // talking with metamask to get the accounts with wallet connection
    async function requestAccount() {
        console.log('Requesting account...');

        // check if MetaMask is installed
        if (window.ethereum) {
            console.log('detected metamask');

            // update wallet address and balance
            try {
                const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                console.log(accounts);


                setWalletAddress(accounts[0]);

                if (accounts.length > 0) {
                    setAuthenticated(true);
                } else {
                    setAuthenticated(false);
                }

                console.log("this is the wallet address", walletAddress)
                console.log('auth detected', authenticated)

            } catch (error) {
                console.error(error);
            }

        } else {
            console.log('no metamask detected');
        }
    }


    // connecting wallet to app after requestAccount() is complete
    async function connectWallet() {
        if (window.ethereum !== 'undefined') {
            await requestAccount();

            const provider = new ethers.providers.Web3Provider(window.ethereum);

        } else {
            var popup = alert(
                `Error -- Must install MetaMask Wallet to Connect! 
Install at: https://metamask.io/`
                );
        }
    }



    if (typeof window !== 'undefined') {
        if (authenticated) {
            console.log("connected")
            return (
                <>
                    <Link href="https://gateway.pinata.cloud/ipfs/QmThyLtXR9bczd6HHeQBFCc4TtXy67MjZSfhQTSgHXkt4n?_gl=1*18c9tij*rs_ga*Y2YyOTEzZDYtZDk3YS00MjQ1LTlmNTgtNDFjMDE0YjQxY2U4*rs_ga_5RMPXG14TE*MTY4Mzc1ODIyNC4xLjEuMTY4Mzc1ODI0Ni4zOC4wLjA.">
                    <button

                        className='hidden md:block lg:block cursor-pointer text-sm font-semibold text-gray-400 hover:text-gray-500 hover:ease-in-out hover:transition hover:duration-700'>
                        View Resume
                    </button>
                    </Link>

                    <button
                        className="cursor-default py-2 px-4 border border-indigo-400 rounded-md text-sm font-semibold text-indigo-400 whitespace-nowrap hover:border-indigo-500 hover:text-indigo-500 hover:ease-in-out hover:transition hover:duration-700"
                    >
                        {/* only return the first 3 and last 4 of wallet address */}
                        {walletAddress.slice(0, 5)}...{walletAddress.slice(-4)}
                    </button>

                </>


            );
        } else {
            console.log("not connected")
            return (
                <div >
                    <button
                        onClick={connectWallet}
                        className="items-center justify-end py-2 px-4 bg-gray-700 rounded-md text-sm font-semibold text-indigo-300 whitespace-nowrap hover:bg-gray-800 hover:text-indigo-400 hover:shadow-indigo-500/50 hover:shadow-md shadow-indigo-400/50 sm:overflow-hidden hover:ease-in-out hover:transition hover:duration-700"
                    >
                        Connect Wallet
                    </button>
                </div>
            );
        }
    } else {
        return (
            <div >
                <button
                    onClick={connectWallet}
                    className="items-center justify-end py-2 px-4 bg-gray-700 rounded-md text-sm font-semibold text-indigo-300 whitespace-nowrap hover:bg-gray-800 hover:text-indigo-400 hover:shadow-indigo-500/50 hover:shadow-md shadow-indigo-400/50 sm:overflow-hidden hover:ease-in-out hover:transition hover:duration-700"
                >
                    Connect Wallet
                </button>
            </div>
        );
    }
}

export default WalletConnect;
