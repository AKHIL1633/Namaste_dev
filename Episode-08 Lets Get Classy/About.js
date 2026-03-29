import User from "./user";
import UserClass from "./UserClass"
// import React from "react";
// class About extends React.Component{
import {Component} from "react";
class About extends Component{
    constructor(props){
        super(props);
        console.log("Parent Constuctor")
    }
    component
    render(){
        console.log("Render")
        return (
            <div>
            <h1>About</h1>
            <h2>This is Namaste React Web Series </h2>
        
             <UserClass name={"Akshay Saini (class)"} location={"Dehradun Class"}/>
             {/* <UserClass name={"Elon Musk (class)"} location={"US"}/> */}
            </div>
        );
    }

}

export default About;
// const About=()=>{
//     return (
//         <div>
//             <h1>About</h1>
//             <h2>This is Namaste React Web Series </h2>
//             {/* <User name={"Akshay Saini(function)"}/> */}
//             <UserClass name={"Akshay Saini (class)"} location={"Dehradun Class"}/>
//         </div>
//     );
// };

// here arrow function is returning some piece of 
//jSX
