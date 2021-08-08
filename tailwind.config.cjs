module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.svelte'],
	theme: {
		extend: {
			fontFamily: {
				roboto: "'Roboto', sans-serif",
				teko: "'Teko', sans-serif"
			},
			screens: {
				xs: '460px',
				xxs: '380px'
			}
		}
	}
};
