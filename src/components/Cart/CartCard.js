import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import ItemCount from '../ItemCount/ItemCount'
import './cart.css'

export default function CartCard({ price, quantity, type, model, img, productId }) {
	const { deleteItem } = useContext(CartContext)

	const formatMoney = price => {
		return price?.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, '.')
	}
	return (
		<>
			<div className='d-flex mb-5 gap-4'>
				<div className='col-4 ms-2'>
					<img src={img} alt='' className='w-100' />
				</div>

				<div className='col-3 w-50'>
					<div className='d-flex'>
						<h6 className='fw-light'>{type + ' ' + model}</h6>
						<div className='col-3 d-flex align-items-center ms-5 me-1'>
							<button className='cart-item-delete' onClick={() => deleteItem(productId)}>
								<i className='bi bi-x d-flex align-items-center'></i>
								{/* <i class="bi bi-trash-fill"></i> */}
							</button>
						</div>
					</div>

					<div className='fw-light'>${formatMoney(price)}</div>
					<div className=''>
						<ItemCount quantity={quantity} productId={productId} />
					</div>
				</div>
			</div>
		</>
	)
}
