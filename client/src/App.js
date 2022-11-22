import React,{useEffect,useState} from 'react';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import MenuContainer from './components/menu/MenuContainer';
import Footer from './components/footer/Footer'

function App() {

  const [user, setUser] = useState({ username: ""});
  const [menu, setMenu] = useState([]);
  const [userCart, setUserCart] = useState([])

    // get and set locations in dropdown menu
    const [locations, setLocations] = useState([])
    useEffect(() => {
        fetch('http://localhost:3000/locations')
        .then(res => res.json())
        .then(data => setLocations(data))
    }, [])

    //fetch to establish menu
    useEffect(() => {
      fetch('http://localhost:3000/menus')
      .then(res => res.json())
      .then(data => setMenu(data))
    },[])

    //establish user detts/profile locally
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
          console.log('this is profile data',data)
          setUser({
            username:data.username,
            location:data.location.id
          });
        });
      }
    }, []);

  return (

    <>
      <div>
        <Navbar user={user} setUser={setUser} userCart={userCart} setUserCart={setUserCart} locations={locations}/>
        <Hero />
        <MenuContainer user={user} userCart={userCart} setUserCart={setUserCart} menu={menu}/>
        <Footer />
      </div>
    </>
  )

}

export default App;