import "./securely_donation.css"

const Securely_donation = () => {
    return (
        <div>
            <div className="securely_donation_main">
                <div className="securely_donation_textBox">
                    <div className="securely_donation_textBox_inside">
                        <div className="securely_donation_peopleImg">
                            <div className="text_holder">
                                <div className="title_holder">
                                    <img src="./../../../../src/assets/secyrely.7d02b37f3a5dfe54a9285f490e74411e.svg"
                                         alt="screen" className="me2"/>
                                    <h3 className="title_text">Securely Donation</h3>
                                </div>
                                <p className="paragraf_text">
                                    All the donations will be saved in your Profile History Fulfilled – Peoples Dreams
                                    that
                                    you have donated to Received – Donations that you have received from People
                                </p>
                            </div>
                            <img src="./../../../../src/assets/People.372031c702e82c76a061105c055b7f4e.svg" alt=""
                                 className="mt-4"/>
                        </div>
                    </div>
                </div>
                <img src="./../../../../src/assets/screen.80f182283b766496e40e.png" alt="screen" className="mt-5"/>
            </div>

            <div className="mobile_main_box">
                <div className="top_title_container">
                    <img src="./../../../../src/assets/People.372031c702e82c76a061105c055b7f4e.svg" alt="people" className="people_circel"/>
                    <div className="title_container_mobile">
                        <img src="./../../../../src/assets/secyrely.7d02b37f3a5dfe54a9285f490e74411e.svg" alt="security" className="security_mobile"/>
                        <h3 className="title_mobile">Securely Donation</h3>
                    </div>
                </div>
                <p className="mobile_paragraf">
                    All the donations will be saved in your Profile History
                    <br/>
                    Fulfilled – Peoples Dreams that you have donated to
                    <br/>
                    Received – Donations that you have received from People
                </p>
                <div className="mobile_imageContainer">
                    <img src="./../../../../src/assets/screen.80f182283b766496e40e.png" alt="screen" className="donationImage_mobile"/>
                </div>
                <div className="button_mobile_sec">
                    <span className="text_button_mobile">Try now!</span>

                </div>

            </div>
        </div>


    )
}

export default Securely_donation
