// write your custom hook here to control your checkout form
import { useState } from 'react';

export const useForm = (initialValue) => {
    const [value, setValue] = useState(initialValue);

    const handleChanges = e => {setValue({...value, [e.target.name]: e.target.value});
    };

    const handleSubmit = e => {
        e.preventDefault();
        setShowSuccessMessage(true);
    }

    return [value, handleChanges];
}