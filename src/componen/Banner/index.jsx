import { Row, Col } from "react-bootstrap";
import Img from "../../assets/img/banner/img_banner.jpeg";

function Banner(navbars) {
  return (
    <div style={{ widt: "100%", backgroundColor: "#2B3E58", height: "300px" }}>
      <div className="container">
        <Row style={{ color: "white" }}>
          <Col sm={10} mt={5}>
            <h3>Jadi ekspert bersama</h3>
            <h3>edspert.id</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quam ex quod. Iste, dolor assumenda! Quam sunt officia blanditiis itaque, amet esse natus rem exercitationem maxime, facere magni non reprehenderit!</p>
          </Col>
          <Col sm={2}>
            <img src={Img} alt="" />
          </Col>
        </Row>
      </div>
    </div>
  );
}
export default Banner;
