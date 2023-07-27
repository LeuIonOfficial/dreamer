import styled from "styled-components";
import {Container} from "../components/CreateDream/createDream.template";
import {FormButton} from "../components/Authorization/button.template";
import loginScreen from "./LoginScreen";


const Confirmation = () => {

    const isRowBased = matchMedia('(min-width: 500px)');
    console.log(isRowBased)

    const styles = {
        container: {
            flexDirection: isRowBased.matches ? "row" : "column",
            alignItems: "center",
        }
    }

    const Content = styled.div`
      width: 100%;
      height: 80vh;
      display: flex;
      justify-content: center;
      align-items: center;
    `

    const button = {
        width: "100px"
    }


    return (
        <>
            <Content>
                <Container style={styles.container}>
                    <div>
                        <h1>
                            Dear guest!
                        </h1>
                        <p>
                            You have successfully registered!
                        </p>
                    </div>
                    <FormButton style={button}>Log in</FormButton>
                </Container>
            </Content>
        </>
    )
}

export default Confirmation