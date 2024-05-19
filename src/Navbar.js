import React, { useEffect, useState } from 'react'
import "./Navbar.css"

export const Navbar = () => {
    const [handleShow , setHandleShow] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setHandleShow(true);
            } else {
                setHandleShow(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup function
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


  return (
    <div className={`nav  ${handleShow && "nav__black"}`}>
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Netflix_Logomark.png/512px-Netflix_Logomark.png' alt='' className='Nav__logo' />
          <img src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt='' className='Nav__avatar' />

    </div>
  )
}
