import React from 'react'
import './banner.css'

export default function Banner() {
	return (
		<div className='col-12 d-flex  justify-content-around'>
			<div className='banner-item'>
				<i className='bi bi-box-seam me-2'></i>
				<p className='text-uppercase'>Envíos sin cargo</p>
			</div>
			<div className='banner-item'>
				<i className='bi bi-wallet me-2'></i>
				<p className='text-uppercase'>Múltiples formas de pago</p>
			</div>
			<div className='banner-item'>
				<i className='bi bi-credit-card me-2'></i>
				<p className='text-uppercase'>Cuotas sin interés</p>
			</div>
		</div>
	)
}
