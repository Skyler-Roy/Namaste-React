import React from "react";
import ReactDOM from "react-dom/client";
const element = React.createElement(
  "h1",
  {
    id: "heading",
    naam: "Abhishek", // we can pass the keys with or without "".
  },
  "This is the first line written using React"
); // createElement is a web API of core react library therefore it is called using React.createElement().
// createElement takes three arguments: the type of element to create, an object containing properties(attributes) for the element, and the content of the element.
// createElement only creates a react element which is an object and not an html element h1.
const root = ReactDOM.createRoot(document.getElementById("root"));
// createRoot is a Web API of ReactDOM library therefore it is called using ReactDOM.createRoot().
// Q. Why do we need to create a root?
// Ans : React 18 uses a new concurrent rendering engine which requires a root to manage the rendering process efficiently. The root acts as the entry point for rendering React components and enables features like automatic batching, transitions, and improved performance.
// createRoot method takes a DOM element as an argument which is the root element where the react app will be rendered. Here we are passing the div with id "root" as the argument to the createRoot() method.
// createRoot() method returns a root object which has a render() method to render the react element to the root element.
root.render(element);
// render() method creates an h1 tag from the object created by the React.createElement() method and appends the h1 element with its attributes and innerHTML/children to the root element.

console.log(element); // returns Object which is a react element not just an html element.
// this object contains an object known as props which contains the attributes, as well as children i.e. all the values passed as second and third arguments to the React.createElement() method.

/*
create a html structure as given below using react

    <div id="parent">
        <div id="child1">
            <h1>This is a h1 heading.</h1>
            <h2>This is a h2 heading.</h2>
        </div>
        <div id="child2">
            <h1>This is a h1 heading.</h1>
            <h2>This is a h2 heading.</h2>
        </div>
    </div>
*/

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "This is a Namaste React. 🚀"),
    React.createElement("h2", {}, "This is a h2 heading."),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "This is a h1 heading."),
    React.createElement("h2", {}, "This is a h2 heading."),
  ]),
]); 
// If there are more than one children of a react element then we need to pass those children as an array of children.

root.render(parent); // this render method will override the previous rendered method by rendering a new virtual DOM to the root element which means it replaces the previous contents of the root element and it donot appends the new content.

// Rendering the parent element will give an error which will be solved later

console.log(parent);

// Since writing the react code in this way to generate complex HTML elements structure is very difficult therefore to make it easier we use JSX.

// this signifies that react can be written without using JSX also.

// react only takes control of the root element and not the whole app. React only works inside the root element. Anything inside the root element is replaced with code rendered using react code. Anything written outside the root element will remain unchanged.

// Libraries can work independently on small portions of your app as well while a framework comes with a load of things. React can work even on an existing app.