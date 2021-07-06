import React, { Component } from 'react';
import './App.css';

const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)


// function checks values and set the formErrors message accordingly. If form is valid then return true otherwise false
const formValid = ({ formErrors, ...rest }) => {
    let valid = true

    // validate form errors being empty
    Object.values(formErrors).forEach(val => val.length > 0 && (valid = false))

    // validate if the form was filled out
    Object.values(rest).forEach(val => {
        val === null && (valid = false)
    })

    return valid
};

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            firstName: null,
            lastName: null,
            email: null,
            password: null,
            formErrors: {
                firstName: "",
                lastName: "",
                email: "",
                password: ""
            }
        }
    }

    // sends the form to formValid function for validation
    handleSubmit = (e) => {
        e.preventDefault()
        if (formValid(this.state)) {
            console.log(`
                --SUBMITTING--
                First Name: ${this.state.firstName}
                Last Name: ${this.state.lastName}
                Email: ${this.state.email}
                Password: ${this.state.password}

            `);
        } else {
            console.error("Form Invalid")
        }
    }

    // updates the state and also check the form input values for validation.
    handleChange = (e) => {
        e.preventDefault()
        const { name, value } = e.target
        let formErrors = this.state.formErrors

        // console.log("name: ", name);
        // console.log("value: ", value);

        switch (name) {
            case 'firstName':
                formErrors.firstName = value.length < 3 ? 'minimum 3 characters required' : ''
                break;

            case 'lastName':
                formErrors.lastName = value.length < 3 ? 'minimum 2 characters required' : ''
                break;

            case 'email':
                formErrors.email = emailRegex.test(value) ? '' : 'invalid email address'
                break;

            case 'password':
                formErrors.password = value.length < 6 ? 'minimum 6 characters required' : ''
                break;

            default:
                break;
        }
        this.setState({ formErrors, [name]: value })
    }

    render() {
        const { formErrors } = this.state
        return (
            <div className="wrapper" >
                <div className="form-wrapper">
                    <h1>Create Account</h1>
                    <form onSubmit={this.handleSubmit} noValidate action="">
                        <div className="firstName">
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" className={formErrors.firstName.length > 0 ? "error" : null} placeholder="First Name" noValidate name="firstName" onChange={this.handleChange} />
                            {formErrors.firstName.length > 0 && (
                                <span className="errorMessage">{formErrors.firstName}</span>
                            )}
                        </div>
                        <div className="lastName">
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" className={formErrors.lastName.length > 0 ? "error" : null} placeholder="Last Name" noValidate name="lastName" onChange={this.handleChange} />
                            {formErrors.lastName.length > 0 && (
                                <span className="errorMessage">{formErrors.lastName}</span>
                            )}
                        </div>
                        <div className="email">
                            <label htmlFor="email">Email Id</label>
                            <input type="email" className={formErrors.email.length > 0 ? "error" : null} placeholder="Email Id" noValidate name="email" onChange={this.handleChange} />
                            {formErrors.email.length > 0 && (
                                <span className="errorMessage">{formErrors.email}</span>
                            )}
                        </div>
                        <div className="password">
                            <label htmlFor="password">Password</label>
                            <input type="password" className={formErrors.password.length > 0 ? "error" : null} placeholder="Password" noValidate name="password" onChange={this.handleChange} />
                            {formErrors.password.length > 0 && (
                                <span className="errorMessage">{formErrors.password}</span>
                            )}
                        </div>
                        <div className="createAccount">
                            <button type="submit">Create Account</button>
                            <small>Already have an account?</small>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default App;
