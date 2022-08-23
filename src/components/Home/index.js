import LogoTitle from '../../assets/images/logo-s.png';
import { Link } from 'react-router-dom';
import './index.scss';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';
import Loader from 'react-loaders';

import Animation from '../Animation';
 
const Home=()=>{
    const [letterClass,setLetterClass] =useState('text-animate');
    let nameArray=['u','c','h','e','t','a'];
    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000)
      },
       [])
    return(
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi , <br/> I'm 
                <img src={LogoTitle} alt="developer"></img>
                <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15}/>
                <br/>
                Product Engineer
                </h1>
                <h2>Software Engineer | Web Developer | UI/UX enthusiast </h2>
                <Link to="/contact" className='flat-button'>Contact Me</Link>
                </div>
                <Logo/>
                <div className='stage-cube-cont'>
        <Animation/>

        </div>
                
        </div>
        <Loader type='pacman'/>
        </>
    );
}

export default Home;