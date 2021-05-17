import React from "react";

export function useFormWithValidation() {
    const [values, setValues] = React.useState({});
    const [errors, setErrors] = React.useState({});
    const [isFormValid, setIsFormValid] = React.useState(false);

    function handleChange(e) {
        const input = e.target;
        const name = input.name;
        const value = input.value;
        setValues({ ...values, [name]: value });
        setErrors({ ...errors, [name]: input.validationMessage });
        setIsFormValid(input.closest('form').checkValidity());
    }

    return { values, setValues, handleChange, errors, isFormValid };
}
