import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { person } from './data'
import './App.css'


function App() {
  const [information, setInformation] = useState(person)

  function handlePersonalInformation(e) {
    const{ name, value } = e.target;
    setInformation(prevData => ({
      ...prevData, 
      generalInfo: {
        ...prevData.generalInfo, 
        [name]: value
      }
    }))
  };

  function handleEducation(e, index) {
    const{ name, value } = e.target;
    let updatedEducation = [...information.education]
    updatedEducation[index] = {...updatedEducation, [name]: value}
    setInformation(prevData => ({
      ...prevData, 
      education: updatedEducation
    }))
  };

  function handleExperience(e, index) {
    const{ name, value } = e.target;
    let updatedExperience = [...information.experience]
    updatedExperience[index] = {...updatedExperience, [name]: value}
    setInformation(prevData => ({
      ...prevData, 
      experience: updatedExperience
    }))
  };


  return (
    <div className='app-container'>
      <form>
        <section className='personal'>
          <h3>Basic Information</h3>
          <div className='info'>
            <label htmlFor="name" className='data-label'>Name</label>
            <input type="text" id='name' className='input-data' value={information.generalInfo.name} name="name" onChange={handlePersonalInformation}/>
          </div>
          <div className='info'>
            <label htmlFor="ocupation" className='data-label'>Ocupation</label>
            <input type="text" id='ocupation' className='input-data' value={information.generalInfo.ocupation} name="ocupation" onChange={handlePersonalInformation}/>
          </div>
          <div className='info'>
            <label htmlFor="email" className='data-label'>Email</label>
            <input type="text" id='email' className='input-data' value={information.generalInfo.email} name="email" onChange={handlePersonalInformation}/>
          </div>
          <div className='info'>
            <label htmlFor="phone" className='data-label'>phone</label>
            <input type="number" id='number' className='input-data' value={information.generalInfo.phone} name="phone" onChange={handlePersonalInformation}/>
          </div>
        </section>
        <section className='education'>
          <h3>Education</h3>
          {information.education.map((edu, index) => (
            <div key={index}>
              <div className='info'>
                <label htmlFor="school" className='data-label'>School</label>
                <input type="text" id='school' className='input-data' value={edu.school} name="school" onChange={(e) => handleEducation(e, index)}/>
              </div>
              <div className='info'>
                <label htmlFor="major" className='data-label' >Major</label>
                <input type="text" id='major' className='input-data' value={edu.major} name="major" onChange={(e) => handleEducation(e, index)}/>
              </div>
              <div className='info'>
                <label htmlFor="date" className='data-label' >Date</label>
                <input type="date" id='date' className='input-data' value={edu.date} name="date" onChange={(e) => handleEducation(e, index)}/>
              </div>
            </div>
          ))}  
          <div className='buttons'>
            <button className='add-more-edu btn'>Add more education</button>
            <button className='remove-edu btn'>Remove education</button>
          </div>
        </section>
        <section className='experience'>
          <h3>Experience</h3>
          {information.experience.map((exp,index) => (
            <div key={index}>
              <div className='info'>
                <label htmlFor="company" className='data-label'>Company</label>
                <input type="text" id='company' className='input-data' value={exp.company} name="company" onChange={(e) => handleExperience(e,index)}/>
              </div>
              <div className='info'>
                <label htmlFor="position" className='data-label'>Position</label>
                <input type="text" id='position' className='input-data' value={exp.position} name="position" onChange={(e) => handleExperience(e,index)}/>
              </div>
              <div className='info'>
                <label htmlFor="responsibilities" className='data-label'>Responsibilities</label>
                <input type="text" id='responsibilities' className='input-data' value={exp.responsibilities} name="responsibilities" onChange={(e) => handleExperience(e,index)}/>
              </div>
              <div className='info'>
                <div className='info'>
                  <label htmlFor="starting-date" className='data-label'>Starting date</label>
                  <input type="date" id='starting-date' className='input-data'value={exp.startingDate} name="startingDate" onChange={(e) => handleExperience(e,index)}/>
                  <label htmlFor="ending-date" className='data-label'>Ending date</label>
                  <input type="date" id='ending-date' className='input-data' value={exp.endingDate} name="endingDate" onChange={(e) => handleExperience(e,index)}/>
                </div>
              </div>    
            </div>
          ))}

          <div className='buttons'>
            <button className='add-more-exp btn'>Add more experience</button>
            <button className='remove-exp btn'>Remove experience</button>
          </div>
          
        </section>
      </form>
      <div className='cv-container'>
        <div className='personal-container'>
          <h1>{information.generalInfo.name}</h1>
          <h2>{information.generalInfo.ocupation}</h2>
          <p><h3>Email:</h3> {information.generalInfo.email}</p>
          <p><h3>phone:</h3> {information.generalInfo.phone}</p>
        </div>
        <div className='education-container'>
          <h1>Education</h1>
          {information.education.map((edu,index) => (
            <>
              <p><h3>School:</h3> {edu.school}</p>
              <p><h3>Major:</h3> {edu.major}</p>
              <p><h3>Date:</h3> {edu.date}</p>
            </>
          ))}
        </div>
        <div className='experience-container'>
          <h1>Experience</h1>
          {information.experience.map((exp,index) => (
            <>
              <p><h3>Company:</h3> {exp.company}</p>
              <p><h3>Position:</h3> {exp.position}</p>
              <p><h3>Responsibilities</h3> {exp.responsibilities} </p>
              <p><h3>Date:</h3> {exp.startingDate} - {exp.endingDate} </p>
            </>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
