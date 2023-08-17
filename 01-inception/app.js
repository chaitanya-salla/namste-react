/*
<div id='parent'>
    <div id='child'>
        <h1>Nested H1</h1>
        <h1>I'm Sibling</h1>
    </div>

</div>


*/

const root = ReactDOM.createRoot(document.getElementById("root"));
const heading = React.createElement(
  "h1",
  { id: "heading", className: "hello" },
  "Hello World for React ! 😍"
);

const heading1 = React.createElement("h1", { id: "1" }, "Nested H1");
const heading2 = React.createElement("h1", { id: "2" }, "Sibling H1");
const child = React.createElement("div", { id: "child" }, [heading1, heading2]);
const parent = React.createElement("div", { id: "paent" }, [child, child]);

root.render(heading);
root.render(parent);
console.log(parent);
