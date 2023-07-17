import {useState} from "react";
import axios from "axios";

export const ImageUpload = () => {
    const [image, setImage] = useState('')
    const handleImage = (e) => {
        console.log(e.target.files);
        setImage(e.target.files[0]);
    };
    const handleApi = () =>{
        const fromData = new FormData();
        fromData.append('image', image);
        axios.post('url', fromData).then((res) =>{
            console.log(res)
        })
    };
    return (
        <div>
            <input type="file" name='file' onChange={handleImage}/>
            <button onClick={handleApi}>Submit</button>
        </div>
    )
}
