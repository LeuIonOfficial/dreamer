import styled from "styled-components";
import {Container} from "../components/CreateDream/createDream.template";
import {FormButton} from "../components/Authorization/button.template";
import {useNavigate} from "react-router-dom";

const Confirmation = () => {

    const navigate = useNavigate()


    const styles = {
        container: {
            flexDirection: "row",
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
                    <FormButton style={button} onClick={() => navigate("/login")}>Log in</FormButton>
                </Container>
            </Content>
        </>
    )
}

export default Confirmation