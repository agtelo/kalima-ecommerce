import types from '../types/types'
import Swal from 'sweetalert2'
import {
	getAuth,
	signInWithPopup,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	updateProfile,
	signOut,
} from 'firebase/auth'
import { googleAuthProvider } from '../firebase'
import { startLoading, finishLoading } from './ui'

export const startLoginEmailPassword = (email, password) => {
	return dispatch => {
		dispatch(startLoading())
		const auth = getAuth()
		signInWithEmailAndPassword(auth, email, password)
			.then(async ({ user }) => {
				// dispatch(login(user.uid, user.displayName))
				dispatch(finishLoading())
			})
			.catch(e => {
				Swal.fire({
					title: 'Error!',
					text: e.message,
					icon: 'error',
					confirmButtonText: 'VOLVER',
				})
				dispatch(finishLoading())
			})
	}
}

export const startGoogleLogin = () => {
	return dispatch => {
		const auth = getAuth()
		signInWithPopup(auth, googleAuthProvider).then(result => {
			const user = result.user
			dispatch(login(user.uid, user.displayName))
		})
	}
}

export const createUserWithEmailPasswordName = (auth, email, password, displayName, callback) => {
	return async dispatch => {
		try {
			const { user } = await createUserWithEmailAndPassword(auth, email, password)
			await updateProfile(user, { displayName })
			if (callback) callback() // Ejecuta el callback si está definido (para redirigir, por ejemplo)
		} catch (error) {
			Swal.fire({
				title: 'Error!',
				text: error.message,
				icon: 'error',
				confirmButtonText: 'OK',
			})
		}
	}
}

export const login = (uid, displayName) => {
	return {
		type: types.login,
		payload: {
			uid,
			displayName,
		},
	}
}

export const startLogout = () => {
	const auth = getAuth()
	return async dispatch => {
		await signOut(auth)
		dispatch(logout())
	}
}

export const logout = () => ({
	type: types.logout,
})
