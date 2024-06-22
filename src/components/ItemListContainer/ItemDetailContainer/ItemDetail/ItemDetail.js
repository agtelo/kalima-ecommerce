import { React, useState, useContext, useEffect } from 'react'
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

	const { addItem, cart } = useContext(CartContext)

	const onAdd = count => {
		setCount(count)
	}

	useEffect(() => {
		if (!cart || cart.length === 0) {
			setItemCountVisible(true)
			setBuyButtonsVisible(true)
		}
	}, [cart])

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
					<div className={itemCountVisible ? 'visible' : 'invisible'}>
						<ItemCount stock={stock} onAdd={onAdd} />
					</div>
				</div>
				<div className='product-description '>
					<div className='d-flex gap-2'>
						<h3>{product_type}</h3>
						<h3>{model}</h3>
					</div>
					<p className='mb-2'>${formatMoney(price)}</p>
					<p className='product-detail-description'>{description}</p>
					<div className='mt-5 col-md-12 '>
						{buyButtonsVisible && (
							<>
								<button
									className='btn btn-dark col-md-12 col-12 text-uppercase'
									onClick={onAddToCart}
									count={count}
								>
									Agregar al carrito{' '}
								</button>
							</>
						)}
						{!buyButtonsVisible && (
							<button
								className='btn btn-dark col-md-12 col-12 text-uppercase'
								data-bs-toggle='offcanvas'
								data-bs-target='#offcanvasRight'
							>
								Ir al carrito
							</button>
						)}
					</div>
				</div>
			</div>
		</>
	)
}
export default ItemDetail
