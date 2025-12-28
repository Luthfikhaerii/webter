"use client"
import React, { useState } from 'react';

export default function PortfolioPage() {
    const [activeFilter, setActiveFilter] = useState('all');

    const filters = [
        { id: 'all', label: 'All Projects' },
        { id: 'web', label: 'Web Development' },
        { id: 'system', label: 'Information System' },
        { id: 'design', label: 'UI/UX Design' }
    ];

    const projects = [
        {
            id: 1,
            title: "E-Commerce Platform for Fashion Retail",
            category: "web",
            date: "March 2024",
            description: "A modern e-commerce platform with real-time inventory management and seamless checkout experience.",
            img: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1400&auto=format&fit=crop"
        },
        {
            id: 2,
            title: "Hospital Management System",
            category: "system",
            date: "January 2024",
            description: "Comprehensive hospital information system managing patient records, appointments, and staff operations.",
            img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1400&auto=format&fit=crop"
        },
        {
            id: 3,
            title: "FinTech Mobile App Interface Design",
            category: "design",
            date: "November 2023",
            description: "Intuitive mobile banking interface designed for seamless money management and investment tracking.",
            img: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=1400&auto=format&fit=crop"
        },
        {
            id: 4,
            title: "Corporate Website Redesign",
            category: "web",
            date: "September 2023",
            description: "Complete website overhaul for a leading manufacturing company with focus on storytelling and conversions.",
            img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1400&auto=format&fit=crop"
        },
        {
            id: 5,
            title: "Inventory Management Portal",
            category: "system",
            date: "February 2024",
            description: "Real-time inventory tracking system with automated reordering and comprehensive analytics dashboard.",
            img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1400&auto=format&fit=crop"
        }
    ];

    const filteredProjects = activeFilter === 'all'
        ? projects
        : projects.filter(p => p.category === activeFilter);

    return (
        <div className="min-h-screen bg-white">
            {/* HERO SECTION */}
            <section className="w-full">
                <div className="relative w-full h-[60vh] md:h-[60vh] overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1547658719-da2b51169166?w=800"
                        alt="Portfolio"
                        className="object-cover w-full h-full"
                    />
                </div>

                <div className="bg-gray-100 min-h-[40vh] w-full px-6 md:px-20">
                    <div className="max-w-7xl py-16 mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
                        <h1 className="text-4xl md:text-5xl font-light tracking-wide text-gray-900">
                            OUR PORTFOLIO
                        </h1>

                        <p className="text-lg md:text-xl text-gray-900 leading-relaxed">
                            A curated selection of projects that showcase our commitment to
                            building exceptional digital experiences—from custom web applications
                            to complex enterprise systems.
                        </p>
                    </div>
                </div>
            </section>

            {/* INTRO WITH SPLIT IMAGES */}
            <section className="w-full py-20 md:py-32 px-6 md:px-20 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-20">
                        <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6 max-w-3xl">
                            Every project is a story of collaboration, innovation, and craftsmanship.
                        </h2>
                        <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl">
                            We work closely with our clients to understand their unique challenges
                            and deliver solutions that drive real business value.
                        </p>
                    </div>

                    {/* Split Images Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="h-96 rounded-lg overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1400&auto=format&fit=crop"
                                alt="Team collaboration"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                        <div className="h-96 rounded-lg overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1400&auto=format&fit=crop"
                                alt="Development process"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* PROJECTS LIST - Card Style */}
            <section className="w-full py-20 px-6 md:px-20 bg-white">
                <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6 max-w-3xl mb-16">
                    Every project is a story of collaboration, innovation, and craftsmanship.
                </h2>
                <div className="max-w-7xl mx-auto">
                    <div className="space-y-16">
                        {filteredProjects.map((project, idx) => (
                            <article
                                key={project.id}
                                className="group cursor-pointer bg-white rounded-sm overflow-hidden  transition-all duration-500"
                                style={{
                                    animation: `fadeIn 0.6s ease-out ${idx * 0.1}s both`
                                }}
                            >
                                <div className="relative h-80 md:h-96 overflow-hidden bg-gray-100">
                                    <img
                                        src={project.img}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                </div>

                                <div className="py-8">
                                    <div className="mb-4">
                                        <span className="text-sm text-gray-500">{project.date}</span>
                                    </div>

                                    <h3 className="text-2xl md:text-3xl font-medium text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">
                                        {project.title}
                                    </h3>

                                    <p className="text-lg text-gray-700 leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>
                            </article>
                        ))}
                    </div>

                    {filteredProjects.length === 0 && (
                        <div className="text-center py-20">
                            <p className="text-xl text-gray-500">No projects found in this category.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* FEATURED FULL WIDTH IMAGE SECTION */}
            <section className="w-full py-20 md:py-32 px-6 md:px-20 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-12 text-center">
                        <span className="text-sm text-gray-500 uppercase tracking-wider">Featured Project</span>
                        <h2 className="text-3xl md:text-4xl font-light text-gray-900 mt-4 mb-6">
                            Enterprise Resource Planning System
                        </h2>
                        <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                            A comprehensive ERP system that unified operations across 5 manufacturing
                            facilities, reducing manual data entry by 80% and improving decision-making
                            with real-time analytics.
                        </p>
                    </div>

                    <div className="h-[60vh] rounded-2xl overflow-hidden mb-12">
                        <img
                            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1400&auto=format&fit=crop"
                            alt="ERP Dashboard"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        <div className="text-center">
                            <div className="text-sm text-gray-500 mb-2">Industry</div>
                            <div className="text-lg font-medium text-gray-900">Manufacturing</div>
                        </div>
                        <div className="text-center">
                            <div className="text-sm text-gray-500 mb-2">Timeline</div>
                            <div className="text-lg font-medium text-gray-900">8 months</div>
                        </div>
                        <div className="text-center">
                            <div className="text-sm text-gray-500 mb-2">Team Size</div>
                            <div className="text-lg font-medium text-gray-900">6 developers</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="w-full py-20 md:py-32 px-6 md:px-20 bg-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-5xl font-light text-gray-900 mb-8 leading-tight">
                        Have a project in mind?
                    </h2>
                    <p className="text-xl text-gray-600 mb-12">
                        Let's discuss how we can help bring your vision to life with
                        software that's built to last.
                    </p>
                </div>
            </section>

            <style jsx>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </div>
    );
}