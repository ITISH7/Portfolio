import './Skills.css';
import './Style.css';
const file=[
    {
        name: "ReactJS",
        icon: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/000000/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png"
    },
    {
        name: "ExpressJS",
        icon: "https://img.icons8.com/fluency/48/000000/node-js.png"
    },
    {
        name: "NodeJS",
        icon: "https://img.icons8.com/color/48/000000/nodejs.png"
    },
    {
        name: "Redux",
        icon: "https://img.icons8.com/color/48/000000/redux.png"
    },
    {
        name: "Firebase",
        icon: "https://img.icons8.com/color/48/000000/firebase.png"
    },
    {
        name: "MaterialUI",
        icon: "https://img.icons8.com/color/48/000000/material-ui.png"
    },
    {
        name: "TailwindCSS",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/48px-Tailwind_CSS_Logo.png"
    },
    {
        name: "Bootstrap",
        icon: "https://img.icons8.com/color/48/000000/bootstrap.png"
    },
    {
        name: "HTML5",
        icon: "https://img.icons8.com/color/48/000000/html-5--v1.png"
    },
    {
        name: "CSS3",
        icon: "https://img.icons8.com/color/48/000000/css3.png"
    },
    {
        name: "JavaScript",
        icon: "https://img.icons8.com/color/48/000000/javascript--v1.png"
    },
    {
        name: "Python",
        icon: "https://img.icons8.com/color/48/000000/python--v1.png"
    },
    {
        name: "C++",
        icon: "https://img.icons8.com/color/48/000000/c-plus-plus-logo.png"
    },
    {
        name: "MongoDB",
        icon: "https://img.icons8.com/color/48/000000/mongodb.png"
    },
    {
        name: "MySQL",
        icon: "https://img.icons8.com/color/48/000000/mysql-logo.png"
    },
    {
        name: "PostgreSQL",
        icon: "https://img.icons8.com/color/48/000000/postgreesql.png"
    },
    {
        name: "Heroku",
        icon: "https://img.icons8.com/color/48/000000/heroku.png"
    },
    {
        name: "Netlify",
        icon: "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/000000/external-netlify-a-cloud-computing-company-that-offers-hosting-and-serverless-backend-services-for-static-websites-logo-shadow-tal-revivo.png"
    },
    {
        name: "jQuery",
        icon: "https://img.icons8.com/ios-filled/48/1169ae/jquery.png"
    },
    {
        name: "Git VCS",
        icon: "https://img.icons8.com/color/48/000000/git.png"
    },
    {
        name: "GitHub",
        icon: "https://img.icons8.com/glyph-neue/48/ffffff/github.png"
    },  
]
const Skills=()=>{
    return <section className="skills" id="skills">

    <h2 className="heading"> Skills & <span>Abilities</span></h2>

    <div className="container">
          <div className="row" id="skillsContainer">
            {file.map((data)=>(
                <div className="bar" key={data.name}>
                <div className="info">
                <img src={data.icon}/>
                <span>{data.name}</span>
                </div>
            </div>
            ))}

      </div>
</div>
</section>
}
export default Skills;