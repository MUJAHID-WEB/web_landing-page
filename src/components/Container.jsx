import React from 'react'

const Container = () => {
  return (
    <div>
        <div className='container'>
            <div className='text'>
                <h3>WEB Experience</h3>
                <h1>Web AUTOMATION</h1>
                <p>Web is a web automated market aggregator and multi-chain batch miner. Web was created with the goal of creating a seamless and frictionless experience...</p>
                <div className='button'><a href="/">Explore Now &#8599;</a></div>
            </div>
            <div className='image'>
                <img src="crypto1.png" alt="" />
            </div>
        </div>
        <div className='partners'>
            <span><img src="webflow.png" alt="" /></span>
            <span><img src="mparticle.png" alt="" /></span>
            <span><img src="chargebee.png" alt="" /></span>
            <span><img src="corsair.svg" alt="" /></span>
            <span><img src="emachines.png" alt="" /></span>
        </div>
    </div>
  )
}

export default Container