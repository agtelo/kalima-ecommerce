import React from 'react'
import { Link } from 'react-router-dom'

export default function Confirmation(props) {
	return (
		<>
			<div className='product-container animate__animated animate__fadeIn mb-5 ms-5 ps-5'>
				<div className='cart-details-container'>
					<div>
						<h3 className='text-center product-description-cart'>Datos de contacto</h3>
						<div className='cart-product-detail-image'>
							<br />
							<div className='d-flex justify-content-end'>
								<Link to='/checkout'>
									<button
										data-bs-toggle='modal'
										data-bs-target='#exampleModal'
										className='btn-lg btn-dark text-uppercase'
										onClick={() => {}}
									>
										Finalizar Compra
									</button>
								</Link>
							</div>
						</div>
					</div>
					<div class='modal' tabindex='-1'>
						<div class='modal-dialog'>
							<div class='modal-content'>
								<div class='modal-header'>
									<h5 class='modal-title'>Modal title</h5>
									<button
										type='button'
										class='btn-close'
										data-bs-dismiss='modal'
										aria-label='Close'
									></button>
								</div>
								<div class='modal-body'>
									<p>Modal body text goes here.</p>
								</div>
								<div class='modal-footer'>
									<button type='button' class='btn btn-secondary' data-bs-dismiss='modal'>
										Close
									</button>
									<button type='button' class='btn btn-primary'>
										Save changes
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className='col-10 product-description-cart mh-100'>
						<h3> Resumen de la compra</h3>
						<br />
						<div></div>
						<hr className='col-9' />
						<p className=''>Cantidad: {}</p>
						<hr className='col-9' />
						<p className=''>Subtotal: ${Number.parseFloat().toLocaleString(2)}</p>
						<hr className='col-9' />
						<h3 className=' fw-ligh'>TOTAL: ${Number.parseFloat().toLocaleString(2)} </h3>
						<br />
						<br />
						<br />
						<br />
					</div>
				</div>
			</div>
		</>
	)
}
