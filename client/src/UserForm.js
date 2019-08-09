import React, { useState, useEffect } from 'react';
import { Form, Field, withFormik } from 'formik';
import axios from "axios";
import * as Yup from 'yup';



class UserForm extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <h2>User Form Goes here</h2>
                <Form> 
                    <Field type="text" name="username" placeholder="Username" />
                    {/* {touched.name && errors.name && (
                        <p className="error">{errors.name}</p>
                    )} */}
                    <Field type="password" name="password" placeholder="Password" />
                    {/* {touched.password && errors.password && (
                        <p className="error">{errors.password}</p>
                    )} */}
                     <button type="submit">Submit</button>
                </Form>

            </div>
        )
    }    
}    

const FormikUserForm = withFormik({
    mapPropsToValues( { username, password } ) {
        return {
            username: username || "",
            password: password || "",
        };
    },
    validationSchema: Yup.object().shape({
        name: Yup.string().required("Username is required"),
        password: Yup.string().min(6,"Password must be at least 6 characters").required("Password is required"),
    }),

    handleSubmit(values, { setStatus }) {
        axios
            .post("http://localhost:5000/api/register", values)
            // .then(res => console.log("res", res.data.name))
            .then(res => {
                console.log("response", res)
                // setStatus(res.data);
            })
            .catch(err => console.log("Error", err));
    }
})(UserForm);

export default FormikUserForm;
