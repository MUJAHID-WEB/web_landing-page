import React,{useState, useEffect} from 'react'

const Navbar = () => {
    const [showNav, setShowNav] = useState(false)

    useEffect (() => {
        const innernav = document.querySelector('.inner-nav')
        if(showNav === true){
            innernav.style.left = '0px'
        }
        else{
            innernav.style.left = '-300px'
        }
    }, [showNav])

    const handleClick = () => {
        setShowNav(!showNav)
    }
  return (
    <div className='navbar'>
        <div onClick={handleClick} className={`${showNav ? "hamburger1":"hamburger"}`}></div>
        <div className='logo'>
            <h1>TXN</h1>
            <nav className='menu'>
                <ul className='inner-nav'>
                    <li><a href="#hub">Hub</a></li>
                    <li><a href="#mint">Mint</a></li>
                    <li><a href="#features">Features</a></li>
                    <li><a href="#socials">Socials</a></li>
                </ul>
            </nav>
        </div>
        <div className='button'>
            <a href="/">Contact Us</a>
        </div>
    </div>
  )
}

export default Navbar