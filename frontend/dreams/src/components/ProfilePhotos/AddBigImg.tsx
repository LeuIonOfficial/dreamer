import styled from "styled-components";
import AddImg from "./AddImg";
import { useRef, useState} from "react";

// const ImgInput = styled.input`
//   width: 100%;
//   height: 100%;
//   position: absolute;
//   opacity: 0;
//   display: none;
// `

// multiple name ='image'
//id ='image_input'
const AddBigImg = (props) => {
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

    return(
        <AddImg width={'100%'} height={'201px'} onClick ={handleImageClick}>
            {image ? (
                <img src={URL.createObjectURL(image)} alt=""/>
            ):(
                <img src="" alt=""/>
            )}
            <input type='file' accept='image/png, image/jpeg, image/jpg' ref={inputRef} onChange={handleImageChange} />
        </AddImg>
    )
}

export default AddBigImg;
