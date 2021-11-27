import "./HomeTop.scss"
import Landing from "../../assets/img/landing.jpg"

function HomeTop() {
    return(
<div className="home-top">


<li className="home-top-item">
<img className="home-top__img" src={Landing} 
        alt="pic"
        width="250"
        height="150"
        ></img>
        <h5 className="home-top__text">A Brief History Of Creation</h5>
        <ul className="home-top_sublist">
            <li><span className="text-tube">80k views</span></li>
            <li><span className="text-tube">3 days ago</span></li>
            <li><span className="text-tube">Dollie Blair</span></li>
        </ul>
</li>


</div>

    )
}
export default HomeTop;