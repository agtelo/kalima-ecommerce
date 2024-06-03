import React, { useContext } from 'react'
import './cartWidget.css'
import { CartContext } from '../../../context/CartContext'
import CartMenu from '../../Cart/CartMenu'

const CartWidget = () => {
	const { cart } = useContext(CartContext)
	const cartQuantity = cart.reduce((acc, red) => acc + red.quantity, 0)
	return (
		<>
			{' '}
			<div className='cart'>
				<div className='cart-icon mt-3'>
					<button
						className='btn'
						type='button'
						data-bs-toggle='offcanvas'
						data-bs-target='#offcanvasRight'
						aria-controls='offcanvasRight'
					>
						<i className='cart-icon bi bi-bag-fill'></i>
					</button>
					<p>Mi carrito ({cartQuantity})</p>
				</div>
			</div>
			<CartMenu />
		</>
	)
}

export default CartWidget
