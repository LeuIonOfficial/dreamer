import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen.tsx";
import SignupScreen from "./screens/SignupScreen.tsx";


const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomeScreen />}/>
                <Route path='/login' element={<LoginScreen />}/>
                <Route path='/signup' element={<SignupScreen />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App