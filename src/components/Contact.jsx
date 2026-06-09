import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Contact() {
    return (
        <section
            id="contact"
            className="min-h-screen flex flex-col justify-center items-center text-center px-6"
        >

            {/* MAIN CTA */}
            <h2 className="text-3xl md:text-5xl font-bold text-white max-w-2xl leading-snug">
                Let’s build something meaningful together.
            </h2>

            <p className="text-purple-300 mt-4 max-w-md">
                Open to opportunities in SaaS, technical support, and AI-driven systems.
            </p>

            {/* EMAIL BUTTON (PRIMARY ACTION) */}
            <a
                href="mailto:divitap1281@gmail.com"
                className="mt-10 flex items-center gap-3 px-8 py-4 rounded-full
                bg-gradient-to-r from-purple-500 to-pink-500 
                text-white font-medium 
                shadow-lg shadow-purple-500/30
                hover:scale-105 transition"
            >
                <MdEmail />
                Get in Touch
            </a>

            {/* DIVIDER */}
            <div className="w-24 h-[1px] bg-white/10 my-10"></div>

            {/* SOCIAL LINKS */}
            <div className="flex gap-8 text-purple-300 text-sm">

                <a
                    href="https://www.linkedin.com/in/philomina-divita"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition"
                >
                    LinkedIn
                </a>

            </div>

        </section>
    );
}