import React from 'react';
import { Form, Field, withFormik } from 'formik';

const OnboardingForm = ({ values }) => {
	return (
		<div className='onboarding-form'>
			<h1>User Onboarding</h1>
			<Form>
				<Field type='text' name='username' placeholder='Name' />
				<br />
				<Field type='email' name='email' placeholder='Email' />
				<br />
				<Field type='password' name='password' placeholder='Password' />
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
})(OnboardingForm);
console.log('This is the HOC', FormikOnboardingForm);
export default FormikOnboardingForm;
