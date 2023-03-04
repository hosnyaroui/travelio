import React, {useEffect} from 'react';
import './Footer.css';
import video2 from '../../Assets/video2.mp4';
import {FiSend} from 'react-icons/fi';
import {MdOutlineTravelExplore} from 'react-icons/md';
import {AiOutlineTwitter} from 'react-icons/ai';
import {AiFillYoutube} from 'react-icons/ai';
import {AiFillInstagram} from 'react-icons/ai';
import {FaTripadvisor} from 'react-icons/fa';
import {FiChevronRight} from 'react-icons/fi';

import Aos from 'aos';
import 'aos/dist/aos.css';


const Footer = () => {

  useEffect(() => {
    Aos.init({duration: 2000})
    
    }, [])

  return (
    <section className='footer'>
<div className="videoDiv">
<video src={video2} loop autoPlay muted type="video/mp4"></video>

</div>

<div className="secContent container">
<div className="contactDiv flex">
<div data-aos="fade-up" className="text">
  <small>Rester en Contact</small>
  <h2>voyagez avec nous</h2>
</div>

<div className="inputDiv flex">
  <input data-aos="fade-up" type="text" placeholder='entrer Adresse E-mail'/>
  <button data-aos="fade-up"  className='btn flex' type='submit'>
    ENVOYER<FiSend className="icon"/>
  </button>
</div>
</div>

<div className="footerCard flex">
<div className="footerIntro flex">
  <div className="logoDiv">
    <a href="#" className='logo flex'>
    <MdOutlineTravelExplore className="icon" />
    Travelio.
    </a>
  </div>

<div data-aos="fade-up" className="footerParagraph">
Avec Travelio, il n'a jamais été simple de vivre des moments inoubliables.
</div>

<div data-aos="fade-up" className="footerSocials flex">
  <AiOutlineTwitter  className="icon"/>
  <AiFillYoutube  className="icon"/>
  <AiFillInstagram  className="icon"/>
  <FaTripadvisor className="icon"/>
</div>
</div>
<div className="footerLinks grid">
<div data-aos="fade-up" className="linkGroup">
  <span className="groupTitle">
NOTRE AGENCE
  </span>

<li className="footerList flex">
  <FiChevronRight className="icon" />
  Services
</li>

<li className="footerList flex">
  <FiChevronRight className="icon" />
  Agence
</li>

<li className="footerList flex">
  <FiChevronRight className="icon" />
  Tourismes
</li>

<li className="footerList flex">
  <FiChevronRight className="icon" />
  Paiement
</li>

</div>
<div data-aos="fade-up" className="linkGroup">
  <span className="groupTitle">
NOS PARTENAIRES
  </span>

<li className="footerList flex">
  <FiChevronRight className="icon" />
  Bookings
</li>

<li className="footerList flex">
  <FiChevronRight className="icon" />
  Location Voitures
</li>

<li className="footerList flex">
  <FiChevronRight className="icon" />
  Hotels
</li>

<li className="footerList flex">
  <FiChevronRight className="icon" />
  Trip Advisor
</li>

</div>
</div>

<div className="footerDiv">
  <small>Merci pour votre confiance</small>
</div>

</div>



</div>

    </section>
  )
}

export default Footer
