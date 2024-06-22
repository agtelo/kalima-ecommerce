import ItemList from './ItemList/ItemList'
import './itemListContainer.css'

const ItemListContainer = props => {
	return (
		<div>
			<div className='animate__animated animate__fadeIn '>
				<div className='tittle text-center'>
					<p>{props.greeting}</p>
				</div>
			</div>
			<ItemList />
		</div>
	)
}

export default ItemListContainer
