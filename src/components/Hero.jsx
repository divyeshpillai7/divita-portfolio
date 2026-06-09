import profile from "../assets/profile.png";
import { Link } from "react-router-dom";

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center px-6 md:px-16">

            <div className="grid md:grid-cols-2 gap-12 items-center w-full max-w-6xl">

                {/* LEFT CONTENT */}
                <div className="text-center md:text-left">

                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white">
                        Philomina Divita
                    </h1>

                    <p className="mt-4 text-lg text-purple-200">
                        Technical Support Engineer
                    </p>

                    <p className="mt-4 text-sm text-purple-300 max-w-md mx-auto md:mx-0">
                        Building scalable and elegant digital solutions with a focus on performance and user experience.
                    </p>

                    <div className="mt-8 flex gap-4 justify-center md:justify-start flex-wrap">

                        {/* Primary Button */}
                        <a
                            href="#projects"
                            className="px-6 py-3 rounded-full 
                            bg-gradient-to-r from-purple-500 to-pink-500 
                            text-white font-medium 
                            shadow-lg shadow-purple-500/30 
                            hover:scale-105 transition"
                        >
                            View Projects
                        </a>

                        {/* Resume Button */}
                        <Link
                            to="/resume"
                            className="px-6 py-3 rounded-full 
                            bg-white/10 backdrop-blur-xl 
                            border border-purple-400/30 
                            text-purple-200 
                            hover:bg-purple-500/10 hover:scale-105 
                            transition"
                        >
                            Resume
                        </Link>

                    </div>
                </div>

                {/* RIGHT CONTENT (PROFILE) */}
                <div className="flex justify-center">

                    <div className="relative">

                        {/* Soft Glow */}
                        <div className="absolute inset-0 rounded-3xl 
                        bg-purple-500/20 blur-3xl"></div>

                        {/* Glass Card */}
                        <div className="relative p-3 rounded-3xl 
                        bg-white/10 backdrop-blur-2xl 
                        border border-white/20 shadow-xl">

                            <img
                                src={profile}
                                alt="profile"
                                className="w-64 h-64 object-cover rounded-2xl"
                            />

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}