import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";
import {Dashboard} from "../screens/Dashboard";
import {createBrowserRouter} from "react-router-dom"
import {Layout} from "./Layout";
import {PrivateRoutes} from "./PrivateRoutes";
import {PricingPage} from "../screens/PricingPage";
import {Profile} from "../screens/Profile";
import {WingPage} from "../screens/WingPage";
import {CreateDream} from "../components/CreateDream/CreateDream";
import Confirmation from "../screens/Confirmation";
import {UserProfile} from "../screens/UserProfile";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {path: "", element: <HomeScreen/>},
            {path: "login", element: <LoginScreen/>},
            {
                path: "signup",
                element: <SignupScreen/>,
            },
            {
                path: "success",
                element: <Confirmation/>
            }
        ]
    },
    {
        element: <PrivateRoutes/>,
        children: [
            {path: "dashboard", element: <Dashboard/>},
            {path: "pricing-page", element: <PricingPage/>},
            {
                path: "user-profile",
                element: <Profile/>,
                children: [
                    {
                        path: "",
                        element: <UserProfile/>
                    },
                    {
                        path: "create-dream",
                        element: <CreateDream/>
                    }
                ]
            },
            {path: "wing-page", element: <WingPage/>}
        ]
    }
])

export default router
