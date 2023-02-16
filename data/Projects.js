import Image from 'next/image'

const PERSONAL_PROJECTS = [
  {
    name: "Web3 AI Tweet Generator",
    content:
      "Built a web app that generates detailed Twitter threads about Web3 technologies using the OpenAI GPT-3 API",
    link: "https://web3-tweet-generator.vercel.app/",
    date: "Dec 2022",
    image: <Image
    src='/tweet_generator.png'
    alt='tweet generator pic'
    layout='fill'
    className='rounded-md object-cover'
  />
  },
  {
    name: "ETH dApp Scaffold",
    content:
      "Built a boilerplate for beginner web3 devs to start building their first ethereum decentralized application with ease!",
    link: "https://github.com/ZILECAO/eth-dapp-starter",
    date: "Jan 2023",
    image: <Image
    src='/eth_dapp_starter.png'
    alt='eth dapp starter pic'
    layout='fill'
    className='rounded-md object-cover'
  />
  },
  {
    name: "Arctic Penguins NFT Collection",
    content:
      "Generated 2222 unique pieces of artwork using the Hashlips Art Engine and deployed them to OpenSea; created a minting website using React and the Ethereum Hardhat development environment.",
    link: "https://friendly-blini-65db18.netlify.app/",
    date: "May 2022",
    image: <Image
    src='/arctic_penguins.png'
    alt='arctic penguins pic'
    layout='fill'
    className='rounded-md object-cover'
  />
  },
];

export { PERSONAL_PROJECTS };
