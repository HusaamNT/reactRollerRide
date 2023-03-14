import React from "react";

function LoginForm(){
    return (
        <form>
            <label className="form-label" htmlFor="nameInput">Name</label>
            <input className="form-control" id="nameInput" name="nameInput" type="text"/>
            <label className="form-label">Email</label>
            <input className="form-control" type="email"/>
            <label className="form-label">Password</label>
            <input className="form-control" type="password"/>
            <label className="form-label">Confirm Password</label>
            <input className="form-control" type="password"/>
        </form>
    )
}

export default LoginForm;