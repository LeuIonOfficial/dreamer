export const emailValidation = (value) => {
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return validRegex.test(String(value).toLowerCase());
}

export const passwordValidationFunc = (value) => {
    const validRegex = /^(?=.*[A-Z])(?=.*\d).{5,}$/
    return validRegex.test(value);
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