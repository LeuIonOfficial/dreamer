import styled from "styled-components";
import Button from "../Authorization/Button";

const PriceBlock = styled.div`
  background: #fff;
  background-clip: content-box,border-box;
  background-image: linear-gradient(#fff,#fff),linear-gradient(150.93deg,#84fad5 1.02%,#ebbfff 44.33%,#f6ec85 76.07%);
  background-origin: border-box;
  border: 1px solid transparent;
  border-radius: 8px;
  cursor: pointer;

  font-style: normal;
  height: 319px;
  width: 33%;
  margin: 10px;
  justify-content: space-between;
  flex-direction: column;
  display: flex;
  @media (max-width: 500px){
    width: 100%;
  }
`
const PriceCard = styled.div`
  padding: 40px;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
  display: flex;
  
  & Button {
    margin-top: 40px;
  }
`

const PackageCard = styled.div`
  font-weight: 700;
  justify-content: flex-start;
  width: 100%;
  display: flex;
  & span{
    color: #777D74;
    font-size: 14px;
  }
  
`
const PriceDreams = styled.div`
  text-align: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  display: flex;
`
const PriceMoth = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  text-align: center;
 & *{
   font-family: "Roboto Light", sans-serif;
 } 
  & h5{
    color: #000;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 38px;
    margin: 0;
    font-family: "Roboto Light", sans-serif;
    
    & span{
      color: #000;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 19px;
      font-family: "Roboto Light", sans-serif;
    }
  }
`

const DreamsNr = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  & h3{
    color: #000;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 19px;
    margin-bottom: 0;
    margin-top: 0;
  }
`

const PriceFulfill = ({pack, price, nrDreams }) => {

    return (
        <PriceBlock>
            <PriceCard>
                    <PackageCard>
                        <span>{pack}</span>
                    </PackageCard>
                    <PriceDreams>
                        <PriceMoth>
                            <h5>${price}<span>/Month</span>
                            </h5>
                        </PriceMoth>
                        <DreamsNr>
                            <h3>Fulfill {nrDreams} dreams</h3>
                        </DreamsNr>
                    </PriceDreams>
                        <Button>
                            <span>Subscribe</span>
                        </Button>
            </PriceCard>
        </PriceBlock>
    )
}

export default PriceFulfill
