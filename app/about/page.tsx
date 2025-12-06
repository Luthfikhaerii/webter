"use client"
import React from 'react';

export default function AboutPage() {
    const values = [
        {
            img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop",
            title: "Code Excellence",
            description: "We believe in writing clean, maintainable, and well-documented code that stands the test of time."
        },
        {
            img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
            title: "Client Partnership",
            description: "Your success is our success. We work closely with you, treating your project as our own."
        },
        {
            img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=800&auto=format&fit=crop",
            title: "Innovation First",
            description: "We stay ahead of technology trends to deliver solutions that are modern, efficient, and future-proof."
        },
        {
            img: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop",
            title: "Goal Oriented",
            description: "Every line of code serves a purpose. We focus on delivering measurable results that matter."
        }
    ];

    const principles = [
        {
            number: "01",
            title: "Quality Over Speed",
            text: "We don't rush. We build software that's done right the first time, ensuring stability and scalability for the long term."
        },
        {
            number: "02",
            title: "Transparent Communication",
            text: "No jargon, no hidden processes. We keep you informed at every stage, making complex technical decisions easy to understand."
        },
        {
            number: "03",
            title: "Human-Centered Design",
            text: "Technology should serve people, not complicate their lives. We design with empathy, putting user experience at the heart of everything we build."
        },
        {
            number: "04",
            title: "Continuous Improvement",
            text: "Software is never truly finished. We iterate, refine, and evolve our solutions based on real feedback and changing needs."
        }
    ];

    const whyUs = [
        {
            img: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800&auto=format&fit=crop",
            title: "Technical Depth",
            text: "We don't just use frameworks—we understand them. Our team stays current with best practices and emerging technologies."
        },
        {
            img: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=800&auto=format&fit=crop",
            title: "Personal Touch",
            text: "You'll work directly with the people building your product. No middlemen, no confusion—just clear, honest communication."
        },
        {
            img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop",
            title: "Business Focus",
            text: "We think beyond code. Every technical decision is made with your business goals and user needs in mind."
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* HERO SECTION - Struktur sama, konten diubah */}
            <section className="w-full">
                {/* Bagian atas — background image penuh */}
                <div className="relative w-full h-[60vh] md:h-[60vh] overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800"
                        alt="About Webter"
                        className="object-cover w-full h-full"
                    />
                </div>

                {/* Bagian bawah — konten */}
                <div className="bg-gray-100 min-h-[40vh] w-full px-6 md:px-20">
                    <div className="max-w-7xl py-16 mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">

                        {/* Left Title */}
                        <h1 className="text-4xl md:text-5xl font-light tracking-wide text-gray-900">
                            ABOUT WEBTER
                        </h1>

                        {/* Right Description */}
                        <p className="text-lg md:text-xl text-gray-900 leading-relaxed">
                            We are a software development team driven by passion for creating 
                            elegant, functional, and lasting digital solutions. Founded on the 
                            belief that great software comes from great collaboration.
                        </p>
                    </div>
                </div>
            </section>

            {/* WHO WE ARE SECTION */}
            <section className="w-full py-20 md:py-32 px-6 md:px-20 bg-white">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12">
                    {/* Left - Title */}
                    <div className="md:col-span-2">
                        <h2 className="text-3xl md:text-4xl font-light text-gray-900 sticky top-24">
                            Who We Are
                        </h2>
                    </div>

                    {/* Right - Content */}
                    <div className="md:col-span-3 space-y-6">
                        <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
                            <span className="font-medium">Webter</span> is a software development studio 
                            specializing in web-based solutions. We're not a giant agency with layers 
                            of bureaucracy—we're a close-knit team of developers, designers, and strategists 
                            who genuinely care about the work we produce.
                        </p>
                        <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
                            Born from frustration with cookie-cutter solutions and surface-level 
                            development, we set out to build a different kind of software company. 
                            One that values <span className="font-medium">craftsmanship over shortcuts</span>, 
                            meaningful relationships over transactional projects, and sustainable growth 
                            over quick wins.
                        </p>
                        <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
                            Whether you're a startup with an ambitious idea or an established business 
                            looking to modernize, we bring the technical expertise and creative thinking 
                            to turn your vision into reality.
                        </p>
                    </div>
                </div>
            </section>

            {/* OUR PRINCIPLES SECTION */}
            <section className="w-full py-20 md:pb-32 md:pt-16 px-6 md:px-20 bg-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
                        Our Guiding Principles
                    </h2>
                    <p className="text-xl text-gray-600 mb-16 max-w-3xl">
                        These aren't just words on a page. They're the standards we hold 
                        ourselves to on every project, every day.
                    </p>

                    <div className="space-y-12">
                        {principles.map((principle, idx) => (
                            <div 
                                key={idx}
                                className="border-l-4 border-gray-900 pl-8 py-4"
                            >
                                <div className="flex items-baseline gap-6 mb-3">
                                    <span className="text-5xl font-light text-gray-300">
                                        {principle.number}
                                    </span>
                                    <h3 className="text-2xl md:text-3xl font-medium text-gray-900">
                                        {principle.title}
                                    </h3>
                                </div>
                                <p className="text-lg text-gray-700 leading-relaxed ml-20">
                                    {principle.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CLOSING SECTION */}
            <section className="w-full py-20 md:py-32 px-6 md:px-20 bg-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-5xl font-light text-gray-900 mb-8 leading-tight">
                        Let's build something meaningful together.
                    </h2>
                    <p className="text-xl text-gray-600 mb-12">
                        Whether you have a clear vision or just the spark of an idea, 
                        we're here to help you bring it to life.
                    </p>
                </div>
            </section>
        </div>
    );
}