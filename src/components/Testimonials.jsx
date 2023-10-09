import React from 'react'
import {FcApproval} from "react-icons/fc"

const Testimonials = () => {
  return (
    <div className='testimonials'>
        <div className='testimonial-text'>
            <h3>Testimonials</h3>
            <h1>User love Netglobe</h1>
            <p>See what our members are saying. Trusted by 1200+ world class businesses</p>
            <a href="/">Read all 2,432 reviews</a>
        </div>
        <div className='testimonial-cards'>
            <div className='card'>
                <img src="person1.png" alt="" />
                <p>You made it so simple. Our new way of doing trade has become so much simple.</p>
                <div className='icons'>
                    <a href="/">@alexborm</a>
                    <FcApproval size={18} className='icon' />
                </div>
            </div>
            <div className='card'>
                <img src="person2.png" alt="" />
                <p>I just love how these people build this finance service that is so flexible and easy to use.</p>
                <div className='icons'>
                    <a href="/">@chrisjames</a>
                    <FcApproval size={18} className='icon'/>
                </div>
            </div>
            <div className='card'>
                <img src="person3.png" alt="" />
                <p>Netglobe very professional- highly recommended for personal and businesses.</p>
                <div className='icons'>
                    <a href="/">@skairubelga</a>
                    <FcApproval size={18} className='icon'/>
                </div>
            </div>
            <div className='card'>
                <img src="person4.jpg" alt="" />
                <p>I am always happy and feel secure that the transaction between me and my client</p>
                <div className='icons'>
                    <a href="/">@mal</a>
                    <FcApproval size={18} className='icon'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonials