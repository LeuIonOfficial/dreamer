import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import {Dashboard} from "./screens/Dashboard";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomeScreen/>}/>
                <Route path='/login' element={<LoginScreen/>}/>
                <Route path='/signup' element={<SignupScreen/>}/>
                <Route path='/dashboard' element={<Dashboard/>}/>
            </Routes>


        </BrowserRouter>
    )
}
export default App
