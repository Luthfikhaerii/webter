"use client"
import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import Image from 'next/image';

export default function ServicesPage() {
    const [activeService, setActiveService] = useState('web');

    const services = [
        {
            id: "web-dev",
            title: "Web Development",
            description:
                "We build modern, fast, and scalable websites using clean architecture and best-practice engineering — delivering exceptional digital experiences for users and businesses.",
            img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1400&auto=format&fit=crop",
            alt: "Web Development illustration",
        },
        {
            id: "custom-is",
            title: "Custom Information System",
            description:
                "Tailored system solutions designed to optimize workflows, streamline operations, and support accurate data management — built to scale with your organization’s growth.",
            img: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1400&auto=format&fit=crop",
            alt: "Custom information system",
        },
        // {
        //     id: "ui-ux",
        //     title: "UI / UX Design",
        //     description:
        //         "Creating intuitive interfaces and seamless user experiences grounded in research, aesthetics, and clarity — ensuring every interaction feels meaningful and effortless.",
        //     img: "https://images.unsplash.com/photo-1559027615-3eaa1cfe5f5b?q=80&w=1400&auto=format&fit=crop",
        //     alt: "UI UX Design",
        // },
        {
            id: "consult",
            title: "Software Consultation",
            description:
                "Guiding teams and businesses in choosing the right technologies, improving system architecture, and making informed decisions to build sustainable, future-ready digital solutions.",
            img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1400&auto=format&fit=crop",
            alt: "Consultation",
        },
    ];

    const currentService = services.find(s => s.id === activeService) || services[0];

    return (
        <div className="min-h-screen bg-white">
            <section className="w-full">
                {/* Bagian atas — background image penuh */}
                <div className="relative w-full h-[60vh] md:h-[60vh] overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800" // ganti dengan gambar kamu
                        alt="Service Header"
                        className="object-cover w-full"
                    />
                </div>

                {/* Bagian bawah — konten */}
                <div className="bg-gray-100 min-h-[40vh] w-full px-6 md:px-20">
                    <div className="max-w-7xl py-16 mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">

                        {/* Left Title */}
                        <h1 className="text-4xl md:text-5xl font-light tracking-wide text-gray-900">
                            OUR SERVICE
                        </h1>

                        {/* Right Description */}
                        <p className="text-lg md:text-xl text-gray-900 leading-relaxed">
                            We build digital experiences that are fast, scalable, and visually
                            stunning—combining modern development, clean architecture, and
                            functional design to elevate your business presence online.
                        </p>
                    </div>
                </div>
            </section>

            <section className="w-full pt-32 px-6 md:px-20 bg-white">

                {/* TEXT SECTION */}
                <div className="max-w-7xl mx-auto mb-16 space-y-8">
                    <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                        For us, software development is not just writing code, but a craft —
                        shaped by clarity, precision, and a commitment to long-term value.
                        We don’t simply build digital products; we create systems that
                         evolve, scale, and endure.
                    </p>

                </div>

                {/* IMAGE SECTION */}
                <div className="max-w-7xl mx-auto">
                    <img
                        src="https://images.unsplash.com/photo-1527430253228-e93688616381?q=80&w=1600&auto=format&fit=crop"
                        alt="Modern software development workspace"
                        className="w-full h-96 rounded-sm object-cover shadow-md"
                    />
                </div>

            </section>

            <section className="w-full py-16 md:py-32 px-6 md:px-20 bg-white">
                

                <div className="max-w-7xl mx-auto space-y-16">
                    {/* Heading atas */}
                <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-16 max-w-3xl">
                    Empowering your business through modern software craftsmanship.
                </h2>
                    {services.map((s, idx) => (
                        <article
                            key={s.id}
                            className="flex flex-col md:flex-row items-center md:items-start gap-8"
                        >
                            {/* Image - di desktop lebar 50% (kiri), di mobile 100% */}
                            <div className="w-full md:w-1/2">
                                <img
                                    src={s.img}
                                    alt={s.alt}
                                    className="w-full h-80 rounded-sm object-cover shadow-sm"
                                    loading="lazy"
                                />
                            </div>

                            {/* Text */}
                            <div className="w-full md:w-1/2">
                                <h3 className="text-4xl md:text- text-gray-900 font-medium mb-4">
                                    {s.title}
                                </h3>
                                <p className="text-lg text-gray-800 leading-relaxed">
                                    {s.description}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </div>
    );
}