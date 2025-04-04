const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

const config = {
	plugins: {
	    tailwindcss: {},
	    autoprefixer: {},
	    ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {})
	}
};

module.exports = config;
