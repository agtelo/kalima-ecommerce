import { React, useState, useContext } from 'react'
import ItemCount from '../../../ItemCount/ItemCount'
import { CartContext } from '../../../../context/CartContext'
import './itemDetail.css'

const ItemDetail = ({
	id,
	img_product,
	product_type,
	model,
	price,
	description,
	category,
	stock,
	brand,
}) => {
	const [itemCountVisible, setItemCountVisible] = useState(true)
	const [buyButtonsVisible, setBuyButtonsVisible] = useState(true)
	const [count, setCount] = useState(0)

	const { addItem } = useContext(CartContext)

	const onAdd = count => {
		setCount(count)
	}

	const onAddToCart = () => {
		setItemCountVisible(false)
		setBuyButtonsVisible(false)
		addItem({
			id,
			img_product,
			product_type,
			model,
			price,
			category,
			stock,
			count,
			brand,
			description,
		})
	}

	const formatMoney = price => {
		return price?.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, '.')
	}

	return (
		<>
			<div className='details-container'>
				<div className='product-detail-image '>
					<img src={img_product} alt='' />
					{itemCountVisible && <ItemCount stock={stock} onAdd={onAdd} />}
				</div>
				<div className='product-description '>
					<div className='d-flex gap-2'>
						<h3>{product_type}</h3>
						<h3>{model}</h3>
					</div>
					<br />
					<p className='mb-2'>${formatMoney(price)}</p>
					<p className='product-detail-description'>{description}</p>
					<br />

					<div className='mt-5 col-md-12'>
						{buyButtonsVisible && (
							<>
								<button
									className='btn btn-dark col-md-12 col-12'
									onClick={onAddToCart}
									count={count}
								>
									AGREGAR AL CARRITO
								</button>
							</>
						)}
						{!buyButtonsVisible && (
							<button
								className='btn btn-dark col-md-12 col-12'
								data-bs-toggle='offcanvas'
								data-bs-target='#offcanvasRight'
							>
								IR AL CARRITO
							</button>
						)}
					</div>
				</div>
			</div>
		</>
	)
}
export default ItemDetail
