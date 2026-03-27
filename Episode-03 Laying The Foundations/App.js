// React create Element == This basically create the object  when we return this element to dom then it became an html element


// const heading=React.createElement(
//   "h1",
//   {id:"heading"},
//   "Namaste React");


// console.log(heading);
// this is not the good way to create the browser element it becomes very clumsy , they developed JSX it is easier to create 


//JSX It is not html we can say it is like html like syntax more like xml

//React.createElement  gives you the element is  an object at the end  (Jsx is rendered as the html element)


// JSX ==> React.createElement =>ReactElement-Js Object ==>HTMLElement(render)

// babel is converting into Js object (it taks all your jsx code ) ,we will used this syntax to create element 

// Babeljs.io is a javascript compiler // it read the character token by token

//it does a lot of other things as well ,old browser does not es6 Babel will do the Transpilation 

//attribute of JSX has to be given in the camel case 

// const jsxHeading=<h1 className="head" tabIndex="1">Namaste React using JSX</h1>;

// to write in the multiple lines we have to wrap it with the  round brackets


// JSX => babel trnspiles it to React.createElement => ReactElement.js object =>Html Element (Render)

//React Element
// jsx is the React element 

// const jsxHeading=(<h1 className="head" tabIndex="1">Namaste React using JSX</h1>);
// console.log(jsxHeading);


//React component ==> Everything is a componet it a react yes it is true

// Class Based Components --> Old way of writing code
//Functional Components ---> New 

// React Functional Component -- Just a normal Javascript function -- Name with capital letter which return the piece of JSX
// a function which return the jsx code 
// a function which return the react element ,we will use functional compnent all across the pages 
//if you have one line of code then remove return 

// const HeadingComponent1=() =>{
//   return <h1>Namate React Functional Component</h1>
// }

// const HeadingComponent2=() =>(
//   <div id ="container">
//   <h1>Namate React Functional Component</h1>
//   </div>
// );


// const root=ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxHeading);

// i want to render heading component 

// import React  from "react" ;
// import ReactDOM from "react-dom/client";

// React Element
// const jsxHeading=(
// <h1 className="head" tabIndex="1">
//   Namaste React using JSX
//   </h1>
// );

//  React Functional Component


// const HeadingComponent=() =>(
//   <div id ="container">
//   <h1 className="heading">Namate React Functional Component</h1>
//   </div>
// );

// const root=ReactDOM.createRoot(document.getElementById("root"));

// root.render(<HeadingComponent/>);


// iwant to render title component inside the heading (This is component Composition  )

// import React  from "react" ;
// import ReactDOM from "react-dom/client";

// const Title = () => (
// <h1 className="head" tabIndex="1">
//   Namaste React using JSX
//   </h1>
// );



// const HeadingComponent=() =>(
//   <div id ="container">
//     <Title/>
//   <h1 className="heading">
//     Namate React Functional Component</h1>
//   </div>
// );


// const root=ReactDOM.createRoot(document.getElementById("root"));

// root.render(<HeadingComponent/>);


// {} you can run any javascript code in the jsx code



//import React  from "react" ;
// import ReactDOM from "react-dom/client";

// React Element

// const jsxHeading=(
// <h1 className="head" tabIndex="1">
//   Namaste React using JSX
//   </h1>
// );

//  React Functional Component


// const HeadingComponent=() =>(
//   <div id ="container">
//   <h1 className="heading">Namate React Functional Component</h1>
//   </div>
// );

// const root=ReactDOM.createRoot(document.getElementById("root"));

// root.render(<HeadingComponent/>);


// iwant to render title component inside the heading (This is component Composition  )

// import React  from "react" ;
// import ReactDOM from "react-dom/client";

// const Title = () => (
// <h1 className="head" tabIndex="1">
//   Namaste React using JSX
//   </h1>
// );
// fgrg


// const HeadingComponent=() =>(
//   <div id ="container">
//     <Title/>
//   <h1 className="heading">
//     Namate React Functional Component</h1>
//   </div>
// );


// const root=ReactDOM.createRoot(document.getElementById("root"));

// root.render(<HeadingComponent/>);

// {} code to insert javascript inside the jsx code 

// import React  from "react" ;
// import ReactDOM from "react-dom/client";

// const Title = () => (
// <h1 className="head" tabIndex="1">
//   Namaste React using JSX
//   </h1>
// );

// // {100 + 200 } ==?you can inject any javascript code inside the parenthesis 

// const number=10000;

// const HeadingComponent=() =>(
//   <div id ="container">
//     <h2>console.log{"abcd"}</h2>
//     {Title}
//     <h2>{number}</h2>
//   <h1 className="heading">
//     Namate React Functional Component</h1>
//   </div>
// );


// const root=ReactDOM.createRoot(document.getElementById("root"));

// root.render(<HeadingComponent/>);



import React  from "react" ;
import ReactDOM from "react-dom/client";

const elem=<span>React Element </span>

const Title =(
<h1 className="head" tabIndex="5">
  {elem}
  Namaste React using JSX
  </h1>
);

// suppose data is coming from the api 

// const  data=AudioParam.getData() 
// get can  send some milicauious data 
//This attack is known as Cross Siting  (He can red cookies ,private data )if i am able to run the javascript but Jsx will escape it
//It will santize the data whatever is coming it will prevents Cross Scripting 

// You can render in this way 
// {Title}
// <Title></Title>
//<Title/>
//{Title()}
//hi
const number=10000;

const HeadingComponent=() =>(
  <div id ="container">
    <h2>{console.log("abcd")}</h2>
    {Title}
    <h2>{number}</h2>
  <h1 className="heading">
    Namate React Functional Component</h1>
  </div>
);


const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);


