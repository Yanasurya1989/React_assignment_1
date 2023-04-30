import style from "./style.module.css";
import Button from "../Button";
import Img_card from "../../assets/img/card/img_card.png";
import { Row, Col } from "react-bootstrap";

const Card = ({ titled, colored, stock, navbarList }) => {
  function handleClick(text) {
    alert(navbarList);
  }

  return (
    <div className={style.card} id="idCard">
      <Row style={{ height: "150px", background: "#152a46", borderRadius: "20px 20px 0px 0px" }}>
        <Col sm={3}>
          <img style={{ height: "150px" }} src={Img_card} alt="" />
        </Col>
        <Col sm={9}>
          <h4 style={{ color: "orange" }}>Intensive Bootcamp</h4>
          <h3 style={{ color: "white" }}>Programming Laravel</h3>
          <p>(Getting started with laravel 9)</p>
        </Col>
      </Row>
      <Row>
        <div className="container">
          <h3 style={{ color: "black" }}>Programming Laravel</h3>
          <h4 style={{ color: "black" }}>Getting started with Laravel 9</h4>
        </div>
      </Row>
    </div>
  );
};

export default Card;
