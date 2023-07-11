import Logged from "./components/Logged.tsx";
import Unlogged from "./components/Unlogged.tsx";
import "./components/Logged.scss";
import "./components/Unlogged.scss";
import Footer from "./components/Footer.tsx"
import MyScreen from "./components/MyScreen.tsx";


const App = () => {
    return (
        <MyScreen>
        {/*<Unlogged></Unlogged>*/}
        <Logged></Logged>
            <div className="datdiv"></div>
            <Footer></Footer>
    </MyScreen>
    )
}

export default App
