module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'brand-pink': '#FFE6FF',
        'brand-purple': '#110011',
        'sidenav': '#FFE4DE'
      },
      backgroundImage: theme => ({
        'services': "url('/images/services.jpg')",
        'testimonial': "url('/images/tower.jpg')"
      })
    },
  },
  fontFamily: {
    'heading': 'Proza Libre',
    'body': 'Open Sans'
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
