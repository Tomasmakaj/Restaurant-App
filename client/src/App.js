import React,{useEffect,useState} from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import MenuContainer from './components/menu/MenuContainer';




function App() {
  const [user, setUser] = useState({ username: ""});

  useEffect(() => {
    let token = localStorage.getItem("jwt")
    if (token && !user.username){
      fetch("http://127.0.0.1:3000/profile", {
        headers: {
          token: token,
          "Content-Type": "application/json",
        },
      })
      .then((res) => res.json())
      .then ((data) => {
        setUser({
          username:data.username,
        });
      });
    }
  }, []);

  return (
    <>
    <div>
      <Navbar user={user} setUser={setUser}/>
      <Hero />
      <MenuContainer />

    </div>
    </>
  );
}

export default App;
