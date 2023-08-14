import Image from 'next/image'

const PROFESSIONAL = [
  {
    name: "Seize CTRL",
    content:
      "Built the website animations for a Bitcoin Ordinals project which generated $700,000 USD in revenue using React & Framer.js",
    link: "https://www.seizectrl.io/",
    date: "July 2023",
    image: <Image
    src='/seize-ctrl.png'
    alt='seize ctrl pic'
    height={270}
    width={480}
    className='rounded-md object-cover'
  />
  },
  {
    name: "Solana Accelerator Program",
    content:
      "(Founder of team of 4) Building a Web3 Inheritance Wills platform through the selective Solana summer accelerator program with 120 followers on Twitter and demoed MVP to 1,000+ audience and 10+ VC firms.",
    link: "https://twitter.com/Inheritable_xyz",
    date: "June 2023",
    image: <Image
    src='/accelerator.jpeg'
    alt='solana accelerator pic'
    height={270}
    width={480}
    className='rounded-md object-cover'
  />
  },
];

export { PROFESSIONAL };
