import Image from 'next/image'

const HACKATHONS = [
  {
    name: "ETHDenver Hackathon",
    content:
      "Main Track Finalist (Top 15 of 350+ Submissions) and Base Bounty Winner ($5,500)  -- Led a team of four to develop Inheritable, a GDPR-compliant solution for secure, decentralized inheritance on the Base L2 through verifiable Merkle Trees, quantum-resistant dilithium signatures, and decentralized oracles.",
    link: "https://app.buidlbox.io/projects/inheritable",
    date: "Mar 2023", 
    image: <Image
    src='/ethdenver.JPG'
    alt='ethdenver pic'
    layout='fill'
    className='rounded-md object-cover'
  />
  },{
    name: "Solana Grizzlython Hackathon",
    content:
      "Honorable Mention - Selected as one of five EasyA honorable mentions out of the highly competitive 800+ submissions in the month-long hackathon. Developed Inheritable, a GDPR-compliant solution for secure, decentralized inheritance on Solana through verifiable Merkle Trees, quantum-resistant dilithium signatures, and decentralized oracles.",
    link: "https://github.com/ZILECAO/inheritable-final-submission",
    date: "Mar 2023", 
    image: <Image
    src='/grizzlython.png'
    alt='grizzlython pic'
    layout='fill'
    className='rounded-md object-cover'
  />
  },
  {
    name: "Penn Blockchain Hackathon",
    content:
      "1st Place Solana Track ($600) -- Led a team of five to develop Inked, a dApp using Weavechain to enable Proof-of-Discovery for research papers on Solana, ensuring immutability and time of discovery for research ideas in a decentralized and secure manner.",
    link: "https://dorahacks.io/buidl/4278",
    date: "Feb 2023", 
    image: <Image
    src='/pitching.JPG'
    alt='inked slides pic'
    layout='fill'
    className='rounded-md object-cover'
  />
  },
  {
    name: "VitaDAO Longevity Hackathon",
    content:
      "Decentralized Computing Special Prize ($1,500) -- Led a team of three to build a permissioned genomics data analyzer with compute-to-data & multiparty computation chaining using the Weavechain API; prepared slide deck presentation and created front-end using React and Web3.js",
    link: "https://www.weavechain.com/learn-blog/geneweavers",
    date: "Jan 2023", 
    image: <Image
    src='/geneweavers.png'
    alt='geneweavers pic'
    layout='fill'
    className='rounded-md object-cover'
  />
  },
  {
    name: "HackaTRON at Harvard",
    content:
      "4th Place ($8,000) -- Developed a group payment-splitting dApp on the TRON blockchain with a team of five, rewarding users with rebate tokens to incentivize bulk user onboarding for subscription services using TronWeb.js, Solidity, React, and Next.js",
    link: "https://github.com/ZILECAO/GroupBy",
    date: "Nov 2022",
    image: <Image
    src='/groupby.png'
    alt='groupby pic'
    layout='fill'
    className='rounded-md object-cover'
  />
  },
];

export { HACKATHONS };
