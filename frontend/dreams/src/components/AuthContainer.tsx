import { ReactNode } from "react";
import styled from "styled-components";
interface IProps {
    children: ReactNode
}
const AuthContainer = ({ children }: IProps) => {

    const Title = styled.h1`
      color: #333;
      font-size: 64px;
      font-weight: 700;
      line-height: 65px;
      text-align: center;
      margin-top: 20px;
    `


    return (
        <>
            <div>
                <Title>Become a dreamer Now!</Title>
                {children}
            </div>
        </>
    )
}

export default AuthContainer