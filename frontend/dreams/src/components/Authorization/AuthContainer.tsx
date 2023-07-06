import { ReactNode } from "react";
import styled from "styled-components";
interface IProps {
    children: ReactNode,
}
const AuthContainer = (props: IProps) => {

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
            <div {...props} className='grid h-screen place-items-center'>
                <Title>Become a dreamer Now!</Title>
                {props.children}
            </div>

        </>
    )
}

export default AuthContainer