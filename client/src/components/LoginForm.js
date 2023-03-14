import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import AuthService from "../utils/AuthService";
import { ADD_USER } from "../utils/Mutations";

function LoginForm() {
    const emptyForm = {
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    };

    const [formState, setFormState] = useState(emptyForm);
    const [addUser, { error, data }] = useMutation(ADD_USER);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const { data } = await addUser({
                variables: { ...formState },
            });
            console.log(data);
            AuthService.login(data.addUser.token);
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <form onSubmit={handleFormSubmit}>
            <label className="form-label" htmlFor="nameInput">
                Name
            </label>
            <input
                className="form-control"
                id="nameInput"
                name="username"
                type="text"
                value={formState.username}
                onChange={handleChange}
            />
            <label className="form-label" htmlFor="emailInput">
                Email
            </label>
            <input
                className="form-control"
                id="emailInput"
                name="email"
                type="email"
                value={formState.email}
                onChange={handleChange}
            />
            <label className="form-label" htmlFor="passwordInput">
                Password
            </label>
            <input
                className="form-control"
                id="passwordInput"
                name="password"
                type="password"
                value={formState.password}
                onChange={handleChange}
            />
            <label className="form-label" htmlFor="confirmPasswordInput">
                Confirm Password
            </label>
            <input
                className="form-control"
                id="confirmPasswordInput"
                name="confirmPassword"
                type="password"
                value={formState.confirmPassword}
                onChange={handleChange}
            />
            <button className="btn btn-success mt-2">Sign Up</button>
        </form>
    );
}

export default LoginForm;
