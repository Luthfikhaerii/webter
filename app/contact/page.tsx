"use client"
import { useState, useEffect, useRef } from "react";

export default function Contact() {
    const [isVisible4, setIsVisible4] = useState(false);
    const sectionRef3 = useRef(null);
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        email: '',
        description: ''
    });

    const handleSubmit = () => {
        console.log('Form submitted:', formData);
        alert('Thank you for your message! We will get back to you soon.');
        setFormData({ name: '', company: '', email: '', description: '' });
    };

    const handleChange = (e: any) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };


    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible4(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef3.current) {
            observer.observe(sectionRef3.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div ref={sectionRef3}>
            {/* Contact Section */}
            <div className="bg-black text-white relative overflow-hidden">
                {/* Large AVCI Background Text */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
                    <p className="text-[20rem] md:text-[30rem] lg:text-[40rem] font-bold text-gray-900 opacity-30 select-none">
                        AVCI
                    </p>
                </div>

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 px-8 md:px-16 py-24 md:py-32">
                    {/* Left Side - Text */}
                    <div className={`flex flex-col justify-center transition-all duration-1000 ${isVisible4 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                        <div className="mb-8">
                            <p className="text-xs text-gray-400 uppercase tracking-wider mb-4">CONTACT US</p>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
                                Great architecture begins<br />with a conversation.
                            </h2>
                        </div>

                        <p className="text-gray-400 text-lg mb-8 max-w-md">
                            Reach out to discuss your vision and how we can bring it to life together.
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-4 text-sm">
                            <div className="flex items-start gap-3">
                                <span className="text-gray-500">📍</span>
                                <div>
                                    <p className="text-gray-300">Ljubljana, Slovenia</p>
                                    <p className="text-gray-500">Dunajska cesta 156</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-gray-500">📧</span>
                                <p className="text-gray-300">info@avciarchitects.com</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-gray-500">📞</span>
                                <p className="text-gray-300">+386 1 234 5678</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Contact Form */}
                    <div className={`transition-all duration-1000 delay-300 ${isVisible4 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                        <div className="space-y-6">
                            {/* Name & Company */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full bg-transparent border-b border-gray-700 py-3 text-white placeholder-gray-600 focus:border-white focus:outline-none transition-colors duration-300"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        name="company"
                                        placeholder="Company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        className="w-full bg-transparent border-b border-gray-700 py-3 text-white placeholder-gray-600 focus:border-white focus:outline-none transition-colors duration-300"
                                    />
                                </div>
                            </div>

                            {/* Email */}
                            <div>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-transparent border-b border-gray-700 py-3 text-white placeholder-gray-600 focus:border-white focus:outline-none transition-colors duration-300"
                                />
                            </div>

                            {/* Description */}
                            <div>
                                <textarea
                                    name="description"
                                    placeholder="Details about your description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    rows={6}
                                    className="w-full bg-transparent border-b border-gray-700 py-3 text-white placeholder-gray-600 focus:border-white focus:outline-none transition-colors duration-300 resize-none"
                                />
                            </div>

                            {/* Submit Button */}
                            <div className="pt-6">
                                <button
                                    onClick={handleSubmit}
                                    className="group relative px-12 py-4 border border-white text-white text-sm tracking-wider overflow-hidden transition-all duration-500 hover:text-black"
                                >
                                    <span className="relative z-10">SEND</span>
                                    <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Dot Pattern Overlay */}
                <div className="absolute bottom-0 right-0 w-1/2 h-1/2 opacity-10 pointer-events-none">
                    <div className="w-full h-full" style={{
                        backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
                        backgroundSize: '30px 30px'
                    }} />
                </div>
            </div>
        </div>
    )
}