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
    CloseButton,
    Image
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
                            <CloseButton onClick={() => handleRemoveImage(index)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path fill="none" stroke="white" strokeDasharray="12" strokeDashoffset="12"
                                          strokeLinecap="round" strokeWidth="2"
                                          d="M12 12L19 19M12 12L5 5M12 12L5 19M12 12L19 5">
                                        <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s"
                                                 values="12;0"/>
                                    </path>
                                </svg>
                            </CloseButton>
                        </Image>

                    }) : null}
                    {data.image.length < 5 && <FrameStyled>
                      <label htmlFor="addImage">
                        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24">
                          <path fill="#333"
                                d="m7 19l5-5l1.88 1.88c-.55.91-.88 1.98-.88 3.12H7m3-8.5C10 9.67 9.33 9 8.5 9S7 9.67 7 10.5S7.67 12 8.5 12s1.5-.67 1.5-1.5m3.09 9.5H6V4h7v5h5v4.09c.33-.05.66-.09 1-.09c.34 0 .67.04 1 .09V8l-6-6H6a2 2 0 0 0-2 2v16c0 1.11.89 2 2 2h7.81c-.35-.61-.6-1.28-.72-2M18 15v3h-3v2h3v3h2v-3h3v-2h-3v-3h-2Z"/>
                        </svg>


                      </label>
                      <input type="file" id="addImage" onInput={handleImageAdd}/>
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