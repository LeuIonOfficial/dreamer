import "./Header1.scss";

function Header1() {
    return (
        <div className="bg-header">

            <div className="logo-white"></div>
            <div className="buttons-together">
                <div className="log-in">
                    <span>Log in</span>
                </div>
                <div className="log-in sign-up">
                    <span className="text-in-button">Sign up</span>
                </div>
            </div>

        </div>
    )
}

export default Header1;
