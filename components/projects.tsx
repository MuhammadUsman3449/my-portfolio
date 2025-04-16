'use client';
import React from 'react'
import { motion } from 'framer-motion'
import SectionHeading from './section-heading';
import { projectsData } from '@/lib/data';
import Project from './project';
import useSectionInView from '@/lib/hooks';

const Projects = () => {
    const { ref } = useSectionInView("Projects", 0.5);

    return (
        <motion.section ref={ref} id="projects" className='scroll-mt-28 mb-28'>
            <SectionHeading>My Projects</SectionHeading>
            <motion.div>
                {
                    projectsData.map((project, index) => (
                        <React.Fragment key={index}>
                            <Project {...project} />
                        </React.Fragment>
                    ))
                }
            </motion.div>
        </motion.section>
    )
}



export default Projects