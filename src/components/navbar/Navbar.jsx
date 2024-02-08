import { useEffect } from 'react';
import './navbar.scss';
import { useState } from 'react';

const Navbar = () => {
    const [show,setShow] = useState(false);

    useEffect(() => {
window.addEventListener('scroll', () => {
    if(window.scrollY > 100 ) {
        setShow(true)
    } else setShow(false)
    return () => {
        window.removeEventListener('scroll');
    }
})
    },[]);
  return (
    <div className={`navbar ${show && 'nav_black'}`}>

<img src="assets/dagflix3.png" alt="dagflix" className='nav_logo' />
<img src="assets/box.jpg" alt="dagflix" className='nav_box' />

    </div>
  )
}

export default Navbar