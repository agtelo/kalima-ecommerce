import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

export default function Checkout(props) {
	const { cart, totalCart, newOrder, id } = useContext(CartContext)

	const cartQuantity = cart.reduce((acc, red) => acc + red.quantity, 0)
	const { user, isLoggedIn } = props

	const formatMoney = price => {
		return price?.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, '.')
	}

	return (
		<>
			<div
				className='modal fade'
				id='exampleModal'
				tabIndex='-1'
				aria-labelledby='exampleModalLabel'
				aria-hidden='true'
			>
				<div className='modal-dialog modal-dialog-centered'>
					<div className='modal-content'>
						<div className='modal-header'>
							<h5 className='modal-title' id='exampleModalLabel'>
								Operación confirmada
							</h5>
							<button
								type='button'
								className='btn-close'
								data-bs-dismiss='modal'
								aria-label='Close'
							></button>
						</div>
						<div className='modal-body'>
							<h4 className='fw-lighter'>Gracias por tu compra</h4>
						</div>
						<div className='modal-body'>
							<p className='fw-lighter'>El código de tu orden es: #{id}</p>
						</div>
					</div>
				</div>
			</div>
			<div className=' animate__animated animate__fadeIn mb-5 p-4'>
				<div className='row justify-content-center'>
					<div className='col-12 col-lg-6'>
						<h3 className='text-center product-description-cart fw-bold mb-5'>Datos de contacto</h3>
						<form className='form'>
							<div className='row g-2'>
								<div className='col-12'>
									<div className='form-floating'>
										<input
											type='text'
											className='form-control'
											id='fullName'
											name='fullName'
											placeholder='name@example.com'
											value={isLoggedIn ? user.displayName : null}
											disabled={isLoggedIn ? true : false}
										/>
										<label htmlFor='fullName'>Nombre completo</label>
									</div>
								</div>
							</div>
							<div className='row g-1 my-3'>
								<div className='col-12'>
									<div className='form-floating'>
										<input
											type='email'
											className='form-control'
											id='email'
											name='email'
											placeholder='name@example.com'
											value={isLoggedIn ? user.email : null}
											disabled={isLoggedIn ? true : false}
										/>
										<label htmlFor='email'>Correo electrónico</label>
									</div>
								</div>
							</div>
							<div className='row g-2'>
								<div className='col-12 col-md-6'>
									<div className='form-floating'>
										<input
											type='text'
											className='form-control'
											id='address'
											name='address'
											placeholder='Calle'
										/>
										<label htmlFor='address'>Calle</label>
									</div>
								</div>
								<div className='col-6 col-md-3'>
									<div className='form-floating'>
										<input
											type='number'
											className='form-control'
											id='addressNumber'
											name='addressNumber'
											placeholder='Número'
										/>
										<label htmlFor='addressNumber'>Número</label>
									</div>
								</div>
								<div className='col-6 col-md-3'>
									<div className='form-floating'>
										<input
											type='number'
											className='form-control'
											id='phone'
											name='phone'
											placeholder='Teléfono'
										/>
										<label htmlFor='phone'>Teléfono</label>
									</div>
								</div>
							</div>
						</form>
						<br />
						<div className='d-flex justify-content-end'>
							<button
								data-bs-toggle='modal'
								data-bs-target='#exampleModal'
								className='btn btn-dark text-uppercase w-100'
								onClick={() => {
									newOrder()
								}}
							>
								Finalizar Compra
							</button>
						</div>
					</div>

					<div className='col-12 col-lg-4 product-description-cart mt-5 mt-lg-0'>
						<h3>Resumen de la compra</h3>
						<br />
						{cart.map(item => (
							<div className='mb-2' key={item.id}>
								<div className='d-flex'>
									<div className='me-2'>
										<img src={item.img} alt='' height={50} />
									</div>
									<div className='flex-grow-1'>
										<p className='fs-5 mt-3'>
											{item.type + ' ' + item.model + ' x' + item.quantity}
										</p>
									</div>
									<div className='d-flex justify-content-end'>
										<p className='fs-5 mt-3 ms-5'>${formatMoney(item.price)}</p>
									</div>
								</div>
							</div>
						))}
						<hr />
						<p className=''>Cantidad: {cartQuantity}</p>
						<hr />
						<p className=''>Subtotal: ${formatMoney(totalCart)}</p>
						<hr />
						<h3 className='fw-light'>TOTAL: ${formatMoney(totalCart)}</h3>
					</div>
				</div>
			</div>
		</>
	)
}
