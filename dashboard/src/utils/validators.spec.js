import { validateEmptyAndEmail, validateEmptyAndLength3 } from './validators'

describe('Validators utils', () => {
	it('should give an error with empty payload', () => {
		expect(validateEmptyAndLength3()).toBe('*Este campo é obrigatório')
	})

	it('should give an error with less 3 character payload', () => {
		expect(validateEmptyAndLength3('12')).toBe(
			'*Este campo precisa de no minimo 3 caracteres'
		)
	})

	it('should return true when pass a correct param', () => {
		expect(validateEmptyAndLength3('1234')).toBe(true)
	})

	it('should give an error with empty payload', () => {
		expect(validateEmptyAndEmail()).toBe('*Este campo é obrigatório')
	})

	it('should give an error with a invalid param', () => {
		expect(validateEmptyAndEmail('contact@')).toBe(
			'*Entre com um e-mail válido!'
		)
	})

	it('sould return true when pass a correct param', () => {
		expect(validateEmptyAndEmail('contact@contact.com')).toBe(true)
	})
})
