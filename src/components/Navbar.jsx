import './Navbar.css';
const Navbar=(props)=>{
    return<>
    <nav className={props.isclicked===true?'navbar nav-toggle':'navbar'}>
        <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#work">Work</a></li>
        <li><a href="#contact">Contact</a></li>
        </ul>
    </nav></>
}
export default Navbar;