import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";
import {Dashboard} from "../screens/Dashboard";
import {UserProfile} from "../screens/UserProfile";
import {CreateDream} from "../components/CreateDream/CreateDream";
import {WingPage} from "../screens/WingPage";
import {PricingPage} from "../screens/PricingPage";

interface INav  {
    path: string
    name: string
    element: React.FC
    isPrivate: boolean
}

export const nav: Array<INav> = [
    {path: "/", name: "home", element: HomeScreen, isPrivate: false},
    {path: "/login", name: "login", element: LoginScreen, isPrivate: false},
    {path: "/sign-up", name: "sing-up", element: SignupScreen, isPrivate: false},
    {path: "/dashboard", name: "dashboard", element: Dashboard, isPrivate: true},
    {path: "/user-profile", name: "user-profile", element: UserProfile, isPrivate: true},
    {path: "/user-profile/create-dream", name: "user-profile-create-dream", element: CreateDream, isPrivate: true},
    {path: "/wing-page", name: "wing-page", element: WingPage, isPrivate: true},
    {path: "/pricing-page", name: "pricing-page", element: PricingPage, isPrivate: true}
]