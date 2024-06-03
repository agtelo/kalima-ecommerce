import React from 'react'
import { Link } from 'react-router-dom'

export default function Section() {
	return (
		<div className='container-fluid'>
			<div className='row'>
				<div className='col-md-6 px-0'>
					<div className='position-relative'>
						<Link to='/billeteras'>
							<img src='/images/backgraund/wallet.jpg' alt='' className='img-fluid' />
						</Link>
						<div className='position-absolute top-0 start-0'>
							<h1 className='text-uppercase text-light ms-4 mt-3 fw-light'>Billeteras</h1>
						</div>
					</div>
					<div className='position-relative'>
						<Link to='/card-sliders'>
							<img src='/images/backgraund/card-slider.jpg' alt='' className='img-fluid' />
						</Link>
						<div className='position-absolute top-0 start-0'>
							<h1 className='text-uppercase text-light ms-4 mt-3 fw-light'>Card Sliders</h1>
						</div>
					</div>
				</div>
				<div className='col-md-6 px-0'>
					<div className='position-relative'>
						<Link to='/relojes'>
							<img src='/images/backgraund/watch.jpg' alt='' className='img-fluid w-100' />
						</Link>
						<div className='position-absolute top-0 start-0'>
							<h1 className='text-uppercase text-light ms-4 mt-3 fw-light'>Relojes</h1>
						</div>
					</div>
					<div className='position-relative'>
						<Link to='/mochilas'>
							<img src='/images/backgraund/bag.jpg' alt='' className='img-fluid w-100' />
						</Link>
						<div className='position-absolute top-0 start-0'>
							<h1 className='text-uppercase text-light ms-4 mt-3 fw-light'>Mochilas</h1>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
