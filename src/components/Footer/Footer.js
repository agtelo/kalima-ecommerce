import React from 'react'
import './footer.css'
import Brand from '../Brand'

function Footer() {
	return (
		<footer className='footer bg-light'>
			<div className='container-fluid py-5'>
				<div className='row'>
					<div className='col-12 col-md-3 mb-4'>
						<Brand />
					</div>
					<div className='col-12 col-md-9'>
						<div className='row'>
							<div className='col-12 col-md-3 mb-4'>
								<h6 className='text-uppercase fw-bold mb-3 text-black'>Categorias</h6>
								<p className='lh-1'>
									<a href='/card-sliders' className='text-reset text-decoration-none'>
										Card-Sliders
									</a>
								</p>
								<p className='lh-1'>
									<a href='/billeteras' className='text-reset text-decoration-none'>
										Billeteras
									</a>
								</p>
								<p className='lh-1'>
									<a href='/relojes' className='text-reset text-decoration-none'>
										Relojes
									</a>
								</p>
								<p className='lh-1'>
									<a href='/mochilas' className='text-reset text-decoration-none'>
										Mochilas
									</a>
								</p>
							</div>
							<div className='col-12 col-md-3 mb-4'>
								<h6 className='fw-bold mb-3 text-uppercase'>Navegacion</h6>
								<p className='lh-1'>
									<a href='#!' className='text-reset text-decoration-none'>
										Politica de privacidad
									</a>
								</p>
								<p className='lh-1'>
									<a href='#!' className='text-reset text-decoration-none'>
										Politica de devoluciones
									</a>
								</p>
								<p className='lh-1'>
									<a href='#!' className='text-reset text-decoration-none'>
										FAQ - Ayuda
									</a>
								</p>
							</div>
							<div className='col-12 col-md-3 mb-4'>
								<h6 className='text-uppercase fw-bold mb-3'>Contacto</h6>
								<p className='lh-1'>info@kalima.com</p>
								<p className='lh-1'>Buenos Aires - Argentina</p>
							</div>
							<div className='social col-12 col-md-3 mb-4'>
								<h6 className='text-uppercase fw-bold mb-2'>Redes Sociales</h6>
								<div className='d-flex'>
									<p className='mx-2'>
										<a href='#!' className='text-reset text-decoration-none'>
											<i className='bi bi-twitter fs-4'></i>
										</a>
									</p>
									<p className='mx-2'>
										<a href='#!' className='text-reset text-decoration-none'>
											<i className='bi bi-instagram fs-4'></i>
										</a>
									</p>
									<p className='mx-2'>
										<a href='#!' className='text-reset text-decoration-none'>
											<i className='bi bi-whatsapp fs-4'></i>
										</a>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
