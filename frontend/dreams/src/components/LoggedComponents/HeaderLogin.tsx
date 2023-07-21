import styled from "styled-components";

const HLogin = styled.div`
  display: flex;
  position: sticky;
  justify-content: space-between;
  align-items: center;
  margin: 0px;
  background-color: white;
  height: 60px;
  max-width: 100%;
  padding: 0 8px;
  border-bottom: 4px solid;
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
