import React, { useEffect, useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { getAuth } from 'firebase/auth'
import { login } from './actions/auth'
import { PublicRoute } from './routes/PublicRoute'
import { useDispatch } from 'react-redux'
import { CartFunction } from './context/CartContext'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemListContainer/ItemDetailContainer/ItemDetailContainer'
import ItemList from './components/ItemListContainer/ItemList/ItemList'
import Footer from './components/Footer/Footer'
import Cart from './components/Cart/Cart'
import LoginScreen from './components/Auth/LoginScreen'
import RegisterScreen from './components/Auth/RegisterScreen'
import Slider from './components/Slider/Slider'
import Section from './components/Section/Section'
import Banner from './components/Banner/Banner'
import CartMenu from './components/Cart/CartMenu'
import Checkout from './components/Checkout/Checkout'
import Confirmation from './components/Confirmation/Confirmation'
import Discounts from './components/Discounts/Discounts'
import Shipping from './components/Shipping/Shipping'

function App() {
	const auth = getAuth()
	const dispatch = useDispatch()
	const [isLoggedIn, setIsLoggedIn] = useState(false)
	const [user, setUser] = useState()

	useEffect(() => {
		auth.onAuthStateChanged(
			user => {
				setUser(user)
				if (user?.uid) {
					dispatch(login(user.uid, user.displayName))
					setIsLoggedIn(true)
				} else {
					setIsLoggedIn(false)
				}
			},
			[auth, dispatch],
		)
	})

	return (
		<div>
			<BrowserRouter>
				<CartFunction user={user}>
					<CartMenu />
					<Navbar isLoggedIn={isLoggedIn} user={user} />
					<Switch>
						<Route exact path='/'>
							<Slider />
							<CartMenu />
							<Discounts />
							<Banner />
							<Section />
							<ItemListContainer greeting='Bienvenidos a Kalima' />
						</Route>
						<Route path='/:category' exact>
							<ItemList />
						</Route>
						<Route path='/:category/:id' exact>
							<CartMenu />
							<ItemDetailContainer />
						</Route>
					</Switch>
					<Route path='/cart' exact>
						<Cart />
					</Route>
					<Route path='/checkout' exact>
						<Checkout user={user} isLoggedIn={isLoggedIn} />
					</Route>
					<Route path='/shipping' exact>
						<Shipping />
					</Route>
					<Route path='/confirmation' exact>
						<Confirmation />
					</Route>
					<PublicRoute
						path='/register'
						exact
						isAuthenticated={isLoggedIn}
						component={RegisterScreen}
					></PublicRoute>
					<PublicRoute
						path='/login'
						exact
						isAuthenticated={isLoggedIn}
						component={LoginScreen}
					></PublicRoute>
					<Footer />
				</CartFunction>
			</BrowserRouter>
		</div>
	)
}

export default App
