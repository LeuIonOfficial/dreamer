import Logged from "./components/Logged.tsx";
import Unlogged from "./components/Unlogged.tsx";
import "./components/Logged.scss";
import "./components/Unlogged.scss";
import Footer from "./components/Footer.tsx"


const App = () => {
    return (
        <div>
        {/*<Unlogged></Unlogged>*/}
        <Logged></Logged>
            <div className="datdiv"></div>
            <Footer></Footer>
    </div>
    )
}

export default App
