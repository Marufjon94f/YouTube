import "./App.scss";
import { Switch, Route } from "react-router";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";

function App() {

  fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())
        .then(data => console.log((data)));

  return (
    <div className="App">
      <Header/>
      <Home />
    </div>
  );
}

export default App;
