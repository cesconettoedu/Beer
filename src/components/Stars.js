import styled from "styled-components";
import mugEmpty from "../assets/beerIconBlack.png";
import mugFull from "../assets/beerIconFull.png";
import React, { useState, useEffect } from "react";

function Stars(props) {
  const [star, setStar] = useState(0);
  const [mug1, setMug1] = useState(mugEmpty);
  const [mug2, setMug2] = useState(mugEmpty);
  const [mug3, setMug3] = useState(mugEmpty);
  const [mug4, setMug4] = useState(mugEmpty);
  const [mug5, setMug5] = useState(mugEmpty);

  const StarClick = (id) => {
    switch (id) {
      case 1:
        if (mug1 === mugEmpty) {
          setMug1(mugFull);
          setStar(id);
        } else {
          setMug1(mugEmpty);
          setMug2(mugEmpty);
          setMug3(mugEmpty);
          setMug4(mugEmpty);
          setMug5(mugEmpty);
        }
        break;
      case 2:
        if (mug2 === mugEmpty) {
          setMug1(mugFull);
          setMug2(mugFull);
          setStar(id);
        } else {
          setMug3(mugEmpty);
          setMug4(mugEmpty);
          setMug5(mugEmpty);
        }
        break;
      case 3:
        if (mug3 === mugEmpty) {
          setMug1(mugFull);
          setMug2(mugFull);
          setMug3(mugFull);
          setStar(id);
        } else {
          setMug4(mugEmpty);
          setMug5(mugEmpty);
        }
        break;
      case 4:
        if (mug4 === mugEmpty) {
          setMug1(mugFull);
          setMug2(mugFull);
          setMug3(mugFull);
          setMug4(mugFull);
          setStar(id);
        } else {
          setMug5(mugEmpty);
        }
        break;
      case 5:
        if (mug5 === mugEmpty) {
          setMug1(mugFull);
          setMug2(mugFull);
          setMug3(mugFull);
          setMug4(mugFull);
          setMug5(mugFull);
          setStar(id);
        }
        break;
      // code block

      default:
      // code block
    }
  };


  useEffect(() => {

    StarClick(props.star)
    }, []);

  return (
    <Wrapper>
      <div className="mugs">
        <img src={mug1} className="mug" alt="glass" onClick={() => StarClick(1)}/>
        <img src={mug2} className="mug" alt="glass" onClick={() => StarClick(2)}/>
        <img src={mug3} className="mug" alt="glass" onClick={() => StarClick(3)}/>
        <img src={mug4} className="mug" alt="glass" onClick={() => StarClick(4)}/>
        <img src={mug5} className="mug" alt="glass" onClick={() => StarClick(5)}/>
      </div>
    </Wrapper>
  );


}

const Wrapper = styled.main`
  .mugs {
    display: flex;
  }

  .mug {
    width: 50px;
    height: 65px;
    cursor: pointer;
    margin: 1px 4px;
  }

`;

export default Stars;

