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
    Image, ImageButton
} from "./createDream.template";
import {useState} from "react";


export const CreateDream = () => {

    const [data, setData] = useState({
        image: [],
        description: "",
        amount: 0
    })
    const handleImageAdd = (event) => {
        event.preventDefault()
        const path = event.target.files[0]
        setData((prev) => ({...prev, image: [...prev.image, URL.createObjectURL(path)]}))
    }

    const handleRemoveImage = (index) => {
        const updatedListImage = data.image.filter((_, i) => i !== index)
        setData((prev) => ({...prev, image: updatedListImage}))
    }


    return (
        <div className="flex justify-center items-center">
            <Container>
                <Header>
                    <h1>Create Dream</h1>
                </Header>
                <Toolbar>
                    {data.image ? data.image.map((image, index) => {
                        return <Image key={index}>
                            <img
                                src={image}
                                alt="error"/>
                            <ImageButton onClick={() => handleRemoveImage(index)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 20 20">
                                    <path fill="red" fillRule="evenodd"
                                          d="M1 10a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1Z"
                                          clipRule="evenodd"/>
                                </svg>

                            </ImageButton>
                        </Image>

                    }) : null}
                    {data.image.length < 5 && <FrameStyled>
                      <Image>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 16 16">
                          <path fill="#333"
                                d="M7 2.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0zm4.225 4.053a.5.5 0 0 0-.577.093l-3.71 4.71l-2.66-2.772a.5.5 0 0 0-.63.062L.002 13v2a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4.5l-4.777-3.947z"/>
                        </svg>

                        <ImageButton>
                          <label htmlFor="addImage">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                              <path fill="cornflowerblue" d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2h6Z"/>
                            </svg>
                          </label>
                          <input type="file" id="addImage" onInput={handleImageAdd}/>
                        </ImageButton>
                      </Image>
                    </FrameStyled>}
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