import styled from "styled-components";
import React from "react";

const HLogin = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  justify-content: space-between;
  align-items: center;
  margin: 0px;
  background-color: white;
  height: 63px;
  max-width: 100%;
  padding: 0 8px;
  border-bottom: 4px solid;
  border-image-width: 100%;
  border-image: linear-gradient(114.93deg, #84fad5 1.02%, #ebbfff 44.33%, #f6ec85 76.07%);
  border-image-slice: 1;
  z-index: 1000;`

const HeaderLogin = (props) => {
    return (
        <HLogin>
            {props.children}
        </HLogin>
    )
}

export default HeaderLogin ;
