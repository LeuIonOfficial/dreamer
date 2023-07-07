import "./wings_donation_style.css"


const Wings_donation = () => {

    return (
        <div>

            <div className="mainbox">
                <img src="./../../../../src/assets/WingsImage.1e6f79f5963bda8647a3.png" alt="WingDonation"
                     className="image_left_side"/>
                <div className="boxContent">
                    <h2 className="mainTitle">Wings Donations</h2>
                    <p className="mainPargraf">Wings donations are campaignes organized by Dreamerz with the aim of
                        charity,
                        helping people all over the world.</p>
                    <div className="button">
                        <span className="textButon">Try Now!</span>
                    </div>
                </div>
            </div>

            <div className="mainContainer_mobile">
                <img src="./../../../../src/assets/WingsImage.1e6f79f5963bda8647a3.png" alt="Wings" className="image_left_side_mobile"/>
                <div className="w-75-mobile">
                    <h2 className="title-mobile_m2">Wings Donation</h2>
                    <p className="smallText_mobile">Wings donations are campaignes organized by Dreamerz with the aim of charity, helping people all over the world.</p>
                </div>
                <div className="buttonM2_mobile">
                    <span className="textButtonM2_mobile">Try Now!</span>

                </div>

            </div>

        </div>


    )
}


export default Wings_donation
