import Image from "next/image";
import Link from "next/link";
import React from "react";
import profilePic from "../../public/PictureOfMe.png";

export default function Home() {
    return (
        <main className="scrollbar-hide flex justify-center flex-wrap">
            <header className="flex w-full items-center flex-wrap align-middle justify-center font-bold bg-center bg-cover to-black min-h-screen bg-gradient-radial from-purple-950 bg-fixed">
                <div className="animate-fade-up animate-once animate-ease-out">
                    <h1><span className="text-3xl text-white">Hi! My name is </span></h1>
                    <h1 className="text-white uppercase text-6xl sm:text-8xl text-wrap"> Niall <br />Sharma <br /></h1>
                    <h1 className="text-xl leading-loose text-white">I&apos;m A Full Stack Developer</h1>
                    <svg className="invert w-10 h-10 mt-10 animate-bounce ml-auto mr-auto" width="128" height="128" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M24 12c0-6.623-5.377-12-12-12s-12 5.377-12 12 5.377 12 12 12 12-5.377 12-12zm-1 0c0-6.071-4.929-11-11-11s-11 4.929-11 11 4.929 11 11 11 11-4.929 11-11zm-11.5 4.828l-3.763-4.608-.737.679 5 6.101 5-6.112-.753-.666-3.747 4.604v-11.826h-1v11.828z" /></svg>
                </div>
            </header>
            <section className=" py-20 bg-stone-900 flex flex-wrap lg:space-x-20 items-center justify-center">
                <div className="w-full md:w-1/3 bg-stone-800 p-10 drop-shadow-xl">
                    <h2 className="text-center font-bold text-4xl pb-10 text-white">About Me</h2>
                    <p className="text-white text-lg">
                        Hi! My name is Niall Sharma and I am a first year student at Iowa State Unviersity. Right now, I am on track to finish my degree in 2027, graduating early with a major in Computer Science and a minor in Applied Artifical Inteligence. I&apos;ve spent large amounts of time learning web dev tools such as React and I&apos;m commited to always improving myself.
                    </p>
                </div>
                <Image
                    src={profilePic}
                    width={4032}
                    height={3024}
                    alt="Picture of Niall Sharma"
                    className="w-1/2 md:w-1/3 bg-stone-900 lg:p-20  aspect-auto rounded-none" />
            </section>
            <section className="bg-stone-900 w-full justify-center flex flex-wrap">
                <h1 className="text-4xl font-bold text-white">Skills</h1>
                <div className="w-full py-5"></div>
                <div className="bg-stone-900 rounded-sm p-10 flex flex-wrap">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-xl">
                        <ul className="bg-stone-800 p-10 drop-shadow-lg align-middle">
                            <h1 className="font-bold pb-5 text-3xl">Languages</h1>
                            <li>C#</li>
                            <li>Java</li>
                            <li>Python</li>
                            <li>JavScript</li>
                            <li>HTML/CSS</li>
                            <li>TypeScript</li>
                        </ul>

                        <ul className="bg-stone-800 p-10 drop-shadow-lg">
                            <h1 className="font-bold pb-5 text-3xl">Frameworks</h1>
                            <li>NextJS</li>
                            <li>React</li>
                            <li>Bootstrap</li>
                            <li>Tailwind</li>
                        </ul>

                        <ul className="bg-stone-800 p-10 drop-shadow-lg">
                            <h1 className="font-bold pb-5 text-3xl">Other Tools</h1>
                            <li>VS Code</li>
                            <li>Eclipse</li>
                            <li>Intelij</li>
                            <li>PyCharm</li>
                            <li>MatLab</li>
                            <li>Git</li>
                        </ul>
                    </div>
                </div>
            </section>

            <h1 className="min-h-full bg-stone-900 text-center text-4xl pb-12 text-white font-bold w-full py-40">Contact Me!</h1>
            <section className="bg-stone-900 flex w-full justify-center">
                <div className="w-full sm:w-2/3 bg-stone-800 p-20 flex flex-wrap justify-center">
                    <p className="text-center text-2xl pb-10">I&apos;m looking for any job oppurtunities so please send me a message!</p>
                    <div className="w-full" />
                    <Link href={"/contact"} className="flex text-center px-5 py-3 text-2xl rounded-md text-purple-500 border-solid border-purple-500 border hover:bg-purple-500 hover:text-white hover:ease-in transition-all">Contact</Link>

                </div>
            </section>
        </main>
    );
}
