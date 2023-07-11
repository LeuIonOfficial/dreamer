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
      padding: 20px;
      
      @media (min-width: 768px) {
        font-size: 64px;
        padding: 60px;
      }
    `

    return (
        <>
            <div {...props} className={`flex flex-col justify-center items-center`}>
                <Title>Become a dreamer Now!</Title>
                {props.children}
            </div>

        </>
    )
}

export default AuthContainer