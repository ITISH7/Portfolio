import './Footer.css';
import { SocialIcon } from 'react-social-icons';
const Footer =()=>{
    return<section className="footer">

    <div className="box-container">
  
        <div className="box">
            <h3>Itish jain</h3>
            <p>Thank you for visiting my personal portfolio website. Connect with me over socials. <br/> <br/> Keep Rising 🚀. Connect with me over live chat!</p>
        </div>
  
        <div className="box">
            <h3>quick links</h3>
            <a href="#home"> home</a>
            <a href="#about"> about</a>
            <a href="#skills"> skills</a>
            <a href="#education"> education</a>
            <a href="#work"> work</a>
        </div>
  
        <div className="box">
            <h3>contact info</h3>
            <p> +91 9826651112</p>
            <p> itishjain7@gmail.com</p>
            <p> Indore, India</p>
            <div className="share">
  
            
          <SocialIcon className='social' url="https://www.instagram.com/itish_jain" />
          <SocialIcon className='social' url="https://www.linkedin.com/in/itish-jain-a3479822a/" color='blue'/>
          <SocialIcon  className='social'url="https://github.com/ITISH7" color='blue'/>
          <SocialIcon className='social' url="https://twitter.com/itishjain6" color='blue'/>
        
            </div>
        </div>
    </div>
  </section>
}
export default Footer;