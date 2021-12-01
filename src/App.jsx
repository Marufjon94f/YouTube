import "./App.scss";
import { Switch, Route } from "react-router";
import Home from "./components/Home/Home";
import ChannelPage from "./components/ChannelPage/ChannelPage";
import Videocart from "./components/Videocart/Videocart";
// import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
<Switch>

  <Route path="/" component={ Home }></Route>
  <Route path="/channel" component={ChannelPage}></Route>
  <Route path="/video" component={Videocart}></Route>
</Switch>
          
    </div>
  );
}

export default App;
