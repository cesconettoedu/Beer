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

  // const IMAGES_LIST = [
  //   { name: 'starImg-1', isSelected: false },
  //   { name: 'starImg-2', isSelected: false },
  //   { name: 'starImg-3', isSelected: false },
  //   { name: 'starImg-4', isSelected: false },
  //   { name: 'starImg-5', isSelected: false },
  // ]
  // const [images, setImages] = useState(IMAGES_LIST);
  
  const StarClick = (id) => {
    
    if(props.formCallback !== null) {
      props.formCallback(id);
    }
    
    switch (id) {
      case 1:
        if (mug2 === mugFull) {
          setMug1(mugFull);
          setMug2(mugEmpty);
          setMug3(mugEmpty);
          setMug4(mugEmpty);
          setMug5(mugEmpty);
          setStar(id);
        } else if (mug1 === mugEmpty) {
          setMug1(mugFull);
          setStar(id);
        } else {
          setStar(0);
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
          setStar(id);
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
          setStar(id);
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
          setStar(id);
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

  // const handleStarClick = (event) => {
  //   event.preventDefault();
  //   console.log(event.target);
  //   const currentImages = images.map(img => ({
  //     ...img,
  //     isSelected: img.name === event.target.name,
  //   }))
  //   setImages(currentImages);
  // }

 
  useEffect(() => {

    StarClick(props.star)
    }, []);

  return (
    <Wrapper>
      {/* <div className="mugs">
        {images.map((img, i) => (
          <img
            key={i}
            src={img.isSelected ? mugFull : mugEmpty}
            className="mug"
            alt={img.name}
            name={img.name}
            onClick={handleStarClick}
          />
        ))}
      </div> */}
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

