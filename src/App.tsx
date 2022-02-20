import React from 'react';
import './App.css';
import {NavigationBar} from "./components/NavigationBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import {ProjectsScreen} from "./components/ProjectsScreen";
import {HobbiesScreen} from "./components/HobbiesScreen";
import {MentorshipScreen} from "./components/MentorshipScreen";
import {ContactScreen} from "./components/ContactScreen";
import {HomeScreen} from "./components/HomeScreen";

function App() {
  return (
    <div className="App">
     <NavigationBar />
        <Routes>
            <Route path='/Projects' element={<ProjectsScreen />} />
            <Route path='/Hobbies' element={<HobbiesScreen />} />
            <Route path='/Mentorship' element={<MentorshipScreen />} />
            <Route path='/Contact' element={<ContactScreen />} />
            <Route path='/' element={<HomeScreen />} />
        </Routes>
    </div>
  );
}

export default App;
