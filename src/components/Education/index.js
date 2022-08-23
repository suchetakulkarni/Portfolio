import { useState ,useEffect} from 'react';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss'

const Education =()=>{
    const [letterClass,setLetterClass]=useState('text-animate')
    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 3000)
      },
       [])
    return (
        <>
            <div>
                <div className='container edu-page'>
                    <div className='text-zone'>
                    <h1>
                        <AnimatedLetters letterClass={letterClass} strArray={['E','d','u','c','a','t','i','o','n']} idc={15}/>
                    </h1>
                    <h2>KLS Gogte Institute of Technology</h2>
                    <p>Bachelors in Engineering : Computer Science</p>
                    <p>2017-2022 | Grade: 8.7 CGPA</p>
                    <h2>Pre-University</h2>
                    <p>Prerena PU college of science</p>
                    <p>2015-2017 | Grade: 93%</p>
                    <h2>School</h2>
                    <p>Mary Immaculate Girls High School</p>
                    <p>2015 | Grade: 91.06%</p>
                    </div>

                </div>
                <div className='container cert-page'>
                    <div className='text-zone'>
                    <h1>
                        <AnimatedLetters letterClass={letterClass} strArray={['C','e','r','t','i','f','i','c','a','t','i','o','n','s']} idc={15}/>
                    </h1>
                    <h2>AZ900: Microsoft certified  Azure Fundamentals</h2>
                    <p>Completed in the year : August 2022</p>
                    <h2>Cambridge English Business Certificate</h2>
                    <p>B1 Grade</p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Education;