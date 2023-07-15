import Button from "../Authorization/Button";
import {
    Container,
    Content,
    Description,
    Header,
    Price,
    Toolbar,
    Footer,
    FrameStyled,
    Img, AddButton
} from "./createDream.template";
import {useState} from "react";


export const CreateDream = () => {
  
    const [image, setImage] = useState("")

    const handleImageAdd = (event) => {
        event.preventDefault()
        const path = event.target.files[0]
        setImage(URL.createObjectURL(path))
    }


    return (
        <div className="flex justify-center items-center">
            <Container>
                <Header>
                    <h1>Create Dream</h1>
                </Header>
                <Toolbar>
                    <FrameStyled>
                        {image ? <Img src={image}/> : null}
                        <AddButton>
                            <label htmlFor="addImage">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path
                                        fill="cornflowerblue" d="M11 19v-6H5v-2h6V5h2v6h6v2h-6v6h-2Z"/>
                                </svg>
                            </label>
                            <input type="file" id="addImage" onInput={handleImageAdd}/>
                        </AddButton>
                    </FrameStyled>
                </Toolbar>
                <Content>
                    <Description>
                        <h3>Description*</h3>
                        <textarea placeholder="Description"></textarea>
                    </Description>
                    <Price>
                        <h3>Amount*</h3>
                        <div>
                            <input type="number" placeholder="0"/>
                            <span>USD</span>
                        </div>

                    </Price>
                </Content>
                <Footer>
                    <Button>Submit</Button>
                    <Button>Close</Button>
                </Footer>
            </Container>
        </div>
    )
}