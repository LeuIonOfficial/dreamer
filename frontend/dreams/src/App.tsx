import {RouterProvider} from "react-router-dom";
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
import {PrivateRoutes} from "./navigation/PrivateRoutes";
import Unlogged from "./components/HeaderFooter/Unlogged";
import Logged from "./components/HeaderFooter/Logged";
import {useState} from "react";
import router from "./navigation/navigation";

const App = () => {

    const Container = styled.div`
      font-family: 'Space Grotesk', sans-serif;
    `
    return (
        <Container>
            <RouterProvider router={router}/>
            <Footer/>

        </Container>
    )
}

export default App
