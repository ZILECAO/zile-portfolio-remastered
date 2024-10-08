import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import AnimatedLetters from "../components/AnimatedLetters";
import { motion } from "framer-motion";
import { Animations } from "../variants/animations";
import delay from "delay";
import Projects from "../components/projects";
import { useInView } from "react-intersection-observer";

const Home: NextPage = () => {
  // UseState variables
  const [showContent, setShowContent] = useState<boolean>(false);
  const [showButtons, setShowButtons] = useState<boolean>(false);
  const [ref1, inView1] = useInView({
    triggerOnce: true, // Animation for video appear on scroll
  });

  return (
    <div className="mx-auto max-w-none sm:px-6 lg:px-12 bg-zinc-800 lg:pb-6 lg:pt-0 pt-12">
      {/* Splash Screen */}
      <motion.section
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 gap-8 px-8 pb-[16vh] min-h-screen lg:items-center"
      >
        {/* Animated Letters */}
        <div className="pb-8">
          <motion.div
            variants={Animations.container}
            onAnimationComplete={() =>
              delay(400).then(() => setShowContent(true))
            }
          >
            <AnimatedLetters title="Hey, I'm Zile" />
          </motion.div>

          {/* Content */}
          <div>
            {showContent && (
              <motion.p
                variants={Animations.FadeRight}
                className="text-gray-400 text-base font-medium font-serif md:w-[90%] my-5"
              >
                Thanks for checking out my site! 👋
              </motion.p>
            )}

            {showContent && (
              <motion.p
                variants={Animations.FadeRight}
                className="text-gray-400 text-base font-medium font-serif md:w-[92%] my-5"
              >
                I am a crypto-native builder currently exploring early-stage
                web3 infrastructure at Blockchain Capital. I recently completed
                my bachelors in economics at the University of Pennsylvania,
                where I was the director of engineering for Penn Blockchain and
                a Solana ambassador. Previously, I was an analyst at Metaversal
                Ventures, leading portfolio valuation and management. I am most
                interested in Bitcoin Ordinals, Web3 private data, and
                blockchain gaming.{" "}
              </motion.p>
            )}

            {showContent && (
              <motion.p
                variants={Animations.FadeLeft}
                className="text-indigo-300 text-base font-medium font-serif md:w-[90%] my-5"
              >
                Connect your MetaMask Wallet to view my Resume!{" "}
                {/* TODO: and download my Resume */}
              </motion.p>
            )}

            {showContent && (
              <motion.div variants={Animations.FadeLeft}>
                {/* <Link href=''>
                <a

                  className='underline text-gray-300 hover:text-yellow-300 font-medium font-serif'>
                  Learn about my journey! →</a>


              </Link> */}

                {showContent && (
                  <motion.div
                    variants={Animations.FadeRight}
                    className="flex gap-4 justify-start duration-500 items-center"
                    onAnimationComplete={() => setShowButtons(true)}
                  >
                    <a
                      className="text-gray-600 hover:text-gray-700"
                      href="https://github.com/ZILECAO/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                    >
                      <svg
                        className="hover:ease-in-out hover:transition hover:duration-700 w-8 h-8"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </a>

                    <a
                      className="text-blue-600 hover:text-blue-700 "
                      href="https://www.linkedin.com/in/zilecao/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                    >
                      <svg
                        className="hover:ease-in-out hover:transition hover:duration-700 h-8 w-8 text-blue-600 hover:text-blue-900"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        {" "}
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />{" "}
                        <rect x="2" y="9" width="4" height="12" />{" "}
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                    </a>

                    <a
                      className="text-blue-500 hover:text-blue-700/75 animate-wave hover:ease-in-out hover:transition hover:duration-700"
                      href="https://twitter.com/zile_cao"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Twitter"
                    >
                      <svg
                        className="w-8 h-8"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                      </svg>
                    </a>
                  </motion.div>
                )}
              </motion.div>
            )}

            {/* Content */}
            {showButtons && (
              <motion.section
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.7, delay: 0.2 },
                }}
                className="flex flex-row justify-start gap-4 items-center"
              >
                <Link href="#Projects">
                  <a className="font-bold mt-8 inline-flex items-center rounded bg-indigo-500 px-6 py-3 hover:bg-indigo-600 focus:outline-none focus:ring active:text-indigo-500 text-gray-300 hover:ease-in-out hover:transition hover:duration-700">
                    <span className="text-sm font-medium "> My Projects </span>
                  </a>
                </Link>

                <Link href="https://github.com/ZILECAO/zile-portfolio-3">
                  <a className="font-bold mt-8 inline-flex items-center rounded bg-transparent border-indigo-500 border px-8 py-3 hover:border-indigo-600 focus:outline-none focus:ring text-indigo-400 hover:text-indigo-500 hover:ease-in-out hover:transition hover:duration-700">
                    <span className="text-sm font-medium"> View Code </span>
                  </a>
                </Link>
              </motion.section>
            )}
          </div>
        </div>
      </motion.section>

      <motion.h1
        ref={ref1}
        initial={{ opacity: 0, y: 10 }}
        animate={inView1 ? { opacity: 1, y: 0 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.35 }}
        id="Projects"
        className="text-5xl text-center font-semibold font-display text-indigo-300 pb-10 mt-24 lg:mt-0 px-8"
      >
        Projects
      </motion.h1>
      <Projects />
    </div>
  );
};

export default Home;
