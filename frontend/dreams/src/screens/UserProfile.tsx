import AboutBiography from "../components/AboutBiography/AboutBiography";
import {ProfileHeader} from "../components/ProfileHeader/ProfileHeader";
import {ComponentSelector} from "../components/ProfileHeader/ComponentSelector";
import styled from "styled-components";
const Container = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0 304px 0 304px;
`
export const UserProfile = () => {
	return (
		<Container>
			<ProfileHeader/>
			<ComponentSelector/>
		</Container>
	)
}
