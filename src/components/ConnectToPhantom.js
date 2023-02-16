import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from 'next/link'
import { motion } from "framer-motion";
import { Animations } from "../variants/animations";


const ConnectToPhantom = ({ connected, setConnected }) => {

    const router = useRouter();

    const [phantom, setPhantom] = useState(null);
    const [pubkey, setPubkey] = useState("empty");
    const [trigger, setTrigger] = useState(false);

    useEffect(() => {


        if (window.solana) {
            setPhantom(window.solana);


        }

    }, []);

    useEffect(() => {

        async function getPubkey() {

            const pubkey = await window.solana._publicKey
            if (!pubkey) {
                console.log("no pubkeys")
                return
            }
            setPubkey(pubkey.toString());
        }

        getPubkey()
    }, [phantom]);





    // const [connected, setConnected] = useState(false);

    const connectHandler = async () => {
        await phantom.connect();
        setConnected(true);
        const path = "/"
        router.push(path)
    };

    if (phantom) {
        if (connected) {
            console.log("connected")
            return (
                <>
                    <p
                        
                        className='hidden md:hidden lg:block cursor-text text-gray-400 text-sm font-semibold md:w-[90%] my-5'>
                        {/* TODO: Make these environment variables */}
                        {/* {process.env.CONTACT_INFO} */}
                        | Email: zilecao@sas.upenn.edu |
                        Telegram: @zile_cao |
                        {/* TODO: implement download Resume option after wallet connection */}
                    </p>
                    
                    <button
                        className="py-2 px-4 border border-indigo-400 rounded-md text-sm font-semibold text-indigo-400 whitespace-nowrap hover:border-indigo-500 hover:text-indigo-500"
                    >
                        {/* only return the first 3 and last 4 of pubkey */}
                        {pubkey.slice(0, 3)}...{pubkey.slice(-4)}
                    </button>

                </>


            );
        } else {
            console.log("not connected")
            return (
                <div >
                    <button
                        onClick={connectHandler}
                        className="items-center justify-end py-2 px-4 bg-gray-700 rounded-md text-sm font-semibold text-indigo-300 whitespace-nowrap hover:bg-gray-800 hover:text-indigo-400 hover:shadow-indigo-500/50 hover:shadow-md shadow-indigo-400/50 sm:overflow-hidden"
                    >
                        Connect Phantom
                    </button>
                </div>
            );
        }
    }
    return (
        <Link
            href="https://phantom.app/"> 
            <div className="bg-indigo-500 hover:bg-indigo-600 px-4 py-2 border border-transparent rounded-md font-medium text-white">
                Get Phantom
            </div>
        </Link>
    );
}


export default ConnectToPhantom;
