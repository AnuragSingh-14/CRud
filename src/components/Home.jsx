import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import AddUser from "./AddUser";
import Users from "./Users";
import {Routes, Route} from 'react-router-dom';


const Home = ()=>{
    
    
    return (
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="adduser" element={<AddUser />} />
          <Route path="users" element = { <Users /> }/>
        </Routes>
      </div>
    );
}

export default Home;
