import { useState } from 'react';
import './App.css';

function App() {

  const [values, setValues] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phoneno: '',
    year: '',
    resume: '',
    url: '',
    shortans: ''
  })

  const [success, setSuccess] = useState(false);

  const handleChanges = (e) => {
    setValues({...values, [e.target.name] : [e.target.value]})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(values)
    setSuccess(true)
    // here pass data ex: axios.post 
  }

  const handleReset = () => {
    setValues({
      firstname: '',
      lastname: '',
      email: '',
      phoneno: '',
      year: '',
      resume: '',
      url: '',
      shortans: ''
    })
  }

  return (
    <>
    {success ? 
    (
      <div className="Thanks">
        <h1>Your application has been received.</h1>
        <h2>Thank you for your interest in The Discovery Lab!</h2>
        <h2>We will review your application and get back to you shortly -- keep an eye on your email.</h2>
        <h2>────── ⋆⋅☆⋅⋆ ──────</h2>
      </div>
    ):(
      <div className="App">
        <h1>The Discovery Lab - Application Form</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor='firstname'>First Name*</label>
          <input type='text' placeholder='Enter First Name' name='firstname' required
          onChange={(e) => handleChanges(e)} value={values.firstname}></input>

          <label htmlFor='lastname'>Last Name*</label>
          <input type='text' placeholder='Enter Last Name' name='lastname' required
          onChange={(e) => handleChanges(e)} value={values.lastname}></input>

          <label htmlFor='email'>Email Address*</label>
          <input type='text' placeholder='Enter Email Address' name='email' required
          onChange={(e) => handleChanges(e)} value={values.email}></input>

          <label htmlFor='phoneno'>Phone Number*</label>
          <input type='text' placeholder='Enter Phone Number' name='phoneno' required
          onChange={(e) => handleChanges(e)} value={values.phoneno}></input>

          <label htmlFor='year'>Year of Study*</label>
          <select name='year' id='year' required onChange={(e) => handleChanges(e)} 
          value={values.year}>
            <option value=''>Choose Year of Study</option>
            <option value='yearOne'>Year 1</option>
            <option value='yearTwo'>Year 2</option>
            <option value='yearThree'>Year 3</option>
            <option value='yearFour'>Year 4</option>
            <option value='yearFive'>Year 5+</option>
          </select>

          <label htmlFor='resume'>Resume*</label>
          <input type='file' placeholder='Upload Resume' name='resume' required
          onChange={(e) => handleChanges(e)} value={values.resume}></input>

          <label htmlFor='url'>LinkedIn URL</label>
          <input type='text' placeholder='Enter LinkedIn URL' name='url'
          onChange={(e) => handleChanges(e)} value={values.url}></input>

          <label htmlFor='shortans'>Why are you interested in joining The Discovery Lab for this role?*</label>
          <textarea name='shortans' id='shortans' cols={30} rows={10} placeholder='Answer'
          required onChange={(e) => handleChanges(e)} value={values.shortans}></textarea>

          <button type='button' onClick={handleReset}>Reset</button>
          <button type='submit'>Submit</button>
        </form>
      </div>
    )}
    </>
  );
}

export default App;
