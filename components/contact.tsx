'use client';

import React, { useState } from 'react';
import SectionHeading from './section-heading';
import { FaPaperPlane } from 'react-icons/fa';
import { motion } from 'framer-motion';
import useSectionInView from '@/lib/hooks';
import Link from 'next/link';

const Contact = () => {
    const { ref } = useSectionInView("Contact");
    const [formData, setFormData] = useState({
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            // Here you would typically send the form data to your backend
            // For now, we'll simulate a successful submission
            await new Promise(resolve => setTimeout(resolve, 1000));
            setSubmitStatus('success');
            setFormData({ email: '', message: '' });
        } catch (error) {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <motion.section
            ref={ref}
            id='contact'
            className='mb-20 sm:mb-28 scroll-mt-28 w-full max-w-[42rem]'
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
        >
            <SectionHeading>Contact me</SectionHeading>
            <p className='text-gray-400 mb-8 text-center'>
                Please contact me directly at{' '}
                <Link href="mailto:mu163953@gmail.com" className='underline text-blue-600 hover:text-blue-800'>
                    ranausman5939@gmail.com
                </Link>
                {' '}or through this form
            </p>

            <form
                onSubmit={handleSubmit}
                className='mt-10 flex flex-col gap-4'
            >
                <div className='relative'>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        maxLength={500}
                        placeholder="Your email"
                        className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none bg-white/80 backdrop-blur-sm'
                    />
                </div>
                <div className='relative'>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        maxLength={5000}
                        placeholder="Your message"
                        className='w-full h-52 px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none resize-none bg-white/80 backdrop-blur-sm'
                    />
                </div>
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className='group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-700 active:scale-105 disabled:opacity-65 disabled:cursor-not-allowed'
                >
                    {isSubmitting ? (
                        <div className='h-5 w-5 animate-spin rounded-full border-b-2 border-white'></div>
                    ) : (
                        <>
                            Submit{' '}
                            <FaPaperPlane className='text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1' />
                        </>
                    )}
                </button>

                {submitStatus === 'success' && (
                    <p className='text-green-600 text-center mt-2'>
                        Message sent successfully!
                    </p>
                )}
                {submitStatus === 'error' && (
                    <p className='text-red-600 text-center mt-2'>
                        Something went wrong. Please try again.
                    </p>
                )}
            </form>
        </motion.section>
    );
};

export default Contact;