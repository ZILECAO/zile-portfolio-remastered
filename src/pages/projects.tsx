import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { PERSONAL_PROJECTS } from "../../data/Projects";
import { HACKATHONS } from "../../data/Hackathons";
import { MY_WRITING } from "../../data/MyWriting";
import AnimatedLetters from "../components/AnimatedLetters";
import { motion } from "framer-motion";
import { Animations } from "../variants/animations";
import delay from "delay";
import { PROFESSIONAL } from "../../data/Professional";


const Home: NextPage = () => {
    const [showHackathons, setShowHackathon] = useState<boolean>(true);
    const [showWritings, setShowWritings] = useState<boolean>(false);
    const [showProjects, setShowProjects] = useState<boolean>(false);

    return (
        <div className="mx-auto max-w-none min-h-screen sm:px-6 lg:px-8 bg-zinc-800 ">
            {/* Professional Work */}

            {showHackathons && <motion.section
                initial={{
                    opacity: 0, y: 20,
                }}
                animate={{
                    opacity: 1, y: 0,
                    transition: { duration: .7, delay: 0.2 }
                }}
                onAnimationComplete={() => setShowProjects(true)}
                className="pt-20">
                <h1 id="Hackathons" className="text-3xl font-semibold font-display text-indigo-300 pb-6 px-8">Professional Work</h1>

                <div
                    className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 px-8 items-start'>
                    {PROFESSIONAL.map(({ name, content, link, date, image}, index) => (
                        <div key={index} className='p-4 transition duration-700 ease-in-out backdrop-brightness-50 backdrop-blur-md text-gray-100 shadow-xs shadow-black rounded-lg hover:shadow-2xl hover:shadow-black'>
                            <h3 className="font-display font-medium text-2xl mb-4">{name}</h3>
                            <div className="w-full relative rounded-lg duration-5 mb-4">{image}</div>
                            <p className="text-sm text-gray-400 font-display max-w-md mb-4">{content}</p>
                            <p className="text-sm text-white font-display mb-4">{date}</p>
                            <Link href={link}>
                                <a target='_blank' className="font-display underline text-indigo-300 hover:text-indigo-400 hover:ease-in-out hover:transition hover:duration-700">Project Link</a>
                            </Link>
                        </div>
                    ))}
                </div>
            </motion.section>
            }

            {/* Hackathon Projects */}

            {showHackathons && <motion.section
                initial={{
                    opacity: 0, y: 20,
                }}
                animate={{
                    opacity: 1, y: 0,
                    transition: { duration: .7, delay: 0.2 }
                }}
                onAnimationComplete={() => setShowProjects(true)}
                className="pt-12">
                <h1 id="Hackathons" className="text-3xl font-semibold font-display text-indigo-300 pb-6 px-8">Hackathons</h1>

                <div
                    className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 px-8 items-start'>
                    {HACKATHONS.map(({ name, content, link, date, image}, index) => (
                        <div key={index} className='p-4 transition duration-700 ease-in-out backdrop-brightness-50 backdrop-blur-md text-gray-100 shadow-xs shadow-black rounded-lg hover:shadow-2xl hover:shadow-black'>
                            <h3 className="font-display font-medium text-2xl mb-4">{name}</h3>
                            <div className="w-full relative rounded-lg duration-5 mb-4">{image}</div>
                            <p className="text-sm text-gray-400 font-display max-w-md mb-4">{content}</p>
                            <p className="text-sm text-white font-display mb-4">{date}</p>
                            <Link href={link}>
                                <a target='_blank' className="font-display underline text-indigo-300 hover:text-indigo-400 hover:ease-in-out hover:transition hover:duration-700">Project Link</a>
                            </Link>
                        </div>
                    ))}
                </div>
            </motion.section>
            }

            {/* Personal Projects
            {showProjects && <motion.section
                initial={{
                    opacity: 0, y: 20,
                }}
                animate={{
                    opacity: 1, y: 0,
                    transition: { duration: .7, delay: 0.2 }
                }}
                onAnimationComplete={() => setShowWritings(true)}
                className="pt-20">
                <h1 id="Projects" className="text-3xl font-semibold font-display text-indigo-300 pb-6 px-8">Personal Projects</h1>
                <div
                    className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 px-8 items-start'>
                    {PERSONAL_PROJECTS.map(({ name, content, link, date, image}, index) => (
                        <div key={index} className='p-4 transition duration-700 ease-in-out backdrop-brightness-50 backdrop-blur-md text-gray-100 shadow-xs shadow-black rounded-lg hover:shadow-2xl hover:shadow-black'>
                            <h3 className="font-display font-medium text-2xl mb-4">{name}</h3>
                            <div className="w-full relative rounded-lg duration-5 mb-4">{image}</div>
                            <p className="text-sm text-gray-400 font-display max-w-md mb-4">{content}</p>
                            <p className="text-sm text-white font-display mb-4">{date}</p>
                            <Link href={link}>
                                <a target='_blank' className="font-display underline text-indigo-300 hover:text-indigo-400 hover:ease-in-out hover:transition hover:duration-700">Project Link</a>
                            </Link>
                        </div>
                    ))}
                </div>
            </motion.section>
            } */}

            {/* My Writing */}
            {showWritings && <motion.section
                initial={{
                    opacity: 0, y: 20,
                }}
                animate={{
                    opacity: 1, y: 0,
                    transition: { duration: .7, delay: 0.2 }
                }}
                className="pt-20 pb-48">
                <h1 id="Writing" className="text-3xl font-semibold font-display text-indigo-300 pb-6 px-8">My Writing</h1>
                <div
                    className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 px-8 items-start'>
                    {MY_WRITING.map(({ name, content, link, date, image}, index) => (
                        <div key={index} className='p-4 transition duration-700 ease-in-out backdrop-brightness-50 backdrop-blur-md text-gray-100 shadow-xs shadow-black rounded-lg hover:shadow-2xl hover:shadow-black'>
                            <h3 className="font-display font-medium text-2xl mb-4">{name}</h3>
                            <div className="w-full relative rounded-lg duration-5 mb-4">{image}</div>
                            <p className="text-sm text-gray-400 font-display max-w-md mb-4">{content}</p>
                            <p className="text-sm text-white font-display mb-4">{date}</p>
                            <Link href={link}>
                                <a target='_blank' className="font-display underline text-indigo-300 hover:text-indigo-400 hover:ease-in-out hover:transition hover:duration-700">Project Link</a>
                            </Link>
                        </div>
                    ))}
                </div>
            </motion.section>
            }
        </div>
    );

};

export default Home;
