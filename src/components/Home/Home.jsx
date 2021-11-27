import "./Home.scss";

//components
import Sidebar from "../../components/Sidebar/Sidebar";
import HomeTop from "../../components/HomeTop/HomeTop";


function Home() {
  return (
    <div className="home">
        <Sidebar/>
      <div className="home__content">
        <HomeTop/>
      </div>
    </div>
  );
}
export default Home;
