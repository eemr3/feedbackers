import useStore from '../hooks/useStore'
import {
	setCurrentUser,
	clearCurrentUser,
	setApiKey,
	resetUserStore,
} from './user'

describe('UseStore', () => {
	afterEach(() => {
		resetUserStore()
	})

	it('should set current user', () => {
		const store = useStore()
		setCurrentUser({ name: 'Emerson' })
		expect(store.User.currentUser.name).toBe('Emerson')
	})

	it('should set api_key on current user ', () => {
		const store = useStore()
		setApiKey('123')
		expect(store.User.currentUser.apiKey).toBe('123')
	})

	it('should clean current user', () => {
		const store = useStore()
		setCurrentUser({ name: 'Emerson' })
		expect(store.User.currentUser.name).toBe('Emerson')
		clearCurrentUser()

		expect(store.User.currentUser.name).toBeFalsy()
	})
})
