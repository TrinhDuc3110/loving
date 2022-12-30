import React, { useState } from 'react'
import './Lover.css'

export default function Lover(props) {

    const [userLogin, setUserLogin] = useState({ userName: '', passWord: '', status: false });

    const handleChange = (event) => {
        const { name, value } = event.target;
        const newUserLogin = {
            ...userLogin,
            [name]: value,
        };
        let valid = true;
        for (let key in newUserLogin) {
            if (key !== 'status') {
                if (newUserLogin[key].trim() === '') {
                    valid = false;
                }
            }
        }
        if (!valid) {
            newUserLogin.status = true;
        } else {
            newUserLogin.status = false;
        }
        setUserLogin(newUserLogin);
    }

    const handleLogin = (event) => {
        event.preventDefault();
        if (userLogin.passWord === 'em yêu anh') {
            //thành công thì chuyển về trang trước đó
            // props.history.goBack();
            //Chuyển đến trang chỉ định sau khi xử lý
            // props.history.push('/home')
            //replace thay đổi nội dung 
            // props.history.replace('/home');
            props.history.push('/calendar');
            localStorage.setItem('userLogin', JSON.stringify(userLogin));
        } else {
            alert('You do not love me huhu!');
            return;
        }
    }

    return (
        <form className='background' onSubmit={handleLogin}>
            <div className='img'>
                <h1 className='word'>Enter "Love Code"</h1>
                <h3 className='word1'>To see love from that person</h3>
                <input name='passWord' className='input form-control' onChange={handleChange}></input>
                <button className='btn button btn-dark'><i className="fa fa-heart"></i></button>
            </div>
        </form>
    )
}
