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
			<div className='container p-5'>
				{loading ? (
					<div className='d-flex justify-content-center align-items-start mt-5 container vh-100 '>
						<div className='text-center'>
							<div className='spinner-border mt-5' role='status'>
								<span className='visually-hidden '>Cargando ...</span>
							</div>
							<div className='mt-5'>
								<p className=' fs-4 fw-lighter text-uppercase'>Cargando ...</p>
							</div>
						</div>
					</div>
				) : (
					<div className='animate__animated animate__fadeIn  '>
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
