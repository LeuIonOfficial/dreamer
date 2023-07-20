import {FormButton} from "./button.template";


const Button = (props) => {
    return <FormButton {...props}> {props.children} </FormButton>
}

export default Button