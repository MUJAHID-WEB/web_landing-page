import React from 'react'

const Section = () => {
  return (
    <div className='section'>
        <div className='inner-section'>
            <div className='section-text'>
                <h5>For traders</h5>
                <h1>Prefered by traders with fully customisable API</h1>
                <p>Traders on our platform experience a seamless and efficient trading environment, designed for their needs. Our platform prioritizes speed, ensuring lightning-fast trade execution without any lag.</p>
                <div className='button'><a href="/">Explore Now</a></div>
            </div>
            <div className='section-image'>
                <img src="globe.png" alt="" />
            </div>
        </div>
        <div className='card-section'>
            <div className='cards'>
                <div className='card'>
                    <img src="globe.png" alt="" />
                    <h1>Easy Account Registration</h1>
                    <p>Global banking made easy and available in 140+ countries</p>
                    <a href="/">learn &rarr;</a>
                </div>
                <div className='card'>
                    <img src="2.png" alt="" />
                    <h1>Easy Account Registration</h1>
                    <p>Global banking made easy and available in 140+ countries.</p>
                    <a href="/">learn &rarr;</a>
                </div>
                <div className='card'>
                    <img src="3.png" alt="" />
                    <h1>Easy Account Registration</h1>
                    <p>Global banking made easy and available in 140+ countries.</p>
                    <a href="/">learn &rarr;</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Section