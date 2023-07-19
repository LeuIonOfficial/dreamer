import styled from "styled-components";

const Words = styled.span`
color: rgb(79, 79, 79);
  font-weight: bold;
  font-family: Space Grotesk, serif;
`

const Box = styled.div`
margin: 10px 0px
`
const SectionName = (props) => {
    return (
        <Box>
        <Words>
            {props.children}
            {/*Profile Photos*/}
        </Words>
        </Box>
    )
}
export default SectionName;
