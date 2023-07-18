import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import {Dashboard} from "./screens/Dashboard";
import {CreateDream} from "./components/CreateDream/CreateDream";
import styled from "styled-components";
import Footer from "./components/HeaderFooter/Footer";
import {UserProfile} from "./screens/UserProfile";
import {WingPage} from "./screens/WingPage";
import {PricingPage} from "./screens/PricingPage";
import {PrivateRoute} from "./utils/PrivateRoute";
import Unlogged from "./components/HeaderFooter/Unlogged";
import Logged from "./components/HeaderFooter/Logged";
import {useState} from "react";

const App = () => {

    const Container = styled.div`
      font-family: 'Space Grotesk', sans-serif;
    `
    return (
        <Container>
            <BrowserRouter>
                <Unlogged/>
                <Routes>
                    <Route path='/' element={<HomeScreen/>}/>
                    <Route path='/login' element={<LoginScreen/>}/>
                    <Route path='/signup' element={<SignupScreen/>}/>
                    <Route path='/dashboard' element={<Dashboard/>}/>
                    <Route path='/user-profile' element={<UserProfile/>}/>
                    <Route path='/user-profile/createdream' element={<CreateDream/>}/>
                    <Route path='/wing-page' element={<WingPage/>}/>
                    <Route path='/pricing-page' element={<PricingPage/>}/>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </Container>
    )
}

export default App
