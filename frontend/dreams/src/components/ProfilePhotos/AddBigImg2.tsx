import { useRef, useState} from "react";
import styled from "styled-components";
import AddImg from "./AddImg";

const ImgInput = styled.input`
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: 0;
  display: block;
`
const ImgSize = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 7px;
  cursor: pointer;
  display: ${props => props.display};
`
//
const AddBigImg2 = (props) => {
    const inputRef = useRef(null);
    const [image, setImage] = useState("");
    const handleImageClick = () => {
        // const img_nput = document.getElementById('image_input');
        inputRef.current.click();
    };
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        console.log(file);
        setImage(event.target.files[0]);
    }
    return (
        <AddImg width={'100%'} height={'201px'} onclick={handleImageClick}>
            {image ? (
                <ImgSize src={URL.createObjectURL(image)} alt=""/>
            ):(
                <ImgSize display ={'none'}/>
                )}
            <ImgInput type='file' ref={inputRef} accept='image/png, image/jpeg, image/jpg' onChange={handleImageChange}/>
            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor"
                 className="bi bi-camera-fill"
                 viewBox="0 0 16 16">
                <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"></path>
                <path
                    d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z"></path>
            </svg>
            {image ? ( <span></span>) : (<span>Add Image</span>)}
        </AddImg>
    )
}

export default AddBigImg2;
