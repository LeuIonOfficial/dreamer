import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import {createGlobalStyle} from "styled-components";

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
                <Route path='/' element={<HomeScreen/>}/>
                <Route path='/login' element={<LoginScreen/>}/>
                <Route path='/signup' element={<SignupScreen/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
