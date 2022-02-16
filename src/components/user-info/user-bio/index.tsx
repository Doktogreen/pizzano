import React from "react";
import { Formik } from 'formik';
import * as yup from "yup";
import './index.css';

export default function UserBio(){

    const schema = yup.object({
        lastName: yup
          .string()
          .required("Enter your first name !"),
        firstName: yup
          .string()
          .required("Enter your last name !"),
          email: yup
          .string()
          .email()
          .required("Enter your email !"),
        address: yup
          .number()
          .required("Enter your phone number !"),
      });
    return(
        <section>
            <div className="inner">
            <Formik
            initialValues={
                { lastName: '',
                firstName: '',
                email: '',
                address: ''
                    }
                }
                validationSchema={schema}
                onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
                }, 400);
            }}
            >
            {({values, errors, touched, handleChange, handleBlur,handleSubmit, isSubmitting,
            }) => (<form onSubmit={handleSubmit} action="" id="wizard">
                <div className="form-content">
                    <p>Tell us about yourself</p>
                    <div className="row mb-2">
                        <div className="col">
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Last name" 
                                value={values.lastName}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            <div className="alart">
                                {errors.lastName && touched.lastName && errors.lastName}
                            </div>
                        </div>
                        <div className="col">
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="First name" 
                                value={values.firstName}
                                onChange={handleChange}
                                onBlur={handleBlur} 
                            />
                            <div className="alart">
                                {errors.firstName && touched.firstName && errors.firstName}
                            </div>
                        </div>
                    </div>
                    <div className="form-group mb-2">
                        <input 
                            type="number" 
                            className="form-control" 
                            id="phone" 
                            placeholder="Email" 
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        <div className="alart">
                            {errors.email && touched.email && errors.email}
                        </div>
                    </div>
                    <div className="form-group mb-2">
                        <input 
                            type="text" 
                            className="form-control" 
                            id="address" 
                            placeholder="Address" 
                            value={values.address}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        <div className="alart">
                            {errors.address && touched.address && errors.address}
                        </div>
                    </div>
                    <p style={{textAlign: "left", fontSize: "12px"}}>
                        By signing up, you agree to our <br />
                        <a href="https://gokardinal.com/" target="_blank" rel="noreferrer">
                            Terms of Conditions and Privacy policy.
                        </a>
                    </p>
                </div>
                </form>)}
                </Formik>
            </div>
        </section>
    )
}