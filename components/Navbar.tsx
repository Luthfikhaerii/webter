"use client"
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const navItems = [
    { name: 'HOME', href: '/' },
    { name: 'SERVICE', href: '/service' },
    { name: 'PORTOFOLIO', href: '/portfolio' },
    { name: 'ABOUT', href: '/about' },
    { name: 'CONTACT', href: '/contact' },
];

export default function Navbar() {
    const [isVisible, setIsVisible] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();
    const isHomePage = pathname === '/';
    const isContactPage = pathname === '/contact';

    useEffect(() => {
        setIsVisible(true);

        const handleScroll = () => {
            const scrollPosition = window.scrollY;

            if (isHomePage) {
                // Di halaman home: berubah setelah melewati 100vh
                setIsScrolled(scrollPosition > window.innerHeight);
            } else if (isContactPage) {
                setIsScrolled(false)
            } else {
                // Di halaman lain: berubah setelah melewati 60vh
                setIsScrolled(scrollPosition > window.innerHeight * 0.6);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Check initial scroll position
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, [isHomePage, isContactPage]);

    // Determine colors based on page and scroll state
    const getColors = () => {
        if (isHomePage) {
            // Home page: white text default, black text when scrolled
            return {
                bg: isScrolled ? 'bg-white shadow-md' : 'bg-transparent',
                text: isScrolled ? 'text-gray-900' : 'text-white',
                dot: isScrolled ? 'bg-gray-900' : 'bg-white'
            };
        } if (isContactPage) {
            // Home page: white text default, black text when scrolled
            return {
                bg: 'bg-transparent',
                text: 'text-white',
                dot: 'bg-white'
            };
        }
        else {
            // Other pages: transparent default, white bg when scrolled past 60vh
            return {
                bg: isScrolled ? 'bg-white shadow-md' : 'bg-transparent',
                text: isScrolled ? 'text-gray-900' : 'text-white',
                dot: isScrolled ? 'bg-gray-900' : 'bg-white'
            };
        }
    };

    const colors = getColors();

    return (
        <nav className={`fixed w-full z-20 flex justify-between items-center px-8 md:px-16 py-6 transition-all duration-500 ${colors.bg} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
            <div className={`${colors.text} flex items-center text-lg md:text-xl font-semibold tracking-widest hover:tracking-wide transition-all duration-300 cursor-pointer`}>
                <img src={isScrolled ? "/icon1.png" : "/logo.png"} className="w-12" />
                <p>WEBTER</p>
            </div>

            <div className="flex gap-6 md:gap-12 items-center">
                {navItems.map((item, index) => (
                    <a
                        key={item.name}
                        href={item.href}
                        className={`group hidden md:flex items-center gap-2 ${colors.text} text-xs tracking-wider transition-all duration-500 hover:opacity-70 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}
                        style={{ transitionDelay: `${index * 100}ms` }}
                    >
                        <span className={`w-2 h-2 rounded-full ${colors.dot} transform group-hover:scale-150 transition-transform duration-300`} />
                        {item.name}
                    </a>
                ))}
            </div>
        </nav>
    );
}