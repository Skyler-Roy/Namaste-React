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
    React.createElement("h1", {}, "This is a h1 heading."),
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

/*
Difference Between Development and Production CDN Links

react.development.js / react-dom.development.js:

* Intended for development and testing.

*Larger file size (not minified).

*Includes ✅ developer warnings and helpful error messages.

*✅ Provides full debugging support (stack traces, messages).

*❌ Slower performance due to extra debug code.

*❌ Not minified.

react.production.min.js / react-dom.production.min.js:

*Intended for live/production environments.

*Smaller file size (minified and optimized).

*❌ Does not include warnings or debug info.

*❌ No debugging support (clean, silent errors).

*✅ Faster performance for end users.

*✅ Minified for efficient loading.

Let me know if you'd like this in a downloadable format (PDF, Markdown, etc.)!

Q. What is JSX?
Ans : JSX stands for JavaScript XML. It is a syntax extension for JavaScript that looks similar to HTML or XML. JSX allows you to write HTML-like code within your JavaScript code, making it easier to create and visualize the structure of your user interface components in React.

Q. Why do we need to use JSX?
Ans : JSX makes it easier to write and understand the structure of your UI components. It allows you to describe what the UI should look like in a more intuitive way, similar to writing HTML. JSX also enables you to embed JavaScript expressions within the markup, making it powerful for dynamic content rendering.

Q. Can we use React without JSX?
Ans : Yes, you can use React without JSX. React provides a way to create elements using the React.createElement() method, which allows you to create React elements programmatically. However, using JSX is more common and recommended as it provides a more concise and readable syntax for defining UI components.

Q. How does JSX get converted to JavaScript?
Ans : JSX is not valid JavaScript, so it needs to be transformed into regular JavaScript code that browsers can understand. This transformation is typically done using a tool called Babel. Babel takes the JSX code and converts it into calls to React.createElement() method, which creates the corresponding React elements.

Q. What is Babel?
Ans : Babel is a popular JavaScript compiler that is often used in React projects to transform JSX code into standard JavaScript code that browsers can understand. Babel takes the JSX syntax and converts it into calls to React.createElement() method, allowing you to write JSX while still being able to run your code in environments that do not natively support JSX.


*/