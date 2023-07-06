import './ProjectPurpose.css'
import {useNavigate} from "react-router-dom";

const ProjectPurpose = () => {

    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate('/signup');
    };

    return(

            <div className='project-purpose'>
                <div className='project-section-purpose '>
                    <h1 className='heading-purpose'>Project Purpose</h1>
                    <p className='paragraph-purpose '>
                        Our main goal is to unite people from all over the world and help them fulfill their dreams.
                        <br/>
                        Working together in a friendly community for a brighter future.
                    </p>
                    <div type='submit' className='btn-easier' onClick={handleButtonClick}>
                        <span className='text-button-easier'>Try now</span>
                    </div>
                </div>
                <img src="https://dreamerz.net/static/media/myDream.8d70a4aefa9db11f815a.png" alt="dream" className='img-purpose'/>

            </div>

    )
}

export default ProjectPurpose