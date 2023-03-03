import React, {useState} from 'react'
import './Navbar.css';
import {MdTravelExplore} from 'react-icons/md';
import {AiFillCloseCircle} from 'react-icons/ai';
import {TbGridDots} from 'react-icons/tb';


const Navbar = () => {
  const [active, setActive] = useState('navBar')
  const showNav = () => {
    setActive('navBar activeNavbar')
  }

  const removeNavbar = () => {
    setActive('navBar')
  }

  return (
    <section className='navBarSection'>
<header className="header flex">
<div className="logoDiv">
<a href='#' className="logo flex">
    <h1>
    <MdTravelExplore className="icon"/>
    Link Voyages.</h1>
</a>
</div>

<div className={active}>
<ul className="navLists flex">
<li className="navItem">
<a href="#" className="navlink">Acceuil</a>
</li>

<li className="navItem">
<a href="#" className="navlink">Hotels</a>
</li>

<li className="navItem">
<a href="#" className="navlink">Voyages</a>
</li>

<li className="navItem">
<a href="#" className="navlink">Excursions</a>
</li>

<li className="navItem">
<a href="#" className="navlink">Vols</a>
</li>

<li className="navItem">
<a href="#" className="navlink">Contact</a>
</li>

<li className="navItem">
<a href="#" className="navlink">A Propos</a>
</li>

<button className='btn'>
  <a href="#">Reserver Maintenant</a>
</button>
</ul>

<div onClick={removeNavbar} className="closeNavbar">
  <AiFillCloseCircle className="icon"/>
</div>
</div>

<div onClick={showNav} className="toggleNavbar">
  <TbGridDots className="icon"/>
</div>
</header>
    </section>
  )
}

export default Navbar
