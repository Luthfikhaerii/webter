import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-black text-gray-300">
            <div className="mx-auto px-8 md:px-16 py-32">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    {/* Company Info */}
                    <div>
                        <h3 className="text-white text-lg font-medium mb-4">Webter</h3>
                        <p className="text-sm mb-4 font-light">
                            Membangun solusi digital yang inovatif dan berkualitas untuk mengembangkan bisnis Anda.
                        </p>
                        {/* <div className="flex gap-4">
                            <a href="#" className="hover:text-white transition-colors">
                                <FaTiktok size={20} />
                            </a>
                            <a href="#" className="hover:text-white transition-colors">
                                <FaInstagram size={20} />
                            </a>
                            <a href="#" className="hover:text-white transition-colors">
                                <FaWhatsapp size={20} />
                            </a>
                        </div> */}
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-white text-lg font-medium mb-4">Service</h3>
                        <ul className="space-y-2 text-sm font-light">
                            <li><a href="#" className="hover:text-white transition-colors">Web Development</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">UI/UX Design</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Consultation</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Maintenance</a></li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white text-lg font-medium mb-4">Navigation</h3>
                        <ul className="space-y-2 text-sm font-light">
                            <li><a href="/portofolio" className="hover:text-white transition-colors">Portfolio</a></li>
                            <li><a href="/about" className="hover:text-white transition-colors">About</a></li>
                            <li><a href="/contact" className="hover:text-white transition-colors">Kontak</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white text-lg font-medium mb-4">Contact Us</h3>
                        <ul className="space-y-3 text-sm font-light">
                            <li className="flex items-start gap-2">
                                <MapPin size={18} className="mt-1 flex-shrink-0" />
                                <span>Jl. Terusan Bojongsoang<br />Bandung, Indonesia</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Phone size={18} className="flex-shrink-0" />
                                <a href="tel:+62211234567" className="hover:text-white transition-colors">
                                    +62815-6386-2944
                                </a>
                            </li>
                            <li className="flex items-center gap-2">
                                <Mail size={18} className="flex-shrink-0" />
                                <a href="mailto:info@webdevstudio.com" className="hover:text-white transition-colors">
                                    webterid@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-32 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-center md:text-left">
                        © {currentYear} Webter. All Rights Reserved.
                    </p>
                    <div className="flex gap-6 text-sm">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}