import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import {Dashboard} from "./screens/Dashboard";
import LeftSideBar from "./components/LeftSIdeBar/LeftSideBar";
import RightSideBar from "./components/rightSideBar/RightSideBar";
import SecurelyDonation from "./components/SecurelyDonation/SecurelyDonation";
import RightSideBlock from "./components/rightSideBar/RightSideBlock";
import FulfillModal from "./components/Fulfill/FulfillModal";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/*<Route path='/' element={<HomeScreen/>}/>*/}
                {/*<Route path='/login' element={<LoginScreen/>}/>*/}
                {/*<Route path='/signup' element={<SignupScreen/>}/>*/}
                {/*<Route path='/dashboard' element={<Dashboard/>}/>*/}
            </Routes>
            {/*<LeftSideBar />*/}
            <RightSideBlock />
            {/*<HomeScreen></HomeScreen>*/}

        </BrowserRouter>
    )
}
export default App
