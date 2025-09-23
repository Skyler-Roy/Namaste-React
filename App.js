import React from "react";
import ReactDOM from "react-dom/client"

// const heading = React.createElement("h1",{id : "heading"},"Namaste React. 🚀");

// const root = ReactDOM.createRoot(document.querySelector("#root"));

// root.render(heading);

// React Element
const elem = <h2>This is a React Element.</h2>;

const jsxHeading = (<>
  <h1 id="head" className="jsxheading" 
  style = {{color:"blue", backgroundColor : "yellow"}}>Namaste React using JSX. 🚀</h1>
  {elem}
  </>); // JSX Element => React element => Object

console.log(jsxHeading);

//! React Functional component
const Title = () => (<>
  <h1 id="head" className="jsxheading" 
  style = {{color:"blue", backgroundColor : "yellow"}}>Namaste React using JSX. 🚀</h1>
  {elem}
  </>); // React Functional component

const HeadingComponent = () => {
  return (<div id = "container">
            <Title />
            <Title></Title>
            {Title()}
            <h1>Namaste React Functional Component. 🚀</h1> 
         </div>)
}; // React Functional component

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(<HeadingComponent/>);