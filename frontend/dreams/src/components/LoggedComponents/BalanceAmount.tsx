import styled from "styled-components";
import React from "react";

const BalanceName = styled.h5`
  margin: 0;
  font-family: Roboto;
  font-size: ${props => props.size};
  font-style: normal;
  font-weight: 700;
  color: ${props => props.color}
`

const BalanceAm = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-around;
  margin: 0;
  padding: 0;
  flex-direction: row;
`
const BalanceAmount = (props) => {
  return(
      <BalanceAm>
          <div>
        <BalanceName {...props}>
            0
        </BalanceName>
        </div>

    <div>
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none"
             xmlns="http://www.w3.org/2000/svg">
            <path
                d="M4.46355 0.347861L3.24299 2.93348L0.512158 3.34944C0.0224388 3.42365 -0.173823 4.05443 0.181317 4.41572L2.15701 6.42719L1.68973 9.26863C1.60561 9.78224 2.12337 10.167 2.55701 9.92675L5 8.58512L7.44299 9.92675C7.87663 10.165 8.39439 9.78224 8.31028 9.26863L7.84299 6.42719L9.81868 4.41572C10.1738 4.05443 9.97756 3.42365 9.48784 3.34944L6.75701 2.93348L5.53645 0.347861C5.31776 -0.11302 4.68411 -0.118878 4.46355 0.347861Z"
                fill="url(#paint0_linear_1450_5229)"></path>
            <defs>
                <linearGradient id="paint0_linear_1450_5229" x1="2.14149" y1="-4.28571"
                                x2="11.1822" y2="-0.0832163" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#84FAD5"></stop>
                    <stop offset="0.577071" stop-color="#EBBFFF"></stop>
                    <stop offset="1" stop-color="#F6EC85"></stop>
                </linearGradient>
            </defs>
        </svg>
    </div>
      </BalanceAm>

  )
}
export default BalanceAmount;
