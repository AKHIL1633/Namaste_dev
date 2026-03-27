const heading =React.createElement(
    "h1",
    {id : "heading",xyz:"abc"},
    "Hello World from React!") // create  h1 in the react

// create the javascript object 
//it isnot an h1 tag,it will return the objectfor you 

//if something already exist in the root that will be  replace by the heading

const root=ReactDOM.createRoot(document.getElementById("root"))// we have to render heading inside the root
root.render(heading);


// Converting the object into the h1 tag and put it under the root

// render --- To take this object creaete the h1 tag dump that into the root

// index 3.html
// {} --- to give attributes to your element

//but html structure is neseted
// <div> 
//    <div>
//     <h1> <h1>
//    </div>
// </div>


