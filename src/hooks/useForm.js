import React from "react";

export function useFormWithValidation() {
    const [values, setValues] = React.useState({});
    const [errors, setErrors] = React.useState({});
    const [isFormValid, setIsFormValid] = React.useState(false);

    const handleChange = (evt) => {
        const input = evt.target;
        const value = input.value;
        const name = input.name;
        setValues({ ...values, [name]: value });
        setErrors({ ...errors, [name]: input.validationMessage });
        setIsFormValid(input.closest("form").checkValidity());
    };

    return { values, setValues, handleChange, errors, isFormValid };
}
