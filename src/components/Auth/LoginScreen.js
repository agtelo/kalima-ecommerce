import React, { useState } from 'react'
import validator from 'validator'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { useDispatch, useSelector } from 'react-redux'
import { startGoogleLogin, startLoginEmailPassword } from '../../actions/auth'
import { setError, removeError } from '../../actions/ui'
import { EyeFilledIcon } from '../EyeFilledIcon'
import { EyeSlashFilledIcon } from '../EyeSlashFilledIcon'

export default function LoginScreen() {
	const dispatch = useDispatch()

	const { msgError, loading } = useSelector(state => state.ui)

	const [formValues, handleInputChange] = useForm({})
	const { email, password } = formValues
	const [isVisible, setIsVisible] = useState(false)
	const toggleVisibility = () => setIsVisible(!isVisible)

	const handleLogin = e => {
		e.preventDefault()
		if (isFormValid()) dispatch(startLoginEmailPassword(email, password))
	}

	const handleGoogleLogin = () => {
		dispatch(startGoogleLogin())
	}

	const isFormValid = () => {
		if (!validator.isEmail(email)) {
			dispatch(setError('Email is not valid'))
			return false
		} else if (password.length < 5) {
			dispatch(setError('Password should be at least 6 characters and match each other'))
			return false
		}

		dispatch(removeError())
		return true
	}

	return (
		<>
			<div className='container col-9 col-lg-5 col-md-7 mb-5'>
				<form className='row g-4' onSubmit={handleLogin}>
					{msgError && (
						<div className='msg-error'>
							<p>{msgError}</p>
						</div>
					)}

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
						<div className='input-group'>
							<input
								type={isVisible ? 'text' : 'password'}
								name='password'
								id='passwordInput'
								className='form-control form-control-lg'
								value={password}
								onChange={handleInputChange}
							/>
							<button
								className='btn btn-outline-secondary'
								type='button'
								onClick={toggleVisibility}
							>
								{isVisible ? <EyeSlashFilledIcon /> : <EyeFilledIcon />}
							</button>
						</div>
					</div>
					<div className=''>
						<Link to='' className='text-decoration-none text-reset'>
							<p>Olvidaste tu contraseña?</p>
						</Link>
					</div>
					<div className='col-12'>
						<button className='btn btn-dark col-12 btn-lg' disabled={loading}>
							Iniciar sesión
						</button>
					</div>
					<div className='text-center'>
						<p>Iniciar sesión con redes sociales</p>
					</div>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='icon icon-tabler icon-tabler-brand-google-filled'
						width='44'
						height='44'
						viewBox='0 0 24 24'
						strokeWidth='1.5'
						stroke='#9e9e9e'
						fill='none'
						strokeLinecap='round'
						strokeLinejoin='round'
						onClick={handleGoogleLogin}
					>
						<path stroke='none' d='M0 0h24v24H0z' fill='none' />
						<path
							d='M12 2a9.96 9.96 0 0 1 6.29 2.226a1 1 0 0 1 .04 1.52l-1.51 1.362a1 1 0 0 1 -1.265 .06a6 6 0 1 0 2.103 6.836l.001 -.004h-3.66a1 1 0 0 1 -.992 -.883l-.007 -.117v-2a1 1 0 0 1 1 -1h6.945a1 1 0 0 1 .994 .89c.04 .367 .061 .737 .061 1.11c0 5.523 -4.477 10 -10 10s-10 -4.477 -10 -10s4.477 -10 10 -10z'
							strokeWidth='0'
							fill='currentColor'
						/>
					</svg>
				</form>
			</div>
		</>
	)
}
