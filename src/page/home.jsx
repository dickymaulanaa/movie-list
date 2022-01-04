import "./home.css"
import Slider from "../component/JSX/slider";
import SideBar from "../component/JSX/sideBar";


const Home = () =>{
    return (
        <div className="Container-Home">
            <div className="sidebar">
                <div className="menu">
                <SideBar/>
                </div>
                
            </div>
            <div className="Container-Content">
                <div className="slider">
                   <Slider/>
                </div>
                <div className="content">
                    <div className="list"></div>
                </div>
            </div>
        </div>
    )
}

export default Home