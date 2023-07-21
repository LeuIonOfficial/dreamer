import styled from "styled-components";

const Input = styled.div`

  width: 100%;
  margin-top: 10px;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  color: rgb(130, 130, 130);

  .input__password {
    display: flex;
    justify-content: space-between;
  }


  #password, #email, #confirm, #recoverEmail {

    width: 100%;
    letter-spacing: normal;

    background: #fbfbfb;
    border: 1px solid #e5e5e5;
    border-radius: 4px;
    color: rgb(33, 37, 41);
    font-size: 14px;
    font-weight: 400;
    height: 40px;
    line-height: 16px;

    padding: 6px 12px;
    text-align: start;
    text-indent: 0;
    text-rendering: auto;
    text-shadow: none;
    text-size-adjust: 100%;
    text-transform: none;

    margin: 10px 0;

  }

  & button {
    color: #50b5ff;
    font-weight: 400;
  }

  & span {
    color: #50b5ff;
    cursor: pointer;
    font-weight: 400;
  }


`


const FormInput = (props) => {
    return (
        <Input {...props}>
            {props.children}
        </Input>
    )
}

export default FormInput