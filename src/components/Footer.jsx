import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='bulb'>
            <div className='pic'>
                <img src="bulb.png" alt="" />
                <h1>Knowledge Grow Your Influence</h1>
            </div>
            <div className='footer-text'>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis quaerat in error, pariatur optio dolorum corporis dolore maiores suscipit. Quam.</p>
                <a href="/">Get Started</a>
            </div>
        </div>
        <div className='newsletter'>
            <div className='news-left'>
                <h4>Subscribe</h4>
                <h1>Subscribe To Get Latest <br />Update From Us</h1>
                <span className='curve'><img src="curve.png" alt="" /></span>
            </div>
            <div className='news-right'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia explicabo exercitationem quis consequuntur voluptas nihil.</p>
                <form action="">
                    <input type="email" name='email' />
                    <button>Subscribe</button>
                </form>
            </div>
        </div>
        <div className='footer-menu'>
            <h1>TXN</h1>
            <ul className='footer-inner-nav'>
                <li><a href="#hub">Hub</a></li>
                <li><a href="#mint">Mint</a></li>
                <li><a href="#features">Features</a></li>
                <li><a href="#socials">Socials</a></li>
            </ul>
        </div>
        <hr />
        <div>
            <p className='text-center'>&#169; Copyright 2023-2028 | All Right Reserved |</p>
        </div>
    </div>
  )
}

export default Footer