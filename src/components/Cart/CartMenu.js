import React, { useContext } from 'react'
import CartCard from './CartCard'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import './cart.css'

export default function CartMenu() {
	const { cart, totalCart, setCart, total } = useContext(CartContext)

	const updateQuantity = () => {
		const updateCart = cart.map(item => {
			return {
				...item,
				productId: item.id,
				price: item.price,
				quantity: item.quantity,
				subTotal: item.price * item.quantity,
				total: item.quantity * item.price,
			}
		})
		setCart(updateCart)
	}

	const formatMoney = price => {
		return price?.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, '.')
	}

	return (
		<>
			<div
				className='offcanvas offcanvas-end'
				data-bs-scroll='true'
				// tabindex="-1"
				id='offcanvasRight'
				aria-labelledby='offcanvasRightLabel'
			>
				<div className='offcanvas-header'>
					<h4 className='offcanvas-title text-uppercase fw-lighter' id='offcanvasRightLabel'>
						Mi Carrito
					</h4>
					<button
						type='button'
						className='btn-close'
						data-bs-dismiss='offcanvas'
						aria-label='Close'
					></button>
				</div>
				<div className='offcanvas-body'>
					{cart == 0 ? (
						<h3 className=' fw-lighter'>Tu carrito esta vacío.</h3>
					) : (
						<div>
							{cart.map(item => (
								<CartCard
									key={item.id}
									quantity={item.quantity}
									price={item.price}
									productId={item.id}
									img={item.img}
									type={item.type}
									model={item.model}
									total={total}
								></CartCard>
							))}
						</div>
					)}
				</div>
				{cart == 0 ? (
					<div></div>
				) : (
					<div>
						<hr className='mx-3' />
						<div className='mb-3'>
							<h4 className='fw-lighter ms-3'>Subtotal ${formatMoney(totalCart)}</h4>
							<h3 className='fw-light ms-3'>Total ${formatMoney(totalCart)}</h3>
							<p className='fw-light ms-3'>Tasas e impuestos incluidos en el carrito.</p>
							<Link to='/cart' className='d-flex justify-content-center text-decoration-none'>
								<button
									className='btn-lg btn-dark text-uppercase w-100 rounded-0'
									onClick={updateQuantity}
									data-bs-dismiss='offcanvas'
								>
									Avanzar con la compra
								</button>
							</Link>
						</div>
					</div>
				)}
			</div>
		</>
	)
}
