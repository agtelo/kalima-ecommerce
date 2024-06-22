import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { collection, getDocs, query, where, doc, getDoc, addDoc } from 'firebase/firestore'

import firebase from 'firebase/compat/app'
import { GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
	apiKey: 'AIzaSyC-hOEFFeFjNzULjZQDZ33LqwUMzs55NWc',
	authDomain: 'kalima-ecommerce.firebaseapp.com',
	projectId: 'kalima-ecommerce',
	storageBucket: 'kalima-ecommerce.appspot.com',
	messagingSenderId: '552368694605',
	appId: '1:552368694605:web:dfc39ee1fc8f560cde4304',
}

initializeApp(firebaseConfig)

const db = getFirestore()

const googleAuthProvider = new GoogleAuthProvider()

const allItems = () => {
	const query = getDocs(collection(db, 'items'))
	return query
}

const allCategories = category => {
	const q = collection(db, 'items')
	const q2 = query(q, where('categoryId', '==', category))
	const q3 = getDocs(q2)
	return q3
}

const productDetail = id => {
	const q = doc(db, 'items', id)
	const q2 = getDoc(q)
	return q2
}

const addOrder = async (buyer, cart, totalCart, date, orderNumber) => {
	const orderTotal = await addDoc(collection(db, 'orders'), {
		cart: cart,
		total: totalCart,
		buyer: buyer,
		date: date,
		id: orderNumber,
	})
	return orderTotal
}

export { db, firebase, googleAuthProvider, allItems, allCategories, productDetail, addOrder }
