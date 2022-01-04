import { Carousel,Col, Row } from "react-bootstrap"
import { AiFillStar } from 'react-icons/ai';
import "../CSS/slider.css"


const Slider =() =>{
    return(
        <Carousel >
            <Carousel.Item interval={2200}>
            <div className="slider-movie">
                <div className="desc-slider">
                        <h3>Shang-Chi and the Legend of the Ten Rings</h3>
                        <Row>
                        <Col md="auto"><AiFillStar style={{color:"yellow", height:"30px"}} className="mb-1"/>7.6/10</Col>.
                        <Col  className="mt-1">2021</Col>
                        </Row> 
                        <p style={{fontSize:"15px"}}>Shang-Chi, the master of weaponry-based Kung Fu, is forced to confront his past after being drawn into the Ten Rings organization.</p>
                    </div>

                    <div className="movie-slider">
                    <img
                        className="d-block w-100 rounded-3"
                        src="https://cdn-brilio-net.akamaized.net/community/2021/09/26/31605/image_1632394957_614c5ecdd6f89.jpg"
                        alt="Second slide"
                        height="400px"/>
                    </div>
            </div>
            </Carousel.Item>
            <Carousel.Item interval={2200}>
            <div className="slider-movie">
                <div className="desc-slider">
                        <h3>Shang-Chi and the Legend of the Ten Rings</h3>
                        <Row>
                        <Col md="auto"><AiFillStar style={{color:"yellow", height:"30px"}} className="mb-1"/>7.6/10</Col>.
                        <Col  className="mt-1">2021</Col>
                        </Row> 
                        <p style={{fontSize:"15px"}}>Shang-Chi, the master of weaponry-based Kung Fu, is forced to confront his past after being drawn into the Ten Rings organization.</p>
                    </div>

                    <div className="movie-slider">
                    <img
                        className="d-block w-100 rounded-3"
                        src="https://cdn-brilio-net.akamaized.net/community/2021/09/26/31605/image_1632394957_614c5ecdd6f89.jpg"
                        alt="Second slide"
                        height="400px"/>
                    </div>
            </div>
            </Carousel.Item>

            
            
        </Carousel>
    )
}

export default Slider