import React from 'react';
import styled from 'styled-components';
import {CountryDropdown, RegionDropdown} from "react-country-region-selector";

const ContainerBiography = styled.div`
  width: 60%;
  margin-left: auto;
  padding: 20px 30px 40px 0;
  
  @media screen and (max-width: 768px) {
    width: 100%;
    margin-left: 0;
    padding: 0;
  }
`
const CardBiography = styled.div`
  padding: 1.25rem;
  box-shadow: 0 4px 8px rgba(0,0,0,.06);
  border-radius: 10px;
`
const DashboardText = styled.div`
  display: flex;
  justify-content: space-between;
`
const TextBiography = styled.div`
  margin-top: 10px;
`
const SpanBiography = styled.span`
  color: rgb(28, 20, 20);
  font-weight: 700;
  font-size: 14px;
`
const ButtonBiography = styled.button`
  width: 100px;
  height: 30px;
  align-items: center;
  background: linear-gradient(#fff,#fff),linear-gradient(160deg,#84fad5 20%,#ebbfff 37%,#f6ec85 53%);
  background-clip: content-box,border-box;
  border-radius: 10px;
  border: 1px double transparent;
  color: #000;
  cursor: pointer;
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
  margin-top: 10px;
  
  &:hover{
    background: linear-gradient(320deg,#f8ed84 23.88%,#f5e0ff 66.2%,#84fad5 109.31%);
    border-radius: 10px;
  }
`
const TextButtonBiography = styled.div`
  font-size: 14px;
  
  &:hover{
    font-size: 16px;
  }
`
const InputGroupBiography = styled.div`
  display: flex;
  justify-content: space-between;
  
`
const FirstInputGroup = styled.div`
  width: 44%;

  @media screen and (max-width: 768px) {
    width: 45%;
  }
`
const InputName = styled.div`
  margin-bottom: 10px;

  @media screen and (max-width: 768px) {
    margin-bottom: 20px;
  }
`
const FirstPartBiography = styled.span`
  color: #9e9e9e;
  font-size: 15px;
`
const FirstPartInput = styled.input`
  background-color: rgb(248, 249, 250);
  height: 35px;
  color: #616161;
  margin-right: 10px;
  border: 1px solid #ddd7d7;
  border-radius: 5px;
  font-size: 14px;
  padding: 6px 12px;
  width: 100%;
  outline: none;
`
const TextError = styled.p`
  color: red;
  font-size: 10px;
`
const AboutMeBiography = styled.span`
  color: #9e9e9e;
  font-size: 15px;
`
const TextAreaBiography = styled.textarea`
  background-color: rgb(248, 249, 250);
  border-radius: 5px;
  font-size: 14px;
  padding: 6px 12px;
  width: 100%;
  outline: none;
  height: 130px;
  color: #616161;
  border: 1px solid #ddd7d7;
`
const StyledCountryDropdown = styled(CountryDropdown)`
  background-color: rgb(248, 249, 250);
  height: 35px;
  color: #616161;
  margin-right: 10px;
  border: 1px solid #ddd7d7;
  border-radius: 5px;
  font-size: 14px;
  padding: 6px 12px;
  width: 100%;
  outline: none;
`
const StyledRegionDropdown = styled(RegionDropdown)`
  background-color: rgb(248, 249, 250);
  height: 35px;
  color: #616161;
  margin-right: 10px;
  border: 1px solid #ddd7d7;
  border-radius: 5px;
  font-size: 14px;
  padding: 6px 12px;
  width: 100%;
  outline: none;
`
const SelectGender = styled.select`
  background-color: rgb(248, 249, 250);
  height: 35px;
  color: #616161;
  margin-right: 10px;
  border: 1px solid #ddd7d7;
  border-radius: 5px;
  font-size: 14px;
  padding: 6px 12px;
  width: 100%;
  outline: none;
`

export {
    ContainerBiography,
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
    SelectGender
}