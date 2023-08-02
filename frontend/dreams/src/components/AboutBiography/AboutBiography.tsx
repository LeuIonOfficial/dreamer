import React, {useEffect, useState} from 'react';
import axios from "axios";
import {ContainerBiography,
    CardBiography,
    DashboardText,
    TextBiography,
    SpanBiography,
    ButtonBiography,
    TextButtonBiography,
    InputGroupBiography,
    FirstInputGroup,
    InputName,
    FirstPartBiography,
    FirstPartInput,
    TextError,
    AboutMeBiography,
    TextAreaBiography,
    StyledCountryDropdown,
    StyledRegionDropdown,
    SelectGender} from './StyleBiography'
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
        // console.log('Email:', event.target.value);
    };
    const validateEmail = (input) => {
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setValid(pattern.test(input));
    };
    const handleChangeGender = (event) => {
        const inputValue = event.target.value;
        setSelectedGender(inputValue);
        // console.log('Gender:', inputValue);
    }


    const handleSubmit = async (event) => {
        event.preventDefault();
        handleButtonClick()
        if(!isEditing){
            return
        }
        const isFormValid =
            valid &&
            validFirstName &&
            validLastName &&
            validPhoneNumber &&
            selectedCountry !== "" &&
            selectedRegion !== "" &&
            selectedGender !== "" &&
            selectedBirthDate !== "";

        if (!isFormValid) {
            alert("Please fill in all the required fields correctly.");
            return;
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

        axios.post('http://localhost:3000/about' , JSON.stringify(data) , {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `${token}`
                }
            }
            ).then(response => {
            console.log('response: ', response)
        }).catch(error => {
            console.log('error: ', error)
        })

    };
    const fetchData = async () => {
        const token = localStorage.getItem('token');

        try {
            const response = await axios.get('http://localhost:3000/about', {
                headers: {
                    "Authorization": `${token}`
                }
            });

            const responseData = response.data;
            setFirstName(responseData.firstName);
            setLastName(responseData.lastName);
            setEmail(responseData.email);
            setPhoneNumber(responseData.phoneNumber);
            setSelectedBirthDate(responseData.birthDate);
            setSelectedGender(responseData.gender);
            setSelectedCountry(responseData.country);
            setSelectedRegion(responseData.city);
        } catch (error) {
            console.log('Error fetching data: ', error);
        }
    };

    const handleChangeFirstName = (event) => {
        const inputValue = event.target.value;
        setFirstName(inputValue);
        validateFirstName(inputValue);
        setMessage(event.target.value);
        // console.log('First name:', event.target.value);
    };
    const validateFirstName = (input) => {
        const pattern = /^[a-zA-Z]{2,20}$/;
        setValidFirstName(pattern.test(input));

    };
    const handleChangeBirthDate = (event) => {
        const inputValue = event.target.value;
        setSelectedBirthDate(inputValue);
        // console.log('Birth Date:', inputValue);
    };
    const handleLastNameChange = (event) => {
        const inputValue = event.target.value;
        setLastName(inputValue);
        validateLastName(inputValue);
        setMessage(event.target.value);
        // console.log('Last name:', event.target.value);
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
        // console.log('Phone number:', event.target.value);
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
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <ContainerBiography>
            <CardBiography>
                <form action="" onSubmit={handleSubmit}>
                    <DashboardText>
                        <TextBiography>
                            <SpanBiography>Biography</SpanBiography>
                        </TextBiography>

                        <ButtonBiography type={"submit"}>
                            <TextButtonBiography>
                                <span>{isEditing ? 'Submit' : 'Edit profile'}</span>
                            </TextButtonBiography>
                        </ButtonBiography>
                    </DashboardText>

                    <InputGroupBiography>
                        <FirstInputGroup>

                            <InputName>
                                <FirstPartBiography>First Name*</FirstPartBiography>
                                <FirstPartInput
                                    type="text"
                                    name='firstName'
                                    value={firstName}
                                    onChange={handleChangeFirstName}
                                    disabled={!isEditing}

                                />
                                {!validFirstName && (
                                    <TextError>
                                        First Name must contain only letters and be between 2 and 20
                                        characters long.
                                    </TextError>
                                )}
                            </InputName>

                            <InputName>
                                <FirstPartBiography>Birth Date*</FirstPartBiography>
                                <FirstPartInput type="date" name='Birth' disabled={!isEditing} onChange={handleChangeBirthDate}/>
                            </InputName>

                            <InputName>
                                <FirstPartBiography>Email Address*</FirstPartBiography>
                                <FirstPartInput
                                    type="text"
                                    name='Email'
                                    value={email}
                                    onChange={handleChangeEmail}
                                    disabled={!isEditing}

                                />
                                {!valid && <TextError>Please enter a valid email address.</TextError>}
                            </InputName>

                            <InputName>
                                <FirstPartBiography>Country*</FirstPartBiography>
                                <StyledCountryDropdown
                                    id="country"
                                    value={selectedCountry}
                                    onChange={handleCountryChange}
                                    disabled={!isEditing}
                                />
                            </InputName>
                        </FirstInputGroup>

                        <FirstInputGroup>

                            <InputName>
                                <FirstPartBiography>Last Name*</FirstPartBiography>
                                <FirstPartInput
                                    type="text"
                                    name='LastName'
                                    value={lastName}
                                    onChange={handleLastNameChange}
                                    disabled={!isEditing}
                                />
                                {!validLastName && (
                                    <TextError>
                                        First Name must contain only letters and be between 2 and 20
                                        characters long.
                                    </TextError>
                                )}
                            </InputName>

                            <InputName>
                                <FirstPartBiography>Gender*</FirstPartBiography>
                                <SelectGender name="gender" disabled={!isEditing} onChange={handleChangeGender}>
                                    <option value="">Selected Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </SelectGender>

                            </InputName>

                            <InputName>
                                <FirstPartBiography>Phone Number*</FirstPartBiography>
                                <FirstPartInput
                                    type="tel"
                                    name='PhoneNumber'
                                    value={phoneNumber}
                                    onChange={handleChangePhoneNumber}
                                    disabled={!isEditing}
                                />
                                {!validPhoneNumber && (
                                    <TextError>
                                        Phone Number must contain only digits and be between 7 and 15
                                        characters long.
                                    </TextError>
                                )}
                            </InputName>
                            <InputName>
                                <FirstPartBiography>City*</FirstPartBiography>
                                <StyledRegionDropdown
                                    id="region"
                                    country={selectedCountry}
                                    value={selectedRegion}
                                    onChange={handleRegionChange}
                                    disabled={!isEditing}
                                />
                            </InputName>
                        </FirstInputGroup>
                    </InputGroupBiography>

                    <div>
                        <AboutMeBiography >About me</AboutMeBiography>
                        <TextAreaBiography disabled={!isEditing}></TextAreaBiography>
                    </div>
                </form>
            </CardBiography>
        </ContainerBiography>
    )
}

export default AboutBiographyEdit