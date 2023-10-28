import './Home.css';
import Typed from 'react-typed';
import ParticleLoading from './Particle';
import image from '../assets/IMG_0128.JPG';
import Tilt from 'react-parallax-tilt';
import {SocialIcon} from 'react-social-icons';
const Home = ()=>{
    return<>
    <section className="home" id='home'>
      <ParticleLoading  ></ParticleLoading>

     <div className="content">
    <h2>Hi There,<br/> I'm Itish <span>Jain</span></h2>
    <p>i am into <Typed strings={["frontend development", "backend development","Artificial Intelligence" ,"web designing", "web development"]}
                    typeSpeed={40}
                    backSpeed={50}
                    loop/></p>
    <a href="#about" className="btn"><span>About Me</span>
    </a>
     <div className="socials">
        <ul className="social-icons">
          <li><SocialIcon className='social' url="https://www.instagram.com/itish_jain" /></li>
          <li><SocialIcon className='social' url="https://www.linkedin.com/in/itish-jain-a3479822a/" color='blue'/></li>
          <li><SocialIcon  className='social'url="https://github.com/ITISH7" color='blue'/></li>
          <li><SocialIcon className='social' url="https://twitter.com/itishjain6" color='blue'/></li>
        </ul>
      </div>
    </div> 
    
 <div className="image">
 <Tilt>
    <img draggable="false" className="tilt" src={image} alt=""/>
    </Tilt>
</div> 

</section>
    </>
}
export default Home;