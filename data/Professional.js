import Image from 'next/image'

const PROFESSIONAL = [
  {
    name: "Seize CTRL",
    content:
      "(Frontend Developer) Built the website animations for a blue-chip Bitcoin Ordinals NFT project",
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
    name: "ArcaneReveal",
    content:
      "Building a fully on-chain ZKP dungeon-crawler game. Partnering with Seismic Labs and Argus Labs",
    link: "https://github.com/FranklinDAO-Dev-Team/ArcaneReveal",
    date: "Apr 2024", 
    image: <Image
    src='/ArcaneReveal.png'
    alt='ArcaneReveal pic'
    height={270}
    width={480}
    className='rounded-md object-cover'
  />
  }, {
    name: "Cypress Labs",
    content:
      "(Co-Founder) Building a mobile dApp that incentivizes sustainabile transportation. Received a $30,000 grant from the Vechain Foundation",
    link: "https://www.canva.com/design/DAFwoshzffw/re0gFYJNIl08Utmvrj2X4w/view",
    date: "Oct 2023", 
    image: <Image
    src='/cypress.png'
    alt='cypress pic'
    height={270}
    width={480}
    className='rounded-md object-cover'
  />
  },
  {
    name: "Iguazu Finance",
    content:
      "(Co-Founder) Building a perpetual futures trading platform that provides secure, leveraged trading opportunities on the Sui network. Received $50,000 in grant funds from the Sui Foundation.",
    link: "https://iguazu-landing-six.vercel.app/",
    date: "August 2023",
    image: <Image
    src='/iguazu.png'
    alt='iguazu pic'
    height={270}
    width={480}
    className='rounded-md object-cover'
  />
  },
  {
    name: "Solana Accelerator Program",
    content:
      "(Founder) Building a Web3 Inheritance Wills platform through the selective Solana summer accelerator program with 120 followers on Twitter and demoed MVP to 1,000+ audience and 10+ VC firms.",
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
