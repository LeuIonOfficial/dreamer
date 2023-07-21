import Unlogged from "../components/HeaderFooter/Unlogged";
import {Outlet} from "react-router-dom";

export const Layout = () => {

	return (
		<>
			<Unlogged />
			<Outlet />
		</>
	)
}