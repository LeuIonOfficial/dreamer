import {Outlet} from "react-router-dom";
import ProfilePhotos from "../components/ProfilePhotos/ProfiePhotos";

export const UserProfile = () => {
	return (
		<>
			<ProfilePhotos />
			<Outlet />
		</>
	)
}
