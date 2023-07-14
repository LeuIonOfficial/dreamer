import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import {Dashboard} from "./screens/Dashboard";
import LeftSideBar from "./components/LeftSIdeBar/LeftSideBar";
import SecurelyDonation from "./components/SecurelyDonation/SecurelyDonation";
import ProfiePhotos from "./components/ProfilePhotos/ProfiePhotos";
import AddBigImg from "./components/ProfilePhotos/AddBigImg";
import {useRef, useState} from "react";

const App = () => {
    return (
        <ProfiePhotos></ProfiePhotos>
        // <BrowserRouter>
        //     <Routes>
        //         {/*<Route path='/' element={<HomeScreen/>}/>*/}
        //         {/*<Route path='/login' element={<LoginScreen/>}/>*/}
        //         {/*<Route path='/signup' element={<SignupScreen/>}/>*/}
        //         {/*<Route path='/dashboard' element={<Dashboard/>}/>*/}
        //     </Routes>
        //     <LeftSideBar />
        //
        //     {/*text*/}
        // </BrowserRouter>
    )
}
export default App
