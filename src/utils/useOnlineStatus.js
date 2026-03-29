// i want to develop a custom hook how to start thinking 
// what should be input and output of the hook then it  will become easier to find 
//to check online and offline we will use an event Listener
// which will browser will give accesss to the window object 

// to find out you are online or offline 
// it is a super power given by windows object 
//How many times should i need to add the event listener
//useeffect - we will use  this  object 
//event listener to check it is online or offine 
import {useEffect,useState} from "react";
const  useOnlineStatus = ()=>{

    const [onlineStatus,setOnlineStatus]=useState(true);

    // intially the online status is true 
    //if the event listener is offline we need to update the online Status 
    // check if online 
    // it will be executed only once
    useEffect(()=>{
       window.addEventListener("offline",() =>{
        setOnlineStatus(false);
       })
       window.addEventListener("online",() => {
        setOnlineStatus(true);
       });
    },[]);
    
    
    // check if online 


    // boolean value we are returning 
    return  onlineStatus;
}
export default  useOnlineStatus;
