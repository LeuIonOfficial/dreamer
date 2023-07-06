import './ProjectPurpose.css'
import { useNavigate } from "react-router-dom";



const Easier = () => {

    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate('/signup');
    };


    return (
        <div className='container-easier'>
        <h1 className='text-heading-easier'>It's easier than you think</h1>
    <div className='section-easier'>

        <div className='column-easier'>

            <div className='row-easier'>
                <div className='number-circle-easier'>1</div>
                <p className='text-content-easier'>Set your dream</p>
            </div>

            <div className='row-easier'>
                <div className='number-circle-easier'>2</div>
                <p className='text-content-easier'
                >Start giving a half of your Dream</p>
            </div>
        </div>

        <div className='column-easier'>
            <div className='row-easier'>
                <div className='number-circle-easier'>3</div>
                <p className='text-content-easier'>Receive back twice for your dream</p>
            </div>

            <div className='row-easier'>
                <div className='number-circle-easier'>4</div>
                <p className='text-content-easier'
                >Live your dream. Keep Dreaming !</p>
            </div>
        </div>
    </div>

    <div type="submit"  className='btn-easier' onClick={handleButtonClick}>
        <span className='text-button-easier'>Try now </span>
    </div>

</div>

    );

}

export default Easier