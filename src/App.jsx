import { useState } from "react";
import { person } from "./data";
import "./App.css";

function App() {
  const [information, setInformation] = useState(person);

  function handlePersonalInformation(e) {
    const { name, value } = e.target;
    setInformation((prevData) => ({
      ...prevData,
      generalInfo: {
        ...prevData.generalInfo,
        [name]: value,
      },
    }));
  }

  function handleEducation(e, index) {
    const { name, value } = e.target;
    const updatedEducation = [...information.education];
    updatedEducation[index] = {
      ...updatedEducation[index],
      [name]: value,
    };
    setInformation((prevState) => ({
      ...prevState,
      education: updatedEducation,
    }));
  }

  function handleExperience(e, index) {
    const { name, value } = e.target;
    const updatedExperience = [...information.experience];
    updatedExperience[index] = {
      ...updatedExperience[index],
      [name]: value,
    };
    setInformation((prevState) => ({
      ...prevState,
      experience: updatedExperience,
    }));
  }

  function addNewEducation() {
    let newEducation = {
      school: '',
      major: '',
      date: ''
    }
    setInformation((prevData) => ({
      ...prevData,
      education: [...prevData.education, newEducation]
    }))
  }

  function addNewExperience() {
    let newExperience = {
      company: '',
      position: '',
      responsibilities: '',
      startingDate: '',
      endingDate: ''
    }
    setInformation((prevData) => ({
      ...prevData,
      experience: [...prevData.experience, newExperience]
    }))
  }

  function removeEducation() {
    if (information.education.length > 1) {
      setInformation((prevData) => ({
        ...prevData,
        education: prevData.education.slice(0, prevData.education.length - 1)
      })
      )
    } else {
      setInformation((prevData) => ({
        ...prevData,
        education: prevData.education.slice(0, 1)
      })
      )
    }
    
  }
  
  function removeExperience() {
    if (information.experience.length > 1) {
      setInformation((prevData) => ({
        ...prevData,
        experience: prevData.experience.slice(0, prevData.experience.length - 1)
      })
      )
    } else {
      setInformation((prevData) => ({
        ...prevData,
        experience: prevData.experience.slice(0, 1)
      })
      )
    }}

   

  return (
    <div className="app-container">
      <form>
        <section className="personal">
          <h3>Basic Information</h3>
          <div className="info">
            <label htmlFor="name" className="data-label">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="input-data"
              value={information.generalInfo.name}
              name="name"
              maxLength={50}
              onChange={handlePersonalInformation}
            />
          </div>
          <div className="info">
            <label htmlFor="ocupation" className="data-label">
              Ocupation
            </label>
            <input
              type="text"
              id="ocupation"
              className="input-data"
              value={information.generalInfo.ocupation}
              name="ocupation"
              maxLength={50}
              onChange={handlePersonalInformation}
            />
          </div>
          <div className="info">
            <label htmlFor="email" className="data-label">
              Email
            </label>
            <input
              type="text"
              id="email"
              className="input-data"
              value={information.generalInfo.email}
              name="email"
              maxLength={50}
              onChange={handlePersonalInformation}
            />
          </div>
          <div className="info">
            <label htmlFor="phone" className="data-label">
              phone
            </label>
            <input
              type="number"
              id="number"
              className="input-data"
              value={information.generalInfo.phone}
              name="phone"
              maxLength={50}
              onChange={handlePersonalInformation}
            />
          </div>
        </section>
        <section className="education">
          <h3>Education</h3>
          {information.education.map((edu, index) => (
            <div key={index}>
              <div className="info">
                <label htmlFor= {`school${index}`} className="data-label">
                  School
                </label>
                <input
                  type="text"
                  id={`school${index}`}
                  className="input-data"
                  value={edu.school}
                  name="school"
                  maxLength={50}
                  onChange={(e) => handleEducation(e, index)}
                />
              </div>
              <div className="info">
                <label htmlFor={`major${index}`} className="data-label">
                  Major
                </label>
                <input
                  type="text"
                  id={`major${index}`}
                  className="input-data"
                  value={edu.major}
                  name="major"
                  maxLength={50}
                  onChange={(e) => handleEducation(e, index)}
                />
              </div>
              <div className="info">
                <label htmlFor={`date${index}`} className="data-label">
                  Date
                </label>
                <input
                  type="date"
                  id={`date${index}`}
                  className="input-data"
                  value={edu.date}
                  name="date"
                  maxLength={50}
                  onChange={(e) => handleEducation(e, index)}
                />
              </div>
            </div>
          ))}
          <div className="buttons">
            <button className="add-more-edu btn" onClick={addNewEducation}>Add more education</button>
            <button className="remove-edu btn" onClick={removeEducation}>Remove education</button>
          </div>
        </section>
        <section className="experience">
          <h3>Experience</h3>
          {information.experience.map((exp, index) => (
            <div key={index}>
              <div className="info">
                <label htmlFor={`company${index}`} className="data-label">
                  Company
                </label>
                <input
                  type="text"
                  id={`company${index}`}
                  className="input-data"
                  value={exp.company}
                  name="company"
                  maxLength={50}
                  onChange={(e) => handleExperience(e, index)}
                />
              </div>
              <div className="info">
                <label htmlFor={`position${index}`} className="data-label">
                  Position
                </label>
                <input
                  type="text"
                  id={`position${index}`}
                  className="input-data"
                  value={exp.position}
                  name="position"
                  maxLength={50}
                  onChange={(e) => handleExperience(e, index)}
                />
              </div>
              <div className="info">
                <label htmlFor={`responsibilities${index}`} className="data-label">
                  Responsibilities
                </label>
                <input
                  type="text"
                  id={`responsibilities${index}`}
                  className="input-data"
                  value={exp.responsibilities}
                  name="responsibilities"
                  maxLength={50}
                  onChange={(e) => handleExperience(e, index)}
                />
              </div>
              <div className="info">
                <div className="info">
                  <label htmlFor={`starting-date${index}`} className="data-label">
                    Starting date
                  </label>
                  <input
                    type="date"
                    id={`starting-date${index}`}
                    className="input-data"
                    value={exp.startingDate}
                    name="startingDate"
                    onChange={(e) => handleExperience(e, index)}
                  />
                  <label htmlFor={`ending-date${index}`} className="data-label">
                    Ending date
                  </label>
                  <input
                    type="date"
                    id={`ending-date${index}`}
                    className="input-data"
                    value={exp.endingDate}
                    name="endingDate"
                    onChange={(e) => handleExperience(e, index)}
                  />
                </div>
              </div>
            </div>
          ))}

          <div className="buttons">
            <button className="add-more-exp btn" onClick={addNewExperience}>Add more experience</button>
            <button className="remove-exp btn" onClick={removeExperience}>Remove experience</button>
          </div>
        </section>
      </form>
      <div className="cv-container">
        <div className="personal-container">
          <h1>{information.generalInfo.name}</h1>
          <h2>{information.generalInfo.ocupation}</h2>
          <p><b>Email:</b> {information.generalInfo.email}</p>
          <p><b>phone:</b> {information.generalInfo.phone}</p>
        </div>
        <div className="edu-container">
          <h1>Education</h1>
          
          <hr />
          
          {information.education.map((edu, index) => (
            <div className="edu" key={index}>
              <p><b>School:</b> {edu.school}</p>
              <p><b>Major:</b> {edu.major}</p>
              <p><b>Date:</b> {edu.date}</p>
            </div>
          ))}
        </div>
        <div className="xp-container">
          <h1>Experience</h1>

          <hr />

          {information.experience.map((exp, index) => (
            <div className="xp" key={index}>
              <p><b>Company:</b> {exp.company}</p>
              <p><b>Position:</b> {exp.position}</p>
              <p><b>Responsibilities</b> {exp.responsibilities} </p>
              <p><b>Date:</b> {exp.startingDate} - {exp.endingDate}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


export default App;