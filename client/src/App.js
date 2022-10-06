import React,{useEffect,useState} from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import MenuContainer from './components/menu/MenuContainer';
import Footer from './components/footer/Footer'




function App() {
  const [user, setUser] = useState({ username: ""});
  const [userCart, setUserCart] = useState([])

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
      <Navbar user={user} setUser={setUser} userCart={userCart} />
      <Hero />
      <MenuContainer userCart={userCart} setUserCart={setUserCart} />
      <Footer />



    </div>
    </>
  );
}

export default App;
