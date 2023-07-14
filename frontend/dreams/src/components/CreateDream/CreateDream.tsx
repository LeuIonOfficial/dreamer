import styled from "styled-components";
import Button from "../Authorization/Button";
import {useState} from "react";


export const CreateDream = () => {
    const [img, setImg] = useState<string>()

    const fileDataString = (file: File) => {
        return new Promise<string>((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onerror = (error) => reject(error);
            reader.onload = () => resolve(reader.result as string)
        });
    }
    const imageLoadHandler = async (event) => {
        const file = event.target.file?.[0]

        if (!file) {
            return
        }

        try {
            setImg(await fileDataString(file))
        } catch (error) {
            console.log(error)
        }

    }


    const Container = styled.div`
      width: 800px;
      height: 550px;
      background: #fff;
      box-shadow: 0 10px 15px rgba(179, 179, 179, 0.7);
      border-radius: 7px;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      padding: 35px;
      margin: 20px;

    `

    const Header = styled.div`
      & h1 {
        color: #333;
        font-weight: 700;
        font-size: 1.70rem;
        text-align: start;
      }
    `

    const Toolbar = styled.div`
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;

      & div {
        background-color: #e5e5e5;
        border-radius: 50%;
        width: 100px;
        height: 100px;
        display: flex;
        flex-direction: row-reverse;
        margin: 10px;
      }

      & span {
        align-self: flex-end;
        position: relative;
        width: 25px;
        height: 25px;
        border-radius: 50%;
        border: 1px solid #e5e5e5;
        background-color: #fff;
      }

      & label {
        cursor: pointer;
        position: absolute;
        color: cornflowerblue;
        width: 100%;
        height: 100%;
        background-size: cover;
      }

      & input {
        display: none;
        visibility: hidden;
      }
    `

    const Content = styled.div`
      display: flex;
      flex-direction: column;
    `

    const Description = styled.div`
      display: flex;
      flex-direction: column;

      & textarea {
        resize: none;
        width: 100%;
        height: 100px;
        background: #fbfbfb;
        border: 1px solid #e5e5e5;
        border-radius: 4px;
        color: #a3a5a6;
        outline: none;
        line-height: 22px;
        padding: 10px;
      }
    `

    const Price = styled.div`
      display: flex;
      flex-direction: column;
      margin: 10px 0;

      & div {
        flex-direction: row;
      }

      & input {
        resize: none;
        width: 30%;
        height: 22px;
        background: #fbfbfb;
        border: 1px solid #e5e5e5;
        border-radius: 4px;
        color: #a3a5a6;
        outline: none;
        line-height: 22px;
        margin-right: 10px;
        padding: 10px;

      }
    `

    const Footer = styled.div`
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      padding: 10px;

      & button {
        margin: 0 10px;
      }
    `


    return (
        <div className="flex justify-center items-center">
            <Container>
                <Header>
                    <h1>Create Dream</h1>
                </Header>
                <Toolbar>
                    <div>
                        <span>
                            <label htmlFor="img">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path
                                    fill="cornflowerblue" d="M11 19v-6H5v-2h6V5h2v6h6v2h-6v6h-2Z"/></svg>
                            </label>
                            <input type="file" id="img" onChange={imageLoadHandler}/>
                        </span>
                    </div>
                    <div>
                        <span>
                            <label htmlFor="img">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path
                                    fill="cornflowerblue" d="M11 19v-6H5v-2h6V5h2v6h6v2h-6v6h-2Z"/></svg>
                            </label>
                            <input type="file" id="img"/>
                        </span>
                    </div>
                    <div>
                        <span>
                            <label htmlFor="img">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path
                                    fill="cornflowerblue" d="M11 19v-6H5v-2h6V5h2v6h6v2h-6v6h-2Z"/></svg>
                            </label>
                            <input type="file" id="img"/>
                        </span>
                    </div>
                    <div>
                        <span>
                            <label htmlFor="img">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path
                                    fill="cornflowerblue" d="M11 19v-6H5v-2h6V5h2v6h6v2h-6v6h-2Z"/></svg>
                            </label>
                            <input type="file" id="img"/>
                        </span>
                    </div>
                    <div>
                        <span>
                            <label htmlFor="img">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path
                                    fill="cornflowerblue" d="M11 19v-6H5v-2h6V5h2v6h6v2h-6v6h-2Z"/></svg>
                            </label>
                            <input type="file" id="img"/>
                        </span>
                    </div>
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