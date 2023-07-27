import './AboutBiographu.css'
import React, { useState, useEffect } from 'react';
import axios from "axios";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";

const AboutBiographyEdit = () => {
    const [email, setEmail] = useState('');
    const [selectedGender, setSelectedGender] = useState('');
    const [selectedBirthDate, setSelectedBirthDate] = useState('');
    const [valid, setValid] = useState(true);
    const [firstName, setFirstName] = useState('');
    const [validFirstName, setValidFirstName] = useState(true);
    const [lastName, setLastName] = useState('');
    const [validLastName , setValidLastName] = useState(true)
    const [phoneNumber, setPhoneNumber] = useState('');
    const [validPhoneNumber, setValidPhoneNumber] = useState(true);
    const [isEditing, setIsEditing] = useState(false);
    const [message, setMessage] = useState('');

    const handleButtonClick = () => {
        if (isEditing) {
            setIsEditing(false);
        } else {
            setIsEditing(true);
        }
    };
    const handleChangeEmail = (event) => {
        const inputValue = event.target.value;
        setEmail(inputValue);
        validateEmail(inputValue);
        setMessage(event.target.value);
        console.log('Email:', event.target.value);
    };
    const validateEmail = (input) => {
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setValid(pattern.test(input));
    };
    const handleChangeGender = (event) => {
        const inputValue = event.target.value;
        setSelectedGender(inputValue);
        console.log('Gender:', inputValue);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        handleButtonClick()
        if(!isEditing){
            return
        }
        const data = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phoneNumber: phoneNumber,
            birthDate: selectedBirthDate,
            gender: selectedGender,
            country: selectedCountry,
            city: selectedRegion
        };
        console.log(data)
        const token = localStorage.getItem('token')

        // try {
        axios.post('http://localhost:3000/about' , JSON.stringify(data) , {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `token:${token}`
                }
            }
            ).then(response => {
            // const token = localStorage.getItem('token');
            // console.log(token);
            console.log('response: ', response)
        }).catch(error => {
            console.log('error: ', error)
        })
        // } catch (error) {
        //     console.error('Eroare la trimiterea datelor:', error);
        // }
    };

    const handleChangeFirstName = (event) => {
        const inputValue = event.target.value;
        setFirstName(inputValue);
        validateFirstName(inputValue);
        setMessage(event.target.value);
        console.log('First name:', event.target.value);
    };
    const validateFirstName = (input) => {
        const pattern = /^[a-zA-Z]{2,20}$/;
        setValidFirstName(pattern.test(input));

    };
    const handleChangeBirthDate = (event) => {
        const inputValue = event.target.value;
        setSelectedBirthDate(inputValue);
        console.log('Birth Date:', inputValue);
    };
    const handleLastNameChange = (event) => {
        const inputValue = event.target.value;
        setLastName(inputValue);
        validateLastName(inputValue);
        setMessage(event.target.value);
        console.log('Last name:', event.target.value);
    };
    const validateLastName = (input) => {
        const pattern = /^[a-zA-Z]{2,20}$/;
        setValidLastName(pattern.test(input));
    }

    const handleChangePhoneNumber = (event) => {
        const inputValue = event.target.value;
        setPhoneNumber(inputValue);
        validatePhoneNumber(inputValue);
        setMessage(event.target.value);
        console.log('Phone number:', event.target.value);
    };
    const validatePhoneNumber = (input) => {
        const pattern = /^\+[0-9]{7,15}$/;
        setValidPhoneNumber(pattern.test(input));
    };

    const [selectedCountry, setSelectedCountry] = useState("");
    const [selectedRegion, setSelectedRegion] = useState("");

    const handleCountryChange = (country) => {
        setSelectedCountry(country);
        setSelectedRegion("");
    };

    const handleRegionChange = (region) => {
        setSelectedRegion(region);
    };

    return (
        <div className='container-biography'>
            <div className='card-biography'>
                <form action="" className='test-biography' onSubmit={handleSubmit}>
                    <div className='dashboard-text'>
                        <div className='text-biography'>
                            <span className='span-biography'>Biography</span>
                        </div>

                        <button type={"submit"} className='button-biography'>
                            <div className='text-button-biography'>
                                <span>{isEditing ? 'Submit' : 'Edit profile'}</span>
                            </div>
                        </button>
                    </div>

                    <div className='input-group-biography'>
                        <div className='first-input-group'>

                            <div className='input-name'>
                                <span className='first-part-biography'>First Name*</span>
                                <input
                                    type="text"
                                    name='firstName'
                                    className='first-part-input'
                                    value={firstName}
                                    onChange={handleChangeFirstName}
                                    disabled={!isEditing}

                                />
                                {!validFirstName && (
                                    <p className="par-text">
                                        First Name must contain only letters and be between 2 and 20
                                        characters long.
                                    </p>
                                )}
                            </div>

                            <div className='input-name'>
                                <span className='first-part-biography'>Birth Date*</span>
                                <input type="date" name='Birth' className='first-part-input' disabled={!isEditing} onChange={handleChangeBirthDate}/>
                            </div>

                            <div className='input-name'>
                                <span className='first-part-biography'>Email Address*</span>
                                <input
                                    type="text"
                                    name='Email'
                                    className='first-part-input'
                                    value={email}
                                    onChange={handleChangeEmail}
                                    disabled={!isEditing}

                                />
                                {!valid && <p className="par-text">Please enter a valid email address.</p>}
                            </div>

                            <div className='input-name'>
                                <span className='first-part-biography'>Country*</span>
                                <CountryDropdown
                                    id="country"
                                    className='first-part-input'
                                    value={selectedCountry}
                                    onChange={handleCountryChange}
                                    disabled={!isEditing}
                                />
                            </div>
                        </div>

                        <div className='first-input-group'>

                            <div className='input-name'>
                                <span className='first-part-biography'>Last Name*</span>
                                <input
                                    type="text"
                                    name='LastName'
                                    className='first-part-input'
                                    value={lastName}
                                    onChange={handleLastNameChange}
                                    disabled={!isEditing}
                                />
                                {!validLastName && (
                                    <p className="par-text">
                                        First Name must contain only letters and be between 2 and 20
                                        characters long.
                                    </p>
                                )}
                            </div>

                            <div className='input-name'>
                                <span className='first-part-biography'>Gender*</span>
                                <select name="gender" className='first-part-input' disabled={!isEditing} onChange={handleChangeGender}>
                                    <option value="">Selected Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>

                            </div>

                            <div className='input-name'>
                                <span className='first-part-biography'>Phone Number*</span>
                                <input
                                    type="tel"
                                    name='PhoneNumber'
                                    className='first-part-input'
                                    value={phoneNumber}
                                    onChange={handleChangePhoneNumber}
                                    disabled={!isEditing}
                                />
                                {!validPhoneNumber && (
                                    <p className='par-text'>
                                        Phone Number must contain only digits and be between 7 and 15
                                        characters long.
                                    </p>
                                )}
                            </div>
                            <div className='input-name'>
                                <span className='first-part-biography'>City*</span>
                                <RegionDropdown
                                    id="region"
                                    className='first-part-input'
                                    country={selectedCountry}
                                    value={selectedRegion}
                                    onChange={handleRegionChange}
                                    disabled={!isEditing}
                                />
                            </div>
                        </div>
                    </div>

                    <div>
                        <span className='about-me-biography' >About me</span>
                        <textarea className='textarea-biography' disabled={!isEditing}></textarea>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AboutBiographyEdit