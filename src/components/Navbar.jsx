import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
    const [active, setActive] = useState("home");

    const sections = ["home", "about", "experience", "projects", "contact"];

    useEffect(() => {
        const handleScroll = () => {
            let current = sections[0];

            sections.forEach((section) => {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    if (window.scrollY >= offsetTop - 150) {
                        current = section;
                    }
                }
            });

            setActive(current);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { id: "home", label: "Home" },
        { id: "about", label: "About" },
        { id: "experience", label: "Experience" },
        { id: "projects", label: "Projects" },
        { id: "contact", label: "Contact" },
    ];

    return (
        <div className="fixed top-6 w-full flex justify-center z-50">
            <div className="flex gap-8 px-8 py-4 rounded-full 
                bg-white/10 backdrop-blur-xl 
                border border-white/20 shadow-xl">

                {navItems.map((item) => (
                    <a
                        key={item.id}
                        href={`#${item.id}`}
                        className="relative text-sm font-medium text-purple-200 hover:text-white transition"
                    >
                        {item.label}

                        {/* Active underline */}
                        {active === item.id && (
                            <motion.div
                                layoutId="underline"
                                className="absolute left-0 -bottom-1 h-[2px] w-full 
                                bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
                            />
                        )}
                    </a>
                ))}
            </div>
        </div>
    );
}