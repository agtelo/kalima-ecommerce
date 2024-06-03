import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { startLogout } from '../../actions/auth'
import Brand from '../Brand'
import CartWidget from '../Navbar/CartWidget/CartWidget'

import './navBar.css'

function Navbar(props) {
	const { isLoggedIn, user } = props

	const dispatch = useDispatch()
	const handleLogout = () => {
		dispatch(startLogout())
	}

	return (
		<div>
			<nav className='navbar navbar-expand-lg bg-dark'>
				<div className='container-fluid'>
					<div className=''>
						<Brand />
					</div>
					<div className='d-flex'>
						{/* <CartWidget /> */}
						<button
							className='navbar-toggler'
							type='button'
							data-bs-toggle='collapse'
							data-bs-target='#navbarNav'
							aria-controls='navbarNav'
							aria-expanded='false'
							aria-label='Toggle navigation'
						>
							<svg xmlns='http://www.w3.org/2000/svg' width='52' height='52' viewBox='0 0 512 512'>
								<path fill='#000000' d='M80 96h352v32H80zm0 144h352v32H80zm0 144h352v32H80z' />
							</svg>
						</button>
					</div>
					<div className='collapse navbar-collapse' id='navbarNav'>
						<div className='navbar-nav nav-category'>
							<Link to='/card-sliders' className='nav-link'>
								<p>Card Sliders</p>
							</Link>
							<Link to='/billeteras' className='nav-link'>
								<p>Billeteras</p>
							</Link>
							<Link to='/relojes' className='nav-link'>
								<p>Relojes</p>
							</Link>
							<Link to='/mochilas' className='nav-link'>
								<p>Mochilas</p>
							</Link>
						</div>
						<div className='navbar-nav ms-auto nav-login'>
							{!isLoggedIn ? (
								<>
									<Link to='/register' className='nav-link nav-login'>
										<p>Crear cuenta</p>
									</Link>
									<Link to='/login' className='nav-link nav-login'>
										<p>Iniciar sesión</p>
									</Link>
								</>
							) : (
								<>
									<p className='nav-link nav-login'>Bienvenido {user?.displayName}</p>
									<Link to='/' className='nav-link nav-login' onClick={handleLogout}>
										<p>Cerrar Sesión</p>
									</Link>
								</>
							)}
						</div>
						<CartWidget />
					</div>
				</div>
			</nav>
		</div>
	)
}

export default Navbar
