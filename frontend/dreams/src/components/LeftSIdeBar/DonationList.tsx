import styled from "styled-components";
import {useEffect, useState} from "react";
import axios from "axios";

const ContainerDonationList = styled.div`
  padding-bottom: 35px;
  max-height: 402px;
  overflow: hidden;
  overflow-y: scroll;
  -ms-overflow-y: hidden;

  &::-webkit-scrollbar {
    border-radius: 20px;
    height: 0.5rem;
    width: 0.2rem;
  }

  &::-webkit-scrollbar-thumb {
    background: #b9b9b9;
    border-radius: 20px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 20px;
  }

  @media (width < 991px) {
    overflow-y: hidden;
    margin-bottom: 35px;
    max-height: 430px;
  }
  @media (width < 820px) {
    overflow-y: scroll;
  }
  
`
const DonationBox = styled.div`
  padding: 10px;
  margin: 10px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 33px 20px rgba(0, 0, 0, .06), 0 7.371px 4.467px rgba(0, 0, 0, .01), 0 2.195px 1.33px rgba(0, 0, 0, .01);
  border-radius: 10px;
`
const DonationListHolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`
const DonationListHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 75px;
`
const DonationListImage = styled.img`
  object-fit: cover;
  width: 55px;
  height: 55px;
  border-radius: 8px;
  max-width: 55px;
`
const Imageholder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(224, 224, 224);
  border-radius: 8px;
  box-sizing: border-box;
  height: 55px;
  width: 55px;
`
const DonationListTextCotainer = styled.div`
  cursor: pointer;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  & h5 {
    color: #000;
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: 17px;

    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;


  }

  & span {
    padding-top: 3px;
    --max-lines: 2;
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: var(--max-lines);
    line-height: 1;
    font-size: 14px;
  }

`
const ButtonForDonationList = styled.div`
  height: 36px;
  width: 100%;
  background: linear-gradient(#fff, #fff), linear-gradient(160deg, #84fad5 20%, #ebbfff 37%, #f6ec85 53%);
  background-clip: content-box, border-box;
  background-origin: border-box;
  border: 1px double transparent;
  border-radius: 8px;
  color: #000;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  & div {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    color: #000;
    width: 100%;
    height: 100%;

    &:hover {
      font-weight: 600;
    }
  }

  &:hover {
    background: linear-gradient(114.93deg, #84fad5 1.02%, #ebbfff 44.33%, #f6ec85 76.07%);
  }
`
export const DonationList = () => {
    const [doantion, setDoantion] = useState([]);
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products').then((res) => setDoantion(res.data))
    }, []);

    return(
        <ContainerDonationList>
            <div>
                {doantion && doantion.length > 0 ? (
                    doantion.map(({title, image, description}) => {
                        return (
                            <DonationBox>
                                <DonationListHolder>
                                    <DonationListHeader>
                                        <Imageholder>
                                            <DonationListImage
                                                src={image}
                                                alt="user image"/>
                                        </Imageholder>
                                        <DonationListTextCotainer>
                                            <h5>{title}</h5>
                                            <span>{description}</span>
                                        </DonationListTextCotainer>
                                    </DonationListHeader>
                                </DonationListHolder>
                                <ButtonForDonationList>
                                    <div>
                                        <span>Donate</span>
                                    </div>
                                </ButtonForDonationList>
                            </DonationBox>)
                    })
                ) : (<p>Nothing</p>)}
            </div>
        </ContainerDonationList>
    )
}