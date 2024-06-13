import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza co.</h1>
    </header>
  );
}
function Menu() {
  const pizzas = pizzaData;
  const numpizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {numpizzas > 0 ? (
        <ul className="pizzas">
          {pizzas.map((pizza) => (
            <Pizza pizzaopj={pizza} key={pizza.name} />
          ))}
        </ul>
      ) : (
        <p>we 're still working on our menue :)</p>
      )}

      {/* <Pizza
        name="pizza focaccia"
        ingredients="Bread with italian olive oil and rosemary"
        photoName="pizzas/focaccia.jpg"
        price={10}
      /> */}
    </main>
  );
}
function Pizza(props) {
  return (
    <li className="pizza">
      <img src={props.pizzaopj.photoName} alt={props.pizzaopj.name} />
      <div>
        <h3>{props.pizzaopj.name}</h3>
        <p>{props.pizzaopj.ingredients}</p>
        <span>{props.pizzaopj.price}</span>
      </div>
    </li>
  );
}
function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  return (
    <footer className="footer">
      {isOpen ? (
        <div className="order">
          <p>
            we 're open until {closeHour}:00. Come visit us or order online{" "}
          </p>
          <button className="btn">Order</button>
        </div>
      ) : (
        <p>
          we 're happy to welcome you between {openHour}:00 and {closeHour}:00.
        </p>
      )}
      {/* {new Date().toLocaleTimeString()}.We Are Currently Open */}
    </footer>
  );
}

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
