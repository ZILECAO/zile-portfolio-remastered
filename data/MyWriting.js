import Image from 'next/image'

const MY_WRITING = [
  {
    name: "Bitcoin Ordinals — Artifacts Reshaping the Digital Asset Narrative",
    content:
      "Published a blog post for the LGST2440 Wharton Blockchain Regulations Course on Substack",
    link: "https://whartonblockchain.substack.com/p/bitcoin-ordinals-artifacts-reshaping",
    date: "Mar 2024",
    image: <Image
    src='/ordinals.jpg'
    alt='data brokerage pic'
    height={270}
    width={480}
    className='rounded-md object-cover'
  />
  },
  {
    name: "How Web3 Can Transform Personal Data Ownership",
    content:
      "Published a blog post for the Weavechain publication on Medium; includes a webinar interview with Iain Henderson, Founder of DataYogi.",
    link: "https://medium.com/weavechain/how-web3-can-transform-personal-data-ownership-5df104194ea7",
    date: "Aug 2022",
    image: <Image
    src='/data_brokerage.webp'
    alt='data brokerage pic'
    height={270}
    width={480}
    className='rounded-md object-cover'
  />
  },{
    name: "Escrow Marketplace Smart Contract Guide",
    content:
      "Published a Web3 development guide on the BridXe Medium Publication, gaining 3,800+ impressions on Twitter and applaud from dev influencers",
    link: "https://medium.com/bridxe/the-full-guide-on-how-to-develop-and-deploy-a-simple-escrow-marketplace-smart-contract-ab3e25919f75",
    date: "Jul 2022",
    image: <Image
    src='/bridxe.webp'
    alt='bridxe pic'
    height={270}
    width={480}
    className='rounded-md object-cover'
  />
  },
  
  {
    name: "Exploring the Global Nature of Blockchain",
    content:
      "Authored a blog featuring my experiences interning remotely for NexChange Group, documenting what it's like to work for a company abroad during COVID-19.",
    link: "https://careerservices.upenn.edu/blog/2021/12/08/214596/",
    date: "Dec 2021",
    image: <Image
    src='/penn_career.png'
    alt='penn career pic'
    height={270}
    width={480}
    className='rounded-md object-cover'
  />
  },
];

export { MY_WRITING };
