import { React, useState, useEffect } from 'react'
import ItemDetail from './ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import './itemDetailContainer.css'
import { productDetail } from '../../../firebase'

const ItemDetailContainer = () => {
	const [list, setList] = useState([])
	const [loading, setLoading] = useState(true)
	const { category, id } = useParams()

	useEffect(() => {
		const item = productDetail(id)
		item.then(data => {
			setList(data.data())
			setLoading(false)
		})
	}, [id, category])

	return (
		<>
			<div className='h-full'>
				{loading ? (
					<div className='loading'>
						<div className='d-flex justify-content-center'>
							<div className='spinner-border' role='status'>
								<span className='visually-hidden'></span>
							</div>
						</div>
					</div>
				) : (
					<div className='animate__animated animate__fadeIn'>
						<ItemDetail
							key={id}
							product_type={list.productType}
							description={list.description}
							brand={list.brand}
							model={list.model}
							price={list.price}
							stock={list.stock}
							category={list.categoryId}
							img_product={list.img}
							id={id}
						/>
					</div>
				)}
			</div>
		</>
	)
}

export default ItemDetailContainer
