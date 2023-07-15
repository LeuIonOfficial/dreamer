import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import {Dashboard} from "./screens/Dashboard";
import {CreateDream} from "./components/CreateDream/CreateDream";
import styled from "styled-components";
import Footer from "./components/HeaderFooter/Footer";
import {FrameStyled} from "./components/CreateDream/createDream.template";


const App = () => {
    const Container = styled.div`
      font-family: 'Space Grotesk', sans-serif;
    `
    return (
        <BrowserRouter>
            <Container>
                <Routes>
                    <Route path='/' element={<HomeScreen/>}/>
                    <Route path='/login' element={<LoginScreen/>}/>
                    <Route path='/signup' element={<SignupScreen/>}/>
                    <Route path='/dashboard' element={<Dashboard/>}/>
                    <Route path='/user-profile/create-dream' element={<CreateDream/>}/>
                </Routes>
                <div>
                    <Footer/>
                </div>
            </Container>
        </BrowserRouter>
    )
}

export default App
