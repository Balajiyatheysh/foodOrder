const heading = React.createElement("h1", { id: "heading" }, "Hello world..!!");
const root = ReactDOM.createRoot(document.getElementById("root"));

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", { id: "sibling1" }, "i have a sibling"),
    React.createElement("h3", { id: "sibling2" }, "i have a sibling"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h2", { id: "sibling1" }, "i have a sibling"),
    React.createElement("h4", { id: "sibling2" }, "i have a sibling"),
  ]),
]);

console.log(parent);

root.render(parent);
console.log("i have been rendered.!!");
