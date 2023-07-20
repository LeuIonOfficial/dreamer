import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";
import {Dashboard} from "../screens/Dashboard";
import {createBrowserRouter} from "react-router-dom"
import {Layout} from "../screens/Layout";
import {PrivateRoutes} from "./PrivateRoutes";
import {PricingPage} from "../screens/PricingPage";
import {UserProfile} from "../screens/UserProfile";
import {WingPage} from "../screens/WingPage";
import {CreateDream} from "../components/CreateDream/CreateDream";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {path: "", element: <HomeScreen/>},
            {path: "login", element: <LoginScreen/>},
            {path: "signup", element: <SignupScreen/>},
        ]
    },
    {
        element: <PrivateRoutes/>,
        children: [
            {path: "dashboard", element: <Dashboard/>},
            {path: "pricing-page", element: <PricingPage/>},
            {
                path: "user-profile",
                element: <UserProfile/>,
                children: [
                    {
                        path: "create-dream",
                        element: <CreateDream />
                    }
                ]
            },
            {path: "wing-page", element: <WingPage/>}
        ]
    }
])

export default router
