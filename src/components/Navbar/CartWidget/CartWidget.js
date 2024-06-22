import React, { useContext } from 'react'
import './cartWidget.css'
import { CartContext } from '../../../context/CartContext'
import CartMenu from '../../Cart/CartMenu'

const CartWidget = () => {
	const { cart } = useContext(CartContext)
	const cartQuantity = cart.reduce((acc, red) => acc + red.quantity, 0)
	return (
		<>
			<button
				type='button'
				data-bs-toggle='offcanvas'
				data-bs-target='#offcanvasRight'
				aria-controls='offcanvasRight'
				className='btn  position-relative'
			>
				<i className='cart-icon bi bi-bag-fill'></i>
				{cart != 0 && (
					<span className='position-absolute  top-0 start-100 translate-middle w-50 bg-danger border border-light rounded-circle text-white  fs-xs'>
						{cartQuantity}
						<span className='visually-hidden'>New alerts</span>
					</span>
				)}
			</button>
			<CartMenu />
		</>
	)
}

export default CartWidget
