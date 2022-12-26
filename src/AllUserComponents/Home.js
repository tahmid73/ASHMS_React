import { useState } from "react";
import Navbar from "./Navbar";
const Home=()=>{
    return(
        <section className="bg-white dark:bg-white">
            <Navbar/>
        <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
            <div className="mr-auto place-self-center lg:col-span-7">
                <h1 className="max-w-2xl mb-4 text-4xl font-extrabold  text-gray-800 leading-none tracking-tight md:text-5xl xl:text-6xl ">Online <br/>Hospital</h1>
                <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl ">Get your necessary medicine and test<a href="https://tailwindcss.com" className="hover:underline">tests</a> prescription from doctor <a href="https://flowbite.com/docs/getting-started/introduction/" className="hover:underline">and</a> bla <a href="https://flowbite.com/blocks/" className="hover:underline">bla</a>.</p>
                <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                    <a href="/login" className="whiteButton">
                        Get started
                    </a> 
                </div>
            </div>
            <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                {/* <img src="./imag    es/hero.png" alt="hero image"/> */}
            </div>                
        </div>
    </section>
    )
}

export default Home;    