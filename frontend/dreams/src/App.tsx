import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import {createGlobalStyle} from "styled-components";
import Easier from "./components/purpose/Easier";
import ProjectPurpose from "./components/purpose/ProjectPurpose";
import WingsDonation from "./components/Wings Donation/WingsDonation";
import SecurelyDonation from "./components/Securely Donation/SecurelyDonation";




const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Space Grotesk', sans-serif;
  }
`

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/*<Global/>*/}
                {/*<Route path='/' element={<HomeScreen/>}/>*/}
                <Route path='/login' element={<LoginScreen/>}/>
                <Route path='/signup' element={<SignupScreen/>}/>
                <Route path='/easier' element={<Easier/>}/>
                <Route path='/purpose' element={<ProjectPurpose/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
