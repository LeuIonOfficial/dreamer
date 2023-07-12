export const emailHandler = (event, setValidationError, setUserData?) => {
    event.preventDefault()
    const {value} = event.target
    if (setUserData) setUserData((prev) => ({...prev, email: value}))
    setValidationError(prev => ({...prev, email: emailValidation(value)}))
}

export const emailValidation = (value) => {
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!validRegex.test(String(value).toLowerCase())) {
        return "Invalid email"
    } else {
        return ""
    }
}

export const passwordHandler = (event, setValidationError, setUserData?) => {
    const {value} = event.target
    if (setUserData) setUserData((prev) => ({...prev, password: value}))
    setValidationError((prev) => ({...prev, password: passwordValidationFunc(value)}))
}

export const passwordValidationFunc = (value) => {
    const validRegex = /^(?=.*[A-Z])(?=.*\d).{5,}$/
    if (!validRegex.test(value)) {
        return "Invalid password"
    } else {
        return ""
    }
}

export const blurHandler = (event, setDirty) => {
    const {id} = event.target
    switch (id) {
        case "email":
            setDirty((prevDirty) => ({...prevDirty, email: true}));
            break;
        case "password":
            setDirty((prevDirty) => ({...prevDirty, password: true}));
            break;
        case "confirm":
            setDirty((prevDirty) => ({...prevDirty, confirmPassword: true}));
            break;
        case "recoverEmail":
            setDirty((prevDirty) => ({...prevDirty, recoverPassword: true}))
            break;
    }
}

export const confirmHandler = (event, setValidationError, setConfirm, password) => {
    const {value} = event.target
    setConfirm(() => value)
    if (value !== password) {
        setValidationError((prev) => ({...prev, confirmPassword: "Password doesnt match"}))
    } else {
        setValidationError((prev) => ({...prev, confirmPassword: ""}))
    }
}

export const handleInputType = (setInputType) => {
    setInputType(prev => prev === 'password' ? 'text' : 'password')
}