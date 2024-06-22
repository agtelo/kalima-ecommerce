import { React, useState, useEffect } from 'react'
import { allItems, allCategories } from '../../../firebase'
import Item from '../Item/Item'
import { useParams } from 'react-router-dom'
import './itemList.css'

const ItemList = () => {
	const [list, setList] = useState([])
	const { category } = useParams()
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		if (category != null) {
			const items = allCategories(category)
			items.then(data => {
				const itemsAux = []
				data.forEach(item => {
					itemsAux.push({
						id: item.id,
						Product_type: item.data().productType,
						Brand: item.data().brand,
						Model: item.data().model,
						Price: item.data().price,
						Stock: item.data().stock,
						Category: item.data().categoryId,
						Img_product: item.data().img,
					})
				})
				setList(itemsAux)
				setLoading(false)
			})
		} else {
			const items = allItems()
			items.then(data => {
				const itemsAux = []
				data.forEach(item => {
					itemsAux.push({
						id: item.id,
						Product_type: item.data().producType,
						Brand: item.data().brand,
						Model: item.data().model,
						Price: item.data().price,
						Stock: item.data().stock,
						Category: item.data().categoryId,
						Img_product: item.data().img,
					})
				})
				setList(itemsAux)
				setLoading(false)
			})
		}
	}, [category])

	return (
		<>
			<div className='tittle animate__animated animate__fadeIn mb-5 '>
				<p className=''>{category}</p>
			</div>
			{loading ? (
				<div className='d-flex justify-content-center align-items-start container vh-100 container'>
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
				<div className='container animate__animated animate__fadeIn '>
					{list.map(item => (
						<Item
							key={item.id}
							product_type={item.Product_type}
							brand={item.Brand}
							model={item.Model}
							price={item.Price}
							stock={item.Stock}
							category={item.Category}
							img_product={item.Img_product}
							id={item.id}
						/>
					))}
				</div>
			)}
		</>
	)
}

export default ItemList
