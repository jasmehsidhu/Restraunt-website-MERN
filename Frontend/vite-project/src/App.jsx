import { useState } from 'react'
import './App.css'
import bg from './bg.png'
import Services from './services'
import About from './about'
import axios from 'axios'

function App() {
function submit(){
  var request=axios.post('https://zaika-e-dilli-backend.onrender.com',
    {
      name:document.getElementById('name').value,
      email:document.getElementById('email').value,
      subject:document.getElementById('subject').value,
      message: document.getElementsByTagName('textarea')[0].value
    })
      document.getElementById('name').value='',
    document.getElementById('email').value='',
    document.getElementById('subject').value='',
    document.getElementsByTagName('textarea')[0].value=''
}
  return (
    <>
      <section className='nav'>
          <h1>Zaika-e-dilli</h1>
          <div className='urls'>
            <a>Home</a>
            <a href='#services'>Events</a>
            <a href='#about'>About</a>
          </div>
      </section>
      <section className='main'>
      <div className='content'><h1 className='dilli'>Authentic taste of delhi !</h1>
      <p>An Indian restaurant serves a variety of flavorful dishes<br></br> inspired by the diverse regions of India, featuring aromatic<br></br> curries, tandoori-grilled meats, and vegetarian options.</p>
      <button className='table'>Book table<i style={{color:'white'}} className="fa-regular fa-calendar"></i></button></div>
      </section>
      <Services></Services>
      <About></About>
      <section className='contact'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.625784046794!2d77.26524637529167!3d28.70083877562747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd7043111263%3A0x931ec875c3efa7b8!2sZaika%20A%20Delhi!5e0!3m2!1sfr!2sca!4v1732243935894!5m2!1sfr!2sca" width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
<div className='form'><h1 className='contitle'>Contact</h1><div className='mform'><div className='torder'><input id='name' placeholder='Name' type='text'></input><input id='email' placeholder='Email' type='email'></input></div>
<input id='subject' type='text' placeholder='Subject'></input>
<textarea rows='8' placeholder='Message...'></textarea>
<button onClick={submit} className='submit'>Submit</button>
</div>
</div></section>
<footer style={{marginTop:'40px'}}>© 2024 Jasmeh Sidhu. All Rights Reserved.
</footer>
    </>
  )
}

export default App
