import React, { useState } from 'react'
import sample from './sample1.mp4'
import './Calendar.css'
import 'react-calendar/dist/Calendar.css'


export default function Calendar(props) {

  return (
    <div>
      <video className='video' playsInline autoPlay muted loop>
        <source src={sample} type="video/mp4" />
      </video>
      <div className="noi_dung">
        <h3>Thư   <i className="fa fa-heartbeat"></i>  Điệp</h3>
      </div>
      <button className='noi_dung2 btn btn-danger' data-toggle="modal" data-target="#exampleModal" >Love me (click here)</button>
      <div className='noi_dung1'>
        <h3>Lov u to the back and moon</h3>
      </div>
      <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Love Messages</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p className='text-love'>
                Happy Birthday anh iu
                Vậy là người iu em đã thêm được 1 tuổi nữa rồi ắ , mong là anh sẽ luôn hạnh phúc với những gì mà anh đã chọn , mong là anh sẽ luôn thành công trong công việc cũng như học tập.
                Em sẽ không chúc anh nhiều hay gì cả bởi vì anh xứng đáng được hưởng tất cả những cái tốt đẹp nhất. Với thế giới thì anh là 1 người bth nhưng mà với em thì anh gần như là tất cả…
                Chúc anh tuổi 21 thiệc là hạnh phúc nhá ❤️ ilusm.
                <button onClick={()=>{
                  props.history.push('/loveCalendar');
                }} className='btn btn-danger button-mem'>Memories 2021 (click)</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}


