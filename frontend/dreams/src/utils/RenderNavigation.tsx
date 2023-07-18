import {Routes, Route} from "react-router-dom";
import {nav} from "./navigation";

export const RenderNavigation = () => {
    return (
        <Routes>
            {nav.map((route, index) => {
                if (route.isPrivate) {
                    return <Route key={index} path={route.path} element={<route.element/>}/>
                } else if (!route.isPrivate) {
                    return <Route key={index} path={route.path} element={<route.element/>}/>
                } else return false
            })}
        </Routes>
    )
}