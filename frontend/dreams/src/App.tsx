import {RouterProvider} from "react-router-dom";
import styled from "styled-components";
import Footer from "./components/HeaderFooter/Footer";
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
            {/*<Footer/>*/}
        </Container>
    )
}

export default App
