import './Education.css';
import college from '../assets/college.jpg';
import school from '../assets/school.jpg';
const EducationDetails = [
    {
        name:"Medicaps-university Indore",
        degree:"Bachelor of Technology in Computer Science",
        year:"2021-2025 | Pursuing",
        image:college
    },
    {
        name:"San Thome Academy dewas | CBSE",
        degree:"HSC Science | Computer Science",
        year:"2019-2021 | Completed",
        image: school
    }
]
const Education = ()=>{
    return<>
    <section className="education" id="education">

<h1 className="heading"> My <span>Education</span></h1>

  <div className="box-container">

  {EducationDetails.map((data)=>(
    <div className="box" key={data.name}>
        <div className="image">
            <img draggable="false" src={data.image} alt=""/>
        </div>
        <div className="content">
            <h3>{data.degree}</h3>
            <p>{data.name}</p>
            <h4>{data.year}</h4>
        </div>
    </div>
  ))}

</div>
</section>
    </>
}
export default Education;