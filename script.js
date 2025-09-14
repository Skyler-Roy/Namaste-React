const div = document.getElementById("container");
const h1 = document.createElement("h1");
h1.innerText = "Hello Abhishek";
const tnode = document.createTextNode("Lakshya");
div.appendChild(h1);
div.appendChild(tnode);

// React fully controls #root and replaces its contents.

// Any non-React DOM manipulation inside #root will be lost when React renders.

// ✅ Move manual DOM (#container) outside of #root, or else do all DOM updates using React.