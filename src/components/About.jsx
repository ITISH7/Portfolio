import './About.css';
import './Style.css';
import image from '../assets/profile.JPG';
import Tilt from 'react-parallax-tilt';
const About=()=>
{
    return<>
    <section className="about" id='about'>
    <h2 className="heading">About <span>Me</span></h2>
    
    <div className="row">

    <div className="image">
        <Tilt><img draggable="false" className="tilt" src={image} alt=""/> </Tilt>
    </div>
    <div className="content">
        <h3>I'm Itish</h3>
        <span className="tag">Full Stack Developer</span>
        
        <p>I am a Full-Stack developer . 
          I am a Computer science undergraduate from Medicaps university.
          I am very passionate about improving my coding skills & developing applications & websites.
          I build WebApps and Websites using MERN Stack.
          Working for myself to improve my skills.
          Love to build life-easy mode. </p>
        
        <div className="box-container">
            <div className="box">
              <p><span> age: </span> 20</p>
              <p><span> phone : </span> +91 9826651112</p>
            </div>
            <div className="box">
              <p><span> email : </span> itishjain7@gmail.com</p>
              <p><span> place : </span> Indore, India - 452009</p>
            </div>
        </div>
        
        <div className="resumebtn">
            <a href="#" className="btn"><span>Resume</span>
                {/* <i class="fas fa-chevron-right"></i> */}
            </a>
        </div>

    </div>
    </div>
</section>
    </>
}
export default About;