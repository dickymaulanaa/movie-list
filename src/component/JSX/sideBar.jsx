import { Col, Row } from "react-bootstrap"
import { AiOutlineHome,AiOutlineSearch } from "react-icons/ai";
import { BiMoviePlay,BiCameraMovie } from "react-icons/bi";
import '../CSS/sideBar.css'

const SideBar =() =>{
    return(
        <>
        <div id="mySidenav" class="sidenav">
                    <a href="#" id="home">
                       <Row>
                       <Col md={4}>Home</Col>
                        <Col md={{ span: 4, offset: 4 }}><AiOutlineHome/></Col>
                       </Row>
                    </a>
                    <a href="#" id="search">
                    <Row>
                       <Col md={4}>Search</Col>
                        <Col md={{ span: 4, offset: 4 }}><AiOutlineSearch/></Col>
                    </Row>
                    </a>
                    <a href="#" id="movie">
                    <Row>
                       <Col md={4}>Movie</Col>
                        <Col md={{ span: 4, offset: 4 }}><BiMoviePlay/></Col>
                    </Row>
                    </a>
                    <a href="#" id="series">
                    <Row>
                       <Col md={4}>Series</Col>
                        <Col md={{ span: 4, offset: 4 }}><BiCameraMovie/></Col>
                    </Row>
                    </a>
        </div> 
        </>
    )
}

export default SideBar