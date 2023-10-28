import './Work.css';
import FoodWebsite from '../assets/foodicious.png';
import Portfolio from '../assets/portfolioweb.png';
import InstagramMern from '../assets/instagramclone.png';
import Notesera from '../assets/notesera.in.png'

const Work =()=>{
    return<>
    <section className="work" id="work">

<h2 className="heading"><i className="fas fa-laptop-code"></i> Projects <span>Made</span></h2>

<div className="box-container">

   <div className="box tilt">
    <img draggable="false" src={FoodWebsite} alt="" />
    <div className="content">
      <div className="tag">
      <h3>Fodicious website</h3>
      </div>
      <div className="desc">
        <p>A mern stack food website with Razor pay  payment gatway , get your delicious food easily with fodicious </p>
        <div className="btns">
          <a href="#" className="btn" target="_blank"><i className="fas fa-eye"></i> View</a>
          <a href="#" className="btn" target="_blank">Code <i className="fas fa-code"></i></a>
        </div>
      </div>
    </div>
  </div> 

  <div className="box tilt">
    <img draggable="false" src={Portfolio} alt="" />
    <div className="content">
      <div className="tag">
      <h3>Portfolio Website</h3>
      </div>
      <div className="desc">
        <p>Personal portfolio website. Don't need much info about it, just scroll down. You're here only!</p>
        <div className="btns">
          <a href="#" className="btn" target="_blank"><i className="fas fa-eye"></i> View</a>
          <a href="#" className="btn" target="_blank">Code <i className="fas fa-code"></i></a>
        </div>
      </div>
    </div>
  </div> 
  <div className="box tilt">
    <img draggable="false" src={InstagramMern} alt="" />
    <div className="content">
      <div className="tag">
      <h3>Instagram MERN with Socket.io</h3>
      </div>
      <div className="desc">
        <p>Instagram Mern clone app . it is an web application which is made with Mern stack and socket.io for chat system </p>
        <div className="btns">
          <a href="#" className="btn" target="_blank"><i className="fas fa-eye"></i> View</a>
          <a href='#' className="btn" target="_blank">Code <i className="fas fa-code"></i></a>
        </div>
      </div>
    </div>
  </div> 
  <div className="box tilt">
    <img draggable="false" src={Notesera} alt="" />
    <div className="content">
      <div className="tag">
      <h3>Notesera</h3>
      </div>
      <div className="desc">
        <p>Notesera!! notes ka naya system . an webapplication design to organise college notes</p>
        <div className="btns">
          <a href="https://www.notesera.in" className="btn" target="_blank"><i className="fas fa-eye"></i> View</a>
          <a href='#' className="btn">Code</a>
        </div>
      </div>
    </div>
  </div> 
  
  </div>
  </section>
</>
}
export default Work;