import { ReactNode } from "react";
import styled from "styled-components";
interface IProps {
    children: ReactNode,
}
const AuthContainer = (props: IProps) => {

    const Title = styled.h1`
      color: #333;
      font-size: 48px;
      font-weight: 700;
      line-height: 65px;
      text-align: center;
      padding: 20px 20px 0;

      @media (min-width: 768px) {
        font-size: 64px;
        padding: 40px 20px 0 ;
      }
    `

    return (
        <>
            <div {...props} className={`flex flex-col justify-around items-center sm:p-[20px] md:p-[40px] lg:p-[60px]`}>
                <Title>Become a dreamer Now!</Title>
                {props.children}
            </div>

        </>
    )
}

export default AuthContainer