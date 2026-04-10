'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Project from '@/app/utilities/project.json'
import { ProjectCard } from '@/app/components/ProjectCard'

export default function OurWork() {
    const items = Project;
    const itemsPerPage = 9;

    const [currentPage, setCurrentPage] = useState(1);
    const observerTarget = useRef(null);

    const filters = ["all", "react", "next", "vue", "nuxt"];
    const [active_filter, set_active_fitler] = useState(filters[0]);

    const drop_filter = ["all", "landingpage", "dashboard", 'crypto', "website"];
    const [active_drop_filter, set_active_drop_filter] = useState(drop_filter[0]);

    // FILTER ITEMS
    const filteredItems = items.filter((item) => {
        const techMatch = active_filter === "all" || item.tags.includes(active_filter);
        const typeMatch = active_drop_filter === "all" || item.tags.includes(active_drop_filter);
        return techMatch && typeMatch;
    });

    // PAGINATION
    const paginatedItems = filteredItems.slice(0, currentPage * itemsPerPage);

    // INFINITE SCROLL WITH INTERSECTION OBSERVER
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && paginatedItems.length < filteredItems.length) {
                    setCurrentPage((prev) => prev + 1);
                }
            },
            { threshold: 0.1 }
        );

        if (observerTarget.current) {
            observer.observe(observerTarget.current);
        }

        return () => observer.disconnect();
    }, [paginatedItems.length, filteredItems.length]);

    // RESET PAGE ON FILTER CHANGE
    useEffect(() => {
        setCurrentPage(1);
    }, [active_filter, active_drop_filter]);

    return (
        <>
            <section className='py-8 md:py-12 lg:py-16 mt-20'>
                <div className='container mx-auto'>
                    <div className="flex items-center flex-wrap justify-between gap-4 mb-4 md:mb-6 lg:mb-8">
                        <div className="flex items-center flex-wrap gap-y-2 gap-x-2">
                            {filters.map((item, idx) => (
                                <button onClick={() => set_active_fitler(item)} className={`text-sm md:text-base  font-medium rounded-lg px-4 capitalize min-h-10 cursor-pointer ${item === active_filter ? 'bg-primary text-black' : 'glass'}`} key={idx}>{item}</button>
                            ))}
                        </div>
                        <select onChange={(e) => set_active_drop_filter(e.target.value)} name="" id="" className='outline-none text-sm md:text-base font-medium rounded-lg px-4 capitalize min-h-10 bg-primary/10 text-primary'>
                            {drop_filter.map((item, index) => (
                                <option value={item} key={index}>{item}</option>
                            ))}
                        </select>
                    </div>
                    {paginatedItems.length ?
                        <>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                                {paginatedItems.map((item, index) => (
                                    <ProjectCard
                                        key={index}
                                        image={item.img}
                                        title={item.title}
                                        description={item.des}
                                    />
                                ))}
                            </div>
                            <div ref={observerTarget} className="h-10 mt-8" />
                        </>
                        :
                        <p className='text-center text-base leading-normal capitalize font-medium'>no data found</p>
                    }
                </div>
            </section >
        </>
    )
}
