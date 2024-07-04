import React from "react";
import styled from "styled-components";
import Cards from "./Card";
import tyrePic from "../../assets/tyre.jpg";
import tyreAllignment from "../../assets/tyreAllignment.jpg";
import service from "../../assets/service.jpg";
import accessories from "../../assets/accessories.jpg";
import laserAlligment from "../../assets/four-wheel-alignment.jpg";

export const Data = [
  {
    background: tyrePic,
    text: "Tyre Change ",
  },

  {
    background: tyreAllignment,
    text: "Computer Wheel Aligners ",
  },
  
  {
    background: laserAlligment,
    text: "Wheel Balancing",
  },
  {
    background: service,
    text: "Service and Calibration",
  },
  {
    background: accessories,
    text: "Accessories",
  },
];

const Div = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  /* justify-content: space-between; */
`;

export default function MapDAta() {
  return (
    <Div>
      {Data.map((item) => (
        <Cards background={item.background} text={item.text} />
      ))}
    </Div>
  );
}
