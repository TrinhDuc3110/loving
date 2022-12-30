import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Lover from './pages/Intro/Lover';
import Calendar from './pages/Calendar/Calendar';
import LoveCalendar from './pages/LoveCalendar/LoveCalendar';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPATgR-wOk7AbDgEzl0YoFpmZCKaT14vI",
  authDomain: "loving-d1bac.firebaseapp.com",
  projectId: "loving-d1bac",
  storageBucket: "loving-d1bac.appspot.com",
  messagingSenderId: "418815781612",
  appId: "1:418815781612:web:9f28b50d52f65ccad453c9",
  measurementId: "G-XSEY5YRNTH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/love' component={Lover} />
        <Route exact path='/calendar' component={Calendar} />
        <Route exact path='/loveCalendar' component={LoveCalendar} />
        <Route exact path='/' component={Lover} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
