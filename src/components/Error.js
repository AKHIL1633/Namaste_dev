import{useRouteError } from "react-router-dom"
// it will give more information about the error
//reacter-router-dom give  access to the hook 
//whenever a function started with use it will be a hook 
//if we went waant some better info of the error in the page 
//Network Error 


const Error =() =>
{
    const err=useRouteError();
    console.log(err);
    return (
    <div>
        <h1>oops!!!</h1>
        <h2>Something went wrong !!!</h2>
        <h3>
            {err.status}:{err.statusText}
        </h3>
    </div>
    );
}
export default Error;