// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import styled from "styled-components";


const Validation = (props) => {

    const Validation = styled.div`
      font-size: 12px;
      font-weight: normal;
      color: red;
      z-index: 99;
    `

    return (
        <Validation>
            {props.children}
        </Validation>
    )
}

export default Validation