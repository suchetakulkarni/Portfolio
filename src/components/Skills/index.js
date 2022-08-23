import { useEffect,useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import Animation from '../Animation';
import './index.scss'

const Skills = () =>{
    const[letterClass,setLetterClass]=useState('text-animate')
    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000)
      },
       [])
 return(
    <>
    <div className='container skills-page'>
        <div className='text-zone'>
            <h1>
                <AnimatedLetters letterClass={letterClass} strArray={['S','k','i','l','l','s',' ','&',' ','E','x','p','e','r','i','e','n','c','e']} idx={15}/>
            </h1>
            <p>
            I'm currently working as a Product Engineer at Brillio Technologies. I hold 1 Year of experience in FrontEnd Technlogies like <br/>
            1. HTML/CSS , SASS<br/>
            2. JavaScript<br/>
            3. React JS : a JavaScript Framework<br/>
            I also hold some hands on experience in other Technlogies like <br/>
            1. MongoDB<br/>
            2. Express JS<br/>
            3. Node JS<br/>
            4. Java Springboot Framework.<br/>
            5. MySQL<br/>
            I believe I possess very important life skills like being collaborative ,effective communicator, paying attention to detail , delivering on time.
            All of which are very important to work in a team efficiently. 
            </p>
        </div>
    </div>
    <div className='animate'>
    <Animation/>
    </div>
    <Loader/>
    </>
 )

}

export default Skills;