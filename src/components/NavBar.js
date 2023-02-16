import { useEffect, useState } from "react";
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import ConnectToPhantom from "./ConnectToPhantom";
import { Animations } from "../variants/animations";


export function NavBar({ connected, setConnected }) {
  // Top Navigation Bar Element
  return (

    <header className="bg-zinc-800 sticky top-0 z-50 shadow-sm shadow-black">
      <div className="px-8 md:px-16 lg:px-20 mx-auto max-w-screen items-center">

        <div className="flex items-center justify-between h-16">
          <div className="flex-1 md:flex md:items-center md:gap-12">

            <Link href="/">
              <a className="block items-center text-blue-600 hover:text-blue-700 ">
                <span className="sr-only">Home</span>
                <svg className="hover:ease-in-out hover:transition hover:duration-700 h-8 w-8 text-indigo-400 hover:text-indigo-500" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <polyline points="5 12 3 12 12 3 21 12 19 12" />  <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />  <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" /></svg>
              </a>
            </Link>

          </div>

          <div className="flex text-sm items-center gap-6 justify-start">

          <Link href="/projects">
              <p className="hidden md:block lg:block cursor-pointer text-sm font-semibold text-gray-400 hover:text-gray-500 hover:ease-in-out hover:transition hover:duration-700">
                Projects
              </p>
          </Link>


            <ConnectToPhantom connected={connected} setConnected={setConnected} key={connected} />

          </div>


        </div>
      </div>
    </header>
  )
}
