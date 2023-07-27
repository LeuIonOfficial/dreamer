export const emailValidation = (value) => {
    const validRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return validRegex.test(String(value).toLowerCase());
}

export const passwordValidationFunc = (value) => {
    const errors = [];

    // Check for minimum length
    if (value.length < 8) {
        errors.push('Password must be at least 8 characters long.');
    }

    // Check for at least one uppercase letter
    if (!/[A-Z]/.test(value)) {
        errors.push('Password must contain at least one uppercase letter.');
    }

    // Check for at least one lowercase letter
    if (!/[a-z]/.test(value)) {
        errors.push('Password must contain at least one lowercase letter.');
    }

    // Check for at least one digit
    if (!/\d/.test(value)) {
        errors.push('Password must contain at least one digit.');
    }

    // Check for at least one special character
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(value)) {
        errors.push('Password must contain at least one special character.');
    }
    return errors
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
        setValidationError((prev) => ({...prev, confirmPassword: "Password doesn't match"}))
    } else {
        setValidationError((prev) => ({...prev, confirmPassword: ""}))
    }

}

export const handleInputType = (setInputType) => {
    setInputType(prev => prev === 'password' ? 'text' : 'password')
}