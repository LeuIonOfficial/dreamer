import styled from "styled-components";

const Screen = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between`
const MyScreen = (props) => {
    return (<Screen>
        {props.children}
    </Screen>)
}

export default MyScreen;
