import React  from "react" ;
import ReactDOM from "react-dom/client";


const Header =()=>{
  return (
    <div className="header">
      <div className="logo-container">
      <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"/>
    </div>
    <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact us </li>
        <li>Card</li>
      </ul>
    </div>
    </div>
  )
}


// Restaturant card
// Way to write the inline style take the javascript object 
// First bract is telling about the javascript ,second bracket is telling about the javascript objects 


const RestaturantCard =(props) =>{
  console.log(props)
  return (
    <div className="res-card" style={
    {
    backgroundColor:"#f0f0f0",
    }}>
    <img className="res-logo" alt=" " src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/9/17/c8560e2d-defb-437e-a4af-169a700b7ac0_574056.ss.jpg"/>
      <h2>{props.resName}</h2>
      <h4>{props.cuisine}</h4>
      <h4>4.4 stars </h4>
      </div>
  )
}
// we can many cards in the Body 

const Body =() =>{
  return (
    <div className="body">
      <div className="Search">Search</div>
      <div className="res-container">
      <RestaturantCard 
      resName="Meghana Foods"
      cuisine="Biryani,North Indian ,Asian"/>

      <RestaturantCard resName="KFC" cuisine="Burger ,Fast Food ,Asian"/>
      


     </div>
    </div>
  )
}
const AppLayout=() =>{
  return (
    <div className="app">
    <Header/>
    <Body/>
    </div>
  )
}

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);


