import React from 'react'
import SectionHeading from './section-heading'
import { FaPaperPlane } from 'react-icons/fa'

const Contact = () => {
    return (
        <section id='contact' className='mb-20 sm:mb-28'>
            <SectionHeading>Contact me</SectionHeading>
            <p>Please contact me directly at
                <a href="mailo:example@gmail.com" className='underline'>
                    mu163953@gmail.com
                </a>
                or through this form</p>

            <form action="">
                <input type="email" />
                <textarea />
                <button>
                    Submit <FaPaperPlane />
                </button>
            </form>
        </section>
    )
}

export default Contact