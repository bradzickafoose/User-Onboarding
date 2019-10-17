import React from 'react';
import axios from 'axios';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';

const OnboardingForm = ({ values, touched, errors, status }) => {
	return (
		<div className='onboarding-form'>
			<h1>User Onboarding</h1>
			<Form>
				<Field type='text' name='username' placeholder='Name' />
				{touched.username && errors.username && <p className='error'>{errors.username}</p>}
				<br />
				<Field type='email' name='email' placeholder='Email' />
				{touched.email && errors.email && <p className='error'>{errors.email}</p>}
				<br />
				<Field type='password' name='password' placeholder='Password' />
				{touched.password && errors.password && <p className='error'>{errors.password}</p>}
				<br />
				<label className='checkbox-container'>
					<Field type='checkbox' name='tos' checked={values.tos} />
					<span className='checkmark' />
					I agree to the Terms of Service
				</label>
				<br />
				<button type='submit'>Submit</button>
			</Form>
		</div>
	);
};

const FormikOnboardingForm = withFormik({
	mapPropsToValues({ username, email, password, tos }) {
		return {
			username : username || '',
			email    : email || '',
			password : password || '',
			tos      : tos || false,
		};
	},

	validationSchema : Yup.object().shape({
		username : Yup.string().required('Please enter your name.'),
		email    : Yup.string().required('Please enter your email address.'),
		password : Yup.string('Please choose a password.'),
	}),

	handleSubmit(values, { setStatus }) {
		axios
			// values is our object with all our data on it.
			.post('https://reqres.in/api/users/', values)
			.then((res) => {
				setStatus(res.data);
				console.log(res);
			})
			.catch((err) => console.log(err.response));
	},
})(OnboardingForm);
console.log('This is the HOC', FormikOnboardingForm);
export default FormikOnboardingForm;
