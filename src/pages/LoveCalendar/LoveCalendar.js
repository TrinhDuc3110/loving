import React from 'react'
import sample2 from './sample2.mp4'
import sample3 from './sample3.mp4'
import sample4 from './sample4.mp4'
import sample5 from './sample5.mp4'
import sample6 from './sample6.mp4'
import anh3 from './anh3.jpg'
import anh1 from './love1.jpg'
import anh4 from './anh4.jpg'
import anh5 from './anh5.jpg'
import anh6 from './anh6.jpg'
import './LoveCalendar.css'

export default function LoveCalendar() {
  return (
    <div className='bg-demo'>
      <div className='container'>
      <p id='tieude' className='text-dark text-center p-4'>Video nèk!!</p>
      <video playsInline autoPlay muted loop>
        <source src={sample2} type="video/mp4" />
      </video>
      <video playsInline autoPlay muted loop>
        <source src={sample3} type="video/mp4" />
      </video>
      <video playsInline autoPlay muted loop>
        <source src={sample4} type="video/mp4" />
      </video>
      <video playsInline autoPlay muted loop>
        <source src={sample5} type="video/mp4" />
      </video>
      <video playsInline autoPlay muted loop>
        <source src={sample6} type="video/mp4" />
      </video>
      </div>
      <p id='tieude' className='text-dark text-center p-4'>Ảnh nèk!!</p>
      <div className='container'>
      <img className='demo-anh' src={anh3} alt=''></img>
      <img className='demo-anh' src={anh1} alt=''></img>
      <img className='demo-anh' src={anh4} alt=''></img>
      <img className='demo-anh' src={anh5} alt=''></img>
      <img className='demo-anh' src={anh6} alt=''></img>
      </div>
    </div>
  )
}
