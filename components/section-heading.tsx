'use client';
import React from 'react'

type SectionHeadingProps = {
    children: React.ReactNode
}

const SectionHeading = ({ children }: SectionHeadingProps) => {
    return (
        <section>
            <h2 className='text-3xl font-medium capitalize mb-8 text-center'>
                {children}
            </h2>
        </section>
    )
}

export default SectionHeading;