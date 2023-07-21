import styled from "styled-components";

const Background = styled.div`
  height: fit-content;
  background-clip: content-box, border-box;
  background-image: linear-gradient(#fff, #fff), linear-gradient(150.93deg, #84fad5 1.02%, #ebbfff 44.33%, #f6ec85 76.07%);
  background-origin: border-box !important;
  border: 1px solid transparent;
  border-radius: 8px;
  box-shadow: 0 33px 20px rgba(0, 0, 0, .06), 0 7.371px 4.467px rgba(0, 0, 0, .01), 0 2.195px 1.33px rgba(0, 0, 0, .01);
`

export const Border = ({children}) => {
	return (
		<>
			<Background>
				{children}
			</Background>
		</>
	)
}