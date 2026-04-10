"use client"
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
    { name: 'Home', href: 'home' },
        { name: 'About', href: 'about' },
    { name: 'Services', href: 'services' },
    { name: 'Product', href: 'product' },
    { name: 'Our Work', href: 'ourwork' },
    { name: 'Contact', href: 'contact' },
];

const socials = ['Instagram', 'TikTok', 'WhatsApp'];

export default function Navbar() {
    const [activeSection, setActiveSection] = useState('home');
    const [menuOpen, setMenuOpen] = useState(false);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setActiveSection(id);
        }
        setMenuOpen(false);
    };

    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [menuOpen]);

    return (
        <>
            {/* ── NAVBAR ── */}
            <div className="w-full fixed px-6 md:px-16 py-4 flex justify-between items-center z-50">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    onClick={() => scrollToSection('home')}
                    className="flex items-center cursor-pointer group"
                >
                    <div className="w-16 h-16 flex items-center justify-center">
                        <img src="icon.png" className="w-full h-full object-contain" />
                    </div>
                    <span className="text-2xl font-bold tracking-tighter text-black group-hover:text-[#004aad] transition-colors">
                        Webter
                    </span>
                </motion.div>

                <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    onClick={() => setMenuOpen(true)}
                    className="w-12 h-12 bg-black flex flex-col items-center justify-center gap-1.5 cursor-pointer hover:bg-[#004aad] transition-all duration-300"
                    aria-label="Open menu"
                >
                    <div className="w-5 h-[1.5px] bg-white" />
                    <div className="w-5 h-[1.5px] bg-white" />
                    <div className="w-5 h-[1.5px] bg-white" />
                </motion.button>
            </div>

            {/* ── SIDEBAR OVERLAY ── */}
            <AnimatePresence>
                {menuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            key="backdrop"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.4 }}
                            onClick={() => setMenuOpen(false)}
                            className="fixed inset-0 bg-black/20 z-[998]"
                        />

                        {/* Sidebar Panel */}
                        <motion.div
                            key="sidebar"
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
                            className="fixed top-0 right-0 h-full w-full md:w-[480px] bg-[#fcfcfc] z-[999] flex flex-col overflow-hidden border-l border-gray-200"
                        >
                            {/* Header — fixed, tidak ikut scroll */}
                            <div className="flex-shrink-0 flex justify-between items-center px-10 pt-8 pb-4">
                                <span className="text-xs font-bold tracking-[0.25em] uppercase text-gray-400">
                                    Menu
                                </span>
                                <button
                                    onClick={() => setMenuOpen(false)}
                                    className="w-12 h-12 bg-black flex items-center justify-center hover:bg-[#004aad] transition-all duration-300"
                                    aria-label="Close menu"
                                >
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M18 6 6 18" /><path d="m6 6 12 12" />
                                    </svg>
                                </button>
                            </div>

                            <div className="flex-shrink-0 mx-10 h-px bg-gray-200" />

                            {/* Scrollable area — nav + bottom */}
                            <div className="flex-1 overflow-y-auto overscroll-contain">

                                {/* Nav Items */}
                                <nav className="flex flex-col px-10 py-4">
                                    {navItems.map((item, idx) => (
                                        <motion.div
                                            key={item.href}
                                            initial={{ opacity: 0, x: 40 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.1 + idx * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                            className="border-b border-gray-200 group"
                                        >
                                            <button
                                                onClick={() => scrollToSection(item.href)}
                                                className="w-full flex items-baseline justify-between py-6 text-left"
                                            >
                                                <span className="text-3xl font-black tracking-[-0.04em] leading-none text-black group-hover:text-[#004aad] transition-colors duration-300">
                                                    {item.name}
                                                </span>
                                                <span className="text-xs font-mono text-gray-300 group-hover:text-[#004aad] transition-colors duration-300 ml-4 shrink-0">
                                                    0{idx + 1}
                                                </span>
                                            </button>
                                        </motion.div>
                                    ))}
                                </nav>



                            </div>{/* end scrollable */}
                        </motion.div >
                    </>
                )
                }
            </AnimatePresence >
        </>
    );
}