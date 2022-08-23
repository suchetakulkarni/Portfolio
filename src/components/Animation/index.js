import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular, faCss3, faGithub, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
const Animation=()=>{
    return(
        <div className='cubespinner'>
            <div className='face1'>
                <FontAwesomeIcon icon={faAngular} color="#dd0031"/>
            </div>
            <div className='face2'>
                <FontAwesomeIcon icon={faHtml5} color="#f06529"/>
            </div>
            <div className='face3'>
                <FontAwesomeIcon icon={faCss3} color="#28A4D9"/>
            </div>
            <div className='face4'>
                <FontAwesomeIcon icon={faReact} color="#5ED4F4"/>
            </div>
            <div className='face5'>
                <FontAwesomeIcon icon={faJsSquare} color="#EFD81D"/>
            </div>
            <div className='face6'>
                <FontAwesomeIcon icon={faGithub} color="#EC4D28"/>
            </div>
        </div>
    )
}

export default Animation;