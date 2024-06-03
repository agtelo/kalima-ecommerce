import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from '../../hooks/useForm'
import validator from 'validator'
import { setError, removeError } from '../../actions/ui'
import { createUserWithEmailPasswordName } from '../../actions/auth'
import { getAuth } from 'firebase/auth'

export default function RegisterScreen() {
	const auth = getAuth()
	const dispatch = useDispatch()
	const { msgError } = useSelector(state => state.ui)

	const [formValues, handleInputChange] = useForm({
		name: '',
		email: '',
		password: '',
		password2: '',
	})

	const { name, email, password, password2 } = formValues

	const handleRegister = e => {
		e.preventDefault()
		if (isFormValid()) {
			dispatch(createUserWithEmailPasswordName(auth, email, password, name))
		}
	}

	const isFormValid = () => {
		if (name.trim().length === 0) {
			dispatch(setError('Name is required'))
			return false
		} else if (!validator.isEmail(email)) {
			dispatch(setError('Email is not valid'))
			return false
		} else if (password !== password2 || password.length < 5) {
			dispatch(setError('Password should be at least 6 characters and match each other'))
			return false
		}
		dispatch(removeError())
		return true
	}

	return (
		<>
			<div className='container col-9 col-lg-5 col-md-7 mb-5'>
				<form className='row g-4' onSubmit={handleRegister}>
					{msgError && (
						<div claasName='msg-error'>
							<p>{msgError}</p>
						</div>
					)}
					<div className='col-12'>
						<label htmlFor='emailInput' className='form-label'>
							Nombre completo
						</label>
						<input
							type='text'
							name='name'
							id='nameInput'
							className='form-control form-control-lg'
							value={name}
							onChange={handleInputChange}
						/>
					</div>

					<div className='col-12'>
						<label htmlFor='emailInput' className='form-label'>
							Correo electrónico
						</label>
						<input
							type='email'
							name='email'
							id='emailInput'
							className='form-control form-control-lg'
							value={email}
							onChange={handleInputChange}
						/>
					</div>
					<div className='col-12'>
						<label htmlFor='passwordInput' className='form-label'>
							Contraseña
						</label>
						<input
							type='password'
							name='password'
							id='passwordInput'
							className='form-control form-control-lg'
							value={password}
							onChange={handleInputChange}
						/>
					</div>
					<div className='col-12'>
						<label htmlFor='passwordInput' className='form-label'>
							Repetir contraseña
						</label>
						<input
							type='password'
							name='password2'
							id='password2Input'
							className='form-control form-control-lg'
							value={password2}
							onChange={handleInputChange}
						/>
					</div>

					<div className='col-12'>
						<button className='btn btn-dark col-12'> Crer Cuenta</button>
					</div>
				</form>
			</div>
		</>
	)
}
