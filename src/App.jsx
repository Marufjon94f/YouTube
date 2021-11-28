import "./App.scss";
// import { Switch, Route } from "react-router";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header/>
      <Home />
    </div>
  );
}

export default App;
