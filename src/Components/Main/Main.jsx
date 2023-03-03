import React, {useEffect} from 'react';
import './Main.css';
import img from '../../Assets/img1.jpg';
import img2 from '../../Assets/img2.jpg';
import img3 from '../../Assets/img3.jpg';

import {HiOutlineLocationMarker} from 'react-icons/hi';
import {HiOutlineClipboardCheck} from 'react-icons/hi';

import Aos from 'aos';
import 'aos/dist/aos.css';

const Data = [
{
  id:1,
  imgSrc: img,
  destTitle: 'Bora Bora',
  location: 'New Zealand',
  grade: 'CULTURAL RELAX',
  fees: '$700',
  description: 'L île de Bora Bora est l une des îles les plus populaires des îles de Tahiti. L une des neuf îles des îles de la Société, Bora Bora a été formée il y a plus de sept millions d années par un volcan. Comme la plupart des îles de la Polynésie française, Bora Bora est entourée d un anneau de récif corallien, également appelé atoll.'
},

{
  id:2,
  imgSrc: img2,
  destTitle:'Great Barrier Reef',
  location: 'Australia',
  grade: 'CULTURAL RELAX',
  fees: '$700',
  description: 'un des cadeaux naturels les plus remarquables d Australie, la Grande Barrière de Corail est dotée de la beauté à couper le souffle du plus grand récif corallien du monde. Le récif contient une abondance de vie marine et comprend plus de 3000 systèmes de récifs individuels et des cayes de corail et littéralement des centaines d îles tropicales pittoresques avec certaines des plus belles plages dorées ensoleillées du monde. En raison de sa beauté naturelle, la Grande Barrière de Corail est devenue l une des destinations touristiques les plus recherchées au monde.'
},

{
  id:3,
  imgSrc: img3,
  destTitle:'Taj Mahal',
  location: 'India',
  grade: 'CULTURAL RELAX',
  fees: '$900',
  description: 'Immense mausolée de marbre blanc, construit à Agra entre 1631 et 1648 sur ordre de l empereur moghol Shah Jahan en mémoire de son épouse préférée, le Taj Mahal est le joyau de l art musulman en Inde et l un des chefs-d œuvre universellement admirés du monde. patrimoine.'
},


]


const Main = () => {

  useEffect(() => {
    Aos.init({duration: 2000})
    
    }, [])

  return (
    <section className='main container section'>
<div className="secTitle">
<h3 data-aos="fade-right" className="title">destinations les plus visitées</h3>
</div>
<div className="secContent grid">
  {
    Data.map(({id, imgSrc, destTitle, location, grade, fees, description}) => {

return(
  <div key={id} data-aos="fade-up" className="singleDestination">

<div className="imageDiv">
<img src={imgSrc} alt={destTitle} />
 </div>

 <div className="cardInfo">
<h4 className="desTitle">{destTitle}</h4>
<span className="continent flex">
<HiOutlineLocationMarker className="icon"/>
<span className="name">{location}</span>
</span>

<div className="fees flex">
  <div className="grade">
    <span> {grade} <small>+1</small> </span>
  </div>
  <div className="price">
    <h5>{fees}</h5>
  </div>
</div>

<div className="desc">
  <p>{description}</p>
</div>

<button className='btn flex'>DETAILLES <HiOutlineClipboardCheck className="icon"/></button>

 </div>

  </div>
)
    })
  }
</div>

    </section>
  )
}

export default Main
