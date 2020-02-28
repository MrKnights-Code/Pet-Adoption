const Pet = ({ name, animal, breed }) => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, name),
        React.createElement("h2", {}, animal),
        React.createElement("h2", {}, breed),
    ])
}


const App = () => {
    return React.createElement("div", { id: "Listed Pets" },
    [
        React.createElement("h1", {}, "Adopt Me!"),
        React.createElement(Pet, { 
            name: "Kimbo", 
            animal: "Dog", 
            breed: "Terrier"}),
        React.createElement(Pet, { 
            name: "Lobo", 
            animal: "Dog", 
            breed: "Terrier"}),
        React.createElement(Pet, { 
            name: "Queso", 
            animal: "Dog", 
            breed: "Terrier"})
    ]
    );
};

ReactDOM.render(React.createElement(App),
document.getElementById("root"));