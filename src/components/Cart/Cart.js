import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

import './cart.css'

export default function Cart(props) {
	const { cart, deleteItem, cleanCart, totalCart } = useContext(CartContext)

	const formatMoney = price => {
		return price?.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, '.')
	}

	return (
		<>
			{cart == 0 ? (
				<div className='cart-empty'>
					<h2>El carrito de compras esta vacio.</h2>
					<br />
					<Link to='/'>
						<button className='btn-lg btn-outline-dark'>Empezar a Comprar</button>
					</Link>
				</div>
			) : (
				<div className='product-container animate__animated animate__fadeIn'>
					<div className='cart-details-container'>
						<div>
							<div className='cart-product-detail-image mb-5 '>
								{cart.map(item => (
									<div key={item.id}>
										<div className='item-container'>
											<div className='cart-item'>
												<img src={item.img} alt='' />
											</div>
											<div className='item-model'>
												<p>{item.type + ' ' + item.model} </p>
											</div>
											<div className='item-quantity'>
												<p>{item.quantity}</p>
											</div>
											<div className='item-price'>
												<p>${formatMoney(item.price)}</p>
											</div>
											<div className='cart-item-delete'>
												<button className='cart-item-delete' onClick={() => deleteItem(item.id)}>
													<i className='bi bi-x'></i>
												</button>
											</div>
										</div>
									</div>
								))}
							</div>
							{/* <div className='cart-empty-btn'>
								<button
									className='cart-empty-btn'
									onClick={() => {
										cleanCart()
									}}
								>
									<p>Vaciar Carrito</p>
								</button>
							</div> */}
						</div>
						<div className='product-description-cart d-block d-md-flex d-lg-block '>
							<div adadsclassName='col-lg-12 col-md-6'>
								<h3> Resumen de la compra</h3>
								<br />
								<div className=''>
									<p>Subtotal: ${formatMoney(totalCart)}</p>
									<p>Total: ${formatMoney(totalCart)} </p>
								</div>
								<br />
								<br />
								<br />
							</div>
							<div className='product-description-button'>
								<Link to='/checkout'>
									<button className='btn-lg btn-add-product col-12 col-lg-12 col-md-12'>
										Avanzar con la Compra
									</button>
								</Link>
								<Link to='/'>
									<button className='btn-lg btn-add-product col-12 col-lg-12 col-md-12'>
										Seguir Comprando
									</button>
								</Link>
							</div>
							<br />
						</div>
					</div>
					{}
				</div>
			)}
		</>
	)
}
