import {RouterProvider} from "react-router-dom";
import styled from "styled-components";
import router from "./navigation/navigation";

const App = () => {

    const Container = styled.div`
      & * {
        font-family: 'Space Grotesk', sans-serif;
      }
    `
    return (
        <Container>
            <RouterProvider router={router}/>
        </Container>
    )
}

export default App
