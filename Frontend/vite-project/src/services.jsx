import { useState } from 'react'
import './App.css'
import birthday from './birthday.png'
import marrige from './marrige.png'
import retire from './retire.png'
import gender from './gender.png'
import shower from './shower.png'
import graduation from './graduation.png'

function Services(){
const events=[{
    url:birthday,
    text:'Birthdays'
},
{
    url:marrige,
    text:'Marrige anniversary'
},
{
    url:retire,
    text:'Retirement'
},
{
    url:gender,
    text:'Gender reveal'
},
{
    url:shower,
    text:'Baby shower'
},
{
    url:graduation,
    text:'Graduation'
}
]

return<>
<section id='services' className='services'>
<h1 className='ourser'>Our Services</h1>
<div className='events'>
  {events.map((element)=>{
    return(
        <div style={{backgroundImage:`url(${element.url})`}} className='eventbox'>
           <h2 className='text'>{element.text}</h2>
        </div>
    )
  })}
</div>
</section>
</>
}
export default Services