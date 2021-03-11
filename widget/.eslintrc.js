module.exports = {
	root: true,
	env: {
		node: true,
		jest: true,
	},
	extends: [
		'plugin:vue/vue3-essential',
		'@vue/standard',
		'@vue/typescript/recommended',
		'plugin:prettier/recommended',
		'prettier',
		'prettier/vue',
	],
	parserOptions: {
		ecmaVersion: 2020,
	},
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'@typescript-eslint/member-delimiter-style': [
			'error',
			{
				multiline: {
					delimiter: 'none', // 'none' or 'semi' or 'comma'
					requireLast: true,
				},
				singleline: {
					delimiter: 'semi', // 'semi' or 'comma'
					requireLast: false,
				},
			},
		],
		'prettier/prettier': [
			'error',
			{
				endOfLine: 'auto',
			},
		],
	},
	overrides: [
		{
			files: [
				'**/__tests__/*.{j,t}s?(x)',
				'**/tests/unit/**/*.spec.{j,t}s?(x)',
			],
			env: {
				jest: true,
			},
		},
	],
}
