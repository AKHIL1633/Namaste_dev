//but html structure is neseted
// <div> 
//    <div>
//     <h1> I am h1 tag<h1>
//    </div>
// </div>

// third part is the children of the div
// index5.html

// ReatElement is an Object become == >  Html (which the browser understand)


// const parent=React.createElement(
//     "div",
//     {id : "parent"},
//     React.createElement("h1",{},"I am h1 tag")
//     );

// console.log(parent);
// const root=ReactDOM.createRoot(document.getElementById("root"))// we have to render heading inside the root
// root.render(parent);


// i want to create the sibling 
// <div id ="parent"> 
//    <div id ="child">
//     <h1> I am h1 tag<h1>
//     <h2> I am h2 tag
//    </div>
// </div>


// const parent=React.createElement(
//    "div",
//     {id : "parent"},
//    React.createElement(
//     "div",
//     {id:"child"},
//     [React.createElement("h1",{},"I'm an h1 tag"),React.createElement("h2",{},"I'm an h2 tag")]
//   )
// );

// console.log(parent);
// const root=ReactDOM.createRoot(document.getElementById("root"))// we have to render heading inside the root
//  root.render(parent);


// <div id ="parent"> 
//    <div id ="child">
//     <h1> I am h1 tag<h1>
//     <h2> I am h2 tag</h2>
//    </div>
// </div id="child2">
//     <h1> I am h1 tag<h1>
//     <h2> I am h2 tag</h2>
// </div>
//</div>

// React is making is tough to create this ,it is very untidy there is something why knows as JSX exist 
//React can only be written in JSX

const parent=React.createElement(
   "div",
    {id : "parent"},[
      React.createElement("div",{id :"child"},[
        React.createElement("h1",{},"I'm an h1 tag"),
        React.createElement("h2",{},"I'm an h2 tag")
      ]) ,
      React.createElement("div",{id :"child2"},[
        React.createElement("h1",{},"I'm an h1 tag"),
        React.createElement("h2",{},"I'm an h2 tag")

    ]),
]);

console.log(parent);
const root=ReactDOM.createRoot(document.getElementById("root"))// we have to render heading inside the root
root.render(parent);
