import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <form>
        <section>
          <h3>Basic Information</h3>
          <div>
            <label htmlFor="name" className='data-label'>Name</label>
            <input type="text" id='name' className='input-data'/>
          </div>
          <div>
            <label htmlFor="occupation" className='data-label'>Occupation</label>
            <input type="text" id='occupation' className='input-data'/>
          </div>
          <div>
            <label htmlFor="email" className='data-label'>Email</label>
            <input type="text" id='email' className='input-data'/>
          </div>
          <div>
            <label htmlFor="number" className='data-label'>Number</label>
            <input type="number" id='number' className='input-data'/>
          </div>
        </section>
        <section>
          <h3>Education</h3>
          <div>
            <label htmlFor="school" className='data-label'>School</label>
            <input type="text" id='school' className='input-data'/>
          </div>
          <div>
            <label htmlFor="major" className='data-label'>Major</label>
            <input type="text" id='major' className='input-data'/>
          </div>
          <div>
            <label htmlFor="date" className='data-label'>Date</label>
            <input type="date" id='date' className='input-data'/>
          </div>
          <div className='buttons'>
            <button className='add-more-edu btn'>Add more education</button>
            <button className='remove-edu btn'>Remove education</button>
          </div>
        </section>
        <section>
          <h3>Experience</h3>
          <div>
            <label htmlFor="company" className='data-label'>Company</label>
            <input type="text" id='company' className='input-data'/>
          </div>
          <div>
            <label htmlFor="responsibilities" className='data-label'>Responsibilities</label>
            <input type="text" id='responsibilities' className='input-data'/>
          </div>
          <div>
            <div>
              <label htmlFor="starting-date" className='data-label'>Starting date</label>
              <input type="date" id='starting-date' className='input-data'/>
              <label htmlFor="ending-date" className='data-label'>Ending date</label>
              <input type="date" id='ending-date' className='input-data'/>
            </div>
          </div>
          <div className='buttons'>
            <button className='add-more-exp btn'>Add more experience</button>
            <button className='remove-exp btn'>Remove experience</button>
          </div>
          
        </section>
      </form>
    </>
  )
}

export default App
