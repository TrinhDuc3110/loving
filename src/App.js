import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Lover from './pages/Intro/Lover';
import Calendar from './pages/Calendar/Calendar';
import LoveCalendar from './pages/LoveCalendar/LoveCalendar';

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
