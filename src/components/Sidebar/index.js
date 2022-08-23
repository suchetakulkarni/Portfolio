import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import Logos from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo-sub.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope,faUser,faHome,faTools,faBook} from '@fortawesome/free-solid-svg-icons'
import {faLinkedin,faGithub} from '@fortawesome/free-brands-svg-icons'


const Sidebar =()=>(
    
        <div className='navbar'>
            <Link className='logo' to='/'>
                <img src={Logos} alt="logo"/>
                <img className="sub-logo" src={LogoSubtitle} alt="Sucheta"/>
            </Link>
           <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e"/> 

            </NavLink>
            <NavLink exact="true" activeclassname="active" className='about-link' to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e"/> 

            </NavLink>
            <NavLink exact="true" activeclassname="active" className='skill-link' to='/skills'>
                <FontAwesomeIcon icon={faTools} color="#4d4d4e"/>

            </NavLink>
            <NavLink exact="true" activeclassname="active" className='contact-link' to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/> 

            </NavLink>
            <NavLink exact="true" activeclassname="active" className='edu-link' to="/education">
                <FontAwesomeIcon icon={faBook} color="#4d4d4e"/> 

            </NavLink>
            
          
           </nav>
           
           <ul>
            <li>
                <a target="_blank" rel="noreferrer" href="#" className='linkedin'>
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/>
                </a>
            </li>
            <li>
            <a target="_blank" rel="noreferrer" href="#" className='github'>
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>
                </a>
            </li>
           </ul>
        </div>
    
)

export default Sidebar;