import React from 'react';
import { Form, Field, withFormik } from 'formik';

const OnboardingForm = () => {
	return (
		<div className='onboarding-form'>
			<h1>User Onboarding</h1>
			<Form>
				<Field type='text' name='username' placeholder='Name' />
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
		};
	},
})(OnboardingForm);
console.log('This is the HOC', FormikOnboardingForm);
export default FormikOnboardingForm;
