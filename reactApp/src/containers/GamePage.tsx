import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CountryTile from "../components/CountryTile";
import GameMap from "../components/GameMap";
import { COUNTRIES } from "../helpers/countries";

import "./GamePage.css";

interface Props {}

const GamePage = (props: Props) => {
  return (
    <Container fluid className="GamePage">
      <Row className="Header">
        <Col>
          {COUNTRIES.map((country: string) => (
            <CountryTile country={country} />
          ))}
        </Col>
      </Row>
      <Row className="Body">
        <Col xl="7">
          <GameMap />
        </Col>
        <Col></Col>
      </Row>
      <Row className="Footer">
        <Col>
          <div>Footer</div>
        </Col>
      </Row>
    </Container>
  );
};

export default GamePage;
