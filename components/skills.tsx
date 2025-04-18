'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { skillsData } from '@/lib/data';
import useSectionInView from '@/lib/hooks';
import { motion } from 'framer-motion';

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            dalay: 0.05 * index,
        }
    }),
}

const Skills = () => {
    const { ref } = useSectionInView("Skills");
    return (
        <motion.section id="skills" ref={ref} className='mb-28 max-w-[52rem] scroll-mt-28 text-center sm:mb-40'>
            <SectionHeading>
                My Skills
            </SectionHeading>
            <ul className='flex flex-wrap justify-center gap-4 text-lg text-white'>
                {
                    skillsData.map((skill, index) => (
                        <motion.li
                            variants={fadeInAnimationVariants}
                            initial="initial"
                            whileInView="animate"
                            viewport={{
                                once: true,
                            }}
                            custom={index}
                            key={index}
                            className='bg-gray-900 border border-gray-400/[0.1] rounded-xl px-5 py-3'>
                            {skill}
                        </motion.li>
                    ))
                }
            </ul>
        </motion.section>
    )
}

export default Skills;